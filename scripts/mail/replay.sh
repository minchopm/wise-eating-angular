#!/usr/bin/env bash
#
# Deliver mail that was received but never forwarded.
#
#     MAIL_DOMAIN=example.com bash scripts/mail/replay.sh
#
# There is one window where this is needed and it catches everybody: between
# provisioning and clicking the confirmation link, SES accepts mail and stores
# it, and the forwarder fails on every message because the destination is not
# yet allowed to receive. Nothing is lost — the raw messages are in S3 — but
# nothing arrives either, and SES does not retry once the address is
# confirmed.
#
# This walks the bucket and invokes the forwarder for each object, which is
# the same thing SES would have done. Re-running it re-sends, so check the
# inbox before a second pass.
set -euo pipefail

cyan() { printf '\033[36m▸\033[0m %s\n' "$1"; }
fail() { printf '\033[31m✗\033[0m %s\n' "$1" >&2; exit 1; }

HERE="$(cd "$(dirname "$0")" && pwd)"
[[ -f "${HERE}/../../.env" ]] && { set -a; . "${HERE}/../../.env"; set +a; }

DOMAIN="${MAIL_DOMAIN:-${SITE_DOMAIN:-}}"; DOMAIN="${DOMAIN#www.}"
[[ -n "$DOMAIN" ]] || fail "set MAIL_DOMAIN (or SITE_DOMAIN in .env)"

export AWS_DEFAULT_REGION="${MAIL_REGION:-us-east-1}"
if [[ -n "${NG_DEPLOY_AWS_ACCESS_KEY_ID:-}" ]]; then
  export AWS_ACCESS_KEY_ID="$NG_DEPLOY_AWS_ACCESS_KEY_ID"
  export AWS_SECRET_ACCESS_KEY="$NG_DEPLOY_AWS_SECRET_ACCESS_KEY"
fi

SLUG="${DOMAIN//./-}"
BUCKET="mail.${DOMAIN}"
PREFIX="inbox/"
FUNCTION="${SLUG}-mail-forwarder"

# Refuse to run while the destination is still unconfirmed, rather than
# burning through the backlog against an error.
TO=$(aws lambda get-function-configuration --function-name "$FUNCTION" \
  --query 'Environment.Variables.FORWARD_TO' --output text)
STATE=$(aws ses get-identity-verification-attributes --identities "$TO" \
  --query "VerificationAttributes.\"${TO}\".VerificationStatus" --output text 2>/dev/null || echo None)
[[ "$STATE" == "Success" ]] || fail "${TO} is '${STATE}' — click the confirmation link first, then re-run"

mapfile -t KEYS < <(aws s3api list-objects-v2 --bucket "$BUCKET" --prefix "$PREFIX" \
  --query 'Contents[].Key' --output text 2>/dev/null | tr '\t' '\n' | grep -v '^$' || true)
[[ ${#KEYS[@]} -gt 0 ]] || { cyan "nothing waiting in s3://${BUCKET}/${PREFIX}"; exit 0; }

cyan "replaying ${#KEYS[@]} message(s) to ${TO}"
for key in "${KEYS[@]}"; do
  id="${key#"$PREFIX"}"
  # SES's own notification lands here too and is not a message to forward.
  [[ "$id" == AMAZON_SES_SETUP_NOTIFICATION ]] && { cyan "  skip  ${id}"; continue; }

  # The forwarder only reads messageId out of the event, so this is the whole
  # shape it needs.
  printf '{"Records":[{"ses":{"mail":{"messageId":"%s"}}}]}' "$id" > "/tmp/${SLUG}-replay.json"
  OUT=$(aws lambda invoke --function-name "$FUNCTION" \
    --cli-binary-format raw-in-base64-out \
    --payload "file:///tmp/${SLUG}-replay.json" /dev/stdout --query 'FunctionError' --output text 2>/dev/null || echo Failed)
  if [[ "$OUT" == "None" ]]; then cyan "  sent  ${id}"; else cyan "  FAILED ${id} — check CloudWatch"; fi
done

#!/usr/bin/env bash
#
# Give a domain a mailbox, without running a mail server.
#
#     MAIL_DOMAIN=example.com FORWARD_TO=you@gmail.com bash scripts/mail/provision.sh
#
# Nothing in here is specific to this project — see README.md for what it
# builds and how to point it at another domain. Safe to re-run.
set -euo pipefail

cyan() { printf '\033[36m▸\033[0m %s\n' "$1"; }
warn() { printf '\033[33m!\033[0m %s\n' "$1"; }
fail() { printf '\033[31m✗\033[0m %s\n' "$1" >&2; exit 1; }

HERE="$(cd "$(dirname "$0")" && pwd)"

# Look for a .env beside the script, one level up, and two — so this works
# both at scripts/mail/ inside a project and as a standalone kit copied
# somewhere on its own. First one found wins; command-line variables still
# override it, because `set -a` only exports, it does not overwrite what the
# caller already set... it does, so the caller's values are re-read after.
CALLER_DOMAIN="${MAIL_DOMAIN:-}"; CALLER_TO="${FORWARD_TO:-}"
for candidate in "${HERE}/.env" "${HERE}/../.env" "${HERE}/../../.env"; do
  [[ -f "$candidate" ]] && { set -a; . "$candidate"; set +a; break; }
done
[[ -n "$CALLER_DOMAIN" ]] && MAIL_DOMAIN="$CALLER_DOMAIN"
[[ -n "$CALLER_TO" ]] && FORWARD_TO="$CALLER_TO"

# ── what to build it for ──────────────────────────────────────────────────
#
# Both can come from .env, the environment or the command line, so the same
# script serves this repo and the next one without being edited.
DOMAIN="${MAIL_DOMAIN:-${SITE_DOMAIN:-}}"
DOMAIN="${DOMAIN#www.}"
[[ -n "$DOMAIN" ]] || fail "set MAIL_DOMAIN (or SITE_DOMAIN in .env)"
: "${FORWARD_TO:?set FORWARD_TO — the inbox that should receive the mail}"

# The addresses the domain answers to.
#
# An explicit list rather than a catch-all: a catch-all on a public domain
# collects every address a dictionary attack tries and forwards all of it.
# postmaster@ and abuse@ are here because RFC 2142 expects any domain that
# sends mail to answer on them, and because a blocklist operator with a
# complaint needs somewhere to send it. Override with MAIL_ALIASES.
read -r -a LOCALS <<< "${MAIL_ALIASES:-support hello privacy legal security press postmaster abuse}"

# SES can only *receive* in a subset of regions. us-east-1 has always been in
# it. Whatever region the website's bucket is in is unrelated and stays there.
REGION="${MAIL_REGION:-us-east-1}"
export AWS_DEFAULT_REGION="$REGION"

if [[ -n "${NG_DEPLOY_AWS_ACCESS_KEY_ID:-}" ]]; then
  export AWS_ACCESS_KEY_ID="$NG_DEPLOY_AWS_ACCESS_KEY_ID"
  export AWS_SECRET_ACCESS_KEY="$NG_DEPLOY_AWS_SECRET_ACCESS_KEY"
fi

SLUG="${DOMAIN//./-}"
BUCKET="mail.${DOMAIN}"
PREFIX="inbox/"
ROLE="${SLUG}-mail-forwarder"
FUNCTION="${SLUG}-mail-forwarder"
# One rule *set* is active per region per account — not per domain. So the
# set is shared and each domain gets its own rule inside it. Which set that
# is gets decided below, from whatever is already active.
RULE="forward-${SLUG}"
FROM="forwarder@${DOMAIN}"

ALIASES=()
for local in "${LOCALS[@]}"; do ALIASES+=("${local}@${DOMAIN}"); done

ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
ZONE=$(aws route53 list-hosted-zones --query "HostedZones[?Name=='${DOMAIN}.'].Id" --output text | sed 's|/hostedzone/||')
[[ -n "$ZONE" ]] || fail "no Route 53 hosted zone for ${DOMAIN}"

# SES allows exactly one *active* receipt rule set per region per account.
# Activating a fresh one for every domain would silently take the mail away
# from the domain provisioned before it, which is a failure nobody notices
# until a customer says they never got a reply. So: join whatever is already
# active, and only create a set when there is nothing to join.
ACTIVE=$(aws ses describe-active-receipt-rule-set --query 'Metadata.Name' --output text 2>/dev/null || echo None)
if [[ "$ACTIVE" == "None" || -z "$ACTIVE" ]]; then
  RULE_SET="${MAIL_RULE_SET:-inbound}"
  ADOPTED=false
else
  RULE_SET="$ACTIVE"
  ADOPTED=true
fi

cyan "account ${ACCOUNT}, domain ${DOMAIN}, zone ${ZONE}, region ${REGION}"
$ADOPTED && cyan "joining the active rule set '${RULE_SET}' rather than replacing it"

# ── 1. the domain identity ────────────────────────────────────────────────
cyan "1/7  verifying ${DOMAIN} with SES"
TOKEN=$(aws ses verify-domain-identity --domain "$DOMAIN" --query VerificationToken --output text)
read -r -a DKIM <<< "$(aws ses verify-domain-dkim --domain "$DOMAIN" --query 'DkimTokens[]' --output text)"
[[ ${#DKIM[@]} -eq 3 ]] || fail "expected 3 DKIM tokens, got ${#DKIM[@]}"

# ── 2. DNS ────────────────────────────────────────────────────────────────
#
# MX points at the SES inbound endpoint. SPF authorises SES to send as us,
# which the forwarder depends on. DMARC starts at p=none: it asks for reports
# without asking anyone to reject on our behalf, which is the right setting
# until the reports show the domain's mail is signing cleanly.
#
# UPSERT rather than CREATE throughout, so a re-run repairs rather than fails.
cyan "2/7  writing DNS records"
{
  echo '{"Comment":"mail for '"${DOMAIN}"'","Changes":['
  echo '{"Action":"UPSERT","ResourceRecordSet":{"Name":"'"${DOMAIN}"'","Type":"MX","TTL":300,'
  echo '"ResourceRecords":[{"Value":"10 inbound-smtp.'"${REGION}"'.amazonaws.com"}]}},'
  echo '{"Action":"UPSERT","ResourceRecordSet":{"Name":"'"${DOMAIN}"'","Type":"TXT","TTL":300,'
  echo '"ResourceRecords":[{"Value":"\"v=spf1 include:amazonses.com ~all\""}]}},'
  echo '{"Action":"UPSERT","ResourceRecordSet":{"Name":"_dmarc.'"${DOMAIN}"'","Type":"TXT","TTL":300,'
  echo '"ResourceRecords":[{"Value":"\"v=DMARC1; p=none; rua=mailto:postmaster@'"${DOMAIN}"'\""}]}},'
  echo '{"Action":"UPSERT","ResourceRecordSet":{"Name":"_amazonses.'"${DOMAIN}"'","Type":"TXT","TTL":300,'
  echo '"ResourceRecords":[{"Value":"\"'"${TOKEN}"'\""}]}},'
  for i in 0 1 2; do
    printf '{"Action":"UPSERT","ResourceRecordSet":{"Name":"%s._domainkey.%s","Type":"CNAME","TTL":300,"ResourceRecords":[{"Value":"%s.dkim.amazonses.com"}]}}' \
      "${DKIM[$i]}" "${DOMAIN}" "${DKIM[$i]}"
    [[ $i -lt 2 ]] && echo ',' || echo ''
  done
  echo ']}'
} > "/tmp/${SLUG}-dns.json"

CHANGE=$(aws route53 change-resource-record-sets --hosted-zone-id "$ZONE" \
  --change-batch "file:///tmp/${SLUG}-dns.json" --query 'ChangeInfo.Id' --output text)
cyan "     change ${CHANGE} submitted"

# ── 3. the bucket the mail lands in ───────────────────────────────────────
cyan "3/7  bucket s3://${BUCKET}"
if ! aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
  if [[ "$REGION" == "us-east-1" ]]; then
    aws s3api create-bucket --bucket "$BUCKET" >/dev/null
  else
    aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
      --create-bucket-configuration "LocationConstraint=${REGION}" >/dev/null
  fi
  aws s3api put-public-access-block --bucket "$BUCKET" \
    --public-access-block-configuration \
    'BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true' >/dev/null
fi

# Mail is forwarded within seconds; the copy in S3 is a safety net for the
# case where the Lambda fails, not an archive. Thirty days is long enough to
# notice and short enough that the bucket is not a growing liability full of
# other people's correspondence.
aws s3api put-bucket-lifecycle-configuration --bucket "$BUCKET" --lifecycle-configuration '{
  "Rules":[{"ID":"expire-forwarded-mail","Status":"Enabled",
            "Filter":{"Prefix":"'"${PREFIX}"'"},"Expiration":{"Days":30}}]}' >/dev/null

aws s3api put-bucket-policy --bucket "$BUCKET" --policy '{
  "Version":"2012-10-17",
  "Statement":[{
    "Sid":"AllowSESPut","Effect":"Allow",
    "Principal":{"Service":"ses.amazonaws.com"},
    "Action":"s3:PutObject","Resource":"arn:aws:s3:::'"${BUCKET}"'/*",
    "Condition":{"StringEquals":{"AWS:SourceAccount":"'"${ACCOUNT}"'"}}
  }]}' >/dev/null

# ── 4. the role ───────────────────────────────────────────────────────────
cyan "4/7  role ${ROLE}"
if ! aws iam get-role --role-name "$ROLE" >/dev/null 2>&1; then
  aws iam create-role --role-name "$ROLE" --assume-role-policy-document '{
    "Version":"2012-10-17",
    "Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},
                  "Action":"sts:AssumeRole"}]}' >/dev/null
  aws iam attach-role-policy --role-name "$ROLE" \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole >/dev/null
  # IAM is eventually consistent and Lambda will refuse a role it cannot see
  # yet. This wait is not superstition; without it the first run fails.
  cyan "     waiting for the role to propagate"
  sleep 12
fi

cat > "/tmp/${SLUG}-role.json" <<POLICY
{"Version":"2012-10-17","Statement":[
  {"Effect":"Allow","Action":"s3:GetObject","Resource":"arn:aws:s3:::${BUCKET}/*"},
  {"Effect":"Allow","Action":["ses:SendRawEmail"],"Resource":"*"}]}
POLICY
aws iam put-role-policy --role-name "$ROLE" --policy-name forward \
  --policy-document "file:///tmp/${SLUG}-role.json" >/dev/null
ROLE_ARN=$(aws iam get-role --role-name "$ROLE" --query Role.Arn --output text)

# ── 5. the function ───────────────────────────────────────────────────────
cyan "5/7  function ${FUNCTION}"
rm -f "/tmp/${SLUG}-fn.zip"
(cd "$HERE" && zip -q "/tmp/${SLUG}-fn.zip" forwarder.mjs)

ENVVARS="Variables={MAIL_BUCKET=${BUCKET},MAIL_PREFIX=${PREFIX},FORWARD_TO=${FORWARD_TO},FORWARD_FROM=${FROM}}"
if aws lambda get-function --function-name "$FUNCTION" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FUNCTION" \
    --zip-file "fileb:///tmp/${SLUG}-fn.zip" >/dev/null
  aws lambda wait function-updated --function-name "$FUNCTION"
  aws lambda update-function-configuration --function-name "$FUNCTION" \
    --environment "$ENVVARS" >/dev/null
else
  aws lambda create-function --function-name "$FUNCTION" \
    --runtime nodejs20.x --role "$ROLE_ARN" --handler forwarder.handler \
    --timeout 30 --memory-size 256 \
    --zip-file "fileb:///tmp/${SLUG}-fn.zip" --environment "$ENVVARS" >/dev/null
  aws lambda wait function-active --function-name "$FUNCTION"
fi

aws lambda add-permission --function-name "$FUNCTION" --statement-id ses-invoke \
  --action lambda:InvokeFunction --principal ses.amazonaws.com \
  --source-account "$ACCOUNT" >/dev/null 2>&1 || true
FN_ARN=$(aws lambda get-function --function-name "$FUNCTION" --query Configuration.FunctionArn --output text)

# ── 6. the receipt rule ───────────────────────────────────────────────────
#
# The S3 action must come before the Lambda action: SES runs them in order,
# and the function reads the object the first one wrote.
cyan "6/7  receipt rule ${RULE_SET}/${RULE}"
aws ses create-receipt-rule-set --rule-set-name "$RULE_SET" >/dev/null 2>&1 || true
# Replace this domain's rule and leave every other domain's rule alone.
aws ses delete-receipt-rule --rule-set-name "$RULE_SET" --rule-name "$RULE" >/dev/null 2>&1 || true

RECIPIENTS=$(printf '"%s",' "${ALIASES[@]}" | sed 's/,$//')
aws ses create-receipt-rule --rule-set-name "$RULE_SET" --rule '{
  "Name":"'"${RULE}"'","Enabled":true,"TlsPolicy":"Optional","ScanEnabled":true,
  "Recipients":['"${RECIPIENTS}"'],
  "Actions":[
    {"S3Action":{"BucketName":"'"${BUCKET}"'","ObjectKeyPrefix":"'"${PREFIX}"'"}},
    {"LambdaAction":{"FunctionArn":"'"${FN_ARN}"'","InvocationType":"Event"}}
  ]}' >/dev/null
$ADOPTED || aws ses set-active-receipt-rule-set --rule-set-name "$RULE_SET" >/dev/null

# ── 7. the destination ────────────────────────────────────────────────────
#
# SES starts every account in a sandbox where it will only send to addresses
# that have confirmed they want mail. That applies to the forwarding
# destination too. It is one click, once, and nothing is delivered until it
# happens — though nothing is lost either, see replay.sh.
cyan "7/7  asking ${FORWARD_TO} to confirm"
STATE=$(aws ses get-identity-verification-attributes --identities "$FORWARD_TO" \
  --query "VerificationAttributes.\"${FORWARD_TO}\".VerificationStatus" --output text 2>/dev/null || echo None)
if [[ "$STATE" == "Success" ]]; then
  cyan "     already confirmed"
else
  aws ses verify-email-identity --email-address "$FORWARD_TO"
  warn "a confirmation mail is on its way to ${FORWARD_TO}"
  warn "nothing is delivered until it is clicked — run replay.sh afterwards for anything that arrived meanwhile"
fi

echo
cyan "Addresses now accepted:"
printf '     %s\n' "${ALIASES[@]}"
echo
cyan "All of it forwards to ${FORWARD_TO}."
cyan "DNS needs a few minutes; SES marks the domain verified some minutes after that."

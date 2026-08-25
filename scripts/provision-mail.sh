#!/usr/bin/env bash
#
# Give wise-eating.com a mailbox, without running a mail server.
#
#     bash scripts/provision-mail.sh
#
# Mail to support@ and its siblings is received by SES, written to a private
# S3 bucket, and forwarded to a real inbox by a small Lambda. Everything lives
# in the account that already owns the domain and the CloudFront distribution,
# so there is no third-party service holding the company's mail and no moving
# the DNS zone somewhere else to get it.
#
# Why not "just add MX records": an MX record only names the server that
# accepts mail for a domain. Something still has to be listening. This script
# is that something.
#
# Safe to re-run. Every step checks for what it would create.
set -euo pipefail

cyan() { printf '\033[36m▸\033[0m %s\n' "$1"; }
fail() { printf '\033[31m✗\033[0m %s\n' "$1" >&2; exit 1; }

cd "$(dirname "$0")/.."
[[ -f .env ]] || fail "no .env"
set -a; . ./.env; set +a

: "${FORWARD_TO:?set FORWARD_TO in .env — the inbox that should receive the mail}"

export AWS_ACCESS_KEY_ID="${NG_DEPLOY_AWS_ACCESS_KEY_ID}"
export AWS_SECRET_ACCESS_KEY="${NG_DEPLOY_AWS_SECRET_ACCESS_KEY}"

# SES can only *receive* in a subset of regions, and us-east-1 is the one that
# has always been in it. The website's bucket is in us-east-2; that is
# unrelated and stays where it is.
export AWS_DEFAULT_REGION=us-east-1
REGION=us-east-1

DOMAIN=wise-eating.com
BUCKET="mail.${DOMAIN}"
PREFIX="inbox/"
ROLE=wise-eating-mail-forwarder
FUNCTION=wise-eating-mail-forwarder
RULE_SET=wise-eating
RULE=forward-to-inbox
FROM="forwarder@${DOMAIN}"

# The addresses the domain answers to.
#
# An explicit list rather than a catch-all: a catch-all on a public domain
# collects every dictionary-attack address a spammer tries, and forwards all
# of it. postmaster@ and abuse@ are here because RFC 2142 says any domain that
# sends mail should answer on them, and because a blocklist operator with a
# complaint should have somewhere to send it.
ALIASES=(
  "support@${DOMAIN}"
  "hello@${DOMAIN}"
  "privacy@${DOMAIN}"
  "legal@${DOMAIN}"
  "security@${DOMAIN}"
  "press@${DOMAIN}"
  "postmaster@${DOMAIN}"
  "abuse@${DOMAIN}"
  "mincho@${DOMAIN}"
)

ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
ZONE=$(aws route53 list-hosted-zones --query "HostedZones[?Name=='${DOMAIN}.'].Id" --output text | sed 's|/hostedzone/||')
[[ -n "$ZONE" ]] || fail "no Route 53 hosted zone for ${DOMAIN}"
cyan "account ${ACCOUNT}, zone ${ZONE}, region ${REGION}"

# ── 1. the domain identity ────────────────────────────────────────────────
cyan "1/7  verifying ${DOMAIN} with SES"
TOKEN=$(aws ses verify-domain-identity --domain "$DOMAIN" --query VerificationToken --output text)
mapfile -t DKIM < <(aws ses verify-domain-dkim --domain "$DOMAIN" --query 'DkimTokens[]' --output text | tr '\t' '\n')
[[ ${#DKIM[@]} -eq 3 ]] || fail "expected 3 DKIM tokens, got ${#DKIM[@]}"

# ── 2. DNS ────────────────────────────────────────────────────────────────
#
# MX points at the SES inbound endpoint. SPF authorises SES to send as us,
# which the forwarder depends on. DMARC starts at p=none: it asks for reports
# without asking anyone to reject on our behalf, which is the right setting
# until the reports show the domain's mail is signing cleanly.
cyan "2/7  writing DNS records"
{
  echo '{"Comment":"mail for wise-eating.com","Changes":['
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
} > /tmp/wise-mail-dns.json

CHANGE=$(aws route53 change-resource-record-sets --hosted-zone-id "$ZONE" \
  --change-batch "file:///tmp/wise-mail-dns.json" --query 'ChangeInfo.Id' --output text)
cyan "     change ${CHANGE} submitted"

# ── 3. the bucket the mail lands in ───────────────────────────────────────
cyan "3/7  bucket s3://${BUCKET}"
if ! aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" >/dev/null
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
  cyan "     waiting for the role to propagate"
  sleep 12
fi

cat > /tmp/wise-mail-role.json <<POLICY
{"Version":"2012-10-17","Statement":[
  {"Effect":"Allow","Action":"s3:GetObject","Resource":"arn:aws:s3:::${BUCKET}/*"},
  {"Effect":"Allow","Action":["ses:SendRawEmail"],"Resource":"*"}]}
POLICY
aws iam put-role-policy --role-name "$ROLE" --policy-name forward \
  --policy-document file:///tmp/wise-mail-role.json >/dev/null
ROLE_ARN=$(aws iam get-role --role-name "$ROLE" --query Role.Arn --output text)

# ── 5. the function ───────────────────────────────────────────────────────
cyan "5/7  function ${FUNCTION}"
rm -f /tmp/wise-mail.zip
(cd scripts/mail && zip -q /tmp/wise-mail.zip forwarder.mjs)

ENVVARS="Variables={MAIL_BUCKET=${BUCKET},MAIL_PREFIX=${PREFIX},FORWARD_TO=${FORWARD_TO},FORWARD_FROM=${FROM}}"
if aws lambda get-function --function-name "$FUNCTION" >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FUNCTION" \
    --zip-file fileb:///tmp/wise-mail.zip >/dev/null
  aws lambda wait function-updated --function-name "$FUNCTION"
  aws lambda update-function-configuration --function-name "$FUNCTION" \
    --environment "$ENVVARS" >/dev/null
else
  aws lambda create-function --function-name "$FUNCTION" \
    --runtime nodejs20.x --role "$ROLE_ARN" --handler forwarder.handler \
    --timeout 30 --memory-size 256 \
    --zip-file fileb:///tmp/wise-mail.zip --environment "$ENVVARS" >/dev/null
  aws lambda wait function-active --function-name "$FUNCTION"
fi

aws lambda add-permission --function-name "$FUNCTION" --statement-id ses-invoke \
  --action lambda:InvokeFunction --principal ses.amazonaws.com \
  --source-account "$ACCOUNT" >/dev/null 2>&1 || true
FN_ARN=$(aws lambda get-function --function-name "$FUNCTION" --query Configuration.FunctionArn --output text)

# ── 6. the receipt rule ───────────────────────────────────────────────────
cyan "6/7  receipt rule ${RULE_SET}/${RULE}"
aws ses create-receipt-rule-set --rule-set-name "$RULE_SET" >/dev/null 2>&1 || true
aws ses delete-receipt-rule --rule-set-name "$RULE_SET" --rule-name "$RULE" >/dev/null 2>&1 || true

RECIPIENTS=$(printf '"%s",' "${ALIASES[@]}" | sed 's/,$//')
aws ses create-receipt-rule --rule-set-name "$RULE_SET" --rule '{
  "Name":"'"${RULE}"'","Enabled":true,"TlsPolicy":"Optional","ScanEnabled":true,
  "Recipients":['"${RECIPIENTS}"'],
  "Actions":[
    {"S3Action":{"BucketName":"'"${BUCKET}"'","ObjectKeyPrefix":"'"${PREFIX}"'"}},
    {"LambdaAction":{"FunctionArn":"'"${FN_ARN}"'","InvocationType":"Event"}}
  ]}' >/dev/null
aws ses set-active-receipt-rule-set --rule-set-name "$RULE_SET" >/dev/null

# ── 7. the destination ────────────────────────────────────────────────────
#
# SES starts every account in a sandbox where it will only send to addresses
# that have confirmed they want mail. That applies to the forwarding
# destination too, so this asks for the confirmation. It is one click, once.
cyan "7/7  asking ${FORWARD_TO} to confirm"
STATE=$(aws ses get-identity-verification-attributes --identities "$FORWARD_TO" \
  --query "VerificationAttributes.\"${FORWARD_TO}\".VerificationStatus" --output text 2>/dev/null || echo None)
if [[ "$STATE" != "Success" ]]; then
  aws ses verify-email-identity --email-address "$FORWARD_TO"
  cyan "     a confirmation mail is on its way — nothing forwards until it is clicked"
else
  cyan "     already confirmed"
fi

echo
cyan "Addresses now accepted:"
printf '     %s\n' "${ALIASES[@]}"
echo
cyan "All of it forwards to ${FORWARD_TO}."
cyan "DNS needs a few minutes; SES marks the domain verified some minutes after that."

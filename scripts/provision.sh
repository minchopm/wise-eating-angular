#!/usr/bin/env bash
#
# Bring the CloudFront distribution in line with what a prerendered site needs.
#
# The bucket, certificate and distribution already exist — this is not a
# create-from-nothing script. What it fixes is the two things that were set up
# for a single-page app and are wrong for a prerendered one:
#
#   1. There is no URL rewrite, so /pricing asks S3 for the key "pricing",
#      which does not exist. The site only worked because of (2).
#
#   2. 403 and 404 are both answered with /index.html and a 200. That is the
#      classic SPA fallback, and on a prerendered site it is actively harmful:
#      every mistyped URL returns the home page with a success code, so search
#      engines index an unbounded number of duplicate pages and a genuinely
#      missing page never reports itself as missing.
#
# After this script: a CloudFront function rewrites extensionless paths to
# their prerendered index.html, and 403/404 both serve the real /404.html with
# a real 404. It also attaches a security-headers policy if there is none.
#
# Idempotent. Run it again and it re-asserts rather than duplicating.
#
#   ./scripts/provision.sh            apply
#   DRY_RUN=1 ./scripts/provision.sh  print what it would change
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"
DRY_RUN="${DRY_RUN:-0}"

log()  { printf '\033[36m▸\033[0m %s\n' "$*"; }
skip() { printf '\033[90m  already there: %s\033[0m\n' "$*"; }
warn() { printf '\033[33m!\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[31m✗\033[0m %s\n' "$*" >&2; exit 1; }

[[ -f "$ENV_FILE" ]] || die "No env file at $ENV_FILE."
set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

AWS_BIN="${AWS_BIN:-$(command -v aws || true)}"
[[ -n "$AWS_BIN" ]] || die "AWS CLI not found."

SITE_DOMAIN="${SITE_DOMAIN:-${NG_DEPLOY_AWS_BUCKET:-}}"
SLUG="${SITE_DOMAIN//./-}"

aws_do() {
  if [[ "$DRY_RUN" == "1" ]]; then
    printf '\033[90m  would run: aws %s\033[0m\n' "$*"
    return 0
  fi
  aws_read "$@"
}
# Reads never change anything, so they run even under DRY_RUN — otherwise a dry
# run cannot tell what already exists and prints a fiction.
aws_read() {
  AWS_ACCESS_KEY_ID="$NG_DEPLOY_AWS_ACCESS_KEY_ID" \
  AWS_SECRET_ACCESS_KEY="$NG_DEPLOY_AWS_SECRET_ACCESS_KEY" \
  AWS_DEFAULT_REGION="${NG_DEPLOY_AWS_REGION:-us-east-1}" \
    "$AWS_BIN" "$@"
}

ACCOUNT="$(aws_read sts get-caller-identity --query Account --output text)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# ------------------------------------------------------------- distribution

DIST="${CLOUDFRONT_DISTRIBUTION_ID:-}"
if [[ -z "$DIST" ]]; then
  DIST="$(aws_read cloudfront list-distributions \
    --query "DistributionList.Items[?contains(Aliases.Items, \`$SITE_DOMAIN\`)].Id | [0]" \
    --output text)"
fi
[[ -n "$DIST" && "$DIST" != "None" ]] || die "No CloudFront distribution for $SITE_DOMAIN."
log "Distribution: $DIST"

# ---------------------------------------------------------------- function

FN_NAME="$SLUG-router"
cat > "$TMP/router.js" <<'JS'
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // The site is prerendered into directories: /pricing is /pricing/index.html
  // on S3. CloudFront's S3 REST origin does no index-document resolution of
  // its own, so a path with no file extension gets one here.
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (uri.lastIndexOf('.') <= uri.lastIndexOf('/')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
JS

if aws_read cloudfront describe-function --name "$FN_NAME" >/dev/null 2>&1; then
  skip "function $FN_NAME"
  if [[ "$DRY_RUN" != "1" ]]; then
    # Re-assert the code, in case this script changed it.
    etag="$(aws_read cloudfront describe-function --name "$FN_NAME" --query ETag --output text)"
    aws_read cloudfront update-function --name "$FN_NAME" --if-match "$etag" \
      --function-config '{"Comment":"Rewrites extensionless paths to the prerendered index.html","Runtime":"cloudfront-js-2.0"}' \
      --function-code "fileb://$TMP/router.js" >/dev/null
    etag="$(aws_read cloudfront describe-function --name "$FN_NAME" --query ETag --output text)"
    aws_read cloudfront publish-function --name "$FN_NAME" --if-match "$etag" >/dev/null
    log "Function republished."
  fi
else
  log "Creating and publishing the URL-rewrite function…"
  aws_do cloudfront create-function --name "$FN_NAME" \
    --function-config '{"Comment":"Rewrites extensionless paths to the prerendered index.html","Runtime":"cloudfront-js-2.0"}' \
    --function-code "fileb://$TMP/router.js" >/dev/null
  if [[ "$DRY_RUN" != "1" ]]; then
    etag="$(aws_read cloudfront describe-function --name "$FN_NAME" --query ETag --output text)"
    aws_do cloudfront publish-function --name "$FN_NAME" --if-match "$etag" >/dev/null
  fi
fi
FN_ARN="arn:aws:cloudfront::$ACCOUNT:function/$FN_NAME"

# ----------------------------------------------------------- header policy

# Everything the site loads is first-party except Google's analytics and ads,
# which are named explicitly rather than being allowed by a wildcard. The two
# 'unsafe-inline' entries are unavoidable and narrow: Angular writes style
# attributes for the scroll-driven animation, and the structured data is an
# inline script in every prerendered page.
CSP="default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; \
img-src 'self' data: https://*.google-analytics.com https://*.googleapis.com https://*.g.doubleclick.net https://*.googlesyndication.com; \
font-src 'self'; style-src 'self' 'unsafe-inline'; \
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com; \
connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net; \
frame-src https://googleads.g.doubleclick.net https://*.googlesyndication.com; \
worker-src 'self' blob:; manifest-src 'self'; media-src 'self'; upgrade-insecure-requests"

HEADERS_NAME="$SLUG-security-headers"
HEADERS="$(aws_read cloudfront list-response-headers-policies --type custom \
  --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='$HEADERS_NAME'].ResponseHeadersPolicy.Id | [0]" \
  --output text 2>/dev/null || true)"

if [[ -n "$HEADERS" && "$HEADERS" != "None" ]]; then
  skip "response headers policy $HEADERS"
else
  log "Creating the response headers policy…"
  cat > "$TMP/headers.json" <<JSON
{
  "Name": "$HEADERS_NAME",
  "Comment": "Security headers for $SITE_DOMAIN",
  "SecurityHeadersConfig": {
    "StrictTransportSecurity": { "Override": true, "AccessControlMaxAgeSec": 63072000, "IncludeSubdomains": false, "Preload": false },
    "ContentTypeOptions": { "Override": true },
    "FrameOptions": { "Override": true, "FrameOption": "DENY" },
    "ReferrerPolicy": { "Override": true, "ReferrerPolicy": "strict-origin-when-cross-origin" },
    "ContentSecurityPolicy": { "Override": true, "ContentSecurityPolicy": "$CSP" }
  },
  "CustomHeadersConfig": { "Quantity": 1, "Items": [
    { "Header": "Permissions-Policy", "Value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()", "Override": true } ]}
}
JSON
  HEADERS="$(aws_do cloudfront create-response-headers-policy \
    --response-headers-policy-config "file://$TMP/headers.json" \
    --query 'ResponseHeadersPolicy.Id' --output text)"
fi
log "Response headers policy: $HEADERS"

# --------------------------------------------------- update the distribution

aws_read cloudfront get-distribution-config --id "$DIST" --output json > "$TMP/current.json"
ETAG="$(python3 -c "import json;print(json.load(open('$TMP/current.json'))['ETag'])")"

python3 - "$TMP" "$FN_ARN" "$HEADERS" <<'PY'
import json, sys

tmp, fn_arn, headers_id = sys.argv[1:4]
config = json.load(open(tmp + '/current.json'))['DistributionConfig']
behaviour = config['DefaultCacheBehavior']
changes = []

# 1. The URL rewrite. Without it every extensionless path is a miss.
existing = behaviour.get('FunctionAssociations', {}).get('Items', [])
if not any(item.get('FunctionARN') == fn_arn for item in existing):
    behaviour['FunctionAssociations'] = {
        'Quantity': 1,
        'Items': [{'FunctionARN': fn_arn, 'EventType': 'viewer-request'}],
    }
    changes.append('attach the router function')

# 2. Real 404s. Both codes map to the prerendered 404 page: with an S3 REST
#    origin and a read-only bucket policy, a missing key comes back as 403
#    rather than 404, so leaving 403 alone would leave most misses unhandled.
wanted = [
    {'ErrorCode': 403, 'ResponsePagePath': '/404.html', 'ResponseCode': '404', 'ErrorCachingMinTTL': 10},
    {'ErrorCode': 404, 'ResponsePagePath': '/404.html', 'ResponseCode': '404', 'ErrorCachingMinTTL': 10},
]
if config.get('CustomErrorResponses', {}).get('Items') != wanted:
    config['CustomErrorResponses'] = {'Quantity': len(wanted), 'Items': wanted}
    changes.append('answer 403/404 with the real /404.html and a 404 status')

# 3. Security headers, only if nothing is attached — an existing policy was
#    chosen deliberately and is not ours to replace.
if not behaviour.get('ResponseHeadersPolicyId'):
    behaviour['ResponseHeadersPolicyId'] = headers_id
    changes.append('attach the security headers policy')

if not behaviour.get('Compress'):
    behaviour['Compress'] = True
    changes.append('enable compression')

json.dump(config, open(tmp + '/new.json', 'w'), indent=2)
open(tmp + '/changes.txt', 'w').write('\n'.join(changes))
PY

if [[ ! -s "$TMP/changes.txt" ]]; then
  log "Distribution already configured correctly. Nothing to do."
else
  log "Changes to apply:"
  sed 's/^/    · /' "$TMP/changes.txt"

  if [[ "$DRY_RUN" == "1" ]]; then
    printf '\033[90m  would run: aws cloudfront update-distribution --id %s\033[0m\n' "$DIST"
  else
    aws_read cloudfront update-distribution --id "$DIST" --if-match "$ETAG" \
      --distribution-config "file://$TMP/new.json" --query 'Distribution.Status' --output text
    log "Submitted. CloudFront takes a few minutes to deploy the change."
  fi
fi

cat <<SUMMARY

  Distribution  $DIST
  Function      $FN_NAME
  Headers       $HEADERS
  Serving       https://$SITE_DOMAIN

  Put CLOUDFRONT_DISTRIBUTION_ID=$DIST in .env to skip the alias lookup
  on every deploy. Then: npm run deploy

SUMMARY

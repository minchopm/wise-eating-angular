#!/usr/bin/env bash
#
# Build the site, publish it to S3 with correct cache headers, and invalidate
# CloudFront.
#
# This replaces `ng deploy` (@jefiozie/ngx-aws-deploy), which uploaded every
# object with one blanket Cache-Control and could not invalidate CloudFront —
# so a deploy either served stale HTML or gave up long-term caching on hashed
# assets. Here the two are separated: fingerprinted bundles are immutable for a
# year, HTML is never cached, and the CDN is invalidated at the end.
#
# Unlike the old setup this site is prerendered rather than a SPA — every route
# is a real HTML file on disk — so there is no list of routes to upload
# index.html under. A CloudFront function rewrites /pricing to
# /pricing/index.html instead; scripts/provision.sh installs it.
#
#   ./scripts/deploy.sh                   build, upload, invalidate
#   DRY_RUN=1 ./scripts/deploy.sh         print every AWS call, change nothing
#   SKIP_BUILD=1 ./scripts/deploy.sh      reuse the existing dist/
#   INVALIDATE_ONLY=1 ./scripts/deploy.sh just bust the CDN cache
#   PRUNE=1 ./scripts/deploy.sh           also delete bucket objects not in dist/
#   NO_WAIT=1 ./scripts/deploy.sh         return without waiting for the CDN
#   ALLOW_NO_CLOUDFRONT=1 ./scripts/...   tolerate having no distribution
#
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT_DIR/.env}"
DRY_RUN="${DRY_RUN:-0}"
SKIP_BUILD="${SKIP_BUILD:-0}"
PRUNE="${PRUNE:-0}"
INVALIDATE_ONLY="${INVALIDATE_ONLY:-0}"
NO_WAIT="${NO_WAIT:-0}"
ALLOW_NO_CLOUDFRONT="${ALLOW_NO_CLOUDFRONT:-0}"

log()  { printf '\033[36m▸\033[0m %s\n' "$*"; }
warn() { printf '\033[33m!\033[0m %s\n' "$*" >&2; }
die()  { printf '\033[31m✗\033[0m %s\n' "$*" >&2; exit 1; }

# Every AWS call goes through here, so DRY_RUN covers all of them by
# construction rather than by remembering to guard each one.
aws_do() {
  if [[ "$DRY_RUN" == "1" ]]; then
    printf '\033[90m  would run: aws %s\033[0m\n' "$*"
    return 0
  fi
  AWS_ACCESS_KEY_ID="$NG_DEPLOY_AWS_ACCESS_KEY_ID" \
  AWS_SECRET_ACCESS_KEY="$NG_DEPLOY_AWS_SECRET_ACCESS_KEY" \
  AWS_DEFAULT_REGION="$NG_DEPLOY_AWS_REGION" \
    "$AWS_BIN" "$@"
}

# ---------------------------------------------------------------- environment

[[ -f "$ENV_FILE" ]] || die "No env file at $ENV_FILE. Copy .env.example to .env and fill it in."

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

ANGULAR_PROJECT="${ANGULAR_PROJECT:-wise-eating-web}"
DIST_DIR="${DIST_DIR:-$ROOT_DIR/dist/$ANGULAR_PROJECT/browser}"
SITE_DOMAIN="${SITE_DOMAIN:-${NG_DEPLOY_AWS_BUCKET:-}}"

for var in NG_DEPLOY_AWS_ACCESS_KEY_ID NG_DEPLOY_AWS_SECRET_ACCESS_KEY \
           NG_DEPLOY_AWS_BUCKET NG_DEPLOY_AWS_REGION; do
  [[ -n "${!var:-}" ]] || die "$var is required. Set it in $ENV_FILE."
done

NPM_BIN="${NPM_BIN:-$(command -v npm || true)}"
if [[ -z "$NPM_BIN" ]]; then
  for candidate in "$HOME/.nvm/versions/node/v22.21.1/bin/npm" \
                   "$HOME/.nvm/versions/node/v20.19.0/bin/npm" \
                   /opt/homebrew/bin/npm /usr/local/bin/npm; do
    [[ -x "$candidate" ]] && NPM_BIN="$candidate" && break
  done
fi
[[ -n "$NPM_BIN" ]] || die "npm not found. Set NPM_BIN to its path."

AWS_BIN="${AWS_BIN:-$(command -v aws || true)}"
if [[ -z "$AWS_BIN" ]]; then
  for candidate in /opt/homebrew/bin/aws /usr/local/bin/aws /usr/local/aws-cli/aws; do
    [[ -x "$candidate" ]] && AWS_BIN="$candidate" && break
  done
fi
[[ -n "$AWS_BIN" ]] || die "AWS CLI not found. brew install awscli, or set AWS_BIN."

# The canonical URL is compiled into every page from src/app/core/site.ts. If it
# disagrees with where we are deploying, every page ships a canonical tag
# pointing at a different host than the one serving it — which quietly wrecks
# indexing, and on the legal pages points Apple's reviewer somewhere else.
CANONICAL="$(sed -n "s|.*origin: 'https://\([^']*\)'.*|\1|p" \
  "$ROOT_DIR/src/app/core/site.ts" 2>/dev/null | head -1 || true)"
if [[ -n "$CANONICAL" && "$CANONICAL" != "$SITE_DOMAIN" ]]; then
  warn "Canonical host is '$CANONICAL' but you are deploying to '$SITE_DOMAIN'."
  warn "Fix SITE.origin in src/app/core/site.ts, or deploy to the other bucket."
fi

# ---------------------------------------------------------------------- build

if [[ "$INVALIDATE_ONLY" == "1" ]]; then
  log "INVALIDATE_ONLY=1 — skipping build and upload."
elif [[ "$SKIP_BUILD" == "1" ]]; then
  log "Skipping build (SKIP_BUILD=1)."
else
  log "Building $ANGULAR_PROJECT (production, prerendered)…"
  "$NPM_BIN" --prefix "$ROOT_DIR" run build
fi

if [[ "$INVALIDATE_ONLY" != "1" ]]; then

  [[ -d "$DIST_DIR" ]] || die "No build output at $DIST_DIR."
  [[ -f "$DIST_DIR/index.html" ]] || die "No index.html in $DIST_DIR."
  [[ -f "$DIST_DIR/404.html" ]] || warn "No 404.html — CloudFront will 404 on the 404."
  [[ -f "$DIST_DIR/sitemap.xml" ]] || warn "No sitemap.xml — did postbuild run?"

  # Long-term caching is applied to *.js/*.css on the assumption that every one
  # of them carries a content hash. Anything hand-dropped into public/ would not.
  if find "$ROOT_DIR/public" \( -name '*.js' -o -name '*.css' \) -print -quit 2>/dev/null | grep -q .; then
    warn "public/ contains .js or .css files. Those are not content-hashed, but"
    warn "they would be uploaded with a one-year immutable cache. Rename or move them."
  fi

  # A prerendered page carries its whole content — including the legal text an
  # App Store reviewer follows a link to. Shipping a build whose HTML never
  # rendered is the one failure this script can catch cheaply.
  pages="$(find "$DIST_DIR" -name 'index.html' | wc -l | tr -d ' ')"
  [[ "$pages" -ge 12 ]] || die "Only $pages prerendered pages in $DIST_DIR — expected at least 12. Build is incomplete."

  log "Publishing $(find "$DIST_DIR" -type f | wc -l | tr -d ' ') files ($pages pages) to s3://$NG_DEPLOY_AWS_BUCKET"

  # Three passes, because the right Cache-Control differs by file and S3 sets
  # it per object at upload time.
  IMMUTABLE="public,max-age=31536000,immutable"
  SHORT="public,max-age=86400"
  NEVER="no-cache,no-store,must-revalidate"

  sync_flags=(--only-show-errors)
  [[ "$PRUNE" == "1" ]] && sync_flags+=(--delete)

  # Bundles, fonts and hashed media all carry a content hash in the filename,
  # which is the only thing that makes a one-year promise safe to make.
  log "1/3  fingerprinted bundles, fonts and media → immutable, 1 year"
  aws_do s3 sync "$DIST_DIR" "s3://$NG_DEPLOY_AWS_BUCKET" \
    "${sync_flags[@]}" \
    --exclude "*" --include "*.js" --include "*.css" --include "media/*" \
    --cache-control "$IMMUTABLE"

  log "2/3  images, icons, robots and sitemap → 1 day"
  aws_do s3 sync "$DIST_DIR" "s3://$NG_DEPLOY_AWS_BUCKET" \
    "${sync_flags[@]}" \
    --exclude "*.js" --exclude "*.css" --exclude "*.html" --exclude "media/*" \
    --cache-control "$SHORT"

  # Every route is its own prerendered file, so this is a sync rather than a
  # list of hand-maintained keys. --delete is deliberately not applied here
  # even under PRUNE: a stale page is better than a missing one mid-deploy.
  log "3/3  prerendered HTML → never cached"
  aws_do s3 sync "$DIST_DIR" "s3://$NG_DEPLOY_AWS_BUCKET" \
    --only-show-errors \
    --exclude "*" --include "*.html" \
    --cache-control "$NEVER" --content-type "text/html; charset=utf-8"
fi

# ------------------------------------------------------------- invalidation

DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

if [[ -z "$DISTRIBUTION_ID" && "$DRY_RUN" != "1" ]]; then
  log "Looking up the CloudFront distribution by alias…"

  candidates=()
  for host in "$SITE_DOMAIN" "$CANONICAL" "$NG_DEPLOY_AWS_BUCKET"; do
    [[ -z "$host" ]] && continue
    bare="${host#www.}"
    candidates+=("$host" "$bare" "www.$bare")
  done

  seen=""
  for alias in "${candidates[@]}"; do
    [[ " $seen " == *" $alias "* ]] && continue
    seen="$seen $alias"
    found="$(aws_do cloudfront list-distributions \
      --query "DistributionList.Items[?contains(Aliases.Items, \`$alias\`)].Id | [0]" \
      --output text 2>/dev/null || true)"
    if [[ -n "$found" && "$found" != "None" ]]; then
      DISTRIBUTION_ID="$found"
      log "Matched alias $alias → $DISTRIBUTION_ID"
      break
    fi
  done
fi

if [[ -n "$DISTRIBUTION_ID" ]]; then
  log "Invalidating $DISTRIBUTION_ID (/*)…"

  if [[ "$DRY_RUN" == "1" ]]; then
    aws_do cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths '/*'
  else
    invalidation_id="$(aws_do cloudfront create-invalidation \
      --distribution-id "$DISTRIBUTION_ID" --paths '/*' \
      --query 'Invalidation.Id' --output text)"
    log "Invalidation $invalidation_id created."

    if [[ "$NO_WAIT" == "1" ]]; then
      log "Not waiting (NO_WAIT=1). It usually completes within a few minutes."
    else
      # Waiting means the command only returns once the new HTML is actually
      # being served — otherwise "deploy finished" is a lie for a few minutes.
      log "Waiting for it to reach every edge (a few minutes; NO_WAIT=1 skips)…"
      aws_do cloudfront wait invalidation-completed \
        --distribution-id "$DISTRIBUTION_ID" --id "$invalidation_id"
      log "Invalidation complete — the new build is live."
    fi
  fi

elif [[ "$DRY_RUN" == "1" ]]; then
  printf '\033[90m  would look up the distribution by alias, invalidate /* and wait\033[0m\n'
else
  warn "No CloudFront distribution matched any of:$seen"
  warn "The upload succeeded, but the CDN will keep serving the OLD HTML until"
  warn "it is invalidated — so the site will look unchanged."
  warn ""
  aws_do cloudfront list-distributions \
    --query 'DistributionList.Items[].{Id:Id,Aliases:join(`, `,Aliases.Items),Origin:Origins.Items[0].DomainName}' \
    --output table || true
  warn "Put the right Id in CLOUDFRONT_DISTRIBUTION_ID in $ENV_FILE, then re-run."
  # Deliberately fatal. A deploy that uploads but never invalidates looks like
  # a success and behaves like a no-op, which is the worst of both.
  [[ "$ALLOW_NO_CLOUDFRONT" == "1" ]] || die "Deploy incomplete: nothing was invalidated."
  warn "Continuing anyway (ALLOW_NO_CLOUDFRONT=1)."
fi

# --------------------------------------------------------------- IndexNow
#
# Bing's index feeds ChatGPT search and Copilot. Tell it about every page in
# the live sitemap, after the upload so the key file in public/ is already
# served. Never fatal: the site is deployed whether or not an engine answered.

if [[ "$INVALIDATE_ONLY" != "1" ]]; then
  if [[ "$DRY_RUN" == "1" ]]; then
    printf '\033[90m  would run: node tools/indexnow.mjs https://%s\033[0m\n' "$SITE_DOMAIN"
  else
    log "Submitting sitemap URLs to IndexNow…"
    node "$ROOT_DIR/tools/indexnow.mjs" "https://$SITE_DOMAIN" \
      || warn "IndexNow did not accept the submission; the deploy itself is complete."
  fi
fi

log "Done. https://$SITE_DOMAIN"

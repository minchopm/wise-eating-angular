# Mail for a domain, without running a mail server

`support@` on your own domain, forwarded to an inbox you already read. No
mailbox to maintain, no third party holding the company's mail, no moving the
DNS zone somewhere else to get a free forwarding tier.

Everything here is domain-agnostic. Copy this directory into another project,
set two variables, run it.

---

## Why an MX record is not enough

This is the assumption worth killing first, because it is the natural one and
it costs an afternoon.

An MX record only names **which server accepts mail** for a domain. It is a
signpost. Something still has to be standing where it points, listening on
port 25, and doing something with what arrives. A domain with an MX record
and nothing behind it is worse than a domain with no MX at all: instead of a
clean bounce, the sender gets a timeout.

So the job splits in two:

1. **Receive** — something that accepts SMTP for `@yourdomain.com`
2. **Deliver** — something that gets it into an inbox a human opens

`provision.sh` builds both.

---

## What gets built

```
mail to support@example.com
        │
        ▼
   SES inbound  ──────────►  s3://mail.example.com/inbox/<message-id>
   (receipt rule)                      │
        │                              │ reads
        └──────────────────────────────┤
                                       ▼
                              Lambda: forwarder.mjs
                                       │ SES SendRawEmail
                                       ▼
                             your real inbox
```

| Piece | Name | Why |
|---|---|---|
| SES domain identity | `example.com` | Proves the domain is yours; enables DKIM signing |
| Route 53 records | MX, SPF, DMARC, 3×DKIM, `_amazonses` | See [DNS](#the-dns-records) |
| S3 bucket | `mail.example.com` | Where SES writes the raw message; 30-day expiry |
| IAM role | `example-com-mail-forwarder` | `s3:GetObject` on that bucket, `ses:SendRawEmail` |
| Lambda | `example-com-mail-forwarder` | Rewrites and re-sends — see [forwarding](#why-forwarding-is-the-hard-part) |
| Receipt rule | `inbound` / `forward-example-com` | Which addresses are accepted, and what happens to them. The set is shared across domains; the rule is per domain |

Cost at any sane volume is rounding error: SES receiving is **$0.10 per 1,000
messages**, Lambda sits inside the free tier, S3 holds a few megabytes for
thirty days.

---

## Running it

```bash
MAIL_DOMAIN=example.com FORWARD_TO=you@gmail.com bash provision.sh
```

Both values also read from `.env`, which is where they belong — a forwarding
destination is usually a personal address and has no business in git.
`MAIL_DOMAIN` falls back to `SITE_DOMAIN` with any `www.` stripped, and
anything passed on the command line wins over the file.

The scripts look for a `.env` beside themselves, one level up, and two, so
they work the same whether this directory sits at `scripts/mail/` inside a
project or on its own as a copied kit. Paths below are written for the kit;
prefix them with `scripts/mail/` when it lives inside a repo.

| Variable | Default | |
|---|---|---|
| `MAIL_DOMAIN` | `SITE_DOMAIN` | The domain to receive mail for |
| `FORWARD_TO` | — | **Required.** The inbox everything lands in |
| `MAIL_ALIASES` | `support hello privacy legal security press postmaster abuse` | Local parts, space-separated |
| `MAIL_REGION` | `us-east-1` | Must be a region where SES can *receive* |

It is safe to re-run. Every DNS write is an UPSERT, every resource is checked
for before it is created, and the Lambda code is updated rather than
duplicated. Re-run it after editing `forwarder.mjs` to redeploy.

### Prerequisites

- The domain's DNS is in **Route 53**, in the same AWS account
- Credentials with Route 53, SES, S3, IAM and Lambda access
- `aws` CLI v2, `zip`, bash 4+

---

## The one manual step

**SES starts every account in a sandbox** that will only send to addresses
which have confirmed they want mail. That applies to your forwarding
destination. The script asks for the confirmation; you click the link AWS
sends. Once.

Until you click:

- mail to `support@` **is** received and **is** stored in S3
- the forwarder fails on every message
- **nothing reaches your inbox**

Nothing is lost, but nothing arrives either, and SES does not retry once the
address is confirmed. So after clicking:

```bash
MAIL_DOMAIN=example.com bash replay.sh
```

That walks the bucket and hands each stored message to the forwarder, which
is what SES would have done. It refuses to run while the destination is still
unconfirmed rather than burning the backlog against an error. Re-running
re-sends, so check the inbox before a second pass.

### Leaving the sandbox

You only need to if you want to forward to more than one destination, or to
send *outbound* mail from the domain. Request production access in the SES
console; it is a form and usually answered within a day. Forwarding to a
single confirmed address does not need it.

---

## Why forwarding is the hard part

Re-sending a message is one API call. Re-sending it so it arrives is not.

A forwarded message reaches the destination **from your servers** while still
claiming to be `From:` whoever wrote it. Two things break:

- **SPF** checks the envelope sender's domain against the sending IP. The
  original sender's SPF record does not list your SES IPs, so it fails.
- **DKIM** signs a body and a header set. Both changed on the way through, so
  the original signature no longer verifies.

Gmail treats a message that fails both as spam, or refuses it outright. This
is not a misconfiguration you can fix — it is what forwarding *is*.

`forwarder.mjs` does the standard thing:

| | |
|---|---|
| `From:` | rewritten to `forwarder@yourdomain.com` — a domain you control and DKIM-sign |
| display name | kept, as `"Jane Smith (via support@yourdomain.com)"`, so the inbox stays readable |
| `Reply-To:` | the original sender, so hitting reply still reaches them |
| stripped | `DKIM-Signature`, `Return-Path`, `Sender`, `Received-SPF`, `Authentication-Results`, `ARC-*` — all of which now describe a message that no longer exists |

Header unfolding matters more than it looks. A long header wraps across
several lines with leading whitespace, so splitting naively on newlines cuts
one header into pieces — and a wrapped `From:` is exactly the case that has
to survive.

---

## The DNS records

```
example.com.              MX     10 inbound-smtp.us-east-1.amazonaws.com
example.com.              TXT    "v=spf1 include:amazonses.com ~all"
_dmarc.example.com.       TXT    "v=DMARC1; p=none; rua=mailto:postmaster@example.com"
_amazonses.example.com.   TXT    "<verification token>"
<token>._domainkey...     CNAME  <token>.dkim.amazonses.com     ×3
```

**DMARC starts at `p=none` on purpose.** It asks for reports without asking
anyone to reject on your behalf. Move to `p=quarantine` once the reports show
the domain's mail signs cleanly — not before, or you will silently bin your
own mail.

**SPF is `~all`, not `-all`,** for the same reason: soft-fail while you are
still finding out what else sends as this domain.

If the domain already has an SPF record, **do not add a second one.** Two SPF
records is a permerror and every check fails. Merge:
`"v=spf1 include:amazonses.com include:_spf.google.com ~all"`.

---

## Aliases, and why not a catch-all

The default list is `support hello privacy legal security press postmaster
abuse`.

`postmaster@` and `abuse@` are there because **RFC 2142** expects any domain
that sends mail to answer on them, and because a blocklist operator with a
complaint about your domain needs somewhere to send it. A domain that bounces
`abuse@` looks abandoned.

A **catch-all** is deliberately not offered. On a public domain it collects
every address a dictionary attack tries — `admin@`, `info@`, `sales@`,
`a@`, `b@` — and forwards all of it into the inbox you actually read. The
explicit list is the whole spam filter and it costs nothing.

To change it, re-run with `MAIL_ALIASES="support billing careers"`.

---

## Which address goes on which page

Provisioning creates eight addresses. Using one of them for everything wastes
most of the point.

| Page | Address |
|---|---|
| Privacy Policy | `privacy@` |
| Terms of Service | `legal@` |
| Security disclosure, if you publish one | `security@` |
| Everything else — support, about, footer | `support@` |

Two reasons, and neither is about looking bigger than you are.

**Privacy requests and legal notices are not support tickets.** They arrive on
a deadline — a GDPR access request has a calendar attached to it — and they
are read by a different part of the brain than "how do I log a meal". Printing
the address that matches the page means the sorting has happened before the
message is written rather than after, and it costs nothing, because all eight
already receive.

**An address on a domain can be redirected; a legal document cannot easily be
reissued.** The address in a Privacy Policy is a commitment with a long life.
Pointing it at `privacy@yourdomain.com` means handing it to a lawyer, a
colleague or a shared inbox later is one line in `provision.sh` — the document
never changes.

### Say it in the structured data too

The site's `Organization` entity should carry named contact points, not just a
bare `email`, so a machine reading the page can route rather than guess:

```json
"contactPoint": [
  { "@type": "ContactPoint", "contactType": "customer support",
    "email": "support@example.com", "availableLanguage": ["en"] },
  { "@type": "ContactPoint", "contactType": "privacy",
    "email": "privacy@example.com" },
  { "@type": "ContactPoint", "contactType": "legal",
    "email": "legal@example.com" }
]
```

An assistant asked "how do I make a GDPR request to this company" then has an
answer that is not "email support and hope".

---

## Checking it works

```bash
# DNS
dig +short MX example.com
dig +short TXT example.com
dig +short TXT _dmarc.example.com

# SES sees the domain
aws ses get-identity-verification-attributes --identities example.com
aws ses get-identity-dkim-attributes --identities example.com
aws ses describe-active-receipt-rule-set

# end to end — this actually goes through the whole pipeline
aws ses send-email --from postmaster@example.com \
  --destination ToAddresses=support@example.com \
  --message 'Subject={Data="Pipeline test"},Body={Text={Data="If this arrives, both halves work."}}'

# what the forwarder thought
aws logs tail /aws/lambda/example-com-mail-forwarder --since 5m
```

Sending *to* your own verified domain works from inside the sandbox, so this
test is available before you have production access.

---

## Several projects, one AWS account

The normal case: a handful of apps, each with its own domain, all forwarding
to the same inbox. Run `provision.sh` once per domain and it composes — but it
is worth knowing what it creates fresh each time and what it joins.

| Per app | Shared across all of them |
|---|---|
| SES domain identity + DKIM | The SES account's sandbox status and sending quota |
| The domain's DNS records | The one active receipt rule set per region |
| S3 bucket `mail.<domain>` | The verified forwarding destination, if it is the same inbox |
| IAM role `<slug>-mail-forwarder` | |
| Lambda `<slug>-mail-forwarder` | |
| Receipt rule `forward-<slug>` | |

So **each app gets its own forwarder**. That is deliberate rather than
incidental: the function carries its domain's `FORWARD_TO` and `FORWARD_FROM`
in its environment, so one app can later point somewhere else — a client, a
shared inbox, a different person — without touching the others. It also means
a bad deploy of one app's forwarder cannot take another app's mail down with
it. The cost of the extra functions is nothing; they are idle until mail
arrives.

What is genuinely shared is worth watching:

**The sending quota is account-wide.** In the sandbox that is 200 messages a
day across every domain, which is plenty for contact-form volume and not
plenty if one app starts sending transactional mail. Leaving the sandbox
raises it for all of them at once.

**Verify the destination once.** If every app forwards to the same inbox, the
one confirmation covers all of them — the second domain onward needs no click.
Different destinations mean either a click each, or production access.

**Keep them in one region.** Same region means one rule set and one place to
look when something is wrong. Spreading them across regions gives each its own
active rule set and sidesteps the sharing entirely, at the cost of doubling
the number of places you have to check.

**Different AWS accounts change nothing except that nothing is shared.** No
rule-set contention, no shared quota, and a separate sandbox to escape per
account.

---

## Things that will bite you

**One active receipt rule set per region, per account.** Not per domain — per
account. `set-active-receipt-rule-set` *replaces* whatever was active, so a
script that creates and activates its own set per domain silently takes the
mail away from the domain provisioned before it — a failure nobody notices
until a customer says they never got a reply.

`provision.sh` handles this: it joins whatever set is already active and adds
a rule named `forward-<domain>` inside it, creating a set called `inbound`
only when there is nothing to join. So running it for a second domain is
safe, and each domain's rule can be replaced without touching the others.

One consequence worth knowing when you re-run after renaming anything: the
old rule is keyed by its old name and will not be replaced, it will sit
alongside the new one and forward everything twice. `aws ses
describe-active-receipt-rule-set --query 'Rules[].Name'` shows what is really
in there.

**SES receiving is not available in every region.** `us-east-1` has always
been in the set. Whatever region your website's bucket is in is unrelated.

**IAM is eventually consistent.** Lambda refuses a role it cannot see yet, so
there is a `sleep 12` after creating one. Without it the first run fails and
the second succeeds, which is the most confusing possible failure.

**Action order in the receipt rule matters.** S3 first, Lambda second — SES
runs them in order and the function reads the object the first one wrote.

**Forwarding is receive-only, and for most sites that is the right shape.**
Replies come from whatever inbox you forward to, showing that address. For a
site whose job is to be findable and answerable — an app's marketing page, a
company card — that is fine: `support@` exists so people can reach you and so
Apple has an address to list, and you reply from whichever mailbox you already
live in. Only reach for a hosted mailbox (Google Workspace, Fastmail) when
customers need to see replies *come from* `support@` — a support desk with
several people, or a domain sending transactional mail. That replaces the
receiving half of this, not the DNS.

**The S3 copy expires after 30 days.** It is a safety net for a failed
forward, not an archive. A bucket slowly filling with other people's
correspondence is a liability, not a feature. If you want retention, say so
deliberately and write down why.

---

## Undoing it

```bash
DOMAIN=example.com; SLUG=${DOMAIN//./-}
aws ses delete-receipt-rule --rule-set-name inbound --rule-name "forward-$SLUG"
# only if this was the last domain in the set:
# aws ses set-active-receipt-rule-set && aws ses delete-receipt-rule-set --rule-set-name inbound
aws lambda delete-function --function-name "$SLUG-mail-forwarder"
aws iam delete-role-policy --role-name "$SLUG-mail-forwarder" --policy-name forward
aws iam detach-role-policy --role-name "$SLUG-mail-forwarder" \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
aws iam delete-role --role-name "$SLUG-mail-forwarder"
aws s3 rm "s3://mail.$DOMAIN" --recursive && aws s3api delete-bucket --bucket "mail.$DOMAIN"
# then delete the MX / SPF / DMARC / DKIM / _amazonses records in Route 53
```

Remove the MX record **first** if you want senders to get a clean bounce
rather than a timeout while the rest is torn down.

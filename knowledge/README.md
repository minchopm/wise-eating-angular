# Knowledge

Where the truth about this product lives, which parts of it are verified, and
which parts we are currently asserting on faith.

This is not a second copy of the documentation. It is a map, plus a register
of what we have not checked — which is the half that is actually hard to keep
and the half that decides whether an AI answering questions about us tells the
truth.

---

## Where truth already lives

Most of a knowledge catalogue was built here without the name. These files are
each the single source for one kind of claim, and every page reads them rather
than restating them.

| File | Holds | Discipline it enforces |
|---|---|---|
| `src/app/core/site.ts` | Company, addresses, App Store IDs, prices,version | One place, so two pages cannot disagree |
| `src/app/content/nutrient-facts.ts` | Every intake figure, 24 nutrients | Numbers never travel inside translated prose |
| `src/app/content/guide-facts.ts` | Every training claim | Each carries a source **and** how firmly it is held |
| `src/app/content/nutrient-foods.ts` | Food rankings, generated | Derived from USDA data, never typed by hand |
| `src/app/content/food-names.ts` | 192 foods × 7 languages | Display names, with English rewritten too |
| `scripts/mail/README.md` | How mail works, for any domain | Reusable runbook, not project-specific |

The unusual one is `guide-facts.ts`. It records **confidence**, not just value —
`established`, `probable`, `contested`. Most catalogues do not, and it is the
property that stops a model stating a contested thing flatly. Anything fed to
an AI later should carry that field through.

## What is published for machines

- `/llms.txt` — generated in postbuild from the pages that actually rendered,
  so it cannot drift from the site
- `/sitemap.xml` — with hreflang sets scoped to what each language really has
- Schema.org `@graph` on every page, including named `contactPoint` entries so
  a privacy request can be routed rather than guessed at

---

## The register of unverified claims

This is the part worth keeping honest. Each entry is something the site states
publicly that nobody has checked against the thing itself.

### 1. What each paid tier contains — **names and prices verified 2026-08-26**

`node scripts/asc/audit.mjs` now runs. Every name and every price on the
pricing page matches the products in App Store Connect, read from the API
rather than from the App Store description they were originally reconstructed
from:

| Product | ASC | site.ts |
|---|---|---|
| Remove Ads Monthly / Yearly | $2.99 / $29.99 | 2.99 / 29.99 |
| Advanced Monthly / Yearly | $3.99 / $39.99 | 3.99 / 39.99 |
| Premium Monthly / Yearly | $6.99 / $69.99 | 6.99 / 69.99 |

**Still unverified: what each tier unlocks.** That is application logic, not a
product attribute, so no API answers it. It is also the half a reader weighs
before paying, so it stays on this list until someone checks it against the
app.

**Found on the way, and worth a decision: there are two live subscription
groups.** `Wise.Eating.Group` and `Wise.Eating.Group.v2` each carry the same
six products, all APPROVED, at identical prices. Apple scopes upgrades and
downgrades to a group, so a subscriber in one cannot move to a tier in the
other — for them it is a second, parallel subscription rather than a change of
plan. If v2 is the replacement, v1 should be cleared for new purchases. Also
cosmetic but customer-visible: the v2 display names carry double spaces, and
one of them opens with a space.

**Reviews remain moot.** The iTunes lookup reports zero ratings.

### 2. Helpline numbers on the psychology guides — **verified 2026-08-26**

Six locales, twenty-four links, nineteen distinct URLs. All now resolve 200 and
every number was read off the operator's own page. What the check found is the
argument for having run it:

| Was | Is |
|---|---|
| `nationaleatingdisorders.org` (US) | **NEDA has had no helpline since June 2023** — staff dismissed, replaced by a chatbot that advised calorie deficits and was withdrawn within days. Replaced with ANAD, 1-888-375-7767. |
| `lmsspiseforstyrrelser.dk` | Dead domain. The organisation renamed twice — LMS → Foreningen Spiseforstyrrelser og Selvskade (2022) → **Somenta** (April 2026). Number unchanged. |
| `bzga-essstoerungen.de` | 301 to `essstoerungen.bioeg.de`; the operator is now **BIÖG**, not BZgA. Number unchanged. |
| `fna-tca.fr` | Does not resolve; the federation is on `.org`. |
| `iss.it/...`, `salute.gov.it/...` | Both 404. |
| `sundhed.dk/...patienthaandbogen/...` | 404. |
| `f-ima.org` (FITA) | Serves only plaintext HTTP. Dropped in favour of **Línea 024**, the Spanish national line — free, 24/7, state-run. |

One live contradiction worth remembering: FFAB's own site publishes two
different numbers on two pages. `/500-ligne-tca-nouveau-numero` announces the
current free `09 69 325 900`; `/trouver-de-l-aide/permanence-telephonique`
still lists the old surtaxed `0810 037 037`. We carry the free one.

*Re-check:* annually, or whenever a guide page is next edited. Organisations
rename and lines close; this decays silently.

### 3. Whether any of this is being found — **resolved 2026-08-26**

Search Console is verified on `wise-eating.com` as a **Domain** property (DNS
TXT, added alongside the existing SES SPF record rather than replacing it).
`sitemap.xml` submitted and accepted: 179 URLs, status Success.

Data starts accumulating from the verification date — there is no backfill, so
the first meaningful Performance numbers arrive around 2026-09-02.

Still open: linking Search Console to GA4 (`Admin → Search Console links`), so
queries and on-page behaviour can be read together instead of in two tabs.

### 4. Whether readers read — **instrumented 2026-08-26**

GA4 counts an "engaged session" at ten seconds. These articles take six
minutes, so by that measure a glance and a careful read were the same event.
Two events now separate them:

- `store_click` — fired from `store-button.ts`, the single component every App
  Store link on the site goes through, carrying which storefront the link
  pointed at. This is the one action that counts as success, and until now
  nothing measured it. **Still to do in the GA4 UI:** mark it as a key event,
  which is a setting rather than code.
- `read_depth` — fired at 50% and 90% of the document, carrying the seconds
  elapsed. Depth alone cannot separate reading from flicking a thumb to the
  bottom; the elapsed time is in the payload so the report can tell rather
  than the code guessing. Pages too short to scroll are skipped, since they
  would report perfect depth without anyone moving.

Both fail silently when `window.gtag` is absent — ad blocker, strict
extension, unaccepted consent tool. That is an ordinary state, not an error.

**The care pages are excluded, deliberately.** The sixteen guide pages carrying
`careNotice` fire no `read_depth`, and serve no advertising: `Seo` emits
`<meta name="we-ads">` in both states, and the AdSense loader in `index.html`
reads it before Auto Ads decides anything. How long someone lingers on a page
about restriction is not ours to collect, and an advert beside a paragraph
telling them to seek help is an editorial mistake whatever it earns.

One honest limitation: the ad decision is made once per full page load, so a
reader who navigates *client-side* from an ordinary page into a care page
arrives with the script already loaded. Search traffic lands directly, which
is the case that matters, but this is not airtight and pretending otherwise
would be worse than writing it down.

---

## Signals

`signals/` holds what users actually said, in their words.

- `signals/reviews.md` — written by `scripts/asc/reviews.mjs`

Nothing else goes in here yet, deliberately. The pattern this is modelled on
assumes sales calls, CRM notes and SOPs; this is one developer and an app, and
folders created for material that does not exist are how a catalogue becomes a
graveyard.

## The gap that is worth the work

The useful comparison is between what users ask and what we explain publicly.
Both halves have to exist first: the asking lives in reviews, support mail at
`support@wise-eating.com` and Search Console queries; the explaining lives in
the 84 nutrient articles and 72 guides.

We now have the second half in six languages and almost none of the first.
That is the actual next move — not more content.

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

### 1. What each paid tier contains — **unverified**

`site.ts` says so in its own comment: the feature lists were reconstructed from
the App Store description, not read from the products. This is a promise to
someone paying $6.99 a month.

*Resolves with:* `node scripts/asc/audit.mjs` — blocked only on `ASC_ISSUER_ID`.

### 2. Helpline numbers on the psychology guides — **unverified**

Five locales carry named organisations and phone numbers. The organisations are
real; the numbers and opening hours were written from knowledge and not
confirmed against each site. This is the one place on the site where being
wrong means someone in a bad moment rings a dead line, which is worse than
offering no number.

*Resolves with:* opening five pages and reading them.

### 3. Whether any of this is being found — **unknown**

184 pages, six languages, and no Search Console. There is no way at present to
know which pages are indexed, what queries reach them, or whether the German
and Danish guides are read at all.

*Resolves with:* verifying the property. The gtag is already live, so the
Google Analytics method needs no code from us.

### 4. Whether readers read — **unknown**

GA4 fires `page_view` correctly on route changes (verified). It fires nothing
else. Default GA4 counts an "engaged session" at ten seconds; these articles
take six minutes. Nothing currently distinguishes skimming from reading.

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

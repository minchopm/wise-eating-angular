# wise-eating.com

The website for **Wise Eating**, a USDA nutrition and training app for iPhone
and iPad. Angular, prerendered to static HTML, with a WebGL globe behind the
hero. Published by **Wise Eating LLC**.

```bash
npm install
npm start          # dev server on :4200
npm run build      # production build + sitemap, robots and 404.html
npm run deploy     # build, upload to S3, invalidate CloudFront
```

---

## How it is put together

**Prerendered, not a SPA.** `outputMode: "static"` renders every route through
`main.server.ts` at build time and writes real HTML to disk. A crawler that
runs no JavaScript still gets the whole page, its metadata and its structured
data. There are eleven indexable pages; the previous version of this site was
one empty `<div>`.

**One source of truth for facts.** Prices, version numbers, the size of the
food database and the company name live in `src/app/core/site.ts`. Pages read
them. A claim written twice is a claim that will eventually disagree with
itself.

**Metadata in one place.** `src/app/core/seo.ts` sets the title, description,
canonical link, Open Graph tags and a single connected `@graph` of structured
data per page. Every page calls it once, from its constructor.

---

## The hero globe

`src/app/three/` — a globe whose points are foods.

- The **continents** are drawn by testing a Fibonacci-distributed point field
  against a land mask, so the shapes are real geography rather than decoration.
- **Arcs** run between cities. Where one lands, a **photograph of what that
  city eats** blooms out of the surface — a frame cut from the same archive
  that ships inside the iOS app.
- **Hovering a city** shows what the food is notable for: the three nutrients
  closest to an adult daily reference, per 100 g.

It renders on a worker thread through `transferControlToOffscreen()`, falls
back to the main thread where that is unavailable, and falls back again to a
CSS gradient on hardware, connections or motion settings that should not be
asked to run it. `src/app/core/motion.ts` decides which.

The data behind it is generated, not hand-written — see below.

---

## Regenerating assets

Three build steps, all of which read sources that live **outside** this
repository. None of them run as part of `npm run build`; run them when the
source changes and commit the result.

### Images

```bash
npm run shots     # re-download App Store screenshots, then rebuild every image
npm run images    # just rebuild from what is already in art/
```

`tools/build-images.py` derives everything in `public/assets/` from the
originals in `art/`: screenshots at the size the page actually shows them,
icons, the site mark and the Open Graph card. The originals are 1024-square
logos and 2622-tall screenshots; shipping them as-is meant roughly 20 MB to
load a page that needs under one.

`art/store-*.png` are gitignored — they are the live App Store listing's own
images and `tools/fetch-store-shots.mjs` pulls them again on demand.

### The globe

```bash
npm run globe
```

`tools/build-globe.py` writes `src/app/three/globe-data.ts` and
`public/assets/globe/foods.webp` from three external sources:

| Source     | Default path                                             | What it gives           |
| ---------- | -------------------------------------------------------- | ----------------------- |
| `GEOJSON`  | `VT-Front-m/public/GeoJson/final.geojson`                 | continents, coastlines  |
| `ARCHIVE`  | `wise-eating/Ayura/Food/food_archive_144.mp4`             | the food photographs    |
| `FOODS`    | `wise-eating/ayurveda-data/archive/foods_index.csv`       | food name → frame index |
| `NUTRIENTS`| `wise-eating/Ayura/Legacy/foods.json`                     | the nutrient panels     |

Override any of them with an environment variable of the same name. The city
list, and which food belongs to which city, is the `CITIES` table at the top
of that script — edit it there.

---

## Deploying

`scripts/deploy.sh` replaces `ng deploy` (`@jefiozie/ngx-aws-deploy`), which
uploaded every object with one blanket `Cache-Control` and could not invalidate
CloudFront — so a deploy either served stale HTML or gave up long-term caching
on hashed assets.

Here the two are separated: fingerprinted bundles are immutable for a year,
HTML is never cached, and the CDN is invalidated at the end. A deploy that
uploads but never invalidates is a fatal error rather than a quiet no-op.

```bash
npm run deploy                   # build, upload, invalidate, wait
npm run deploy:dry               # print every AWS call, change nothing
npm run deploy:skip-build        # reuse the existing dist/
npm run deploy:invalidate        # just bust the CDN cache
PRUNE=1 npm run deploy           # also delete bucket objects not in dist/
```

Configuration lives in `.env` — copy `.env.example` and fill it in. `.env` is
gitignored and must stay that way.

### One-time CloudFront fix

```bash
npm run provision                # DRY_RUN=1 to see what it would change
```

The distribution was set up for a single-page app and needs two changes for a
prerendered one:

1. **A URL rewrite.** With an S3 REST origin there is no index-document
   resolution, so `/pricing` asks S3 for a key called `pricing`, which does not
   exist. A CloudFront function rewrites extensionless paths to their
   prerendered `index.html`.
2. **Real 404s.** 403 and 404 were both answered with `/index.html` and a
   **200**. On a prerendered site that is actively harmful: every mistyped URL
   returns the home page with a success code, so search engines index an
   unbounded number of duplicate pages and a genuinely missing page never
   reports itself as missing. Both now serve the real `/404.html` with a 404.

Run `npm run provision` **before** the first `npm run deploy`, or the new
multi-page routes will 404.

---

## Things to keep true

- **`public/` is the public website.** Everything in it is served to the
  internet at its own URL. Nothing private goes in there — an App Store Connect
  key was once dropped into `public/assets/` and was downloadable by anyone.
- **A dash is not a zero.** The app distinguishes "never measured" from
  "measured, and none"; the site says so, and should keep saying so.
- **The claims are checkable.** `site.ts` says 12,601 foods because that is
  what ships. If the number changes, change it there.

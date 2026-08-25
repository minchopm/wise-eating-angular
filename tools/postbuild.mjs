/**
 * The three things the Angular build does not do for a static host: a sitemap,
 * a robots file, and a 404 page at the path servers actually look for.
 *
 * Run automatically as part of `npm run build`.
 */
import { copyFile, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'dist/wise-eating-web/browser';
const ORIGIN = 'https://www.wise-eating.com';

// URL prefix → hreflang value, for every locale that lives under a prefix.
// The root locale is not here: it is emitted separately, as both `en` and
// x-default.
//
// Kept in step with src/app/core/locales.ts by hand — this file is plain
// JavaScript run by node and cannot import a TypeScript module. If a language
// is added there and not here, its pages are still built and still carry
// hreflang; they just do not appear in the sitemap, which the count printed at
// the end will show.
const LOCALE_HREFLANG = {
  es: 'es',
  fr: 'fr',
  de: 'de',
  it: 'it',
  da: 'da',
  bg: 'bg',
};
const LOCALE_SLUGS = Object.keys(LOCALE_HREFLANG);

/**
 * Pages worth indexing, in the order a reader would meet them.
 *
 * Written by hand rather than derived from the route table, because the route
 * table also contains the App Store screenshot frames and the 404 — pages that
 * are prerendered on purpose and must never appear in a sitemap.
 */
const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/features', priority: '0.9', changefreq: 'monthly' },
  { path: '/nutrients', priority: '0.9', changefreq: 'monthly' },
  { path: '/workouts', priority: '0.8', changefreq: 'monthly' },
  { path: '/pantry', priority: '0.8', changefreq: 'monthly' },
  { path: '/baby-feeding', priority: '0.8', changefreq: 'yearly' },
  { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'yearly' },
  { path: '/support', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms', priority: '0.4', changefreq: 'yearly' },
];

// The nutrient articles are discovered from what the build actually produced,
// rather than listed here. A hand-kept list in a sitemap eventually promises a
// page that no longer exists, which is a soft 404 we advertised ourselves.
//
// Each one exists in several languages, and a sitemap is the right place to
// say so: search engines accept hreflang from a sitemap as readily as from the
// pages, and doing it here means the whole set is declared in one place where
// the members cannot disagree about who is in it.
const dirs = await readdir(OUT, { withFileTypes: true });

/** URL prefix per language, discovered from the directories that exist. */
const localeDirs = dirs
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => LOCALE_SLUGS.includes(name));

/** slug → [{ hreflang, path }] */
const articleSets = new Map();

const collect = async (prefix, hreflang) => {
  const base = prefix ? join(OUT, prefix, 'nutrients') : join(OUT, 'nutrients');
  let entries;
  try {
    entries = await readdir(base, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const set = articleSets.get(entry.name) ?? [];
    set.push({ hreflang, path: `${prefix ? `/${prefix}` : ''}/nutrients/${entry.name}` });
    articleSets.set(entry.name, set);
  }
};

await collect('', 'en');
for (const slug of localeDirs) {
  await collect(slug, LOCALE_HREFLANG[slug]);
}

// The hub itself, once per language that has one. Its alternates are the
// indexes that were actually built, discovered the same way the articles are,
// so a language cannot be advertised here before its index exists on disk.
const hubSet = [{ hreflang: 'en', path: '/nutrients' }];
for (const slug of localeDirs) {
  try {
    await stat(join(OUT, slug, 'nutrients', 'index.html'));
    hubSet.push({ hreflang: LOCALE_HREFLANG[slug], path: `/${slug}/nutrients` });
  } catch {
    /* that language has articles but no index of its own yet */
  }
}

const hub = PAGES.find((page) => page.path === '/nutrients');
if (hub) hub.alternates = hubSet;
PAGES.push(
  ...hubSet
    .filter((entry) => entry.path !== '/nutrients')
    .map((entry) => ({
      path: entry.path,
      priority: '0.7',
      changefreq: 'monthly',
      alternates: hubSet,
    })),
);

// The guides, discovered the same way the articles are.
//
// Their own hreflang set, separate from the nutrient articles': a language can
// have every nutrient article and no guides at all, so sharing one set would
// advertise pages that were never built.
const guideSets = new Map();
const collectGuides = async (prefix, hreflang) => {
  const base = prefix ? join(OUT, prefix, 'guides') : join(OUT, 'guides');
  let entries;
  try {
    entries = await readdir(base, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const set = guideSets.get(entry.name) ?? [];
    set.push({ hreflang, path: `${prefix ? `/${prefix}` : ''}/guides/${entry.name}` });
    guideSets.set(entry.name, set);
  }
};
await collectGuides('', 'en');
for (const slug of localeDirs) {
  await collectGuides(slug, LOCALE_HREFLANG[slug]);
}

const guideHubSet = [];
try {
  await stat(join(OUT, 'guides', 'index.html'));
  guideHubSet.push({ hreflang: 'en', path: '/guides' });
} catch {
  /* no guides at all */
}
for (const slug of localeDirs) {
  try {
    await stat(join(OUT, slug, 'guides', 'index.html'));
    guideHubSet.push({ hreflang: LOCALE_HREFLANG[slug], path: `/${slug}/guides` });
  } catch {
    /* that language has no guide index */
  }
}
PAGES.push(
  ...guideHubSet.map((entry) => ({
    path: entry.path,
    priority: '0.8',
    changefreq: 'monthly',
    alternates: guideHubSet,
  })),
);
PAGES.push(
  ...[...guideSets.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .flatMap(([, set]) =>
      set.map((entry) => ({
        path: entry.path,
        priority: '0.8',
        changefreq: 'yearly',
        alternates: set,
      })),
    ),
);

const articles = [...articleSets.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([, set]) =>
    set.map((entry) => ({
      path: entry.path,
      priority: '0.8',
      changefreq: 'yearly',
      alternates: set,
    })),
  );

PAGES.push(...articles);

const today = new Date().toISOString().slice(0, 10);

const alternatesFor = (page) => {
  if (!page.alternates) return '';
  const links = page.alternates.map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${ORIGIN}${alt.path}"/>`,
  );
  // x-default points at English, which is the set's first member.
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${page.alternates[0].path}"/>`,
  );
  return links.join('\n') + '\n';
};

const urls = PAGES.map(
  (page) => `  <url>
    <loc>${ORIGIN}${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternatesFor(page)}  </url>`,
).join('\n');

await writeFile(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
  'utf8',
);

/**
 * robots.txt.
 *
 * The screenshot routes are disallowed as well as being marked noindex: a
 * `noindex` only works once the page has been fetched and read, and there is
 * no reason to let a crawler spend a request on a frame meant for a camera.
 *
 * The AI crawlers are named individually even though `User-agent: *` already
 * allows them. Two reasons. A named group is a decision on the record rather
 * than a default nobody chose, so anyone who later wants to close one off
 * changes a line instead of guessing at intent. And several of these agents
 * are documented as reading only the block addressed to them once one exists
 * — which is a trap if someone adds a narrow rule later and forgets the rest.
 *
 * The decision itself: we want to be quoted. An app whose whole argument is
 * "the numbers are measured, and here is where they come from" is better off
 * inside an assistant's answer than outside it.
 */
const AI_CRAWLERS = [
  'GPTBot', // OpenAI, training and search
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot', // Anthropic
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended', // Gemini grounding, separate from Googlebot
  'Applebot-Extended',
  'meta-externalagent',
  'Bytespider',
  'CCBot', // Common Crawl, which most of the above have read
];

await writeFile(
  join(OUT, 'robots.txt'),
  `# ${ORIGIN}
# Site map for language models: ${ORIGIN}/llms.txt

User-agent: *
Allow: /
Disallow: /app-store-hero
Disallow: /app-store-workouts
Disallow: /404

${AI_CRAWLERS.map(
  (agent) => `User-agent: ${agent}
Allow: /
Disallow: /app-store-hero
Disallow: /app-store-workouts
Disallow: /404
`,
).join('\n')}
Sitemap: ${ORIGIN}/sitemap.xml
`,
  'utf8',
);

/**
 * llms.txt.
 *
 * A plain-text map of the site for language models, per llmstxt.org. Every
 * entry is read back out of the page that was actually prerendered a moment
 * ago — its own <title> and meta description — rather than written here by
 * hand. That is the whole point: a hand-kept list drifts, and a model that
 * follows a stale link or repeats a description of a page that no longer says
 * that is worse than one with no map at all.
 *
 * It lists English, because English is complete. The translated indexes are
 * named once so a model knows they exist; enumerating twenty-four German
 * articles here would triple the file to say the same things twice.
 */
const readMeta = async (path) => {
  const file = path === '/' ? join(OUT, 'index.html') : join(OUT, path.slice(1), 'index.html');
  let html;
  try {
    html = await readFile(file, 'utf8');
  } catch {
    return undefined;
  }
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
  const description = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? '';
  const decode = (text) =>
    text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  return { title: decode(title), description: decode(description) };
};

const linkLine = async (path) => {
  const meta = await readMeta(path);
  if (!meta) return undefined;
  // The <title> carries the site name as a suffix; the list already says
  // whose site this is, so it comes off.
  const title = meta.title.split(' — ')[0].split(' | ')[0].trim();
  return `- [${title}](${ORIGIN}${path})${meta.description ? `: ${meta.description}` : ''}`;
};

const section = async (heading, paths) => {
  const lines = (await Promise.all(paths.map(linkLine))).filter(Boolean);
  return lines.length ? `## ${heading}\n\n${lines.join('\n')}\n` : '';
};

const articlePaths = PAGES.map((page) => page.path).filter((path) =>
  /^\/nutrients\/[a-z0-9-]+$/.test(path),
);

const localeHubs = hubSet.filter((entry) => entry.path !== '/nutrients').map((entry) => entry.path);

const llms = [
  `# ${'Wise Eating'}`,
  '',
  '> An iOS app that shows the full nutrient panel of a food — vitamins and',
  '> minerals, not just calories and macros — from a copy of USDA FoodData',
  '> Central that ships inside the app and never calls a server.',
  '',
  'Two things are worth knowing before quoting anything from this site.',
  '',
  'First, a dash is not a zero. Where a nutrient was never measured for a food',
  'the site and the app both show a dash; where it was measured and came back at',
  'zero they show a zero. Collapsing the two produces a daily total that looks',
  'complete and is not.',
  '',
  'Second, the intake figures throughout are United States Dietary Reference',
  'Intakes, because that is the standard the food data is compiled against. EFSA',
  'and national bodies such as the DGE publish figures that differ for some',
  'nutrients. Pages in other languages say so; a summary of them should too.',
  '',
  'Nothing here is medical advice, and no page diagnoses anything.',
  '',
  await section('The app', ['/', '/features', '/workouts', '/pantry', '/pricing']),
  await section('Nutrients', ['/nutrients', ...articlePaths]),
  await section('Guides', ['/baby-feeding']),
  await section('Other languages', localeHubs),
  await section('Company', ['/about', '/support', '/privacy', '/terms']),
].join('\n');

await writeFile(join(OUT, 'llms.txt'), llms, 'utf8');

// Most static hosts, CloudFront included, want /404.html. Angular prerendered
// it to /404/index.html.
try {
  await copyFile(join(OUT, '404', 'index.html'), join(OUT, '404.html'));
} catch {
  console.warn('postbuild: no prerendered 404 to copy');
}

const files = await readdir(OUT, { recursive: true });
const html = files.filter((f) => f.endsWith('.html')).length;
const bytes = (
  await Promise.all(
    files.map(async (f) => {
      const info = await stat(join(OUT, f));
      return info.isFile() ? info.size : 0;
    }),
  )
).reduce((a, b) => a + b, 0);

console.log(
  `postbuild: sitemap (${PAGES.length} urls), robots and llms.txt written, ` +
    `${html} prerendered pages, ${(bytes / 1024 / 1024).toFixed(2)} MB total`,
);

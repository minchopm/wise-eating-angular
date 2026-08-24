/**
 * The three things the Angular build does not do for a static host: a sitemap,
 * a robots file, and a 404 page at the path servers actually look for.
 *
 * Run automatically as part of `npm run build`.
 */
import { copyFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'dist/wise-eating-web/browser';
const ORIGIN = 'https://www.wise-eating.com';

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

const today = new Date().toISOString().slice(0, 10);

const urls = PAGES.map(
  (page) => `  <url>
    <loc>${ORIGIN}${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
).join('\n');

await writeFile(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
 */
await writeFile(
  join(OUT, 'robots.txt'),
  `# ${ORIGIN}
User-agent: *
Allow: /
Disallow: /app-store-hero
Disallow: /app-store-workouts
Disallow: /404

Sitemap: ${ORIGIN}/sitemap.xml
`,
  'utf8',
);

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
  `postbuild: sitemap (${PAGES.length} urls) and robots written, ` +
    `${html} prerendered pages, ${(bytes / 1024 / 1024).toFixed(2)} MB total`,
);

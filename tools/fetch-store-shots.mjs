/**
 * Re-download the App Store screenshots into art/.
 *
 * They are the live listing's own images, so the listing is the source of
 * truth rather than a copy of it checked into this repository — thirty
 * megabytes of PNG that Apple already hosts, and that go stale the moment a
 * release ships new ones.
 *
 *     node tools/fetch-store-shots.mjs
 *     python3 tools/build-images.py
 *
 * Run both after any App Store release that changes the screenshots.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const APP_ID = '6751406823';
const OUT = 'art';

const lookup = await fetch(`https://itunes.apple.com/lookup?id=${APP_ID}&country=us`);
if (!lookup.ok) {
  console.error(`lookup failed: HTTP ${lookup.status}`);
  process.exit(1);
}

const { results } = await lookup.json();
if (!results?.length) {
  console.error(`no App Store record for id ${APP_ID}`);
  process.exit(1);
}

const shots = results[0].screenshotUrls ?? [];
if (!shots.length) {
  console.error('the listing has no iPhone screenshots');
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

for (const [index, url] of shots.entries()) {
  // The lookup hands back a 320x480 thumbnail URL. The last path segment is
  // the rendition, so asking for a bigger one is a substitution rather than a
  // separate API call.
  const full = url.replace(/\/\d+x\d+bb\.jpg$/, '/1290x2796bb.png');
  const name = `store-${String(index + 1).padStart(2, '0')}.png`;

  const response = await fetch(full);
  if (!response.ok) {
    console.error(`  ${name}  HTTP ${response.status}`);
    continue;
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(join(OUT, name), bytes);
  console.log(`  ${name}  ${(bytes.length / 1024 / 1024).toFixed(1)} MB`);
}

console.log(`${shots.length} screenshots in ${OUT}/. Now run: python3 tools/build-images.py`);

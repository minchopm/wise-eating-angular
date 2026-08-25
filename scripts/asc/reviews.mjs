/**
 * Pull customer reviews into the knowledge catalogue.
 *
 *     node scripts/asc/reviews.mjs > knowledge/signals/reviews.md
 *
 * Reviews are the only place users describe problems in their own words rather
 * than in ours, which makes them the single most useful input we do not
 * currently read. The output is Markdown on purpose: it is meant to be read by
 * a person, committed next to the code, and fed to a model without a parsing
 * step.
 *
 * Territory matters here. A one-star review in German about a word we
 * mistranslated is a different signal from a one-star review in English about
 * a crash, and averaging them hides both.
 */
import { connect, configFromEnv } from './client.mjs';

const ROOT = new URL('../../', import.meta.url);
const config = await configFromEnv(ROOT);
const api = await connect(config);

const { data: apps } = await api.get('/v1/apps?limit=200');

console.log('# Customer reviews\n');
console.log('Pulled from App Store Connect. Their words, not ours.\n');

for (const app of apps) {
  const { data: reviews } = await api
    .get(`/v1/apps/${app.id}/customerReviews?limit=200&sort=-createdDate`, { all: true })
    .catch(() => ({ data: [] }));

  const live = reviews.filter(Boolean);
  if (!live.length) continue;

  console.log(`## ${app.attributes?.name ?? app.id}\n`);

  const byStars = {};
  for (const r of live) {
    const stars = r.attributes?.rating ?? 0;
    (byStars[stars] ??= []).push(r);
  }

  console.log('| Rating | Count |');
  console.log('|---|---|');
  for (const stars of [5, 4, 3, 2, 1]) {
    console.log(`| ${'★'.repeat(stars)} | ${byStars[stars]?.length ?? 0} |`);
  }
  console.log();

  // Lowest first: the useful ones are rarely the five-star ones.
  for (const stars of [1, 2, 3, 4, 5]) {
    for (const r of byStars[stars] ?? []) {
      const a = r.attributes ?? {};
      console.log(`### ${'★'.repeat(stars)} — ${a.territory ?? '??'} — ${(a.createdDate ?? '').slice(0, 10)}`);
      if (a.title) console.log(`**${a.title}**\n`);
      console.log(`${(a.body ?? '').trim()}\n`);
      if (a.reviewerNickname) console.log(`— ${a.reviewerNickname}\n`);
    }
  }
}

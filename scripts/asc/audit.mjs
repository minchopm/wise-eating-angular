/**
 * Check what the pricing page promises against what the products actually are.
 *
 *     node scripts/asc/audit.mjs
 *
 * src/app/core/site.ts carries a comment admitting the feature lists were
 * reconstructed from the App Store description and "need a pass against
 * StoreKit before they can be treated as a promise to a customer". This is
 * that pass. It reads the real in-app purchases and subscriptions and prints
 * them beside what the site says, so the two can be compared by eye — it does
 * not edit anything, because deciding what a tier contains is a product
 * decision and not a script's.
 */
import { readFile } from 'node:fs/promises';
import { connect, configFromEnv } from './client.mjs';

const ROOT = new URL('../../', import.meta.url);

const money = (n) => (n === undefined || n === null ? '—' : String(n));

async function siteClaims() {
  const source = await readFile(new URL('src/app/core/site.ts', ROOT), 'utf8');
  const block = source.slice(source.indexOf('export const PLANS'));
  const plans = [];
  for (const m of block.matchAll(
    /\{\s*id: '([^']+)',\s*name: '([^']+)',[\s\S]*?monthly: '([^']+)'/g,
  )) {
    plans.push({ id: m[1], name: m[2], monthly: m[3] });
  }
  return plans;
}

const config = await configFromEnv(ROOT);
const api = await connect(config);

console.log('Reading App Store Connect…\n');

const { data: apps } = await api.get('/v1/apps?limit=200');
if (!apps.length) {
  console.log('No apps visible to this key. Check its role in Users and Access.');
  process.exit(1);
}

for (const app of apps) {
  const name = app.attributes?.name ?? '(unnamed)';
  const sku = app.attributes?.sku ?? '';
  console.log(`── ${name}  ${sku ? `[${sku}]` : ''}  id ${app.id}`);

  // One-off purchases and subscriptions live in different collections.
  const iaps = await api
    .get(`/v1/apps/${app.id}/inAppPurchasesV2?limit=200`, { all: true })
    .catch((e) => ({ data: [], error: e.message }));
  const groups = await api
    .get(`/v1/apps/${app.id}/subscriptionGroups?limit=200`, { all: true })
    .catch((e) => ({ data: [], error: e.message }));

  if (iaps.data.filter(Boolean).length) {
    console.log('\n  One-off purchases');
    for (const p of iaps.data.filter(Boolean)) {
      const a = p.attributes ?? {};
      console.log(`    • ${a.name ?? '?'}  (${a.productId ?? '?'})  ${a.state ?? ''}`);
    }
  }

  for (const group of groups.data.filter(Boolean)) {
    console.log(`\n  Subscription group: ${group.attributes?.referenceName ?? group.id}`);
    const subs = await api
      .get(`/v1/subscriptionGroups/${group.id}/subscriptions?limit=200`, { all: true })
      .catch(() => ({ data: [] }));
    for (const s of subs.data.filter(Boolean)) {
      const a = s.attributes ?? {};
      // The closing line of this report asks the reader to compare prices, so
      // it had better fetch them. Apple prices per territory; USA is the one
      // the site quotes, and the one the pricing page is written against.
      const price = await usdPrice(s.id);
      console.log(
        `    • ${a.name ?? '?'}  (${a.productId ?? '?'})  ` +
          `${a.subscriptionPeriod ?? ''}  ${a.state ?? ''}` +
          (price ? `  ${price}` : '  price: —'),
      );
    }
  }
  console.log();
}

/**
 * The USA price of one subscription, as a string, or null.
 *
 * Prices hang off a subscription through subscriptionPrices, each pointing at
 * a territory and a price point. Asking for the included resources in one call
 * keeps this to a single request per product rather than three.
 */
async function usdPrice(subscriptionId) {
  const query =
    `/v1/subscriptions/${subscriptionId}/prices?limit=200` +
    '&include=subscriptionPricePoint,territory' +
    '&filter[territory]=USA';
  const res = await api.get(query, { all: false }).catch(() => null);
  if (!res) return null;

  const point = (res.included ?? []).find((i) => i.type === 'subscriptionPricePoints');
  const amount = point?.attributes?.customerPrice;
  return amount ? `$${amount}` : null;
}

console.log('── What the pricing page currently promises\n');
for (const plan of await siteClaims()) {
  console.log(`    • ${plan.name.padEnd(12)} $${money(plan.monthly)}/mo   (site.ts: ${plan.id})`);
}

console.log(
  '\nCompare the two lists. Anything the site names that has no product behind it,\n' +
    'or any price that differs, is a promise to a customer that nobody has checked.',
);

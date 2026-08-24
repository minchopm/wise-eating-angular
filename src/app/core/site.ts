/**
 * Everything about the product that appears in more than one place.
 *
 * The site makes claims — the size of the food database, the price of a tier,
 * the minimum iOS version — that have to match what the App Store listing and
 * the app actually say. A claim written twice is a claim that will eventually
 * disagree with itself, so they are written once here and the pages read them.
 *
 * The numbers below were taken from the live App Store listing for
 * id6751406823 and should be re-checked whenever the app ships a release.
 */

export const SITE = {
  /** How the product is spoken about. Shorter than the App Store name. */
  name: 'Wise Eating',
  /** The App Store record's name, used where we quote the listing. */
  storeName: 'Wise Eating: Nutrients',
  tagline: 'Know what you actually ate.',

  /**
   * What the thing is, for the home page's title tag.
   *
   * "Wise Eating" is ownable and says nothing on its own, so the category has
   * to be spelled out somewhere a search engine reads first.
   */
  category: 'a USDA nutrition & training app for iPhone and iPad',

  /** Where this site lives. Canonical URLs, sitemap and legal text read it. */
  origin: 'https://www.wise-eating.com',

  /**
   * The company. The US entity is the publisher of record for this site.
   *
   * The App Store listing is still under the original developer account, so
   * `storeSeller` is what Apple shows and `company` is who runs the product.
   * Saying both is the honest version until the listing is transferred.
   */
  company: 'Wise Eating LLC',
  companyShort: 'Wise Eating',
  companyCountry: 'United States',
  storeSeller: 'Arte Soft Ltd',

  /**
   * The support address Apple requires, and the one Privacy and Terms name.
   *
   * Deliberately the address that actually receives mail: wise-eating.com has
   * no MX records at the time of writing, so support@wise-eating.com would
   * bounce. Point this at the branded address the moment mail is routed.
   */
  contactEmail: 'mincho.milev@gmail.com',

  appStoreId: '6751406823',
  appStore: 'https://apps.apple.com/us/app/wise-eating-nutrients/id6751406823',

  /** From the App Store listing. */
  version: '1.3.9',
  minimumOs: 'iOS 18.0',
  published: '2025-12-08',
  updated: '2026-07-02',
  contentRating: '4+',
  copyrightYear: 2026,
} as const;

/**
 * The food data behind the app.
 *
 * USDA FoodData Central is a US federal dataset, but it is the reference
 * composition table that dietitians, researchers and apps use worldwide —
 * Canada's own tables are derived from it, and most of the world has no
 * national table of comparable depth. That is why the product is global and
 * not a US-only tool, and the site says so in those words rather than
 * implying a US-only audience.
 */
export const DATA = {
  source: 'USDA FoodData Central',
  sourceUrl: 'https://fdc.nal.usda.gov/',
  /** Foods in the bundled catalogue. */
  foods: 12601,
  /** Nutrient fields carried per food. */
  nutrientFields: 39,
  vitamins: 22,
  minerals: 11,
} as const;

/**
 * In-app purchase tiers, in USD.
 *
 * The names and the prices come from the App Store listing and are exact. What
 * each tier *contains* is not published anywhere machine-readable, so the
 * feature lists below were reconstructed from the app's description and need a
 * pass against StoreKit before they can be treated as a promise to a customer.
 */
export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly monthly: string;
  readonly yearly?: string;
  readonly yearlyNote?: string;
  readonly featured?: boolean;
  readonly inherits?: string;
  readonly features: readonly string[];
}

export const PLANS: readonly Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'The whole database, and the tools to use it.',
    monthly: '0',
    features: [
      'Every food in the USDA catalogue, with full nutrient panels',
      'Natural-language food search',
      'Food diary, favourites and personal recipes',
      'Pantry and storage tracking',
      'Shopping lists generated from your plans',
      'Workout logging on the shared timeline',
    ],
  },
  {
    id: 'ads',
    name: 'Remove Ads',
    tagline: 'The same app, without the banners.',
    monthly: '2.99',
    yearly: '29.99',
    yearlyNote: 'Two months free yearly',
    inherits: 'Free',
    features: ['No advertising anywhere in the app'],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    tagline: 'Let the AI do the planning.',
    monthly: '3.99',
    yearly: '39.99',
    yearlyNote: 'Two months free yearly',
    featured: true,
    inherits: 'Remove Ads',
    features: [
      'AI weekly meal plans built from real USDA foods',
      'AI recipe generation, with your allergens and diet respected',
      'AI training programmes and weekly workout schedules',
      'Alkalinity, allergen, diet and age filters',
      'Emotion and symptom tracking on the timeline',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For people who plan for other people.',
    monthly: '6.99',
    yearly: '69.99',
    yearlyNote: 'Two months free yearly',
    inherits: 'Advanced',
    features: [
      'Higher AI generation limits',
      'Multi-person and family planning',
      'Food budget and price tracking',
      'Full export of plans, diaries and nutrient reports',
    ],
  },
];

/** Absolute URL for a route path. `/` gives the bare origin. */
export function url(path: string): string {
  return path === '/' ? `${SITE.origin}/` : `${SITE.origin}${path}`;
}

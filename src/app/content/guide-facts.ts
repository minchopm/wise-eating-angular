/**
 * The parts of a guide that must be identical in every language.
 *
 * Same rule as nutrient-facts.ts and for the same reason: a figure that
 * travels inside a translated sentence eventually arrives wrong, and nobody
 * who reads that language is checking. "1.6 g/kg" written into a German
 * paragraph becomes "16 g/kg" in one careless edit, and the German reader has
 * no way to know.
 *
 * These guides carry a different *kind* of number from the nutrient articles,
 * and the difference matters. A Dietary Reference Intake is a committee's
 * published figure — one authority, one value, revised on a schedule. A
 * training figure is a reading of a literature that is still moving: how much
 * protein per kilogram, how wide the post-exercise window really is, how much
 * iron an endurance athlete loses. Those come from position stands and
 * meta-analyses, they carry ranges rather than points, and reasonable people
 * disagree at the edges.
 *
 * So every claim here records where it came from and how firmly it is held.
 * `strength` is not decoration — it is what lets an article say "this is
 * settled" about creatine and "this is contested" about the anabolic window
 * without a translator having to know which is which.
 */

/**
 * How well supported a claim is.
 *
 * - `established` — position stands agree; a reader can act on it
 * - `probable`    — the weight of evidence points one way, with real dissent
 * - `contested`   — genuinely unsettled, and the article must say so
 */
export type Strength = 'established' | 'probable' | 'contested';

export interface ClaimFact {
  /** Stable key. Translations attach wording to this, never to a position. */
  readonly id: string;
  /** The figure, with its unit. Never translated. */
  readonly value: string;
  readonly strength: Strength;
  /** Which entry in `sources` backs it. */
  readonly source: string;
}

export interface SourceFact {
  readonly id: string;
  readonly url: string;
}

export type GuideFamily = 'training' | 'shortfall' | 'mind';

export interface GuideFacts {
  readonly slug: string;
  readonly family: GuideFamily;
  /** Numbers the prose refers to by id. May be empty for a guide that has none. */
  readonly claims: readonly ClaimFact[];
  readonly sources: readonly SourceFact[];
  /**
   * Whether this guide touches disordered eating, mental health or anything
   * else where a reader may be looking for help rather than for information.
   *
   * It is not a topic label. It switches on a different disclaimer and, on
   * the psychology guides, a block of real referral routes — because a page
   * about the binge cycle that ends in an App Store button and nothing else
   * would be the wrong thing to publish.
   */
  readonly careNotice?: boolean;
  /** ISO date the content was last checked against its sources. */
  readonly updated: string;
}

const UPDATED = '2026-08-25';

/* ── the bodies whose position stands this leans on ─────────────────────── */
const ISSN = 'https://jissn.biomedcentral.com/articles';
const ACSM = 'https://journals.lww.com/acsm-msse/fulltext';
const IOC = 'https://bjsm.bmj.com';
const WHO = 'https://www.who.int';
const NICE = 'https://www.nice.org.uk/guidance';
const ODS = 'https://ods.od.nih.gov/factsheets';

export const GUIDE_FACTS: Readonly<Record<string, GuideFacts>> = {
  /* ───────────────────────────────────────────────── training × nutrient ── */
  'protein-per-meal': {
    slug: 'protein-per-meal',
    family: 'training',
    claims: [
      { id: 'daily-athlete', value: '1.4–2.0 g/kg', strength: 'established', source: 'issn-protein' },
      { id: 'per-meal', value: '0.4 g/kg', strength: 'probable', source: 'issn-protein' },
      { id: 'leucine-threshold', value: '2.5–3 g', strength: 'probable', source: 'issn-protein' },
      { id: 'older-adults', value: '1.2–1.6 g/kg', strength: 'established', source: 'prot-age' },
      { id: 'window', value: '4–6 h', strength: 'contested', source: 'issn-timing' },
      { id: 'rda', value: '0.8 g/kg', strength: 'established', source: 'dri-macro' },
    ],
    sources: [
      { id: 'issn-protein', url: `${ISSN}/10.1186/s12970-017-0177-8` },
      { id: 'issn-timing', url: `${ISSN}/10.1186/1550-2783-10-5` },
      { id: 'prot-age', url: 'https://pubmed.ncbi.nlm.nih.gov/23867520/' },
      { id: 'dri-macro', url: 'https://www.ncbi.nlm.nih.gov/books/NBK56068/' },
    ],
    updated: UPDATED,
  },

  'iron-and-endurance': {
    slug: 'iron-and-endurance',
    family: 'training',
    claims: [
      { id: 'athlete-multiplier', value: '1.3–1.7×', strength: 'probable', source: 'iom-iron' },
      { id: 'ferritin-floor', value: '30 µg/L', strength: 'probable', source: 'iron-athletes' },
      { id: 'female-endurance-prevalence', value: '15–35 %', strength: 'probable', source: 'iron-athletes' },
      { id: 'vitamin-c-effect', value: 'up to 3–4×', strength: 'established', source: 'ods-iron' },
      { id: 'tea-effect', value: '−50 % or more', strength: 'established', source: 'ods-iron' },
    ],
    sources: [
      { id: 'ods-iron', url: `${ODS}/Iron-HealthProfessional/` },
      { id: 'iom-iron', url: 'https://www.ncbi.nlm.nih.gov/books/NBK222309/' },
      { id: 'iron-athletes', url: 'https://pubmed.ncbi.nlm.nih.gov/30393248/' },
    ],
    updated: UPDATED,
  },

  'bone-under-load': {
    slug: 'bone-under-load',
    family: 'training',
    claims: [
      { id: 'calcium-athlete', value: '1,000–1,500 mg', strength: 'probable', source: 'ioc-reds' },
      { id: 'vitamin-d-target', value: '≥ 50 nmol/L', strength: 'established', source: 'ods-vitd' },
      { id: 'energy-availability', value: '45 kcal/kg FFM', strength: 'established', source: 'ioc-reds' },
      { id: 'low-energy-threshold', value: '< 30 kcal/kg FFM', strength: 'established', source: 'ioc-reds' },
      { id: 'stress-fracture-share', value: '≈ 20 %', strength: 'probable', source: 'stress-fx' },
    ],
    sources: [
      { id: 'ioc-reds', url: `${IOC}/content/57/17/1073` },
      { id: 'ods-vitd', url: `${ODS}/VitaminD-HealthProfessional/` },
      { id: 'stress-fx', url: 'https://pubmed.ncbi.nlm.nih.gov/25640134/' },
    ],
    updated: UPDATED,
  },

  'cramp-and-electrolytes': {
    slug: 'cramp-and-electrolytes',
    family: 'training',
    claims: [
      { id: 'sweat-sodium', value: '200–2,000 mg/L', strength: 'established', source: 'acsm-fluid' },
      { id: 'sweat-rate', value: '0.5–2.0 L/h', strength: 'established', source: 'acsm-fluid' },
      { id: 'magnesium-evidence', value: 'no effect', strength: 'probable', source: 'cochrane-cramp' },
      { id: 'weight-loss-limit', value: '2 % of body mass', strength: 'probable', source: 'acsm-fluid' },
    ],
    sources: [
      { id: 'acsm-fluid', url: `${ACSM}/2007/02000/exercise_and_fluid_replacement.22.aspx` },
      { id: 'cochrane-cramp', url: 'https://pubmed.ncbi.nlm.nih.gov/32956536/' },
      { id: 'cramp-neuro', url: 'https://pubmed.ncbi.nlm.nih.gov/31446710/' },
    ],
    updated: UPDATED,
  },

  'antioxidants-and-adaptation': {
    slug: 'antioxidants-and-adaptation',
    family: 'training',
    claims: [
      { id: 'blunting-dose-c', value: '1,000 mg', strength: 'probable', source: 'antiox-blunt' },
      { id: 'blunting-dose-e', value: '235 mg', strength: 'probable', source: 'antiox-blunt' },
      { id: 'food-dose-safe', value: 'no evidence of harm', strength: 'probable', source: 'antiox-review' },
    ],
    sources: [
      { id: 'antiox-blunt', url: 'https://pubmed.ncbi.nlm.nih.gov/25384788/' },
      { id: 'antiox-review', url: 'https://pubmed.ncbi.nlm.nih.gov/32240925/' },
    ],
    updated: UPDATED,
  },

  'creatine-what-holds-up': {
    slug: 'creatine-what-holds-up',
    family: 'training',
    claims: [
      { id: 'maintenance', value: '3–5 g/day', strength: 'established', source: 'issn-creatine' },
      { id: 'loading', value: '20 g/day for 5–7 days', strength: 'established', source: 'issn-creatine' },
      { id: 'strength-effect', value: '+5–15 %', strength: 'established', source: 'issn-creatine' },
      { id: 'water-weight', value: '1–2 kg', strength: 'established', source: 'issn-creatine' },
      { id: 'kidney-evidence', value: 'no harm in healthy adults', strength: 'established', source: 'issn-creatine' },
    ],
    sources: [
      { id: 'issn-creatine', url: `${ISSN}/10.1186/s12970-017-0173-z` },
      { id: 'creatine-brain', url: 'https://pubmed.ncbi.nlm.nih.gov/38337033/' },
    ],
    updated: UPDATED,
  },

  'zinc-and-recovery': {
    slug: 'zinc-and-recovery',
    family: 'training',
    claims: [
      { id: 'sweat-loss', value: '0.5–1.4 mg/L', strength: 'probable', source: 'zinc-athletes' },
      { id: 'upper-limit', value: '40 mg/day', strength: 'established', source: 'ods-zinc' },
      { id: 'copper-interference', value: 'above 40 mg', strength: 'established', source: 'ods-zinc' },
      { id: 'testosterone-caveat', value: 'only if deficient', strength: 'probable', source: 'zinc-athletes' },
    ],
    sources: [
      { id: 'ods-zinc', url: `${ODS}/Zinc-HealthProfessional/` },
      { id: 'zinc-athletes', url: 'https://pubmed.ncbi.nlm.nih.gov/31121464/' },
    ],
    updated: UPDATED,
  },

  'collagen-and-tendon': {
    slug: 'collagen-and-tendon',
    family: 'training',
    claims: [
      { id: 'dose', value: '15 g', strength: 'contested', source: 'collagen-tendon' },
      { id: 'timing', value: '30–60 min before loading', strength: 'contested', source: 'collagen-tendon' },
      { id: 'vitamin-c-cofactor', value: '50 mg', strength: 'established', source: 'ods-vitc' },
    ],
    sources: [
      { id: 'collagen-tendon', url: 'https://pubmed.ncbi.nlm.nih.gov/30783776/' },
      { id: 'ods-vitc', url: `${ODS}/VitaminC-HealthProfessional/` },
    ],
    updated: UPDATED,
  },

  'magnesium-and-muscle': {
    slug: 'magnesium-and-muscle',
    family: 'training',
    claims: [
      { id: 'sweat-loss', value: '≈ 15 mg/L', strength: 'probable', source: 'mg-exercise' },
      { id: 'athlete-need', value: '10–20 % above the RDA', strength: 'contested', source: 'mg-exercise' },
      { id: 'supplement-effect', value: 'only if intake is low', strength: 'probable', source: 'mg-review' },
      { id: 'upper-limit-supplemental', value: '350 mg', strength: 'established', source: 'ods-mg' },
    ],
    sources: [
      { id: 'ods-mg', url: `${ODS}/Magnesium-HealthProfessional/` },
      { id: 'mg-exercise', url: 'https://pubmed.ncbi.nlm.nih.gov/28846654/' },
      { id: 'mg-review', url: 'https://pubmed.ncbi.nlm.nih.gov/31624951/' },
    ],
    updated: UPDATED,
  },

  'b-vitamins-and-energy': {
    slug: 'b-vitamins-and-energy',
    family: 'training',
    claims: [
      { id: 'requirement-rise', value: '1.5–2×', strength: 'probable', source: 'acsm-nutrition' },
      { id: 'supplement-effect', value: 'none if replete', strength: 'established', source: 'acsm-nutrition' },
      { id: 'b6-upper-limit', value: '100 mg', strength: 'established', source: 'ods-b6' },
    ],
    sources: [
      { id: 'acsm-nutrition', url: `${ACSM}/2016/03000/nutrition_and_athletic_performance.25.aspx` },
      { id: 'ods-b6', url: `${ODS}/VitaminB6-HealthProfessional/` },
      { id: 'ods-thiamin', url: `${ODS}/Thiamin-HealthProfessional/` },
    ],
    updated: UPDATED,
  },

  'amino-acids-beyond-protein': {
    slug: 'amino-acids-beyond-protein',
    family: 'training',
    claims: [
      { id: 'bcaa-alone', value: 'inferior to whole protein', strength: 'established', source: 'bcaa-review' },
      { id: 'leucine-per-meal', value: '2.5–3 g', strength: 'probable', source: 'issn-protein' },
      { id: 'glutamine-effect', value: 'no benefit when fed', strength: 'probable', source: 'issn-glutamine' },
      { id: 'beta-alanine', value: '3.2–6.4 g/day', strength: 'established', source: 'issn-beta-alanine' },
    ],
    sources: [
      { id: 'issn-protein', url: `${ISSN}/10.1186/s12970-017-0177-8` },
      { id: 'bcaa-review', url: 'https://pubmed.ncbi.nlm.nih.gov/28919842/' },
      { id: 'issn-glutamine', url: 'https://pubmed.ncbi.nlm.nih.gov/30646230/' },
      { id: 'issn-beta-alanine', url: `${ISSN}/10.1186/s12970-015-0090-y` },
    ],
    updated: UPDATED,
  },

  'vitamin-d-and-performance': {
    slug: 'vitamin-d-and-performance',
    family: 'training',
    claims: [
      { id: 'athlete-insufficiency', value: '≈ 56 %', strength: 'probable', source: 'vitd-athletes' },
      { id: 'sufficiency', value: '≥ 50 nmol/L', strength: 'established', source: 'ods-vitd' },
      { id: 'performance-effect', value: 'only from deficiency', strength: 'probable', source: 'vitd-athletes' },
      { id: 'upper-limit', value: '100 µg (4,000 IU)', strength: 'established', source: 'ods-vitd' },
    ],
    sources: [
      { id: 'ods-vitd', url: `${ODS}/VitaminD-HealthProfessional/` },
      { id: 'vitd-athletes', url: 'https://pubmed.ncbi.nlm.nih.gov/29894543/' },
    ],
    updated: UPDATED,
  },

  /* ────────────────────────────────────────────────────────── shortfall ── */
  'hidden-hunger': {
    slug: 'hidden-hunger',
    family: 'shortfall',
    claims: [
      { id: 'global-affected', value: '> 2 billion', strength: 'established', source: 'who-micronutrient' },
      { id: 'us-shortfall-nutrients', value: '9', strength: 'established', source: 'dgac' },
      { id: 'calcium-shortfall', value: '≈ 30 %', strength: 'probable', source: 'dgac' },
      { id: 'magnesium-shortfall', value: '≈ 48 %', strength: 'probable', source: 'dgac' },
    ],
    sources: [
      { id: 'who-micronutrient', url: `${WHO}/health-topics/micronutrients` },
      { id: 'dgac', url: 'https://www.dietaryguidelines.gov/' },
      { id: 'nhanes', url: 'https://www.cdc.gov/nchs/nhanes/index.htm' },
    ],
    updated: UPDATED,
  },

  'ultra-processed-and-density': {
    slug: 'ultra-processed-and-density',
    family: 'shortfall',
    claims: [
      { id: 'us-energy-share', value: '≈ 57 %', strength: 'established', source: 'upf-share' },
      { id: 'trial-excess', value: '+500 kcal/day', strength: 'probable', source: 'hall-trial' },
      { id: 'nova-definition', value: 'NOVA group 4', strength: 'established', source: 'nova' },
    ],
    sources: [
      { id: 'upf-share', url: 'https://pubmed.ncbi.nlm.nih.gov/26962035/' },
      { id: 'hall-trial', url: 'https://pubmed.ncbi.nlm.nih.gov/31105044/' },
      { id: 'nova', url: 'https://www.fao.org/3/ca5644en/ca5644en.pdf' },
    ],
    updated: UPDATED,
  },

  'dieting-and-deficit': {
    slug: 'dieting-and-deficit',
    family: 'shortfall',
    claims: [
      { id: 'micronutrient-floor', value: '≈ 1,600 kcal', strength: 'probable', source: 'deficit-micros' },
      { id: 'protein-in-deficit', value: '1.6–2.4 g/kg', strength: 'probable', source: 'helms-deficit' },
      { id: 'lean-loss-share', value: '20–30 %', strength: 'probable', source: 'helms-deficit' },
    ],
    sources: [
      { id: 'deficit-micros', url: 'https://pubmed.ncbi.nlm.nih.gov/20821351/' },
      { id: 'helms-deficit', url: 'https://pubmed.ncbi.nlm.nih.gov/24092765/' },
    ],
    updated: UPDATED,
  },

  'plant-based-and-training': {
    slug: 'plant-based-and-training',
    family: 'shortfall',
    claims: [
      { id: 'protein-uplift', value: '+10–20 %', strength: 'probable', source: 'plant-protein' },
      { id: 'iron-multiplier', value: '1.8×', strength: 'established', source: 'ods-iron-pb' },
      { id: 'zinc-uplift', value: '+50 %', strength: 'established', source: 'ods-zinc-pb' },
      { id: 'b12-required', value: 'supplement or fortified', strength: 'established', source: 'ods-b12-pb' },
      { id: 'creatine-baseline', value: 'lower muscle stores', strength: 'established', source: 'plant-creatine' },
    ],
    sources: [
      { id: 'ods-iron-pb', url: `${ODS}/Iron-HealthProfessional/` },
      { id: 'ods-zinc-pb', url: `${ODS}/Zinc-HealthProfessional/` },
      { id: 'ods-b12-pb', url: `${ODS}/VitaminB12-HealthProfessional/` },
      { id: 'plant-protein', url: 'https://pubmed.ncbi.nlm.nih.gov/31174229/' },
      { id: 'plant-creatine', url: 'https://pubmed.ncbi.nlm.nih.gov/12701815/' },
    ],
    updated: UPDATED,
  },

  /* ───────────────────────────────────────────────────────────── mind ──── */
  'why-willpower-is-the-wrong-frame': {
    slug: 'why-willpower-is-the-wrong-frame',
    family: 'mind',
    claims: [],
    sources: [
      { id: 'hall-trial', url: 'https://pubmed.ncbi.nlm.nih.gov/31105044/' },
      { id: 'habit-review', url: 'https://pubmed.ncbi.nlm.nih.gov/26178133/' },
      { id: 'set-point', url: 'https://pubmed.ncbi.nlm.nih.gov/27136388/' },
    ],
    careNotice: true,
    updated: UPDATED,
  },

  'restriction-and-the-binge-cycle': {
    slug: 'restriction-and-the-binge-cycle',
    family: 'mind',
    claims: [],
    sources: [
      { id: 'minnesota', url: 'https://pubmed.ncbi.nlm.nih.gov/16204212/' },
      { id: 'nice-eating', url: `${NICE}/ng69` },
      { id: 'beat', url: 'https://www.beateatingdisorders.org.uk/' },
    ],
    careNotice: true,
    updated: UPDATED,
  },

  'emotional-eating': {
    slug: 'emotional-eating',
    family: 'mind',
    claims: [],
    sources: [
      { id: 'nice-eating', url: `${NICE}/ng69` },
      { id: 'emotional-review', url: 'https://pubmed.ncbi.nlm.nih.gov/23962805/' },
      { id: 'nimh', url: 'https://www.nimh.nih.gov/health/topics/eating-disorders' },
    ],
    careNotice: true,
    updated: UPDATED,
  },

  'tracking-without-obsession': {
    slug: 'tracking-without-obsession',
    family: 'mind',
    claims: [],
    sources: [
      { id: 'tracking-review', url: 'https://pubmed.ncbi.nlm.nih.gov/28214452/' },
      { id: 'orthorexia', url: 'https://pubmed.ncbi.nlm.nih.gov/31856758/' },
      { id: 'nice-eating', url: `${NICE}/ng69` },
    ],
    careNotice: true,
    updated: UPDATED,
  },
};

export const GUIDE_SLUGS = Object.keys(GUIDE_FACTS);

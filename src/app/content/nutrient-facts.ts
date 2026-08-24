/**
 * The parts of a nutrient article that must be identical in every language.
 *
 * This file exists because of one failure mode. If "400 mg" sits inside a
 * sentence that goes through translation, then sooner or later a Danish page
 * says 4,000 mg, nobody who reads Danish is checking, and the site is telling
 * a parent to give their child ten times a dose. Numbers are not prose and
 * must not travel with it.
 *
 * So: amounts, units, reference values, source URLs and review dates live
 * here, once. A translation file supplies the words around them — who the band
 * describes, what the note says — keyed by an id it cannot change. A
 * translator can make a page read badly. They cannot make it unsafe.
 *
 * Values are Recommended Dietary Allowances where one exists and Adequate
 * Intakes where it does not, from the Dietary Reference Intakes published by
 * the National Academies. Which is which is said in each article's wording,
 * not encoded here, because it is a fact about the evidence rather than about
 * the number.
 */

export type Family = 'vitamin' | 'mineral' | 'macronutrient';

export interface IntakeFact {
  /** Stable key. Translations attach their wording to this, never to a position. */
  readonly id: string;
  /** The number, with its unit. Never translated. */
  readonly amount: string;
}

export interface SourceFact {
  readonly id: string;
  readonly url: string;
}

export interface NutrientFacts {
  readonly slug: string;
  readonly family: Family;
  readonly intake: readonly IntakeFact[];
  readonly sources: readonly SourceFact[];
  /** ISO date the content was last checked against its sources. */
  readonly updated: string;
}

const ODS = 'https://ods.od.nih.gov/factsheets';
const FDC = { id: 'fdc', url: 'https://fdc.nal.usda.gov/' };
const UPDATED = '2026-08-25';

/** The DRI volumes, which several nutrients share. */
const DRI = {
  minerals: 'https://www.ncbi.nlm.nih.gov/books/NBK222310/',
  boneAndD: 'https://www.ncbi.nlm.nih.gov/books/NBK56070/',
  calciumEtc: 'https://www.ncbi.nlm.nih.gov/books/NBK109825/',
  bVitamins: 'https://www.ncbi.nlm.nih.gov/books/NBK114310/',
  antioxidants: 'https://www.ncbi.nlm.nih.gov/books/NBK225483/',
  macronutrients: 'https://www.ncbi.nlm.nih.gov/books/NBK56068/',
  waterAndSalts: 'https://www.ncbi.nlm.nih.gov/books/NBK545428/',
} as const;

/** Shorthand for the common case: one ODS sheet, one DRI volume, FoodData. */
function facts(
  slug: string,
  family: Family,
  odsSlug: string,
  dri: string,
  intake: readonly IntakeFact[],
): NutrientFacts {
  return {
    slug,
    family,
    intake,
    sources: [{ id: 'ods', url: `${ODS}/${odsSlug}-HealthProfessional/` }, { id: 'dri', url: dri }, FDC],
    updated: UPDATED,
  };
}

export const FACTS: Readonly<Record<string, NutrientFacts>> = {
  /* ═══════════════════════════════════════════════════════════ minerals ══ */

  magnesium: facts('magnesium', 'mineral', 'Magnesium', DRI.calciumEtc, [
    { id: 'infant-0-6', amount: '30 mg' },
    { id: 'infant-7-12', amount: '75 mg' },
    { id: 'child-1-3', amount: '80 mg' },
    { id: 'child-4-8', amount: '130 mg' },
    { id: 'child-9-13', amount: '240 mg' },
    { id: 'men-19-30', amount: '400 mg' },
    { id: 'men-31-plus', amount: '420 mg' },
    { id: 'women-19-30', amount: '310 mg' },
    { id: 'women-31-plus', amount: '320 mg' },
    { id: 'pregnancy', amount: '350–400 mg' },
  ]),

  iron: facts('iron', 'mineral', 'Iron', DRI.minerals, [
    { id: 'infant-0-6', amount: '0.27 mg' },
    { id: 'infant-7-12', amount: '11 mg' },
    { id: 'child-1-3', amount: '7 mg' },
    { id: 'child-4-8', amount: '10 mg' },
    { id: 'men-19-50', amount: '8 mg' },
    { id: 'women-19-50', amount: '18 mg' },
    { id: 'women-51-plus', amount: '8 mg' },
    { id: 'pregnancy', amount: '27 mg' },
    { id: 'vegetarian', amount: '1.8×' },
  ]),

  calcium: facts('calcium', 'mineral', 'Calcium', DRI.boneAndD, [
    { id: 'infant-0-6', amount: '200 mg' },
    { id: 'infant-7-12', amount: '260 mg' },
    { id: 'child-1-3', amount: '700 mg' },
    { id: 'child-4-8', amount: '1,000 mg' },
    { id: 'teen-9-18', amount: '1,300 mg' },
    { id: 'adults-19-50', amount: '1,000 mg' },
    { id: 'women-51-plus', amount: '1,200 mg' },
    { id: 'men-51-70', amount: '1,000 mg' },
    { id: 'age-71-plus', amount: '1,200 mg' },
  ]),

  zinc: facts('zinc', 'mineral', 'Zinc', DRI.minerals, [
    { id: 'infant-0-6', amount: '2 mg' },
    { id: 'infant-7-12', amount: '3 mg' },
    { id: 'child-1-3', amount: '3 mg' },
    { id: 'child-4-8', amount: '5 mg' },
    { id: 'child-9-13', amount: '8 mg' },
    { id: 'men-14-plus', amount: '11 mg' },
    { id: 'women-19-plus', amount: '8 mg' },
    { id: 'pregnancy', amount: '11 mg' },
    { id: 'breastfeeding', amount: '12 mg' },
  ]),

  potassium: facts('potassium', 'mineral', 'Potassium', DRI.waterAndSalts, [
    { id: 'infant-0-6', amount: '400 mg' },
    { id: 'infant-7-12', amount: '860 mg' },
    { id: 'child-1-3', amount: '2,000 mg' },
    { id: 'child-4-8', amount: '2,300 mg' },
    { id: 'child-9-13', amount: '2,500 mg' },
    { id: 'men-19-plus', amount: '3,400 mg' },
    { id: 'women-19-plus', amount: '2,600 mg' },
    { id: 'pregnancy', amount: '2,900 mg' },
  ]),

  phosphorus: facts('phosphorus', 'mineral', 'Phosphorus', DRI.boneAndD, [
    { id: 'infant-0-6', amount: '100 mg' },
    { id: 'infant-7-12', amount: '275 mg' },
    { id: 'child-1-3', amount: '460 mg' },
    { id: 'child-4-8', amount: '500 mg' },
    { id: 'teen-9-18', amount: '1,250 mg' },
    { id: 'adults-19-plus', amount: '700 mg' },
  ]),

  selenium: facts('selenium', 'mineral', 'Selenium', DRI.antioxidants, [
    { id: 'infant-0-6', amount: '15 µg' },
    { id: 'infant-7-12', amount: '20 µg' },
    { id: 'child-1-3', amount: '20 µg' },
    { id: 'child-4-8', amount: '30 µg' },
    { id: 'child-9-13', amount: '40 µg' },
    { id: 'adults-14-plus', amount: '55 µg' },
    { id: 'pregnancy', amount: '60 µg' },
    { id: 'breastfeeding', amount: '70 µg' },
  ]),

  copper: facts('copper', 'mineral', 'Copper', DRI.minerals, [
    { id: 'infant-0-6', amount: '200 µg' },
    { id: 'infant-7-12', amount: '220 µg' },
    { id: 'child-1-3', amount: '340 µg' },
    { id: 'child-4-8', amount: '440 µg' },
    { id: 'child-9-13', amount: '700 µg' },
    { id: 'teen-14-18', amount: '890 µg' },
    { id: 'adults-19-plus', amount: '900 µg' },
    { id: 'pregnancy', amount: '1,000 µg' },
    { id: 'breastfeeding', amount: '1,300 µg' },
  ]),

  manganese: facts('manganese', 'mineral', 'Manganese', DRI.minerals, [
    { id: 'infant-7-12', amount: '0.6 mg' },
    { id: 'child-1-3', amount: '1.2 mg' },
    { id: 'child-4-8', amount: '1.5 mg' },
    { id: 'boys-9-13', amount: '1.9 mg' },
    { id: 'girls-9-13', amount: '1.6 mg' },
    { id: 'men-19-plus', amount: '2.3 mg' },
    { id: 'women-19-plus', amount: '1.8 mg' },
    { id: 'pregnancy', amount: '2.0 mg' },
  ]),

  /* ═══════════════════════════════════════════════════════════ vitamins ══ */

  'vitamin-a': facts('vitamin-a', 'vitamin', 'VitaminA', DRI.minerals, [
    { id: 'infant-0-6', amount: '400 µg RAE' },
    { id: 'infant-7-12', amount: '500 µg RAE' },
    { id: 'child-1-3', amount: '300 µg RAE' },
    { id: 'child-4-8', amount: '400 µg RAE' },
    { id: 'child-9-13', amount: '600 µg RAE' },
    { id: 'men-14-plus', amount: '900 µg RAE' },
    { id: 'women-14-plus', amount: '700 µg RAE' },
    { id: 'pregnancy', amount: '750–770 µg RAE' },
    { id: 'breastfeeding', amount: '1,200–1,300 µg RAE' },
    { id: 'upper-limit', amount: '3,000 µg' },
  ]),

  'vitamin-c': facts('vitamin-c', 'vitamin', 'VitaminC', DRI.antioxidants, [
    { id: 'infant-0-6', amount: '40 mg' },
    { id: 'infant-7-12', amount: '50 mg' },
    { id: 'child-1-3', amount: '15 mg' },
    { id: 'child-4-8', amount: '25 mg' },
    { id: 'child-9-13', amount: '45 mg' },
    { id: 'men-19-plus', amount: '90 mg' },
    { id: 'women-19-plus', amount: '75 mg' },
    { id: 'smokers', amount: '+35 mg' },
    { id: 'pregnancy', amount: '85 mg' },
    { id: 'breastfeeding', amount: '120 mg' },
  ]),

  'vitamin-d': facts('vitamin-d', 'vitamin', 'VitaminD', DRI.boneAndD, [
    { id: 'infant-0-12', amount: '10 µg (400 IU)' },
    { id: 'age-1-70', amount: '15 µg (600 IU)' },
    { id: 'age-71-plus', amount: '20 µg (800 IU)' },
    { id: 'pregnancy', amount: '15 µg (600 IU)' },
  ]),

  'vitamin-e': facts('vitamin-e', 'vitamin', 'VitaminE', DRI.antioxidants, [
    { id: 'infant-0-6', amount: '4 mg' },
    { id: 'infant-7-12', amount: '5 mg' },
    { id: 'child-1-3', amount: '6 mg' },
    { id: 'child-4-8', amount: '7 mg' },
    { id: 'child-9-13', amount: '11 mg' },
    { id: 'adults-14-plus', amount: '15 mg' },
    { id: 'breastfeeding', amount: '19 mg' },
  ]),

  'vitamin-k': facts('vitamin-k', 'vitamin', 'VitaminK', DRI.minerals, [
    { id: 'infant-0-6', amount: '2.0 µg' },
    { id: 'infant-7-12', amount: '2.5 µg' },
    { id: 'child-1-3', amount: '30 µg' },
    { id: 'child-4-8', amount: '55 µg' },
    { id: 'child-9-13', amount: '60 µg' },
    { id: 'teen-14-18', amount: '75 µg' },
    { id: 'men-19-plus', amount: '120 µg' },
    { id: 'women-19-plus', amount: '90 µg' },
  ]),

  thiamin: facts('thiamin', 'vitamin', 'Thiamin', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '0.2 mg' },
    { id: 'infant-7-12', amount: '0.3 mg' },
    { id: 'child-1-3', amount: '0.5 mg' },
    { id: 'child-4-8', amount: '0.6 mg' },
    { id: 'child-9-13', amount: '0.9 mg' },
    { id: 'men-14-plus', amount: '1.2 mg' },
    { id: 'women-19-plus', amount: '1.1 mg' },
    { id: 'pregnancy', amount: '1.4 mg' },
  ]),

  riboflavin: facts('riboflavin', 'vitamin', 'Riboflavin', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '0.3 mg' },
    { id: 'infant-7-12', amount: '0.4 mg' },
    { id: 'child-1-3', amount: '0.5 mg' },
    { id: 'child-4-8', amount: '0.6 mg' },
    { id: 'child-9-13', amount: '0.9 mg' },
    { id: 'men-14-plus', amount: '1.3 mg' },
    { id: 'women-19-plus', amount: '1.1 mg' },
    { id: 'pregnancy', amount: '1.4 mg' },
    { id: 'breastfeeding', amount: '1.6 mg' },
  ]),

  niacin: facts('niacin', 'vitamin', 'Niacin', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '2 mg' },
    { id: 'infant-7-12', amount: '4 mg NE' },
    { id: 'child-1-3', amount: '6 mg NE' },
    { id: 'child-4-8', amount: '8 mg NE' },
    { id: 'child-9-13', amount: '12 mg NE' },
    { id: 'men-14-plus', amount: '16 mg NE' },
    { id: 'women-14-plus', amount: '14 mg NE' },
    { id: 'pregnancy', amount: '18 mg NE' },
    { id: 'breastfeeding', amount: '17 mg NE' },
  ]),

  'pantothenic-acid': facts('pantothenic-acid', 'vitamin', 'PantothenicAcid', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '1.7 mg' },
    { id: 'infant-7-12', amount: '1.8 mg' },
    { id: 'child-1-3', amount: '2 mg' },
    { id: 'child-4-8', amount: '3 mg' },
    { id: 'child-9-13', amount: '4 mg' },
    { id: 'adults-14-plus', amount: '5 mg' },
    { id: 'pregnancy', amount: '6 mg' },
    { id: 'breastfeeding', amount: '7 mg' },
  ]),

  'vitamin-b6': facts('vitamin-b6', 'vitamin', 'VitaminB6', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '0.1 mg' },
    { id: 'infant-7-12', amount: '0.3 mg' },
    { id: 'child-1-3', amount: '0.5 mg' },
    { id: 'child-4-8', amount: '0.6 mg' },
    { id: 'child-9-13', amount: '1.0 mg' },
    { id: 'adults-19-50', amount: '1.3 mg' },
    { id: 'men-51-plus', amount: '1.7 mg' },
    { id: 'women-51-plus', amount: '1.5 mg' },
    { id: 'pregnancy', amount: '1.9 mg' },
  ]),

  'vitamin-b12': facts('vitamin-b12', 'vitamin', 'VitaminB12', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '0.4 µg' },
    { id: 'infant-7-12', amount: '0.5 µg' },
    { id: 'child-1-3', amount: '0.9 µg' },
    { id: 'child-4-8', amount: '1.2 µg' },
    { id: 'child-9-13', amount: '1.8 µg' },
    { id: 'adults', amount: '2.4 µg' },
    { id: 'pregnancy', amount: '2.6 µg' },
    { id: 'breastfeeding', amount: '2.8 µg' },
  ]),

  folate: facts('folate', 'vitamin', 'Folate', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '65 µg DFE' },
    { id: 'infant-7-12', amount: '80 µg DFE' },
    { id: 'child-1-3', amount: '150 µg DFE' },
    { id: 'child-4-8', amount: '200 µg DFE' },
    { id: 'child-9-13', amount: '300 µg DFE' },
    { id: 'adults-14-plus', amount: '400 µg DFE' },
    { id: 'pregnancy', amount: '600 µg DFE' },
    { id: 'breastfeeding', amount: '500 µg DFE' },
  ]),

  choline: facts('choline', 'vitamin', 'Choline', DRI.bVitamins, [
    { id: 'infant-0-6', amount: '125 mg' },
    { id: 'infant-7-12', amount: '150 mg' },
    { id: 'child-1-3', amount: '200 mg' },
    { id: 'child-4-8', amount: '250 mg' },
    { id: 'child-9-13', amount: '375 mg' },
    { id: 'men-14-plus', amount: '550 mg' },
    { id: 'women-14-plus', amount: '400 mg' },
    { id: 'pregnancy', amount: '450 mg' },
    { id: 'breastfeeding', amount: '550 mg' },
  ]),

  /* ══════════════════════════════════════════════════════ macronutrients ══ */

  protein: {
    slug: 'protein',
    family: 'macronutrient',
    intake: [
      { id: 'infant-0-6', amount: '9.1 g' },
      { id: 'infant-7-12', amount: '11 g' },
      { id: 'child-1-3', amount: '13 g' },
      { id: 'child-4-8', amount: '19 g' },
      { id: 'child-9-13', amount: '34 g' },
      { id: 'men-19-plus', amount: '56 g' },
      { id: 'women-19-plus', amount: '46 g' },
      { id: 'per-kilo', amount: '0.8 g/kg' },
      { id: 'pregnancy', amount: '71 g' },
    ],
    sources: [
      { id: 'dri', url: DRI.macronutrients },
      { id: 'who', url: 'https://www.who.int/publications/i/item/WHO-TRS-935' },
      FDC,
    ],
    updated: UPDATED,
  },

  fibre: {
    slug: 'fibre',
    family: 'macronutrient',
    intake: [
      { id: 'child-1-3', amount: '19 g' },
      { id: 'child-4-8', amount: '25 g' },
      { id: 'boys-9-13', amount: '31 g' },
      { id: 'girls-9-13', amount: '26 g' },
      { id: 'men-19-50', amount: '38 g' },
      { id: 'men-51-plus', amount: '30 g' },
      { id: 'women-19-50', amount: '25 g' },
      { id: 'women-51-plus', amount: '21 g' },
      { id: 'per-1000-kcal', amount: '14 g' },
    ],
    sources: [
      { id: 'dri', url: DRI.macronutrients },
      {
        id: 'fda',
        url: 'https://www.fda.gov/food/nutrition-facts-label/dietary-fiber-nutrition-facts-label',
      },
      FDC,
    ],
    updated: UPDATED,
  },
};

/** Article slugs, in the order they should be listed. */
export const NUTRIENT_SLUGS = Object.keys(FACTS);

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

export const FACTS: Readonly<Record<string, NutrientFacts>> = {
  magnesium: {
    slug: 'magnesium',
    family: 'mineral',
    intake: [
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
    ],
    sources: [
      { id: 'ods', url: `${ODS}/Magnesium-HealthProfessional/` },
      { id: 'dri', url: 'https://www.ncbi.nlm.nih.gov/books/NBK109825/' },
      FDC,
    ],
    updated: '2026-08-25',
  },

  iron: {
    slug: 'iron',
    family: 'mineral',
    intake: [
      { id: 'infant-0-6', amount: '0.27 mg' },
      { id: 'infant-7-12', amount: '11 mg' },
      { id: 'child-1-3', amount: '7 mg' },
      { id: 'child-4-8', amount: '10 mg' },
      { id: 'men-19-50', amount: '8 mg' },
      { id: 'women-19-50', amount: '18 mg' },
      { id: 'women-51-plus', amount: '8 mg' },
      { id: 'pregnancy', amount: '27 mg' },
      { id: 'vegetarian', amount: '1.8×' },
    ],
    sources: [
      { id: 'ods', url: `${ODS}/Iron-HealthProfessional/` },
      { id: 'dri', url: 'https://www.ncbi.nlm.nih.gov/books/NBK222310/' },
      FDC,
    ],
    updated: '2026-08-25',
  },

  'vitamin-d': {
    slug: 'vitamin-d',
    family: 'vitamin',
    intake: [
      { id: 'infant-0-12', amount: '10 µg (400 IU)' },
      { id: 'age-1-70', amount: '15 µg (600 IU)' },
      { id: 'age-71-plus', amount: '20 µg (800 IU)' },
      { id: 'pregnancy', amount: '15 µg (600 IU)' },
    ],
    sources: [
      { id: 'ods', url: `${ODS}/VitaminD-HealthProfessional/` },
      { id: 'dri', url: 'https://www.ncbi.nlm.nih.gov/books/NBK56070/' },
      FDC,
    ],
    updated: '2026-08-25',
  },

  'vitamin-b12': {
    slug: 'vitamin-b12',
    family: 'vitamin',
    intake: [
      { id: 'infant-0-6', amount: '0.4 µg' },
      { id: 'infant-7-12', amount: '0.5 µg' },
      { id: 'child-1-3', amount: '0.9 µg' },
      { id: 'child-4-8', amount: '1.2 µg' },
      { id: 'child-9-13', amount: '1.8 µg' },
      { id: 'adults', amount: '2.4 µg' },
      { id: 'pregnancy', amount: '2.6 µg' },
      { id: 'breastfeeding', amount: '2.8 µg' },
    ],
    sources: [
      { id: 'ods', url: `${ODS}/VitaminB12-HealthProfessional/` },
      { id: 'dri', url: 'https://www.ncbi.nlm.nih.gov/books/NBK114310/' },
      FDC,
    ],
    updated: '2026-08-25',
  },
};

/** Article slugs, in the order they should be listed. */
export const NUTRIENT_SLUGS = Object.keys(FACTS);

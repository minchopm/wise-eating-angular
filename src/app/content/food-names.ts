import { CORE_FOOD_NAMES } from './food-names/core';
import { REST_FOOD_NAMES } from './food-names/rest';

/**
 * Food names a reader can read.
 *
 * The catalogue's names are USDA descriptors: a controlled vocabulary written
 * for a database, not for a person. "Beef, chuck, short ribs, boneless,
 * separable lean only, trimmed to 0" fat, select, cooked, braised" is a
 * precise identifier and an unreadable label, and it was appearing verbatim
 * on the Danish, German, Spanish, French, Italian and Bulgarian pages — which
 * made those pages half-translated in the one place where the reader is
 * looking hardest.
 *
 * So each name gets a display form, English included. English is not a
 * pass-through here: the grading and trim boilerplate comes off there too,
 * and what stays is the part that moves the numbers — raw or cooked, lean or
 * not, canned or fresh.
 *
 * The key is the catalogue name exactly as nutrient-foods.ts emits it. A
 * missing key falls through to the catalogue name rather than breaking, so a
 * re-run of tools/build-nutrient-data.py that surfaces a new food degrades to
 * English instead of to a blank.
 */
export type FoodNames = Readonly<Record<string, Readonly<Record<string, string>>>>;

const NAMES: FoodNames = { ...CORE_FOOD_NAMES, ...REST_FOOD_NAMES };

/**
 * One food, named for one language.
 *
 * Falls back along a chain rather than in one step: the language, then
 * English, then the raw catalogue name. The middle rung is what carries a
 * Spanish page through a food only English and German have been given, which
 * is the normal state of affairs while the translations are still catching up
 * with the articles.
 */
export function foodName(catalogueName: string, locale: string): string {
  const entry = NAMES[catalogueName];
  if (!entry) return catalogueName;
  return entry[locale.slice(0, 2)] ?? entry['en'] ?? catalogueName;
}

/** Every catalogue name we have a display form for — used by the audit below. */
export const NAMED = NAMES;

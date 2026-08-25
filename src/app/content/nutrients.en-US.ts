import { MACROS_EN } from './en-US/macros';
import { MINERALS_EN } from './en-US/minerals';
import { VITAMINS_ACDEK_EN } from './en-US/vitamins-acdek';
import { VITAMINS_B_EN } from './en-US/vitamins-b';
import { LocaleContent } from './types';

/**
 * English (United States) — the source text.
 *
 * Every other language is translated from here, so this is the one that has to
 * be right. Structure follows Elena's drafts: what it does, how much you need,
 * which foods carry it, something to cook. Sourcing does not — every figure
 * traces to the NIH Office of Dietary Supplements or to the Dietary Reference
 * Intakes, and the numbers themselves live in nutrient-facts.ts.
 *
 * The articles are split across ./en-US/ by family rather than kept in one
 * file. Twenty-four of them in a single module is four thousand lines nobody
 * can navigate, and a translator needs to be able to take one family at a
 * time.
 */
export const EN_US: LocaleContent = {
  chrome: {
    whatItDoes: 'What it does',
    howMuch: 'How much you need',
    colWho: 'Who',
    colPerDay: 'Per day',
    colNote: 'Note',
    fromOurData: 'From our own data',
    foodsHeading: 'The foods highest in {n}',
    foodsFootnote:
      'Per 100 g, from our copy of USDA FoodData Central, against a Daily Value of {dv}{unit}. ' +
      'Ranked by amount, not by how much of it your body actually takes up — read the next ' +
      'section before you act on the order.',
    absorption: 'What helps, and what gets in the way',
    helps: 'Helps',
    hinders: 'Gets in the way',
    shortfall: 'Who tends to fall short',
    shortfallLede:
      'Groups where intake or absorption is commonly lower than the reference. It is a list of ' +
      'populations, not a list of symptoms — it cannot tell you anything about yourself.',
    cookIt: 'Cook it',
    ingredients: 'Ingredients',
    method: 'Method',
    sources: 'Sources',
    reviewed: 'Last reviewed',
    disclaimer:
      'This page is education, not medical advice. It does not diagnose anything and it is not a ' +
      'substitute for a clinician who knows your history. If you think you are short of {n}, the ' +
      'answer is a blood test and a conversation, not a supplement bought on the strength of an ' +
      'article.',
    ctaLine: 'Every food above, and 12,601 more, with the full panel — in the app.',
    allNutrients: 'All nutrients',
    familyVitamin: 'Vitamin',
    familyMineral: 'Mineral',
    familyMacronutrient: 'Macronutrient',
  },

  shell: {
    tagline:
      '{foods} foods from {source}, on your phone — with the planning, training and pantry ' +
      'tools to actually use them.',
    product: 'Product',
    learn: 'Learn',
    legal: 'Legal',
    contact: 'Contact',
    note:
      '{name} is a planning and education tool. It does not diagnose, treat or cure any ' +
      'condition, and it is not a substitute for professional medical advice. Nutrient values ' +
      'are estimates from {source}; the real content of a food varies with soil, storage and how ' +
      'it was cooked.',
    rights: 'All rights reserved.',
    storeNote:
      'Published on the App Store by {seller}. Apple and App Store are trademarks of Apple Inc.',
    englishPages: '',
  },

  articles: {
    ...MINERALS_EN,
    ...VITAMINS_ACDEK_EN,
    ...VITAMINS_B_EN,
    ...MACROS_EN,
  },
};

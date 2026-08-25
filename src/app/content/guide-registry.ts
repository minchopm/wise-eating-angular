import { LOCALES, Locale } from '../core/locales';
import { GuideLocale } from './guide-types';
import { GUIDES_DE_DE } from './guides.de-DE';
import { GUIDES_EN_US } from './guides.en-US';
import { GUIDES_ES_ES } from './guides.es-ES';

/**
 * Which languages have guides.
 *
 * Deliberately separate from the nutrient registry. The two bodies of content
 * grow at different rates — a language can have all twenty-four nutrient
 * articles and no guides at all — and sharing one registry would have meant
 * prerendering blank guide pages for every locale that has nutrients, which is
 * the exact bug the nutrient registry exists to prevent.
 */
export const GUIDE_CONTENT: Readonly<Record<string, GuideLocale>> = {
  'en-US': GUIDES_EN_US,
  'es-ES': GUIDES_ES_ES,
  'de-DE': GUIDES_DE_DE,
};

/** Locales with guides, in the order core/locales.ts lists them. */
export const GUIDE_LOCALES: readonly Locale[] = LOCALES.filter(
  (locale) => locale.code in GUIDE_CONTENT,
);

export function guidesFor(code: string): GuideLocale {
  return GUIDE_CONTENT[code] ?? GUIDES_EN_US;
}

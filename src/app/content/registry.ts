import { LOCALES, Locale } from '../core/locales';
import { BG_BG } from './nutrients.bg-BG';
import { EN_US } from './nutrients.en-US';
import { LocaleContent } from './types';

/**
 * Which languages actually have content, as opposed to which are planned.
 *
 * core/locales.ts is the intent — nine languages the site is meant to be
 * published in. This is the reality, and routing and hreflang are both built
 * from *this* one. Promising a Danish alternate that has not been written is
 * worse than having no Danish: it is a link to a 404 that we advertised to
 * every search engine ourselves.
 */
export const CONTENT: Readonly<Record<string, LocaleContent>> = {
  'en-US': EN_US,
  'bg-BG': BG_BG,
};

/** Locales with content, in the order core/locales.ts lists them. */
export const LIVE_LOCALES: readonly Locale[] = LOCALES.filter((locale) => locale.code in CONTENT);

export function contentFor(code: string): LocaleContent {
  return CONTENT[code] ?? EN_US;
}

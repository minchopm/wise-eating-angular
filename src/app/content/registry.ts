import { LOCALES, Locale } from '../core/locales';
import { BG_BG } from './nutrients.bg-BG';
import { DA_DK } from './nutrients.da-DK';
import { DE_DE } from './nutrients.de-DE';
import { EN_US } from './nutrients.en-US';
import { ES_ES } from './nutrients.es-ES';
import { FR_FR } from './nutrients.fr-FR';
import { IT_IT } from './nutrients.it-IT';
import { LocaleContent } from './types';

/**
 * Which languages actually have content, as opposed to which are planned.
 *
 * core/locales.ts is the intent — seven languages the site is meant to be
 * published in. This is the reality, and routing and hreflang are both built
 * from *this* one. Promising a Danish alternate that has not been written is
 * worse than having no Danish: it is a link to a 404 that we advertised to
 * every search engine ourselves.
 *
 * All seven are live now, but they are not equally deep. English has all
 * twenty-four articles, German all twenty-four, Bulgarian four, and Spanish,
 * French, Italian and Danish the eight nutrients that carry most of the search
 * demand. That asymmetry is deliberate and it is handled everywhere it
 * matters: prerendering, the hreflang sets and each language's own index are
 * all built from the articles that language actually has, so a language is
 * never advertised on a page it did not write.
 */
export const CONTENT: Readonly<Record<string, LocaleContent>> = {
  'en-US': EN_US,
  'es-ES': ES_ES,
  'fr-FR': FR_FR,
  'de-DE': DE_DE,
  'it-IT': IT_IT,
  'da-DK': DA_DK,
  'bg-BG': BG_BG,
};

/** Locales with content, in the order core/locales.ts lists them. */
export const LIVE_LOCALES: readonly Locale[] = LOCALES.filter((locale) => locale.code in CONTENT);

export function contentFor(code: string): LocaleContent {
  return CONTENT[code] ?? EN_US;
}

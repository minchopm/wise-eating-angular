/**
 * The languages this site is published in.
 *
 * Nine, and the list is deliberate rather than "everything Apple supports".
 * A translated page has to be worth a crawler's time and a reader's trust; a
 * machine-translated page about how much iron to give a seven-month-old is
 * worth neither. Each of these was chosen because there is a market for the
 * app behind it, or — in one case — because the founder wants to show it to
 * people at home.
 *
 * `slug` is the URL prefix. English (US) has none: it is the root, and the
 * root is what x-default points at.
 */
export interface Locale {
  /** BCP 47, and what goes in <html lang>. */
  readonly code: string;
  /** URL prefix. Empty for the default locale, which lives at the root. */
  readonly slug: string;
  /** hreflang value. Same as `code`; named separately because it is a
   *  different contract and they are allowed to diverge. */
  readonly hreflang: string;
  /** How this language is written in English, for the switcher's title. */
  readonly label: string;
  /** How this language calls itself. What the switcher actually shows. */
  readonly native: string;
  /** App Store storefront, so the download button lands in the right country. */
  readonly storefront: string;
  /**
   * Whether the App Store listing itself is available in this language.
   *
   * Bulgarian is not, and the site says so rather than sending someone to a
   * listing they cannot read without warning them first.
   */
  readonly storeLocalised: boolean;
}

export const LOCALES: readonly Locale[] = [
  {
    code: 'en-US',
    slug: '',
    hreflang: 'en-US',
    label: 'English (United States)',
    native: 'English (US)',
    storefront: 'us',
    storeLocalised: true,
  },
  {
    code: 'en-CA',
    slug: 'en-ca',
    hreflang: 'en-CA',
    label: 'English (Canada)',
    native: 'English (CA)',
    storefront: 'ca',
    storeLocalised: true,
  },
  {
    code: 'es-US',
    slug: 'es',
    hreflang: 'es-US',
    label: 'Spanish (United States)',
    native: 'Español',
    storefront: 'us',
    storeLocalised: true,
  },
  {
    code: 'fr-FR',
    slug: 'fr',
    hreflang: 'fr-FR',
    label: 'French (France)',
    native: 'Français',
    storefront: 'fr',
    storeLocalised: true,
  },
  {
    code: 'fr-CA',
    slug: 'fr-ca',
    hreflang: 'fr-CA',
    label: 'French (Canada)',
    native: 'Français (CA)',
    storefront: 'ca',
    storeLocalised: true,
  },
  {
    code: 'de-DE',
    slug: 'de',
    hreflang: 'de-DE',
    label: 'German',
    native: 'Deutsch',
    storefront: 'de',
    storeLocalised: true,
  },
  {
    code: 'it-IT',
    slug: 'it',
    hreflang: 'it-IT',
    label: 'Italian',
    native: 'Italiano',
    storefront: 'it',
    storeLocalised: true,
  },
  {
    code: 'da-DK',
    slug: 'da',
    hreflang: 'da-DK',
    label: 'Danish',
    native: 'Dansk',
    storefront: 'dk',
    storeLocalised: true,
  },
  {
    code: 'bg-BG',
    slug: 'bg',
    hreflang: 'bg-BG',
    label: 'Bulgarian',
    native: 'Български',
    storefront: 'bg',
    storeLocalised: false,
  },
];

export const DEFAULT_LOCALE = LOCALES[0];

/** Every locale that lives under a prefix. */
export const PREFIXED = LOCALES.filter((locale) => locale.slug !== '');

export function localeBySlug(slug: string): Locale | undefined {
  return LOCALES.find((locale) => locale.slug === slug);
}

/**
 * A path in a given locale.
 *
 *   localePath(bg, '/nutrients/iron')  →  '/bg/nutrients/iron'
 *   localePath(enUS, '/nutrients/iron') → '/nutrients/iron'
 */
export function localePath(locale: Locale, path: string): string {
  if (!locale.slug) return path;
  return path === '/' ? `/${locale.slug}` : `/${locale.slug}${path}`;
}

/**
 * The App Store URL for a locale's storefront.
 *
 * Apple resolves the country from the path segment, so sending a German
 * reader to /us/ shows prices in dollars and an "open in your country's
 * store" interstitial. One substitution avoids both.
 */
export function storeUrl(locale: Locale, base: string): string {
  return base.replace(/\/[a-z]{2}\/app\//, `/${locale.storefront}/app/`);
}

/**
 * Presenting a number in the reader's own convention.
 *
 * nutrient-facts.ts keeps every figure once, written the American way:
 * "1,000 mg", "0.27 mg". That is the right place for the digits and the wrong
 * shape for most of the languages this site is published in. A Danish, German,
 * Italian or Spanish reader takes the comma as a decimal point, so "1,000 mg"
 * of calcium reads as one milligram — a thousand-fold error produced entirely
 * by punctuation, on a page whose numbers are all correct.
 *
 * So the digits stay in one place and the separators are decided here, at the
 * edge, from the locale. Nothing in this file can change a value; it can only
 * change how the same value is written. That is the same division of labour as
 * the words-and-facts split, applied one level down.
 */

/** Matches a written number: grouped, decimal, or plain. */
const NUMBER = /\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?/g;

/**
 * International Units, as the label is written in each language.
 *
 * IU is an English abbreviation and the local ones differ. It matters here
 * because several of the translated intake notes already explain the
 * conversion in local terms — "1 µg = 40 IE" on the German page — and a table
 * that then prints IU contradicts the paragraph above it.
 */
const IU_LABEL: Readonly<Record<string, string>> = {
  de: 'IE',
  da: 'IE',
  es: 'UI',
  fr: 'UI',
  it: 'UI',
};

function iuLabelFor(locale: string): string {
  return IU_LABEL[locale.slice(0, 2)] ?? 'IU';
}

/**
 * One number, in the locale's convention.
 *
 * `decimals` pins the fraction length so a figure written "1.0 mg" does not
 * come back as "1" — the trailing zero is a statement about precision and
 * dropping it loses information.
 */
export function localiseNumber(value: number, locale: string, decimals = 0): string {
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  } catch {
    // A runtime built without full ICU. Better the American form than a crash.
    return decimals > 0 ? value.toFixed(decimals) : String(value);
  }
}

/**
 * A whole amount string, rewritten for the locale.
 *
 * Handles everything nutrient-facts.ts actually contains: plain amounts
 * ("400 mg"), ranges ("350–400 mg"), compounds ("15 µg (600 IU)", "0.8 g/kg"),
 * multipliers ("1.8×") and unit suffixes that are explained in the prose and
 * therefore left alone ("µg RAE", "mg NE", "µg DFE").
 */
export function localiseAmount(text: string, locale: string): string {
  const withNumbers = text.replace(NUMBER, (match) => {
    const plain = match.replace(/,/g, '');
    const value = Number(plain);
    if (!Number.isFinite(value)) return match;
    const dot = plain.indexOf('.');
    return localiseNumber(value, locale, dot === -1 ? 0 : plain.length - dot - 1);
  });

  const iu = iuLabelFor(locale);
  return iu === 'IU' ? withNumbers : withNumbers.replace(/\bIU\b/g, iu);
}

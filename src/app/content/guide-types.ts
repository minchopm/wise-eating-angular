/**
 * The shape a guide translation has to fill in.
 *
 * Everything here is words. Every figure lives in guide-facts.ts and is joined
 * in at render time by id — see the note at the top of that file.
 *
 * These are built differently from the nutrient articles, because they are
 * answering a different kind of question. A nutrient article is a reference:
 * what it does, how much, which foods, ranked. A guide is an argument, and an
 * argument has a shape — here is what people believe, here is what the
 * evidence actually says, here is what follows from that. So the sections are
 * `claim` and `whatHolds` rather than a table of bands.
 */

export interface GuideSection {
  readonly heading: string;
  /** One or more paragraphs. */
  readonly body: readonly string[];
}

export interface ClaimWording {
  /** What the figure describes: "Trained adults, daily". */
  readonly what: string;
  /** Optional aside. The strength rating is rendered separately. */
  readonly note?: string;
}

export interface PracticalStep {
  readonly title: string;
  readonly detail: string;
}

export interface LocalisedGuide {
  /** The <h1>. A claim, not a label. */
  readonly title: string;
  /** Short form for cards and breadcrumbs. */
  readonly short: string;
  readonly lede: string;
  /** Meta description. Under 160 characters in every language. */
  readonly description: string;

  /**
   * The belief the guide is answering.
   *
   * Named out loud rather than implied. A reader arrives holding something —
   * that cramp means low magnesium, that a protein shake has a window — and a
   * guide that never says the belief aloud reads as though it is arguing with
   * nobody.
   */
  readonly commonBelief: string;

  readonly sections: readonly GuideSection[];

  /** Keyed by ClaimFact.id. A missing key renders the row without wording. */
  readonly claims: Readonly<Record<string, ClaimWording>>;
  readonly claimsNote?: string;

  /** What to actually do. Kept short; a guide that ends in twelve steps ends in none. */
  readonly practical: readonly PracticalStep[];

  /** Which nutrient articles this leans on, by slug. Rendered as links. */
  readonly seeAlso: readonly string[];

  /** Keyed by SourceFact.id — the label only; the URL is a fact. */
  readonly sources: Readonly<Record<string, string>>;
}

/**
 * The guide pages' own furniture, once per language.
 */
export interface GuideChrome {
  readonly commonBelief: string;
  readonly whatEvidenceSays: string;
  readonly numbers: string;
  readonly colWhat: string;
  readonly colFigure: string;
  readonly colStrength: string;
  readonly practical: string;
  readonly seeAlso: string;
  readonly sources: string;
  readonly reviewed: string;

  /** How the three strength ratings are named. */
  readonly strengthEstablished: string;
  readonly strengthProbable: string;
  readonly strengthContested: string;
  /** One line explaining what the ratings mean, under the table. */
  readonly strengthNote: string;

  readonly familyTraining: string;
  readonly familyShortfall: string;
  readonly familyMind: string;

  /** The ordinary disclaimer. */
  readonly disclaimer: string;

  /**
   * The heavier notice, for guides flagged `careNotice`.
   *
   * A page about the binge cycle that ends in an App Store button and nothing
   * else is the wrong thing to publish. These guides end with somewhere real
   * to go instead.
   */
  readonly careHeading: string;
  readonly careBody: string;
  /** Label → URL. Kept per-language because the services differ by country. */
  readonly careLinks: readonly { readonly label: string; readonly url: string }[];

  readonly ctaLine: string;
  readonly allGuides: string;
}

export interface GuideLocale {
  readonly chrome: GuideChrome;
  readonly guides: Readonly<Record<string, LocalisedGuide>>;
}

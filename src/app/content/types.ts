/**
 * The shape a translation has to fill in.
 *
 * Everything here is words. Every number lives in nutrient-facts.ts and is
 * joined in at render time by id — see the note at the top of that file for
 * why the two are kept apart.
 *
 * A translator working from this shape cannot invent a dose, drop a unit or
 * reorder the intake bands, because none of those things are theirs to touch.
 */

export interface IntakeWording {
  /** Who the band describes: "Women, 31 and over", "Femmes, 31 ans et plus". */
  readonly who: string;
  /** Optional aside — why the figure is what it is. */
  readonly note?: string;
}

export interface RecipeStep {
  readonly title: string;
  readonly detail: string;
}

export interface LocalisedRecipe {
  readonly title: string;
  /** Who it is for: "From 8 months", "Ab 8 Monaten". */
  readonly serves: string;
  readonly ingredients: readonly string[];
  readonly steps: readonly RecipeStep[];
  /** The safety note. Not optional in practice for anything aimed at infants. */
  readonly note?: string;
}

export interface LocalisedArticle {
  /** How the nutrient is named in this language. */
  readonly name: string;
  /** The <h1>. A claim, not a label. */
  readonly title: string;
  readonly lede: string;
  /** Meta description. Keep under 160 characters in every language. */
  readonly description: string;

  readonly whatItDoes: readonly string[];

  /** Keyed by IntakeFact.id. A missing key renders the row without wording. */
  readonly intake: Readonly<Record<string, IntakeWording>>;
  readonly intakeNote?: string;

  readonly foodsIntro: string;

  readonly helps: readonly string[];
  readonly hinders: readonly string[];
  readonly absorptionNote?: string;

  readonly shortfall: readonly string[];

  readonly recipe: LocalisedRecipe;
  /** Keyed by SourceFact.id — the label only; the URL is a fact. */
  readonly sources: Readonly<Record<string, string>>;
}

/**
 * The article page's own furniture.
 *
 * Section headings, table columns, the disclaimer. Separate from the articles
 * because there is one set per language rather than one set per article.
 */
export interface ArticleChrome {
  readonly whatItDoes: string;
  readonly howMuch: string;
  readonly colWho: string;
  readonly colPerDay: string;
  readonly colNote: string;
  readonly fromOurData: string;
  /** "The foods highest in {nutrient}" — {n} is replaced. */
  readonly foodsHeading: string;
  /** The line under the food table. {dv} and {unit} are replaced. */
  readonly foodsFootnote: string;
  readonly absorption: string;
  readonly helps: string;
  readonly hinders: string;
  readonly shortfall: string;
  readonly shortfallLede: string;
  readonly cookIt: string;
  readonly ingredients: string;
  readonly method: string;
  readonly sources: string;
  readonly reviewed: string;
  /** The medical disclaimer. {n} is the nutrient name, lower case. */
  readonly disclaimer: string;
  /**
   * The line above the mid-article App Store button.
   *
   * Optional on purpose. A locale that has not been given one shows no
   * mid-article call to action at all, which is the right failure: an
   * English sentence dropped into a Danish article would be worse than
   * the missing button it replaced.
   */
  readonly ctaMid?: string;
  readonly ctaLine: string;
  readonly allNutrients: string;
  readonly familyVitamin: string;
  readonly familyMineral: string;
  readonly familyMacronutrient: string;
  /** Shown on locales where the App Store listing is not translated. */
  readonly storeNotLocalised?: string;
  /**
   * Which country's reference values these are.
   *
   * Non-English editions need this. The figures throughout are US Dietary
   * Reference Intakes, because that is the standard the app's food data is
   * compiled against — but a German reader will check them against the DGE
   * values and an EU reader against EFSA's, and those differ. Saying so is
   * cheaper and more honest than maintaining seven sets of numbers, which
   * would reintroduce exactly the divergence nutrient-facts.ts exists to
   * prevent.
   */
  readonly referenceNote?: string;
}

/**
 * The per-language index at /{slug}/nutrients.
 *
 * English has its own hand-written hub — a long piece about where the data
 * comes from — and does not use this. A translated language gets a leaner
 * page: a short account of the database, the list of articles that language
 * actually has, and a link onward to the English original for the rest. That
 * is deliberately less than the English page rather than a machine-translated
 * imitation of it, and it exists because twenty-four articles with no index
 * are twenty-four orphans.
 */
export interface HubChrome {
  readonly eyebrow: string;
  readonly title: string;
  readonly lede: string;
  /** Meta description. Under 160 characters. */
  readonly description: string;
  readonly dataHeading: string;
  /** Two or three paragraphs. {foods}, {fields}, {vitamins}, {minerals} and
   *  {source} are replaced from core/site.ts, so no locale carries its own
   *  copy of a number that can go stale. */
  readonly dataBody: readonly string[];
  /**
   * Heading over the food rail. Optional: a locale without one shows no
   * rail, which is better than an English heading over localised cards.
   */
  readonly railTitle?: string;
  readonly indexHeading: string;
  readonly indexLede: string;
  /** The link label on each card. */
  readonly read: string;
  readonly disclaimer: string;
  /** Sends the reader to the fuller English page. {href} is the anchor. */
  readonly englishNote: string;
  readonly englishLink: string;
}

/**
 * The site shell — the prose in the footer that every page carries.
 *
 * Split out from the page chrome because it is not about nutrients. It is
 * here because the footer's medical disclaimer was reaching Danish, German,
 * Spanish, French, Italian and Bulgarian readers in English, and of all the
 * text on a translated page that is the one that has to be understood.
 *
 * The navigation labels are deliberately not in here. Those links go to pages
 * that exist only in English, and a Danish label on an English destination is
 * a small lie; `englishPages` says so once instead.
 */
export interface ShellChrome {
  /** {foods} and {source} are substituted from core/site.ts. */
  readonly tagline: string;
  readonly product: string;
  readonly learn: string;
  readonly legal: string;
  readonly contact: string;
  /** The medical disclaimer. {name} and {source} are substituted. */
  readonly note: string;
  readonly rights: string;
  /** {seller} is substituted. */
  readonly storeNote: string;
  /** Shown above the link columns on a translated page. */
  readonly englishPages: string;
}

export interface LocaleContent {
  readonly chrome: ArticleChrome;
  /**
   * Absent for English, which has a richer hub of its own. A locale without
   * one gets no index route, so the absence is visible rather than silent —
   * see app.routes.ts.
   */
  readonly hub?: HubChrome;
  /** Absent only where the shell has not been translated yet. */
  readonly shell?: ShellChrome;
  readonly articles: Readonly<Record<string, LocalisedArticle>>;
}

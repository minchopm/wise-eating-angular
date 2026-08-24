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
  readonly ctaLine: string;
  readonly allNutrients: string;
  readonly familyVitamin: string;
  readonly familyMineral: string;
  readonly familyMacronutrient: string;
  /** Shown on locales where the App Store listing is not translated. */
  readonly storeNotLocalised?: string;
}

export interface LocaleContent {
  readonly chrome: ArticleChrome;
  readonly articles: Readonly<Record<string, LocalisedArticle>>;
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NUTRIENT_FOODS, NutrientTable } from '../../content/nutrient-foods';
import { FACTS, NutrientFacts } from '../../content/nutrient-facts';
import { CONTENT, LIVE_LOCALES, contentFor } from '../../content/registry';
import { ArticleChrome, LocalisedArticle } from '../../content/types';
import { DEFAULT_LOCALE, Locale, localePath, storeUrl } from '../../core/locales';
import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

/** One row of the intake table: the number from facts, the words from a translation. */
interface IntakeRow {
  readonly who: string;
  readonly amount: string;
  readonly note: string;
}

/**
 * A single nutrient article, in one language.
 *
 * Three inputs meet here and none of them can be confused for another. The
 * numbers come from content/nutrient-facts.ts and are the same in every
 * language. The prose comes from a per-locale file. The food table is computed
 * from the catalogue the app ships. A translator touches only the middle one,
 * which is the whole reason the split exists — see the note at the top of
 * nutrient-facts.ts.
 */
@Component({
  selector: 'we-nutrient',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PageHeadComponent,
    StoreButtonComponent,
    RevealDirective,
    RevealStaggerDirective,
  ],
  template: `
    @if (article; as a) {
      <we-page-head
        [title]="a.name"
        [eyebrow]="family"
        [lede]="a.lede"
        [meta]="chrome.reviewed + ' ' + reviewed"
        [crumbs]="[{ label: 'Nutrients', path: localised('/nutrients') }]"
      />

      <!-- ────────────────────────────────────────────── the switcher ─── -->
      @if (others.length) {
        <div class="wrap languages">
          <span class="languages__label">{{ locale.native }}</span>
          @for (other of others; track other.locale.code) {
            <a class="chip" [routerLink]="other.path" [attr.hreflang]="other.locale.hreflang">{{
              other.locale.native
            }}</a>
          }
        </div>
      }

      <!-- ─────────────────────────────────────────────── what it does ── -->
      <section class="section">
        <div class="wrap wrap--narrow prose" appReveal="up">
          <h2>{{ chrome.whatItDoes }}</h2>
          @for (para of a.whatItDoes; track para) {
            <p>{{ para }}</p>
          }
        </div>
      </section>

      <!-- ──────────────────────────────────────────────── how much ──── -->
      <section class="section section--raised">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <h2>{{ chrome.howMuch }}</h2>
          </div>

          <div class="table-wrap" appReveal="up">
            <table class="intake">
              <caption class="visually-hidden">
                {{ chrome.howMuch }} — {{ a.name }}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{{ chrome.colWho }}</th>
                  <th scope="col">{{ chrome.colPerDay }}</th>
                  <th scope="col">{{ chrome.colNote }}</th>
                </tr>
              </thead>
              <tbody>
                @for (row of intake; track row.who) {
                  <tr>
                    <th scope="row">{{ row.who }}</th>
                    <td class="num">{{ row.amount }}</td>
                    <td class="note">{{ row.note }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          @if (a.intakeNote) {
            <p class="after-table">{{ a.intakeNote }}</p>
          }
          @if (chrome.referenceNote) {
            <div class="disclaimer reference-note">
              <p>{{ chrome.referenceNote }}</p>
            </div>
          }
        </div>
      </section>

      <!-- ────────────────────────────────────────────────── the foods ── -->
      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow"><span class="eyebrow__dot"></span>{{ chrome.fromOurData }}</p>
            <h2>{{ foodsHeading }}</h2>
            <p>{{ a.foodsIntro }}</p>
          </div>

          @if (table; as t) {
            <ol class="foods" appRevealStagger="45">
              @for (food of t.foods; track food.name; let i = $index) {
                <li class="food" appReveal="up">
                  <span class="food__rank">{{ i + 1 }}</span>
                  <img
                    class="food__shot"
                    [src]="'/assets/foods/' + food.frame + '.webp'"
                    alt=""
                    width="224"
                    height="224"
                    loading="lazy"
                    decoding="async"
                  />
                  <span class="food__body">
                    <span class="food__name">{{ food.name }}</span>
                    <span class="food__meta">
                      <b>{{ food.amount }}{{ t.unit }}</b> / 100 g
                      @if (food.kcal) {
                        · {{ food.kcal }} kcal
                      }
                    </span>
                    <span class="food__bar">
                      <i [style.width.%]="food.percent > 100 ? 100 : food.percent"></i>
                    </span>
                    <span class="food__dv">{{ food.percent }}% · DV</span>
                  </span>
                </li>
              }
            </ol>

            <p class="foods__note">{{ foodsFootnote }}</p>
          }
        </div>
      </section>

      <!-- ───────────────────────────────────────────────── absorption ── -->
      <section class="section section--raised">
        <div class="wrap">
          <div class="section-head">
            <h2>{{ chrome.absorption }}</h2>
          </div>

          <div class="pair">
            <div class="card" appReveal="up">
              <h3>{{ chrome.helps }}</h3>
              <ul class="ticks">
                @for (item of a.helps; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>

            <div class="card card--warn" appReveal="up" [revealDelay]="90">
              <h3>{{ chrome.hinders }}</h3>
              <ul class="ticks ticks--warn">
                @for (item of a.hinders; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          </div>

          @if (a.absorptionNote) {
            <p class="after-table absorption-note">{{ a.absorptionNote }}</p>
          }
        </div>
      </section>

      <!-- ────────────────────────────────────────────────── shortfall ── -->
      <section class="section">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <h2>{{ chrome.shortfall }}</h2>
            <p>{{ chrome.shortfallLede }}</p>
          </div>

          <ul class="ticks" appReveal="up">
            @for (item of a.shortfall; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
      </section>

      <!-- ───────────────────────────────────────────────────── recipe ── -->
      <section class="section section--raised">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <p class="eyebrow"><span class="eyebrow__dot"></span>{{ chrome.cookIt }}</p>
            <h2>{{ a.recipe.title }}</h2>
            <p>{{ a.recipe.serves }}</p>
          </div>

          <div class="recipe" appReveal="up">
            <h3>{{ chrome.ingredients }}</h3>
            <ul class="ticks">
              @for (item of a.recipe.ingredients; track item) {
                <li>{{ item }}</li>
              }
            </ul>

            <h3 class="recipe__steps-head">{{ chrome.method }}</h3>
            <ol class="steps">
              @for (step of a.recipe.steps; track step.title; let i = $index) {
                <li>
                  <span class="steps__n">{{ i + 1 }}</span>
                  <span>
                    <strong>{{ step.title }}</strong>
                    <span>{{ step.detail }}</span>
                  </span>
                </li>
              }
            </ol>

            @if (a.recipe.note) {
              <div class="disclaimer">
                <p>{{ a.recipe.note }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ──────────────────────────────────────────────────── sources ── -->
      <section class="section">
        <div class="wrap wrap--narrow prose">
          <h2>{{ chrome.sources }}</h2>
          <ul>
            @for (source of sources; track source.url) {
              <li>
                <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{
                  source.label
                }}</a>
              </li>
            }
          </ul>

          <div class="disclaimer">
            <p>{{ disclaimer }}</p>
          </div>
        </div>
      </section>

      <!-- ──────────────────────────────────────────────────────── cta ── -->
      <section class="section section--tight">
        <div class="wrap wrap--narrow centred">
          <p class="cta-line">{{ chrome.ctaLine }}</p>
          <we-store-button [href]="store" />
          @if (chrome.storeNotLocalised) {
            <p class="cta-note">{{ chrome.storeNotLocalised }}</p>
          }
          <p class="cta-back">
            <a [routerLink]="localised('/nutrients')">{{ chrome.allNutrients }}</a>
          </p>
        </div>
      </section>
    }
  `,
  styles: [
    `
      /* -------------------------------------------------------- languages */

      .languages {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        padding-block: 28px 0;
      }

      .languages__label {
        margin-right: 4px;
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .languages .chip:hover {
        border-color: var(--mint);
        color: var(--mint);
      }

      /* ------------------------------------------------------ intake table */

      .table-wrap {
        overflow-x: auto;
        border: 1px solid var(--line);
        border-radius: var(--radius);
      }

      .intake {
        width: 100%;
        min-width: 420px;
        border-collapse: collapse;
        font-size: var(--step--1);
      }

      .intake th,
      .intake td {
        padding: 13px 18px;
        text-align: left;
        border-bottom: 1px solid var(--line);
      }

      .intake tbody tr:last-child th,
      .intake tbody tr:last-child td {
        border-bottom: 0;
      }

      .intake thead th {
        background: rgba(255, 255, 255, 0.03);
        color: var(--text);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .intake tbody th {
        font-weight: 500;
        color: var(--text-soft);
      }

      .intake .num {
        font-variant-numeric: tabular-nums;
        font-weight: 650;
        color: var(--text);
        white-space: nowrap;
      }

      .intake .note {
        color: var(--text-faint);
      }

      .after-table {
        margin-top: 22px;
        margin-bottom: 0;
        max-width: 78ch;
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.7;
      }

      .absorption-note {
        margin-top: 26px;
      }

      .reference-note {
        margin-top: 22px;
      }

      /* ------------------------------------------------------- food list */

      .foods {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 14px;
      }

      .food {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 14px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--glass);
        transition: border-color 0.3s var(--ease);
      }

      .food:hover {
        border-color: var(--line-strong);
      }

      .food__rank {
        flex: none;
        width: 22px;
        font-family: var(--font-display);
        font-size: 1.05rem;
        font-weight: 600;
        text-align: center;
        color: var(--text-faint);
        font-variant-numeric: tabular-nums;
      }

      .food__shot {
        flex: none;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 0 0 1px var(--line-strong);
      }

      .food__body {
        display: flex;
        flex-direction: column;
        gap: 5px;
        min-width: 0;
        flex: 1;
      }

      .food__name {
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--text);
        line-height: 1.3;
      }

      .food__meta {
        font-size: 0.76rem;
        color: var(--text-dim);
      }

      .food__meta b {
        color: var(--mint);
        font-variant-numeric: tabular-nums;
      }

      .food__bar {
        position: relative;
        height: 4px;
        border-radius: 2px;
        background: rgba(215, 232, 240, 0.12);
        overflow: hidden;
      }

      .food__bar i {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 2px;
        background: var(--grad-brand);
      }

      .food__dv {
        font-size: 0.7rem;
        color: var(--text-faint);
      }

      .foods__note {
        margin-top: 26px;
        margin-bottom: 0;
        max-width: 78ch;
        color: var(--text-faint);
        font-size: var(--step--1);
        line-height: 1.65;
      }

      /* ------------------------------------------------------- absorption */

      .pair {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 20px;
      }

      .pair h3 {
        margin-bottom: 16px;
        font-family: var(--font-body);
        font-size: var(--step-0);
        font-weight: 650;
      }

      .card--warn {
        border-left: 3px solid var(--amber);
      }

      /* The tick marker is a green dot everywhere else on the site; on the
         list of things that block absorption a green dot reads as approval. */
      .ticks--warn li::before {
        background: var(--amber);
        box-shadow: 0 0 10px rgba(251, 191, 36, 0.55);
      }

      /* ----------------------------------------------------------- recipe */

      .recipe h3 {
        margin-bottom: 16px;
        font-family: var(--font-body);
        font-size: var(--step-0);
        font-weight: 650;
      }

      .recipe__steps-head {
        margin-top: 36px;
      }

      .steps {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .steps li {
        display: flex;
        gap: 16px;
      }

      .steps__n {
        display: grid;
        place-items: center;
        flex: none;
        width: 30px;
        height: 30px;
        border: 1px solid var(--line-strong);
        border-radius: 50%;
        font-size: 0.82rem;
        font-weight: 650;
        color: var(--mint);
      }

      .steps strong {
        display: block;
        margin-bottom: 4px;
        color: var(--text);
      }

      .steps span span {
        color: var(--text-soft);
        line-height: 1.65;
      }

      .recipe .disclaimer {
        margin-top: 32px;
      }

      /* -------------------------------------------------------------- cta */

      .centred {
        text-align: center;
      }

      .cta-line {
        max-width: 44ch;
        margin-inline: auto;
        margin-bottom: 22px;
        font-size: var(--step-1);
        color: var(--text-soft);
      }

      .cta-note {
        margin-top: 18px;
        margin-bottom: 0;
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .cta-back {
        margin-top: 24px;
        margin-bottom: 0;
        font-size: var(--step--1);
      }

      .cta-back a {
        color: var(--mint);
      }
    `,
  ],
})
export class NutrientComponent {
  readonly locale: Locale;
  readonly chrome: ArticleChrome;
  readonly article: LocalisedArticle | undefined;
  readonly facts: NutrientFacts | undefined;
  readonly table: NutrientTable | undefined;

  readonly intake: IntakeRow[] = [];
  readonly sources: { label: string; url: string }[] = [];
  readonly others: { locale: Locale; path: string }[] = [];

  readonly family: string = '';
  readonly foodsHeading: string = '';
  readonly foodsFootnote: string = '';
  readonly disclaimer: string = '';
  readonly reviewed: string = '';
  readonly store: string = SITE.appStore;

  constructor() {
    const route = inject(ActivatedRoute).snapshot;
    const slug = route.paramMap.get('slug') ?? '';

    this.locale = (route.data['locale'] as Locale | undefined) ?? DEFAULT_LOCALE;
    const content = contentFor(this.locale.code);
    this.chrome = content.chrome;
    this.article = content.articles[slug];
    this.facts = FACTS[slug];
    this.table = NUTRIENT_FOODS[slug];
    this.store = storeUrl(this.locale, SITE.appStore);

    if (!this.article || !this.facts) return;
    const article = this.article;
    const facts = this.facts;

    // Numbers from facts, words from the translation, joined by id — so a row
    // cannot end up with the wrong figure however the wording is edited.
    this.intake = facts.intake.map((fact) => {
      const wording = article.intake[fact.id];
      return {
        who: wording?.who ?? fact.id,
        amount: fact.amount,
        note: wording?.note ?? '—',
      };
    });

    this.sources = facts.sources.map((source) => ({
      url: source.url,
      label: article.sources[source.id] ?? source.url,
    }));

    this.family =
      facts.family === 'vitamin'
        ? this.chrome.familyVitamin
        : facts.family === 'mineral'
          ? this.chrome.familyMineral
          : this.chrome.familyMacronutrient;

    this.foodsHeading = this.chrome.foodsHeading.replace('{n}', article.name.toLowerCase());
    this.foodsFootnote = this.table
      ? this.chrome.foodsFootnote
          .replace('{dv}', String(this.table.dailyValue))
          .replace('{unit}', this.table.unit)
      : '';
    this.disclaimer = this.chrome.disclaimer.replace('{n}', article.name.toLowerCase());
    this.reviewed = this.formatDate(facts.updated);

    const path = `/nutrients/${slug}`;

    // Only the languages this particular article has been written in. A
    // language that has magnesium but not selenium belongs in the hreflang set
    // of one and not of the other; listing it on both points at a page that
    // was never built.
    const translated = LIVE_LOCALES.filter((locale) => slug in CONTENT[locale.code].articles);

    const alternates = translated.map((locale) => ({
      hreflang: locale.hreflang,
      path: localePath(locale, path),
    }));

    this.others = translated
      .filter((locale) => locale.code !== this.locale.code)
      .map((locale) => ({ locale, path: localePath(locale, path) }));

    const self = localePath(this.locale, path);

    inject(Seo).apply({
      title: article.name,
      path: self,
      description: article.description,
      updated: facts.updated,
      locale: this.locale.code,
      alternates,
      crumbs: [{ label: 'Nutrients', path: localePath(this.locale, '/nutrients') }],
      entities: [
        {
          '@type': 'Article',
          '@id': `${url(self)}#article`,
          headline: article.title,
          description: article.description,
          datePublished: facts.updated,
          dateModified: facts.updated,
          inLanguage: this.locale.code,
          isPartOf: { '@id': url('/#website') },
          // Attributed to the company, not to a person. Nobody here holds a
          // nutrition qualification, and inventing a byline that implies one
          // is the fastest way to deserve losing a reader's trust. What the
          // page can claim is where its numbers come from, and it does.
          author: { '@id': url('/#organization') },
          publisher: { '@id': url('/#organization') },
          about: { '@type': 'Thing', name: article.name },
          citation: this.sources.map((source) => ({
            '@type': 'CreativeWork',
            name: source.label,
            url: source.url,
          })),
          mainEntityOfPage: { '@id': `${url(self)}#webpage` },
        },
        {
          '@type': 'Recipe',
          '@id': `${url(self)}#recipe`,
          name: article.recipe.title,
          description: article.recipe.serves,
          inLanguage: this.locale.code,
          author: { '@id': url('/#organization') },
          recipeIngredient: [...article.recipe.ingredients],
          recipeInstructions: article.recipe.steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.title,
            text: step.detail,
          })),
        },
      ],
    });
  }

  /** A path in the current locale. */
  localised(path: string): string {
    return localePath(this.locale, path);
  }

  /** "2026-08-25" → a date the reader's language would write. */
  private formatDate(iso: string): string {
    const [year, month, day] = iso.split('-').map(Number);
    try {
      return new Intl.DateTimeFormat(this.locale.code, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(Date.UTC(year, month - 1, day)));
    } catch {
      return iso;
    }
  }
}

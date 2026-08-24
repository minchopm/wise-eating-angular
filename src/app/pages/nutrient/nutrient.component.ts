import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NUTRIENT_FOODS, NutrientTable } from '../../content/nutrient-foods';
import { NutrientArticle, nutrientBySlug } from '../../content/nutrients';
import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

/**
 * A single nutrient article.
 *
 * The prose is authored in content/nutrients.ts; the food table is computed in
 * content/nutrient-foods.ts from the catalogue the app ships. Keeping those
 * two apart is the point of the page: the writing is a person's, the numbers
 * are not, and neither can quietly become the other.
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
        [eyebrow]="a.family"
        [lede]="a.lede"
        [meta]="'Last reviewed ' + reviewed(a.updated)"
        [crumbs]="[{ label: 'Nutrients', path: '/nutrients' }]"
      />

      <!-- ─────────────────────────────────────────────── what it does ── -->
      <section class="section">
        <div class="wrap wrap--narrow prose" appReveal="up">
          <h2>What it does</h2>
          @for (para of a.whatItDoes; track para) {
            <p>{{ para }}</p>
          }
        </div>
      </section>

      <!-- ──────────────────────────────────────────────── how much ──── -->
      <section class="section section--raised">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <h2>How much you need</h2>
          </div>

          <div class="table-wrap" appReveal="up">
            <table class="intake">
              <caption class="visually-hidden">
                Recommended intake of {{ a.name }} by age and sex
              </caption>
              <thead>
                <tr>
                  <th scope="col">Who</th>
                  <th scope="col">Per day</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                @for (band of a.intake; track band.who) {
                  <tr>
                    <th scope="row">{{ band.who }}</th>
                    <td class="num">{{ band.amount }}</td>
                    <td class="note">{{ band.note || '—' }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          @if (a.intakeNote) {
            <p class="after-table">{{ a.intakeNote }}</p>
          }
        </div>
      </section>

      <!-- ────────────────────────────────────────────────── the foods ── -->
      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow"><span class="eyebrow__dot"></span>From our own data</p>
            <h2>The foods highest in {{ a.name.toLowerCase() }}</h2>
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
                      <b>{{ food.amount }}{{ t.unit }}</b> per 100 g
                      @if (food.kcal) {
                        · {{ food.kcal }} kcal
                      }
                    </span>
                    <span class="food__bar">
                      <i [style.width.%]="food.percent > 100 ? 100 : food.percent"></i>
                    </span>
                    <span class="food__dv">{{ food.percent }}% of the Daily Value</span>
                  </span>
                </li>
              }
            </ol>

            <p class="foods__note">
              Per 100 g, from {{ site.storeName }}'s copy of USDA FoodData Central, against a Daily
              Value of {{ t.dailyValue }}{{ t.unit }}. Ranked by amount, not by how much of it your
              body actually takes up — read the next section before you act on the order.
            </p>
          }
        </div>
      </section>

      <!-- ───────────────────────────────────────────────── absorption ── -->
      <section class="section section--raised">
        <div class="wrap">
          <div class="section-head">
            <h2>What helps, and what gets in the way</h2>
          </div>

          <div class="pair">
            <div class="card" appReveal="up">
              <h3>Helps</h3>
              <ul class="ticks">
                @for (item of a.helps; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>

            <div class="card card--warn" appReveal="up" [revealDelay]="90">
              <h3>Gets in the way</h3>
              <ul class="ticks ticks--warn">
                @for (item of a.hinders; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          </div>

          @if (a.absorptionNote) {
            <div class="wrap--narrow after-table" style="margin-inline: 0">
              <p>{{ a.absorptionNote }}</p>
            </div>
          }
        </div>
      </section>

      <!-- ────────────────────────────────────────────────── shortfall ── -->
      <section class="section">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <h2>Who tends to fall short</h2>
            <p>
              Groups where intake or absorption is commonly lower than the reference. It is a list
              of populations, not a list of symptoms — it cannot tell you anything about yourself.
            </p>
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
            <p class="eyebrow"><span class="eyebrow__dot"></span>Cook it</p>
            <h2>{{ a.recipe.title }}</h2>
            <p>{{ a.recipe.serves }}</p>
          </div>

          <div class="recipe" appReveal="up">
            <h3>Ingredients</h3>
            <ul class="ticks">
              @for (item of a.recipe.ingredients; track item) {
                <li>{{ item }}</li>
              }
            </ul>

            <h3 class="recipe__steps-head">Method</h3>
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
          <h2>Sources</h2>
          <ul>
            @for (source of a.sources; track source.url) {
              <li>
                <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{
                  source.label
                }}</a>
              </li>
            }
          </ul>

          <div class="disclaimer">
            <p>
              This page is education, not medical advice. It does not diagnose anything and it is
              not a substitute for a clinician who knows your history. If you think you are short of
              {{ a.name.toLowerCase() }}, the answer is a blood test and a conversation, not a
              supplement bought on the strength of an article.
            </p>
          </div>
        </div>
      </section>

      <!-- ──────────────────────────────────────────────────────── cta ── -->
      <section class="section section--tight">
        <div class="wrap wrap--narrow centred">
          <p class="cta-line">
            Every food above, and {{ '12,601' }} more, with the full panel — in the app.
          </p>
          <we-store-button />
          <p class="cta-back">
            <a routerLink="/nutrients">All nutrients</a>
          </p>
        </div>
      </section>
    }
  `,
  styles: [
    `
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
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.7;
      }

      /* ------------------------------------------------------- food list */

      .foods {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 14px;
        counter-reset: none;
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
  readonly site = SITE;
  readonly article: NutrientArticle | undefined;
  readonly table: NutrientTable | undefined;

  constructor() {
    const slug = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';
    this.article = nutrientBySlug(slug);
    this.table = NUTRIENT_FOODS[slug];

    if (!this.article) return;
    const a = this.article;

    inject(Seo).apply({
      title: a.name,
      path: `/nutrients/${a.slug}`,
      description: a.description,
      updated: a.updated,
      crumbs: [{ label: 'Nutrients', path: '/nutrients' }],
      entities: [
        {
          '@type': 'Article',
          '@id': `${url(`/nutrients/${a.slug}`)}#article`,
          headline: a.title,
          description: a.description,
          datePublished: a.updated,
          dateModified: a.updated,
          inLanguage: 'en',
          isPartOf: { '@id': url('/#website') },
          author: { '@id': url('/#organization') },
          publisher: { '@id': url('/#organization') },
          about: { '@type': 'Thing', name: a.name },
          // Named so a reader — and a search engine — can see the article is
          // built on primary references rather than on other articles.
          citation: a.sources.map((source) => ({
            '@type': 'CreativeWork',
            name: source.label,
            url: source.url,
          })),
          mainEntityOfPage: { '@id': `${url(`/nutrients/${a.slug}`)}#webpage` },
        },
        {
          '@type': 'Recipe',
          '@id': `${url(`/nutrients/${a.slug}`)}#recipe`,
          name: a.recipe.title,
          description: a.recipe.serves,
          author: { '@id': url('/#organization') },
          recipeIngredient: [...a.recipe.ingredients],
          recipeInstructions: a.recipe.steps.map((step) => ({
            '@type': 'HowToStep',
            name: step.title,
            text: step.detail,
          })),
        },
      ],
    });
  }

  /** "2026-08-25" → "25 August 2026". */
  reviewed(iso: string): string {
    const [year, month, day] = iso.split('-').map(Number);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return `${day} ${months[month - 1]} ${year}`;
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { DATA, SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

interface Group {
  readonly id: string;
  /** File stem in /assets/icons/. */
  readonly icon: string;
  readonly title: string;
  readonly lede: string;
  readonly items: readonly string[];
  /** Where to read more, if there is a page dedicated to it. */
  readonly more?: { label: string; path: string };
}

const GROUPS: readonly Group[] = [
  {
    id: 'data',
    icon: 'nutrients',
    title: 'The food database',
    lede:
      'Every food is a full composition record, not a calorie figure with a label attached. It is ' +
      'on the device, so lookups do not wait for a network.',
    items: [
      `${DATA.foods.toLocaleString('en-US')} foods from ${DATA.source}, bundled with the app`,
      `${DATA.nutrientFields} nutrient fields per food — ${DATA.vitamins} vitamins, ${DATA.minerals} minerals, macros, fibre and sugars`,
      'Per serving and per 100 g, switchable in place',
      'Missing data shown as a dash; a stored zero stays a zero',
      'Alkalinity and pH for foods and whole meals',
      'Your own recipes, with photos, priced into the same nutrient maths',
    ],
    more: { label: 'Nutrients & USDA data', path: '/nutrients' },
  },
  {
    id: 'search',
    icon: 'search',
    title: 'Search that reads English',
    lede:
      'Type the constraint rather than the keyword. Quantities, comparisons, negations and diets ' +
      'are all understood as written.',
    items: [
      '"beef proteins less than 15" — a nutrient, a comparison and a number',
      '"vegetarian, rich in iron" — a diet and a nutrient claim together',
      'Filter by allergen, diet, pH, age suitability and nutrient range',
      'The columns you constrained stay visible in the results',
      'Facets are labelled by confidence, so an estimate never looks like a measurement',
    ],
  },
  {
    id: 'planning',
    icon: 'plan',
    title: 'Planning, by AI or by hand',
    lede:
      'Ask for a week and adjust it, or build it yourself a meal at a time. Either way the plan is ' +
      'made of real foods with real numbers behind them.',
    items: [
      'AI weekly meal plans built to your goal, age, diet and allergens',
      'AI recipe generation that respects the same constraints',
      'Weekly and monthly planning for one person or a whole family',
      'Favourites, personal recipes and a detailed food diary',
      'Plans resolve to catalogue foods, so the macros are the food’s and not the model’s',
    ],
  },
  {
    id: 'training',
    icon: 'training',
    title: 'Training',
    lede:
      'The other half of the equation, in the same app and on the same timeline as the food.',
    items: [
      'AI programmes for fat loss, strength, muscle gain, general fitness or recovery',
      'Weekly schedules: full body, splits, cardio, mobility, mixed days',
      'Log exercises, sets, reps, time and perceived effort',
      'Sessions sit next to meals on one timeline, so the week reads as one thing',
    ],
    more: { label: 'Training in detail', path: '/workouts' },
  },
  {
    id: 'kitchen',
    icon: 'pantry',
    title: 'Pantry, shopping and budget',
    lede:
      'The part between a plan and a meal — what you already own, what you still need, and what it ' +
      'is going to cost.',
    items: [
      'Track batches, quantities and expiry dates across pantry, fridge and freezer',
      'Plan from what is in the house before the plan asks you to shop',
      'Shopping lists generated from the week you planned',
      'Optional price tracking, so the food budget has a number',
      'Barcode scanning for getting things in quickly',
    ],
    more: { label: 'Pantry & shopping', path: '/pantry' },
  },
  {
    id: 'noticing',
    icon: 'trend',
    title: 'Noticing what happened',
    lede:
      'Tracking is only worth the effort if it eventually answers a question. This is the part that ' +
      'does.',
    items: [
      'Mood, energy and symptom entries on the same timeline as the food',
      'Notes against any day, meal or session',
      'Compare weeks rather than days — that is the scale habits live at',
      'Export your plans, diary and nutrient reports',
    ],
  },
];

@Component({
  selector: 'we-features',
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
    <we-page-head
      title="Features"
      eyebrow="Everything it does"
      lede="Wise Eating is a food database, a planner, a kitchen inventory, a training log and a
            diary — arranged so that each one makes the next one less work."
    />

    <nav class="jump wrap" aria-label="On this page">
      @for (group of groups; track group.id) {
        <a [href]="'#' + group.id" class="chip">{{ group.title }}</a>
      }
    </nav>

    @for (group of groups; track group.id; let i = $index) {
      <section class="section group" [id]="group.id" [class.group--alt]="i % 2 === 1">
        <div class="wrap group__grid">
          <div class="group__head" appReveal="up">
            <span class="card__icon" aria-hidden="true">
              <img
                [src]="'/assets/icons/' + group.icon + '.webp'"
                alt=""
                width="30"
                height="30"
                loading="lazy"
                decoding="async"
              />
            </span>
            <h2>{{ group.title }}</h2>
            <p>{{ group.lede }}</p>
            @if (group.more) {
              <a class="btn btn--ghost" [routerLink]="group.more.path">{{ group.more.label }}</a>
            }
          </div>

          <ul class="ticks group__items" appRevealStagger="55">
            @for (item of group.items; track item) {
              <li appReveal="up">{{ item }}</li>
            }
          </ul>
        </div>
      </section>
    }

    <section class="section">
      <div class="wrap">
        <div class="closing" appReveal="zoom">
          <h2>All of it is free to try.</h2>
          <p>
            The whole database, the search, the diary and the pantry cost nothing. Paid tiers add
            the AI planning on top.
          </p>
          <div class="closing__actions">
            <we-store-button />
            <a class="btn btn--ghost" routerLink="/pricing">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .jump {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-block: 34px;
      }

      .jump .chip:hover {
        border-color: var(--mint);
        color: var(--mint);
      }

      .group {
        padding-block: clamp(56px, 7vw, 96px);
        border-top: 1px solid var(--line);
      }

      .group--alt {
        background: rgba(7, 20, 16, 0.45);
      }

      .group__grid {
        display: grid;
        gap: clamp(30px, 5vw, 68px);
        align-items: start;
      }

      .group__head {
        h2 {
          margin-bottom: 18px;
          font-size: var(--step-3);
        }

        p {
          color: var(--text-dim);
          margin-bottom: 24px;
        }
      }

      .group__items li {
        font-size: var(--step-0);
      }

      @media (min-width: 900px) {
        .group__grid {
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
        }

        .group__head {
          position: sticky;
          top: 116px;
        }
      }

      .closing {
        padding: clamp(40px, 6vw, 76px) var(--gutter);
        border: 1px solid var(--line-strong);
        border-radius: var(--radius-lg);
        text-align: center;
        background:
          radial-gradient(70% 130% at 50% 0%, rgba(38, 208, 124, 0.16), transparent 66%),
          var(--surface);

        h2 {
          margin-bottom: 16px;
        }

        p {
          max-width: 46ch;
          margin-inline: auto;
          margin-bottom: 30px;
        }
      }

      .closing__actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 14px;
      }
    `,
  ],
})
export class FeaturesComponent {
  readonly groups = GROUPS;

  constructor() {
    inject(Seo).apply({
      title: 'Features',
      path: '/features',
      description:
        `Everything ${SITE.name} does: a ${DATA.foods.toLocaleString('en-US')}-food USDA ` +
        'database on the device, natural-language search, AI meal and training plans, pantry and ' +
        'expiry tracking, shopping lists, and a diary that puts food, training and mood on one ' +
        'timeline.',
    });
  }
}

import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FOOD_RAIL } from '../content/food-rail';
import { foodName } from '../content/food-names';
import { localiseNumber } from '../content/format';
import { contentFor } from '../content/registry';
import { Locale, localePath } from '../core/locales';

interface Card {
  readonly frame: number;
  readonly food: string;
  readonly nutrient: string;
  readonly figure: string;
  readonly path: string;
}

/**
 * The food rail on the two nutrient hubs.
 *
 * A horizontal rail rather than a grid, for the same reason the screenshot
 * gallery on the home page is one: twenty-one squares gridded is a contact
 * sheet, where a rail keeps each photograph at a size worth having taken.
 *
 * Every card is also a door. The hubs list twenty-four nutrient names, which
 * is an index a reader has to already know what they want to use. A rail of
 * oysters and chard and dark chocolate is the same index approached from the
 * side people actually think about food from.
 *
 * Nothing here needs translating. The food name comes from foodName(), the
 * nutrient name from that locale's own article, and the figure through
 * localiseNumber() — so a Danish card reads 98,9 mg where an English one reads
 * 98.9 mg, without a single new string to keep in sync.
 */
@Component({
  selector: 'we-food-rail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <ul class="rail" tabindex="0" [attr.aria-label]="label">
      @for (card of cards(); track card.frame) {
        <li class="rail__item">
          <a class="rail__card" [routerLink]="card.path">
            <img
              [src]="'/assets/foods-lg/' + card.frame + '.webp'"
              alt=""
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
            />
            <span class="rail__name">{{ card.food }}</span>
            <span class="rail__note">{{ card.nutrient }} · {{ card.figure }}</span>
          </a>
        </li>
      }
    </ul>
  `,
  styles: [
    `
      .rail {
        display: flex;
        gap: 18px;
        margin: 0;
        padding: 4px 0 18px;
        list-style: none;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
        scrollbar-width: thin;
      }

      .rail::-webkit-scrollbar {
        height: 6px;
      }

      .rail::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: var(--line-strong);
      }

      .rail__item {
        flex: none;
        width: 176px;
        scroll-snap-align: start;
      }

      .rail__card {
        display: grid;
        gap: 4px;
        text-decoration: none;
        color: inherit;
      }

      .rail__card img {
        width: 176px;
        height: 176px;
        margin-bottom: 8px;
        border-radius: 18px;
        object-fit: cover;
        background: var(--surface);
        box-shadow: 0 0 0 1px var(--line);
        transition:
          transform 0.35s var(--ease),
          box-shadow 0.35s var(--ease);
      }

      .rail__card:hover img,
      .rail__card:focus-visible img {
        transform: translateY(-4px);
        box-shadow:
          0 0 0 1px var(--line-strong),
          0 12px 28px rgb(0 0 0 / 0.16);
      }

      .rail__name {
        font-weight: 600;
        line-height: 1.3;
      }

      .rail__note {
        font-size: var(--step--1);
        color: var(--text-dim);
      }

      @media (prefers-reduced-motion: reduce) {
        .rail__card img {
          transition: none;
        }

        .rail__card:hover img,
        .rail__card:focus-visible img {
          transform: none;
        }
      }
    `,
  ],
})
export class FoodRailComponent {
  @Input({ required: true }) set locale(value: Locale) {
    this.current.set(value);
  }

  /** Accessible name for the scroll region. Supplied by the page that hosts it. */
  @Input() label = 'Foods, scrollable';

  /**
   * Narrow the rail to these nutrients.
   *
   * The training page wants the half-dozen nutrients recovery actually turns
   * on, not the whole set — a rail of vitamin K and fibre under a heading
   * about lifting is decoration, and the reader can tell.
   */
  @Input() set only(value: readonly string[] | undefined) {
    this.limit.set(value && value.length ? new Set(value) : null);
  }

  private readonly current = signal<Locale | null>(null);
  private readonly limit = signal<ReadonlySet<string> | null>(null);

  readonly cards = computed<Card[]>(() => {
    const locale = this.current();
    if (!locale) return [];

    const articles = contentFor(locale.code).articles;
    const only = this.limit();

    return FOOD_RAIL.flatMap((food) => {
      if (only && !only.has(food.slug)) return [];

      const article = articles[food.slug];
      // A locale that has not translated this nutrient yet gets a shorter
      // rail rather than an English card wedged into it.
      if (!article) return [];

      const decimals = food.amount < 10 ? 1 : 0;
      return [
        {
          frame: food.frame,
          food: foodName(food.name, locale.code),
          nutrient: article.name,
          figure: localiseNumber(food.amount, locale.code, decimals) + ' ' + food.unit,
          path: localePath(locale, '/nutrients/' + food.slug),
        },
      ];
    });
  });
}

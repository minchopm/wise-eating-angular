import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { DEFAULT_LOCALE } from '../../core/locales';
import { FoodRailComponent } from '../../shared/food-rail';
import { StoreButtonComponent } from '../../shared/store-button';

const STEPS = [
  {
    n: '01',
    title: 'Put the kitchen in',
    body:
      'Scan a barcode or search the catalogue. Record the batch, the quantity and the date it goes ' +
      'off, in whichever of pantry, fridge or freezer it lives.',
  },
  {
    n: '02',
    title: 'Plan from what you own',
    body:
      'A week built against your stock rather than against an empty kitchen. The half bag of ' +
      'lentils counts before the shopping list does.',
  },
  {
    n: '03',
    title: 'Shop the difference',
    body:
      'The list is what the plan needs minus what is already in the house — so you stop buying the ' +
      'third jar of cumin.',
  },
  {
    n: '04',
    title: 'Log what you used',
    body:
      'Consumption comes off the stock as you cook, so the next plan starts from a number that is ' +
      'still true.',
  },
] as const;

@Component({
  selector: 'we-pantry',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PageHeadComponent,
    FoodRailComponent,
    StoreButtonComponent,
    RevealDirective,
    RevealStaggerDirective,
  ],
  template: `
    <we-page-head
      title="Pantry &amp; shopping"
      eyebrow="The kitchen"
      lede="Most food waste is not a moral failing. It is an inventory problem, and inventory
            problems have solutions."
    />

    <section class="section">
      <div class="wrap wrap--narrow prose" appReveal="up">
        <p>
          A meal plan that ignores what is already in your cupboards is a plan that sends you
          shopping for things you own and lets the rest go off quietly behind the pasta.
          {{ site.name }} keeps a real inventory, and plans against it.
        </p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap steps" appRevealStagger="90">
        @for (step of steps; track step.n) {
          <article class="step" appReveal="up">
            <span class="step__n">{{ step.n }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </article>
        }
      </div>
    </section>

    <section class="section section--raised">
      <div class="wrap split">
        <div appReveal="up">
          <h2>Expiry dates you can actually see</h2>
          <p>
            Every batch carries its own date, not the product's. Two tubs of yoghurt bought a week
            apart are two entries, and the one going off on Thursday is the one the app will suggest
            you cook with.
          </p>
          <ul class="ticks">
            <li>Separate stock for pantry, fridge and freezer</li>
            <li>Quantities in the units you actually buy in</li>
            <li>Barcode scanning for getting a shop's worth in quickly</li>
            <li>Optional prices, so the week's food has a number attached</li>
          </ul>
        </div>

        <div appReveal="up" [revealDelay]="110">
          <h2>Budget, if you want it</h2>
          <p>
            Price tracking is optional and off to one side, because not everybody wants their dinner
            audited. Turn it on and the plan carries an estimated cost, the shopping list adds up,
            and you can see which weeks were expensive and why.
          </p>
          <p>
            It is the same mechanism as the nutrients: the numbers are estimates, they are honest
            about being estimates, and they are enough to make a decision with.
          </p>
        </div>
      </div>
    </section>

    <!-- ────────────────────────────────────────────────── the rail ──── -->
    <section class="section section--tight">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow"><span class="eyebrow__dot"></span>What is on the shelf</p>
          <h2>Photographed, not stock.</h2>
          <p>
            Every food in the app carries its own picture, taken for the archive rather than bought
            from one. Here are twenty of them, each filed under the nutrient it is known for.
          </p>
        </div>
        <we-food-rail [locale]="locale" label="Foods in the archive, scrollable" />
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="closing" appReveal="zoom">
          <h2>Cook what you already bought.</h2>
          <div class="closing__actions">
            <we-store-button />
            <a class="btn btn--ghost" routerLink="/features">See the rest</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
        gap: 32px 26px;
      }

      .step__n {
        display: block;
        margin-bottom: 14px;
        font-family: var(--font-display);
        font-size: var(--step-2);
        font-weight: 600;
        line-height: 1;
        background: var(--grad-brand);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      .step h3 {
        margin-bottom: 12px;
        font-size: var(--step-1);
      }

      .step p {
        margin-bottom: 0;
        color: var(--text-dim);
        font-size: 0.96rem;
      }

      .split {
        display: grid;
        gap: clamp(36px, 5vw, 68px);
        align-items: start;

        h2 {
          margin-bottom: 20px;
          font-size: var(--step-3);
        }

        .ticks {
          margin-top: 22px;
        }
      }

      @media (min-width: 900px) {
        .split {
          grid-template-columns: 1fr 1fr;
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
          margin-bottom: 28px;
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
export class PantryComponent {
  /** The rail is shared with the hubs, so it asks for a locale. */
  readonly locale = DEFAULT_LOCALE;
  readonly site = SITE;
  readonly steps = STEPS;

  constructor() {
    inject(Seo).apply({
      title: 'Pantry & shopping',
      path: '/pantry',
      description:
        `Track what is actually in your kitchen — batches, quantities and expiry dates across ` +
        'pantry, fridge and freezer — plan meals from it, and get a shopping list that is the ' +
        'difference rather than the whole recipe. With optional price and budget tracking.',
    });
  }
}

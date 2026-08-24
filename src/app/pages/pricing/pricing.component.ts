import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { faqEntity, Seo } from '../../core/seo';
import { PLANS, SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

const FAQ = [
  {
    q: 'What do I get without paying?',
    a:
      'The entire USDA food database with full nutrient panels, natural-language search and every ' +
      'filter, the food diary, your own recipes, the pantry, shopping lists and workout logging. ' +
      'The free tier is the product, not a demo of it.',
  },
  {
    q: 'How do I cancel?',
    a:
      'In your Apple ID settings, under Subscriptions — the same place as every other App Store ' +
      'subscription. Cancelling there stops the renewal; you keep access until the period you paid ' +
      'for ends. Deleting the app does not cancel a subscription.',
  },
  {
    q: 'Can I switch tiers?',
    a:
      'Yes, through the App Store. Apple prorates the change, so you are not charged twice for the ' +
      'overlapping period.',
  },
  {
    q: 'Do you offer refunds?',
    a:
      'Refunds for App Store purchases are handled by Apple rather than by us, at ' +
      'reportaproblem.apple.com. We have no way to issue one directly.',
  },
];

@Component({
  selector: 'we-pricing',
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
      title="Pricing"
      eyebrow="Free, and then not much"
      lede="The database and the tools to use it cost nothing. You pay to remove advertising, and
            for the AI to do the planning."
    />

    <section class="section section--tight">
      <div class="wrap plans" appRevealStagger="80">
        @for (plan of plans; track plan.id) {
          <article class="plan card" [class.plan--featured]="plan.featured" appReveal="up">
            @if (plan.featured) {
              <span class="plan__flag">Most useful</span>
            }

            <h2>{{ plan.name }}</h2>
            <p class="plan__tag">{{ plan.tagline }}</p>

            <p class="plan__price">
              <span class="plan__amount">\${{ plan.monthly }}</span>
              <span class="plan__per">{{ plan.monthly === '0' ? 'forever' : '/ month' }}</span>
            </p>

            @if (plan.yearly) {
              <p class="plan__year">
                or \${{ plan.yearly }} a year
                <span class="plan__save">{{ plan.yearlyNote }}</span>
              </p>
            }

            @if (plan.inherits) {
              <p class="plan__inherits">Everything in {{ plan.inherits }}, plus:</p>
            }

            <ul class="ticks plan__features">
              @for (feature of plan.features; track feature) {
                <li>{{ feature }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--narrow centred">
        <we-store-button />
        <p class="note">
          All prices in US dollars, as listed on the App Store. What you are charged locally depends
          on your App Store region and its tax rules. Subscriptions renew automatically until
          cancelled.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap wrap--narrow">
        <div class="section-head">
          <h2>Before you subscribe</h2>
        </div>

        <div class="faq" appRevealStagger="60">
          @for (item of faq; track item.q) {
            <details appReveal="up">
              <summary>
                <h3>{{ item.q }}</h3>
                <span class="mark" aria-hidden="true"></span>
              </summary>
              <p>{{ item.a }}</p>
            </details>
          }
        </div>

        <p class="after">
          Anything else — <a routerLink="/support">support and FAQ</a>, or read the
          <a routerLink="/terms">terms</a>.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      .plans {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
        gap: 20px;
        align-items: start;
      }

      .plan {
        display: flex;
        flex-direction: column;
        height: 100%;

        h2 {
          font-size: var(--step-2);
          margin-bottom: 8px;
        }
      }

      .plan--featured {
        border-color: var(--leaf-dim);
        background:
          radial-gradient(90% 60% at 50% 0%, rgba(38, 208, 124, 0.13), transparent 70%),
          var(--glass);
      }

      .plan__flag {
        position: absolute;
        top: 0;
        right: 0;
        padding: 6px 16px;
        border-bottom-left-radius: var(--radius);
        background: var(--leaf);
        color: #04150e;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        text-transform: uppercase;
      }

      .plan__tag {
        color: var(--text-dim);
        font-size: var(--step--1);
        margin-bottom: 24px;
      }

      .plan__price {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 6px;
      }

      .plan__amount {
        font-family: var(--font-display);
        font-size: var(--step-3);
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.03em;
        color: var(--text);
      }

      .plan__per {
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .plan__year {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        color: var(--text-dim);
        font-size: var(--step--1);
      }

      .plan__save {
        padding: 3px 9px;
        border-radius: var(--radius-pill);
        background: rgba(38, 208, 124, 0.12);
        color: var(--mint);
        font-size: 0.72rem;
        font-weight: 600;
      }

      .plan__inherits {
        margin-bottom: 14px;
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .plan__features {
        margin-top: auto;
      }

      .plan__features li {
        font-size: 0.94rem;
      }

      .centred {
        text-align: center;
      }

      .note {
        margin-top: 22px;
        margin-bottom: 0;
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .faq {
        border-top: 1px solid var(--line);
      }

      .faq details {
        border-bottom: 1px solid var(--line);
      }

      .faq summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 22px 0;
        cursor: pointer;
        list-style: none;
      }

      .faq summary::-webkit-details-marker {
        display: none;
      }

      .faq h3 {
        font-family: var(--font-body);
        font-size: var(--step-0);
        font-weight: 600;
        transition: color 0.25s var(--ease);
      }

      .faq summary:hover h3 {
        color: var(--mint);
      }

      .faq p {
        margin: 0;
        padding-bottom: 24px;
        color: var(--text-dim);
      }

      .mark {
        position: relative;
        flex: none;
        width: 16px;
        height: 16px;
      }

      .mark::before,
      .mark::after {
        content: '';
        position: absolute;
        inset: 50% 0 auto;
        height: 1.6px;
        border-radius: 2px;
        background: var(--mint);
        transition: transform 0.3s var(--ease-out);
      }

      .mark::after {
        transform: rotate(90deg);
      }

      details[open] .mark::after {
        transform: rotate(0deg);
      }

      .after {
        margin-top: 34px;
        color: var(--text-dim);
        font-size: var(--step--1);
      }

      .after a {
        color: var(--mint);
      }
    `,
  ],
})
export class PricingComponent {
  readonly plans = PLANS;
  readonly faq = FAQ;

  constructor() {
    inject(Seo).apply({
      title: 'Pricing',
      path: '/pricing',
      description:
        `${SITE.name} is free: the whole USDA database, search, diary, pantry and workout logging ` +
        'cost nothing. Paid tiers from $2.99 a month remove advertising and add AI meal and ' +
        'training planning.',
      entities: [faqEntity(url('/pricing'), FAQ)],
    });
  }
}

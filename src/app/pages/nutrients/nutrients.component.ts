import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { faqEntity, Seo } from '../../core/seo';
import { FACTS, NUTRIENT_SLUGS } from '../../content/nutrient-facts';
import { EN_US } from '../../content/nutrients.en-US';
import { DATA, SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

/**
 * A few micronutrients worth naming, and what they are actually for.
 *
 * Deliberately phrased as physiology rather than as benefit: "carries oxygen"
 * is a fact about iron, where "boosts your energy" is a claim about you.
 */
const NUTRIENTS = [
  {
    name: 'Iron',
    role: 'Carried in haemoglobin, which is how oxygen reaches muscle.',
    found: 'Liver, lentils, spinach, red meat, fortified grains',
  },
  {
    name: 'Magnesium',
    role: 'A cofactor in several hundred enzyme reactions, muscle and nerve among them.',
    found: 'Pumpkin seeds, almonds, black beans, dark chocolate',
  },
  {
    name: 'Zinc',
    role: 'Immune function, wound healing and the sense of taste.',
    found: 'Oysters, beef, chickpeas, cashews, pumpkin seeds',
  },
  {
    name: 'Vitamin B6',
    role: 'Protein metabolism, and the making of several neurotransmitters.',
    found: 'Chickpeas, tuna, salmon, potatoes, bananas',
  },
  {
    name: 'Vitamin D',
    role: 'Calcium absorption and bone maintenance; most of it comes from sunlight, not food.',
    found: 'Oily fish, egg yolk, fortified milk',
  },
  {
    name: 'Folate',
    role: 'Cell division and DNA synthesis; the reason it matters before and during pregnancy.',
    found: 'Leafy greens, legumes, asparagus, fortified flour',
  },
] as const;

const FAQ = [
  {
    q: 'What exactly is USDA FoodData Central?',
    a:
      'It is the food composition database published by the United States Department of ' +
      'Agriculture. It records how much of each nutrient a food contains, measured in laboratories ' +
      'and compiled over decades. It covers raw ingredients, branded products and prepared dishes, ' +
      'and it is the reference most nutrition software in the world is ultimately built on.',
  },
  {
    q: 'Why does a nutrient sometimes show a dash instead of a number?',
    a:
      'Because the value was never measured for that food. A dash means "unknown"; a zero means ' +
      '"measured, and there is none". Collapsing the two would be the single most misleading thing ' +
      'a nutrition app can do, so the app keeps them apart everywhere it shows them.',
  },
  {
    q: 'How accurate are the numbers?',
    a:
      'They are good estimates, and they are estimates. The real nutrient content of a food varies ' +
      'with variety, soil, season, storage time and how it was cooked — boiling leaches water- ' +
      'soluble vitamins, for one. Use the figures to compare foods and spot patterns, not to ' +
      'certify an intake.',
  },
  {
    q: 'Does the app track macros as well?',
    a:
      'Yes — energy, protein, fat, carbohydrate, fibre and sugars, per serving and per 100 g, ' +
      'alongside the micronutrients. The point is not to replace macro tracking but to stop it ' +
      'being the only thing you can see.',
  },
];

@Component({
  selector: 'we-nutrients',
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
      title="Nutrients &amp; USDA data"
      eyebrow="The data"
      lede="Where the numbers come from, what they can tell you, and — just as important — what
            they cannot."
      [crumbs]="[]"
    />

    <section class="section">
      <div class="wrap wrap--narrow prose" appReveal="up">
        <h2>One database, and it is a good one</h2>
        <p>
          {{ site.name }} carries {{ data.foods.toLocaleString('en-US') }} foods from
          <a [href]="data.sourceUrl" target="_blank" rel="noopener noreferrer">{{ data.source }}</a
          >, bundled with the app rather than fetched from a server. That means a lookup is instant,
          it works on a plane, and nothing about what you searched for leaves the device.
        </p>
        <p>
          Each food carries {{ data.nutrientFields }} nutrient fields:
          {{ data.vitamins }} vitamins, {{ data.minerals }} minerals, the macronutrients, fibre and
          sugars. Values are available per serving and per 100 g, and you can switch between the two
          without leaving the panel — which matters more than it sounds, because almost every
          argument about whether a food is "high" in something is really an argument about the
          denominator.
        </p>

        <h2>American data, global usefulness</h2>
        <p>
          USDA data is American in origin and international in practice. Canada's tables draw on it
          heavily. Researchers worldwide cite it. Most countries have no national composition table
          of comparable depth at all, which is why software built anywhere tends to end up here.
        </p>
        <p>
          Composition is a property of the food, not of the border it crossed. A lentil in Sofia and
          a lentil in Seattle are the same lentil. What genuinely varies — soil, variety, storage,
          cooking — varies inside a country as much as between two of them, and the app treats every
          figure as an estimate for exactly that reason.
        </p>
      </div>
    </section>

    <section class="section section--raised">
      <div class="wrap">
        <div class="section-head section-head--centre">
          <p class="eyebrow"><span class="eyebrow__dot"></span>Worth knowing</p>
          <h2>Six nutrients people are short of</h2>
          <p>
            Not a diagnosis and not a shopping list — just what these things do, and which foods
            carry them.
          </p>
        </div>

        <div class="grid" appRevealStagger="70">
          @for (n of nutrients; track n.name) {
            <article class="card" appReveal="up">
              <h3>{{ n.name }}</h3>
              <p>{{ n.role }}</p>
              <p class="found"><strong>Found in:</strong> {{ n.found }}</p>
            </article>
          }
        </div>

        <div class="wrap--narrow disclaimer" style="margin-top: 40px">
          <p>
            Nothing on this page is medical advice, and no food prevents or treats a condition. If
            you think you are deficient in something, the answer is a blood test and a clinician,
            not an app.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap honesty">
        <div appReveal="up">
          <p class="eyebrow"><span class="eyebrow__dot"></span>Honesty</p>
          <h2>A dash is not a zero.</h2>
          <p>
            When a nutrient was never measured for a food, {{ site.name }} shows a dash. When it was
            measured and came back at zero, it shows a zero. Most apps quietly merge the two, and
            the result is a daily total that looks complete and is not.
          </p>
          <p>
            The same rule runs through everything derived: where a value is estimated rather than
            measured, it is labelled as estimated, and where a food has no data at all it is left
            out of the total rather than counted as nothing.
          </p>
        </div>

        <div class="honesty__shot" appReveal="zoom" [revealDelay]="120">
          <div class="device">
            <img
              src="/assets/shots/store-04.webp"
              alt="A nutrient detail panel in Wise Eating"
              width="640"
              height="1391"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--raised">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow"><span class="eyebrow__dot"></span>One nutrient at a time</p>
          <h2>What each one actually does</h2>
          <p>
            What it is for, how much you need at each age, the foods that carry the most of it —
            ranked from the same USDA records the app ships — and something to cook with it.
          </p>
        </div>

        <div class="index" appRevealStagger="60">
          @for (n of articles; track n.slug) {
            <a class="index__item card card--interactive" [routerLink]="'/nutrients/' + n.slug" appReveal="up">
              <span class="index__family">{{ n.family }}</span>
              <h3>{{ n.name }}</h3>
              <p>{{ n.lede }}</p>
              <span class="index__more">Read →</span>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap wrap--narrow">
        <div class="section-head">
          <h2>Questions about the data</h2>
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
          <we-store-button />
        </p>
        <p class="after-note">
          Or read how the data is used to <a routerLink="/features">plan a week</a>.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      .index {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 18px;
      }

      .index__item {
        display: flex;
        flex-direction: column;
      }

      .index__family {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--text-faint);
      }

      .index__item h3 {
        margin-block: 10px 12px;
        font-size: var(--step-1);
      }

      .index__item p {
        flex: 1;
        font-size: 0.86rem;
        line-height: 1.6;
        color: var(--text-dim);
      }

      .index__more {
        margin-top: 16px;
        color: var(--mint);
        font-size: 0.86rem;
        font-weight: 600;
        transition: transform 0.28s var(--ease-out);
      }

      .index__item:hover .index__more {
        transform: translateX(4px);
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
        gap: 20px;
      }

      .found {
        margin-bottom: 0;
        color: var(--text-dim);
        font-size: var(--step--1);
      }

      .honesty {
        display: grid;
        gap: clamp(36px, 5vw, 72px);
        align-items: center;

        h2 {
          margin-block: 20px;
        }
      }

      .honesty__shot {
        display: flex;
        justify-content: center;
      }

      @media (min-width: 900px) {
        .honesty {
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
        }
      }

      /* The disclosure list — same shape as the home page's, kept local
         because it is the only other place on the site that needs one. */
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
        margin-top: 46px;
        margin-bottom: 12px;
      }

      .after-note {
        color: var(--text-dim);
        font-size: var(--step--1);
      }

      .after-note a {
        color: var(--mint);
      }
    `,
  ],
})
export class NutrientsComponent {
  readonly site = SITE;
  readonly data = DATA;
  readonly nutrients = NUTRIENTS;
  readonly faq = FAQ;
  /**
   * The article index.
   *
   * English only, because this hub page is not translated yet — the articles
   * are. Listing a Bulgarian article here in English would be worse than not
   * listing it: the reader would follow it expecting English.
   */
  readonly articles = NUTRIENT_SLUGS.map((slug) => ({
    slug,
    family: FACTS[slug].family,
    name: EN_US.articles[slug].name,
    lede: EN_US.articles[slug].lede,
  }));

  constructor() {
    inject(Seo).apply({
      title: 'Nutrients & USDA data',
      path: '/nutrients',
      description:
        `Where ${SITE.name}'s numbers come from: ${DATA.foods.toLocaleString('en-US')} foods from ` +
        `${DATA.source}, ${DATA.vitamins} vitamins and ${DATA.minerals} minerals per food, shown ` +
        'per serving and per 100 g — with missing data marked as missing rather than as zero.',
      entities: [faqEntity(url('/nutrients'), FAQ)],
    });
  }
}

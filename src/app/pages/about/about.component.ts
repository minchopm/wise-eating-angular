import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { DATA, SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

@Component({
  selector: 'we-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeadComponent, StoreButtonComponent, RevealDirective],
  template: `
    <we-page-head
      title="About"
      eyebrow="Wise Eating LLC"
      lede="A small company with one product and a fairly narrow opinion about how food software
            ought to behave."
    />

    <section class="section">
      <div class="wrap wrap--narrow prose" appReveal="up">
        <h2>What we are trying to do</h2>
        <p>
          Almost every food app answers one question — how many calories was that — and treats the
          answer as the whole of nutrition. It is a useful number and a very small one. It says
          nothing about iron, or magnesium, or whether the week you felt terrible was different in
          any way you could act on.
        </p>
        <p>
          {{ site.name }} starts from composition data instead: the same tables dietitians, food
          scientists and researchers work from. {{ DATA.foods.toLocaleString('en-US') }} foods, each
          with {{ DATA.nutrientFields }} nutrient fields, on the device, searchable in ordinary
          English. Everything else in the app — the planning, the pantry, the training, the diary —
          exists so that data can be turned into a decision about dinner.
        </p>

        <h2>Who we are</h2>
        <p>
          {{ site.company }} is registered in the {{ site.companyCountry }}. The product is built by
          a small team; there is no growth department and nobody whose job is to increase your
          session length.
        </p>
        <p>
          The App Store listing is currently published under the developer account of
          {{ site.storeSeller }}, the company the app was originally built in. If you see that name
          on the store page or on a receipt, it is the same product and the same people.
        </p>

        <h2>Why USDA data, and why that makes it a global product</h2>
        <p>
          <a [href]="DATA.sourceUrl" target="_blank" rel="noopener noreferrer">{{ DATA.source }}</a>
          is published by the United States Department of Agriculture. It is the deepest public food
          composition dataset in existence, it is free to use, and it is the reference the rest of
          the field is measured against. Canada draws on it. Researchers everywhere cite it. Most
          countries have nothing comparable of their own.
        </p>
        <p>
          So yes: the numbers are American in origin. They are also the numbers, more or less,
          everywhere. Composition belongs to the food and not to the passport — and the things that
          genuinely do vary, like soil and storage and how long you boiled it, vary inside a country
          just as much as between two of them. The app treats every figure as an estimate for that
          reason, and says so on the panel rather than in a footnote.
        </p>

        <h2>What we will not do</h2>
        <ul>
          <li>
            <strong>We will not take your food diary.</strong> It stays on your device and in your
            own iCloud. There is no account, and no database of ours holding what you ate.
          </li>
          <li>
            <strong>We will not pretend to be a doctor.</strong> The app is a planning and education
            tool. It does not diagnose anything, and it says so wherever it might be mistaken for
            one.
          </li>
          <li>
            <strong>We will not round a missing number down to zero.</strong> Where a nutrient was
            never measured, the app shows a dash. It is a small thing and it is the difference
            between a total you can trust and one you cannot.
          </li>
          <li>
            <strong>We will not sell what you tell us.</strong> Not to advertisers, not to insurers,
            not to anybody.
          </li>
        </ul>

        <h2>Who it is for</h2>
        <p>
          People who want to eat better and are tired of being counted at. Dietitians,
          paediatricians, gastroenterologists, endocrinologists and therapists who need structured
          logging and a defensible reference table. Trainers and coaches who write plans for other
          people. Employers who would rather give their teams a real tool than a wellness leaflet.
        </p>

        <h2>Talk to us</h2>
        <p>
          Bug reports, feature requests, and disagreements about nutrition science are all welcome
          at <a [href]="'mailto:' + site.contactEmail">{{ site.contactEmail }}</a>. There is more on
          the <a routerLink="/support">support page</a>.
        </p>
      </div>
    </section>

    <section class="section section--tight">
      <div class="wrap wrap--narrow centred">
        <we-store-button />
      </div>
    </section>
  `,
  styles: [
    `
      .centred {
        text-align: center;
      }
    `,
  ],
})
export class AboutComponent {
  readonly site = SITE;
  readonly DATA = DATA;

  constructor() {
    inject(Seo).apply({
      title: 'About',
      path: '/about',
      description:
        `${SITE.company} builds ${SITE.name}, a nutrition and training app built on USDA ` +
        'FoodData Central. Why composition data rather than calorie counts, why an American ' +
        'dataset makes a global product, and what we will not do with yours.',
    });
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FACTS, NUTRIENT_SLUGS } from '../../content/nutrient-facts';
import { CONTENT, LIVE_LOCALES, contentFor } from '../../content/registry';
import { HubChrome } from '../../content/types';
import { Locale, localePath, storeUrl } from '../../core/locales';
import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { DATA, SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

interface Card {
  readonly slug: string;
  readonly path: string;
  readonly name: string;
  readonly lede: string;
  readonly family: string;
}

/**
 * The nutrient index for one translated language.
 *
 * Deliberately smaller than the English hub. English gets a long piece about
 * the database, the honesty rules and a screenshot; a translated language gets
 * three paragraphs, the articles it actually has, and a link onward to the
 * English page. Translating the whole hub would mean maintaining seven copies
 * of an essay that changes whenever the catalogue does, and a lean page that
 * is true beats a long one that is stale.
 *
 * Its real job is structural: without it, /de/nutrients/eisen and its
 * twenty-three siblings are linked from nothing, and the breadcrumb every one
 * of them carries points at a 404 we advertised ourselves.
 */
@Component({
  selector: 'we-locale-nutrients',
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
    @if (hub; as h) {
      <we-page-head [title]="h.title" [eyebrow]="h.eyebrow" [lede]="h.lede" [crumbs]="[]" />

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

      <section class="section">
        <div class="wrap wrap--narrow prose" appReveal="up">
          <h2>{{ h.dataHeading }}</h2>
          @for (para of body; track para) {
            <p>{{ para }}</p>
          }
          <p class="english-note">
            <span>{{ englishBefore }}</span>
            <a routerLink="/nutrients" hreflang="en">{{ h.englishLink }}</a>
            <span>{{ englishAfter }}</span>
          </p>
        </div>
      </section>

      <section class="section section--raised">
        <div class="wrap">
          <div class="section-head">
            <h2>{{ h.indexHeading }}</h2>
            <p>{{ h.indexLede }}</p>
          </div>

          <div class="index" appRevealStagger="60">
            @for (card of cards; track card.slug) {
              <a class="index__item card card--interactive" [routerLink]="card.path" appReveal="up">
                <span class="index__family">{{ card.family }}</span>
                <h3>{{ card.name }}</h3>
                <p>{{ card.lede }}</p>
                <span class="index__more">{{ h.read }}</span>
              </a>
            }
          </div>

          <div class="wrap--narrow disclaimer" style="margin-top: 40px">
            <p>{{ h.disclaimer }}</p>
          </div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="wrap wrap--narrow centred">
          <we-store-button [href]="store" />
          @if (chrome.storeNotLocalised) {
            <p class="cta-note">{{ chrome.storeNotLocalised }}</p>
          }
        </div>
      </section>
    }
  `,
  styles: [
    `
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

      .english-note {
        color: var(--text-faint);
        font-size: var(--step--1);
      }

      .index {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 14px;
      }

      .index__item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 22px;
        text-decoration: none;
      }

      .index__family {
        color: var(--text-faint);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .index__item h3 {
        margin: 0;
      }

      .index__item p {
        margin: 0;
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.65;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .index__more {
        margin-top: auto;
        padding-top: 10px;
        color: var(--mint);
        font-size: var(--step--1);
        font-weight: 600;
      }

      .centred {
        text-align: center;
      }

      .cta-note {
        margin-top: 14px;
        color: var(--text-faint);
        font-size: var(--step--1);
      }
    `,
  ],
})
export class LocaleNutrientsComponent {
  readonly locale: Locale;
  readonly hub: HubChrome | undefined;
  readonly chrome;
  readonly cards: Card[] = [];
  readonly body: string[] = [];
  readonly others: { locale: Locale; path: string }[] = [];
  readonly store: string;
  readonly englishBefore: string = '';
  readonly englishAfter: string = '';

  constructor() {
    this.locale = inject(ActivatedRoute).snapshot.data['locale'] as Locale;
    const content = contentFor(this.locale.code);
    this.chrome = content.chrome;
    this.hub = content.hub;
    this.store = storeUrl(this.locale, SITE.appStore);

    const hub = this.hub;
    if (!hub) return;

    // Numbers are substituted rather than written into each translation, so
    // that changing the catalogue size changes it in one place instead of
    // seven — the same rule as nutrient-facts.ts, for the same reason.
    const fill = (text: string) =>
      text
        .replace('{foods}', DATA.foods.toLocaleString(this.locale.code))
        .replace('{fields}', String(DATA.nutrientFields))
        .replace('{vitamins}', String(DATA.vitamins))
        .replace('{minerals}', String(DATA.minerals))
        .replace('{source}', DATA.source);

    this.body = hub.dataBody.map(fill);

    const [before, after] = fill(hub.englishNote).split('{href}');
    this.englishBefore = before ?? '';
    this.englishAfter = after ?? '';

    // Ordered by NUTRIENT_SLUGS rather than by the object's own key order, so
    // every language presents them in the same sequence.
    this.cards = NUTRIENT_SLUGS.filter((slug) => slug in content.articles).map((slug) => {
      const article = content.articles[slug];
      const family = FACTS[slug].family;
      return {
        slug,
        path: localePath(this.locale, `/nutrients/${slug}`),
        name: article.name,
        lede: article.lede,
        family:
          family === 'vitamin'
            ? this.chrome.familyVitamin
            : family === 'mineral'
              ? this.chrome.familyMineral
              : this.chrome.familyMacronutrient,
      };
    });

    // English is always in the set — /nutrients is the hub every language's
    // index defers to — and then every other language that has an index.
    const indexed = LIVE_LOCALES.filter(
      (locale) => !locale.slug || CONTENT[locale.code].hub !== undefined,
    );

    this.others = indexed
      .filter((locale) => locale.code !== this.locale.code)
      .map((locale) => ({ locale, path: localePath(locale, '/nutrients') }));

    const self = localePath(this.locale, '/nutrients');

    inject(Seo).apply({
      title: hub.title,
      path: self,
      description: fill(hub.description),
      locale: this.locale.code,
      alternates: indexed.map((locale) => ({
        hreflang: locale.hreflang,
        path: localePath(locale, '/nutrients'),
      })),
      entities: [
        {
          '@type': 'CollectionPage',
          '@id': `${url(self)}#collection`,
          name: hub.title,
          description: fill(hub.description),
          inLanguage: this.locale.code,
          isPartOf: { '@id': url('/#website') },
          hasPart: this.cards.map((card) => ({
            '@type': 'Article',
            '@id': `${url(card.path)}#article`,
            name: card.name,
            url: url(card.path),
          })),
        },
      ],
    });
  }
}

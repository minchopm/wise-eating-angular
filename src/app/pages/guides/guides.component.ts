import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { GUIDE_FACTS, GUIDE_SLUGS, GuideFamily } from '../../content/guide-facts';
import { GUIDE_CONTENT, GUIDE_LOCALES, guidesFor } from '../../content/guide-registry';
import { GuideChrome } from '../../content/guide-types';
import { DEFAULT_LOCALE, Locale, localePath } from '../../core/locales';
import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';

interface Card {
  readonly slug: string;
  readonly path: string;
  readonly short: string;
  readonly title: string;
  readonly lede: string;
}

interface Group {
  readonly family: GuideFamily;
  readonly label: string;
  readonly blurb: string;
  readonly cards: readonly Card[];
}

/**
 * The guide index.
 *
 * Grouped by family rather than listed flat, because the three families answer
 * different questions and a reader arrives wanting one of them. Someone who
 * came looking for why their calves cramp is not browsing; putting the
 * training guides in a heap with the psychology ones would make both harder to
 * find.
 */
@Component({
  selector: 'we-guides',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeadComponent, RevealDirective, RevealStaggerDirective],
  template: `
    <we-page-head
      [title]="title"
      eyebrow="Guides"
      [lede]="lede"
      [crumbs]="[]"
    />

    @for (group of groups; track group.family) {
      <section class="section" [class.section--raised]="group.family === 'shortfall'">
        <div class="wrap">
          <div class="section-head">
            <h2>{{ group.label }}</h2>
            <p>{{ group.blurb }}</p>
          </div>

          <div class="index" appRevealStagger="55">
            @for (card of group.cards; track card.slug) {
              <a
                class="index__item card card--interactive"
                [routerLink]="card.path"
                appReveal="up"
              >
                <h3>{{ card.short }}</h3>
                <p class="index__claim">{{ card.title }}</p>
                <p>{{ card.lede }}</p>
              </a>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [
    `
      .index {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 14px;
      }

      .index__item {
        display: flex;
        flex-direction: column;
        gap: 9px;
        padding: 24px;
        text-decoration: none;
      }

      .index__item h3 {
        margin: 0;
        color: var(--text-faint);
        font-family: var(--font-body);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .index__claim {
        margin: 0;
        color: var(--text);
        font-family: var(--font-display);
        font-size: var(--step-1);
        line-height: 1.25;
      }

      .index__item p:last-child {
        margin: 0;
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `,
  ],
})
export class GuidesComponent {
  readonly locale: Locale;
  readonly chrome: GuideChrome;
  readonly groups: Group[] = [];
  readonly title = 'Training, recovery and the rest of the panel';
  readonly lede =
    'What the evidence actually supports about eating around training — and what it says about ' +
    'the two things nobody puts in a macro calculator: shortfalls you cannot feel, and the ' +
    'reasons eating is rarely only about food.';

  constructor() {
    const route = inject(ActivatedRoute).snapshot;
    this.locale = (route.data['locale'] as Locale | undefined) ?? DEFAULT_LOCALE;
    const content = guidesFor(this.locale.code);
    this.chrome = content.chrome;

    const blurbs: Record<GuideFamily, string> = {
      training:
        'Protein, iron, bone and the supplements worth the money — with the evidence graded, ' +
        'because sports nutrition is a field where confident claims outnumber settled ones.',
      shortfall:
        'You can eat more than enough and still be short. What that looks like, who it happens ' +
        'to, and how to find it.',
      mind:
        'Why eating is rarely only about food. These describe mechanisms rather than offering ' +
        'treatment, and they end with somewhere real to go.',
    };

    const labels: Record<GuideFamily, string> = {
      training: this.chrome.familyTraining,
      shortfall: this.chrome.familyShortfall,
      mind: this.chrome.familyMind,
    };

    // Ordered by GUIDE_SLUGS rather than by object key order, so every
    // language presents them in the same sequence.
    const families: GuideFamily[] = ['training', 'shortfall', 'mind'];
    this.groups = families
      .map((family) => ({
        family,
        label: labels[family],
        blurb: blurbs[family],
        cards: GUIDE_SLUGS.filter(
          (slug) => GUIDE_FACTS[slug].family === family && slug in content.guides,
        ).map((slug) => {
          const guide = content.guides[slug];
          return {
            slug,
            path: localePath(this.locale, `/guides/${slug}`),
            short: guide.short,
            title: guide.title,
            lede: guide.lede,
          };
        }),
      }))
      .filter((group) => group.cards.length > 0);

    const self = localePath(this.locale, '/guides');
    const all = this.groups.flatMap((g) => g.cards);

    inject(Seo).apply({
      title: this.title,
      path: self,
      description:
        'What the evidence supports about eating around training, the shortfalls you cannot ' +
        'feel, and why eating is rarely only about food — with every figure graded by how ' +
        'firmly it is held.',
      locale: this.locale.code,
      alternates: GUIDE_LOCALES.map((locale) => ({
        hreflang: locale.hreflang,
        path: localePath(locale, '/guides'),
      })),
      entities: [
        {
          '@type': 'CollectionPage',
          '@id': `${url(self)}#collection`,
          name: this.title,
          inLanguage: this.locale.code,
          isPartOf: { '@id': url('/#website') },
          hasPart: all.map((card) => ({
            '@type': 'Article',
            '@id': `${url(card.path)}#article`,
            name: card.title,
            url: url(card.path),
          })),
        },
      ],
    });
  }
}

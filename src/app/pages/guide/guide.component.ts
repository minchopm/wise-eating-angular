import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FACTS } from '../../content/nutrient-facts';
import { GUIDE_FACTS, GuideFacts, Strength } from '../../content/guide-facts';
import { GUIDE_CONTENT, GUIDE_LOCALES, guidesFor } from '../../content/guide-registry';
import { GuideChrome, LocalisedGuide } from '../../content/guide-types';
import { contentFor } from '../../content/registry';
import { trackReadDepth } from '../../core/analytics';
import { DEFAULT_LOCALE, Locale, localePath, storeUrl } from '../../core/locales';
import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

/** One row of the claims table: the figure from facts, the words from a translation. */
interface ClaimRow {
  readonly what: string;
  readonly figure: string;
  readonly note: string;
  readonly strength: Strength;
  readonly strengthLabel: string;
}

interface SeeAlsoLink {
  readonly label: string;
  readonly path: string;
}

/**
 * One guide, in one language.
 *
 * Same split as the nutrient article and for the same reason: the figures come
 * from guide-facts.ts and are identical in every language, the prose comes
 * from a per-locale file, and they are joined by id.
 *
 * What is different here is the strength rating. Every figure on a guide
 * carries one, and it is rendered rather than hidden, because these are not
 * the settled committee numbers the nutrient articles quote. Saying "this is
 * contested" next to the anabolic window is the difference between a guide and
 * a supplement advert.
 */
@Component({
  selector: 'we-guide',
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
    @if (guide; as g) {
      <we-page-head
        [title]="g.short"
        [eyebrow]="family"
        [lede]="g.lede"
        [meta]="chrome.reviewed + ' ' + reviewed"
        [crumbs]="[{ label: chrome.allGuides, path: localised('/guides') }]"
      />

      <!-- ─────────────────────────────────────────── the belief named ── -->
      <section class="section section--tight">
        <div class="wrap wrap--narrow" appReveal="up">
          <div class="belief">
            <p class="belief__label">{{ chrome.commonBelief }}</p>
            <p class="belief__quote">{{ g.commonBelief }}</p>
          </div>
        </div>
      </section>

      <!-- ───────────────────────────────────────────────── the argument ── -->
      <section class="section">
        <div class="wrap wrap--narrow prose">
          <h2 class="visually-hidden">{{ chrome.whatEvidenceSays }}</h2>
          @for (part of g.sections; track part.heading) {
            <div appReveal="up">
              <h3>{{ part.heading }}</h3>
              @for (para of part.body; track para) {
                <p>{{ para }}</p>
              }
            </div>
          }
        </div>
      </section>

      <!-- ─────────────────────────────────────────────────── the numbers ── -->
      @if (claims.length) {
        <section class="section section--raised">
          <div class="wrap wrap--narrow">
            <div class="section-head">
              <h2>{{ chrome.numbers }}</h2>
            </div>

            <div class="table-wrap" appReveal="up">
              <table class="claims">
                <caption class="visually-hidden">
                  {{
                    chrome.numbers
                  }}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{{ chrome.colWhat }}</th>
                    <th scope="col">{{ chrome.colFigure }}</th>
                    <th scope="col">{{ chrome.colStrength }}</th>
                  </tr>
                </thead>
                <tbody>
                  @for (row of claims; track row.what) {
                    <tr>
                      <th scope="row">
                        {{ row.what }}
                        @if (row.note) {
                          <span class="claims__note">{{ row.note }}</span>
                        }
                      </th>
                      <td class="num">{{ row.figure }}</td>
                      <td>
                        <span class="pill" [class]="'pill--' + row.strength">{{
                          row.strengthLabel
                        }}</span>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>

            @if (g.claimsNote) {
              <p class="after-table">{{ g.claimsNote }}</p>
            }
            <p class="after-table">{{ chrome.strengthNote }}</p>
          </div>
        </section>
      }

      <!-- ───────────────────────────────────────────────────── mid cta ── -->
      @if (chrome.ctaMid && !careNotice) {
        <section class="section section--tight">
          <div class="wrap wrap--narrow centred">
            <p class="cta-line">{{ chrome.ctaMid }}</p>
            <we-store-button [href]="store" />
          </div>
        </section>
      }

      <!-- ────────────────────────────────────────────────────── practical ── -->
      <section class="section">
        <div class="wrap wrap--narrow">
          <div class="section-head">
            <h2>{{ chrome.practical }}</h2>
          </div>
          <ol class="steps" appRevealStagger="60">
            @for (step of g.practical; track step.title) {
              <li appReveal="up">
                <h3>{{ step.title }}</h3>
                <p>{{ step.detail }}</p>
              </li>
            }
          </ol>
        </div>
      </section>

      <!-- ─────────────────────────────────────────────────── see also ──── -->
      @if (seeAlso.length) {
        <section class="section section--tight">
          <div class="wrap wrap--narrow">
            <div class="section-head">
              <h2>{{ chrome.seeAlso }}</h2>
            </div>
            <div class="chips" appRevealStagger="50">
              @for (item of seeAlso; track item.path) {
                <a class="chip chip--link" [routerLink]="item.path" appReveal="up">{{
                  item.label
                }}</a>
              }
            </div>
          </div>
        </section>
      }

      <!-- ──────────────────────────────────────────────────── sources ──── -->
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

          @if (careNotice) {
            <div class="care">
              <h3>{{ chrome.careHeading }}</h3>
              <p>{{ chrome.careBody }}</p>
              <ul class="care__links">
                @for (link of chrome.careLinks; track link.url) {
                  <li>
                    <a [href]="link.url" target="_blank" rel="noopener noreferrer">{{
                      link.label
                    }}</a>
                  </li>
                }
              </ul>
            </div>
          } @else {
            <div class="disclaimer">
              <p>{{ chrome.disclaimer }}</p>
            </div>
          }
        </div>
      </section>

      <!-- ──────────────────────────────────────────────────────── cta ──── -->
      @if (!careNotice) {
        <section class="section section--tight">
          <div class="wrap wrap--narrow centred">
            <p class="cta-line">{{ chrome.ctaLine }}</p>
            <we-store-button [href]="store" />
          </div>
        </section>
      }
    }
  `,
  styles: [
    `
      .belief {
        padding: 22px 26px;
        border-left: 3px solid var(--line-strong);
        background: var(--fill);
        border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      }

      .belief__label {
        margin: 0 0 8px;
        color: var(--text-faint);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .belief__quote {
        margin: 0;
        color: var(--text-soft);
        font-family: var(--font-display);
        font-size: var(--step-1);
        line-height: 1.45;
      }

      .table-wrap {
        overflow-x: auto;
        border: 1px solid var(--line);
        border-radius: var(--radius);
      }

      .claims {
        width: 100%;
        min-width: 480px;
        border-collapse: collapse;
        font-size: var(--step--1);
      }

      .claims th,
      .claims td {
        padding: 13px 18px;
        text-align: left;
        border-bottom: 1px solid var(--line);
        vertical-align: top;
      }

      .claims tbody tr:last-child th,
      .claims tbody tr:last-child td {
        border-bottom: 0;
      }

      .claims thead th {
        background: var(--fill);
        color: var(--text);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .claims tbody th {
        font-weight: 500;
        color: var(--text-soft);
      }

      .claims__note {
        display: block;
        margin-top: 3px;
        color: var(--text-faint);
        font-size: 0.86em;
      }

      .claims .num {
        font-variant-numeric: tabular-nums;
        font-weight: 650;
        color: var(--text);
        white-space: nowrap;
      }

      .pill {
        display: inline-block;
        padding: 3px 11px;
        border-radius: var(--radius-pill);
        border: 1px solid var(--line-strong);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        white-space: nowrap;
      }

      .pill--established {
        border-color: var(--leaf);
        color: var(--leaf-deep);
      }

      .pill--probable {
        border-color: var(--amber);
        color: var(--amber);
      }

      .pill--contested {
        border-color: var(--clay);
        color: var(--clay);
      }

      .after-table {
        margin-top: 20px;
        margin-bottom: 0;
        max-width: 78ch;
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.7;
      }

      .steps {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 4px;
        counter-reset: step;
      }

      .steps li {
        position: relative;
        padding: 18px 22px 18px 58px;
        border: 1px solid var(--line);
        border-radius: var(--radius-sm);
        background: var(--surface);
        counter-increment: step;
      }

      .steps li::before {
        content: counter(step);
        position: absolute;
        left: 22px;
        top: 19px;
        color: var(--text-faint);
        font-family: var(--font-display);
        font-size: 1.05rem;
        font-variant-numeric: tabular-nums;
      }

      .steps h3 {
        margin: 0 0 5px;
        font-size: 1rem;
      }

      .steps p {
        margin: 0;
        color: var(--text-dim);
        font-size: var(--step--1);
        line-height: 1.65;
      }

      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .chip--link:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      /**
       * The referral block.
       *
       * Deliberately heavier than the ordinary disclaimer, and deliberately in
       * place of the download button rather than above it. A page about the
       * binge cycle that ends by selling an app is the wrong page.
       */
      .care {
        margin-top: 34px;
        padding: 26px 28px;
        border: 1px solid var(--clay);
        border-radius: var(--radius);
        background: var(--fill);
      }

      .care h3 {
        margin: 0 0 10px;
        font-size: 1.1rem;
      }

      .care p {
        margin: 0 0 16px;
        color: var(--text-soft);
      }

      .care__links {
        margin: 0;
        padding-left: 20px;
        display: grid;
        gap: 7px;
      }

      .centred {
        text-align: center;
      }

      .cta-line {
        margin-bottom: 20px;
        font-family: var(--font-display);
        font-size: var(--step-1);
        color: var(--text-soft);
      }
    `,
  ],
})
export class GuideComponent {
  readonly locale: Locale;
  readonly chrome: GuideChrome;
  readonly guide: LocalisedGuide | undefined;
  readonly facts: GuideFacts | undefined;

  readonly claims: ClaimRow[] = [];
  readonly sources: { label: string; url: string }[] = [];
  readonly seeAlso: SeeAlsoLink[] = [];
  readonly family: string = '';
  readonly reviewed: string = '';
  readonly careNotice: boolean = false;
  readonly store: string = SITE.appStore;

  localised(path: string): string {
    return localePath(this.locale, path);
  }

  constructor() {
    const route = inject(ActivatedRoute).snapshot;
    const slug = route.paramMap.get('slug') ?? '';

    this.locale = (route.data['locale'] as Locale | undefined) ?? DEFAULT_LOCALE;
    const content = guidesFor(this.locale.code);
    this.chrome = content.chrome;
    this.guide = content.guides[slug];
    this.facts = GUIDE_FACTS[slug];
    this.store = storeUrl(this.locale, SITE.appStore);

    if (!this.guide || !this.facts) return;
    const guide = this.guide;
    const facts = this.facts;

    this.careNotice = facts.careNotice === true;

    // Measured everywhere except the care pages. How long someone lingers on
    // a page about restriction is not ours to collect: it would tell us
    // nothing we would act on, and the person it describes did not come here
    // to be studied.
    if (!this.careNotice) {
      trackReadDepth({ kind: 'guide', slug, locale: this.locale.code });
    }

    const strengthLabel: Record<Strength, string> = {
      established: this.chrome.strengthEstablished,
      probable: this.chrome.strengthProbable,
      contested: this.chrome.strengthContested,
    };

    // Figures from facts, words from the translation, joined by id — so a row
    // cannot end up with the wrong number however the wording is edited.
    this.claims = facts.claims.map((claim) => {
      const wording = guide.claims[claim.id];
      return {
        what: wording?.what ?? claim.id,
        figure: claim.value,
        note: wording?.note ?? '',
        strength: claim.strength,
        strengthLabel: strengthLabel[claim.strength],
      };
    });

    this.sources = facts.sources.map((source) => ({
      url: source.url,
      label: guide.sources[source.id] ?? source.url,
    }));

    this.family =
      facts.family === 'training'
        ? this.chrome.familyTraining
        : facts.family === 'shortfall'
          ? this.chrome.familyShortfall
          : this.chrome.familyMind;

    // Only nutrients this language has actually written. A guide that links to
    // an article nobody translated sends the reader to a 404 we advertised.
    const articles = contentFor(this.locale.code).articles;
    this.seeAlso = guide.seeAlso
      .filter((nutrient) => nutrient in articles && nutrient in FACTS)
      .map((nutrient) => ({
        label: articles[nutrient].name,
        path: localePath(this.locale, `/nutrients/${nutrient}`),
      }));

    this.reviewed = new Date(facts.updated).toLocaleDateString(this.locale.code, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const path = `/guides/${slug}`;
    const translated = GUIDE_LOCALES.filter((locale) => slug in GUIDE_CONTENT[locale.code].guides);
    const self = localePath(this.locale, path);

    inject(Seo).apply({
      title: guide.short,
      path: self,
      description: guide.description,
      updated: facts.updated,
      locale: this.locale.code,
      ads: !this.careNotice,
      alternates: translated.map((locale) => ({
        hreflang: locale.hreflang,
        path: localePath(locale, path),
      })),
      crumbs: [{ label: this.chrome.allGuides, path: localePath(this.locale, '/guides') }],
      entities: [
        {
          '@type': 'Article',
          '@id': `${url(self)}#article`,
          headline: guide.title,
          description: guide.description,
          datePublished: facts.updated,
          dateModified: facts.updated,
          inLanguage: this.locale.code,
          isPartOf: { '@id': url('/#website') },
          author: { '@id': url('/#organization') },
          publisher: { '@id': url('/#organization') },
          citation: this.sources.map((source) => ({
            '@type': 'CreativeWork',
            name: source.label,
            url: source.url,
          })),
          mainEntityOfPage: { '@id': `${url(self)}#webpage` },
        },
      ],
    });
  }
}

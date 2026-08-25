import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { RouterLink } from '@angular/router';

import { contentFor } from '../content/registry';
import { EN_US } from '../content/nutrients.en-US';
import { ShellChrome } from '../content/types';
import { DEFAULT_LOCALE, localeBySlug } from '../core/locales';
import { DATA, SITE } from '../core/site';
import { StoreButtonComponent } from './store-button';

/**
 * The site footer.
 *
 * Carries the whole navigation rather than a subset. On a prerendered site the
 * footer is the one place every page links to every other page, which is what
 * makes a crawler's job — and a reader's — straightforward.
 */
@Component({
  selector: 'we-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, StoreButtonComponent],
  template: `
    <footer class="foot">
      <div class="wrap">
        <div class="foot__top">
          <div class="foot__brand">
            <a class="foot__logo" routerLink="/">
              <img
                src="/assets/mark.png"
                [alt]="site.name + ' logo'"
                width="46"
                height="46"
                loading="lazy"
                decoding="async"
              />
              <span>{{ site.name }}</span>
            </a>
            <p>{{ tagline }}</p>
            <we-store-button />
          </div>

          <nav
            class="foot__links"
            aria-label="Footer"
            [attr.lang]="shell.englishPages ? 'en' : null"
          >
            <div>
              <h4>{{ shell.product }}</h4>
              <a routerLink="/features">Features</a>
              <a routerLink="/nutrients">Nutrients &amp; USDA data</a>
              <a routerLink="/workouts">Training</a>
              <a routerLink="/pantry">Pantry &amp; shopping</a>
              <a routerLink="/pricing">Pricing</a>
            </div>

            <div>
              <h4>{{ shell.learn }}</h4>
              <a routerLink="/baby-feeding">Feeding a baby</a>
              <a [href]="data.sourceUrl" target="_blank" rel="noopener noreferrer">
                USDA FoodData Central
              </a>
              <a routerLink="/about">About us</a>
              <a routerLink="/support">Support &amp; FAQ</a>
            </div>

            <div>
              <h4>{{ shell.legal }}</h4>
              <a routerLink="/privacy">Privacy Policy</a>
              <a routerLink="/terms">Terms of Service</a>
              <a [href]="'mailto:' + site.contactEmail">{{ shell.contact }}</a>
            </div>
          </nav>
        </div>

        @if (shell.englishPages) {
          <p class="foot__english">{{ shell.englishPages }}</p>
        }

        <p class="foot__note">{{ note }}</p>

        <div class="foot__bottom">
          <p>&copy; {{ year }} {{ site.company }}. {{ shell.rights }}</p>
          <p class="foot__store">{{ storeNote }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .foot {
        position: relative;
        margin-top: clamp(60px, 8vw, 110px);
        padding-block: clamp(56px, 7vw, 92px) 36px;
        border-top: 1px solid var(--line);
        background:
          radial-gradient(80% 130% at 50% 0%, rgba(38, 208, 124, 0.08), transparent 62%), var(--ink);
      }

      .foot__top {
        display: grid;
        gap: clamp(40px, 5vw, 72px);
        margin-bottom: 56px;
      }

      .foot__brand {
        max-width: 380px;

        p {
          color: var(--text-dim);
          font-size: var(--step--1);
          margin-bottom: 26px;
        }
      }

      .foot__logo {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
        font-family: var(--font-display);
        font-size: 1.3rem;
        font-weight: 600;

        img {
          width: 46px;
          height: 46px;
          object-fit: contain;
          filter: drop-shadow(0 3px 14px rgba(110, 231, 183, 0.3));
        }
      }

      .foot__links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
        gap: 36px;

        h4 {
          margin-bottom: 18px;
          font-family: var(--font-body);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--text-faint);
        }

        a {
          display: block;
          margin-bottom: 11px;
          color: var(--text-soft);
          font-size: 0.94rem;

          &:hover {
            color: var(--mint);
          }
        }
      }

      .foot__note {
        padding-top: 30px;
        border-top: 1px solid var(--line);
        color: var(--text-faint);
        font-size: 0.8rem;
        line-height: 1.65;
        max-width: 92ch;
      }

      .foot__bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 8px 28px;
        padding-top: 22px;
        border-top: 1px solid var(--line);

        p {
          margin: 0;
          color: var(--text-faint);
          font-size: 0.8rem;
        }
      }

      .foot__store {
        opacity: 0.8;
      }

      .foot__english {
        margin: 0 0 18px;
        color: var(--text-faint);
        font-size: 0.8rem;
      }

      @media (min-width: 860px) {
        .foot__top {
          grid-template-columns: minmax(300px, 1fr) 1.4fr;
        }
      }
    `,
  ],
})
export class SiteFooterComponent {
  readonly site = SITE;
  readonly data = DATA;
  readonly year = SITE.copyrightYear;

  readonly shell: ShellChrome;
  readonly tagline: string;
  readonly note: string;
  readonly storeNote: string;

  constructor() {
    // The footer sits outside the router outlet, so it is not handed a
    // locale the way the article pages are. Two obvious routes do not work:
    // Router.url is still empty while prerendering, because the footer is
    // built during the navigation that would set it, and the activated route
    // has no children yet at that moment either. Both produced an English
    // footer on every page.
    //
    // PlatformLocation is initialised from the URL being rendered before any
    // of that starts, which makes it the one source available this early.
    const slug = inject(PlatformLocation).pathname.split('/').filter(Boolean)[0] ?? '';
    const locale = localeBySlug(slug) ?? DEFAULT_LOCALE;
    this.shell = contentFor(locale.code).shell ?? EN_US.shell!;

    const fill = (text: string) =>
      text
        .replace('{foods}', DATA.foods.toLocaleString(locale.code))
        .replace('{source}', DATA.source)
        .replace('{name}', SITE.name)
        .replace('{seller}', SITE.storeSeller);

    this.tagline = fill(this.shell.tagline);
    this.note = fill(this.shell.note);
    this.storeNote = fill(this.shell.storeNote);
  }
}

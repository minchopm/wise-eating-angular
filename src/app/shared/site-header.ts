import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { isBrowser } from '../core/motion';
import { ScrollService } from '../core/scroll.service';
import { SITE } from '../core/site';
import { StoreButtonComponent } from './store-button';

interface NavItem {
  readonly label: string;
  readonly path: string;
}

const NAV: readonly NavItem[] = [
  { label: 'Features', path: '/features' },
  { label: 'Nutrients', path: '/nutrients' },
  { label: 'Guides', path: '/guides' },
  { label: 'Training', path: '/workouts' },
  { label: 'Kitchen', path: '/pantry' },
  { label: 'Pricing', path: '/pricing' },
];

/**
 * The site header.
 *
 * Transparent over the hero and glass once the page has moved, so the WebGL
 * scene is never framed by a bar. The mobile menu is a full-height panel
 * rather than a dropdown, because five items and a download button do not fit
 * comfortably in anything smaller.
 */
@Component({
  selector: 'we-site-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, RouterLink, RouterLinkActive, StoreButtonComponent],
  template: `
    <header class="bar ground-dark" [ngClass]="{ 'is-solid': scrolled(), 'is-open': open() }">
      <div class="wrap bar__inner">
        <a class="brand" routerLink="/" (click)="close()">
          <img
            class="brand__mark"
            src="/assets/mark.png"
            [alt]="name + ' logo'"
            width="40"
            height="40"
            decoding="async"
          />
          <span class="brand__name">{{ name }}</span>
        </a>

        <nav class="nav" [attr.aria-label]="'Primary'">
          @for (item of nav; track item.path) {
            <a
              class="nav__link"
              [routerLink]="item.path"
              routerLinkActive="is-active"
              (click)="close()"
              >{{ item.label }}</a
            >
          }
        </nav>

        <div class="bar__cta">
          <we-store-button />
        </div>

        <button
          class="burger"
          type="button"
          [attr.aria-expanded]="open()"
          aria-controls="mobile-nav"
          [attr.aria-label]="open() ? 'Close menu' : 'Open menu'"
          (click)="toggle()"
        >
          <span></span><span></span>
        </button>
      </div>
    </header>

    <!-- Kept in the DOM and hidden, rather than conditionally rendered, so the
         prerendered HTML carries every navigation link for a crawler to walk. -->
    <div
      id="mobile-nav"
      class="sheet ground-dark"
      [class.is-open]="open()"
      [attr.inert]="open() ? null : ''"
    >
      <nav class="sheet__nav" aria-label="Primary, mobile">
        @for (item of nav; track item.path) {
          <a [routerLink]="item.path" routerLinkActive="is-active" (click)="close()">{{
            item.label
          }}</a>
        }
        <a routerLink="/about" (click)="close()">About</a>
        <a routerLink="/support" (click)="close()">Support</a>
      </nav>
      <we-store-button />
    </div>
  `,
  styles: [
    `
      /**
       * The bar is always painted, and always dark.
       *
       * It used to be transparent until scrolled, which worked when the whole
       * site was dark: the hero simply showed through. Now the body is warm
       * paper and the bar's own type is near-white, so a transparent bar over
       * an article was white text on cream — invisible. Painting it always
       * costs the bleed-through at the very top of the home page and buys a
       * header that is readable on every route, which is not a close call.
       *
       * Dark on paper also does something the transparent version could not:
       * with the footer dark as well, the page is bracketed top and bottom in
       * the same ink, and the daylight in between reads as deliberate rather
       * than as a theme that gave up halfway.
       */
      .bar {
        position: fixed;
        inset: 0 0 auto;
        z-index: 100;
        padding-block: 18px;
        background: var(--glass-strong);
        backdrop-filter: var(--blur);
        -webkit-backdrop-filter: var(--blur);
        transition:
          background-color 0.4s var(--ease),
          padding 0.4s var(--ease),
          border-color 0.4s var(--ease);
        border-bottom: 1px solid var(--line);
      }

      .bar.is-solid,
      .bar.is-open {
        padding-block: 12px;
        background: var(--glass-strong);
        border-bottom-color: var(--line);
        backdrop-filter: var(--blur);
        -webkit-backdrop-filter: var(--blur);
      }

      .bar__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 11px;
        flex: none;
      }

      /* The apple, transparent, on the page itself — not the boxed home-screen
         icon, whose pale rounded tile reads as a mistake against a dark page.
         The drop shadow is the glass catching the page's own light. */
      .brand__mark {
        width: 40px;
        height: 40px;
        object-fit: contain;
        filter: drop-shadow(0 3px 12px rgba(110, 231, 183, 0.35));
        transition: transform 0.4s var(--ease-out);
      }

      .brand:hover .brand__mark {
        transform: scale(1.06) rotate(-4deg);
      }

      .brand__name {
        font-family: var(--font-display);
        font-size: 1.16rem;
        font-weight: 600;
        letter-spacing: -0.02em;
      }

      .nav {
        display: none;
        gap: 30px;
      }

      .nav__link {
        position: relative;
        color: var(--text-dim);
        font-size: 0.95rem;
        font-weight: 500;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: -6px;
          height: 1px;
          background: var(--leaf);
          transition: right 0.32s var(--ease-out);
        }

        &:hover {
          color: var(--text);
        }

        &.is-active {
          color: var(--text);
        }

        &.is-active::after,
        &:hover::after {
          right: 0;
        }
      }

      .bar__cta {
        display: none;
      }

      /* --------------------------------------------------------- burger */

      .burger {
        display: grid;
        place-content: center;
        gap: 6px;
        width: 44px;
        height: 44px;
        padding: 0;
        border: 1px solid var(--line-strong);
        border-radius: 12px;
        background: var(--fill);
        cursor: pointer;

        span {
          display: block;
          width: 18px;
          height: 1.6px;
          border-radius: 2px;
          background: var(--text);
          transition: transform 0.32s var(--ease-out);
        }
      }

      .bar.is-open .burger span:first-child {
        transform: translateY(3.8px) rotate(45deg);
      }
      .bar.is-open .burger span:last-child {
        transform: translateY(-3.8px) rotate(-45deg);
      }

      /* ---------------------------------------------------------- sheet */

      .sheet {
        position: fixed;
        inset: 0;
        z-index: 99;
        display: flex;
        flex-direction: column;
        /**
         * The safe keyword is the whole fix; without it the menu was unusable.
         *
         * Plain centring places the links even when they are taller than the
         * screen, which pushes the overflow off *both* ends — on a short
         * viewport the first two items sat above y=0, behind the bar, with no
         * way to reach them. The safe keyword centres when there is room and
         * falls back to flex-start when there is not, and the scroll below
         * catches whatever is still over.
         */
        justify-content: safe center;
        overflow-y: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        gap: 34px;
        padding: 100px var(--gutter) 48px;
        background: var(--ground);
        /* Hidden with opacity + visibility rather than display, so the links
           stay in the accessibility tree order and the panel can animate. */
        opacity: 0;
        visibility: hidden;
        transform: translateY(-12px);
        transition:
          opacity 0.35s var(--ease-out),
          transform 0.35s var(--ease-out),
          visibility 0.35s;
      }

      .sheet.is-open {
        opacity: 1;
        visibility: visible;
        transform: none;
      }

      .sheet__nav {
        display: flex;
        flex-direction: column;
        gap: 4px;

        a {
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-family: var(--font-display);
          font-size: var(--step-2);
          font-weight: 500;
          color: var(--text-soft);
        }

        a:hover,
        a.is-active {
          color: var(--accent);
        }
      }

      /* ----------------------------------------------------- breakpoints */

      @media (min-width: 900px) {
        .nav,
        .bar__cta {
          display: flex;
        }

        .burger,
        .sheet {
          display: none;
        }
      }
    `,
  ],
})
export class SiteHeaderComponent {
  private readonly scroll = inject(ScrollService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly browser = isBrowser();

  readonly nav = NAV;
  readonly name = SITE.name;

  readonly scrolled = this.scroll.isScrolled;
  readonly open = signal(false);

  constructor() {
    // Closing on navigation covers the case where a link inside the sheet is
    // followed by the router without the click handler having run — a
    // keyboard Enter on a `routerLink`, for one.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.close());

    // The sheet covers the viewport, so the page behind it must not scroll.
    effect(() => {
      if (!this.browser) return;
      document.body.style.overflow = this.open() ? 'hidden' : '';
    });

    this.destroyRef.onDestroy(() => {
      if (this.browser) document.body.style.overflow = '';
    });
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    if (this.open()) this.open.set(false);
  }
}

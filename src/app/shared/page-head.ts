import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Crumb } from '../core/seo';

/**
 * The masthead on every page but the home page.
 *
 * The breadcrumbs here are the visible half of the `BreadcrumbList` the Seo
 * service puts in the page's structured data — the two are given the same
 * trail so what a reader sees and what a crawler is told cannot drift apart.
 */
@Component({
  selector: 'we-page-head',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <header class="page-head">
      <div class="wrap">
        <nav aria-label="Breadcrumb">
          <ol class="crumbs">
            <li><a routerLink="/">Home</a></li>
            @for (crumb of crumbs; track crumb.path) {
              <li><a [routerLink]="crumb.path">{{ crumb.label }}</a></li>
            }
            <li aria-current="page">{{ title }}</li>
          </ol>
        </nav>

        @if (eyebrow) {
          <p class="eyebrow"><span class="eyebrow__dot"></span>{{ eyebrow }}</p>
        }

        <h1>{{ title }}</h1>

        @if (lede) {
          <p>{{ lede }}</p>
        }

        @if (meta) {
          <span class="page-head__meta">{{ meta }}</span>
        }
      </div>
    </header>
  `,
  styles: [
    `
      .eyebrow {
        margin-bottom: 20px;
      }

      h1 {
        margin-bottom: 18px;
      }
    `,
  ],
})
export class PageHeadComponent {
  @Input({ required: true }) title!: string;
  @Input() lede?: string;
  @Input() eyebrow?: string;
  /** Free text under the lede — "Last updated 2 July 2026", say. */
  @Input() meta?: string;
  @Input() crumbs: readonly Crumb[] = [];
}

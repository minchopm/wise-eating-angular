import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';

/**
 * The 404 page.
 *
 * Prerendered to /404/index.html and copied to /404.html by the postbuild
 * step, because CloudFront's custom error response needs a real file at a real
 * path — and because a site that answers every unknown URL with the home page
 * and a 200 is a site that teaches search engines to index nothing.
 */
@Component({
  selector: 'we-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="section lost">
      <div class="wrap wrap--narrow">
        <p class="lost__code">404</p>
        <h1>Nothing here.</h1>
        <p class="lost__lede">
          The page you asked for does not exist — or it did, and it moved. Either way, the food is
          this way.
        </p>

        <nav class="lost__links" aria-label="Where to go instead">
          <a class="btn btn--primary" routerLink="/">Home</a>
          <a class="btn btn--ghost" routerLink="/features">Features</a>
          <a class="btn btn--ghost" routerLink="/nutrients">Nutrients</a>
          <a class="btn btn--ghost" routerLink="/support">Support</a>
        </nav>
      </div>
    </section>
  `,
  styles: [
    `
      .lost {
        display: grid;
        place-items: center;
        min-height: 72svh;
        padding-top: 140px;
        text-align: center;
        background: radial-gradient(70% 90% at 50% 0%, rgba(38, 208, 124, 0.12), transparent 68%);
      }

      .lost__code {
        margin-bottom: 12px;
        font-family: var(--font-display);
        font-size: var(--step-5);
        font-weight: 600;
        line-height: 1;
        background: var(--grad-brand);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      h1 {
        margin-bottom: 18px;
        font-size: var(--step-3);
      }

      .lost__lede {
        max-width: 44ch;
        margin-inline: auto;
        margin-bottom: 34px;
      }

      .lost__links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
      }
    `,
  ],
})
export class NotFoundComponent {
  constructor() {
    inject(Seo).apply({
      title: 'Page not found',
      path: '/404',
      noindex: true,
      description: `That page does not exist on ${SITE.origin}.`,
    });
  }
}

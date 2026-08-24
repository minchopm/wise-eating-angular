import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { SiteFooterComponent } from './shared/site-footer';
import { SiteHeaderComponent } from './shared/site-header';

/**
 * The shell.
 *
 * Header, outlet, footer — and one exception. The `/app-store-*` routes render
 * a single frame that gets captured and uploaded to App Store Connect, so they
 * are shown bare: no header, no footer, and a hard black ground.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    @if (chrome()) {
      <a class="skip-link" href="#main">Skip to content</a>
      <we-site-header />
    }

    <main id="main">
      <router-outlet />
    </main>

    @if (chrome()) {
      <we-site-footer />
    }
  `,
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  /** Whether the header and footer are shown. */
  readonly chrome = signal(true);

  /** Routes that render a bare frame for App Store screenshots. */
  private readonly bare = ['/app-store-hero', '/app-store-workouts'];

  constructor() {
    this.update(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.update(event.urlAfterRedirects));
  }

  private update(url: string): void {
    const bare = this.bare.some((route) => url.startsWith(route));

    this.chrome.set(!bare);
    this.doc.body.classList.toggle('screenshot-mode', bare);

    // The status bar behind a Safari page, and the browser UI tint on Android.
    this.meta.updateTag({ name: 'theme-color', content: bare ? '#000000' : '#030C09' });
  }
}

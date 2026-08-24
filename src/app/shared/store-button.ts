import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SITE } from '../core/site';

/**
 * The App Store link.
 *
 * A component rather than a snippet, because it appears on every page and the
 * URL, the `rel` attributes and the accessible name all have to be identical
 * everywhere — a download button that is subtly different on one page is how
 * an analytics report becomes unreadable.
 */
@Component({
  selector: 'we-store-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      class="store-badge"
      [href]="href"
      target="_blank"
      rel="noopener"
      [attr.aria-label]="'Download ' + name + ' on the App Store'"
    >
      <svg viewBox="0 0 384 512" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 43.3-25.6 63.7 26.5 1.3 52.7-4.7 69.5-26.1z"
        />
      </svg>
      <span>
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class StoreButtonComponent {
  /** Overridable so a campaign link can carry its own parameters. */
  @Input() href: string = SITE.appStore;

  readonly name = SITE.name;
}

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // A fragment link inside a page should land on its heading, and moving
      // between pages should start at the top rather than halfway down where
      // the previous page happened to be.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      // The prerendered HTML is real content, so a link followed before the
      // bundle finishes loading must not be dropped.
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    // Hydrate the prerendered markup rather than throwing it away and
    // re-rendering, and replay any click that landed before hydration
    // finished — otherwise the first tap on a fast-arriving page does nothing.
    provideClientHydration(withEventReplay()),
  ],
};

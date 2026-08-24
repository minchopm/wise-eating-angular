import { RenderMode, ServerRoute } from '@angular/ssr';

import { NUTRIENT_SLUGS } from './content/nutrient-facts';
import { LIVE_LOCALES } from './content/registry';

/**
 * Which routes the build renders, and how.
 *
 * Everything is prerendered — this site has no server. The only entry that
 * needs saying out loud is the parameterised one: without `getPrerenderParams`
 * the build has no way to know that `/nutrients/:slug` stands for two dozen
 * real pages, and would ship none of them.
 */
const slugs = async () => NUTRIENT_SLUGS.map((slug) => ({ slug }));

export const serverRoutes: ServerRoute[] = [
  // One entry per language. Angular matches these against the routes the
  // application declares, so the two lists have to be generated from the same
  // source or a language silently ships zero pages.
  ...LIVE_LOCALES.map((locale) => ({
    path: locale.slug ? `${locale.slug}/nutrients/:slug` : 'nutrients/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: slugs,
  })),
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

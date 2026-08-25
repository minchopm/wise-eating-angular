import { RenderMode, ServerRoute } from '@angular/ssr';

import { GUIDE_CONTENT, GUIDE_LOCALES } from './content/guide-registry';
import { CONTENT, LIVE_LOCALES } from './content/registry';

/**
 * Which routes the build renders, and how.
 *
 * Everything is prerendered — this site has no server. The only entry that
 * needs saying out loud is the parameterised one: without `getPrerenderParams`
 * the build has no way to know that `/nutrients/:slug` stands for two dozen
 * real pages, and would ship none of them.
 */
export const serverRoutes: ServerRoute[] = [
  // One entry per language, and each one prerenders only the articles that
  // language actually has. Handing every locale the full slug list would build
  // a page for every unwritten translation — blank, indexed, and linked to
  // from the hreflang set of the article that does exist.
  ...LIVE_LOCALES.map((locale) => ({
    path: locale.slug ? `${locale.slug}/nutrients/:slug` : 'nutrients/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      Object.keys(CONTENT[locale.code].articles).map((slug) => ({ slug })),
  })),
  // Same shape as the articles above: each language prerenders only the
  // guides it has actually written.
  ...GUIDE_LOCALES.map((locale) => ({
    path: locale.slug ? `${locale.slug}/guides/:slug` : 'guides/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      Object.keys(GUIDE_CONTENT[locale.code].guides).map((slug) => ({ slug })),
  })),
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

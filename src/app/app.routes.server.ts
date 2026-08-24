import { RenderMode, ServerRoute } from '@angular/ssr';

import { NUTRIENTS } from './content/nutrients';

/**
 * Which routes the build renders, and how.
 *
 * Everything is prerendered — this site has no server. The only entry that
 * needs saying out loud is the parameterised one: without `getPrerenderParams`
 * the build has no way to know that `/nutrients/:slug` stands for two dozen
 * real pages, and would ship none of them.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: 'nutrients/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => NUTRIENTS.map((nutrient) => ({ slug: nutrient.slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

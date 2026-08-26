import { DestroyRef, inject } from '@angular/core';

import { isBrowser } from './motion';
import { ScrollService } from './scroll.service';

/**
 * The measurement layer.
 *
 * Two events, and deliberately only two. GA4 already counts page views; what
 * it cannot answer on its own is the only question worth asking of this site —
 * do people who arrive at an article about magnesium end up at the App Store,
 * and did they read anything on the way.
 *
 * Everything here fails silently. A reader with an ad blocker, a strict
 * extension or a consent tool that has not been agreed to has no window.gtag,
 * and that is a perfectly ordinary state rather than an error: measurement is
 * the least important thing on the page and must never be the thing that
 * breaks it.
 */

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: string, name: string, params?: Params) => void;
  }
}

/**
 * Send one event, if there is anything listening.
 *
 * Safe to call from anywhere, including the server: the prerenderer runs
 * against a DOM shim where window exists but gtag does not, so the check below
 * covers both the blocked browser and the build.
 */
export function track(name: string, params: Params = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

/**
 * How far down an article a reader actually got.
 *
 * GA4 counts an "engaged session" at ten seconds. These articles take six
 * minutes, so by that measure a glance and a careful read are the same event.
 * Two milestones fix that: half way, and effectively the end.
 *
 * Each carries the seconds elapsed, because depth on its own still cannot
 * separate reading from flicking a thumb to the bottom. Ninety percent in four
 * seconds is a bounce with extra steps; the number is in the payload so the
 * report can tell the difference rather than the code guessing.
 *
 * Rides the shared rAF loop rather than adding a scroll listener — the site
 * pays for exactly one, and this is not worth a second.
 *
 * Must be called from an injection context. Fires nothing on the server.
 */
export function trackReadDepth(article: { kind: string; slug: string; locale: string }): void {
  if (!isBrowser()) return;

  const scroll = inject(ScrollService);
  const destroyRef = inject(DestroyRef);

  // A page short enough to arrive already read tells us nothing: the reader
  // would cross both milestones without moving, and every such page would
  // report perfect depth forever.
  if (document.documentElement.scrollHeight < window.innerHeight * 1.5) return;

  const milestones = [50, 90];
  const opened = performance.now();
  let next = 0;

  const stop = scroll.onFrame(() => {
    if (next >= milestones.length) return;

    const percent = scroll.progress() * 100;
    while (next < milestones.length && percent >= milestones[next]) {
      track('read_depth', {
        percent: milestones[next],
        seconds: Math.round((performance.now() - opened) / 1000),
        ...article,
      });
      next++;
    }

    if (next >= milestones.length) stop();
  });

  destroyRef.onDestroy(stop);
}

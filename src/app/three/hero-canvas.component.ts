import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';

import { canRunHeavyScene, clamp, isBrowser } from '../core/motion';
import { ScrollService } from '../core/scroll.service';
import { ATLAS_COLS, ATLAS_TILES, MARKERS, Marker } from './globe-data';
import type { HeroScene, Hover } from './scene';

/** Where the sprite sheet lives. Shared by the worker and the hover card. */
const ATLAS_URL = '/assets/globe/foods.webp';

type Caption = Hover & Marker;

/**
 * The live 3D globe behind the hero.
 *
 * The scene itself is in scene.ts and knows nothing about Angular. This
 * component's job is to give it a canvas, feed it pointer and scroll values,
 * and draw the caption for whichever city the pointer finds — the picture in
 * that caption is cut from the same sprite sheet the globe samples, so the
 * two can never disagree.
 *
 * Where it runs matters as much as what it draws. The preferred path hands the
 * canvas to a worker via `transferControlToOffscreen()`, so three.js is parsed
 * and every frame is built and submitted off the main thread — scrolling stays
 * responsive while the scene animates. Browsers without OffscreenCanvas get
 * the identical scene on the main thread, and devices that fail
 * `canRunHeavyScene()` — old hardware, data-saver, reduced motion — get the
 * CSS gradient underneath, which is designed to be worth looking at on its own
 * rather than being an apology.
 */
@Component({
  selector: 'we-hero-canvas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="stage" [class.is-live]="live()">
      <canvas #canvas class="stage__canvas" aria-hidden="true"></canvas>
      <div class="stage__fallback" aria-hidden="true"></div>
      <div class="stage__vignette" aria-hidden="true"></div>

      @if (caption(); as c) {
        <figure
          class="tag"
          [class.tag--flip]="c.x > 0.62"
          [style.left.%]="c.x * 100"
          [style.top.%]="c.y * 100"
          aria-hidden="true"
        >
          <header class="tag__head">
            <span class="tag__shot" [style.background-position]="tilePosition()"></span>
            <span class="tag__name">
              <strong>{{ c.food }}</strong>
              <small>{{ c.city }}, {{ c.country }}</small>
            </span>
          </header>

          @if (c.notable.length) {
            <dl class="tag__nutrients">
              @for (n of c.notable; track n.label) {
                <div class="tag__row">
                  <dt>{{ n.label }}</dt>
                  <dd>
                    <span class="tag__bar">
                      <i [style.width.%]="n.percent > 100 ? 100 : n.percent"></i>
                    </span>
                    <b>{{ n.amount }}{{ n.unit }}</b>
                  </dd>
                </div>
              }
            </dl>
          }

          <footer class="tag__foot">
            @if (c.kcal !== null) {
              <span>{{ c.kcal }} kcal</span>
            }
            @if (c.protein !== null) {
              <span>{{ c.protein }} g protein</span>
            }
            <span class="tag__per">per 100 g</span>
          </footer>

          <p class="tag__more">Full panel — {{ 39 }} nutrients — in the app</p>
        </figure>
      }
    </div>
  `,
  styles: [
    `
      :host {
        position: absolute;
        inset: 0;
        display: block;
        pointer-events: none;
        overflow: hidden;
      }

      .stage,
      .stage__canvas,
      .stage__fallback,
      .stage__vignette {
        position: absolute;
        inset: 0;
      }

      .stage__canvas {
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .stage.is-live .stage__canvas {
        opacity: 1;
      }

      /* The static stand-in — and also visible *through* the canvas, which is
         what gives the scene its colour depth instead of sitting on flat
         black. It has to hold up alone, because on a reduced-motion or
         low-power device it is the whole picture. */
      .stage__fallback {
        z-index: -1;
        background:
          radial-gradient(58% 46% at 68% 34%, rgba(38, 208, 124, 0.26), transparent 70%),
          radial-gradient(44% 38% at 16% 22%, rgba(251, 191, 36, 0.14), transparent 72%),
          radial-gradient(46% 40% at 86% 24%, rgba(167, 139, 250, 0.2), transparent 72%),
          radial-gradient(80% 50% at 50% 106%, rgba(94, 234, 212, 0.1), transparent 70%);
      }

      /* Weighted to the left, where the headline is. The right of the frame is
         where the globe lives and is left alone. */
      .stage__vignette {
        background:
          radial-gradient(64% 70% at 22% 50%, rgba(3, 12, 9, 0.78), transparent 76%),
          linear-gradient(
            180deg,
            rgba(3, 12, 9, 0.72) 0%,
            transparent 20%,
            transparent 58%,
            rgba(3, 12, 9, 0.96) 100%
          );
      }

      /* ------------------------------------------------------------ tag */

      /**
       * The card that appears over a city.
       *
       * Deliberately a teaser rather than a nutrition panel: the three things
       * this food is genuinely notable for, the energy, and then a line that
       * says the rest is in the app. Showing everything here would answer the
       * question the download is supposed to answer.
       */
      .tag {
        position: absolute;
        z-index: 2;
        width: 260px;
        margin: 0;
        padding: 14px;
        border: 1px solid var(--line-strong);
        border-radius: 18px;
        background: var(--glass-strong);
        backdrop-filter: var(--blur);
        -webkit-backdrop-filter: var(--blur);
        box-shadow: var(--shadow-lg);
        /* Anchored above the marker and offset sideways, so the card grows
           away from the point rather than sitting on top of it. */
        transform: translate(14px, calc(-100% - 14px));
        animation: tag-in 0.26s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Near the right edge there is no room to the right, so it flips. */
      .tag--flip {
        transform: translate(calc(-100% - 14px), calc(-100% - 14px));
      }

      @keyframes tag-in {
        from {
          opacity: 0;
        }
      }

      .tag__head {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .tag__shot {
        width: 44px;
        height: 44px;
        flex: none;
        border-radius: 50%;
        background-image: url('/assets/globe/foods.webp');
        /* The sheet is 8 tiles wide; 800% makes one tile fill the box. */
        background-size: 800% auto;
        box-shadow: 0 0 0 1px var(--line-strong);
      }

      .tag__name {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
        line-height: 1.25;
      }

      .tag__name strong {
        font-size: 0.96rem;
        font-weight: 650;
        color: var(--text);
      }

      .tag__name small {
        font-size: 0.74rem;
        color: var(--text-dim);
      }

      /* ------------------------------------------------------- nutrients */

      .tag__nutrients {
        margin: 14px 0 0;
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .tag__row {
        display: grid;
        grid-template-columns: 74px 1fr;
        align-items: center;
        gap: 10px;
      }

      .tag__row dt {
        font-size: 0.72rem;
        color: var(--text-dim);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tag__row dd {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }

      /* The bar is share of an adult daily reference, capped at full — a food
         that carries 144% of a day's B12 reads as "all of it" either way. */
      .tag__bar {
        position: relative;
        flex: 1;
        height: 4px;
        border-radius: 2px;
        background: rgba(160, 235, 205, 0.14);
        overflow: hidden;
      }

      .tag__bar i {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 2px;
        background: var(--grad-brand);
      }

      .tag__row b {
        font-size: 0.72rem;
        font-weight: 600;
        color: var(--text-soft);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }

      /* ------------------------------------------------------------ foot */

      .tag__foot {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        margin-top: 12px;
        padding-top: 10px;
        border-top: 1px solid var(--line);
        font-size: 0.72rem;
        color: var(--text-soft);
      }

      .tag__per {
        color: var(--text-faint);
        margin-left: auto;
      }

      .tag__more {
        margin: 8px 0 0;
        font-size: 0.7rem;
        color: var(--mint);
        opacity: 0.85;
      }

      /* On a portrait screen there is no room beside the type, so the globe
         sits behind it. Deepen the wash under the words rather than moving the
         globe away — the alternative is a hero with nothing in it on a phone. */
      @media (max-aspect-ratio: 17 / 20) {
        .stage__vignette {
          background:
            linear-gradient(
              180deg,
              rgba(3, 12, 9, 0.86) 0%,
              rgba(3, 12, 9, 0.62) 34%,
              rgba(3, 12, 9, 0.5) 52%,
              rgba(3, 12, 9, 0.9) 88%,
              rgba(3, 12, 9, 0.98) 100%
            );
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .tag {
          animation: none;
        }
      }
    `,
  ],
})
export class HeroCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Overall brightness of the ribbons, 0..1. */
  @Input() intensity = 1;
  /** Points on the globe. Scaled down automatically on small screens. */
  @Input() foodCount = 4600;

  private readonly zone = inject(NgZone);
  private readonly scroll = inject(ScrollService);
  private readonly browser = isBrowser();

  readonly live = signal(false);
  readonly caption = signal<Caption | null>(null);

  /** Background position for the caption's thumbnail, in percent. */
  readonly tilePosition = computed(() => {
    const tile = this.caption()?.tile ?? 0;
    const rows = Math.ceil(ATLAS_TILES / ATLAS_COLS);
    // With background-size at 800%, each step is 100/(n-1) percent — the
    // percentage form of background-position aligns the *image* box to the
    // *element* box, so the last tile sits at 100% rather than at n×100%.
    const x = (tile % ATLAS_COLS) * (100 / (ATLAS_COLS - 1));
    const y = Math.floor(tile / ATLAS_COLS) * (100 / Math.max(1, rows - 1));
    return `${x}% ${y}%`;
  });

  private worker?: Worker;
  /** Only set on the fallback path. */
  private scene?: HeroScene;
  private rafId = 0;
  private startedAt = 0;

  private offFrame?: () => void;
  private resizeObserver?: ResizeObserver;
  private intersection?: IntersectionObserver;

  private visible = true;
  private destroyed = false;
  private lastSent = { x: 9, y: 9, rx: 9, ry: 9, p: 9 };

  /** Raw pointer in 0..1 viewport coordinates. -1 until the mouse moves. */
  private rawX = -1;
  private rawY = -1;

  // --------------------------------------------------------------- lifecycle

  ngAfterViewInit(): void {
    if (!this.browser || !canRunHeavyScene()) return;

    // Never block first paint on the 3D scene — but do not let it be starved
    // either. `requestIdleCallback` does not fire in a hidden document, and
    // its timeout does not rescue it, so a page opened in a background tab
    // (a middle-click, "open in new tab") would show the gradient for ever.
    // Three routes to the same guarded call: idle, a hard timer, and the
    // moment the tab is first looked at.
    let booted = false;
    const boot = () => {
      if (booted || this.destroyed) return;
      booted = true;
      document.removeEventListener('visibilitychange', onShown);
      this.zone.runOutsideAngular(() => {
        void this.init();
      });
    };

    const onShown = () => {
      if (!document.hidden) boot();
    };

    if ('requestIdleCallback' in window) {
      (
        window as Window & { requestIdleCallback: (cb: () => void, o?: object) => number }
      ).requestIdleCallback(boot, { timeout: 900 });
    }

    setTimeout(boot, document.hidden ? 4000 : 260);
    document.addEventListener('visibilitychange', onShown);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.dispose();
  }

  // -------------------------------------------------------------------- init

  private async init(): Promise<void> {
    const canvas = this.canvasRef.nativeElement;
    const host = canvas.parentElement as HTMLElement;
    const { width, height } = this.measure(host);
    const pixelRatio = this.ratio();

    const started =
      this.tryWorker(canvas, width, height, pixelRatio) ||
      (await this.tryMainThread(canvas, width, height, pixelRatio));

    if (!started || this.destroyed) return;

    this.watch(host);
    this.zone.run(() => this.live.set(true));
  }

  /** How hard to push. Phones get the cheaper build of the same scene. */
  private quality(): 'high' | 'low' {
    const cores =
      (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency ?? 4;
    return cores <= 4 || window.innerWidth < 760 ? 'low' : 'high';
  }

  /** Preferred path: render on a worker thread. */
  private tryWorker(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    pixelRatio: number,
  ): boolean {
    if (typeof Worker === 'undefined') return false;
    if (typeof canvas.transferControlToOffscreen !== 'function') return false;

    let worker: Worker;
    try {
      worker = new Worker(new URL('./hero.worker', import.meta.url), { type: 'module' });
    } catch {
      return false; // module workers unsupported — the canvas is untouched
    }

    try {
      const offscreen = canvas.transferControlToOffscreen();
      worker.postMessage(
        {
          type: 'init',
          canvas: offscreen,
          atlas: ATLAS_URL,
          width,
          height,
          pixelRatio,
          intensity: this.intensity,
          foodCount: this.foodCount,
          quality: this.quality(),
        },
        [offscreen],
      );
    } catch {
      worker.terminate();
      return false;
    }

    worker.addEventListener('message', ({ data }) => {
      if (data?.type === 'atlas') {
        console.warn('hero: atlas message', JSON.stringify(data));
        return;
      }
      if (data?.type === 'hover') {
        this.zone.run(() => this.show(data as Hover));
        return;
      }
      // Once the canvas has been transferred it cannot come back, so there is
      // no main-thread retry to fall to — hide the dead canvas and let the
      // gradient underneath be the picture.
      if (data?.type === 'failed') {
        this.zone.run(() => this.live.set(false));
        this.dispose();
      }
    });

    this.worker = worker;
    return true;
  }

  /** Fallback: identical scene, main thread. */
  private async tryMainThread(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    pixelRatio: number,
  ): Promise<boolean> {
    try {
      const { HeroScene } = await import('./scene');
      if (this.destroyed) return false;

      const scene = new HeroScene({
        canvas,
        width,
        height,
        pixelRatio,
        intensity: this.intensity,
        foodCount: this.foodCount,
        quality: this.quality(),
      });
      this.scene = scene;
      this.startedAt = performance.now();

      void fetch(ATLAS_URL, { cache: 'force-cache' })
        .then((r) => (r.ok ? r.blob() : Promise.reject()))
        .then(createImageBitmap)
        .then((bitmap) => {
          console.warn('hero: atlas main-thread', bitmap.width, bitmap.height);
          scene.setAtlas(bitmap);
        })
        .catch((e) => console.warn('hero: atlas main-thread failed', e));

      const tick = () => {
        this.rafId = requestAnimationFrame(tick);
        if (!this.visible || document.hidden || !this.scene) return;
        const p = this.scroll.pointer();
        const hover = this.scene.render((performance.now() - this.startedAt) / 1000, {
          pointerX: p.ex,
          pointerY: p.ey,
          rawX: this.rawX,
          rawY: this.rawY,
          progress: this.heroProgress(),
        });
        if (hover) this.zone.run(() => this.show(hover));
      };
      this.rafId = requestAnimationFrame(tick);
      return true;
    } catch {
      return false;
    }
  }

  // ------------------------------------------------------------------ hover

  private show(hover: Hover): void {
    const marker = MARKERS[hover.index];
    if (!marker) {
      this.caption.set(null);
      return;
    }
    this.caption.set({ ...hover, ...marker });
  }

  // ------------------------------------------------------------- main thread

  private watch(host: HTMLElement): void {
    // The raw pointer is tracked here rather than read from ScrollService,
    // which only publishes an eased value — easing is right for parallax and
    // wrong for hit-testing, where the cursor has to be where it looks.
    window.addEventListener('pointermove', this.onPointer, { passive: true });
    window.addEventListener('pointerleave', this.onPointerOut, { passive: true });

    // Feed the worker pointer and scroll values — but only when they move, so
    // a still page posts nothing at all.
    if (this.worker) {
      this.offFrame = this.scroll.onFrame(() => {
        if (!this.visible) return;
        const p = this.scroll.pointer();
        const next = {
          x: +p.ex.toFixed(3),
          y: +p.ey.toFixed(3),
          rx: +this.rawX.toFixed(4),
          ry: +this.rawY.toFixed(4),
          p: +this.heroProgress().toFixed(3),
        };
        const last = this.lastSent;
        if (
          next.x === last.x &&
          next.y === last.y &&
          next.rx === last.rx &&
          next.ry === last.ry &&
          next.p === last.p
        ) {
          return;
        }
        this.lastSent = next;
        this.worker?.postMessage({
          type: 'state',
          pointerX: next.x,
          pointerY: next.y,
          rawX: next.rx,
          rawY: next.ry,
          progress: next.p,
        });
      });
    }

    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => this.onResize(host));
      this.resizeObserver.observe(host);
    } else {
      (window as Window).addEventListener('resize', () => this.onResize(host));
    }

    // Stop rendering entirely when the hero scrolls away or the tab is hidden.
    this.intersection = new IntersectionObserver(([e]) => this.setVisible(e.isIntersecting));
    this.intersection.observe(host);
    document.addEventListener('visibilitychange', this.onVisibility);
  }

  /**
   * The pointer, in coordinates relative to the canvas rather than the page.
   *
   * The hero is the top of the document, so the two agree until the page is
   * scrolled — at which point using page coordinates would put the hit test a
   * screenful away from the cursor.
   */
  private readonly onPointer = (event: PointerEvent): void => {
    const host = this.canvasRef.nativeElement.parentElement;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    this.rawX = (event.clientX - rect.left) / Math.max(1, rect.width);
    this.rawY = (event.clientY - rect.top) / Math.max(1, rect.height);

    if (this.rawX < 0 || this.rawX > 1 || this.rawY < 0 || this.rawY > 1) {
      this.rawX = -1;
      this.rawY = -1;
    }
  };

  private readonly onPointerOut = (): void => {
    this.rawX = -1;
    this.rawY = -1;
  };

  private setVisible(value: boolean): void {
    if (value === this.visible) return;
    this.visible = value;
    if (!value) this.zone.run(() => this.caption.set(null));
    this.worker?.postMessage({ type: 'running', value: value && !document.hidden });
  }

  private readonly onVisibility = (): void => {
    this.worker?.postMessage({ type: 'running', value: this.visible && !document.hidden });
  };

  private onResize(host: HTMLElement): void {
    const { width, height } = this.measure(host);
    const pixelRatio = this.ratio();
    this.worker?.postMessage({ type: 'resize', width, height, pixelRatio });
    this.scene?.resize(width, height, pixelRatio);
  }

  /**
   * Deliberately well below the display's native ratio.
   *
   * The scene is fill-bound — a full-viewport noise field with a globe of
   * additive sprites over it — so this number is the single biggest lever on
   * frame time, and it costs almost nothing visually: every edge in the scene
   * is a soft glow that was going to be blurry at any resolution. 1.15 rather
   * than 2 is a 3x reduction in pixels shaded.
   */
  private ratio(): number {
    return Math.min(window.devicePixelRatio || 1, 1.15);
  }

  private measure(host: HTMLElement): { width: number; height: number } {
    return {
      width: host.clientWidth || window.innerWidth,
      height: host.clientHeight || window.innerHeight,
    };
  }

  /** 0 at the top of the page, 1 once the hero has scrolled away. */
  private heroProgress(): number {
    return clamp(this.scroll.scrollY() / Math.max(1, window.innerHeight));
  }

  // ----------------------------------------------------------------- cleanup

  private dispose(): void {
    // Nothing was ever started off the browser path, and the prerenderer's DOM
    // shim has no animation-frame API to cancel against.
    if (!this.browser) return;

    cancelAnimationFrame(this.rafId);
    this.offFrame?.();
    this.resizeObserver?.disconnect();
    this.intersection?.disconnect();

    window.removeEventListener('pointermove', this.onPointer);
    window.removeEventListener('pointerleave', this.onPointerOut);
    document.removeEventListener('visibilitychange', this.onVisibility);

    if (this.worker) {
      const worker = this.worker;
      worker.postMessage({ type: 'dispose' });
      // Give it a beat to release the GL context before it is killed.
      setTimeout(() => worker.terminate(), 80);
      this.worker = undefined;
    }

    this.scene?.dispose();
    this.scene = undefined;
  }
}

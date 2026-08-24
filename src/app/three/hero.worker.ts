/// <reference lib="webworker" />

import { HeroScene, SceneOptions, SceneState } from './scene';

/**
 * Runs the hero scene on a worker thread against an OffscreenCanvas.
 *
 * This is the whole point of the exercise: three.js, the scene graph, the
 * per-frame uniform updates, the hover test and the WebGL command submission
 * all happen here, so none of it competes with scrolling on the main thread.
 * The main thread's only jobs are to post pointer and scroll values when they
 * change, and to draw the caption for whichever city comes back.
 */

type InitMessage = {
  type: 'init';
  canvas: OffscreenCanvas;
  atlas: string;
} & Omit<SceneOptions, 'canvas'>;

type Message =
  | InitMessage
  | { type: 'resize'; width: number; height: number; pixelRatio: number }
  | {
      type: 'state';
      pointerX: number;
      pointerY: number;
      rawX: number;
      rawY: number;
      progress: number;
    }
  | { type: 'running'; value: boolean }
  | { type: 'dispose' };

let scene: HeroScene | null = null;
let running = false;
let timer: ReturnType<typeof setTimeout> | 0 = 0;
let started = 0;

const state: SceneState = { pointerX: 0, pointerY: 0, rawX: -1, rawY: -1, progress: 0 };

/**
 * Chromium exposes requestAnimationFrame on DedicatedWorkerGlobalScope, and
 * for WebGL it is not merely a nicety: a frame drawn to an OffscreenCanvas
 * outside a rAF callback is never presented to the placeholder canvas.
 * Drawing on a setTimeout loop renders happily at 60fps and puts nothing on
 * screen. The timeout path below exists only for engines without worker rAF.
 */
const hasRaf = typeof requestAnimationFrame === 'function';

function loop(): void {
  if (!running || !scene) return;
  const began = performance.now();

  try {
    const hover = scene.render((began - started) / 1000, state);
    // Only ever posted when the city under the pointer actually changed.
    if (hover) postMessage({ type: 'hover', ...hover });
  } catch {
    running = false;
    postMessage({ type: 'failed' });
    return;
  }

  if (hasRaf) {
    timer = requestAnimationFrame(loop) as unknown as ReturnType<typeof setTimeout>;
  } else {
    // Schedule from how long this frame actually took, so a slow frame does
    // not compound into a backlog.
    const spent = performance.now() - began;
    timer = setTimeout(loop, Math.max(0, 1000 / 60 - spent));
  }
}

function setRunning(value: boolean): void {
  if (value === running) return;
  running = value;
  if (running) {
    loop();
  } else if (timer) {
    if (hasRaf) cancelAnimationFrame(timer as unknown as number);
    else clearTimeout(timer);
    timer = 0;
  }
}

/**
 * Fetch the food sprite sheet and hand it to the scene.
 *
 * Deliberately not awaited before the first frame: the globe is worth looking
 * at without it, and blocking the whole scene on a 95 kB decoration would be
 * the wrong trade.
 */
async function loadAtlas(url: string): Promise<void> {
  try {
    const response = await fetch(url, { cache: 'force-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bitmap = await createImageBitmap(await response.blob());
    scene?.setAtlas(bitmap);
    postMessage({ type: 'atlas', ok: true, width: bitmap.width, height: bitmap.height });
  } catch (error) {
    // No pictures, then. The markers stay as dots and nothing else changes —
    // but say so, because a silent failure here looks like a shader bug.
    postMessage({ type: 'atlas', ok: false, reason: String(error) });
  }
}

addEventListener('message', ({ data }: MessageEvent<Message>) => {
  switch (data.type) {
    case 'init': {
      try {
        scene = new HeroScene({
          canvas: data.canvas,
          width: data.width,
          height: data.height,
          pixelRatio: data.pixelRatio,
          intensity: data.intensity,
          foodCount: data.foodCount,
          quality: data.quality,
        });
        started = performance.now();
        postMessage({ type: 'ready' });
        setRunning(true);
        void loadAtlas(data.atlas);
      } catch {
        postMessage({ type: 'failed' });
      }
      break;
    }

    case 'resize':
      scene?.resize(data.width, data.height, data.pixelRatio);
      break;

    case 'state':
      state.pointerX = data.pointerX;
      state.pointerY = data.pointerY;
      state.rawX = data.rawX;
      state.rawY = data.rawY;
      state.progress = data.progress;
      break;

    case 'running':
      setRunning(data.value);
      break;

    case 'dispose':
      setRunning(false);
      scene?.dispose();
      scene = null;
      close();
      break;
  }
});

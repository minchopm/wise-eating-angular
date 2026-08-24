import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  ClampToEdgeWrapping,
  Color,
  Group,
  LineSegments,
  LinearFilter,
  Mesh,
  NormalBlending,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  Scene,
  ShaderMaterial,
  Texture,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';

import { ATLAS_COLS, COAST, MARKERS } from './globe-data';
import { isLand, toSphere } from './land';
import {
  ARC_FRAG,
  ARC_VERT,
  COAST_FRAG,
  COAST_VERT,
  GLOBE_FRAG,
  GLOBE_VERT,
  GRID_FRAG,
  GRID_VERT,
  MARKER_FRAG,
  MARKER_VERT,
  MOTE_FRAG,
  MOTE_VERT,
  RIBBON_FRAG,
  RIBBON_VERT,
} from './nutrient.glsl';

export interface SceneState {
  /** -1..1 pointer offset from the centre of the viewport, eased. */
  pointerX: number;
  pointerY: number;
  /** Raw pointer in 0..1 viewport coordinates, for picking. -1 when absent. */
  rawX: number;
  rawY: number;
  /** 0..1 progress through the hero. */
  progress: number;
}

export interface SceneOptions {
  canvas: HTMLCanvasElement | OffscreenCanvas;
  width: number;
  height: number;
  pixelRatio: number;
  /** Overall brightness of the ribbons, 0..1. */
  intensity: number;
  /** Points on the globe. Scaled down automatically on small screens. */
  foodCount: number;
  /** 'low' halves the counts and drops the grid. Content is unchanged. */
  quality: 'high' | 'low';
}

/** What the scene reports back when the pointer finds a city. */
export interface Hover {
  /** Index into MARKERS, or -1 for nothing. */
  index: number;
  /** Where it is on screen, in 0..1 viewport coordinates. */
  x: number;
  y: number;
}

/**
 * Nutrient families, and the colour each one is drawn in.
 *
 * The weights are not a nutritional claim — they only control how many points
 * of each colour the land gets, and they are chosen so the continents read as
 * mostly green with warm and cool accents rather than as confetti. The palette
 * is the app icon's: mint and lilac glass with warm gems inside it.
 */
const FAMILIES: readonly { color: string; weight: number }[] = [
  { color: '#4ADE9A', weight: 0.3 },
  { color: '#86EFC5', weight: 0.22 },
  { color: '#67E8F9', weight: 0.14 },
  { color: '#FBBF24', weight: 0.15 },
  { color: '#B39DFB', weight: 0.13 },
  { color: '#EAFFF6', weight: 0.06 },
];

const GLOBE_RADIUS = 15.5;

/** How fast an arc pulse travels, in cycles per second. */
const ARC_RATE = 0.16;

/** How many arcs are in flight. Each one lights a different city. */
const ARC_COUNT = 26;

/**
 * The hero scene, independent of where it runs.
 *
 * A globe whose points are foods: the continents are drawn out of them, arcs
 * run between cities, and where an arc lands, a photograph of what that city
 * eats blooms out of the surface. The photographs are frames cut from the
 * archive that ships inside the app, so the site and the app are showing
 * literally the same pictures.
 *
 * Deliberately free of any DOM or Angular dependency, so the identical code
 * drives an OffscreenCanvas inside a worker (the fast path) or a plain canvas
 * on the main thread (the fallback).
 */
export class HeroScene {
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera: PerspectiveCamera;

  /** Everything that turns with the planet. */
  private readonly globe = new Group();

  private foods!: Points<BufferGeometry, ShaderMaterial>;
  private coast!: LineSegments<BufferGeometry, ShaderMaterial>;
  private arcs!: LineSegments<BufferGeometry, ShaderMaterial>;
  private markers!: Points<BufferGeometry, ShaderMaterial>;
  private ribbons!: Mesh<PlaneGeometry, ShaderMaterial>;
  private motes!: Points<BufferGeometry, ShaderMaterial>;
  private grid?: Mesh<PlaneGeometry, ShaderMaterial>;

  private atlas?: Texture;

  /** Local-space positions of every marker, for picking. */
  private readonly markerAt: Vector3[] = [];
  /** Reused, so picking allocates nothing per frame. */
  private readonly probe = new Vector3();
  private readonly toCamera = new Vector3();
  private readonly outward = new Vector3();
  private hovered = -1;

  private camX = 0;
  private camY = 0;
  private spin = 0;

  /**
   * Deterministic pseudo-randomness.
   *
   * The scene is built twice in some sessions — once in a worker, and again on
   * the main thread if the worker path fails — and a differently-shaped globe
   * appearing on the retry would be visible. A fixed seed also makes a visual
   * regression reproducible.
   */
  private seed = 0x9e3779b9;

  constructor(private readonly opts: SceneOptions) {
    this.renderer = new WebGLRenderer({
      canvas: opts.canvas as HTMLCanvasElement,
      alpha: true,
      // The points and ribbons are soft-edged already; the only thing MSAA
      // would sharpen here is the arc lines, and it is not worth the fill rate.
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
    });
    this.renderer.setClearColor(0x000000, 0);

    this.scene.add(this.globe);

    this.camera = new PerspectiveCamera(55, 1, 0.1, 900);
    this.camera.position.set(0, 2.2, 46);

    this.buildMotes();
    this.buildRibbons();
    this.buildGlobe();
    this.buildCoast();
    this.buildMarkers();
    if (opts.quality === 'high') this.buildGrid();

    // A three-quarters tilt, so the globe reads as a globe on the first frame
    // rather than as a flat disc that later turns out to be round, and so the
    // northern hemisphere — where most of the markers are — faces the camera.
    this.globe.rotation.z = -0.24;
    this.globe.rotation.x = 0.28;

    this.resize(opts.width, opts.height, opts.pixelRatio);
  }

  // --------------------------------------------------------------- helpers

  /** xorshift32. Small, fast, and identical on every platform. */
  private random(): number {
    let x = this.seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    this.seed = x >>> 0;
    return this.seed / 0x100000000;
  }

  private pickFamily(): Color {
    let r = this.random();
    for (const family of FAMILIES) {
      r -= family.weight;
      if (r <= 0) return new Color(family.color);
    }
    return new Color(FAMILIES[0].color);
  }

  // ---------------------------------------------------------------- layers

  /**
   * The globe.
   *
   * Points are laid on a Fibonacci lattice — evenly spaced, with no visible
   * poles and no seam, unlike a latitude/longitude grid which bunches at the
   * top and bottom and which the eye finds immediately. Each candidate is then
   * tested against the land mask: on land it becomes a bright food point, at
   * sea it is mostly discarded. That is what draws the continents.
   */
  private buildGlobe(): void {
    const wide = this.opts.width > 900;
    const budget = Math.round(
      this.opts.foodCount * (wide ? 1 : 0.5) * (this.opts.quality === 'low' ? 0.55 : 1),
    );

    // Land is about 29% of the surface, so walking three times the budget
    // gives roughly the requested number of points on the continents.
    const candidates = budget * 3;

    const positions: number[] = [];
    const sizes: number[] = [];
    const phases: number[] = [];
    const hubs: number[] = [];
    const tints: number[] = [];

    const golden = Math.PI * (3 - Math.sqrt(5));
    const at = { x: 0, y: 0, z: 0 };
    const sea = new Color('#2a6b7a');

    for (let i = 0; i < candidates; i++) {
      const y = 1 - (i / Math.max(1, candidates - 1)) * 2;
      const theta = golden * i;

      const lat = (Math.asin(y) * 180) / Math.PI;
      let lon = ((theta * 180) / Math.PI) % 360;
      if (lon > 180) lon -= 360;

      const land = isLand(lat, lon);
      // A thin scatter of sea points, so the sphere still reads as a sphere
      // and the continents sit on something rather than floating.
      if (!land && this.random() > 0.12) continue;

      toSphere(lat, lon, GLOBE_RADIUS * (1 + (this.random() - 0.5) * 0.012), at);
      positions.push(at.x, at.y, at.z);

      const isHub = land && this.random() < 0.018;
      hubs.push(isHub ? 1 : 0);
      sizes.push(isHub ? 2.4 + this.random() * 1.8 : land ? 0.85 + this.random() * 1.0 : 0.4);
      phases.push(this.random());

      const colour = isHub ? new Color('#EAFFF6') : land ? this.pickFamily() : sea;
      tints.push(colour.r, colour.g, colour.b);
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
    geo.setAttribute('aSize', new BufferAttribute(new Float32Array(sizes), 1));
    geo.setAttribute('aPhase', new BufferAttribute(new Float32Array(phases), 1));
    geo.setAttribute('aHub', new BufferAttribute(new Float32Array(hubs), 1));
    geo.setAttribute('aTint', new BufferAttribute(new Float32Array(tints), 3));

    const mat = new ShaderMaterial({
      vertexShader: GLOBE_VERT,
      fragmentShader: GLOBE_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uPixelRatio: { value: this.opts.pixelRatio },
        uOpacity: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.foods = new Points(geo, mat);
    this.foods.frustumCulled = false;
    this.globe.add(this.foods);
  }

  /** Coastlines, drawn just above the surface so they sit on the points. */
  private buildCoast(): void {
    const verts: number[] = [];
    const at = { x: 0, y: 0, z: 0 };
    const previous = { x: 0, y: 0, z: 0 };
    const radius = GLOBE_RADIUS * 1.004;

    for (const ring of COAST) {
      for (let i = 0; i < ring.length; i += 2) {
        toSphere(ring[i + 1] / 10, ring[i] / 10, radius, at);
        if (i > 0) {
          verts.push(previous.x, previous.y, previous.z, at.x, at.y, at.z);
        }
        previous.x = at.x;
        previous.y = at.y;
        previous.z = at.z;
      }
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(verts), 3));

    const mat = new ShaderMaterial({
      vertexShader: COAST_VERT,
      fragmentShader: COAST_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1 },
        uColor: { value: new Color('#A6EFEA') },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.coast = new LineSegments(geo, mat);
    this.coast.frustumCulled = false;
    this.globe.add(this.coast);
  }

  /**
   * City markers, and the arcs that light them.
   *
   * Built together because they share the phase that synchronises them: arc
   * `k` carries offset `k / arcs`, and the city it lands on blooms its
   * photograph on the same offset. Deriving both from one number is what keeps
   * the picture and the pulse from drifting apart over a long session.
   */
  private buildMarkers(): void {
    const count = MARKERS.length;
    const positions = new Float32Array(count * 3);
    const pops = new Float32Array(count);
    const tiles = new Float32Array(count);
    const actives = new Float32Array(count);

    const at = { x: 0, y: 0, z: 0 };
    const radius = GLOBE_RADIUS * 1.012;

    for (let i = 0; i < count; i++) {
      const marker = MARKERS[i];
      toSphere(marker.lat, marker.lon, radius, at);
      positions[i * 3] = at.x;
      positions[i * 3 + 1] = at.y;
      positions[i * 3 + 2] = at.z;
      tiles[i] = marker.tile;
      this.markerAt.push(new Vector3(at.x, at.y, at.z));
    }

    // The cities the arcs land on are spread through the list rather than
    // drawn at random, so no continent ends up without one.
    const arcs = Math.min(ARC_COUNT, count);
    const stride = count / arcs;
    const targets: number[] = [];

    for (let k = 0; k < arcs; k++) {
      const target = Math.floor(k * stride + this.random() * stride) % count;
      targets.push(target);
      pops[target] = k / arcs;
      actives[target] = 1;
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('aPop', new BufferAttribute(pops, 1));
    geo.setAttribute('aTile', new BufferAttribute(tiles, 1));
    geo.setAttribute('aActive', new BufferAttribute(actives, 1));

    const mat = new ShaderMaterial({
      vertexShader: MARKER_VERT,
      fragmentShader: MARKER_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uRate: { value: ARC_RATE },
        uPixelRatio: { value: this.opts.pixelRatio },
        uTileSize: { value: 1 / ATLAS_COLS },
        uOpacity: { value: 1 },
        uAtlas: { value: null },
        uRing: { value: new Color('#EAFFF6') },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      // Normal rather than additive: a photograph blended additively onto
      // space turns into a white smear. The ring underneath loses a little
      // glow, which is a fair trade for the picture being legible.
      blending: NormalBlending,
    });

    this.markers = new Points(geo, mat);
    this.markers.frustumCulled = false;
    this.globe.add(this.markers);

    this.buildArcs(targets, arcs);
  }

  /**
   * Arcs between cities.
   *
   * Each is a quadratic Bézier whose control point is the midpoint pushed out
   * past the surface — a cheap stand-in for a great circle lifted off the
   * sphere which, unlike a real one, never degenerates when the two ends are
   * nearly antipodal.
   */
  private buildArcs(targets: readonly number[], arcs: number): void {
    const SEGMENTS = this.opts.quality === 'low' ? 26 : 42;

    const verts: number[] = [];
    const ts: number[] = [];
    const offsets: number[] = [];
    const cols: number[] = [];

    const a = new Vector3();
    const b = new Vector3();
    const control = new Vector3();
    const point = new Vector3();
    const previous = new Vector3();

    for (let k = 0; k < arcs; k++) {
      const to = targets[k];
      let from = Math.floor(this.random() * this.markerAt.length);
      if (from === to) from = (from + 7) % this.markerAt.length;

      a.copy(this.markerAt[from]);
      b.copy(this.markerAt[to]);

      // How far the arc bows outward scales with how far apart the ends are,
      // so a short hop stays close to the surface and a long one sweeps wide.
      const spread = a.distanceTo(b) / (GLOBE_RADIUS * 2);
      control
        .copy(a)
        .add(b)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(GLOBE_RADIUS * (1.05 + spread * 0.5));

      const tint = this.pickFamily();
      const offset = k / arcs;

      for (let s = 0; s <= SEGMENTS; s++) {
        const t = s / SEGMENTS;
        const inv = 1 - t;

        point
          .copy(a)
          .multiplyScalar(inv * inv)
          .addScaledVector(control, 2 * inv * t)
          .addScaledVector(b, t * t);

        // LineSegments wants discrete pairs, so every interior sample is
        // emitted twice: once closing the previous segment, once opening
        // the next.
        if (s > 0) {
          verts.push(previous.x, previous.y, previous.z, point.x, point.y, point.z);
          ts.push((s - 1) / SEGMENTS, t);
          offsets.push(offset, offset);
          cols.push(tint.r, tint.g, tint.b, tint.r, tint.g, tint.b);
        }
        previous.copy(point);
      }
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(new Float32Array(verts), 3));
    geo.setAttribute('aT', new BufferAttribute(new Float32Array(ts), 1));
    geo.setAttribute('aOffset', new BufferAttribute(new Float32Array(offsets), 1));
    geo.setAttribute('aTint', new BufferAttribute(new Float32Array(cols), 3));

    const mat = new ShaderMaterial({
      vertexShader: ARC_VERT,
      fragmentShader: ARC_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uRate: { value: ARC_RATE },
        uOpacity: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.arcs = new LineSegments(geo, mat);
    this.arcs.frustumCulled = false;
    this.globe.add(this.arcs);
  }

  private buildRibbons(): void {
    const geo = new PlaneGeometry(440, 250, 1, 1);
    const mat = new ShaderMaterial({
      vertexShader: RIBBON_VERT,
      fragmentShader: RIBBON_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uIntensity: { value: this.opts.intensity },
        uMouse: { value: new Vector2() },
        uColorA: { value: new Color('#2FC98A') },
        uColorB: { value: new Color('#F2B01E') },
        uColorC: { value: new Color('#9B7CF8') },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.ribbons = new Mesh(geo, mat);
    this.ribbons.position.set(0, 6, -160);
    this.ribbons.frustumCulled = false;
    this.scene.add(this.ribbons);
  }

  private buildMotes(): void {
    const wide = this.opts.width > 900;
    const count = Math.round(1500 * (wide ? 1 : 0.4) * (this.opts.quality === 'low' ? 0.5 : 1));

    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const tints = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (this.random() - 0.5) * 320;
      positions[i3 + 1] = (this.random() - 0.5) * 200;
      positions[i3 + 2] = -this.random() * 280 + 24;

      sizes[i] = this.random() < 0.05 ? 2.2 + this.random() * 2.4 : 0.5 + this.random() * 1.0;
      phases[i] = this.random();

      const colour = this.pickFamily();
      tints[i3] = colour.r;
      tints[i3 + 1] = colour.g;
      tints[i3 + 2] = colour.b;
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new BufferAttribute(sizes, 1));
    geo.setAttribute('aPhase', new BufferAttribute(phases, 1));
    geo.setAttribute('aTint', new BufferAttribute(tints, 3));

    const mat = new ShaderMaterial({
      vertexShader: MOTE_VERT,
      fragmentShader: MOTE_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new Vector2() },
        uPixelRatio: { value: this.opts.pixelRatio },
        uOpacity: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.motes = new Points(geo, mat);
    this.motes.frustumCulled = false;
    this.scene.add(this.motes);
  }

  private buildGrid(): void {
    const geo = new PlaneGeometry(600, 600, 1, 1);
    const mat = new ShaderMaterial({
      vertexShader: GRID_VERT,
      fragmentShader: GRID_FRAG,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uOpacity: { value: 1 },
        uColor: { value: new Color('#1F5A6B') },
        uColorHot: { value: new Color('#5FD9E8') },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: AdditiveBlending,
    });

    this.grid = new Mesh(geo, mat);
    this.grid.rotation.x = -Math.PI / 2;
    this.grid.position.set(0, -30, -150);
    this.grid.frustumCulled = false;
    this.scene.add(this.grid);
  }

  // ---------------------------------------------------------------- public

  /**
   * Hand the scene its sprite atlas.
   *
   * Separate from the constructor because the image arrives over the network
   * and the globe has no reason to wait for it — until it lands, the markers
   * are simply dots.
   */
  setAtlas(bitmap: ImageBitmap): void {
    const texture = new Texture(bitmap as unknown as HTMLImageElement);
    texture.needsUpdate = true;
    texture.flipY = false;
    texture.generateMipmaps = false;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;

    this.atlas = texture;
    this.markers.material.uniforms['uAtlas'].value = texture;
  }

  resize(width: number, height: number, pixelRatio: number): void {
    this.opts.width = width;
    this.opts.height = height;
    this.opts.pixelRatio = pixelRatio;

    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width, height, false);

    const aspect = width / Math.max(1, height);
    this.camera.aspect = aspect;
    // Widen the lens on portrait screens, so the globe still fits the frame
    // when the viewport is tall and narrow.
    this.camera.fov = aspect < 0.85 ? 70 : 55;
    this.camera.updateProjectionMatrix();

    this.foods.material.uniforms['uPixelRatio'].value = pixelRatio;
    this.motes.material.uniforms['uPixelRatio'].value = pixelRatio;
    this.markers.material.uniforms['uPixelRatio'].value = pixelRatio;

    this.layout();
  }

  /**
   * Where the globe sits in the frame, and how big it is.
   *
   * On a wide screen it is pushed to the right, because the headline occupies
   * the left and a globe centred behind type is a globe nobody can see. As the
   * viewport narrows there is less room beside the type, so it shrinks and
   * climbs; on a phone it sits above the copy entirely.
   *
   * Scaled through the group rather than by rebuilding the geometry — the
   * point positions are fixed at construction and this runs on every resize.
   */
  private layout(): void {
    const aspect = this.opts.width / Math.max(1, this.opts.height);

    if (aspect >= 1.3) {
      this.globe.position.set(14, 0, 0);
      this.globe.scale.setScalar(1);
    } else if (aspect >= 0.9) {
      this.globe.position.set(9, 3, -4);
      this.globe.scale.setScalar(0.86);
    } else {
      this.globe.position.set(0.5, 15, -10);
      this.globe.scale.setScalar(0.8);
    }
  }

  /**
   * Draw one frame.
   *
   * Returns a Hover when the city under the pointer has changed, and null when
   * it has not — so the caller posts a message only on a real change rather
   * than sixty times a second.
   */
  render(time: number, state: SceneState): Hover | null {
    const { progress, pointerX, pointerY } = state;

    this.foods.material.uniforms['uTime'].value = time;
    this.foods.material.uniforms['uScroll'].value = progress;
    this.arcs.material.uniforms['uTime'].value = time;
    this.coast.material.uniforms['uTime'].value = time;
    this.markers.material.uniforms['uTime'].value = time;

    for (const layer of [this.ribbons, this.motes]) {
      const u = layer.material.uniforms;
      u['uTime'].value = time;
      u['uScroll'].value = progress;
      (u['uMouse'].value as Vector2).set(pointerX, -pointerY);
    }

    if (this.grid) {
      this.grid.material.uniforms['uTime'].value = time;
      this.grid.material.uniforms['uScroll'].value = progress;
    }

    // The globe turns on its own, and a little faster while the page is being
    // scrolled — so the scroll feels like it is driving the world, not just
    // moving past it.
    this.spin += 0.0009 + progress * 0.0016;
    this.globe.rotation.y = this.spin;

    // Fade the whole thing out as the hero leaves, rather than letting it sit
    // brightly behind the text of the section below.
    const fade = Math.max(0, 1 - progress * 1.25);
    this.foods.material.uniforms['uOpacity'].value = fade;
    this.arcs.material.uniforms['uOpacity'].value = fade;
    this.coast.material.uniforms['uOpacity'].value = fade;
    this.markers.material.uniforms['uOpacity'].value = fade;
    this.motes.material.uniforms['uOpacity'].value = fade;
    if (this.grid) this.grid.material.uniforms['uOpacity'].value = fade;

    // The camera drifts toward the pointer and dollies in as the page scrolls.
    this.camX += (pointerX * 2.4 - this.camX) * 0.045;
    this.camY += (-pointerY * 1.6 - this.camY) * 0.045;

    this.camera.position.x = this.camX;
    this.camera.position.y = 2.2 + this.camY - progress * 6;
    this.camera.position.z = 46 - progress * 20;
    this.camera.rotation.z = Math.sin(time * 0.06) * 0.007;
    this.camera.lookAt(0, 1.2 - progress * 8, -40);

    this.renderer.render(this.scene, this.camera);

    const found = this.findMarker(state);
    if (found.index === this.hovered) return null;
    this.hovered = found.index;
    return found;
  }

  /**
   * Which city is under the pointer.
   *
   * Done here rather than on the main thread because this is where the camera
   * and the globe's current rotation live; shipping those across every frame
   * so the other side could redo the same arithmetic would cost more than the
   * arithmetic does. Seventy-odd markers is small enough to walk in full.
   */
  private findMarker(state: SceneState): Hover {
    const miss: Hover = { index: -1, x: 0, y: 0 };
    if (state.rawX < 0 || state.progress > 0.5) return miss;

    this.globe.updateMatrixWorld();

    let best = -1;
    let bestDistance = Infinity;
    let bestX = 0;
    let bestY = 0;

    // A generous radius: these are small dots on a turning globe, and asking
    // someone to hit one exactly would make the interaction a game.
    const radius = 0.038;

    for (let i = 0; i < this.markerAt.length; i++) {
      this.probe.copy(this.markerAt[i]).applyMatrix4(this.globe.matrixWorld);

      // Skip the far side. The globe is see-through, but a city behind it is
      // not what the pointer is over.
      this.toCamera.copy(this.camera.position).sub(this.probe).normalize();
      this.outward.copy(this.probe).sub(this.globe.position).normalize();
      if (this.outward.dot(this.toCamera) < 0.12) continue;

      this.probe.project(this.camera);
      if (this.probe.z > 1) continue;

      const x = (this.probe.x + 1) / 2;
      const y = (1 - this.probe.y) / 2;
      const distance = Math.hypot(x - state.rawX, y - state.rawY);

      if (distance < radius && distance < bestDistance) {
        best = i;
        bestDistance = distance;
        bestX = x;
        bestY = y;
      }
    }

    return best === -1 ? miss : { index: best, x: bestX, y: bestY };
  }

  dispose(): void {
    const layers: (Points | LineSegments | Mesh | undefined)[] = [
      this.foods,
      this.coast,
      this.arcs,
      this.markers,
      this.ribbons,
      this.motes,
      this.grid,
    ];

    for (const layer of layers) {
      if (!layer) continue;
      layer.geometry.dispose();
      (layer.material as ShaderMaterial).dispose();
      layer.parent?.remove(layer);
    }

    this.atlas?.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}

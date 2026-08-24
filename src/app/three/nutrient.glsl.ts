/**
 * GLSL for the hero sequence.
 *
 * Five programs, one shared noise library. Kept out of the component so the
 * shader source reads as shader source rather than as string literals buried
 * in TypeScript.
 *
 * The scene is a globe of food data: every point is a food, the arcs between
 * them are the links the app draws when it searches, and the ribbons behind
 * are the light everything edible ultimately comes from. That is the whole
 * idea — one dataset, the whole world, alive.
 */

/** Simplex-ish 2D value noise + fBm. Shared prelude. */
const NOISE = /* glsl */ `
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float snoise(vec2 p) {
  const float K1 = 0.366025404;
  const float K2 = 0.211324865;
  vec2 i = floor(p + (p.x + p.y) * K1);
  vec2 a = p - i + (i.x + i.y) * K2;
  float m = step(a.y, a.x);
  vec2 o = vec2(m, 1.0 - m);
  vec2 b = a - o + K2;
  vec2 c = a - 1.0 + 2.0 * K2;
  vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
  vec3 n = h * h * h * h * vec3(dot(a, hash2(i)), dot(b, hash2(i + o)), dot(c, hash2(i + 1.0)));
  return dot(n, vec3(70.0));
}

/// Two octaves, not five, and not three.
///
/// This is the hottest code in the scene by a wide margin: it runs per pixel
/// over a plane that covers the whole viewport, and the ribbons are blurred to
/// the point where the third octave contributes about a percent of the result
/// for a third of the cost. Hiding the canvas took a frame from 33ms to 9ms,
/// which is what proved the scene was fill-bound rather than CPU-bound.
float fbm(vec2 p) {
  float v = snoise(p) * 0.5;
  p = mat2(1.6, 1.2, -1.2, 1.6) * p;
  return v + snoise(p) * 0.25;
}

/// Single octave, for detail only ever seen through heavy blur.
float fbm1(vec2 p) { return snoise(p) * 0.5; }
`;

/* ------------------------------------------------------------------ globe */

/**
 * The food globe.
 *
 * Points are distributed on a Fibonacci sphere and tinted by nutrient family,
 * so the surface reads as data rather than as a texture. Back-facing points
 * are dimmed but not culled — that is what makes it read as a globe you can
 * see *through* rather than a flat disc of dots.
 */
export const GLOBE_VERT = /* glsl */ `
attribute float aSize;
attribute float aPhase;
attribute float aHub;
attribute vec3  aTint;

uniform float uTime;
uniform float uScroll;
uniform float uPixelRatio;

varying float vTwinkle;
varying float vFront;
varying float vHub;
varying vec3  vTint;

void main() {
  vTint = aTint;
  vHub  = aHub;

  vec3 p = position;

  // A slight breathing motion along the normal. Enough to stop the surface
  // looking like a printed dot pattern, small enough not to read as noise.
  float breathe = sin(uTime * 0.55 + aPhase * 6.2831) * 0.012;
  p *= 1.0 + breathe;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);

  // In view space the camera looks down -z, so a point whose normal has a
  // positive z is turned toward us.
  vec3 nView = normalize(normalMatrix * normalize(position));
  vFront = smoothstep(-0.45, 0.30, nView.z);

  vTwinkle = 0.55 + 0.45 * sin(uTime * (1.1 + aHub * 1.6) + aPhase * 6.2831);

  float dolly = 1.0 + uScroll * 0.35;
  gl_PointSize = aSize * uPixelRatio * dolly * (260.0 / max(-mv.z, 1.0));
  gl_Position = projectionMatrix * mv;
}
`;

export const GLOBE_FRAG = /* glsl */ `
precision highp float;

uniform float uOpacity;

varying float vTwinkle;
varying float vFront;
varying float vHub;
varying vec3  vTint;

void main() {
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = length(d);
  if (r > 0.5) discard;

  // Soft core with a wide falloff — bloom without paying for a post pass.
  float core = smoothstep(0.5, 0.0, r);
  float glow = pow(core, 3.0);

  // Back-facing points survive at a fraction of their brightness, which is
  // what gives the globe its depth.
  float depth = mix(0.16, 1.0, vFront);

  float energy = (glow * (1.9 + vHub * 1.8) + core * 0.30) * depth;
  float alpha  = (glow * 1.0 + core * 0.18) * depth * vTwinkle * uOpacity;

  gl_FragColor = vec4(vTint * energy, alpha);
}
`;

/* ------------------------------------------------------------------- arcs */

/**
 * The links between foods.
 *
 * Every arc carries a pulse that runs from one end to the other on its own
 * offset, so the network reads as busy rather than as a static wireframe.
 */
export const ARC_VERT = /* glsl */ `
attribute float aT;      // 0..1 along this arc
attribute float aOffset; // per-arc phase, so pulses do not march in step
attribute vec3  aTint;

uniform float uTime;

varying float vT;
varying float vOffset;
varying float vFront;
varying vec3  vTint;

void main() {
  vT = aT;
  vOffset = aOffset;
  vTint = aTint;

  vec3 nView = normalize(normalMatrix * normalize(position));
  vFront = smoothstep(-0.25, 0.35, nView.z);

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

export const ARC_FRAG = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uRate;
uniform float uOpacity;

varying float vT;
varying float vOffset;
varying float vFront;
varying vec3  vTint;

void main() {
  // The arc itself: faint, and fading out at both ends so it does not appear
  // to be welded to the surface.
  float body = sin(vT * 3.14159) * 0.42;

  // A pulse travelling along it. The wrap catches the head as it crosses
  // the seam, so the pulse does not blink out at the end of the arc.
  float head = fract(uTime * uRate + vOffset);
  float d = abs(vT - head);
  d = min(d, 1.0 - d);
  float pulse = exp(-d * d * 620.0);

  float a = (body + pulse * 1.25) * mix(0.12, 1.0, vFront) * uOpacity;
  if (a < 0.004) discard;

  gl_FragColor = vec4(vTint * (body * 0.8 + pulse * 2.2), a);
}
`;

/* ----------------------------------------------------------------- ribbons */

/**
 * Ribbons of light behind the globe.
 *
 * Aurora mechanics, but the palette is chlorophyll rather than sky: green
 * through amber through violet, which is the brand and also, not by accident,
 * what a leaf does with light.
 */
export const RIBBON_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const RIBBON_FRAG = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2  uMouse;
uniform float uScroll;
uniform float uIntensity;
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform vec3  uColorC;

varying vec2 vUv;

${NOISE}

void main() {
  vec2 uv = vUv;
  float t = uTime * 0.045;

  uv.x += uMouse.x * 0.03;
  uv.y += uMouse.y * 0.018 - uScroll * 0.14;

  vec3 col = vec3(0.0);
  float alpha = 0.0;

  for (int i = 0; i < 2; i++) {
    float fi = float(i);

    vec2 q = vec2(uv.x * 2.05 + fi * 4.7, uv.y * 1.3 - t * (0.5 + fi * 0.22));
    float warp = fbm1(q * 0.7 + vec2(t * 0.3, -t * 0.16));
    float n = fbm(q + warp * 0.85);

    float centre = 0.47 + 0.15 * sin(t * 1.1 + fi * 2.3) + n * 0.22;

    float band = 1.0 - abs(uv.y - centre) * (2.4 + fi * 0.55);
    band = pow(clamp(band, 0.0, 1.0), 4.2 + fi * 2.0);

    // Two bands rather than three, so both colour mixes have to travel the
    // whole palette or the third colour drops out of the scene entirely.
    vec3 base = mix(uColorA, uColorB, 0.35 + 0.45 * sin(fi * 2.1 + t * 1.3));
    base = mix(base, uColorC, 0.35 + 0.4 * sin(fi * 3.1 - t * 0.85));

    float w = 1.0 - fi * 0.15;
    col += base * band * w;
    alpha += band * w;
  }

  float edgeX = smoothstep(0.0, 0.26, uv.x) * smoothstep(1.0, 0.74, uv.x);
  float edgeY = smoothstep(0.0, 0.20, uv.y) * smoothstep(1.0, 0.62, uv.y);
  float mask = edgeX * edgeY;
  if (mask <= 0.002) discard;

  alpha = clamp(alpha, 0.0, 1.0) * mask * uIntensity;
  col *= mask * uIntensity;

  gl_FragColor = vec4(col, alpha);
}
`;

/* ------------------------------------------------------------------ motes */

/** Depth-parallaxed particles in front of and behind the globe. */
export const MOTE_VERT = /* glsl */ `
attribute float aSize;
attribute float aPhase;
attribute vec3  aTint;

uniform float uTime;
uniform float uScroll;
uniform vec2  uMouse;
uniform float uPixelRatio;

varying float vTwinkle;
varying vec3  vTint;

void main() {
  vTint = aTint;

  vec3 p = position;

  // Near motes move more than far ones. Without the depth weighting the whole
  // field slides as one sheet and the parallax reads as a bug.
  float depth = smoothstep(-260.0, 40.0, p.z);
  p.x += uMouse.x * 22.0 * depth;
  p.y += uMouse.y * 14.0 * depth;

  p.y += sin(uTime * 0.16 + aPhase * 6.2831) * 1.4;
  p.z += uScroll * 130.0;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);

  vTwinkle = 0.4 + 0.6 * sin(uTime * 1.5 + aPhase * 6.2831);

  gl_PointSize = aSize * uPixelRatio * (170.0 / max(-mv.z, 1.0));
  gl_Position = projectionMatrix * mv;
}
`;

export const MOTE_FRAG = /* glsl */ `
precision highp float;

uniform float uOpacity;

varying float vTwinkle;
varying vec3  vTint;

void main() {
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = length(d);
  if (r > 0.5) discard;

  float core = smoothstep(0.5, 0.0, r);
  float glow = pow(core, 3.2);

  gl_FragColor = vec4(
    vTint * (glow * 1.3 + core * 0.2),
    (glow * 0.9 + core * 0.1) * vTwinkle * uOpacity
  );
}
`;

/* ------------------------------------------------------------------- grid */

/** A receding lattice under the globe — the day, running away from you. */
export const GRID_VERT = /* glsl */ `
varying vec2 vUv;
varying float vDist;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

export const GRID_FRAG = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uScroll;
uniform float uOpacity;
uniform vec3  uColor;
uniform vec3  uColorHot;

varying vec2 vUv;
varying float vDist;

/** Anti-aliased line mask on a repeating lattice. */
float lattice(float coord, float width) {
  float g = abs(fract(coord - 0.5) - 0.5) / max(fwidth(coord), 1e-5);
  return 1.0 - smoothstep(0.0, width, g);
}

void main() {
  float flow = uTime * 0.07 + uScroll * 2.2;

  float lx = lattice(vUv.x * 44.0, 1.3);
  float ly = lattice(vUv.y * 44.0 + flow, 1.3);
  // Every seventh line is brighter — a week, marked without saying so.
  float major = lattice(vUv.y * 6.28 + flow * 0.143, 1.7) * 0.7;

  float g = max(max(lx, ly), major);

  float depth = smoothstep(160.0, 18.0, vDist);
  float radial = 1.0 - smoothstep(0.10, 0.52, distance(vUv, vec2(0.5)));

  vec3 col = mix(uColor, uColorHot, ly * 0.55 + major * 0.45);
  float a = g * depth * radial * 0.5 * uOpacity;

  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}
`;

/* --------------------------------------------------------------- coastline */

/** Hairlines along the coast, so the continents have an edge as well as a fill. */
export const COAST_VERT = /* glsl */ `
uniform float uTime;

varying float vFront;

void main() {
  vec3 nView = normalize(normalMatrix * normalize(position));
  vFront = smoothstep(-0.05, 0.45, nView.z);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const COAST_FRAG = /* glsl */ `
precision highp float;

uniform vec3  uColor;
uniform float uOpacity;

varying float vFront;

void main() {
  // Back-facing coastline is dropped entirely rather than dimmed. A globe
  // whose far coastlines show through reads as a wireframe balloon, and the
  // point of the outline is to say "this is the near side".
  float a = vFront * 0.34 * uOpacity;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor * 0.9, a);
}
`;

/* ----------------------------------------------------------------- markers */

/**
 * The city markers, and the food photographs that bloom from them.
 *
 * One program draws both: a small ring that is always there, and a square
 * billboard carrying a frame from the app's food archive that appears when the
 * arc pulse aimed at that city arrives. Sharing a program means one draw call
 * and, more usefully, means the picture cannot drift away from its marker.
 */
export const MARKER_VERT = /* glsl */ `
attribute float aPop;    // phase of the arc that lands here, 0..1
attribute float aTile;   // index into the sprite atlas
attribute float aActive; // 1 if an arc targets this marker at all

uniform float uTime;
uniform float uRate;
uniform float uPixelRatio;
uniform float uTileSize;

varying float vFront;
varying float vBloom;
varying vec2  vTileOrigin;

void main() {
  vec3 nView = normalize(normalMatrix * normalize(position));
  vFront = smoothstep(-0.02, 0.30, nView.z);

  vec4 mv = modelViewMatrix * vec4(position, 1.0);

  // The pulse arrives as its cycle wraps, so a small age is "just landed".
  float age = fract(uTime * uRate + aPop);

  // Bloom in fast, hold, fade out. Everything is a function of age, so the
  // CPU never touches this and the picture cannot desynchronise from the arc.
  float rise = smoothstep(0.0, 0.05, age);
  float fall = 1.0 - smoothstep(0.20, 0.34, age);
  vBloom = rise * fall * aActive * vFront;

  // Atlas coordinates for this marker's tile, in units of one tile.
  float cols = 1.0 / uTileSize;
  vTileOrigin = vec2(mod(aTile, cols), floor(aTile * uTileSize)) * uTileSize;

  gl_Position = projectionMatrix * mv;

  // Keep the photographs out of the headline.
  //
  // The globe sits in the right of the frame, but its left limb reaches back
  // across the type, and a plate of food blooming on top of a word is worse
  // than no plate at all. Gated on the projected position rather than on a
  // world-space guess, so it holds at any viewport and any rotation.
  float ndcX = gl_Position.x / max(gl_Position.w, 0.0001);
  vBloom *= smoothstep(0.16, 0.40, ndcX);

  float dot = 5.0 + aActive * 2.0;
  float picture = 76.0 * vBloom;
  gl_PointSize = max(dot, picture) * uPixelRatio * (46.0 / max(-mv.z, 1.0)) * 1.6;
}
`;

export const MARKER_FRAG = /* glsl */ `
precision highp float;

uniform sampler2D uAtlas;
uniform float uTileSize;
uniform float uOpacity;
uniform vec3  uRing;

varying float vFront;
varying float vBloom;
varying vec2  vTileOrigin;

void main() {
  vec2 p = gl_PointCoord;
  float r = length(p - vec2(0.5));

  vec3 col = vec3(0.0);
  float alpha = 0.0;

  // The marker itself: a bright core inside a soft ring.
  float core = smoothstep(0.5, 0.0, r);
  col += uRing * pow(core, 3.0) * 1.8;
  alpha += pow(core, 3.0) * 0.9;

  if (vBloom > 0.002) {
    // The photograph, inset inside the point so its edge is never clipped by
    // the point sprite's own square.
    vec2 q = (p - 0.5) / 0.84 + 0.5;
    if (q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0) {
      // The atlas is a normal top-down image; gl_PointCoord already runs top
      // down, so no flip is needed here.
      vec3 photo = texture2D(uAtlas, vTileOrigin + q * uTileSize).rgb;

      // Cut to a circle rather than a card. Every frame in the archive is a
      // plate photographed square on a pale ground, and a square crop puts a
      // grey rectangle in the middle of the night sky; a disc reads as a
      // lens, and the plate happens to be round anyway.
      float disc = length(q - 0.5);
      float mask = 1.0 - smoothstep(0.40, 0.47, disc);

      // A thin rim of the marker's own light, so the picture is set into the
      // globe rather than floating in front of it.
      float rim = smoothstep(0.40, 0.44, disc) * (1.0 - smoothstep(0.46, 0.50, disc));

      col = mix(col, photo * 1.06, mask * vBloom);
      col += uRing * rim * vBloom * 1.4;
      alpha = max(alpha, max(mask, rim) * vBloom);
    }
  }

  alpha *= uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha);
}
`;

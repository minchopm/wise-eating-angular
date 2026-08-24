import { LAND_H, LAND_RLE, LAND_W } from './globe-data';

/**
 * The land mask, decoded.
 *
 * tools/build-globe.py rasterises the continents into an equirectangular
 * bitmap and run-length encodes it into a base-32 string. Decoding it here
 * rather than fetching a PNG keeps the whole thing synchronous and free of a
 * network request, which matters because the scene is built inside a worker
 * during the first idle moment of the page.
 */

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/** Digit value for every character, built once. */
const VALUE = (() => {
  const table = new Int8Array(128).fill(-1);
  for (let i = 0; i < ALPHABET.length; i++) table[ALPHABET.charCodeAt(i)] = i;
  return table;
})();

let cached: Uint8Array | null = null;

/** One byte per cell: 1 for land, 0 for sea. Row-major from 90°N, 180°W. */
export function landMask(): Uint8Array {
  if (cached) return cached;

  const mask = new Uint8Array(LAND_W * LAND_H);
  let at = 0;
  let value = 0; // runs alternate, starting from sea
  let i = 0;

  while (i < LAND_RLE.length && at < mask.length) {
    // Little-endian base-32 digits; the 32 bit says another digit follows.
    let run = 0;
    let shift = 0;
    for (;;) {
      const digit = VALUE[LAND_RLE.charCodeAt(i++)];
      run |= (digit & 31) << shift;
      shift += 5;
      if (!(digit & 32)) break;
    }

    if (value) mask.fill(1, at, Math.min(at + run, mask.length));
    at += run;
    value ^= 1;
  }

  cached = mask;
  return mask;
}

/** Whether a latitude/longitude falls on land. */
export function isLand(lat: number, lon: number): boolean {
  const mask = landMask();
  const x = Math.min(LAND_W - 1, Math.max(0, Math.floor(((lon + 180) / 360) * LAND_W)));
  const y = Math.min(LAND_H - 1, Math.max(0, Math.floor(((90 - lat) / 180) * LAND_H)));
  return mask[y * LAND_W + x] === 1;
}

/**
 * Latitude/longitude to a point on a sphere of the given radius.
 *
 * The convention has to match the one the mask was rasterised in, or the
 * continents come out mirrored — which is the sort of bug that looks like a
 * design choice until somebody notices Africa is backwards.
 */
export function toSphere(
  lat: number,
  lon: number,
  radius: number,
  out: { x: number; y: number; z: number },
): void {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  const s = Math.sin(phi);

  out.x = -radius * s * Math.cos(theta);
  out.y = radius * Math.cos(phi);
  out.z = radius * s * Math.sin(theta);
}

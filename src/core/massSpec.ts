// Isotope patterns and degree of unsaturation for molecular formulas.

import { molarMass } from './molarMass';

/** Isotope masses (u) and abundances (%) — IUPAC representative isotopic compositions. */
export const ISOTOPES: Record<string, [number, number][]> = {
  H: [
    [1.0078250319, 99.9885],
    [2.0141017779, 0.0115],
  ],
  B: [
    [10.0129370, 19.9],
    [11.0093054, 80.1],
  ],
  C: [
    [12.0, 98.93],
    [13.0033548378, 1.07],
  ],
  N: [
    [14.0030740052, 99.636],
    [15.0001088984, 0.364],
  ],
  O: [
    [15.9949146221, 99.757],
    [16.9991315, 0.038],
    [17.9991604, 0.205],
  ],
  F: [[18.9984032, 100]],
  Na: [[22.98976966, 100]],
  Si: [
    [27.9769265327, 92.223],
    [28.9764947, 4.685],
    [29.97377022, 3.092],
  ],
  P: [[30.97376151, 100]],
  S: [
    [31.97207069, 94.99],
    [32.9714585, 0.75],
    [33.96786683, 4.25],
    [35.96708088, 0.01],
  ],
  Cl: [
    [34.96885271, 75.76],
    [36.9659026, 24.24],
  ],
  K: [
    [38.9637069, 93.2581],
    [39.96399867, 0.0117],
    [40.96182597, 6.7302],
  ],
  Br: [
    [78.9183376, 50.69],
    [80.916291, 49.31],
  ],
  I: [[126.904468, 100]],
};

export interface IsotopePeak {
  /** Nominal mass offset from the monoisotopic peak (0 = M, 1 = M+1, …). */
  offset: number;
  /** Abundance-weighted mean exact mass of this cluster. */
  mass: number;
  /** Intensity relative to the most abundant peak (%). */
  relative: number;
}

export type IsotopeResult =
  | { ok: true; monoisotopic: number; average: number; peaks: IsotopePeak[]; dbe?: number }
  | { ok: false; error: string };

/**
 * Isotope cluster by successive convolution of each atom's isotope distribution, binned to nominal
 * mass. Only elements listed in ISOTOPES are supported.
 */
export function isotopePattern(formula: string, maxOffset = 12): IsotopeResult {
  const mm = molarMass(formula);
  if (!mm.ok) return mm;
  const unsupported = mm.composition.map((c) => c.symbol).filter((s) => !ISOTOPES[s]);
  if (unsupported.length) return { ok: false, error: `unsupported:${unsupported.join(',')}` };

  // dist[offset] = [probability, probability-weighted mass]
  let dist: [number, number][] = [[1, 0]];
  let mono = 0;
  for (const { symbol, count } of mm.composition) {
    const iso = ISOTOPES[symbol];
    const base = iso[0][0];
    mono += base * count;
    const atom = iso.map(([m, a]) => ({ off: Math.round(m - base), p: a / 100, m }));
    for (let k = 0; k < count; k++) {
      const next: [number, number][] = Array.from({ length: Math.min(dist.length + 4, maxOffset + 1) }, () => [0, 0]);
      dist.forEach(([p, pm], i) => {
        if (p === 0) return;
        const mAvg = pm / p;
        for (const a of atom) {
          const j = i + a.off;
          if (j > maxOffset) continue;
          next[j][0] += p * a.p;
          next[j][1] += p * a.p * (mAvg + a.m);
        }
      });
      dist = next;
    }
  }
  const max = Math.max(...dist.map((d) => d[0]));
  const peaks = dist
    .map(([p, pm], offset) => ({ offset, mass: p > 0 ? pm / p : NaN, relative: (100 * p) / max }))
    .filter((pk) => pk.relative >= 0.01);
  return { ok: true, monoisotopic: mono, average: mm.molarMass, peaks, dbe: dbe(mm.composition) };
}

/** Rings plus double bonds: DBE = C + Si − (H + X)/2 + (N + P)/2 + 1. */
export function dbe(comp: { symbol: string; count: number }[]): number | undefined {
  const n = (s: string) => comp.find((c) => c.symbol === s)?.count ?? 0;
  if (!n('C') && !n('Si')) return undefined;
  const halogens = n('F') + n('Cl') + n('Br') + n('I');
  return n('C') + n('Si') - (n('H') + halogens) / 2 + (n('N') + n('P')) / 2 + 1;
}

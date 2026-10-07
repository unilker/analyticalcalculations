// Small fitting utilities: straight lines, two-segment fits, kinetic order and linear least squares.

import { linearRegression } from './stats';

export interface Line {
  m: number;
  b: number;
}

function fitLine(pts: [number, number][]): Line & { sse: number } {
  const n = pts.length;
  const mx = pts.reduce((s, p) => s + p[0], 0) / n;
  const my = pts.reduce((s, p) => s + p[1], 0) / n;
  const sxx = pts.reduce((s, p) => s + (p[0] - mx) ** 2, 0);
  const sxy = pts.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0);
  const m = sxy / sxx;
  const b = my - m * mx;
  return { m, b, sse: pts.reduce((s, p) => s + (p[1] - (m * p[0] + b)) ** 2, 0) };
}

/**
 * Two straight lines fitted to the points before and after the best break point (minimum total
 * squared error); used for mole-ratio plots and photometric titrations. Returns their intersection.
 */
export function twoLineFit(x: number[], y: number[]): { x: number; y: number; left: Line; right: Line; split: number } | undefined {
  const pts = x.map((xi, i) => [xi, y[i]] as [number, number]).sort((a, b) => a[0] - b[0]);
  let best: { left: Line & { sse: number }; right: Line & { sse: number }; split: number } | undefined;
  for (let s = 2; s <= pts.length - 2; s++) {
    const left = fitLine(pts.slice(0, s));
    const right = fitLine(pts.slice(s));
    if (!best || left.sse + right.sse < best.left.sse + best.right.sse) best = { left, right, split: s };
  }
  if (!best || best.left.m === best.right.m) return undefined;
  const xi = (best.right.b - best.left.b) / (best.left.m - best.right.m);
  return { x: xi, y: best.left.m * xi + best.left.b, left: best.left, right: best.right, split: best.split };
}

export interface OrderFit {
  order: 0 | 1 | 2;
  /** Rate constant from the slope (M s⁻¹, s⁻¹ or M⁻¹ s⁻¹ in the input time unit). */
  k: number;
  r2: number;
  /** Initial-concentration estimate from the intercept. */
  a0: number;
  halfLife: number;
}

/** Fits [A] vs t, ln[A] vs t and 1/[A] vs t; the best R² indicates the reaction order (Christian §23.1). */
export function kineticOrders(t: number[], a: number[]): OrderFit[] {
  const fits: OrderFit[] = [];
  const zero = linearRegression(t, a);
  fits.push({ order: 0, k: -zero.slope, r2: zero.r2, a0: zero.intercept, halfLife: zero.intercept / (2 * -zero.slope) });
  if (a.every((v) => v > 0)) {
    const first = linearRegression(
      t,
      a.map((v) => Math.log(v)),
    );
    fits.push({ order: 1, k: -first.slope, r2: first.r2, a0: Math.exp(first.intercept), halfLife: Math.LN2 / -first.slope });
    const second = linearRegression(
      t,
      a.map((v) => 1 / v),
    );
    fits.push({ order: 2, k: second.slope, r2: second.r2, a0: 1 / second.intercept, halfLife: 1 / (second.slope / second.intercept) });
  }
  return fits;
}

/** Lineweaver–Burk: 1/v = (Km/Vmax)·(1/[S]) + 1/Vmax (Christian Eq. 23.14). */
export function lineweaverBurk(s: number[], v: number[]) {
  const reg = linearRegression(
    s.map((x) => 1 / x),
    v.map((x) => 1 / x),
  );
  const vmax = 1 / reg.intercept;
  return { vmax, km: reg.slope * vmax, r2: reg.r2, slope: reg.slope, intercept: reg.intercept };
}

/**
 * Least-squares solution of A·x = b (m ≥ n) by normal equations with Gaussian elimination and
 * partial pivoting. Returns undefined for a singular system.
 */
export function leastSquares(A: number[][], b: number[]): number[] | undefined {
  const n = A[0].length;
  const M = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => A.reduce((s, row) => s + row[i] * row[j], 0)));
  const v = Array.from({ length: n }, (_, i) => A.reduce((s, row, r) => s + row[i] * b[r], 0));
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < 1e-300) return undefined;
    [M[c], M[p]] = [M[p], M[c]];
    [v[c], v[p]] = [v[p], v[c]];
    for (let r = c + 1; r < n; r++) {
      const f = M[r][c] / M[c][c];
      for (let k = c; k < n; k++) M[r][k] -= f * M[c][k];
      v[r] -= f * v[c];
    }
  }
  const x = new Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) {
    let s = v[r];
    for (let k = r + 1; k < n; k++) s -= M[r][k] * x[k];
    x[r] = s / M[r][r];
  }
  return x.every(Number.isFinite) ? x : undefined;
}

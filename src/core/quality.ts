// Quality-assurance helpers: experimental designs, control charts, screening tests and sampling plans.

import { mean, stdev, tCritical, zCritical } from './stats';

/** Youden–Steiner (Plackett–Burman) design: levels of factors A…G in experiments 1…8; true = nominal level. */
export const YOUDEN_DESIGN: boolean[][] = [
  [true, true, true, true, true, true, true],
  [true, true, false, true, false, false, false],
  [true, false, true, false, true, false, false],
  [true, false, false, false, false, true, true],
  [false, true, true, false, false, true, false],
  [false, true, false, false, true, false, true],
  [false, false, true, true, false, false, true],
  [false, false, false, true, true, true, false],
];

/**
 * Effect of each factor: mean of the four results at the nominal level minus the mean at the
 * alternative level (Prichard & Barwick Eq. 4.15–4.16). An effect is significant if |Δ| > t·s/√2.
 */
export function youdenEffects(results: number[]): number[] {
  return Array.from({ length: 7 }, (_, f) => {
    const hi = results.filter((_, e) => YOUDEN_DESIGN[e][f]);
    const lo = results.filter((_, e) => !YOUDEN_DESIGN[e][f]);
    return snap(mean(hi) - mean(lo), results);
  });
}

/** Rounds floating-point residue (e.g. 8.9 × 10⁻¹⁶) of a difference of means to zero. */
function snap(effect: number, data: number[]): number {
  const scale = Math.max(...data.map(Math.abs));
  return Math.abs(effect) <= 1e-12 * scale ? 0 : effect;
}

/**
 * Main effects and interactions of a 2ᵏ full factorial design (k = 2 or 3). Responses are given in
 * standard (Yates) order: (1), a, b, ab, c, ac, bc, abc. Effect = mean(+) − mean(−).
 */
export function factorialEffects(k: number, y: number[]): { label: string; effect: number }[] {
  const n = 2 ** k;
  const names = ['A', 'B', 'C'].slice(0, k);
  const level = (run: number, factor: number) => ((run >> factor) & 1 ? 1 : -1);
  const out: { label: string; effect: number }[] = [];
  for (let mask = 1; mask < n; mask++) {
    const factors = names.map((_, f) => f).filter((f) => (mask >> f) & 1);
    const sign = (run: number) => factors.reduce((p, f) => p * level(run, f), 1);
    const effect = snap(y.reduce((s, yi, run) => s + sign(run) * yi, 0) / (n / 2), y);
    out.push({ label: factors.map((f) => names[f]).join(''), effect });
  }
  return out.sort((a, b) => a.label.length - b.label.length || a.label.localeCompare(b.label));
}

export interface ControlChart {
  center: number;
  s: number;
  uwl: number;
  lwl: number;
  ucl: number;
  lcl: number;
  /** Indices of points violating a rule, with the rule id. */
  violations: { index: number; rule: '3s' | '2of3' | 'run7' }[];
}

/**
 * Shewhart chart: warning limits ±2s, action limits ±3s (Prichard & Barwick §6.2). The centre and s
 * are taken from the data unless given. Flags: one point beyond ±3s; two of three consecutive points
 * beyond the same ±2s; seven consecutive points on the same side of the centre line.
 */
export function controlChart(x: number[], center?: number, s?: number): ControlChart {
  const c = center ?? mean(x);
  const sd = s ?? stdev(x);
  const violations: ControlChart['violations'] = [];
  // A point lying on a limit is not beyond it; the tolerance absorbs rounding (10.08 − 10.00 = 0.08000000000000007).
  const eps = 1e-9 * sd;
  const beyond2 = (v: number, side: number) => side * (v - c) > 2 * sd + eps;
  x.forEach((xi, i) => {
    if (Math.abs(xi - c) > 3 * sd + eps) violations.push({ index: i, rule: '3s' });
    if (i >= 2) {
      const win = x.slice(i - 2, i + 1);
      for (const side of [1, -1]) {
        if (win.filter((w) => beyond2(w, side)).length >= 2 && beyond2(xi, side)) violations.push({ index: i, rule: '2of3' });
      }
    }
    if (i >= 6) {
      const win = x.slice(i - 6, i + 1);
      if (win.every((w) => w > c) || win.every((w) => w < c)) violations.push({ index: i, rule: 'run7' });
    }
  });
  return { center: c, s: sd, uwl: c + 2 * sd, lwl: c - 2 * sd, ucl: c + 3 * sd, lcl: c - 3 * sd, violations };
}

export interface ScreeningResult {
  sensitivity: number;
  specificity: number;
  ppv: number;
  npv: number;
  accuracy: number;
  fpr: number;
  fnr: number;
}

/** Performance of a qualitative (screening) test from a 2×2 table (Danzer Eq. 4.48–4.55). */
export function screening(tp: number, fp: number, tn: number, fn: number): ScreeningResult {
  return {
    sensitivity: tp / (tp + fn),
    specificity: tn / (tn + fp),
    ppv: tp / (tp + fp),
    npv: tn / (tn + fn),
    accuracy: (tp + tn) / (tp + fp + tn + fn),
    fpr: fp / (fp + tn),
    fnr: fn / (fn + tp),
  };
}

/**
 * Number of samples needed for a relative sampling error e (%) given the relative sampling standard
 * deviation s (%): n = t²·s²/e², iterated because t depends on n (Harvey Example 7.2.6).
 */
export function samplesNeeded(s: number, e: number, conf: number): { n: number; iterations: number[] } {
  const iterations: number[] = [];
  // Always round up: rounding down would leave the sampling error slightly above e.
  let n = Math.max(2, Math.ceil((zCritical(conf) * s / e) ** 2 - 1e-9));
  iterations.push(n);
  for (let i = 0; i < 50; i++) {
    const next = Math.max(2, Math.ceil((tCritical(conf, n - 1) * s / e) ** 2 - 1e-9));
    if (next === n) break;
    if (iterations.includes(next)) {
      // The iteration oscillates between neighbouring values; keep the larger (conservative) one.
      n = Math.max(...iterations.slice(iterations.indexOf(next)));
      break;
    }
    iterations.push(next);
    n = next;
  }
  return { n, iterations };
}

export interface BudgetRow {
  name: string;
  value: number;
  u: number;
}

/**
 * Uncertainty budget for a multiplicative model y = Π xᵢ^(±1): relative standard uncertainties add in
 * quadrature; each row's share of the combined variance is reported (Prichard & Barwick §6.3).
 */
export function uncertaintyBudget(rows: BudgetRow[], k = 2) {
  const rel = rows.map((r) => r.u / Math.abs(r.value));
  const sumSq = rel.reduce((s, r) => s + r * r, 0);
  const uRel = Math.sqrt(sumSq);
  return {
    uRel,
    contributions: rel.map((r) => (r * r) / sumSq),
    expandedRel: k * uRel,
  };
}

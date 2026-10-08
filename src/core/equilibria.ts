// Activity coefficients, extraction/countercurrent distribution and chromatographic helpers.

export interface Ion {
  c: number;
  z: number;
  /** Hydrated ion size in pm (extended Debye–Hückel), optional. */
  alpha?: number;
}

/** Ionic strength μ = ½ Σ cᵢ zᵢ². */
export const ionicStrength = (ions: Ion[]) => 0.5 * ions.reduce((s, i) => s + i.c * i.z * i.z, 0);

/** Extended Debye–Hückel (25 °C): log γ = −0.51 z² √μ / (1 + α√μ/305), α in pm (Harvey Eq. 6.9.2). */
export const logGammaExtended = (z: number, mu: number, alphaPm: number) =>
  (-0.51 * z * z * Math.sqrt(mu)) / (1 + (alphaPm * Math.sqrt(mu)) / 305);

/** Davies-type equation used by Christian (Eq. 6.21): log γ = −0.51 z² [√μ/(1 + √μ) − 0.3μ]. */
export const logGammaDavies = (z: number, mu: number) => -0.51 * z * z * (Math.sqrt(mu) / (1 + Math.sqrt(mu)) - 0.3 * mu);

/** Debye–Hückel limiting law: log γ = −0.51 z² √μ. */
export const logGammaLimiting = (z: number, mu: number) => -0.51 * z * z * Math.sqrt(mu);

/**
 * Countercurrent (Craig) distribution: fraction of solute in tube r (0…n) after n transfers.
 * p is the fraction of solute in the mobile (upper) phase of one tube: p = D·Vu / (D·Vu + Vl).
 */
export function craigDistribution(n: number, p: number): number[] {
  const q = 1 - p;
  const out: number[] = [];
  let lnC = 0; // ln C(n, r)
  for (let r = 0; r <= n; r++) {
    if (r > 0) lnC += Math.log(n - r + 1) - Math.log(r);
    const lp = p > 0 ? r * Math.log(p) : r === 0 ? 0 : -Infinity;
    const lq = q > 0 ? (n - r) * Math.log(q) : n - r === 0 ? 0 : -Infinity;
    out.push(Math.exp(lnC + lp + lq));
  }
  return out;
}

/** van Deemter optimum: u_opt = √(B/C), H_min = A + 2√(BC). */
export const vanDeemterOptimum = (A: number, B: number, C: number) => ({ u: Math.sqrt(B / C), h: A + 2 * Math.sqrt(B * C) });

/** Gaussian peak with baseline width w (= 4σ) and height h. */
export const gaussian = (t: number, tR: number, w: number, h = 1) => h * Math.exp(-((t - tR) ** 2) / (2 * (w / 4) ** 2));

/**
 * Job's method of continuous variations: fits straight lines to the points on each side of the
 * maximum (excluding the curved points next to it) and returns their intersection (mole fraction
 * of ligand) and the ligand:metal ratio.
 */
export function jobIntersection(
  x: number[],
  y: number[],
): { x: number; y: number; ratio: number; left: { m: number; b: number }; right: { m: number; b: number } } | undefined {
  const order = x.map((_, i) => i).sort((a, b) => x[a] - x[b]);
  const xs = order.map((i) => x[i]);
  const ys = order.map((i) => y[i]);
  const iMax = ys.indexOf(Math.max(...ys));
  const pts = xs.map((xi, i) => [xi, ys[i]] as const);
  // Points next to the maximum lie on the curved part; skip them when enough linear points remain.
  const side = (keep: (i: number, gap: number) => boolean) => {
    const far = pts.filter((_, i) => keep(i, 1));
    return far.length >= 2 ? far : pts.filter((_, i) => keep(i, 0));
  };
  const left = side((i, gap) => i < iMax - gap);
  const right = side((i, gap) => i > iMax + gap);
  if (left.length < 2 || right.length < 2) return undefined;
  const fit = (pts: readonly (readonly [number, number])[]) => {
    const n = pts.length;
    const mx = pts.reduce((s, p) => s + p[0], 0) / n;
    const my = pts.reduce((s, p) => s + p[1], 0) / n;
    const sxx = pts.reduce((s, p) => s + (p[0] - mx) ** 2, 0);
    const sxy = pts.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0);
    const m = sxy / sxx;
    return { m, b: my - m * mx };
  };
  const L = fit(left);
  const R = fit(right);
  if (L.m === R.m) return undefined;
  const xi = (R.b - L.b) / (L.m - R.m);
  return { x: xi, y: L.m * xi + L.b, ratio: xi / (1 - xi), left: L, right: R };
}

const SUBSCRIPT = '₀₁₂₃₄₅₆₇₈₉';

/**
 * Complex formula for a ligand : metal ratio, using the nearest simple fraction L/M = p/q with
 * p, q ≤ 4: 2 → "ML₂", 0.5 → "M₂L", 1.5 → "M₂L₃".
 */
export function complexFormula(ratio: number): string {
  if (!(ratio > 0) || !Number.isFinite(ratio)) return '—';
  let best = { p: 1, q: 1, err: Infinity };
  for (let q = 1; q <= 4; q++) {
    for (let p = 1; p <= 4; p++) {
      const err = Math.abs(Math.log(ratio / (p / q)));
      if (err < best.err - 1e-12) best = { p, q, err };
    }
  }
  const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
  const d = g(best.p, best.q);
  const sub = (n: number) => (n > 1 ? SUBSCRIPT[n] : '');
  return `M${sub(best.q / d)}L${sub(best.p / d)}`;
}

/**
 * Molar solubility of a salt MₓAᵧ in pure water at 25 °C.
 * For hydroxides M(OH)ᵧ the OH⁻ from water is included (charge balance y·s + [H⁺] = [OH⁻], Kw = 1.0e-14),
 * which matters when the hydroxide is so insoluble that the simple formula would give [OH⁻] < 10⁻⁷ M
 * (e.g. Fe(OH)₃). Other salts use s = (Ksp / xˣyʸ)^(1/(x+y)); hydrolysis is neglected.
 */
export function pureWaterSolubility(ksp: number, x: number, y: number, hydroxide: boolean, kw = 1.0e-14): number {
  if (!hydroxide || x !== 1) return (ksp / (x ** x * y ** y)) ** (1 / (x + y));
  // f(OH) = y·Ksp/OH^y + Kw/OH − OH decreases monotonically; bisect on log[OH⁻].
  const f = (oh: number) => (y * ksp) / oh ** y + kw / oh - oh;
  let lo = -14;
  let hi = 1;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (f(10 ** mid) > 0) lo = mid;
    else hi = mid;
  }
  return ksp / (10 ** ((lo + hi) / 2)) ** y;
}

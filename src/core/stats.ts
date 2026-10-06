// Descriptive statistics, distributions and significance tests used by the statistics and
// calibration modules. Distribution functions are computed (not tabulated) so any confidence
// level and number of degrees of freedom is supported.

export const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
export const mean = (xs: number[]) => sum(xs) / xs.length;

export function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export function variance(xs: number[]): number {
  const m = mean(xs);
  return sum(xs.map((x) => (x - m) ** 2)) / (xs.length - 1);
}

export const stdev = (xs: number[]) => Math.sqrt(variance(xs));

// ---------- special functions ----------

const LANCZOS = [
  676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905,
  -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
];

export function lnGamma(z: number): number {
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lnGamma(1 - z);
  z -= 1;
  let x = 0.99999999999980993;
  for (let i = 0; i < LANCZOS.length; i++) x += LANCZOS[i] / (z + i + 1);
  const t = z + LANCZOS.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}

function betacf(a: number, b: number, x: number): number {
  const FPMIN = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= 300; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  return h;
}

/** Regularized incomplete beta function I_x(a, b). */
export function ibeta(x: number, a: number, b: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(lnGamma(a + b) - lnGamma(a) - lnGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  return x < (a + 1) / (a + b + 2) ? (bt * betacf(a, b, x)) / a : 1 - (bt * betacf(b, a, 1 - x)) / b;
}

/** Student t cumulative distribution P(T ≤ t). */
export function tCdf(t: number, df: number): number {
  const p = 0.5 * ibeta(df / (df + t * t), df / 2, 0.5);
  return t >= 0 ? 1 - p : p;
}

/** F cumulative distribution P(F ≤ f). */
export function fCdf(f: number, d1: number, d2: number): number {
  if (f <= 0) return 0;
  return ibeta((d1 * f) / (d1 * f + d2), d1 / 2, d2 / 2);
}

function invert(cdf: (x: number) => number, p: number, lo: number, hi: number): number {
  while (cdf(hi) < p) hi *= 2;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (cdf(mid) < p) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/** Two-tailed critical t for confidence level `conf` (e.g. 0.95). */
export const tCritical = (conf: number, df: number) => invert((t) => tCdf(t, df), 1 - (1 - conf) / 2, 0, 10);

/** One-tailed upper critical F with significance alpha. */
export const fCritical = (alpha: number, d1: number, d2: number) => invert((f) => fCdf(f, d1, d2), 1 - alpha, 0, 10);

/** Two-tailed p-value for a t statistic. */
export const tPValue = (t: number, df: number) => 2 * (1 - tCdf(Math.abs(t), df));

export function erf(x: number): number {
  // Abramowitz & Stegun 7.1.26 refined by a series for small x.
  const sign = Math.sign(x);
  x = Math.abs(x);
  if (x < 0.5) {
    let term = x;
    let s = x;
    for (let n = 1; n < 30; n++) {
      term *= (-x * x) / n;
      s += term / (2 * n + 1);
    }
    return (sign * 2 * s) / Math.sqrt(Math.PI);
  }
  // Continued fraction for erfc.
  let f = 0;
  for (let n = 60; n >= 1; n--) f = (n / 2) / (x + f);
  const erfc = Math.exp(-x * x) / Math.sqrt(Math.PI) / (x + f);
  return sign * (1 - erfc);
}

export const normCdf = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));
export const zCritical = (conf: number) => invert(normCdf, 1 - (1 - conf) / 2, 0, 10);
export const zOneTailed = (alpha: number) => invert(normCdf, 1 - alpha, 0, 10);

// ---------- descriptive summary ----------

export interface Summary {
  n: number;
  mean: number;
  median: number;
  min: number;
  max: number;
  range: number;
  s: number;
  variance: number;
  rsd: number;
  sMean: number;
  ci: { conf: number; t: number; half: number }[];
}

export function summarize(xs: number[]): Summary {
  const n = xs.length;
  const m = mean(xs);
  const s = n > 1 ? stdev(xs) : NaN;
  const min = Math.min(...xs);
  const max = Math.max(...xs);
  return {
    n,
    mean: m,
    median: median(xs),
    min,
    max,
    range: max - min,
    s,
    variance: s * s,
    rsd: s / m,
    sMean: s / Math.sqrt(n),
    ci: [0.9, 0.95, 0.99].map((conf) => {
      const t = n > 1 ? tCritical(conf, n - 1) : NaN;
      return { conf, t, half: (t * s) / Math.sqrt(n) };
    }),
  };
}

// ---------- significance tests ----------

export interface TestResult {
  statistic: number;
  critical: number;
  df?: number | [number, number];
  pValue?: number;
  /** True when the null hypothesis is rejected (difference / outlier is significant). */
  significant: boolean;
}

/** Compares a mean with a known (reference) value. */
export function tTestKnown(xs: number[], mu: number, conf: number): TestResult {
  const n = xs.length;
  const t = (Math.abs(mean(xs) - mu) * Math.sqrt(n)) / stdev(xs);
  const crit = tCritical(conf, n - 1);
  return { statistic: t, critical: crit, df: n - 1, pValue: tPValue(t, n - 1), significant: t > crit };
}

/** Two-tailed F-test for equal variances (larger variance in the numerator). */
export function fTest(a: number[], b: number[], conf: number): TestResult {
  const va = variance(a);
  const vb = variance(b);
  const [big, small, d1, d2] = va >= vb ? [va, vb, a.length - 1, b.length - 1] : [vb, va, b.length - 1, a.length - 1];
  const F = big / small;
  const crit = fCritical((1 - conf) / 2, d1, d2);
  return { statistic: F, critical: crit, df: [d1, d2], pValue: Math.min(1, 2 * (1 - fCdf(F, d1, d2))), significant: F > crit };
}

export interface TwoMeansResult extends TestResult {
  pooled: boolean;
  sp?: number;
  fTest: TestResult;
}

/** Unpaired t-test. Uses the pooled standard deviation unless the F-test shows unequal variances (then Welch). */
export function tTestTwoMeans(a: number[], b: number[], conf: number): TwoMeansResult {
  const f = fTest(a, b, conf);
  const na = a.length;
  const nb = b.length;
  const diff = Math.abs(mean(a) - mean(b));
  if (!f.significant) {
    const sp = Math.sqrt(((na - 1) * variance(a) + (nb - 1) * variance(b)) / (na + nb - 2));
    const t = (diff / sp) * Math.sqrt((na * nb) / (na + nb));
    const df = na + nb - 2;
    const crit = tCritical(conf, df);
    return { statistic: t, critical: crit, df, pValue: tPValue(t, df), significant: t > crit, pooled: true, sp, fTest: f };
  }
  const qa = variance(a) / na;
  const qb = variance(b) / nb;
  const t = diff / Math.sqrt(qa + qb);
  const df = (qa + qb) ** 2 / (qa ** 2 / (na - 1) + qb ** 2 / (nb - 1));
  const crit = tCritical(conf, df);
  return { statistic: t, critical: crit, df, pValue: tPValue(t, df), significant: t > crit, pooled: false, fTest: f };
}

/** Paired t-test on the differences a[i] − b[i]. */
export function tTestPaired(a: number[], b: number[], conf: number): TestResult & { meanDiff: number; sd: number } {
  const d = a.map((x, i) => x - b[i]);
  const n = d.length;
  const md = mean(d);
  const sd = stdev(d);
  const t = (Math.abs(md) * Math.sqrt(n)) / sd;
  const crit = tCritical(conf, n - 1);
  return { statistic: t, critical: crit, df: n - 1, pValue: tPValue(t, n - 1), significant: t > crit, meanDiff: md, sd };
}

/** Dixon Q10 critical values (Rorabacher 1991) for n = 3…10; keys are significance levels. */
export const DIXON_Q: Record<string, number[]> = {
  '0.1': [0.941, 0.765, 0.642, 0.56, 0.507, 0.468, 0.437, 0.412],
  '0.05': [0.97, 0.829, 0.71, 0.625, 0.568, 0.526, 0.493, 0.466],
  '0.01': [0.994, 0.926, 0.821, 0.74, 0.68, 0.634, 0.598, 0.568],
};

export interface OutlierResult extends TestResult {
  suspect: number;
}

/** Dixon's Q-test for the most extreme value; n must be 3…10. */
export function qTest(xs: number[], alpha: '0.1' | '0.05' | '0.01'): OutlierResult | undefined {
  const n = xs.length;
  if (n < 3 || n > 10) return undefined;
  const s = [...xs].sort((a, b) => a - b);
  const w = s[n - 1] - s[0];
  const qLow = (s[1] - s[0]) / w;
  const qHigh = (s[n - 1] - s[n - 2]) / w;
  const [q, suspect] = qHigh >= qLow ? [qHigh, s[n - 1]] : [qLow, s[0]];
  const crit = DIXON_Q[alpha][n - 3];
  return { statistic: q, critical: crit, suspect, significant: q > crit };
}

/** Two-sided critical value of Grubbs' test for a single outlier. */
export function grubbsCritical(n: number, alpha: number): number {
  const t = invert((x) => tCdf(x, n - 2), 1 - alpha / (2 * n), 0, 10);
  return ((n - 1) / Math.sqrt(n)) * Math.sqrt((t * t) / (n - 2 + t * t));
}

export function grubbsTest(xs: number[], alpha: number): OutlierResult | undefined {
  const n = xs.length;
  if (n < 3) return undefined;
  const m = mean(xs);
  const s = stdev(xs);
  const suspect = xs.reduce((a, b) => (Math.abs(b - m) > Math.abs(a - m) ? b : a));
  const G = Math.abs(suspect - m) / s;
  const crit = grubbsCritical(n, alpha);
  return { statistic: G, critical: crit, suspect, significant: G > crit };
}

// ---------- regression ----------

export interface Regression {
  n: number;
  slope: number;
  intercept: number;
  sr: number;
  sSlope: number;
  sIntercept: number;
  r: number;
  r2: number;
  xMean: number;
  yMean: number;
  sxx: number;
  weighted: boolean;
}

/**
 * Least-squares line y = b0 + b1·x. When `sy` (standard deviations of each y) is given a weighted
 * fit is used with weights wᵢ = n·sᵢ⁻² / Σsᵢ⁻² (Harvey, Analytical Chemistry 2.1, §5.4).
 */
export function linearRegression(x: number[], y: number[], sy?: number[]): Regression {
  const n = x.length;
  const weighted = !!sy && sy.length === n;
  const w = weighted ? normalizeWeights(sy!) : x.map(() => 1);
  const sw = sum(w);
  const xMean = sum(x.map((xi, i) => w[i] * xi)) / sw;
  const yMean = sum(y.map((yi, i) => w[i] * yi)) / sw;
  const sxx = sum(x.map((xi, i) => w[i] * (xi - xMean) ** 2));
  const sxy = sum(x.map((xi, i) => w[i] * (xi - xMean) * (y[i] - yMean)));
  const syy = sum(y.map((yi, i) => w[i] * (yi - yMean) ** 2));
  const slope = sxy / sxx;
  const intercept = yMean - slope * xMean;
  const ssr = sum(y.map((yi, i) => w[i] * (yi - (intercept + slope * x[i])) ** 2));
  const sr = Math.sqrt(ssr / (n - 2));
  const sxx2 = sum(x.map((xi, i) => w[i] * xi * xi));
  const sSlope = Math.sqrt((n * sr * sr) / (n * sxx2 - sum(x.map((xi, i) => w[i] * xi)) ** 2));
  const sIntercept = Math.sqrt((sr * sr * sxx2) / (n * sxx2 - sum(x.map((xi, i) => w[i] * xi)) ** 2));
  const r = sxy / Math.sqrt(sxx * syy);
  return { n, slope, intercept, sr, sSlope, sIntercept, r, r2: r * r, xMean, yMean, sxx, weighted };
}

function normalizeWeights(sy: number[]): number[] {
  const inv = sy.map((s) => 1 / (s * s));
  const t = sum(inv);
  return inv.map((v) => (sy.length * v) / t);
}

/** Concentration of an unknown from the mean of k replicate signals, with its standard deviation. */
export function inversePrediction(reg: Regression, ySample: number, k: number, conf = 0.95) {
  const x = (ySample - reg.intercept) / reg.slope;
  const sx = (reg.sr / Math.abs(reg.slope)) * Math.sqrt(1 / k + 1 / reg.n + (ySample - reg.yMean) ** 2 / (reg.slope ** 2 * reg.sxx));
  const t = tCritical(conf, reg.n - 2);
  return { x, sx, t, half: t * sx };
}

/** Multiple standard additions: unknown = −(x-intercept) of signal vs. added concentration. */
export function standardAdditionResult(reg: Regression, conf = 0.95) {
  const x = reg.intercept / reg.slope;
  const sx = (reg.sr / Math.abs(reg.slope)) * Math.sqrt(1 / reg.n + reg.yMean ** 2 / (reg.slope ** 2 * reg.sxx));
  const t = tCritical(conf, reg.n - 2);
  return { x, sx, t, half: t * sx };
}

// ---------- ANOVA ----------

export interface AnovaResult {
  ssBetween: number;
  ssWithin: number;
  dfBetween: number;
  dfWithin: number;
  msBetween: number;
  msWithin: number;
  F: number;
  critical: number;
  pValue: number;
  significant: boolean;
}

export function oneWayAnova(groups: number[][], conf: number): AnovaResult {
  const all = groups.flat();
  const grand = mean(all);
  const ssBetween = sum(groups.map((g) => g.length * (mean(g) - grand) ** 2));
  const ssWithin = sum(groups.map((g) => sum(g.map((x) => (x - mean(g)) ** 2))));
  const dfBetween = groups.length - 1;
  const dfWithin = all.length - groups.length;
  const msBetween = ssBetween / dfBetween;
  const msWithin = ssWithin / dfWithin;
  const F = msBetween / msWithin;
  const critical = fCritical(1 - conf, dfBetween, dfWithin);
  return {
    ssBetween,
    ssWithin,
    dfBetween,
    dfWithin,
    msBetween,
    msWithin,
    F,
    critical,
    pValue: 1 - fCdf(F, dfBetween, dfWithin),
    significant: F > critical,
  };
}

// ---------- propagation of uncertainty ----------

export type PropagationOp = 'add' | 'mul' | 'pow' | 'log10' | 'ln' | 'exp10' | 'exp';

/** Returns [result, absolute uncertainty] for the elementary propagation rules. */
export function propagate(
  op: PropagationOp,
  terms: { value: number; u: number; invert?: boolean }[],
  k = 1,
): [number, number] {
  const a = terms[0];
  switch (op) {
    case 'add': {
      // `invert` marks a subtracted term; uncertainties add in quadrature either way.
      return [sum(terms.map((t) => (t.invert ? -t.value : t.value))), Math.sqrt(sum(terms.map((t) => t.u ** 2)))];
    }
    case 'mul': {
      // `invert` marks a divisor; relative uncertainties add in quadrature.
      const r = terms.reduce((p, t) => (t.invert ? p / t.value : p * t.value), 1);
      return [r, Math.abs(r) * Math.sqrt(sum(terms.map((t) => (t.u / t.value) ** 2)))];
    }
    case 'pow': {
      const r = a.value ** k;
      return [r, Math.abs(r * k * (a.u / a.value))];
    }
    case 'log10':
      return [Math.log10(a.value), (0.4343 * a.u) / a.value];
    case 'ln':
      return [Math.log(a.value), a.u / a.value];
    case 'exp10': {
      const r = 10 ** a.value;
      return [r, r * 2.303 * a.u];
    }
    case 'exp': {
      const r = Math.exp(a.value);
      return [r, r * a.u];
    }
  }
}

/** Probability that a normally distributed value lies between x1 and x2. */
export function normalProbability(mu: number, sigma: number, x1: number, x2: number): number {
  return normCdf((x2 - mu) / sigma) - normCdf((x1 - mu) / sigma);
}

// Exact titration-curve engines. Every point is obtained from the full charge, mass or electron
// balance (no "before / at / after equivalence" approximations), so the same code is valid over
// the whole curve, including very dilute or weak systems.

import { alphaFractions } from './acidBase';
import { KW_25C } from './units';

const KW = KW_25C;

function bisect(f: (x: number) => number, lo: number, hi: number, iter = 200): number {
  let flo = f(lo);
  for (let i = 0; i < iter; i++) {
    const mid = (lo + hi) / 2;
    const fm = f(mid);
    if (fm === 0) return mid;
    if (Math.sign(fm) === Math.sign(flo)) {
      lo = mid;
      flo = fm;
    } else hi = mid;
  }
  return (lo + hi) / 2;
}

export interface CurvePoint {
  v: number; // titrant volume, L
  y: number; // pH, pM, pAg or E (V)
}

export interface Curve {
  points: CurvePoint[];
  equivalence: { v: number; y: number }[];
}

function volumes(vMax: number, n = 400, extra: number[] = []): number[] {
  const vs = Array.from({ length: n + 1 }, (_, i) => (vMax * i) / n);
  return [...vs, ...extra].sort((a, b) => a - b);
}

// ---------------- acid–base ----------------

export type AcidBaseKind = 'strongAcid' | 'strongBase' | 'weakAcid' | 'weakBase';

export interface AcidBaseParams {
  kind: AcidBaseKind;
  /** Analyte concentration (M) and volume (L). */
  ca: number;
  va: number;
  /** Titrant concentration (M): NaOH for acids, HCl for bases. */
  ct: number;
  /** pKa values of the acid, or of the conjugate acid(s) BH⁺ for a weak base (ascending). */
  pKas?: number[];
}

/** Mean number of protons removed from the fully protonated form, Σ i·αᵢ. */
function protonsRemoved(pKas: number[], pH: number): number {
  return alphaFractions(pKas, pH).reduce((s, a, i) => s + i * a, 0);
}

/** pH of the titration mixture after adding volume v (L) of titrant. */
export function acidBasePH(p: AcidBaseParams, v: number): number {
  const vt = p.va + v;
  const cA = (p.ca * p.va) / vt;
  const cT = (p.ct * v) / vt;
  const pKas = p.pKas ?? [];
  const n = pKas.length;
  const f = (pH: number) => {
    const h = 10 ** -pH;
    const water = h - KW / h;
    switch (p.kind) {
      case 'strongAcid':
        return water + cT - cA;
      case 'strongBase':
        return water + cA - cT;
      case 'weakAcid':
        return water + cT - cA * protonsRemoved(pKas, pH);
      case 'weakBase':
        return water - cT + cA * (n - protonsRemoved(pKas, pH));
    }
  };
  return bisect(f, -2, 16);
}

export function acidBaseEquivalenceVolumes(p: AcidBaseParams): number[] {
  const steps = p.kind === 'weakAcid' || p.kind === 'weakBase' ? (p.pKas?.length ?? 1) : 1;
  return Array.from({ length: steps }, (_, k) => ((k + 1) * p.ca * p.va) / p.ct);
}

export function acidBaseCurve(p: AcidBaseParams, overshoot = 1.5): Curve {
  const eqs = acidBaseEquivalenceVolumes(p);
  const vMax = eqs[eqs.length - 1] * overshoot;
  const points = volumes(vMax, 400, eqs).map((v) => ({ v, y: acidBasePH(p, v) }));
  return { points, equivalence: eqs.map((v) => ({ v, y: acidBasePH(p, v) })) };
}

// ---------------- complexometric (EDTA) ----------------

/** EDTA acid dissociation constants used by Christian 7e (Eq. 9.5–9.8). */
export const EDTA_KA = [1.0e-2, 2.2e-3, 6.9e-7, 5.5e-11];
export const EDTA_PKA = EDTA_KA.map((k) => -Math.log10(k));

/** Fraction of uncomplexed EDTA present as Y⁴⁻ at a given pH. */
export const alphaY4 = (pH: number) => alphaFractions(EDTA_PKA, pH)[4];

export interface EdtaParams {
  cm: number;
  vm: number;
  cy: number;
  /** Effective (conditional) formation constant α_M·α_Y⁴⁻·K_f. */
  kEff: number;
  /** Fraction of non-EDTA-bound metal present as free Mⁿ⁺ (auxiliary complexing agent), default 1. */
  alphaM?: number;
}

/** pM (free metal) after adding v (L) of EDTA. */
export function edtaPM(p: EdtaParams, v: number): number {
  const vt = p.vm + v;
  const cM = (p.cm * p.vm) / vt;
  const cY = (p.cy * v) / vt;
  const K = p.kEff / (p.alphaM ?? 1);
  // m = [M'] solves K·m² + (K·d + 1)·m − c_M = 0 with d = c_Y − c_M; pick the cancellation-free form.
  const B = K * (cY - cM) + 1;
  const disc = Math.sqrt(B * B + 4 * K * cM);
  const m = B > 0 ? (2 * cM) / (B + disc) : (-B + disc) / (2 * K);
  return -Math.log10((p.alphaM ?? 1) * m);
}

export function edtaCurve(p: EdtaParams, overshoot = 1.5): Curve {
  const veq = (p.cm * p.vm) / p.cy;
  const points = volumes(veq * overshoot, 400, [veq]).map((v) => ({ v, y: edtaPM(p, v) }));
  return { points, equivalence: [{ v: veq, y: edtaPM(p, veq) }] };
}

// ---------------- precipitation (Ag⁺ + X⁻ → AgX) ----------------

export interface PrecipitationParams {
  cx: number;
  vx: number;
  cAg: number;
  ksp: number;
}

/** pAg after adding v (L) of Ag⁺ titrant (1:1 precipitate, solid assumed present). */
export function precipitationPAg(p: PrecipitationParams, v: number): number {
  const vt = p.vx + v;
  const d = (p.cAg * v - p.cx * p.vx) / vt;
  const disc = Math.sqrt(d * d + 4 * p.ksp);
  const ag = d > 0 ? (d + disc) / 2 : (2 * p.ksp) / (-d + disc);
  return -Math.log10(ag);
}

export function precipitationCurve(p: PrecipitationParams, overshoot = 1.5): Curve {
  const veq = (p.cx * p.vx) / p.cAg;
  const points = volumes(veq * overshoot, 400, [veq]).map((v) => ({ v, y: precipitationPAg(p, v) }));
  return { points, equivalence: [{ v: veq, y: precipitationPAg(p, veq) }] };
}

// ---------------- redox ----------------

export interface RedoxParams {
  /** Analyte (reduced form) concentration, volume, electrons and standard/formal potential. */
  c1: number;
  v1: number;
  n1: number;
  e1: number;
  /** Titrant (oxidizing agent) concentration, electrons and potential. */
  c2: number;
  n2: number;
  e2: number;
  /** 2.303RT/F in volts (0.05916 at 25 °C). */
  slope?: number;
}

/** Potential (V vs. the reference of the E° values) after adding v (L) of titrant; v must be > 0. */
export function redoxPotential(p: RedoxParams, v: number): number {
  const S = p.slope ?? 0.05916;
  const oxidizedAnalyte = (E: number) => 1 / (1 + 10 ** ((p.n1 * (p.e1 - E)) / S));
  const reducedTitrant = (E: number) => 1 / (1 + 10 ** ((p.n2 * (E - p.e2)) / S));
  // Electrons lost by the analyte = electrons gained by the titrant.
  const g = (E: number) => p.n1 * p.c1 * p.v1 * oxidizedAnalyte(E) - p.n2 * p.c2 * v * reducedTitrant(E);
  return bisect(g, -4, 5);
}

export function redoxCurve(p: RedoxParams, overshoot = 1.5): Curve {
  const veq = (p.n1 * p.c1 * p.v1) / (p.n2 * p.c2);
  const points = volumes(veq * overshoot, 400, [veq])
    .filter((v) => v >= veq * 0.01)
    .map((v) => ({ v, y: redoxPotential(p, v) }));
  return { points, equivalence: [{ v: veq, y: redoxPotential(p, veq) }] };
}

// ---------------- end point from experimental data ----------------

export interface DerivativeResult {
  first: [number, number][];
  second: [number, number][];
  /** End point from the maximum |ΔpH/ΔV|. */
  vFirst: number;
  /** End point from the zero crossing of the second derivative (linear interpolation). */
  vSecond?: number;
}

export function derivativeEndPoint(v: number[], y: number[]): DerivativeResult | undefined {
  if (v.length < 4) return undefined;
  const order = v.map((_, i) => i).sort((a, b) => v[a] - v[b]);
  const vs = order.map((i) => v[i]);
  const ys = order.map((i) => y[i]);
  const first: [number, number][] = [];
  for (let i = 0; i < vs.length - 1; i++) {
    const dv = vs[i + 1] - vs[i];
    if (dv > 0) first.push([(vs[i] + vs[i + 1]) / 2, (ys[i + 1] - ys[i]) / dv]);
  }
  const second: [number, number][] = [];
  for (let i = 0; i < first.length - 1; i++) {
    const dv = first[i + 1][0] - first[i][0];
    if (dv > 0) second.push([(first[i][0] + first[i + 1][0]) / 2, (first[i + 1][1] - first[i][1]) / dv]);
  }
  const iMax = first.reduce((best, p, i) => (Math.abs(p[1]) > Math.abs(first[best][1]) ? i : best), 0);
  let vSecond: number | undefined;
  for (let i = 0; i < second.length - 1; i++) {
    const [x0, y0] = second[i];
    const [x1, y1] = second[i + 1];
    if (y0 !== 0 && Math.sign(y0) !== Math.sign(y1) && x0 <= first[iMax][0] + 1e-12 && x1 >= first[iMax][0] - 1e-12) {
      vSecond = x0 + (y0 * (x1 - x0)) / (y0 - y1);
      break;
    }
  }
  return { first, second, vFirst: first[iMax][0], vSecond };
}

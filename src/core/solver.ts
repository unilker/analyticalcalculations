import type { FormulaDef, Values, VariableDef } from './types';

export type SolveResult = { ok: true; value: number } | { ok: false; reason: 'missing' | 'noRoot' | 'invalid' };

const SCAN_POINTS = 600;
const BISECT_STEPS = 200;

function domain(v: VariableDef): { lo: number; hi: number; log: boolean } {
  const log = (v.scale ?? 'log') === 'log';
  if (log) return { lo: v.min ?? 1e-40, hi: v.max ?? 1e40, log };
  return { lo: v.min ?? -1e6, hi: v.max ?? 1e6, log };
}

/**
 * Finds the value of `unknown` that makes `def.equation` zero.
 * Uses the closed-form solution when the formula provides one; otherwise scans the variable's
 * domain for a sign change and refines it by bisection (in log space for positive quantities).
 */
export function solveFormula(def: FormulaDef, unknown: string, known: Values): SolveResult {
  for (const v of def.variables) {
    if (v.key !== unknown && !Number.isFinite(known[v.key])) return { ok: false, reason: 'missing' };
  }
  const variable = def.variables.find((v) => v.key === unknown);
  if (!variable) return { ok: false, reason: 'invalid' };

  const closed = def.solve?.[unknown];
  if (closed) {
    const value = closed(known);
    // Closed forms can return physically impossible values (e.g. a negative concentration for an
    // impossible pH); reject anything outside the variable's domain, as the numeric path does.
    const d = domain(variable);
    const inDomain = Number.isFinite(value) && (d.log ? value > 0 : true) && value >= d.lo && value <= d.hi;
    return inDomain ? { ok: true, value } : { ok: false, reason: 'noRoot' };
  }

  const f = (x: number) => def.equation({ ...known, [unknown]: x });
  const root = findRoot(f, domain(variable));
  return root === undefined ? { ok: false, reason: 'noRoot' } : { ok: true, value: root };
}

export function findRoot(
  f: (x: number) => number,
  { lo, hi, log }: { lo: number; hi: number; log: boolean },
): number | undefined {
  const map = (t: number) => (log ? Math.exp(t) : t);
  const tLo = log ? Math.log(lo) : lo;
  const tHi = log ? Math.log(hi) : hi;
  const step = (tHi - tLo) / SCAN_POINTS;

  let prevT = tLo;
  let prevF = f(map(prevT));
  for (let i = 1; i <= SCAN_POINTS; i++) {
    const t = tLo + i * step;
    const ft = f(map(t));
    if (Number.isFinite(prevF) && prevF === 0) return map(prevT);
    if (Number.isFinite(prevF) && Number.isFinite(ft) && Math.sign(prevF) !== Math.sign(ft)) {
      const r = bisect(f, map, prevT, t, prevF);
      // Reject sign changes caused by poles: there |f| grows beyond both ends instead of vanishing.
      if (r !== undefined && Math.abs(f(r)) <= Math.max(Math.abs(prevF), Math.abs(ft))) return r;
    }
    prevT = t;
    prevF = ft;
  }
  if (Number.isFinite(prevF) && prevF === 0) return map(prevT);
  return undefined;
}

function bisect(
  f: (x: number) => number,
  map: (t: number) => number,
  a: number,
  b: number,
  fa: number,
): number | undefined {
  let lo = a;
  let hi = b;
  let flo = fa;
  for (let i = 0; i < BISECT_STEPS; i++) {
    const mid = (lo + hi) / 2;
    const fm = f(map(mid));
    if (!Number.isFinite(fm)) return undefined;
    if (fm === 0) return map(mid);
    if (Math.sign(fm) === Math.sign(flo)) {
      lo = mid;
      flo = fm;
    } else {
      hi = mid;
    }
    if (Math.abs(hi - lo) <= 1e-15 * Math.abs(mid)) break;
  }
  return map((lo + hi) / 2);
}

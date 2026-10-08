import { ELEMENT_BY_SYMBOL } from '../data/tables/elements';

export interface Composition {
  symbol: string;
  count: number;
  mass: number;
  percent: number;
}

export type MolarMassResult = { ok: true; molarMass: number; composition: Composition[] } | { ok: false; error: string };

/**
 * Parses formulas such as "CuSO4·5H2O", "K4[Fe(CN)6]", "Ca3(PO4)2" or "(NH4)2SO4".
 * Hydrate separators "·", "*", "•" and "." are accepted, with an optional leading coefficient.
 * When "·", "*" or "•" is used the coefficient may be decimal ("CaSO4·0.5H2O", "CaSO4·0,5H2O");
 * with "." as the separator it must be a whole number ("CuSO4.5H2O"), since "0.5" would be ambiguous.
 */
export function molarMass(formula: string): MolarMassResult {
  const clean = formula.replace(/\s+/g, '');
  if (!clean) return { ok: false, error: 'empty' };
  const counts: Record<string, number> = {};
  try {
    const explicit = /[·*•]/.test(clean);
    for (const part of clean.split(explicit ? /[·*•]/ : /\./)) {
      if (!part) throw new Error('syntax');
      const m = (explicit ? /^(\d+(?:[.,]\d+)?)(.*)$/ : /^(\d+)(.*)$/).exec(part);
      const coef = m ? parseFloat(m[1].replace(',', '.')) : 1;
      const body = m ? m[2] : part;
      if (!body || !(coef > 0)) throw new Error('syntax');
      const [parsed, pos] = parseGroup(body, 0);
      if (pos !== body.length) throw new Error('syntax');
      for (const [el, n] of Object.entries(parsed)) counts[el] = (counts[el] ?? 0) + n * coef;
    }
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }

  let total = 0;
  for (const [el, n] of Object.entries(counts)) total += ELEMENT_BY_SYMBOL[el].mass * n;
  const composition = Object.entries(counts).map(([symbol, count]) => {
    const mass = ELEMENT_BY_SYMBOL[symbol].mass * count;
    return { symbol, count, mass, percent: (100 * mass) / total };
  });
  return { ok: true, molarMass: total, composition };
}

const CLOSE: Record<string, string> = { '(': ')', '[': ']', '{': '}' };

function parseGroup(s: string, i: number, close?: string): [Record<string, number>, number] {
  const out: Record<string, number> = {};
  const add = (el: string, n: number) => (out[el] = (out[el] ?? 0) + n);
  while (i < s.length) {
    const ch = s[i];
    if (close && ch === close) return [out, i + 1];
    if (CLOSE[ch]) {
      const [inner, next] = parseGroup(s, i + 1, CLOSE[ch]);
      const [mult, after] = readNumber(s, next);
      for (const [el, n] of Object.entries(inner)) add(el, n * mult);
      i = after;
      continue;
    }
    const m = /^[A-Z][a-z]?/.exec(s.slice(i));
    if (!m) throw new Error('syntax');
    let sym = m[0];
    if (!ELEMENT_BY_SYMBOL[sym] && sym.length === 2 && ELEMENT_BY_SYMBOL[sym[0]]) sym = sym[0];
    if (!ELEMENT_BY_SYMBOL[sym]) throw new Error(`unknown:${m[0]}`);
    const [n, after] = readNumber(s, i + sym.length);
    add(sym, n);
    i = after;
  }
  if (close) throw new Error('syntax');
  return [out, i];
}

function readNumber(s: string, i: number): [number, number] {
  const m = /^\d+/.exec(s.slice(i));
  return m ? [parseInt(m[0], 10), i + m[0].length] : [1, i];
}

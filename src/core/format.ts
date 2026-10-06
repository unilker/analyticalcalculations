import type { Lang } from './types';

const SUP: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };

/**
 * Formats a number with `sig` significant figures. Very large/small magnitudes use
 * "1,23 × 10⁻⁵" notation. Turkish uses a decimal comma.
 */
export function formatNumber(x: number, lang: Lang, sig = 4): string {
  if (!Number.isFinite(x)) return '—';
  if (x === 0) return '0';
  const abs = Math.abs(x);
  let out: string;
  if (abs >= 1e6 || abs < 1e-3) {
    const [mant, exp] = x.toExponential(sig - 1).split('e');
    const e = String(parseInt(exp, 10)).replace(/[-0-9]/g, (c) => SUP[c]);
    out = `${trimZeros(mant)} × 10${e}`;
  } else {
    out = trimZeros(x.toPrecision(sig));
    if (out.includes('e')) out = String(Number(out));
  }
  return lang === 'tr' ? out.replace('.', ',') : out;
}

function trimZeros(s: string): string {
  return s.includes('.') ? s.replace(/\.?0+$/, '') : s;
}

/**
 * Parses user input. Accepts decimal comma or point, "e" notation and "×10^" notation,
 * e.g. "1,8e-5", "1.8E-5", "1,8×10^-5", "1.8x10-5".
 */
export function parseNumber(raw: string): number {
  let s = raw.trim().replace(/\s+/g, '').replace(/−/g, '-');
  if (!s) return NaN;
  s = s.replace(/[×xX*]10\^?/, 'e');
  // A comma is a decimal separator unless a point is also present (then it is a thousands separator).
  s = s.includes('.') ? s.replace(/,/g, '') : s.replace(',', '.');
  if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s)) return NaN;
  return Number(s);
}

/** Parses a free-form list of numbers separated by spaces, new lines, semicolons or tabs. */
export function parseList(raw: string): number[] {
  return raw
    .split(/[\s;\t]+/)
    .map((t) => t.trim().replace(/,$/, ''))
    .filter(Boolean)
    .map(parseNumber)
    .filter((n) => Number.isFinite(n));
}

/** Parses rows of 2 or 3 columns (x y [s]) separated by spaces, tabs or semicolons. */
export function parseTable(raw: string): number[][] {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) =>
      line
        .split(/[\s;\t]+/)
        .map(parseNumber)
        .filter((n) => Number.isFinite(n)),
    )
    .filter((row) => row.length >= 2);
}

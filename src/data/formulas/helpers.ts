import type { DimensionId, FormulaDef, L, VariableDef } from '../../core/types';

export const l = (tr: string, en: string): L => ({ tr, en });

export function v(
  key: string,
  symbol: string,
  tr: string,
  en: string,
  dim: DimensionId,
  opts: Partial<Omit<VariableDef, 'key' | 'symbol' | 'name' | 'dim'>> = {},
): VariableDef {
  return { key, symbol, name: { tr, en }, dim, ...opts };
}

/** Unitless value that may be negative or span a limited range (pH, pKa, …). */
export const linear = (min: number, max: number) => ({ scale: 'linear' as const, min, max });

export const formula = (def: Omit<FormulaDef, 'kind'>): FormulaDef => ({ kind: 'formula', ...def });

export const log10 = Math.log10;
export const pow10 = (x: number) => 10 ** x;

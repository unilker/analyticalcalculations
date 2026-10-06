/**
 * Fractions α₀…αₙ of a polyprotic acid HₙA at a given pH:
 * αᵢ = (Ka₁…Kaᵢ·[H⁺]ⁿ⁻ⁱ) / Σⱼ (Ka₁…Kaⱼ·[H⁺]ⁿ⁻ʲ)   (Christian 7e, Eq. 7.78–7.84)
 * α₀ is the fully protonated form.
 */
export function alphaFractions(pKas: number[], pH: number): number[] {
  const h = 10 ** -pH;
  const n = pKas.length;
  const terms: number[] = [];
  let kProd = 1;
  for (let i = 0; i <= n; i++) {
    if (i > 0) kProd *= 10 ** -pKas[i - 1];
    terms.push(kProd * h ** (n - i));
  }
  const total = terms.reduce((a, b) => a + b, 0);
  return terms.map((t) => t / total);
}

/** Species labels H₃A, H₂A⁻, HA²⁻, A³⁻ … for n acidic protons. */
export function speciesLabels(n: number): string[] {
  const sub = (k: number) => (k === 0 ? '' : k === 1 ? 'H' : `H${toSub(k)}`);
  const charge = (c: number) => (c === 0 ? '' : c === 1 ? '⁻' : `${toSup(c)}⁻`);
  return Array.from({ length: n + 1 }, (_, i) => `${sub(n - i)}A${charge(i)}`);
}

const SUB = '₀₁₂₃₄₅₆₇₈₉';
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
export const toSub = (k: number) => String(k).replace(/\d/g, (d) => SUB[+d]);
export const toSup = (k: number) => String(k).replace(/\d/g, (d) => SUP[+d]);

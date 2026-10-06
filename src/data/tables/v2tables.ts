import type { L } from '../../core/types';

// Christian, Dasgupta & Schug, Analytical Chemistry 7e, Appendix C, Tables C.4 and C.5.

export interface EdtaKfEntry {
  name: L;
  ion: string;
  kf: number;
}

const k = (tr: string, en: string, ion: string, kf: number): EdtaKfEntry => ({ name: { tr, en }, ion, kf });

export const EDTA_KF: EdtaKfEntry[] = [
  k('Alüminyum', 'Aluminum', 'Al³⁺', 1.35e16),
  k('Baryum', 'Barium', 'Ba²⁺', 5.75e7),
  k('Bizmut', 'Bismuth', 'Bi³⁺', 1e23),
  k('Kadmiyum', 'Cadmium', 'Cd²⁺', 2.88e16),
  k('Kalsiyum', 'Calcium', 'Ca²⁺', 5.01e10),
  k('Kobalt(II)', 'Cobalt(II)', 'Co²⁺', 2.04e16),
  k('Kobalt(III)', 'Cobalt(III)', 'Co³⁺', 1e36),
  k('Bakır(II)', 'Copper(II)', 'Cu²⁺', 6.3e18),
  k('Galyum', 'Gallium', 'Ga³⁺', 1.86e20),
  k('İndiyum', 'Indium', 'In³⁺', 8.91e24),
  k('Demir(II)', 'Iron(II)', 'Fe²⁺', 2.14e14),
  k('Demir(III)', 'Iron(III)', 'Fe³⁺', 1.3e25),
  k('Kurşun', 'Lead', 'Pb²⁺', 1.1e18),
  k('Magnezyum', 'Magnesium', 'Mg²⁺', 4.9e8),
  k('Mangan(II)', 'Manganese(II)', 'Mn²⁺', 1.1e14),
  k('Cıva(II)', 'Mercury(II)', 'Hg²⁺', 6.3e21),
  k('Nikel', 'Nickel', 'Ni²⁺', 4.16e18),
  k('Skandiyum', 'Scandium', 'Sc³⁺', 1.3e23),
  k('Gümüş', 'Silver', 'Ag⁺', 2.09e7),
  k('Stronsiyum', 'Strontium', 'Sr²⁺', 4.26e8),
  k('Toryum', 'Thorium', 'Th⁴⁺', 1.6e23),
  k('Titanyum(III)', 'Titanium(III)', 'Ti³⁺', 2.0e21),
  k('Vanadyum(II)', 'Vanadium(II)', 'V²⁺', 5.01e12),
  k('Vanadyum(III)', 'Vanadium(III)', 'V³⁺', 8.0e25),
  k('İtriyum', 'Yttrium', 'Y³⁺', 1.23e18),
  k('Çinko', 'Zinc', 'Zn²⁺', 3.16e16),
];

export interface PotentialEntry {
  reaction: string;
  e0?: number;
  /** Formal potentials with the medium they apply to. */
  formal?: { e: number; medium: string }[];
}

const p = (reaction: string, e0?: number, formal?: [number, string][]): PotentialEntry => ({
  reaction,
  e0,
  formal: formal?.map(([e, medium]) => ({ e, medium })),
});

export const POTENTIALS: PotentialEntry[] = [
  p('F₂ + 2H⁺ + 2e⁻ ⇌ 2HF', 3.06),
  p('O₃ + 2H⁺ + 2e⁻ ⇌ O₂ + H₂O', 2.07),
  p('S₂O₈²⁻ + 2e⁻ ⇌ 2SO₄²⁻', 2.01),
  p('Co³⁺ + e⁻ ⇌ Co²⁺', 1.842),
  p('H₂O₂ + 2H⁺ + 2e⁻ ⇌ 2H₂O', 1.77),
  p('MnO₄⁻ + 4H⁺ + 3e⁻ ⇌ MnO₂ + 2H₂O', 1.695),
  p('Ce⁴⁺ + e⁻ ⇌ Ce³⁺', undefined, [
    [1.7, '1 M HClO₄'],
    [1.61, '1 M HNO₃'],
    [1.44, '1 M H₂SO₄'],
  ]),
  p('HClO + H⁺ + e⁻ ⇌ ½Cl₂ + H₂O', 1.63),
  p('H₅IO₆ + H⁺ + 2e⁻ ⇌ IO₃⁻ + 3H₂O', 1.6),
  p('BrO₃⁻ + 6H⁺ + 5e⁻ ⇌ ½Br₂ + 3H₂O', 1.52),
  p('MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O', 1.51),
  p('Mn³⁺ + e⁻ ⇌ Mn²⁺', undefined, [[1.51, '8 M H₂SO₄']]),
  p('ClO₃⁻ + 6H⁺ + 5e⁻ ⇌ ½Cl₂ + 3H₂O', 1.47),
  p('PbO₂ + 4H⁺ + 2e⁻ ⇌ Pb²⁺ + 2H₂O', 1.455),
  p('Cl₂ + 2e⁻ ⇌ 2Cl⁻', 1.359),
  p('Cr₂O₇²⁻ + 14H⁺ + 6e⁻ ⇌ 2Cr³⁺ + 7H₂O', 1.33),
  p('Tl³⁺ + 2e⁻ ⇌ Tl⁺', 1.25, [[0.77, '1 M HCl']]),
  p('MnO₂ + 4H⁺ + 2e⁻ ⇌ Mn²⁺ + 2H₂O', 1.23),
  p('O₂ + 4H⁺ + 4e⁻ ⇌ 2H₂O', 1.229),
  p('2IO₃⁻ + 12H⁺ + 10e⁻ ⇌ I₂ + 6H₂O', 1.2),
  p('Br₂(aq) + 2e⁻ ⇌ 2Br⁻', 1.087),
  p('Br₂(s) + 2e⁻ ⇌ 2Br⁻', 1.065),
  p('VO₂⁺ + 2H⁺ + e⁻ ⇌ VO²⁺ + H₂O', 1.0),
  p('HNO₂ + H⁺ + e⁻ ⇌ NO + H₂O', 1.0),
  p('NO₃⁻ + 3H⁺ + 2e⁻ ⇌ HNO₂ + H₂O', 0.94),
  p('2Hg²⁺ + 2e⁻ ⇌ Hg₂²⁺', 0.92),
  p('Cu²⁺ + I⁻ + e⁻ ⇌ CuI', 0.86),
  p('Hg²⁺ + 2e⁻ ⇌ Hg', 0.854),
  p('Ag⁺ + e⁻ ⇌ Ag', 0.799, [
    [0.228, '1 M HCl'],
    [0.792, '1 M HClO₄'],
  ]),
  p('Hg₂²⁺ + 2e⁻ ⇌ 2Hg', 0.789, [[0.274, '1 M HCl']]),
  p('Fe³⁺ + e⁻ ⇌ Fe²⁺', 0.771),
  p('O₂ + 2H⁺ + 2e⁻ ⇌ H₂O₂', 0.682),
  p('I₂(aq) + 2e⁻ ⇌ 2I⁻', 0.6197),
  p('H₃AsO₄ + 2H⁺ + 2e⁻ ⇌ H₃AsO₃ + H₂O', 0.559, [[0.577, '1 M HCl, HClO₄']]),
  p('I₃⁻ + 2e⁻ ⇌ 3I⁻', 0.5355),
  p('I₂(s) + 2e⁻ ⇌ 2I⁻', 0.5345),
  p('Cu⁺ + e⁻ ⇌ Cu', 0.521),
  p('Fe(CN)₆³⁻ + e⁻ ⇌ Fe(CN)₆⁴⁻', 0.36, [[0.72, '1 M HClO₄, H₂SO₄']]),
  p('Cu²⁺ + 2e⁻ ⇌ Cu', 0.337),
  p('Hg₂Cl₂(s) + 2e⁻ ⇌ 2Hg + 2Cl⁻', 0.268, [
    [0.242, 'doygun KCl / sat’d KCl (SCE)'],
    [0.282, '1 M KCl'],
  ]),
  p('AgCl + e⁻ ⇌ Ag + Cl⁻', 0.222, [[0.228, '1 M KCl']]),
  p('Sn⁴⁺ + 2e⁻ ⇌ Sn²⁺', 0.154, [[0.14, '1 M HCl']]),
  p('Cu²⁺ + e⁻ ⇌ Cu⁺', 0.153),
  p('S₄O₆²⁻ + 2e⁻ ⇌ 2S₂O₃²⁻', 0.08),
  p('AgBr + e⁻ ⇌ Ag + Br⁻', 0.071),
  p('2H⁺ + 2e⁻ ⇌ H₂', 0.0),
  p('Pb²⁺ + 2e⁻ ⇌ Pb', -0.126),
  p('Sn²⁺ + 2e⁻ ⇌ Sn', -0.136),
  p('AgI + e⁻ ⇌ Ag + I⁻', -0.151),
  p('Ni²⁺ + 2e⁻ ⇌ Ni', -0.25),
  p('V³⁺ + e⁻ ⇌ V²⁺', -0.255),
  p('Co²⁺ + 2e⁻ ⇌ Co', -0.277),
  p('PbSO₄ + 2e⁻ ⇌ Pb + SO₄²⁻', -0.356),
  p('Cd²⁺ + 2e⁻ ⇌ Cd', -0.403),
  p('Cr³⁺ + e⁻ ⇌ Cr²⁺', -0.41),
  p('Fe²⁺ + 2e⁻ ⇌ Fe', -0.44),
  p('Cr³⁺ + 3e⁻ ⇌ Cr', -0.74),
  p('Zn²⁺ + 2e⁻ ⇌ Zn', -0.763),
  p('2H₂O + 2e⁻ ⇌ H₂ + 2OH⁻', -0.828),
  p('Mn²⁺ + 2e⁻ ⇌ Mn', -1.18),
  p('Al³⁺ + 3e⁻ ⇌ Al', -1.66),
  p('Mg²⁺ + 2e⁻ ⇌ Mg', -2.37),
  p('Na⁺ + e⁻ ⇌ Na', -2.714),
  p('Ca²⁺ + 2e⁻ ⇌ Ca', -2.87),
  p('K⁺ + e⁻ ⇌ K', -2.925),
  p('Li⁺ + e⁻ ⇌ Li', -3.045),
];

export interface IndicatorEntry {
  name: L;
  /** Transition range: pH for acid–base indicators, volts (vs. SHE) for redox indicators. */
  low: number;
  high: number;
  colors: L;
}

const ind = (tr: string, en: string, low: number, high: number, ctr: string, cen: string): IndicatorEntry => ({
  name: { tr, en },
  low,
  high,
  colors: { tr: ctr, en: cen },
});

/** Acid–base indicators: Harvey, Analytical Chemistry 2.1, Table 9.2.3. */
export const ACID_BASE_INDICATORS: IndicatorEntry[] = [
  ind('Timol mavisi (asidik)', 'Thymol blue (acid range)', 1.2, 2.8, 'kırmızı → sarı', 'red → yellow'),
  ind('Metil oranj', 'Methyl orange', 3.4, 4.4, 'kırmızı → sarı', 'red → yellow'),
  ind('Bromkrezol yeşili', 'Bromocresol green', 3.8, 5.4, 'sarı → mavi', 'yellow → blue'),
  ind('Metil kırmızısı', 'Methyl red', 4.2, 6.3, 'kırmızı → sarı', 'red → yellow'),
  ind('Bromkrezol moru', 'Bromocresol purple', 5.2, 6.8, 'sarı → mor', 'yellow → purple'),
  ind('Bromtimol mavisi', 'Bromothymol blue', 6.0, 7.6, 'sarı → mavi', 'yellow → blue'),
  ind('Fenol kırmızısı', 'Phenol red', 6.8, 8.4, 'sarı → kırmızı', 'yellow → red'),
  ind('Krezol kırmızısı (bazik)', 'Cresol red (base range)', 7.2, 8.8, 'sarı → kırmızı', 'yellow → red'),
  ind('Timol mavisi (bazik)', 'Thymol blue (base range)', 8.0, 9.6, 'sarı → mavi', 'yellow → blue'),
  ind('Fenolftalein', 'Phenolphthalein', 8.3, 10.0, 'renksiz → kırmızı-mor', 'colorless → red-violet'),
  ind('Alizarin sarısı R', 'Alizarin yellow R', 10.1, 12.0, 'sarı → turuncu-kırmızı', 'yellow → orange-red'),
];

const redox = (tr: string, en: string, e0: number, n: number, ctr: string, cen: string) =>
  ind(tr, en, e0 - 0.05916 / n, e0 + 0.05916 / n, ctr, cen);

/** Redox indicators (Christian Table 14.1); transition range E°_In ± 0.05916/n, V vs. SHE. */
export const REDOX_INDICATORS: IndicatorEntry[] = [
  redox('İndigo tetrasülfonat', 'Indigo tetrasulfonate', 0.36, 2, 'renksiz → mavi', 'colorless → blue'),
  redox('Metilen mavisi', 'Methylene blue', 0.53, 2, 'mavi ↔ renksiz', 'blue ↔ colorless'),
  redox('Difenilamin', 'Diphenylamine', 0.76, 2, 'renksiz → mor', 'colorless → violet'),
  redox('Difenilamin sülfonik asit', 'Diphenylaminesulfonic acid', 0.84, 2, 'renksiz → mor', 'colorless → purple'),
  redox('Ferroin', 'Ferroin', 1.06, 1, 'kırmızı → soluk mavi', 'red → pale blue'),
  redox('Nitroferroin', 'Nitroferroin', 1.25, 1, 'kırmızı → soluk mavi', 'red → pale blue'),
];

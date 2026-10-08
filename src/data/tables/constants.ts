import type { L } from '../../core/types';

// Equilibrium constants at 25 °C from Christian, Dasgupta & Schug, Analytical Chemistry 7e,
// Appendix C (Tables C.1, C.2b, C.3, C.4). Values that differ markedly from critically evaluated
// data were replaced: HOCl (pKa 7.53, Morris 1966), maleic acid (pKa 1.92, 6.23, CRC),
// H₂SO₃ Ka₂ (pKa 7.17, CRC), H₂S Ka₂ (pKa ≈ 19, May et al. 2018) and Ag₃PO₄ (pKsp 17.55,
// Smith & Martell; Harvey App. 10).

export interface AcidEntry {
  name: L;
  formula: string;
  ka: number[];
}

const a = (tr: string, en: string, formula: string, ...ka: number[]): AcidEntry => ({ name: { tr, en }, formula, ka });

export const ACIDS: AcidEntry[] = [
  a('Asetik asit', 'Acetic acid', 'CH₃COOH', 1.75e-5),
  a('Alanin', 'Alanine', 'CH₃CH(NH₂)COOH', 4.5e-3, 1.3e-10),
  a('Arsenik asit', 'Arsenic acid', 'H₃AsO₄', 6.0e-3, 1.0e-7, 3.0e-12),
  a('Arsenöz asit', 'Arsenious acid', 'H₃AsO₃', 6.0e-10, 3.0e-14),
  a('Benzoik asit', 'Benzoic acid', 'C₆H₅COOH', 6.3e-5),
  a('Borik asit', 'Boric acid', 'H₃BO₃', 6.4e-10),
  a('Karbonik asit', 'Carbonic acid', 'H₂CO₃', 4.3e-7, 4.8e-11),
  a('Kloroasetik asit', 'Chloroacetic acid', 'ClCH₂COOH', 1.51e-3),
  a('Sitrik asit', 'Citric acid', 'C₃H₄(OH)(COOH)₃', 7.4e-4, 1.7e-5, 4.0e-7),
  a('EDTA', 'EDTA', 'H₄Y', 1.0e-2, 2.2e-3, 6.9e-7, 5.5e-11),
  a('Formik asit', 'Formic acid', 'HCOOH', 1.76e-4),
  a('Glisin', 'Glycine', 'H₂NCH₂COOH', 4.5e-3, 1.7e-10),
  a('Hidrosiyanik asit', 'Hydrocyanic acid', 'HCN', 7.2e-10),
  a('Hidroflorik asit', 'Hydrofluoric acid', 'HF', 6.7e-4),
  a('Hidrojen sülfür', 'Hydrogen sulfide', 'H₂S', 9.1e-8, 1e-19),
  a('Hipokloröz asit', 'Hypochlorous acid', 'HOCl', 3.0e-8),
  a('İyodik asit', 'Iodic acid', 'HIO₃', 2e-1),
  a('Laktik asit', 'Lactic acid', 'CH₃CHOHCOOH', 1.4e-4),
  a('Maleik asit', 'Maleic acid', 'cis-HOOCCH=CHCOOH', 1.2e-2, 5.9e-7),
  a('Malik asit', 'Malic acid', 'HOOCCHOHCH₂COOH', 4.0e-4, 8.9e-6),
  a('Nitröz asit', 'Nitrous acid', 'HNO₂', 5.1e-4),
  a('Oksalik asit', 'Oxalic acid', 'HOOCCOOH', 6.5e-2, 6.1e-5),
  a('Fenol', 'Phenol', 'C₆H₅OH', 1.1e-10),
  a('Fosforik asit', 'Phosphoric acid', 'H₃PO₄', 1.1e-2, 7.5e-8, 4.8e-13),
  a('Fosforöz asit', 'Phosphorous acid', 'H₃PO₃', 5e-2, 2.6e-7),
  a('o-Ftalik asit', 'o-Phthalic acid', 'C₆H₄(COOH)₂', 1.12e-3, 3.9e-6),
  a('Pikrik asit', 'Picric acid', '(NO₂)₃C₆H₂OH', 4.2e-1),
  a('Propanoik asit', 'Propanoic acid', 'CH₃CH₂COOH', 1.3e-5),
  a('Salisilik asit', 'Salicylic acid', 'C₆H₄(OH)COOH', 1.07e-3, 1.82e-14),
  a('Sülfamik asit', 'Sulfamic acid', 'NH₂SO₃H', 1.0e-1),
  a('Sülfürik asit (2. proton)', 'Sulfuric acid (2nd proton)', 'HSO₄⁻', 1.2e-2),
  a('Sülfüröz asit', 'Sulfurous acid', 'H₂SO₃', 1.4e-2, 6.7e-8),
  a('Trikloroasetik asit', 'Trichloroacetic acid', 'Cl₃CCOOH', 1.29e-1),
  // Conjugate acids of bases (Table C.2b)
  a('Amonyum', 'Ammonium', 'NH₄⁺', 5.71e-10),
  a('Anilinyum', 'Anilinium', 'C₆H₅NH₃⁺', 2.5e-5),
  a('Dietilamonyum', 'Diethylammonium', '(CH₃CH₂)₂NH₂⁺', 1.18e-11),
  a('Dimetilamonyum', 'Dimethylammonium', '(CH₃)₂NH₂⁺', 1.69e-11),
  a('Etanolamonyum', 'Ethanolammonium', 'HOC₂H₄NH₃⁺', 3.1e-10),
  a('Etilamonyum', 'Ethylammonium', 'CH₃CH₂NH₃⁺', 2.33e-11),
  a('Etilendiamonyum', 'Ethylenediammonium', '⁺H₃NC₂H₄NH₃⁺', 1.41e-7, 1.18e-10),
  a('Hidroksilamonyum', 'Hydroxylammonium', 'HONH₃⁺', 1.1e-6),
  a('Metilamonyum', 'Methylammonium', 'CH₃NH₃⁺', 2.08e-11),
  a('Piperidinyum', 'Piperidinium', 'C₅H₁₁NH⁺', 7.7e-12),
  a('Piridinyum', 'Pyridinium', 'C₅H₅NH⁺', 5.9e-6),
  a('Trietilamonyum', 'Triethylammonium', '(CH₃CH₂)₃NH⁺', 1.89e-11),
  a('Trimetilamonyum', 'Trimethylammonium', '(CH₃)₃NH⁺', 1.59e-10),
  a('TRIS-H⁺', 'TRIS-H⁺', '(HOCH₂)₃CNH₃⁺', 8.3e-9),
];

export interface KspEntry {
  name: L;
  formula: string;
  ksp: number;
  /** Stoichiometry MₓAᵧ (cation count x, anion count y) for solubility calculations. */
  x: number;
  y: number;
}

const s = (tr: string, en: string, formula: string, ksp: number, x: number, y: number): KspEntry => ({
  name: { tr, en },
  formula,
  ksp,
  x,
  y,
});

export const KSP: KspEntry[] = [
  s('Alüminyum hidroksit', 'Aluminum hydroxide', 'Al(OH)₃', 2e-32, 1, 3),
  s('Baryum karbonat', 'Barium carbonate', 'BaCO₃', 8.1e-9, 1, 1),
  s('Baryum kromat', 'Barium chromate', 'BaCrO₄', 2.4e-10, 1, 1),
  s('Baryum florür', 'Barium fluoride', 'BaF₂', 1.7e-6, 1, 2),
  s('Baryum iyodat', 'Barium iodate', 'Ba(IO₃)₂', 1.5e-9, 1, 2),
  s('Baryum okzalat', 'Barium oxalate', 'BaC₂O₄', 2.3e-8, 1, 1),
  s('Baryum sülfat', 'Barium sulfate', 'BaSO₄', 1.0e-10, 1, 1),
  s('Kadmiyum karbonat', 'Cadmium carbonate', 'CdCO₃', 2.5e-14, 1, 1),
  s('Kadmiyum sülfür', 'Cadmium sulfide', 'CdS', 1e-28, 1, 1),
  s('Kalsiyum karbonat', 'Calcium carbonate', 'CaCO₃', 8.7e-9, 1, 1),
  s('Kalsiyum florür', 'Calcium fluoride', 'CaF₂', 4.0e-11, 1, 2),
  s('Kalsiyum hidroksit', 'Calcium hydroxide', 'Ca(OH)₂', 5.5e-6, 1, 2),
  s('Kalsiyum okzalat', 'Calcium oxalate', 'CaC₂O₄', 2.6e-9, 1, 1),
  s('Kalsiyum sülfat', 'Calcium sulfate', 'CaSO₄', 1.9e-4, 1, 1),
  s('Bakır(I) bromür', 'Copper(I) bromide', 'CuBr', 5.2e-9, 1, 1),
  s('Bakır(I) klorür', 'Copper(I) chloride', 'CuCl', 1.2e-6, 1, 1),
  s('Bakır(I) iyodür', 'Copper(I) iodide', 'CuI', 5.1e-12, 1, 1),
  s('Bakır(II) hidroksit', 'Copper(II) hydroxide', 'Cu(OH)₂', 1.6e-19, 1, 2),
  s('Bakır(II) sülfür', 'Copper(II) sulfide', 'CuS', 9e-36, 1, 1),
  s('Demir(II) hidroksit', 'Iron(II) hydroxide', 'Fe(OH)₂', 8e-16, 1, 2),
  s('Demir(III) hidroksit', 'Iron(III) hydroxide', 'Fe(OH)₃', 4e-38, 1, 3),
  s('Kurşun klorür', 'Lead chloride', 'PbCl₂', 1.6e-5, 1, 2),
  s('Kurşun kromat', 'Lead chromate', 'PbCrO₄', 1.8e-14, 1, 1),
  s('Kurşun iyodür', 'Lead iodide', 'PbI₂', 7.1e-9, 1, 2),
  s('Kurşun okzalat', 'Lead oxalate', 'PbC₂O₄', 4.8e-10, 1, 1),
  s('Kurşun sülfat', 'Lead sulfate', 'PbSO₄', 1.6e-8, 1, 1),
  s('Kurşun sülfür', 'Lead sulfide', 'PbS', 8e-28, 1, 1),
  s('Magnezyum karbonat', 'Magnesium carbonate', 'MgCO₃', 1e-5, 1, 1),
  s('Magnezyum hidroksit', 'Magnesium hydroxide', 'Mg(OH)₂', 1.2e-11, 1, 2),
  s('Magnezyum okzalat', 'Magnesium oxalate', 'MgC₂O₄', 9e-5, 1, 1),
  s('Mangan(II) hidroksit', 'Manganese(II) hydroxide', 'Mn(OH)₂', 4e-14, 1, 2),
  s('Mangan(II) sülfür', 'Manganese(II) sulfide', 'MnS', 1.4e-15, 1, 1),
  s('Cıva(I) klorür', 'Mercury(I) chloride', 'Hg₂Cl₂', 1.3e-18, 1, 2),
  s('Cıva(II) sülfür', 'Mercury(II) sulfide', 'HgS', 4e-53, 1, 1),
  s('Gümüş arsenat', 'Silver arsenate', 'Ag₃AsO₄', 1.0e-22, 3, 1),
  s('Gümüş bromür', 'Silver bromide', 'AgBr', 4e-13, 1, 1),
  s('Gümüş karbonat', 'Silver carbonate', 'Ag₂CO₃', 8.2e-12, 2, 1),
  s('Gümüş klorür', 'Silver chloride', 'AgCl', 1.0e-10, 1, 1),
  s('Gümüş kromat', 'Silver chromate', 'Ag₂CrO₄', 1.1e-12, 2, 1),
  s('Gümüş iyodat', 'Silver iodate', 'AgIO₃', 3.1e-8, 1, 1),
  s('Gümüş iyodür', 'Silver iodide', 'AgI', 1e-16, 1, 1),
  s('Gümüş fosfat', 'Silver phosphate', 'Ag₃PO₄', 2.8e-18, 3, 1),
  s('Gümüş sülfür', 'Silver sulfide', 'Ag₂S', 2e-49, 2, 1),
  s('Gümüş tiyosiyanat', 'Silver thiocyanate', 'AgSCN', 1.0e-12, 1, 1),
  s('Stronsiyum okzalat', 'Strontium oxalate', 'SrC₂O₄', 1.6e-7, 1, 1),
  s('Stronsiyum sülfat', 'Strontium sulfate', 'SrSO₄', 3.8e-7, 1, 1),
  s('Talyum(I) klorür', 'Thallium(I) chloride', 'TlCl', 2e-4, 1, 1),
  s('Çinko okzalat', 'Zinc oxalate', 'ZnC₂O₄', 2.8e-8, 1, 1),
  s('Çinko sülfür', 'Zinc sulfide', 'ZnS', 1e-21, 1, 1),
];

export interface PhysicalConstant {
  symbol: string;
  name: L;
  value: number;
  unit: string;
}

export const PHYSICAL_CONSTANTS: PhysicalConstant[] = [
  { symbol: 'N_A', name: { tr: 'Avogadro sabiti', en: 'Avogadro constant' }, value: 6.02214076e23, unit: 'mol⁻¹' },
  { symbol: 'R', name: { tr: 'Gaz sabiti', en: 'Gas constant' }, value: 8.314462618, unit: 'J mol⁻¹ K⁻¹' },
  { symbol: 'F', name: { tr: 'Faraday sabiti', en: 'Faraday constant' }, value: 96485.33212, unit: 'C mol⁻¹' },
  { symbol: 'h', name: { tr: 'Planck sabiti', en: 'Planck constant' }, value: 6.62607015e-34, unit: 'J s' },
  { symbol: 'c', name: { tr: 'Işık hızı (boşlukta)', en: 'Speed of light (vacuum)' }, value: 2.99792458e8, unit: 'm s⁻¹' },
  { symbol: 'k_B', name: { tr: 'Boltzmann sabiti', en: 'Boltzmann constant' }, value: 1.380649e-23, unit: 'J K⁻¹' },
  { symbol: 'e', name: { tr: 'Temel yük', en: 'Elementary charge' }, value: 1.602176634e-19, unit: 'C' },
  { symbol: 'K_w', name: { tr: 'Suyun iyonlaşma sabiti (25 °C)', en: 'Ion product of water (25 °C)' }, value: 1.0e-14, unit: '' },
  { symbol: '2.303RT/F', name: { tr: 'Nernst eğimi (25 °C)', en: 'Nernst slope (25 °C)' }, value: 0.05916, unit: 'V' },
];

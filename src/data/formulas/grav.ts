import type { FormulaDef } from '../../core/types';
import { formula, l, linear, pow10, v } from './helpers';

const alphaA1 = (pKa: number, pH: number) => {
  const ka = pow10(-pKa);
  return ka / (ka + pow10(-pH));
};

const alphaA2 = (pKa1: number, pKa2: number, pH: number) => {
  const k1 = pow10(-pKa1);
  const k2 = pow10(-pKa2);
  const h = pow10(-pH);
  return (k1 * k2) / (h * h + k1 * h + k1 * k2);
};

export const GRAV_FORMULAS: FormulaDef[] = [
  formula({
    id: 'grav-factor',
    module: 'grav',
    name: l('Gravimetrik faktör', 'Gravimetric factor'),
    purpose: l(
      'Tartılan çökelek kütlesini aranan madde kütlesine çeviren orandır. a ve b, analit ile çökelek arasındaki mol oranını sağlayan katsayılardır (ör. Fe₂O₃ → 2 Fe: a = 2, b = 1).',
      'Converts the mass of the weighed precipitate into mass of the sought substance. a and b balance the analyte/precipitate mole ratio (e.g. Fe₂O₃ → 2 Fe: a = 2, b = 1).',
    ),
    formula: l('GF = a · M(analit) / (b · M(çökelek))', 'GF = a · M(analyte) / (b · M(precipitate))'),
    variables: [
      v('GF', 'GF', 'Gravimetrik faktör', 'Gravimetric factor', 'none'),
      v('a', 'a', 'Analit katsayısı', 'Analyte coefficient', 'none', { defaultValue: 1 }),
      v('MA', 'M_A', 'Analitin molar kütlesi', 'Molar mass of analyte', 'molarMass'),
      v('b', 'b', 'Çökelek katsayısı', 'Precipitate coefficient', 'none', { defaultValue: 1 }),
      v('MP', 'M_P', 'Çökeleğin molar kütlesi', 'Molar mass of precipitate', 'molarMass'),
    ],
    equation: (x) => x.GF - (x.a * x.MA) / (x.b * x.MP),
    solve: { GF: (x) => (x.a * x.MA) / (x.b * x.MP), MA: (x) => (x.GF * x.b * x.MP) / x.a, MP: (x) => (x.a * x.MA) / (x.b * x.GF) },
    defaultUnknown: 'GF',
    sources: ['[C] 10.1', '[H] 8.2', '[K] 4'],
    examples: [{ values: { a: 1, MA: 35.45, b: 1, MP: 143.32 }, unknown: 'GF', expected: 0.24735, description: l('AgCl çökeleğinden Cl', 'Cl from AgCl precipitate') }],
    keywords: ['gravimetri', 'gravimetry', 'faktör', 'factor'],
  }),
  formula({
    id: 'grav-percent',
    module: 'grav',
    name: l('Gravimetrik % analit', 'Percent analyte by gravimetry'),
    purpose: l('Çökelek kütlesi ve gravimetrik faktörden numunedeki analit yüzdesini hesaplar.', 'Weight percent of analyte from precipitate mass and gravimetric factor.'),
    formula: l('%A = m(çökelek) · GF / m(numune) × 100', '%A = m(precipitate) · GF / m(sample) × 100'),
    variables: [
      v('P', '%A', 'Analit yüzdesi', 'Percent analyte', 'percent'),
      v('mP', 'm_P', 'Çökelek kütlesi', 'Precipitate mass', 'mass'),
      v('GF', 'GF', 'Gravimetrik faktör', 'Gravimetric factor', 'none'),
      v('ms', 'm_s', 'Numune kütlesi', 'Sample mass', 'mass'),
    ],
    equation: (x) => x.P - (100 * x.mP * x.GF) / x.ms,
    solve: {
      P: (x) => (100 * x.mP * x.GF) / x.ms,
      mP: (x) => (x.P * x.ms) / (100 * x.GF),
      ms: (x) => (100 * x.mP * x.GF) / x.P,
      GF: (x) => (x.P * x.ms) / (100 * x.mP),
    },
    defaultUnknown: 'P',
    sources: ['[C] 10.2–10.5', '[H] 8.2'],
    examples: [{ values: { mP: 0.2, GF: 0.24735, ms: 0.5 }, unknown: 'P', expected: 9.894 }],
    keywords: ['gravimetri', 'gravimetry', 'yüzde'],
  }),
  formula({
    id: 'molar-solubility',
    module: 'grav',
    name: l('Ksp ↔ molar çözünürlük (MₓAᵧ)', 'Ksp ↔ molar solubility (MₓAᵧ)'),
    purpose: l(
      'Az çözünen MₓAᵧ tuzunun saf sudaki molar çözünürlüğünü (s) Ksp\'den bulur ya da ölçülen çözünürlükten Ksp hesaplar.',
      'Molar solubility s of a sparingly soluble salt MₓAᵧ in pure water from Ksp, or Ksp from a measured solubility.',
    ),
    formula: 'Ksp = xˣ · yʸ · s⁽ˣ⁺ʸ⁾',
    variables: [
      v('s', 's', 'Molar çözünürlük', 'Molar solubility', 'conc'),
      v('Ksp', 'Ksp', 'Çözünürlük çarpımı', 'Solubility product', 'none'),
      v('x', 'x', 'Katyon sayısı', 'Number of cations', 'none', { inputOnly: true, defaultValue: 1 }),
      v('y', 'y', 'Anyon sayısı', 'Number of anions', 'none', { inputOnly: true, defaultValue: 1 }),
    ],
    equation: (x) => x.Ksp - x.x ** x.x * x.y ** x.y * x.s ** (x.x + x.y),
    solve: {
      s: (x) => (x.Ksp / (x.x ** x.x * x.y ** x.y)) ** (1 / (x.x + x.y)),
      Ksp: (x) => x.x ** x.x * x.y ** x.y * x.s ** (x.x + x.y),
    },
    defaultUnknown: 's',
    assumptions: l(
      'Aktivite katsayıları 1, yan tepkime (hidroliz, kompleksleşme) yok. Hidroksitlerde suyun kendi OH⁻ iyonu ihmal edilir; Fe(OH)₃, Al(OH)₃ gibi çok az çözünen hidroksitlerde bu formül çok yüksek s verir (Ksp tablosu suyun OH⁻ iyonunu hesaba katar).',
      'Activity coefficients of 1 and no side reactions (hydrolysis, complexation). For hydroxides the OH⁻ from water is neglected; for very insoluble hydroxides such as Fe(OH)₃ or Al(OH)₃ this formula gives far too high an s (the Ksp table includes water’s OH⁻).',
    ),
    sources: ['[C] 10.7–10.9', '[T] 8.1–8.2'],
    examples: [
      { values: { Ksp: 1.1e-12, x: 2, y: 1 }, unknown: 's', expected: 6.503e-5, description: l('Ag₂CrO₄', 'Ag₂CrO₄') },
      { values: { Ksp: 1.0e-10, x: 1, y: 1 }, unknown: 's', expected: 1e-5, description: l('AgCl', 'AgCl') },
    ],
    keywords: ['Ksp', 'çözünürlük', 'solubility'],
  }),
  formula({
    id: 'common-ion',
    module: 'grav',
    name: l('Ortak iyon etkisi', 'Common-ion effect'),
    purpose: l(
      'Çözeltide ortak anyon (derişimi C) bulunduğunda MₓAᵧ tuzunun azalan çözünürlüğünü hesaplar. Ortak iyon katyonsa x ile y\'nin yerini değiştirin.',
      'Reduced solubility of MₓAᵧ when a common anion (concentration C) is already present. For a common cation swap x and y.',
    ),
    formula: 'Ksp = (x·s)ˣ · (C + y·s)ʸ',
    variables: [
      v('s', 's', 'Molar çözünürlük', 'Molar solubility', 'conc'),
      v('Ksp', 'Ksp', 'Çözünürlük çarpımı', 'Solubility product', 'none'),
      v('C', 'C', 'Ortak iyon derişimi', 'Common-ion concentration', 'conc'),
      v('x', 'x', 'Katyon sayısı', 'Number of cations', 'none', { inputOnly: true, defaultValue: 1 }),
      v('y', 'y', 'Anyon sayısı', 'Number of anions', 'none', { inputOnly: true, defaultValue: 1 }),
    ],
    equation: (x) => Math.log((x.x * x.s) ** x.x * (x.C + x.y * x.s) ** x.y) - Math.log(x.Ksp),
    solve: { Ksp: (x) => (x.x * x.s) ** x.x * (x.C + x.y * x.s) ** x.y },
    defaultUnknown: 's',
    assumptions: l(
      'Aktivite katsayıları 1 alınır; ortak iyon kaynağı tamamen çözünmüştür. Yüksek C\'de iyonik şiddet çözünürlüğü artırır ve kompleksleşme (ör. aşırı Cl⁻ ile AgCl₂⁻) bu sonuçtan sapmaya yol açar.',
      'Activity coefficients of 1; the common-ion source is fully dissolved. At high C the ionic strength raises the solubility and complexation (e.g. AgCl₂⁻ in excess Cl⁻) causes deviations from this result.',
    ),
    sources: ['[C] 6.12, 10.6', '[T] 8.3'],
    examples: [{ values: { Ksp: 1.0e-10, C: 0.01, x: 1, y: 1 }, unknown: 's', expected: 9.99999e-9, description: l('0,010 M NaCl içinde AgCl', 'AgCl in 0.010 M NaCl') }],
    keywords: ['ortak iyon', 'common ion', 'Ksp'],
  }),
  formula({
    id: 'solubility-ph-mono',
    module: 'grav',
    name: l('pH\'ın çözünürlüğe etkisi (MA, HA)', 'Effect of pH on solubility (MA, HA)'),
    purpose: l(
      'Anyonu zayıf asit HA\'nın eşlenik bazı olan 1:1 tuzun (ör. AgOAc, MF) çözünürlüğünü pH\'a göre hesaplar.',
      'Solubility of a 1:1 salt whose anion is the conjugate base of a weak acid HA (e.g. AgOAc) as a function of pH.',
    ),
    formula: 's = √(Ksp / α_A⁻),  α_A⁻ = Ka / (Ka + [H⁺])',
    variables: [
      v('s', 's', 'Molar çözünürlük', 'Molar solubility', 'conc'),
      v('Ksp', 'Ksp', 'Çözünürlük çarpımı', 'Solubility product', 'none'),
      v('pKa', 'pKa', 'HA\'nın pKa değeri', 'pKa of HA', 'none', linear(-5, 20)),
      v('pH', 'pH', 'pH', 'pH', 'none', linear(-2, 16)),
    ],
    equation: (x) => Math.log(x.s * x.s * alphaA1(x.pKa, x.pH)) - Math.log(x.Ksp),
    solve: { s: (x) => Math.sqrt(x.Ksp / alphaA1(x.pKa, x.pH)), Ksp: (x) => x.s * x.s * alphaA1(x.pKa, x.pH) },
    defaultUnknown: 's',
    assumptions: l(
      'pH tamponla sabit tutulur; aktivite katsayıları 1; metal iyonunun hidrolizi ve kompleksleşmesi ihmal edilir.',
      'The pH is held constant by a buffer; activity coefficients of 1; hydrolysis and complexation of the metal ion are neglected.',
    ),
    sources: ['[C] 11.1', '[T] 8.4', '[H] 6.7'],
    examples: [{ values: { Ksp: 1e-10, pKa: 4, pH: 2 }, unknown: 's', expected: Math.sqrt(1e-10 / (1e-4 / (1e-4 + 1e-2))) }],
    keywords: ['pH', 'çözünürlük', 'solubility', 'alfa'],
  }),
  formula({
    id: 'solubility-ph-di',
    module: 'grav',
    name: l('pH\'ın çözünürlüğe etkisi (MA, H₂A)', 'Effect of pH on solubility (MA, H₂A)'),
    purpose: l(
      'Anyonu diprotik asit H₂A\'dan gelen 1:1 tuzun (ör. CaC₂O₄, CaCO₃) çözünürlüğünü pH\'a göre hesaplar.',
      'Solubility of a 1:1 salt whose anion derives from a diprotic acid H₂A (e.g. CaC₂O₄, CaCO₃) as a function of pH.',
    ),
    formula: 's = √(Ksp / α₂),  α₂ = Ka₁Ka₂ / ([H⁺]² + Ka₁[H⁺] + Ka₁Ka₂)',
    variables: [
      v('s', 's', 'Molar çözünürlük', 'Molar solubility', 'conc'),
      v('Ksp', 'Ksp', 'Çözünürlük çarpımı', 'Solubility product', 'none'),
      v('pKa1', 'pKa₁', 'pKa₁', 'pKa₁', 'none', linear(-5, 20)),
      v('pKa2', 'pKa₂', 'pKa₂', 'pKa₂', 'none', linear(-5, 20)),
      v('pH', 'pH', 'pH', 'pH', 'none', linear(-2, 16)),
    ],
    equation: (x) => Math.log(x.s * x.s * alphaA2(x.pKa1, x.pKa2, x.pH)) - Math.log(x.Ksp),
    solve: { s: (x) => Math.sqrt(x.Ksp / alphaA2(x.pKa1, x.pKa2, x.pH)), Ksp: (x) => x.s * x.s * alphaA2(x.pKa1, x.pKa2, x.pH) },
    defaultUnknown: 's',
    assumptions: l(
      'pH tamponla sabit tutulur; aktivite katsayıları 1; metal iyonunun hidrolizi ve kompleksleşmesi ihmal edilir.',
      'The pH is held constant by a buffer; activity coefficients of 1; hydrolysis and complexation of the metal ion are neglected.',
    ),
    sources: ['[C] 11.2–11.5', '[T] 8.4'],
    examples: [
      {
        values: { Ksp: 2.6e-9, pKa1: -Math.log10(6.5e-2), pKa2: -Math.log10(6.1e-5), pH: 4 },
        unknown: 's',
        expected: 8.288e-5,
        description: l('pH 4,00\'te CaC₂O₄', 'CaC₂O₄ at pH 4.00'),
      },
    ],
    keywords: ['pH', 'çözünürlük', 'solubility', 'okzalat', 'oxalate'],
  }),
  formula({
    id: 'rss',
    module: 'grav',
    name: l('Bağıl aşırı doygunluk', 'Relative supersaturation'),
    purpose: l(
      'Çöktürme sırasında RSS küçükse iri, kolay süzülen kristaller; büyükse kolloidal çökelek oluşur (von Weimarn).',
      'Low RSS during precipitation gives large, filterable crystals; high RSS gives colloids (von Weimarn).',
    ),
    formula: 'RSS = (Q − S) / S',
    variables: [
      v('RSS', 'RSS', 'Bağıl aşırı doygunluk', 'Relative supersaturation', 'none', linear(-1, 1e9)),
      v('Q', 'Q', 'Anlık derişim', 'Instantaneous concentration', 'conc'),
      v('S', 'S', 'Denge çözünürlüğü', 'Equilibrium solubility', 'conc'),
    ],
    equation: (x) => x.RSS - (x.Q - x.S) / x.S,
    solve: { RSS: (x) => (x.Q - x.S) / x.S, Q: (x) => x.S * (1 + x.RSS), S: (x) => x.Q / (1 + x.RSS) },
    defaultUnknown: 'RSS',
    sources: ['[H] 8.2'],
    examples: [{ values: { Q: 1e-3, S: 1e-5 }, unknown: 'RSS', expected: 99 }],
    keywords: ['aşırı doygunluk', 'supersaturation', 'von Weimarn'],
  }),
  formula({
    id: 'mass-loss',
    module: 'grav',
    name: l('Kütle kaybı (nem, kül, uçucu madde)', 'Mass loss (moisture, ash, volatiles)'),
    purpose: l(
      'Kurutma ya da yakma öncesi ve sonrası tartımlardan nem, uçucu madde veya kızdırma kaybı yüzdesini hesaplar.',
      'Percent moisture, volatiles or loss on ignition from masses before and after drying or ignition.',
    ),
    formula: l('% kayıp = (m₁ − m₂) / m₁ × 100', '% loss = (m₁ − m₂) / m₁ × 100'),
    variables: [
      v('P', '%', 'Kütle kaybı', 'Mass loss', 'percent', linear(0, 100)),
      v('m1', 'm₁', 'Önceki kütle', 'Initial mass', 'mass'),
      v('m2', 'm₂', 'Sonraki kütle', 'Final mass', 'mass'),
    ],
    equation: (x) => x.P - (100 * (x.m1 - x.m2)) / x.m1,
    solve: { P: (x) => (100 * (x.m1 - x.m2)) / x.m1, m2: (x) => x.m1 * (1 - x.P / 100), m1: (x) => x.m2 / (1 - x.P / 100) },
    defaultUnknown: 'P',
    sources: ['[H] 8.3', '[C] 2.10'],
    examples: [{ values: { m1: 2.0, m2: 1.85 }, unknown: 'P', expected: 7.5 }],
    keywords: ['nem', 'moisture', 'kül', 'ash', 'kızdırma'],
  }),
];

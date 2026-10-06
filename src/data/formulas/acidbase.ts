import type { FormulaDef } from '../../core/types';
import { KW_25C } from '../../core/units';
import { formula, l, linear, log10, pow10, v } from './helpers';

const KW = KW_25C;
const PH = () => v('pH', 'pH', 'pH', 'pH', 'none', linear(-2, 16));
const PKA = (key = 'pKa', symbol = 'pKa') => v(key, symbol, symbol, symbol, 'none', linear(-5, 20));

export const ACIDBASE_FORMULAS: FormulaDef[] = [
  formula({
    id: 'strong-acid',
    module: 'acidbase',
    name: l('Kuvvetli asit pH\'ı', 'pH of a strong acid'),
    purpose: l(
      'HCl, HNO₃, HClO₄ gibi tamamen iyonlaşan monoprotik asitlerin pH\'ını hesaplar. Suyun iyonlaşması dahil olduğu için çok seyreltik çözeltilerde de doğrudur.',
      'pH of fully ionized monoprotic acids such as HCl, HNO₃ or HClO₄. Includes water autoionization, so it is valid even for very dilute solutions.',
    ),
    formula: '[H⁺] = C/2 + √(C² + 4Kw)/2',
    variables: [PH(), v('C', 'C', 'Asit derişimi', 'Acid concentration', 'conc')],
    equation: (x) => {
      const h = pow10(-x.pH);
      return h - x.C - KW / h;
    },
    solve: {
      pH: (x) => -log10((x.C + Math.sqrt(x.C * x.C + 4 * KW)) / 2),
      C: (x) => pow10(-x.pH) - KW / pow10(-x.pH),
    },
    defaultUnknown: 'pH',
    assumptions: l('25 °C (Kw = 1,0 × 10⁻¹⁴), aktivite katsayıları 1.', '25 °C (Kw = 1.0 × 10⁻¹⁴), unit activity coefficients.'),
    sources: ['[C] 7.4', '[H] 6.7'],
    examples: [
      { values: { C: 0.01 }, unknown: 'pH', expected: 2.0 },
      { values: { C: 1e-8 }, unknown: 'pH', expected: 6.978, description: l('1,0 × 10⁻⁸ M HCl', '1.0 × 10⁻⁸ M HCl') },
    ],
    keywords: ['pH', 'kuvvetli asit', 'strong acid', 'HCl'],
  }),
  formula({
    id: 'strong-base',
    module: 'acidbase',
    name: l('Kuvvetli baz pH\'ı', 'pH of a strong base'),
    purpose: l(
      'NaOH, KOH gibi tamamen iyonlaşan bazların pH\'ını hesaplar. C, OH⁻ derişimidir (Ba(OH)₂ için 2 × molarite).',
      'pH of fully ionized bases such as NaOH or KOH. C is the OH⁻ concentration (2 × molarity for Ba(OH)₂).',
    ),
    formula: '[OH⁻] = C/2 + √(C² + 4Kw)/2,  pH = 14 − pOH',
    variables: [PH(), v('C', 'C', 'OH⁻ derişimi', 'OH⁻ concentration', 'conc')],
    equation: (x) => {
      const oh = KW / pow10(-x.pH);
      return oh - x.C - KW / oh;
    },
    solve: {
      pH: (x) => 14 + log10((x.C + Math.sqrt(x.C * x.C + 4 * KW)) / 2),
      C: (x) => {
        const oh = KW / pow10(-x.pH);
        return oh - KW / oh;
      },
    },
    defaultUnknown: 'pH',
    assumptions: l('25 °C, aktivite katsayıları 1.', '25 °C, unit activity coefficients.'),
    sources: ['[C] 7.4', '[H] 6.7'],
    examples: [{ values: { C: 0.05 }, unknown: 'pH', expected: 12.699 }],
    keywords: ['pH', 'kuvvetli baz', 'strong base', 'NaOH'],
  }),
  formula({
    id: 'weak-acid',
    module: 'acidbase',
    name: l('Zayıf asit pH\'ı', 'pH of a weak acid'),
    purpose: l(
      'Zayıf monoprotik asidin (ör. asetik asit) ya da zayıf bazın eşlenik asidinin (ör. NH₄⁺) pH\'ını yaklaşıklık yapmadan, yük denkliğinden tam olarak hesaplar.',
      'Exact pH (no approximations, from the charge balance) of a weak monoprotic acid such as acetic acid, or of the conjugate acid of a weak base such as NH₄⁺.',
    ),
    formula: '[H⁺] = Ka·C / (Ka + [H⁺]) + Kw / [H⁺]',
    variables: [PH(), PKA(), v('C', 'C', 'Asit derişimi', 'Acid concentration', 'conc')],
    equation: (x) => {
      const h = pow10(-x.pH);
      const ka = pow10(-x.pKa);
      return h - (ka * x.C) / (ka + h) - KW / h;
    },
    solve: {
      C: (x) => {
        const h = pow10(-x.pH);
        const ka = pow10(-x.pKa);
        return ((h - KW / h) * (ka + h)) / ka;
      },
    },
    defaultUnknown: 'pH',
    assumptions: l('25 °C, aktivite katsayıları 1.', '25 °C, unit activity coefficients.'),
    sources: ['[C] 7.20–7.22', '[T] 5.6', '[H] 6.7'],
    examples: [{ values: { pKa: -Math.log10(1.75e-5), C: 0.1 }, unknown: 'pH', expected: 2.8813, description: l('0,100 M asetik asit', '0.100 M acetic acid') }],
    keywords: ['pH', 'zayıf asit', 'weak acid', 'asetik', 'acetic'],
  }),
  formula({
    id: 'weak-base',
    module: 'acidbase',
    name: l('Zayıf baz pH\'ı', 'pH of a weak base'),
    purpose: l(
      'NH₃ ya da aminler gibi zayıf bazların pH\'ını yük denkliğinden tam olarak hesaplar.',
      'Exact pH of weak bases such as NH₃ or amines, from the charge balance.',
    ),
    formula: '[OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]',
    variables: [PH(), v('pKb', 'pKb', 'pKb', 'pKb', 'none', linear(-5, 20)), v('C', 'C', 'Baz derişimi', 'Base concentration', 'conc')],
    equation: (x) => {
      const oh = KW / pow10(-x.pH);
      const kb = pow10(-x.pKb);
      return oh - (kb * x.C) / (kb + oh) - KW / oh;
    },
    solve: {
      C: (x) => {
        const oh = KW / pow10(-x.pH);
        const kb = pow10(-x.pKb);
        return ((oh - KW / oh) * (kb + oh)) / kb;
      },
    },
    defaultUnknown: 'pH',
    sources: ['[C] 7.23–7.32', '[H] 6.7'],
    examples: [{ values: { pKb: -Math.log10(1.75e-5), C: 0.1 }, unknown: 'pH', expected: 11.1187, description: l('0,100 M NH₃', '0.100 M NH₃') }],
    keywords: ['pH', 'zayıf baz', 'weak base', 'amonyak', 'ammonia'],
  }),
  formula({
    id: 'salt-weak-acid',
    module: 'acidbase',
    name: l('Zayıf asit tuzunun pH\'ı (hidroliz)', 'pH of a salt of a weak acid (hydrolysis)'),
    purpose: l(
      'NaOAc, NaCN gibi zayıf asit tuzlarının bazik pH\'ını hesaplar; Kb = Kw / Ka kullanılır.',
      'Basic pH of salts of weak acids such as NaOAc or NaCN, using Kb = Kw / Ka.',
    ),
    formula: 'Kb = Kw / Ka;  [OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]',
    variables: [PH(), PKA('pKa', 'pKa (HA)'), v('C', 'C', 'Tuz derişimi', 'Salt concentration', 'conc')],
    equation: (x) => {
      const oh = KW / pow10(-x.pH);
      const kb = KW / pow10(-x.pKa);
      return oh - (kb * x.C) / (kb + oh) - KW / oh;
    },
    defaultUnknown: 'pH',
    sources: ['[C] 7.28–7.32'],
    examples: [{ values: { pKa: -Math.log10(1.75e-5), C: 0.1 }, unknown: 'pH', expected: 8.8785, description: l('0,100 M NaOAc', '0.100 M NaOAc') }],
    keywords: ['hidroliz', 'hydrolysis', 'tuz', 'salt'],
  }),
  formula({
    id: 'pka-pkb',
    module: 'acidbase',
    name: l('Eşlenik çift: pKa + pKb = pKw', 'Conjugate pair: pKa + pKb = pKw'),
    purpose: l('Bir asidin pKa\'sından eşlenik bazının pKb\'sini (veya tersini) hesaplar.', 'pKb of the conjugate base from the pKa of an acid, or vice versa.'),
    formula: 'pKa + pKb = 14,00 (25 °C)',
    variables: [PKA(), v('pKb', 'pKb', 'pKb', 'pKb', 'none', linear(-5, 20))],
    equation: (x) => x.pKa + x.pKb - 14,
    solve: { pKa: (x) => 14 - x.pKb, pKb: (x) => 14 - x.pKa },
    defaultUnknown: 'pKb',
    sources: ['[C] 7.27'],
    examples: [{ values: { pKa: 9.24 }, unknown: 'pKb', expected: 4.76 }],
    keywords: ['pKa', 'pKb', 'eşlenik', 'conjugate'],
  }),
  formula({
    id: 'henderson',
    module: 'acidbase',
    name: l('Henderson–Hasselbalch', 'Henderson–Hasselbalch'),
    purpose: l(
      'Zayıf asit ve eşlenik bazından oluşan tamponun pH\'ını ya da istenen pH için gereken baz/asit oranını hesaplar.',
      'pH of a buffer made of a weak acid and its conjugate base, or the base/acid ratio needed for a target pH.',
    ),
    formula: 'pH = pKa + log([A⁻] / [HA])',
    variables: [
      PH(),
      PKA(),
      v('Cb', '[A⁻]', 'Eşlenik baz derişimi', 'Conjugate base concentration', 'conc'),
      v('Ca', '[HA]', 'Asit derişimi', 'Acid concentration', 'conc'),
    ],
    equation: (x) => x.pH - x.pKa - log10(x.Cb / x.Ca),
    solve: {
      pH: (x) => x.pKa + log10(x.Cb / x.Ca),
      pKa: (x) => x.pH - log10(x.Cb / x.Ca),
      Cb: (x) => x.Ca * pow10(x.pH - x.pKa),
      Ca: (x) => x.Cb / pow10(x.pH - x.pKa),
    },
    defaultUnknown: 'pH',
    assumptions: l('Derişimler Ka ve Kw/Ka\'dan çok büyük (yaklaşık 10⁻³ M üstü).', 'Concentrations much larger than Ka and Kw/Ka (roughly above 10⁻³ M).'),
    sources: ['[C] 7.40–7.47', '[T] 6.1', '[H] 6.8'],
    examples: [{ values: { pKa: 4.757, Cb: 0.15, Ca: 0.1 }, unknown: 'pH', expected: 4.933 }],
    keywords: ['tampon', 'buffer', 'Henderson'],
  }),
  formula({
    id: 'buffer-addition',
    module: 'acidbase',
    name: l('Tampona kuvvetli asit/baz eklenmesi', 'Adding strong acid/base to a buffer'),
    purpose: l(
      'Tampona kuvvetli baz (+) ya da kuvvetli asit (−) eklendikten sonraki pH\'ı mol sayıları üzerinden hesaplar.',
      'pH of a buffer after adding strong base (+) or strong acid (−), using amounts in moles.',
    ),
    formula: 'pH = pKa + log[(n_A⁻ + Δn) / (n_HA − Δn)]',
    variables: [
      PH(),
      PKA(),
      v('nA', 'n_A⁻', 'Eşlenik baz miktarı', 'Amount of conjugate base', 'amount', { unit: 'mmol' }),
      v('nHA', 'n_HA', 'Asit miktarı', 'Amount of acid', 'amount', { unit: 'mmol' }),
      v('dn', 'Δn', 'Eklenen baz (+) / asit (−)', 'Base added (+) / acid added (−)', 'amount', { unit: 'mmol', scale: 'linear', min: -1e3, max: 1e3 }),
    ],
    equation: (x) => x.pH - x.pKa - log10((x.nA + x.dn) / (x.nHA - x.dn)),
    solve: {
      pH: (x) => x.pKa + log10((x.nA + x.dn) / (x.nHA - x.dn)),
      dn: (x) => {
        const r = pow10(x.pH - x.pKa);
        return (r * x.nHA - x.nA) / (1 + r);
      },
    },
    defaultUnknown: 'pH',
    sources: ['[C] 7.52–7.53', '[H] 6.8'],
    examples: [{ values: { pKa: 4.757, nA: 0.01, nHA: 0.01, dn: 0.001 }, unknown: 'pH', expected: 4.8441 }],
    keywords: ['tampon', 'buffer'],
  }),
  formula({
    id: 'buffer-capacity',
    module: 'acidbase',
    name: l('Tampon kapasitesi', 'Buffer capacity'),
    purpose: l(
      'Tamponun pH değişimine direncini (β) hesaplar: pH\'ı bir birim değiştirmek için gereken kuvvetli asit/baz miktarı. β, pH = pKa\'da en büyüktür.',
      'Resistance of a buffer to pH change (β): strong acid/base needed to change the pH by one unit. β is largest at pH = pKa.',
    ),
    formula: 'β = 2,303 (Kw/[H⁺] + [H⁺] + C·Ka·[H⁺] / (Ka + [H⁺])²)',
    variables: [
      v('beta', 'β', 'Tampon kapasitesi', 'Buffer capacity', 'conc'),
      { ...PH(), inputOnly: true },
      { ...PKA(), inputOnly: true },
      v('C', 'C', 'Toplam tampon derişimi', 'Total buffer concentration', 'conc'),
    ],
    equation: (x) => {
      const h = pow10(-x.pH);
      const ka = pow10(-x.pKa);
      return x.beta - 2.303 * (KW / h + h + (x.C * ka * h) / (ka + h) ** 2);
    },
    solve: {
      beta: (x) => {
        const h = pow10(-x.pH);
        const ka = pow10(-x.pKa);
        return 2.303 * (KW / h + h + (x.C * ka * h) / (ka + h) ** 2);
      },
      C: (x) => {
        const h = pow10(-x.pH);
        const ka = pow10(-x.pKa);
        return ((x.beta / 2.303 - KW / h - h) * (ka + h) ** 2) / (ka * h);
      },
    },
    defaultUnknown: 'beta',
    sources: ['[C] 7.49–7.50, 8.28', '[H] 6.8'],
    examples: [{ values: { pH: 4.757, pKa: 4.757, C: 0.1 }, unknown: 'beta', expected: 0.057615 }],
    keywords: ['tampon kapasitesi', 'buffer capacity', 'beta'],
  }),
  formula({
    id: 'amphiprotic',
    module: 'acidbase',
    name: l('Amfiprotik (ara) türün pH\'ı', 'pH of an amphiprotic species'),
    purpose: l(
      'NaHCO₃, NaH₂PO₄, Na₂HPO₄ gibi hem asit hem baz olabilen ara türlerin çözeltisinin pH\'ını hesaplar. Na₂HPO₄ için pKa₂ ve pKa₃ kullanın.',
      'pH of solutions of intermediate species that act as both acid and base, such as NaHCO₃, NaH₂PO₄ or Na₂HPO₄. For Na₂HPO₄ use pKa₂ and pKa₃.',
    ),
    formula: '[H⁺] = √[(Ka₁·Kw + Ka₁·Ka₂·C) / (Ka₁ + C)]',
    variables: [PH(), PKA('pKa1', 'pKa₁'), PKA('pKa2', 'pKa₂'), v('C', 'C', 'Tuz derişimi', 'Salt concentration', 'conc')],
    equation: (x) => {
      const k1 = pow10(-x.pKa1);
      const k2 = pow10(-x.pKa2);
      return 2 * x.pH + log10((k1 * KW + k1 * k2 * x.C) / (k1 + x.C));
    },
    solve: {
      pH: (x) => {
        const k1 = pow10(-x.pKa1);
        const k2 = pow10(-x.pKa2);
        return -0.5 * log10((k1 * KW + k1 * k2 * x.C) / (k1 + x.C));
      },
    },
    defaultUnknown: 'pH',
    sources: ['[C] 7.93–7.99', '[T] 6.7', '[H] 6.7'],
    examples: [
      {
        values: { pKa1: -Math.log10(4.3e-7), pKa2: -Math.log10(4.8e-11), C: 0.1 },
        unknown: 'pH',
        expected: 8.3422,
        description: l('0,100 M NaHCO₃', '0.100 M NaHCO₃'),
      },
    ],
    keywords: ['amfiprotik', 'amphiprotic', 'ara tür', 'bikarbonat', 'bicarbonate'],
  }),
  formula({
    id: 'blood-ph',
    module: 'acidbase',
    name: l('Kan pH\'ı (bikarbonat tamponu)', 'Blood pH (bicarbonate buffer)'),
    purpose: l(
      'Kandaki bikarbonat derişimi ve CO₂ kısmi basıncından pH\'ı hesaplar (klinik kimya).',
      'Blood pH from bicarbonate concentration and CO₂ partial pressure (clinical chemistry).',
    ),
    formula: 'pH = 6,10 + log([HCO₃⁻] / (0,0301 · pCO₂))',
    variables: [
      PH(),
      v('hco3', '[HCO₃⁻]', 'Bikarbonat derişimi', 'Bicarbonate concentration', 'conc', { unit: 'mM' }),
      v('pco2', 'pCO₂', 'CO₂ kısmi basıncı', 'CO₂ partial pressure', 'pressure'),
    ],
    equation: (x) => x.pH - 6.1 - log10((x.hco3 * 1000) / (0.0301 * x.pco2)),
    solve: {
      pH: (x) => 6.1 + log10((x.hco3 * 1000) / (0.0301 * x.pco2)),
      hco3: (x) => (pow10(x.pH - 6.1) * 0.0301 * x.pco2) / 1000,
      pco2: (x) => (x.hco3 * 1000) / (0.0301 * pow10(x.pH - 6.1)),
    },
    defaultUnknown: 'pH',
    assumptions: l('37 °C; çözünmüş CO₂ = 0,0301 mM/mmHg × pCO₂.', '37 °C; dissolved CO₂ = 0.0301 mM/mmHg × pCO₂.'),
    sources: ['[C] 7.101'],
    examples: [{ values: { hco3: 0.024, pco2: 40 }, unknown: 'pH', expected: 7.3996 }],
    keywords: ['kan', 'blood', 'bikarbonat', 'klinik', 'clinical'],
  }),
];

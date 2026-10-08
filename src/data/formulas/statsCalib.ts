import type { FormulaDef } from '../../core/types';
import { formula, l, linear, v } from './helpers';

const BIG = 1e15;

export const STATS_FORMULAS: FormulaDef[] = [
  formula({
    id: 'relative-error',
    module: 'stats',
    name: l('Bağıl hata', 'Relative error'),
    purpose: l(
      'Ölçülen (ya da ortalama) değerin kabul edilen gerçek değerden sapmasını yüzde olarak verir; doğruluğun ölçüsüdür. Mutlak hata E = x − μ\'dür.',
      'Deviation of a measured (or mean) value from the accepted true value, as a percentage; a measure of accuracy. The absolute error is E = x − μ.',
    ),
    formula: 'Eᵣ (%) = (x − μ) / μ × 100',
    variables: [
      v('Er', 'Eᵣ', 'Bağıl hata', 'Relative error', 'percent', linear(-BIG, BIG)),
      v('x', 'x', 'Ölçülen değer', 'Measured value', 'none', linear(-BIG, BIG)),
      v('mu', 'μ', 'Gerçek (kabul edilen) değer', 'True (accepted) value', 'none', linear(-BIG, BIG)),
    ],
    equation: (x) => x.Er - (100 * (x.x - x.mu)) / x.mu,
    solve: { Er: (x) => (100 * (x.x - x.mu)) / x.mu, x: (x) => x.mu * (1 + x.Er / 100), mu: (x) => x.x / (1 + x.Er / 100) },
    defaultUnknown: 'Er',
    sources: ['[H] 4.2', '[C] 3.1'],
    examples: [{ values: { x: 20.32, mu: 20.0 }, unknown: 'Er', expected: 1.6 }],
    keywords: ['hata', 'error', 'doğruluk', 'accuracy'],
  }),
  formula({
    id: 'z-score',
    module: 'stats',
    name: l('Standart normal değişken (z)', 'Standard normal deviate (z)'),
    purpose: l(
      'Bir değerin ortalamadan kaç standart sapma uzakta olduğunu gösterir; normal dağılım olasılıkları ve yeterlilik testlerinde kullanılır.',
      'How many standard deviations a value lies from the mean; used for normal-distribution probabilities and proficiency testing.',
    ),
    formula: 'z = (x − μ) / σ',
    variables: [
      v('z', 'z', 'z değeri', 'z value', 'none', linear(-BIG, BIG)),
      v('x', 'x', 'Değer', 'Value', 'none', linear(-BIG, BIG)),
      v('mu', 'μ', 'Ortalama', 'Mean', 'none', linear(-BIG, BIG)),
      v('sigma', 'σ', 'Standart sapma', 'Standard deviation', 'none'),
    ],
    equation: (x) => x.z - (x.x - x.mu) / x.sigma,
    solve: {
      z: (x) => (x.x - x.mu) / x.sigma,
      x: (x) => x.mu + x.z * x.sigma,
      mu: (x) => x.x - x.z * x.sigma,
      sigma: (x) => (x.x - x.mu) / x.z,
    },
    defaultUnknown: 'z',
    sources: ['[H] 4.4', '[C] 4.2', '[P] 7.3'],
    examples: [{ values: { x: 12.5, mu: 10, sigma: 1.25 }, unknown: 'z', expected: 2 }],
    keywords: ['z', 'normal', 'Gauss'],
  }),
  formula({
    id: 'sample-size-power',
    module: 'stats',
    name: l('Gerekli ölçüm sayısı (güç analizi)', 'Required number of measurements (power analysis)'),
    purpose: l(
      'İki ortalama arasındaki δ büyüklüğündeki bir farkı belirli güven (z_α) ve güçle (z_β) yakalamak için her grupta kaç ölçüm gerektiğini tahmin eder.',
      'Estimates how many measurements per group are needed to detect a difference δ between two means with a given confidence (z_α) and power (z_β).',
    ),
    formula: 'n > 2 · [(z_α + z_β) · s / δ]²',
    variables: [
      v('n', 'n', 'Ölçüm sayısı (grup başına)', 'Measurements per group', 'none'),
      v('za', 'z_α', 'z (güven; %95 → 1,96)', 'z (confidence; 95% → 1.96)', 'none', { defaultValue: 1.96 }),
      v('zb', 'z_β', 'z (güç; %95 → 1,645)', 'z (power; 95% → 1.645)', 'none', { defaultValue: 1.645 }),
      v('s', 's', 'Standart sapma', 'Standard deviation', 'none'),
      v('delta', 'δ', 'Saptanacak fark', 'Difference to detect', 'none'),
    ],
    equation: (x) => x.n - 2 * (((x.za + x.zb) * x.s) / x.delta) ** 2,
    solve: {
      n: (x) => 2 * (((x.za + x.zb) * x.s) / x.delta) ** 2,
      delta: (x) => ((x.za + x.zb) * x.s) / Math.sqrt(x.n / 2),
      s: (x) => (x.delta * Math.sqrt(x.n / 2)) / (x.za + x.zb),
    },
    defaultUnknown: 'n',
    sources: ['[C] 3.36–3.41'],
    examples: [{ values: { za: 1.96, zb: 1.64, s: 3, delta: 2 }, unknown: 'n', expected: 58.32 }],
    keywords: ['güç', 'power', 'örnek sayısı', 'sample size'],
  }),
];

export const CALIB_FORMULAS: FormulaDef[] = [
  formula({
    id: 'std-addition-single',
    module: 'calib',
    name: l('Tek noktalı standart ekleme', 'Single-point standard addition'),
    purpose: l(
      'Matriks etkisi olan numunelerde, numuneye bilinen miktarda standart ekleyip sinyal artışından analit derişimini bulur. Seyrelme hesaba katılır.',
      'For samples with matrix effects: spike a known amount of standard into the sample and find the analyte concentration from the signal increase, accounting for dilution.',
    ),
    formula: 'Cₓ = Sₓ · C_std · V_std / [S_spk · (Vₓ + V_std) − Sₓ · Vₓ]',
    variables: [
      v('Cx', 'Cₓ', 'Numunedeki analit derişimi', 'Analyte concentration in sample', 'conc', { unit: 'mM' }),
      v('Sx', 'Sₓ', 'Numune sinyali', 'Sample signal', 'none'),
      v('Sspk', 'S_spk', 'Eklemeli numune sinyali', 'Spiked sample signal', 'none'),
      v('Vx', 'Vₓ', 'Numune hacmi', 'Sample volume', 'volume', { unit: 'mL' }),
      v('Vstd', 'V_std', 'Eklenen standart hacmi', 'Volume of standard added', 'volume', { unit: 'mL' }),
      v('Cstd', 'C_std', 'Standart derişimi', 'Standard concentration', 'conc', { unit: 'mM' }),
    ],
    equation: (x) => x.Cx * (x.Sspk * (x.Vx + x.Vstd) - x.Sx * x.Vx) - x.Sx * x.Cstd * x.Vstd,
    solve: {
      Cx: (x) => (x.Sx * x.Cstd * x.Vstd) / (x.Sspk * (x.Vx + x.Vstd) - x.Sx * x.Vx),
      Sspk: (x) => (x.Sx * x.Cstd * x.Vstd / x.Cx + x.Sx * x.Vx) / (x.Vx + x.Vstd),
    },
    defaultUnknown: 'Cx',
    assumptions: l('Sₓ seyreltilmemiş numunede ölçülür, standart doğrudan Vₓ hacmindeki numuneye eklenir. Eklemesiz ve eklemeli numuneler aynı son hacme tamamlanıyorsa Cₓ = Sₓ·C_std·V_std / [(S_spk − Sₓ)·Vₓ] kullanılır. Sinyal derişimle doğrusal ve tanık sinyali sıfırdır.', 'Sₓ is measured on the undiluted sample and the standard is added straight to the volume Vₓ. If the unspiked and spiked aliquots are both made up to the same final volume, use Cₓ = Sₓ·C_std·V_std / [(S_spk − Sₓ)·Vₓ]. The signal is linear in concentration with zero blank.'),
    sources: ['[C] 17.4–17.8', '[H] 5.3', '[K] 28.2–28.5'],
    examples: [
      {
        // k = 100 per M: Cx = 2 mM → Sx = 0.2; spike 1.00 mL of 10 mM into 10.00 mL → C = 2.7273 mM → 0.27273
        values: { Sx: 0.2, Sspk: 0.272727, Vx: 0.01, Vstd: 0.001, Cstd: 0.01 },
        unknown: 'Cx',
        expected: 0.002,
      },
    ],
    keywords: ['standart ekleme', 'standard addition', 'matriks', 'matrix'],
  }),
  formula({
    id: 'internal-standard',
    module: 'calib',
    name: l('İç standart yöntemi', 'Internal standard method'),
    purpose: l(
      'Analit ve iç standart sinyallerinin oranını kullanarak enjeksiyon hacmi ve cihaz dalgalanmalarından bağımsız sonuç verir. Önce standart karışımdan K bulunur, sonra numuneye uygulanır.',
      'Uses the ratio of analyte to internal-standard signals so results are independent of injection volume and instrument drift. K is found from a standard mixture and applied to the sample.',
    ),
    formula: 'S_A/S_IS = K · C_A/C_IS;  K = (S_A,std/S_IS,std) · (C_IS,std/C_A,std)',
    variables: [
      v('CA', 'C_A', 'Numunede analit derişimi', 'Analyte concentration in sample', 'conc', { unit: 'mM' }),
      v('SA', 'S_A', 'Numunede analit sinyali', 'Analyte signal in sample', 'none'),
      v('SIS', 'S_IS', 'Numunede iç standart sinyali', 'Internal-standard signal in sample', 'none'),
      v('CIS', 'C_IS', 'Numunede iç standart derişimi', 'Internal-standard concentration in sample', 'conc', { unit: 'mM' }),
      v('SAs', 'S_A,std', 'Standartta analit sinyali', 'Analyte signal in standard', 'none'),
      v('SISs', 'S_IS,std', 'Standartta iç standart sinyali', 'Internal-standard signal in standard', 'none'),
      v('CAs', 'C_A,std', 'Standartta analit derişimi', 'Analyte concentration in standard', 'conc', { unit: 'mM' }),
      v('CISs', 'C_IS,std', 'Standartta iç standart derişimi', 'Internal-standard concentration in standard', 'conc', { unit: 'mM' }),
    ],
    equation: (x) => {
      const K = (x.SAs / x.SISs) * (x.CISs / x.CAs);
      return x.CA - (x.SA / x.SIS) * (x.CIS / K);
    },
    solve: {
      CA: (x) => {
        const K = (x.SAs / x.SISs) * (x.CISs / x.CAs);
        return (x.SA / x.SIS) * (x.CIS / K);
      },
    },
    defaultUnknown: 'CA',
    sources: ['[H] 5.3', '[C] 17.5'],
    examples: [{ values: { SA: 0.5, SIS: 1.0, CIS: 0.001, SAs: 0.8, SISs: 1.0, CAs: 0.002, CISs: 0.001 }, unknown: 'CA', expected: 1.25e-3 }],
    keywords: ['iç standart', 'internal standard', 'kromatografi'],
  }),
  formula({
    id: 'response-factor',
    module: 'calib',
    name: l('Yanıt faktörü', 'Response factor'),
    purpose: l('Birim derişim başına (kesişim düzeltilmiş) sinyaldir; kromatografide hızlı nicelleme için kullanılır.', 'Intercept-corrected signal per unit concentration; used for quick quantitation in chromatography.'),
    formula: 'RF = (S − b) / C',
    variables: [
      v('RF', 'RF', 'Yanıt faktörü', 'Response factor', 'none', linear(-BIG, BIG)),
      v('S', 'S', 'Sinyal', 'Signal', 'none', linear(-BIG, BIG)),
      v('b', 'b', 'Kesişim (kör)', 'Intercept (blank)', 'none', linear(-BIG, BIG)),
      v('C', 'C', 'Derişim', 'Concentration', 'none'),
    ],
    equation: (x) => x.RF - (x.S - x.b) / x.C,
    solve: { RF: (x) => (x.S - x.b) / x.C, C: (x) => (x.S - x.b) / x.RF, S: (x) => x.RF * x.C + x.b },
    defaultUnknown: 'C',
    sources: ['[C] 4.1'],
    examples: [{ values: { S: 1250, b: 50, RF: 240 }, unknown: 'C', expected: 5 }],
    keywords: ['yanıt faktörü', 'response factor'],
  }),
  formula({
    id: 'lod-loq',
    module: 'calib',
    name: l('Gözlenebilme / tayin sınırı (LOD, LOQ)', 'Limit of detection / quantitation (LOD, LOQ)'),
    purpose: l(
      'Kör (ya da düşük derişimli) ölçümlerin standart sapması ve kalibrasyon eğiminden derişim cinsinden sınırları hesaplar. LOD için k = 3,3 (veya 3), LOQ için k = 10.',
      'Concentration limits from the standard deviation of blank (or low-level) measurements and the calibration slope. Use k = 3.3 (or 3) for LOD, k = 10 for LOQ.',
    ),
    formula: 'x_L = k · s / m',
    variables: [
      v('xL', 'x_L', 'Sınır derişimi', 'Limit (concentration)', 'none'),
      v('k', 'k', 'Faktör (3,3 → LOD, 10 → LOQ)', 'Factor (3.3 → LOD, 10 → LOQ)', 'none', { defaultValue: 3.3 }),
      v('s', 's', 'Körün standart sapması', 'Std. deviation of blank', 'none'),
      v('m', 'm', 'Kalibrasyon eğimi (duyarlılık)', 'Calibration slope (sensitivity)', 'none'),
    ],
    equation: (x) => x.xL - (x.k * x.s) / x.m,
    solve: { xL: (x) => (x.k * x.s) / x.m, s: (x) => (x.xL * x.m) / x.k, m: (x) => (x.k * x.s) / x.xL, k: (x) => (x.xL * x.m) / x.s },
    defaultUnknown: 'xL',
    sources: ['[C] 3.29–3.30', '[H] 4.7', '[P] 4.1', '[D] 7.44–7.48'],
    examples: [{ values: { k: 3.3, s: 0.0021, m: 0.0436 }, unknown: 'xL', expected: 0.15894 }],
    keywords: ['LOD', 'LOQ', 'gözlenebilme', 'tayin sınırı', 'detection limit'],
  }),
  formula({
    id: 'iupac-detection-signal',
    module: 'calib',
    name: l('IUPAC gözlenebilme sinyali', 'IUPAC detection-limit signal'),
    purpose: l(
      'Analitin güvenle "var" denebilecek en küçük sinyalini kör ortalaması ve standart sapmasından verir (z = 3 yaklaşık %99,87 güven).',
      'Smallest signal that can be reported as "detected", from the blank mean and standard deviation (z = 3 ≈ 99.87% confidence).',
    ),
    formula: 'S_DL = S_mb + z · σ_mb',
    variables: [
      v('SDL', 'S_DL', 'Gözlenebilme sinyali', 'Detection-limit signal', 'none', linear(-BIG, BIG)),
      v('Smb', 'S_mb', 'Kör sinyali ortalaması', 'Mean blank signal', 'none', linear(-BIG, BIG)),
      v('z', 'z', 'z faktörü', 'z factor', 'none', { defaultValue: 3 }),
      v('smb', 'σ_mb', 'Körün standart sapması', 'Std. deviation of blank', 'none'),
    ],
    equation: (x) => x.SDL - x.Smb - x.z * x.smb,
    solve: { SDL: (x) => x.Smb + x.z * x.smb, Smb: (x) => x.SDL - x.z * x.smb, smb: (x) => (x.SDL - x.Smb) / x.z },
    defaultUnknown: 'SDL',
    sources: ['[H] 4.7'],
    examples: [{ values: { Smb: 0.05, z: 3, smb: 0.01 }, unknown: 'SDL', expected: 0.08 }],
    keywords: ['IUPAC', 'gözlenebilme', 'detection'],
  }),
  formula({
    id: 'signal-to-noise',
    module: 'calib',
    name: l('Sinyal/gürültü oranı', 'Signal-to-noise ratio'),
    purpose: l('Ortalama sinyalin gürültünün standart sapmasına oranıdır; S/N ≈ 3 genellikle gözlenebilme sınırı kabul edilir.', 'Mean signal divided by the standard deviation of the noise; S/N ≈ 3 is usually taken as the detection limit.'),
    formula: 'S/N = x̄ / s_N',
    variables: [
      v('SN', 'S/N', 'Sinyal/gürültü', 'Signal-to-noise', 'none'),
      v('xbar', 'x̄', 'Ortalama sinyal', 'Mean signal', 'none'),
      v('sN', 's_N', 'Gürültünün standart sapması', 'Std. deviation of noise', 'none'),
    ],
    equation: (x) => x.SN - x.xbar / x.sN,
    solve: { SN: (x) => x.xbar / x.sN, xbar: (x) => x.SN * x.sN, sN: (x) => x.xbar / x.SN },
    defaultUnknown: 'SN',
    sources: ['[D] 7.1–7.6'],
    examples: [{ values: { xbar: 0.6, sN: 0.02 }, unknown: 'SN', expected: 30 }],
    keywords: ['gürültü', 'noise', 'S/N'],
  }),
  formula({
    id: 'selectivity-coefficient',
    module: 'calib',
    name: l('Seçicilik katsayısı', 'Selectivity coefficient'),
    purpose: l(
      'Girişim yapan türün (I) duyarlılığının analitin (A) duyarlılığına oranıdır; küçük değer yöntemin analite seçici olduğunu gösterir.',
      'Ratio of the sensitivity for an interferent (I) to that for the analyte (A); small values mean the method is selective for the analyte.',
    ),
    formula: 'K_A,I = k_I / k_A',
    variables: [
      v('K', 'K_A,I', 'Seçicilik katsayısı', 'Selectivity coefficient', 'none'),
      v('kI', 'k_I', 'Girişim yapan türün duyarlılığı', 'Sensitivity for interferent', 'none'),
      v('kA', 'k_A', 'Analitin duyarlılığı', 'Sensitivity for analyte', 'none'),
    ],
    equation: (x) => x.K - x.kI / x.kA,
    solve: { K: (x) => x.kI / x.kA, kI: (x) => x.K * x.kA, kA: (x) => x.kI / x.K },
    defaultUnknown: 'K',
    sources: ['[H] 3.4', '[D] 7.21–7.24'],
    examples: [{ values: { kI: 0.05, kA: 2.5 }, unknown: 'K', expected: 0.02 }],
    keywords: ['seçicilik', 'selectivity', 'girişim', 'interference'],
  }),
  formula({
    id: 'sandell',
    module: 'calib',
    name: l('Sandell duyarlılığı', 'Sandell sensitivity'),
    purpose: l(
      '1 cm²\'lik kesitte 0,001 absorbans veren analit kütlesidir (µg/cm²); spektrofotometrik yöntemlerin duyarlılığını karşılaştırır.',
      'Mass of analyte per cm² giving an absorbance of 0.001 (µg/cm²); compares the sensitivity of spectrophotometric methods.',
    ),
    formula: 'S = M / ε',
    variables: [
      v('S', 'S', 'Sandell duyarlılığı', 'Sandell sensitivity', 'massPerArea'),
      v('M', 'M', 'Molar kütle', 'Molar mass', 'molarMass'),
      v('eps', 'ε', 'Molar absorptivite', 'Molar absorptivity', 'molarAbs'),
    ],
    equation: (x) => x.S - x.M / x.eps,
    solve: { S: (x) => x.M / x.eps, M: (x) => x.S * x.eps, eps: (x) => x.M / x.S },
    defaultUnknown: 'S',
    sources: ['[K] 24', '[C] 16'],
    examples: [{ values: { M: 55.845, eps: 11100 }, unknown: 'S', expected: 0.005031 }],
    keywords: ['Sandell', 'duyarlılık', 'sensitivity'],
  }),
];

export const TOOLS_FORMULAS: FormulaDef[] = [
  formula({
    id: 'buoyancy',
    module: 'tools',
    name: l('Havada tartım düzeltmesi', 'Buoyancy correction'),
    purpose: l(
      'Havanın kaldırma kuvveti nedeniyle terazide okunan kütleyi gerçek (vakum) kütleye düzeltir; yoğunluğu düşük maddelerde ve hassas tartımlarda önemlidir.',
      'Corrects a balance reading for air buoyancy to the true (vacuum) mass; important for low-density objects and accurate weighings.',
    ),
    formula: 'W_vac = W_air + W_air · (d_air/d_obj − d_air/d_w)',
    variables: [
      v('Wvac', 'W_vac', 'Gerçek (vakum) kütle', 'True (vacuum) mass', 'mass'),
      v('Wair', 'W_air', 'Havada okunan kütle', 'Mass read in air', 'mass'),
      v('dobj', 'd_obj', 'Cismin yoğunluğu', 'Density of object', 'density'),
      v('dair', 'd_air', 'Havanın yoğunluğu', 'Density of air', 'density', { defaultValue: 0.0012 }),
      v('dw', 'd_w', 'Ağırlıkların yoğunluğu', 'Density of weights', 'density', { defaultValue: 8.0 }),
    ],
    equation: (x) => x.Wvac - x.Wair * (1 + x.dair / x.dobj - x.dair / x.dw),
    solve: {
      Wvac: (x) => x.Wair * (1 + x.dair / x.dobj - x.dair / x.dw),
      Wair: (x) => x.Wvac / (1 + x.dair / x.dobj - x.dair / x.dw),
    },
    defaultUnknown: 'Wvac',
    sources: ['[C] 2.1', '[H] 16.9'],
    examples: [{ values: { Wair: 10, dobj: 1.0, dair: 0.0012, dw: 8.0 }, unknown: 'Wvac', expected: 10.0105 }],
    keywords: ['tartım', 'weighing', 'kaldırma', 'buoyancy', 'terazi'],
  }),
];

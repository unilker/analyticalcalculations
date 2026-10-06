import type { CustomToolDef, ModuleDef, ModuleId, ToolDef } from '../core/types';
import { palette } from '../theme/colors';
import { ACIDBASE_FORMULAS } from './formulas/acidbase';
import { CONC_FORMULAS } from './formulas/conc';
import { ELECTRO_FORMULAS } from './formulas/electro';
import { EQUILIBRIUM_FORMULAS, TITRATION_FORMULAS } from './formulas/equilibrium';
import { GRAV_FORMULAS } from './formulas/grav';
import { l } from './formulas/helpers';
import { CHROMA_FORMULAS, EXTRACTION_FORMULAS } from './formulas/separations';
import { SPECTRO_FORMULAS } from './formulas/spectro';
import { CALIB_FORMULAS, STATS_FORMULAS, TOOLS_FORMULAS } from './formulas/statsCalib';
import { VOLUMETRIC_FORMULAS } from './formulas/volumetric';

export const MODULES: ModuleDef[] = [
  {
    id: 'conc',
    name: l('Derişim ve Çözeltiler', 'Concentration & Solutions'),
    description: l('Molarite, yüzde, ppm, seyreltme, çözelti hazırlama', 'Molarity, percent, ppm, dilution, solution preparation'),
    color: palette.navy,
    glyph: 'M',
  },
  {
    id: 'volumetric',
    name: l('Hacimsel Analiz', 'Volumetric Analysis'),
    description: l('Titrasyon stokiyometrisi, ayarlama, geri titrasyon, Kjeldahl', 'Titration stoichiometry, standardization, back titration, Kjeldahl'),
    color: palette.red,
    glyph: 'V',
  },
  {
    id: 'stats',
    name: l('İstatistik', 'Statistics'),
    description: l('Ortalama, s, güven aralığı, t/F testleri, aykırı değer, ANOVA', 'Mean, s, confidence interval, t/F tests, outliers, ANOVA'),
    color: palette.blue,
    glyph: 'σ',
  },
  {
    id: 'calib',
    name: l('Kalibrasyon', 'Calibration'),
    description: l('Doğrusal regresyon, standart ekleme, iç standart, LOD/LOQ', 'Linear regression, standard addition, internal standard, LOD/LOQ'),
    color: palette.amber,
    glyph: 'R²',
  },
  {
    id: 'equilibrium',
    name: l('Denge ve Aktivite', 'Equilibrium & Activity'),
    description: l('ΔG°–K, K birleştirme, iyonik şiddet, Debye–Hückel, aktivite', 'ΔG°–K, combining K, ionic strength, Debye–Hückel, activity'),
    color: palette.indigo,
    glyph: '⇌',
  },
  {
    id: 'acidbase',
    name: l('Asit–Baz', 'Acid–Base'),
    description: l('pH, tamponlar, α-fraksiyonları, amfiprotik türler', 'pH, buffers, α fractions, amphiprotic species'),
    color: palette.crimson,
    glyph: 'pH',
  },
  {
    id: 'titration',
    name: l('Titrasyon Eğrileri', 'Titration Curves'),
    description: l('Asit–baz, EDTA, çöktürme ve redoks eğrileri, dönüm noktası, indikatörler', 'Acid–base, EDTA, precipitation and redox curves, end points, indicators'),
    color: palette.vermilion,
    glyph: 'pM',
  },
  {
    id: 'grav',
    name: l('Gravimetri ve Çözünürlük', 'Gravimetry & Solubility'),
    description: l('Gravimetrik faktör, Ksp, ortak iyon, pH etkisi', 'Gravimetric factor, Ksp, common ion, effect of pH'),
    color: palette.deepNavy,
    glyph: 'Ksp',
  },
  {
    id: 'electro',
    name: l('Elektrokimya', 'Electrochemistry'),
    description: l('Nernst, potansiyometri, ISE, kulometri, voltametri, iletkenlik', 'Nernst, potentiometry, ISE, coulometry, voltammetry, conductivity'),
    color: palette.teal,
    glyph: 'E°',
  },
  {
    id: 'spectro',
    name: l('Spektroskopi', 'Spectroscopy'),
    description: l('Beer–Lambert, %T, iki bileşenli karışım, foton enerjisi', 'Beer–Lambert, %T, two-component mixtures, photon energy'),
    color: palette.orange,
    glyph: 'λ',
  },
  {
    id: 'extraction',
    name: l('Ekstraksiyon ve İyon Değiştirme', 'Extraction & Ion Exchange'),
    description: l('K_D, D, % ekstraksiyon, ardışık ekstraksiyon, şelatlar, karşı akım', 'K_D, D, % extracted, repeated extraction, chelates, countercurrent'),
    color: palette.green,
    glyph: 'K_D',
  },
  {
    id: 'chroma',
    name: l('Kromatografi ve Elektroforez', 'Chromatography & Electrophoresis'),
    description: l('k, α, N, H, R_s, Purnell, van Deemter, Kovats, KE', 'k, α, N, H, R_s, Purnell, van Deemter, Kovats, CE'),
    color: palette.purple,
    glyph: 'R_s',
  },
  {
    id: 'tools',
    name: l('Araçlar ve Tablolar', 'Tools & Tables'),
    description: l('Molar kütle, Ka, Ksp, atom kütleleri, kritik değerler', 'Molar mass, Ka, Ksp, atomic weights, critical values'),
    color: palette.graphite,
    glyph: '⚙',
  },
];

const custom = (def: Omit<CustomToolDef, 'kind'>): CustomToolDef => ({ kind: 'custom', ...def });

export const CUSTOM_TOOLS: CustomToolDef[] = [
  // Tools & tables
  custom({
    id: 'molar-mass',
    module: 'tools',
    name: l('Molar kütle hesaplayıcı', 'Molar mass calculator'),
    purpose: l('Kimyasal formülden molar kütleyi ve kütlece bileşimi hesaplar (ör. CuSO4·5H2O, K4[Fe(CN)6]).', 'Molar mass and percent composition from a chemical formula (e.g. CuSO4·5H2O, K4[Fe(CN)6]).'),
    formula: 'M = Σ nᵢ · Aᵢ',
    sources: ['[H] 16.18'],
    keywords: ['molar kütle', 'molar mass', 'formül', 'formula', 'bileşim', 'composition'],
  }),
  custom({
    id: 'table-ka',
    module: 'tools',
    name: l('Asit ayrışma sabitleri (Ka, pKa)', 'Acid dissociation constants (Ka, pKa)'),
    purpose: l('25 °C\'de yaygın asitlerin ve bazların eşlenik asitlerinin Ka ve pKa değerleri.', 'Ka and pKa of common acids and conjugate acids of bases at 25 °C.'),
    sources: ['[C] Ek C, Tablo C.1, C.2b'],
    keywords: ['Ka', 'pKa', 'tablo', 'table', 'asit', 'acid'],
  }),
  custom({
    id: 'table-ksp',
    module: 'tools',
    name: l('Çözünürlük çarpımları (Ksp)', 'Solubility products (Ksp)'),
    purpose: l('25 °C\'de az çözünen tuzların Ksp değerleri ve saf sudaki molar çözünürlükleri.', 'Ksp values of sparingly soluble salts at 25 °C with their molar solubility in pure water.'),
    sources: ['[C] Ek C, Tablo C.3'],
    keywords: ['Ksp', 'tablo', 'table', 'çözünürlük', 'solubility'],
  }),
  custom({
    id: 'table-elements',
    module: 'tools',
    name: l('Atom kütleleri', 'Atomic weights'),
    purpose: l('Elementlerin standart atom kütleleri (IUPAC).', 'Standard atomic weights of the elements (IUPAC).'),
    sources: ['[H] 16.18'],
    keywords: ['atom kütlesi', 'atomic weight', 'element', 'periyodik', 'periodic'],
  }),
  custom({
    id: 'table-constants',
    module: 'tools',
    name: l('Fiziksel sabitler', 'Physical constants'),
    purpose: l('Hesaplarda kullanılan temel fiziksel sabitler (SI).', 'Fundamental physical constants used in calculations (SI).'),
    sources: ['[P] Ek'],
    keywords: ['sabit', 'constant', 'Avogadro', 'Faraday', 'Planck'],
  }),
  custom({
    id: 'table-critical',
    module: 'tools',
    name: l('Kritik değerler (t, F, Q, G)', 'Critical values (t, F, Q, G)'),
    purpose: l(
      'Serbestlik derecesi ve güven düzeyine göre t, F, Dixon Q ve Grubbs G kritik değerleri. t, F ve G hesapla üretilir.',
      'Critical values of t, F, Dixon Q and Grubbs G for any degrees of freedom and confidence level. t, F and G are computed.',
    ),
    sources: ['[H] 16.4–16.7', '[P] Ek'],
    keywords: ['kritik', 'critical', 't tablosu', 'F tablosu', 'Q', 'Grubbs'],
  }),
  // Statistics
  custom({
    id: 'descriptive',
    module: 'stats',
    name: l('Tanımlayıcı istatistik ve güven aralığı', 'Descriptive statistics & confidence interval'),
    purpose: l(
      'Ölçüm listesinden ortalama, medyan, aralık, standart sapma, varyans, RSD, ortalamanın standart sapması ve %90/%95/%99 güven aralıklarını hesaplar.',
      'Mean, median, range, standard deviation, variance, RSD, standard deviation of the mean and 90/95/99% confidence intervals from a list of measurements.',
    ),
    formula: 's = √[Σ(xᵢ − x̄)² / (n − 1)];  μ = x̄ ± t·s/√n',
    sources: ['[C] 3.1–3.4, 3.9', '[T] 1.2–1.10', '[H] 4.1, 4.6', '[P] 6.1–6.10'],
    keywords: ['ortalama', 'mean', 'standart sapma', 'standard deviation', 'RSD', 'güven aralığı', 'confidence interval'],
  }),
  custom({
    id: 't-test-known',
    module: 'stats',
    name: l('t-testi: ortalama ile bilinen değer', 't-test: mean vs. known value'),
    purpose: l(
      'Bir yöntemin sonuçlarının sertifikalı referans değerinden anlamlı farklı olup olmadığını (sistematik hata) test eder.',
      'Tests whether results differ significantly from a certified reference value (systematic error).',
    ),
    formula: 't = |x̄ − μ| · √n / s',
    sources: ['[C] 3.13', '[H] 4.6'],
    keywords: ['t-testi', 't-test', 'referans', 'SRM', 'doğruluk'],
  }),
  custom({
    id: 't-test-two',
    module: 'stats',
    name: l('t-testi: iki ortalama', 't-test: two means'),
    purpose: l(
      'İki numune ya da iki yöntemin ortalamalarının anlamlı farklı olup olmadığını test eder. Önce F-testi yapılır; varyanslar eşitse havuzlanmış s, değilse Welch yaklaşımı kullanılır.',
      'Tests whether the means of two samples or two methods differ. An F-test is done first; pooled s if variances are equal, otherwise the Welch approach.',
    ),
    formula: 't = |x̄₁ − x̄₂| / s_p · √[n₁n₂ / (n₁ + n₂)]',
    sources: ['[C] 3.11, 3.14', '[H] 4.6'],
    keywords: ['t-testi', 't-test', 'karşılaştırma', 'comparison', 'havuzlanmış', 'pooled'],
  }),
  custom({
    id: 't-test-paired',
    module: 'stats',
    name: l('Eşleştirilmiş t-testi', 'Paired t-test'),
    purpose: l(
      'Aynı numune setinin iki yöntemle analiz edildiği durumda yöntemler arasında sistematik fark olup olmadığını test eder.',
      'Tests for a systematic difference between two methods applied to the same set of samples.',
    ),
    formula: 't = |d̄| · √n / s_d',
    sources: ['[C] 3.15–3.16', '[H] 4.6'],
    keywords: ['eşleştirilmiş', 'paired', 't-testi'],
  }),
  custom({
    id: 'f-test',
    module: 'stats',
    name: l('F-testi', 'F-test'),
    purpose: l('İki veri setinin kesinliklerinin (varyanslarının) anlamlı farklı olup olmadığını test eder.', 'Tests whether the precisions (variances) of two data sets differ significantly.'),
    formula: 'F = s₁² / s₂²  (s₁ > s₂)',
    sources: ['[C] 3.10', '[H] 4.6', '[D] 4.37'],
    keywords: ['F-testi', 'F-test', 'varyans', 'variance', 'kesinlik', 'precision'],
  }),
  custom({
    id: 'q-test',
    module: 'stats',
    name: l('Dixon Q-testi', 'Dixon Q-test'),
    purpose: l('Küçük veri setlerinde (n = 3–10) şüpheli uç değerin atılıp atılamayacağına karar verir.', 'Decides whether a suspected outlier can be rejected in small data sets (n = 3–10).'),
    formula: 'Q = |x_şüpheli − x_en yakın| / (x_max − x_min)',
    sources: ['[K] 2.9', '[T] 1.13', '[H] 4.6, 16.6'],
    keywords: ['Q-testi', 'Q-test', 'aykırı', 'outlier', 'Dixon'],
  }),
  custom({
    id: 'grubbs',
    module: 'stats',
    name: l('Grubbs testi', 'Grubbs test'),
    purpose: l('ISO\'nun önerdiği aykırı değer testi; ortalamadan en uzak değeri standart sapma cinsinden değerlendirir.', 'Outlier test recommended by ISO; evaluates the value farthest from the mean in units of standard deviation.'),
    formula: 'G = |x_şüpheli − x̄| / s',
    sources: ['[H] 4.6, 16.7', '[D] 4.36'],
    keywords: ['Grubbs', 'aykırı', 'outlier'],
  }),
  custom({
    id: 'anova',
    module: 'stats',
    name: l('Tek yönlü ANOVA', 'One-way ANOVA'),
    purpose: l(
      'Üç veya daha fazla grubun (laboratuvar, analist, yöntem) ortalamaları arasında anlamlı fark olup olmadığını test eder.',
      'Tests whether the means of three or more groups (laboratories, analysts, methods) differ significantly.',
    ),
    formula: 'F = MS_gruplar arası / MS_grup içi',
    sources: ['[H] 14.4', '[D] 5.1', '[C] 3'],
    keywords: ['ANOVA', 'varyans analizi', 'analysis of variance'],
  }),
  custom({
    id: 'propagation',
    module: 'stats',
    name: l('Belirsizlik yayılımı', 'Propagation of uncertainty'),
    purpose: l(
      'Ölçülen büyüklüklerin belirsizliklerinin toplama/çıkarma, çarpma/bölme, üs, logaritma ve antilogaritma işlemlerinde sonuca nasıl taşındığını hesaplar.',
      'How uncertainties of measured quantities carry through addition/subtraction, multiplication/division, powers, logarithms and antilogarithms.',
    ),
    formula: 's_R = √Σsᵢ²  |  s_R/R = √Σ(sᵢ/xᵢ)²  |  s_R = 0,4343·s_A/A',
    sources: ['[C] 3.5–3.8', '[H] 4.3', '[P] 6.11–6.15'],
    keywords: ['belirsizlik', 'uncertainty', 'hata yayılımı', 'propagation of error'],
  }),
  custom({
    id: 'normal-probability',
    module: 'stats',
    name: l('Normal dağılım olasılığı', 'Normal distribution probability'),
    purpose: l('Normal dağılan bir büyüklüğün iki değer arasında bulunma olasılığını hesaplar.', 'Probability that a normally distributed quantity lies between two values.'),
    formula: 'P(x₁ < x < x₂) = Φ(z₂) − Φ(z₁)',
    sources: ['[H] 4.4'],
    keywords: ['normal', 'Gauss', 'olasılık', 'probability'],
  }),
  // Calibration
  custom({
    id: 'linear-regression',
    module: 'calib',
    name: l('Doğrusal regresyon ve bilinmeyen tayini', 'Linear regression & unknown'),
    purpose: l(
      'Kalibrasyon verisinden en küçük kareler doğrusunu (eğim, kesişim, belirsizlikleri, r, R²) bulur ve bilinmeyen numunenin derişimini güven aralığıyla hesaplar. Üçüncü sütun (sᵢ) girilirse ağırlıklı regresyon yapılır.',
      'Least-squares line (slope, intercept, their uncertainties, r, R²) from calibration data, and the concentration of an unknown with its confidence interval. Entering a third column (sᵢ) gives a weighted fit.',
    ),
    formula: 'y = b₀ + b₁·x;  s_x = (s_r/b₁)·√[1/k + 1/n + (ȳ_u − ȳ)²/(b₁²·Σ(xᵢ − x̄)²)]',
    sources: ['[C] 3.19–3.28', '[H] 5.4', '[T] 1.15–1.23', '[D] 6.2'],
    keywords: ['regresyon', 'regression', 'kalibrasyon', 'calibration', 'en küçük kareler', 'least squares'],
  }),
  custom({
    id: 'std-addition-multi',
    module: 'calib',
    name: l('Çok noktalı standart ekleme', 'Multiple standard additions'),
    purpose: l(
      'Eklenen standart derişimine karşı sinyal doğrusunun x-kesişiminden numunedeki analit derişimini ve belirsizliğini bulur.',
      'Analyte concentration and its uncertainty from the x-intercept of signal versus added standard concentration.',
    ),
    formula: 'Cₓ = b₀ / b₁  (|x-kesişimi|)',
    sources: ['[H] 5.3', '[C] 17.5'],
    keywords: ['standart ekleme', 'standard addition'],
  }),
  // Acid–base
  custom({
    id: 'ph-converter',
    module: 'acidbase',
    name: l('pH ↔ pOH ↔ [H⁺] ↔ [OH⁻]', 'pH ↔ pOH ↔ [H⁺] ↔ [OH⁻]'),
    purpose: l('Dört büyüklükten birini girin, diğer üçü hesaplansın (25 °C, pKw = 14,00).', 'Enter any one of the four quantities to get the other three (25 °C, pKw = 14.00).'),
    formula: 'pH = −log[H⁺];  pH + pOH = 14,00',
    sources: ['[C] 7.15–7.19'],
    keywords: ['pH', 'pOH', 'dönüştürücü', 'converter'],
  }),
  custom({
    id: 'alpha-fractions',
    module: 'acidbase',
    name: l('α-Fraksiyonları ve dağılım diyagramı', 'α fractions & distribution diagram'),
    purpose: l(
      'Poliprotik bir asidin (en çok 4 pKa) türlerinin pH\'a göre kesirlerini hesaplar ve grafiğini çizer; log C–pH diyagramı da gösterilebilir.',
      'Fractions of each species of a polyprotic acid (up to 4 pKa values) versus pH, with a plot; a log C–pH diagram can also be shown.',
    ),
    formula: 'αᵢ = Ka₁…Kaᵢ·[H⁺]ⁿ⁻ⁱ / Σ',
    sources: ['[C] 7.65–7.84', '[T] 6.2–6.13', '[H] 6.6'],
    keywords: ['alfa', 'alpha', 'tür dağılımı', 'speciation', 'poliprotik', 'polyprotic', 'log C'],
  }),
  // Spectroscopy
  custom({
    id: 'two-component',
    module: 'spectro',
    name: l('İki bileşenli karışım', 'Two-component mixture'),
    purpose: l(
      'Spektrumları örtüşen iki analitin derişimini, iki dalga boyunda ölçülen absorbanslardan ve saf maddelerin molar absorptivitelerinden aynı anda hesaplar.',
      'Simultaneous concentrations of two analytes with overlapping spectra from absorbances at two wavelengths and the molar absorptivities of the pure species.',
    ),
    formula: 'A_λ₁ = ε_X,λ₁·b·c_X + ε_Y,λ₁·b·c_Y;  A_λ₂ = ε_X,λ₂·b·c_X + ε_Y,λ₂·b·c_Y',
    sources: ['[C] 16.14–16.17', '[K] 24.1–24.4', '[H] 10.3'],
    keywords: ['karışım', 'mixture', 'çok bileşenli', 'multicomponent', 'Beer'],
  }),

  // v2: equilibrium
  custom({
    id: 'ionic-strength',
    module: 'equilibrium',
    name: l('İyonik şiddet ve aktivite katsayıları', 'Ionic strength & activity coefficients'),
    purpose: l(
      'Çözeltideki iyonların derişim ve yüklerinden iyonik şiddeti, ardından her iyonun aktivite katsayısını (sınır yasası, genişletilmiş Debye–Hückel ve Davies) hesaplar.',
      'Ionic strength from the concentrations and charges of all ions, then the activity coefficient of each ion (limiting law, extended Debye–Hückel and Davies).',
    ),
    formula: 'µ = ½ Σ cᵢ·zᵢ²',
    sources: ['[C] 6.18–6.21', '[T] 5.2–5.7', '[H] 6.9'],
    keywords: ['iyonik şiddet', 'ionic strength', 'aktivite katsayısı', 'activity coefficient', 'Debye'],
  }),
  // v2: titration curves
  custom({
    id: 'curve-acid-base',
    module: 'titration',
    name: l('Asit–baz titrasyon eğrisi', 'Acid–base titration curve'),
    purpose: l(
      'Kuvvetli/zayıf ve poliprotik (en çok 3 pKa) asit ya da bazların titrasyon eğrisini yük denkliğinden tam olarak hesaplar; eşdeğerlik noktalarını ve uygun indikatörleri gösterir.',
      'Exact titration curve of strong/weak and polyprotic (up to 3 pKa) acids or bases from the charge balance; shows the equivalence points and suitable indicators.',
    ),
    formula: '[H⁺] − Kw/[H⁺] + C_Na − C_A·Σi·αᵢ = 0',
    sources: ['[C] 8.1–8.26', '[H] 9.2', '[K] 5.4'],
    keywords: ['titrasyon eğrisi', 'titration curve', 'asit', 'baz', 'pH', 'eşdeğerlik', 'indikatör'],
  }),
  custom({
    id: 'curve-edta',
    module: 'titration',
    name: l('EDTA (kompleksometrik) titrasyon eğrisi', 'EDTA (complexometric) titration curve'),
    purpose: l(
      'Metal iyonunun EDTA ile titrasyonunda pM\'nin hacimle değişimini koşullu oluşum sabitinden (pH ve yardımcı ligand dahil) hesaplar.',
      'pM versus volume for the titration of a metal ion with EDTA, from the conditional formation constant (including pH and auxiliary ligand).',
    ),
    formula: 'K″f·[M′]·[Y′] = [MY]',
    sources: ['[C] 9.3, 9.14–9.15', '[H] 9.3', '[K] 8.2'],
    keywords: ['EDTA', 'kompleksometri', 'complexometric', 'pM', 'titrasyon eğrisi'],
  }),
  custom({
    id: 'curve-precipitation',
    module: 'titration',
    name: l('Çöktürme titrasyon eğrisi (Ag⁺)', 'Precipitation titration curve (Ag⁺)'),
    purpose: l(
      'Halojenür ya da tiyosiyanatın Ag⁺ ile titrasyonunda pAg ve pX değişimini hesaplar; Mohr yöntemi için gereken kromat derişimini gösterir.',
      'pAg and pX during the titration of halide or thiocyanate with Ag⁺; shows the chromate concentration needed for the Mohr method.',
    ),
    formula: '[Ag⁺] − Ksp/[Ag⁺] = (C_Ag·V − Cₓ·Vₓ)/(Vₓ + V)',
    sources: ['[C] 11.12–11.19', '[H] 9.5', '[K] 7.1'],
    keywords: ['çöktürme', 'precipitation', 'Mohr', 'Volhard', 'Fajans', 'pAg', 'gümüş'],
  }),
  custom({
    id: 'curve-redox',
    module: 'titration',
    name: l('Redoks titrasyon eğrisi', 'Redox titration curve'),
    purpose: l(
      'İndirgen bir analitin yükseltgen titrantla titrasyonunda potansiyelin hacimle değişimini elektron denkliğinden hesaplar; eşdeğerlik potansiyelini ve uygun redoks indikatörlerini gösterir.',
      'Potential versus volume for the titration of a reducing analyte with an oxidizing titrant, from the electron balance; shows the equivalence potential and suitable redox indicators.',
    ),
    formula: 'n₁·C₁V₁·f_ox(E) = n₂·C₂V·f_red(E)',
    sources: ['[C] 14.3', '[H] 9.4', '[K] 6.1'],
    keywords: ['redoks', 'redox', 'titrasyon eğrisi', 'potansiyel', 'seryum', 'permanganat'],
  }),
  custom({
    id: 'derivative-endpoint',
    module: 'titration',
    name: l('Dönüm noktası (türev yöntemi)', 'End point (derivative method)'),
    purpose: l(
      'Potansiyometrik titrasyon verisinden (hacim–pH ya da hacim–E) birinci ve ikinci türevi hesaplayıp dönüm noktasını bulur.',
      'Finds the end point from potentiometric titration data (volume–pH or volume–E) using the first and second derivatives.',
    ),
    formula: 'max |ΔpH/ΔV|;  Δ²pH/ΔV² = 0',
    sources: ['[C] 8.11', '[H] 9.2'],
    keywords: ['türev', 'derivative', 'dönüm noktası', 'end point', 'potansiyometrik titrasyon'],
  }),
  custom({
    id: 'table-indicators',
    module: 'titration',
    name: l('İndikatörler', 'Indicators'),
    purpose: l('Yaygın asit–baz indikatörlerinin pH geçiş aralıkları ve redoks indikatörlerinin potansiyel aralıkları.', 'pH transition ranges of common acid–base indicators and potential ranges of redox indicators.'),
    sources: ['[H] Tablo 9.2.3', '[C] Tablo 14.1'],
    keywords: ['indikatör', 'indicator', 'fenolftalein', 'ferroin', 'tablo'],
  }),
  custom({
    id: 'table-edta-kf',
    module: 'titration',
    name: l('EDTA–metal oluşum sabitleri', 'EDTA–metal formation constants'),
    purpose: l('Metal–EDTA şelatlarının oluşum sabitleri (Kf, log Kf).', 'Formation constants of metal–EDTA chelates (Kf, log Kf).'),
    sources: ['[C] Ek C, Tablo C.4'],
    keywords: ['EDTA', 'Kf', 'oluşum sabiti', 'formation constant', 'tablo'],
  }),
  // v2: electrochemistry
  custom({
    id: 'table-potentials',
    module: 'electro',
    name: l('Standart ve formal indirgenme potansiyelleri', 'Standard and formal reduction potentials'),
    purpose: l('Yarı tepkimelerin SHE\'ye göre standart (E°) ve formal (E°′) indirgenme potansiyelleri.', 'Standard (E°) and formal (E°′) reduction potentials of half-reactions vs. SHE.'),
    sources: ['[C] Ek C, Tablo C.5'],
    keywords: ['potansiyel', 'potential', 'E°', 'yarı tepkime', 'half reaction', 'tablo'],
  }),
  // v2: extraction
  custom({
    id: 'craig',
    module: 'extraction',
    name: l('Karşı akım (Craig) dağılımı', 'Countercurrent (Craig) distribution'),
    purpose: l(
      'n transferden sonra iki çözünenin tüplere dağılımını binom dağılımıyla hesaplayıp grafiğini çizer; kromatografinin tabaka modelinin temelidir.',
      'Distribution of two solutes over the tubes after n transfers (binomial distribution), with a plot; the basis of the plate model of chromatography.',
    ),
    formula: 'f(r) = n! / (r!(n−r)!) · pʳ · qⁿ⁻ʳ',
    sources: ['[H] 16.16', '[C] 19.1'],
    keywords: ['Craig', 'karşı akım', 'countercurrent', 'binom'],
  }),
  // v2: chromatography
  custom({
    id: 'van-deemter',
    module: 'chroma',
    name: l('van Deemter eğrisi ve optimum akış', 'van Deemter curve & optimum flow'),
    purpose: l(
      'A (girdap difüzyonu), B (boyuna difüzyon) ve C (kütle aktarımı) terimlerinden H–u eğrisini çizer; en düşük tabaka yüksekliğini veren optimum hızı hesaplar.',
      'Plots H versus u from the A (eddy diffusion), B (longitudinal diffusion) and C (mass transfer) terms and finds the optimum velocity giving the minimum plate height.',
    ),
    formula: 'H = A + B/u + C·u;  u_opt = √(B/C)',
    sources: ['[C] 19.13–19.19', '[T] 12.9', '[K] 11.9', '[H] 12.3'],
    keywords: ['van Deemter', 'tabaka yüksekliği', 'plate height', 'akış hızı', 'optimum'],
  }),
  custom({
    id: 'peak-resolution',
    module: 'chroma',
    name: l('İki pikin rezolüsyonu (görsel)', 'Resolution of two peaks (visual)'),
    purpose: l('İki Gauss pikini alıkonma süreleri ve genişliklerinden çizer, rezolüsyonu ve örtüşmeyi gösterir.', 'Draws two Gaussian peaks from their retention times and widths and shows the resolution and overlap.'),
    formula: 'R_s = 2(t_R2 − t_R1)/(w₁ + w₂)',
    sources: ['[C] 19.31', '[H] 12.2'],
    keywords: ['rezolüsyon', 'resolution', 'pik', 'peak', 'kromatogram'],
  }),
  // v2: spectroscopy
  custom({
    id: 'job-method',
    module: 'spectro',
    name: l('Job yöntemi (sürekli değişim)', 'Job’s method (continuous variations)'),
    purpose: l(
      'Toplam mol sayısı sabit tutulan metal–ligand karışımlarının absorbanslarından kompleksin stokiyometrisini (L:M oranı) bulur.',
      'Finds the stoichiometry (L:M ratio) of a complex from absorbances of metal–ligand mixtures with constant total moles.',
    ),
    formula: 'x_L(max) / (1 − x_L(max)) = n (L:M)',
    sources: ['[H] 10.3', '[K] 24'],
    keywords: ['Job', 'sürekli değişim', 'continuous variations', 'stokiyometri', 'kompleks'],
  }),
];

export const ALL_TOOLS: ToolDef[] = [
  ...CONC_FORMULAS,
  ...VOLUMETRIC_FORMULAS,
  ...STATS_FORMULAS,
  ...CALIB_FORMULAS,
  ...ACIDBASE_FORMULAS,
  ...GRAV_FORMULAS,
  ...SPECTRO_FORMULAS,
  ...TOOLS_FORMULAS,
  ...EQUILIBRIUM_FORMULAS,
  ...TITRATION_FORMULAS,
  ...ELECTRO_FORMULAS,
  ...EXTRACTION_FORMULAS,
  ...CHROMA_FORMULAS,
  ...CUSTOM_TOOLS,
];

const ORDER: Record<ModuleId, string[]> = {
  conc: [],
  volumetric: [],
  stats: ['descriptive', 't-test-known', 't-test-two', 't-test-paired', 'f-test', 'q-test', 'grubbs', 'anova', 'propagation'],
  calib: ['linear-regression', 'std-addition-multi'],
  acidbase: ['ph-converter'],
  grav: [],
  spectro: [],
  tools: ['molar-mass', 'table-ka', 'table-ksp', 'table-elements', 'table-constants', 'table-critical'],
  equilibrium: ['ionic-strength'],
  titration: ['curve-acid-base', 'curve-edta', 'curve-precipitation', 'curve-redox', 'derivative-endpoint', 'table-indicators', 'table-edta-kf'],
  electro: ['table-potentials'],
  extraction: [],
  chroma: ['van-deemter', 'peak-resolution'],
};

/** Tools of a module; listed custom tools come first in the given order, then the rest. */
export function toolsOf(module: ModuleId): ToolDef[] {
  const list = ALL_TOOLS.filter((t) => t.module === module);
  const first = ORDER[module].map((id) => list.find((t) => t.id === id)).filter((t): t is ToolDef => !!t);
  return [...first, ...list.filter((t) => !ORDER[module].includes(t.id))];
}

export const TOOL_BY_ID: Record<string, ToolDef> = Object.fromEntries(ALL_TOOLS.map((t) => [t.id, t]));
export const MODULE_BY_ID: Record<string, ModuleDef> = Object.fromEntries(MODULES.map((m) => [m.id, m]));

const fold = (s: string) =>
  s
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i');

/** Simple accent- and case-insensitive search over names, purposes, formulas and keywords. */
export function searchTools(query: string): ToolDef[] {
  const terms = fold(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return ALL_TOOLS.filter((t) => {
    const hay = fold([t.name.tr, t.name.en, t.purpose.tr, t.purpose.en, t.formula ?? '', ...(t.keywords ?? [])].join(' '));
    return terms.every((term) => hay.includes(term));
  });
}

export const BOOKS: Record<string, string> = {
  C: 'Christian, Dasgupta & Schug — Analytical Chemistry, 7th ed. (Wiley)',
  H: 'Harvey — Analytical Chemistry 2.1 (LibreTexts, CC BY-NC-SA 4.0)',
  K: 'Khopkar — Basic Concepts of Analytical Chemistry, 3rd ed.',
  T: 'Tissue — Basics of Analytical Chemistry and Chemical Equilibria, 2nd ed. (Wiley)',
  D: 'Danzer — Analytical Chemistry: Theoretical and Metrological Fundamentals (Springer)',
  P: 'Prichard & Barwick — Quality Assurance in Analytical Chemistry (Wiley)',
};

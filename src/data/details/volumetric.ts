import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Volumetric (titrimetric) Analysis module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const VOLUMETRIC_DETAILS: Record<string, ToolDetail> = {
  'titration-stoich': {
    concept: {
      tr: 'Titrimetrik analizde derişimi kesin olarak bilinen bir çözelti (titrant) büretten, analitle tamamen tepkimeye girinceye kadar eklenir. Eşdeğerlik noktası, eklenen titrantın analitle tam stokiyometrik oranda bulunduğu kuramsal noktadır. Deneyde indikatörün renk değiştirdiği ya da elektrot sinyalinin sıçradığı nokta ise dönüm noktasıdır; iyi seçilmiş bir yöntemde ikisi birbirine çok yakındır.\n\nDönüm noktasında harcanan hacimden titrantın miktarı n = C · V ile bulunur. Denkleştirilmiş tepkimedeki mol oranı bu değeri analitin mol sayısına çevirir.',
      en: 'In a titrimetric analysis a solution of accurately known concentration (the titrant) is added from a burette until it has reacted completely with the analyte. The equivalence point is the theoretical point at which the added titrant is in exact stoichiometric proportion to the analyte. The end point is what we actually observe, a colour change of an indicator or a jump in an electrode signal; in a well-designed method the two are very close.\n\nThe volume used at the end point gives the amount of titrant through n = C · V, and the mole ratio of the balanced reaction converts this into moles of analyte.',
    },
    meaning: {
      tr: 'n(A) = C(T) · V(T) · r. C · V titrantın miktarıdır; r = (mol analit) / (mol titrant) ise denkleştirilmiş tepkimenin katsayılarından okunur.\n\nÖrnekler:\n• HCl + NaOH → NaCl + H₂O: r = 1.\n• H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O: r = 1/2.\n• 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O (analit Fe²⁺, titrant MnO₄⁻): r = 5.\n\nBirim kontrolü: mol/L × mL = mmol. Büret mL cinsinden okunduğu için sonuç doğrudan milimol çıkar.',
      en: 'n(A) = C(T) · V(T) · r. C · V is the amount of titrant; r = (mol analyte) / (mol titrant) is read from the coefficients of the balanced reaction.\n\nExamples:\n• HCl + NaOH → NaCl + H₂O: r = 1.\n• H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O: r = 1/2.\n• 5 Fe²⁺ + MnO₄⁻ + 8 H⁺ → 5 Fe³⁺ + Mn²⁺ + 4 H₂O (analyte Fe²⁺, titrant MnO₄⁻): r = 5.\n\nUnit check: mol/L × mL = mmol. Since a burette is read in mL, the result comes out directly in millimoles.',
    },
    usage: {
      tr: [
        'Asit–baz, redoks, kompleksometrik ve çöktürme titrasyonlarında analit miktarını bulmak.',
        'r her zaman denkleştirilmiş tepkimeden alınır: r = analitin katsayısı / titrantın katsayısı.',
        'Tepkime hızlı, tam ve yan tepkimesiz olmalıdır; değilse geri titrasyon düşünülür.',
        'Numunenin yalnızca bir alikotu titre edildiyse sonuç alikot oranıyla büyütülür.',
      ],
      en: [
        'Finding the amount of analyte in acid–base, redox, complexometric and precipitation titrations.',
        'Always take r from the balanced reaction: r = coefficient of analyte / coefficient of titrant.',
        'The reaction must be fast, complete and free of side reactions; otherwise consider a back titration.',
        'If only an aliquot of the sample was titrated, scale the result up by the aliquot ratio.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(NaOH) = 0,100 M, V = 25,00 mL; H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O olduğundan r = 1/2.',
        'n(NaOH) = 0,100 mmol/mL × 25,00 mL = 2,500 mmol.',
        'Sonuç: n(H₂SO₄) = 2,500 mmol × 1/2 = 1,25 mmol.',
      ],
      en: [
        'Given: C(NaOH) = 0.100 M, V = 25.00 mL; since H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O, r = 1/2.',
        'n(NaOH) = 0.100 mmol/mL × 25.00 mL = 2.500 mmol.',
        'Result: n(H₂SO₄) = 2.500 mmol × 1/2 = 1.25 mmol.',
      ],
    },
    mistakes: {
      tr: [
        'r’yi ters almak (mol titrant / mol analit): H₂SO₄ örneğinde 1/2 yerine 2 kullanmak sonucu 4 kat büyütür.',
        'Hacmi mL girip sonucu mol sanmak (mL ile sonuç mmol’dür).',
        'Dönüm noktasını eşdeğerlik noktasıyla özdeş saymak; aradaki fark titrasyon hatasıdır.',
      ],
      en: [
        'Inverting r (mol titrant / mol analyte): using 2 instead of 1/2 in the H₂SO₄ example makes the result 4 times too large.',
        'Entering the volume in mL and reading the result as mol (it is mmol).',
        'Treating the end point as identical to the equivalence point; the difference is the titration error.',
      ],
    },
    related: ['titration-percent', 'standardization', 'normality', 'titration-error'],
  },

  'titration-percent': {
    concept: {
      tr: 'Titrimetrik analizin sonucu çoğunlukla, tartılan numunedeki analitin kütlece yüzdesi olarak raporlanır. Bu araç üç adımı tek eşitlikte birleştirir: titrantın mol sayısı, stokiyometri yardımıyla analitin mol sayısı ve molar kütle yardımıyla analitin kütlesi. Son olarak analit kütlesi numune kütlesine bölünür.',
      en: 'The result of a titrimetric analysis is usually reported as the weight percent of analyte in a weighed sample. This tool combines three steps into one equation: moles of titrant, moles of analyte through the stoichiometry, and mass of analyte through the molar mass. Finally the analyte mass is divided by the sample mass.',
    },
    meaning: {
      tr: '%A = C(T) · V(T) · r · M(A) / m(numune) × 100.\n\nAdım adım:\n• n(T) = C · V (mmol)\n• n(A) = r · n(T)\n• m(A) = n(A) · M(A) (mmol × g/mol = mg)\n• %A = m(A) / m(numune) × 100\n\nBirim kontrolü: mol/L × mL × g/mol = mg. Numune kütlesi de mg olarak alınırsa oran birimsiz olur. Analit kütlesi mg çıkarken numune kütlesini g olarak bölmek 1000 kat hata yapar.',
      en: '%A = C(T) · V(T) · r · M(A) / m(sample) × 100.\n\nStep by step:\n• n(T) = C · V (mmol)\n• n(A) = r · n(T)\n• m(A) = n(A) · M(A) (mmol × g/mol = mg)\n• %A = m(A) / m(sample) × 100\n\nUnit check: mol/L × mL × g/mol = mg. With the sample mass also in mg the ratio is dimensionless. Dividing an analyte mass in mg by a sample mass in g gives an error of a factor of 1000.',
    },
    usage: {
      tr: [
        'Katı numunelerde (ilaç tableti, cevher, gıda) ya da tartılarak alınan sıvılarda analit içeriğini bulmak.',
        'Sıvı numune hacimle alındıysa kütleye çevirmek için yoğunluk gerekir; ya da sonuç % (w/v) olarak verilir.',
        'Numune çözülüp seyreltildikten sonra bir alikot titre edildiyse, m(numune) yerine alikota karşılık gelen kütle yazılır.',
        'Tanık (kör) titrasyonu yapıldıysa V yerine (V − V_tanık) kullanılır.',
      ],
      en: [
        'Finding analyte content in solid samples (tablets, ores, foods) or in liquids taken by mass.',
        'If a liquid sample was measured by volume, its density is needed to convert to mass; otherwise report % (w/v).',
        'If the sample was dissolved, diluted and an aliquot titrated, use the sample mass corresponding to that aliquot.',
        'If a blank titration was run, use (V − V_blank) instead of V.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(NaOH) = 0,100 M, V = 30,00 mL, r = 1 (CH₃COOH + NaOH → CH₃COONa + H₂O), M(CH₃COOH) = 60,05 g/mol, m(numune) = 250 mg.',
        'n(CH₃COOH) = 0,100 mmol/mL × 30,00 mL × 1 = 3,000 mmol.',
        'm(CH₃COOH) = 3,000 mmol × 60,05 g/mol = 180,15 mg.',
        'Sonuç: %A = 180,15 mg / 250 mg × 100 = 72,06.',
      ],
      en: [
        'Given: C(NaOH) = 0.100 M, V = 30.00 mL, r = 1 (CH₃COOH + NaOH → CH₃COONa + H₂O), M(CH₃COOH) = 60.05 g/mol, m(sample) = 250 mg.',
        'n(CH₃COOH) = 0.100 mmol/mL × 30.00 mL × 1 = 3.000 mmol.',
        'm(CH₃COOH) = 3.000 mmol × 60.05 g/mol = 180.15 mg.',
        'Result: %A = 180.15 mg / 250 mg × 100 = 72.06.',
      ],
    },
    mistakes: {
      tr: [
        'Analit kütlesini mg, numune kütlesini g olarak alıp 1000 kat hata yapmak.',
        'Seyreltme ve alikot oranını hesaba katmamak.',
        'Molar kütleyi raporlanması istenen forma göre almamak (ör. sonuç %CaO olarak istenirken CaCO₃’ın molar kütlesini kullanmak).',
      ],
      en: [
        'Taking the analyte mass in mg and the sample mass in g (a factor of 1000).',
        'Ignoring dilution and aliquot ratios.',
        'Using the molar mass of the wrong form (e.g. that of CaCO₃ when the result is required as %CaO).',
      ],
    },
    related: ['titration-stoich', 'percent-ww', 'back-titration', 'grav-percent'],
  },

  standardization: {
    concept: {
      tr: 'Titrantların çoğu doğrudan tartılarak kesin derişimde hazırlanamaz: NaOH nem ve CO₂ çeker, HCl derişik çözeltiden seyreltilerek hazırlanır, KMnO₄ zamanla bozunur. Bu titrantlar yaklaşık derişimde hazırlanır ve gerçek molariteleri bir birincil standarda karşı titre edilerek belirlenir. Bu işleme ayarlama (standardizasyon) denir.\n\nBirincil standart; yüksek saflıkta, havada kararlı, nem çekmeyen, kurutulabilen, tartım hatasını küçültmek için tercihen büyük molar kütleli ve titrantla hızlı, stokiyometrik tepkimeye giren bir maddedir. Örnekler: bazlar için potasyum hidrojen ftalat (KHP), asitler için Na₂CO₃, tiyosülfat için K₂Cr₂O₇ ya da KIO₃, EDTA için CaCO₃.',
      en: 'Most titrants cannot be prepared at an exact concentration simply by weighing: NaOH absorbs water and CO₂, HCl is made by diluting a concentrated solution, and KMnO₄ slowly decomposes. Such titrants are prepared at an approximate concentration and their actual molarity is found by titrating a primary standard. This is called standardisation.\n\nA primary standard is highly pure, stable in air, non-hygroscopic, can be dried, preferably has a large molar mass (to reduce the relative weighing error) and reacts rapidly and stoichiometrically with the titrant. Examples: potassium hydrogen phthalate (KHP) for bases, Na₂CO₃ for acids, K₂Cr₂O₇ or KIO₃ for thiosulfate, CaCO₃ for EDTA.',
    },
    meaning: {
      tr: 'Standardın mol sayısı tartımdan (m / M), titrantın mol sayısı ise C · V’den gelir. Eşdeğerlik noktasında n(T) = r · n(std) olduğundan:\nC(T) · V(T) = r · m(std) / M(std)  ⇒  C(T) = m(std) · r / (M(std) · V(T)).\n\nr = mol titrant / mol standart: KHP + NaOH için r = 1; Na₂CO₃’ın HCl ile CO₂’ye kadar titrasyonunda (Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂) r = 2.\n\nBirim kontrolü: mg ÷ (g/mol) = mmol; mmol ÷ mL = mol/L.\n\nSonuç genellikle en az üç paralel titrasyonun ortalaması olarak verilir; paralellerin bağıl standart sapması ayarlamanın kesinliğini gösterir.',
      en: 'The amount of standard comes from its mass (m / M), the amount of titrant from C · V. At the equivalence point n(T) = r · n(std), so:\nC(T) · V(T) = r · m(std) / M(std)  ⇒  C(T) = m(std) · r / (M(std) · V(T)).\n\nr = mol titrant / mol standard: r = 1 for KHP + NaOH; r = 2 for titrating Na₂CO₃ with HCl to CO₂ (Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂).\n\nUnit check: mg ÷ (g/mol) = mmol; mmol ÷ mL = mol/L.\n\nThe result is normally the mean of at least three replicate titrations; their relative standard deviation shows the precision of the standardisation.',
    },
    usage: {
      tr: [
        'Yaklaşık hazırlanmış bir titrantın kesin molaritesini belirlemek.',
        'Tersinden, belirli bir hacim (ör. 25 mL) harcatacak standart kütlesini planlamak: m = C · V · M / r.',
        'Birincil standart kullanılmadan önce etüvde kurutulmalı ve desikatörde soğutulmalıdır.',
        'NaOH gibi CO₂ çeken titrantların derişimi zamanla değiştiğinden ayarlama belirli aralıklarla tekrarlanmalıdır.',
      ],
      en: [
        'Finding the exact molarity of a titrant prepared at an approximate concentration.',
        'Conversely, planning the mass of standard that will consume a chosen volume (e.g. 25 mL): m = C · V · M / r.',
        'The primary standard should be oven-dried and cooled in a desiccator before use.',
        'Titrants that absorb CO₂, such as NaOH, change concentration with time, so standardisation must be repeated periodically.',
      ],
    },
    solution: {
      tr: [
        'Verilen: m(KHP) = 510,4 mg, M(KHP) = 204,22 g/mol, V(NaOH) = 25,00 mL, r = 1.',
        'n(KHP) = 510,4 mg / 204,22 g/mol = 2,4993 mmol; r = 1 olduğundan n(NaOH) = 2,4993 mmol.',
        'Sonuç: C(NaOH) = 2,4993 mmol / 25,00 mL = 0,09997 M.',
      ],
      en: [
        'Given: m(KHP) = 510.4 mg, M(KHP) = 204.22 g/mol, V(NaOH) = 25.00 mL, r = 1.',
        'n(KHP) = 510.4 mg / 204.22 g/mol = 2.4993 mmol; since r = 1, n(NaOH) = 2.4993 mmol.',
        'Result: C(NaOH) = 2.4993 mmol / 25.00 mL = 0.09997 M.',
      ],
    },
    mistakes: {
      tr: [
        'Kurutulmamış (nem çekmiş) standart kullanmak: gerçek mol sayısı hesaplanandan azdır, daha az titrant harcanır ve titrant derişimi olduğundan yüksek bulunur.',
        'r’yi ters almak: Na₂CO₃ ile HCl ayarlamasında r = 2 mol HCl / mol Na₂CO₃’tır.',
        'Tek bir titrasyonla yetinmek; ayarlama paralel titrasyonlarla yapılmalıdır.',
      ],
      en: [
        'Using an undried (moist) standard: the true amount is less than calculated, less titrant is used and the titrant concentration comes out too high.',
        'Inverting r: for standardising HCl with Na₂CO₃, r = 2 mol HCl / mol Na₂CO₃.',
        'Relying on a single titration; standardisation should be done in replicate.',
      ],
    },
    related: ['titer', 'titration-stoich', 'molarity', 'solution-prep'],
  },

  'back-titration': {
    concept: {
      tr: 'Geri titrasyonda analite, onunla tamamen tepkimeye girmeye yetecek, miktarı bilinen aşırı bir reaktif (R) eklenir. Tepkime tamamlandıktan sonra artan R ikinci bir titrantla (B) titre edilir. Analitle tepkimeye giren R miktarı, eklenen miktar ile artan miktar arasındaki farktır.\n\nYöntem; doğrudan titrasyonda tepkime yavaşsa, numune suda çözünmüyorsa (CaCO₃, ZnO gibi), uygun bir indikatör yoksa ya da analit uçucuysa (Kjeldahl yönteminde NH₃) tercih edilir.',
      en: 'In a back titration a known excess of a reagent R, more than enough to react completely with the analyte, is added. After the reaction is complete the unreacted R is titrated with a second titrant B. The amount of R that reacted with the analyte is the difference between the amount added and the amount left over.\n\nThe method is chosen when the direct reaction is slow, the sample is insoluble in water (CaCO₃, ZnO…), no suitable indicator exists for the direct titration, or the analyte is volatile (NH₃ in the Kjeldahl method).',
    },
    meaning: {
      tr: 'Eklenen R: C_R · V_R. Artan R: r₂ · C_B · V_B (r₂ = mol R / mol B). Tepkimeye giren R: C_R · V_R − r₂ · C_B · V_B. Analit:\nn(A) = r₁ · (C_R · V_R − r₂ · C_B · V_B), burada r₁ = mol A / mol R.\n\nÖrnek: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂ (r₁ = 1/2) ve HCl + NaOH → NaCl + H₂O (r₂ = 1).\n\nParantez içi pozitif olmalıdır; sıfıra yakın ya da negatif çıkması eklenen reaktifin aşırı olmadığını gösterir. Sonuç iki ölçümün farkına dayandığından fark küçüldükçe bağıl belirsizlik büyür. Bu nedenle reaktifin aşırısı ne çok az ne de gereğinden çok fazla olmalıdır.',
      en: 'R added: C_R · V_R. R left over: r₂ · C_B · V_B (r₂ = mol R / mol B). R reacted: C_R · V_R − r₂ · C_B · V_B. Analyte:\nn(A) = r₁ · (C_R · V_R − r₂ · C_B · V_B), where r₁ = mol A / mol R.\n\nExample: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂ (r₁ = 1/2) and HCl + NaOH → NaCl + H₂O (r₂ = 1).\n\nThe bracket must be positive; a value near zero or negative means the reagent was not in excess. Because the result is a difference of two measurements, its relative uncertainty grows as the difference becomes small, so the excess should be neither too small nor unnecessarily large.',
    },
    usage: {
      tr: [
        'Çözünmeyen ya da yavaş tepkimeye giren numuneler: karbonatlar, oksitler, yağların sabunlaşma sayısı.',
        'EDTA ile Al³⁺ ya da Cr³⁺ tayini gibi yavaş kompleksleşme tepkimeleri.',
        'Uçucu analitler: Kjeldahl yönteminde NH₃ aşırı asit içinde tutulur.',
        'Eklenen R’nin miktarı, aynı hacmin numunesiz olarak B ile titre edildiği bir tanık denemesiyle doğrulanmalıdır.',
      ],
      en: [
        'Insoluble or slowly reacting samples: carbonates, oxides, the saponification value of fats.',
        'Slow complexation reactions, such as the EDTA determination of Al³⁺ or Cr³⁺.',
        'Volatile analytes: NH₃ in the Kjeldahl method is trapped in excess acid.',
        'The amount of R added should be checked by a blank, titrating the same volume of R with B without sample.',
      ],
    },
    solution: {
      tr: [
        'Verilen: CaCO₃ içeren numuneye 50,00 mL 0,0500 M HCl eklenmiş; artan HCl için 10,00 mL 0,100 M NaOH harcanmış. r₂ = 1, r₁ = 1/2.',
        'Eklenen HCl = 0,0500 M × 50,00 mL = 2,500 mmol; artan HCl = 1 × 0,100 M × 10,00 mL = 1,000 mmol.',
        'Tepkimeye giren HCl = 2,500 − 1,000 = 1,500 mmol.',
        'Sonuç: n(CaCO₃) = 1/2 × 1,500 mmol = 0,75 mmol.',
      ],
      en: [
        'Given: 50.00 mL of 0.0500 M HCl was added to a CaCO₃ sample; the excess HCl required 10.00 mL of 0.100 M NaOH. r₂ = 1, r₁ = 1/2.',
        'HCl added = 0.0500 M × 50.00 mL = 2.500 mmol; HCl left over = 1 × 0.100 M × 10.00 mL = 1.000 mmol.',
        'HCl reacted = 2.500 − 1.000 = 1.500 mmol.',
        'Result: n(CaCO₃) = 1/2 × 1.500 mmol = 0.75 mmol.',
      ],
    },
    mistakes: {
      tr: [
        'Artan reaktifi analit miktarı sanmak; analit, eklenen ile artan arasındaki farktan bulunur.',
        'İki ayrı stokiyometriyi (r₁ ve r₂) karıştırmak ya da birini unutmak.',
        'Karbonat tayininde açığa çıkan CO₂’yi kaynatarak uzaklaştırmamak; çözünmüş CO₂ geri titrasyonda NaOH tüketir.',
      ],
      en: [
        'Taking the excess reagent as the amount of analyte; the analyte comes from the difference between added and left over.',
        'Mixing up the two stoichiometries (r₁ and r₂) or forgetting one of them.',
        'Not boiling off the CO₂ released from a carbonate; dissolved CO₂ consumes NaOH in the back titration.',
      ],
    },
    related: ['titration-stoich', 'kjeldahl-n', 'titration-percent'],
  },

  'titration-error': {
    concept: {
      tr: 'Eşdeğerlik noktası kuramsal bir noktadır; deneyde ise indikatörün renk değiştirdiği ya da sinyalin sıçradığı dönüm noktası gözlenir. İkisi arasındaki hacim farkı sistematik bir hatadır ve titrasyon hatası (indikatör hatası) olarak adlandırılır. Büyüklüğü; indikatörün geçiş aralığının eşdeğerlik noktasındaki pH’tan (ya da potansiyelden) ne kadar uzak olduğuna, eşdeğerlik çevresindeki sıçramanın dikliğine ve renk değişiminin ne kadar iyi algılandığına bağlıdır.',
      en: 'The equivalence point is a theoretical point; experimentally we observe the end point, where the indicator changes colour or the signal jumps. The volume difference between them is a systematic error called the titration (indicator) error. Its size depends on how far the indicator’s transition range lies from the pH (or potential) at equivalence, how steep the jump around equivalence is and how well the colour change can be perceived.',
    },
    meaning: {
      tr: 'E (%) = (V_dönüm − V_eş) / V_eş × 100.\n\n• E > 0: dönüm noktası geç gelmiş, fazla titrant eklenmiştir; doğrudan titrasyonda analit miktarı olduğundan yüksek bulunur.\n• E < 0: dönüm noktası erken gelmiştir; analit miktarı olduğundan düşük bulunur.\n\nV_eş, titrasyon eğrisi hesabıyla ya da potansiyometrik titrasyonda türev yöntemiyle bulunabilir. Hatanın kabul edilebilir olup olmadığı yöntemden beklenen doğruluğa göre değerlendirilir. Sistematik indikatör hatası, titrantın aynı indikatörle ayarlanması ya da tanık titrasyonu ile kısmen giderilebilir.',
      en: 'E (%) = (V_ep − V_eq) / V_eq × 100.\n\n• E > 0: the end point came late and excess titrant was added; in a direct titration the analyte comes out too high.\n• E < 0: the end point came early; the analyte comes out too low.\n\nV_eq can be found by calculating the titration curve or, in a potentiometric titration, by the derivative method. Whether the error is acceptable depends on the accuracy expected of the method. A systematic indicator error can be partly cancelled by standardising the titrant with the same indicator or by a blank titration.',
    },
    usage: {
      tr: [
        'İndikatör seçimini karşılaştırmak (ör. zayıf asit titrasyonunda metil oranj ile fenolftalein).',
        'Potansiyometrik olarak bulunan eşdeğerlik hacmini indikatörle bulunan dönüm noktasıyla kıyaslamak.',
        'Titrasyon eğrisi hesaplarıyla, belirli bir pH’ta durulduğunda yapılacak hatayı önceden tahmin etmek.',
      ],
      en: [
        'Comparing indicators (e.g. methyl orange versus phenolphthalein for a weak acid).',
        'Comparing a potentiometric equivalence volume with the end point given by an indicator.',
        'Predicting, from titration-curve calculations, the error made by stopping at a given pH.',
      ],
    },
    solution: {
      tr: [
        'Verilen: V_dönüm = 25,05 mL, V_eş = 25,00 mL.',
        'Fark: 25,05 mL − 25,00 mL = 0,05 mL (fazla titrant).',
        'Sonuç: E = 0,05 mL / 25,00 mL × 100 = +0,2 (%).',
      ],
      en: [
        'Given: V_ep = 25.05 mL, V_eq = 25.00 mL.',
        'Difference: 25.05 mL − 25.00 mL = 0.05 mL (excess titrant).',
        'Result: E = 0.05 mL / 25.00 mL × 100 = +0.2 (%).',
      ],
    },
    mistakes: {
      tr: [
        'Mutlak hacim farkını (mL) bağıl hatayla (%) karıştırmak.',
        'İşareti göz ardı etmek; pozitif ve negatif hata sonucu ters yönlerde etkiler.',
        'Rastgele büret okuma belirsizliğini sistematik indikatör hatasıyla karıştırmak.',
      ],
      en: [
        'Confusing the absolute volume difference (mL) with the relative error (%).',
        'Ignoring the sign; positive and negative errors bias the result in opposite directions.',
        'Confusing the random burette-reading uncertainty with the systematic indicator error.',
      ],
    },
    related: ['titration-stoich', 'derivative-endpoint', 'curve-acid-base', 'table-indicators'],
  },

  'kjeldahl-n': {
    concept: {
      tr: 'Kjeldahl yöntemi, organik maddelerdeki azotun, özellikle gıda ve yemlerdeki protein azotunun tayini için kullanılan klasik bir yöntemdir. Üç aşamadan oluşur:\n• Yakma: Numune derişik H₂SO₄ içinde, kaynama noktasını yükseltmek için K₂SO₄ ve bir katalizör (ör. bakır bileşikleri) eşliğinde ısıtılır; amin ve amit azotu NH₄⁺’e dönüşür.\n• Damıtma: Ortam derişik NaOH ile bazik yapılır, açığa çıkan NH₃ damıtılarak bilinen aşırı miktardaki standart HCl içinde tutulur.\n• Titrasyon: Artan HCl standart NaOH ile geri titre edilir.',
      en: 'The Kjeldahl method is the classical method for organic nitrogen, especially protein nitrogen in foods and feeds. It has three stages:\n• Digestion: the sample is heated in concentrated H₂SO₄ with K₂SO₄ (to raise the boiling point) and a catalyst (e.g. a copper compound); amine and amide nitrogen are converted to NH₄⁺.\n• Distillation: the mixture is made alkaline with concentrated NaOH and the liberated NH₃ is distilled into a known excess of standard HCl.\n• Titration: the unreacted HCl is back-titrated with standard NaOH.',
    },
    meaning: {
      tr: 'NH₃ + HCl → NH₄Cl tepkimesinde her mol NH₃, yani her mol N, bir mol HCl tüketir. Bu nedenle:\nn(N) = C_HCl · V_HCl − C_NaOH · V_NaOH\n%N = n(N) × 14,007 / m × 100\n\nBirim kontrolü: mol/L × mL = mmol; mmol × 14,007 g/mol = mg N. Bu değer numune kütlesine bölünürken numune de mg’a çevrilmelidir (0,5 g = 500 mg).\n\nYaygın bir değişkende NH₃ borik asit çözeltisinde tutulur ve oluşan borat doğrudan standart HCl ile titre edilir. Bu durumda geri titrasyon yoktur: %N = C_HCl · V_HCl × 14,007 / m × 100.',
      en: 'In NH₃ + HCl → NH₄Cl each mole of NH₃, i.e. each mole of N, consumes one mole of HCl. Therefore:\nn(N) = C_HCl · V_HCl − C_NaOH · V_NaOH\n%N = n(N) × 14.007 / m × 100\n\nUnit check: mol/L × mL = mmol; mmol × 14.007 g/mol = mg N. When dividing by the sample mass, convert the sample to mg as well (0.5 g = 500 mg).\n\nIn a common variant the NH₃ is collected in boric acid solution and the borate formed is titrated directly with standard HCl. There is then no back titration: %N = C_HCl · V_HCl × 14.007 / m × 100.',
    },
    usage: {
      tr: [
        'Gıda, yem, gübre, toprak ve atık sularda organik (Kjeldahl) azot tayini.',
        'Klasik yöntem nitrat, nitrit ve nitro ya da azo bileşiklerindeki azotu ön indirgeme yapılmadan ölçmez.',
        'Reaktiflerden gelen azot için her seride tanık deneyi yapılır ve tanık değeri düşülür.',
        'Yakma, çözelti berraklaşıncaya kadar sürdürülmelidir; eksik yakma düşük sonuç verir.',
      ],
      en: [
        'Organic (Kjeldahl) nitrogen in foods, feeds, fertilisers, soils and wastewater.',
        'The classical procedure does not measure nitrate, nitrite, or nitro and azo nitrogen without a prior reduction step.',
        'A blank is run with each batch for nitrogen from the reagents and subtracted.',
        'Digestion must continue until the solution is clear; incomplete digestion gives low results.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 50,00 mL 0,100 M HCl; geri titrasyonda 20,00 mL 0,100 M NaOH; m = 0,5 g = 500 mg.',
        'n(N) = 0,100 M × 50,00 mL − 0,100 M × 20,00 mL = 5,000 − 2,000 = 3,000 mmol.',
        'm(N) = 3,000 mmol × 14,007 g/mol = 42,021 mg.',
        'Sonuç: %N = 42,021 mg / 500 mg × 100 = 8,404.',
      ],
      en: [
        'Given: 50.00 mL of 0.100 M HCl; 20.00 mL of 0.100 M NaOH in the back titration; m = 0.5 g = 500 mg.',
        'n(N) = 0.100 M × 50.00 mL − 0.100 M × 20.00 mL = 5.000 − 2.000 = 3.000 mmol.',
        'm(N) = 3.000 mmol × 14.007 g/mol = 42.021 mg.',
        'Result: %N = 42.021 mg / 500 mg × 100 = 8.404.',
      ],
    },
    mistakes: {
      tr: [
        'Tanık düzeltmesini yapmamak.',
        'Toplama kabındaki asidin yeterince aşırı olmaması: artan HCl sıfıra yakınsa NH₃’ün bir kısmı tutulamamış olabilir.',
        'Azotun atom kütlesi yerine NH₃’ün molar kütlesini (17,03 g/mol) kullanmak.',
      ],
      en: [
        'Omitting the blank correction.',
        'Too little excess acid in the receiver: if almost no HCl is left over, some NH₃ may have escaped.',
        'Using the molar mass of NH₃ (17.03 g/mol) instead of the atomic mass of nitrogen.',
      ],
    },
    related: ['kjeldahl-protein', 'back-titration', 'titration-percent'],
  },

  'kjeldahl-protein': {
    concept: {
      tr: 'Proteinler doğrudan tartılamadığı ya da titre edilemediği için gıdalardaki protein içeriği genellikle toplam azottan hesaplanır ve “ham protein” olarak verilir. Bunun dayanağı, proteinlerin kütlece azot içeriğinin dar bir aralıkta bulunmasıdır: ortalama %16 azot içeren bir protein için dönüşüm faktörü 100 / 16 = 6,25’tir.',
      en: 'Because proteins cannot be weighed or titrated directly, the protein content of foods is usually calculated from total nitrogen and reported as “crude protein”. This works because the nitrogen content of proteins lies in a narrow range: for a protein containing on average 16% nitrogen, the conversion factor is 100 / 16 = 6.25.',
    },
    meaning: {
      tr: '% protein = %N × F.\n\nF, ilgili gıdadaki proteinlerin amino asit bileşimine bağlıdır. Araçta verilen değerler: genel gıdalar 6,25; süt ürünleri 6,38; buğday 5,70. Arginin gibi azotça zengin amino asitleri çok içeren proteinlerde azot yüzdesi daha yüksek, F ise daha küçüktür.\n\nYöntem numunedeki tüm azotun proteine ait olduğunu varsayar. Üre, serbest amino asitler, nükleik asitler ya da hile amacıyla eklenen azotlu bileşikler (ör. melamin) gibi protein olmayan azot sonucu olduğundan yüksek gösterir. Bu yüzden sonuç “ham protein” olarak raporlanır.',
      en: '% protein = %N × F.\n\nF depends on the amino acid composition of the proteins in that food. Values given in the tool: general foods 6.25, dairy 6.38, wheat 5.70. Proteins rich in nitrogen-rich amino acids such as arginine have a higher nitrogen percentage and therefore a smaller F.\n\nThe method assumes that all nitrogen in the sample belongs to protein. Non-protein nitrogen such as urea, free amino acids, nucleic acids or deliberately added nitrogenous compounds (e.g. melamine) makes the result too high, which is why it is reported as “crude protein”.',
    },
    usage: {
      tr: [
        'Gıda ve yem etiketleri için protein içeriğini hesaplamak.',
        'Gıdaya özgü faktör biliniyorsa o kullanılır; bilinmiyorsa genel değer 6,25’tir.',
        'Sonuçların karşılaştırılabilmesi için kullanılan faktör raporda belirtilmelidir.',
        'Tersinden, beklenen protein içeriğinden %N tahmin edilerek uygun numune kütlesi seçilebilir.',
      ],
      en: [
        'Calculating protein content for food and feed labelling.',
        'Use the food-specific factor when it is known; otherwise the general value is 6.25.',
        'State the factor used so that results can be compared.',
        'Conversely, the expected %N can be estimated from the protein content to choose a suitable sample mass.',
      ],
    },
    solution: {
      tr: ['Verilen: %N = 2,0; genel gıda için F = 6,25.', '% protein = 2,0 × 6,25.', 'Sonuç: % protein = 12,5.'],
      en: ['Given: %N = 2.0; F = 6.25 for a general food.', '% protein = 2.0 × 6.25.', 'Result: % protein = 12.5.'],
    },
    mistakes: {
      tr: [
        'Her gıdaya 6,25 uygulamak; süt ürünleri ve tahıllar için farklı faktörler vardır.',
        'Protein olmayan azotu göz ardı edip sonucu gerçek protein içeriği gibi yorumlamak.',
        'Nem içeriğini belirtmemek: kuru madde ve yaş ağırlık esasına göre sonuçlar belirgin biçimde farklıdır.',
      ],
      en: [
        'Applying 6.25 to every food; dairy products and cereals have different factors.',
        'Ignoring non-protein nitrogen and treating the result as the true protein content.',
        'Not stating the moisture basis: results on a dry-matter and on a wet-weight basis differ markedly.',
      ],
    },
    related: ['kjeldahl-n', 'percent-ww', 'mass-loss'],
  },
};

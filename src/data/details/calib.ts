import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Calibration module (undergraduate level).
 * Formula tools: the last line of each worked solution states the result the calculator gives
 * for the tool's first example (checked by tests). Data tools: the worked example uses the
 * tool's own sample data, and the numbers match what the tool displays (4 significant figures).
 */
export const CALIB_DETAILS: Record<string, ToolDetail> = {
  'std-addition-single': {
    concept: {
      tr: 'Gerçek numunelerde matriks (analit dışındaki tüm bileşenler) analitin duyarlılığını değiştirebilir: viskozite, iyonik şiddet, kompleksleşme ya da iyonlaşmanın bastırılması aynı derişimdeki analitin farklı sinyal vermesine yol açar. Saf çözücüde hazırlanmış standartlarla kurulan dış kalibrasyon bu durumda yanlış sonuç verir.\n\nStandart ekleme yönteminde kalibrasyon numunenin kendi içinde yapılır: numuneye bilinen miktarda analit eklenir ve sinyaldeki artış ölçülür. Eklenen analit de numunedeki analitle aynı matriks içinde bulunduğundan, her ikisinin duyarlılığı aynıdır.',
      en: 'In real samples the matrix (everything other than the analyte) can change the sensitivity for the analyte: viscosity, ionic strength, complexation or ionisation suppression make the same analyte concentration give a different signal. An external calibration with standards in pure solvent then gives a wrong result.\n\nIn the standard addition method the calibration is done inside the sample itself: a known amount of analyte is added to the sample and the increase in signal is measured. The added analyte sits in the same matrix as the analyte already present, so both have the same sensitivity.',
    },
    meaning: {
      tr: 'Sinyalin derişimle orantılı olduğu (S = k · C) varsayılır. Numunenin sinyali Sₓ = k · Cₓ’tir. Vₓ hacimdeki numuneye derişimi C_std olan standarttan V_std hacim eklenince hem analit seyrelir hem de yeni analit gelir:\nS_spk = k · [Cₓ · Vₓ + C_std · V_std] / (Vₓ + V_std).\n\nİki eşitlik oranlanınca bilinmeyen k sadeleşir ve Cₓ için çözülünce aracın formülü elde edilir:\nCₓ = Sₓ · C_std · V_std / [S_spk · (Vₓ + V_std) − Sₓ · Vₓ].\n\nBirimler: Cₓ, C_std ile aynı birimde çıkar; hacimlerin birimi sadeleşir, yeter ki aynı olsunlar. Sinyaller kör düzeltmesi yapılmış olmalıdır, çünkü yöntem sinyalin sıfır derişimde sıfır olduğunu varsayar.',
      en: 'The signal is assumed proportional to concentration (S = k · C). The sample gives Sₓ = k · Cₓ. When a volume V_std of a standard of concentration C_std is added to a volume Vₓ of sample, the analyte is diluted and new analyte is added:\nS_spk = k · [Cₓ · Vₓ + C_std · V_std] / (Vₓ + V_std).\n\nDividing the two equations cancels the unknown k, and solving for Cₓ gives the tool’s formula:\nCₓ = Sₓ · C_std · V_std / [S_spk · (Vₓ + V_std) − Sₓ · Vₓ].\n\nUnits: Cₓ comes out in the unit of C_std; the volume units cancel as long as they are the same. Signals must be blank-corrected, because the method assumes zero signal at zero concentration.',
    },
    usage: {
      tr: [
        'Matriksi karmaşık ya da standartlarla eşleştirilemeyen numuneler (kan, deniz suyu, toprak özütleri) için AAS, ICP, potansiyometri ve voltametride.',
        'Eklenen miktar, sinyali belirgin biçimde (yaklaşık 1,5–3 kat) artıracak kadar olmalı ama doğrusal aralığı aşmamalıdır.',
        'Tek noktalı ekleme doğrusallığı denetlemez; daha güvenilir sonuç için çok noktalı standart ekleme tercih edilir.',
        'Matriksin duyarlılığa etkisini düzeltir; ancak sabit bir girişim sinyalini (spektral girişim, kirli kör) düzeltmez.',
        'Bu eşitlik standardın doğrudan numune hacmine eklendiği yöntem içindir. Eklemesiz ve eklemeli kısımlar aynı son hacme (ör. balon jojede) tamamlanıyorsa Cₓ = Sₓ·C_std·V_std / [(S_spk − Sₓ)·Vₓ] kullanılmalıdır.',
      ],
      en: [
        'Samples with a complex matrix that cannot be matched by standards (blood, seawater, soil extracts) in AAS, ICP, potentiometry and voltammetry.',
        'The spike should raise the signal clearly (roughly 1.5–3 times) without leaving the linear range.',
        'A single addition does not check linearity; multiple standard additions give a more reliable result.',
        'It corrects for the effect of the matrix on sensitivity, but not for a constant interfering signal (spectral interference, contaminated blank).',
        'This equation is for adding the standard directly to the sample aliquot. If the unspiked and spiked aliquots are both made up to the same final volume (e.g. in volumetric flasks), use Cₓ = Sₓ·C_std·V_std / [(S_spk − Sₓ)·Vₓ].',
      ],
    },
    solution: {
      tr: [
        'Verilen: Sₓ = 0,2000; S_spk = 0,2727; Vₓ = 10,00 mL; V_std = 1,00 mL; C_std = 10,0 mM.',
        'Pay: Sₓ · C_std · V_std = 0,2000 × 10,0 mM × 1,00 mL = 2,000 mM·mL.',
        'Payda: S_spk · (Vₓ + V_std) − Sₓ · Vₓ = 0,2727 × 11,00 mL − 0,2000 × 10,00 mL = 3,000 − 2,000 = 1,000 mL.',
        'Sonuç: Cₓ = 2,000 mM·mL / 1,000 mL = 2 mM.',
      ],
      en: [
        'Given: Sₓ = 0.2000, S_spk = 0.2727, Vₓ = 10.00 mL, V_std = 1.00 mL, C_std = 10.0 mM.',
        'Numerator: Sₓ · C_std · V_std = 0.2000 × 10.0 mM × 1.00 mL = 2.000 mM·mL.',
        'Denominator: S_spk · (Vₓ + V_std) − Sₓ · Vₓ = 0.2727 × 11.00 mL − 0.2000 × 10.00 mL = 3.000 − 2.000 = 1.000 mL.',
        'Result: Cₓ = 2.000 mM·mL / 1.000 mL = 2 mM.',
      ],
    },
    mistakes: {
      tr: [
        'Eklenen standardın numuneyi seyrelttiğini ihmal etmek; bu yalnızca V_std, Vₓ’e göre çok küçükse kabul edilebilir bir yaklaşımdır.',
        'Kör düzeltmesi yapılmamış sinyal kullanmak; kör sinyali analit gibi davranır ve sonuç yüksek çıkar.',
        'Sonucun ölçülen çözeltiye ait olduğunu unutmak: numune ölçümden önce seyreltildiyse seyreltme faktörü uygulanmalıdır.',
        'Balon jojede aynı son hacme tamamlanan kısımlarla çalışıp bu aracın (doğrudan ekleme) eşitliğini kullanmak; iki yöntemin eşitlikleri farklıdır.',
      ],
      en: [
        'Ignoring the dilution of the sample by the spike; this is an acceptable approximation only when V_std is much smaller than Vₓ.',
        'Using signals that are not blank-corrected; the blank behaves like analyte and the result is too high.',
        'Forgetting that the result refers to the measured solution: if the sample was diluted before measurement, apply the dilution factor.',
        'Making both aliquots up to the same final volume and still using this tool’s (direct-addition) equation; the two procedures need different equations.',
      ],
    },
    related: ['std-addition-multi', 'internal-standard', 'linear-regression', 'recovery'],
  },

  'internal-standard': {
    concept: {
      tr: 'İç standart, analite kimyasal olarak benzeyen ama numunede bulunmayan bir maddedir ve tüm standartlara ve numunelere aynı, bilinen miktarda eklenir. Ölçümde analitin sinyali tek başına değil, iç standardın sinyaline oranı olarak kullanılır.\n\nEnjeksiyon hacmindeki küçük farklar, cihaz duyarlılığındaki kaymalar ya da (iç standart en başta eklendiyse) numune hazırlamadaki kayıplar analit ve iç standardı aynı oranda etkiler. Bu yüzden sinyallerin oranı bu dalgalanmalardan büyük ölçüde bağımsızdır. Gaz kromatografisi, ICP-OES/ICP-MS ve LC-MS’te çok kullanılır.',
      en: 'An internal standard is a substance chemically similar to the analyte but absent from the sample, added in the same known amount to every standard and sample. The analyte signal is used not on its own but as a ratio to the internal-standard signal.\n\nSmall differences in injection volume, drifts in instrument sensitivity or (if the internal standard is added at the start) losses during sample preparation affect analyte and internal standard in the same proportion. The ratio of their signals is therefore largely independent of these fluctuations. It is widely used in gas chromatography, ICP-OES/ICP-MS and LC-MS.',
    },
    meaning: {
      tr: 'Analit ve iç standardın sinyalleri kendi derişimleriyle orantılıdır: S_A = k_A · C_A, S_IS = k_IS · C_IS. Oranlanınca:\nS_A / S_IS = K · C_A / C_IS, burada K = k_A / k_IS bağıl yanıt faktörüdür.\n\nEnjeksiyon hacmi ya da duyarlılık her iki sinyali aynı çarpanla değiştirdiğinden bu çarpan oranda sadeleşir.\n\nİki adım vardır:\n• Bilinen karışımdan K bulunur: K = (S_A,std / S_IS,std) · (C_IS,std / C_A,std).\n• Numuneye uygulanır: C_A = (S_A / S_IS) · C_IS / K.\n\nTek standartla bulunan K doğrusallığı varsayar; daha sağlam yol, sinyal oranının derişim oranına karşı çizildiği çok noktalı kalibrasyondur.',
      en: 'The analyte and internal-standard signals are proportional to their concentrations: S_A = k_A · C_A, S_IS = k_IS · C_IS. Taking the ratio:\nS_A / S_IS = K · C_A / C_IS, where K = k_A / k_IS is the relative response factor.\n\nAn injection volume or sensitivity change multiplies both signals by the same factor, which cancels in the ratio.\n\nThere are two steps:\n• Find K from a known mixture: K = (S_A,std / S_IS,std) · (C_IS,std / C_A,std).\n• Apply it to the sample: C_A = (S_A / S_IS) · C_IS / K.\n\nA K from a single standard assumes linearity; the more robust approach is a multi-point calibration of signal ratio against concentration ratio.',
    },
    usage: {
      tr: [
        'Enjeksiyon tekrarlanabilirliğinin sınırlı olduğu kromatografik yöntemler ve sürüklenme gösteren spektrometrik yöntemler.',
        'İç standart numunede bulunmamalı, analitle benzer davranmalı ve sinyali analitinkinden ayrılabilmelidir (kromatografide ayrı pik, spektrometride ayrı dalga boyu ya da kütle).',
        'Kütle spektrometrisinde analitin izotopça işaretlenmiş (ör. ²H, ¹³C) türevi ideal iç standarttır.',
        'Numune hazırlamadaki kayıpları düzeltmesi için iç standart en başta eklenmelidir.',
      ],
      en: [
        'Chromatographic methods with limited injection repeatability and spectrometric methods that drift.',
        'The internal standard must be absent from the sample, behave like the analyte and give a signal separable from it (a separate peak in chromatography, a separate wavelength or mass in spectrometry).',
        'In mass spectrometry an isotopically labelled (e.g. ²H, ¹³C) analogue of the analyte is the ideal internal standard.',
        'To correct for losses during sample preparation, add the internal standard at the very beginning.',
      ],
    },
    solution: {
      tr: [
        'Standart karışım: S_A,std = 0,8; S_IS,std = 1,0; C_A,std = 2,0 mM; C_IS,std = 1,0 mM.',
        'K = (0,8 / 1,0) × (1,0 mM / 2,0 mM) = 0,40.',
        'Numune: S_A = 0,5; S_IS = 1,0; C_IS = 1,0 mM → C_A = (0,5 / 1,0) × 1,0 mM / 0,40.',
        'Sonuç: C_A = 1,25 mM.',
      ],
      en: [
        'Standard mixture: S_A,std = 0.8, S_IS,std = 1.0, C_A,std = 2.0 mM, C_IS,std = 1.0 mM.',
        'K = (0.8 / 1.0) × (1.0 mM / 2.0 mM) = 0.40.',
        'Sample: S_A = 0.5, S_IS = 1.0, C_IS = 1.0 mM → C_A = (0.5 / 1.0) × 1.0 mM / 0.40.',
        'Result: C_A = 1.25 mM.',
      ],
    },
    mistakes: {
      tr: [
        'K’yı 1 kabul etmek; analit ve iç standardın duyarlılıkları genellikle farklıdır.',
        'Numune ve standartlara farklı miktarda iç standart ekleyip bunu hesaba katmamak.',
        'Numunede doğal olarak bulunan ya da analitle çakışan bir madde seçmek.',
      ],
      en: [
        'Assuming K = 1; the sensitivities for analyte and internal standard usually differ.',
        'Adding different amounts of internal standard to samples and standards without accounting for it.',
        'Choosing a substance that occurs naturally in the sample or overlaps with the analyte.',
      ],
    },
    related: ['response-factor', 'std-addition-single', 'linear-regression'],
  },

  'response-factor': {
    concept: {
      tr: 'Yanıt faktörü (RF), dedektörün birim derişim başına verdiği sinyaldir; kalibrasyon doğrusunun eğimiyle aynı anlamı taşır. Kromatografide her bileşen için dedektör yanıtı farklıdır; pik alanını derişime çevirmek için o bileşenin RF’si gerekir.\n\nRF genellikle numuneye yakın derişimdeki tek bir standarttan bulunur ve bilinmeyenlere uygulanır. Bu, tek noktalı kalibrasyondur: hızlıdır, ancak doğrusallık ve küçük kesişim varsayımına dayanır.',
      en: 'The response factor (RF) is the detector signal per unit concentration; it has the same meaning as the slope of a calibration line. In chromatography the detector response differs from compound to compound, so converting a peak area to a concentration needs the RF of that compound.\n\nRF is usually determined from a single standard close to the sample concentration and applied to the unknowns. This is a single-point calibration: fast, but it relies on linearity and a small intercept.',
    },
    meaning: {
      tr: 'RF = (S − b) / C. b, kör sinyali ya da kalibrasyon doğrusunun kesişimidir; çıkarılmazsa kör sinyali analite atfedilir. Bilinmeyen için ters çevrilir:\nC = (S − b) / RF.\n\nBirimler: RF’nin birimi sinyal/derişimdir (ör. alan birimi / (mg/L)). Hesaplanan C, RF’yi belirlerken kullanılan derişim biriminde çıkar.\n\nİlgili bir kavram bağıl yanıt faktörüdür (RRF): bir bileşenin RF’sinin referans bileşenin RF’sine oranı. Örneğin ilaç safsızlık analizinde safsızlıklar ana bileşenin standardı ve RRF ile nicelenebilir.',
      en: 'RF = (S − b) / C. b is the blank signal or the intercept of the calibration line; if it is not subtracted, the blank signal is attributed to the analyte. For an unknown it is inverted:\nC = (S − b) / RF.\n\nUnits: RF has units of signal/concentration (e.g. area units per mg/L). C comes out in the concentration unit used when RF was determined.\n\nA related idea is the relative response factor (RRF): the RF of one compound divided by that of a reference compound. In pharmaceutical impurity analysis, for example, impurities can be quantified with the main component’s standard and the RRF.',
    },
    usage: {
      tr: [
        'Rutin kromatografik analizlerde hızlı nicelleme.',
        'RF, numune derişimine yakın bir standartla belirlenmeli ve analiz serisi boyunca kontrol standartlarıyla doğrulanmalıdır.',
        'Doğrusal aralığın dışında ya da kesişimin büyük olduğu durumlarda tam kalibrasyon doğrusu kullanılmalıdır.',
      ],
      en: [
        'Quick quantitation in routine chromatographic analyses.',
        'RF should be determined with a standard close to the sample concentration and verified with check standards during the run.',
        'Outside the linear range or when the intercept is large, use a full calibration line.',
      ],
    },
    solution: {
      tr: [
        'Verilen: numune sinyali S = 1250; kör (kesişim) b = 50; RF = 240 (sinyal / derişim birimi, ör. mg/L başına).',
        'Kör düzeltmeli sinyal: S − b = 1250 − 50 = 1200.',
        'C = (S − b) / RF = 1200 / 240.',
        'Sonuç: C = 5 (RF’deki derişim biriminde, ör. 5 mg/L).',
      ],
      en: [
        'Given: sample signal S = 1250, blank (intercept) b = 50, RF = 240 (signal per concentration unit, e.g. per mg/L).',
        'Blank-corrected signal: S − b = 1250 − 50 = 1200.',
        'C = (S − b) / RF = 1200 / 240.',
        'Result: C = 5 (in the concentration unit of RF, e.g. 5 mg/L).',
      ],
    },
    mistakes: {
      tr: [
        'Kör sinyalini çıkarmamak (sonuç yüksek çıkar).',
        'Bir bileşenin RF’sini başka bir bileşene uygulamak.',
        'Numuneden çok farklı derişimdeki bir standartla bulunan RF’ye güvenmek; doğrusallıktan küçük sapmalar büyük hata doğurur.',
      ],
      en: [
        'Not subtracting the blank signal (the result is too high).',
        'Applying the RF of one compound to another.',
        'Trusting an RF from a standard far from the sample concentration; small deviations from linearity cause large errors.',
      ],
    },
    related: ['linear-regression', 'internal-standard', 'lod-loq'],
  },

  'lod-loq': {
    concept: {
      tr: 'Gözlenebilme sınırı (LOD), körden belirli bir güvenle ayırt edilebilen en küçük analit derişimidir: bu düzeyde analitin “var” olduğu söylenebilir ama miktarı güvenilir biçimde verilemez. Tayin sınırı (LOQ) ise kabul edilebilir kesinlik ve doğrulukla nicel olarak belirlenebilen en küçük derişimdir.\n\nHer iki sınır da kör ölçümlerinin gürültüsünden (standart sapmasından) ve yöntemin duyarlılığından (kalibrasyon eğimi) hesaplanır. LOD ile LOQ arasındaki sonuçlar genellikle “gözlendi, ancak tayin sınırının altında” diye raporlanır.',
      en: 'The limit of detection (LOD) is the smallest analyte concentration that can be distinguished from the blank with a stated confidence: at this level the analyte can be said to be “present”, but its amount cannot be given reliably. The limit of quantitation (LOQ) is the smallest concentration that can be determined quantitatively with acceptable precision and accuracy.\n\nBoth limits are calculated from the noise (standard deviation) of blank measurements and the sensitivity of the method (calibration slope). Results between LOD and LOQ are usually reported as “detected, but below the limit of quantitation”.',
    },
    meaning: {
      tr: 'x_L = k · s / m. s sinyal biriminde bir standart sapmadır; eğime (m, sinyal/derişim) bölünerek derişim birimine çevrilir.\n\nk’nın seçimi:\n• k = 3: IUPAC’ın klasik tanımı; körün dağılımından 3s uzaklık, yanlış pozitif olasılığını çok küçük tutar.\n• k = 3,3 (ICH Q2): yaklaşık 2 × 1,645; hem yanlış pozitif hem yanlış negatif olasılığını yaklaşık %5’te tutar.\n• k = 10 (LOQ): sinyal kör üstünde 10s olduğunda net sinyalin bağıl standart sapması yaklaşık %10’dur.\n\ns, kör ölçümlerinden, düşük derişimli bir numunenin tekrarlarından ya da kalibrasyon regresyonunun artık standart sapmasından (s_r) veya kesişimin standart sapmasından alınabilir. Hangisinin kullanıldığı raporda belirtilmelidir.',
      en: 'x_L = k · s / m. s is a standard deviation in signal units; dividing by the slope (m, signal/concentration) converts it into concentration units.\n\nChoice of k:\n• k = 3: the classical IUPAC definition; a distance of 3s from the blank distribution keeps false positives very rare.\n• k = 3.3 (ICH Q2): about 2 × 1.645; keeps both false-positive and false-negative probabilities near 5%.\n• k = 10 (LOQ): with the signal 10s above the blank, the relative standard deviation of the net signal is about 10%.\n\ns can be taken from blank measurements, from replicates of a low-concentration sample, or from the residual standard deviation (s_r) or intercept standard deviation of the calibration regression. The report should state which was used.',
    },
    usage: {
      tr: [
        'Yöntem validasyonunda yöntemin uygulanabileceği en düşük derişimleri belirlemek.',
        'Yeterli sayıda (ör. 10 ya da daha fazla) bağımsız kör ölçümü kullanın; s birkaç ölçümden hesaplanırsa çok belirsizdir.',
        'Eğim, LOD’ye yakın bölgeyi de kapsayan bir kalibrasyondan alınmalıdır.',
        'Hesaplanan LOD, bu düzeyde hazırlanmış numunelerle deneysel olarak doğrulanmalıdır.',
      ],
      en: [
        'Establishing the lowest concentrations at which a method can be used, during method validation.',
        'Use enough (e.g. 10 or more) independent blank measurements; s from just a few is very uncertain.',
        'The slope should come from a calibration that also covers the region near the LOD.',
        'The calculated LOD should be confirmed experimentally with samples prepared at that level.',
      ],
    },
    solution: {
      tr: [
        'Verilen: körün standart sapması s = 0,0021 (absorbans); kalibrasyon eğimi m = 0,0436 (absorbans / derişim birimi, ör. mg/L başına); k = 3,3.',
        'k · s = 3,3 × 0,0021 = 0,00693 (sinyal birimi).',
        'Karşılaştırma için LOQ (k = 10): 10 × 0,0021 / 0,0436 = 0,4817.',
        'Sonuç: LOD = 0,00693 / 0,0436 = 0,1589 (eğimdeki derişim biriminde, ör. mg/L).',
      ],
      en: [
        'Given: standard deviation of the blank s = 0.0021 (absorbance), calibration slope m = 0.0436 (absorbance per concentration unit, e.g. per mg/L), k = 3.3.',
        'k · s = 3.3 × 0.0021 = 0.00693 (signal units).',
        'For comparison, LOQ (k = 10): 10 × 0.0021 / 0.0436 = 0.4817.',
        'Result: LOD = 0.00693 / 0.0436 = 0.1589 (in the concentration unit of the slope, e.g. mg/L).',
      ],
    },
    mistakes: {
      tr: [
        'Kör sinyalinin kendisini (ortalamasını) standart sapma yerine kullanmak.',
        'Sinyal biriminde kalan k · s değerini derişim olarak raporlamak (eğime bölmeyi unutmak).',
        'LOD altındaki bir sonucu “sıfır” ya da “analit yok” diye raporlamak; doğrusu “< LOD” yazmaktır.',
      ],
      en: [
        'Using the blank signal itself (its mean) instead of its standard deviation.',
        'Reporting k · s, which is still in signal units, as a concentration (forgetting to divide by the slope).',
        'Reporting a result below the LOD as “zero” or “analyte absent”; the correct report is “< LOD”.',
      ],
    },
    related: ['iupac-detection-signal', 'signal-to-noise', 'linear-regression', 'validation-replicates'],
  },

  'iupac-detection-signal': {
    concept: {
      tr: 'Bir ölçümde analitin bulunup bulunmadığına karar vermek, aslında bir istatistiksel testtir: ölçülen sinyal, kör sinyallerinin rastgele dağılımı içinde mi kalıyor, yoksa onun belirgin biçimde üstünde mi? IUPAC bu karar için kör ölçümlerinin ortalaması ve standart sapmasına dayanan bir sınır sinyali tanımlar.\n\nBu sınırın üstündeki bir sinyal, yalnızca rastgele kör dalgalanmasıyla açıklanması çok olası olmayan bir sinyaldir ve “analit gözlendi” denir.',
      en: 'Deciding whether an analyte is present is really a statistical test: does the measured signal lie within the random distribution of blank signals, or clearly above it? IUPAC defines a limiting signal for this decision based on the mean and standard deviation of blank measurements.\n\nA signal above this limit is very unlikely to be explained by random fluctuation of the blank alone, and the analyte is said to be “detected”.',
    },
    meaning: {
      tr: 'S_DL = S_mb + z · σ_mb. S_mb kör sinyallerinin ortalaması, σ_mb standart sapmasıdır.\n\nKörün normal dağıldığı varsayılırsa z = 3 için bir kör ölçümünün S_DL’yi aşma olasılığı yaklaşık %0,13’tür (tek yönlü); yani yanlış pozitif sonuç çok nadirdir.\n\nÖnemli bir ayrıntı: gerçek sinyali tam S_DL olan bir numune, ölçümlerin yaklaşık yarısında bu sınırın altında kalır. Bu yüzden karar sınırı ile gözlenebilme sınırı (Currie yaklaşımı) bazen ayrı tanımlanır.\n\nDerişime çevirmek için kör üstündeki fark eğime bölünür: c_DL = (S_DL − S_mb) / m = z · σ_mb / m.',
      en: 'S_DL = S_mb + z · σ_mb, where S_mb is the mean and σ_mb the standard deviation of the blank signals.\n\nIf the blank is normally distributed, with z = 3 the probability that a blank measurement exceeds S_DL is about 0.13% (one-tailed), so false positives are very rare.\n\nAn important detail: a sample whose true signal is exactly S_DL falls below this limit in about half of its measurements. For this reason a decision limit and a detection limit (Currie’s approach) are sometimes defined separately.\n\nTo convert to concentration, divide the difference above the blank by the slope: c_DL = (S_DL − S_mb) / m = z · σ_mb / m.',
    },
    usage: {
      tr: [
        'Ölçülen bir sinyalin “gözlendi / gözlenmedi” kararını vermek.',
        'Kör, numuneyle aynı işlemlerden geçmiş (yöntem körü) olmalı ve çok sayıda (ör. 10–20) bağımsız ölçümden değerlendirilmelidir.',
        'Körün dağılımı normal değilse ya da kör sürükleniyorsa olasılık yorumu geçersizdir.',
      ],
      en: [
        'Deciding whether a measured signal is “detected / not detected”.',
        'The blank should have gone through the same steps as the sample (method blank) and be evaluated from many (e.g. 10–20) independent measurements.',
        'If the blank is not normally distributed or drifts, the probability interpretation fails.',
      ],
    },
    solution: {
      tr: [
        'Verilen: kör sinyali ortalaması S_mb = 0,05; körün standart sapması σ_mb = 0,01; z = 3.',
        'z · σ_mb = 3 × 0,01 = 0,03.',
        'Sonuç: S_DL = 0,05 + 0,03 = 0,08; bu değerin üstündeki sinyaller analitin varlığını gösterir.',
      ],
      en: [
        'Given: mean blank signal S_mb = 0.05, standard deviation of the blank σ_mb = 0.01, z = 3.',
        'z · σ_mb = 3 × 0.01 = 0.03.',
        'Result: S_DL = 0.05 + 0.03 = 0.08; signals above this value indicate that the analyte is present.',
      ],
    },
    mistakes: {
      tr: [
        'S_DL’yi (bir sinyal) gözlenebilme sınırı derişimi sanmak; derişim için kör farkı eğime bölünmelidir.',
        'Körün standart sapması yerine kalibrasyon standartlarının standart sapmasını kullanmak.',
        'Az sayıda kör ölçümüyle hesaplanan s’yi gerçek σ gibi kullanmak.',
      ],
      en: [
        'Mistaking S_DL (a signal) for the detection-limit concentration; for a concentration, divide the difference from the blank by the slope.',
        'Using the standard deviation of the calibration standards instead of that of the blank.',
        'Treating s from a handful of blank measurements as the true σ.',
      ],
    },
    related: ['lod-loq', 'signal-to-noise', 'z-score'],
  },

  'signal-to-noise': {
    concept: {
      tr: 'Her analitik sinyal, ölçülmek istenen bilgiye ek olarak rastgele dalgalanmalar, yani gürültü içerir. Gürültünün kaynakları ısıl (Johnson) gürültü, atış (shot) gürültüsü, titreşim (flicker) gürültüsü ve çevreden gelen girişimlerdir.\n\nBir sinyalin ne kadar güvenilir ölçülebildiğini sinyalin büyüklüğü değil, gürültüye oranı belirler. Bu nedenle sinyal/gürültü oranı (S/N), cihaz performansını ve yöntemin alt sınırlarını değerlendirmede temel bir ölçüttür.',
      en: 'Every analytical signal contains, in addition to the wanted information, random fluctuations called noise. Sources of noise include thermal (Johnson) noise, shot noise, flicker noise and environmental interference.\n\nHow reliably a signal can be measured depends not on its size but on its ratio to the noise. The signal-to-noise ratio (S/N) is therefore a basic criterion for judging instrument performance and the lower limits of a method.',
    },
    meaning: {
      tr: 'S/N = x̄ / s_N. x̄ ortalama sinyal, s_N gürültünün standart sapmasıdır. Gürültü sabitse S/N, ölçümün bağıl standart sapmasının tersidir: S/N = 1/RSD.\n\nYorum:\n• S/N ≈ 3: gözlenebilme sınırı civarı; sinyal güçlükle fark edilir.\n• S/N ≈ 10: tayin sınırı civarı; nicel ölçüm için alt sınır.\n• S/N < 2–3: sinyal gürültüden güvenle ayırt edilemez.\n\nS/N’yi iyileştirmek için sinyal ortalaması alınabilir: rastgele gürültüde n tarama ortalandığında S/N √n ile artar. S/N’yi iki katına çıkarmak dört kat tarama gerektirir.',
      en: 'S/N = x̄ / s_N, where x̄ is the mean signal and s_N the standard deviation of the noise. If the noise is constant, S/N is the reciprocal of the relative standard deviation: S/N = 1/RSD.\n\nInterpretation:\n• S/N ≈ 3: around the detection limit; the signal is barely recognisable.\n• S/N ≈ 10: around the quantitation limit; the lower bound for quantitative work.\n• S/N < 2–3: the signal cannot be reliably told apart from noise.\n\nS/N can be improved by signal averaging: for random noise, averaging n scans raises S/N by √n. Doubling S/N needs four times as many scans.',
    },
    usage: {
      tr: [
        'Kromatografi ve spektroskopide LOD ve LOQ’yu tahmin etmek (S/N = 3 ve 10).',
        'Cihazları, ayarları ya da sinyal işleme yöntemlerini karşılaştırmak.',
        'Gürültü, sinyalin olmadığı bir bölgede (ör. pikin yakınındaki taban çizgisinde) ölçülmelidir.',
        'Farmakopeler gürültüyü tepe-tepe genliğinden farklı biçimlerde tanımlayabilir; hangi tanımın kullanıldığını belirtin.',
      ],
      en: [
        'Estimating LOD and LOQ in chromatography and spectroscopy (S/N = 3 and 10).',
        'Comparing instruments, settings or signal-processing methods.',
        'Noise should be measured where there is no signal (e.g. on the baseline near the peak).',
        'Pharmacopoeias may define noise from the peak-to-peak amplitude in different ways; state which definition was used.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ortalama sinyal x̄ = 0,6; gürültünün standart sapması s_N = 0,02.',
        'S/N = 0,6 / 0,02; buna karşılık gelen RSD ≈ 1/30 ≈ %3,3.',
        'Sonuç: S/N = 30; değer 10’un oldukça üstünde olduğundan sinyal nicel ölçüm için yeterlidir.',
      ],
      en: [
        'Given: mean signal x̄ = 0.6, standard deviation of the noise s_N = 0.02.',
        'S/N = 0.6 / 0.02; the corresponding RSD ≈ 1/30 ≈ 3.3%.',
        'Result: S/N = 30; being well above 10, the signal is adequate for quantitative work.',
      ],
    },
    mistakes: {
      tr: [
        'Gürültü olarak standart sapma yerine tepe-tepe genliğini kullanıp sonucu doğrudan S/N = 3 ölçütüyle karşılaştırmak.',
        'Sinyal ortalamasının S/N’yi n ile doğru orantılı artırdığını sanmak (artış √n ile olur).',
        'Gürültüyü sinyalin bulunduğu bölgede ölçmek.',
      ],
      en: [
        'Using the peak-to-peak amplitude instead of the standard deviation as the noise and comparing directly with the S/N = 3 criterion.',
        'Thinking that signal averaging raises S/N in proportion to n (it rises with √n).',
        'Measuring the noise where the signal is present.',
      ],
    },
    related: ['lod-loq', 'iupac-detection-signal', 'descriptive'],
  },

  'selectivity-coefficient': {
    concept: {
      tr: 'Çok az analitik yöntem tam anlamıyla spesifiktir; çoğu yöntemde numunedeki başka türler de sinyale katkıda bulunur ya da onu azaltır. Seçicilik, yöntemin analite girişim yapan türlere göre ne kadar ayrıcalıklı yanıt verdiğidir.\n\nSeçicilik katsayısı bunu sayıyla ifade eder: girişim yapan türün duyarlılığının analitin duyarlılığına oranı. Katsayı ne kadar küçükse yöntem analite o kadar seçicidir.',
      en: 'Very few analytical methods are truly specific; in most, other species in the sample also contribute to the signal or reduce it. Selectivity is how preferentially a method responds to the analyte compared with interfering species.\n\nThe selectivity coefficient expresses this as a number: the sensitivity for the interferent divided by the sensitivity for the analyte. The smaller the coefficient, the more selective the method is for the analyte.',
    },
    meaning: {
      tr: 'Analit (A) ve girişim yapan tür (I) birlikte bulunduğunda toplam sinyal:\nS = k_A · C_A + k_I · C_I = k_A · (C_A + K_A,I · C_I), burada K_A,I = k_I / k_A.\n\nK_A,I · C_I terimi, girişim yapan türün “analit eşdeğeri” derişimidir. Buradan girişimin neden olduğu bağıl hata K_A,I · C_I / C_A olarak bulunur.\n\nYorum:\n• |K| ≪ 1: girişim önemsiz (yöntem seçici).\n• K ≈ 1: girişim yapan tür analitle aynı sinyali verir.\n• K < 0: girişim yapan tür sinyali azaltır (ör. bastırma).\n\nİyon seçici elektrotlarda benzer bir katsayı Nikolsky–Eisenman eşitliğinde aktivitelerle tanımlanır.',
      en: 'When the analyte (A) and an interferent (I) are both present, the total signal is:\nS = k_A · C_A + k_I · C_I = k_A · (C_A + K_A,I · C_I), where K_A,I = k_I / k_A.\n\nThe term K_A,I · C_I is the “analyte-equivalent” concentration of the interferent. The relative error caused by the interferent is therefore K_A,I · C_I / C_A.\n\nInterpretation:\n• |K| ≪ 1: negligible interference (the method is selective).\n• K ≈ 1: the interferent gives the same signal as the analyte.\n• K < 0: the interferent decreases the signal (e.g. suppression).\n\nFor ion-selective electrodes a similar coefficient is defined with activities in the Nikolsky–Eisenman equation.',
    },
    usage: {
      tr: [
        'Bir girişimin belirli bir numunede kabul edilebilir olup olmadığını değerlendirmek: önemli olan K’nın yanı sıra C_I / C_A oranıdır.',
        'Yöntem geliştirme ve validasyonda seçicilik/özgüllüğü belgelemek.',
        'k_A ve k_I, ayrı ayrı kalibrasyonların eğimlerinden bulunur; doğrusal ve toplanabilir yanıt varsayılır.',
      ],
      en: [
        'Judging whether an interference is acceptable in a given sample: what matters is the ratio C_I / C_A as well as K.',
        'Documenting selectivity/specificity during method development and validation.',
        'k_A and k_I are the slopes of separate calibrations; linear and additive responses are assumed.',
      ],
    },
    solution: {
      tr: [
        'Verilen: girişim yapan türün duyarlılığı k_I = 0,05; analitin duyarlılığı k_A = 2,5 (aynı birimlerde, sinyal / derişim).',
        'K_A,I = k_I / k_A = 0,05 / 2,5; girişim yapan tür birim derişim başına analitin 1/50’si kadar sinyal verir. C_I = 10 · C_A olan bir numunede bağıl hata K · C_I / C_A = 0,02 × 10 = 0,20 (%20 yüksek) olur.',
        'Sonuç: K_A,I = 0,02.',
      ],
      en: [
        'Given: sensitivity for the interferent k_I = 0.05, sensitivity for the analyte k_A = 2.5 (same units, signal / concentration).',
        'K_A,I = k_I / k_A = 0.05 / 2.5; per unit concentration the interferent gives 1/50 of the analyte’s signal. In a sample with C_I = 10 · C_A the relative error is K · C_I / C_A = 0.02 × 10 = 0.20 (20% high).',
        'Result: K_A,I = 0.02.',
      ],
    },
    mistakes: {
      tr: [
        'Küçük bir K’nın her zaman güvenli olduğunu sanmak; girişim yapan tür analitten çok daha derişikse hata büyük olabilir.',
        'Oranı ters almak (k_A / k_I).',
        'Farklı birimlerde (ör. biri mg/L, diğeri mol/L başına) duyarlılıkları oranlamak.',
      ],
      en: [
        'Assuming a small K is always safe; if the interferent is much more concentrated than the analyte, the error can still be large.',
        'Taking the ratio upside down (k_A / k_I).',
        'Dividing sensitivities expressed in different units (e.g. one per mg/L, the other per mol/L).',
      ],
    },
    related: ['nikolsky', 'lod-loq', 'std-addition-single'],
  },

  sandell: {
    concept: {
      tr: 'Sandell duyarlılığı, spektrofotometrik yöntemlerin duyarlılığını karşılaştırmak için kullanılan klasik bir ölçüttür. Işık yolu boyunca 1 cm² kesitli bir sütunda bulunduğunda 0,001 absorbans veren analit kütlesidir ve µg/cm² ile verilir.\n\nSandell duyarlılığı ne kadar küçükse yöntem o kadar duyarlıdır: daha az analit aynı absorbansı verir. Molar absorptiviteden farklı olarak analitin kütlesine dayanır, bu yüzden farklı elementlerin yöntemlerini kütle temelinde karşılaştırmayı kolaylaştırır.',
      en: 'Sandell sensitivity is a classical criterion for comparing the sensitivity of spectrophotometric methods. It is the mass of analyte which, contained in a column of 1 cm² cross-section along the light path, gives an absorbance of 0.001, and it is expressed in µg/cm².\n\nThe smaller the Sandell sensitivity, the more sensitive the method: less analyte gives the same absorbance. Unlike molar absorptivity it is based on the mass of the analyte, which makes it easy to compare methods for different elements on a mass basis.',
    },
    meaning: {
      tr: 'Türetme: Beer yasasına göre A = ε · b · c. A = 0,001 için c = 0,001 / (ε · b) mol/L’dir. Kesiti 1 cm², uzunluğu b cm olan sütunun hacmi b cm³ = b × 10⁻³ L’dir. Bu sütundaki analit kütlesi:\nm = c · V · M = [0,001 / (ε · b)] · (b × 10⁻³) · M g = 10⁻⁶ · M / ε g = M / ε µg.\n\nIşık yolu b sadeleşir; sonuç yalnızca M ve ε’ye bağlıdır:\nS (µg/cm²) = M (g/mol) / ε (L mol⁻¹ cm⁻¹).\n\nBuradaki M, raporlanan analitin (ör. Fe) molar kütlesidir, renkli kompleksin değil.',
      en: 'Derivation: by Beer’s law A = ε · b · c. For A = 0.001, c = 0.001 / (ε · b) mol/L. A column of 1 cm² cross-section and length b cm has a volume of b cm³ = b × 10⁻³ L. The mass of analyte in this column is:\nm = c · V · M = [0.001 / (ε · b)] · (b × 10⁻³) · M g = 10⁻⁶ · M / ε g = M / ε µg.\n\nThe path length b cancels; the result depends only on M and ε:\nS (µg/cm²) = M (g/mol) / ε (L mol⁻¹ cm⁻¹).\n\nHere M is the molar mass of the analyte being reported (e.g. Fe), not of the coloured complex.',
    },
    usage: {
      tr: [
        'Aynı analit için farklı kromojenik reaktiflerle geliştirilmiş spektrofotometrik yöntemleri karşılaştırmak.',
        'Yeni yöntemlerin yayınlarında ε ile birlikte duyarlılık ölçütü olarak vermek.',
        'Yalnızca Beer yasasının geçerli olduğu bölgede anlamlıdır; gözlenebilme sınırı hakkında doğrudan bilgi vermez, çünkü gürültüyü içermez.',
      ],
      en: [
        'Comparing spectrophotometric methods for the same analyte developed with different chromogenic reagents.',
        'Quoting a sensitivity criterion together with ε when publishing new methods.',
        'It is meaningful only where Beer’s law holds; it says nothing directly about the detection limit, because it ignores noise.',
      ],
    },
    solution: {
      tr: [
        'Verilen: demir için M(Fe) = 55,845 g/mol; Fe(II)–1,10-fenantrolin kompleksi için ε = 11 100 L mol⁻¹ cm⁻¹.',
        'S = M / ε = 55,845 / 11 100 (birimler türetmedeki gibi doğrudan µg/cm² verir).',
        'Sonuç: S = 0,005031 µg/cm² (yaklaşık 5,0 ng/cm²).',
      ],
      en: [
        'Given: for iron M(Fe) = 55.845 g/mol; for the Fe(II)–1,10-phenanthroline complex ε = 11 100 L mol⁻¹ cm⁻¹.',
        'S = M / ε = 55.845 / 11 100 (as shown in the derivation, the units give µg/cm² directly).',
        'Result: S = 0.005031 µg/cm² (about 5.0 ng/cm²).',
      ],
    },
    mistakes: {
      tr: [
        'Analit yerine renkli kompleksin molar kütlesini kullanmak.',
        'Büyük Sandell değerini “daha duyarlı” diye yorumlamak; tersi doğrudur.',
        'Sonucu g/cm² sanıp 10⁶ katlık hata yapmak.',
      ],
      en: [
        'Using the molar mass of the coloured complex instead of the analyte.',
        'Reading a larger Sandell value as “more sensitive”; the opposite is true.',
        'Taking the result as g/cm² and making an error of 10⁶.',
      ],
    },
    related: ['beer-lambert', 'lod-loq', 'linear-regression'],
  },

  'linear-regression': {
    concept: {
      tr: 'Dış kalibrasyonda derişimi bilinen bir dizi standart ölçülür ve sinyal–derişim ilişkisini en iyi tanımlayan doğru bulunur. En küçük kareler yöntemi, ölçülen sinyallerin doğrudan düşey uzaklıklarının (artıkların) kareleri toplamını en küçük yapan eğimi ve kesişimi verir.\n\nKalibrasyon doğrusu kurulduktan sonra bilinmeyen numunenin sinyali doğrudan derişime çevrilir. Regresyon istatistikleri ayrıca eğim, kesişim ve bulunan derişimin belirsizliğini verir; böylece sonuç bir güven aralığıyla raporlanabilir.',
      en: 'In external calibration a series of standards of known concentration is measured and the line that best describes the signal–concentration relation is found. The least-squares method gives the slope and intercept that minimise the sum of squared vertical distances (residuals) of the measured signals from the line.\n\nOnce the calibration line is set up, the signal of an unknown is converted directly to a concentration. The regression statistics also give the uncertainties of the slope, intercept and the calculated concentration, so the result can be reported with a confidence interval.',
    },
    meaning: {
      tr: 'y = b₀ + b₁ · x. S_xx = Σ(xᵢ − x̄)² ve S_xy = Σ(xᵢ − x̄)(yᵢ − ȳ) ile:\n• Eğim b₁ = S_xy / S_xx (duyarlılık), kesişim b₀ = ȳ − b₁ · x̄.\n• Artıkların standart sapması s_r = √[Σ(yᵢ − ŷᵢ)² / (n − 2)]; iki parametre hesaplandığı için serbestlik derecesi n − 2’dir.\n\nBilinmeyen: k tekrarın ortalama sinyali ȳ_u ise x = (ȳ_u − b₀) / b₁ ve\ns_x = (s_r / b₁) · √[1/k + 1/n + (ȳ_u − ȳ)² / (b₁² · S_xx)].\nGüven aralığı: x ± t · s_x (n − 2 serbestlik derecesi).\n\nKökteki üç terim sırasıyla numunenin tekrar sayısını, kalibrasyon noktası sayısını ve numunenin kalibrasyonun merkezinden uzaklığını yansıtır: belirsizlik doğrunun ortasında en küçüktür.\n\nVarsayımlar: x değerleri hatasızdır, y hataları normal dağılır ve tüm derişimlerde aynı varyansa sahiptir. Varyans derişimle artıyorsa, sᵢ sütunu girilerek ağırlıklı regresyon yapılmalıdır.',
      en: 'y = b₀ + b₁ · x. With S_xx = Σ(xᵢ − x̄)² and S_xy = Σ(xᵢ − x̄)(yᵢ − ȳ):\n• Slope b₁ = S_xy / S_xx (sensitivity), intercept b₀ = ȳ − b₁ · x̄.\n• Standard deviation about regression s_r = √[Σ(yᵢ − ŷᵢ)² / (n − 2)]; two parameters were estimated, so there are n − 2 degrees of freedom.\n\nUnknown: if ȳ_u is the mean signal of k replicates, x = (ȳ_u − b₀) / b₁ and\ns_x = (s_r / b₁) · √[1/k + 1/n + (ȳ_u − ȳ)² / (b₁² · S_xx)].\nConfidence interval: x ± t · s_x (n − 2 degrees of freedom).\n\nThe three terms under the root reflect, in turn, the number of replicates of the sample, the number of calibration points and the distance of the sample from the centre of the calibration: the uncertainty is smallest in the middle of the line.\n\nAssumptions: the x values are error-free, and the y errors are normally distributed with the same variance at all concentrations. If the variance grows with concentration, enter the sᵢ column for a weighted regression.',
    },
    usage: {
      tr: [
        'Matriks etkisinin olmadığı ya da standartların matrikse uydurulabildiği durumlarda dış kalibrasyon.',
        'Bilinmeyenin sinyali kalibrasyon aralığının içinde olmalıdır; doğrunun dışına ekstrapolasyon yapılmaz.',
        'r ya da R²’nin 1’e yakın olması doğrusallığı kanıtlamaz; artıkların grafiği sistematik bir eğrilik göstermemelidir.',
        'En az 5–6 kalibrasyon noktası ve bilinmeyenin birkaç tekrarlı ölçümü belirsizliği önemli ölçüde azaltır.',
      ],
      en: [
        'External calibration when there is no matrix effect or the standards can be matrix-matched.',
        'The unknown’s signal must lie inside the calibration range; do not extrapolate beyond the line.',
        'An r or R² close to 1 does not prove linearity; the residual plot should show no systematic curvature.',
        'At least 5–6 calibration points and replicate measurements of the unknown reduce the uncertainty considerably.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: 6 standart, x = 0; 0,1; 0,2; 0,3; 0,4; 0,5 ve y = 0; 12,36; 24,83; 35,91; 48,79; 60,42. x̄ = 0,25; ȳ = 30,385; S_xx = 0,175; S_xy = 21,12.',
        'b₁ = 21,12 / 0,175 = 120,7 ± 0,9641; b₀ = 30,385 − 120,7 × 0,25 = 0,2086 ± 0,2919 (sıfırdan anlamlı farklı değil); s_r = 0,4033; R² = 0,9997.',
        'Bilinmeyen (k = 3 tekrarın ortalaması ȳ_u = 29,32): x = (29,32 − 0,2086) / 120,7 = 0,2412; s_x = (0,4033 / 120,7) × √(1/3 + 1/6 + 0,000445) = 0,002364.',
        'Sonuç: t (%95, 4 serbestlik derecesi) = 2,776 ile derişim x = 0,2412 ± 0,006562 (standartların derişim biriminde).',
      ],
      en: [
        'Sample data: 6 standards, x = 0, 0.1, 0.2, 0.3, 0.4, 0.5 and y = 0, 12.36, 24.83, 35.91, 48.79, 60.42. x̄ = 0.25, ȳ = 30.385, S_xx = 0.175, S_xy = 21.12.',
        'b₁ = 21.12 / 0.175 = 120.7 ± 0.9641; b₀ = 30.385 − 120.7 × 0.25 = 0.2086 ± 0.2919 (not significantly different from zero); s_r = 0.4033; R² = 0.9997.',
        'Unknown (mean of k = 3 replicates ȳ_u = 29.32): x = (29.32 − 0.2086) / 120.7 = 0.2412; s_x = (0.4033 / 120.7) × √(1/3 + 1/6 + 0.000445) = 0.002364.',
        'Result: with t (95%, 4 degrees of freedom) = 2.776, the concentration is x = 0.2412 ± 0.006562 (in the concentration unit of the standards).',
      ],
    },
    mistakes: {
      tr: [
        'Yüksek R²’yi doğrusallık ve doğruluk kanıtı saymak.',
        'Güven aralığında n − 2 yerine n − 1 serbestlik derecesi kullanmak.',
        'Bilinmeyenin derişimini kalibrasyon aralığının dışında ekstrapolasyonla bulmak ya da matriks etkisi varken dış kalibrasyona güvenmek.',
      ],
      en: [
        'Treating a high R² as proof of linearity and accuracy.',
        'Using n − 1 instead of n − 2 degrees of freedom for the confidence interval.',
        'Extrapolating outside the calibration range, or relying on external calibration when there is a matrix effect.',
      ],
    },
    related: ['std-addition-multi', 'lod-loq', 'response-factor', 'table-critical'],
  },

  'std-addition-multi': {
    concept: {
      tr: 'Çok noktalı standart eklemede numunenin eşit hacimli birkaç kısmına artan miktarlarda standart eklenir (biri eklemesiz kalır) ve hepsi aynı son hacme tamamlanır. Sinyaller eklenen derişime karşı grafiğe geçirilir ve doğru x eksenini kestiği noktaya kadar uzatılır.\n\nTek noktalı eklemeye göre üstünlüğü, doğrusallığın görülebilmesi ve sonucun tek bir ölçüm yerine tüm noktalardan elde edilmesidir. Matriks etkisi tüm çözeltilerde aynı olduğundan analitin duyarlılığı numunenin kendi ortamında ölçülmüş olur.',
      en: 'In multiple standard additions, increasing amounts of standard are added to several equal portions of the sample (one receives none) and all are made up to the same final volume. The signals are plotted against the added concentration and the line is extended until it crosses the x-axis.\n\nCompared with a single addition, linearity can be checked and the result is based on all points rather than one measurement. Because the matrix effect is the same in every solution, the sensitivity for the analyte is measured in the sample’s own environment.',
    },
    meaning: {
      tr: 'Ölçülen çözeltideki analit derişimi Cₓ ve eklenen derişim C_ekl ise sinyal S = k · (Cₓ + C_ekl) olur. Bu, eğimi b₁ = k ve kesişimi b₀ = k · Cₓ olan bir doğrudur. Dolayısıyla:\nCₓ = b₀ / b₁, yani x eksenini kestiği noktanın mutlak değeri (doğru x = −Cₓ’te sıfır olur).\n\nSonucun standart sapması:\ns = (s_r / b₁) · √[1/n + ȳ² / (b₁² · S_xx)].\nSonuç ölçülen noktaların dışına ekstrapolasyonla bulunduğundan, aynı kalitedeki dış kalibrasyona göre belirsizlik genellikle daha büyüktür.\n\nCₓ, eklemelerin yapıldığı ölçüm çözeltisindeki derişimdir (x ekseninin biriminde). Orijinal numunedeki derişim için seyreltme faktörü uygulanır: Cₓ(numune) = Cₓ · V_son / Vₓ.',
      en: 'If Cₓ is the analyte concentration in the measured solution and C_add the added concentration, the signal is S = k · (Cₓ + C_add). This is a line with slope b₁ = k and intercept b₀ = k · Cₓ. Hence:\nCₓ = b₀ / b₁, i.e. the absolute value of the x-intercept (the line reaches zero at x = −Cₓ).\n\nStandard deviation of the result:\ns = (s_r / b₁) · √[1/n + ȳ² / (b₁² · S_xx)].\nSince the result is found by extrapolating outside the measured points, its uncertainty is usually larger than for an external calibration of the same quality.\n\nCₓ is the concentration in the measured solution to which the additions were made (in the unit of the x-axis). For the original sample apply the dilution factor: Cₓ(sample) = Cₓ · V_final / Vₓ.',
    },
    usage: {
      tr: [
        'Matriks etkisinin belirgin olduğu numunelerde (AAS, ICP, elektroanalitik yöntemler).',
        'Yanıt, sıfır eklemeden en yüksek eklemeye ve x-kesişimine kadar doğrusal olmalıdır; en yüksek ekleme sinyali yaklaşık 2–3 katına çıkarmalıdır.',
        'Sinyaller kör düzeltmeli olmalıdır; reaktiflerden gelen sinyal kesişime eklenir ve sonucu yükseltir.',
        'Eklenen standart hacmi x ekseni olarak kullanıldıysa (son hacim sabit), Cₓ = C_std · |x-kesişimi| / Vₓ ile hesaplanır.',
      ],
      en: [
        'Samples with a clear matrix effect (AAS, ICP, electroanalytical methods).',
        'The response must be linear from zero addition to the highest addition and down to the x-intercept; the highest addition should raise the signal about 2–3 times.',
        'Signals must be blank-corrected; a signal from the reagents adds to the intercept and raises the result.',
        'If the volume of standard added is used as the x-axis (constant final volume), Cₓ = C_std · |x-intercept| / Vₓ.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: eklenen derişim x = 0, 1, 2, 3, 4; sinyal y = 0,215; 0,345; 0,473; 0,600; 0,729 (n = 5; x̄ = 2, ȳ = 0,4724, S_xx = 10).',
        'Regresyon: b₁ = 0,1283; b₀ = 0,2158; s_r = 0,0008756; R² ≈ 1,000.',
        'Cₓ = b₀ / b₁ = 0,2158 / 0,1283 = 1,682; s = (0,0008756 / 0,1283) × √(1/5 + 0,4724² / (0,1283² × 10)) = 0,008512.',
        'Sonuç: t (%95, 3 serbestlik derecesi) = 3,182 ile Cₓ = 1,682 ± 0,02709 (eklenen derişimin biriminde, ölçülen çözeltide).',
      ],
      en: [
        'Sample data: added concentration x = 0, 1, 2, 3, 4; signal y = 0.215, 0.345, 0.473, 0.600, 0.729 (n = 5; x̄ = 2, ȳ = 0.4724, S_xx = 10).',
        'Regression: b₁ = 0.1283, b₀ = 0.2158, s_r = 0.0008756, R² ≈ 1.000.',
        'Cₓ = b₀ / b₁ = 0.2158 / 0.1283 = 1.682; s = (0.0008756 / 0.1283) × √(1/5 + 0.4724² / (0.1283² × 10)) = 0.008512.',
        'Result: with t (95%, 3 degrees of freedom) = 3.182, Cₓ = 1.682 ± 0.02709 (in the unit of the added concentration, in the measured solution).',
      ],
    },
    mistakes: {
      tr: [
        'x-kesişimini işaretiyle (negatif) raporlamak ya da kesişimi eğimle karıştırmak.',
        'Seyreltme faktörünü unutmak: sonuç ölçülen çözeltiye aittir.',
        'Doğrusal aralığı aşan eklemeler yapmak; eğrilik ekstrapolasyonu ve sonucu bozar.',
      ],
      en: [
        'Reporting the x-intercept with its (negative) sign, or confusing the intercept with the slope.',
        'Forgetting the dilution factor: the result refers to the measured solution.',
        'Making additions beyond the linear range; curvature spoils the extrapolation and the result.',
      ],
    },
    related: ['std-addition-single', 'linear-regression', 'internal-standard'],
  },
};

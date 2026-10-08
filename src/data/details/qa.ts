import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Quality Assurance module (undergraduate level).
 * Formula tools: the last line of each worked solution states the result the calculator gives
 * for the tool's first example (checked by tests). Custom tools: the worked solution uses the
 * tool's own default data.
 */
export const QA_DETAILS: Record<string, ToolDetail> = {
  recovery: {
    concept: {
      tr: 'Geri kazanım deneyinde numuneye bilinen miktarda analit eklenir (spike) ve yöntemin bu eklemenin ne kadarını “bulduğu” ölçülür. Sertifikalı referans madde bulunmadığında yöntemin gerçeğe yakınlığını (trueness) ve matriks etkilerini kontrol etmenin en pratik yoludur.\n\nAynı numune hem eklemesiz hem eklemeli olarak analiz edildiğinden numunenin kendi analit içeriği farktan çıkar; geriye yalnızca eklenen miktarın ne kadar iyi ölçüldüğü kalır.',
      en: 'In a recovery (spike) experiment a known amount of analyte is added to a sample and we measure how much of that addition the method “finds”. When no certified reference material is available, it is the most practical check of trueness and of matrix effects.\n\nBecause the same sample is analysed both unspiked and spiked, the native analyte content cancels in the difference; what remains is how well the added amount is measured.',
    },
    meaning: {
      tr: '%R = (C_eklemeli − C_eklemesiz) / C_eklenen × 100.\n\n• Pay, eklemenin ölçülen kısmıdır; payda ise gerçekte eklenen miktardır.\n• %100 tam geri kazanımdır. %100’ün altı kayıp (eksik ekstraksiyon, bozunma, sinyal baskılanması), üstü ise girişim ya da sinyal artışı olduğunu düşündürür.\n• Üç derişim aynı birimde ve aynı son hacme göre ifade edilmelidir. Ekleme hacmi numuneyi seyreltiyorsa bu düzeltilmelidir.\n\nKabul aralığı analit düzeyine bağlıdır: eser düzeylerde daha geniş bir aralık kabul edilir.',
      en: '%R = (C_spiked − C_unspiked) / C_added × 100.\n\n• The numerator is the part of the spike that was measured; the denominator is the amount actually added.\n• 100% is complete recovery. Below 100% suggests losses (incomplete extraction, degradation, signal suppression); above 100% suggests interference or signal enhancement.\n• All three concentrations must be in the same unit and referred to the same final volume. If the spike volume dilutes the sample, correct for it.\n\nThe acceptance range depends on the analyte level: wider ranges are accepted at trace levels.',
    },
    usage: {
      tr: [
        'Yöntem doğrulamasında gerçeğe yakınlığı ve matriks etkisini değerlendirmek.',
        'Rutin analizde her seride bir eklemeli numune ile yöntemin çalıştığını kontrol etmek.',
        'Ekleme düzeyi, numunedeki analit düzeyine yakın seçilmelidir; çok büyük bir ekleme sorunları gizler.',
        'Sınırlama: eklenen analit, matrikse doğal analit kadar sıkı bağlanmamış olabilir; bu yüzden eklemeli geri kazanım gerçek geri kazanımı olduğundan iyi gösterebilir.',
      ],
      en: [
        'Assessing trueness and matrix effects during method validation.',
        'Checking in routine work that the method performs, with one spiked sample per batch.',
        'Choose a spike level close to the native analyte level; a very large spike hides problems.',
        'Limitation: added analyte may not be bound to the matrix as tightly as native analyte, so spike recovery can look better than the true recovery.',
      ],
    },
    solution: {
      tr: [
        'Verilen: eklemeli numunede bulunan C = 14,6; eklemesiz numunede bulunan C = 5,0; eklenen miktar = 10,0 (hepsi aynı birimde, ör. mg/L).',
        'Eklemeden gelen ölçülen artış: 14,6 − 5,0 = 9,6.',
        '%R = 9,6 / 10,0 × 100.',
        'Sonuç: %R = 96 (eklemenin %96’sı geri kazanıldı).',
      ],
      en: [
        'Given: found in spiked sample C = 14.6; found in unspiked sample C = 5.0; amount added = 10.0 (all in the same unit, e.g. mg/L).',
        'Measured increase due to the spike: 14.6 − 5.0 = 9.6.',
        '%R = 9.6 / 10.0 × 100.',
        'Result: %R = 96 (96% of the spike was recovered).',
      ],
    },
    mistakes: {
      tr: [
        'Eklemesiz numunenin sonucunu çıkarmayı unutmak (14,6 / 10 = %146 gibi anlamsız değerler çıkar).',
        'Ekleme hacminin yol açtığı seyreltmeyi hesaba katmamak.',
        'Eklemeyi ekstraksiyondan sonra yapıp sonucu tüm yöntemin geri kazanımı saymak; ekleme, incelenen adımlardan önce yapılmalıdır.',
      ],
      en: [
        'Forgetting to subtract the unspiked result (14.6 / 10 gives a meaningless 146%).',
        'Ignoring the dilution caused by the spike volume.',
        'Spiking after the extraction and calling it the recovery of the whole method; the spike must be added before the steps under study.',
      ],
    },
    related: ['recovery-correction', 'bias', 'std-addition-single', 't-test-known'],
  },

  bias: {
    concept: {
      tr: 'Sapma (bias), çok sayıda ölçümün ortalamasının gerçek ya da kabul edilen referans değerden farkıdır; sistematik hatanın ölçüsüdür. Sertifikalı referans madde (CRM) analiz edildiğinde ya da yeterlilik testinde atanan değerle karşılaştırıldığında sapma, referans değerin yüzdesi olarak verilir (D%).\n\nSapma, kesinlikten (tekrarlanan ölçümlerin birbirine yakınlığı) bağımsızdır: çok kesin bir yöntem bile büyük sapmaya sahip olabilir.',
      en: 'Bias is the difference between the mean of many measurements and the true or accepted reference value; it measures systematic error. When a certified reference material (CRM) is analysed, or a result is compared with the assigned value in proficiency testing, bias is expressed as a percentage of the reference value (D%).\n\nBias is independent of precision (closeness of repeated results): even a very precise method can have a large bias.',
    },
    meaning: {
      tr: '%B = (x − x₀) / x₀ × 100.\n\n• İşaret önemlidir: negatif sapma sonucun düşük, pozitif sapma yüksek çıktığını gösterir.\n• x tek bir sonuç da olabilir, tekrarların ortalaması da. Tek sonuçtan hesaplanan sapma rastgele hatayı da içerir.\n• Sapmanın anlamlı olup olmadığı istatistiksel olarak sınanır: n ölçümün ortalaması için t = |x̄ − x₀|·√n / s, tablodaki t değeriyle karşılaştırılır. CRM’nin kendi belirsizliği de hesaba katılmalıdır.\n\nGeri kazanım ile ilişkisi: %R ≈ 100 + %B.',
      en: '%B = (x − x₀) / x₀ × 100.\n\n• The sign matters: a negative bias means results are low, a positive bias means they are high.\n• x can be a single result or the mean of replicates. A bias from a single result also contains random error.\n• Whether a bias is significant is tested statistically: for the mean of n results, t = |x̄ − x₀|·√n / s is compared with the tabulated t. The uncertainty of the CRM value should also be considered.\n\nRelation to recovery: %R ≈ 100 + %B.',
    },
    usage: {
      tr: [
        'CRM analiziyle yöntem doğrulamasında gerçeğe yakınlığı ifade etmek.',
        'Yeterlilik testlerinde sonucun atanan değerden yüzde farkını (D%) raporlamak.',
        'Yöntem karşılaştırmasında referans yönteme göre sapmayı göstermek.',
        'Tek bir yüzde değer, sapmanın anlamlı olup olmadığını söylemez; t-testi ve belirsizliklerle birlikte değerlendirin.',
      ],
      en: [
        'Expressing trueness when validating a method with a CRM.',
        'Reporting the percentage difference (D%) from the assigned value in proficiency testing.',
        'Showing the bias of a method against a reference method.',
        'A percentage alone does not say whether the bias is significant; judge it with a t-test and the uncertainties.',
      ],
    },
    solution: {
      tr: [
        'Verilen: bulunan değer x = 48,7; referans (sertifika) değeri x₀ = 50,0 (aynı birimde).',
        'Fark: x − x₀ = 48,7 − 50,0 = −1,3.',
        '%B = −1,3 / 50,0 × 100.',
        'Sonuç: %B = -2,6 (sonuç referansın %2,6 altında).',
      ],
      en: [
        'Given: measured value x = 48.7; reference (certified) value x₀ = 50.0 (same unit).',
        'Difference: x − x₀ = 48.7 − 50.0 = −1.3.',
        '%B = −1.3 / 50.0 × 100.',
        'Result: %B = -2.6 (the result is 2.6% below the reference).',
      ],
    },
    mistakes: {
      tr: [
        'Paydaya referans değer yerine ölçülen değeri koymak.',
        'İşareti atmak; düşük ve yüksek sonuçlar farklı nedenlere işaret eder.',
        'Küçük bir sapmayı, kesinlik ve referans belirsizliğiyle karşılaştırmadan “anlamlı” saymak.',
      ],
      en: [
        'Dividing by the measured value instead of the reference value.',
        'Dropping the sign; low and high results point to different causes.',
        'Calling a small bias “significant” without comparing it with the precision and the reference uncertainty.',
      ],
    },
    related: ['recovery', 't-test-known', 'relative-error', 'pt-z-score'],
  },

  'recovery-correction': {
    concept: {
      tr: 'Yöntemin geri kazanımı %100 değilse ölçülen sonuç numunedeki gerçek miktarı düşük (ya da yüksek) gösterir. Geri kazanım düzeltmesi, gözlenen sonucu ölçülen geri kazanıma bölerek analitin numunedeki gerçek derişimini tahmin eder.\n\nDüzeltme yapılıp yapılmayacağı yönteme ve mevzuata bağlı bir karardır. Uluslararası kılavuzlar her durumda raporda sonucun düzeltilmiş olup olmadığının ve kullanılan geri kazanımın açıkça belirtilmesini ister.',
      en: 'If the method recovery is not 100%, the measured result understates (or overstates) the true amount in the sample. Recovery correction divides the observed result by the measured recovery to estimate the true analyte concentration.\n\nWhether to correct is a decision set by the method and by regulations. International guidelines require that the report always states whether the result was corrected and which recovery was used.',
    },
    meaning: {
      tr: 'C_düz = C_göz / %R × 100. %R / 100 kesir olarak geri kazanımdır; gözlenen sonuç bu kesre bölünür.\n\n• %R < 100 ise düzeltilmiş sonuç gözlenenden büyük, %R > 100 ise küçük olur.\n• Düzeltme, geri kazanımın belirsizliğini sonuca taşır: bağıl belirsizlikler kareler toplamı ile birleşir, u(C_düz)/C_düz = √[(u(C_göz)/C_göz)² + (u(R)/R)²].\n• Geri kazanım, düzeltilen numuneyle aynı matriks ve benzer derişimde belirlenmiş olmalıdır.',
      en: 'C_corr = C_obs / %R × 100. %R / 100 is the recovery as a fraction, and the observed result is divided by it.\n\n• If %R < 100 the corrected result is larger than the observed one; if %R > 100 it is smaller.\n• Correction carries the uncertainty of the recovery into the result: relative uncertainties add in quadrature, u(C_corr)/C_corr = √[(u(C_obs)/C_obs)² + (u(R)/R)²].\n• The recovery must have been determined in the same matrix and at a similar level as the corrected sample.',
    },
    usage: {
      tr: [
        'Kalıntı ve kirletici analizlerinde, mevzuat istiyorsa sonuçları geri kazanıma göre düzeltmek.',
        'Geri kazanım %100’den anlamlı biçimde farklı değilse düzeltme genellikle gereksizdir.',
        'Çok düşük geri kazanımlar (ör. %50’nin altı) düzeltmeyle “kurtarılmamalı”; yöntem iyileştirilmelidir.',
      ],
      en: [
        'Correcting residue and contaminant results for recovery when regulations require it.',
        'If the recovery is not significantly different from 100%, correction is usually unnecessary.',
        'Very low recoveries (e.g. below 50%) should not be “rescued” by correction; improve the method instead.',
      ],
    },
    solution: {
      tr: [
        'Verilen: gözlenen sonuç C_göz = 4,8; yöntemin geri kazanımı %R = 96.',
        'Kesir olarak geri kazanım: 96 / 100 = 0,96.',
        'C_düz = 4,8 / 0,96.',
        'Sonuç: C_düz = 5 (5,0; gözlenenle aynı birimde).',
      ],
      en: [
        'Given: observed result C_obs = 4.8; method recovery %R = 96.',
        'Recovery as a fraction: 96 / 100 = 0.96.',
        'C_corr = 4.8 / 0.96.',
        'Result: C_corr = 5 (5.0; same unit as the observed result).',
      ],
    },
    mistakes: {
      tr: [
        'Bölmek yerine çarpmak (4,8 × 0,96 = 4,6; düzeltme ters yönde yapılmış olur).',
        'Düzeltmeyi yapıp raporda belirtmemek.',
        'Başka bir matrikste ya da çok farklı derişimde ölçülmüş geri kazanımı kullanmak.',
      ],
      en: [
        'Multiplying instead of dividing (4.8 × 0.96 = 4.6; the correction goes the wrong way).',
        'Correcting without saying so in the report.',
        'Using a recovery measured in a different matrix or at a very different level.',
      ],
    },
    related: ['recovery', 'bias', 'uncertainty-budget'],
  },

  horwitz: {
    concept: {
      tr: 'Horwitz, yüzlerce laboratuvarlar arası (ortak) çalışmanın sonuçlarını incelediğinde, laboratuvarlar arası bağıl standart sapmanın analite, matrikse ve yönteme pek bağlı olmadığını, büyük ölçüde yalnızca analitin derişimine bağlı olduğunu buldu. Derişim azaldıkça RSD artar; grafiği bu nedenle “Horwitz trompeti” olarak anılır.\n\nHorwitz eşitliği, bir derişim düzeyinde makul olarak beklenebilecek yeniden üretilebilirliği (RSD_R) tahmin eder ve kesinlik verilerini değerlendirmede bir ölçüt olarak kullanılır.',
      en: 'When Horwitz examined the results of hundreds of interlaboratory (collaborative) studies, he found that the between-laboratory relative standard deviation depends little on the analyte, matrix or method and mainly on the analyte concentration. RSD rises as concentration falls; the plot is therefore known as the “Horwitz trumpet”.\n\nThe Horwitz equation predicts the reproducibility (RSD_R) that can reasonably be expected at a given level and is used as a benchmark for precision data.',
    },
    meaning: {
      tr: '%RSD_R = 2^(1 − 0,5·log C). C birimsiz kütle kesridir: %100 = 1, %1 = 0,01, 1 ppm = 10⁻⁶, 1 ppb = 10⁻⁹.\n\n• C = 1 için %RSD_R = 2; %1’de 4, 1 ppm’de 16, 1 ppb’de yaklaşık 45.\n• Kural: derişim 100 kat azaldıkça log C 2 azalır, üs 1 artar ve beklenen RSD iki katına çıkar.\n• Eşdeğer biçim: σ_R = 0,02 · C^0,8495 (σ_R de kütle kesri cinsinden).\n\nÇok düşük derişimlerde (yaklaşık 10⁻⁷’nin altında) eşitlik gerçekçi olmayan büyük RSD’ler verir. Thompson’ın önerdiği düzeltmede bu bölgede RSD_R yaklaşık %22’de sabit alınır.',
      en: '%RSD_R = 2^(1 − 0.5·log C). C is a dimensionless mass fraction: 100% = 1, 1% = 0.01, 1 ppm = 10⁻⁶, 1 ppb = 10⁻⁹.\n\n• For C = 1, %RSD_R = 2; at 1% it is 4, at 1 ppm 16, at 1 ppb about 45.\n• Rule of thumb: each 100-fold decrease in concentration lowers log C by 2, raises the exponent by 1 and doubles the expected RSD.\n• Equivalent form: σ_R = 0.02 · C^0.8495 (σ_R also as a mass fraction).\n\nAt very low levels (below about 10⁻⁷) the equation gives unrealistically large RSDs. In Thompson’s modification the RSD_R is taken as about 22% in that region.',
    },
    usage: {
      tr: [
        'Ortak çalışmalarda gözlenen yeniden üretilebilirliği değerlendirmek (HorRat hesabı için).',
        'Yeterlilik testlerinde uygunluk standart sapmasını (σ̂) belirlemenin bir yolu olarak.',
        'Yeni bir yöntemin hedef kesinliğini planlamak.',
        'Laboratuvarlar arası (R) bir tahmindir; tek laboratuvar içi tekrarlanabilirlik bundan daha küçük olmalıdır.',
      ],
      en: [
        'Judging the reproducibility observed in a collaborative study (for the HorRat).',
        'As one way of setting the standard deviation for proficiency assessment (σ̂) in PT schemes.',
        'Planning the target precision of a new method.',
        'It predicts between-laboratory (R) precision; single-laboratory repeatability should be smaller.',
      ],
    },
    solution: {
      tr: [
        'Verilen: analit düzeyi 1 ppm → kütle kesri C = 10⁻⁶.',
        'log C = −6; üs = 1 − 0,5 × (−6) = 1 + 3 = 4.',
        '%RSD_R = 2⁴.',
        'Sonuç: %RSD_R = 16 (1 ppm düzeyinde laboratuvarlar arası yaklaşık %16 RSD beklenir).',
      ],
      en: [
        'Given: analyte level 1 ppm → mass fraction C = 10⁻⁶.',
        'log C = −6; exponent = 1 − 0.5 × (−6) = 1 + 3 = 4.',
        '%RSD_R = 2⁴.',
        'Result: %RSD_R = 16 (about 16% between-laboratory RSD is expected at the 1 ppm level).',
      ],
    },
    mistakes: {
      tr: [
        'C’yi kütle kesri yerine yüzde ya da ppm olarak girmek (1 ppm için 1 değil 10⁻⁶ girilmelidir).',
        'log yerine ln kullanmak.',
        'Horwitz değerini tek laboratuvarın tekrarlanabilirliği için hedef sanmak.',
      ],
      en: [
        'Entering C as a percentage or in ppm instead of a mass fraction (for 1 ppm enter 10⁻⁶, not 1).',
        'Using ln instead of log.',
        'Treating the Horwitz value as the target for a single laboratory’s repeatability.',
      ],
    },
    related: ['horrat', 'between-lab-sd', 'pt-z-score'],
  },

  horrat: {
    concept: {
      tr: 'HorRat, bir ortak çalışmada gözlenen laboratuvarlar arası RSD’nin Horwitz eşitliğinin öngördüğü RSD’ye oranıdır. Böylece farklı analit ve derişimlerdeki kesinlik verileri tek bir ölçekte karşılaştırılabilir.\n\nAOAC ve benzeri kuruluşlar, bir yöntemin laboratuvarlar arası kesinliğinin kabul edilebilir olup olmadığına karar verirken HorRat değerini kullanır.',
      en: 'HorRat is the ratio of the between-laboratory RSD observed in a collaborative study to the RSD predicted by the Horwitz equation. It lets precision data for different analytes and levels be compared on a single scale.\n\nAOAC and similar bodies use the HorRat when deciding whether a method’s between-laboratory precision is acceptable.',
    },
    meaning: {
      tr: 'HorRat = RSD_gözlenen / RSD_Horwitz. İki RSD aynı derişim düzeyine ait olmalıdır.\n\n• HorRat ≈ 1: yöntem, o düzey için tipik kesinliktedir.\n• 0,5–2: kabul edilebilir kesinlik.\n• > 2: kesinlik beklenenden kötü; yöntemde, numunenin homojenliğinde ya da çalışmanın yürütülmesinde sorun olabilir.\n• < 0,5: beklenmeyecek kadar iyi; sonuçların önceden ortalanmış olması ya da çok deneyimli laboratuvarlar gibi nedenler araştırılmalıdır.\n\nTekrarlanabilirlik (r) verisi için de hesaplanabilir; bu durumda öngörülen değer daha küçük olduğundan kabul aralığı daha düşüktür.',
      en: 'HorRat = RSD_observed / RSD_Horwitz. Both RSDs must refer to the same concentration level.\n\n• HorRat ≈ 1: the method has the typical precision for that level.\n• 0.5–2: acceptable precision.\n• > 2: precision worse than expected; there may be problems with the method, the sample homogeneity or the conduct of the study.\n• < 0.5: unexpectedly good; look for causes such as results averaged beforehand or highly experienced laboratories.\n\nIt can also be computed for repeatability (r) data; the predicted value is then smaller, so the acceptance range is lower.',
    },
    usage: {
      tr: [
        'Ortak çalışmada yöntemin laboratuvarlar arası kesinliğini değerlendirmek.',
        'Farklı derişim düzeylerindeki kesinlik verilerini karşılaştırmak.',
        'Önce Horwitz aracıyla aynı derişim için RSD_Horwitz hesaplanır.',
        'Horwitz eşitliğinin zayıf kaldığı çok düşük düzeylerde dikkatli yorumlanmalıdır.',
      ],
      en: [
        'Evaluating a method’s between-laboratory precision in a collaborative study.',
        'Comparing precision data obtained at different concentration levels.',
        'First compute RSD_Horwitz for the same level with the Horwitz tool.',
        'Interpret with care at very low levels where the Horwitz equation is weak.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ortak çalışmada gözlenen RSD = %12; aynı düzey (1 ppm) için Horwitz RSD = %16.',
        'HorRat = 12 / 16.',
        'Sonuç: HorRat = 0,75; 0,5–2 aralığında olduğundan kesinlik kabul edilebilir.',
      ],
      en: [
        'Given: observed RSD in the collaborative study = 12%; Horwitz RSD for the same level (1 ppm) = 16%.',
        'HorRat = 12 / 16.',
        'Result: HorRat = 0.75; it lies within 0.5–2, so the precision is acceptable.',
      ],
    },
    mistakes: {
      tr: [
        'Tek laboratuvar tekrarlanabilirlik RSD’sini laboratuvarlar arası Horwitz değeriyle oranlayıp kabul aralığını değiştirmeden yorumlamak.',
        'Gözlenen RSD ile farklı bir derişimin Horwitz değerini karşılaştırmak.',
        'HorRat < 0,5’i sorgusuz “mükemmel” kabul etmek.',
      ],
      en: [
        'Dividing a single-laboratory repeatability RSD by the between-laboratory Horwitz value and using the same acceptance range.',
        'Comparing the observed RSD with the Horwitz value for a different level.',
        'Accepting HorRat < 0.5 as “excellent” without question.',
      ],
    },
    related: ['horwitz', 'between-lab-sd', 'anova'],
  },

  'type-b-uncertainty': {
    concept: {
      tr: 'GUM (Ölçümde Belirsizlik İfadesi Kılavuzu), belirsizlik bileşenlerini değerlendirilme yöntemine göre ikiye ayırır. A tipi değerlendirmede belirsizlik tekrarlanan ölçümlerin istatistiksel analizinden (s ya da s/√n) bulunur. B tipi değerlendirmede ise başka bilgiler kullanılır: sertifikalar, üretici toleransları, kalibrasyon raporları, cihaz çözünürlüğü, literatür değerleri.\n\nBu bilgiler çoğu zaman “±a” biçimindedir. Bunları diğer bileşenlerle birleştirebilmek için önce bir olasılık dağılımı varsayılır ve standart belirsizliğe (bir standart sapmaya karşılık gelen değere) çevrilir.',
      en: 'The GUM (Guide to the Expression of Uncertainty in Measurement) classifies uncertainty components by how they are evaluated. In a Type A evaluation the uncertainty comes from statistical analysis of repeated measurements (s or s/√n). In a Type B evaluation other information is used: certificates, manufacturer tolerances, calibration reports, instrument resolution, literature values.\n\nSuch information is usually given as “±a”. To combine it with other components, a probability distribution is assumed and the value is converted to a standard uncertainty (the equivalent of one standard deviation).',
    },
    meaning: {
      tr: 'u = a / √k.\n\n• Dikdörtgen dağılım (k = 3): değerin ±a aralığında herhangi bir yerde eşit olasılıkla bulunabildiği varsayılır. Yalnızca sınırlar bilindiğinde kullanılır (ör. saflık “en az %99,5”, dijital göstergenin çözünürlüğü).\n• Üçgen dağılım (k = 6): değerin merkeze yakın olma olasılığı daha yüksektir. Hacimsel cam malzeme toleransları için sık kullanılır.\n• Sertifikada güven düzeyiyle birlikte genişletilmiş belirsizlik verilmişse (ör. “±U, k = 2”), dağılım varsayılmaz; U, belirtilen kapsam faktörüne bölünür.\n\nAynı ±a için dikdörtgen dağılım daha büyük, yani daha temkinli bir u verir: a/√3 > a/√6.',
      en: 'u = a / √k.\n\n• Rectangular distribution (k = 3): the value is assumed equally likely anywhere within ±a. Use it when only the limits are known (e.g. purity “at least 99.5%”, the resolution of a digital display).\n• Triangular distribution (k = 6): values near the centre are more likely. Commonly used for volumetric glassware tolerances.\n• If a certificate gives an expanded uncertainty with its coverage (e.g. “±U, k = 2”), no distribution is assumed; divide U by the stated coverage factor.\n\nFor the same ±a, the rectangular distribution gives a larger, more cautious u: a/√3 > a/√6.',
    },
    usage: {
      tr: [
        'Pipet, büret ve balon joje toleranslarını belirsizlik bütçesine eklemek.',
        'Saflık, molar kütle ve sertifika değerlerinin belirsizliklerini standart belirsizliğe çevirmek.',
        'Dağılım konusunda bilgi yoksa dikdörtgen dağılım güvenli (temkinli) seçimdir.',
        'Bulunan u, belirsizlik bütçesinde A tipi bileşenlerle aynı şekilde birleştirilir.',
      ],
      en: [
        'Adding pipette, burette and volumetric flask tolerances to an uncertainty budget.',
        'Converting uncertainties of purity, molar mass and certificate values to standard uncertainties.',
        'With no information about the distribution, the rectangular one is the safe (cautious) choice.',
        'The resulting u is combined in the budget exactly like Type A components.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 25 mL balon joje, tolerans ±0,04 mL → a = 0,04 mL; üçgen dağılım → k = 6.',
        '√6 = 2,449.',
        'u = 0,04 mL / 2,449.',
        'Sonuç: u = 0,01633 mL.',
      ],
      en: [
        'Given: 25 mL volumetric flask, tolerance ±0.04 mL → a = 0.04 mL; triangular distribution → k = 6.',
        '√6 = 2.449.',
        'u = 0.04 mL / 2.449.',
        'Result: u = 0.01633 mL.',
      ],
    },
    mistakes: {
      tr: [
        'Toleransın tamamını (2a) yarı genişlik olarak girmek.',
        '±a değerini doğrudan standart belirsizlik gibi kullanmak.',
        'Sertifikadaki genişletilmiş belirsizliği (k = 2) √3’e bölmek; belirtilen k’ye bölünmelidir.',
      ],
      en: [
        'Entering the full width of the tolerance (2a) as the half-width.',
        'Using ±a directly as if it were a standard uncertainty.',
        'Dividing a certificate’s expanded uncertainty (k = 2) by √3; divide by the stated k instead.',
      ],
    },
    related: ['uncertainty-budget', 'expanded-uncertainty', 'propagation'],
  },

  'expanded-uncertainty': {
    concept: {
      tr: 'Birleşik standart belirsizlik (u_c) bir standart sapma büyüklüğündedir ve gerçek değerin ancak yaklaşık %68’ini kapsayan bir aralık tanımlar. Sonuç raporlanırken daha geniş bir aralık istenir. Genişletilmiş belirsizlik (U), u_c’nin bir kapsam faktörüyle (k) çarpılmasıyla elde edilir ve sonuç “x ± U (k = 2)” biçiminde verilir.',
      en: 'The combined standard uncertainty (u_c) is the size of one standard deviation and defines an interval covering only about 68% of the reasonable values. When reporting a result a wider interval is wanted. The expanded uncertainty (U) is u_c multiplied by a coverage factor (k), and the result is reported as “x ± U (k = 2)”.',
    },
    meaning: {
      tr: 'U = k · u_c.\n\n• Normal dağılım varsayımıyla k = 2 yaklaşık %95, k = 3 yaklaşık %99,7 kapsama karşılık gelir (tam %95 için 1,96).\n• u_c az sayıda ölçüme dayanıyorsa (etkin serbestlik derecesi küçükse) k = 2 yetersiz kalır; k, Welch–Satterthwaite eşitliğiyle bulunan etkin serbestlik derecesindeki Student t değeri olarak alınır.\n• U, sonuçla aynı birimdedir.\n\nRaporlama: U genellikle en fazla iki anlamlı rakama yuvarlanır ve sonuç aynı ondalık basamağa yuvarlanır. Kullanılan k her zaman belirtilmelidir.',
      en: 'U = k · u_c.\n\n• Assuming a normal distribution, k = 2 corresponds to about 95% and k = 3 to about 99.7% coverage (exactly 95% needs 1.96).\n• If u_c rests on few measurements (small effective degrees of freedom), k = 2 is not enough; k is taken as the Student t value at the effective degrees of freedom from the Welch–Satterthwaite equation.\n• U has the same unit as the result.\n\nReporting: U is usually rounded to at most two significant figures and the result to the same decimal place. Always state the k used.',
    },
    usage: {
      tr: [
        'Analiz sonucunu belirsizliğiyle birlikte raporlamak (ISO/IEC 17025, gerekli durumlarda bunu ister).',
        'Sonucu bir yasal sınırla karşılaştırmak: x ± U aralığı sınırın tamamen üstünde mi, altında mı?',
        'Eₙ skoru gibi karşılaştırmalarda genişletilmiş belirsizlik kullanılır.',
        'Yeniden birleştirme yaparken U değil u_c kullanılmalıdır; U önce k’ye bölünür.',
      ],
      en: [
        'Reporting an analytical result together with its uncertainty (ISO/IEC 17025 asks for this where relevant).',
        'Comparing a result with a legal limit: is x ± U entirely above or below the limit?',
        'Comparisons such as the Eₙ score use expanded uncertainties.',
        'When combining further, use u_c, not U; divide U by k first.',
      ],
    },
    solution: {
      tr: [
        'Verilen: birleşik standart belirsizlik u_c = 0,012 (sonuçla aynı birimde); kapsam faktörü k = 2 (~%95).',
        'U = k · u_c = 2 × 0,012.',
        'Sonuç: U = 0,024; rapor biçimi: x ± 0,024 (k = 2).',
      ],
      en: [
        'Given: combined standard uncertainty u_c = 0.012 (same unit as the result); coverage factor k = 2 (~95%).',
        'U = k · u_c = 2 × 0.012.',
        'Result: U = 0.024; reported as x ± 0.024 (k = 2).',
      ],
    },
    mistakes: {
      tr: [
        'k değerini raporda belirtmemek.',
        'Genişletilmiş belirsizlikleri birbiriyle doğrudan kareler toplamı ile birleştirmek; önce standart belirsizliğe çevrilmelidir.',
        'Az sayıda tekrara dayanan belirsizlikte de körü körüne k = 2 kullanmak.',
      ],
      en: [
        'Not stating k in the report.',
        'Combining expanded uncertainties in quadrature; convert them to standard uncertainties first.',
        'Using k = 2 blindly even when the uncertainty rests on very few replicates.',
      ],
    },
    related: ['uncertainty-budget', 'type-b-uncertainty', 'en-score'],
  },

  'pt-z-score': {
    concept: {
      tr: 'Yeterlilik testinde (laboratuvarlar arası karşılaştırma) düzenleyici kuruluş, katılımcılara aynı homojen numuneyi gönderir ve her laboratuvarın sonucunu atanan değerle karşılaştırır. z-skoru, laboratuvarın sonucunun atanan değerden kaç “uygunluk standart sapması” uzakta olduğunu gösterir.\n\nTüm katılımcılar aynı ölçütle değerlendirildiği için z-skorları farklı analitler ve turlar arasında karşılaştırılabilir; akreditasyonda laboratuvar performansının temel göstergesidir.',
      en: 'In proficiency testing (an interlaboratory comparison) the provider sends the same homogeneous sample to all participants and compares each laboratory’s result with the assigned value. The z-score tells how many “standard deviations for proficiency assessment” the result lies from the assigned value.\n\nBecause every participant is judged by the same yardstick, z-scores can be compared across analytes and rounds; they are the main indicator of laboratory performance in accreditation.',
    },
    meaning: {
      tr: 'z = (x − X) / σ̂.\n\n• X, atanan değerdir (CRM değeri, uzman laboratuvar sonucu ya da katılımcıların sağlam ortalaması).\n• σ̂, düzenleyicinin belirlediği uygunluk standart sapmasıdır: amaca uygunluk ölçütünden, Horwitz eşitliğinden ya da katılımcı sonuçlarının sağlam standart sapmasından alınabilir. Laboratuvarın kendi belirsizliği formüle girmez.\n\nYorum:\n• |z| ≤ 2: tatmin edici.\n• 2 < |z| < 3: şüpheli (uyarı sinyali).\n• |z| ≥ 3: tatmin edici değil (eylem sinyali); kök neden araştırılmalı ve düzeltici faaliyet yapılmalıdır.',
      en: 'z = (x − X) / σ̂.\n\n• X is the assigned value (a CRM value, a result from an expert laboratory, or a robust mean of the participants).\n• σ̂ is the standard deviation for proficiency assessment set by the provider: from a fitness-for-purpose criterion, the Horwitz equation or a robust standard deviation of the participants. The laboratory’s own uncertainty does not enter.\n\nInterpretation:\n• |z| ≤ 2: satisfactory.\n• 2 < |z| < 3: questionable (warning signal).\n• |z| ≥ 3: unsatisfactory (action signal); investigate the root cause and take corrective action.',
    },
    usage: {
      tr: [
        'Yeterlilik testi raporlarını yorumlamak ve akreditasyon için performansı izlemek.',
        'Ardışık turlardaki z-skorlarını izlemek: hep aynı işaretli skorlar, küçük olsalar bile sistematik bir sapmaya işaret eder.',
        'Laboratuvarın belirsizliğini de hesaba katmak gerekiyorsa ζ ya da Eₙ skoruna bakılır.',
      ],
      en: [
        'Interpreting proficiency-test reports and monitoring performance for accreditation.',
        'Tracking z-scores across rounds: scores that always have the same sign, even small ones, point to a systematic bias.',
        'When the laboratory’s uncertainty must also be considered, use the ζ or Eₙ score.',
      ],
    },
    solution: {
      tr: [
        'Verilen: laboratuvar sonucu x = 12,9; atanan değer X = 12,0; σ̂ = 0,5 (aynı birimde).',
        'x − X = 12,9 − 12,0 = 0,9.',
        'z = 0,9 / 0,5.',
        'Sonuç: z = 1,8; |z| ≤ 2 olduğundan performans tatmin edicidir.',
      ],
      en: [
        'Given: laboratory result x = 12.9; assigned value X = 12.0; σ̂ = 0.5 (same unit).',
        'x − X = 12.9 − 12.0 = 0.9.',
        'z = 0.9 / 0.5.',
        'Result: z = 1.8; since |z| ≤ 2 the performance is satisfactory.',
      ],
    },
    mistakes: {
      tr: [
        'σ̂ yerine laboratuvarın kendi tekrarlanabilirlik standart sapmasını kullanmak.',
        'Yeterlilik testi z-skorunu, istatistikteki standart normal değişkenle (ortalama ve s’den hesaplanan z) karıştırmak.',
        'Tek bir şüpheli skoru görmezden gelmek; eğilimler de izlenmelidir.',
      ],
      en: [
        'Using the laboratory’s own repeatability standard deviation instead of σ̂.',
        'Confusing the PT z-score with the statistical standard normal variable (z computed from a mean and s).',
        'Ignoring a single questionable score; trends must also be watched.',
      ],
    },
    related: ['zeta-score', 'en-score', 'horwitz', 'z-score'],
  },

  'zeta-score': {
    concept: {
      tr: 'z-skoru yalnızca düzenleyicinin belirlediği σ̂’yı kullanır; laboratuvarın sonucuna ne kadar güvendiğini (belirttiği belirsizliği) dikkate almaz. Zeta (ζ) skoru ise sonucun atanan değerden farkını, iki değerin standart belirsizliklerinin birleşimine böler. Böylece sonucun, laboratuvarın beyan ettiği belirsizlik içinde atanan değerle uyumlu olup olmadığı sınanır.',
      en: 'The z-score uses only the σ̂ chosen by the provider; it ignores how confident the laboratory is in its result (its stated uncertainty). The zeta (ζ) score divides the difference from the assigned value by the combined standard uncertainties of both values. It therefore tests whether the result agrees with the assigned value within the uncertainty the laboratory claims.',
    },
    meaning: {
      tr: 'ζ = (x − X) / √(u_x² + u_X²).\n\n• Payda, bağımsız iki değerin farkının standart belirsizliğidir (kareler toplamı).\n• Yorum z-skoru ile aynı bantlarla yapılır: |ζ| ≤ 2 tatmin edici, 2 < |ζ| < 3 şüpheli, |ζ| ≥ 3 tatmin edici değil.\n\nz ile birlikte okunduğunda bilgi verir:\n• |z| küçük ama |ζ| büyükse laboratuvar belirsizliğini olduğundan küçük tahmin ediyor olabilir.\n• |z| büyük ama |ζ| küçükse laboratuvarın belirsizliği büyüktür; sonuç doğru olsa bile amaca uygun olmayabilir.',
      en: 'ζ = (x − X) / √(u_x² + u_X²).\n\n• The denominator is the standard uncertainty of the difference of two independent values (addition in quadrature).\n• It is read with the same bands as the z-score: |ζ| ≤ 2 satisfactory, 2 < |ζ| < 3 questionable, |ζ| ≥ 3 unsatisfactory.\n\nRead together with z it is informative:\n• Small |z| but large |ζ|: the laboratory may be underestimating its uncertainty.\n• Large |z| but small |ζ|: the laboratory’s uncertainty is large; the result may be correct yet not fit for purpose.',
    },
    usage: {
      tr: [
        'Laboratuvarın belirsizlik tahmininin gerçekçi olup olmadığını yeterlilik testi verisiyle kontrol etmek.',
        'Standart belirsizlikler kullanılır; genişletilmiş belirsizlikler önce k’ye bölünmelidir.',
        'Sonuç ile atanan değer bağımsız olmalıdır; laboratuvarın sonucu atanan değerin hesabına girmişse payda küçük tahmin edilir.',
      ],
      en: [
        'Checking with PT data whether the laboratory’s uncertainty estimate is realistic.',
        'Uses standard uncertainties; divide expanded uncertainties by k first.',
        'The result and the assigned value must be independent; if the lab’s result went into the assigned value, the denominator is underestimated.',
      ],
    },
    solution: {
      tr: [
        'Verilen: x = 12,9; X = 12,0; u_x = 0,3; u_X = 0,4 (standart belirsizlikler, aynı birimde).',
        'Payda: √(0,3² + 0,4²) = √(0,09 + 0,16) = √0,25 = 0,5.',
        'ζ = (12,9 − 12,0) / 0,5 = 0,9 / 0,5.',
        'Sonuç: ζ = 1,8; |ζ| ≤ 2 olduğundan sonuç beyan edilen belirsizlik içinde atanan değerle uyumludur.',
      ],
      en: [
        'Given: x = 12.9; X = 12.0; u_x = 0.3; u_X = 0.4 (standard uncertainties, same unit).',
        'Denominator: √(0.3² + 0.4²) = √(0.09 + 0.16) = √0.25 = 0.5.',
        'ζ = (12.9 − 12.0) / 0.5 = 0.9 / 0.5.',
        'Result: ζ = 1.8; since |ζ| ≤ 2 the result agrees with the assigned value within the stated uncertainty.',
      ],
    },
    mistakes: {
      tr: [
        'Belirsizlikleri karelerini almadan toplamak (0,3 + 0,4 = 0,7 → yanlış).',
        'Standart yerine genişletilmiş belirsizlik girmek (bu Eₙ skorudur).',
        'Belirsizliği büyük beyan ederek iyi ζ elde etmeyi başarı saymak.',
      ],
      en: [
        'Adding the uncertainties without squaring (0.3 + 0.4 = 0.7 → wrong).',
        'Entering expanded instead of standard uncertainties (that is the Eₙ score).',
        'Counting a good ζ obtained by claiming a large uncertainty as success.',
      ],
    },
    related: ['pt-z-score', 'en-score', 'expanded-uncertainty'],
  },

  'en-score': {
    concept: {
      tr: 'Eₙ (“normalleştirilmiş hata”) skoru, ζ skoruna benzer ancak standart değil genişletilmiş belirsizlikleri kullanır. Özellikle kalibrasyon laboratuvarları arasındaki karşılaştırmalarda ve referans laboratuvarın değeriyle karşılaştırmada yaygındır.',
      en: 'The Eₙ (“normalised error”) score is similar to the ζ score but uses expanded rather than standard uncertainties. It is common in comparisons between calibration laboratories and in comparisons with a reference laboratory’s value.',
    },
    meaning: {
      tr: 'Eₙ = (x − X) / √(U_lab² + U_ref²).\n\n• Payda, farkın genişletilmiş belirsizliğidir (genellikle k = 2 ile, yaklaşık %95).\n• |Eₙ| ≤ 1: sonuç referansla uyumludur (fark, kendi belirsizliği içindedir).\n• |Eₙ| > 1: uyumsuz; sapma ya da olduğundan küçük tahmin edilmiş belirsizlik araştırılmalıdır.\n\nU = 2u olduğunda Eₙ = ζ / 2 olur; bu yüzden |Eₙ| ≤ 1 sınırı, |ζ| ≤ 2 sınırına karşılık gelir.',
      en: 'Eₙ = (x − X) / √(U_lab² + U_ref²).\n\n• The denominator is the expanded uncertainty of the difference (usually with k = 2, about 95%).\n• |Eₙ| ≤ 1: the result agrees with the reference (the difference is within its uncertainty).\n• |Eₙ| > 1: disagreement; investigate a bias or an underestimated uncertainty.\n\nWhen U = 2u, Eₙ = ζ / 2, which is why the limit |Eₙ| ≤ 1 corresponds to |ζ| ≤ 2.',
    },
    usage: {
      tr: [
        'Kalibrasyon ve referans laboratuvarı karşılaştırmaları.',
        'İki laboratuvarın sonuçlarının belirsizlikleri içinde uyumunu sınamak.',
        'Her iki U da aynı kapsam faktörüyle (genellikle k = 2) verilmiş olmalıdır.',
      ],
      en: [
        'Calibration and reference-laboratory comparisons.',
        'Testing whether two laboratories agree within their uncertainties.',
        'Both U values must be given with the same coverage factor (usually k = 2).',
      ],
    },
    solution: {
      tr: [
        'Verilen: x = 12,9; X = 12,0; U_lab = 0,6; U_ref = 0,8 (k = 2, aynı birimde).',
        'Payda: √(0,6² + 0,8²) = √(0,36 + 0,64) = √1,00 = 1,0.',
        'Eₙ = (12,9 − 12,0) / 1,0.',
        'Sonuç: Eₙ = 0,9; |Eₙ| ≤ 1 olduğundan sonuç referansla uyumludur.',
      ],
      en: [
        'Given: x = 12.9; X = 12.0; U_lab = 0.6; U_ref = 0.8 (k = 2, same unit).',
        'Denominator: √(0.6² + 0.8²) = √(0.36 + 0.64) = √1.00 = 1.0.',
        'Eₙ = (12.9 − 12.0) / 1.0.',
        'Result: Eₙ = 0.9; since |Eₙ| ≤ 1 the result agrees with the reference.',
      ],
    },
    mistakes: {
      tr: [
        'Standart belirsizlik girip |Eₙ| ≤ 1 sınırını kullanmak (ölçüt fazla katı olur).',
        'Eₙ için z-skorunun 2 ve 3 sınırlarını kullanmak.',
        'Farklı k ile verilmiş belirsizlikleri olduğu gibi birleştirmek.',
      ],
      en: [
        'Entering standard uncertainties and still using the |Eₙ| ≤ 1 limit (the criterion becomes too strict).',
        'Applying the z-score limits of 2 and 3 to Eₙ.',
        'Combining uncertainties quoted with different k values as they are.',
      ],
    },
    related: ['zeta-score', 'expanded-uncertainty', 'pt-z-score'],
  },

  'between-lab-sd': {
    concept: {
      tr: 'Bir ortak çalışmada aynı numuneyi birçok laboratuvar tekrarlı olarak analiz eder. Sonuçlardaki toplam dağılım iki kaynaktan gelir: her laboratuvarın kendi içindeki rastgele değişkenlik (tekrarlanabilirlik, σ_r) ve laboratuvarların ortalamaları arasındaki farklar (laboratuvarlar arası bileşen, σ_L). İkisinin birleşimi yeniden üretilebilirlik standart sapmasıdır (σ_R).',
      en: 'In a collaborative study many laboratories analyse the same sample in replicate. The total spread of results has two sources: the random variability within each laboratory (repeatability, σ_r) and the differences between laboratory means (the between-laboratory component, σ_L). Their combination is the reproducibility standard deviation (σ_R).',
    },
    meaning: {
      tr: 'Bağımsız varyanslar toplanır: σ_R² = σ_r² + σ_L². Buradan σ_L = √(σ_R² − σ_r²).\n\n• Standart sapmalar değil varyanslar toplanır.\n• σ_r ve σ_R pratikte tek yönlü varyans analizinden (ANOVA) elde edilir: σ_r² grup içi kareler ortalamasıdır; σ_L² = (grup arası KO − grup içi KO) / n (n: laboratuvar başına tekrar sayısı).\n• Tekrarlanabilirlik sınırı r ≈ 2,8 · σ_r ve yeniden üretilebilirlik sınırı R ≈ 2,8 · σ_R, iki sonuç arasındaki farkın %95 olasılıkla aşmaması beklenen değerlerdir.\n\nσ_L büyükse laboratuvarlar arası sistematik farklar (kalibrasyon, uygulama ayrıntıları) baskındır.',
      en: 'Independent variances add: σ_R² = σ_r² + σ_L². Hence σ_L = √(σ_R² − σ_r²).\n\n• Variances add, not standard deviations.\n• In practice σ_r and σ_R come from a one-way analysis of variance (ANOVA): σ_r² is the within-group mean square; σ_L² = (between-group MS − within-group MS) / n (n: replicates per laboratory).\n• The repeatability limit r ≈ 2.8 · σ_r and the reproducibility limit R ≈ 2.8 · σ_R are the values that the difference between two results should not exceed with 95% probability.\n\nIf σ_L is large, systematic differences between laboratories (calibration, details of practice) dominate.',
    },
    usage: {
      tr: [
        'Ortak çalışma sonuçlarından laboratuvarlar arası bileşeni ayırmak (ISO 5725 yaklaşımı).',
        'Kesinliği iyileştirmek için hangi kaynağa odaklanılacağına karar vermek.',
        'σ_R < σ_r çıkarsa (kök altı negatif) σ_L sıfır kabul edilir; bu, laboratuvarlar arası farkın saptanamadığını gösterir.',
      ],
      en: [
        'Separating the between-laboratory component from collaborative-study results (ISO 5725 approach).',
        'Deciding which source to target when improving precision.',
        'If σ_R < σ_r (negative under the root), σ_L is taken as zero: no between-laboratory difference can be detected.',
      ],
    },
    solution: {
      tr: [
        'Verilen: yeniden üretilebilirlik SD σ_R = 0,5; tekrarlanabilirlik SD σ_r = 0,3 (aynı birimde).',
        'Varyanslar: σ_R² = 0,25; σ_r² = 0,09.',
        'σ_L² = 0,25 − 0,09 = 0,16.',
        'Sonuç: σ_L = √0,16 = 0,4.',
      ],
      en: [
        'Given: reproducibility SD σ_R = 0.5; repeatability SD σ_r = 0.3 (same unit).',
        'Variances: σ_R² = 0.25; σ_r² = 0.09.',
        'σ_L² = 0.25 − 0.09 = 0.16.',
        'Result: σ_L = √0.16 = 0.4.',
      ],
    },
    mistakes: {
      tr: [
        'Standart sapmaları doğrudan çıkarmak (0,5 − 0,3 = 0,2 → yanlış).',
        'Tekrarlanabilirliği (aynı laboratuvar, kısa süre) yeniden üretilebilirlikle (farklı laboratuvarlar) karıştırmak.',
        'Laboratuvar ortalamalarının SD’sini doğrudan σ_L saymak; bu değer tekrarlanabilirliğin bir kısmını da içerir.',
      ],
      en: [
        'Subtracting standard deviations directly (0.5 − 0.3 = 0.2 → wrong).',
        'Confusing repeatability (same laboratory, short time) with reproducibility (different laboratories).',
        'Taking the SD of the laboratory means directly as σ_L; it also contains part of the repeatability.',
      ],
    },
    related: ['anova', 'horwitz', 'horrat'],
  },

  'uncertainty-budget': {
    concept: {
      tr: 'Belirsizlik bütçesi, bir ölçüm sonucunu etkileyen tüm girdileri, her birinin standart belirsizliğini ve sonuca katkısını gösteren tablodur. GUM yaklaşımında önce sonucu girdilere bağlayan model denklemi yazılır, sonra her girdinin belirsizliği (A ya da B tipi) belirlenir ve belirsizliklerin yayılma kuralıyla birleşik standart belirsizlik hesaplanır.\n\nBütçenin asıl değeri, hangi bileşenin baskın olduğunu göstermesidir: belirsizliği azaltmak için yalnızca baskın bileşeni iyileştirmek anlamlıdır.',
      en: 'An uncertainty budget is a table of all inputs that affect a measurement result, with the standard uncertainty of each and its contribution to the result. In the GUM approach a model equation linking the result to its inputs is written first, the uncertainty of each input is evaluated (Type A or B), and the combined standard uncertainty is obtained with the law of propagation of uncertainty.\n\nThe real value of the budget is that it shows which component dominates: only improving the dominant one reduces the uncertainty appreciably.',
    },
    meaning: {
      tr: 'Model yalnızca çarpma ve bölmeden oluşuyorsa (ör. c = m·P / (M·V)) ve girdiler bağımsızsa bağıl belirsizlikler kareler toplamıyla birleşir:\n\nu_c(y)/y = √Σ (u(xᵢ)/xᵢ)²\n\n• Her bileşenin toplam varyansa katkısı (u(xᵢ)/xᵢ)² / Σ(…)² ile verilir; bileşenin kendisi değil karesi önemlidir, bu yüzden en büyük bağıl belirsizlik hızla baskın olur.\n• Genişletilmiş belirsizlik U = k · u_c; mutlak değer için bağıl değer y ile çarpılır.\n• Toplama/çıkarma içeren modellerde mutlak belirsizlikler birleştirilir; bu araç yalnızca çarpım/bölüm modeli içindir.\n• Girdiler ilişkiliyse (aynı terazi, aynı pipet) kovaryans terimleri gerekir.',
      en: 'If the model contains only multiplication and division (e.g. c = m·P / (M·V)) and the inputs are independent, relative uncertainties add in quadrature:\n\nu_c(y)/y = √Σ (u(xᵢ)/xᵢ)²\n\n• Each component’s share of the total variance is (u(xᵢ)/xᵢ)² / Σ(…)²; it is the square that counts, so the largest relative uncertainty quickly dominates.\n• Expanded uncertainty U = k · u_c; multiply the relative value by y for the absolute one.\n• Models with sums or differences combine absolute uncertainties; this tool is for product/quotient models only.\n• If inputs are correlated (same balance, same pipette), covariance terms are needed.',
    },
    usage: {
      tr: [
        'Bir standartlaştırma, gravimetrik ya da titrimetrik sonucun belirsizliğini hesaplamak.',
        'Toleranslar gibi B tipi bilgiler önce √3 ya da √6 ile standart belirsizliğe çevrilip girilir.',
        'Tekrarlanabilirlik gibi A tipi bileşen, bağıl standart sapma olarak (değer 1, u = RSD) ayrı bir satır olarak eklenebilir.',
        'En büyük katkıyı veren girdi, yöntemi iyileştirmede ilk hedeftir.',
      ],
      en: [
        'Calculating the uncertainty of a standardisation, gravimetric or titrimetric result.',
        'Type B information such as tolerances is first converted to a standard uncertainty with √3 or √6.',
        'A Type A component such as repeatability can be added as a separate row in relative form (value 1, u = RSD).',
        'The input with the largest contribution is the first target for improving the method.',
      ],
    },
    solution: {
      tr: [
        'Verilen (NaOH’ın KHP ile standartlaştırılması, c = m·P / (M·V)): m = 0,3888 g (u = 0,00013 g); P = 1,0000 (u = 0,00029); M = 204,2212 g/mol (u = 0,0038 g/mol); V = 18,64 mL (u = 0,013 mL); tekrarlanabilirlik (bağıl) 0,0005; c = 0,10214 mol/L.',
        'Bağıl standart belirsizlikler: m 3,34 × 10⁻⁴; P 2,90 × 10⁻⁴; M 1,86 × 10⁻⁵; V 6,97 × 10⁻⁴; tekrarlanabilirlik 5,00 × 10⁻⁴.',
        'u_c/c = √(3,34² + 2,90² + 0,186² + 6,97² + 5,00²) × 10⁻⁴ = 9,66 × 10⁻⁴ (%0,0966). Varyansa katkılar: V %52,2; tekrarlanabilirlik %26,8; m %12,0; P %9,0; M %0,04. Baskın bileşenler büret hacmi ve tekrarlanabilirliktir.',
        'Sonuç: U/c = 2 × %0,0966 = %0,193; U = 0,10214 × 0,00193 = 0,00020 mol/L → c = 0,10214 ± 0,00020 mol/L (k = 2).',
      ],
      en: [
        'Given (standardising NaOH with KHP, c = m·P / (M·V)): m = 0.3888 g (u = 0.00013 g); P = 1.0000 (u = 0.00029); M = 204.2212 g/mol (u = 0.0038 g/mol); V = 18.64 mL (u = 0.013 mL); repeatability (relative) 0.0005; c = 0.10214 mol/L.',
        'Relative standard uncertainties: m 3.34 × 10⁻⁴; P 2.90 × 10⁻⁴; M 1.86 × 10⁻⁵; V 6.97 × 10⁻⁴; repeatability 5.00 × 10⁻⁴.',
        'u_c/c = √(3.34² + 2.90² + 0.186² + 6.97² + 5.00²) × 10⁻⁴ = 9.66 × 10⁻⁴ (0.0966%). Shares of the variance: V 52.2%; repeatability 26.8%; m 12.0%; P 9.0%; M 0.04%. The burette volume and the repeatability dominate.',
        'Result: U/c = 2 × 0.0966% = 0.193%; U = 0.10214 × 0.00193 = 0.00020 mol/L → c = 0.10214 ± 0.00020 mol/L (k = 2).',
      ],
    },
    mistakes: {
      tr: [
        'Mutlak belirsizlikleri (g ile mL gibi farklı birimlerde) doğrudan birleştirmek; çarpım/bölümde bağıl değerler kullanılır.',
        'Toleransı (±a) standart belirsizliğe çevirmeden girmek.',
        'Tekrarlanabilirlik gibi önemli bir bileşeni bütçeye hiç eklememek.',
      ],
      en: [
        'Combining absolute uncertainties (in different units such as g and mL) directly; products/quotients use relative values.',
        'Entering a tolerance (±a) without converting it to a standard uncertainty.',
        'Leaving out an important component such as repeatability altogether.',
      ],
    },
    related: ['type-b-uncertainty', 'expanded-uncertainty', 'propagation', 'standardization'],
  },

  'control-chart': {
    concept: {
      tr: 'Kontrol kartı (Shewhart kontrol grafiği), bir yöntemin zaman içinde istatistiksel kontrol altında kalıp kalmadığını izler. Her analiz serisinde kararlı bir kontrol numunesi (ör. bir referans madde) ölçülür ve sonuç, ölçüm sırasına göre merkez çizgi ile sınırların çizildiği grafiğe işlenir.\n\nYöntem kontrol altındaysa sonuçlar merkez çevresinde yalnızca rastgele dağılır. Sınır dışına çıkan noktalar ya da düzenli örüntüler (kayma, eğilim) sistematik bir sorunun erken habercisidir; bu durumda o serinin sonuçları raporlanmadan önce neden araştırılır.',
      en: 'A control chart (Shewhart chart) monitors whether a method stays in statistical control over time. In each analytical run a stable control sample (e.g. a reference material) is measured and the result is plotted in run order on a chart with a centre line and limits.\n\nWhen the method is in control, results scatter randomly about the centre. Points beyond the limits or non-random patterns (shifts, trends) give early warning of a systematic problem, and the cause is investigated before the results of that run are reported.',
    },
    meaning: {
      tr: 'Merkez çizgi x̄ ve standart sapma s, yöntem kontrol altındayken toplanmış geçmiş verilerden belirlenir.\n• Uyarı sınırları: x̄ ± 2s (normal dağılımda noktaların yaklaşık %95’i içinde kalır).\n• Eylem sınırları: x̄ ± 3s (yaklaşık %99,7).\n\nAraç şu kontrol dışı kurallarını uygular:\n• Bir nokta ±3s dışında.\n• Ardışık 3 noktadan 2’si aynı taraftaki ±2s sınırının dışında.\n• Ardışık 7 nokta merkez çizginin aynı tarafında (kayma).\n\nBu kurallar, klinik laboratuvarlarda yaygın olan Westgard çoklu kurallarıyla (1₃ₛ, 2₂ₛ, R₄ₛ, 4₁ₛ, 10x̄) aynı mantığa dayanır: tek kural yerine birkaç kural birlikte kullanılarak yanlış alarm az tutulurken sistematik hatalar daha erken yakalanır.',
      en: 'The centre line x̄ and standard deviation s are set from historical data collected while the method was in control.\n• Warning limits: x̄ ± 2s (about 95% of points fall inside for a normal distribution).\n• Action limits: x̄ ± 3s (about 99.7%).\n\nThe tool applies these out-of-control rules:\n• One point beyond ±3s.\n• Two of three consecutive points beyond the same ±2s limit.\n• Seven consecutive points on the same side of the centre line (a shift).\n\nThese rules follow the same logic as the Westgard multirules common in clinical laboratories (1₃ₛ, 2₂ₛ, R₄ₛ, 4₁ₛ, 10x̄): using several rules together keeps false alarms low while catching systematic errors earlier.',
    },
    usage: {
      tr: [
        'Rutin analizde kalite kontrol numunesi sonuçlarını izlemek (ISO/IEC 17025’teki sonuçların geçerliliğinin izlenmesi kapsamında).',
        'Merkez çizgi ve s’yi alanlara girin; boş bırakılırsa girilen verinin kendisinden hesaplanır.',
        'Sınırlar, izlenen verinin kendisinden değil, kararlı bir dönemin (en az yaklaşık 20 sonuç) verisinden belirlenmelidir.',
        'Kontrol numunesi gerçek numunelerle aynı işlemlerden geçmeli ve derişimi ilgili aralıkta olmalıdır.',
      ],
      en: [
        'Monitoring QC-sample results in routine analysis (part of monitoring the validity of results under ISO/IEC 17025).',
        'Enter the centre line and s; left blank, they are calculated from the entered data itself.',
        'Limits should come from a stable period (at least about 20 results), not from the data being monitored.',
        'The control sample must go through the same procedure as real samples and lie in the relevant concentration range.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 19 kontrol sonucu (10,02; 9,98; … ; 10,08), merkez çizgi 10,00, s = 0,04 (geçmiş veriden).',
        'Sınırlar: uyarı 10,00 ± 2 × 0,04 → 9,92–10,08; eylem 10,00 ± 3 × 0,04 → 9,88–10,12.',
        '12. ölçüm (10,21) eylem sınırının (10,12) üstünde → kontrol dışı. 11. ölçümden itibaren tüm sonuçlar merkezin üstünde: 17. ölçümde 7 ardışık nokta kuralı tetiklenir (18 ve 19’da sürer). Uyarı sınırının dışında yalnızca 10,21 ve 10,09 vardır (10,08 değerleri sınırın üzerindedir, dışında değil) ve ardışık üç ölçümde bunlardan ikisi bulunmadığından “3 noktadan 2’si” kuralı tetiklenmez.',
        'Sonuç: süreç kontrol dışıdır; tek bir uç değerin ardından yukarı yönlü kalıcı bir kayma (sistematik hata) görülür. Neden (ör. yeni standart, kalibrasyon kayması) bulunup giderilmeden bu serilerin sonuçları raporlanmamalıdır.',
      ],
      en: [
        'Given: 19 control results (10.02, 9.98, …, 10.08), centre line 10.00, s = 0.04 (from historical data).',
        'Limits: warning 10.00 ± 2 × 0.04 → 9.92–10.08; action 10.00 ± 3 × 0.04 → 9.88–10.12.',
        'Run 12 (10.21) is above the action limit (10.12) → out of control. From run 11 on every result lies above the centre: at run 17 the seven-in-a-row rule fires (and continues at 18 and 19). Only 10.21 and 10.09 are beyond the warning limit (the 10.08 values lie on it, not beyond it), and no three consecutive runs contain two of them, so the “2 of 3” rule is not triggered.',
        'Result: the process is out of control; a single outlier is followed by a persistent upward shift (systematic error). The cause (e.g. a new standard, calibration drift) must be found and removed before these runs are reported.',
      ],
    },
    mistakes: {
      tr: [
        'Sınırları izlenen verinin kendisinden hesaplamak: kayma s’yi büyütür ve sorunu gizler.',
        'Yalnızca ±3s kuralına bakıp kaymaları ve eğilimleri gözden kaçırmak.',
        'Uyarı sınırını aşan tek bir noktada seriyi reddetmek; ±2s dışı tek nokta yaklaşık her 20 sonuçtan birinde beklenir.',
      ],
      en: [
        'Calculating the limits from the data being monitored: a shift inflates s and hides the problem.',
        'Looking only at the ±3s rule and missing shifts and trends.',
        'Rejecting a run for a single point beyond the warning limit; one point outside ±2s is expected in about one result in 20.',
      ],
    },
    related: ['descriptive', 'grubbs', 'bias', 'pt-z-score'],
  },

  youden: {
    concept: {
      tr: 'Sağlamlık (ruggedness) testi, yöntem parametrelerindeki küçük ve gerçekçi değişikliklerin (pH’ta ±0,2, sıcaklıkta birkaç derece, farklı reaktif partisi gibi) sonucu etkileyip etkilemediğini inceler. Her faktörü ayrı ayrı denemek çok sayıda deney gerektirir.\n\nYouden–Steiner yaklaşımı, yedi faktörün her birini iki düzeyde (nominal ve alternatif) yalnızca sekiz deneyle inceler. Tasarım dengelidir: her faktör dört deneyde nominal, dördünde alternatif düzeydedir ve diğer faktörlerin etkileri karşılaştırmada birbirini götürür.',
      en: 'A ruggedness test examines whether small, realistic changes in method parameters (±0.2 in pH, a few degrees in temperature, a different reagent batch…) affect the result. Testing each factor separately needs many experiments.\n\nThe Youden–Steiner approach studies seven factors, each at two levels (nominal and alternative), in only eight experiments. The design is balanced: each factor is at its nominal level in four runs and at the alternative level in the other four, and the effects of the other factors cancel in the comparison.',
    },
    meaning: {
      tr: 'Bir faktörün etkisi, nominal düzeydeki dört sonucun ortalaması ile alternatif düzeydeki dört sonucun ortalaması arasındaki farktır:\nΔ = ȳ(nominal) − ȳ(alternatif).\n\nAnlamlılık ölçütü: dört sonucun ortalamasının standart sapması s/√4 = s/2’dir. İki ortalamanın farkının standart sapması √(s²/4 + s²/4) = s/√2 olur. Bu nedenle |Δ| > t · s / √2 ise etki anlamlıdır. Burada s, yöntemin bağımsız olarak belirlenmiş standart sapması, t ise s’nin serbestlik derecesindeki iki yönlü Student t değeridir.\n\nTasarım ana etkileri tahmin eder; faktörler arası etkileşimler ana etkilerle karışır, bu yüzden tarama amaçlıdır.',
      en: 'The effect of a factor is the difference between the mean of the four results at its nominal level and the mean of the four at its alternative level:\nΔ = ȳ(nominal) − ȳ(alternative).\n\nSignificance criterion: the mean of four results has a standard deviation of s/√4 = s/2. The difference of two such means has √(s²/4 + s²/4) = s/√2. An effect is therefore significant if |Δ| > t · s / √2, where s is the independently determined standard deviation of the method and t is the two-tailed Student t at the degrees of freedom of s.\n\nThe design estimates main effects; interactions are confounded with them, so it is a screening tool.',
    },
    usage: {
      tr: [
        'Yöntem doğrulamasında ya da yöntem başka bir laboratuvara aktarılmadan önce kritik parametreleri bulmak.',
        'Anlamlı çıkan faktörler yöntem talimatında sıkı tolerans ile tanımlanmalıdır.',
        'Alternatif düzeyler, rutin çalışmada gerçekten oluşabilecek kadar küçük seçilmelidir.',
        'Sekiz deneyin sırası rastgele seçilmeli ki zamanla oluşan kaymalar bir faktörün etkisi gibi görünmesin.',
      ],
      en: [
        'Finding critical parameters during validation or before transferring a method to another laboratory.',
        'Factors found significant must be specified with tight tolerances in the method.',
        'Alternative levels should be as small as could really occur in routine work.',
        'Run the eight experiments in random order so that drift is not mistaken for a factor effect.',
      ],
    },
    solution: {
      tr: [
        'Verilen: sekiz deneyin sonuçları 5,04; 5,12; 5,08; 5,15; 4,95; 5,03; 4,99; 5,06; yöntemin s = 0,03 (9 serbestlik derecesi), %95 güven.',
        'A (pH): nominal düzey 1–4. deneyler, ortalama 5,0975; alternatif 5–8. deneyler, ortalama 5,0075 → Δ_A = +0,090. C (süre): nominal 1, 3, 5, 7 (ortalama 5,015), alternatif 2, 4, 6, 8 (ortalama 5,090) → Δ_C = −0,075.',
        'Diğer etkiler: B (sıcaklık) −0,035; F (çözücü) −0,005; D, E ve G 0. Kritik fark: t(%95; 9) = 2,262 → 2,262 × 0,03 / √2 = 0,048.',
        'Sonuç: |Δ_A| = 0,090 ve |Δ_C| = 0,075, 0,048’den büyük → pH ve süre anlamlı etkiye sahip; yöntem talimatında sıkı kontrol edilmelidir. Diğer faktörler anlamlı değildir.',
      ],
      en: [
        'Given: results of the eight experiments 5.04, 5.12, 5.08, 5.15, 4.95, 5.03, 4.99, 5.06; method s = 0.03 (9 degrees of freedom), 95% confidence.',
        'A (pH): nominal in runs 1–4, mean 5.0975; alternative in runs 5–8, mean 5.0075 → Δ_A = +0.090. C (time): nominal in 1, 3, 5, 7 (mean 5.015), alternative in 2, 4, 6, 8 (mean 5.090) → Δ_C = −0.075.',
        'Other effects: B (temperature) −0.035; F (solvent) −0.005; D, E and G 0. Critical difference: t(95%, 9) = 2.262 → 2.262 × 0.03 / √2 = 0.048.',
        'Result: |Δ_A| = 0.090 and |Δ_C| = 0.075 exceed 0.048 → pH and time have significant effects and must be tightly controlled in the method. The other factors are not significant.',
      ],
    },
    mistakes: {
      tr: [
        's’yi bu sekiz sonucun kendisinden hesaplamak; sonuçlar faktör etkilerini içerdiğinden s büyük çıkar.',
        'Kritik değerde √2’yi unutup t · s kullanmak.',
        'Alternatif düzeyleri gereğinden büyük seçip sağlam bir yöntemi “sağlam değil” bulmak.',
      ],
      en: [
        'Calculating s from these eight results; they contain the factor effects, so s is inflated.',
        'Forgetting the √2 and using t · s as the critical value.',
        'Choosing alternative levels that are too far apart and so judging a rugged method as not rugged.',
      ],
    },
    related: ['factorial-design', 't-test-two', 'validation-replicates'],
  },

  'factorial-design': {
    concept: {
      tr: 'Faktöriyel tasarımda her faktör iki düzeyde (düşük “−” ve yüksek “+”) denenir ve tüm düzey birleşimleri çalışılır: k faktör için 2ᵏ deney (2² = 4, 2³ = 8). Bir seferde tek faktörü değiştirme yaklaşımına göre aynı sayıda deneyle daha fazla bilgi verir ve en önemlisi faktörler arasındaki etkileşimleri ortaya çıkarır.\n\nAnalitik kimyada yöntem optimizasyonunda (ör. pH, sıcaklık ve reaktif derişiminin sinyale etkisi) ve sağlamlık çalışmalarında kullanılır.',
      en: 'In a factorial design each factor is tested at two levels (low “−” and high “+”) and every combination of levels is run: 2ᵏ experiments for k factors (2² = 4, 2³ = 8). Compared with changing one factor at a time, it gives more information for the same number of runs and, most importantly, reveals interactions between factors.\n\nIn analytical chemistry it is used to optimise methods (e.g. the effect of pH, temperature and reagent concentration on a signal) and in ruggedness studies.',
    },
    meaning: {
      tr: 'Ana etki = ȳ(+) − ȳ(−): faktör yüksek düzeydeyken elde edilen yanıtların ortalaması eksi düşük düzeydeyken elde edilenlerin ortalaması. 2ᵏ tasarımda her ortalama 2ᵏ⁻¹ deneyden hesaplanır.\n\nEtkileşim (ör. AB): A’nın etkisinin B’nin düzeyine göre değişmesidir. B yüksekken A’nın etkisi ile B düşükken A’nın etkisi arasındaki farkın yarısıdır. İşaretleri çarparak (A ve B’nin işaretlerinin çarpımı “+” olan deneyler eksi “−” olanlar) aynı formülle hesaplanır.\n\nStandart (Yates) sırası: (1), a, b, ab, c, ac, bc, abc. Küçük harf, o faktörün yüksek düzeyde olduğunu gösterir.',
      en: 'Main effect = ȳ(+) − ȳ(−): the mean response with the factor at its high level minus the mean at its low level. In a 2ᵏ design each mean uses 2ᵏ⁻¹ runs.\n\nInteraction (e.g. AB): the change in the effect of A depending on the level of B. It is half the difference between the effect of A at high B and the effect of A at low B. It is computed with the same formula by multiplying signs (runs where the product of the A and B signs is “+” minus those where it is “−”).\n\nStandard (Yates) order: (1), a, b, ab, c, ac, bc, abc. A lower-case letter means that factor is at its high level.',
    },
    usage: {
      tr: [
        'Hangi faktörlerin yanıtı en çok etkilediğini ve etkileşip etkileşmediklerini belirlemek.',
        'Yanıtlar standart sırada girilmelidir; aksi halde etkiler yanlış faktörlere atanır.',
        'Tekrarsız tasarımda deneysel hata tahmin edilemez: etkilerin anlamlılığı için deneyler tekrarlanmalı ya da etkiler normal olasılık grafiğinde incelenmelidir.',
        'İki düzey yalnızca doğrusal etkiyi gösterir; eğrilik için merkez noktası ya da daha fazla düzey gerekir.',
      ],
      en: [
        'Finding which factors affect the response most and whether they interact.',
        'Responses must be entered in standard order; otherwise effects are assigned to the wrong factors.',
        'An unreplicated design gives no estimate of experimental error: replicate runs, or inspect the effects on a normal probability plot, to judge significance.',
        'Two levels show only linear effects; curvature needs a centre point or more levels.',
      ],
    },
    solution: {
      tr: [
        'Verilen (2², standart sıra): (1) = 40; a = 60; b = 45; ab = 75.',
        'A: ȳ(A+) = (60 + 75)/2 = 67,5; ȳ(A−) = (40 + 45)/2 = 42,5 → A = 25. B: ȳ(B+) = (45 + 75)/2 = 60; ȳ(B−) = (40 + 60)/2 = 50 → B = 10.',
        'AB: [(40 + 75) − (60 + 45)] / 2 = 10 / 2 = 5. Kontrol: B yüksekken A’nın etkisi 75 − 45 = 30, B düşükken 60 − 40 = 20; (30 − 20)/2 = 5.',
        'Sonuç: genel ortalama 55; A ana etkisi 25, B ana etkisi 10, AB etkileşimi 5. A en etkili faktördür ve etkisi B yüksek düzeydeyken daha büyüktür.',
      ],
      en: [
        'Given (2², standard order): (1) = 40; a = 60; b = 45; ab = 75.',
        'A: ȳ(A+) = (60 + 75)/2 = 67.5; ȳ(A−) = (40 + 45)/2 = 42.5 → A = 25. B: ȳ(B+) = (45 + 75)/2 = 60; ȳ(B−) = (40 + 60)/2 = 50 → B = 10.',
        'AB: [(40 + 75) − (60 + 45)] / 2 = 10 / 2 = 5. Check: effect of A at high B is 75 − 45 = 30, at low B 60 − 40 = 20; (30 − 20)/2 = 5.',
        'Result: grand mean 55; main effect A = 25, main effect B = 10, interaction AB = 5. A is the most influential factor, and its effect is larger when B is high.',
      ],
    },
    mistakes: {
      tr: [
        'Yanıtları standart sıradan farklı bir sırada girmek.',
        'Etkiyi ortalamalar farkı yerine toplamlar farkı olarak hesaplamak (değer 2ᵏ⁻¹ kat büyük çıkar).',
        'Etkileşim büyükken ana etkileri tek başına yorumlamak; bir faktörün etkisi diğerinin düzeyine bağlıdır.',
      ],
      en: [
        'Entering the responses in a different order from the standard one.',
        'Computing an effect as a difference of sums rather than of means (2ᵏ⁻¹ times too large).',
        'Interpreting main effects alone when an interaction is large; the effect of one factor depends on the level of the other.',
      ],
    },
    related: ['youden', 'anova', 'normal-probability'],
  },

  'screening-test': {
    concept: {
      tr: 'Tarama testleri, bir numunede analitin belirli bir eşiğin üstünde bulunup bulunmadığına “var/yok” (pozitif/negatif) yanıtı veren nitel testlerdir: hızlı kit testleri, doping ve ilaç taramaları, gıdada kalıntı taramaları. Pozitif çıkan numuneler genellikle nicel bir doğrulama yöntemiyle yeniden analiz edilir.\n\nBöyle bir testin performansı, gerçek durumu bilinen numunelerle elde edilen 2×2 tablodan (doğru/yanlış pozitif, doğru/yanlış negatif) değerlendirilir.',
      en: 'Screening tests are qualitative tests that give a yes/no (positive/negative) answer as to whether an analyte is present above a threshold: rapid test kits, doping and drug screens, residue screening in food. Positive samples are usually re-analysed by a quantitative confirmatory method.\n\nThe performance of such a test is assessed from a 2×2 table (true/false positives, true/false negatives) obtained with samples whose true status is known.',
    },
    meaning: {
      tr: '• Duyarlılık = TP / (TP + FN): gerçekten pozitif numunelerin ne kadarını test pozitif buluyor. Yanlış negatif oranı = 1 − duyarlılık.\n• Özgüllük = TN / (TN + FP): gerçekten negatif numunelerin ne kadarını test negatif buluyor. Yanlış pozitif oranı = 1 − özgüllük.\n• Pozitif öngörü değeri PPV = TP / (TP + FP): pozitif sonuç veren numunelerin ne kadarı gerçekten pozitif.\n• Negatif öngörü değeri NPV = TN / (TN + FN).\n• Doğruluk = (TP + TN) / toplam.\n\nDuyarlılık ve özgüllük testin özellikleridir. PPV ve NPV ise ayrıca pozitif numunelerin popülasyondaki oranına (yaygınlık, prevalans) bağlıdır: yaygınlık düştükçe PPV hızla düşer.',
      en: '• Sensitivity = TP / (TP + FN): the fraction of truly positive samples the test calls positive. False-negative rate = 1 − sensitivity.\n• Specificity = TN / (TN + FP): the fraction of truly negative samples the test calls negative. False-positive rate = 1 − specificity.\n• Positive predictive value PPV = TP / (TP + FP): the fraction of positive results that are truly positive.\n• Negative predictive value NPV = TN / (TN + FN).\n• Accuracy = (TP + TN) / total.\n\nSensitivity and specificity are properties of the test. PPV and NPV also depend on the proportion of positives in the population (prevalence): PPV falls quickly as prevalence decreases.',
    },
    usage: {
      tr: [
        'Bir hızlı testin ya da tarama yönteminin doğrulamasında performansını raporlamak.',
        'Tarama amacıyla yüksek duyarlılık (az yanlış negatif) tercih edilir; yanlış pozitifler doğrulama analiziyle ayıklanır.',
        'Yanlış pozitif ve yanlış negatif oranları, istatistikteki α ve β hatalarının karşılığıdır; tespit sınırı (LOD) seçimiyle ilişkilidir.',
        'Değerlendirme numunelerinin yaygınlığı gerçek kullanımdakinden farklıysa PPV/NPV doğrudan aktarılamaz.',
      ],
      en: [
        'Reporting the performance of a rapid test or screening method in its validation.',
        'For screening, high sensitivity (few false negatives) is preferred; false positives are removed by confirmatory analysis.',
        'False-positive and false-negative rates correspond to the statistical α and β errors; they are linked to the choice of detection limit (LOD).',
        'If the prevalence in the evaluation set differs from real use, PPV/NPV cannot be transferred directly.',
      ],
    },
    solution: {
      tr: [
        'Verilen: TP = 45, FP = 3, FN = 5, TN = 147 (toplam 200 numune; 50’si gerçekten pozitif, yaygınlık %25).',
        'Duyarlılık = 45 / (45 + 5) = 45/50 = %90; özgüllük = 147 / (147 + 3) = 147/150 = %98.',
        'PPV = 45 / (45 + 3) = %93,75; NPV = 147 / (147 + 5) = %96,71.',
        'Sonuç: doğruluk = (45 + 147)/200 = %96; yanlış pozitif oranı %2, yanlış negatif oranı %10. Aynı test yaygınlığın %1 olduğu bir popülasyonda kullanılsaydı PPV yalnızca yaklaşık %31 olurdu.',
      ],
      en: [
        'Given: TP = 45, FP = 3, FN = 5, TN = 147 (200 samples in total; 50 truly positive, prevalence 25%).',
        'Sensitivity = 45 / (45 + 5) = 45/50 = 90%; specificity = 147 / (147 + 3) = 147/150 = 98%.',
        'PPV = 45 / (45 + 3) = 93.75%; NPV = 147 / (147 + 5) = 96.71%.',
        'Result: accuracy = (45 + 147)/200 = 96%; false-positive rate 2%, false-negative rate 10%. Used in a population with 1% prevalence, the same test would have a PPV of only about 31%.',
      ],
    },
    mistakes: {
      tr: [
        'Duyarlılık ile PPV’yi karıştırmak (paydalar farklıdır: TP + FN ile TP + FP).',
        'Kimyadaki “duyarlılık” (kalibrasyon eğimi) ile tarama testinin duyarlılığını (doğru pozitif oranı) aynı şey sanmak.',
        'Tek başına doğruluk yüzdesine güvenmek: pozitiflerin az olduğu bir setle, her şeye “negatif” diyen bir test bile yüksek doğruluk gösterir.',
      ],
      en: [
        'Confusing sensitivity with PPV (different denominators: TP + FN vs TP + FP).',
        'Equating the chemical “sensitivity” (calibration slope) with the sensitivity of a screening test (true-positive rate).',
        'Relying on accuracy alone: with few positives in the set, even a test that calls everything “negative” shows high accuracy.',
      ],
    },
    related: ['lod-loq', 'iupac-detection-signal'],
  },
};

import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Statistics module (undergraduate level).
 * Formula tools: the last line of each worked solution states the result the calculator gives
 * for the tool's first example (checked by tests). Data tools: the worked example uses the
 * tool's own sample data, and the numbers match what the tool displays (4 significant figures).
 */
export const STATS_DETAILS: Record<string, ToolDetail> = {
  'relative-error': {
    concept: {
      tr: 'Doğruluk (accuracy), bir sonucun gerçek ya da kabul edilen değere ne kadar yakın olduğudur ve hata ile ifade edilir. Mutlak hata E = x − μ, ölçülen büyüklükle aynı birime sahiptir ve işareti sonucun yüksek mi düşük mü olduğunu gösterir. Bağıl hata ise bu farkın gerçek değere oranıdır; farklı büyüklükteki sonuçları karşılaştırmayı sağlar.\n\nGerçek değer çoğu zaman bilinmez. Pratikte sertifikalı referans maddenin (CRM) değeri, saf bir birincil standardın hesaplanan içeriği ya da güvenilir bir yöntemle bulunan sonuç “kabul edilen değer” olarak kullanılır.',
      en: 'Accuracy is how close a result is to the true or accepted value, and it is expressed as an error. The absolute error E = x − μ has the units of the measured quantity, and its sign shows whether the result is high or low. The relative error is this difference divided by the true value, which lets results of different size be compared.\n\nThe true value is rarely known. In practice the certified value of a reference material (CRM), the calculated content of a pure primary standard or a result from a well-established method is used as the “accepted value”.',
    },
    meaning: {
      tr: 'Eᵣ (%) = (x − μ) / μ × 100. x tek bir sonuç ya da birkaç paralel ölçümün ortalaması olabilir; ortalama kullanılırsa rastgele hatanın etkisi azalır ve kalan fark daha çok sistematik hatayı (yanlılık) yansıtır.\n\nBağıl hata yüzde (%) yerine binde kısım (‰, ppt) olarak da verilebilir: %1,6 = 16 ‰.\n\nHata ile kesinlik farklı kavramlardır:\n• Hata (doğruluk) sonucun gerçek değerden uzaklığıdır.\n• Kesinlik ise tekrarlanan ölçümlerin birbirine yakınlığıdır ve standart sapma ile ölçülür.\nÇok kesin sonuçlar, sistematik hata varsa yine de yanlış olabilir.',
      en: 'Eᵣ (%) = (x − μ) / μ × 100. x may be a single result or the mean of replicates; using the mean reduces the effect of random error, so the remaining difference mostly reflects systematic error (bias).\n\nThe relative error can also be given in parts per thousand (‰, ppt) instead of percent: 1.6% = 16 ‰.\n\nError and precision are different ideas:\n• Error (accuracy) is the distance of the result from the true value.\n• Precision is the closeness of replicate results to each other, measured by the standard deviation.\nVery precise results can still be wrong if a systematic error is present.',
    },
    usage: {
      tr: [
        'Bir yöntemin doğruluğunu sertifikalı referans madde ya da bilinen standartla kontrol etmek.',
        'Farklı derişim düzeylerindeki hataları karşılaştırmak (bağıl hata birimsizdir).',
        'Gerçek değer sıfıra yakınsa bağıl hata anlamsız biçimde büyür; bu durumda mutlak hatayı verin.',
        'Hatanın anlamlı olup olmadığına karar vermek için t-testi gerekir: küçük bir fark rastgele hatadan da kaynaklanabilir.',
      ],
      en: [
        'Checking the accuracy of a method against a certified reference material or a known standard.',
        'Comparing errors at different concentration levels (the relative error is dimensionless).',
        'If the true value is close to zero the relative error becomes meaninglessly large; report the absolute error instead.',
        'Deciding whether the error is significant needs a t-test: a small difference may be due to random error alone.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ölçülen değer x = 20,32, kabul edilen değer μ = 20,00 (aynı birimde).',
        'Mutlak hata: E = x − μ = 20,32 − 20,00 = +0,32.',
        'Bağıl hata: Eᵣ = 0,32 / 20,00 × 100.',
        'Sonuç: Eᵣ = +%1,6 (16 ‰); sonuç gerçek değerden yüksektir.',
      ],
      en: [
        'Given: measured value x = 20.32, accepted value μ = 20.00 (same unit).',
        'Absolute error: E = x − μ = 20.32 − 20.00 = +0.32.',
        'Relative error: Eᵣ = 0.32 / 20.00 × 100.',
        'Result: Eᵣ = +1.6% (16 ‰); the result is higher than the true value.',
      ],
    },
    mistakes: {
      tr: [
        'Farkı gerçek değer yerine ölçülen değere bölmek.',
        'İşareti atmak: negatif hata sonucun düşük, pozitif hata yüksek çıktığını gösterir ve sistematik hatanın yönü hakkında bilgi verir.',
        'Bağıl hatayı (doğruluk) bağıl standart sapma (kesinlik) ile karıştırmak.',
      ],
      en: [
        'Dividing the difference by the measured value instead of the true value.',
        'Dropping the sign: a negative error means a low result, a positive one a high result, which tells you the direction of a systematic error.',
        'Confusing the relative error (accuracy) with the relative standard deviation (precision).',
      ],
    },
    related: ['t-test-known', 'descriptive', 'bias', 'recovery'],
  },

  'z-score': {
    concept: {
      tr: 'Rastgele hatalar etkisindeki ölçüm sonuçları çoğunlukla normal (Gauss) dağılıma uyar. Her normal dağılım, ortalaması (μ) ve standart sapması (σ) farklı olsa da, z dönüşümüyle ortalaması 0 ve standart sapması 1 olan tek bir standart normal dağılıma indirgenebilir. z değeri, bir sonucun ortalamadan kaç standart sapma uzakta olduğunu söyler.\n\nBöylece tek bir tablo ya da fonksiyon (Φ) ile herhangi bir normal dağılım için olasılık hesaplanabilir. Yeterlilik testlerinde laboratuvar sonuçları da z puanıyla değerlendirilir.',
      en: 'Results affected by random errors usually follow a normal (Gaussian) distribution. Every normal distribution, whatever its mean (μ) and standard deviation (σ), can be reduced by the z transformation to a single standard normal distribution with mean 0 and standard deviation 1. The z value says how many standard deviations a result lies from the mean.\n\nA single table or function (Φ) then gives probabilities for any normal distribution. Laboratory results in proficiency tests are also judged by their z-scores.',
    },
    meaning: {
      tr: 'z = (x − μ) / σ. Pay ve payda aynı birimde olduğundan z birimsizdir; işareti değerin ortalamanın üstünde mi altında mı olduğunu gösterir.\n\nNormal dağılımda değerlerin yaklaşık:\n• %68,3’ü μ ± 1σ,\n• %95,4’ü μ ± 2σ,\n• %99,7’si μ ± 3σ aralığında bulunur.\n\nBu nedenle |z| > 3 olan bir değer, yalnızca rastgele hatayla açıklanması çok zor bir sonuçtur. Yeterlilik testlerinde (ISO 13528) genellikle |z| ≤ 2 tatmin edici, 2 < |z| < 3 şüpheli, |z| ≥ 3 tatmin edici değil kabul edilir.',
      en: 'z = (x − μ) / σ. Numerator and denominator have the same unit, so z is dimensionless; its sign shows whether the value is above or below the mean.\n\nIn a normal distribution about:\n• 68.3% of values lie within μ ± 1σ,\n• 95.4% within μ ± 2σ,\n• 99.7% within μ ± 3σ.\n\nA value with |z| > 3 is therefore very hard to explain by random error alone. In proficiency testing (ISO 13528), |z| ≤ 2 is usually satisfactory, 2 < |z| < 3 questionable and |z| ≥ 3 unsatisfactory.',
    },
    usage: {
      tr: [
        'Bir değerin dağılım içindeki konumunu belirlemek ve normal dağılım olasılıklarını hesaplamak.',
        'Yeterlilik (laboratuvarlar arası karşılaştırma) testlerinde sonuçları puanlamak.',
        'σ ve μ, popülasyon (gerçek) değerleridir; küçük veri setinden hesaplanan s ve x̄ ile çalışırken t dağılımı daha uygundur.',
        'Veriler normal dağılmıyorsa (ör. çarpık dağılımlar) olasılık yorumları geçersizdir.',
      ],
      en: [
        'Locating a value within a distribution and computing normal-distribution probabilities.',
        'Scoring results in proficiency (interlaboratory) tests.',
        'σ and μ are population (true) values; with s and x̄ from a small data set the t distribution is more appropriate.',
        'If the data are not normally distributed (e.g. skewed), the probability interpretation fails.',
      ],
    },
    solution: {
      tr: [
        'Verilen: x = 12,5; μ = 10; σ = 1,25 (aynı birimde).',
        'Ortalamadan sapma: x − μ = 12,5 − 10 = 2,5.',
        'Sapmayı standart sapmaya bölün: z = 2,5 / 1,25.',
        'Sonuç: z = 2; değer ortalamanın 2σ üstündedir (normal dağılımda değerlerin yalnızca yaklaşık %2,3’ü bundan büyüktür).',
      ],
      en: [
        'Given: x = 12.5, μ = 10, σ = 1.25 (same unit).',
        'Deviation from the mean: x − μ = 12.5 − 10 = 2.5.',
        'Divide by the standard deviation: z = 2.5 / 1.25.',
        'Result: z = 2; the value lies 2σ above the mean (only about 2.3% of a normal population is larger).',
      ],
    },
    mistakes: {
      tr: [
        'σ yerine varyansı (σ²) kullanmak.',
        'Tek yönlü ve iki yönlü olasılıkları karıştırmak: |z| > 2 olasılığı yaklaşık %4,6, z > 2 olasılığı ise yaklaşık %2,3’tür.',
        'Birkaç ölçümden hesaplanan s’yi gerçek σ gibi kullanıp kesin olasılık iddia etmek.',
      ],
      en: [
        'Using the variance (σ²) instead of σ.',
        'Mixing one- and two-tailed probabilities: P(|z| > 2) is about 4.6%, P(z > 2) about 2.3%.',
        'Treating s from a few measurements as the true σ and claiming exact probabilities.',
      ],
    },
    related: ['normal-probability', 'pt-z-score', 'descriptive'],
  },

  'sample-size-power': {
    concept: {
      tr: 'Bir deney tasarlanırken “farkı görebilmek için kaç ölçüm yapmalıyım?” sorusu sorulmalıdır. Az ölçümle gerçek bir fark rastgele hatanın içinde kaybolur; gereğinden fazla ölçüm ise zaman ve reaktif israfıdır.\n\nİstatistiksel testlerde iki tür hata vardır. I. tür hata (α), gerçekte fark yokken “fark var” demektir. II. tür hata (β), gerçekte fark varken onu görememektir. Testin gücü 1 − β’dır, yani var olan bir farkı yakalama olasılığıdır. Güç analizi, seçilen α ve β için gerekli ölçüm sayısını tahmin eder.',
      en: 'When designing an experiment one should ask “how many measurements do I need to see the difference?”. With too few, a real difference is lost in the random error; too many waste time and reagents.\n\nStatistical tests can make two kinds of error. A type I error (α) is claiming a difference when there is none. A type II error (β) is missing a difference that really exists. The power of a test is 1 − β, the probability of detecting a real difference. Power analysis estimates the number of measurements needed for chosen α and β.',
    },
    meaning: {
      tr: 'n > 2 · [(z_α + z_β) · s / δ]². Formül, iki grubun ortalamaları karşılaştırıldığında grup başına gereken ölçüm sayısını verir:\n• δ: yakalanmak istenen en küçük fark (ölçülen büyüklüğün biriminde),\n• s: tek bir ölçümün standart sapması (önceden bilinen ya da tahmin edilen),\n• z_α: iki yönlü test için %95 güvende 1,96,\n• z_β: güç için; %95 güçte 1,645, %90 güçte 1,28.\n\nMantık: iki ortalamanın farkının standart sapması s·√(2/n)’dir. Farkın anlamlı çıkması ve aynı zamanda yüksek olasılıkla yakalanması için δ’nın (z_α + z_β) · s · √(2/n)’den büyük olması gerekir; bu eşitsizlik n için çözülünce formül elde edilir.\n\nn, δ’nın karesiyle ters orantılıdır: yarı büyüklükte bir farkı görmek dört kat ölçüm gerektirir.',
      en: 'n > 2 · [(z_α + z_β) · s / δ]². The formula gives the number of measurements per group when two group means are compared:\n• δ: the smallest difference worth detecting (in the unit of the measured quantity),\n• s: the standard deviation of a single measurement (known or estimated beforehand),\n• z_α: 1.96 for a two-tailed test at 95% confidence,\n• z_β: for the power; 1.645 for 95% power, 1.28 for 90% power.\n\nReasoning: the difference of two means has a standard deviation of s·√(2/n). For the difference to be significant and also detected with high probability, δ must exceed (z_α + z_β) · s · √(2/n); solving this inequality for n gives the formula.\n\nn is inversely proportional to δ squared: detecting a difference half as large needs four times as many measurements.',
    },
    usage: {
      tr: [
        'Yöntem karşılaştırması ya da numune grupları arasında fark aranan deneyleri planlamak.',
        'Sonuç tam sayıya yukarı yuvarlanır; formül alt sınır verir.',
        'Normal dağılım ve bilinen (ya da iyi tahmin edilmiş) s varsayılır; küçük n’lerde t dağılımı nedeniyle biraz daha fazla ölçüm gerekir.',
        'Tek bir ortalamayı bilinen bir değerle karşılaştırırken baştaki 2 çarpanı kullanılmaz.',
      ],
      en: [
        'Planning experiments that look for a difference between methods or groups of samples.',
        'Round the result up to a whole number; the formula gives a lower bound.',
        'It assumes a normal distribution and a known (or well-estimated) s; for small n the t distribution means slightly more measurements are needed.',
        'When comparing a single mean with a known value, the leading factor 2 is dropped.',
      ],
    },
    solution: {
      tr: [
        'Verilen: z_α = 1,96 (%95 güven, iki yönlü), z_β = 1,64 (yaklaşık %95 güç), s = 3, δ = 2.',
        '(z_α + z_β) · s / δ = (1,96 + 1,64) × 3 / 2 = 3,60 × 1,5 = 5,40.',
        'Karesi: 5,40² = 29,16; iki grup için 2 ile çarpılır: n > 2 × 29,16.',
        'Sonuç: n > 58,32, yani her grupta en az 59 ölçüm gerekir.',
      ],
      en: [
        'Given: z_α = 1.96 (95% confidence, two-tailed), z_β = 1.64 (about 95% power), s = 3, δ = 2.',
        '(z_α + z_β) · s / δ = (1.96 + 1.64) × 3 / 2 = 3.60 × 1.5 = 5.40.',
        'Squared: 5.40² = 29.16; multiplied by 2 for two groups: n > 2 × 29.16.',
        'Result: n > 58.32, so at least 59 measurements are needed in each group.',
      ],
    },
    mistakes: {
      tr: [
        'Sonucu aşağı yuvarlamak (58 ölçüm istenen gücü sağlamaz).',
        'z_α için tek yönlü değeri (1,645) iki yönlü test planında kullanmak.',
        's ve δ’yı farklı birimlerde ya da s yerine ortalamanın standart sapmasını girmek.',
      ],
      en: [
        'Rounding the result down (58 measurements do not give the required power).',
        'Using the one-tailed value (1.645) for z_α when planning a two-tailed test.',
        'Entering s and δ in different units, or the standard deviation of the mean instead of s.',
      ],
    },
    related: ['t-test-two', 'z-score', 'samples-number', 'validation-replicates'],
  },

  descriptive: {
    concept: {
      tr: 'Bir analiz genellikle birkaç paralel (replikat) ölçümle yapılır. Tanımlayıcı istatistik bu verileri birkaç sayıyla özetler: merkezî eğilim (ortalama, medyan), yayılma (aralık, standart sapma, varyans, bağıl standart sapma) ve gerçek değerin bulunabileceği güven aralığı.\n\nOrtalama en iyi tahmindir; standart sapma ise rastgele hatanın büyüklüğünü, yani kesinliği gösterir. Güven aralığı, sınırlı sayıda ölçümden yola çıkarak popülasyon ortalamasının (μ) belirli bir olasılıkla hangi aralıkta olduğunu söyler.',
      en: 'An analysis is usually done on several replicate measurements. Descriptive statistics summarise these data in a few numbers: central tendency (mean, median), spread (range, standard deviation, variance, relative standard deviation) and a confidence interval in which the true value is expected to lie.\n\nThe mean is the best estimate; the standard deviation shows the size of the random error, that is, the precision. The confidence interval states, from a limited number of measurements, the range that contains the population mean (μ) with a given probability.',
    },
    meaning: {
      tr: 'x̄ = Σxᵢ / n ve s = √[Σ(xᵢ − x̄)² / (n − 1)]. Paydadaki n − 1 serbestlik derecesidir: sapmalar x̄’dan hesaplandığından bir serbestlik derecesi ortalamayı bulmaya harcanmıştır. n kullanılırsa s sistematik olarak küçük çıkar.\n\nDiğer büyüklükler:\n• Varyans s²; bağımsız hata kaynaklarında varyanslar toplanır.\n• RSD = s / x̄; %RSD (varyasyon katsayısı, %CV) = 100 · s / x̄.\n• Ortalamanın standart sapması s/√n: ortalama tek bir ölçümden √n kat daha kesindir.\n• Medyan, aykırı değerlerden ortalamaya göre çok daha az etkilenir.\n\nGüven aralığı: μ = x̄ ± t · s / √n. t, n − 1 serbestlik derecesi ve seçilen güven düzeyi için Student t değeridir. n büyüdükçe t, z’ye yaklaşır (%95 için 1,96); küçük n’de t büyüktür ve aralık genişler.',
      en: 'x̄ = Σxᵢ / n and s = √[Σ(xᵢ − x̄)² / (n − 1)]. The n − 1 in the denominator is the number of degrees of freedom: because deviations are taken from x̄, one degree of freedom has been used to find the mean. Using n gives a systematically low s.\n\nOther quantities:\n• Variance s²; for independent sources of error, variances add.\n• RSD = s / x̄; %RSD (coefficient of variation, %CV) = 100 · s / x̄.\n• Standard deviation of the mean s/√n: the mean is √n times more precise than a single measurement.\n• The median is much less affected by outliers than the mean.\n\nConfidence interval: μ = x̄ ± t · s / √n, where t is Student’s t for n − 1 degrees of freedom at the chosen confidence level. As n grows, t approaches z (1.96 at 95%); for small n, t is large and the interval widens.',
    },
    usage: {
      tr: [
        'Paralel ölçümlerin sonucunu “x̄ ± güven aralığı (n, güven düzeyi)” biçiminde raporlamak.',
        'Yöntemin kesinliğini (tekrarlanabilirlik) %RSD ile ifade etmek.',
        'Veriler normal dağılmış, bağımsız ve aynı koşullarda alınmış olmalıdır; sistematik hata güven aralığına yansımaz.',
        'n = 2–3 gibi çok küçük setlerde s güvenilmezdir ve güven aralığı çok geniştir.',
      ],
      en: [
        'Reporting replicate results as “x̄ ± confidence interval (n, confidence level)”.',
        'Expressing the precision (repeatability) of a method as %RSD.',
        'Data should be normally distributed, independent and obtained under the same conditions; systematic error does not show up in the confidence interval.',
        'For very small sets (n = 2–3) s is unreliable and the confidence interval is very wide.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri (n = 7): 3,080; 3,094; 3,107; 3,056; 3,112; 3,174; 3,198. Ortalama x̄ = 21,821 / 7 = 3,117; medyan = 3,107; aralık = 3,198 − 3,056 = 0,142.',
        'Sapmaların kareler toplamı Σ(xᵢ − x̄)² = 0,01555; s = √(0,01555 / 6) = 0,05091; varyans s² = 0,002592.',
        '%RSD = 100 × 0,05091 / 3,117 = 1,633; ortalamanın standart sapması s/√n = 0,05091 / √7 = 0,01924.',
        'Sonuç: %95 güven aralığı (t = 2,447; 6 serbestlik derecesi) μ = 3,117 ± 2,447 × 0,01924 = 3,117 ± 0,04709.',
      ],
      en: [
        'Sample data (n = 7): 3.080, 3.094, 3.107, 3.056, 3.112, 3.174, 3.198. Mean x̄ = 21.821 / 7 = 3.117; median = 3.107; range = 3.198 − 3.056 = 0.142.',
        'Sum of squared deviations Σ(xᵢ − x̄)² = 0.01555; s = √(0.01555 / 6) = 0.05091; variance s² = 0.002592.',
        '%RSD = 100 × 0.05091 / 3.117 = 1.633; standard deviation of the mean s/√n = 0.05091 / √7 = 0.01924.',
        'Result: 95% confidence interval (t = 2.447, 6 degrees of freedom) μ = 3.117 ± 2.447 × 0.01924 = 3.117 ± 0.04709.',
      ],
    },
    mistakes: {
      tr: [
        'Örnek standart sapmasında n − 1 yerine n’ye bölmek (hesap makinesinde σₙ tuşu).',
        'Güven aralığında s/√n yerine s kullanmak ya da t yerine z = 1,96 almak (küçük n’de aralık olduğundan dar çıkar).',
        'Şüpheli bir değeri test yapmadan atmak; önce Q- ya da Grubbs testi uygulanmalıdır.',
      ],
      en: [
        'Dividing by n instead of n − 1 for the sample standard deviation (the σₙ key on a calculator).',
        'Using s instead of s/√n in the confidence interval, or z = 1.96 instead of t (the interval is too narrow for small n).',
        'Discarding a suspect value without a test; apply a Q- or Grubbs test first.',
      ],
    },
    related: ['t-test-known', 'grubbs', 'table-critical', 'propagation'],
  },

  't-test-known': {
    concept: {
      tr: 'Yeni bir yöntemin doğruluğunu sınamanın en doğrudan yolu, değeri bilinen bir sertifikalı referans maddeyi (CRM) analiz edip sonuçların ortalamasını sertifika değeriyle karşılaştırmaktır. Ortalama hiçbir zaman sertifika değerine tam eşit çıkmaz; asıl soru farkın yalnızca rastgele hatayla açıklanıp açıklanamayacağıdır.\n\nt-testi bu soruyu nesnel olarak yanıtlar. Sıfır hipotezi (H₀), yöntemin gerçek ortalamasının referans değere eşit olduğudur, yani sistematik hata yoktur. Fark rastgele hatanın açıklayabileceğinden büyükse H₀ reddedilir ve yöntemde anlamlı bir yanlılık olduğu sonucuna varılır.',
      en: 'The most direct way to check the accuracy of a new method is to analyse a certified reference material (CRM) and compare the mean of the results with the certified value. The mean will never equal the certified value exactly; the real question is whether the difference can be explained by random error alone.\n\nThe t-test answers this objectively. The null hypothesis (H₀) is that the true mean of the method equals the reference value, i.e. there is no systematic error. If the difference is larger than random error can explain, H₀ is rejected and the method is concluded to have a significant bias.',
    },
    meaning: {
      tr: 't_exp = |x̄ − μ| · √n / s. Pay, gözlenen fark; payda (s/√n) ortalamanın standart sapmasıdır. t, farkın ortalamanın kaç standart sapmasına karşılık geldiğini gösterir.\n\nKarar kuralı:\n• t_exp, n − 1 serbestlik derecesi ve seçilen güven düzeyindeki iki yönlü t_kritik ile karşılaştırılır.\n• t_exp > t_kritik ise fark anlamlıdır (sistematik hata vardır).\n• t_exp ≤ t_kritik ise fark rastgele hatayla açıklanabilir; bu, yanlılığın sıfır olduğunu kanıtlamaz, yalnızca bu verilerle saptanamadığını gösterir.\n\nEşdeğer olarak: μ, x̄ ± t · s/√n güven aralığının içindeyse fark anlamlı değildir. Araç ayrıca p değerini verir; p < 0,05 ise %95 güvende fark anlamlıdır.',
      en: 't_exp = |x̄ − μ| · √n / s. The numerator is the observed difference; the denominator (s/√n) is the standard deviation of the mean. t says how many standard deviations of the mean the difference amounts to.\n\nDecision rule:\n• Compare t_exp with the two-tailed t_crit for n − 1 degrees of freedom at the chosen confidence level.\n• If t_exp > t_crit the difference is significant (systematic error is present).\n• If t_exp ≤ t_crit the difference can be explained by random error; this does not prove the bias is zero, only that these data cannot detect it.\n\nEquivalently: if μ lies inside the confidence interval x̄ ± t · s/√n, the difference is not significant. The tool also gives the p-value; p < 0.05 means the difference is significant at 95% confidence.',
    },
    usage: {
      tr: [
        'Yöntem validasyonunda CRM ya da bilinen standartla doğruluk kontrolü.',
        'Bir ürünün beyan edilen değere (etiket değeri, spesifikasyon) uyup uymadığını sınamak.',
        'Veriler bağımsız ve yaklaşık normal dağılmış olmalıdır; referans değerin belirsizliği sonucun belirsizliğine göre ihmal edilebilir olmalıdır.',
        'Yalnızca “düşük mü?” ya da “yüksek mi?” sorusu soruluyorsa tek yönlü test uygundur; araç iki yönlü test yapar.',
      ],
      en: [
        'Checking accuracy against a CRM or known standard during method validation.',
        'Testing whether a product meets a stated value (label claim, specification).',
        'Data must be independent and approximately normal; the uncertainty of the reference value should be negligible compared with that of the result.',
        'If only “is it low?” or “is it high?” is asked, a one-tailed test is appropriate; the tool performs a two-tailed test.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri (n = 5): 98,9; 99,1; 99,4; 99,6; 98,8; referans değer μ = 100. x̄ = 99,16; s = 0,3362.',
        't_exp = |99,16 − 100| × √5 / 0,3362 = 0,84 × 2,236 / 0,3362 = 5,588.',
        't_kritik (%95, iki yönlü, 4 serbestlik derecesi) = 2,776; p = 0,005032.',
        'Sonuç: 5,588 > 2,776 olduğundan fark anlamlıdır; yöntem bu referans maddede sistematik olarak düşük sonuç vermektedir.',
      ],
      en: [
        'Sample data (n = 5): 98.9, 99.1, 99.4, 99.6, 98.8; reference value μ = 100. x̄ = 99.16, s = 0.3362.',
        't_exp = |99.16 − 100| × √5 / 0.3362 = 0.84 × 2.236 / 0.3362 = 5.588.',
        't_crit (95%, two-tailed, 4 degrees of freedom) = 2.776; p = 0.005032.',
        'Result: since 5.588 > 2.776 the difference is significant; the method gives systematically low results for this reference material.',
      ],
    },
    mistakes: {
      tr: [
        'Serbestlik derecesini n yerine n − 1 almamak.',
        'İki yönlü soru için tek yönlü t_kritik değerini kullanmak.',
        '“Fark anlamlı değil” sonucunu “yöntem doğrudur” diye yorumlamak; az ölçümle büyük yanlılıklar bile saptanamayabilir.',
      ],
      en: [
        'Not using n − 1 as the degrees of freedom.',
        'Using a one-tailed t_crit for a two-tailed question.',
        'Reading “not significant” as “the method is accurate”; with few measurements even large biases may go undetected.',
      ],
    },
    related: ['relative-error', 'descriptive', 'table-critical', 'bias'],
  },

  't-test-two': {
    concept: {
      tr: 'İki farklı numunenin (ör. iki üretim partisi) ya da aynı numunenin iki farklı yöntemle analizinin ortalamaları karşılaştırılırken iki ortalama arasında gözlenen farkın gerçek mi yoksa rastgele hatanın sonucu mu olduğu sorulur. Sıfır hipotezi H₀: μ₁ = μ₂.\n\nHer iki ortalama da kendi rastgele hatasını taşıdığından, farkın standart sapması iki kaynağın birleşimidir. Testin biçimi iki veri setinin varyanslarının eşit kabul edilip edilemeyeceğine bağlıdır; bu yüzden önce F-testi yapılır.',
      en: 'When comparing the means of two different samples (e.g. two production batches) or of the same sample analysed by two methods, we ask whether the observed difference is real or the result of random error. Null hypothesis H₀: μ₁ = μ₂.\n\nBoth means carry their own random error, so the standard deviation of the difference combines two sources. The form of the test depends on whether the two variances can be treated as equal, which is why an F-test is done first.',
    },
    meaning: {
      tr: 'Varyanslar eşitse (F-testi anlamlı değil) havuzlanmış standart sapma kullanılır:\ns_p = √{[(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2)}\nt_exp = |x̄₁ − x̄₂| / s_p · √[n₁n₂ / (n₁ + n₂)], serbestlik derecesi n₁ + n₂ − 2.\n\nKarekök içindeki terim, farkın standart sapmasının s_p · √(1/n₁ + 1/n₂) olmasından gelir.\n\nVaryanslar farklıysa Welch yaklaşımı kullanılır:\n• t = |x̄₁ − x̄₂| / √(s₁²/n₁ + s₂²/n₂),\n• serbestlik derecesi Welch–Satterthwaite eşitliğinden hesaplanır ve tam sayı olmayabilir.\n\nWelch–Satterthwaite: ν = (s₁²/n₁ + s₂²/n₂)² / [(s₁²/n₁)²/(n₁ − 1) + (s₂²/n₂)²/(n₂ − 1)]\n\nBazı ders kitapları bunun yerine paydada (n + 1) kullanan ve sonuçtan 2 çıkaran eski bir yaklaşım verir; iki yol biraz farklı ν değerleri verebilir. Bu araç yukarıdaki (n − 1) biçimini kullanır.\n\nt_exp > t_kritik (iki yönlü) ise ortalamalar arasındaki fark anlamlıdır.',
      en: 'If the variances are equal (F-test not significant), the pooled standard deviation is used:\ns_p = √{[(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2)}\nt_exp = |x̄₁ − x̄₂| / s_p · √[n₁n₂ / (n₁ + n₂)], with n₁ + n₂ − 2 degrees of freedom.\n\nThe square-root term comes from the standard deviation of the difference, s_p · √(1/n₁ + 1/n₂).\n\nIf the variances differ, the Welch approach is used:\n• t = |x̄₁ − x̄₂| / √(s₁²/n₁ + s₂²/n₂),\n• the degrees of freedom come from the Welch–Satterthwaite equation and need not be a whole number.\n\nWelch–Satterthwaite: ν = (s₁²/n₁ + s₂²/n₂)² / [(s₁²/n₁)²/(n₁ − 1) + (s₂²/n₂)²/(n₂ − 1)]\n\nSome textbooks give an older approximation with (n + 1) in the denominators and 2 subtracted from the result; the two can give slightly different ν. This tool uses the (n − 1) form above.\n\nIf t_exp > t_crit (two-tailed), the difference between the means is significant.',
    },
    usage: {
      tr: [
        'İki numunenin, iki partinin ya da aynı numuneye uygulanan iki yöntemin ortalamalarını karşılaştırmak.',
        'Gruplar bağımsız olmalıdır; aynı numuneler iki yöntemle ölçüldüyse eşleştirilmiş t-testi kullanılır.',
        'Veriler yaklaşık normal dağılmalıdır; aykırı değerler s’yi büyüterek testi zayıflatır.',
        'Üç veya daha fazla grup için t-testlerini tekrarlamak yerine ANOVA kullanılır.',
      ],
      en: [
        'Comparing the means of two samples, two batches or two methods applied to the same material.',
        'The groups must be independent; if the same samples were measured by two methods, use the paired t-test.',
        'Data should be roughly normal; outliers inflate s and weaken the test.',
        'For three or more groups, use ANOVA rather than repeated t-tests.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: A (n₁ = 7) x̄₁ = 3,117, s₁ = 0,05091; B (n₂ = 5) x̄₂ = 3,081, s₂ = 0,03721.',
        'F-testi: F = 0,002592 / 0,001384 = 1,873 < F_kritik (6, 4) = 9,197; varyanslar eşit kabul edilir ve s_p = √[(6 × 0,002592 + 4 × 0,001384) / 10] = 0,04592.',
        't_exp = (3,1173 − 3,0814) / 0,04592 × √(7 × 5 / 12) = 0,0359 / 0,04592 × 1,708 = 1,335.',
        'Sonuç: t_kritik (%95, 10 serbestlik derecesi) = 2,228; 1,335 < 2,228 olduğundan iki ortalama arasındaki fark anlamlı değildir (p = 0,2116).',
      ],
      en: [
        'Sample data: A (n₁ = 7) x̄₁ = 3.117, s₁ = 0.05091; B (n₂ = 5) x̄₂ = 3.081, s₂ = 0.03721.',
        'F-test: F = 0.002592 / 0.001384 = 1.873 < F_crit (6, 4) = 9.197; the variances are treated as equal and s_p = √[(6 × 0.002592 + 4 × 0.001384) / 10] = 0.04592.',
        't_exp = (3.1173 − 3.0814) / 0.04592 × √(7 × 5 / 12) = 0.0359 / 0.04592 × 1.708 = 1.335.',
        'Result: t_crit (95%, 10 degrees of freedom) = 2.228; since 1.335 < 2.228 the difference between the means is not significant (p = 0.2116).',
      ],
    },
    mistakes: {
      tr: [
        'Serbestlik derecesini n₁ + n₂ − 2 yerine n₁ + n₂ − 1 ya da n − 1 almak.',
        'Varyanslar açıkça farklıyken havuzlanmış s kullanmak (F-testini atlamak).',
        'Aynı numunelerin iki yöntemle ölçüldüğü veriye bağımsız gruplar testini uygulamak; numuneler arasındaki fark s’yi şişirir ve gerçek yöntem farkı gizlenir.',
      ],
      en: [
        'Taking the degrees of freedom as n₁ + n₂ − 1 or n − 1 instead of n₁ + n₂ − 2.',
        'Using a pooled s when the variances clearly differ (skipping the F-test).',
        'Applying the independent-groups test to the same samples measured by two methods; sample-to-sample variation inflates s and hides a real method difference.',
      ],
    },
    related: ['f-test', 't-test-paired', 'anova', 'table-critical'],
  },

  't-test-paired': {
    concept: {
      tr: 'Yeni bir yöntem, farklı derişimlerde analit içeren birçok gerçek numunede eski yöntemle karşılaştırılırken iki yöntemin sonuçları çiftler hâlinde gelir. Numuneler birbirinden çok farklı olduğundan iki sütunun ortalamalarını karşılaştırmak anlamsızdır: numuneler arası değişkenlik yöntem farkını gizler.\n\nEşleştirilmiş t-testi her numune için iki sonucun farkını (dᵢ) alır. Böylece numune içeriğinin etkisi ortadan kalkar ve yalnızca yöntemler arasındaki fark incelenir. Sıfır hipotezi, farkların ortalamasının sıfır olduğudur.',
      en: 'When a new method is compared with an established one on many real samples with different analyte contents, the results come in pairs. Because the samples differ widely, comparing the means of the two columns makes no sense: sample-to-sample variation hides the method difference.\n\nThe paired t-test takes the difference of the two results for each sample (dᵢ). This removes the effect of sample content and leaves only the difference between the methods. The null hypothesis is that the mean of the differences is zero.',
    },
    meaning: {
      tr: 'dᵢ = x₁ᵢ − x₂ᵢ; d̄ farkların ortalaması, s_d farkların standart sapmasıdır.\n\nt_exp = |d̄| · √n / s_d, serbestlik derecesi n − 1 (n: numune çifti sayısı).\n\nBu, farklar üzerinde yapılan tek örneklem t-testidir; “bilinen değer” sıfırdır. t_exp > t_kritik (iki yönlü) ise yöntemler arasında anlamlı sistematik fark vardır. d̄’nın işareti hangi yöntemin daha yüksek sonuç verdiğini gösterir.\n\nTest, farkların derişimden bağımsız ve yaklaşık normal dağıldığını varsayar.',
      en: 'dᵢ = x₁ᵢ − x₂ᵢ; d̄ is the mean and s_d the standard deviation of the differences.\n\nt_exp = |d̄| · √n / s_d, with n − 1 degrees of freedom (n: number of sample pairs).\n\nThis is a one-sample t-test on the differences, with zero as the “known value”. If t_exp > t_crit (two-tailed), there is a significant systematic difference between the methods. The sign of d̄ shows which method gives higher results.\n\nThe test assumes the differences are independent of concentration and roughly normal.',
    },
    usage: {
      tr: [
        'Aynı numune setinin iki yöntemle, iki cihazla ya da iki analistle analiz edildiği karşılaştırmalar.',
        'Değerler iki listede aynı sırayla girilmelidir; her çift aynı numuneye ait olmalıdır.',
        'Derişim aralığı çok genişse ve fark derişimle orantılıysa, bağıl farklar ya da regresyonla yöntem karşılaştırması daha uygundur.',
      ],
      en: [
        'Comparisons in which the same set of samples is analysed by two methods, instruments or analysts.',
        'Enter the values in the same order in both lists; each pair must belong to the same sample.',
        'If the concentration range is very wide and the difference scales with concentration, relative differences or a regression comparison are more suitable.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri (6 numune): Yöntem 1: 10,2; 12,7; 8,6; 17,5; 11,2; 11,5. Yöntem 2: 10,6; 13,0; 8,4; 17,8; 11,5; 11,4.',
        'Farklar dᵢ = −0,4; −0,3; +0,2; −0,3; −0,3; +0,1 → d̄ = −0,1667; s_d = 0,2503.',
        't_exp = 0,1667 × √6 / 0,2503 = 1,631; t_kritik (%95, 5 serbestlik derecesi) = 2,571.',
        'Sonuç: 1,631 < 2,571 olduğundan iki yöntem arasında anlamlı fark yoktur (p = 0,1639).',
      ],
      en: [
        'Sample data (6 samples): Method 1: 10.2, 12.7, 8.6, 17.5, 11.2, 11.5. Method 2: 10.6, 13.0, 8.4, 17.8, 11.5, 11.4.',
        'Differences dᵢ = −0.4, −0.3, +0.2, −0.3, −0.3, +0.1 → d̄ = −0.1667, s_d = 0.2503.',
        't_exp = 0.1667 × √6 / 0.2503 = 1.631; t_crit (95%, 5 degrees of freedom) = 2.571.',
        'Result: since 1.631 < 2.571 there is no significant difference between the two methods (p = 0.1639).',
      ],
    },
    mistakes: {
      tr: [
        'Eşleştirilmiş veriye bağımsız iki ortalama t-testi uygulamak.',
        'Serbestlik derecesini çift sayısı yerine toplam ölçüm sayısından (2n − 2) hesaplamak.',
        'Listeleri farklı sırayla girmek; farklar anlamsızlaşır.',
      ],
      en: [
        'Applying the two-independent-means t-test to paired data.',
        'Computing the degrees of freedom from the total number of measurements (2n − 2) instead of the number of pairs.',
        'Entering the lists in different orders, which makes the differences meaningless.',
      ],
    },
    related: ['t-test-two', 't-test-known', 'table-critical'],
  },

  'f-test': {
    concept: {
      tr: 'F-testi iki veri setinin kesinliğini, yani varyanslarını karşılaştırır. Örneğin yeni bir yöntemin eski yönteme göre daha kesin olup olmadığı ya da iki analistin aynı kesinlikte çalışıp çalışmadığı bu testle sınanır. Sıfır hipotezi iki popülasyon varyansının eşit olduğudur.\n\nF-testi ayrıca iki ortalama t-testinden önce yapılır: varyanslar eşitse havuzlanmış standart sapma kullanılabilir, değilse Welch yaklaşımına geçilir.',
      en: 'The F-test compares the precision, i.e. the variances, of two data sets. It tests, for example, whether a new method is more precise than an old one or whether two analysts work with the same precision. The null hypothesis is that the two population variances are equal.\n\nThe F-test is also done before the two-means t-test: if the variances are equal the pooled standard deviation can be used, otherwise the Welch approach is needed.',
    },
    meaning: {
      tr: 'F = s₁² / s₂². Büyük varyans her zaman paya yazılır, böylece F ≥ 1 olur. Serbestlik dereceleri pay için n₁ − 1, payda için n₂ − 1’dir ve kritik değer bu sırayla okunur.\n\nTek yönlü mü, iki yönlü mü?\n• “Varyanslar farklı mı?” sorusu iki yönlüdür: %95 güven için F_kritik, α/2 = 0,025 üst kuyruğundan alınır. Araç bu iki yönlü testi yapar.\n• “A yöntemi B’den daha mı kesin?” sorusu tek yönlüdür ve kritik değer α = 0,05’ten alınır.\n\nF_exp > F_kritik ise varyanslar anlamlı farklıdır. Az sayıda ölçümle F_kritik çok büyük olduğundan, kesinlikteki oldukça büyük farklar bile anlamlı çıkmayabilir.',
      en: 'F = s₁² / s₂². The larger variance always goes in the numerator so that F ≥ 1. The degrees of freedom are n₁ − 1 for the numerator and n₂ − 1 for the denominator, and the critical value is read in that order.\n\nOne- or two-tailed?\n• “Do the variances differ?” is two-tailed: for 95% confidence, F_crit is taken from the upper α/2 = 0.025 tail. The tool performs this two-tailed test.\n• “Is method A more precise than B?” is one-tailed, and the critical value is taken at α = 0.05.\n\nIf F_exp > F_crit the variances differ significantly. With few measurements F_crit is very large, so even quite large differences in precision may not be significant.',
    },
    usage: {
      tr: [
        'İki yöntemin, cihazın ya da analistin kesinliğini karşılaştırmak.',
        'İki ortalama t-testinde havuzlanmış s kullanılıp kullanılamayacağına karar vermek.',
        'F-testi normal dağılımdan sapmalara ve aykırı değerlere çok duyarlıdır; önce aykırı değer kontrolü yapın.',
      ],
      en: [
        'Comparing the precision of two methods, instruments or analysts.',
        'Deciding whether a pooled s may be used in the two-means t-test.',
        'The F-test is very sensitive to non-normality and outliers; check for outliers first.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: A (n = 7) s² = 0,002592; B (n = 5) s² = 0,001384.',
        'Büyük varyans paya: F_exp = 0,002592 / 0,001384 = 1,873; serbestlik dereceleri (6, 4).',
        'F_kritik (%95, iki yönlü, 6 ve 4 serbestlik derecesi) = 9,197; p = 0,5661.',
        'Sonuç: 1,873 < 9,197 olduğundan iki setin kesinlikleri arasında anlamlı fark yoktur.',
      ],
      en: [
        'Sample data: A (n = 7) s² = 0.002592; B (n = 5) s² = 0.001384.',
        'Larger variance on top: F_exp = 0.002592 / 0.001384 = 1.873; degrees of freedom (6, 4).',
        'F_crit (95%, two-tailed, 6 and 4 degrees of freedom) = 9.197; p = 0.5661.',
        'Result: since 1.873 < 9.197 there is no significant difference between the precisions of the two sets.',
      ],
    },
    mistakes: {
      tr: [
        'Varyans yerine standart sapmaların oranını almak.',
        'Pay ve paydanın serbestlik derecelerini tabloda ters okumak.',
        'İki yönlü bir soruda tek yönlü (%95) F tablosunu kullanmak; bu, gerçekte %90 güvende test yapmak demektir.',
      ],
      en: [
        'Taking the ratio of standard deviations instead of variances.',
        'Reading the numerator and denominator degrees of freedom the wrong way round in the table.',
        'Using the one-tailed (95%) F table for a two-tailed question, which really tests at 90% confidence.',
      ],
    },
    related: ['t-test-two', 'anova', 'table-critical', 'descriptive'],
  },

  'q-test': {
    concept: {
      tr: 'Bir veri setinde diğerlerinden belirgin biçimde uzak duran bir değer (aykırı değer) bir kaba hatadan, örneğin yanlış okuma, kirlenme ya da sıçrama gibi bir sorundan kaynaklanabilir. Ancak büyük rastgele hatalar da arada bir görülür. Bir değeri yalnızca “uymuyor” diye atmak, sonucu bilinçli ya da bilinçsiz olarak çarpıtmaktır.\n\nDixon Q-testi, küçük veri setlerinde (3–10 değer) şüpheli değerin istatistiksel olarak atılıp atılamayacağına karar vermek için basit bir ölçüt sunar. Sıfır hipotezi, şüpheli değerin de diğerleriyle aynı popülasyondan geldiğidir.',
      en: 'A value that lies clearly apart from the rest of a data set (an outlier) may come from a gross error such as a misreading, contamination or spattering. Yet large random errors also occur from time to time. Discarding a value just because it “does not fit” biases the result, consciously or not.\n\nDixon’s Q-test gives a simple criterion for deciding whether a suspect value can be rejected in small data sets (3–10 values). The null hypothesis is that the suspect value comes from the same population as the others.',
    },
    meaning: {
      tr: 'Q_exp = |x_şüpheli − x_en yakın| / (x_max − x_min). Pay, şüpheli değer ile ona en yakın değer arasındaki boşluk; payda, tüm verinin aralığıdır (şüpheli değer dahil).\n\nVeriler sıralanır, en küçük ve en büyük değerin boşlukları hesaplanır ve daha büyük olan şüpheli kabul edilir. Q_exp, n ve güven düzeyine bağlı Q_kritik ile karşılaştırılır (araç Rorabacher’in 1991’de yayımladığı değerleri kullanır):\n• Q_exp > Q_kritik ise değer atılır.\n• Q_exp ≤ Q_kritik ise değer tutulur.\n\nTest bir kez ve yalnızca bir değer için uygulanır. Atılan değerden sonra testi tekrar tekrar uygulamak veri setini yapay olarak “temizler”.',
      en: 'Q_exp = |x_suspect − x_nearest| / (x_max − x_min). The numerator is the gap between the suspect value and its nearest neighbour; the denominator is the range of all data (including the suspect value).\n\nThe data are sorted, the gaps at the low and high ends are calculated and the larger one is taken as suspect. Q_exp is compared with Q_crit for the given n and confidence level (the tool uses the values published by Rorabacher in 1991):\n• If Q_exp > Q_crit, the value is rejected.\n• If Q_exp ≤ Q_crit, the value is retained.\n\nThe test is applied once and to one value only. Re-applying it after a rejection artificially “cleans” the data set.',
    },
    usage: {
      tr: [
        '3–10 paralel ölçümden oluşan küçük setlerde tek bir şüpheli değeri değerlendirmek.',
        'Önce deney kayıtlarına bakın: belirgin bir kaba hata nedeni varsa değer testten bağımsız olarak atılabilir.',
        'Değer tutuluyor ama şüphe sürüyorsa ortalama yerine medyanı raporlamak ya da ek ölçüm yapmak iyi bir seçenektir.',
        'n > 10 ise Grubbs testi daha uygundur. Birden fazla aykırı değer şüphesi varsa tek aykırı değer testleri (Q, tekli Grubbs) maskeleme nedeniyle yanılabilir; çoklu aykırı değer testleri (ör. ikili Grubbs) ya da sağlam (robust) istatistikler kullanılmalıdır.',
      ],
      en: [
        'Evaluating a single suspect value in small sets of 3–10 replicates.',
        'Check the lab notebook first: if there is a clear gross-error cause, the value can be discarded regardless of the test.',
        'If the value is retained but doubts remain, reporting the median instead of the mean or making extra measurements is a good option.',
        'For n > 10 the Grubbs test is more suitable. When more than one outlier is suspected, single-outlier tests (Q, single Grubbs) can fail because of masking; use multiple-outlier tests (e.g. the double Grubbs test) or robust statistics.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri (n = 9): 3,067; 3,049; 3,039; 2,514; 3,048; 3,079; 3,094; 3,109; 3,102. Sıralanınca en küçük değer 2,514 diğerlerinden çok uzaktadır.',
        'Boşluk = 3,039 − 2,514 = 0,525; aralık = 3,109 − 2,514 = 0,595.',
        'Q_exp = 0,525 / 0,595 = 0,8824; Q_kritik (n = 9, %95) = 0,493.',
        'Sonuç: 0,8824 > 0,493 olduğundan 2,514 aykırı değer olarak atılabilir.',
      ],
      en: [
        'Sample data (n = 9): 3.067, 3.049, 3.039, 2.514, 3.048, 3.079, 3.094, 3.109, 3.102. After sorting, the smallest value 2.514 lies far from the rest.',
        'Gap = 3.039 − 2.514 = 0.525; range = 3.109 − 2.514 = 0.595.',
        'Q_exp = 0.525 / 0.595 = 0.8824; Q_crit (n = 9, 95%) = 0.493.',
        'Result: since 0.8824 > 0.493, 2.514 can be rejected as an outlier.',
      ],
    },
    mistakes: {
      tr: [
        'Değeri test yapmadan, yalnızca diğerlerine uymadığı için atmak.',
        'Paydaya şüpheli değer hariç aralığı yazmak.',
        'Bir değeri attıktan sonra testi kalan veriye yeniden uygulamak.',
      ],
      en: [
        'Discarding a value without a test just because it does not fit.',
        'Using the range without the suspect value as the denominator.',
        'Re-applying the test to the remaining data after a rejection.',
      ],
    },
    related: ['grubbs', 'descriptive', 'table-critical'],
  },

  grubbs: {
    concept: {
      tr: 'Grubbs testi, ISO 5725 ve birçok uluslararası kılavuzun önerdiği aykırı değer testidir. Q-testinden farklı olarak yalnızca en yakın komşuya değil tüm veriye bakar: şüpheli değerin ortalamadan uzaklığını standart sapma cinsinden ölçer.\n\nBu yüzden daha büyük veri setlerinde de kullanılabilir ve tüm veriyi kullandığı için Q-testine göre istatistiksel olarak daha güçlü kabul edilir. Sıfır hipotezi, tüm değerlerin aynı normal popülasyondan geldiğidir.',
      en: 'The Grubbs test is the outlier test recommended by ISO 5725 and many international guidelines. Unlike the Q-test, it does not look only at the nearest neighbour but at all the data: it measures the distance of the suspect value from the mean in units of the standard deviation.\n\nIt can therefore be used with larger data sets and, because it uses all the data, is considered statistically more powerful than the Q-test. The null hypothesis is that all values come from the same normal population.',
    },
    meaning: {
      tr: 'G = |x_şüpheli − x̄| / s. x̄ ve s, şüpheli değer dahil tüm veriden hesaplanır; şüpheli değer ortalamadan en uzak olandır.\n\nG’nin üst sınırı vardır: aykırı değer s’yi de büyüttüğünden G en fazla (n − 1)/√n olabilir. Bu nedenle kritik değerler n ile değişir ve t dağılımından hesaplanır (araç iki yönlü G_kritik’i hesaplar):\n• G_exp > G_kritik ise değer aykırıdır ve atılabilir.\n• G_exp ≤ G_kritik ise değer tutulur.\n\nTest, verilerin (aykırı değer dışında) normal dağıldığını varsayar ve tek bir aykırı değer içindir.',
      en: 'G = |x_suspect − x̄| / s. x̄ and s are calculated from all data including the suspect value, which is the one farthest from the mean.\n\nG has an upper bound: because an outlier also inflates s, G can be at most (n − 1)/√n. The critical values therefore change with n and are calculated from the t distribution (the tool computes a two-sided G_crit):\n• If G_exp > G_crit, the value is an outlier and can be rejected.\n• If G_exp ≤ G_crit, the value is retained.\n\nThe test assumes that the data (apart from the outlier) are normally distributed and is meant for a single outlier.',
    },
    usage: {
      tr: [
        'Paralel ölçümlerde ya da laboratuvarlar arası çalışmalarda tek bir aykırı değeri sınamak.',
        'Q-testinin uygulanamadığı n > 10 veri setlerinde.',
        'Birden fazla aykırı değer birbirini “maskeleyebilir”; bu durumda çoklu aykırı değer testleri ya da sağlam (robust) istatistikler gerekir.',
        'Atılan değer raporda belirtilmeli, nedeni araştırılmalıdır.',
      ],
      en: [
        'Testing a single outlier in replicate measurements or interlaboratory studies.',
        'For data sets with n > 10, where the Q-test cannot be used.',
        'Several outliers can “mask” each other; then multiple-outlier tests or robust statistics are needed.',
        'A rejected value should be reported and its cause investigated.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri (n = 9): 3,067; 3,049; 3,039; 2,514; 3,048; 3,079; 3,094; 3,109; 3,102. Tüm verinin x̄ = 3,011, s = 0,1881.',
        'Ortalamadan en uzak değer 2,514: G_exp = |2,514 − 3,011| / 0,1881 = 2,643.',
        'G_kritik (n = 9, %95, iki yönlü) = 2,215.',
        'Sonuç: 2,643 > 2,215 olduğundan 2,514 aykırı değerdir ve atılabilir (Q-testi ile aynı karar).',
      ],
      en: [
        'Sample data (n = 9): 3.067, 3.049, 3.039, 2.514, 3.048, 3.079, 3.094, 3.109, 3.102. For all data x̄ = 3.011, s = 0.1881.',
        'Value farthest from the mean is 2.514: G_exp = |2.514 − 3.011| / 0.1881 = 2.643.',
        'G_crit (n = 9, 95%, two-sided) = 2.215.',
        'Result: since 2.643 > 2.215, 2.514 is an outlier and can be rejected (the same decision as the Q-test).',
      ],
    },
    mistakes: {
      tr: [
        'x̄ ve s’yi şüpheli değeri çıkararak hesaplamak; test istatistiği tüm veriyle tanımlıdır.',
        'Bir değeri attıktan sonra testi art arda uygulayıp veri setini küçültmek.',
        'Normal dağılmayan (ör. çarpık) verilerde sonucu kesin kabul etmek.',
      ],
      en: [
        'Calculating x̄ and s without the suspect value; the statistic is defined with all data.',
        'Repeating the test after each rejection and shrinking the data set.',
        'Trusting the result for non-normal (e.g. skewed) data.',
      ],
    },
    related: ['q-test', 'descriptive', 'table-critical'],
  },

  anova: {
    concept: {
      tr: 'Üç veya daha fazla grubun ortalamaları (ör. dört analistin aynı numuneye ait sonuçları, farklı laboratuvarlar ya da farklı ekstraksiyon koşulları) karşılaştırılırken tüm çiftler için ayrı t-testleri yapmak, yanlışlıkla “fark var” deme olasılığını hızla artırır. Tek yönlü varyans analizi (ANOVA), tüm grupları tek bir testte karşılaştırır.\n\nANOVA’nın temel fikri, toplam değişkenliği iki kaynağa ayırmaktır: gruplar arası (faktörün etkisi + rastgele hata) ve grup içi (yalnızca rastgele hata). Sıfır hipotezi, tüm grup ortalamalarının eşit olduğudur.',
      en: 'When the means of three or more groups are compared (e.g. results of four analysts on the same sample, different laboratories or different extraction conditions), running separate t-tests for every pair quickly raises the chance of falsely claiming a difference. One-way analysis of variance (ANOVA) compares all groups in a single test.\n\nThe key idea of ANOVA is to split the total variation into two sources: between groups (effect of the factor + random error) and within groups (random error only). The null hypothesis is that all group means are equal.',
    },
    meaning: {
      tr: 'h grup ve toplam N ölçüm için:\n• KT_gruplar arası = Σ nᵢ(x̄ᵢ − x̄)², serbestlik derecesi h − 1,\n• KT_grup içi = ΣΣ(xᵢⱼ − x̄ᵢ)², serbestlik derecesi N − h,\n• KO = KT / serbestlik derecesi (kareler ortalaması).\n\nF = KO_gruplar arası / KO_grup içi. H₀ doğruysa her iki KO de aynı rastgele hata varyansını tahmin eder ve F ≈ 1 olur. Grup ortalamaları gerçekten farklıysa gruplar arası KO büyür.\n\nF tek yönlü bir testtir: F_exp, (h − 1, N − h) serbestlik derecelerindeki F_kritik’ten büyükse en az bir ortalama diğerlerinden anlamlı farklıdır. ANOVA hangi grubun farklı olduğunu söylemez; bunun için ardıl (post hoc) karşılaştırmalar gerekir.',
      en: 'For h groups and N measurements in total:\n• SS_between = Σ nᵢ(x̄ᵢ − x̄)², with h − 1 degrees of freedom,\n• SS_within = ΣΣ(xᵢⱼ − x̄ᵢ)², with N − h degrees of freedom,\n• MS = SS / degrees of freedom (mean square).\n\nF = MS_between / MS_within. If H₀ is true, both mean squares estimate the same random-error variance and F ≈ 1. If the group means really differ, MS_between grows.\n\nF is a one-tailed test: if F_exp exceeds F_crit for (h − 1, N − h) degrees of freedom, at least one mean differs significantly from the others. ANOVA does not say which group differs; post hoc comparisons are needed for that.',
    },
    usage: {
      tr: [
        'Analistler, laboratuvarlar, cihazlar ya da deney koşulları arasında fark olup olmadığını sınamak.',
        'Gruplar bağımsız olmalı, veriler normal dağılmalı ve grup içi varyanslar yaklaşık eşit olmalıdır.',
        'Grupların eleman sayıları farklı olabilir; her satıra bir grup girilir.',
        'Anlamlı sonuçtan sonra hangi grupların farklı olduğunu bulmak için en küçük anlamlı fark gibi ardıl karşılaştırmalar yapılır.',
      ],
      en: [
        'Testing for differences between analysts, laboratories, instruments or experimental conditions.',
        'The groups must be independent, data normally distributed and within-group variances roughly equal.',
        'Groups may have different sizes; enter one group per line.',
        'After a significant result, post hoc comparisons such as the least significant difference identify which groups differ.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: 4 grup (n = 6, 5, 5, 5; N = 21); grup ortalamaları 94,56; 99,88; 92,86; 94,62; genel ortalama 95,44.',
        'KT_gruplar arası = 139,8 (3 serbestlik derecesi) → KO = 46,58; KT_grup içi = 18,72 (17 serbestlik derecesi) → KO = 1,101.',
        'F_exp = 46,58 / 1,101 = 42,31; F_kritik (%95; 3 ve 17 serbestlik derecesi) = 3,197.',
        'Sonuç: 42,31 > 3,197 olduğundan grup ortalamaları arasında anlamlı fark vardır (p = 4,227 × 10⁻⁸); ikinci grup belirgin biçimde yüksektir.',
      ],
      en: [
        'Sample data: 4 groups (n = 6, 5, 5, 5; N = 21); group means 94.56, 99.88, 92.86, 94.62; grand mean 95.44.',
        'SS_between = 139.8 (3 degrees of freedom) → MS = 46.58; SS_within = 18.72 (17 degrees of freedom) → MS = 1.101.',
        'F_exp = 46.58 / 1.101 = 42.31; F_crit (95%; 3 and 17 degrees of freedom) = 3.197.',
        'Result: since 42.31 > 3.197 the group means differ significantly (p = 4.227 × 10⁻⁸); the second group is clearly higher.',
      ],
    },
    mistakes: {
      tr: [
        'ANOVA yerine tüm çiftlere ayrı t-testleri uygulamak (I. tür hata olasılığı birikir).',
        'Serbestlik derecelerini karıştırmak: gruplar arası h − 1, grup içi N − h’dir.',
        'Anlamlı F sonucunu “tüm gruplar birbirinden farklı” diye yorumlamak.',
      ],
      en: [
        'Running separate t-tests on all pairs instead of ANOVA (the type I error rate accumulates).',
        'Mixing up the degrees of freedom: h − 1 between groups, N − h within groups.',
        'Reading a significant F as “all groups differ from each other”.',
      ],
    },
    related: ['t-test-two', 'f-test', 'between-lab-sd', 'table-critical'],
  },

  propagation: {
    concept: {
      tr: 'Bir analiz sonucu nadiren doğrudan ölçülür; genellikle birkaç ölçülen büyüklükten (kütle, hacim, derişim, sinyal) hesaplanır. Her birinin kendi belirsizliği vardır ve bu belirsizlikler hesap boyunca sonuca taşınır. Belirsizlik yayılımı, sonucun belirsizliğini bileşenlerinkinden hesaplamayı sağlar.\n\nBu hesap aynı zamanda belirsizlik bütçesi kurmaya yarar: sonucun belirsizliğine en çok hangi adımın katkı yaptığı görülür ve iyileştirme çabası oraya yönlendirilir.',
      en: 'An analytical result is rarely measured directly; it is usually calculated from several measured quantities (mass, volume, concentration, signal). Each has its own uncertainty, and these uncertainties are carried through the calculation into the result. Propagation of uncertainty calculates the uncertainty of the result from those of its components.\n\nThe calculation also builds an uncertainty budget: it shows which step contributes most to the uncertainty of the result, so improvement efforts can be aimed there.',
    },
    meaning: {
      tr: 'Rastgele ve birbirinden bağımsız hatalar için temel kurallar:\n• Toplama/çıkarma, R = a + b − c: mutlak belirsizlikler kareler toplamıyla birleşir, s_R = √(s_a² + s_b² + s_c²).\n• Çarpma/bölme, R = a · b / c: bağıl belirsizlikler birleşir, s_R/R = √[(s_a/a)² + (s_b/b)² + (s_c/c)²].\n• Üs, R = aᵏ: s_R/R = |k| · s_a/a.\n• Logaritma, R = log a: s_R = 0,4343 · s_a/a (ln a için s_R = s_a/a).\n• Antilogaritma, R = 10ᵃ: s_R/R = 2,303 · s_a (eᵃ için s_R/R = s_a).\n\nKareler toplamı kullanılır çünkü bağımsız hataların bir kısmı birbirini kısmen dengeler; belirsizlikleri doğrudan toplamak en kötü durumu verir ve belirsizliği olduğundan büyük gösterir. Bu kurallar genel formülün (kısmi türevlerle yayılım) özel hâlleridir.',
      en: 'Basic rules for random, mutually independent errors:\n• Addition/subtraction, R = a + b − c: absolute uncertainties combine in quadrature, s_R = √(s_a² + s_b² + s_c²).\n• Multiplication/division, R = a · b / c: relative uncertainties combine, s_R/R = √[(s_a/a)² + (s_b/b)² + (s_c/c)²].\n• Power, R = aᵏ: s_R/R = |k| · s_a/a.\n• Logarithm, R = log a: s_R = 0.4343 · s_a/a (for ln a, s_R = s_a/a).\n• Antilogarithm, R = 10ᵃ: s_R/R = 2.303 · s_a (for eᵃ, s_R/R = s_a).\n\nQuadrature is used because independent errors partly cancel; simply adding uncertainties gives the worst case and overstates the uncertainty. These rules are special cases of the general formula (propagation with partial derivatives).',
    },
    usage: {
      tr: [
        'Titrasyon, gravimetri ya da standart hazırlama gibi çok adımlı hesaplarda sonucun belirsizliğini bulmak.',
        'Karışık işlemlerde adım adım ilerleyin: önce toplama/çıkarma kısımlarının mutlak belirsizliğini, sonra çarpma/bölme kısmının bağıl belirsizliğini hesaplayın.',
        'Kurallar bağımsız (korelasyonsuz) hatalar içindir; aynı büyüklük formülde iki kez geçiyorsa (ör. a · a) üs kuralını kullanın.',
        'Sistematik hatalar bu yolla ortadan kalkmaz; önce düzeltilmeleri gerekir.',
      ],
      en: [
        'Finding the uncertainty of results from multi-step calculations such as titration, gravimetry or standard preparation.',
        'For mixed operations work step by step: first the absolute uncertainty of the additive parts, then the relative uncertainty of the multiplicative part.',
        'The rules are for independent (uncorrelated) errors; if the same quantity appears twice (e.g. a · a), use the power rule.',
        'Systematic errors are not removed this way; they must be corrected first.',
      ],
    },
    solution: {
      tr: [
        'Örnek: R = a × b ÷ c; a = 25,00 ± 0,03 (ör. mL), b = 0,1004 ± 0,0002 (ör. mol/L), c = 0,5012 ± 0,0001 (ör. g). R = 25,00 × 0,1004 / 0,5012 = 5,008.',
        'Bağıl belirsizlikler: 0,03/25,00 = 0,00120; 0,0002/0,1004 = 0,00199; 0,0001/0,5012 = 0,00020.',
        's_R/R = √(0,00120² + 0,00199² + 0,00020²) = 0,002334 (%0,2334); en büyük katkı derişimden gelir.',
        'Sonuç: s_R = 5,008 × 0,002334 = 0,01169, yani R = 5,008 ± 0,01169 (ör. mmol/g).',
      ],
      en: [
        'Example: R = a × b ÷ c; a = 25.00 ± 0.03 (e.g. mL), b = 0.1004 ± 0.0002 (e.g. mol/L), c = 0.5012 ± 0.0001 (e.g. g). R = 25.00 × 0.1004 / 0.5012 = 5.008.',
        'Relative uncertainties: 0.03/25.00 = 0.00120; 0.0002/0.1004 = 0.00199; 0.0001/0.5012 = 0.00020.',
        's_R/R = √(0.00120² + 0.00199² + 0.00020²) = 0.002334 (0.2334%); the concentration contributes most.',
        'Result: s_R = 5.008 × 0.002334 = 0.01169, so R = 5.008 ± 0.01169 (e.g. mmol/g).',
      ],
    },
    mistakes: {
      tr: [
        'Çarpma/bölmede mutlak belirsizlikleri, toplama/çıkarmada bağıl belirsizlikleri birleştirmek.',
        'Belirsizlikleri karelerini almadan doğrudan toplamak.',
        'Fark alırken (ör. darası alınmış kütle) bağıl belirsizliğin büyüdüğünü gözden kaçırmak: iki yakın değerin farkı küçük olduğundan bağıl belirsizlik çok artar.',
      ],
      en: [
        'Combining absolute uncertainties for multiplication/division, or relative ones for addition/subtraction.',
        'Adding uncertainties directly without squaring them.',
        'Overlooking that a difference (e.g. a mass by difference) has a larger relative uncertainty: the difference of two close values is small, so its relative uncertainty grows a lot.',
      ],
    },
    related: ['uncertainty-budget', 'expanded-uncertainty', 'descriptive', 'type-b-uncertainty'],
  },

  'normal-probability': {
    concept: {
      tr: 'Rastgele hatalar etkisindeki ölçümler ve birçok doğal büyüklük (ör. tabletlerin etken madde içeriği, dolum hacimleri) normal (Gauss) dağılıma uyar. Ortalaması μ ve standart sapması σ bilinen bir dağılımda, bir değerin belirli bir aralıkta bulunma olasılığı eğrinin altında kalan alandır.\n\nBu hesap, kalite kontrolde bir ürünün spesifikasyon sınırları içinde kalma oranını tahmin etmek ve güven aralıklarının anlamını kavramak için kullanılır.',
      en: 'Measurements affected by random errors and many natural quantities (e.g. the active-ingredient content of tablets, fill volumes) follow a normal (Gaussian) distribution. For a distribution with known mean μ and standard deviation σ, the probability that a value lies in a given range is the area under the curve.\n\nThis calculation is used in quality control to estimate the fraction of products within specification limits, and to understand what confidence intervals mean.',
    },
    meaning: {
      tr: 'Sınırlar z değerlerine çevrilir: z₁ = (x₁ − μ)/σ, z₂ = (x₂ − μ)/σ. Olasılık, standart normal birikimli dağılım fonksiyonu Φ ile bulunur:\nP(x₁ < x < x₂) = Φ(z₂) − Φ(z₁).\n\nΦ(z), −∞’dan z’ye kadar olan alandır. Simetri nedeniyle Φ(−z) = 1 − Φ(z).\n\nKullanışlı değerler:\n• μ ± 1σ: %68,27\n• μ ± 1,96σ: %95,00\n• μ ± 2σ: %95,45\n• μ ± 3σ: %99,73',
      en: 'The limits are converted to z values: z₁ = (x₁ − μ)/σ, z₂ = (x₂ − μ)/σ. The probability follows from the standard normal cumulative distribution function Φ:\nP(x₁ < x < x₂) = Φ(z₂) − Φ(z₁).\n\nΦ(z) is the area from −∞ to z. By symmetry, Φ(−z) = 1 − Φ(z).\n\nUseful values:\n• μ ± 1σ: 68.27%\n• μ ± 1.96σ: 95.00%\n• μ ± 2σ: 95.45%\n• μ ± 3σ: 99.73%',
    },
    usage: {
      tr: [
        'Ürünlerin spesifikasyon (alt–üst sınır) içinde kalma oranını tahmin etmek.',
        'Tek sınır için (ör. “x > 260 olasılığı”) diğer sınırı çok uzak bir değer olarak girin.',
        'μ ve σ popülasyon değerleri olmalıdır; birkaç ölçümden hesaplanan s ile bulunan olasılıklar yalnızca yaklaşıktır.',
        'Dağılım normal değilse (çarpık, sınırlı, çok modlu) sonuçlar yanıltıcıdır.',
      ],
      en: [
        'Estimating the fraction of products within specification (lower–upper limit).',
        'For a single limit (e.g. “probability that x > 260”), enter a very distant value as the other limit.',
        'μ and σ should be population values; probabilities based on s from a few measurements are only approximate.',
        'If the distribution is not normal (skewed, bounded, multimodal), the results are misleading.',
      ],
    },
    solution: {
      tr: [
        'Verilen: μ = 250, σ = 5; aralık x₁ = 240, x₂ = 260.',
        'z₁ = (240 − 250)/5 = −2; z₂ = (260 − 250)/5 = +2.',
        'Φ(2) = 0,9772; Φ(−2) = 0,02275 → P = 0,9772 − 0,02275 = 0,9545.',
        'Sonuç: değerlerin %95,45’i 240–260 aralığındadır; %4,55’i aralık dışında kalır.',
      ],
      en: [
        'Given: μ = 250, σ = 5; range x₁ = 240, x₂ = 260.',
        'z₁ = (240 − 250)/5 = −2; z₂ = (260 − 250)/5 = +2.',
        'Φ(2) = 0.9772; Φ(−2) = 0.02275 → P = 0.9772 − 0.02275 = 0.9545.',
        'Result: 95.45% of values lie between 240 and 260; 4.55% fall outside the range.',
      ],
    },
    mistakes: {
      tr: [
        'Tablodaki “0’dan z’ye alan” ile “−∞’dan z’ye alan” değerlerini karıştırmak.',
        'σ yerine ortalamanın standart sapmasını (σ/√n) kullanmak ya da tersini yapmak: tek tek değerler için σ, ortalamalar için σ/√n kullanılır.',
        'Aralık dışında kalan oranı iki kuyruk yerine tek kuyruk olarak hesaplamak.',
      ],
      en: [
        'Confusing tables of “area from 0 to z” with “area from −∞ to z”.',
        'Using the standard deviation of the mean (σ/√n) instead of σ or vice versa: use σ for individual values and σ/√n for means.',
        'Computing the fraction outside the range from one tail instead of two.',
      ],
    },
    related: ['z-score', 'descriptive', 'control-chart'],
  },
};

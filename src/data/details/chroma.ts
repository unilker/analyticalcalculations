import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Chromatography & Electrophoresis module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const CHROMA_DETAILS: Record<string, ToolDetail> = {
  'retention-factor': {
    concept: {
      tr: 'Kromatografide her analit molekülü, hareketli faz ile durağan faz arasında sürekli dağılır. Hareketli fazdayken kolon boyunca ilerler, durağan fazdayken bekler. Alıkonma faktörü (k; eski adıyla kapasite faktörü k′), bir maddenin durağan fazda hareketli faza göre kaç kat daha uzun süre geçirdiğini gösterir.\n\nHiç alıkonmayan bir madde kolonu ölü sürede (ölü zaman, t_M) geçer. Analitin bunun üzerine fazladan harcadığı süre, yani düzeltilmiş alıkonma süresi t′_R = t_R − t_M, tamamen durağan fazla etkileşimden kaynaklanır.',
      en: 'In chromatography every analyte molecule is continuously partitioned between the mobile and the stationary phase. It moves along the column only while it is in the mobile phase and waits while it is in the stationary phase. The retention factor (k; formerly the capacity factor k′) tells how many times longer a substance spends in the stationary phase than in the mobile phase.\n\nAn unretained substance passes through the column in the void (dead) time t_M. The extra time the analyte needs, the adjusted retention time t′_R = t_R − t_M, comes entirely from its interaction with the stationary phase.',
    },
    meaning: {
      tr: 'k = (t_R − t_M) / t_M = t′_R / t_M.\n\nk aynı zamanda durağan ve hareketli fazdaki madde miktarlarının oranıdır: k = n_S / n_M = K · V_S / V_M. Burada K dağılım katsayısı, V_S ve V_M faz hacimleridir. Bu nedenle k, kolon uzunluğundan ve akış hızından bağımsızdır; faz sistemine ve sıcaklığa bağlıdır.\n\nYorum:\n• k < 1: madde çok erken çıkar, ölü süreye yakın girişimlerle karışabilir.\n• k ≈ 1–10: genellikle iyi ayırma ve makul analiz süresi.\n• k çok büyük: pikler geç çıkar, genişler ve seyrelir.',
      en: 'k = (t_R − t_M) / t_M = t′_R / t_M.\n\nk is also the ratio of the amounts of solute in the stationary and mobile phases: k = n_S / n_M = K · V_S / V_M, where K is the partition coefficient and V_S, V_M are the phase volumes. Hence k does not depend on column length or flow rate; it depends on the phase system and temperature.\n\nInterpretation:\n• k < 1: the solute elutes too early and may merge with interferences near the void time.\n• k ≈ 1–10: usually good separation in a reasonable time.\n• Very large k: late, broad and diluted peaks.',
    },
    usage: {
      tr: [
        'Yöntem geliştirmede alıkonmayı ayarlamak: ters fazda organik çözücü oranı artırılınca k azalır.',
        'Farklı uzunluk ya da akış hızındaki kolonlarda alıkonmayı karşılaştırmak.',
        't_M, alıkonmayan bir işaretleyiciyle (ör. ters fazda urasil, GC’de metan) ya da ilk taban çizgisi bozulmasından ölçülür.',
        'Gradyan elüsyonda k sürekli değiştiğinden bu tanım izokratik koşullar için geçerlidir.',
      ],
      en: [
        'Tuning retention in method development: in reversed phase, more organic solvent lowers k.',
        'Comparing retention on columns of different length or flow rate.',
        't_M is measured with an unretained marker (e.g. uracil in reversed phase, methane in GC) or from the first baseline disturbance.',
        'In gradient elution k changes continuously, so this definition applies to isocratic conditions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: t_R = 8 dk, t_M = 1 dk.',
        'Düzeltilmiş alıkonma süresi: t′_R = t_R − t_M = 8 dk − 1 dk = 7 dk.',
        'k = t′_R / t_M = 7 dk / 1 dk (birimler sadeleşir).',
        'Sonuç: k = 7; madde durağan fazda hareketli fazdakinin 7 katı süre geçirir.',
      ],
      en: [
        'Given: t_R = 8 min, t_M = 1 min.',
        'Adjusted retention time: t′_R = t_R − t_M = 8 min − 1 min = 7 min.',
        'k = t′_R / t_M = 7 min / 1 min (units cancel).',
        'Result: k = 7; the solute spends 7 times as long in the stationary phase as in the mobile phase.',
      ],
    },
    mistakes: {
      tr: [
        'Payda t_M yerine t_R kullanmak ya da payda ölü süreyi çıkarmayı unutmak (k = t_R / t_M yanlıştır).',
        't_R ve t_M’yi farklı birimlerle girmek (biri s, diğeri dk).',
        'Gradyan koşullarında okunan alıkonma sürelerinden k hesaplayıp izokratik değer gibi yorumlamak.',
      ],
      en: [
        'Dividing by t_R instead of t_M, or forgetting to subtract the void time (k = t_R / t_M is wrong).',
        'Entering t_R and t_M in different units (one in s, the other in min).',
        'Computing k from gradient retention times and interpreting it as an isocratic value.',
      ],
    },
    related: ['selectivity-factor', 'purnell', 'partition-coefficient', 'retention-volume'],
  },

  'selectivity-factor': {
    concept: {
      tr: 'Seçicilik faktörü (α), kolonun iki maddeyi birbirinden ne kadar “ayırt edebildiğini” ölçer. İki madde durağan fazla tam olarak aynı biçimde etkileşiyorsa aynı anda çıkar ve kolon ne kadar verimli olursa olsun ayrılamaz. α, iki maddenin alıkonma faktörlerinin oranıdır ve geç çıkan madde payda olacak biçimde tanımlandığı için her zaman 1’den büyüktür.',
      en: 'The selectivity factor (α) measures how well the column “distinguishes” two substances. If both interact with the stationary phase in exactly the same way, they co-elute and cannot be separated however efficient the column is. α is the ratio of the two retention factors and, because the later peak is placed in the numerator, it is always greater than 1.',
    },
    meaning: {
      tr: 'α = k₂ / k₁ = t′_R2 / t′_R1 = K₂ / K₁.\n\nk = K · V_S / V_M olduğundan faz hacim oranı sadeleşir; α yalnızca iki maddenin dağılım katsayılarının oranına, yani termodinamiğe bağlıdır. Kolon uzunluğu ve akış hızı α’yı değiştirmez.\n\nα’yı değiştiren etkenler:\n• Hareketli fazın türü (ör. metanol yerine asetonitril) ve pH’ı (iyonlaşabilen maddelerde).\n• Durağan fazın kimyası (C18, fenil, polar GC fazı vb.).\n• Sıcaklık.',
      en: 'α = k₂ / k₁ = t′_R2 / t′_R1 = K₂ / K₁.\n\nSince k = K · V_S / V_M, the phase-volume ratio cancels; α depends only on the ratio of the partition coefficients, i.e. on thermodynamics. Column length and flow rate do not change α.\n\nWhat changes α:\n• The type of mobile phase (e.g. acetonitrile instead of methanol) and its pH (for ionisable solutes).\n• The chemistry of the stationary phase (C18, phenyl, polar GC phase…).\n• Temperature.',
    },
    usage: {
      tr: [
        'Bir kritik pik çiftinin ayrılabilirliğini değerlendirmek: α = 1 ise ayırma imkânsızdır.',
        'α’daki küçük artışlar rezolüsyonu çok etkiler; 1,05’ten 1,10’a çıkmak gereken tabaka sayısını yaklaşık dörtte birine indirir.',
        'Düzeltilmiş süreler (t′_R) kullanılmalıdır; ham t_R oranı α değildir.',
      ],
      en: [
        'Judging whether a critical pair can be separated: α = 1 means no separation.',
        'Small gains in α have a large effect: going from 1.05 to 1.10 cuts the required plate number to about a quarter.',
        'Adjusted times (t′_R) must be used; the ratio of raw t_R values is not α.',
      ],
    },
    solution: {
      tr: [
        'Verilen: k₂ = 5,5 (geç çıkan pik), k₁ = 5 (erken çıkan pik).',
        'α = k₂ / k₁ = 5,5 / 5.',
        'Sonuç: α = 1,1. Bu değer 1’e yakın olduğundan ayırma için yüksek verimli bir kolon gerekir.',
      ],
      en: [
        'Given: k₂ = 5.5 (later peak), k₁ = 5 (earlier peak).',
        'α = k₂ / k₁ = 5.5 / 5.',
        'Result: α = 1.1. Being close to 1, it calls for a highly efficient column.',
      ],
    },
    mistakes: {
      tr: [
        'Ham alıkonma sürelerini oranlamak (t_R2 / t_R1); ölü süre çıkarılmalıdır.',
        'Oranı ters kurup 1’den küçük α elde etmek.',
        'Kolonu uzatmanın α’yı artıracağını sanmak; uzunluk yalnızca N’yi etkiler.',
      ],
      en: [
        'Taking the ratio of raw retention times (t_R2 / t_R1); the void time must be subtracted.',
        'Inverting the ratio and getting α below 1.',
        'Expecting a longer column to raise α; length affects only N.',
      ],
    },
    related: ['retention-factor', 'purnell', 'resolution', 'separation-factor'],
  },

  'plate-number-base': {
    concept: {
      tr: 'Kolona dar bir bant olarak verilen madde, kolon boyunca ilerlerken genişler. Teorik tabaka sayısı (N), bu bant genişlemesinin ne kadar az olduğunu, yani kolon verimini sayısal olarak ifade eder. Ad, kolonu ardışık denge basamaklarından (“tabakalardan”) oluşmuş gibi düşünen damıtma kökenli tabaka modelinden gelir.\n\nN ne kadar büyükse pikler alıkonma süresine göre o kadar dardır ve yakın pikler o kadar kolay ayrılır.',
      en: 'A solute injected as a narrow band broadens as it travels along the column. The number of theoretical plates (N) expresses how little broadening occurs, i.e. the column efficiency. The name comes from the plate model, borrowed from distillation, which treats the column as a series of equilibrium stages (“plates”).\n\nThe larger N, the narrower the peaks relative to their retention time, and the more easily close peaks are separated.',
    },
    meaning: {
      tr: 'Gauss biçimli bir pik için tanım N = (t_R / σ)²’dir; σ, pikin zaman cinsinden standart sapmasıdır.\n\nTaban genişliği w, pikin büküm noktalarından çizilen teğetlerin taban çizgisini kestiği noktalar arasındaki uzaklıktır ve w = 4σ’dır. σ = w/4 yerine konunca N = 16 · (t_R / w)² elde edilir.\n\nN birimsizdir; t_R ve w aynı birimde olduğu sürece hangi birimin kullanıldığı önemli değildir. Ölü süre çıkarılmış t′_R ile hesaplanan değere etkin tabaka sayısı denir.',
      en: 'For a Gaussian peak the definition is N = (t_R / σ)², where σ is the standard deviation of the peak in time units.\n\nThe baseline width w is the distance between the points where tangents drawn at the inflection points cross the baseline, and w = 4σ. Substituting σ = w/4 gives N = 16 · (t_R / w)².\n\nN is dimensionless; any time unit can be used as long as t_R and w are in the same unit. A value computed with the adjusted time t′_R is called the effective plate number.',
    },
    usage: {
      tr: [
        'Kolon performansını izlemek ve sistem uygunluk testlerinde kabul ölçütü olarak kullanmak.',
        'Yalnızca simetrik (Gauss) pikler için doğrudur; kuyruklanan piklerde N’yi olduğundan farklı verir.',
        'Taban genişliğini teğet yöntemiyle elle ölçmek zordur; yarı yükseklikte genişlik daha güvenilir ölçülür.',
        'N, maddeye ve koşullara bağlıdır; kolonları aynı madde ve aynı koşullarla karşılaştırın.',
      ],
      en: [
        'Monitoring column performance and as an acceptance criterion in system-suitability tests.',
        'Valid only for symmetrical (Gaussian) peaks; tailing peaks give misleading N.',
        'The tangent baseline width is hard to measure by hand; the width at half height is measured more reliably.',
        'N depends on the solute and the conditions; compare columns with the same solute and conditions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: t_R = 10 dk, w = 0,4 dk (taban genişliği).',
        't_R / w = 10 dk / 0,4 dk = 25 (birimsiz).',
        'N = 16 × 25² = 16 × 625.',
        'Sonuç: N = 10000 teorik tabaka.',
      ],
      en: [
        'Given: t_R = 10 min, w = 0.4 min (baseline width).',
        't_R / w = 10 min / 0.4 min = 25 (dimensionless).',
        'N = 16 × 25² = 16 × 625.',
        'Result: N = 10000 theoretical plates.',
      ],
    },
    mistakes: {
      tr: [
        'Yarı yükseklikteki genişliği bu formüle koymak: w½ ile 16 değil 5,545 katsayısı kullanılır.',
        'Kareyi almayı unutmak ya da 16’yı karenin içine yazmak.',
        't_R’yi dakika, w’yi saniye olarak girmek (60 kat hata, N’de 3600 kat).',
      ],
      en: [
        'Putting the width at half height into this formula: with w½ the factor is 5.545, not 16.',
        'Forgetting to square, or putting the 16 inside the square.',
        'Entering t_R in minutes and w in seconds (a factor of 60, i.e. 3600 in N).',
      ],
    },
    related: ['plate-number-half', 'plate-height', 'resolution', 'purnell'],
  },

  'plate-number-half': {
    concept: {
      tr: 'Tabaka sayısı, pikin yarı yüksekliğindeki genişliğinden (w½, FWHM) de hesaplanabilir. Bu genişlik doğrudan pik üzerinden okunur, teğet çizmeyi gerektirmez ve taban çizgisi gürültüsünden, küçük kuyruklanmadan ya da komşu piklerle hafif örtüşmeden daha az etkilenir. Bu nedenle farmakopeler ve kromatografi yazılımları çoğunlukla bu formu kullanır.',
      en: 'The plate number can also be computed from the peak width at half height (w½, FWHM). This width is read directly from the peak without drawing tangents, and it is less affected by baseline noise, slight tailing or minor overlap with neighbouring peaks. Pharmacopoeias and chromatography software therefore usually use this form.',
    },
    meaning: {
      tr: 'Gauss eğrisinde yükseklik, tepeden ±σ√(2 ln 2) uzaklıkta yarıya iner. Bu yüzden w½ = 2√(2 ln 2) · σ ≈ 2,355 σ’dır.\n\nσ = w½ / 2,355 tanım denklemine konunca: N = (t_R / σ)² = 8 ln 2 · (t_R / w½)² ≈ 5,545 · (t_R / w½)².\n\nİki formül aynı Gauss piki için aynı N’yi verir; yalnızca hangi genişliğin ölçüldüğü değişir (w = 4σ ↔ 16; w½ = 2,355σ ↔ 5,545).',
      en: 'On a Gaussian curve the height falls to one half at ±σ√(2 ln 2) from the apex, so w½ = 2√(2 ln 2) · σ ≈ 2.355 σ.\n\nSubstituting σ = w½ / 2.355 into the definition: N = (t_R / σ)² = 8 ln 2 · (t_R / w½)² ≈ 5.545 · (t_R / w½)².\n\nBoth formulas give the same N for the same Gaussian peak; only the measured width differs (w = 4σ ↔ 16; w½ = 2.355σ ↔ 5.545).',
    },
    usage: {
      tr: [
        'Kromatogram üzerinden elle ya da yazılımla verim hesabı için tercih edilen yöntem.',
        'Hafif kuyruklanan piklerde taban yöntemine göre daha tutarlı sonuç verir; belirgin kuyruklanmada her iki yöntem de N’yi olduğundan yüksek gösterebilir.',
        'Yazılımın hangi katsayıyı (5,54 ya da 16) kullandığını rapordan kontrol edin.',
      ],
      en: [
        'The preferred way to compute efficiency from a chromatogram, by hand or by software.',
        'More consistent than the baseline method for slightly tailing peaks; with strong tailing both can overestimate N.',
        'Check in the report which factor (5.54 or 16) the software uses.',
      ],
    },
    solution: {
      tr: [
        'Verilen: t_R = 10 dk, w½ = 0,235 dk (14,1 s).',
        't_R / w½ = 10 dk / 0,235 dk = 42,55; karesi 1811.',
        'N = 5,545 × 1811.',
        'Sonuç: N ≈ 10040 teorik tabaka (taban genişliği yöntemiyle bulunan 10000 ile uyumlu).',
      ],
      en: [
        'Given: t_R = 10 min, w½ = 0.235 min (14.1 s).',
        't_R / w½ = 10 min / 0.235 min = 42.55; squared 1811.',
        'N = 5.545 × 1811.',
        'Result: N ≈ 10040 theoretical plates (consistent with 10000 from the baseline-width method).',
      ],
    },
    mistakes: {
      tr: [
        'w½ ile 16 katsayısını kullanmak (N yaklaşık 2,9 kat büyük çıkar).',
        'Yarı yüksekliği taban çizgisinden değil sıfır sinyalden ölçmek (kayan taban çizgisinde hata).',
        'Zaman birimlerini karıştırmak (t_R dakika, w½ saniye).',
      ],
      en: [
        'Using the factor 16 with w½ (N comes out about 2.9 times too high).',
        'Measuring half height from zero signal rather than from the baseline (an error on a drifting baseline).',
        'Mixing time units (t_R in minutes, w½ in seconds).',
      ],
    },
    related: ['plate-number-base', 'plate-height', 'van-deemter'],
  },

  'plate-height': {
    concept: {
      tr: 'Tabaka sayısı kolon uzunluğuyla orantılı olarak artar; bu yüzden farklı uzunluktaki kolonları N ile karşılaştırmak adil değildir. Tabaka yüksekliği (H, HETP: bir teorik tabakaya eşdeğer yükseklik), kolonun birim uzunluk başına verimini gösterir. H ne kadar küçükse kolon o kadar verimlidir.',
      en: 'The plate number grows in proportion to column length, so comparing columns of different length by N is unfair. The plate height (H, HETP: height equivalent to a theoretical plate) gives the efficiency per unit length. The smaller H, the more efficient the column.',
    },
    meaning: {
      tr: 'H = L / N. N = L² / σ_L² (σ_L uzunluk cinsinden bant genişliği) yazılırsa H = σ_L² / L olur: H, birim kolon uzunluğunda oluşan bant varyansıdır.\n\nH, bant genişlemesine yol açan süreçlerin toplamıdır ve van Deemter eşitliğiyle (H = A + B/u + C·u) akış hızına bağlanır.\n\nTipik büyüklük: iyi dolgulu HPLC kolonlarında H, dolgu tanecik çapının yaklaşık 2–3 katıdır; örneğin 5 µm’lik dolguda 10–15 µm civarı.',
      en: 'H = L / N. Writing N = L² / σ_L² (σ_L is the band width in length units) gives H = σ_L² / L: H is the band variance generated per unit column length.\n\nH is the sum of the processes that broaden the band, and the van Deemter equation (H = A + B/u + C·u) links it to the flow velocity.\n\nTypical size: in well-packed HPLC columns H is about 2–3 particle diameters, e.g. around 10–15 µm for 5 µm packing.',
    },
    usage: {
      tr: [
        'Farklı uzunluk ve dolgudaki kolonların verimini karşılaştırmak.',
        'İstenen tabaka sayısı için gereken kolon uzunluğunu bulmak: L = N · H.',
        'H, maddeye ve akış hızına bağlıdır; karşılaştırmayı aynı koşullarda yapın.',
      ],
      en: [
        'Comparing the efficiency of columns of different length and packing.',
        'Finding the column length needed for a target plate number: L = N · H.',
        'H depends on the solute and the flow velocity; compare under the same conditions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: L = 25 cm, N = 10000.',
        'H = L / N = 25 cm / 10000 = 0,0025 cm.',
        '1 cm = 10⁴ µm olduğundan 0,0025 cm = 25 µm.',
        'Sonuç: H = 25 µm.',
      ],
      en: [
        'Given: L = 25 cm, N = 10000.',
        'H = L / N = 25 cm / 10000 = 0.0025 cm.',
        'Since 1 cm = 10⁴ µm, 0.0025 cm = 25 µm.',
        'Result: H = 25 µm.',
      ],
    },
    mistakes: {
      tr: [
        'Büyük H’yi iyi kolon sanmak; verimli kolonun H’si küçüktür.',
        'cm, mm ve µm dönüşümlerinde 10’un kuvvetlerini karıştırmak.',
        'Kolonu iki katına çıkarmanın H’yi değiştireceğini sanmak; N iki katına çıkar, H aynı kalır.',
      ],
      en: [
        'Thinking a large H means a good column; an efficient column has a small H.',
        'Slipping a power of ten when converting cm, mm and µm.',
        'Expecting a column twice as long to change H; N doubles, H stays the same.',
      ],
    },
    related: ['plate-number-base', 'van-deemter', 'linear-velocity'],
  },

  resolution: {
    concept: {
      tr: 'Rezolüsyon (ayırma gücü, R_s), iki komşu pikin ne kadar iyi ayrıldığının nicel ölçüsüdür. İki etken birlikte belirler: pik tepeleri arasındaki uzaklık (alıkonma farkı) ve piklerin genişliği. Tepeler uzak ama pikler genişse ayırma yine kötü olabilir.\n\nNicel analizde pik alanlarının doğru ölçülebilmesi için genellikle R_s ≥ 1,5 (taban çizgisinde ayırma) hedeflenir.',
      en: 'Resolution (R_s) is the quantitative measure of how well two neighbouring peaks are separated. Two things decide it together: the distance between the peak maxima (difference in retention) and the peak widths. Peaks far apart can still be poorly resolved if they are broad.\n\nFor reliable peak areas in quantitative work, R_s ≥ 1.5 (baseline separation) is the usual target.',
    },
    meaning: {
      tr: 'R_s = Δt_R / ortalama taban genişliği = 2 · (t_R2 − t_R1) / (w₁ + w₂).\n\nEşit genişlikte (w = 4σ) iki pik için R_s = Δt_R / 4σ olur. Buna göre:\n• R_s = 1: tepeler 4σ uzaktadır; pikler arasında yaklaşık %2’lik örtüşme vardır.\n• R_s = 1,5: tepeler 6σ uzaktadır; örtüşme %1’in çok altındadır ve taban çizgisinde ayırma sağlanır.\n\nPik boyları çok farklıysa (büyük bir pikin yanında küçük bir safsızlık) R_s = 1,5 bile yetersiz kalabilir.',
      en: 'R_s = Δt_R / mean baseline width = 2 · (t_R2 − t_R1) / (w₁ + w₂).\n\nFor two peaks of equal width (w = 4σ), R_s = Δt_R / 4σ. Thus:\n• R_s = 1: maxima 4σ apart; the peaks overlap by roughly 2%.\n• R_s = 1.5: maxima 6σ apart; overlap is well below 1% and the peaks are baseline separated.\n\nWhen peak sizes differ greatly (a small impurity next to a large peak), even R_s = 1.5 may not be enough.',
    },
    usage: {
      tr: [
        'Kritik pik çiftinin ayrımını kontrol etmek ve sistem uygunluğu ölçütü olarak raporlamak.',
        'Rezolüsyonu artırmak için Purnell eşitliğine bakın: N’yi (kolon boyu, küçük tanecik), α’yı (faz kimyası) ya da k’yi (çözücü gücü) artırın.',
        'Taban genişliği yerine w½ ölçülmüşse R_s = 1,18 · (t_R2 − t_R1) / (w½,1 + w½,2) kullanılır.',
        'Yalnızca Gauss’a yakın pikler için anlamlıdır; kuyruklanan piklerde dikkatli yorumlayın.',
      ],
      en: [
        'Checking the separation of a critical pair and reporting it as a system-suitability criterion.',
        'To improve resolution, see the Purnell equation: raise N (column length, smaller particles), α (phase chemistry) or k (solvent strength).',
        'If w½ was measured instead of baseline width, use R_s = 1.18 · (t_R2 − t_R1) / (w½,1 + w½,2).',
        'Meaningful only for near-Gaussian peaks; interpret tailing peaks with care.',
      ],
    },
    solution: {
      tr: [
        'Verilen: t_R1 = 8 dk (480 s), t_R2 = 8,3 dk (498 s), w₁ = 0,1833 dk (11 s), w₂ = 0,2167 dk (13 s).',
        'Alıkonma farkı: t_R2 − t_R1 = 0,3 dk; genişlikler toplamı: w₁ + w₂ = 0,4 dk.',
        'R_s = 2 × 0,3 dk / 0,4 dk.',
        'Sonuç: R_s = 1,5; pikler taban çizgisinde ayrılmıştır.',
      ],
      en: [
        'Given: t_R1 = 8 min (480 s), t_R2 = 8.3 min (498 s), w₁ = 0.1833 min (11 s), w₂ = 0.2167 min (13 s).',
        'Retention difference: t_R2 − t_R1 = 0.3 min; sum of widths: w₁ + w₂ = 0.4 min.',
        'R_s = 2 × 0.3 min / 0.4 min.',
        'Result: R_s = 1.5; the peaks are baseline separated.',
      ],
    },
    mistakes: {
      tr: [
        'Paydaki 2 çarpanını unutmak (sonuç yarı değerde çıkar).',
        'Taban genişliği yerine yarı yükseklikteki genişliği bu formüle koymak.',
        'Süreleri ve genişlikleri farklı birimlerle girmek.',
      ],
      en: [
        'Forgetting the factor 2 in the numerator (the result is halved).',
        'Using widths at half height in this baseline-width formula.',
        'Entering times and widths in different units.',
      ],
    },
    related: ['peak-resolution', 'purnell', 'plate-number-base', 'selectivity-factor'],
  },

  purnell: {
    concept: {
      tr: 'Temel rezolüsyon eşitliği (Purnell eşitliği), rezolüsyonu birbirinden bağımsız ayarlanabilen üç terime ayırır: verim (N), seçicilik (α) ve alıkonma (k). Böylece kötü bir ayırmayı düzeltmek için hangi parametreye müdahale edilmesi gerektiği görülür. Ayrıca istenen bir rezolüsyon için kaç teorik tabaka, dolayısıyla ne uzunlukta bir kolon gerektiği hesaplanabilir.',
      en: 'The fundamental resolution equation (Purnell equation) splits resolution into three terms that can be adjusted independently: efficiency (N), selectivity (α) and retention (k). It shows which parameter to change to fix a poor separation, and it gives the number of plates, hence the column length, needed for a target resolution.',
    },
    meaning: {
      tr: 'R_s = (√N / 4) · ((α − 1) / α) · (k₂ / (1 + k₂)).\n\nEşitlik, R_s = Δt_R / 4σ tanımından t_R = t_M(1 + k) ve σ = t_R / √N kullanılarak türetilir; k₂ geç çıkan pike aittir.\n\nTerimlerin etkisi:\n• Verim: R_s ∝ √N. Kolonu iki kat uzatmak R_s’yi yalnızca 1,41 kat artırır, analiz süresini ise iki katına çıkarır.\n• Seçicilik: α 1’e yakınken (α − 1)/α çok duyarlıdır; en güçlü ama öngörülmesi en zor araçtır.\n• Alıkonma: k/(1 + k), k ≈ 5–10’dan sonra 1’e yaklaşır; k’yi daha fazla artırmak süreyi uzatır, kazanç azdır.\n\nN için çözülürse: N = 16 · R_s² · (α / (α − 1))² · ((1 + k₂) / k₂)².',
      en: 'R_s = (√N / 4) · ((α − 1) / α) · (k₂ / (1 + k₂)).\n\nIt follows from R_s = Δt_R / 4σ using t_R = t_M(1 + k) and σ = t_R / √N; k₂ belongs to the later peak.\n\nEffect of each term:\n• Efficiency: R_s ∝ √N. Doubling the column length raises R_s only 1.41-fold while doubling the analysis time.\n• Selectivity: near α = 1, (α − 1)/α is very sensitive; this is the most powerful but least predictable lever.\n• Retention: k/(1 + k) approaches 1 beyond k ≈ 5–10; raising k further mainly lengthens the run.\n\nSolved for N: N = 16 · R_s² · (α / (α − 1))² · ((1 + k₂) / k₂)².',
    },
    usage: {
      tr: [
        'Yöntem geliştirmede rezolüsyonu artırmanın en verimli yolunu seçmek.',
        'Hedef R_s için gereken N’yi, sonra L = N · H ile kolon uzunluğunu bulmak.',
        'İki pikin N’si ve genişliği yaklaşık eşit kabul edilir; birbirine yakın pikler için en doğrudur.',
        'Bazı kaynaklar k₂ yerine ortalama k ya da α yerine (α − 1) kullanır; sonuçlar biraz farklı çıkar.',
      ],
      en: [
        'Choosing the most effective way to improve resolution during method development.',
        'Finding the N needed for a target R_s, then the column length from L = N · H.',
        'Assumes both peaks have about the same N and width; most accurate for closely spaced peaks.',
        'Some texts use the average k instead of k₂, or (α − 1) instead of (α − 1)/α; results differ slightly.',
      ],
    },
    solution: {
      tr: [
        'Verilen: hedef R_s = 1,5, α = 1,05, k₂ = 5; bilinmeyen N.',
        'Terimler: R_s² = 2,25; α / (α − 1) = 1,05 / 0,05 = 21 → 21² = 441; (1 + k₂) / k₂ = 6/5 = 1,2 → 1,2² = 1,44.',
        'N = 16 × 2,25 × 441 × 1,44.',
        'Sonuç: N ≈ 22860 teorik tabaka; H = 10 µm olan bir kolonda bu, L = N · H ≈ 23 cm demektir.',
      ],
      en: [
        'Given: target R_s = 1.5, α = 1.05, k₂ = 5; unknown N.',
        'Terms: R_s² = 2.25; α / (α − 1) = 1.05 / 0.05 = 21 → 21² = 441; (1 + k₂) / k₂ = 6/5 = 1.2 → 1.2² = 1.44.',
        'N = 16 × 2.25 × 441 × 1.44.',
        'Result: N ≈ 22860 theoretical plates; for a column with H = 10 µm that means L = N · H ≈ 23 cm.',
      ],
    },
    mistakes: {
      tr: [
        'Rezolüsyonun N ile doğrusal arttığını sanmak; √N ile artar (R_s’yi ikiye katlamak için N dört katına çıkmalıdır).',
        'k₂ yerine erken çıkan pikin k değerini kullanmak.',
        'α için 1’den küçük değer girmek (tanım gereği α > 1).',
      ],
      en: [
        'Assuming resolution grows linearly with N; it grows with √N (doubling R_s needs four times N).',
        'Using the k of the earlier peak instead of k₂.',
        'Entering α below 1 (by definition α > 1).',
      ],
    },
    related: ['resolution', 'selectivity-factor', 'retention-factor', 'plate-height'],
  },

  'linear-velocity': {
    concept: {
      tr: 'Doğrusal hız (u), hareketli fazın kolon boyunca ortalama ilerleme hızıdır (uzunluk/zaman). Akış hızı (F, mL/dk) ise birim zamanda geçen hacimdir. Bant genişlemesini belirleyen difüzyon ve kütle aktarımı süreçleri hacme değil hıza bağlı olduğundan van Deemter eşitliğinde ve kolonlar arası karşılaştırmada doğrusal hız kullanılır.',
      en: 'The linear velocity (u) is the average speed at which the mobile phase moves along the column (length/time). The flow rate (F, mL/min) is the volume passing per unit time. Band-broadening processes such as diffusion and mass transfer depend on speed, not volume, so the van Deemter equation and comparisons between columns use the linear velocity.',
    },
    meaning: {
      tr: 'u = L / t_M. Alıkonmayan bir madde kolonu hareketli fazla aynı hızda geçtiğinden kolon uzunluğu ölü süreye bölünerek ortalama hız bulunur.\n\nAkış hızıyla ilişkisi: u = F / (ε · π r²). Burada r kolon iç yarıçapı, ε ise kolon hacminin hareketli fazla dolu kesridir (gözeneklilik; açık borulu kolonda ε = 1). Aynı F’de dar kolonda u daha büyüktür.\n\nGC’de gaz sıkıştırılabilir olduğundan hız kolon boyunca artar; L / t_M ortalama bir değerdir.',
      en: 'u = L / t_M. An unretained substance moves at the speed of the mobile phase, so the column length divided by the void time gives the average velocity.\n\nRelation to flow rate: u = F / (ε · π r²), where r is the column internal radius and ε the fraction of the column volume filled with mobile phase (porosity; ε = 1 for an open tube). At the same F, a narrower column gives a higher u.\n\nIn GC the gas is compressible and speeds up along the column; L / t_M is an average.',
    },
    usage: {
      tr: [
        'van Deemter grafiğinin x eksenini oluşturmak ve optimum hızda çalışmak.',
        'Farklı çaptaki kolonlar arasında yöntem aktarırken aynı u’yu koruyacak akış hızını bulmak.',
        'Kolon ya da bağlantılarda tıkanma, kaçak gibi sorunları ölü sürenin değişiminden fark etmek.',
      ],
      en: [
        'Building the x-axis of a van Deemter plot and operating near the optimum velocity.',
        'When transferring a method between columns of different diameter, finding the flow rate that keeps the same u.',
        'Spotting problems such as blockages or leaks from a change in void time.',
      ],
    },
    solution: {
      tr: [
        'Verilen: L = 3000 cm (30 m’lik kapiler GC kolonu), t_M = 1,25 dk.',
        'SI birimlerine çevirme: L = 30 m, t_M = 1,25 × 60 = 75 s.',
        'u = L / t_M = 30 m / 75 s.',
        'Sonuç: u = 0,4 m/s (40 cm/s).',
      ],
      en: [
        'Given: L = 3000 cm (a 30 m capillary GC column), t_M = 1.25 min.',
        'Convert to SI: L = 30 m, t_M = 1.25 × 60 = 75 s.',
        'u = L / t_M = 30 m / 75 s.',
        'Result: u = 0.4 m/s (40 cm/s).',
      ],
    },
    mistakes: {
      tr: [
        'Akış hızı (mL/dk) ile doğrusal hızı (cm/s) aynı şey sanmak.',
        't_M yerine analitin alıkonma süresini kullanmak (bu, analitin bant hızını verir, hareketli fazınkini değil).',
        'Dakikayı saniyeye ya da cm’yi m’ye çevirmeyi unutmak.',
      ],
      en: [
        'Treating flow rate (mL/min) and linear velocity (cm/s) as the same thing.',
        'Using the analyte retention time instead of t_M (that gives the band velocity, not the mobile-phase velocity).',
        'Forgetting to convert minutes to seconds or cm to m.',
      ],
    },
    related: ['van-deemter', 'plate-height', 'retention-volume'],
  },

  'retention-volume': {
    concept: {
      tr: 'Alıkonma hacmi (V_R), analit pikinin tepesi çıkana kadar kolondan geçen hareketli faz hacmidir. Alıkonma süresi akış hızına bağlıdır; akış iki katına çıkınca süre yarıya iner. Hacim ise sabit akışta bu etkiden kurtulur ve doğrudan faz sisteminin özelliklerine bağlanır.',
      en: 'The retention volume (V_R) is the volume of mobile phase that passes through the column until the analyte peak maximum elutes. Retention time depends on the flow rate (double the flow, half the time), whereas the retention volume removes this effect and relates directly to the phase system.',
    },
    meaning: {
      tr: 'V_R = F · t_R. Aynı şekilde ölü hacim V_M = F · t_M’dir (kolondaki hareketli faz hacmi ve bağlantı hacimleri).\n\nKromatografinin temel ilişkisi: V_R = V_M + K · V_S. Analit hiç alıkonmazsa (K = 0) ölü hacimde çıkar; K büyüdükçe daha fazla hacim gerekir.\n\nDüzeltilmiş (net) alıkonma hacmi V′_R = V_R − V_M = K · V_S’dir ve k = V′_R / V_M ilişkisi süreler için olduğu gibi hacimler için de geçerlidir.',
      en: 'V_R = F · t_R. Likewise the dead volume V_M = F · t_M (mobile-phase volume in the column plus connections).\n\nThe basic relation of chromatography: V_R = V_M + K · V_S. An unretained analyte (K = 0) elutes in the dead volume; the larger K, the more volume is needed.\n\nThe adjusted retention volume V′_R = V_R − V_M = K · V_S, and k = V′_R / V_M holds for volumes just as for times.',
    },
    usage: {
      tr: [
        'Farklı akış hızlarında alınmış kromatogramları karşılaştırmak.',
        'Preparatif ayırmada bir fraksiyonun hangi hacim aralığında toplanacağını belirlemek.',
        'Boyut eleme kromatografisinde moleküler büyüklüğü alıkonma hacmiyle ilişkilendirmek.',
        'GC’de gaz sıkıştırılabilir olduğundan basınç düzeltmesi gerekir (GC net alıkonma hacmi aracı).',
      ],
      en: [
        'Comparing chromatograms recorded at different flow rates.',
        'In preparative work, deciding over which volume range to collect a fraction.',
        'Relating molecular size to retention volume in size-exclusion chromatography.',
        'In GC the gas is compressible, so a pressure correction is needed (GC net retention volume tool).',
      ],
    },
    solution: {
      tr: ['Verilen: F = 1 mL/dk, t_R = 5 dk.', 'V_R = F · t_R = 1 mL/dk × 5 dk (dk birimleri sadeleşir).', 'Sonuç: V_R = 5 mL.'],
      en: ['Given: F = 1 mL/min, t_R = 5 min.', 'V_R = F · t_R = 1 mL/min × 5 min (the minutes cancel).', 'Result: V_R = 5 mL.'],
    },
    mistakes: {
      tr: [
        'Akış hızı mL/dk iken süreyi saniye olarak girmek (60 kat hata).',
        'V_R ile net alıkonma hacmini (V_R − V_M) karıştırmak.',
        'Gradyan sistemlerde pompa ile kolon arasındaki gecikme hacmini hesaba katmamak.',
      ],
      en: [
        'Entering the time in seconds when the flow rate is in mL/min (a factor of 60).',
        'Confusing V_R with the net retention volume (V_R − V_M).',
        'Ignoring the dwell volume between pump and column in gradient systems.',
      ],
    },
    related: ['gc-net-retention-volume', 'retention-factor', 'linear-velocity'],
  },

  kovats: {
    concept: {
      tr: 'Gaz kromatografisinde alıkonma süreleri kolon uzunluğu, akış hızı ve faz miktarı gibi cihaza özgü etkenlerle değiştiğinden laboratuvarlar arasında doğrudan karşılaştırılamaz. Kovats alıkonma indeksi (I), bir maddenin alıkonmasını normal alkanlardan oluşan bir “cetvel” üzerinde ifade eder. Tanım gereği her n-alkanın indeksi karbon sayısının 100 katıdır (oktan 800, nonan 900).\n\nAynı durağan faz ve sıcaklıkta indeks değerleri kütüphanelerle karşılaştırılarak, özellikle kütle spektrumu belirsiz kalan izomerler tanımlanabilir.',
      en: 'In gas chromatography retention times depend on instrument-specific factors such as column length, flow rate and phase loading, so they cannot be compared directly between laboratories. The Kovats retention index (I) expresses retention on a “ruler” made of normal alkanes. By definition each n-alkane has an index of 100 times its carbon number (octane 800, nonane 900).\n\nOn the same stationary phase and temperature, index values can be matched to libraries to identify compounds, especially isomers whose mass spectra are ambiguous.',
    },
    meaning: {
      tr: 'I = 100 · [n + (log t′ₓ − log t′ₙ) / (log t′ₙ₊₁ − log t′ₙ)].\n\nİzotermal GC’de bir homolog serinin düzeltilmiş alıkonma süresinin logaritması karbon sayısıyla doğrusal artar. Bu nedenle analitin konumu, kendinden önce (n karbonlu) ve sonra (n+1 karbonlu) çıkan alkanlar arasında log t′ ölçeğinde doğrusal ara değer bulma (interpolasyon) ile belirlenir.\n\nYalnızca düzeltilmiş süreler (t′ = t_R − t_M) kullanılır; logaritma tabanı oranın sonucunu değiştirmez.\n\nSıcaklık programlı GC’de logaritma alınmadan doğrudan alıkonma süreleriyle interpolasyon yapılır (van den Dool–Kratz indeksi).',
      en: 'I = 100 · [n + (log t′ₓ − log t′ₙ) / (log t′ₙ₊₁ − log t′ₙ)].\n\nIn isothermal GC the logarithm of the adjusted retention time of a homologous series increases linearly with carbon number. The analyte is therefore located by linear interpolation on the log t′ scale between the alkanes eluting before (n carbons) and after (n+1 carbons) it.\n\nOnly adjusted times (t′ = t_R − t_M) are used; the base of the logarithm does not affect the ratio.\n\nIn temperature-programmed GC the interpolation is done on the retention times without logarithms (van den Dool–Kratz index).',
    },
    usage: {
      tr: [
        'GC–MS’te spektrum kütüphanesi eşleşmesini alıkonma bilgisiyle doğrulamak.',
        'İndeks, durağan faza ve sıcaklığa bağlıdır; karşılaştırmayı aynı tür fazda yapın.',
        'Bir maddenin polar ve apolar fazdaki indeks farkı, polaritesi hakkında bilgi verir (Rohrschneider–McReynolds sabitleri bu fikre dayanır).',
        'Analit iki alkan arasında çıkmalıdır; dış değer bulma (ekstrapolasyon) güvenilir değildir.',
      ],
      en: [
        'Confirming GC–MS library matches with retention information.',
        'The index depends on the stationary phase and temperature; compare on the same type of phase.',
        'The difference between a compound’s index on polar and non-polar phases reflects its polarity (the basis of Rohrschneider–McReynolds constants).',
        'The analyte must elute between two alkanes; extrapolation is unreliable.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n = 8 (oktan); düzeltilmiş süreler t′₈ = 8 dk, t′ₓ = 10 dk, t′₉ = 12 dk.',
        'log(t′ₓ / t′₈) = log(10/8) = log 1,25 = 0,09691; log(t′₉ / t′₈) = log 1,5 = 0,17609.',
        'Oran: 0,09691 / 0,17609 = 0,5503 → I = 100 × (8 + 0,5503).',
        'Sonuç: I ≈ 855 (analit oktan ile nonan arasında, nonana biraz daha yakın çıkar).',
      ],
      en: [
        'Given: n = 8 (octane); adjusted times t′₈ = 8 min, t′ₓ = 10 min, t′₉ = 12 min.',
        'log(t′ₓ / t′₈) = log(10/8) = log 1.25 = 0.09691; log(t′₉ / t′₈) = log 1.5 = 0.17609.',
        'Ratio: 0.09691 / 0.17609 = 0.5503 → I = 100 × (8 + 0.5503).',
        'Result: I ≈ 855 (the analyte elutes between octane and nonane, slightly closer to nonane).',
      ],
    },
    mistakes: {
      tr: [
        'Ham alıkonma sürelerini kullanmak; ölü süre çıkarılmalıdır.',
        'Logaritma almadan doğrusal interpolasyon yapmak (izotermal Kovats indeksinde log zorunludur).',
        'n yerine sonraki alkanın karbon sayısını girmek ya da 100 çarpanını unutmak.',
      ],
      en: [
        'Using raw retention times; the void time must be subtracted.',
        'Interpolating linearly without logarithms (the isothermal Kovats index requires logs).',
        'Entering the carbon number of the later alkane as n, or dropping the factor of 100.',
      ],
    },
    related: ['retention-factor', 'gc-net-retention-volume', 'rf-value'],
  },

  'rf-value': {
    concept: {
      tr: 'İnce tabaka (TLC) ve kâğıt kromatografisinde madde belirli bir sürede değil, belirli bir uzaklıkta “çıkar”: plaka çözücü cephesi belli bir yere ulaşınca çıkarılır ve lekelerin konumu ölçülür. Rf (geciktirme faktörü), lekenin başlangıç noktasından aldığı yolun çözücü cephesinin aldığı yola oranıdır. Hızlı ve ucuz bir yöntem olarak saflık kontrolünde, tepkime izlemede ve kolon kromatografisi koşullarının seçiminde kullanılır.',
      en: 'In thin-layer (TLC) and paper chromatography a substance does not elute at a given time but reaches a given distance: the plate is removed when the solvent front reaches a set point and the spot positions are measured. Rf (retardation factor) is the distance travelled by the spot from the origin divided by the distance travelled by the solvent front. As a fast and cheap technique it is used for purity checks, reaction monitoring and choosing conditions for column chromatography.',
    },
    meaning: {
      tr: 'Rf = dₐ / d_s. Her iki uzaklık da başlangıç (uygulama) noktasından ölçülür: dₐ lekenin merkezine, d_s çözücü cephesine kadar.\n\nRf her zaman 0 ile 1 arasındadır: Rf = 0 madde yerinden kıpırdamamış, Rf = 1 çözücüyle birlikte gitmiştir.\n\nKolon kromatografisiyle bağlantısı: alıkonma faktörü k = (1 − Rf) / Rf. Rf küçüldükçe madde durağan faza daha güçlü tutunur.',
      en: 'Rf = dₐ / d_s. Both distances are measured from the origin (application point): dₐ to the centre of the spot, d_s to the solvent front.\n\nRf always lies between 0 and 1: Rf = 0 means the compound has not moved, Rf = 1 that it travelled with the solvent.\n\nLink to column chromatography: the retention factor k = (1 − Rf) / Rf. The smaller Rf, the more strongly the compound is held by the stationary phase.',
    },
    usage: {
      tr: [
        'Bilinmeyen bir maddeyi aynı plakada yürütülen standartla karşılaştırarak tanımlamak.',
        'Rf; plaka türüne, çözücüye, sıcaklığa, tank doygunluğuna ve tabaka kalınlığına bağlıdır; kaynaklardaki değerler yalnızca yol göstericidir.',
        'İyi ayırma için Rf değerlerinin yaklaşık 0,2–0,8 aralığında olması istenir; uçlara yakın değerler belirsizdir.',
      ],
      en: [
        'Identifying an unknown by comparing it with a standard run on the same plate.',
        'Rf depends on the plate type, solvent, temperature, chamber saturation and layer thickness; literature values are only a guide.',
        'For good separation Rf values of about 0.2–0.8 are desirable; values near the extremes are uncertain.',
      ],
    },
    solution: {
      tr: [
        'Verilen: lekenin aldığı yol dₐ = 3,2 cm, çözücü cephesinin aldığı yol d_s = 8 cm (ikisi de başlangıç çizgisinden).',
        'Rf = dₐ / d_s = 3,2 cm / 8 cm.',
        'Sonuç: Rf = 0,4 (buna karşılık gelen k = (1 − 0,4)/0,4 = 1,5).',
      ],
      en: [
        'Given: spot distance dₐ = 3.2 cm, solvent-front distance d_s = 8 cm (both from the origin line).',
        'Rf = dₐ / d_s = 3.2 cm / 8 cm.',
        'Result: Rf = 0.4 (corresponding to k = (1 − 0.4)/0.4 = 1.5).',
      ],
    },
    mistakes: {
      tr: [
        'Uzaklıkları plakanın alt kenarından ölçmek; başlangıç çizgisinden ölçülmelidir.',
        'Plakayı çıkarınca çözücü cephesini işaretlemeyi unutmak (çözücü buharlaşınca cephe görünmez olur).',
        'Lekenin merkezi yerine ön ucunu kullanmak, özellikle kuyruklu lekelerde.',
      ],
      en: [
        'Measuring from the bottom edge of the plate; distances are measured from the origin line.',
        'Forgetting to mark the solvent front when removing the plate (it disappears as the solvent evaporates).',
        'Using the leading edge of the spot instead of its centre, especially for streaking spots.',
      ],
    },
    related: ['retention-factor', 'kovats', 'partition-coefficient'],
  },

  'gc-net-retention-volume': {
    concept: {
      tr: 'Sıvı kromatografisinde hareketli faz neredeyse sıkıştırılamaz, bu yüzden alıkonma hacmi basitçe F · t_R’dir. Gaz kromatografisinde ise taşıyıcı gaz kolon girişinde yüksek, çıkışında düşük basınçtadır; gaz ilerledikçe genleşir ve hızlanır. Kolon çıkışında ölçülen akış hızı bu nedenle kolon içindeki ortalama akışı olduğundan büyük gösterir. James–Martin sıkıştırılabilirlik faktörü (j) bu etkiyi düzeltir.',
      en: 'In liquid chromatography the mobile phase is nearly incompressible, so the retention volume is simply F · t_R. In gas chromatography the carrier gas is at high pressure at the inlet and low pressure at the outlet; it expands and speeds up as it moves. The flow rate measured at the outlet therefore overstates the average flow inside the column. The James–Martin compressibility factor (j) corrects for this.',
    },
    meaning: {
      tr: 'V_N = j · F · (t_R − t_M), j = (3/2) · [(P_g/P_ç)² − 1] / [(P_g/P_ç)³ − 1].\n\nj, kolon boyunca basınç dağılımının ortalamasından türetilir ve her zaman 1’den küçüktür; basınç oranı 1’e yaklaştıkça j → 1 olur.\n\nNet alıkonma hacmi, ölü hacmin çıkarıldığı ve basınçça düzeltilmiş hacimdir ve doğrudan V_N = K · V_S ile dağılım katsayısına bağlanır. Durağan faz kütlesine (w_S) bölünüp 0 °C’ye indirgenirse özgül alıkonma hacmi elde edilir: V_g = (V_N / w_S) · (273,15 / T_kolon).',
      en: 'V_N = j · F · (t_R − t_M), j = (3/2) · [(P_in/P_out)² − 1] / [(P_in/P_out)³ − 1].\n\nj is derived by averaging the pressure profile along the column and is always less than 1; as the pressure ratio approaches 1, j → 1.\n\nThe net retention volume is corrected for both the dead volume and pressure, and relates directly to the partition coefficient: V_N = K · V_S. Dividing by the mass of stationary phase (w_S) and referring to 0 °C gives the specific retention volume: V_g = (V_N / w_S) · (273.15 / T_column).',
    },
    usage: {
      tr: [
        'GC verilerinden dağılım katsayısı, çözünme ısısı gibi fizikokimyasal büyüklükler türetmek.',
        'Farklı kolon basınçlarında elde edilen alıkonma verilerini karşılaştırmak.',
        'F, kolon sıcaklığına göre ve sabun köpüğü akış ölçer kullanıldıysa su buharı basıncına göre düzeltilmiş olmalıdır.',
        'Basınç oranı için mutlak basınçlar kullanılır (gösterge basıncı değil).',
      ],
      en: [
        'Deriving physicochemical quantities such as partition coefficients or heats of solution from GC data.',
        'Comparing retention data obtained at different column pressures.',
        'F should be corrected to column temperature and, if a soap-bubble flowmeter was used, for water vapour pressure.',
        'The pressure ratio uses absolute pressures (not gauge pressures).',
      ],
    },
    solution: {
      tr: [
        'Verilen: P_g/P_ç = 2, F = 30 mL/dk, t_R = 5 dk, t_M = 1 dk.',
        'j = 1,5 × (2² − 1) / (2³ − 1) = 1,5 × 3/7 = 0,6429.',
        'Düzeltilmemiş net hacim: F · (t_R − t_M) = 30 mL/dk × 4 dk = 120 mL.',
        'Sonuç: V_N = 0,6429 × 120 mL = 77,14 mL.',
      ],
      en: [
        'Given: P_in/P_out = 2, F = 30 mL/min, t_R = 5 min, t_M = 1 min.',
        'j = 1.5 × (2² − 1) / (2³ − 1) = 1.5 × 3/7 = 0.6429.',
        'Uncorrected net volume: F · (t_R − t_M) = 30 mL/min × 4 min = 120 mL.',
        'Result: V_N = 0.6429 × 120 mL = 77.14 mL.',
      ],
    },
    mistakes: {
      tr: [
        'Gösterge basıncını mutlak basınç yerine kullanmak (oran hatalı çıkar).',
        'Basınç oranını ters girmek (P_ç/P_g < 1).',
        'Ölü süreyi çıkarmayı unutup düzeltilmiş alıkonma hacmini (j · F · t_R) net hacim sanmak.',
      ],
      en: [
        'Using gauge pressure instead of absolute pressure (the ratio comes out wrong).',
        'Entering the pressure ratio upside down (P_out/P_in < 1).',
        'Forgetting to subtract the void time and taking the corrected retention volume (j · F · t_R) for the net volume.',
      ],
    },
    related: ['retention-volume', 'kovats', 'partition-coefficient'],
  },

  'electrophoretic-mobility': {
    concept: {
      tr: 'Kapiler elektroforezde (KE) yüklü maddeler, tamponla doldurulmuş ince bir silika kapilerde elektrik alanının etkisiyle göç eder. Elektroforetik mobilite (µ_ep), iyonun birim alan şiddetinde kazandığı hızdır; yük/boyut oranıyla belirlenir ve ayırmanın temelidir.\n\nBuna ek olarak bütün çözelti, elektroozmotik akış (EOF) nedeniyle kapiler içinde hareket eder. Silika yüzeyindeki silanol grupları pH yaklaşık 3’ün üzerinde iyonlaşır (Si–O⁻); yüzeye yakın katyon tabakası katoda doğru çekilir ve çözeltiyi düz (piston benzeri) bir profille sürükler. Ölçülen görünür mobilite, iki katkının toplamıdır.',
      en: 'In capillary electrophoresis (CE) charged species migrate under an electric field in a thin buffer-filled silica capillary. The electrophoretic mobility (µ_ep) is the velocity an ion gains per unit field strength; it is set by the charge-to-size ratio and is the basis of the separation.\n\nIn addition, the whole solution moves through the capillary by electroosmotic flow (EOF). Above roughly pH 3 the silanol groups on the silica wall ionise (Si–O⁻); the layer of cations near the wall is pulled towards the cathode and drags the solution with a flat, plug-like profile. The measured apparent mobility is the sum of the two contributions.',
    },
    meaning: {
      tr: 'Göç hızı v = L_d / t_m (dedektöre kadar alınan yol / göç süresi), alan şiddeti E = V / L_t (gerilim / toplam kapiler uzunluğu). Mobilite hızın alana oranıdır:\nµ_app = v / E = L_d · L_t / (t_m · V).\n\nBileşenlerine ayırma:\n• µ_app = µ_ep + µ_eo.\n• µ_eo, nötral bir işaretleyicinin (ör. mesitil oksit, DMSO) göç süresinden aynı formülle bulunur.\n• Katyonlarda µ_ep > 0, anyonlarda µ_ep < 0’dır. EOF yeterince güçlüyse anyonlar da katot tarafındaki dedektöre ulaşır.\n\nBasit modelde µ_ep = q / (6π η r): yük arttıkça, iyon yarıçapı ve viskozite azaldıkça mobilite artar.',
      en: 'Migration velocity v = L_d / t_m (distance to the detector / migration time), field strength E = V / L_t (voltage / total capillary length). Mobility is velocity divided by field:\nµ_app = v / E = L_d · L_t / (t_m · V).\n\nSplitting it up:\n• µ_app = µ_ep + µ_eo.\n• µ_eo is obtained with the same formula from the migration time of a neutral marker (e.g. mesityl oxide, DMSO).\n• Cations have µ_ep > 0, anions µ_ep < 0. If the EOF is strong enough, anions still reach the detector at the cathode end.\n\nIn a simple model µ_ep = q / (6π η r): higher charge and smaller ionic radius or viscosity give higher mobility.',
    },
    usage: {
      tr: [
        'Göç sürelerini mobiliteye çevirip farklı uzunluk ve gerilimdeki ölçümleri karşılaştırmak.',
        'Nötral işaretleyiciyle µ_eo’yu ölçüp her iyonun gerçek elektroforetik mobilitesini bulmak.',
        'EOF; tampon pH’ı, iyonik şiddet ve kapiler yüzeyinin kaplanmasıyla değiştirilebilir, bu da göç sürelerini etkiler.',
        'L_d ile L_t’nin farklı olduğuna dikkat edin: dedektör kapilerin ucunda değil, birkaç cm önündedir.',
      ],
      en: [
        'Converting migration times into mobilities to compare runs at different lengths and voltages.',
        'Measuring µ_eo with a neutral marker to obtain the true electrophoretic mobility of each ion.',
        'The EOF can be tuned by buffer pH, ionic strength and capillary coating, which shifts migration times.',
        'Note that L_d and L_t differ: the detector sits a few cm before the capillary outlet.',
      ],
    },
    solution: {
      tr: [
        'Verilen: L_d = 50 cm, L_t = 57 cm, t_m = 5 dk = 300 s, V = 25 kV = 25000 V.',
        'Göç hızı: v = 50 cm / 300 s = 0,1667 cm/s; alan şiddeti: E = 25000 V / 57 cm = 438,6 V/cm.',
        'µ_app = v / E = (50 × 57) / (300 × 25000) cm²/(V·s).',
        'Sonuç: µ_app = 3,8 × 10⁻⁴ cm²/(V·s).',
      ],
      en: [
        'Given: L_d = 50 cm, L_t = 57 cm, t_m = 5 min = 300 s, V = 25 kV = 25000 V.',
        'Migration velocity: v = 50 cm / 300 s = 0.1667 cm/s; field strength: E = 25000 V / 57 cm = 438.6 V/cm.',
        'µ_app = v / E = (50 × 57) / (300 × 25000) cm²/(V·s).',
        'Result: µ_app = 3.8 × 10⁻⁴ cm²/(V·s).',
      ],
    },
    mistakes: {
      tr: [
        'L_d ile L_t’yi aynı almak ya da yerlerini karıştırmak.',
        'Görünür mobiliteyi elektroforetik mobilite sanmak; EOF katkısı çıkarılmalıdır.',
        'Gerilimi kV, süreyi dakika olarak formüle koyup birimleri dönüştürmemek.',
      ],
      en: [
        'Taking L_d and L_t as equal, or swapping them.',
        'Treating the apparent mobility as the electrophoretic mobility; the EOF contribution must be subtracted.',
        'Plugging in kV and minutes without converting units.',
      ],
    },
    related: ['ce-plate-number', 'conductivity', 'retention-factor'],
  },

  'ce-plate-number': {
    concept: {
      tr: 'Kapiler elektroforezin en önemli üstünlüğü çok yüksek verimdir; yüz binlerce teorik tabaka sıradan değerlerdir. Bunun nedeni, KE’de dolgu olmadığından girdap difüzyonu, durağan faz olmadığından kütle aktarımı direnci bulunmaması ve elektroozmotik akışın düz profilli olmasıdır. İdeal koşullarda bandı genişleten tek süreç boyuna (moleküler) difüzyondur.',
      en: 'The main strength of capillary electrophoresis is its very high efficiency; hundreds of thousands of plates are routine. The reason is that CE has no packing (no eddy diffusion), no stationary phase (no mass-transfer resistance) and a flat electroosmotic flow profile. Under ideal conditions the only broadening process is longitudinal (molecular) diffusion.',
    },
    meaning: {
      tr: 'Difüzyonla oluşan bant varyansı σ² = 2 D t’dir. Göç süresi t = L_d · L_t / (µ_app · V) ve N = L_d² / σ² birleştirilince N = µ_app · V · L_d / (2 D · L_t) bulunur. L_d ≈ L_t kabul edilirse araçtaki basit biçim elde edilir: N = µ_app · V / (2 D).\n\nÇıkarımlar:\n• N gerilimle doğru orantılıdır; gerilim artınca madde difüzyona daha az süre bulur.\n• N, kapiler uzunluğundan (yaklaşık olarak) bağımsızdır.\n• Difüzyon katsayısı küçük olan büyük moleküller (proteinler, DNA) çok yüksek verimle ayrılır.',
      en: 'The band variance from diffusion is σ² = 2 D t. Combining the migration time t = L_d · L_t / (µ_app · V) with N = L_d² / σ² gives N = µ_app · V · L_d / (2 D · L_t). Taking L_d ≈ L_t gives the simple form used by the tool: N = µ_app · V / (2 D).\n\nConsequences:\n• N is proportional to voltage; at higher voltage the solute has less time to diffuse.\n• N is (approximately) independent of capillary length.\n• Large molecules with small diffusion coefficients (proteins, DNA) are separated with very high efficiency.',
    },
    usage: {
      tr: [
        'KE’de ulaşılabilecek en yüksek (teorik) verimi tahmin etmek.',
        'Gerçek N genellikle daha düşüktür: enjeksiyon bandının uzunluğu, Joule ısınması, duvara adsorpsiyon ve dedektör hacmi ek genişleme yaratır.',
        'Gerilim sınırsız artırılamaz; akım ve Joule ısınması pratik üst sınırı belirler.',
        'L_d, L_t’den belirgin biçimde kısaysa sonucu L_d / L_t ile çarpın.',
      ],
      en: [
        'Estimating the highest (theoretical) efficiency achievable in CE.',
        'Real N is usually lower: injection plug length, Joule heating, wall adsorption and detector volume add broadening.',
        'Voltage cannot be raised without limit; current and Joule heating set the practical upper bound.',
        'If L_d is noticeably shorter than L_t, multiply the result by L_d / L_t.',
      ],
    },
    solution: {
      tr: [
        'Verilen: µ_app = 3,8 × 10⁻⁴ cm²/(V·s), V = 25 kV = 25000 V, D = 1 × 10⁻⁵ cm²/s (küçük bir molekül için tipik).',
        'Pay: µ_app · V = 3,8 × 10⁻⁴ × 25000 = 9,5 cm²/s.',
        'N = 9,5 cm²/s / (2 × 1 × 10⁻⁵ cm²/s).',
        'Sonuç: N = 475000 teorik tabaka (yaklaşık 4,75 × 10⁵).',
      ],
      en: [
        'Given: µ_app = 3.8 × 10⁻⁴ cm²/(V·s), V = 25 kV = 25000 V, D = 1 × 10⁻⁵ cm²/s (typical for a small molecule).',
        'Numerator: µ_app · V = 3.8 × 10⁻⁴ × 25000 = 9.5 cm²/s.',
        'N = 9.5 cm²/s / (2 × 1 × 10⁻⁵ cm²/s).',
        'Result: N = 475000 theoretical plates (about 4.75 × 10⁵).',
      ],
    },
    mistakes: {
      tr: [
        'Gerilimi kV olarak bırakıp V’ye çevirmemek (1000 kat hata).',
        'Paydadaki 2’yi unutmak.',
        'D’yi m²/s, mobiliteyi cm²/(V·s) olarak karıştırmak; iki büyüklük aynı uzunluk biriminde olmalıdır.',
      ],
      en: [
        'Leaving the voltage in kV instead of volts (a factor of 1000).',
        'Forgetting the factor 2 in the denominator.',
        'Mixing D in m²/s with mobility in cm²/(V·s); both must use the same length unit.',
      ],
    },
    related: ['electrophoretic-mobility', 'plate-number-base', 'van-deemter'],
  },

  'van-deemter': {
    concept: {
      tr: 'Tabaka yüksekliği (H) hareketli fazın doğrusal hızına (u) bağlıdır ve bu bağımlılık, bant genişlemesine yol açan üç fiziksel süreçle açıklanır. van Deemter eşitliği bu süreçleri toplar ve H’nin en küçük olduğu, yani kolonun en verimli çalıştığı bir optimum hız bulunduğunu gösterir. Çok yavaş akışta difüzyon, çok hızlı akışta kütle aktarımının yavaşlığı verimi düşürür.',
      en: 'The plate height (H) depends on the linear velocity (u) of the mobile phase, and three physical band-broadening processes explain this dependence. The van Deemter equation adds them up and shows that there is an optimum velocity at which H is smallest, i.e. the column is most efficient. At very low flow diffusion spoils the efficiency; at very high flow slow mass transfer does.',
    },
    meaning: {
      tr: 'H = A + B/u + C·u.\n\n• A (girdap difüzyonu, çoklu yol terimi): moleküller dolgu tanecikleri arasında farklı uzunlukta yollar izler. Hızdan bağımsızdır; küçük ve düzgün taneciklerle azalır. Açık borulu (kapiler) kolonlarda yoktur.\n• B/u (boyuna difüzyon): bant, kolon ekseni boyunca her yöne yayılır. Kolonda geçen süre uzadıkça (u küçüldükçe) etkisi büyür. B, hareketli fazdaki difüzyon katsayısıyla orantılıdır; gazlarda sıvılardakinden çok büyüktür.\n• C·u (kütle aktarımı direnci): moleküllerin durağan faza girip çıkması ve tanecik gözeneklerinde difüzyonu zaman alır; akış hızlandıkça bant geride kalan moleküllerle genişler. İnce durağan faz filmi ve küçük taneciklerle azalır.\n\ndH/du = −B/u² + C = 0 koşulundan u_opt = √(B/C) ve H_min = A + 2√(B·C) elde edilir. Optimumda B/u ve C·u terimleri birbirine eşittir.',
      en: 'H = A + B/u + C·u.\n\n• A (eddy diffusion, multiple paths): molecules follow paths of different length between packing particles. Independent of velocity; reduced with small, uniform particles. Absent in open-tubular (capillary) columns.\n• B/u (longitudinal diffusion): the band spreads along the column axis in both directions. The longer the band stays in the column (the lower u), the larger the effect. B is proportional to the diffusion coefficient in the mobile phase, which is much larger in gases than in liquids.\n• C·u (mass-transfer resistance): moving into and out of the stationary phase and diffusing through particle pores takes time; at higher flow, lagging molecules broaden the band. Reduced by thin stationary-phase films and small particles.\n\nSetting dH/du = −B/u² + C = 0 gives u_opt = √(B/C) and H_min = A + 2√(B·C). At the optimum the B/u and C·u terms are equal.',
    },
    usage: {
      tr: [
        'Bir kolon için en verimli akış hızını belirlemek ve taşıyıcı gaz ya da tanecik boyutlarını karşılaştırmak.',
        'Eğri optimumun sağında daha yavaş yükseldiğinden, pratikte analiz süresini kısaltmak için genellikle optimumun biraz üzerinde çalışılır.',
        'A, B, C katsayıları farklı hızlarda ölçülen H değerlerine eğri uydurularak bulunur.',
        'A, B ve C’yi tutarlı birimlerle girin (ör. H mm, u cm/s → B mm·cm/s, C mm·s/cm).',
      ],
      en: [
        'Finding the most efficient flow velocity for a column and comparing carrier gases or particle sizes.',
        'The curve rises more slowly to the right of the optimum, so in practice one often works somewhat above it to save time.',
        'The A, B, C coefficients are found by fitting H values measured at several velocities.',
        'Enter A, B and C in consistent units (e.g. H mm, u cm/s → B mm·cm/s, C mm·s/cm).',
      ],
    },
    solution: {
      tr: [
        'Aracın örnek değerleri: A = 0,10 mm, B = 2,0 mm·cm/s, C = 0,05 mm·s/cm.',
        'Optimum hız: u_opt = √(B/C) = √(2,0 / 0,05) = √40 = 6,325 cm/s.',
        'Bu hızda B/u = 2,0 / 6,325 = 0,3162 mm ve C·u = 0,05 × 6,325 = 0,3162 mm (iki terim eşit).',
        'Sonuç: H_min = 0,10 + 2√(2,0 × 0,05) = 0,10 + 0,6325 = 0,7325 mm; u = 20 cm/s’de ise H = 0,10 + 0,10 + 1,00 = 1,20 mm’ye çıkar.',
      ],
      en: [
        'Tool sample values: A = 0.10 mm, B = 2.0 mm·cm/s, C = 0.05 mm·s/cm.',
        'Optimum velocity: u_opt = √(B/C) = √(2.0 / 0.05) = √40 = 6.325 cm/s.',
        'At this velocity B/u = 2.0 / 6.325 = 0.3162 mm and C·u = 0.05 × 6.325 = 0.3162 mm (the two terms are equal).',
        'Result: H_min = 0.10 + 2√(2.0 × 0.05) = 0.10 + 0.6325 = 0.7325 mm; at u = 20 cm/s H rises to 0.10 + 0.10 + 1.00 = 1.20 mm.',
      ],
    },
    mistakes: {
      tr: [
        'Doğrusal hız yerine hacimsel akış hızını (mL/dk) x ekseni olarak kullanmak.',
        'A, B, C’yi tutarsız birimlerle girmek; u_opt ve H_min anlamsız çıkar.',
        'H_min’i yalnızca A sanmak; en düşük H, A + 2√(BC)’dir.',
      ],
      en: [
        'Using the volumetric flow rate (mL/min) instead of linear velocity on the x-axis.',
        'Entering A, B, C in inconsistent units, giving meaningless u_opt and H_min.',
        'Thinking H_min equals A; the minimum H is A + 2√(BC).',
      ],
    },
    related: ['plate-height', 'linear-velocity', 'plate-number-half'],
  },

  'peak-resolution': {
    concept: {
      tr: 'Bu araç, iki Gauss pikini alıkonma süreleri ve taban genişliklerinden çizer ve rezolüsyonu hesaplar. Rezolüsyon formülündeki sayının kromatogramda neye karşılık geldiğini görmek için kullanılır: R_s küçüldükçe pikler birbirine karışır, aradaki vadi yükselir ve iki pik tek bir omuzlu pik gibi görünmeye başlar.',
      en: 'This tool draws two Gaussian peaks from their retention times and baseline widths and calculates the resolution. It is used to see what the number in the resolution formula looks like on a chromatogram: as R_s falls, the peaks merge, the valley between them rises and the pair starts to look like a single peak with a shoulder.',
    },
    meaning: {
      tr: 'R_s = 2 · (t_R2 − t_R1) / (w₁ + w₂). Her pik, σ = w/4 olan bir Gauss eğrisi olarak çizilir ve kromatogram iki pikin toplamıdır.\n\nAraçtaki değerlendirme:\n• R_s ≥ 1,5: taban çizgisinde tam ayırma.\n• 1 ≤ R_s < 1,5: kısmi ayırma (R_s = 1’de yaklaşık %2 örtüşme).\n• R_s < 1: belirgin örtüşme; pik alanları güvenilir biçimde ayrılamaz.\n\nPurnell eşitliğine göre R_s ∝ √N olduğundan, yalnızca verimle R_s’yi f katına çıkarmak için N’nin f² katına çıkması gerekir.',
      en: 'R_s = 2 · (t_R2 − t_R1) / (w₁ + w₂). Each peak is drawn as a Gaussian with σ = w/4, and the chromatogram is the sum of the two.\n\nThe tool’s verdict:\n• R_s ≥ 1.5: baseline separation.\n• 1 ≤ R_s < 1.5: partial separation (about 2% overlap at R_s = 1).\n• R_s < 1: significant overlap; peak areas cannot be split reliably.\n\nBecause R_s ∝ √N (Purnell equation), raising R_s by a factor f through efficiency alone needs f² times the plate number.',
    },
    usage: {
      tr: [
        'Kromatogramdan okunan süre ve genişliklerle ayırmanın yeterli olup olmadığını hızla görmek.',
        'Genişlikleri ya da alıkonma farkını değiştirerek rezolüsyonun nasıl değiştiğini öğrenmek.',
        'Pikler eşit yükseklikte ve Gauss biçiminde varsayılır; gerçek kromatogramda boy farkı ve kuyruklanma görünümü değiştirir.',
      ],
      en: [
        'Quickly checking whether a separation is adequate from times and widths read off a chromatogram.',
        'Exploring how resolution changes as widths or the retention difference change.',
        'Peaks are assumed Gaussian and of equal height; in real chromatograms size differences and tailing change the picture.',
      ],
    },
    solution: {
      tr: [
        'Aracın örnek değerleri: t_R1 = 8,00 dk, w₁ = 0,40 dk; t_R2 = 8,30 dk, w₂ = 0,42 dk.',
        'R_s = 2 × (8,30 − 8,00) / (0,40 + 0,42) = 0,60 / 0,82 = 0,7317.',
        'R_s < 1 olduğundan araç “pikler belirgin biçimde örtüşüyor” uyarısı verir.',
        'R_s = 1,5’e yalnızca verimle ulaşmak için N’nin (1,5 / 0,7317)² ≈ 4,2 katına çıkması (aynı dolguyla yaklaşık 4,2 kat uzun kolon) gerekir; α’yı artırmak genellikle daha etkilidir.',
      ],
      en: [
        'Tool sample values: t_R1 = 8.00 min, w₁ = 0.40 min; t_R2 = 8.30 min, w₂ = 0.42 min.',
        'R_s = 2 × (8.30 − 8.00) / (0.40 + 0.42) = 0.60 / 0.82 = 0.7317.',
        'Since R_s < 1, the tool warns that the peaks overlap significantly.',
        'Reaching R_s = 1.5 by efficiency alone would need (1.5 / 0.7317)² ≈ 4.2 times the plate number (a column about 4.2 times longer with the same packing); raising α is usually more effective.',
      ],
    },
    mistakes: {
      tr: [
        'Yarı yükseklikteki genişlikleri taban genişliği yerine girmek (R_s yaklaşık 1,7 kat büyük çıkar).',
        'Kolonu iki katına çıkarmanın R_s’yi iki katına çıkaracağını sanmak (yalnızca 1,41 kat artar).',
        'Süre ve genişlikleri farklı birimlerde girmek.',
      ],
      en: [
        'Entering widths at half height instead of baseline widths (R_s comes out about 1.7 times too high).',
        'Expecting a column twice as long to double R_s (it rises only 1.41-fold).',
        'Entering times and widths in different units.',
      ],
    },
    related: ['resolution', 'purnell', 'plate-number-base'],
  },
};

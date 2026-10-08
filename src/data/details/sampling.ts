import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Sampling module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const SAMPLING_DETAILS: Record<string, ToolDetail> = {
  'sampling-variance': {
    concept: {
      tr: 'Bir analiz sonucunun belirsizliği yalnızca laboratuvardaki ölçümden gelmez. Laboratuvara gelen küçük numune, büyük ve çoğu zaman heterojen bir yığını (toprak, cevher, tahıl, atık) temsil etmek zorundadır. Numuneler arasındaki doğal farklılık da sonuca yansır.\n\nBu araç toplam varyansı iki kaynağa ayırır: örnekleme (numune alma) ve analiz. Hangisinin baskın olduğunu bilmek, emeğin nereye harcanacağına karar vermeyi sağlar.',
      en: 'The uncertainty of an analytical result does not come from the laboratory measurement alone. The small sample that reaches the laboratory must represent a large and often heterogeneous lot (soil, ore, grain, waste), and the natural variation between samples is also carried into the result.\n\nThis tool splits the total variance into its two sources, sampling and analysis. Knowing which one dominates tells you where effort is best spent.',
    },
    meaning: {
      tr: 'Bağımsız rastgele hata kaynaklarında standart sapmalar değil, varyanslar toplanır: s_o² = s_s² + s_a².\n\n• s_o: farklı numunelerin analiz sonuçlarından bulunan toplam standart sapma.\n• s_a: aynı numunenin tekrar analizlerinden bulunan analiz standart sapması.\n• s_s: ikisinden hesaplanan örnekleme standart sapması, s_s = √(s_o² − s_a²).\n\nVaryanslar toplandığı için büyük olan terim baskın çıkar. s_a, s_s’nin yaklaşık üçte birinden küçükse analiz yöntemini iyileştirmek toplam belirsizliği neredeyse hiç azaltmaz; daha çok ya da daha büyük numune almak gerekir.',
      en: 'For independent random error sources, variances add, not standard deviations: s_o² = s_s² + s_a².\n\n• s_o: overall standard deviation from analysing different samples.\n• s_a: analytical standard deviation from replicate analyses of one sample.\n• s_s: sampling standard deviation obtained from the two, s_s = √(s_o² − s_a²).\n\nBecause variances add, the larger term dominates. If s_a is below about a third of s_s, improving the analytical method hardly reduces the total; more or larger samples are needed instead.',
    },
    usage: {
      tr: [
        'Örnekleme planı ile analiz yönteminden hangisinin iyileştirilmesi gerektiğine karar vermek.',
        's_a, aynı homojen numunenin (ya da sertifikalı referans maddenin) tekrar analizlerinden bulunmalıdır.',
        'Tüm standart sapmalar aynı birimde olmalıdır (mutlak ya da bağıl, ama karışık değil).',
        'Hata kaynaklarının birbirinden bağımsız olduğu varsayılır.',
      ],
      en: [
        'Deciding whether the sampling plan or the analytical method should be improved.',
        's_a should come from replicate analyses of one homogeneous sample (or a certified reference material).',
        'All standard deviations must be in the same unit (all absolute or all relative, not mixed).',
        'The error sources are assumed to be independent.',
      ],
    },
    solution: {
      tr: ['Verilen: s_o = 0,05, s_a = 0,03.', 's_s² = s_o² − s_a² = 0,0025 − 0,0009 = 0,0016.', 'Sonuç: s_s = √0,0016 = 0,04. Örnekleme varyansı analiz varyansının yaklaşık iki katıdır.'],
      en: ['Given: s_o = 0.05, s_a = 0.03.', 's_s² = s_o² − s_a² = 0.0025 − 0.0009 = 0.0016.', 'Result: s_s = √0.0016 = 0.04. The sampling variance is about twice the analytical variance.'],
    },
    mistakes: {
      tr: [
        'Standart sapmaları doğrudan toplamak ya da çıkarmak (s_s = 0,05 − 0,03 = 0,02 yanlıştır).',
        's_a’yı farklı numunelerin sonuçlarından hesaplamak; bu, örnekleme hatasını da içerir.',
        's_a > s_o çıkarsa hesabı zorlamak: bu, verilerin tutarsız olduğunu ya da daha çok tekrar gerektiğini gösterir.',
      ],
      en: [
        'Adding or subtracting standard deviations directly (s_s = 0.05 − 0.03 = 0.02 is wrong).',
        'Computing s_a from different samples, which also contains the sampling error.',
        'Forcing the calculation when s_a > s_o: it means the data are inconsistent or more replicates are needed.',
      ],
    },
    related: ['ingamells', 'samples-number', 'propagation'],
  },

  ingamells: {
    concept: {
      tr: 'Heterojen bir katıda analit taneciklere düzensiz dağılmıştır. Küçük bir numunede “şanslı” ya da “şanssız” sayıda analit taneciği bulunabilir; numune büyüdükçe bu dalgalanma azalır.\n\nIngamells, örneklemeden gelen bağıl standart sapma ile numune kütlesi arasında basit bir ilişki önermiştir. Malzemeye özgü örnekleme sabiti K_s, %1 örnekleme bağıl standart sapması veren numune kütlesidir.',
      en: 'In a heterogeneous solid the analyte is unevenly distributed among the particles. A small portion may contain a “lucky” or “unlucky” number of analyte particles, and this fluctuation shrinks as the portion grows.\n\nIngamells proposed a simple relation between the relative sampling standard deviation and the sample mass. The sampling constant K_s, a property of the material, is the mass that gives a 1% relative sampling standard deviation.',
    },
    meaning: {
      tr: 'm · R² = K_s. Burada R, yüzde cinsinden örnekleme bağıl standart sapmasıdır.\n\nR² ∝ 1/m olduğu için örnekleme hatasını yarıya indirmek numune kütlesini dört katına çıkarmayı gerektirir.\n\nK_s deneysel olarak bulunur: aynı kütlede birkaç numune analiz edilir, örnekleme RSD’si hesaplanır ve K_s = m · R² yazılır. Sonra istenen R için gereken en küçük kütle m = K_s / R² ile bulunur.',
      en: 'm · R² = K_s, where R is the relative sampling standard deviation in percent.\n\nSince R² ∝ 1/m, halving the sampling error requires four times the sample mass.\n\nK_s is found experimentally: analyse several portions of equal mass, compute the sampling RSD and write K_s = m · R². The smallest mass for a target R then follows from m = K_s / R².',
    },
    usage: {
      tr: [
        'İstenen örnekleme hassasiyeti için en küçük numune kütlesini seçmek.',
        'Farklı tanecik boyutlarındaki malzemeleri karşılaştırmak; öğütme K_s’yi küçültür.',
        'K_s yalnızca aynı malzeme ve aynı tanecik boyutu için geçerlidir; öğütme ya da karıştırma sonrası yeniden belirlenmelidir.',
      ],
      en: [
        'Choosing the smallest sample mass for a required sampling precision.',
        'Comparing materials of different particle size; grinding lowers K_s.',
        'K_s holds only for the same material and particle size; determine it again after grinding or mixing.',
      ],
    },
    solution: {
      tr: [
        'Verilen: K_s = 6,059 g (kahvaltılık gevrekte kül), istenen örnekleme RSD’si R = %2.',
        'm = K_s / R² = 6,059 g / 2² = 6,059 g / 4.',
        'Sonuç: m = 1,515 g; %2’lik örnekleme hassasiyeti için en az bu kadar numune alınmalıdır.',
      ],
      en: [
        'Given: K_s = 6.059 g (ash in breakfast cereal), target sampling RSD R = 2%.',
        'm = K_s / R² = 6.059 g / 2² = 6.059 g / 4.',
        'Result: m = 1.515 g; at least this mass is needed for a 2% sampling precision.',
      ],
    },
    mistakes: {
      tr: ['R’yi oran olarak girmek (0,02); formül yüzde değerini (2) bekler.', 'R ile m arasındaki ilişkiyi doğrusal sanmak; R yarıya inince kütle dört katına çıkar.', 'Bir malzeme için bulunan K_s’yi öğütülmüş ya da farklı bir malzemeye uygulamak.'],
      en: ['Entering R as a fraction (0.02); the formula expects the percentage (2).', 'Assuming R and m are inversely proportional; halving R needs four times the mass.', 'Applying a K_s found for one material to a ground or different material.'],
    },
    related: ['particles-needed', 'sampling-variance', 'samples-number'],
  },

  'particles-needed': {
    concept: {
      tr: 'Bazı numunelerde analit, taneciklerin çok küçük bir kesrinde yoğunlaşır: cevherde altın taneleri, tohumlarda aflatoksinli taneler, ilaç tozunda safsızlık parçacıkları. Bu durumda numunedeki analit tanecik sayısı rastgele dalgalanır ve sonuç, bulunan analitin kendisinden çok “kaç tane yakalandığına” bağlı olur.\n\nAnalit taneciklerinin sayısı binom dağılımına uyar. Bu araç, istenen örnekleme hassasiyetine ulaşmak için toplam kaç tanecik toplanması gerektiğini verir.',
      en: 'In some materials the analyte is concentrated in a tiny fraction of the particles: gold grains in an ore, contaminated kernels in seed lots, impurity particles in a drug powder. The number of analyte particles in a sample then fluctuates randomly, and the result depends on “how many were caught” rather than on the analyte itself.\n\nThe number of analyte particles follows a binomial distribution. This tool gives how many particles in total must be collected to reach a target sampling precision.',
    },
    meaning: {
      tr: 'n tanecikten oluşan bir numunede analit taneciklerinin sayısı ortalama n·p, standart sapması √(n·p·(1 − p))’dir. Bağıl standart sapma R = √((1 − p) / (n·p)) olur. n’ye göre çözülünce: n = (1 − p) / (p · R²), R burada oran olarak (yüzde/100) kullanılır.\n\np çok küçük olduğunda n ≈ 1 / (p · R²): analit taneciği ne kadar nadirse gereken tanecik sayısı o kadar büyür. Bu yüzden nadir tanecik içeren malzemeler örneklemeden önce ince öğütülür ve iyice karıştırılır.',
      en: 'In a sample of n particles the number of analyte particles has mean n·p and standard deviation √(n·p·(1 − p)). The relative standard deviation is R = √((1 − p) / (n·p)). Solving for n gives n = (1 − p) / (p · R²), with R as a fraction (percent/100).\n\nFor very small p, n ≈ 1 / (p · R²): the rarer the analyte particles, the more particles are needed. That is why materials with rare particles are finely ground and well mixed before sampling.',
    },
    usage: {
      tr: [
        'Nadir tanecik içeren malzemelerde gereken numune büyüklüğünü kestirmek.',
        'Tanecik sayısını kütleye çevirmek için ortalama tanecik kütlesi (yoğunluk ve boyuttan) gerekir.',
        'Taneciklerin ya analit içerdiği ya da hiç içermediği (iki tür tanecik) varsayılır.',
      ],
      en: [
        'Estimating the sample size needed for materials with rare analyte particles.',
        'Converting the particle count to a mass requires the mean particle mass (from density and size).',
        'Assumes particles either contain the analyte or contain none (two kinds of particle).',
      ],
    },
    solution: {
      tr: [
        'Verilen: analit içeren tanecik kesri p = 1 × 10⁻⁹, istenen örnekleme RSD’si R = %1 (0,01).',
        'n = (1 − p) / (p · R²) ≈ 1 / (10⁻⁹ × 10⁻⁴).',
        'Sonuç: n = 1 × 10¹³ tanecik. Bu kadar tanecik toplamak pratik değildir; numune önce öğütülmelidir.',
      ],
      en: [
        'Given: fraction of analyte particles p = 1 × 10⁻⁹, target sampling RSD R = 1% (0.01).',
        'n = (1 − p) / (p · R²) ≈ 1 / (10⁻⁹ × 10⁻⁴).',
        'Result: n = 1 × 10¹³ particles. Collecting this many particles is impractical; grind the material first.',
      ],
    },
    mistakes: {
      tr: ['R’yi formülde yüzde olarak kullanmak (hesapta oran, yani 0,01 kullanılır; araç bunu kendisi yapar).', 'p’yi kütlece analit kesriyle karıştırmak; p tanecik sayısı kesridir.', 'Sonucu doğrudan gram sanmak; n tanecik sayısıdır.'],
      en: ['Using R in percent inside the formula (the calculation uses the fraction, 0.01; the tool converts it).', 'Confusing p with the mass fraction of analyte; p is a fraction of particles by number.', 'Reading the result as grams; n is a number of particles.'],
    },
    related: ['ingamells', 'sampling-variance'],
  },

  'validation-replicates': {
    concept: {
      tr: 'Bir yöntemin sistematik hatası (sapma, bias) olup olmadığını sınamak için referans malzeme üzerinde tekrarlı ölçüm yapılır. Ölçüm sayısı az olursa gerçek bir sapma rastgele dağılım içinde kaybolur; gereğinden fazla ölçüm ise zaman ve kaynak israfıdır.\n\nBu araç, belirli büyüklükteki bir sapmayı %95 güvenle ve %95 olasılıkla (güç) yakalamak için yaklaşık kaç ölçüm gerektiğini verir.',
      en: 'To test whether a method has a systematic error (bias), replicate measurements are made on a reference material. Too few measurements let a real bias hide in the random scatter, while too many waste time and resources.\n\nThis tool gives the approximate number of measurements needed to detect a bias of a given size with 95% confidence and 95% probability (power).',
    },
    meaning: {
      tr: 'n = 13 · (s / δ)² + 2. Burada s yöntemin standart sapması, δ saptanmak istenen en küçük sapmadır.\n\nKatsayı 13, %95 güven ve %95 güç için iki z değerinin toplamının karesinden gelir: (1,96 + 1,645)² ≈ 13. Sondaki +2, küçük örneklemlerde z yerine t kullanılmasının etkisini yaklaşık olarak düzeltir.\n\nn, (s/δ)²’ye bağlıdır: sapma yöntemin standart sapmasıyla aynı büyüklükteyse yaklaşık 15 ölçüm yeterlidir; δ = s/2 ise yaklaşık 54 ölçüm gerekir.',
      en: 'n = 13 · (s / δ)² + 2, where s is the method standard deviation and δ the smallest bias to be detected.\n\nThe factor 13 is the square of the sum of two z-values for 95% confidence and 95% power: (1.96 + 1.645)² ≈ 13. The +2 roughly corrects for using t instead of z with small samples.\n\nn depends on (s/δ)²: if the bias is as large as the method standard deviation, about 15 measurements suffice; for δ = s/2 about 54 are needed.',
    },
    usage: {
      tr: [
        'Yöntem doğrulama planında tekrar sayısını belirlemek.',
        'Sonuç yaklaşıktır; yukarı yuvarlanır.',
        's’nin iyi bilindiği (önceki verilerden) varsayılır.',
      ],
      en: [
        'Planning the number of replicates in a method validation.',
        'The result is approximate; round it up.',
        'Assumes s is well known (from earlier data).',
      ],
    },
    solution: {
      tr: ['Verilen: s = 1, saptanacak sapma δ = 1 (sapma yöntemin standart sapmasına eşit).', 'n = 13 × (1 / 1)² + 2.', 'Sonuç: n = 15 ölçüm.'],
      en: ['Given: s = 1, bias to detect δ = 1 (equal to the method standard deviation).', 'n = 13 × (1 / 1)² + 2.', 'Result: n = 15 measurements.'],
    },
    mistakes: {
      tr: ['s ve δ’yı farklı birimlerde girmek (biri mutlak, biri bağıl).', 'Sonucu aşağı yuvarlamak.', 'Saptanacak sapmayı gerçekçi olmayan küçüklükte seçip yüzlerce ölçüm planlamak.'],
      en: ['Entering s and δ in different units (one absolute, one relative).', 'Rounding the result down.', 'Choosing an unrealistically small bias and planning hundreds of measurements.'],
    },
    related: ['bias', 't-test-known', 'sample-size-power'],
  },

  'samples-number': {
    concept: {
      tr: 'Heterojen bir yığının ortalama bileşimini istenen hassasiyetle bulmak için kaç ayrı numune analiz edilmelidir? Numune sayısı arttıkça ortalamanın belirsizliği √n ile azalır.\n\nGereken sayı, örnekleme standart sapması ile kabul edilebilir hatanın oranına bağlıdır. Hesap t değerini içerdiği, t de n’ye bağlı olduğu için sonuç adım adım (iteratif) bulunur.',
      en: 'How many separate samples must be analysed to find the mean composition of a heterogeneous lot with the required precision? The uncertainty of the mean falls with √n as the number of samples grows.\n\nThe number needed depends on the ratio of the sampling standard deviation to the acceptable error. Because the calculation contains t, which itself depends on n, the answer is found iteratively.',
    },
    meaning: {
      tr: 'Ortalamanın güven aralığının yarı genişliği e = t · s_s / √n’dir. n’ye göre çözülünce n = (t · s_s / e)².\n\nt, n − 1 serbestlik derecesine bağlı olduğundan:\n• İlk tahmin t yerine z ile yapılır (%95 için 1,96).\n• Bulunan n ile t(n − 1) okunur ve n yeniden hesaplanır.\n• n değişmeyene kadar sürdürülür; iki değer arasında gidip gelirse büyük olan alınır.\n\ns_s ve e aynı birimde (genellikle bağıl yüzde) olmalıdır.',
      en: 'The half-width of the confidence interval of the mean is e = t · s_s / √n. Solving for n gives n = (t · s_s / e)².\n\nSince t depends on n − 1 degrees of freedom:\n• The first estimate uses z instead of t (1.96 for 95%).\n• t(n − 1) is read for that n and n is recomputed.\n• This continues until n stops changing; if it alternates between two values, the larger is taken.\n\ns_s and e must be in the same unit (usually relative percent).',
    },
    usage: {
      tr: [
        'Örnekleme planında analiz edilecek numune sayısını belirlemek.',
        'Gereken sayı çok büyükse daha büyük numune kütlesi (Ingamells) ya da daha iyi karıştırma düşünülmelidir.',
        'Analiz hatasının örnekleme hatasına göre küçük olduğu varsayılır.',
      ],
      en: [
        'Setting the number of samples in a sampling plan.',
        'If the number is very large, consider larger sample masses (Ingamells) or better mixing.',
        'Assumes the analytical error is small compared with the sampling error.',
      ],
    },
    solution: {
      tr: [
        'Verilen (aracın örnek değerleri): s_s = %2,0, izin verilen hata e = %0,80, %95 güven.',
        'İlk tahmin z ile: n = (1,960 × 2,0 / 0,80)² = 24,0 → 24.',
        't(23) = 2,069 ile n = 26,7 → 27; t(26) = 2,056 ile n = 26,4 → 26; t(25) = 2,060 ile tekrar 27 çıkar.',
        'Sonuç: değerler 26 ile 27 arasında gidip geldiği için büyük olan alınır: 27 numune.',
      ],
      en: [
        'Given (the tool’s sample values): s_s = 2.0%, allowed error e = 0.80%, 95% confidence.',
        'First estimate with z: n = (1.960 × 2.0 / 0.80)² = 24.0 → 24.',
        'With t(23) = 2.069, n = 26.7 → 27; with t(26) = 2.056, n = 26.4 → 26; with t(25) = 2.060 it is 27 again.',
        'Result: since the values alternate between 26 and 27, the larger is taken: 27 samples.',
      ],
    },
    mistakes: {
      tr: ['İterasyonu ilk z tahmininde bırakmak (24 numune, gerekenden az).', 's_s ile e’yi farklı birimlerde girmek.', 'Sonucu aşağı yuvarlamak.'],
      en: ['Stopping at the first z estimate (24 samples, fewer than needed).', 'Entering s_s and e in different units.', 'Rounding the result down.'],
    },
    related: ['sampling-variance', 'ingamells', 'descriptive'],
  },
};

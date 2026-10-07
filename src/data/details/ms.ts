import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Mass Spectrometry module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const MS_DETAILS: Record<string, ToolDetail> = {
  'ms-resolution': {
    concept: {
      tr: 'Kütle spektrometresinde çözünürlük (ayırma gücü, R), cihazın kütle/yük oranları (m/z) birbirine çok yakın iki iyonu ayrı pikler olarak gösterebilme yeteneğidir. Aynı nominal kütleye sahip ama element bileşimi farklı iyonları (izobarları) ayırmak için yüksek çözünürlük gerekir. Klasik örnek m/z 28’deki N₂⁺ (28,0061) ve CO⁺ (27,9949) iyonlarıdır: nominal kütleleri aynıdır, tam kütleleri yalnızca 0,0112 u farklıdır.',
      en: 'In mass spectrometry resolution (resolving power, R) is the ability of an instrument to show two ions with very similar mass-to-charge ratios (m/z) as separate peaks. High resolution is needed to separate ions that share a nominal mass but differ in elemental composition (isobars). The classic example is N₂⁺ (28.0061) and CO⁺ (27.9949) at m/z 28: the same nominal mass, exact masses only 0.0112 u apart.',
    },
    meaning: {
      tr: 'R = m / Δm. Burada m, iki pikin (ortalama) kütlesi; Δm, ayrılabilen en küçük kütle farkıdır. R birimsizdir.\n\nΔm’nin nasıl ölçüldüğüne göre iki yaygın tanım vardır:\n• %10 vadi tanımı: eşit yükseklikteki iki pik arasındaki vadi, pik yüksekliğinin %10’u kadar ise pikler ayrılmış sayılır. Manyetik sektör cihazlarında kullanılır.\n• FWHM tanımı: Δm, tek bir pikin yarı yükseklikteki genişliğidir. TOF, Orbitrap ve FT-ICR cihazlarında kullanılır.\n\nAynı cihaz için FWHM tanımı daha büyük bir R değeri verir; bu nedenle karşılaştırmada tanım belirtilmelidir.\n\nR sabit olsa bile ayrılabilen Δm kütleyle büyür: R = 1000 olan bir cihaz m = 100’de 0,1 u, m = 1000’de 1 u farkı ayırır.',
      en: 'R = m / Δm, where m is the (mean) mass of the two peaks and Δm the smallest mass difference that can be separated. R is dimensionless.\n\nTwo common definitions depend on how Δm is measured:\n• 10% valley definition: two equal peaks count as separated when the valley between them is 10% of the peak height. Used for magnetic-sector instruments.\n• FWHM definition: Δm is the width of a single peak at half height. Used for TOF, Orbitrap and FT-ICR instruments.\n\nFor the same instrument the FWHM definition gives a larger R, so the definition must be stated when comparing.\n\nEven at constant R the separable Δm grows with mass: an instrument with R = 1000 separates 0.1 u at m = 100 but only 1 u at m = 1000.',
    },
    usage: {
      tr: [
        'İki iyonu ayırmak için gereken en düşük çözünürlüğü bulmak ve cihaz seçmek.',
        'Birim (nominal) çözünürlük, Δm ≈ 1 u demektir; kuadrupol ve iyon tuzağı cihazlarında tipiktir.',
        'Tam kütle ölçümü ve izobar ayrımı için yüksek çözünürlüklü cihazlar (TOF, Orbitrap, FT-ICR, çift odaklamalı sektör) gerekir.',
        'Literatürde “çözünürlük” ve “ayırma gücü” terimleri farklı anlamlarda kullanılabilir; formüldeki tanımı esas alın.',
      ],
      en: [
        'Finding the minimum resolution needed to separate two ions and choosing an instrument.',
        'Unit (nominal) resolution means Δm ≈ 1 u; typical of quadrupole and ion-trap instruments.',
        'Accurate-mass work and separating isobars need high-resolution instruments (TOF, Orbitrap, FT-ICR, double-focusing sector).',
        'The terms “resolution” and “resolving power” are used inconsistently in the literature; go by the definition in the formula.',
      ],
    },
    solution: {
      tr: [
        'Verilen: N₂⁺ = 28,0061 u, CO⁺ = 27,9949 u; m ≈ 28,0.',
        'Kütle farkı: Δm = 28,0061 − 27,9949 = 0,0112 u.',
        'R = m / Δm = 28,0 / 0,0112.',
        'Sonuç: R = 2500; bu iki iyonu ayırmak için en az 2500 çözünürlük gerekir.',
      ],
      en: [
        'Given: N₂⁺ = 28.0061 u, CO⁺ = 27.9949 u; m ≈ 28.0.',
        'Mass difference: Δm = 28.0061 − 27.9949 = 0.0112 u.',
        'R = m / Δm = 28.0 / 0.0112.',
        'Result: R = 2500; at least 2500 resolution is needed to separate these two ions.',
      ],
    },
    mistakes: {
      tr: [
        'Δm yerine nominal kütle farkını (burada 0) ya da m yerine Δm’yi paya koymak.',
        'Farklı tanımlarla (%10 vadi ve FWHM) verilmiş çözünürlükleri doğrudan karşılaştırmak.',
        'Çözünürlüğü kütle doğruluğuyla karıştırmak: yüksek çözünürlük pikleri ayırır, doğruluk ise pikin konumunun ne kadar doğru ölçüldüğünü gösterir.',
      ],
      en: [
        'Using the nominal mass difference (zero here) for Δm, or swapping m and Δm.',
        'Comparing resolutions quoted with different definitions (10% valley vs FWHM) directly.',
        'Confusing resolution with mass accuracy: resolution separates peaks, accuracy says how correctly a peak position is measured.',
      ],
    },
    related: ['mass-accuracy', 'cyclotron', 'tof', 'isotope-pattern'],
  },

  'mass-accuracy': {
    concept: {
      tr: 'Yüksek çözünürlüklü kütle spektrometrisinde (HRMS) bir iyonun m/z değeri birkaç ondalık basamağa kadar ölçülür. Element atomlarının kütleleri tam sayı olmadığından (¹H = 1,007825; ¹⁶O = 15,994915; ¹⁴N = 14,003074 u), her element bileşiminin kendine özgü bir tam kütlesi vardır. Ölçülen değer, aday formülün hesaplanan (teorik) kütlesiyle karşılaştırılır; aradaki fark milyonda kısım (ppm) olarak verilen kütle doğruluğudur.',
      en: 'In high-resolution mass spectrometry (HRMS) the m/z of an ion is measured to several decimal places. Because atomic masses are not whole numbers (¹H = 1.007825; ¹⁶O = 15.994915; ¹⁴N = 14.003074 u), each elemental composition has its own exact mass. The measured value is compared with the calculated (theoretical) mass of a candidate formula; the difference expressed in parts per million (ppm) is the mass accuracy.',
    },
    meaning: {
      tr: 'Δ (ppm) = (m_ölçülen − m_teorik) / m_teorik × 10⁶.\n\nBağıl bir hata olduğundan farklı kütlelerdeki ölçümler karşılaştırılabilir. Mutlak hata ile ilişkisi: Δm (mDa) = Δ (ppm) × m / 1000. Örneğin m/z 500’de 2 ppm, 1 mDa’dır.\n\nİşaret önemlidir: pozitif değer ölçülen kütlenin teorik değerden büyük olduğunu gösterir.\n\nTeorik kütle, en bol izotoplardan (monoizotopik) hesaplanır. İyonlar için elektron kütlesi (0,000549 u) hesaba katılır: [M+H]⁺ için atomik H değil, proton kütlesi (1,007276 u) eklenir.',
      en: 'Δ (ppm) = (m_measured − m_theoretical) / m_theoretical × 10⁶.\n\nBeing a relative error, it allows measurements at different masses to be compared. Relation to absolute error: Δm (mDa) = Δ (ppm) × m / 1000. For example, 2 ppm at m/z 500 is 1 mDa.\n\nThe sign matters: a positive value means the measured mass is higher than the theoretical one.\n\nThe theoretical mass is computed from the most abundant isotopes (monoisotopic). For ions the electron mass (0.000549 u) is taken into account: for [M+H]⁺ add the proton mass (1.007276 u), not the H atom.',
    },
    usage: {
      tr: [
        'Bir iyonun element bileşimini doğrulamak; formül önerisinde sık kullanılan ölçüt, hatanın birkaç ppm’in (çoğunlukla 5 ppm) altında olmasıdır.',
        'Cihaz kalibrasyonunu bilinen kütleli standartlarla (kilitleme kütlesi) kontrol etmek.',
        'Kütle arttıkça aynı ppm aralığına uyan formül sayısı artar; doğruluk tek başına yetmez, izotop dağılımıyla birlikte değerlendirin.',
      ],
      en: [
        'Confirming the elemental composition of an ion; a common criterion for formula assignment is an error below a few ppm (often 5 ppm).',
        'Checking instrument calibration with standards of known mass (lock mass).',
        'As mass increases, more formulas fit within the same ppm window; accuracy alone is not enough, combine it with the isotope pattern.',
      ],
    },
    solution: {
      tr: [
        'Verilen: kafeinin protonlanmış iyonu [C₈H₁₀N₄O₂ + H]⁺; teorik m/z = 195,08765, ölçülen m/z = 195,0882.',
        'Mutlak fark: 195,0882 − 195,08765 = 0,00055 u (0,55 mDa).',
        'Δ = 0,00055 / 195,08765 × 10⁶.',
        'Sonuç: Δ = +2,819 ppm; formül önerisi için tipik 5 ppm sınırının içindedir.',
      ],
      en: [
        'Given: protonated caffeine [C₈H₁₀N₄O₂ + H]⁺; theoretical m/z = 195.08765, measured m/z = 195.0882.',
        'Absolute difference: 195.0882 − 195.08765 = 0.00055 u (0.55 mDa).',
        'Δ = 0.00055 / 195.08765 × 10⁶.',
        'Result: Δ = +2.819 ppm; within the typical 5 ppm window for formula assignment.',
      ],
    },
    mistakes: {
      tr: [
        'Teorik kütlede elektron kütlesini unutmak: [M+H]⁺ için H atomu (1,007825) eklemek kütleyi 0,00055 u artırır; bu, m/z 195’te tek başına yaklaşık 2,8 ppm’lik hatadır.',
        'Ortalama molar kütleyi (ör. 194,19 g/mol) monoizotopik kütle yerine kullanmak.',
        'Paydaya ölçülen kütleyi koymak ya da 10⁶ yerine 100 ile çarpmak (yüzde hata).',
      ],
      en: [
        'Forgetting the electron mass in the theoretical value: adding an H atom (1.007825) for [M+H]⁺ raises the mass by 0.00055 u, by itself an error of about 2.8 ppm at m/z 195.',
        'Using the average molar mass (e.g. 194.19 g/mol) instead of the monoisotopic mass.',
        'Dividing by the measured mass, or multiplying by 100 instead of 10⁶ (percent error).',
      ],
    },
    related: ['ms-resolution', 'isotope-pattern', 'molar-mass'],
  },

  'magnetic-sector': {
    concept: {
      tr: 'Manyetik sektör analizörü, kütle spektrometrisinin klasik ayırma yöntemidir. İyon kaynağında oluşan iyonlar V gerilimiyle hızlandırılır ve hepsi aynı kinetik enerjiyi (zeV) kazanır. Ardından manyetik alana dik girerler ve Lorentz kuvvetiyle dairesel bir yay çizerler. Yörünge yarıçapı iyonun momentumuna bağlıdır; böylece aynı enerjideki iyonlar m/z değerlerine göre farklı yollara ayrılır. Yarığı ve dedektörü sabit (r sabit) olan bir cihazda B ya da V taranarak iyonlar sırayla dedektöre gönderilir.',
      en: 'The magnetic-sector analyser is the classical separation method of mass spectrometry. Ions formed in the source are accelerated through a voltage V and all gain the same kinetic energy (zeV). They then enter a magnetic field at right angles and follow a circular arc under the Lorentz force. The radius depends on the ion’s momentum, so ions of equal energy are spread out according to m/z. With a fixed slit and detector (fixed r), scanning B or V brings the ions to the detector one after another.',
    },
    meaning: {
      tr: 'İki denklem birleştirilir:\n• Hızlandırma: zeV = ½ m v².\n• Dairesel hareket: manyetik kuvvet merkezcil kuvvete eşittir, zevB = m v² / r → v = zeBr / m.\n\nv yok edilince m/z = B² r² e / (2V) bulunur. Burada m kg, e = 1,602 × 10⁻¹⁹ C’dir; sonucu u (atomik kütle birimi) cinsinden almak için 1,6605 × 10⁻²⁷ kg/u’ya bölünür.\n\nm/z, B²’yle orantılıdır: alanı iki katına çıkarmak dört kat büyük m/z’yi aynı yörüngeye getirir. Tek odaklamalı cihazlarda iyonların kinetik enerji dağılımı çözünürlüğü sınırlar. Çift odaklamalı cihazlarda manyetik sektörün önüne bir elektrostatik analizör konarak bu dağılım düzeltilir.',
      en: 'Two equations are combined:\n• Acceleration: zeV = ½ m v².\n• Circular motion: magnetic force equals centripetal force, zevB = m v² / r → v = zeBr / m.\n\nEliminating v gives m/z = B² r² e / (2V). Here m is in kg and e = 1.602 × 10⁻¹⁹ C; dividing by 1.6605 × 10⁻²⁷ kg/u gives the result in u (atomic mass units).\n\nm/z is proportional to B²: doubling the field brings ions of four times the m/z onto the same path. In single-focusing instruments the kinetic-energy spread of the ions limits resolution. Double-focusing instruments place an electrostatic analyser before the magnet to correct for this spread.',
    },
    usage: {
      tr: [
        'Belirli bir B, r ve V için dedektöre ulaşan m/z’yi ya da belirli bir m/z için gereken alanı bulmak.',
        'Çift odaklamalı sektör cihazları yüksek çözünürlük ve tam kütle ölçümü sağlar; izotop oranı ölçümünde de kullanılır.',
        'Formül, iyonların hızlandırmadan önce durgun olduğunu ve alana dik girdiğini varsayar.',
      ],
      en: [
        'Finding the m/z that reaches the detector for given B, r and V, or the field needed for a given m/z.',
        'Double-focusing sector instruments offer high resolution and accurate mass; they are also used for isotope-ratio measurements.',
        'The formula assumes ions start at rest before acceleration and enter the field at right angles.',
      ],
    },
    solution: {
      tr: [
        'Verilen: B = 0,5 T, r = 30 cm = 0,30 m, V = 3000 V, z = 1.',
        'B² r² = 0,25 T² × 0,09 m² = 0,0225 T²·m².',
        'm = B² r² e / (2V) = 0,0225 × 1,6022 × 10⁻¹⁹ / 6000 = 6,008 × 10⁻²⁵ kg; u’ya çevirme: 6,008 × 10⁻²⁵ / 1,6605 × 10⁻²⁷.',
        'Sonuç: m/z = 361,8; bu koşullarda dedektöre m/z ≈ 362 olan tek yüklü iyonlar ulaşır.',
      ],
      en: [
        'Given: B = 0.5 T, r = 30 cm = 0.30 m, V = 3000 V, z = 1.',
        'B² r² = 0.25 T² × 0.09 m² = 0.0225 T²·m².',
        'm = B² r² e / (2V) = 0.0225 × 1.6022 × 10⁻¹⁹ / 6000 = 6.008 × 10⁻²⁵ kg; to u: 6.008 × 10⁻²⁵ / 1.6605 × 10⁻²⁷.',
        'Result: m/z = 361.8; under these conditions singly charged ions of m/z ≈ 362 reach the detector.',
      ],
    },
    mistakes: {
      tr: [
        'r’yi cm olarak SI formülüne koymak (m/z 10⁴ kat hatalı çıkar).',
        'm/z’nin B ile doğrusal değiştiğini sanmak; B²’yle orantılıdır.',
        'Sonucu kg cinsinden bırakıp atomik kütle birimine çevirmemek.',
      ],
      en: [
        'Putting r in cm into the SI formula (m/z off by 10⁴).',
        'Assuming m/z changes linearly with B; it is proportional to B².',
        'Leaving the result in kg instead of converting to atomic mass units.',
      ],
    },
    related: ['tof', 'cyclotron', 'ms-resolution'],
  },

  tof: {
    concept: {
      tr: 'Uçuş zamanı (TOF) analizöründe iyonlar kısa bir sinyalle (puls) aynı anda hızlandırılır ve alansız bir uçuş tüpüne gönderilir. Hepsi aynı kinetik enerjiye sahip olduğundan hafif iyonlar daha hızlı gider ve dedektöre önce ulaşır. Varış süresi ölçülerek m/z bulunur. İlke olarak üst kütle sınırı yoktur; bu nedenle MALDI gibi pulslu iyon kaynaklarıyla ve büyük biyomoleküllerin analizinde yaygın kullanılır.',
      en: 'In a time-of-flight (TOF) analyser ions are accelerated together by a short pulse and sent into a field-free flight tube. Since they all have the same kinetic energy, light ions travel faster and reach the detector first. Measuring the arrival time gives m/z. In principle there is no upper mass limit, so TOF is widely used with pulsed sources such as MALDI and for large biomolecules.',
    },
    meaning: {
      tr: 'Hızlandırmada zeV = ½ m v² olduğundan v = √(2zeV / m). Uçuş süresi t = L / v:\nt = L · √(m / (2 z e V)).\n\nSonuçlar:\n• t, √(m/z) ile orantılıdır; kütle dört katına çıkınca süre ancak iki katına çıkar.\n• Komşu kütleler arasındaki süre farkı Δt ≈ t · Δm / (2m) kadardır; bu nedenle uzun uçuş yolu ve hızlı dedektör çözünürlüğü artırır.\n\nGerçek cihazlarda başlangıç enerjisi ve konum dağılımı çözünürlüğü düşürür. Yansıtıcı (reflektron) bu dağılımı düzeltir; gecikmeli iyon çekme (delayed extraction) de aynı amaçla kullanılır. Pratikte kalibrasyon t = a·√(m/z) + t₀ biçiminde bilinen kütlelerle yapılır.',
      en: 'In acceleration zeV = ½ m v², so v = √(2zeV / m). The flight time is t = L / v:\nt = L · √(m / (2 z e V)).\n\nConsequences:\n• t is proportional to √(m/z); quadrupling the mass only doubles the time.\n• Neighbouring masses differ in time by Δt ≈ t · Δm / (2m), so a long flight path and a fast detector improve resolution.\n\nIn real instruments the spread in initial energy and position lowers resolution. A reflectron corrects this spread, and delayed extraction serves the same purpose. In practice the instrument is calibrated with known masses as t = a·√(m/z) + t₀.',
    },
    usage: {
      tr: [
        'Belirli bir m/z için uçuş süresini ya da ölçülen süreden m/z’yi tahmin etmek.',
        'MALDI-TOF ile protein, peptit ve polimerlerin analizi; Q-TOF ile tam kütle ölçümü.',
        'Formül, hızlandırma bölgesinde geçen süreyi ve başlangıç kinetik enerjisini ihmal eder.',
      ],
      en: [
        'Estimating the flight time for a given m/z, or m/z from a measured time.',
        'MALDI-TOF analysis of proteins, peptides and polymers; accurate mass with Q-TOF.',
        'The formula neglects the time spent in the acceleration region and the initial kinetic energy.',
      ],
    },
    solution: {
      tr: [
        'Verilen: L = 1 m, m/z = 1000 (z = 1), V = 20 kV = 20000 V.',
        'm = 1000 u × 1,6605 × 10⁻²⁷ kg/u = 1,6605 × 10⁻²⁴ kg; 2zeV = 2 × 1,6022 × 10⁻¹⁹ C × 20000 V = 6,409 × 10⁻¹⁵ J.',
        't = 1 m × √(1,6605 × 10⁻²⁴ / 6,409 × 10⁻¹⁵) = 1 m × 1,610 × 10⁻⁵ s/m (iyon hızı ≈ 6,2 × 10⁴ m/s).',
        'Sonuç: t = 16,1 µs; m/z 1001 olan iyon yalnızca yaklaşık 8 ns sonra ulaşır.',
      ],
      en: [
        'Given: L = 1 m, m/z = 1000 (z = 1), V = 20 kV = 20000 V.',
        'm = 1000 u × 1.6605 × 10⁻²⁷ kg/u = 1.6605 × 10⁻²⁴ kg; 2zeV = 2 × 1.6022 × 10⁻¹⁹ C × 20000 V = 6.409 × 10⁻¹⁵ J.',
        't = 1 m × √(1.6605 × 10⁻²⁴ / 6.409 × 10⁻¹⁵) = 1 m × 1.610 × 10⁻⁵ s/m (ion velocity ≈ 6.2 × 10⁴ m/s).',
        'Result: t = 16.1 µs; an ion of m/z 1001 arrives only about 8 ns later.',
      ],
    },
    mistakes: {
      tr: [
        'Uçuş süresinin kütleyle doğrusal arttığını sanmak; √m ile artar.',
        'Gerilimi kV olarak bırakmak ya da kütleyi g/mol olarak kg yerine koymak.',
        'Çok yüklü iyonlarda z’yi unutmak: z = 2 olan iyon, m/z’si yarı olan tek yüklü iyonla aynı sürede gelir.',
      ],
      en: [
        'Assuming flight time grows linearly with mass; it grows with √m.',
        'Leaving the voltage in kV, or putting the mass in g/mol instead of kg.',
        'Forgetting z for multiply charged ions: an ion with z = 2 arrives at the same time as a singly charged ion of half its mass.',
      ],
    },
    related: ['magnetic-sector', 'cyclotron', 'ms-resolution'],
  },

  cyclotron: {
    concept: {
      tr: 'Güçlü ve düzgün bir manyetik alana konan iyon, alana dik düzlemde dairesel bir yörüngede döner. Bu dönmenin frekansı (siklotron frekansı) yalnızca m/z’ye ve alan şiddetine bağlıdır, iyonun hızına bağlı değildir. Fourier dönüşümlü iyon siklotron rezonansı (FT-ICR) cihazında iyonlar bir tuzakta (Penning tuzağı) tutulur, bir radyofrekans pulsuyla uyarılarak eş fazlı dönmeye başlar ve plakalarda oluşturdukları görüntü akımı kaydedilir. Bu sinyalin Fourier dönüşümü, tüm iyonların frekanslarını ve dolayısıyla m/z değerlerini aynı anda verir.',
      en: 'An ion placed in a strong uniform magnetic field circles in the plane perpendicular to the field. The frequency of this motion (the cyclotron frequency) depends only on m/z and the field strength, not on the ion’s velocity. In a Fourier-transform ion cyclotron resonance (FT-ICR) instrument the ions are held in a trap (Penning trap), excited by a radio-frequency pulse into coherent motion, and the image current they induce on detection plates is recorded. Fourier transformation of this signal gives the frequencies, hence the m/z values, of all ions at once.',
    },
    meaning: {
      tr: 'Manyetik kuvvet merkezcil kuvvete eşitlenir: zevB = m v² / r → açısal frekans ω = v / r = zeB / m. Frekans f = ω / 2π olduğundan:\nf = z e B / (2π m).\n\nf, m/z ile ters orantılıdır. Hız formülde sadeleştiğinden kinetik enerji dağılımı frekansı etkilemez. Frekans çok doğru ölçülebildiği için FT-ICR, kütle spektrometreleri içinde en yüksek çözünürlük ve kütle doğruluğunu sağlar. Çözünürlük, alan şiddeti ve sinyalin kaydedildiği süre arttıkça artar.\n\nGerçek tuzakta iyonları eksen boyunca tutan elektrik alanı nedeniyle gözlenen frekans bu ideal değerden biraz düşüktür; bu yüzden cihaz bilinen kütlelerle kalibre edilir.',
      en: 'Setting the magnetic force equal to the centripetal force: zevB = m v² / r → angular frequency ω = v / r = zeB / m. Since f = ω / 2π:\nf = z e B / (2π m).\n\nf is inversely proportional to m/z. The velocity cancels, so the kinetic-energy spread does not affect the frequency. Because frequency can be measured very precisely, FT-ICR offers the highest resolution and mass accuracy of all mass analysers. Resolution increases with field strength and with the length of the recorded signal.\n\nIn a real trap the electric field that confines ions along the axis makes the observed frequency slightly lower than this ideal value, so the instrument is calibrated with known masses.',
    },
    usage: {
      tr: [
        'Belirli bir alanda verilen m/z’nin siklotron frekansını ya da ölçülen frekanstan m/z’yi bulmak.',
        'FT-ICR, karmaşık karışımlarda (petrol, doğal organik madde, proteomik) element bileşimi belirlemede kullanılır.',
        'Orbitrap da frekans ölçer, ancak orada iyonların eksenel salınım frekansı √(z/m) ile orantılıdır; bu eşitlik Orbitrap için geçerli değildir.',
      ],
      en: [
        'Finding the cyclotron frequency of a given m/z in a given field, or m/z from a measured frequency.',
        'FT-ICR is used to assign elemental compositions in complex mixtures (petroleum, natural organic matter, proteomics).',
        'The Orbitrap also measures a frequency, but there the axial oscillation frequency is proportional to √(z/m); this equation does not apply to it.',
      ],
    },
    solution: {
      tr: [
        'Verilen: m/z = 500 (z = 1), B = 7 T.',
        'm = 500 u × 1,6605 × 10⁻²⁷ kg/u = 8,303 × 10⁻²⁵ kg; zeB = 1,6022 × 10⁻¹⁹ C × 7 T = 1,1215 × 10⁻¹⁸ C·T.',
        'f = zeB / (2π m) = 1,1215 × 10⁻¹⁸ / (2π × 8,303 × 10⁻²⁵) = 2,150 × 10⁵ Hz.',
        'Sonuç: f ≈ 215 kHz; aynı alanda m/z 1000 olan iyon yarı frekansta (≈ 107,5 kHz) döner.',
      ],
      en: [
        'Given: m/z = 500 (z = 1), B = 7 T.',
        'm = 500 u × 1.6605 × 10⁻²⁷ kg/u = 8.303 × 10⁻²⁵ kg; zeB = 1.6022 × 10⁻¹⁹ C × 7 T = 1.1215 × 10⁻¹⁸ C·T.',
        'f = zeB / (2π m) = 1.1215 × 10⁻¹⁸ / (2π × 8.303 × 10⁻²⁵) = 2.150 × 10⁵ Hz.',
        'Result: f ≈ 215 kHz; in the same field an ion of m/z 1000 circles at half the frequency (≈ 107.5 kHz).',
      ],
    },
    mistakes: {
      tr: [
        'Açısal frekansı (ω = zeB/m, rad/s) frekans (f, Hz) yerine vermek; arada 2π farkı vardır.',
        'Kütleyi g/mol ya da u olarak doğrudan SI formülüne koymak.',
        'Frekansın m/z ile arttığını sanmak; ağır iyonlar daha yavaş döner.',
      ],
      en: [
        'Reporting the angular frequency (ω = zeB/m, rad/s) instead of the frequency (f, Hz); they differ by 2π.',
        'Putting the mass in g/mol or u directly into the SI formula.',
        'Thinking the frequency rises with m/z; heavier ions circle more slowly.',
      ],
    },
    related: ['ms-resolution', 'magnetic-sector', 'mass-accuracy'],
  },

  'isotope-pattern': {
    concept: {
      tr: 'Elementlerin çoğu birden fazla kararlı izotopa sahiptir. Bu yüzden bir molekülün kütle spektrumunda tek bir moleküler iyon piki değil, M, M+1, M+2… şeklinde bir izotop dağılımı görülür. Piklerin bağıl şiddetleri elementlerin doğal izotop bolluklarından hesaplanabilir ve molekülde hangi elementlerden kaçar tane bulunduğuna dair güçlü ipuçları verir. Klor ve brom özellikle tanınması kolay desenler oluşturur.\n\nAraç ayrıca halka + çift bağ sayısını (DBE, doymamışlık derecesi) hesaplar. DBE, önerilen bir formülün yapısal olarak anlamlı olup olmadığını denetlemeye yarar.',
      en: 'Most elements have more than one stable isotope. The mass spectrum of a molecule therefore shows not one molecular-ion peak but an isotope pattern of M, M+1, M+2… peaks. Their relative intensities can be calculated from natural isotopic abundances and give strong clues about which elements, and how many of each, the molecule contains. Chlorine and bromine give particularly recognisable patterns.\n\nThe tool also computes rings plus double bonds (DBE, degree of unsaturation), which checks whether a proposed formula makes structural sense.',
    },
    meaning: {
      tr: 'Önemli izotop desenleri:\n• ¹³C (%1,07): her karbon atomu M+1 pikine yaklaşık %1,1 katkı yapar; M+1 / M ≈ %1,1 × C sayısı. Böylece karbon sayısı kabaca tahmin edilebilir.\n• Cl (³⁵Cl %75,8, ³⁷Cl %24,2): bir Cl için M : M+2 ≈ 3 : 1; iki Cl için yaklaşık 100 : 64 : 10.\n• Br (⁷⁹Br %50,7, ⁸¹Br %49,3): bir Br için M : M+2 ≈ 1 : 1; üç Br için yaklaşık 1 : 3 : 3 : 1.\n• S (³⁴S %4,25): M+2’ye belirgin katkı yapar.\n\nŞiddetler, her atomun izotop dağılımının art arda çarpılmasıyla (binom/multinom dağılım) bulunur ve en şiddetli pike göre % olarak verilir.\n\nDBE = C − (H + X)/2 + N/2 + 1 (X: halojenler). İki değerlikli O ve S formüle girmez. Her halka ya da π bağı 1 sayılır: benzen için DBE = 4 (bir halka + üç C=C).',
      en: 'Key isotope patterns:\n• ¹³C (1.07%): each carbon adds about 1.1% to the M+1 peak; M+1 / M ≈ 1.1% × number of C. This gives a rough carbon count.\n• Cl (³⁵Cl 75.8%, ³⁷Cl 24.2%): one Cl gives M : M+2 ≈ 3 : 1; two Cl about 100 : 64 : 10.\n• Br (⁷⁹Br 50.7%, ⁸¹Br 49.3%): one Br gives M : M+2 ≈ 1 : 1; three Br about 1 : 3 : 3 : 1.\n• S (³⁴S 4.25%): contributes noticeably to M+2.\n\nIntensities follow from successively combining the isotope distribution of every atom (binomial/multinomial distribution) and are given as % of the most intense peak.\n\nDBE = C − (H + X)/2 + N/2 + 1 (X: halogens). Divalent O and S do not appear. Each ring or π bond counts 1: benzene has DBE = 4 (one ring + three C=C).',
    },
    usage: {
      tr: [
        'Bir moleküler iyonun Cl, Br ya da S içerip içermediğini M+2 desenine bakarak anlamak.',
        'Önerilen formülü hem tam kütle hem izotop deseniyle doğrulamak.',
        'DBE, nötral molekülün formülü için tam sayı çıkar; [M+H]⁺ gibi çift elektronlu iyonların formülünde yarım sayı çıkar (kafein [M+H]⁺, C₈H₁₁N₄O₂⁺: 5,5).',
        'Azot kuralı ile birlikte kullanın: nominal kütlesi tek sayı olan bir molekül tek sayıda N atomu içerir.',
      ],
      en: [
        'Telling from the M+2 pattern whether a molecular ion contains Cl, Br or S.',
        'Checking a proposed formula against both the exact mass and the isotope pattern.',
        'DBE is an integer for the formula of a neutral molecule; for even-electron ions such as [M+H]⁺ it comes out as a half-integer (protonated caffeine, C₈H₁₁N₄O₂⁺: 5.5).',
        'Use it with the nitrogen rule: a molecule with an odd nominal mass contains an odd number of N atoms.',
      ],
    },
    solution: {
      tr: [
        'Aracın örnek formülü C₆H₅Br (bromobenzen). Monoizotopik kütle (¹²C, ¹H, ⁷⁹Br): 6 × 12,0000 + 5 × 1,00783 + 78,91834 = 155,9575 u (ortalama molar kütle 157,01 g/mol).',
        'M+1: altı karbon ve beş hidrojenin ağır izotoplarından gelir; araç %6,547 verir (≈ 6 × %1,1).',
        'M+2: ⁸¹Br/⁷⁹Br = 49,31 / 50,69 = 0,973 ve küçük ¹³C₂ katkısıyla %97,46 (M+3 = %6,371); M : M+2 ≈ 1 : 1 deseni tek Br’yi gösterir.',
        'DBE = 6 − (5 + 1)/2 + 0 + 1 = 4 → bir benzen halkası (1 halka + 3 C=C).',
      ],
      en: [
        'Tool sample formula C₆H₅Br (bromobenzene). Monoisotopic mass (¹²C, ¹H, ⁷⁹Br): 6 × 12.0000 + 5 × 1.00783 + 78.91834 = 155.9575 u (average molar mass 157.01 g/mol).',
        'M+1: from the heavy isotopes of six carbons and five hydrogens; the tool gives 6.547% (≈ 6 × 1.1%).',
        'M+2: ⁸¹Br/⁷⁹Br = 49.31 / 50.69 = 0.973 plus a small ¹³C₂ contribution gives 97.46% (M+3 = 6.371%); the M : M+2 ≈ 1 : 1 pattern indicates one Br.',
        'DBE = 6 − (5 + 1)/2 + 0 + 1 = 4 → one benzene ring (1 ring + 3 C=C).',
      ],
    },
    mistakes: {
      tr: [
        'Br içeren bir bileşiğin M+2 pikini ayrı bir bileşiğin moleküler iyonu sanmak.',
        'Yüksek çözünürlüklü ölçümde ortalama molar kütleyi monoizotopik kütle yerine kullanmak.',
        'Büyük moleküllerde M pikinin her zaman en şiddetli pik olduğunu varsaymak: yaklaşık 90’dan fazla karbonda M+1, M’den büyük olur.',
      ],
      en: [
        'Taking the M+2 peak of a bromine compound for the molecular ion of a different compound.',
        'Using the average molar mass instead of the monoisotopic mass in high-resolution work.',
        'Assuming the M peak is always the most intense in large molecules: beyond roughly 90 carbons M+1 exceeds M.',
      ],
    },
    related: ['molar-mass', 'mass-accuracy', 'ms-resolution'],
  },
};

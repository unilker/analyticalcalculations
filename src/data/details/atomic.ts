import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Atomic & X-ray spectroscopy module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const ATOMIC_DETAILS: Record<string, ToolDetail> = {
  boltzmann: {
    concept: {
      tr: 'Alev ya da plazmada atomlar, ısıl dengede enerji düzeylerine Boltzmann dağılımına göre dağılır. Atomik absorpsiyon (AAS) temel haldeki atomların ışığı soğurmasını, atomik emisyon (AES, ICP-OES) ise uyarılmış atomların ışıma yapmasını ölçer. Bu yüzden iki tekniğin sıcaklığa duyarlılığı çok farklıdır.\n\nTipik alev sıcaklıklarında uyarılmış atomların oranı çok küçüktür ve sıcaklıkla üstel olarak değişir. Emisyon sinyali bu küçük orana bağlı olduğundan sıcaklıktaki küçük dalgalanmalar emisyonu belirgin biçimde değiştirir, absorpsiyonu ise neredeyse etkilemez.',
      en: 'In a flame or plasma at thermal equilibrium, atoms are distributed among their energy levels according to the Boltzmann distribution. Atomic absorption (AAS) measures light absorbed by ground-state atoms, whereas atomic emission (AES, ICP-OES) measures light emitted by excited atoms. The two techniques therefore respond very differently to temperature.\n\nAt typical flame temperatures the fraction of excited atoms is tiny and changes exponentially with temperature. Because the emission signal depends on this small fraction, small temperature fluctuations change emission noticeably but barely affect absorption.',
    },
    meaning: {
      tr: 'N*/N₀ = (g*/g₀) · exp(−ΔE / kT), ΔE = h·c / λ.\n\n• N* ve N₀ uyarılmış ve temel haldeki atom sayılarıdır; g* ve g₀ bu düzeylerin istatistiksel ağırlıklarıdır (g = 2J + 1). Na 3s → 3p geçişinde (iki D çizgisi birlikte) g*/g₀ = 6/2 = 3.\n• k = 1,381 × 10⁻²³ J/K Boltzmann sabitidir; T mutlak sıcaklıktır (K).\n• ΔE büyüdükçe (λ kısaldıkça) oran küçülür: kısa dalga boylu çizgiler için uyarılmış nüfus daha da azdır.\n\nSıcaklık duyarlılığı: d ln(N*/N₀)/dT = ΔE / (kT²). N* ≪ N₀ olduğundan N₀ toplam atom sayısına neredeyse eşittir; bu nedenle absorpsiyon sinyali Boltzmann dağılımı açısından sıcaklıktan neredeyse bağımsızdır (sıcaklık atomlaşma verimini yine de etkiler).',
      en: 'N*/N₀ = (g*/g₀) · exp(−ΔE / kT), with ΔE = h·c / λ.\n\n• N* and N₀ are the numbers of excited and ground-state atoms; g* and g₀ are the statistical weights of the levels (g = 2J + 1). For the Na 3s → 3p transition (both D lines together) g*/g₀ = 6/2 = 3.\n• k = 1.381 × 10⁻²³ J/K is the Boltzmann constant; T is the absolute temperature (K).\n• A larger ΔE (shorter λ) gives a smaller ratio: excited populations are even lower for short-wavelength lines.\n\nTemperature sensitivity: d ln(N*/N₀)/dT = ΔE / (kT²). Since N* ≪ N₀, N₀ is practically the total number of atoms, so the absorption signal is almost independent of temperature as far as the Boltzmann distribution is concerned (temperature still affects atomisation efficiency).',
    },
    usage: {
      tr: [
        'AAS ile AES’in sıcaklık kararlılığı gereksinimlerini karşılaştırmak.',
        'Bir emisyon çizgisinin belirli bir alev ya da plazma sıcaklığında ne kadar uyarıldığını tahmin etmek.',
        'Tersinden, iki çizginin şiddet oranından plazma sıcaklığını tahmin etmek (Boltzmann grafiği yaklaşımı).',
        'Yalnızca ısıl denge (yerel termodinamik denge) varsayımı altında geçerlidir.',
      ],
      en: [
        'Comparing the temperature-stability requirements of AAS and AES.',
        'Estimating how strongly an emission line is excited at a given flame or plasma temperature.',
        'Conversely, estimating a plasma temperature from the intensity ratio of lines (the Boltzmann-plot approach).',
        'Valid only under thermal (local thermodynamic) equilibrium.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Na çizgisi λ = 589 nm, T = 2500 K, g*/g₀ = 3.',
        'ΔE = h·c / λ = (6,626 × 10⁻³⁴ J·s × 2,998 × 10⁸ m/s) / (589 × 10⁻⁹ m) = 3,373 × 10⁻¹⁹ J (2,105 eV); kT = 1,381 × 10⁻²³ J/K × 2500 K = 3,452 × 10⁻²⁰ J.',
        'ΔE / kT = 9,771; exp(−9,771) = 5,708 × 10⁻⁵. Aynı hesap 2510 K için yapılırsa oran yaklaşık %4 artar: yalnızca 10 K’lik değişim emisyonu %4 değiştirir.',
        'Sonuç: N*/N₀ = 3 × 5,708 × 10⁻⁵ = 1,713 × 10⁻⁴ (her 10 000 atomdan yaklaşık 2’si uyarılmış).',
      ],
      en: [
        'Given: Na line λ = 589 nm, T = 2500 K, g*/g₀ = 3.',
        'ΔE = h·c / λ = (6.626 × 10⁻³⁴ J·s × 2.998 × 10⁸ m/s) / (589 × 10⁻⁹ m) = 3.373 × 10⁻¹⁹ J (2.105 eV); kT = 1.381 × 10⁻²³ J/K × 2500 K = 3.452 × 10⁻²⁰ J.',
        'ΔE / kT = 9.771; exp(−9.771) = 5.708 × 10⁻⁵. Repeating the calculation at 2510 K raises the ratio by about 4%: a change of only 10 K changes the emission by 4%.',
        'Result: N*/N₀ = 3 × 5.708 × 10⁻⁵ = 1.713 × 10⁻⁴ (about 2 atoms in every 10 000 are excited).',
      ],
    },
    mistakes: {
      tr: [
        'Sıcaklığı °C olarak kullanmak; formül mutlak sıcaklık (K) ister.',
        'İstatistiksel ağırlık oranını unutmak ya da ters almak (g*/g₀).',
        'Dalga boyunu nm olarak bırakıp hc/λ’yı SI birimlerinde hesaplamak (10⁹ katlık hata).',
      ],
      en: [
        'Using the temperature in °C; the formula needs absolute temperature (K).',
        'Forgetting or inverting the statistical weight ratio (g*/g₀).',
        'Leaving the wavelength in nm while computing hc/λ in SI units (a factor of 10⁹).',
      ],
    },
    related: ['emission-calibration', 'photon-energy', 'wavelength-frequency'],
  },

  'emission-calibration': {
    concept: {
      tr: 'Atomik emisyonda (alev fotometrisi, ICP-OES) sinyal düşük derişimlerde derişimle orantılıdır. Ancak geniş bir derişim aralığında kalibrasyon eğrisi bükülür. Başlıca neden kendiliğinden soğurmadır (öz soğurma): derişim yüksekken, alev ya da plazmanın daha soğuk dış bölgelerindeki temel hal atomları, merkezde yayımlanan ışığın bir kısmını yeniden soğurur.\n\nBu durumda şiddet ile derişim arasındaki ilişki bir üs yasasıyla (I = k·Cⁿ) iyi tanımlanır ve log I – log C grafiği doğrusal olur.',
      en: 'In atomic emission (flame photometry, ICP-OES) the signal is proportional to concentration at low levels, but over a wide range the calibration curve bends. The main cause is self-absorption: at high concentrations, ground-state atoms in the cooler outer regions of the flame or plasma reabsorb part of the light emitted in the centre.\n\nThe relation between intensity and concentration is then well described by a power law (I = k·Cⁿ), and a plot of log I against log C is linear.',
    },
    meaning: {
      tr: 'I = k · Cⁿ ⇔ log I = log k + n · log C.\n\n• log–log grafiğinde eğim n, kesim noktası log k’dır; ikisi de standartlardan bulunur.\n• n = 1 doğrusal (orantılı) yanıttır. Öz soğurma nedeniyle yüksek derişimlerde n < 1 olur: derişim iki katına çıkınca sinyal iki kattan az artar.\n• Bilinmeyen derişim: C = (I / k)^(1/n).\n\nDüşük derişimlerde alevde kolay iyonlaşan elementlerin (ör. alkali metaller) iyonlaşması eğriyi ters yönde bükebilir. Bu araç n ≤ 1 durumunu (öz soğurma) temel alır; iyonlaşma, ortama iyonlaşma tamponu eklenerek bastırılır.',
      en: 'I = k · Cⁿ ⇔ log I = log k + n · log C.\n\n• On a log–log plot the slope is n and the intercept log k; both are found from the standards.\n• n = 1 is a linear (proportional) response. Self-absorption makes n < 1 at high concentrations: doubling the concentration less than doubles the signal.\n• Unknown concentration: C = (I / k)^(1/n).\n\nAt low concentrations, ionisation of easily ionised elements (e.g. alkali metals) in the flame can bend the curve the other way. This tool is based on n ≤ 1 (self-absorption); ionisation is suppressed by adding an ionisation buffer.',
    },
    usage: {
      tr: [
        'Birkaç büyüklük mertebesine yayılan bir derişim aralığında tek bir kalibrasyonla çalışmak.',
        'k ve n, standartların log I – log C verisine doğrusal regresyonla bulunur.',
        'Yalnızca standartların kapsadığı aralıkta kullanılmalıdır; dışına ekstrapolasyon güvenilmezdir.',
        'Mümkünse derişim, eğrinin doğrusal bölgesine seyreltilerek çalışılması daha doğrudur.',
      ],
      en: [
        'Working with a single calibration over a range spanning several orders of magnitude.',
        'k and n are found by linear regression of log I against log C for the standards.',
        'Use it only within the range covered by the standards; extrapolation is unreliable.',
        'Where possible, diluting into the linear region of the curve is more accurate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: numunenin emisyon şiddeti I = 2500; kalibrasyondan k = 1000 ve n = 0,9.',
        'I / k = 2500 / 1000 = 2,5; 1/n = 1/0,9 = 1,111.',
        'log C = log 2,5 / 0,9 = 0,3979 / 0,9 = 0,4422.',
        'Sonuç: C = 10^0,4422 = 2,768 (k’nin tanımlandığı derişim biriminde).',
      ],
      en: [
        'Given: sample emission intensity I = 2500; from the calibration k = 1000 and n = 0.9.',
        'I / k = 2500 / 1000 = 2.5; 1/n = 1/0.9 = 1.111.',
        'log C = log 2.5 / 0.9 = 0.3979 / 0.9 = 0.4422.',
        'Result: C = 10^0.4422 = 2.768 (in the concentration unit in which k was defined).',
      ],
    },
    mistakes: {
      tr: [
        'Doğrusal kalibrasyonu öz soğurmanın başladığı yüksek derişimlere uzatmak.',
        'C’yi I / k olarak hesaplayıp üssü unutmak (2,5 bulunur; doğrusu 2,768).',
        'Tanık sinyalini çıkarmadan log alınması; sıfıra yakın sinyallerin logaritması eğimi bozar.',
      ],
      en: [
        'Extending a linear calibration into the high-concentration region where self-absorption sets in.',
        'Computing C as I / k and forgetting the exponent (giving 2.5 instead of 2.768).',
        'Taking logs without subtracting the blank; logarithms of near-zero signals distort the slope.',
      ],
    },
    related: ['boltzmann', 'linear-regression', 'internal-standard', 'std-addition-multi'],
  },

  'duane-hunt': {
    concept: {
      tr: 'X-ışını tüpünde katottan çıkan elektronlar V gerilimiyle hızlandırılıp anoda (hedef) çarptırılır. Elektronlar hedefte yavaşlarken sürekli bir X-ışını spektrumu (frenleme ışınımı, Bremsstrahlung) yayımlar; bunun üzerine hedef elementin karakteristik çizgileri biner.\n\nSürekli spektrum keskin bir kısa dalga boyu sınırında (λ₀) sona erer. Bu sınır, bir elektronun tüm kinetik enerjisini tek bir fotona aktardığı duruma karşılık gelir ve Duane–Hunt yasasıyla verilir.',
      en: 'In an X-ray tube, electrons from the cathode are accelerated through a voltage V and strike the anode (target). As they decelerate in the target they emit a continuous X-ray spectrum (braking radiation, Bremsstrahlung), on which the characteristic lines of the target element are superimposed.\n\nThe continuum ends sharply at a short-wavelength limit (λ₀). This limit corresponds to an electron giving all its kinetic energy to a single photon and is given by the Duane–Hunt law.',
    },
    meaning: {
      tr: 'V gerilimiyle hızlandırılan elektronun kinetik enerjisi e·V’dir. Bir fotonun alabileceği en büyük enerji budur: h·ν_maks = h·c / λ₀ = e·V. Buradan λ₀ = h·c / (e·V).\n\nSayısal kısayol: h·c / e = 12,398 kV·Å olduğundan λ₀ (Å) = 12,398 / V (kV).\n\n• λ₀ yalnızca gerilime bağlıdır; hedef malzemesinden bağımsızdır.\n• Karakteristik çizgiler ise hedef elemente özgüdür ve ancak gerilim ilgili kabuğun uyarılma potansiyelini aştığında ortaya çıkar.\n• Gerilim artınca sınır daha kısa dalga boylarına kayar ve sürekli spektrumun şiddeti artar.',
      en: 'An electron accelerated through V has kinetic energy e·V. This is the largest energy a single photon can receive: h·ν_max = h·c / λ₀ = e·V. Hence λ₀ = h·c / (e·V).\n\nNumerical shortcut: since h·c / e = 12.398 kV·Å, λ₀ (Å) = 12.398 / V (kV).\n\n• λ₀ depends only on the voltage; it is independent of the target material.\n• Characteristic lines, by contrast, belong to the target element and appear only when the voltage exceeds the excitation potential of the shell involved.\n• Raising the voltage moves the limit to shorter wavelengths and increases the continuum intensity.',
    },
    usage: {
      tr: [
        'Bir X-ışını tüpünün belirli bir gerilimde üretebileceği en kısa dalga boyunu (en yüksek enerjiyi) bulmak.',
        'XRF’de bir elementin K çizgilerini uyarmak için gereken en düşük tüp gerilimini değerlendirmek.',
        'Tarihsel olarak h/e oranının belirlenmesinde kullanılmıştır.',
      ],
      en: [
        'Finding the shortest wavelength (highest energy) an X-ray tube can produce at a given voltage.',
        'Judging the minimum tube voltage needed to excite an element’s K lines in XRF.',
        'Historically used to determine the ratio h/e.',
      ],
    },
    solution: {
      tr: [
        'Verilen: hızlandırma gerilimi V = 30 kV.',
        'Elektronun enerjisi e·V = 30 keV = 4,807 × 10⁻¹⁵ J.',
        'λ₀ = h·c / (e·V) = 1,986 × 10⁻²⁵ J·m / 4,807 × 10⁻¹⁵ J = 4,133 × 10⁻¹¹ m; kısayolla 12,398 / 30.',
        'Sonuç: λ₀ = 0,4133 Å.',
      ],
      en: [
        'Given: accelerating voltage V = 30 kV.',
        'Electron energy e·V = 30 keV = 4.807 × 10⁻¹⁵ J.',
        'λ₀ = h·c / (e·V) = 1.986 × 10⁻²⁵ J·m / 4.807 × 10⁻¹⁵ J = 4.133 × 10⁻¹¹ m; by the shortcut 12.398 / 30.',
        'Result: λ₀ = 0.4133 Å.',
      ],
    },
    mistakes: {
      tr: [
        'Kısayolda gerilimi kV yerine V girmek (1000 kat hata).',
        'λ₀’ın anot malzemesine bağlı olduğunu sanmak.',
        'Sürekli spektrumun sınırını karakteristik çizgilerle karıştırmak.',
      ],
      en: [
        'Entering the voltage in V instead of kV in the shortcut (a factor of 1000).',
        'Thinking λ₀ depends on the anode material.',
        'Confusing the continuum limit with the characteristic lines.',
      ],
    },
    related: ['bragg', 'moseley', 'photon-energy'],
  },

  bragg: {
    concept: {
      tr: 'Kristalde düzenli sıralanmış atom düzlemleri, X-ışınları için yarı geçirgen aynalar gibi davranır. Ardışık düzlemlerden saçılan ışınlar yalnızca belirli açılarda aynı fazda birleşir ve güçlü bir kırınım ışını oluşturur. Bu koşul Bragg yasasıdır.\n\nX-ışını kırınımında (XRD) dalga boyu bilinen ışınla açı ölçülür ve düzlemler arası uzaklık (d) bulunur; d değerleri kristal fazların “parmak izi”dir. Dalga boyu ayırıcı XRF’de ise d’si bilinen bir analizör kristali kullanılır ve açıdan numunenin yaydığı dalga boyu hesaplanır.',
      en: 'The regularly spaced planes of atoms in a crystal act like semi-transparent mirrors for X-rays. Rays scattered from successive planes combine in phase only at certain angles, producing a strong diffracted beam. This condition is Bragg’s law.\n\nIn X-ray diffraction (XRD), radiation of known wavelength is used, the angle is measured and the interplanar spacing (d) is found; the d values are a “fingerprint” of crystalline phases. In wavelength-dispersive XRF an analysing crystal of known d is used and the wavelength emitted by the sample is found from the angle.',
    },
    meaning: {
      tr: 'n · λ = 2 · d · sin θ.\n\nTüretme: ikinci düzlemden yansıyan ışın, birinciden yansıyana göre 2 · d · sin θ kadar fazla yol alır. Bu yol farkı dalga boyunun tam katı (n · λ) olduğunda yapıcı girişim oluşur.\n\n• θ, gelen ışın ile düzlem arasındaki açıdır (düzlem normaliyle değil). Difraktometreler 2θ kaydeder.\n• n kırınım mertebesidir; genellikle n = 1 alınır, yüksek mertebeler daha büyük açılarda görülür.\n• sin θ ≤ 1 olduğundan kırınım için λ ≤ 2d/n olmalıdır.\n• λ ve d aynı birimde olmalıdır (genellikle Å ya da nm).',
      en: 'n · λ = 2 · d · sin θ.\n\nDerivation: a ray reflected from the second plane travels an extra 2 · d · sin θ compared with one reflected from the first. Constructive interference occurs when this path difference is a whole number of wavelengths (n · λ).\n\n• θ is the angle between the incident beam and the plane (not the plane normal). Diffractometers record 2θ.\n• n is the diffraction order; usually n = 1, and higher orders appear at larger angles.\n• Since sin θ ≤ 1, diffraction requires λ ≤ 2d/n.\n• λ and d must be in the same unit (usually Å or nm).',
    },
    usage: {
      tr: [
        'XRD’de ölçülen pik açısından düzlemler arası uzaklığı bulmak ve faz tanımlamak.',
        'Belirli bir d için kırınım açısını öngörmek.',
        'WDXRF’de analizör kristalinin açısından ölçülen dalga boyunu, dolayısıyla elementi bulmak.',
      ],
      en: [
        'Finding the interplanar spacing from a measured XRD peak angle and identifying phases.',
        'Predicting the diffraction angle for a given d.',
        'Finding the measured wavelength, and hence the element, from the analysing-crystal angle in WDXRF.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Cu Kα ışınımı λ = 1,5406 Å, d = 2,00 Å, n = 1.',
        'sin θ = n·λ / (2·d) = 1,5406 Å / 4,00 Å = 0,3852.',
        'θ = arcsin(0,3852); difraktometrede pik 2θ = 45,31°’de görülür.',
        'Sonuç: θ = 22,65°.',
      ],
      en: [
        'Given: Cu Kα radiation λ = 1.5406 Å, d = 2.00 Å, n = 1.',
        'sin θ = n·λ / (2·d) = 1.5406 Å / 4.00 Å = 0.3852.',
        'θ = arcsin(0.3852); on a diffractometer the peak appears at 2θ = 45.31°.',
        'Result: θ = 22.65°.',
      ],
    },
    mistakes: {
      tr: [
        'Difraktogramdan okunan 2θ değerini θ olarak girmek.',
        'Hesap makinesini radyan kipinde kullanmak.',
        'λ’yı nm, d’yi Å olarak karışık birimlerle kullanmak.',
      ],
      en: [
        'Entering the 2θ value read from a diffractogram as θ.',
        'Using a calculator in radian mode.',
        'Mixing units, e.g. λ in nm and d in Å.',
      ],
    },
    related: ['duane-hunt', 'moseley', 'grating'],
  },

  moseley: {
    concept: {
      tr: 'Moseley 1913’te çeşitli elementlerin karakteristik X-ışını çizgilerini ölçtü ve çizgi frekansının karekökünün atom numarasıyla doğrusal arttığını buldu. Bu, elementlerin asıl sıralama ölçütünün atom kütlesi değil atom numarası olduğunu gösterdi.\n\nX-ışını floresansında (XRF) element tanımlamanın temeli bu ilişkidir: her elementin Kα çizgisi kendine özgü bir enerjidedir. İç kabuk elektronları kimyasal bağa pek katılmadığından bu enerjiler kimyasal ortamdan neredeyse bağımsızdır; XRF bu yüzden element bileşimini verir.',
      en: 'In 1913 Moseley measured the characteristic X-ray lines of many elements and found that the square root of the line frequency increases linearly with atomic number. This showed that the true ordering of the elements is by atomic number, not atomic mass.\n\nThis relation is the basis of element identification in X-ray fluorescence (XRF): each element’s Kα line lies at its own energy. Because inner-shell electrons take little part in bonding, these energies are almost independent of the chemical environment, which is why XRF gives elemental composition.',
    },
    meaning: {
      tr: 'Kα çizgisi, K kabuğundaki (n = 1) bir boşluğun L kabuğundan (n = 2) gelen bir elektronla doldurulmasıyla yayımlanır.\n\nTüretme (Bohr modeli): hidrojen benzeri bir atomda düzey enerjileri E = −R_y · Z_etkin² / n², R_y = 13,606 eV. K kabuğunda kalan diğer elektron çekirdek yükünün yaklaşık bir birimini perdeler, bu yüzden Z_etkin ≈ Z − 1 (perdeleme sabiti σ = 1):\nE(Kα) = R_y · (Z − 1)² · (1/1² − 1/2²) = ¾ · 13,606 eV · (Z − 1)².\n\n• √E, (Z − 1) ile doğru orantılıdır: Moseley grafiği bir doğrudur.\n• Basit perdeleme modeli olduğundan gerçek değerlerden birkaç % sapabilir.\n• L ve M çizgileri farklı perdeleme sabitleri gerektirir; bu formül yalnızca Kα içindir.',
      en: 'The Kα line is emitted when a vacancy in the K shell (n = 1) is filled by an electron from the L shell (n = 2).\n\nDerivation (Bohr model): in a hydrogen-like atom the level energies are E = −R_y · Z_eff² / n², with R_y = 13.606 eV. The other electron remaining in the K shell screens about one unit of nuclear charge, so Z_eff ≈ Z − 1 (screening constant σ = 1):\nE(Kα) = R_y · (Z − 1)² · (1/1² − 1/2²) = ¾ · 13.606 eV · (Z − 1)².\n\n• √E is proportional to (Z − 1): the Moseley plot is a straight line.\n• Being a simple screening model, it may differ from real values by a few per cent.\n• L and M lines need different screening constants; this formula is for Kα only.',
    },
    usage: {
      tr: [
        'Bir XRF spektrumundaki Kα pikinin hangi elemente ait olduğunu yaklaşık olarak bulmak.',
        'Bir elementin Kα enerjisini tahmin edip uygun dedektör ya da analizör kristali seçmek.',
        'Bragg yasasıyla birlikte, Kα dalga boyundan (λ = h·c / E) kırınım açısını öngörmek.',
        'Model Z ≲ 45 için %1–3 içinde doğrudur; ağır elementlerde Kα’yı belirgin biçimde küçük verir (W %−8, Pb %−11). Ölçülen enerjiden Z bulunurken 1–5 birimlik hata olabilir; kesin tanımlama için tablo değerleri kullanılmalıdır.',
      ],
      en: [
        'Roughly identifying the element responsible for a Kα peak in an XRF spectrum.',
        'Estimating an element’s Kα energy to choose a suitable detector or analysing crystal.',
        'Together with Bragg’s law, predicting a diffraction angle from the Kα wavelength (λ = h·c / E).',
        'The model is within about 1–3 % for Z ≲ 45 but clearly underestimates Kα for heavy elements (W −8 %, Pb −11 %). Z obtained from a measured energy can be off by 1–5; use tabulated values for exact identification.',
      ],
    },
    solution: {
      tr: [
        'Verilen: bakır, Z = 29.',
        'Z − 1 = 28; (Z − 1)² = 784.',
        'E = 0,75 × 13,606 eV × 784 = 8000 eV (λ = 12,398 / 8,000 = 1,550 Å; ölçülen Cu Kα ≈ 8,04 keV ve 1,54 Å).',
        'Sonuç: E(Kα) = 8,000 keV ≈ 8 keV.',
      ],
      en: [
        'Given: copper, Z = 29.',
        'Z − 1 = 28; (Z − 1)² = 784.',
        'E = 0.75 × 13.606 eV × 784 = 8000 eV (λ = 12.398 / 8.000 = 1.550 Å; measured Cu Kα ≈ 8.04 keV and 1.54 Å).',
        'Result: E(Kα) = 8.000 keV ≈ 8 keV.',
      ],
    },
    mistakes: {
      tr: [
        'Perdelemeyi unutup (Z − 1) yerine Z kullanmak (bakır için %7’ye yakın hata).',
        'Formülü L ya da M çizgilerine uygulamak.',
        'Yaklaşık sonucu tablo değeri gibi kesin kabul etmek.',
      ],
      en: [
        'Ignoring screening and using Z instead of (Z − 1) (an error of about 7% for copper).',
        'Applying the formula to L or M lines.',
        'Treating the approximate result as an exact tabulated value.',
      ],
    },
    related: ['bragg', 'duane-hunt', 'xray-absorption', 'photon-energy'],
  },

  'xray-absorption': {
    concept: {
      tr: 'X-ışını demeti bir maddeden geçerken, başta fotoelektrik soğurma olmak üzere soğurma ve saçılma nedeniyle üstel olarak zayıflar. Bu, UV-Görünür bölgedeki Beer yasasının X-ışını karşılığıdır.\n\nKütle soğurma katsayısı (µ_m), elementin ve X-ışını enerjisinin bir özelliğidir; elementin fiziksel hali ya da kimyasal bileşiğinden bağımsızdır. X-ışını soğurma analizi, filtre ve pencere seçimi, kalınlık ölçümü ve XRF’deki matriks etkilerinin anlaşılması bu ilişkiye dayanır.',
      en: 'An X-ray beam passing through matter is attenuated exponentially by absorption, mainly photoelectric, and by scattering. It is the X-ray counterpart of Beer’s law in the UV–visible region.\n\nThe mass absorption coefficient (µ_m) is a property of the element and the X-ray energy; it does not depend on the physical state or the chemical compound of the element. X-ray absorption analysis, the choice of filters and windows, thickness measurement and the understanding of matrix effects in XRF all rest on this relation.',
    },
    meaning: {
      tr: 'P / P₀ = exp(−µ_m · ρ · x).\n\n• µ_m (cm²/g) × ρ (g/cm³) = µ, doğrusal soğurma katsayısıdır (cm⁻¹); x kalınlıktır (cm). Üs birimsizdir.\n• Doğal logaritma biçiminde: ln(P₀/P) = µ_m · ρ · x; Beer yasasındaki A = ε·b·c’ye benzer, ancak 10 tabanlı değil doğal logaritmadır.\n• Karışımlar için kütle soğurma katsayıları kütle kesirleriyle ağırlıklandırılarak toplanır: µ_m = Σ wᵢ · µᵢ.\n\nµ_m atom numarası ve dalga boyu arttıkça (enerji azaldıkça) büyür. Soğurma kıyılarında, yani foton enerjisi bir K ya da L elektronunu koparmaya yetecek kadar arttığında, µ_m aniden sıçrar.',
      en: 'P / P₀ = exp(−µ_m · ρ · x).\n\n• µ_m (cm²/g) × ρ (g/cm³) = µ, the linear absorption coefficient (cm⁻¹); x is the thickness (cm). The exponent is dimensionless.\n• In logarithmic form: ln(P₀/P) = µ_m · ρ · x; it resembles A = ε·b·c in Beer’s law, but uses the natural rather than base-10 logarithm.\n• For mixtures, mass absorption coefficients add weighted by mass fractions: µ_m = Σ wᵢ · µᵢ.\n\nµ_m grows with atomic number and with wavelength (lower energy). At absorption edges, where the photon energy just becomes sufficient to eject a K or L electron, µ_m jumps abruptly.',
    },
    usage: {
      tr: [
        'Bir folyo ya da numunenin geçirdiği X-ışını kesrini hesaplamak.',
        'Tersinden, istenen zayıflama için gereken kalınlığı ya da ölçülen geçirgenlikten µ_m’yi bulmak.',
        'µ_m, kullanılan X-ışını enerjisine ait olmalıdır; aynı element için soğurma kıyısının iki yanında çok farklıdır.',
        'Geniş bantlı (polikromatik) ışında µ_m enerjiyle değiştiğinden tek bir üstel ifade yaklaşıktır.',
      ],
      en: [
        'Calculating the fraction of X-rays transmitted by a foil or sample.',
        'Conversely, finding the thickness for a required attenuation, or µ_m from a measured transmission.',
        'µ_m must belong to the X-ray energy used; for the same element it differs greatly on either side of an absorption edge.',
        'For broadband (polychromatic) radiation µ_m varies with energy, so a single exponential is approximate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: µ_m = 50 cm²/g; ρ = 7,87 g/cm³ (demir; = g/mL); x = 0,02 mm = 0,002 cm.',
        'µ_m · ρ · x = 50 cm²/g × 7,87 g/cm³ × 0,002 cm = 0,787 (birimsiz).',
        'P / P₀ = exp(−0,787).',
        'Sonuç: P / P₀ = 0,4552 (ışının yaklaşık %45,5’i geçer).',
      ],
      en: [
        'Given: µ_m = 50 cm²/g; ρ = 7.87 g/cm³ (iron; = g/mL); x = 0.02 mm = 0.002 cm.',
        'µ_m · ρ · x = 50 cm²/g × 7.87 g/cm³ × 0.002 cm = 0.787 (dimensionless).',
        'P / P₀ = exp(−0.787).',
        'Result: P / P₀ = 0.4552 (about 45.5% of the beam is transmitted).',
      ],
    },
    mistakes: {
      tr: [
        'Kalınlığı mm olarak bırakıp cm²/g ile çarpmak (10 kat hata).',
        'Doğal logaritma yerine 10 tabanlı logaritma kullanmak.',
        'Farklı bir enerjiye (ya da soğurma kıyısının öbür yanına) ait µ_m kullanmak.',
      ],
      en: [
        'Leaving the thickness in mm while using cm²/g (a factor of 10).',
        'Using the base-10 instead of the natural logarithm.',
        'Using a µ_m for a different energy (or for the other side of an absorption edge).',
      ],
    },
    related: ['beer-lambert', 'moseley', 'duane-hunt'],
  },

  'xps-binding': {
    concept: {
      tr: 'X-ışını fotoelektron spektroskopisinde (XPS ya da ESCA) numune tek enerjili yumuşak X-ışınlarıyla (Al Kα 1486,6 eV ya da Mg Kα 1253,6 eV) ışınlanır ve iç kabuk elektronları koparılır. Bu fotoelektronların kinetik enerjisi ölçülür ve bağlanma enerjisine çevrilir.\n\nBağlanma enerjisi elementi tanımlar; aynı elementin farklı yükseltgenme basamakları ya da kimyasal ortamları ise birkaç eV’lik kimyasal kaymalarla ayırt edilir. Elektronlar katı içinde ancak çok kısa bir yolu enerji kaybetmeden alabildiğinden XPS yüzeyin en üst birkaç nanometresini inceler.',
      en: 'In X-ray photoelectron spectroscopy (XPS or ESCA) the sample is irradiated with monochromatic soft X-rays (Al Kα 1486.6 eV or Mg Kα 1253.6 eV), which eject core electrons. The kinetic energy of these photoelectrons is measured and converted to a binding energy.\n\nThe binding energy identifies the element, while different oxidation states or chemical environments of the same element are distinguished by chemical shifts of a few eV. Because electrons can travel only a very short distance in a solid without losing energy, XPS probes the top few nanometres of the surface.',
    },
    meaning: {
      tr: 'Enerji korunumu: foton enerjisi, elektronu bağından koparmaya (E_b), elektronu spektrometreye ulaştırmaya (φ) ve elektronun kinetik enerjisine (E_k) harcanır:\nh·ν = E_b + E_k + φ ⇒ E_b = h·ν − E_k − φ.\n\n• E_b, Fermi düzeyine göre ölçülür. Numune ile spektrometre elektriksel temas halindeyken Fermi düzeyleri eşitlenir; bu yüzden formüldeki φ numunenin değil spektrometrenin iş fonksiyonudur ve kalibrasyonla bir kez belirlenir.\n• Kinetik enerji kullanılan X-ışını kaynağına bağlıdır, bağlanma enerjisi bağlı değildir.\n• Kimyasal kayma: atom üzerindeki elektron yoğunluğu azaldıkça (daha yüksek yükseltgenme basamağı, elektronegatif komşular) bağlanma enerjisi genellikle artar.',
      en: 'Energy conservation: the photon energy is spent on freeing the electron (E_b), on bringing it into the spectrometer (φ) and on the electron’s kinetic energy (E_k):\nh·ν = E_b + E_k + φ ⇒ E_b = h·ν − E_k − φ.\n\n• E_b is referred to the Fermi level. When the sample is in electrical contact with the spectrometer their Fermi levels align, so the φ in the formula is the spectrometer’s work function, not the sample’s, and it is set once by calibration.\n• The kinetic energy depends on the X-ray source used; the binding energy does not.\n• Chemical shift: as electron density on the atom decreases (higher oxidation state, electronegative neighbours), the binding energy generally increases.',
    },
    usage: {
      tr: [
        'Ölçülen fotoelektron pikini elemente ve kimyasal duruma atamak.',
        'Yalıtkan numuneler yüklenip pikleri kaydırabilir; enerji ölçeği genellikle yüzeydeki hidrokarbon kirliliğinin C 1s pikine (yaklaşık 285 eV) göre düzeltilir.',
        'Auger piklerinin kinetik enerjisi kaynaktan bağımsızdır; Al ve Mg kaynakları arasında geçiş yapmak fotoelektron ve Auger piklerini ayırt etmeye yarar.',
        'Yöntem yalnızca yüzeyi incelediğinden sonuç numunenin iç bileşimini temsil etmeyebilir.',
      ],
      en: [
        'Assigning a measured photoelectron peak to an element and chemical state.',
        'Insulating samples can charge and shift the peaks; the energy scale is usually corrected to the C 1s peak of adventitious hydrocarbon (about 285 eV).',
        'Auger peaks have source-independent kinetic energies; switching between Al and Mg sources helps tell photoelectron and Auger peaks apart.',
        'Because only the surface is probed, the result may not represent the bulk composition.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Al Kα kaynağı h·ν = 1486,6 eV; ölçülen kinetik enerji E_k = 1201,6 eV; φ = 0 (kinetik enerji spektrometre iş fonksiyonuna göre zaten düzeltilmiş).',
        'E_b = h·ν − E_k − φ = 1486,6 eV − 1201,6 eV − 0 eV.',
        'Sonuç: E_b = 285 eV; bu, C 1s bölgesidir (C–C/C–H karbonu).',
      ],
      en: [
        'Given: Al Kα source h·ν = 1486.6 eV; measured kinetic energy E_k = 1201.6 eV; φ = 0 (the kinetic energy is already corrected for the spectrometer work function).',
        'E_b = h·ν − E_k − φ = 1486.6 eV − 1201.6 eV − 0 eV.',
        'Result: E_b = 285 eV; this is the C 1s region (C–C/C–H carbon).',
      ],
    },
    mistakes: {
      tr: [
        'Kinetik enerjiyi bağlanma enerjisi sanmak; spektrumlar genellikle bağlanma enerjisi ekseninde çizilir.',
        'Spektrometrenin değil numunenin iş fonksiyonunu kullanmak.',
        'Yalıtkan numunelerde yüklenme kaymasını düzeltmeden kimyasal kayma yorumlamak.',
      ],
      en: [
        'Taking the kinetic energy for the binding energy; spectra are usually plotted on a binding-energy axis.',
        'Using the sample’s work function instead of the spectrometer’s.',
        'Interpreting chemical shifts on insulating samples without correcting for charging.',
      ],
    },
    related: ['photon-energy', 'moseley', 'xray-absorption'],
  },

  'mossbauer-recoil': {
    concept: {
      tr: 'Mössbauer spektroskopisi, bir çekirdeğin yayımladığı γ-ışınının aynı türden başka bir çekirdek tarafından rezonansla soğurulmasına dayanır (en yaygın örnek: ⁵⁷Co kaynağından gelen 14,4 keV’lik ⁵⁷Fe geçişi). Rezonans için yayımlanan ve soğurulan enerjiler, çizginin doğal genişliği içinde örtüşmelidir.\n\nSerbest bir çekirdek γ-ışını yayımlarken momentum korunumu gereği geri teper ve geçiş enerjisinin bir kısmını alır; soğurmada da aynı kadar fazladan enerji gerekir. Bu geri tepme enerjisi çizgi genişliğinden çok büyük olduğundan serbest atomlarda rezonans olmaz. Katı örgüye bağlı çekirdekte ise geri tepme momentumunu tüm kristal üstlenir ve olayların bir kısmı geri tepmesiz gerçekleşir: Mössbauer etkisi.',
      en: 'Mössbauer spectroscopy relies on resonant absorption of a γ-ray emitted by one nucleus by another nucleus of the same kind (most commonly the 14.4 keV transition of ⁵⁷Fe from a ⁵⁷Co source). For resonance, the emitted and absorbed energies must overlap within the natural width of the line.\n\nA free nucleus emitting a γ-ray recoils because momentum is conserved and takes part of the transition energy; absorption needs the same amount extra. Because this recoil energy is far larger than the line width, there is no resonance for free atoms. For a nucleus bound in a solid lattice the whole crystal takes up the recoil momentum, and a fraction of events is recoil-free: the Mössbauer effect.',
    },
    meaning: {
      tr: 'γ-fotonunun momentumu p = E_γ / c’dir. Çekirdek eşit ve zıt momentumla geri teper; kinetik enerjisi:\nE_R = p² / (2M) = E_γ² / (2·M·c²).\n\n• M, tek bir çekirdeğin kütlesidir. Araç M’yi g/mol olarak alır ve M / (1000 · N_A) ile kg’a çevirir.\n• E_R, E_γ’nın karesiyle artar ve kütleyle azalır; bu nedenle Mössbauer etkisi düşük enerjili γ geçişlerinde gözlenir.\n• Katıda geri tepen kütle tüm kristal olduğundan M çok büyür ve E_R ihmal edilebilir hale gelir. Geri tepmesiz olayların kesri, düşük sıcaklıkta ve sert (rijit) örgülerde daha büyüktür.\n\nKarşılaştırma: ⁵⁷Fe’nin 14,4 keV çizgisinin doğal genişliği yaklaşık 5 × 10⁻⁹ eV’dir.',
      en: 'The γ photon carries momentum p = E_γ / c. The nucleus recoils with equal and opposite momentum, so its kinetic energy is\nE_R = p² / (2M) = E_γ² / (2·M·c²).\n\n• M is the mass of a single nucleus. The tool takes M in g/mol and converts it to kg with M / (1000 · N_A).\n• E_R grows with the square of E_γ and falls with mass; this is why the Mössbauer effect is seen for low-energy γ transitions.\n• In a solid the recoiling mass is the whole crystal, so M becomes huge and E_R negligible. The recoil-free fraction is larger at low temperature and in rigid lattices.\n\nFor comparison: the natural width of the 14.4 keV line of ⁵⁷Fe is about 5 × 10⁻⁹ eV.',
    },
    usage: {
      tr: [
        'Serbest bir çekirdeğin geri tepme enerjisini çizgi genişliğiyle karşılaştırarak rezonansın neden kaybolduğunu göstermek.',
        'Farklı Mössbauer izotoplarının (⁵⁷Fe, ¹¹⁹Sn gibi) geri tepme enerjilerini karşılaştırmak.',
        'Formül serbest (bağlı olmayan) çekirdek içindir; katıdaki geri tepmesiz kesri vermez.',
      ],
      en: [
        'Showing why resonance is lost by comparing the recoil energy of a free nucleus with the line width.',
        'Comparing recoil energies for different Mössbauer isotopes (⁵⁷Fe, ¹¹⁹Sn…).',
        'The formula is for a free (unbound) nucleus; it does not give the recoil-free fraction in a solid.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ⁵⁷Fe, E_γ = 14,4 keV, M = 57 g/mol.',
        'Bir çekirdeğin kütlesi: 0,057 kg/mol / 6,022 × 10²³ mol⁻¹ = 9,465 × 10⁻²⁶ kg; M·c² = 8,507 × 10⁻⁹ J = 5,310 × 10⁷ keV.',
        'E_R = (14,4 keV)² / (2 × 5,310 × 10⁷ keV) = 207,36 / 1,062 × 10⁸ keV = 1,953 × 10⁻⁶ keV.',
        'Sonuç: E_R = 1,953 meV; bu, çizginin doğal genişliğinin yaklaşık 4 × 10⁵ katıdır.',
      ],
      en: [
        'Given: ⁵⁷Fe, E_γ = 14.4 keV, M = 57 g/mol.',
        'Mass of one nucleus: 0.057 kg/mol / 6.022 × 10²³ mol⁻¹ = 9.465 × 10⁻²⁶ kg; M·c² = 8.507 × 10⁻⁹ J = 5.310 × 10⁷ keV.',
        'E_R = (14.4 keV)² / (2 × 5.310 × 10⁷ keV) = 207.36 / 1.062 × 10⁸ keV = 1.953 × 10⁻⁶ keV.',
        'Result: E_R = 1.953 meV, about 4 × 10⁵ times the natural line width.',
      ],
    },
    mistakes: {
      tr: [
        'Molar kütleyi tek çekirdeğin kütlesine çevirmeyi unutmak (N_A ile bölme).',
        'keV ile J’yi aynı ifadede karıştırmak; tüm enerjiler aynı birimde olmalıdır.',
        'Geri tepmenin katılarda da rezonansı engellediğini sanmak.',
      ],
      en: [
        'Forgetting to convert the molar mass to the mass of one nucleus (divide by N_A).',
        'Mixing keV and J in the same expression; all energies must be in the same unit.',
        'Thinking that recoil also prevents resonance in solids.',
      ],
    },
    related: ['mossbauer-doppler', 'photon-energy'],
  },

  'mossbauer-doppler': {
    concept: {
      tr: 'Mössbauer çizgileri son derece dardır (neV düzeyi). Çekirdeğin kimyasal çevresi nükleer enerji düzeylerini çok az kaydırır ya da yarar: izomer kayması, dört kutuplu yarılma ve manyetik aşırı ince yarılma. Bu küçük farkları taramak için kaynak, soğurucuya göre v hızıyla ileri geri hareket ettirilir ve γ-ışınının enerjisi Doppler etkisiyle kaydırılır.\n\nMössbauer spektrumu bu yüzden geçirgenliğin kaynak hızına (mm/s) karşı grafiğidir. Örneğin demirin yükseltgenme ve spin durumu (Fe²⁺/Fe³⁺) izomer kaymasından ayırt edilir.',
      en: 'Mössbauer lines are extremely narrow (neV range). The chemical environment of the nucleus shifts or splits the nuclear energy levels very slightly: isomer shift, quadrupole splitting and magnetic hyperfine splitting. To scan these small differences, the source is moved back and forth relative to the absorber at velocity v, and the γ-ray energy is shifted by the Doppler effect.\n\nA Mössbauer spectrum is therefore a plot of transmission against source velocity (mm/s). For example, the oxidation and spin state of iron (Fe²⁺/Fe³⁺) are distinguished by the isomer shift.',
    },
    meaning: {
      tr: 'Birinci dereceden Doppler kayması: ΔE = (v / c) · E_γ.\n\n• v ≪ c olduğundan kayma, foton enerjisinin çok küçük bir kesridir; ancak çizgiler çok dar olduğu için birkaç mm/s’lik hızlar bütün spektrumu taramaya yeter.\n• ⁵⁷Fe (14,4 keV) için 1 mm/s ≈ 48 neV’dir. Dönüşüm çarpanı E_γ ile orantılı olduğundan izotopa göre değişir (¹¹⁹Sn için E_γ ≈ 23,9 keV).\n• Kural: pozitif hız, kaynağın soğurucuya yaklaşmasıdır ve γ enerjisini artırır.\n\nİzomer kaymaları bir referansa göre (demir için genellikle oda sıcaklığındaki α-Fe) mm/s cinsinden raporlanır.',
      en: 'First-order Doppler shift: ΔE = (v / c) · E_γ.\n\n• Since v ≪ c the shift is a tiny fraction of the photon energy, but because the lines are so narrow, velocities of a few mm/s are enough to scan the whole spectrum.\n• For ⁵⁷Fe (14.4 keV), 1 mm/s ≈ 48 neV. The conversion factor is proportional to E_γ and therefore differs between isotopes (E_γ ≈ 23.9 keV for ¹¹⁹Sn).\n• Convention: a positive velocity means the source moves towards the absorber, which raises the γ energy.\n\nIsomer shifts are reported in mm/s relative to a reference (for iron usually α-Fe at room temperature).',
    },
    usage: {
      tr: [
        'Mössbauer spektrumunun hız eksenini enerji birimine çevirmek ya da tersini yapmak.',
        'İzomer kayması ve yarılmaların enerji büyüklüğünü çizgi genişliği ve geri tepme enerjisiyle karşılaştırmak.',
        'Yalnızca v ≪ c durumundaki birinci dereceden Doppler etkisi içindir.',
      ],
      en: [
        'Converting the velocity axis of a Mössbauer spectrum to energy units, or the reverse.',
        'Comparing the energy size of isomer shifts and splittings with the line width and the recoil energy.',
        'Valid for the first-order Doppler effect with v ≪ c only.',
      ],
    },
    solution: {
      tr: [
        'Verilen: kaynak hızı v = 1 mm/s = 1 × 10⁻³ m/s; ⁵⁷Fe, E_γ = 14,4 keV.',
        'v / c = 1 × 10⁻³ m/s / 2,998 × 10⁸ m/s = 3,336 × 10⁻¹².',
        'ΔE = 3,336 × 10⁻¹² × 14 400 eV = 4,803 × 10⁻⁸ eV.',
        'Sonuç: ΔE = 48,03 neV (1 mm/s, ⁵⁷Fe için yaklaşık 48 neV’lik enerji kaymasıdır).',
      ],
      en: [
        'Given: source velocity v = 1 mm/s = 1 × 10⁻³ m/s; ⁵⁷Fe, E_γ = 14.4 keV.',
        'v / c = 1 × 10⁻³ m/s / 2.998 × 10⁸ m/s = 3.336 × 10⁻¹².',
        'ΔE = 3.336 × 10⁻¹² × 14 400 eV = 4.803 × 10⁻⁸ eV.',
        'Result: ΔE = 48.03 neV (for ⁵⁷Fe, 1 mm/s corresponds to an energy shift of about 48 neV).',
      ],
    },
    mistakes: {
      tr: [
        'mm/s’yi m/s’ye çevirmeyi unutmak (1000 kat hata).',
        '⁵⁷Fe’ye ait 48 neV/(mm/s) çarpanını başka izotoplara uygulamak.',
        'İzomer kaymalarını farklı referanslara göre verilmiş haliyle karşılaştırmak.',
      ],
      en: [
        'Forgetting to convert mm/s to m/s (a factor of 1000).',
        'Applying the ⁵⁷Fe factor of 48 neV per mm/s to other isotopes.',
        'Comparing isomer shifts quoted against different references.',
      ],
    },
    related: ['mossbauer-recoil', 'photon-energy'],
  },
};

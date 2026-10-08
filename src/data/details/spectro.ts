import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Spectroscopy module (undergraduate level).
 * For formula tools the last line of each worked solution states the result the calculator
 * gives for the tool's first example (checked by tests); for custom tools the example uses
 * the tool's own sample data.
 */
export const SPECTRO_DETAILS: Record<string, ToolDetail> = {
  'wavelength-frequency': {
    concept: {
      tr: 'Elektromanyetik ışıma, birbirine dik titreşen elektrik ve manyetik alanlardan oluşan ve boşlukta ışık hızıyla ilerleyen bir dalgadır. Dalga boyu (λ) art arda iki dalga tepesi arasındaki uzaklık, frekans (ν) ise bir noktadan saniyede geçen dalga sayısıdır (Hz = s⁻¹).\n\nSpektroskopik bölgeler (X-ışınları, UV, görünür, IR, mikrodalga, radyo dalgaları) bu iki büyüklükle tanımlanır. Frekans ışık kaynağı tarafından belirlenir ve ışıma bir ortamdan diğerine geçerken değişmez; dalga boyu ise ortama bağlıdır.',
      en: 'Electromagnetic radiation is a wave of mutually perpendicular oscillating electric and magnetic fields that travels at the speed of light in vacuum. The wavelength (λ) is the distance between successive crests, and the frequency (ν) is the number of waves passing a point per second (Hz = s⁻¹).\n\nThe spectral regions (X-ray, UV, visible, IR, microwave, radio) are defined by these two quantities. The frequency is set by the source and does not change when radiation passes from one medium to another; the wavelength depends on the medium.',
    },
    meaning: {
      tr: 'c = λ · ν. Boşlukta c = 2,998 × 10⁸ m/s’dir; dalga boyu ile frekans ters orantılıdır: dalga boyu kısaldıkça frekans (ve foton enerjisi) artar.\n\nBirim kontrolü: m × s⁻¹ = m/s. Dalga boyu nm cinsinden verildiyse önce metreye çevrilmelidir (1 nm = 10⁻⁹ m).\n\nKırılma indisi n olan bir ortamda ışığın hızı c/n’ye düşer. Frekans değişmediğinden dalga boyu da n kat kısalır. Hava için n ≈ 1,0003 olduğundan bu fark çoğu analitik uygulamada ihmal edilir.',
      en: 'c = λ · ν. In vacuum c = 2.998 × 10⁸ m/s; wavelength and frequency are inversely proportional: the shorter the wavelength, the higher the frequency (and the photon energy).\n\nUnit check: m × s⁻¹ = m/s. A wavelength given in nm must first be converted to metres (1 nm = 10⁻⁹ m).\n\nIn a medium of refractive index n the speed of light drops to c/n. Because the frequency stays the same, the wavelength also shrinks by a factor of n. For air n ≈ 1.0003, so the difference is negligible in most analytical work.',
    },
    usage: {
      tr: [
        'UV-görünür bölgede (görünür bölge yaklaşık 380–780 nm) nm ile verilen dalga boylarını frekansa çevirmek.',
        'NMR ve ESR gibi frekansla tanımlanan tekniklerde karşılık gelen dalga boyunu bulmak.',
        'Foton enerjisi (E = h · ν) ve dalga sayısı hesaplarına ara adım olarak.',
        'Işık bir ortamın içindeyse hızı c yerine c/n alınmalıdır.',
      ],
      en: [
        'Converting UV-visible wavelengths given in nm (visible region ≈ 380–780 nm) to frequency.',
        'Finding the corresponding wavelength in frequency-based techniques such as NMR and ESR.',
        'As an intermediate step towards photon energy (E = h · ν) and wavenumber.',
        'Inside a medium, use c/n instead of c for the speed of light.',
      ],
    },
    solution: {
      tr: [
        'Verilen: λ = 500 nm = 5,00 × 10⁻⁷ m; c = 2,998 × 10⁸ m/s.',
        'ν = c / λ = 2,998 × 10⁸ m/s ÷ 5,00 × 10⁻⁷ m = 5,996 × 10¹⁴ s⁻¹ (Hz).',
        '1 THz = 10¹² Hz olduğundan 5,996 × 10¹⁴ Hz = 599,6 THz.',
        'Sonuç: ν = 599,6 THz (görünür bölgede mavi-yeşil ışık).',
      ],
      en: [
        'Given: λ = 500 nm = 5.00 × 10⁻⁷ m; c = 2.998 × 10⁸ m/s.',
        'ν = c / λ = 2.998 × 10⁸ m/s ÷ 5.00 × 10⁻⁷ m = 5.996 × 10¹⁴ s⁻¹ (Hz).',
        'Since 1 THz = 10¹² Hz, 5.996 × 10¹⁴ Hz = 599.6 THz.',
        'Result: ν = 599.6 THz (blue-green visible light).',
      ],
    },
    mistakes: {
      tr: [
        'nm’yi metreye çevirmeden işlem yapmak (10⁹ katlık hata).',
        'Frekans ile dalga sayısını karıştırmak: ν (s⁻¹) ve ν̃ (cm⁻¹) farklı büyüklüklerdir; ν = c · ν̃.',
        'Ortam değişince frekansın değiştiğini sanmak; değişen dalga boyu ve hızdır.',
      ],
      en: [
        'Using nm without converting to metres (an error of 10⁹).',
        'Confusing frequency with wavenumber: ν (s⁻¹) and ν̃ (cm⁻¹) are different quantities; ν = c · ν̃.',
        'Thinking the frequency changes in a new medium; it is the wavelength and speed that change.',
      ],
    },
    related: ['wavenumber', 'photon-energy', 'refractive-index'],
  },

  wavenumber: {
    concept: {
      tr: 'Dalga sayısı (ν̃), birim uzunluktaki dalga sayısıdır ve spektroskopide hemen her zaman cm⁻¹ ile verilir. IR ve Raman spektroskopisinde dalga boyu yerine kullanılır, çünkü frekans ve enerjiyle doğru orantılıdır: dalga sayısı iki katına çıkınca foton enerjisi de iki katına çıkar.\n\nOrta IR spektrumları genellikle 4000–400 cm⁻¹ (2,5–25 µm) aralığında kaydedilir; fonksiyonel grupların karakteristik bantları bu bölgededir.',
      en: 'The wavenumber (ν̃) is the number of waves per unit length and in spectroscopy is almost always given in cm⁻¹. It replaces wavelength in IR and Raman spectroscopy because it is directly proportional to frequency and energy: doubling the wavenumber doubles the photon energy.\n\nMid-IR spectra are usually recorded over 4000–400 cm⁻¹ (2.5–25 µm), where the characteristic bands of functional groups lie.',
    },
    meaning: {
      tr: 'ν̃ = 1 / λ; λ santimetre cinsinden alınırsa ν̃ cm⁻¹ çıkar. Pratik dönüşümler: ν̃ (cm⁻¹) = 10⁴ / λ (µm) = 10⁷ / λ (nm).\n\nFrekans ve enerjiyle ilişkisi: ν = c · ν̃ ve E = h · c · ν̃. Bu yüzden dalga sayısı çoğu zaman bir enerji birimi gibi kullanılır (1 cm⁻¹ ≈ 0,124 meV).\n\nDalga sayısı ölçeği enerjiyle doğrusal olduğundan IR spektrumlarının yatay ekseni cm⁻¹ olarak çizilir; geleneksel olarak yüksek dalga sayıları soldadır.',
      en: 'ν̃ = 1 / λ; with λ in centimetres, ν̃ comes out in cm⁻¹. Handy conversions: ν̃ (cm⁻¹) = 10⁴ / λ (µm) = 10⁷ / λ (nm).\n\nRelation to frequency and energy: ν = c · ν̃ and E = h · c · ν̃. The wavenumber is therefore often used as an energy unit (1 cm⁻¹ ≈ 0.124 meV).\n\nBecause the wavenumber scale is linear in energy, IR spectra are plotted against cm⁻¹, traditionally with high wavenumbers on the left.',
    },
    usage: {
      tr: [
        'IR ve Raman bant konumlarını dalga boyuna çevirmek ya da tersini yapmak.',
        'Enerji farklarını karşılaştırmak: dalga sayısı farkları doğrudan enerji farklarıdır (Raman kaymasında olduğu gibi).',
        'SI birimi m⁻¹’dir, ancak spektroskopide cm⁻¹ kullanılır (1 cm⁻¹ = 100 m⁻¹).',
        'Dalga boyu farkları doğrudan dalga sayısı farkına çevrilemez; her değer ayrı ayrı çevrilip sonra çıkarılır.',
      ],
      en: [
        'Converting IR and Raman band positions to wavelength and back.',
        'Comparing energy differences: wavenumber differences are energy differences (as in the Raman shift).',
        'The SI unit is m⁻¹, but spectroscopy uses cm⁻¹ (1 cm⁻¹ = 100 m⁻¹).',
        'A wavelength difference cannot be converted directly; convert each value separately, then subtract.',
      ],
    },
    solution: {
      tr: [
        'Verilen: λ = 5 µm.',
        '1 µm = 10⁻⁴ cm olduğundan λ = 5 × 10⁻⁴ cm.',
        'ν̃ = 1 / λ = 1 / (5 × 10⁻⁴ cm).',
        'Sonuç: ν̃ = 2000 cm⁻¹ (10⁴ / 5 µm ile de aynı sonuç bulunur).',
      ],
      en: [
        'Given: λ = 5 µm.',
        'Since 1 µm = 10⁻⁴ cm, λ = 5 × 10⁻⁴ cm.',
        'ν̃ = 1 / λ = 1 / (5 × 10⁻⁴ cm).',
        'Result: ν̃ = 2000 cm⁻¹ (10⁴ / 5 µm gives the same).',
      ],
    },
    mistakes: {
      tr: [
        'λ’yı metre cinsinden alıp sonucu cm⁻¹ sanmak (sonuç m⁻¹ olur; 100 katlık hata).',
        'Dalga sayısını Hz cinsinden frekansla karıştırmak.',
        'Eşit dalga boyu aralıklarının (ör. 2–3 µm ile 10–11 µm) eşit enerji aralıkları olduğunu sanmak.',
      ],
      en: [
        'Taking λ in metres and reading the result as cm⁻¹ (it is m⁻¹; a factor of 100).',
        'Confusing wavenumber with frequency in Hz.',
        'Assuming equal wavelength intervals (e.g. 2–3 µm and 10–11 µm) are equal energy intervals.',
      ],
    },
    related: ['wavelength-frequency', 'hooke-ir', 'raman-shift', 'photon-energy'],
  },

  'photon-energy': {
    concept: {
      tr: 'Işıma, enerjisi frekansıyla orantılı paketler (fotonlar) hâlinde soğurulur ve yayılır. Bir molekül ancak iki enerji düzeyi arasındaki farka eşit enerjili bir fotonu soğurabilir; spektroskopinin temel ilkesi budur.\n\nUV-görünür fotonlar elektronik geçişlere, IR fotonları titreşim geçişlerine, mikrodalga ve radyo frekansı fotonları ise dönme ve spin geçişlerine karşılık gelir. Foton enerjisini kJ/mol cinsinden ifade etmek, onu bağ enerjileriyle karşılaştırmayı kolaylaştırır.',
      en: 'Radiation is absorbed and emitted in packets (photons) whose energy is proportional to the frequency. A molecule can absorb a photon only if its energy matches the gap between two energy levels; this is the basic principle of spectroscopy.\n\nUV-visible photons correspond to electronic transitions, IR photons to vibrational transitions, and microwave and radio-frequency photons to rotational and spin transitions. Expressing photon energy in kJ/mol makes it easy to compare with bond energies.',
    },
    meaning: {
      tr: 'E = h · ν = h · c / λ (Planck–Einstein bağıntısı); h = 6,626 × 10⁻³⁴ J·s Planck sabitidir. Sonuç tek bir fotonun enerjisidir (J).\n\nBirim dönüşümleri:\n• Bir mol foton için J değeri Avogadro sabitiyle (N_A) çarpılır: E (kJ/mol) ≈ 1,196 × 10⁵ / λ (nm).\n• eV cinsinden: E (eV) ≈ 1240 / λ (nm).\n\nEnerji dalga boyuyla ters, dalga sayısıyla doğru orantılıdır.',
      en: 'E = h · ν = h · c / λ (Planck–Einstein relation); h = 6.626 × 10⁻³⁴ J·s is Planck’s constant. The result is the energy of a single photon (J).\n\nUnit conversions:\n• For one mole of photons, multiply by Avogadro’s number: E (kJ/mol) ≈ 1.196 × 10⁵ / λ (nm).\n• In eV: E (eV) ≈ 1240 / λ (nm).\n\nThe energy is inversely proportional to wavelength and directly proportional to wavenumber.',
    },
    usage: {
      tr: [
        'Bir geçişin enerjisini bağ enerjileriyle karşılaştırmak (ör. UV ışığının bir bağı koparıp koparamayacağı).',
        'Elektronik, titreşim ve dönme geçişlerinin enerji ölçeklerini karşılaştırmak.',
        'Fotoelektron spektroskopisi (XPS) gibi tekniklerde eV birimine geçmek.',
        'Bir fotonun enerjisi ışık şiddetinden bağımsızdır; şiddet yalnızca foton sayısını belirler.',
      ],
      en: [
        'Comparing a transition energy with bond energies (e.g. whether UV light can break a bond).',
        'Comparing the energy scales of electronic, vibrational and rotational transitions.',
        'Switching to eV for techniques such as photoelectron spectroscopy (XPS).',
        'The energy of one photon does not depend on intensity; intensity only sets the number of photons.',
      ],
    },
    solution: {
      tr: [
        'Verilen: λ = 500 nm = 5,00 × 10⁻⁷ m; h = 6,626 × 10⁻³⁴ J·s; c = 2,998 × 10⁸ m/s.',
        'Tek foton: E = h · c / λ = (6,626 × 10⁻³⁴ × 2,998 × 10⁸) / 5,00 × 10⁻⁷ = 3,973 × 10⁻¹⁹ J (≈ 2,48 eV).',
        'Bir mol foton: 3,973 × 10⁻¹⁹ J × 6,022 × 10²³ mol⁻¹ = 2,393 × 10⁵ J/mol.',
        'Sonuç: E = 239,3 kJ/mol.',
      ],
      en: [
        'Given: λ = 500 nm = 5.00 × 10⁻⁷ m; h = 6.626 × 10⁻³⁴ J·s; c = 2.998 × 10⁸ m/s.',
        'One photon: E = h · c / λ = (6.626 × 10⁻³⁴ × 2.998 × 10⁸) / 5.00 × 10⁻⁷ = 3.973 × 10⁻¹⁹ J (≈ 2.48 eV).',
        'One mole of photons: 3.973 × 10⁻¹⁹ J × 6.022 × 10²³ mol⁻¹ = 2.393 × 10⁵ J/mol.',
        'Result: E = 239.3 kJ/mol.',
      ],
    },
    mistakes: {
      tr: [
        'Tek fotonun enerjisini (J) molar enerjiyle (kJ/mol) karıştırmak; aradaki çarpan Avogadro sabitidir (N_A).',
        'Dalga boyunu nm olarak doğrudan formüle koymak.',
        'Dalga boyu arttıkça enerjinin arttığını sanmak; IR fotonları UV fotonlarından daha az enerjilidir.',
      ],
      en: [
        'Confusing the energy of one photon (J) with molar energy (kJ/mol); the factor between them is Avogadro’s number.',
        'Putting the wavelength into the formula in nm.',
        'Thinking energy increases with wavelength; IR photons carry less energy than UV photons.',
      ],
    },
    related: ['wavelength-frequency', 'wavenumber', 'xps-binding'],
  },

  'refractive-index': {
    concept: {
      tr: 'Işık madde içinden geçerken ortamın elektronlarıyla etkileşir ve boşluktakinden daha yavaş ilerler. Kırılma indisi (n) bu yavaşlamanın ölçüsüdür. İki ortamın arayüzünde ışığın yön değiştirmesi (Snell yasası: n₁ sin θ₁ = n₂ sin θ₂), tam iç yansıma ve mercek, prizma, optik fiber gibi bileşenlerin çalışması kırılma indisine dayanır.\n\nRefraktometride n, saf maddelerin tanınması, saflık kontrolü ve çözelti derişimi (ör. şeker çözeltileri) için hızlı ve tahribatsız bir ölçümdür. HPLC’deki kırılma indisi dedektörü de bu özelliği kullanır.',
      en: 'As light passes through matter it interacts with the electrons of the medium and travels more slowly than in vacuum. The refractive index (n) measures this slowing. Bending at an interface (Snell’s law: n₁ sin θ₁ = n₂ sin θ₂), total internal reflection and the working of lenses, prisms and optical fibres all rest on the refractive index.\n\nIn refractometry n is a fast, non-destructive measurement for identifying pure substances, checking purity and determining solution concentration (e.g. sugar solutions). The refractive-index detector in HPLC uses the same property.',
    },
    meaning: {
      tr: 'n = c / v. Boşlukta n = 1, diğer ortamlarda n > 1’dir (hava ≈ 1,0003; su ≈ 1,333; tipik camlar ≈ 1,5).\n\nKırılma indisi dalga boyuna bağlıdır (dispersiyon): çoğu saydam maddede dalga boyu kısaldıkça n artar; prizmanın beyaz ışığı renklere ayırması bu yüzdendir. Sıcaklıkla da değişir. Bu nedenle değerler n_D²⁰ gibi, sodyum D çizgisi (589 nm) ve 20 °C için verilir.\n\nOrtamda ışığın frekansı değişmez; hızı c/n, dalga boyu λ₀/n olur.',
      en: 'n = c / v. In vacuum n = 1; in any other medium n > 1 (air ≈ 1.0003, water ≈ 1.333, typical glasses ≈ 1.5).\n\nThe refractive index depends on wavelength (dispersion): in most transparent materials n increases as the wavelength gets shorter, which is why a prism splits white light into colours. It also changes with temperature, so values are quoted as n_D²⁰, i.e. at the sodium D line (589 nm) and 20 °C.\n\nIn the medium the frequency is unchanged; the speed becomes c/n and the wavelength λ₀/n.',
    },
    usage: {
      tr: [
        'Saf sıvıların tanınması ve saflık kontrolü (n_D²⁰ literatür değeriyle karşılaştırma).',
        'Şeker, alkol ya da tuz çözeltilerinde derişimi kalibrasyon eğrisiyle bulmak.',
        'Snell yasası, tam iç yansıma (ATR, optik fiber) ve molar refraksiyon hesaplarına girdi olarak.',
        'Ölçüm sıcaklığı kontrol edilmeli ve dalga boyu belirtilmelidir.',
      ],
      en: [
        'Identifying pure liquids and checking purity (comparison with the literature n_D²⁰).',
        'Determining the concentration of sugar, alcohol or salt solutions from a calibration curve.',
        'As input for Snell’s law, total internal reflection (ATR, optical fibres) and molar refraction.',
        'Control the temperature and state the wavelength of the measurement.',
      ],
    },
    solution: {
      tr: [
        'Verilen: v = 225 000 km/s = 2,25 × 10⁸ m/s; c = 2,998 × 10⁸ m/s.',
        'n = c / v = 2,998 × 10⁸ m/s ÷ 2,25 × 10⁸ m/s.',
        'Sonuç: n = 1,332 (suyun kırılma indisine yakın).',
      ],
      en: ['Given: v = 225 000 km/s = 2.25 × 10⁸ m/s; c = 2.998 × 10⁸ m/s.', 'n = c / v = 2.998 × 10⁸ m/s ÷ 2.25 × 10⁸ m/s.', 'Result: n = 1.332 (close to the refractive index of water).'],
    },
    mistakes: {
      tr: [
        'Hızları farklı birimlerde kullanmak (km/s ile m/s).',
        'n < 1 bulup bunu anlamlı saymak; görünür ışık için sıradan ortamlarda n > 1’dir.',
        'Farklı sıcaklık ya da dalga boylarında ölçülmüş kırılma indislerini karşılaştırmak.',
      ],
      en: [
        'Using speeds in different units (km/s vs m/s).',
        'Accepting n < 1 as meaningful; for visible light in ordinary media n > 1.',
        'Comparing refractive indices measured at different temperatures or wavelengths.',
      ],
    },
    related: ['molar-refraction', 'atr-critical-angle', 'fiber-na', 'wavelength-frequency'],
  },

  'absorbance-transmittance': {
    concept: {
      tr: 'Bir çözeltiden geçen ışık demetinin gücü, soğurucu türler nedeniyle P₀’dan P’ye düşer. Geçirgenlik (T = P/P₀) gelen ışığın geçen kesridir; absorbans (A) ise geçirgenliğin eksi logaritmasıdır. Spektrofotometre, tanık (blank) ve numune ile P₀ ve P’yi ölçer ve sonucu T ya da A olarak gösterir.\n\nNicel analizde absorbans kullanılır, çünkü derişimle doğru orantılıdır (Beer yasası). Geçirgenlik ise derişim arttıkça üstel olarak azalır.',
      en: 'The power of a light beam passing through a solution falls from P₀ to P because of absorbing species. Transmittance (T = P/P₀) is the fraction of light transmitted; absorbance (A) is the negative logarithm of the transmittance. A spectrophotometer measures P₀ and P with a blank and the sample and reports T or A.\n\nQuantitative analysis uses absorbance because it is proportional to concentration (Beer’s law), whereas transmittance decreases exponentially with concentration.',
    },
    meaning: {
      tr: 'A = −log T = log(P₀/P). %T = 100 · T olduğundan A = 2 − log(%T).\n\nÖlçek ilişkileri:\n• %T = 100 → A = 0 (soğurma yok).\n• %T = 10 → A = 1; %T = 1 → A = 2. Her absorbans birimi, geçen ışığın 10 kat azalması demektir.\n• A = 0,301 ise ışığın yarısı geçer (%T = 50).\n\nAbsorbans birimsizdir. P₀, tanık çözeltiyle doldurulmuş küvetten geçen ışık gücüdür; böylece küvet yüzeylerindeki yansıma ve çözücünün soğurması düzeltilmiş olur.',
      en: 'A = −log T = log(P₀/P). Since %T = 100 · T, A = 2 − log(%T).\n\nScale relations:\n• %T = 100 → A = 0 (no absorption).\n• %T = 10 → A = 1; %T = 1 → A = 2. Each absorbance unit is a tenfold decrease in transmitted light.\n• A = 0.301 means half of the light is transmitted (%T = 50).\n\nAbsorbance is dimensionless. P₀ is the power transmitted through a cell filled with the blank, which corrects for reflection at the cell walls and absorption by the solvent.',
    },
    usage: {
      tr: [
        'Yalnızca %T gösteren cihaz okumalarını absorbansa çevirmek.',
        'Bir absorbansın hangi geçirgenliğe karşılık geldiğini görmek (A = 2’de ışığın yalnızca %1’i geçer, ölçüm gürültülüdür).',
        'Beer yasası ve kalibrasyon hesaplarından önce veriyi absorbansa çevirmek.',
        'Saçılma ve yansıma kayıpları da absorbans gibi görünür; uygun bir tanık bunları ancak kısmen düzeltir.',
      ],
      en: [
        'Converting readings from instruments that display only %T into absorbance.',
        'Seeing which transmittance an absorbance corresponds to (at A = 2 only 1% of the light gets through and the reading is noisy).',
        'Converting data to absorbance before Beer’s-law and calibration calculations.',
        'Scattering and reflection losses also look like absorbance; a suitable blank corrects them only partly.',
      ],
    },
    solution: {
      tr: ['Verilen: %T = 25 → T = 0,25.', 'A = −log T = −log 0,25.', 'Ya da: A = 2 − log 25 = 2 − 1,398.', 'Sonuç: A = 0,6021 (ışığın %75’i soğurulur).'],
      en: ['Given: %T = 25 → T = 0.25.', 'A = −log T = −log 0.25.', 'Or: A = 2 − log 25 = 2 − 1.398.', 'Result: A = 0.6021 (75% of the light is absorbed).'],
    },
    mistakes: {
      tr: [
        '%T değerini doğrudan −log’a koymak: −log 25 = −1,40 (negatif absorbans) çıkar; T = 0,25 ya da A = 2 − log(%T) kullanılmalıdır.',
        'Doğal logaritma (ln) kullanmak; absorbans 10 tabanlıdır.',
        'Absorbansı soğurulan ışık yüzdesi sanmak: A = 0,60, ışığın %60’ının değil yaklaşık %75’inin soğurulması demektir.',
      ],
      en: [
        'Putting %T straight into −log: −log 25 = −1.40 (negative absorbance); use T = 0.25 or A = 2 − log(%T).',
        'Using the natural logarithm (ln); absorbance is base 10.',
        'Reading absorbance as the percentage absorbed: A = 0.60 means about 75%, not 60%, of the light is absorbed.',
      ],
    },
    related: ['beer-lambert', 'ringbom-error', 'two-component'],
  },

  'beer-lambert': {
    concept: {
      tr: 'Beer–Lambert yasası, tek renkli (monokromatik) ışığın soğurulmasının, ışığın yolu üzerindeki soğurucu tanecik sayısıyla orantılı olduğunu söyler. Bu sayı hem derişime hem de ışığın çözeltide aldığı yola bağlıdır.\n\nUV-görünür spektrofotometri, atomik absorpsiyon ve HPLC’nin UV dedektörü gibi birçok yöntem nicel ölçümü bu yasaya dayandırır.',
      en: 'The Beer–Lambert law states that the absorption of monochromatic light is proportional to the number of absorbing particles in the light path. That number depends on both the concentration and the distance the light travels through the solution.\n\nUV-visible spectrophotometry, atomic absorption and many detectors such as the HPLC UV detector base their quantitative measurements on this law.',
    },
    meaning: {
      tr: 'Türetme: kalınlığı db olan ince bir tabakada ışık gücündeki azalma, gelen güçle ve tabakadaki soğurucu sayısıyla orantılıdır: −dP/P = k · c · db. 0’dan b’ye integre edilince ln(P₀/P) = k · b · c bulunur; 10 tabanına geçilince A = log(P₀/P) = ε · b · c elde edilir.\n\n• ε: molar absorptivite (L mol⁻¹ cm⁻¹). Maddeye, dalga boyuna ve çözücüye özgüdür; geçişin olasılığını yansıtır. Güçlü izinli geçişlerde 10⁴–10⁵ mertebesindedir.\n• b: optik yol uzunluğu (genellikle 1,00 cm küvet).\n• c: derişim (mol/L).\n\nSapmalar: yüksek derişimde (≳ 0,01 M) tanecikler arası etkileşimler ve kırılma indisi değişimi; kimyasal sapmalar (asosiyasyon, ayrışma, asit–baz dengesi); enstrümantal sapmalar (polikromatik ışık, kaçak ışık). Polikromatik ve kaçak ışık kalibrasyon eğrisini genellikle derişim eksenine doğru (negatif yönde) büker.',
      en: 'Derivation: in a thin layer of thickness db the decrease in power is proportional to the incident power and to the number of absorbers in the layer: −dP/P = k · c · db. Integrating from 0 to b gives ln(P₀/P) = k · b · c; switching to base 10 gives A = log(P₀/P) = ε · b · c.\n\n• ε: molar absorptivity (L mol⁻¹ cm⁻¹). It is specific to the substance, wavelength and solvent and reflects the probability of the transition; strongly allowed transitions reach 10⁴–10⁵.\n• b: path length (usually a 1.00 cm cell).\n• c: concentration (mol/L).\n\nDeviations: at high concentration (≳ 0.01 M) interactions between particles and changes in refractive index; chemical deviations (association, dissociation, acid–base equilibria); instrumental deviations (polychromatic radiation, stray light). Polychromatic and stray light usually bend the calibration curve towards the concentration axis (negative deviation).',
    },
    usage: {
      tr: [
        'Bilinen ε ile ya da kalibrasyon doğrusuyla bilinmeyen derişimi bulmak.',
        'Standartlardan ε’yi belirlemek (A – c doğrusunun eğimi = ε · b).',
        'Ölçümü absorbans maksimumunda (λ_max) yapmak duyarlılığı artırır ve dalga boyu ayarındaki küçük hataların etkisini azaltır.',
        'Doğrusallık her yöntem için kalibrasyonla doğrulanmalıdır; tek bir literatür ε değerine güvenmek risklidir.',
      ],
      en: [
        'Finding an unknown concentration from a known ε or from a calibration line.',
        'Determining ε from standards (slope of the A – c line = ε · b).',
        'Measuring at the absorption maximum (λ_max) increases sensitivity and reduces the effect of small wavelength-setting errors.',
        'Linearity must be checked by calibration for every method; relying on a single literature ε is risky.',
      ],
    },
    solution: {
      tr: [
        'Verilen: A = 0,45; ε = 15 000 L mol⁻¹ cm⁻¹; b = 1 cm.',
        'c = A / (ε · b) = 0,45 / (15 000 L mol⁻¹ cm⁻¹ × 1 cm).',
        'Birim kontrolü: 1 / (L mol⁻¹ cm⁻¹ · cm) = mol/L.',
        'Sonuç: c = 3 × 10⁻⁵ M (30 µM).',
      ],
      en: [
        'Given: A = 0.45; ε = 15 000 L mol⁻¹ cm⁻¹; b = 1 cm.',
        'c = A / (ε · b) = 0.45 / (15 000 L mol⁻¹ cm⁻¹ × 1 cm).',
        'Unit check: 1 / (L mol⁻¹ cm⁻¹ · cm) = mol/L.',
        'Result: c = 3 × 10⁻⁵ M (30 µM).',
      ],
    },
    mistakes: {
      tr: [
        'Optik yolu mm olarak girip cm sanmak (1 cm = 10 mm).',
        'Molar absorptiviteyi mg/L cinsinden derişimle kullanmak; kütle derişimi için kütlesel absorptivite (a, L g⁻¹ cm⁻¹) gerekir.',
        'Kalibrasyon aralığının dışına (ör. A > 1,5) çıkmak; hem Beer yasasından sapma hem fotometrik hata büyür.',
      ],
      en: [
        'Entering the path length in mm and reading it as cm (1 cm = 10 mm).',
        'Using the molar absorptivity with a concentration in mg/L; mass concentration needs the absorptivity a (L g⁻¹ cm⁻¹).',
        'Working outside the calibrated range (e.g. A > 1.5), where both Beer’s-law deviations and photometric error grow.',
      ],
    },
    related: ['absorbance-transmittance', 'ringbom-error', 'sandell', 'linear-regression'],
  },

  'ringbom-error': {
    concept: {
      tr: 'Spektrofotometrik ölçümün kesinliği, absorbansın hangi bölgede okunduğuna bağlıdır. Çok düşük absorbansta P ile P₀ birbirine çok yakındır; çok yüksek absorbansta ise dedektöre çok az ışık ulaşır. Her iki durumda da %T okumasındaki küçük bir belirsizlik derişimde büyük bir bağıl hataya dönüşür.\n\nBu araç, geçirgenlik okumasındaki mutlak belirsizliğin (Δ%T) derişime nasıl yansıdığını hesaplar ve ölçüm için en uygun absorbans aralığını gösterir.',
      en: 'The precision of a spectrophotometric measurement depends on where on the absorbance scale it is made. At very low absorbance P and P₀ are almost equal; at very high absorbance very little light reaches the detector. In both cases a small uncertainty in reading %T becomes a large relative error in concentration.\n\nThis tool computes how an absolute uncertainty in transmittance (Δ%T) propagates into concentration and shows the best absorbance range for measurement.',
    },
    meaning: {
      tr: 'c ∝ A = −log T olduğundan türev alınır: dc/c = dA/A = 0,4343 · dT / (T · log T). Mutlak değerle: Δc/c = 0,4343 · ΔT / (T · |log T|). 0,4343 = 1/ln 10 çarpanı, log T’nin türevinden gelir.\n\nBu fonksiyonun minimumu T = 1/e = 0,368 (%36,8), yani A = 0,4343’tedir. Δ%T = 0,5 için:\n• %T = 36,8 (A = 0,434) → %1,36 (en küçük hata).\n• %T = 80 (A = 0,097) → %2,80.\n• %T = 10 (A = 1,0) → %2,17.\n\nEğri minimum çevresinde oldukça düzdür; bu yüzden pratikte A ≈ 0,2–0,8 aralığı önerilir.\n\nModel, belirsizliğin T’den bağımsız sabit bir okuma gürültüsü olduğunu varsayar. Foton gürültüsü ya da küvet konumlandırma hatası baskınsa en uygun aralık değişir ve genellikle daha yüksek absorbanslara kayar.',
      en: 'Since c ∝ A = −log T, differentiate: dc/c = dA/A = 0.4343 · dT / (T · log T). In absolute value: Δc/c = 0.4343 · ΔT / (T · |log T|). The factor 0.4343 = 1/ln 10 comes from the derivative of log T.\n\nThe minimum of this function is at T = 1/e = 0.368 (36.8%), i.e. A = 0.4343. For Δ%T = 0.5:\n• %T = 36.8 (A = 0.434) → 1.36% (smallest error).\n• %T = 80 (A = 0.097) → 2.80%.\n• %T = 10 (A = 1.0) → 2.17%.\n\nThe curve is fairly flat near the minimum, hence the practical advice to work at A ≈ 0.2–0.8.\n\nThe model assumes a constant reading noise independent of T. If photon (shot) noise or cell-positioning error dominates, the optimum range changes, generally moving to higher absorbances.',
    },
    usage: {
      tr: [
        'Seyreltme ve küvet seçimini, absorbansı en düşük hata bölgesine getirecek şekilde planlamak.',
        'Belirli bir okumanın beklenen bağıl hatasını tahmin etmek.',
        'Δ%T, cihaz özelliklerinden ya da aynı çözeltinin tekrarlı okumalarından alınabilir.',
        'Sonuç, Δ%T’nin sabit olduğu varsayımına dayanan yaklaşık bir değerdir.',
      ],
      en: [
        'Planning dilution and cell choice so that the absorbance falls in the low-error region.',
        'Estimating the expected relative error of a given reading.',
        'Δ%T can be taken from the instrument specifications or from repeated readings of one solution.',
        'The result is an estimate based on the assumption of constant Δ%T.',
      ],
    },
    solution: {
      tr: [
        'Verilen: %T = 36,8 → T = 0,368; Δ%T = 0,5 → ΔT = 0,005.',
        'log T = log 0,368 = −0,4342; T · |log T| = 0,368 × 0,4342 = 0,1598.',
        'Δc/c = 0,4343 × 0,005 / 0,1598 = 0,01359.',
        'Sonuç: Δc/c = %1,359 (bu koşullarda ulaşılabilecek en küçük hata).',
      ],
      en: [
        'Given: %T = 36.8 → T = 0.368; Δ%T = 0.5 → ΔT = 0.005.',
        'log T = log 0.368 = −0.4342; T · |log T| = 0.368 × 0.4342 = 0.1598.',
        'Δc/c = 0.4343 × 0.005 / 0.1598 = 0.01359.',
        'Result: Δc/c = 1.359% (the smallest error achievable under these conditions).',
      ],
    },
    mistakes: {
      tr: [
        'ΔT’yi yüzde (0,5), T’yi kesir (0,368) olarak karıştırıp 100 katlık hata yapmak; ikisi aynı ölçekte olmalıdır.',
        'En küçük hatanın A = 1’de olduğunu sanmak (minimum A = 0,434’tedir).',
        'ln T ile 0,4343 çarpanını birlikte kullanmak: çarpan log T ile birlikte gelir; ln T kullanılırsa çarpan atılır.',
      ],
      en: [
        'Mixing ΔT as a percentage (0.5) with T as a fraction (0.368), an error of 100; both must be on the same scale.',
        'Believing the minimum error is at A = 1 (it is at A = 0.434).',
        'Combining ln T with the factor 0.4343: the factor belongs with log T; with ln T it must be dropped.',
      ],
    },
    related: ['absorbance-transmittance', 'beer-lambert', 'propagation'],
  },

  'fluorescence-linearity': {
    concept: {
      tr: 'Floresansta ölçülen büyüklük geçen ışık değil, soğurulan ışığın yeniden yayılan kısmıdır: uyarılan moleküllerin bir kesri (kuantum verimi Φ) foton yayarak temel duruma döner. Yayılan ışık karanlık bir zemin üzerinde ölçüldüğü için floresans, absorpsiyon ölçümlerinden genellikle çok daha duyarlıdır.\n\nAncak floresans şiddeti ile derişim arasındaki doğrusallık yalnızca düşük absorbanslarda geçerlidir. Bu araç, belirli bir absorbansta doğrusal yaklaşımın ne kadar saptığını gösterir.',
      en: 'Fluorescence measures not transmitted light but the part of the absorbed light that is re-emitted: a fraction of the excited molecules (the quantum yield Φ) returns to the ground state by emitting a photon. Because the emitted light is measured against a dark background, fluorescence is usually much more sensitive than absorption.\n\nThe relation between fluorescence intensity and concentration, however, is linear only at low absorbance. This tool shows how far the linear approximation deviates at a given absorbance.',
    },
    meaning: {
      tr: 'Soğurulan ışık gücü P₀ − P = P₀(1 − 10⁻ᴬ) olduğundan floresans şiddeti F = K · Φ · P₀ · (1 − 10⁻ᴬ), burada A = εbc’dir.\n\nKüçük A için 10⁻ᴬ = e^(−2,303·A) ≈ 1 − 2,303·A yazılabilir. Bu durumda F ≈ 2,303 · K · Φ · P₀ · ε · b · c olur ve F derişimle doğru orantılıdır.\n\nSapma = 1 − (1 − 10⁻ᴬ) / (2,303 · A), gerçek şiddetin doğrusal tahminin ne kadar altında kaldığını gösterir. Küçük A için yaklaşık 1,15 · A’ya eşittir:\n• A = 0,01 → %1,1\n• A = 0,05 → %5,5\n• A = 0,1 → %10,7\n\nYüksek derişimde ayrıca iç süzgeç etkisi (uyarma ışığının küvetin girişinde tükenmesi ve yayılan ışığın yeniden soğurulması) ve kendi kendini sönümleme eğriyi daha da büker; çok yüksek derişimde floresans şiddeti azalmaya bile başlayabilir.',
      en: 'The absorbed power is P₀ − P = P₀(1 − 10⁻ᴬ), so the fluorescence intensity is F = K · Φ · P₀ · (1 − 10⁻ᴬ), with A = εbc.\n\nFor small A, 10⁻ᴬ = e^(−2.303·A) ≈ 1 − 2.303·A, so F ≈ 2.303 · K · Φ · P₀ · ε · b · c, directly proportional to concentration.\n\nDeviation = 1 − (1 − 10⁻ᴬ) / (2.303 · A) shows how far the true intensity falls below the linear estimate. For small A it is about 1.15 · A:\n• A = 0.01 → 1.1%\n• A = 0.05 → 5.5%\n• A = 0.1 → 10.7%\n\nAt high concentration the inner-filter effect (excitation light used up at the front of the cell and re-absorption of emitted light) and self-quenching bend the curve further; at very high concentration the intensity may even start to decrease.',
    },
    usage: {
      tr: [
        'Floresans kalibrasyonunun doğrusal kalacağı üst derişim sınırını tahmin etmek.',
        'Seyreltme gerekip gerekmediğine karar vermek: uyarma dalga boyunda A ≲ 0,01–0,02 tutmak sapmayı yaklaşık %1–2’de tutar; A = 0,05’te sapma zaten ≈ %5’tir.',
        'Hesaplanan sapma yalnızca birincil soğurma etkisini gösterir; ikincil iç süzgeç etkisi ayrıca değerlendirilmelidir.',
      ],
      en: [
        'Estimating the upper concentration limit for a linear fluorescence calibration.',
        'Deciding whether to dilute: keeping A ≲ 0.01–0.02 at the excitation wavelength keeps the deviation to about 1–2 %; at A = 0.05 it is already ≈ 5 %.',
        'The calculated deviation covers only the primary absorption effect; secondary inner-filter effects must be considered separately.',
      ],
    },
    solution: {
      tr: [
        'Verilen: uyarma dalga boyunda A = 0,05.',
        '10⁻⁰’⁰⁵ = 0,8913 → 1 − 10⁻ᴬ = 0,1087; doğrusal yaklaşım: 2,303 × 0,05 = 0,1151.',
        'Oran: 0,1087 / 0,1151 = 0,9446; gerçek şiddet doğrusal tahminin %94,46’sıdır.',
        'Sonuç: doğrusallıktan sapma = %5,542.',
      ],
      en: [
        'Given: A = 0.05 at the excitation wavelength.',
        '10^−0.05 = 0.8913 → 1 − 10⁻ᴬ = 0.1087; linear approximation: 2.303 × 0.05 = 0.1151.',
        'Ratio: 0.1087 / 0.1151 = 0.9446; the true intensity is 94.46% of the linear estimate.',
        'Result: deviation from linearity = 5.542%.',
      ],
    },
    mistakes: {
      tr: [
        'Floresansın her derişimde doğrusal olduğunu varsayıp kalibrasyonu yüksek derişimlere uzatmak.',
        'Emisyon dalga boyundaki absorbansı kullanmak; formüldeki A, uyarma dalga boyundaki absorbanstır.',
        '2,303 (= ln 10) çarpanını unutmak; bu çarpan 10 tabanlı absorbanstan gelir.',
      ],
      en: [
        'Assuming fluorescence is linear at any concentration and extending the calibration too far.',
        'Using the absorbance at the emission wavelength; A in the formula is the absorbance at the excitation wavelength.',
        'Forgetting the factor 2.303 (= ln 10), which comes from the base-10 absorbance.',
      ],
    },
    related: ['stern-volmer', 'beer-lambert', 'linear-regression'],
  },

  'hooke-ir': {
    concept: {
      tr: 'Kızılötesi ışınım, molekül içindeki bağların titreşimlerini uyarır. En basit model, iki atomu kütlesiz bir yayla bağlı iki küre gibi düşünen harmonik osilatördür. Bu modelde titreşim frekansı yalnızca bağın sertliğine (kuvvet sabiti k) ve atomların kütlelerine bağlıdır.\n\nModel, fonksiyonel grupların IR bantlarının neden belirli bölgelerde görüldüğünü açıklar: güçlü (çok katlı) bağlar ve hafif atomlar yüksek dalga sayısında titreşir. C≡C > C=C > C–C sıralaması ve O–H, N–H, C–H gerilme bantlarının yaklaşık 2800 cm⁻¹’in üzerinde görülmesi bu yüzdendir.',
      en: 'Infrared radiation excites the vibrations of bonds within a molecule. The simplest model is the harmonic oscillator: two balls joined by a massless spring. In this model the vibrational frequency depends only on the stiffness of the bond (force constant k) and the masses of the atoms.\n\nThe model explains why functional-group bands appear in characteristic regions: strong (multiple) bonds and light atoms vibrate at high wavenumber. Hence the order C≡C > C=C > C–C, and O–H, N–H and C–H stretches above roughly 2800 cm⁻¹.',
    },
    meaning: {
      tr: 'Klasik titreşim frekansı ν = (1/2π) · √(k/µ); c’ye bölünerek dalga sayısı elde edilir: ν̃ = (1/2πc) · √(k/µ).\n\n• k: kuvvet sabiti (N/m). Tek bağlar için yaklaşık 500, çift bağlar için yaklaşık 1000, üçlü bağlar için yaklaşık 1500 N/m mertebesindedir.\n• µ = m₁m₂/(m₁ + m₂): indirgenmiş kütle. Formüle girmeden önce bir atom başına kilograma çevrilir: µ (kg) = µ (g/mol) / (1000 · N_A).\n\nİzotop etkisi: k izotopla değişmez, yalnızca µ değişir. C–H yerine C–D gelince µ yaklaşık 1,86 kat artar ve dalga sayısı √1,86 ≈ 1,36 kat azalır (≈ 3000 → ≈ 2200 cm⁻¹).\n\nGerçek bağlar anharmoniktir ve titreşimler komşu bağlarla eşleşir; bu yüzden model yalnızca yaklaşık bir değer verir.',
      en: 'The classical vibrational frequency is ν = (1/2π) · √(k/µ); dividing by c gives the wavenumber: ν̃ = (1/2πc) · √(k/µ).\n\n• k: force constant (N/m), roughly 500 for single, 1000 for double and 1500 N/m for triple bonds.\n• µ = m₁m₂/(m₁ + m₂): reduced mass. Before use it is converted to kilograms per molecule: µ (kg) = µ (g/mol) / (1000 · N_A).\n\nIsotope effect: k does not change with isotope, only µ does. Replacing C–H by C–D increases µ by about 1.86 and lowers the wavenumber by √1.86 ≈ 1.36 (≈ 3000 → ≈ 2200 cm⁻¹).\n\nReal bonds are anharmonic and vibrations couple with neighbouring bonds, so the model gives only an approximate value.',
    },
    usage: {
      tr: [
        'Bir bandın hangi bağa ait olabileceğini kabaca tahmin etmek.',
        'Gözlenen dalga sayısından kuvvet sabitini (bağ sertliğini) hesaplamak.',
        'Döteryum işaretlemesinin bandı nereye kaydıracağını öngörmek.',
        'Atom kütleleri g/mol olarak girilir; kilograma dönüşümü araç yapar.',
      ],
      en: [
        'Roughly predicting which bond a band may belong to.',
        'Calculating the force constant (bond stiffness) from an observed wavenumber.',
        'Predicting where deuterium labelling will shift a band.',
        'Atomic masses are entered in g/mol; the tool converts them to kilograms.',
      ],
    },
    solution: {
      tr: [
        'Verilen (C=O): k = 1200 N/m; m₁ = 12,0 g/mol (C); m₂ = 16,0 g/mol (O).',
        'µ = 12,0 × 16,0 / 28,0 = 6,857 g/mol → 6,857 × 10⁻³ kg/mol ÷ 6,022 × 10²³ mol⁻¹ = 1,139 × 10⁻²⁶ kg.',
        '√(k/µ) = √(1200 / 1,139 × 10⁻²⁶) = 3,246 × 10¹⁴ s⁻¹; 2πc = 2π × 2,998 × 10¹⁰ cm/s = 1,884 × 10¹¹ cm/s.',
        'Sonuç: ν̃ = 3,246 × 10¹⁴ / 1,884 × 10¹¹ = 1723 cm⁻¹ (karbonil bantlarının gözlendiği bölge).',
      ],
      en: [
        'Given (C=O): k = 1200 N/m; m₁ = 12.0 g/mol (C); m₂ = 16.0 g/mol (O).',
        'µ = 12.0 × 16.0 / 28.0 = 6.857 g/mol → 6.857 × 10⁻³ kg/mol ÷ 6.022 × 10²³ mol⁻¹ = 1.139 × 10⁻²⁶ kg.',
        '√(k/µ) = √(1200 / 1.139 × 10⁻²⁶) = 3.246 × 10¹⁴ s⁻¹; 2πc = 2π × 2.998 × 10¹⁰ cm/s = 1.884 × 10¹¹ cm/s.',
        'Result: ν̃ = 3.246 × 10¹⁴ / 1.884 × 10¹¹ = 1723 cm⁻¹ (the region where carbonyl bands are observed).',
      ],
    },
    mistakes: {
      tr: [
        'İndirgenmiş kütle yerine atomlardan birinin kütlesini ya da toplam kütleyi kullanmak.',
        'Molar kütleyi tek atom kütlesine (kg) çevirmeden formüle koymak.',
        'c’yi m/s olarak alıp sonucu cm⁻¹ sanmak; dalga sayısı için c = 2,998 × 10¹⁰ cm/s kullanılır.',
      ],
      en: [
        'Using the mass of one atom, or the total mass, instead of the reduced mass.',
        'Using the molar mass without converting to the mass of one atom (kg).',
        'Taking c in m/s and reading the result as cm⁻¹; for wavenumbers use c = 2.998 × 10¹⁰ cm/s.',
      ],
    },
    related: ['wavenumber', 'raman-shift', 'atr-critical-angle'],
  },

  'atr-critical-angle': {
    concept: {
      tr: 'Zayıflatılmış toplam yansıma (ATR), katı, sıvı, macun ya da toz numunelerin hemen hiç hazırlık yapılmadan IR spektrumunun alınmasını sağlayan bir örnekleme tekniğidir. IR ışını yüksek kırılma indisli bir kristalden (ZnSe, elmas, germanyum) geçerken kristal–numune arayüzünde tam iç yansımaya uğrar.\n\nTam yansıma sırasında ışık arayüzde numunenin içine kısa bir mesafe “sızar” (evanesan dalga). Numune bu ışığın bir kısmını soğurduğu için yansıyan ışın zayıflar ve bir absorpsiyon spektrumu elde edilir.',
      en: 'Attenuated total reflectance (ATR) is a sampling technique that gives IR spectra of solids, liquids, pastes or powders with almost no preparation. The IR beam travels through a high-refractive-index crystal (ZnSe, diamond, germanium) and undergoes total internal reflection at the crystal–sample interface.\n\nDuring total reflection the light penetrates a short distance into the sample (the evanescent wave). The sample absorbs part of it, so the reflected beam is attenuated and an absorption spectrum is obtained.',
    },
    meaning: {
      tr: 'Snell yasasından (n₁ sin θ₁ = n₂ sin θ₂), kırılan ışının 90°’ye ulaştığı gelme açısı kritik açıdır: sin θ_c = n₂ / n₁. Gelme açısı θ_c’yi aşınca ışık ikinci ortama geçemez ve tamamen yansır. Bu yalnızca ışık yüksek indisli ortamdan düşük indisli ortama giderken (n₁ > n₂) mümkündür.\n\nEvanesan dalganın numuneye girme derinliği dalga boyuyla orantılıdır, ayrıca kırılma indisi oranına ve gelme açısına bağlıdır; tipik olarak birkaç mikrometre mertebesindedir. Bu yüzden ATR yüzeye duyarlıdır ve düşük dalga sayılarındaki bantlar iletim spektrumuna göre daha şiddetli görünür.\n\nGelme açısı kritik açıya çok yakın seçilirse girme derinliği büyür ve spektrum bozulabilir; bu nedenle kristaller kritik açının yeterince üzerinde (çoğu zaman 45°) kullanılır.',
      en: 'From Snell’s law (n₁ sin θ₁ = n₂ sin θ₂), the critical angle is the angle of incidence at which the refracted ray reaches 90°: sin θ_c = n₂ / n₁. Beyond θ_c the light cannot enter the second medium and is totally reflected. This is possible only when light travels from the higher-index to the lower-index medium (n₁ > n₂).\n\nThe penetration depth of the evanescent wave is proportional to the wavelength and also depends on the index ratio and the angle of incidence; it is typically a few micrometres. ATR is therefore surface sensitive, and bands at low wavenumber appear stronger than in a transmission spectrum.\n\nIf the angle of incidence is too close to the critical angle, the penetration depth grows and the spectrum can be distorted, so crystals are used well above the critical angle (often at 45°).',
    },
    usage: {
      tr: [
        'Belirli bir kristal–numune çifti için tam iç yansımanın hangi açının üzerinde gerçekleştiğini bulmak.',
        'Kristal seçmek: ZnSe ve elmas için n ≈ 2,4, germanyum için n ≈ 4,0; yüksek indisli numunelerde germanyum daha küçük bir kritik açı sağlar.',
        'n₂ ≥ n₁ ise tam iç yansıma olmaz ve araç sonuç vermez.',
      ],
      en: [
        'Finding the angle above which total internal reflection occurs for a given crystal–sample pair.',
        'Choosing a crystal: n ≈ 2.4 for ZnSe and diamond, n ≈ 4.0 for germanium; for high-index samples germanium gives a smaller critical angle.',
        'If n₂ ≥ n₁ there is no total internal reflection and the tool gives no result.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n₁ = 2,4 (ZnSe kristali); n₂ = 1,5 (tipik organik numune).',
        'sin θ_c = n₂ / n₁ = 1,5 / 2,4 = 0,625.',
        'θ_c = sin⁻¹(0,625).',
        'Sonuç: θ_c = 38,68°; 45°’lik gelme açısı bunun üzerinde olduğundan tam iç yansıma sağlanır.',
      ],
      en: [
        'Given: n₁ = 2.4 (ZnSe crystal); n₂ = 1.5 (typical organic sample).',
        'sin θ_c = n₂ / n₁ = 1.5 / 2.4 = 0.625.',
        'θ_c = sin⁻¹(0.625).',
        'Result: θ_c = 38.68°; a 45° angle of incidence is above this, so total internal reflection is achieved.',
      ],
    },
    mistakes: {
      tr: [
        'n₁ ile n₂’yi ters girmek (oran 1’den büyük çıkar ve sin⁻¹ tanımsız olur).',
        'Hesap makinesi radyan modundayken sonucu derece sanmak.',
        'Numunenin kristale iyi temas etmesini ihmal etmek: arada hava kalırsa evanesan dalga numuneye ulaşmaz ve spektrum zayıf çıkar.',
      ],
      en: [
        'Swapping n₁ and n₂ (the ratio exceeds 1 and sin⁻¹ is undefined).',
        'Reading a result in radians as degrees.',
        'Neglecting good sample–crystal contact: with an air gap the evanescent wave does not reach the sample and the spectrum is weak.',
      ],
    },
    related: ['refractive-index', 'fiber-na', 'hooke-ir'],
  },

  'raman-shift': {
    concept: {
      tr: 'Bir moleküle tek renkli lazer ışığı gönderildiğinde saçılan ışığın büyük kısmı aynı dalga boyundadır (Rayleigh saçılması). Çok küçük bir kesri ise molekülle enerji alışverişi yapar ve farklı dalga boyunda saçılır: bu Raman saçılmasıdır. Molekül fotondan bir titreşim kuantumu alırsa saçılan ışık daha uzun dalga boyuna kayar (Stokes çizgileri); zaten uyarılmış titreşim düzeyindeki bir molekül enerji verirse daha kısa dalga boyuna kayar (anti-Stokes çizgileri).\n\nRaman ve IR titreşimler hakkında birbirini tamamlayan bilgi verir: IR’de dipol momenti değişimi, Raman’da polarlanabilirlik değişimi gerekir. Su zayıf Raman saçıcısı olduğundan sulu çözeltiler kolayca incelenebilir.',
      en: 'When monochromatic laser light falls on a molecule, most of the scattered light has the same wavelength (Rayleigh scattering). A very small fraction exchanges energy with the molecule and is scattered at a different wavelength: Raman scattering. If the molecule takes up a vibrational quantum, the scattered light shifts to longer wavelength (Stokes lines); if a molecule already in an excited vibrational level gives energy away, it shifts to shorter wavelength (anti-Stokes lines).\n\nRaman and IR give complementary information on vibrations: IR requires a change in dipole moment, Raman a change in polarisability. Water is a weak Raman scatterer, so aqueous solutions are easy to study.',
    },
    meaning: {
      tr: 'Δν̃ = 1/λ₀ − 1/λ_s = ν̃₀ − ν̃_s. Kayma, titreşim düzeyleri arasındaki enerji farkına eşittir; bu yüzden lazer dalga boyundan bağımsızdır. Aynı bağ 532 nm ile de 785 nm ile de aynı Raman kaymasını verir; değişen yalnızca saçılan ışığın mutlak dalga boyudur.\n\nPratik dönüşüm: ν̃ (cm⁻¹) = 10⁷ / λ (nm).\n\nStokes çizgilerinde λ_s > λ₀ olduğundan kayma pozitif, anti-Stokes çizgilerinde negatiftir. Oda sıcaklığında uyarılmış titreşim düzeylerinin nüfusu düşük olduğundan (Boltzmann dağılımı) Stokes çizgileri daha şiddetlidir ve spektrumlar genellikle bu tarafta kaydedilir.\n\nRaman şiddeti uyarma frekansının dördüncü kuvvetiyle artar; kısa dalga boylu lazer daha güçlü sinyal verir, ancak numunede floresans girişimini de artırabilir.',
      en: 'Δν̃ = 1/λ₀ − 1/λ_s = ν̃₀ − ν̃_s. The shift equals the energy gap between vibrational levels and is therefore independent of the laser wavelength. The same bond gives the same Raman shift with a 532 nm or a 785 nm laser; only the absolute wavelength of the scattered light changes.\n\nHandy conversion: ν̃ (cm⁻¹) = 10⁷ / λ (nm).\n\nFor Stokes lines λ_s > λ₀, so the shift is positive; for anti-Stokes lines it is negative. At room temperature excited vibrational levels are sparsely populated (Boltzmann distribution), so Stokes lines are stronger and spectra are usually recorded on that side.\n\nRaman intensity grows with the fourth power of the excitation frequency; a shorter-wavelength laser gives a stronger signal but may also increase fluorescence interference.',
    },
    usage: {
      tr: [
        'Ölçülen saçılma dalga boyunu Raman kaymasına (cm⁻¹) çevirmek.',
        'Belirli bir kayma için saçılan ışığın hangi dalga boyunda görüneceğini bulmak (filtre ve dedektör seçimi).',
        'Farklı lazerlerle alınmış spektrumları karşılaştırmak.',
        'Raman bantlarını IR bantlarıyla aynı dalga sayısı ölçeğinde yorumlamak.',
      ],
      en: [
        'Converting a measured scattered wavelength into a Raman shift (cm⁻¹).',
        'Finding the wavelength at which a given shift will appear (choice of filters and detector).',
        'Comparing spectra recorded with different lasers.',
        'Interpreting Raman bands on the same wavenumber scale as IR bands.',
      ],
    },
    solution: {
      tr: [
        'Verilen: λ₀ = 532 nm; λ_s = 563,5 nm.',
        'ν̃₀ = 10⁷ / 532 = 18 797,0 cm⁻¹; ν̃_s = 10⁷ / 563,5 = 17 746,2 cm⁻¹.',
        'Δν̃ = 18 797,0 − 17 746,2 = 1050,8 cm⁻¹; λ_s > λ₀ olduğundan bu bir Stokes çizgisidir.',
        'Sonuç: Δν̃ = 1051 cm⁻¹.',
      ],
      en: [
        'Given: λ₀ = 532 nm; λ_s = 563.5 nm.',
        'ν̃₀ = 10⁷ / 532 = 18 797.0 cm⁻¹; ν̃_s = 10⁷ / 563.5 = 17 746.2 cm⁻¹.',
        'Δν̃ = 18 797.0 − 17 746.2 = 1050.8 cm⁻¹; since λ_s > λ₀ this is a Stokes line.',
        'Result: Δν̃ = 1051 cm⁻¹.',
      ],
    },
    mistakes: {
      tr: [
        'Dalga boylarını önce çıkarıp sonra tersini almak: 1/(563,5 − 532 nm) Raman kayması değildir; her dalga boyu ayrı ayrı dalga sayısına çevrilmelidir.',
        'nm’den cm⁻¹’e geçerken 10⁷ çarpanını unutmak.',
        'Raman kaymasını mutlak bir dalga sayısı sanmak; kayma lazer çizgisine göre bir farktır.',
      ],
      en: [
        'Subtracting the wavelengths first and then inverting: 1/(563.5 − 532 nm) is not the Raman shift; convert each wavelength to a wavenumber separately.',
        'Forgetting the factor 10⁷ when going from nm to cm⁻¹.',
        'Treating the Raman shift as an absolute wavenumber; it is a difference relative to the laser line.',
      ],
    },
    related: ['wavenumber', 'hooke-ir', 'wavelength-frequency'],
  },

  turbidimetry: {
    concept: {
      tr: 'Bir süspansiyondaki küçük katı tanecikler ışığı saçar. Türbidimetride ışık demeti doğrultusunda geçen ışığın azalması, nefelometride ise genellikle 90°’de saçılan ışığın şiddeti ölçülür. Klasik bir uygulama, sülfatın baryum klorürle BaSO₄ olarak çöktürülüp oluşan bulanıklığın ölçülmesidir; suyun bulanıklığının izlenmesi ve bazı immünokimyasal tayinler de aynı ilkeye dayanır.',
      en: 'Small solid particles in a suspension scatter light. Turbidimetry measures the decrease in light transmitted along the beam, while nephelometry measures the light scattered, usually at 90°. A classic application is precipitating sulfate as BaSO₄ with barium chloride and measuring the turbidity; monitoring water turbidity and some immunochemical assays rely on the same principle.',
    },
    meaning: {
      tr: 'S = log(P₀/P) = k · b · c. Biçim Beer yasasıyla aynıdır, ama azalma soğurmadan değil saçılmadan kaynaklanır. k orantı sabiti tanecik boyutu ve şekline, dalga boyuna ve tanecik ile çözücü arasındaki kırılma indisi farkına bağlıdır; deneysel olarak bulunur.\n\nTanecik boyutu çöktürme koşullarıyla (karıştırma hızı, süre, reaktiflerin ekleme sırası, kararlılaştırıcı reaktif) değiştiği için k ancak koşullar sabit tutulursa sabit kalır; standartlar ve numuneler aynı biçimde hazırlanmalıdır.\n\nTürbidimetri görece derişik süspansiyonlar için uygundur. Çok seyreltik süspansiyonlarda geçen ışıktaki küçük azalma güç ölçülür; bu durumda saçılan ışığı karanlık zemin üzerinde ölçen nefelometri daha duyarlıdır.',
      en: 'S = log(P₀/P) = k · b · c. The form is the same as Beer’s law, but the decrease is caused by scattering, not absorption. The proportionality constant k depends on particle size and shape, wavelength and the refractive-index difference between particles and solvent, and is found experimentally.\n\nParticle size depends on the precipitation conditions (stirring rate, time, order of reagent addition, stabilising reagent), so k is constant only if these are kept constant; standards and samples must be treated identically.\n\nTurbidimetry suits relatively concentrated suspensions. For very dilute suspensions the small decrease in transmitted light is hard to measure, and nephelometry, which measures scattered light against a dark background, is more sensitive.',
    },
    usage: {
      tr: [
        'Sülfat (BaSO₄ olarak) gibi çöktürülebilen iyonların hızlı tayini.',
        'Standartlarla elde edilen kalibrasyon doğrusunun eğiminden k · b’yi bulup bilinmeyen derişimi hesaplamak.',
        'c, k’nın tanımlandığı birimde çıkar (ör. k L mg⁻¹ cm⁻¹ ise c mg/L).',
        'Renkli numunelerde soğurma saçılmaya eklenir; numunenin soğurmadığı bir dalga boyu seçilmeli ya da numune tanığı kullanılmalıdır.',
      ],
      en: [
        'Rapid determination of precipitable ions such as sulfate (as BaSO₄).',
        'Finding k · b from the slope of a calibration line with standards and then the unknown concentration.',
        'c comes out in the unit in which k is defined (e.g. if k is in L mg⁻¹ cm⁻¹, c is in mg/L).',
        'In coloured samples absorption adds to scattering; choose a wavelength the sample does not absorb, or use a sample blank.',
      ],
    },
    solution: {
      tr: [
        'Verilen: S = 0,24; k = 0,012 (ör. L mg⁻¹ cm⁻¹, sülfat standartlarından); b = 1 cm.',
        'c = S / (k · b) = 0,24 / (0,012 × 1).',
        'Sonuç: c = 20 (k’nın birimine göre, ör. 20 mg/L sülfat).',
      ],
      en: [
        'Given: S = 0.24; k = 0.012 (e.g. L mg⁻¹ cm⁻¹, from sulfate standards); b = 1 cm.',
        'c = S / (k · b) = 0.24 / (0.012 × 1).',
        'Result: c = 20 (in the units of k, e.g. 20 mg/L sulfate).',
      ],
    },
    mistakes: {
      tr: [
        'Standart ve numunelerde farklı çöktürme koşulları kullanmak (tanecik boyutu, dolayısıyla k değişir).',
        'Okumaları farklı sürelerde almak; süspansiyon zamanla değiştiğinden ölçüm sabit bir sürede yapılmalıdır.',
        'Türbidimetri ile nefelometriyi karıştırmak: türbidimetride geçen ışık azalır, nefelometride saçılan ışık derişimle artar.',
      ],
      en: [
        'Using different precipitation conditions for standards and samples (particle size, and hence k, changes).',
        'Taking readings at different times; the suspension changes with time, so measure after a fixed interval.',
        'Confusing turbidimetry with nephelometry: in turbidimetry transmitted light decreases, in nephelometry scattered light increases with concentration.',
      ],
    },
    related: ['beer-lambert', 'absorbance-transmittance', 'linear-regression'],
  },

  'molar-refraction': {
    concept: {
      tr: 'Molar refraksiyon (R_M), kırılma indisini moleküler bir özelliğe bağlar: bir mol maddenin elektron bulutunun ışığın elektrik alanı tarafından ne kadar kolay kutuplanabildiğini (polarlanabilirlik) gösterir. Yoğunluğun ve dolayısıyla sıcaklığın etkisi büyük ölçüde ortadan kalktığı için aynı maddenin farklı koşullardaki değerleri birbirine yakındır.\n\nR_M yaklaşık olarak toplanabilir bir özelliktir: molekülü oluşturan atom ve bağ katkılarının (atomik refraksiyonlar) toplamına eşittir. Ölçülen değer, önerilen yapıdan hesaplanan değerle karşılaştırılarak yapı doğrulanabilir.',
      en: 'Molar refraction (R_M) links the refractive index to a molecular property: how easily the electron cloud of one mole of substance is polarised by the electric field of light (polarisability). Because the effect of density, and hence of temperature, largely cancels out, values for the same substance under different conditions are close.\n\nR_M is approximately additive: it equals the sum of contributions from the atoms and bonds in the molecule (atomic refractions). Comparing the measured value with one calculated for a proposed structure helps confirm the structure.',
    },
    meaning: {
      tr: 'Lorentz–Lorenz eşitliği: R_M = [(n² − 1)/(n² + 2)] · (M/ρ).\n\n• (n² − 1)/(n² + 2): birim hacimdeki polarlanabilirliği gösteren boyutsuz terim.\n• M/ρ: molar hacim (cm³/mol); M g/mol, ρ g/mL alınınca R_M cm³/mol çıkar.\n\nR_M, molekülün polarlanabilirlik hacmiyle (α′) orantılıdır: R_M = (4π/3) · N_A · α′. Bu yüzden boyutu hacimdir.\n\nToplanabilirlik yaklaşık bir kuraldır; konjugasyon gibi elektron delokalizasyonları ölçülen değeri hesaplanandan büyük yapar (egzaltasyon).',
      en: 'Lorentz–Lorenz equation: R_M = [(n² − 1)/(n² + 2)] · (M/ρ).\n\n• (n² − 1)/(n² + 2): a dimensionless term reflecting the polarisability per unit volume.\n• M/ρ: molar volume (cm³/mol); with M in g/mol and ρ in g/mL, R_M is in cm³/mol.\n\nR_M is proportional to the polarisability volume of the molecule (α′): R_M = (4π/3) · N_A · α′, which is why it has the dimension of volume.\n\nAdditivity is an approximate rule; electron delocalisation such as conjugation makes the measured value larger than the calculated one (exaltation).',
    },
    usage: {
      tr: [
        'Saf bir sıvının yapısını atom ve bağ katkılarıyla doğrulamak.',
        'Bilinen R_M, n ve ρ’dan molar kütleyi tahmin etmek (araçta M bilinmeyen seçilebilir).',
        'n ve ρ aynı sıcaklıkta ölçülmeli; n genellikle sodyum D çizgisinde (589 nm) alınır.',
      ],
      en: [
        'Confirming the structure of a pure liquid with atom and bond increments.',
        'Estimating the molar mass from known R_M, n and ρ (M can be chosen as the unknown).',
        'n and ρ must be measured at the same temperature; n is usually taken at the sodium D line (589 nm).',
      ],
    },
    solution: {
      tr: [
        'Verilen (su): n = 1,333; M = 18,015 g/mol; ρ = 0,997 g/mL.',
        'n² = 1,7769 → (n² − 1)/(n² + 2) = 0,7769 / 3,7769 = 0,2057.',
        'M/ρ = 18,015 g/mol / 0,997 g/mL = 18,07 cm³/mol.',
        'Sonuç: R_M = 0,2057 × 18,07 = 3,717 cm³/mol.',
      ],
      en: [
        'Given (water): n = 1.333; M = 18.015 g/mol; ρ = 0.997 g/mL.',
        'n² = 1.7769 → (n² − 1)/(n² + 2) = 0.7769 / 3.7769 = 0.2057.',
        'M/ρ = 18.015 g/mol / 0.997 g/mL = 18.07 cm³/mol.',
        'Result: R_M = 0.2057 × 18.07 = 3.717 cm³/mol.',
      ],
    },
    mistakes: {
      tr: [
        '(n² − 1)/(n² + 2) yerine (n − 1)/(n + 2) kullanmak; kırılma indisinin karesi alınmalıdır.',
        'Elle hesapta yoğunluğu kg/m³ olarak kullanıp sonucu cm³/mol sanmak (1000 katlık hata).',
        'Farklı sıcaklıklarda ölçülmüş n ve ρ değerlerini birlikte kullanmak.',
      ],
      en: [
        'Using (n − 1)/(n + 2) instead of (n² − 1)/(n² + 2); the refractive index must be squared.',
        'Using density in kg/m³ in a hand calculation and reading the result as cm³/mol (a factor of 1000).',
        'Combining n and ρ measured at different temperatures.',
      ],
    },
    related: ['refractive-index', 'molar-mass'],
  },

  'specific-rotation': {
    concept: {
      tr: 'Kiral (optikçe aktif) moleküller düzlem polarize ışığın titreşim düzlemini döndürür. Polarimetre bu dönme açısını (α) ölçer: gözlemciye göre saat yönünde dönme sağa çevirme (+, dekstrorotatör), tersi sola çevirme (−, levorotatör) olarak adlandırılır.\n\nGözlenen açı, ışığın yolundaki kiral molekül sayısına bağlıdır. Özgül çevirme ([α]) bu açıyı standart bir tüp uzunluğuna ve derişime indirger; böylece maddeye özgü bir sabit elde edilir. Şeker analizi (sakarimetri), ilaç saflık kontrolü ve enantiyomerik saflık tayininde kullanılır.',
      en: 'Chiral (optically active) molecules rotate the plane of plane-polarised light. A polarimeter measures this rotation angle (α): clockwise rotation as seen by the observer is dextrorotatory (+), anticlockwise is laevorotatory (−).\n\nThe observed angle depends on the number of chiral molecules in the light path. The specific rotation ([α]) normalises the angle to a standard tube length and concentration, giving a constant characteristic of the substance. It is used in sugar analysis (saccharimetry), drug purity control and determination of enantiomeric purity.',
    },
    meaning: {
      tr: '[α] = α / (l · c). Geleneksel birimler: α derece, l desimetre (1 dm = 10 cm), c g/mL. Saf sıvılarda c yerine yoğunluk (g/mL) yazılır.\n\nÖzgül çevirme dalga boyuna (optik çevirme dispersiyonu), sıcaklığa ve çözücüye bağlıdır; bu yüzden koşullarla birlikte verilir: [α]_D²⁰, sodyum D çizgisi (589 nm) ve 20 °C demektir. Örneğin sakkarozun sudaki özgül çevirmesi +66,5’tir.\n\nİki enantiyomerin özgül çevirmeleri büyüklükçe eşit, işaretçe zıttır; rasemik karışım çevirme göstermez. Ölçülen [α]’nın saf enantiyomerinkine oranı, karışımın optik saflığını verir.',
      en: '[α] = α / (l · c). Conventional units: α in degrees, l in decimetres (1 dm = 10 cm), c in g/mL. For a neat liquid the density (g/mL) replaces c.\n\nThe specific rotation depends on wavelength (optical rotatory dispersion), temperature and solvent, so it is quoted with the conditions: [α]_D²⁰ means the sodium D line (589 nm) and 20 °C. For example, sucrose in water has a specific rotation of +66.5.\n\nThe two enantiomers have specific rotations of equal size and opposite sign; a racemic mixture shows no rotation. The ratio of the measured [α] to that of the pure enantiomer gives the optical purity of the mixture.',
    },
    usage: {
      tr: [
        'Bilinen [α] ile çözeltideki optikçe aktif maddenin derişimini bulmak.',
        'Saf maddenin kimliğini ve saflığını literatür değeriyle karşılaştırmak.',
        'Tepkime izlemek: sakkaroz hidrolizinde çevirme sağdan sola döner (invert şeker).',
        'Ölçüm sıcaklığı, dalga boyu ve çözücü literatür değerindekiyle aynı olmalıdır.',
      ],
      en: [
        'Finding the concentration of an optically active substance from a known [α].',
        'Checking the identity and purity of a pure substance against the literature value.',
        'Following a reaction: on hydrolysis of sucrose the rotation changes from dextro to laevo (invert sugar).',
        'The temperature, wavelength and solvent must match those of the literature value.',
      ],
    },
    solution: {
      tr: [
        'Verilen: sakkaroz, [α] = +66,5; α = +13,3°; l = 2 dm (20 cm tüp).',
        'c = α / ([α] · l) = 13,3° / (66,5 × 2 dm).',
        'c = 13,3 / 133 = 0,100 g/mL (100 g/L).',
        'Sonuç: c = 0,1 g/mL.',
      ],
      en: [
        'Given: sucrose, [α] = +66.5; α = +13.3°; l = 2 dm (20 cm tube).',
        'c = α / ([α] · l) = 13.3° / (66.5 × 2 dm).',
        'c = 13.3 / 133 = 0.100 g/mL (100 g/L).',
        'Result: c = 0.1 g/mL.',
      ],
    },
    mistakes: {
      tr: [
        'Tüp uzunluğunu cm olarak formüle koymak; formül dm ister (20 cm = 2 dm).',
        'Derişimi g/100 mL olarak verip g/mL sanmak; bazı kaynaklar c’yi g/100 mL verir ve formüle 100 çarpanı ekler.',
        '180°’lik belirsizliği gözden kaçırmak: +13° ile −167° aynı okumayı verir; gerçek açı farklı derişimde ikinci bir ölçümle bulunur.',
      ],
      en: [
        'Using the tube length in cm; the formula needs dm (20 cm = 2 dm).',
        'Taking a concentration in g/100 mL as g/mL; some sources give c in g/100 mL and add a factor of 100 to the formula.',
        'Overlooking the 180° ambiguity: +13° and −167° give the same reading; a second measurement at a different concentration reveals the true angle.',
      ],
    },
    related: ['massconc-molarity', 'percent-wv', 'refractive-index'],
  },

  'nmr-shift': {
    concept: {
      tr: 'NMR’de aynı tür çekirdekler (ör. ¹H) kimyasal çevrelerine göre biraz farklı frekanslarda rezonansa girer. Çekirdeği saran elektronlar dış manyetik alana karşı küçük bir alan oluşturarak çekirdeği perdeler; elektron yoğunluğu azaldıkça (perdesizleşme) rezonans frekansı yükselir.\n\nBu frekans farkları birkaç yüz ya da bin Hz düzeyindedir ve spektrometrenin alan şiddetiyle orantılı olarak büyür. Kimyasal kayma (δ), farkı spektrometre frekansına bölerek alandan bağımsız, ppm cinsinden bir ölçek oluşturur.',
      en: 'In NMR, nuclei of the same kind (e.g. ¹H) resonate at slightly different frequencies depending on their chemical environment. The electrons around a nucleus set up a small field opposing the applied field and shield the nucleus; the lower the electron density (deshielding), the higher the resonance frequency.\n\nThese frequency differences are a few hundred to a few thousand Hz and grow in proportion to the field strength of the spectrometer. The chemical shift (δ) divides the difference by the spectrometer frequency, giving a field-independent scale in ppm.',
    },
    meaning: {
      tr: 'δ = (ν − ν_TMS) / ν₀ × 10⁶. Referans tetrametilsilandır (TMS, δ = 0); silisyumun düşük elektronegatifliği nedeniyle protonları kuvvetle perdelenir ve çoğu organik protondan daha düşük frekansta görülür.\n\n10⁶ çarpanı, Hz cinsinden farkın MHz cinsinden frekansa bölünmesinden doğan çok küçük sayıyı okunur hâle getirir. Pratik kural: Δν (Hz) / ν₀ (MHz) doğrudan ppm verir.\n\nδ alandan bağımsız olduğu için aynı proton 300, 400 ya da 600 MHz’lik cihazlarda aynı δ’yı verir; Hz cinsinden fark ise alanla büyür, bu yüzden yüksek alanlı cihazlar sinyalleri daha iyi ayırır. Spin–spin eşleşme sabitleri (J) alandan bağımsızdır ve Hz ile verilir.\n\nTipik ¹H kaymaları: alkil ≈ 0,9–1,7; oksijene bağlı karbondaki H ≈ 3,3–4; aromatik ≈ 6,5–8; aldehit ≈ 9–10 ppm.',
      en: 'δ = (ν − ν_TMS) / ν₀ × 10⁶. The reference is tetramethylsilane (TMS, δ = 0); because silicon is electropositive its protons are strongly shielded and appear at lower frequency than most organic protons.\n\nThe factor 10⁶ turns the very small number obtained by dividing Hz by MHz into a readable one. Rule of thumb: Δν (Hz) / ν₀ (MHz) gives ppm directly.\n\nBecause δ is field independent, the same proton gives the same δ on 300, 400 or 600 MHz instruments, whereas the separation in Hz grows with field, so high-field instruments resolve signals better. Spin–spin coupling constants (J) are field independent and are given in Hz.\n\nTypical ¹H shifts: alkyl ≈ 0.9–1.7; H on carbon bonded to oxygen ≈ 3.3–4; aromatic ≈ 6.5–8; aldehyde ≈ 9–10 ppm.',
    },
    usage: {
      tr: [
        'Spektrumdaki Hz cinsinden konumu ppm’e çevirmek ya da tersini yapmak.',
        'Farklı alan şiddetindeki cihazlarda alınmış spektrumları karşılaştırmak.',
        'İki sinyal arasındaki ppm farkının belirli bir cihazda kaç Hz’e karşılık geldiğini bulmak (çakışma riskini değerlendirmek).',
        '¹³C ve diğer çekirdekler için tanım aynıdır; ν₀ o çekirdeğin cihazdaki rezonans frekansıdır.',
      ],
      en: [
        'Converting a position in Hz to ppm and back.',
        'Comparing spectra recorded on instruments of different field strength.',
        'Finding how many Hz a ppm separation corresponds to on a given instrument (assessing overlap).',
        'The definition is the same for ¹³C and other nuclei; ν₀ is that nucleus’s resonance frequency on the instrument.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ν − ν_TMS = 1260 Hz; ν₀ = 400 MHz = 4,00 × 10⁸ Hz.',
        'δ = 1260 Hz / 4,00 × 10⁸ Hz × 10⁶.',
        'Kısayol: 1260 Hz / 400 MHz = 3,15 ppm; 600 MHz’lik cihazda aynı sinyal TMS’den 1890 Hz uzakta görülür.',
        'Sonuç: δ = 3,15 ppm.',
      ],
      en: [
        'Given: ν − ν_TMS = 1260 Hz; ν₀ = 400 MHz = 4.00 × 10⁸ Hz.',
        'δ = 1260 Hz / 4.00 × 10⁸ Hz × 10⁶.',
        'Shortcut: 1260 Hz / 400 MHz = 3.15 ppm; on a 600 MHz instrument the same signal lies 1890 Hz from TMS.',
        'Result: δ = 3.15 ppm.',
      ],
    },
    mistakes: {
      tr: [
        'ν₀’ı MHz olarak kullanıp ayrıca 10⁶ ile çarpmak (Hz/MHz zaten ppm verir).',
        'Kimyasal kaymayı Hz olarak raporlamak; Hz değeri cihaza bağlıdır.',
        'Eşleşme sabiti J’yi ppm’e çevirmek; J, Hz olarak verilir.',
      ],
      en: [
        'Using ν₀ in MHz and multiplying by 10⁶ as well (Hz/MHz already gives ppm).',
        'Reporting chemical shifts in Hz; Hz values depend on the instrument.',
        'Converting the coupling constant J to ppm; J is quoted in Hz.',
      ],
    },
    related: ['larmor', 'esr-resonance', 'wavelength-frequency'],
  },

  larmor: {
    concept: {
      tr: 'Spin kuantum sayısı sıfırdan farklı çekirdekler (¹H, ¹³C, ¹⁹F, ³¹P gibi) küçük mıknatıslar gibi davranır. Dış manyetik alan (B₀) içinde, I = ½ olan çekirdeklerin iki enerji düzeyi oluşur ve aradaki fark alanla orantılıdır. Bu farka karşılık gelen radyo frekansı ışıma soğurulduğunda rezonans gerçekleşir; klasik olarak bu, çekirdek momentinin alan çevresindeki presesyon (Larmor) frekansıdır.\n\nNMR cihazları ¹H rezonans frekanslarına göre adlandırılır: 9,4 T’lık bir mıknatıs “400 MHz’lik” bir cihazdır.',
      en: 'Nuclei with non-zero spin quantum number (¹H, ¹³C, ¹⁹F, ³¹P…) behave like tiny magnets. In an external magnetic field (B₀), I = ½ nuclei have two energy levels whose separation is proportional to the field. Resonance occurs when radio-frequency radiation matching this gap is absorbed; classically this is the precession (Larmor) frequency of the nuclear moment about the field.\n\nNMR instruments are named after their ¹H frequency: a 9.4 T magnet is a “400 MHz” instrument.',
    },
    meaning: {
      tr: 'ν = γ · B₀ / 2π; ΔE = h · ν.\n\n• γ: jiromanyetik oran, çekirdeğe özgü bir sabittir. ¹H için 26,752 × 10⁷, ¹³C için 6,728 × 10⁷ rad s⁻¹ T⁻¹’dir. Bu yüzden aynı alanda ¹³C rezonansı ¹H’nin yaklaşık dörtte biri frekanstadır (9,4 T’de ≈ 100,7 MHz).\n• γ/2π, ¹H için yaklaşık 42,58 MHz/T’dir.\n\nNMR enerji farkları çok küçüktür: oda sıcaklığında iki düzey arasındaki bağıl nüfus farkı yalnızca 10⁻⁵ mertebesindedir. NMR’nin görece düşük duyarlılığı buradan kaynaklanır; daha güçlü mıknatıslar hem duyarlılığı hem de ayırımı artırır.',
      en: 'ν = γ · B₀ / 2π; ΔE = h · ν.\n\n• γ: gyromagnetic ratio, a constant for each nucleus: 26.752 × 10⁷ for ¹H and 6.728 × 10⁷ rad s⁻¹ T⁻¹ for ¹³C. In the same field ¹³C therefore resonates at about a quarter of the ¹H frequency (≈ 100.7 MHz at 9.4 T).\n• γ/2π for ¹H is about 42.58 MHz/T.\n\nNMR energy gaps are tiny: at room temperature the relative population difference between the two levels is only of the order of 10⁻⁵. This is the origin of the relatively low sensitivity of NMR; stronger magnets improve both sensitivity and resolution.',
    },
    usage: {
      tr: [
        'Belirli bir mıknatısta bir çekirdeğin hangi frekansta gözleneceğini bulmak (ör. 400 MHz’lik cihazda ¹³C frekansı).',
        'Cihaz frekansından alan şiddetini hesaplamak.',
        'Ölçülen frekans ve alandan γ’yı hesaplayıp çekirdeği tanımlamak.',
        'Araçta γ, × 10⁷ rad s⁻¹ T⁻¹ cinsinden girilir.',
      ],
      en: [
        'Finding the frequency at which a nucleus is observed in a given magnet (e.g. ¹³C on a 400 MHz instrument).',
        'Calculating the field strength from the instrument frequency.',
        'Identifying a nucleus by computing γ from a measured frequency and field.',
        'In the tool γ is entered in units of × 10⁷ rad s⁻¹ T⁻¹.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ¹H, γ = 26,7522 × 10⁷ rad s⁻¹ T⁻¹; B₀ = 9,4 T.',
        'γ · B₀ = 26,7522 × 10⁷ × 9,4 = 2,5147 × 10⁹ rad/s (açısal frekans ω).',
        'ν = ω / 2π = 2,5147 × 10⁹ / 6,2832 = 4,002 × 10⁸ Hz.',
        'Sonuç: ν = 400,2 MHz.',
      ],
      en: [
        'Given: ¹H, γ = 26.7522 × 10⁷ rad s⁻¹ T⁻¹; B₀ = 9.4 T.',
        'γ · B₀ = 26.7522 × 10⁷ × 9.4 = 2.5147 × 10⁹ rad/s (angular frequency ω).',
        'ν = ω / 2π = 2.5147 × 10⁹ / 6.2832 = 4.002 × 10⁸ Hz.',
        'Result: ν = 400.2 MHz.',
      ],
    },
    mistakes: {
      tr: [
        '2π’ye bölmeyi unutmak: açısal frekans ω (rad/s) ile ν (Hz) farklıdır.',
        'γ’yı 10⁷ çarpanıyla birlikte girmek; araç γ’yı zaten × 10⁷ biriminde bekler.',
        'Gauss ile tesla’yı karıştırmak (1 T = 10⁴ G).',
      ],
      en: [
        'Forgetting to divide by 2π: angular frequency ω (rad/s) is not ν (Hz).',
        'Entering γ with its 10⁷ factor; the tool already expects γ in units of × 10⁷.',
        'Confusing gauss and tesla (1 T = 10⁴ G).',
      ],
    },
    related: ['nmr-shift', 'esr-resonance', 'photon-energy'],
  },

  'esr-resonance': {
    concept: {
      tr: 'Elektron spin rezonansı (ESR ya da EPR), eşleşmemiş elektron içeren türleri inceler: serbest radikaller, birçok geçiş metali iyonu ve kristal kusurları. Manyetik alanda elektronun spini iki enerji düzeyine ayrılır (Zeeman yarılması); aradaki fark mikrodalga fotonunun enerjisine eşit olduğunda soğurma gerçekleşir.\n\nElektronun manyetik momenti çekirdeklerinkinden çok büyük olduğundan ESR, NMR’ye göre aynı alanda çok daha yüksek frekanslarda (GHz) çalışır. Cihazlar genellikle mikrodalga frekansını sabit tutup manyetik alanı tarar.',
      en: 'Electron spin resonance (ESR or EPR) studies species with unpaired electrons: free radicals, many transition-metal ions and crystal defects. In a magnetic field the electron spin splits into two energy levels (Zeeman splitting); absorption occurs when the gap equals the energy of a microwave photon.\n\nBecause the electron’s magnetic moment is much larger than that of nuclei, ESR operates at much higher frequencies (GHz) than NMR in the same field. Instruments usually keep the microwave frequency fixed and sweep the magnetic field.',
    },
    meaning: {
      tr: 'h · ν = g · β · B. β (µ_B) Bohr magnetonudur (9,274 × 10⁻²⁴ J/T); g boyutsuz g faktörüdür.\n\n• Serbest elektron için g = 2,0023. Organik radikallerde g bu değere çok yakındır; geçiş metali iyonlarında spin–yörünge etkileşimi nedeniyle belirgin biçimde sapabilir. g, NMR’deki kimyasal kaymanın ESR’deki karşılığı gibidir.\n• X-bandı (≈ 9,5 GHz) cihazlarda serbest elektron rezonansı ≈ 0,34 T’de görülür.\n\nEşleşmemiş elektron, spini I olan n eşdeğer çekirdekle etkileşirse sinyal 2nI + 1 çizgiye yarılır (aşırı ince yapı); bu, radikalin yapısının belirlenmesine yardım eder. ESR spektrumları genellikle soğurmanın birinci türevi olarak kaydedilir.',
      en: 'h · ν = g · β · B. β (µ_B) is the Bohr magneton (9.274 × 10⁻²⁴ J/T); g is the dimensionless g factor.\n\n• For a free electron g = 2.0023. Organic radicals have g very close to this; transition-metal ions can deviate markedly because of spin–orbit coupling. The g factor plays a role in ESR similar to the chemical shift in NMR.\n• On X-band (≈ 9.5 GHz) instruments a free electron resonates at ≈ 0.34 T.\n\nIf the unpaired electron interacts with n equivalent nuclei of spin I, the signal splits into 2nI + 1 lines (hyperfine structure), which helps identify the radical. ESR spectra are usually recorded as the first derivative of the absorption.',
    },
    usage: {
      tr: [
        'Belirli bir mikrodalga frekansında rezonans alanını bulmak.',
        'Ölçülen frekans ve alandan g faktörünü hesaplayıp paramanyetik türü tanımlamak.',
        'Farklı mikrodalga bantlarında (X, Q) rezonans koşullarını karşılaştırmak.',
        'Yalnızca eşleşmemiş elektron içeren türler ESR sinyali verir.',
      ],
      en: [
        'Finding the resonance field at a given microwave frequency.',
        'Calculating the g factor from measured frequency and field to identify a paramagnetic species.',
        'Comparing resonance conditions in different microwave bands (X, Q).',
        'Only species with unpaired electrons give an ESR signal.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ν = 9,5 GHz = 9,5 × 10⁹ Hz; g = 2,0023; h = 6,626 × 10⁻³⁴ J·s; β = 9,274 × 10⁻²⁴ J/T.',
        'h · ν = 6,626 × 10⁻³⁴ × 9,5 × 10⁹ = 6,295 × 10⁻²⁴ J; g · β = 2,0023 × 9,274 × 10⁻²⁴ = 1,857 × 10⁻²³ J/T.',
        'B = 6,295 × 10⁻²⁴ J / 1,857 × 10⁻²³ J/T = 0,3390 T.',
        'Sonuç: B = 339 mT (3390 G).',
      ],
      en: [
        'Given: ν = 9.5 GHz = 9.5 × 10⁹ Hz; g = 2.0023; h = 6.626 × 10⁻³⁴ J·s; β = 9.274 × 10⁻²⁴ J/T.',
        'h · ν = 6.626 × 10⁻³⁴ × 9.5 × 10⁹ = 6.295 × 10⁻²⁴ J; g · β = 2.0023 × 9.274 × 10⁻²⁴ = 1.857 × 10⁻²³ J/T.',
        'B = 6.295 × 10⁻²⁴ J / 1.857 × 10⁻²³ J/T = 0.3390 T.',
        'Result: B = 339 mT (3390 G).',
      ],
    },
    mistakes: {
      tr: [
        'Bohr magnetonu yerine nükleer magnetonu kullanmak (yaklaşık 1836 kat küçüktür).',
        'mT, T ve gauss arasında dönüşüm hatası yapmak (1 mT = 10 G).',
        'Alan kalibrasyonu yapılmadan ölçülen g değerini kesin saymak; hassas çalışmada g’si bilinen bir standart (ör. DPPH) kullanılır.',
      ],
      en: [
        'Using the nuclear magneton instead of the Bohr magneton (about 1836 times smaller).',
        'Conversion errors between mT, T and gauss (1 mT = 10 G).',
        'Treating a g value as exact without field calibration; precise work uses a standard of known g (e.g. DPPH).',
      ],
    },
    related: ['larmor', 'nmr-shift', 'photon-energy'],
  },

  grating: {
    concept: {
      tr: 'Monokromatör, polikromatik ışığı dalga boylarına ayırıp dar bir bant seçer. Modern cihazlarda bu iş için kırınım ağı kullanılır: yansıtıcı bir yüzeye çok sayıda paralel ve eşit aralıklı çizgi (oluk) işlenmiştir. Her oluktan yansıyan ışınlar girişim yapar; yalnızca yol farkı dalga boyunun tam katı olan doğrultularda yapıcı girişim oluşur.\n\nBöylece her dalga boyu farklı bir açıda kırınır. Ağ döndürülerek istenen dalga boyu çıkış yarığına getirilir.',
      en: 'A monochromator disperses polychromatic light into its wavelengths and selects a narrow band. Modern instruments use a diffraction grating for this: a reflective surface ruled with many parallel, equally spaced grooves. Rays reflected from each groove interfere, and constructive interference occurs only in directions where the path difference is a whole number of wavelengths.\n\nEach wavelength is therefore diffracted at a different angle. Rotating the grating brings the desired wavelength to the exit slit.',
    },
    meaning: {
      tr: 'n · λ = d · (sin i + sin r). İki komşu oluktan gelen ışınların yol farkı d · sin i + d · sin r’dir; bu fark nλ’ya eşit olunca ışınlar aynı fazda buluşur.\n\n• n: kırınım mertebesi (1, 2, …).\n• d: çizgiler arası uzaklık; 1200 çizgi/mm için d = 1 mm / 1200 = 833 nm.\n• i ve r normalin aynı tarafındaysa ikisi de pozitif alınır; r karşı taraftaysa negatiftir.\n\nMertebe örtüşmesi: aynı açıda 1. mertebede 600 nm, 2. mertebede 300 nm ve 3. mertebede 200 nm kırınır. İstenmeyen mertebeler filtrelerle ayıklanır.\n\nAçısal dağıtma (dr/dλ = n / (d · cos r)) ve ayırma gücü (R = λ/Δλ = n · N; N aydınlatılan çizgi sayısı) mertebe ve çizgi yoğunluğu arttıkça büyür.',
      en: 'n · λ = d · (sin i + sin r). The path difference between rays from neighbouring grooves is d · sin i + d · sin r; when it equals nλ the rays arrive in phase.\n\n• n: diffraction order (1, 2, …).\n• d: groove spacing; for 1200 grooves/mm, d = 1 mm / 1200 = 833 nm.\n• If i and r are on the same side of the normal, both are positive; r on the opposite side is negative.\n\nOrder overlap: at the same angle 600 nm appears in first order, 300 nm in second and 200 nm in third. Unwanted orders are removed with filters.\n\nThe angular dispersion (dr/dλ = n / (d · cos r)) and the resolving power (R = λ/Δλ = n · N, N being the number of illuminated grooves) increase with order and groove density.',
    },
    usage: {
      tr: [
        'Belirli bir dalga boyunun kırınım açısını bulmak (monokromatör ayarı).',
        'Belirli bir açıda farklı mertebelerde hangi dalga boylarının çıkacağını kontrol etmek.',
        'Ölçülen açılardan ağın çizgi aralığını hesaplamak.',
        'nλ/d − sin i değeri −1 ile +1 arasında değilse o mertebe oluşmaz.',
      ],
      en: [
        'Finding the diffraction angle of a given wavelength (monochromator setting).',
        'Checking which wavelengths emerge at a given angle in different orders.',
        'Calculating the groove spacing from measured angles.',
        'If nλ/d − sin i is outside −1 to +1, that order does not exist.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n = 1; λ = 500 nm; d = 833,3 nm (1200 çizgi/mm); i = 30°.',
        'sin r = nλ/d − sin i = 500 / 833,3 − sin 30° = 0,600 − 0,500 = 0,100.',
        'r = sin⁻¹(0,100).',
        'Sonuç: r = 5,739° (normale göre ölçülür; işaret kuralı kaynağa göre değişebilir).',
      ],
      en: [
        'Given: n = 1; λ = 500 nm; d = 833.3 nm (1200 grooves/mm); i = 30°.',
        'sin r = nλ/d − sin i = 500 / 833.3 − sin 30° = 0.600 − 0.500 = 0.100.',
        'r = sin⁻¹(0.100).',
        'Result: r = 5.739° (measured from the normal; the sign convention varies between texts).',
      ],
    },
    mistakes: {
      tr: [
        'Çizgi yoğunluğunu (çizgi/mm) d yerine girmek; d = 1 / çizgi yoğunluğu.',
        'λ ve d’yi farklı birimlerde kullanmak.',
        'Açıların işaret kuralını karıştırmak ya da daha yüksek mertebelerin aynı açıya düşebileceğini unutmak.',
      ],
      en: [
        'Entering the groove density (grooves/mm) as d; d = 1 / groove density.',
        'Using λ and d in different units.',
        'Mixing up the sign convention for angles, or forgetting that higher orders can fall at the same angle.',
      ],
    },
    related: ['wavelength-frequency', 'bragg', 'fiber-na'],
  },

  'fiber-na': {
    concept: {
      tr: 'Optik fiber, yüksek kırılma indisli bir çekirdek ve onu saran daha düşük indisli bir kılıftan oluşur. Çekirdek içinde ilerleyen ışık, çekirdek–kılıf arayüzüne kritik açıdan büyük açılarla çarptığı sürece tam iç yansımayla fiber boyunca taşınır.\n\nSpektroskopide fiberler ışığı numuneye ve numuneden dedektöre taşır; uzaktan ölçüm probları, proses kontrolü ve fiber optik algılayıcılar böyle çalışır. Sayısal açıklık (NA), fiberin ne kadar geniş bir koni içinden ışık toplayabildiğini gösterir.',
      en: 'An optical fibre consists of a high-refractive-index core surrounded by a lower-index cladding. Light in the core is guided along the fibre by total internal reflection as long as it strikes the core–cladding interface at angles greater than the critical angle.\n\nIn spectroscopy fibres carry light to the sample and from the sample to the detector; remote probes, process monitoring and fibre-optic sensors work this way. The numerical aperture (NA) describes how wide a cone of light the fibre can accept.',
    },
    meaning: {
      tr: 'NA = n₀ · sin θ_a = √(n₁² − n₂²).\n\nTüretme: çekirdek–kılıf arayüzünde kritik açı sin θ_c = n₂/n₁’dir. Fibere giren ışının içeride bu koşulu sağlaması için giriş yüzeyinde (Snell yasası) n₀ · sin θ_a = n₁ · cos θ_c = √(n₁² − n₂²) olmalıdır.\n\n• θ_a: kabul (yarı) açısı; havadan girişte (n₀ = 1) θ_a = sin⁻¹(NA).\n• NA büyüdükçe fiber daha fazla ışık toplar; ancak farklı açılardaki ışınların yol uzunlukları farklılaştığından sinyalin zamanca yayılması (modal dispersiyon) artar.\n\nÇekirdek ile kılıf arasındaki küçük bir indis farkı bile kayda değer bir NA verir.',
      en: 'NA = n₀ · sin θ_a = √(n₁² − n₂²).\n\nDerivation: at the core–cladding interface the critical angle is sin θ_c = n₂/n₁. For a ray entering the fibre to meet this condition inside, refraction at the entrance face (Snell’s law) requires n₀ · sin θ_a = n₁ · cos θ_c = √(n₁² − n₂²).\n\n• θ_a: acceptance (half-)angle; when light enters from air (n₀ = 1), θ_a = sin⁻¹(NA).\n• A larger NA collects more light, but rays at different angles travel different path lengths, so pulse spreading (modal dispersion) increases.\n\nEven a small index difference between core and cladding gives a sizeable NA.',
    },
    usage: {
      tr: [
        'Fiber seçerken ışık toplama yeteneğini karşılaştırmak.',
        'Kabul açısını bulup ışık kaynağı ya da prob geometrisini tasarlamak.',
        'Fiberi bir spektrometreye bağlarken spektrometrenin kabul açısının fiberin NA’sıyla uyumlu olmasını sağlamak.',
        'Fiber havadan farklı bir ortama (ör. suya) bakıyorsa kabul açısı n₀ ile hesaplanmalıdır.',
      ],
      en: [
        'Comparing the light-gathering ability of fibres.',
        'Finding the acceptance angle to design the source or probe geometry.',
        'Matching the acceptance angle of a spectrometer to the NA of the fibre that feeds it.',
        'If the fibre faces a medium other than air (e.g. water), the acceptance angle must be calculated with n₀.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n₁ (çekirdek) = 1,48; n₂ (kılıf) = 1,46.',
        'n₁² − n₂² = 2,1904 − 2,1316 = 0,0588.',
        'NA = √0,0588; havadan kabul açısı θ_a = sin⁻¹(0,2425) = 14,03°.',
        'Sonuç: NA = 0,2425.',
      ],
      en: [
        'Given: n₁ (core) = 1.48; n₂ (cladding) = 1.46.',
        'n₁² − n₂² = 2.1904 − 2.1316 = 0.0588.',
        'NA = √0.0588; acceptance angle from air θ_a = sin⁻¹(0.2425) = 14.03°.',
        'Result: NA = 0.2425.',
      ],
    },
    mistakes: {
      tr: [
        'Kareleri almadan farkın karekökünü almak: √(1,48 − 1,46) = 0,141 yanlıştır.',
        'n₁ ile n₂’yi ters girmek; kılıfın indisi çekirdekten büyükse ışık kılavuzlanmaz.',
        'NA’yı doğrudan bir açı sanmak; açı sin⁻¹(NA/n₀) ile bulunur.',
      ],
      en: [
        'Taking the square root of the difference without squaring: √(1.48 − 1.46) = 0.141 is wrong.',
        'Swapping n₁ and n₂; if the cladding index exceeds the core index, light is not guided.',
        'Treating NA as an angle; the angle is sin⁻¹(NA/n₀).',
      ],
    },
    related: ['atr-critical-angle', 'refractive-index', 'grating'],
  },

  'stern-volmer': {
    concept: {
      tr: 'Floresans sönümlemesi, uyarılmış bir floroforun başka bir türle (sönümleyici, Q) etkileşerek ışık yaymadan temel duruma dönmesidir. Çözünmüş oksijen, ağır atom içeren iyonlar (I⁻, Br⁻) ve bazı geçiş metali iyonları etkili sönümleyicilerdir.\n\nSönümleme hem bir girişim kaynağıdır (ölçümden önce çözünmüş O₂’nin uzaklaştırılması gerekebilir) hem de bir analiz aracıdır: floresans şiddetindeki azalmadan sönümleyicinin derişimi bulunabilir. Optik oksijen sensörleri bu ilkeyle çalışır.',
      en: 'Fluorescence quenching is the return of an excited fluorophore to the ground state without emitting light, through interaction with another species (the quencher, Q). Dissolved oxygen, heavy-atom ions (I⁻, Br⁻) and some transition-metal ions are efficient quenchers.\n\nQuenching is both an interference (dissolved O₂ may have to be removed before measurement) and an analytical tool: the decrease in fluorescence intensity gives the quencher concentration. Optical oxygen sensors work on this principle.',
    },
    meaning: {
      tr: 'F₀ / F = 1 + K_SV · [Q]. F₀ sönümleyici yokken, F sönümleyici varken ölçülen şiddettir.\n\nDinamik (çarpışmalı) sönümlemede uyarılmış florofor yaşam süresi boyunca sönümleyiciyle çarpışır. Uyarılmış durumun yok olma hızları sönümleyicili ve sönümleyicisiz durumda karşılaştırılınca K_SV = k_q · τ₀ bulunur; k_q ikili sönümleme hız sabiti, τ₀ sönümleyicisiz floresans yaşam süresidir. Difüzyon kontrollü sönümlemede k_q, 10¹⁰ M⁻¹ s⁻¹ mertebesindedir.\n\nStatik sönümlemede florofor ile sönümleyici temel durumda floresans vermeyen bir kompleks oluşturur; aynı doğrusal biçim elde edilir, ama K_SV yerine kompleksin oluşum sabiti gelir. İkisi yaşam süresi ölçümüyle ayırt edilir: dinamik sönümlemede τ₀/τ = F₀/F olur, statik sönümlemede yaşam süresi değişmez.\n\nF₀/F’nin [Q]’ya karşı grafiği doğrusal olmalıdır; yukarı doğru eğrilik, iki mekanizmanın birlikte etkin olduğunu düşündürür.',
      en: 'F₀ / F = 1 + K_SV · [Q]. F₀ is the intensity without quencher, F the intensity with quencher.\n\nIn dynamic (collisional) quenching the excited fluorophore collides with the quencher during its lifetime. Comparing the decay rates of the excited state with and without quencher gives K_SV = k_q · τ₀, where k_q is the bimolecular quenching rate constant and τ₀ the fluorescence lifetime without quencher. For diffusion-controlled quenching k_q is of the order of 10¹⁰ M⁻¹ s⁻¹.\n\nIn static quenching the fluorophore and quencher form a non-fluorescent ground-state complex; the same linear form results, with the formation constant of the complex in place of K_SV. The two are distinguished by lifetime measurements: in dynamic quenching τ₀/τ = F₀/F, while in static quenching the lifetime does not change.\n\nThe plot of F₀/F against [Q] should be linear; upward curvature suggests that both mechanisms operate together.',
    },
    usage: {
      tr: [
        'Kalibrasyonla K_SV belirlendikten sonra sönümleyici (O₂, halojenür) derişimini bulmak.',
        'Floresans ölçümlerinde O₂ gibi sönümleyicilerin girişimini tahmin etmek.',
        'Sönümleme mekanizmasını ve sönümleyicinin florofora erişebilirliğini incelemek.',
        'Yalnızca F₀/F – [Q] ilişkisinin doğrusal olduğu aralıkta geçerlidir; sönümleyici ışığı soğuruyorsa iç süzgeç etkisi ayrıca düzeltilmelidir.',
      ],
      en: [
        'Finding a quencher concentration (O₂, halide) once K_SV has been determined by calibration.',
        'Estimating interference from quenchers such as O₂ in fluorescence measurements.',
        'Studying the quenching mechanism and the accessibility of the fluorophore to the quencher.',
        'Valid only where F₀/F versus [Q] is linear; if the quencher absorbs light, the inner-filter effect must be corrected separately.',
      ],
    },
    solution: {
      tr: [
        'Verilen: F₀/F = 1,5; K_SV = 200 M⁻¹.',
        '[Q] = (F₀/F − 1) / K_SV = (1,5 − 1) / 200 M⁻¹ = 2,5 × 10⁻³ M.',
        '1 M = 1000 mM olduğundan 2,5 × 10⁻³ M = 2,5 mM.',
        'Sonuç: [Q] = 2,5 mM (floresans şiddeti sönümleyicisiz değerin üçte ikisine düşmüştür).',
      ],
      en: [
        'Given: F₀/F = 1.5; K_SV = 200 M⁻¹.',
        '[Q] = (F₀/F − 1) / K_SV = (1.5 − 1) / 200 M⁻¹ = 2.5 × 10⁻³ M.',
        'Since 1 M = 1000 mM, 2.5 × 10⁻³ M = 2.5 mM.',
        'Result: [Q] = 2.5 mM (the intensity has dropped to two thirds of its unquenched value).',
      ],
    },
    mistakes: {
      tr: [
        'F₀/F yerine F/F₀ oranını kullanmak (oran 1’den küçük çıkar).',
        'K_SV birimi M⁻¹ iken derişimi mM cinsinden kullanıp sonucu M sanmak.',
        'Doğrusal bir grafiğin mutlaka dinamik sönümleme anlamına geldiğini düşünmek; statik sönümleme de doğrusal grafik verir.',
      ],
      en: [
        'Using F/F₀ instead of F₀/F (the ratio comes out below 1).',
        'Using a concentration in mM with K_SV in M⁻¹ and reading the result as M.',
        'Assuming a linear plot always means dynamic quenching; static quenching also gives a linear plot.',
      ],
    },
    related: ['fluorescence-linearity', 'linear-regression', 'beer-lambert'],
  },

  'two-component': {
    concept: {
      tr: 'İki soğurucu tür aynı çözeltide bulunduğunda spektrumları çoğunlukla örtüşür ve hiçbir dalga boyunda yalnızca biri soğurmaz. Absorbanslar toplanabilir olduğundan (her tür Beer yasasına diğerinden bağımsız uyar), iki dalga boyunda ölçüm yapılarak iki bilinmeyenli doğrusal bir denklem sistemi kurulur ve iki derişim ayırma yapmadan aynı anda bulunur.',
      en: 'When two absorbing species are present in the same solution their spectra usually overlap, and at no wavelength does only one of them absorb. Because absorbances are additive (each species obeys Beer’s law independently), measuring at two wavelengths gives a linear system of two equations in two unknowns, and both concentrations are found simultaneously without a separation.',
    },
    meaning: {
      tr: 'Absorbansların toplanabilirliği: A_λ = ε_X,λ · b · c_X + ε_Y,λ · b · c_Y. İki dalga boyu için:\n• A₁ = ε_X1 · b · c_X + ε_Y1 · b · c_Y\n• A₂ = ε_X2 · b · c_X + ε_Y2 · b · c_Y\n\nCramer kuralıyla çözülür: D = b² (ε_X1 · ε_Y2 − ε_Y1 · ε_X2); c_X = b (A₁ · ε_Y2 − A₂ · ε_Y1) / D; c_Y = b (ε_X1 · A₂ − ε_X2 · A₁) / D.\n\nGüvenilir sonuç için dalga boyları, bileşenlerin ε oranlarının birbirinden en çok farklı olduğu yerlerde (ideal olarak her birinin kendi λ_max’ında) seçilir. Spektrumlar çok benzerse D sıfıra yaklaşır ve küçük absorbans hataları derişimlerde büyük hatalara dönüşür.\n\nε değerleri, aynı cihaz ve küvetle, saf bileşenlerin standart çözeltilerinden her iki dalga boyunda ayrı ayrı belirlenir.',
      en: 'Additivity of absorbances: A_λ = ε_X,λ · b · c_X + ε_Y,λ · b · c_Y. For two wavelengths:\n• A₁ = ε_X1 · b · c_X + ε_Y1 · b · c_Y\n• A₂ = ε_X2 · b · c_X + ε_Y2 · b · c_Y\n\nSolved by Cramer’s rule: D = b² (ε_X1 · ε_Y2 − ε_Y1 · ε_X2); c_X = b (A₁ · ε_Y2 − A₂ · ε_Y1) / D; c_Y = b (ε_X1 · A₂ − ε_X2 · A₁) / D.\n\nFor a reliable result, choose wavelengths where the ε ratios of the components differ most (ideally the λ_max of each). If the spectra are very similar, D approaches zero and small absorbance errors become large concentration errors.\n\nThe ε values are determined separately at both wavelengths from standard solutions of the pure components, with the same instrument and cell.',
    },
    usage: {
      tr: [
        'Spektrumları örtüşen iki bileşenin (ör. iki metal kompleksi ya da iki boyar madde) eşzamanlı tayini.',
        'Her iki bileşenin her iki dalga boyunda Beer yasasına uyduğu ve birbiriyle tepkimeye girmediği varsayılır.',
        'Üç ya da daha fazla bileşen ya da ikiden fazla dalga boyu için Çok bileşenli analiz aracı kullanılır.',
        'Sonucu kontrol etmek için üçüncü bir dalga boyunda beklenen absorbans hesaplanıp ölçülenle karşılaştırılabilir.',
      ],
      en: [
        'Simultaneous determination of two components with overlapping spectra (e.g. two metal complexes or two dyes).',
        'Both components are assumed to obey Beer’s law at both wavelengths and not to react with each other.',
        'For three or more components, or more than two wavelengths, use the Multicomponent analysis tool.',
        'To check the result, calculate the expected absorbance at a third wavelength and compare it with the measured value.',
      ],
    },
    solution: {
      tr: [
        'Araçtaki örnek: b = 1 cm; λ₁’de A = 0,857, ε_X = 16 440, ε_Y = 3870; λ₂’de A = 0,481, ε_X = 3990, ε_Y = 6420 L mol⁻¹ cm⁻¹.',
        'D = 16 440 × 6420 − 3870 × 3990 = 1,0554 × 10⁸ − 1,544 × 10⁷ = 9,010 × 10⁷.',
        'c_X = (0,857 × 6420 − 0,481 × 3870) / D = 3640,5 / 9,010 × 10⁷; c_Y = (16 440 × 0,481 − 3990 × 0,857) / D = 4488,2 / 9,010 × 10⁷.',
        'Sonuç: c_X = 4,04 × 10⁻⁵ M ve c_Y = 4,981 × 10⁻⁵ M (kontrol: 16 440 × 4,04 × 10⁻⁵ + 3870 × 4,981 × 10⁻⁵ = 0,857).',
      ],
      en: [
        'Tool sample: b = 1 cm; at λ₁ A = 0.857, ε_X = 16 440, ε_Y = 3870; at λ₂ A = 0.481, ε_X = 3990, ε_Y = 6420 L mol⁻¹ cm⁻¹.',
        'D = 16 440 × 6420 − 3870 × 3990 = 1.0554 × 10⁸ − 1.544 × 10⁷ = 9.010 × 10⁷.',
        'c_X = (0.857 × 6420 − 0.481 × 3870) / D = 3640.5 / 9.010 × 10⁷; c_Y = (16 440 × 0.481 − 3990 × 0.857) / D = 4488.2 / 9.010 × 10⁷.',
        'Result: c_X = 4.04 × 10⁻⁵ M and c_Y = 4.981 × 10⁻⁵ M (check: 16 440 × 4.04 × 10⁻⁵ + 3870 × 4.981 × 10⁻⁵ = 0.857).',
      ],
    },
    mistakes: {
      tr: [
        'ε değerlerini yanlış yere yazmak (X ile Y’yi ya da λ₁ ile λ₂’yi karıştırmak).',
        'Spektrumları benzer bileşenler için birbirine yakın dalga boyları seçmek; sistem kötü koşullu olur.',
        'Karışımı ve standartları farklı optik yollu küvetlerde ölçmek; b her iki denklemde aynı olmalıdır.',
      ],
      en: [
        'Putting ε values in the wrong place (swapping X and Y, or λ₁ and λ₂).',
        'Choosing wavelengths close together for components with similar spectra; the system becomes ill-conditioned.',
        'Measuring the mixture and the standards in cells of different path length; b must be the same in both equations.',
      ],
    },
    related: ['multicomponent', 'beer-lambert', 'absorbance-transmittance'],
  },

  'job-method': {
    concept: {
      tr: 'Bir metal iyonu (M) ile bir ligand (L) renkli bir kompleks (ML_n) oluşturuyorsa, kompleksin stokiyometrisi spektrofotometrik olarak bulunabilir. Job yönteminde (sürekli değişim yöntemi) M ve L’nin eşit derişimli stok çözeltileri, toplam mol sayısı ve toplam hacim sabit kalacak ama oranları değişecek şekilde karıştırılır; her karışımın absorbansı ölçülür.\n\nKompleks miktarı, bileşenler kompleksteki oranda karıştırıldığında en büyüktür. Absorbansın ligand mol kesrine karşı grafiğindeki maksimum bu oranı verir.',
      en: 'If a metal ion (M) and a ligand (L) form a coloured complex (ML_n), the stoichiometry of the complex can be found spectrophotometrically. In Job’s method (the method of continuous variations), equimolar stock solutions of M and L are mixed in varying proportions while the total moles and total volume stay constant, and the absorbance of each mixture is measured.\n\nThe amount of complex is greatest when the components are mixed in the ratio found in the complex, so the maximum of the absorbance versus ligand mole fraction plot gives that ratio.',
    },
    meaning: {
      tr: 'x_L = n_L / (n_L + n_M) ligandın mol kesridir. ML_n kompleksi için maksimum x_L = n / (n + 1)’de görülür; buradan n = x_L / (1 − x_L):\n• x_L = 0,50 → ML (1:1)\n• x_L = 0,67 → ML₂ (1:2)\n• x_L = 0,75 → ML₃ (1:3)\n\nKompleks tam oluşmuyorsa (oluşum sabiti çok büyük değilse) tepe yuvarlaklaşır. Bu yüzden maksimumun iki yanındaki doğrusal bölgelere doğrular uydurulur ve kesişim noktası alınır; araç maksimuma bitişik eğrisel noktaları dışarıda bırakır. Tepenin ne kadar yuvarlak olduğu, oluşum sabiti hakkında da fikir verir.\n\nMetal ya da ligand ölçüm dalga boyunda soğuruyorsa, ölçülen absorbanstan kompleks oluşmasaydı bu bileşenlerin vereceği absorbans çıkarılır ve düzeltilmiş absorbans kullanılır.',
      en: 'x_L = n_L / (n_L + n_M) is the mole fraction of ligand. For an ML_n complex the maximum appears at x_L = n / (n + 1), so n = x_L / (1 − x_L):\n• x_L = 0.50 → ML (1:1)\n• x_L = 0.67 → ML₂ (1:2)\n• x_L = 0.75 → ML₃ (1:3)\n\nIf complex formation is incomplete (the formation constant is not very large), the peak is rounded. Straight lines are therefore fitted to the linear regions on either side of the maximum and their intersection is taken; the tool skips the curved points next to the maximum. The degree of rounding also gives an idea of the formation constant.\n\nIf the metal or ligand absorbs at the measuring wavelength, subtract the absorbance they would give without complex formation and use the corrected absorbance.',
    },
    usage: {
      tr: [
        'Çözeltide tek bir baskın kompleksin oluştuğu sistemlerde M:L oranını bulmak.',
        'Birden çok kompleks birlikte oluşuyorsa (ML, ML₂, ML₃) yöntem yanıltıcı sonuç verebilir.',
        'Tüm karışımlarda pH, iyonik şiddet ve toplam hacim sabit tutulmalıdır.',
        'Veri satırları “x_L absorbans” biçiminde girilir; maksimumun her iki yanında en az iki nokta olmalıdır.',
      ],
      en: [
        'Finding the M:L ratio in systems where a single complex dominates.',
        'If several complexes form together (ML, ML₂, ML₃), the method can mislead.',
        'Keep pH, ionic strength and total volume constant in all mixtures.',
        'Data rows are entered as “x_L absorbance”; there must be at least two points on each side of the maximum.',
      ],
    },
    solution: {
      tr: [
        'Araçtaki örnek: x_L = 0–1,0 arasında 11 karışım; en yüksek absorbans x_L = 0,6’da (A = 0,502).',
        'x_L = 0,5; 0,6 ve 0,7’deki eğrisel noktalar dışarıda bırakılır. Sol doğru (x_L = 0–0,4): A = 0,899 · x_L + 0,0006; sağ doğru (x_L = 0,8–1,0): A = −1,805 · x_L + 1,8045.',
        'Kesişim: x_L = (1,8045 − 0,0006) / (0,899 + 1,805) = 0,6671.',
        'Sonuç: L : M = 0,6671 / (1 − 0,6671) = 2,004 : 1 → kompleks ML₂.',
      ],
      en: [
        'Tool sample: 11 mixtures with x_L from 0 to 1.0; the highest absorbance is at x_L = 0.6 (A = 0.502).',
        'The curved points at x_L = 0.5, 0.6 and 0.7 are skipped. Left line (x_L = 0–0.4): A = 0.899 · x_L + 0.0006; right line (x_L = 0.8–1.0): A = −1.805 · x_L + 1.8045.',
        'Intersection: x_L = (1.8045 − 0.0006) / (0.899 + 1.805) = 0.6671.',
        'Result: L : M = 0.6671 / (1 − 0.6671) = 2.004 : 1 → the complex is ML₂.',
      ],
    },
    mistakes: {
      tr: [
        'Eşit derişimli olmayan stok çözeltiler kullanmak; o zaman hacim kesri mol kesrine eşit olmaz.',
        'Yuvarlak tepenin x değerini doğrudan okumak; doğruların kesişimi kullanılmalıdır.',
        'Ekseni metalin mol kesri olarak çizip oranı ters yorumlamak (x_M = 0,33 de ML₂ demektir).',
      ],
      en: [
        'Using stock solutions of unequal concentration; then the volume fraction is not the mole fraction.',
        'Reading the x value of a rounded peak directly; use the intersection of the lines.',
        'Plotting against the metal mole fraction and inverting the ratio (x_M = 0.33 also means ML₂).',
      ],
    },
    related: ['mole-ratio', 'beer-lambert', 'conditional-kf'],
  },

  multicomponent: {
    concept: {
      tr: 'İkiden fazla bileşenin spektrumları örtüştüğünde ikili karışım yöntemi genelleştirilir: her dalga boyundaki absorbans, tüm bileşenlerin katkılarının toplamıdır. n bileşen için en az n dalga boyunda ölçüm gerekir. Dalga boyu sayısı bileşen sayısından fazla seçilirse ölçüm gürültüsünün etkisi en küçük kareler yöntemiyle azaltılır.\n\nBu yaklaşım klasik en küçük kareler (CLS) olarak bilinir ve diyot dizili spektrofotometrelerin çok bileşenli analiz yazılımlarının temelini oluşturur.',
      en: 'When more than two components have overlapping spectra, the two-component method is generalised: the absorbance at each wavelength is the sum of contributions from all components. n components require measurements at n or more wavelengths. If more wavelengths than components are used, the effect of measurement noise is reduced by least squares.\n\nThis approach is known as classical least squares (CLS) and underlies the multicomponent analysis software of diode-array spectrophotometers.',
    },
    meaning: {
      tr: 'Matris gösterimiyle A = E · c (E’nin öğeleri ε · b’dir):\n• A: m dalga boyundaki absorbanslar (m × 1)\n• E: saf bileşenlerin molar absorptiviteleri × b (m × n)\n• c: bilinmeyen derişimler (n × 1)\n\nm = n ise sistem tam çözülür. m > n ise artıkların kareleri toplamını en küçük yapan çözüm normal denklemlerden bulunur: c = (EᵀE)⁻¹ Eᵀ A.\n\nArtık standart sapma s = √[Σ(A_ölçülen − A_hesaplanan)² / (m − n)], modelin veriye uyumunu gösterir. Cihaz gürültüsünden belirgin biçimde büyükse karışımda modele girmemiş bir soğurucu, saçılma ya da bileşenler arası etkileşim olabilir.\n\nBileşen spektrumları birbirine çok benziyorsa EᵀE neredeyse tekil olur ve derişimler çok belirsizleşir.',
      en: 'In matrix form A = E · c (the elements of E are ε · b):\n• A: absorbances at m wavelengths (m × 1)\n• E: molar absorptivities of the pure components × b (m × n)\n• c: unknown concentrations (n × 1)\n\nIf m = n the system is solved exactly. If m > n the solution that minimises the sum of squared residuals follows from the normal equations: c = (EᵀE)⁻¹ Eᵀ A.\n\nThe residual standard deviation s = √[Σ(A_measured − A_calculated)² / (m − n)] shows how well the model fits. If it is clearly larger than the instrument noise, the mixture may contain an absorber missing from the model, scattering, or interactions between components.\n\nIf the component spectra are very similar, EᵀE is nearly singular and the concentrations become very uncertain.',
    },
    usage: {
      tr: [
        'Üç ya da daha fazla soğurucunun (ör. ilaç formülasyonları, boyar madde karışımları) ayırma yapmadan eşzamanlı tayini.',
        'Bileşen sayısından fazla dalga boyu kullanarak sonuçların kesinliğini artırmak.',
        'Tüm soğurucu bileşenler bilinmeli ve saf spektrumları (ε) aynı koşullarda ölçülmelidir.',
        'Her satıra bir dalga boyu girilir: önce karışımın absorbansı, sonra her bileşenin ε değeri.',
      ],
      en: [
        'Simultaneous determination of three or more absorbers (e.g. drug formulations, dye mixtures) without separation.',
        'Improving precision by using more wavelengths than components.',
        'All absorbing components must be known and their pure spectra (ε) measured under the same conditions.',
        'Each row is one wavelength: first the absorbance of the mixture, then the ε of each component.',
      ],
    },
    solution: {
      tr: [
        'Araçtaki örnek: 4 dalga boyu, 3 bileşen, b = 1 cm; ör. 1. satırda A = 0,4120 ve ε₁ = 12 000, ε₂ = 4500, ε₃ = 1800 L mol⁻¹ cm⁻¹.',
        'Dört denklem, üç bilinmeyen: c = (EᵀE)⁻¹ Eᵀ A normal denklemleri çözülür.',
        'Modelin verdiği absorbanslar 0,4104; 0,5835; 0,3510; 0,4508 (ölçülen: 0,4120; 0,5870; 0,3560; 0,4410); artık standart sapma s = 0,01166 (serbestlik derecesi 4 − 3 = 1).',
        'Sonuç: c₁ = 1,72 × 10⁻⁵ M, c₂ = 3,856 × 10⁻⁵ M, c₃ = 1,696 × 10⁻⁵ M.',
      ],
      en: [
        'Tool sample: 4 wavelengths, 3 components, b = 1 cm; e.g. row 1 has A = 0.4120 and ε₁ = 12 000, ε₂ = 4500, ε₃ = 1800 L mol⁻¹ cm⁻¹.',
        'Four equations, three unknowns: solve the normal equations c = (EᵀE)⁻¹ Eᵀ A.',
        'Model absorbances 0.4104, 0.5835, 0.3510, 0.4508 (measured: 0.4120, 0.5870, 0.3560, 0.4410); residual standard deviation s = 0.01166 (4 − 3 = 1 degree of freedom).',
        'Result: c₁ = 1.72 × 10⁻⁵ M, c₂ = 3.856 × 10⁻⁵ M, c₃ = 1.696 × 10⁻⁵ M.',
      ],
    },
    mistakes: {
      tr: [
        'Bileşen sayısından az dalga boyu kullanmak (sistem çözülemez).',
        'Dalga boylarını yalnızca spektrumların çok benzer olduğu bölgeden seçmek.',
        'Karışımda bulunup modele eklenmemiş bir soğurucuyu göz ardı etmek; bu tüm derişimleri sistematik olarak bozar ve büyük artıklarla kendini gösterir.',
      ],
      en: [
        'Using fewer wavelengths than components (the system cannot be solved).',
        'Choosing wavelengths only where the spectra are very similar.',
        'Ignoring an absorber present in the mixture but missing from the model; it biases all concentrations and shows up as large residuals.',
      ],
    },
    related: ['two-component', 'beer-lambert', 'linear-regression'],
  },

  'mole-ratio': {
    concept: {
      tr: 'Mol oranı yönteminde metal iyonunun derişimi sabit tutulur, ligand derişimi giderek artırılır ve her çözeltinin absorbansı ölçülür. Ligand metalden azken eklenen her ligand yeni kompleks oluşturduğundan absorbans doğrusal artar. Metal tükenince eklenen ligand absorbansı değiştirmez (ya da yalnızca ligandın kendi soğurması kadar artırır).\n\nİki doğrusal bölgenin kesiştiği nokta kompleksin L:M oranını verir. Aynı mantık fotometrik titrasyonda da kullanılır: absorbansın titrant hacmine karşı grafiğindeki kırılma noktası dönüm noktasıdır.',
      en: 'In the mole-ratio method the metal-ion concentration is kept constant, the ligand concentration is increased step by step and the absorbance of each solution is measured. While ligand is in deficit, every added ligand forms more complex and the absorbance rises linearly. Once the metal is used up, further ligand no longer changes the absorbance (or raises it only by the ligand’s own absorption).\n\nThe intersection of the two linear regions gives the L:M ratio of the complex. Photometric titrations use the same idea: the break in the plot of absorbance against titrant volume is the end point.',
    },
    meaning: {
      tr: 'ML_n kompleksi için kesişim, mol L / mol M = n’dedir.\n\nKompleks çok kararlıysa grafik keskin bir köşe yapar. Oluşum sabiti küçüldükçe kompleks kısmen ayrışır ve köşe yuvarlanır; kesişim doğruların uzantısından bulunur. Araç, olası her bölme noktası için iki doğru uydurur ve toplam artık kareler toplamını en küçük yapan bölmeyi seçer.\n\nFotometrik titrasyonda grafiğin biçimi hangi türün soğurduğuna bağlıdır: yalnızca ürün soğuruyorsa absorbans artıp sabitlenir; yalnızca analit soğuruyorsa azalıp sabitlenir; yalnızca titrant soğuruyorsa dönüm noktasına kadar sabit kalıp sonra artar. Seyrelmeyi düzeltmek için absorbanslar (V + v)/V ile çarpılır (V başlangıç hacmi, v eklenen titrant hacmi).',
      en: 'For an ML_n complex the intersection is at mol L / mol M = n.\n\nWith a very stable complex the plot has a sharp corner. As the formation constant decreases, the complex partly dissociates and the corner becomes rounded; the intersection is then found by extrapolating the lines. The tool fits two lines for every possible split point and chooses the split with the smallest total sum of squared residuals.\n\nIn a photometric titration the shape depends on which species absorbs: if only the product absorbs, the absorbance rises and levels off; if only the analyte absorbs, it falls and levels off; if only the titrant absorbs, it stays flat until the end point and then rises. To correct for dilution, absorbances are multiplied by (V + v)/V (V initial volume, v titrant volume added).',
    },
    usage: {
      tr: [
        'Yeterince kararlı kompleksler için M:L stokiyometrisini bulmak; basamaklı kompleksleşmede birden fazla kırılma görülebilir.',
        'Fotometrik titrasyonda dönüm noktasını bulmak (x ekseni titrant hacmi olarak girilir).',
        'Kırılmadan uzaktaki noktalar daha güvenilirdir; noktalar her iki bölgeye de yayılmalıdır.',
        'En az 4 nokta gerekir; her doğru en az 2 noktaya uydurulur.',
      ],
      en: [
        'Finding the M:L stoichiometry of sufficiently stable complexes; stepwise complexation may show more than one break.',
        'Locating the end point of a photometric titration (enter the titrant volume as x).',
        'Points far from the break are more reliable; spread points over both regions.',
        'At least 4 points are needed; each line is fitted to at least 2 points.',
      ],
    },
    solution: {
      tr: [
        'Araçtaki örnek: mol L / mol M = 0–4,0 arasında 9 çözelti; absorbans 0’dan 0,654’e yükselir.',
        'En iyi bölme: 1. doğru (oran 0–2,0) A = 0,2906 · x + 0,0054; 2. doğru (oran 2,5–4,0) A = 0,0156 · x + 0,5943.',
        'Kesişim: x = (0,5943 − 0,0054) / (0,2906 − 0,0156) = 0,5889 / 0,2750.',
        'Sonuç: kesişim = 2,141 ≈ 2 → kompleks ML₂ (köşe, kısmi ayrışma nedeniyle biraz yuvarlaktır).',
      ],
      en: [
        'Tool sample: 9 solutions with mol L / mol M from 0 to 4.0; the absorbance rises from 0 to 0.654.',
        'Best split: line 1 (ratio 0–2.0) A = 0.2906 · x + 0.0054; line 2 (ratio 2.5–4.0) A = 0.0156 · x + 0.5943.',
        'Intersection: x = (0.5943 − 0.0054) / (0.2906 − 0.0156) = 0.5889 / 0.2750.',
        'Result: intersection = 2.141 ≈ 2 → the complex is ML₂ (the corner is slightly rounded by partial dissociation).',
      ],
    },
    mistakes: {
      tr: [
        'Kırılma çevresindeki eğrisel noktaları doğrulara dahil edip kesişimi kaydırmak.',
        'Fotometrik titrasyonda seyrelme düzeltmesi yapmamak; doğrular eğrilir.',
        'Kesişimin tam sayı çıkmamasını yeni bir stokiyometri sanmak; değer en yakın basit orana yuvarlanır ve gerekirse Job yöntemiyle doğrulanır.',
      ],
      en: [
        'Including the curved points near the break in the line fits, which shifts the intersection.',
        'Omitting the dilution correction in a photometric titration; the lines become curved.',
        'Reading a non-integer intersection as a new stoichiometry; round to the nearest simple ratio and confirm with Job’s method if needed.',
      ],
    },
    related: ['job-method', 'derivative-endpoint', 'conditional-kf'],
  },
};

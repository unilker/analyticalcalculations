import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Tools & tables module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests for formula tools).
 */
export const TOOLS_DETAILS: Record<string, ToolDetail> = {
  buoyancy: {
    concept: {
      tr: 'Terazide tartılan bir cisme hava, yer değiştirdiği hacim kadar kaldırma kuvveti uygular. Terazinin kalibrasyonunda kullanılan ağırlıklar da aynı etkiye uğrar, ama yoğunlukları farklı olduğu için iki etki birbirini tam götürmez.\n\nYoğunluğu düşük cisimler (su, organik sıvılar, hafif tozlar) yoğun paslanmaz çelik ağırlıklardan daha fazla hava yerinden eder. Bu yüzden havada olduklarından biraz hafif görünürler. Hassas çalışmada, özellikle cam malzemelerin su tartımıyla kalibrasyonunda, bu düzeltme gerekir.',
      en: 'Air exerts a buoyant force on an object on the balance equal to the weight of the air it displaces. The weights used to calibrate the balance feel the same effect, but because their density differs the two effects do not cancel exactly.\n\nLow-density objects (water, organic liquids, light powders) displace more air than dense stainless-steel weights, so in air they appear slightly lighter than they are. Accurate work, especially calibrating glassware by weighing water, needs this correction.',
    },
    meaning: {
      tr: 'W_vac = W_air + W_air · (d_air / d_obj − d_air / d_w).\n\n• d_air / d_obj: cismin yerinden ettiği havanın göreli kütlesi; cismi hafif gösterir.\n• d_air / d_w: ağırlıkların yerinden ettiği havanın göreli kütlesi; bu etki ters yönde çalışır.\n\nHavanın yoğunluğu yaklaşık 0,0012 g/mL, terazi ağırlıklarınınki yaklaşık 8,0 g/mL’dir. Cismin yoğunluğu ağırlıklarınkine yaklaştıkça düzeltme sıfıra gider.',
      en: 'W_vac = W_air + W_air · (d_air / d_obj − d_air / d_w).\n\n• d_air / d_obj: relative mass of air displaced by the object; it makes the object appear lighter.\n• d_air / d_w: relative mass of air displaced by the weights; it acts the other way.\n\nAir has a density of about 0.0012 g/mL and balance weights about 8.0 g/mL. As the object’s density approaches that of the weights, the correction goes to zero.',
    },
    usage: {
      tr: [
        'Pipet, büret ve balon jojelerin su tartımıyla kalibrasyonu.',
        'Yoğunluğu düşük maddelerin hassas tartımı.',
        'Yoğunluğu 5 g/mL’den büyük katılarda düzeltme genellikle ihmal edilebilir.',
        'Havanın yoğunluğu sıcaklık, basınç ve neme göre biraz değişir; çok hassas işlerde ölçülen değer kullanılır.',
      ],
      en: [
        'Calibrating pipettes, burettes and flasks by weighing water.',
        'Accurate weighing of low-density substances.',
        'For solids denser than about 5 g/mL the correction is usually negligible.',
        'Air density varies slightly with temperature, pressure and humidity; very accurate work uses the measured value.',
      ],
    },
    solution: {
      tr: [
        'Verilen: W_air = 10 g su (d_obj = 1,0 g/mL), d_air = 0,0012 g/mL, d_w = 8,0 g/mL.',
        'Düzeltme terimi: 0,0012/1,0 − 0,0012/8,0 = 0,00120 − 0,00015 = 0,00105.',
        'Sonuç: W_vac = 10 g × 1,00105 = 10,0105 g ≈ 10,01 g; hava, suyun kütlesini yaklaşık %0,1 az gösterir.',
      ],
      en: [
        'Given: W_air = 10 g of water (d_obj = 1.0 g/mL), d_air = 0.0012 g/mL, d_w = 8.0 g/mL.',
        'Correction term: 0.0012/1.0 − 0.0012/8.0 = 0.00120 − 0.00015 = 0.00105.',
        'Result: W_vac = 10 g × 1.00105 = 10.0105 g ≈ 10.01 g; air makes water appear about 0.1% lighter.',
      ],
    },
    mistakes: {
      tr: [
        'Düzeltmeyi yoğun katılarda da şart sanmak (etkisi çoğu zaman tartım belirsizliğinden küçüktür).',
        'Düzeltmenin işaretini ters almak: düşük yoğunluklu cisimlerde gerçek kütle okunandan büyüktür.',
        'Yoğunlukları farklı birimlerde girmek.',
      ],
      en: [
        'Assuming the correction matters for dense solids too (it is usually smaller than the weighing uncertainty).',
        'Getting the sign wrong: for low-density objects the true mass is larger than the reading.',
        'Entering densities in different units.',
      ],
    },
    related: ['molarity-from-percent', 'solution-prep'],
  },

  'molar-mass': {
    concept: {
      tr: 'Molar kütle, bir mol maddenin gram cinsinden kütlesidir ve formüldeki atomların standart atom kütleleri toplanarak bulunur. Kütle ile mol arasındaki her dönüşüm (tartım, standart hazırlama, gravimetrik faktör, sonuç hesabı) molar kütleye dayanır.\n\nBu araç kimyasal formülü çözümleyerek molar kütleyi ve her elementin kütlece yüzdesini hesaplar. Parantezli gruplar, köşeli parantezli kompleksler ve hidrat suyu (· 5H₂O) desteklenir.',
      en: 'The molar mass is the mass of one mole in grams, found by adding the standard atomic masses of the atoms in the formula. Every conversion between mass and moles (weighing, preparing standards, gravimetric factors, result calculations) relies on it.\n\nThis tool parses a chemical formula and computes the molar mass and the mass percentage of each element. Parenthesised groups, bracketed complexes and water of hydration (· 5H₂O) are supported.',
    },
    meaning: {
      tr: 'M = Σ nᵢ · Aᵢ. nᵢ, formüldeki i elementinin atom sayısı; Aᵢ, standart atom kütlesidir.\n\nElementin kütlece yüzdesi: %i = nᵢ · Aᵢ / M × 100. Bu, bir bileşikteki analitin teorik yüzdesini verir ve saflık kontrolünde ya da gravimetrik faktör hesabında kullanılır.\n\nAtom kütleleri IUPAC standart değerleridir. Doğal izotop oranı değişebilen elementlerde son basamak biraz farklı olabilir.',
      en: 'M = Σ nᵢ · Aᵢ, where nᵢ is the number of atoms of element i in the formula and Aᵢ its standard atomic mass.\n\nMass percentage of an element: %i = nᵢ · Aᵢ / M × 100. It gives the theoretical content of an analyte in a compound and is used for purity checks and gravimetric factors.\n\nAtomic masses are IUPAC standard values; for elements whose natural isotopic composition varies the last digit can differ slightly.',
    },
    usage: {
      tr: [
        'Çözelti hazırlarken ve sonuç hesaplarken molar kütleyi bulmak.',
        'Bir bileşikteki elementin teorik yüzdesini hesaplamak (ör. CuSO₄·5H₂O’daki Cu).',
        'Formülü doğru yazın: büyük–küçük harf önemlidir (Co kobalt, CO karbon monoksittir).',
      ],
      en: [
        'Finding molar masses for preparing solutions and calculating results.',
        'Computing the theoretical percentage of an element in a compound (e.g. Cu in CuSO₄·5H₂O).',
        'Write the formula carefully: case matters (Co is cobalt, CO is carbon monoxide).',
      ],
    },
    solution: {
      tr: [
        'Formül (aracın örneği): CuSO₄·5H₂O, yani 1 Cu, 1 S, 9 O ve 10 H.',
        'M = 63,546 + 32,06 + 9 × 15,999 + 10 × 1,008 = 63,546 + 32,06 + 143,991 + 10,08.',
        'Sonuç: M = 249,68 g/mol; Cu yüzdesi = 63,546 / 249,68 × 100 = %25,45.',
      ],
      en: [
        'Formula (the tool’s example): CuSO₄·5H₂O, i.e. 1 Cu, 1 S, 9 O and 10 H.',
        'M = 63.546 + 32.06 + 9 × 15.999 + 10 × 1.008 = 63.546 + 32.06 + 143.991 + 10.08.',
        'Result: M = 249.68 g/mol; Cu content = 63.546 / 249.68 × 100 = 25.45%.',
      ],
    },
    mistakes: {
      tr: [
        'Hidrat suyunu unutmak (susuz CuSO₄ = 159,60 g/mol).',
        'Parantez dışındaki alt indisi gruptaki her atoma uygulamamak: Ca₃(PO₄)₂ içinde 8 O vardır.',
        'Element sembollerinde büyük–küçük harf hatası.',
      ],
      en: [
        'Forgetting the water of hydration (anhydrous CuSO₄ = 159.60 g/mol).',
        'Not applying a subscript outside parentheses to every atom in the group: Ca₃(PO₄)₂ contains 8 O.',
        'Wrong capitalisation of element symbols.',
      ],
    },
    related: ['moles', 'solution-prep', 'grav-factor', 'table-elements'],
  },

  'table-ka': {
    concept: {
      tr: 'Asit ayrışma sabiti Ka, bir asidin suya proton verme eğilimini ölçer: HA + H₂O ⇌ H₃O⁺ + A⁻. Ka büyüdükçe (pKa küçüldükçe) asit kuvvetlenir.\n\nTablo, yaygın asitlerin 25 °C’deki Ka ve pKa değerlerini verir. Bazlar eşlenik asitleri (BH⁺) olarak listelenmiştir; bazın pKb’si pKb = 14,00 − pKa ile bulunur. Poliprotik asitler için her basamağın sabiti ayrı verilir.',
      en: 'The acid dissociation constant Ka measures an acid’s tendency to donate a proton to water: HA + H₂O ⇌ H₃O⁺ + A⁻. The larger Ka (the smaller pKa), the stronger the acid.\n\nThe table gives Ka and pKa values of common acids at 25 °C. Bases are listed as their conjugate acids (BH⁺); the base’s pKb follows from pKb = 14.00 − pKa. For polyprotic acids each step has its own constant.',
    },
    meaning: {
      tr: 'pKa = −log Ka. Tampon hesaplarında, zayıf asit/baz pH’ında ve indikatör seçiminde doğrudan kullanılır.\n\nBir tamponun en etkili olduğu bölge pH ≈ pKa ± 1’dir. Poliprotik asitlerde art arda gelen pKa değerleri birbirinden yeterince uzaksa (yaklaşık 3 birimden fazla) her basamak ayrı ayrı ele alınabilir.\n\nTablo değerleri sonsuz seyreltik çözeltiye (termodinamik) ya da belirli bir iyonik şiddete karşılık gelebilir; kaynaklar arasında küçük farklar normaldir.',
      en: 'pKa = −log Ka. It is used directly in buffer calculations, the pH of weak acids/bases and indicator selection.\n\nA buffer works best within pH ≈ pKa ± 1. For polyprotic acids, if successive pKa values are far enough apart (more than about 3 units) each step can be treated separately.\n\nTable values may refer to infinite dilution (thermodynamic) or to a given ionic strength; small differences between sources are normal.',
    },
    usage: {
      tr: [
        'Tampon hazırlarken uygun asit–baz çiftini seçmek.',
        'Zayıf asit/baz pH’ı ve titrasyon eğrisi hesaplarına Ka/Kb girmek.',
        'Değerler 25 °C içindir; sıcaklık farklıysa sabitler değişir.',
      ],
      en: [
        'Choosing a suitable acid–base pair for a buffer.',
        'Feeding Ka/Kb into weak acid/base pH and titration-curve calculations.',
        'Values are for 25 °C; constants change at other temperatures.',
      ],
    },
    solution: {
      tr: [
        'Tablodan asetik asit: Ka = 1,75 × 10⁻⁵.',
        'pKa = −log(1,75 × 10⁻⁵) = 4,757.',
        'Sonuç: eşit derişimde asetik asit ve asetat içeren tamponun pH’ı ≈ pKa = 4,76; bu çift pH 3,8–5,8 arası için uygundur.',
      ],
      en: [
        'From the table, acetic acid: Ka = 1.75 × 10⁻⁵.',
        'pKa = −log(1.75 × 10⁻⁵) = 4.757.',
        'Result: a buffer with equal concentrations of acetic acid and acetate has pH ≈ pKa = 4.76; the pair suits pH 3.8–5.8.',
      ],
    },
    mistakes: {
      tr: [
        'Bazın tablodaki pKa değerini (BH⁺ için) bazın pKb’si sanmak.',
        'Poliprotik asitte yanlış basamağın sabitini kullanmak.',
        'pKa ile Ka’yı karıştırmak (logaritmik ölçek).',
      ],
      en: [
        'Taking a base’s tabulated pKa (for BH⁺) as its pKb.',
        'Using the constant of the wrong step for a polyprotic acid.',
        'Mixing up pKa and Ka (logarithmic scale).',
      ],
    },
    related: ['henderson', 'weak-acid', 'pka-pkb', 'alpha-fractions'],
  },

  'table-ksp': {
    concept: {
      tr: 'Çözünürlük çarpımı Ksp, az çözünen bir tuzun doymuş çözeltisindeki iyon derişimlerinin (stokiyometrik üslerle) çarpımıdır: MₓAᵧ(k) ⇌ x Mʸ⁺ + y Aˣ⁻, Ksp = [Mʸ⁺]ˣ[Aˣ⁻]ʸ.\n\nTablo 25 °C’deki Ksp değerlerini ve saf sudaki molar çözünürlüğü (s) verir. Gravimetri, çöktürme titrasyonları ve seçici çöktürme hesapları bu değerlere dayanır.',
      en: 'The solubility product Ksp is the product of the ion concentrations (raised to their stoichiometric powers) in a saturated solution of a sparingly soluble salt: MₓAᵧ(s) ⇌ x Mʸ⁺ + y Aˣ⁻, Ksp = [Mʸ⁺]ˣ[Aˣ⁻]ʸ.\n\nThe table gives Ksp at 25 °C and the molar solubility in pure water (s). Gravimetry, precipitation titrations and selective precipitation all rely on these values.',
    },
    meaning: {
      tr: 'Saf suda, yan tepkimeler ihmal edilirse Ksp = xˣ yʸ sˣ⁺ʸ ve s = (Ksp / (xˣ yʸ))^(1/(x+y)).\n\nFarklı stokiyometrideki tuzların çözünürlüğü Ksp’ye bakılarak doğrudan karşılaştırılamaz; s hesaplanmalıdır. Örneğin Ag₂CrO₄’ün Ksp’si AgCl’ninkinden küçük olabilir ama molar çözünürlüğü daha büyüktür.\n\nGerçek çözünürlük ortak iyon, pH (anyon bazik ise), kompleksleşme ve iyonik şiddet ile değişir.',
      en: 'In pure water, neglecting side reactions, Ksp = xˣ yʸ sˣ⁺ʸ and s = (Ksp / (xˣ yʸ))^(1/(x+y)).\n\nSolubilities of salts with different stoichiometry cannot be compared from Ksp alone; compute s. Ag₂CrO₄ may have a smaller Ksp than AgCl yet a larger molar solubility.\n\nActual solubility changes with a common ion, pH (if the anion is basic), complexation and ionic strength.',
    },
    usage: {
      tr: [
        'Çökeleğin saf sudaki çözünürlüğünü kestirmek.',
        'Ortak iyon ve pH etkisi hesaplarına Ksp girmek.',
        'Seçici çöktürmede hangi iyonun önce çökeceğini bulmak.',
        'Tablo değerleri yuvarlatılmıştır; kaynaklar arasında farklar olabilir.',
      ],
      en: [
        'Estimating the solubility of a precipitate in pure water.',
        'Feeding Ksp into common-ion and pH calculations.',
        'Finding which ion precipitates first in selective precipitation.',
        'Table values are rounded; sources may differ somewhat.',
      ],
    },
    solution: {
      tr: [
        'Tablodan BaSO₄: Ksp = 1,0 × 10⁻¹⁰ (1:1 tuz, x = y = 1).',
        'Ksp = s², buradan s = √(1,0 × 10⁻¹⁰).',
        'Sonuç: s = 1,0 × 10⁻⁵ M; 233,39 g/mol ile bu, litrede yaklaşık 2,3 mg BaSO₄’e karşılık gelir.',
      ],
      en: [
        'From the table, BaSO₄: Ksp = 1.0 × 10⁻¹⁰ (1:1 salt, x = y = 1).',
        'Ksp = s², so s = √(1.0 × 10⁻¹⁰).',
        'Result: s = 1.0 × 10⁻⁵ M; with 233.39 g/mol this is about 2.3 mg BaSO₄ per litre.',
      ],
    },
    mistakes: {
      tr: [
        'Farklı stokiyometrideki tuzların çözünürlüğünü Ksp’den doğrudan karşılaştırmak.',
        'Ag₂CrO₄ gibi tuzlarda üsleri unutmak: Ksp = (2s)² · s = 4s³.',
        'Saf su çözünürlüğünü ortak iyon içeren çözeltiye uygulamak.',
      ],
      en: [
        'Comparing solubilities of salts with different stoichiometry from Ksp alone.',
        'Forgetting the powers for salts like Ag₂CrO₄: Ksp = (2s)² · s = 4s³.',
        'Applying the pure-water solubility to a solution containing a common ion.',
      ],
    },
    related: ['molar-solubility', 'common-ion', 'solubility-ph-mono'],
  },

  'table-elements': {
    concept: {
      tr: 'Tablo, elementlerin atom numarasını, sembolünü ve standart atom kütlesini verir. Atom kütlesi, elementin doğal izotoplarının kütlelerinin bolluklarına göre ağırlıklı ortalamasıdır.\n\nKararlı izotopu olmayan elementlerde köşeli parantez içindeki sayı, en uzun ömürlü izotopun kütle numarasıdır; bu elementlerin standart atom kütlesi tanımlı değildir.',
      en: 'The table gives each element’s atomic number, symbol and standard atomic mass. The atomic mass is the abundance-weighted mean of the masses of the element’s natural isotopes.\n\nFor elements without stable isotopes, the number in square brackets is the mass number of the longest-lived isotope; no standard atomic mass is defined for them.',
    },
    meaning: {
      tr: 'A = Σ (izotop kütlesi × doğal bolluk).\n\nÖrneğin klor ³⁵Cl (yaklaşık %75,8) ve ³⁷Cl (yaklaşık %24,2) izotoplarından oluşur; ortalama 35,45 elde edilir. Kütle spektrometrisinde ise ortalama değil, tek tek izotop kütleleri görülür.\n\nAnlamlı rakam sayısı elemente göre değişir: doğal izotop oranı değişken olan elementlerde atom kütlesi daha az basamakla verilir.',
      en: 'A = Σ (isotope mass × natural abundance).\n\nChlorine, for example, consists of ³⁵Cl (about 75.8%) and ³⁷Cl (about 24.2%), giving the mean 35.45. Mass spectrometry, by contrast, sees the individual isotope masses, not the mean.\n\nThe number of significant figures differs by element: elements with variable natural isotopic composition are given with fewer digits.',
    },
    usage: {
      tr: [
        'Molar kütle ve gravimetrik faktör hesaplarına atom kütlesi almak.',
        'Kütle spektrometrisinde ortalama kütle ile monoizotopik kütle arasındaki farkı anlamak.',
        'Molar kütleler için Molar kütle aracı formülü doğrudan hesaplar.',
      ],
      en: [
        'Taking atomic masses for molar mass and gravimetric factor calculations.',
        'Understanding the difference between average and monoisotopic mass in mass spectrometry.',
        'For molar masses, the Molar mass tool computes a formula directly.',
      ],
    },
    solution: {
      tr: [
        'Tablodan: Na = 22,990, Cl = 35,45.',
        'NaCl için M = 22,990 + 35,45 = 58,44 g/mol.',
        'Sonuç: NaCl’deki Cl yüzdesi = 35,45 / 58,44 × 100 = %60,66.',
      ],
      en: [
        'From the table: Na = 22.990, Cl = 35.45.',
        'For NaCl, M = 22.990 + 35.45 = 58.44 g/mol.',
        'Result: Cl content of NaCl = 35.45 / 58.44 × 100 = 60.66%.',
      ],
    },
    mistakes: {
      tr: [
        'Atom numarası ile atom kütlesini karıştırmak.',
        'Köşeli parantezli değeri ortalama atom kütlesi sanmak.',
        'Kütle spektrumundaki pikleri ortalama atom kütlesiyle eşleştirmeye çalışmak.',
      ],
      en: [
        'Confusing atomic number with atomic mass.',
        'Treating a bracketed value as an average atomic mass.',
        'Trying to match mass-spectral peaks with average atomic masses.',
      ],
    },
    related: ['molar-mass', 'isotope-pattern', 'grav-factor'],
  },

  'table-constants': {
    concept: {
      tr: 'Tablo, analitik kimya hesaplarında sık geçen fiziksel sabitleri SI birimleriyle verir: Avogadro sayısı, gaz sabiti, Faraday sabiti, Planck sabiti, ışık hızı, Boltzmann sabiti ve diğerleri.\n\n2019’dan beri SI sistemi bu sabitlerin bazılarına (N_A, h, c, e, k_B) tam değer atanarak tanımlanmaktadır. Bu nedenle bu sabitlerin belirsizliği yoktur.',
      en: 'The table gives physical constants that appear often in analytical chemistry, in SI units: the Avogadro constant, gas constant, Faraday constant, Planck constant, speed of light, Boltzmann constant and others.\n\nSince 2019 the SI has been defined by fixing exact values for several of these constants (N_A, h, c, e, k_B), so they carry no uncertainty.',
    },
    meaning: {
      tr: 'Sabitler birbirine bağlıdır:\n• F = N_A · e (bir mol elektronun yükü).\n• R = N_A · k_B.\n\n25 °C’de Nernst eşitliğindeki RT/F · ln 10 terimi 0,05916 V’tur. Bu, R, T ve F’nin birlikte kullanıldığı en yaygın örnektir.\n\nHesaplarda birimlere dikkat: R, J mol⁻¹ K⁻¹ ile kullanılırken enerji jul, sıcaklık kelvin olmalıdır.',
      en: 'The constants are linked:\n• F = N_A · e (the charge of one mole of electrons).\n• R = N_A · k_B.\n\nAt 25 °C the term RT/F · ln 10 in the Nernst equation is 0.05916 V, the most common case of R, T and F used together.\n\nWatch the units: with R in J mol⁻¹ K⁻¹, energy must be in joules and temperature in kelvin.',
    },
    usage: {
      tr: [
        'Nernst, Gibbs enerjisi, foton enerjisi ve Faraday yasası hesaplarına sabit almak.',
        'Birimleri SI’da tutmak; kJ ile J’yi karıştırmamak.',
        'Sıcaklığı her zaman kelvin cinsinden kullanmak.',
      ],
      en: [
        'Taking constants for Nernst, Gibbs energy, photon energy and Faraday’s law calculations.',
        'Keeping units in SI; not mixing kJ and J.',
        'Always using temperature in kelvin.',
      ],
    },
    solution: {
      tr: [
        'Tablodan: R = 8,3145 J mol⁻¹ K⁻¹, F = 96 485 C mol⁻¹; T = 298,15 K (25 °C).',
        'RT/F = 8,3145 × 298,15 / 96 485 = 0,025693 V.',
        'Sonuç: RT/F · ln 10 = 0,025693 × 2,3026 = 0,05916 V; Nernst eşitliğindeki 0,05916/n katsayısı buradan gelir.',
      ],
      en: [
        'From the table: R = 8.3145 J mol⁻¹ K⁻¹, F = 96 485 C mol⁻¹; T = 298.15 K (25 °C).',
        'RT/F = 8.3145 × 298.15 / 96 485 = 0.025693 V.',
        'Result: RT/F · ln 10 = 0.025693 × 2.3026 = 0.05916 V; this is the 0.05916/n factor in the Nernst equation.',
      ],
    },
    mistakes: {
      tr: [
        'Sıcaklığı °C cinsinden kullanmak.',
        'R’nin farklı birimli değerlerini karıştırmak (8,314 J mol⁻¹ K⁻¹ ile 0,08206 L atm mol⁻¹ K⁻¹).',
        '0,05916 V’u her sıcaklıkta geçerli sanmak.',
      ],
      en: [
        'Using temperature in °C.',
        'Mixing values of R in different units (8.314 J mol⁻¹ K⁻¹ vs 0.08206 L atm mol⁻¹ K⁻¹).',
        'Assuming 0.05916 V holds at every temperature.',
      ],
    },
    related: ['nernst', 'gibbs-k', 'photon-energy', 'faraday-moles'],
  },

  'table-critical': {
    concept: {
      tr: 'İstatistiksel testlerde hesaplanan test istatistiği bir kritik değerle karşılaştırılır. Kritik değer seçilen güven düzeyine (ya da anlamlılık düzeyi α’ya) ve serbestlik derecesine bağlıdır.\n\nBu araç Student t, Fisher F ve Grubbs G kritik değerlerini %90, %95 ve %99 güven düzeylerinde, istenen serbestlik derecesi için hesaplar. Böylece basılı tablolara bakmaya ve ara değer kestirmeye gerek kalmaz. Dixon Q kritik değerleri ise n = 3–10 için Rorabacher (1991) tablosundan verilir.',
      en: 'In statistical tests the computed test statistic is compared with a critical value, which depends on the chosen confidence level (or significance level α) and the degrees of freedom.\n\nThis tool computes Student’s t, Fisher’s F and Grubbs’ G critical values at 90%, 95% and 99% confidence for any degrees of freedom, so there is no need to look up printed tables or interpolate. Dixon Q critical values for n = 3–10 are taken from Rorabacher (1991).',
    },
    meaning: {
      tr: '• t (çift yönlü): güven aralıkları ve ortalama karşılaştırmaları için; ν = n − 1.\n• F: iki varyansı karşılaştırmak için; payın ve paydanın serbestlik dereceleri ayrı verilir. Tek yönlü F, “s₁² > s₂² mi?” sorusu içindir. Çift yönlü F, yalnızca “farklı mı?” sorusu içindir ve α/2 ile okunur.\n• Q (Dixon): n = 3–10 ölçüm içindeki tek bir aykırı değer için.\n• G (Grubbs): n ölçüm içindeki tek bir aykırı değer için.\n\nTest istatistiği kritik değeri aşarsa fark ya da aykırılık seçilen düzeyde anlamlıdır.',
      en: '• t (two-tailed): for confidence intervals and comparing means; ν = n − 1.\n• F: for comparing two variances; numerator and denominator degrees of freedom are given separately. One-tailed F asks “is s₁² > s₂²?”, while two-tailed F asks only “are they different?” and is read at α/2.\n• Q (Dixon): for a single outlier among n = 3–10 measurements.\n• G (Grubbs): for a single outlier among n measurements.\n\nIf the test statistic exceeds the critical value, the difference or outlier is significant at the chosen level.',
    },
    usage: {
      tr: [
        'Elle yapılan t, F ve Grubbs testlerinde karşılaştırma değerini bulmak.',
        'Güven aralığı hesaplarında t değerini almak.',
        'Testin tek mi çift yönlü mü olduğuna önceden, veriye bakmadan karar verilmelidir.',
      ],
      en: [
        'Finding the comparison value for t, F and Grubbs tests done by hand.',
        'Getting t for confidence-interval calculations.',
        'Decide one- or two-tailed beforehand, without looking at the data.',
      ],
    },
    solution: {
      tr: [
        'Aracın örnek değerleri: %95 güven, ν₁ = ν₂ = 4, n = 7.',
        't(çift yönlü, ν = 4) = 2,776. Beş ölçümün ortalaması için güven aralığı x̄ ± 2,776 · s/√5 olur.',
        'F(tek yönlü; 4, 4) = 6,388, F(çift yönlü; 4, 4) = 9,605.',
        'Sonuç: G(n = 7) = 2,020; yedi ölçümde Grubbs istatistiği 2,020’yi aşan değer aykırı kabul edilir.',
      ],
      en: [
        'The tool’s sample values: 95% confidence, ν₁ = ν₂ = 4, n = 7.',
        't(two-tailed, ν = 4) = 2.776, so the confidence interval for a mean of five measurements is x̄ ± 2.776 · s/√5.',
        'F(one-tailed; 4, 4) = 6.388, F(two-tailed; 4, 4) = 9.605.',
        'Result: G(n = 7) = 2.020; among seven measurements a value whose Grubbs statistic exceeds 2.020 is an outlier.',
      ],
    },
    mistakes: {
      tr: [
        'Serbestlik derecesi yerine ölçüm sayısını kullanmak (t için ν = n − 1).',
        'Tek yönlü ve çift yönlü F değerlerini karıştırmak.',
        'F testinde payın ve paydanın serbestlik derecelerini yer değiştirmek (büyük varyans paya yazılır).',
      ],
      en: [
        'Using the number of measurements instead of degrees of freedom (ν = n − 1 for t).',
        'Mixing up one- and two-tailed F values.',
        'Swapping numerator and denominator degrees of freedom in the F test (the larger variance goes in the numerator).',
      ],
    },
    related: ['t-test-known', 'f-test', 'grubbs', 'descriptive'],
  },
};

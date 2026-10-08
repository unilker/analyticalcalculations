import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Gravimetry & Solubility module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const GRAV_DETAILS: Record<string, ToolDetail> = {
  'grav-factor': {
    concept: {
      tr: 'Gravimetrik analizde analit, bileşimi kesin olarak bilinen, az çözünen bir çökelek hâlinde ayrılır; çökelek süzülür, yıkanır, kurutulur ya da yakılır ve tartılır. Tartılan form çoğu zaman analitin kendisi değildir: Cl⁻ AgCl olarak, demir Fe₂O₃ olarak tartılır. Gravimetrik faktör (GF), tartılan formun kütlesini aranan maddenin kütlesine çeviren sabit orandır.',
      en: 'In a gravimetric analysis the analyte is separated as a sparingly soluble precipitate of exactly known composition, which is filtered, washed, dried or ignited, and weighed. The weighed form is usually not the analyte itself: Cl⁻ is weighed as AgCl, iron as Fe₂O₃. The gravimetric factor (GF) is the constant ratio that converts the mass of the weighed form into the mass of the substance sought.',
    },
    meaning: {
      tr: 'GF = a · M(analit) / (b · M(çökelek)). a ve b, analit ile tartılan form arasındaki mol ilişkisini denkleştiren katsayılardır: b mol çökelek a mol analite karşılık gelir.\n\nÖrnekler:\n• Cl, AgCl’den: GF = 35,45 / 143,32 = 0,2473 (a = b = 1).\n• Fe, Fe₂O₃’ten: GF = 2 × 55,845 / 159,69 = 0,6994 (a = 2, b = 1).\n• Fe₃O₄, Fe₂O₃’ten: GF = 2 · M(Fe₃O₄) / (3 · M(Fe₂O₃)) (a = 2, b = 3).\n\nKatsayıları bulmanın kolay yolu ortak elementi denkleştirmektir: 2 mol Fe₃O₄ ile 3 mol Fe₂O₃ aynı miktarda (6 mol) Fe içerir. GF birimsizdir; çökelek kütlesiyle çarpılınca analit kütlesi aynı birimde çıkar.',
      en: 'GF = a · M(analyte) / (b · M(precipitate)). a and b are the coefficients that balance the mole relationship between analyte and weighed form: b mol of precipitate correspond to a mol of analyte.\n\nExamples:\n• Cl from AgCl: GF = 35.45 / 143.32 = 0.2473 (a = b = 1).\n• Fe from Fe₂O₃: GF = 2 × 55.845 / 159.69 = 0.6994 (a = 2, b = 1).\n• Fe₃O₄ from Fe₂O₃: GF = 2 · M(Fe₃O₄) / (3 · M(Fe₂O₃)) (a = 2, b = 3).\n\nThe easy way to find the coefficients is to balance the common element: 2 mol Fe₃O₄ and 3 mol Fe₂O₃ contain the same amount (6 mol) of Fe. GF is dimensionless; multiplied by the precipitate mass it gives the analyte mass in the same unit.',
    },
    usage: {
      tr: [
        'Tartılan çökelek kütlesini analit kütlesine çevirmek: m(analit) = m(çökelek) × GF.',
        'Sonucu farklı bir formda vermek (ör. Fe yerine FeO ya da Fe₃O₄ olarak).',
        'Tartılan formun bileşimi kesin ve kararlı olmalıdır; bileşimi belirsiz çökelekler (ör. Fe₂O₃·xH₂O) yakılarak belirli bir forma (Fe₂O₃) dönüştürülür.',
        'Aynı analit için GF küçükse tartılan çökelek kütlesi büyüktür; bu, tartım hatasının bağıl etkisini azaltır.',
      ],
      en: [
        'Converting a weighed precipitate mass into analyte mass: m(analyte) = m(precipitate) × GF.',
        'Reporting the result in another form (e.g. as FeO or Fe₃O₄ instead of Fe).',
        'The weighed form must have an exact, stable composition; precipitates of uncertain composition (e.g. Fe₂O₃·xH₂O) are ignited to a definite form (Fe₂O₃).',
        'For a given analyte, a smaller GF means a larger precipitate mass, which reduces the relative effect of weighing errors.',
      ],
    },
    solution: {
      tr: [
        'Verilen: analit Cl (M = 35,45 g/mol), tartılan form AgCl (M = 143,32 g/mol); her AgCl bir Cl içerir, a = b = 1.',
        'GF = 1 × 35,45 g/mol / (1 × 143,32 g/mol).',
        'Sonuç: GF = 0,2473 (1 g AgCl, 0,2473 g Cl içerir).',
      ],
      en: [
        'Given: analyte Cl (M = 35.45 g/mol), weighed form AgCl (M = 143.32 g/mol); each AgCl contains one Cl, a = b = 1.',
        'GF = 1 × 35.45 g/mol / (1 × 143.32 g/mol).',
        'Result: GF = 0.2473 (1 g of AgCl contains 0.2473 g of Cl).',
      ],
    },
    mistakes: {
      tr: [
        'Faktörü ters kurmak (çökelek / analit); GF’nin payında her zaman aranan madde bulunur.',
        'a ve b katsayılarıyla denkleştirmeyi unutmak (Fe₂O₃’ten Fe için a = 2).',
        'Kurutma ve yakma sonrasında tartılan formları karıştırmak (ör. kalsiyum oksalat kurutulunca CaC₂O₄·H₂O, yakılınca CaCO₃ ya da CaO olarak tartılır).',
      ],
      en: [
        'Inverting the factor (precipitate / analyte); the numerator always contains the substance sought.',
        'Forgetting to balance with a and b (a = 2 for Fe from Fe₂O₃).',
        'Confusing the forms weighed after drying and after ignition (calcium oxalate is weighed as CaC₂O₄·H₂O after drying, as CaCO₃ or CaO after ignition).',
      ],
    },
    related: ['grav-percent', 'molar-mass', 'mass-loss'],
  },

  'grav-percent': {
    concept: {
      tr: 'Gravimetrik analizin sonucu, tartılan çökelek kütlesinin gravimetrik faktörle analit kütlesine çevrilip numune kütlesine bölünmesiyle kütlece yüzde olarak verilir. Analitik terazi dışında bir kalibrasyon gerektirmeyen bu yöntem, dikkatle uygulandığında çok doğru sonuç verir; buna karşılık zaman alıcıdır.',
      en: 'The result of a gravimetric analysis is obtained by converting the precipitate mass into analyte mass with the gravimetric factor and dividing by the sample mass, giving a weight percent. Apart from the analytical balance, the method needs no calibration and gives very accurate results when carried out carefully, although it is time-consuming.',
    },
    meaning: {
      tr: '%A = m(çökelek) · GF / m(numune) × 100.\n\n• m(çökelek) · GF, numunedeki analit kütlesidir.\n• İki kütle aynı birimde olmalıdır; oran birimsizdir.\n\nÇökelek kütlesi genellikle farktan bulunur: (kroze + çökelek) − (boş kroze). Kroze ve çökelek, iki ardışık tartım arasındaki fark ihmal edilebilir düzeye inene kadar kurutulur ya da yakılır (sabit tartım).\n\nSonucun doğruluğu çöktürmenin nicel (tam) olmasına, çökeleğin saf olmasına (birlikte çöken safsızlık bulunmamasına) ve tartılan formun bileşiminin kesin olmasına bağlıdır.',
      en: '%A = m(precipitate) · GF / m(sample) × 100.\n\n• m(precipitate) · GF is the mass of analyte in the sample.\n• Both masses must be in the same unit; the ratio is dimensionless.\n\nThe precipitate mass is usually found by difference: (crucible + precipitate) − (empty crucible). Crucible and precipitate are dried or ignited until two successive weighings agree within a negligible amount (constant mass).\n\nAccuracy depends on quantitative (complete) precipitation, a pure precipitate (no co-precipitated impurities) and an exactly known composition of the weighed form.',
    },
    usage: {
      tr: [
        'Klasik gravimetrik tayinler: Cl⁻ (AgCl), SO₄²⁻ (BaSO₄), Fe (Fe₂O₃), Ni (nikel dimetilglioksimat).',
        'Numune çözülüp bir alikotu çöktürüldüyse, m(numune) alikota karşılık gelen kütle olmalıdır.',
        'Sonucu farklı bir formda vermek için ilgili GF kullanılır (ör. %S ya da %SO₃).',
      ],
      en: [
        'Classical gravimetric determinations: Cl⁻ (AgCl), SO₄²⁻ (BaSO₄), Fe (Fe₂O₃), Ni (nickel dimethylglyoximate).',
        'If the sample was dissolved and only an aliquot precipitated, m(sample) must be the mass corresponding to that aliquot.',
        'To report the result in another form, use the corresponding GF (e.g. %S or %SO₃).',
      ],
    },
    solution: {
      tr: [
        'Verilen: m(AgCl) = 0,2 g, GF(Cl/AgCl) = 0,24735, m(numune) = 0,5 g.',
        'm(Cl) = 0,2 g × 0,24735 = 0,04947 g.',
        'Sonuç: %Cl = 0,04947 g / 0,5 g × 100 = 9,894.',
      ],
      en: [
        'Given: m(AgCl) = 0.2 g, GF(Cl/AgCl) = 0.24735, m(sample) = 0.5 g.',
        'm(Cl) = 0.2 g × 0.24735 = 0.04947 g.',
        'Result: %Cl = 0.04947 g / 0.5 g × 100 = 9.894.',
      ],
    },
    mistakes: {
      tr: [
        'Kroze darasını düşmeyi unutmak.',
        'Sabit tartıma ulaşmadan tartmak: kalan nem ya da eksik yakma sonucu yüksek gösterir.',
        'Gravimetrik faktörü atlayıp çökelek kütlesini doğrudan analit kütlesi saymak.',
      ],
      en: [
        'Forgetting to subtract the crucible tare.',
        'Weighing before constant mass is reached: residual moisture or incomplete ignition gives high results.',
        'Skipping the gravimetric factor and taking the precipitate mass as the analyte mass.',
      ],
    },
    related: ['grav-factor', 'percent-ww', 'mass-loss', 'titration-percent'],
  },

  'molar-solubility': {
    concept: {
      tr: 'Az çözünen bir iyonik katı (MₓAᵧ) doygun çözeltisiyle dengedeyken MₓAᵧ(k) ⇌ x Mʸ⁺ + y Aˣ⁻ dengesi kurulur. Bu dengenin sabiti çözünürlük çarpımıdır: Ksp = [Mʸ⁺]ˣ [Aˣ⁻]ʸ. Saf katının aktivitesi 1 kabul edildiğinden ifadede yer almaz.\n\nMolar çözünürlük (s), 1 litre doygun çözeltide çözünmüş katının mol sayısıdır. Gravimetride çökeleğin ne kadarının çözeltide kalacağını ve çöktürme titrasyonlarında hangi tuzun önce çökeceğini bu büyüklükler belirler.',
      en: 'A sparingly soluble ionic solid MₓAᵧ in equilibrium with its saturated solution obeys MₓAᵧ(s) ⇌ x Mʸ⁺ + y Aˣ⁻. The equilibrium constant is the solubility product: Ksp = [Mʸ⁺]ˣ [Aˣ⁻]ʸ. The pure solid has unit activity and does not appear in the expression.\n\nThe molar solubility (s) is the number of moles of solid dissolved per litre of saturated solution. These quantities determine how much precipitate is lost to solution in gravimetry and which salt precipitates first in a precipitation titration.',
    },
    meaning: {
      tr: 'Saf suda 1 mol MₓAᵧ çözündüğünde x mol katyon ve y mol anyon oluşur: [M] = x·s, [A] = y·s. Bunlar Ksp ifadesine yazılınca:\nKsp = (x·s)ˣ (y·s)ʸ = xˣ · yʸ · s⁽ˣ⁺ʸ⁾  ⇒  s = [Ksp / (xˣ yʸ)]^(1/(x+y)).\n\n• AgCl (1:1): Ksp = s².\n• Ag₂CrO₄ (2:1): Ksp = 4s³.\n• Ca₃(PO₄)₂ (3:2): Ksp = 108 s⁵.\n\nStokiyometrisi farklı tuzların çözünürlükleri Ksp’leri karşılaştırılarak sıralanamaz: AgCl’nin Ksp’si (1,0 × 10⁻¹⁰) Ag₂CrO₄’ünkinden (1,1 × 10⁻¹²) büyük olduğu hâlde molar çözünürlüğü daha küçüktür (1,0 × 10⁻⁵ M’ye karşı 6,5 × 10⁻⁵ M).\n\nVarsayımlar: aktivite katsayıları 1’dir; iyonlar hidroliz ya da kompleksleşme gibi yan tepkimelere girmez.',
      en: 'When 1 mol of MₓAᵧ dissolves in pure water it gives x mol of cation and y mol of anion: [M] = x·s, [A] = y·s. Substituting into Ksp:\nKsp = (x·s)ˣ (y·s)ʸ = xˣ · yʸ · s⁽ˣ⁺ʸ⁾  ⇒  s = [Ksp / (xˣ yʸ)]^(1/(x+y)).\n\n• AgCl (1:1): Ksp = s².\n• Ag₂CrO₄ (2:1): Ksp = 4s³.\n• Ca₃(PO₄)₂ (3:2): Ksp = 108 s⁵.\n\nSalts of different stoichiometry cannot be ranked by comparing their Ksp values: AgCl has a larger Ksp (1.0 × 10⁻¹⁰) than Ag₂CrO₄ (1.1 × 10⁻¹²) yet a smaller molar solubility (1.0 × 10⁻⁵ M versus 6.5 × 10⁻⁵ M).\n\nAssumptions: activity coefficients of 1; no side reactions of the ions such as hydrolysis or complexation.',
    },
    usage: {
      tr: [
        'Saf sudaki çözünürlüğü Ksp’den hesaplamak ya da ölçülen çözünürlükten Ksp bulmak.',
        'Gravimetride yıkama sırasındaki çökelek kaybını kabaca tahmin etmek (s × hacim × M).',
        'Ortak iyon, pH etkisi, kompleksleşme ya da yüksek iyonik şiddet varsa bu basit ilişki geçerli değildir; ilgili araçlar kullanılmalıdır.',
        'Hidroliz eğilimli anyonlarda (ör. CO₃²⁻, PO₄³⁻) gerçek çözünürlük hesaplanandan büyüktür.',
      ],
      en: [
        'Calculating the solubility in pure water from Ksp, or Ksp from a measured solubility.',
        'Roughly estimating the loss of precipitate during washing in gravimetry (s × volume × M).',
        'With a common ion, pH effects, complexation or high ionic strength this simple relation does not hold; use the corresponding tools.',
        'For anions that hydrolyse (e.g. CO₃²⁻, PO₄³⁻) the true solubility is larger than calculated.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Ag₂CrO₄, Ksp = 1,1 × 10⁻¹²; x = 2, y = 1.',
        'Ksp = (2s)² · s = 4s³  ⇒  s = (1,1 × 10⁻¹² / 4)^(1/3) = (2,75 × 10⁻¹³)^(1/3).',
        'Sonuç: s = 6,503 × 10⁻⁵ M ([Ag⁺] = 2s = 1,30 × 10⁻⁴ M).',
      ],
      en: [
        'Given: Ag₂CrO₄, Ksp = 1.1 × 10⁻¹²; x = 2, y = 1.',
        'Ksp = (2s)² · s = 4s³  ⇒  s = (1.1 × 10⁻¹² / 4)^(1/3) = (2.75 × 10⁻¹³)^(1/3).',
        'Result: s = 6.503 × 10⁻⁵ M ([Ag⁺] = 2s = 1.30 × 10⁻⁴ M).',
      ],
    },
    mistakes: {
      tr: [
        'Katsayıyı derişime yansıtmayı unutmak: Ag₂CrO₄ için Ksp = s² · s değil, (2s)² · s’dir.',
        'Stokiyometrisi farklı tuzların çözünürlüğünü Ksp değerlerine bakarak sıralamak.',
        'Molar çözünürlüğü g/L ile karıştırmak; g/L için s molar kütleyle çarpılır.',
      ],
      en: [
        'Forgetting to carry the coefficient into the concentration: for Ag₂CrO₄, Ksp = (2s)² · s, not s² · s.',
        'Ranking the solubilities of salts of different stoichiometry by their Ksp values.',
        'Confusing molar solubility with g/L; multiply s by the molar mass to get g/L.',
      ],
    },
    related: ['common-ion', 'solubility-activity', 'table-ksp', 'solubility-ph-mono'],
  },

  'common-ion': {
    concept: {
      tr: 'Az çözünen bir tuzun iyonlarından biri çözeltide başka bir kaynaktan zaten bulunuyorsa, Le Chatelier ilkesine göre çözünme dengesi sola kayar ve tuzun çözünürlüğü azalır. Buna ortak iyon etkisi denir. Gravimetride çöktürücünün hafif aşırısının eklenmesi ve bazı çökeleklerin saf su yerine ortak iyon içeren seyreltik bir çözeltiyle yıkanması bu etkiden yararlanır.',
      en: 'If one of the ions of a sparingly soluble salt is already present in solution from another source, the dissolution equilibrium shifts to the left (Le Chatelier) and the solubility of the salt decreases. This is the common-ion effect. In gravimetry, adding a slight excess of precipitant and washing some precipitates with a dilute solution of a common ion instead of pure water take advantage of it.',
    },
    meaning: {
      tr: 'MₓAᵧ, derişimi C olan ortak anyon içeren bir çözeltide çözündüğünde [M] = x·s ve [A] = C + y·s olur:\nKsp = (x·s)ˣ · (C + y·s)ʸ.\n\nGenellikle olduğu gibi C ≫ y·s ise Ksp ≈ (x·s)ˣ · Cʸ yazılabilir. 1:1 tuzda bu s ≈ Ksp / C demektir; çözünürlük ortak iyon derişimiyle ters orantılı azalır. Araç bu yaklaşımı yapmadan tam denklemi sayısal olarak çözer. Ortak iyon katyonsa x ile y’nin yerleri değiştirilir.\n\nSınırlar:\n• Ortak iyon derişimi çok yüksekse kompleks oluşumu (ör. AgCl₂⁻) çözünürlüğü yeniden artırabilir.\n• Eklenen tuz iyonik şiddeti de artırır; aktivite katsayılarının küçülmesi çözünürlüğü bir miktar yükseltir (yabancı iyon etkisi).',
      en: 'When MₓAᵧ dissolves in a solution already containing the common anion at concentration C, [M] = x·s and [A] = C + y·s:\nKsp = (x·s)ˣ · (C + y·s)ʸ.\n\nIf, as usual, C ≫ y·s, then Ksp ≈ (x·s)ˣ · Cʸ. For a 1:1 salt this means s ≈ Ksp / C: the solubility falls in inverse proportion to the common-ion concentration. The tool solves the full equation numerically without this approximation. For a common cation, swap the roles of x and y.\n\nLimits:\n• At very high common-ion concentrations complex formation (e.g. AgCl₂⁻) can increase the solubility again.\n• The added salt also raises the ionic strength; the smaller activity coefficients increase the solubility somewhat (diverse-ion effect).',
    },
    usage: {
      tr: [
        'Gravimetride çöktürücünün aşırısının çökelek kaybını ne kadar azalttığını hesaplamak.',
        'Çöktürme titrasyonu eğrilerinde eşdeğerlik noktası öncesi ve sonrası derişimleri bulmak.',
        'Ortak iyon derişimi yüksek olduğunda aktivite düzeltmesi ve kompleksleşme dikkate alınmalıdır.',
      ],
      en: [
        'Calculating how much an excess of precipitant reduces the loss of precipitate in gravimetry.',
        'Finding concentrations before and after the equivalence point in precipitation titration curves.',
        'At high common-ion concentrations, activity corrections and complexation must be considered.',
      ],
    },
    solution: {
      tr: [
        'Verilen: AgCl, Ksp = 1,0 × 10⁻¹⁰; 0,010 M NaCl içinde, yani C(Cl⁻) = 0,010 M; x = y = 1.',
        'Ksp = s · (0,010 + s); s ≪ 0,010 M olduğundan s ≈ Ksp / C = 1,0 × 10⁻¹⁰ / 0,010.',
        'Sonuç: s = 1 × 10⁻⁸ M; saf sudaki değerle (1 × 10⁻⁵ M) karşılaştırıldığında çözünürlük 1000 kat azalmıştır.',
      ],
      en: [
        'Given: AgCl, Ksp = 1.0 × 10⁻¹⁰, in 0.010 M NaCl, i.e. C(Cl⁻) = 0.010 M; x = y = 1.',
        'Ksp = s · (0.010 + s); since s ≪ 0.010 M, s ≈ Ksp / C = 1.0 × 10⁻¹⁰ / 0.010.',
        'Result: s = 1 × 10⁻⁸ M; compared with pure water (1 × 10⁻⁵ M) the solubility has fallen 1000-fold.',
      ],
    },
    mistakes: {
      tr: [
        'C’yi tuzun derişimi olarak almak: 0,010 M CaCl₂ çözeltisinde ortak iyon derişimi [Cl⁻] = 0,020 M’dir.',
        'Yaklaşımı denetlememek; y·s, C’nin yaklaşık %5’inden büyükse tam denklem kullanılmalıdır.',
        'Çöktürücüden çok fazla eklemek: kompleksleşme ve birlikte çökme kaybı ve safsızlığı artırabilir.',
      ],
      en: [
        'Taking C as the salt concentration: in 0.010 M CaCl₂ the common-ion concentration is [Cl⁻] = 0.020 M.',
        'Not checking the approximation; if y·s exceeds roughly 5% of C, use the full equation.',
        'Adding a large excess of precipitant: complexation and co-precipitation can increase losses and impurities.',
      ],
    },
    related: ['molar-solubility', 'solubility-activity', 'curve-precipitation', 'grav-percent'],
  },

  'solubility-ph-mono': {
    concept: {
      tr: 'Anyonu bir zayıf asidin eşlenik bazı olan tuzların (asetatlar, florürler, karbonatlar, oksalatlar gibi) çözünürlüğü pH’a bağlıdır. Asidik ortamda anyon protonlanarak HA’ya dönüşür, serbest A⁻ derişimi azalır ve Le Chatelier ilkesine göre daha fazla katı çözünür. Bu araç 1:1 tuz (MA) ile tek protonlu asit (HA) durumunu ele alır.',
      en: 'Salts whose anion is the conjugate base of a weak acid (acetates, fluorides, carbonates, oxalates…) have pH-dependent solubility. In acid the anion is protonated to HA, the free A⁻ concentration falls and, by Le Chatelier’s principle, more solid dissolves. This tool covers a 1:1 salt (MA) and a monoprotic acid (HA).',
    },
    meaning: {
      tr: 'Çözünen her MA bir M⁺ verir; anyon ise A⁻ ve HA arasında paylaşılır: s = [M⁺] = [A⁻] + [HA]. A⁻ olarak kalan kesir:\nα_A⁻ = [A⁻] / ([A⁻] + [HA]) = Ka / (Ka + [H⁺]).\n\nKsp = [M⁺][A⁻] = s · α_A⁻ s  ⇒  s = √(Ksp / α_A⁻).\n\n• pH ≫ pKa: α ≈ 1, s ≈ √Ksp (saf sudaki değer).\n• pH = pKa: α = 1/2, s = √(2 Ksp).\n• pH ≪ pKa: α ≈ Ka / [H⁺]; pH bir birim düştükçe s yaklaşık √10 ≈ 3,16 kat artar.\n\nVarsayımlar: pH bir tamponla sabit tutulur (çözünme pH’ı değiştirmez), M⁺ hidroliz ya da kompleksleşmeye girmez, aktivite katsayıları 1’dir.',
      en: 'Each MA that dissolves gives one M⁺, while the anion is shared between A⁻ and HA: s = [M⁺] = [A⁻] + [HA]. The fraction present as A⁻ is\nα_A⁻ = [A⁻] / ([A⁻] + [HA]) = Ka / (Ka + [H⁺]).\n\nKsp = [M⁺][A⁻] = s · α_A⁻ s  ⇒  s = √(Ksp / α_A⁻).\n\n• pH ≫ pKa: α ≈ 1, s ≈ √Ksp (the pure-water value).\n• pH = pKa: α = 1/2, s = √(2 Ksp).\n• pH ≪ pKa: α ≈ Ka / [H⁺]; each unit drop in pH increases s by about √10 ≈ 3.16.\n\nAssumptions: the pH is held constant by a buffer (dissolution does not change it), M⁺ does not hydrolyse or form complexes, and activity coefficients are 1.',
    },
    usage: {
      tr: [
        'Zayıf asit anyonlu bir çökeleğin hangi pH’ta nicel olarak çöktürülebileceğini belirlemek.',
        'Asidik çözeltide çözünme yoluyla çökelek kaybı riskini değerlendirmek.',
        'Güçlü asit anyonları (Cl⁻, Br⁻, I⁻) protonlanmadığından tuzlarının çözünürlüğü pH’tan pratikçe bağımsızdır.',
        'Anyon diprotik bir asitten geliyorsa (C₂O₄²⁻, CO₃²⁻) H₂A aracı kullanılmalıdır.',
      ],
      en: [
        'Finding the pH at which a precipitate with a weak-acid anion can be precipitated quantitatively.',
        'Assessing the risk of losing a precipitate by dissolution in acidic solution.',
        'Anions of strong acids (Cl⁻, Br⁻, I⁻) are not protonated, so the solubility of their salts is practically independent of pH.',
        'If the anion comes from a diprotic acid (C₂O₄²⁻, CO₃²⁻), use the H₂A tool.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Ksp = 1,0 × 10⁻¹⁰, pKa = 4,00, pH = 2,00 → Ka = 1,0 × 10⁻⁴ M, [H⁺] = 1,0 × 10⁻² M.',
        'α_A⁻ = 1,0 × 10⁻⁴ / (1,0 × 10⁻⁴ + 1,0 × 10⁻²) = 9,90 × 10⁻³.',
        'Sonuç: s = √(1,0 × 10⁻¹⁰ / 9,90 × 10⁻³) = 1,005 × 10⁻⁴ M; saf sudaki değerin (1,0 × 10⁻⁵ M) yaklaşık 10 katı.',
      ],
      en: [
        'Given: Ksp = 1.0 × 10⁻¹⁰, pKa = 4.00, pH = 2.00 → Ka = 1.0 × 10⁻⁴ M, [H⁺] = 1.0 × 10⁻² M.',
        'α_A⁻ = 1.0 × 10⁻⁴ / (1.0 × 10⁻⁴ + 1.0 × 10⁻²) = 9.90 × 10⁻³.',
        'Result: s = √(1.0 × 10⁻¹⁰ / 9.90 × 10⁻³) = 1.005 × 10⁻⁴ M, about 10 times the pure-water value (1.0 × 10⁻⁵ M).',
      ],
    },
    mistakes: {
      tr: [
        'α ifadesinde Ka ile [H⁺]’yı yer değiştirmek (bu, HA kesrini verir).',
        'pKa ve pH değerlerini Ka = 10⁻ᵖᴷᵃ ve [H⁺] = 10⁻ᵖᴴ biçimine çevirmeden formüle koymak.',
        'Tamponsuz çözeltide pH’ın sabit kaldığını varsaymak.',
      ],
      en: [
        'Swapping Ka and [H⁺] in the α expression (that gives the HA fraction).',
        'Putting pKa and pH into the formula without converting to Ka = 10⁻ᵖᴷᵃ and [H⁺] = 10⁻ᵖᴴ.',
        'Assuming the pH stays constant in an unbuffered solution.',
      ],
    },
    related: ['solubility-ph-di', 'alpha-fractions', 'molar-solubility', 'pka-pkb'],
  },

  'solubility-ph-di': {
    concept: {
      tr: 'Kalsiyum oksalat ve kalsiyum karbonat gibi tuzlarda anyon iki proton bağlayabilir (A²⁻ → HA⁻ → H₂A). Asidik ortamda her iki protonlanma basamağı da serbest A²⁻ derişimini düşürür ve çözünürlük artar. Kalsiyumun oksalat olarak gravimetrik tayininde çöktürmenin asidik ortamda başlatılıp pH yavaşça yükseltilerek tamamlanması bu ilişkiden yararlanır: önce çözünürlük yüksek tutulur, sonra çökme nicel hâle getirilir.',
      en: 'In salts such as calcium oxalate and calcium carbonate the anion can take up two protons (A²⁻ → HA⁻ → H₂A). In acid both protonation steps lower the free A²⁻ concentration and the solubility rises. The gravimetric determination of calcium as oxalate uses this: precipitation is started in acidic solution and completed by slowly raising the pH, so the solubility is first kept high and then precipitation is made quantitative.',
    },
    meaning: {
      tr: 'Kütle denkliği: s = [M²⁺] = [A²⁻] + [HA⁻] + [H₂A]. A²⁻ olarak kalan kesir:\nα₂ = Ka₁Ka₂ / ([H⁺]² + Ka₁[H⁺] + Ka₁Ka₂).\nKsp = [M²⁺][A²⁻] = s · α₂ s  ⇒  s = √(Ksp / α₂).\n\nPaydadaki üç terim sırasıyla H₂A, HA⁻ ve A²⁻ türlerine karşılık gelir; en büyük terim, çözeltide baskın olan türü gösterir. pH, pKa₂’nin yaklaşık 2 birim üzerinde olduğunda α₂ ≈ 1 ve s ≈ √Ksp olur.\n\nVarsayımlar: pH sabittir, metal iyonu hidroliz ya da kompleksleşmeye girmez, aktivite katsayıları 1’dir. Araç yalnızca 1:1 (MA) tuzlar içindir.',
      en: 'Mass balance: s = [M²⁺] = [A²⁻] + [HA⁻] + [H₂A]. The fraction present as A²⁻ is\nα₂ = Ka₁Ka₂ / ([H⁺]² + Ka₁[H⁺] + Ka₁Ka₂).\nKsp = [M²⁺][A²⁻] = s · α₂ s  ⇒  s = √(Ksp / α₂).\n\nThe three terms in the denominator correspond to H₂A, HA⁻ and A²⁻; the largest term shows the dominant species. When the pH is about 2 units above pKa₂, α₂ ≈ 1 and s ≈ √Ksp.\n\nAssumptions: constant pH, no hydrolysis or complexation of the metal ion, activity coefficients of 1. The tool is for 1:1 (MA) salts only.',
    },
    usage: {
      tr: [
        'CaC₂O₄, CaCO₃ ya da BaCO₃ gibi 1:1 tuzların çözünürlüğünü pH’a göre hesaplamak.',
        'Bir çökeleğin nicel kalabilmesi için gereken en düşük pH’ı bulmak.',
        'pKa değerleri sıcaklığa ve iyonik şiddete bağlıdır; tablo değerlerinin koşulları kontrol edilmelidir.',
        'MA₂ ya da M₂A tipi tuzlarda stokiyometri farklıdır; bu araç kullanılamaz.',
      ],
      en: [
        'Calculating the pH-dependent solubility of 1:1 salts such as CaC₂O₄, CaCO₃ or BaCO₃.',
        'Finding the lowest pH at which a precipitate remains quantitative.',
        'pKa values depend on temperature and ionic strength; check the conditions of tabulated values.',
        'Salts of type MA₂ or M₂A have different stoichiometry; this tool does not apply.',
      ],
    },
    solution: {
      tr: [
        'Verilen: CaC₂O₄, Ksp = 2,6 × 10⁻⁹; Ka₁ = 6,5 × 10⁻², Ka₂ = 6,1 × 10⁻⁵; pH = 4,00 → [H⁺] = 1,0 × 10⁻⁴ M.',
        'Payda: [H⁺]² + Ka₁[H⁺] + Ka₁Ka₂ = 1,0 × 10⁻⁸ + 6,5 × 10⁻⁶ + 3,965 × 10⁻⁶ = 1,0475 × 10⁻⁵.',
        'α₂ = 3,965 × 10⁻⁶ / 1,0475 × 10⁻⁵ = 0,3785.',
        'Sonuç: s = √(2,6 × 10⁻⁹ / 0,3785) = 8,288 × 10⁻⁵ M (protonlanma olmasaydı √Ksp = 5,10 × 10⁻⁵ M olurdu).',
      ],
      en: [
        'Given: CaC₂O₄, Ksp = 2.6 × 10⁻⁹; Ka₁ = 6.5 × 10⁻², Ka₂ = 6.1 × 10⁻⁵; pH = 4.00 → [H⁺] = 1.0 × 10⁻⁴ M.',
        'Denominator: [H⁺]² + Ka₁[H⁺] + Ka₁Ka₂ = 1.0 × 10⁻⁸ + 6.5 × 10⁻⁶ + 3.965 × 10⁻⁶ = 1.0475 × 10⁻⁵.',
        'α₂ = 3.965 × 10⁻⁶ / 1.0475 × 10⁻⁵ = 0.3785.',
        'Result: s = √(2.6 × 10⁻⁹ / 0.3785) = 8.288 × 10⁻⁵ M (without protonation it would be √Ksp = 5.10 × 10⁻⁵ M).',
      ],
    },
    mistakes: {
      tr: [
        'Yalnızca Ka₂’yi kullanıp HA⁻ → H₂A basamağını ihmal etmek; çok asidik ortamda bu büyük hata verir.',
        'α₂ yerine HA⁻ ya da H₂A kesrini kullanmak.',
        'Bir pH’taki sonucun başka pH’lara da geçerli olduğunu sanmak; çözünürlük pH ile güçlü biçimde değişir.',
      ],
      en: [
        'Using only Ka₂ and neglecting the HA⁻ → H₂A step, which causes large errors in strongly acidic solution.',
        'Using the HA⁻ or H₂A fraction instead of α₂.',
        'Assuming a result at one pH holds at another; the solubility changes strongly with pH.',
      ],
    },
    related: ['solubility-ph-mono', 'alpha-fractions', 'molar-solubility', 'grav-percent'],
  },

  rss: {
    concept: {
      tr: 'Çöktürme sırasında oluşan taneciklerin boyutu, büyük ölçüde çözeltinin ne kadar aşırı doymuş olduğuna bağlıdır. Çökelme iki yarışan süreçle ilerler: yeni çekirdeklerin oluşması (çekirdeklenme) ve var olan taneciklerin büyümesi. Aşırı doygunluk yüksekken çekirdeklenme baskındır; süzülmesi zor ve safsızlık tutmaya yatkın çok sayıda küçük tanecik (kolloit) oluşur. Aşırı doygunluk düşükken tanecik büyümesi baskındır ve iri, kolay süzülen kristaller elde edilir. von Weimarn bu eğilimi bağıl aşırı doygunlukla ilişkilendirmiştir.',
      en: 'The particle size of a precipitate depends largely on how supersaturated the solution is during precipitation. Precipitation proceeds by two competing processes: formation of new nuclei (nucleation) and growth of existing particles. At high supersaturation nucleation dominates, giving many small particles (colloids) that are hard to filter and tend to hold impurities. At low supersaturation particle growth dominates and large, easily filtered crystals form. von Weimarn related this tendency to the relative supersaturation.',
    },
    meaning: {
      tr: 'RSS = (Q − S) / S.\n• Q: çöktürücü eklendiği anda çözeltinin bir bölgesindeki çözünenin anlık derişimi.\n• S: çökeleğin o koşullardaki denge çözünürlüğü.\n• Q − S aşırı doygunluktur; S’ye bölünerek bağıl hâle getirilir. Q ve S aynı birimde olduğundan RSS birimsizdir.\n\nRSS’yi küçük tutmanın yolları:\n• Q’yu düşürmek: seyreltik çözeltilerle çalışmak, çöktürücüyü yavaş ve iyi karıştırarak eklemek ya da çöktürücüyü çözelti içinde yavaşça üretmek (homojen çöktürme; ör. ürenin hidroliziyle NH₃ ve dolayısıyla OH⁻ oluşturmak).\n• S’yi artırmak: sıcak çözeltide ya da çökeleğin biraz daha çözündüğü bir pH’ta çöktürmek.\n\nRSS kesin bir öngörü değil, yarı nicel bir kılavuzdur.',
      en: 'RSS = (Q − S) / S.\n• Q: the instantaneous concentration of solute in a region of the solution at the moment precipitant is added.\n• S: the equilibrium solubility of the precipitate under the conditions used.\n• Q − S is the supersaturation; dividing by S makes it relative. Q and S have the same unit, so RSS is dimensionless.\n\nWays to keep RSS low:\n• Lower Q: use dilute solutions, add the precipitant slowly with good stirring, or generate the precipitant slowly in the solution itself (homogeneous precipitation, e.g. hydrolysis of urea to give NH₃ and hence OH⁻).\n• Raise S: precipitate from hot solution or at a pH where the precipitate is somewhat more soluble.\n\nRSS is a semi-quantitative guide, not an exact prediction.',
    },
    usage: {
      tr: [
        'Çöktürme koşullarını (derişim, ekleme hızı, sıcaklık, pH) birbiriyle karşılaştırmak.',
        'Kolloit oluşturmaya yatkın çökeleklerde (ör. AgCl, sulu demir(III) oksit) koşulların neden önemli olduğunu açıklamak.',
        'Çöktürmeden sonra çökeleği ana çözeltisi içinde sıcakta bekletmek (olgunlaştırma) tanecikleri büyütür ve safsızlıkları azaltır.',
      ],
      en: [
        'Comparing precipitation conditions (concentration, rate of addition, temperature, pH).',
        'Explaining why conditions matter for precipitates that tend to form colloids (e.g. AgCl, hydrous iron(III) oxide).',
        'Keeping the precipitate hot in its mother liquor after precipitation (digestion) enlarges the particles and reduces impurities.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Q = 1 × 10⁻³ M, S = 1 × 10⁻⁵ M.',
        'RSS = (1 × 10⁻³ M − 1 × 10⁻⁵ M) / 1 × 10⁻⁵ M = 9,9 × 10⁻⁴ / 1 × 10⁻⁵.',
        'Sonuç: RSS = 99; çözelti anlık olarak dengedekinin yaklaşık 100 katı derişiktir, bu nedenle çekirdeklenme ağır basar ve Q’yu düşürmek gerekir.',
      ],
      en: [
        'Given: Q = 1 × 10⁻³ M, S = 1 × 10⁻⁵ M.',
        'RSS = (1 × 10⁻³ M − 1 × 10⁻⁵ M) / 1 × 10⁻⁵ M = 9.9 × 10⁻⁴ / 1 × 10⁻⁵.',
        'Result: RSS = 99; the solution is momentarily about 100 times more concentrated than at equilibrium, so nucleation dominates and Q should be lowered.',
      ],
    },
    mistakes: {
      tr: [
        'Q’yu çözeltinin son ortalama derişimi sanmak; Q, çöktürücünün damladığı noktadaki yerel ve anlık derişimdir.',
        'RSS’yi kesin bir eşik değerle yorumlamak; yalnızca eğilimi gösterir.',
        'S’yi artırmak için sıcaklığı ya da asitliği aşırı yükseltip nicel çöktürmeyi bozmak.',
      ],
      en: [
        'Taking Q as the final average concentration; Q is the local, instantaneous concentration where the precipitant enters.',
        'Interpreting RSS against a sharp threshold; it only shows a trend.',
        'Raising temperature or acidity so much (to increase S) that precipitation is no longer quantitative.',
      ],
    },
    related: ['molar-solubility', 'grav-percent', 'solubility-ph-di'],
  },

  'mass-loss': {
    concept: {
      tr: 'Isıtma ile kütle kaybı, gravimetrinin en basit uygulamasıdır (uçurma gravimetrisi). Numune belirli bir sıcaklıkta kurutulduğunda kaybedilen kütle nem içeriğini, daha yüksek sıcaklıkta yakıldığında kaybedilen kütle ise organik madde ve uçucu bileşenleri (kızdırma kaybı) verir. Geriye kalan inorganik kalıntı kül olarak tartılır. Gıda, toprak, ilaç ve yakıt analizlerinde nem ve kül tayinleri rutin olarak yapılır.',
      en: 'Mass loss on heating is the simplest form of gravimetry (volatilisation gravimetry). The mass lost on drying at a set temperature gives the moisture content; the mass lost on ignition at a higher temperature gives organic matter and other volatiles (loss on ignition). The inorganic residue left is weighed as ash. Moisture and ash determinations are routine in food, soil, pharmaceutical and fuel analysis.',
    },
    meaning: {
      tr: '% kayıp = (m₁ − m₂) / m₁ × 100.\n• m₁: ısıtmadan önceki numune kütlesi.\n• m₂: sabit tartıma ulaşıldıktan sonraki kütle.\n\nKalıntı yüzdesi (ör. % kül ya da % kuru madde) bunun tümleyenidir: m₂ / m₁ × 100 = 100 − % kayıp.\n\nKap ya da kroze darası iki tartımdan da düşülmelidir. Sonuç kullanılan sıcaklık ve süreye bağlı olduğundan bunlar sonuçla birlikte raporlanır ve standart yöntemlerde belirtilen koşullara uyulur.\n\nNem içeriği biliniyorsa yaş esasa göre bulunan bir sonuç kuru esasa çevrilebilir: sonuç(kuru) = sonuç(yaş) × 100 / (100 − % nem).',
      en: '% loss = (m₁ − m₂) / m₁ × 100.\n• m₁: sample mass before heating.\n• m₂: mass after constant mass has been reached.\n\nThe residue percentage (e.g. % ash or % dry matter) is the complement: m₂ / m₁ × 100 = 100 − % loss.\n\nThe tare of the dish or crucible must be subtracted from both weighings. Because the result depends on temperature and time, these are reported with it, following the conditions of the standard method.\n\nIf the moisture content is known, a result on a wet basis can be converted to a dry basis: result(dry) = result(wet) × 100 / (100 − % moisture).',
    },
    usage: {
      tr: [
        'Nem, kuru madde, kül ve kızdırma kaybı tayinleri.',
        'Analiz sonuçlarını kuru madde esasına çevirmek için nem düzeltmesi.',
        'Kaybın yalnızca hedeflenen bileşenden geldiği varsayılır; ısıyla bozunan ya da uçucu organik bileşen içeren numunelerde nem olduğundan yüksek bulunur.',
        'Sıcaklığa karşı sürekli kütle kaydı gerekiyorsa termogravimetri (TGA) kullanılır.',
      ],
      en: [
        'Moisture, dry matter, ash and loss-on-ignition determinations.',
        'Moisture correction to convert results to a dry-matter basis.',
        'The loss is assumed to come only from the target component; for samples that decompose or contain volatile organics, moisture comes out too high.',
        'If a continuous record of mass versus temperature is needed, use thermogravimetry (TGA).',
      ],
    },
    solution: {
      tr: ['Verilen: m₁ = 2,0 g; kurutma sonrası m₂ = 1,85 g.', 'Kayıp: 2,0 g − 1,85 g = 0,15 g.', 'Sonuç: % kayıp = 0,15 g / 2,0 g × 100 = 7,5 (% kuru madde = 92,5).'],
      en: ['Given: m₁ = 2.0 g; after drying m₂ = 1.85 g.', 'Loss: 2.0 g − 1.85 g = 0.15 g.', 'Result: % loss = 0.15 g / 2.0 g × 100 = 7.5 (% dry matter = 92.5).'],
    },
    mistakes: {
      tr: [
        'Kaybı son kütleye (m₂) bölmek; payda başlangıç kütlesidir.',
        'Sabit tartıma ulaşmadan işlemi bitirmek.',
        'Krozeyi sıcakken tartmak ya da desikatör dışında soğutmak; konveksiyon akımları ve nem alımı tartımı bozar.',
      ],
      en: [
        'Dividing the loss by the final mass (m₂); the denominator is the initial mass.',
        'Stopping before constant mass is reached.',
        'Weighing the crucible while hot or cooling it outside a desiccator; convection currents and moisture uptake spoil the weighing.',
      ],
    },
    related: ['tga-mass-loss', 'grav-percent', 'percent-ww'],
  },
};

import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Concentration & Solutions module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const CONC_DETAILS: Record<string, ToolDetail> = {
  moles: {
    concept: {
      tr: 'Madde miktarı (n), SI temel büyüklüklerinden biridir ve birimi moldür. 1 mol, 6,022 × 10²³ tanecik (Avogadro sayısı) içerir. Atom ve molekülleri tek tek sayamadığımız için laboratuvarda teraziyle kütleyi ölçer, molar kütle yardımıyla mol sayısına geçeriz.\n\nKimyasal tepkimeler mol oranlarıyla yürüdüğünden (stokiyometri), analitik kimyadaki hesapların neredeyse tamamı bu dönüşümle başlar.',
      en: 'Amount of substance (n) is one of the SI base quantities; its unit is the mole. One mole contains 6.022 × 10²³ entities (Avogadro’s number). Since atoms and molecules cannot be counted one by one, in the laboratory we weigh a mass and convert it to moles through the molar mass.\n\nBecause reactions proceed in mole ratios (stoichiometry), almost every calculation in analytical chemistry starts with this conversion.',
    },
    meaning: {
      tr: 'Molar kütle (M), bir mol maddenin gram cinsinden kütlesidir; formüldeki atomların atom kütleleri toplanarak bulunur (NaCl: 22,99 + 35,45 = 58,44 g/mol). Kütle molar kütleye bölününce kaç mol olduğu bulunur: n = m / M.\n\nBirim kontrolü: g ÷ (g/mol) = mol. Pratik bir eşleşme: mg ÷ (g/mol) = mmol. Miligramla çalışırken sonuç doğrudan milimol çıkar.',
      en: 'Molar mass (M) is the mass of one mole in grams; it is the sum of the atomic masses in the formula (NaCl: 22.99 + 35.45 = 58.44 g/mol). Dividing a mass by the molar mass gives the number of moles: n = m / M.\n\nUnit check: g ÷ (g/mol) = mol. A handy pairing: mg ÷ (g/mol) = mmol, so working in milligrams gives millimoles directly.',
    },
    usage: {
      tr: [
        'Tartılan bir katının (ör. birincil standart) mol sayısını bulmak.',
        'Tersinden, belirli bir mol için tartılacak kütleyi bulmak: m = n · M.',
        'Hidratlı tuzlarda kristal suyu molar kütleye dahildir (CuSO₄·5H₂O = 249,68 g/mol).',
        'Madde saf değilse: n = m · (saflık oranı) / M.',
      ],
      en: [
        'Finding the moles in a weighed solid (e.g. a primary standard).',
        'Conversely, the mass to weigh for a given amount: m = n · M.',
        'For hydrates, the water of crystallisation is part of the molar mass (CuSO₄·5H₂O = 249.68 g/mol).',
        'For an impure substance: n = m · (purity fraction) / M.',
      ],
    },
    solution: {
      tr: [
        'Verilen: m = 500 mg NaCl, M(NaCl) = 58,44 g/mol.',
        'mg ÷ (g/mol) = mmol olduğundan birim dönüşümü gerekmez: n = 500 mg / 58,44 g/mol.',
        'Sonuç: n = 8,556 mmol (8,556 × 10⁻³ mol).',
      ],
      en: [
        'Given: m = 500 mg NaCl, M(NaCl) = 58.44 g/mol.',
        'Since mg ÷ (g/mol) = mmol, no unit conversion is needed: n = 500 mg / 58.44 g/mol.',
        'Result: n = 8.556 mmol (8.556 × 10⁻³ mol).',
      ],
    },
    mistakes: {
      tr: [
        'Kütleyi mg girip sonucu mol sanmak (sonuç mmol’dür).',
        'Hidrat suyunu molar kütleye katmamak.',
        'Formül birimi ile iyonu karıştırmak: 1 mol CaCl₂ içinde 2 mol Cl⁻ vardır.',
      ],
      en: [
        'Entering the mass in mg and reading the result as mol (it is mmol).',
        'Leaving the water of crystallisation out of the molar mass.',
        'Confusing formula units with ions: 1 mol CaCl₂ contains 2 mol Cl⁻.',
      ],
    },
    related: ['molar-mass', 'molarity', 'solution-prep'],
  },

  molarity: {
    concept: {
      tr: 'Molarite (C ya da M), 1 litre çözeltide çözünmüş maddenin mol sayısıdır (mol/L = M). Balon joje, pipet ve büret gibi hacimsel cam malzemeyle çalışan analitik kimyacı için en kullanışlı derişim birimidir: ölçülen bir hacimdeki madde miktarı doğrudan n = C · V ile bulunur.',
      en: 'Molarity (C or M) is the number of moles of solute per litre of solution (mol/L = M). It is the most practical unit when working with volumetric glassware (flasks, pipettes, burettes): the amount in a measured volume is simply n = C · V.',
    },
    meaning: {
      tr: 'C = n / V. Paydadaki V çözücünün değil, çözeltinin toplam hacmidir. Hacim sıcaklıkla değiştiğinden molarite de sıcaklığa hafifçe bağlıdır.\n\nKullanışlı eşleşme: mol/L = mmol/mL. Bu yüzden titrasyon hesaplarında mL ve mmol birlikte kullanılır.\n\nAnalitik molarite, çözeltiye konan toplam miktarı gösterir. Denge molaritesi ([X]) ise belirli bir türün dengedeki derişimidir. Örneğin 0,10 M asetik asitte [CH₃COOH] biraz iyonlaştığı için 0,10 M’den küçüktür.',
      en: 'C = n / V. The V in the denominator is the total volume of solution, not of solvent. Because volume changes with temperature, molarity is slightly temperature dependent.\n\nHandy pairing: mol/L = mmol/mL, which is why titration calculations use mL and mmol together.\n\nThe analytical molarity is the total amount put into solution. The equilibrium molarity ([X]) is the concentration of one particular species at equilibrium. In 0.10 M acetic acid, for example, [CH₃COOH] is slightly below 0.10 M because some of it ionises.',
    },
    usage: {
      tr: [
        'Standart ve titrant çözeltilerinin derişimini ifade etmek.',
        'Belirli bir hacimdeki madde miktarını bulmak: n = C · V.',
        'Sıcaklığın değiştiği fizikokimyasal ölçümlerde molalite tercih edilir.',
        'Zayıf elektrolitlerde analitik derişim ile tür derişimini ayırt edin.',
      ],
      en: [
        'Stating the concentration of standards and titrants.',
        'Finding the amount in a given volume: n = C · V.',
        'For physicochemical work over changing temperature, molality is preferred.',
        'For weak electrolytes, distinguish analytical from species concentration.',
      ],
    },
    solution: {
      tr: ['Verilen: n = 2,5 mmol, V = 250 mL.', 'mmol/mL = mol/L olduğundan: C = 2,5 mmol / 250 mL.', 'Sonuç: C = 0,01 M (10 mM).'],
      en: ['Given: n = 2.5 mmol, V = 250 mL.', 'Since mmol/mL = mol/L: C = 2.5 mmol / 250 mL.', 'Result: C = 0.01 M (10 mM).'],
    },
    mistakes: {
      tr: [
        'Mol sayısını mL’ye bölüp sonucu M sanmak (mol/mL, M’nin 1000 katıdır).',
        'Çözücü hacmini çözelti hacmi yerine kullanmak: 1 L suya katı eklemek 1 L çözelti vermez.',
        'Analitik derişim ile türün denge derişimini karıştırmak.',
      ],
      en: [
        'Dividing moles by mL and calling it M (mol/mL is 1000 times M).',
        'Using the solvent volume instead of the solution volume: adding a solid to 1 L of water does not give 1 L of solution.',
        'Confusing analytical concentration with the equilibrium concentration of a species.',
      ],
    },
    related: ['moles', 'solution-prep', 'dilution', 'molality'],
  },

  'solution-prep': {
    concept: {
      tr: 'Belirli derişimde çözelti hazırlamanın en doğru yolu, katıyı analitik terazide tartıp az miktar suda çözmek ve balon jojede çizgiye tamamlamaktır. Tartılacak kütle, molarite tanımı ile mol–kütle ilişkisinin birleştirilmesiyle bulunur.',
      en: 'The most accurate way to prepare a solution of known concentration is to weigh the solid on an analytical balance, dissolve it in a little water and make it up to the mark in a volumetric flask. The mass to weigh follows from combining the definition of molarity with the mole–mass relation.',
    },
    meaning: {
      tr: 'n = C · V ve m = n · M birleştirilince m = C · V · M elde edilir. V litre, C mol/L ve M g/mol girildiğinde m gram çıkar.\n\nBirincil standart kullanılıyorsa (KHP, Na₂CO₃, K₂Cr₂O₇ gibi) hesaplanan kütleyi tam tutturmak gerekmez. Yaklaşık tartılır, tam kütle kaydedilir ve gerçek derişim geri hesaplanır: C = m / (V · M).',
      en: 'Combining n = C · V and m = n · M gives m = C · V · M. With V in litres, C in mol/L and M in g/mol, m comes out in grams.\n\nWith a primary standard (KHP, Na₂CO₃, K₂Cr₂O₇…) there is no need to hit the calculated mass exactly. Weigh approximately, record the exact mass and calculate the actual concentration: C = m / (V · M).',
    },
    usage: {
      tr: [
        'Standart çözelti, tampon bileşeni ya da reaktif çözeltisi hazırlamak.',
        'Katı saf değilse kütleyi saflığa bölün: m(tartılacak) = m / saflık.',
        'Hidrat kullanıyorsanız hidratın molar kütlesini girin.',
        'V, balon jojenin hacmidir; çözelti çizgiye tamamlanır.',
      ],
      en: [
        'Preparing standards, buffer components or reagent solutions.',
        'If the solid is impure, divide by the purity: m(to weigh) = m / purity.',
        'For hydrates, enter the molar mass of the hydrate.',
        'V is the volume of the flask; the solution is made up to the mark.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C = 0,100 M, V = 250 mL = 0,250 L, M(NaCl) = 58,44 g/mol.',
        'n = C · V = 0,100 mol/L × 0,250 L = 0,0250 mol.',
        'Sonuç: m = n · M = 0,0250 mol × 58,44 g/mol = 1,461 g NaCl.',
      ],
      en: [
        'Given: C = 0.100 M, V = 250 mL = 0.250 L, M(NaCl) = 58.44 g/mol.',
        'n = C · V = 0.100 mol/L × 0.250 L = 0.0250 mol.',
        'Result: m = n · M = 0.0250 mol × 58.44 g/mol = 1.461 g NaCl.',
      ],
    },
    mistakes: {
      tr: [
        'Katıyı doğrudan 250 mL suya eklemek (son hacim 250 mL olmaz).',
        'Hidrat ile susuz formu karıştırmak.',
        'Hesaplanan kütleyi tam tutturmaya uğraşmak: yaklaşık tartıp gerçek derişimi hesaplamak daha doğru ve hızlıdır.',
      ],
      en: [
        'Adding the solid directly to 250 mL of water (the final volume is not 250 mL).',
        'Mixing up hydrated and anhydrous forms.',
        'Trying to hit the calculated mass exactly: weighing approximately and computing the actual concentration is faster and more accurate.',
      ],
    },
    related: ['molarity', 'moles', 'molar-mass', 'dilution'],
  },

  molality: {
    concept: {
      tr: 'Molalite (b), 1 kg çözücüde çözünmüş maddenin mol sayısıdır (mol/kg). Paydada hacim değil kütle bulunduğu için sıcaklıkla değişmez. Bu nedenle donma noktası alçalması ve kaynama noktası yükselmesi gibi koligatif özelliklerde ve hassas termodinamik ölçümlerde kullanılır.',
      en: 'Molality (b) is the number of moles of solute per kilogram of solvent (mol/kg). Since its denominator is a mass rather than a volume, it does not change with temperature. It is therefore used for colligative properties such as freezing-point depression and boiling-point elevation, and in precise thermodynamic work.',
    },
    meaning: {
      tr: 'b = n / m(çözücü). Paydadaki kütle çözeltinin değil, yalnızca çözücünündür.\n\nSeyreltik sulu çözeltilerde 1 kg su yaklaşık 1 L çözelti verdiği için molalite molariteye yakındır; derişim arttıkça fark büyür.\n\nKoligatif ilişki örneği: ΔT_f = i · K_f · b (su için K_f = 1,86 K·kg/mol; i, van ’t Hoff faktörüdür).',
      en: 'b = n / m(solvent). The mass in the denominator is that of the solvent only, not of the solution.\n\nIn dilute aqueous solutions 1 kg of water gives about 1 L of solution, so molality is close to molarity; the difference grows with concentration.\n\nColligative example: ΔT_f = i · K_f · b (K_f = 1.86 K·kg/mol for water; i is the van ’t Hoff factor).',
    },
    usage: {
      tr: [
        'Koligatif özellik hesapları (ΔT_f, ΔT_b).',
        'Sıcaklığın değiştiği ölçümler.',
        'Derişik çözeltilerde molariteye çevirmek için çözeltinin yoğunluğu gerekir.',
      ],
      en: [
        'Colligative property calculations (ΔT_f, ΔT_b).',
        'Measurements over a range of temperatures.',
        'Converting to molarity in concentrated solutions requires the solution density.',
      ],
    },
    solution: {
      tr: ['Verilen: n = 0,5 mol, m(çözücü) = 1 kg.', 'b = n / m(çözücü) = 0,5 mol / 1 kg.', 'Sonuç: b = 0,5 mol/kg.'],
      en: ['Given: n = 0.5 mol, m(solvent) = 1 kg.', 'b = n / m(solvent) = 0.5 mol / 1 kg.', 'Result: b = 0.5 mol/kg.'],
    },
    mistakes: {
      tr: [
        'Çözücü yerine çözelti kütlesini kullanmak.',
        'Gram cinsinden kütleyi kg sanmak (1000 kat hata).',
        'Molalite sembolünü (eski gösterimde m) kütleyle karıştırmak; IUPAC “b” sembolünü önerir.',
      ],
      en: [
        'Using the mass of solution instead of solvent.',
        'Treating a mass in grams as kilograms (a factor of 1000).',
        'Confusing the old molality symbol m with mass; IUPAC recommends “b”.',
      ],
    },
    related: ['molarity', 'mole-fraction'],
  },

  normality: {
    concept: {
      tr: 'Normalite (N), 1 litre çözeltideki eşdeğer (eq) sayısıdır. Bir eşdeğer, tepkimede 1 mol H⁺ (asit–baz) ya da 1 mol elektron (redoks) ile tepkimeye giren madde miktarıdır.\n\nEşdeğerlik noktasında tepkimeye giren eşdeğer sayıları eşit olduğundan (N₁V₁ = N₂V₂) eskiden titrimetride çok kullanılırdı. Günümüzde IUPAC molariteyi önerir; ancak eski kaynaklarda ve bazı standart yöntemlerde hâlâ karşınıza çıkar.',
      en: 'Normality (N) is the number of equivalents (eq) per litre of solution. One equivalent is the amount that reacts with 1 mol of H⁺ (acid–base) or 1 mol of electrons (redox).\n\nBecause equal numbers of equivalents react at the equivalence point (N₁V₁ = N₂V₂), normality was widely used in titrimetry. IUPAC now recommends molarity, but normality still appears in older texts and some standard methods.',
    },
    meaning: {
      tr: 'N = z · C. Burada z, bir mol maddenin o tepkimede verdiği ya da aldığı H⁺ veya elektron sayısıdır. Eşdeğer kütle = M / z.\n\nz maddeye değil tepkimeye bağlıdır:\n• H₂SO₄ tam nötralleşmede z = 2.\n• KMnO₄ asidik ortamda MnO₄⁻ → Mn²⁺ (5 e⁻) için z = 5; nötral ortamda MnO₂’ye indirgenirken z = 3.',
      en: 'N = z · C, where z is the number of H⁺ ions or electrons supplied or taken up per mole in that reaction. Equivalent weight = M / z.\n\nz depends on the reaction, not on the substance alone:\n• H₂SO₄ fully neutralised: z = 2.\n• KMnO₄ in acid, MnO₄⁻ → Mn²⁺ (5 e⁻): z = 5; reduced to MnO₂ in neutral solution: z = 3.',
    },
    usage: {
      tr: [
        'Normalite veren eski yöntem ve kaynakları yorumlamak.',
        'Titrasyonlarda N₁V₁ = N₂V₂ kısayolu (stokiyometri z’nin içindedir).',
        'z’yi her zaman ilgili denkleştirilmiş tepkimeden belirleyin.',
      ],
      en: [
        'Interpreting older methods and texts that use normality.',
        'The N₁V₁ = N₂V₂ shortcut in titrations (stoichiometry is built into z).',
        'Always take z from the balanced reaction actually used.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 0,05 M H₂SO₄; tam nötralleşmede her mol H₂SO₄ 2 mol H⁺ verir (z = 2).',
        'N = z · C = 2 eq/mol × 0,05 mol/L.',
        'Sonuç: N = 0,1 N.',
      ],
      en: ['Given: 0.05 M H₂SO₄; on full neutralisation each mole gives 2 mol H⁺ (z = 2).', 'N = z · C = 2 eq/mol × 0.05 mol/L.', 'Result: N = 0.1 N.'],
    },
    mistakes: {
      tr: [
        'z’yi tepkimeden bağımsız sabit sanmak (KMnO₄ için 5 ya da 3).',
        'Normaliteyi molariteye eşit sanmak (yalnızca z = 1 iken eşittir).',
        'Kısmi nötralleşmede z’yi yanlış almak: fenolftalein ile H₃PO₄ → HPO₄²⁻ titrasyonunda z = 2’dir.',
      ],
      en: [
        'Treating z as a fixed property of the substance (5 or 3 for KMnO₄).',
        'Equating normality with molarity (they are equal only when z = 1).',
        'Taking the wrong z for partial neutralisation: titrating H₃PO₄ to HPO₄²⁻ with phenolphthalein gives z = 2.',
      ],
    },
    related: ['molarity', 'titration-stoich', 'titer'],
  },

  'percent-ww': {
    concept: {
      tr: 'Kütlece yüzde, 100 g numune ya da çözelti içindeki maddenin gram cinsinden kütlesidir. Katı numunelerin analiz sonuçları (cevherdeki metal, ilaçtaki etken madde, gravimetrik ve titrimetrik sonuçlar) çoğunlukla böyle verilir. Derişik ticari reaktiflerin etiketlerindeki yüzde de kütlecedir (ör. %37 HCl).',
      en: 'Weight percent is the mass in grams of a substance per 100 g of sample or solution. Results for solid samples (metal in an ore, active ingredient in a drug, gravimetric and titrimetric results) are usually reported this way. The percentage on concentrated reagent labels is also by weight (e.g. 37% HCl).',
    },
    meaning: {
      tr: '% (w/w) = m(analit) / m(numune) × 100. İki kütle aynı birimde olmalıdır; oran birimsizdir.\n\nAnalizde analit kütlesi genellikle doğrudan ölçülmez. Titrasyonda m = n · M ile, gravimetride çökelek kütlesi × gravimetrik faktör ile hesaplanır ve numune kütlesine bölünür.',
      en: '% (w/w) = m(analyte) / m(sample) × 100. Both masses must be in the same unit; the ratio is dimensionless.\n\nIn analysis the analyte mass is rarely weighed directly. It is calculated from a titration (m = n · M) or from a precipitate mass times the gravimetric factor, then divided by the sample mass.',
    },
    usage: {
      tr: [
        'Katı numunelerde analit içeriğini raporlamak.',
        'Sonucun kuru ağırlık mı yaş ağırlık mı esaslı olduğu belirtilmelidir.',
        'Çok küçük değerlerde ppm daha okunaklıdır (%1 = 10 000 ppm).',
      ],
      en: [
        'Reporting analyte content of solid samples.',
        'State whether results are on a dry- or wet-weight basis.',
        'For very small values ppm is easier to read (1% = 10 000 ppm).',
      ],
    },
    solution: {
      tr: ['Verilen: m(analit) = 2 g, m(numune) = 50 g.', '% = 2 g / 50 g × 100.', 'Sonuç: % (w/w) = 4.'],
      en: ['Given: m(analyte) = 2 g, m(sample) = 50 g.', '% = 2 g / 50 g × 100.', 'Result: % (w/w) = 4.'],
    },
    mistakes: {
      tr: [
        'Analit ve numune kütlelerini farklı birimlerde girmek (mg ile g).',
        'Çözünen kütlesini çözücü kütlesine bölmek; payda toplam (çözelti ya da numune) kütlesidir.',
        'Alikot oranını unutmak: numunenin yalnızca bir kısmı titre edildiyse sonuç orana göre büyütülmelidir.',
      ],
      en: [
        'Entering analyte and sample masses in different units (mg vs g).',
        'Dividing by the solvent mass; the denominator is the total (solution or sample) mass.',
        'Forgetting the aliquot ratio when only part of the sample was titrated.',
      ],
    },
    related: ['titration-percent', 'grav-percent', 'ppm-ww', 'molarity-from-percent'],
  },

  'percent-wv': {
    concept: {
      tr: 'Kütle/hacim yüzdesi, 100 mL çözeltide çözünmüş maddenin gram cinsinden kütlesidir. Reaktif ve indikatör çözeltileri (%1 fenolftalein, %5 AgNO₃ gibi) ile klinik çözeltiler (%0,9 NaCl serum fizyolojik) böyle tanımlanır.',
      en: 'Weight/volume percent is the mass in grams of solute per 100 mL of solution. Reagent and indicator solutions (1% phenolphthalein, 5% AgNO₃…) and clinical solutions (0.9% NaCl saline) are specified this way.',
    },
    meaning: {
      tr: '% (w/v) = m(g) / V(mL) × 100. Birimlerin karışık olduğuna (g ve mL) dikkat edin. Bu gerçek bir yüzde değil, g/100 mL cinsinden bir kütle derişimidir.\n\nDönüşümler: %1 (w/v) = 1 g/100 mL = 10 g/L = 10 mg/mL. Molariteye çevirmek için: C = (% × 10) / M.',
      en: '% (w/v) = m(g) / V(mL) × 100. Note the mixed units (g and mL): this is not a true percentage but a mass concentration in g per 100 mL.\n\nConversions: 1% (w/v) = 1 g/100 mL = 10 g/L = 10 mg/mL. To molarity: C = (% × 10) / M.',
    },
    usage: {
      tr: [
        'Kesin derişim gerektirmeyen reaktif ve indikatör çözeltileri hazırlamak.',
        'Kantitatif standartlar için molarite ya da mg/L daha uygundur.',
        'Çözelti 100 mL’ye tamamlanarak hazırlanır.',
      ],
      en: [
        'Preparing reagent and indicator solutions that need no exact concentration.',
        'For quantitative standards, molarity or mg/L is more appropriate.',
        'The solution is made up to 100 mL, not mixed with 100 mL of solvent.',
      ],
    },
    solution: {
      tr: ['Verilen: m = 5 g, V = 100 mL.', '% = 5 g / 100 mL × 100.', 'Sonuç: % (w/v) = 5 (100 mL’de 5 g).'],
      en: ['Given: m = 5 g, V = 100 mL.', '% = 5 g / 100 mL × 100.', 'Result: % (w/v) = 5 (5 g per 100 mL).'],
    },
    mistakes: {
      tr: [
        '5 g katıyı 100 mL suya eklemek: bu %5 (w/v) vermez, çözelti 100 mL’ye tamamlanmalıdır.',
        'Hacmi litre olarak kullanmak (tanım g/100 mL’dir).',
        'w/v ile w/w’yu karıştırmak; yoğunluk 1 g/mL’den farklıysa ikisi farklıdır.',
      ],
      en: [
        'Adding 5 g to 100 mL of water: this is not 5% (w/v); make up to 100 mL.',
        'Using the volume in litres (the definition is g per 100 mL).',
        'Confusing w/v with w/w; they differ whenever the density is not 1 g/mL.',
      ],
    },
    related: ['percent-ww', 'massconc-molarity', 'solution-prep'],
  },

  'percent-vv': {
    concept: {
      tr: 'Hacimce yüzde, 100 mL çözeltideki çözünen sıvının mL cinsinden hacmidir. Sıvı–sıvı karışımlarında kullanılır: %70 etanol, alkollü içkiler, kromatografi mobil fazları (ör. %40 asetonitril).',
      en: 'Volume percent is the volume in mL of a liquid solute per 100 mL of solution. It is used for liquid–liquid mixtures: 70% ethanol, alcoholic beverages, chromatographic mobile phases (e.g. 40% acetonitrile).',
    },
    meaning: {
      tr: '% (v/v) = V(çözünen) / V(çözelti) × 100.\n\nSıvılar karıştırılınca hacimler her zaman toplanmaz: etanol ile su karıştırıldığında toplam hacim azalır (büzülme). Bu nedenle tanım, son çözelti hacmine dayanır. Pratikte çözünen ölçülür ve çözelti çizgiye tamamlanır.',
      en: '% (v/v) = V(solute) / V(solution) × 100.\n\nVolumes of liquids are not always additive: mixing ethanol and water gives a smaller total volume (contraction). The definition therefore uses the final solution volume; in practice the solute is measured and the solution made up to the mark.',
    },
    usage: {
      tr: [
        'Mobil faz, ekstraksiyon çözücüsü ve dezenfektan hazırlamak.',
        'Mobil faz tariflerindeki “60:40 (v/v)” genellikle bileşenlerin ayrı ayrı ölçülüp karıştırılması anlamına gelir; bu, 100 mL’ye tamamlamaktan biraz farklı sonuç verir.',
        'Kesin çalışmalarda kütlece hazırlama tercih edilir.',
      ],
      en: [
        'Preparing mobile phases, extraction solvents and disinfectants.',
        'A mobile-phase recipe “60:40 (v/v)” usually means measuring each component separately and mixing, which differs slightly from making up to 100 mL.',
        'For exact work, preparation by mass is preferred.',
      ],
    },
    solution: {
      tr: ['Verilen: V(etanol) = 40 mL, V(çözelti) = 100 mL.', '% = 40 mL / 100 mL × 100.', 'Sonuç: % (v/v) = 40.'],
      en: ['Given: V(ethanol) = 40 mL, V(solution) = 100 mL.', '% = 40 mL / 100 mL × 100.', 'Result: % (v/v) = 40.'],
    },
    mistakes: {
      tr: ['Bileşen hacimlerini toplayıp toplam hacim saymak (büzülme ihmal edilir).', 'Hacimce yüzdeyi kütlece yüzde ya da mol kesri ile eş tutmak.'],
      en: ['Adding component volumes to get the total (ignores contraction).', 'Equating volume percent with weight percent or mole fraction.'],
    },
    related: ['percent-ww', 'percent-wv', 'mole-fraction'],
  },

  'ppm-ww': {
    concept: {
      tr: 'Milyonda kısım (ppm), eser düzeydeki analitler için kullanılır: numunenin her 10⁶ birim kütlesinde 1 birim analit. Gıdalarda ağır metaller, toprakta iz elementler, ilaçlarda safsızlıklar gibi düşük içerikler ppm ile verilir.',
      en: 'Parts per million (ppm) is used for trace analytes: one unit of analyte per 10⁶ units of sample mass. Low contents such as heavy metals in food, trace elements in soil or impurities in drugs are given in ppm.',
    },
    meaning: {
      tr: 'ppm = m(analit) / m(numune) × 10⁶. Eşdeğer ifadeler: 1 ppm = 1 µg/g = 1 mg/kg.\n\nSeyreltik sulu çözeltilerde yoğunluk yaklaşık 1 g/mL olduğundan 1 ppm ≈ 1 mg/L ≈ 1 µg/mL kabul edilir. Bu yaklaşım katı numunelerde ya da yoğunluğu 1’den farklı çözeltilerde geçerli değildir. Belirsizliği önlemek için birimi açıkça (mg/kg ya da mg/L) yazmak en iyisidir.',
      en: 'ppm = m(analyte) / m(sample) × 10⁶. Equivalent forms: 1 ppm = 1 µg/g = 1 mg/kg.\n\nIn dilute aqueous solutions the density is about 1 g/mL, so 1 ppm ≈ 1 mg/L ≈ 1 µg/mL. This does not hold for solids or for solutions whose density differs from 1. Writing the unit explicitly (mg/kg or mg/L) avoids ambiguity.',
    },
    usage: {
      tr: [
        'Eser element ve kirletici içeriklerini raporlamak.',
        'Katılarda ppm = mg/kg; seyreltik sularda ppm ≈ mg/L.',
        'Daha düşük düzeyler için ppb (× 10⁹) ve ppt (× 10¹²) kullanılır.',
      ],
      en: [
        'Reporting trace element and contaminant levels.',
        'For solids ppm = mg/kg; for dilute waters ppm ≈ mg/L.',
        'Lower levels use ppb (× 10⁹) and ppt (× 10¹²).',
      ],
    },
    solution: {
      tr: ['Verilen: m(analit) = 25 µg = 25 × 10⁻⁶ g, m(numune) = 5 g.', 'ppm = (25 × 10⁻⁶ g / 5 g) × 10⁶.', 'Sonuç: ppm = 5 (5 µg/g = 5 mg/kg).'],
      en: ['Given: m(analyte) = 25 µg = 25 × 10⁻⁶ g, m(sample) = 5 g.', 'ppm = (25 × 10⁻⁶ g / 5 g) × 10⁶.', 'Result: ppm = 5 (5 µg/g = 5 mg/kg).'],
    },
    mistakes: {
      tr: [
        'µg/g cinsinden bir oranı ayrıca 10⁶ ile çarpmak (1 µg/g zaten 1 ppm’dir).',
        'Katı numunelerde mg/L kullanmak.',
        'Seyreltme faktörünü unutmak: ölçülen çözeltinin derişimi orijinal numuneye geri hesaplanmalıdır.',
      ],
      en: [
        'Multiplying a ratio already in µg/g by 10⁶ again (1 µg/g is 1 ppm).',
        'Using mg/L for solid samples.',
        'Forgetting the dilution factor: the measured concentration must be referred back to the original sample.',
      ],
    },
    related: ['ppb-ww', 'massconc-molarity', 'dilution'],
  },

  'ppb-ww': {
    concept: {
      tr: 'Milyarda kısım (ppb), ultra eser düzeyler içindir: numunenin her 10⁹ birim kütlesinde 1 birim analit. İçme suyunda arsenik ve kurşun, gıdalarda aflatoksin, çevrede pestisit kalıntıları ppb düzeyinde izlenir. Bu düzeyler ICP-MS, GF-AAS ya da LC-MS/MS gibi çok duyarlı yöntemler gerektirir.',
      en: 'Parts per billion (ppb) is for ultra-trace levels: one unit of analyte per 10⁹ units of sample mass. Arsenic and lead in drinking water, aflatoxins in food and pesticide residues in the environment are monitored at ppb levels, which need very sensitive techniques such as ICP-MS, GF-AAS or LC-MS/MS.',
    },
    meaning: {
      tr: 'ppb = m(analit) / m(numune) × 10⁹. Eşdeğer ifadeler: 1 ppb = 1 ng/g = 1 µg/kg; seyreltik sularda ≈ 1 µg/L. 1 ppm = 1000 ppb.\n\nBu düzeylerde kap, reaktif ve laboratuvar havasından gelen kirlilik sonucu belirgin biçimde etkiler. Bu nedenle tanık (blank) ölçümü ve düzeltmesi zorunludur.',
      en: 'ppb = m(analyte) / m(sample) × 10⁹. Equivalent forms: 1 ppb = 1 ng/g = 1 µg/kg; in dilute water ≈ 1 µg/L. 1 ppm = 1000 ppb.\n\nAt these levels contamination from containers, reagents and laboratory air noticeably affects the result, so blank measurements and corrections are essential.',
    },
    usage: {
      tr: [
        'Yönetmelik sınır değerleriyle karşılaştırma (ör. içme suyunda As için 10 µg/L).',
        'ppm değerini 1000 ile çarparak ppb’ye çevirmek.',
        'Bazı eski Avrupa kaynaklarında “billion” 10¹² anlamına gelebilir; birimi µg/kg ya da µg/L olarak yazmak karışıklığı önler.',
      ],
      en: [
        'Comparing with regulatory limits (e.g. 10 µg/L As in drinking water).',
        'Converting ppm to ppb by multiplying by 1000.',
        'In some older European usage “billion” means 10¹²; writing µg/kg or µg/L avoids confusion.',
      ],
    },
    solution: {
      tr: ['Verilen: m(analit) = 0,5 µg = 0,5 × 10⁻⁶ g, m(numune) = 100 g.', 'ppb = (0,5 × 10⁻⁶ g / 100 g) × 10⁹.', 'Sonuç: ppb = 5 (5 ng/g = 5 µg/kg).'],
      en: ['Given: m(analyte) = 0.5 µg = 0.5 × 10⁻⁶ g, m(sample) = 100 g.', 'ppb = (0.5 × 10⁻⁶ g / 100 g) × 10⁹.', 'Result: ppb = 5 (5 ng/g = 5 µg/kg).'],
    },
    mistakes: {
      tr: ['ppm ile ppb arasındaki 1000 katlık dönüşümü ters yapmak.', 'Tanık düzeltmesi yapmadan sonuç vermek.', 'Katı numunede µg/L kullanmak.'],
      en: ['Applying the factor of 1000 between ppm and ppb the wrong way.', 'Reporting without a blank correction.', 'Using µg/L for a solid sample.'],
    },
    related: ['ppm-ww', 'massconc-molarity'],
  },

  'massconc-molarity': {
    concept: {
      tr: 'Çevre ve su analizlerinde sonuçlar çoğunlukla kütle derişimi (mg/L, µg/L) olarak verilir. Denge, titrasyon ve stokiyometri hesapları ise molarite ister. Bu araç ikisi arasında köprü kurar.',
      en: 'Environmental and water analyses usually report mass concentrations (mg/L, µg/L), while equilibrium, titration and stoichiometry calculations need molarity. This tool bridges the two.',
    },
    meaning: {
      tr: 'C (mol/L) = ρ (g/L) / M (g/mol).\n\nKolay eşleşmeler: mg/L ÷ g/mol = mmol/L (mM) ve µg/L ÷ g/mol = µmol/L (µM).\n\nSonuç “X olarak” verilmişse X’in molar kütlesi kullanılır. Sertlik “mg/L CaCO₃ olarak” verilir, CaCO₃ için 100,09 g/mol alınır. Nitrat “NO₃⁻–N olarak” verildiyse azotun molar kütlesi (14,01 g/mol) alınır.',
      en: 'C (mol/L) = ρ (g/L) / M (g/mol).\n\nHandy pairings: mg/L ÷ g/mol = mmol/L (mM) and µg/L ÷ g/mol = µmol/L (µM).\n\nIf a result is expressed “as X”, use the molar mass of X. Hardness is given “as mg/L CaCO₃” (100.09 g/mol); nitrate “as NO₃⁻–N” uses the molar mass of nitrogen (14.01 g/mol).',
    },
    usage: {
      tr: [
        'Su analiz sonuçlarını molariteye çevirmek.',
        'Standart stok çözeltinin (ör. 1000 mg/L) molaritesini bulmak.',
        'İyon derişimlerinden iyonik şiddet hesaplamadan önce molariteye geçmek.',
      ],
      en: [
        'Converting water-analysis results to molarity.',
        'Finding the molarity of a standard stock (e.g. 1000 mg/L).',
        'Converting ion concentrations to molarity before computing ionic strength.',
      ],
    },
    solution: {
      tr: [
        'Verilen: ρ = 100 mg/L Ca²⁺, M(Ca) = 40,078 g/mol.',
        'mg/L ÷ g/mol = mmol/L olduğundan: C = 100 mg/L / 40,078 g/mol.',
        'Sonuç: C = 2,495 mM (2,50 × 10⁻³ M).',
      ],
      en: [
        'Given: ρ = 100 mg/L Ca²⁺, M(Ca) = 40.078 g/mol.',
        'Since mg/L ÷ g/mol = mmol/L: C = 100 mg/L / 40.078 g/mol.',
        'Result: C = 2.495 mM (2.50 × 10⁻³ M).',
      ],
    },
    mistakes: {
      tr: [
        'İyonun molar kütlesi yerine tuzunkini kullanmak (Ca²⁺ yerine CaCl₂).',
        '“N olarak” verilmiş nitratı NO₃⁻’ün molar kütlesiyle çevirmek.',
        'mg/L ile g/L’yi karıştırıp 1000 kat hata yapmak.',
      ],
      en: [
        'Using the molar mass of the salt instead of the ion (CaCl₂ instead of Ca²⁺).',
        'Converting nitrate given “as N” with the molar mass of NO₃⁻.',
        'Mixing up mg/L and g/L (a factor of 1000).',
      ],
    },
    related: ['molarity', 'ppm-ww', 'water-hardness', 'ionic-strength'],
  },

  'mole-fraction': {
    concept: {
      tr: 'Mol kesri (x), karışımdaki bir bileşenin mol sayısının tüm bileşenlerin toplam mol sayısına oranıdır. Birimsizdir, 0 ile 1 arasındadır ve tüm bileşenlerin mol kesirleri toplamı 1’dir. Sıcaklıktan bağımsızdır.',
      en: 'The mole fraction (x) is the moles of one component divided by the total moles of all components. It is dimensionless, lies between 0 and 1, and the mole fractions of all components add up to 1. It does not depend on temperature.',
    },
    meaning: {
      tr: 'xᵢ = nᵢ / Σn. Mol yüzdesi = 100 · x.\n\nRaoult yasası (Pᵢ = xᵢ · P°ᵢ), gaz karışımlarında kısmi basınç (Pᵢ = xᵢ · P_toplam) ve buhar basıncı alçalması gibi ilişkilerde kullanılır.',
      en: 'xᵢ = nᵢ / Σn. Mole percent = 100 · x.\n\nIt appears in Raoult’s law (Pᵢ = xᵢ · P°ᵢ), partial pressures in gas mixtures (Pᵢ = xᵢ · P_total) and vapour-pressure lowering.',
    },
    usage: {
      tr: [
        'Gaz karışımları ve kısmi basınç hesapları.',
        'Buhar basıncı ve ideal çözelti hesapları.',
        'Asit–baz dağılım kesirleri (α) de türlerin mol kesirleri gibi yorumlanabilir; toplamları 1’dir.',
      ],
      en: [
        'Gas mixtures and partial pressures.',
        'Vapour pressure and ideal-solution calculations.',
        'Acid–base distribution fractions (α) can be read as mole fractions of the species; they also sum to 1.',
      ],
    },
    solution: {
      tr: ['Verilen: n(bileşen) = 1 mol, n(toplam) = 4 mol.', 'x = 1 mol / 4 mol.', 'Sonuç: x = 0,25 (mol yüzdesi %25).'],
      en: ['Given: n(component) = 1 mol, n(total) = 4 mol.', 'x = 1 mol / 4 mol.', 'Result: x = 0.25 (25 mol %).'],
    },
    mistakes: {
      tr: [
        'Paydaya çözücü dahil tüm bileşenleri koymayı unutmak.',
        'Kütle oranını mol kesri sanmak.',
        'İyonik çözünenlerde ayrışmayı hesaba katmamak (1 mol NaCl → 2 mol iyon).',
      ],
      en: [
        'Leaving the solvent (or another component) out of the denominator.',
        'Taking a mass ratio for a mole fraction.',
        'Ignoring dissociation of ionic solutes (1 mol NaCl → 2 mol ions).',
      ],
    },
    related: ['molality', 'percent-vv'],
  },

  'p-function': {
    concept: {
      tr: 'Analitik kimyada derişimler 10⁻¹ M ile 10⁻¹⁴ M gibi çok geniş bir aralıkta değişir. p-fonksiyonu bu sayıları basit ve karşılaştırılabilir değerlere dönüştürür: pX = −log[X].\n\nEn bilineni pH’tır. pOH, pAg, pCa, pKa ve pKsp de aynı mantıkla tanımlanır. Titrasyon eğrileri genellikle bir p-değerine karşı çizilir.',
      en: 'Concentrations in analytical chemistry span an enormous range, from 10⁻¹ M to 10⁻¹⁴ M. The p-function turns such numbers into simple, comparable values: pX = −log[X].\n\nThe best known is pH; pOH, pAg, pCa, pKa and pKsp follow the same idea. Titration curves are usually plotted as a p-value.',
    },
    meaning: {
      tr: 'Logaritma 10 tabanlıdır ve eksi işaretlidir. Derişim 10 kat azaldıkça p-değeri 1 birim artar; derişim arttıkça p küçülür. Ters dönüşüm: [X] = 10^(−pX).\n\nAnlamlı rakam kuralı: p-değerinin ondalık basamak sayısı, derişimdeki anlamlı rakam sayısına eşittir. 2,5 × 10⁻⁴ (iki anlamlı rakam) → 3,60 (iki ondalık).\n\nKesin termodinamik tanımda, özellikle pH için, derişim yerine aktivite kullanılır.',
      en: 'The logarithm is base 10 and carries a minus sign. Each tenfold decrease in concentration raises the p-value by 1; higher concentrations give smaller p-values. The inverse is [X] = 10^(−pX).\n\nSignificant figures: the number of decimal places in the p-value equals the number of significant figures in the concentration. 2.5 × 10⁻⁴ (two figures) → 3.60 (two decimals).\n\nIn the strict thermodynamic definition, especially for pH, activity replaces concentration.',
    },
    usage: {
      tr: [
        'pH, pAg, pCa gibi değerleri hesaplamak ve titrasyon eğrilerini yorumlamak.',
        'Denge sabitlerini (pKa, pKsp) karşılaştırmak.',
        'Derişim 1 M’den büyükse p-değeri negatif olabilir (2 M HCl için pH ≈ −0,3).',
      ],
      en: [
        'Calculating pH, pAg, pCa… and reading titration curves.',
        'Comparing equilibrium constants (pKa, pKsp).',
        'Above 1 M the p-value can be negative (pH ≈ −0.3 for 2 M HCl).',
      ],
    },
    solution: {
      tr: [
        'Verilen: [X] = 2,5 × 10⁻⁴ M.',
        'pX = −log(2,5 × 10⁻⁴) = −(log 2,5 + log 10⁻⁴) = −(0,398 − 4).',
        'Sonuç: pX = 3,602; derişimde iki anlamlı rakam olduğundan iki ondalık basamakla pX = 3,60.',
      ],
      en: [
        'Given: [X] = 2.5 × 10⁻⁴ M.',
        'pX = −log(2.5 × 10⁻⁴) = −(log 2.5 + log 10⁻⁴) = −(0.398 − 4).',
        'Result: pX = 3.602; the concentration has two significant figures, so pX is given to two decimal places: 3.60.',
      ],
    },
    mistakes: {
      tr: [
        'Doğal logaritma (ln) kullanmak; p-fonksiyonu 10 tabanlıdır.',
        'Eksi işaretini unutmak.',
        'Anlamlı rakamları yanlış raporlamak (ondalık basamak sayısı = derişimin anlamlı rakam sayısı).',
      ],
      en: [
        'Using the natural logarithm (ln); the p-function is base 10.',
        'Dropping the minus sign.',
        'Reporting the wrong number of decimals (decimals = significant figures in the concentration).',
      ],
    },
    related: ['ph-converter', 'strong-acid', 'molarity'],
  },

  dilution: {
    concept: {
      tr: 'Seyreltmede çözeltiye yalnızca çözücü eklenir; çözünen maddenin miktarı değişmez. Bu basit korunum ilkesi, stok çözeltilerden çalışma standartları hazırlamanın ve numune seyreltme faktörlerini hesaplamanın temelidir.',
      en: 'In a dilution only solvent is added; the amount of solute does not change. This simple conservation principle underlies preparing working standards from stock solutions and accounting for sample dilution factors.',
    },
    meaning: {
      tr: 'n(önce) = n(sonra) olduğundan C₁ · V₁ = C₂ · V₂.\n\nİki tarafta aynı birimler kullanıldıkça birim dönüşümü gerekmez: C’ler aynı birimde, V’ler aynı birimde olmalıdır.\n\nSeyreltme faktörü SF = V₂ / V₁ = C₁ / C₂. Seri seyreltmede toplam faktör adımların faktörlerinin çarpımıdır: önce 1:10, sonra 1:100 → toplam 1:1000.',
      en: 'Since n(before) = n(after), C₁ · V₁ = C₂ · V₂.\n\nAs long as both sides use the same units (both C in one unit, both V in one unit), no conversion is needed.\n\nDilution factor DF = V₂ / V₁ = C₁ / C₂. In serial dilution the overall factor is the product of the steps: 1:10 then 1:100 gives 1:1000.',
    },
    usage: {
      tr: [
        'Stok çözeltiden standart serisi hazırlamak.',
        'Ölçülen seyreltik çözeltiden orijinal numune derişimine geri dönmek: C₁ = C₂ · SF.',
        'Çok büyük seyreltmelerde (1:100’den fazla) seri seyreltme daha doğrudur; çok küçük hacimleri pipetlemek bağıl belirsizliği artırır.',
        'Yalnızca çözücü eklenen durumlar için geçerlidir; tepkime ya da farklı çözeltilerin karışması varsa mol dengesi ayrıca yazılmalıdır.',
      ],
      en: [
        'Preparing a series of standards from a stock solution.',
        'Referring a measured diluted concentration back to the original sample: C₁ = C₂ · DF.',
        'For large dilutions (beyond 1:100) serial dilution is more accurate; pipetting very small volumes increases the relative uncertainty.',
        'Valid only when solvent alone is added; if a reaction occurs or different solutions are mixed, write a separate mole balance.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C₁ = 1 M (stok), C₂ = 0,05 M, V₂ = 500 mL.',
        'V₁ = C₂ · V₂ / C₁ = 0,05 M × 500 mL / 1 M.',
        'Sonuç: V₁ = 25 mL stok alınır ve 500 mL’ye tamamlanır.',
      ],
      en: ['Given: C₁ = 1 M (stock), C₂ = 0.05 M, V₂ = 500 mL.', 'V₁ = C₂ · V₂ / C₁ = 0.05 M × 500 mL / 1 M.', 'Result: V₁ = 25 mL of stock, made up to 500 mL.'],
    },
    mistakes: {
      tr: [
        'V₂’yi eklenen su hacmi sanmak: V₂ son toplam hacimdir (25 mL stok + su → 500 mL).',
        'Seri seyreltme faktörlerini toplamak; çarpılmalıdır.',
        'Derişik asitleri seyreltirken suyu aside eklemek: güvenlik için asit suya eklenir.',
      ],
      en: [
        'Taking V₂ as the volume of water added: V₂ is the final total volume (25 mL stock + water → 500 mL).',
        'Adding serial dilution factors instead of multiplying them.',
        'Adding water to concentrated acid: for safety, always add acid to water.',
      ],
    },
    related: ['molarity', 'molarity-from-percent', 'solution-prep'],
  },

  'molarity-from-percent': {
    concept: {
      tr: 'Derişik ticari asit ve bazlar (HCl, HNO₃, H₂SO₄, H₃PO₄, CH₃COOH, NH₃) şişe etiketinde kütlece yüzde ve yoğunluk ile verilir. Bunlardan seyreltik çözelti hazırlamak için önce derişik reaktifin molaritesini bilmek gerekir.',
      en: 'Concentrated commercial acids and bases (HCl, HNO₃, H₂SO₄, H₃PO₄, CH₃COOH, NH₃) are labelled with a weight percent and a density. To prepare dilute solutions from them, the molarity of the concentrated reagent must be known first.',
    },
    meaning: {
      tr: '1 L (1000 mL) çözelti düşünün:\n• Kütlesi = 1000 · d (g).\n• Bunun %P’si çözünendir: 1000 · d · P / 100 = 10 · P · d (g).\n• Mol sayısı = 10 · P · d / M.\n\nBu, 1 L’deki mol sayısı olduğundan doğrudan molaritedir: C = 10 · P · d / M (d g/mL, P kütlece yüzde).',
      en: 'Consider 1 L (1000 mL) of solution:\n• Its mass is 1000 · d (g).\n• P % of that is solute: 1000 · d · P / 100 = 10 · P · d (g).\n• Moles = 10 · P · d / M.\n\nThat is the number of moles in 1 L, i.e. the molarity: C = 10 · P · d / M (d in g/mL, P in weight percent).',
    },
    usage: {
      tr: [
        'Derişik asitten seyreltik asit hazırlamak; ardından Seyreltme aracıyla alınacak hacim bulunur.',
        'Etiket değerleri yaklaşık olduğundan hazırlanan çözelti titrasyonla standartlaştırılmalıdır.',
        'Yalnızca kütlece yüzde (w/w) için geçerlidir; w/v verilmişse C = 10 · P / M kullanılır.',
      ],
      en: [
        'Preparing dilute acid from concentrated acid; then use the Dilution tool for the volume to take.',
        'Label values are approximate, so standardise the prepared solution by titration.',
        'Valid only for weight percent (w/w); for w/v use C = 10 · P / M.',
      ],
    },
    solution: {
      tr: [
        'Verilen: %37 HCl, d = 1,19 g/mL, M(HCl) = 36,46 g/mol.',
        '1 L çözeltinin kütlesi = 1000 mL × 1,19 g/mL = 1190 g; içindeki HCl = 1190 g × 0,37 = 440,3 g.',
        'Sonuç: C = 440,3 g / 36,46 g/mol / 1 L = 12,08 M.',
      ],
      en: [
        'Given: 37% HCl, d = 1.19 g/mL, M(HCl) = 36.46 g/mol.',
        'Mass of 1 L = 1000 mL × 1.19 g/mL = 1190 g; HCl in it = 1190 g × 0.37 = 440.3 g.',
        'Result: C = 440.3 g / 36.46 g/mol / 1 L = 12.08 M.',
      ],
    },
    mistakes: {
      tr: [
        'Yüzdeyi 0,37 olarak girmek (formül 37 bekler).',
        'Yoğunluğu kg/m³ cinsinden girmek (1190 kg/m³ = 1,19 g/mL).',
        'Sonucu kesin kabul etmek: derişik HCl uçucudur ve etiket değeri bir aralıktır (%36,5–38).',
      ],
      en: [
        'Entering the percentage as 0.37 (the formula expects 37).',
        'Entering the density in kg/m³ (1190 kg/m³ = 1.19 g/mL).',
        'Treating the result as exact: concentrated HCl is volatile and the label gives a range (36.5–38%).',
      ],
    },
    related: ['dilution', 'percent-ww', 'standardization'],
  },

  titer: {
    concept: {
      tr: 'Titre, 1 mL titrantın tepkimeye girdiği analitin kütlesidir (ör. mg CaCO₃/mL). Aynı analizin çok sayıda tekrarlandığı rutin laboratuvarlarda (su sertliği, kalite kontrol) sonuç, harcanan hacmin titreyle çarpılmasıyla doğrudan bulunur.',
      en: 'The titer is the mass of analyte that reacts with 1 mL of titrant (e.g. mg CaCO₃ per mL). In routine laboratories where the same analysis is repeated many times (water hardness, quality control), the result is simply the titrant volume times the titer.',
    },
    meaning: {
      tr: '1 mL titrantta C mmol titrant vardır (mol/L = mmol/mL). Stokiyometri oranı r ile çarpılınca r · C mmol analite karşılık gelir. Analitin molar kütlesiyle (mg/mmol) çarpılınca mg bulunur: T = C · r · M (mg/mL).\n\nAnalit kütlesi = T × V(titrant, mL). r, denkleştirilmiş tepkimedeki mol analit / mol titrant oranıdır: EDTA–metal için r = 1; KMnO₄ ile Fe²⁺ için r = 5.',
      en: 'One mL of titrant contains C mmol of titrant (mol/L = mmol/mL). Multiplying by the stoichiometric ratio r gives r · C mmol of analyte, and by the analyte molar mass (mg/mmol) gives mg: T = C · r · M (mg/mL).\n\nMass of analyte = T × V(titrant, mL). r is mol analyte / mol titrant from the balanced reaction: r = 1 for EDTA–metal, r = 5 for Fe²⁺ with KMnO₄.',
    },
    usage: {
      tr: [
        'Rutin titrasyonlarda hızlı sonuç: m = T · V.',
        'Titre deneysel olarak da belirlenebilir: T = bilinen analit kütlesi / harcanan hacim.',
        'Su sertliği: 0,0100 M EDTA’nın CaCO₃ titresi 1,001 mg/mL’dir; 100 mL numunede harcanan her mL, 10,01 mg/L CaCO₃ sertliğine karşılık gelir.',
      ],
      en: [
        'Quick results in routine titrations: m = T · V.',
        'The titer can also be found experimentally: T = known analyte mass / titrant volume.',
        'Water hardness: 0.0100 M EDTA has a CaCO₃ titer of 1.001 mg/mL; each mL used for a 100 mL sample corresponds to 10.01 mg/L hardness as CaCO₃.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(EDTA) = 0,0100 M, r = 1 (Ca²⁺ : EDTA = 1 : 1), M(CaCO₃) = 100,09 g/mol.',
        '1 mL EDTA = 0,0100 mmol EDTA → 0,0100 mmol CaCO₃.',
        'Sonuç: T = 0,0100 mmol × 100,09 mg/mmol = 1,001 mg/mL.',
      ],
      en: [
        'Given: C(EDTA) = 0.0100 M, r = 1 (Ca²⁺ : EDTA = 1 : 1), M(CaCO₃) = 100.09 g/mol.',
        '1 mL EDTA = 0.0100 mmol EDTA → 0.0100 mmol CaCO₃.',
        'Result: T = 0.0100 mmol × 100.09 mg/mmol = 1.001 mg/mL.',
      ],
    },
    mistakes: {
      tr: [
        'r oranını ters almak (mol analit / mol titrant olmalıdır).',
        'Titreyi mg/mL yerine g/mL hesaplamak.',
        'Titrant yeniden standartlaştırıldığında titreyi güncellememek.',
      ],
      en: ['Inverting r (it is mol analyte / mol titrant).', 'Computing the titer in g/mL instead of mg/mL.', 'Not updating the titer after the titrant is restandardised.'],
    },
    related: ['titration-stoich', 'water-hardness', 'normality'],
  },
};

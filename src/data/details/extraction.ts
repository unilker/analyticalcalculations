import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Extraction & Ion Exchange module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests); the Craig example uses the tool's default inputs.
 */
export const EXTRACTION_DETAILS: Record<string, ToolDetail> = {
  'partition-coefficient': {
    concept: {
      tr: 'Birbiriyle karışmayan iki sıvı (genellikle su ve bir organik çözücü) bir çözünenle birlikte çalkalandığında çözünen iki faz arasında dağılır ve bir denge kurulur: S(aq) ⇌ S(org). Bu dengenin sabiti dağılma katsayısıdır (bölüşüm katsayısı, K_D). K_D, çözünenin iki çözücüye olan göreli ilgisini gösterir; sıvı–sıvı ekstraksiyonunun ve kromatografinin temel büyüklüğüdür.',
      en: 'When two immiscible liquids (usually water and an organic solvent) are shaken with a solute, the solute distributes itself between the two phases and an equilibrium is set up: S(aq) ⇌ S(org). Its equilibrium constant is the partition coefficient (K_D). K_D expresses the relative affinity of the solute for the two solvents and is the basic quantity of liquid–liquid extraction and chromatography.',
    },
    meaning: {
      tr: 'K_D = [S]_org / [S]_aq.\n\nKatsayı, aynı kimyasal türün iki fazdaki denge derişimlerinin oranıdır. Çözünen fazlardan birinde iyonlaşıyor, dimerleşiyor ya da kompleks oluşturuyorsa toplam derişimlerin oranı (dağılım oranı, D) K_D’den farklı olur.\n\n• K_D > 1: çözünen organik fazı tercih eder.\n• İki derişim aynı birimde olduğundan K_D birimsizdir.\n• Sıcaklığa ve çözücü çiftine bağlıdır; seyreltik çözeltilerde derişimden bağımsız kabul edilir.\n\nOktanol–su dağılma katsayısının logaritması (log P ya da log K_ow), ilaç ve çevre kimyasında hidrofobikliğin ölçüsü olarak kullanılır.',
      en: 'K_D = [S]_org / [S]_aq.\n\nThe coefficient is the ratio of equilibrium concentrations of the same chemical species in the two phases. If the solute ionises, dimerises or forms complexes in either phase, the ratio of total concentrations (the distribution ratio, D) differs from K_D.\n\n• K_D > 1: the solute prefers the organic phase.\n• Both concentrations have the same unit, so K_D is dimensionless.\n• It depends on temperature and on the solvent pair; in dilute solutions it is taken as independent of concentration.\n\nThe logarithm of the octanol–water partition coefficient (log P or log K_ow) is used in pharmaceutical and environmental chemistry as a measure of hydrophobicity.',
    },
    usage: {
      tr: [
        'Bir çözücünün ekstraksiyon için uygunluğunu değerlendirmek.',
        'Ölçülen faz derişimlerinden K_D hesaplamak ya da bilinen K_D ile bir fazdaki derişimi bulmak.',
        'Asit–baz ya da kompleksleşme dengesi varsa D kullanılmalıdır; K_D yalnızca nötral türün dağılımını tanımlar.',
      ],
      en: [
        'Assessing whether a solvent is suitable for an extraction.',
        'Calculating K_D from measured phase concentrations, or a phase concentration from a known K_D.',
        'If acid–base or complexation equilibria are involved, use D; K_D describes only the neutral species.',
      ],
    },
    solution: {
      tr: ['Verilen: dengede [S]_org = 0,045 M, [S]_aq = 0,005 M.', 'K_D = 0,045 M / 0,005 M.', 'Sonuç: K_D = 9 (çözünen organik fazda 9 kat daha derişiktir).'],
      en: ['Given: at equilibrium [S]_org = 0.045 M, [S]_aq = 0.005 M.', 'K_D = 0.045 M / 0.005 M.', 'Result: K_D = 9 (the solute is 9 times more concentrated in the organic phase).'],
    },
    mistakes: {
      tr: [
        'Oranı ters yazmak (aq / org); tanımda pay organik fazdır.',
        'Derişim yerine fazlardaki toplam mol miktarlarını oranlamak; faz hacimleri farklıysa bu oran K_D vermez.',
        'K_D ile D’yi eş tutmak.',
      ],
      en: [
        'Writing the ratio upside down (aq / org); by definition the organic phase is in the numerator.',
        'Taking the ratio of amounts (mol) in each phase instead of concentrations; with unequal volumes this is not K_D.',
        'Treating K_D and D as the same thing.',
      ],
    },
    related: ['distribution-ratio-acid', 'percent-extracted', 'repeated-extraction', 'retention-factor'],
  },

  'distribution-ratio-acid': {
    concept: {
      tr: 'Gerçek sistemlerde çözünen çoğu zaman tek bir kimyasal formda bulunmaz. Örneğin zayıf bir asit (HA) sulu fazda kısmen A⁻’ye iyonlaşır; yüklü A⁻ ise apolar organik çözücüye pratikçe geçmez. Bu nedenle ekstraksiyonda önemli olan, analitin tüm formlarının iki fazdaki toplam derişimlerinin oranıdır. Bu orana dağılım oranı (D) denir ve pH ile değişir.',
      en: 'In real systems a solute is often present in more than one chemical form. A weak acid HA, for example, partly ionises to A⁻ in the aqueous phase, and the charged A⁻ practically does not enter a non-polar organic solvent. What matters in an extraction is therefore the ratio of the total concentrations of all forms of the analyte in the two phases. This is the distribution ratio (D), and it changes with pH.',
    },
    meaning: {
      tr: 'D = (organik fazdaki toplam derişim) / (sulu fazdaki toplam derişim) = [HA]_org / ([HA]_aq + [A⁻]_aq).\n\nK_D = [HA]_org / [HA]_aq ve Ka = [H⁺][A⁻] / [HA]_aq yerine konunca:\nD = K_D · [H⁺] / ([H⁺] + Ka) = K_D · α_HA.\n\n• pH ≪ pKa: [H⁺] ≫ Ka, D ≈ K_D (asit nötral formdadır ve en iyi ekstrakte olur).\n• pH = pKa: D = K_D / 2.\n• pH ≫ pKa: D ≈ K_D · [H⁺] / Ka; pH bir birim arttıkça D 10 kat azalır.\n\nZayıf bazlarda durum tersidir: protonlanmış BH⁺ sulu fazda kalır, D bazik ortamda büyür.\n\nVarsayımlar: yalnızca HA organik faza geçer; organik fazda dimerleşme ya da iyon çifti ekstraksiyonu yoktur.',
      en: 'D = (total concentration in organic phase) / (total concentration in aqueous phase) = [HA]_org / ([HA]_aq + [A⁻]_aq).\n\nSubstituting K_D = [HA]_org / [HA]_aq and Ka = [H⁺][A⁻] / [HA]_aq:\nD = K_D · [H⁺] / ([H⁺] + Ka) = K_D · α_HA.\n\n• pH ≪ pKa: [H⁺] ≫ Ka, D ≈ K_D (the acid is neutral and extracts best).\n• pH = pKa: D = K_D / 2.\n• pH ≫ pKa: D ≈ K_D · [H⁺] / Ka; each unit increase in pH lowers D tenfold.\n\nFor weak bases the situation is reversed: the protonated BH⁺ stays in water and D is large in basic solution.\n\nAssumptions: only HA enters the organic phase; there is no dimerisation or ion-pair extraction in the organic phase.',
    },
    usage: {
      tr: [
        'Asidik ya da bazik bir analitin en iyi ekstrakte olacağı pH’ı seçmek (asitler için pH, pKa’nın yaklaşık 2 birim altında).',
        'Geri ekstraksiyon: organik fazdaki asidi bazik sulu çözeltiye geri almak.',
        'Asidik, bazik ve nötral bileşenleri pH ayarlayarak birbirinden ayırmak.',
        'Karboksilik asitlerin apolar çözücülerde dimerleşmesi D’yi derişime bağımlı kılar; bu durumda basit ifade geçerli değildir.',
      ],
      en: [
        'Choosing the pH at which an acidic or basic analyte extracts best (for acids, about 2 units below pKa).',
        'Back-extraction: returning an acid from the organic phase into basic aqueous solution.',
        'Separating acidic, basic and neutral components by adjusting the pH.',
        'Dimerisation of carboxylic acids in non-polar solvents makes D concentration dependent; the simple expression then fails.',
      ],
    },
    solution: {
      tr: [
        'Verilen: K_D = 3, pKa = 4,2 → Ka = 6,31 × 10⁻⁵ M; pH = 5,0 → [H⁺] = 1,0 × 10⁻⁵ M.',
        'α_HA = 1,0 × 10⁻⁵ / (1,0 × 10⁻⁵ + 6,31 × 10⁻⁵) = 0,1368.',
        'Sonuç: D = 3 × 0,1368 = 0,4104 (pH 5’te asidin büyük kısmı A⁻ olarak sulu fazda kalır).',
      ],
      en: [
        'Given: K_D = 3, pKa = 4.2 → Ka = 6.31 × 10⁻⁵ M; pH = 5.0 → [H⁺] = 1.0 × 10⁻⁵ M.',
        'α_HA = 1.0 × 10⁻⁵ / (1.0 × 10⁻⁵ + 6.31 × 10⁻⁵) = 0.1368.',
        'Result: D = 3 × 0.1368 = 0.4104 (at pH 5 most of the acid stays in the aqueous phase as A⁻).',
      ],
    },
    mistakes: {
      tr: [
        'D ile K_D’yi karıştırmak; K_D pH’tan bağımsızdır, D değildir.',
        'Formülü zayıf bazlara olduğu gibi uygulamak; bazlar için D = K_D · Ka / (Ka + [H⁺]) olur (Ka, BH⁺’nın asitlik sabitidir).',
        'Ekstraksiyon sırasında pH’ı tamponlamamak; asidin faz değiştirmesi pH’ı kaydırabilir.',
      ],
      en: [
        'Confusing D with K_D; K_D does not depend on pH, D does.',
        'Applying the formula unchanged to weak bases; for bases D = K_D · Ka / (Ka + [H⁺]) (Ka of BH⁺).',
        'Not buffering the pH during the extraction; transfer of the acid can shift the pH.',
      ],
    },
    related: ['partition-coefficient', 'percent-extracted', 'alpha-fractions', 'henderson'],
  },

  'percent-extracted': {
    concept: {
      tr: 'Tek basamaklı bir ekstraksiyonda, denge kurulduğunda analitin ne kadarının organik faza geçtiği hem dağılım oranına hem de iki fazın hacim oranına bağlıdır. D büyük olsa bile organik faz hacmi sulu faza göre çok küçükse ekstraksiyon eksik kalabilir.',
      en: 'In a single extraction step, the fraction of analyte that has moved into the organic phase at equilibrium depends both on the distribution ratio and on the volume ratio of the two phases. Even with a large D, extraction can be incomplete if the organic volume is very small compared with the aqueous volume.',
    },
    meaning: {
      tr: 'Organik fazdaki miktar C_org · V_org, sulu fazdaki miktar C_aq · V_aq’dir. Ekstrakte edilen kesir:\nE = C_org V_org / (C_org V_org + C_aq V_aq).\nPay ve payda C_aq · V_org’a bölünüp D = C_org / C_aq yazılırsa:\n%E = 100 · D / (D + V_aq / V_org).\n\n• Eşit hacimlerde %E = 100 · D / (D + 1): D = 1 için %50, D = 9 için %90, D = 99 için %99.\n• Hacimler aynı birimde olmalıdır; yalnızca oranları önemlidir.\n\nSulu fazda kalan kesir 1 − E = V_aq / (D · V_org + V_aq) olup ardışık ekstraksiyon hesabının temelidir.',
      en: 'The amount in the organic phase is C_org · V_org and in the aqueous phase C_aq · V_aq. The fraction extracted is\nE = C_org V_org / (C_org V_org + C_aq V_aq).\nDividing numerator and denominator by C_aq · V_org and writing D = C_org / C_aq gives\n%E = 100 · D / (D + V_aq / V_org).\n\n• With equal volumes %E = 100 · D / (D + 1): 50% for D = 1, 90% for D = 9, 99% for D = 99.\n• The volumes must be in the same unit; only their ratio matters.\n\nThe fraction left in the aqueous phase, 1 − E = V_aq / (D · V_org + V_aq), is the basis of the repeated-extraction calculation.',
    },
    usage: {
      tr: [
        'Tek ekstraksiyonun nicel olup olmayacağını değerlendirmek.',
        'İstenen verim için gereken D’yi ya da organik faz hacmini bulmak (araç ters yönde de çözer).',
        'D, pH’a ya da şelatlaştırıcı derişimine bağlıysa önce ilgili araçla hesaplanmalıdır.',
        'Dengeye ulaşıldığı ve fazların tam ayrıldığı varsayılır.',
      ],
      en: [
        'Judging whether a single extraction will be quantitative.',
        'Finding the D or organic volume needed for a required recovery (the tool also solves backwards).',
        'If D depends on pH or on chelating-agent concentration, calculate it first with the corresponding tool.',
        'Equilibrium and complete phase separation are assumed.',
      ],
    },
    solution: {
      tr: ['Verilen: D = 10, V_aq = 50 mL, V_org = 50 mL.', 'V_aq / V_org = 50 mL / 50 mL = 1.', 'Sonuç: %E = 100 × 10 / (10 + 1) = 90,91.'],
      en: ['Given: D = 10, V_aq = 50 mL, V_org = 50 mL.', 'V_aq / V_org = 50 mL / 50 mL = 1.', 'Result: %E = 100 × 10 / (10 + 1) = 90.91.'],
    },
    mistakes: {
      tr: [
        'Hacim oranını ters koymak (V_org / V_aq).',
        'D yerine K_D kullanmak; analit iyonlaşıyorsa verim olduğundan yüksek hesaplanır.',
        'Toplam çözücüyü tek seferde kullanmanın, birkaç küçük porsiyona bölmekten daha verimli olduğunu sanmak.',
      ],
      en: [
        'Inverting the volume ratio (V_org / V_aq).',
        'Using K_D instead of D; if the analyte ionises, the recovery is overestimated.',
        'Believing that using all the solvent at once is more efficient than dividing it into several small portions.',
      ],
    },
    related: ['repeated-extraction', 'distribution-ratio-acid', 'partition-coefficient'],
  },

  'repeated-extraction': {
    concept: {
      tr: 'Bir ekstraksiyon basamağından sonra analitin belirli bir kesri sulu fazda kalır. Sulu faz taze organik çözücüyle yeniden ekstrakte edilirse, kalan miktarın yine aynı kesri geride kalır; böylece kalan miktar her basamakta aynı oranla çarpılarak geometrik olarak azalır. Bundan çıkan önemli pratik kural şudur: aynı toplam çözücü hacmi birkaç küçük porsiyona bölünerek kullanıldığında, tek seferde kullanılmasından daha verimli bir ekstraksiyon elde edilir.',
      en: 'After one extraction step a certain fraction of the analyte remains in the aqueous phase. If the aqueous phase is extracted again with fresh organic solvent, the same fraction of what is left remains behind, so the amount remaining is multiplied by the same factor at each step and falls geometrically. This leads to an important practical rule: dividing a given total volume of solvent into several small portions extracts more efficiently than using it all at once.',
    },
    meaning: {
      tr: 'Bir basamaktan sonra sulu fazda kalan kesir q = V_aq / (D · V_org + V_aq). n basamaktan sonra:\nq_n = [V_aq / (D · V_org + V_aq)]ⁿ; toplam ekstrakte edilen kesir 1 − q_n’dir.\n\n• Her basamakta D’nin ve faz hacimlerinin aynı kaldığı varsayılır.\n• Basamak sayısı arttıkça her yeni basamağın getirisi azalır.\n• Araç ters yönde de çözer: istenen kalan yüzde için gereken basamak sayısı n = log(q_n) / log(q).',
      en: 'The fraction left in the aqueous phase after one step is q = V_aq / (D · V_org + V_aq). After n steps:\nq_n = [V_aq / (D · V_org + V_aq)]ⁿ; the total fraction extracted is 1 − q_n.\n\n• D and the phase volumes are assumed to be the same in every step.\n• Each additional step gains less than the one before.\n• The tool also solves backwards: the number of steps for a required percentage remaining is n = log(q_n) / log(q).',
    },
    usage: {
      tr: [
        'Belirli bir verim (ör. %99,9) için kaç basamak gerektiğini bulmak.',
        'Tek büyük ve birkaç küçük ekstraksiyonun verimini karşılaştırmak.',
        'D çok küçükse gereken basamak sayısı pratik olmayacak kadar artar; sürekli ekstraksiyon ya da başka bir çözücü düşünülmelidir.',
      ],
      en: [
        'Finding how many steps are needed for a given recovery (e.g. 99.9%).',
        'Comparing one large extraction with several small ones.',
        'If D is very small the number of steps becomes impractical; consider continuous extraction or another solvent.',
      ],
    },
    solution: {
      tr: [
        'Verilen: D = 5, V_aq = 50 mL, her basamakta V_org = 16,7 mL (toplam ≈ 50 mL), n = 3.',
        'Bir basamakta kalan kesir: q = 50 mL / (5 × 16,7 mL + 50 mL) = 50 / 133,5 = 0,3745.',
        'Karşılaştırma: 50 mL ile tek ekstraksiyonda kalan kesir 50 / (5 × 50 + 50) = 0,1667, yani %16,67.',
        'Sonuç: q₃ = 100 × 0,3745³ = %5,254; üç küçük ekstraksiyon sonunda kalan miktar, tek ekstraksiyondakinin üçte birinden azdır.',
      ],
      en: [
        'Given: D = 5, V_aq = 50 mL, V_org = 16.7 mL per step (≈ 50 mL in total), n = 3.',
        'Fraction left per step: q = 50 mL / (5 × 16.7 mL + 50 mL) = 50 / 133.5 = 0.3745.',
        'Comparison: a single extraction with 50 mL leaves 50 / (5 × 50 + 50) = 0.1667, i.e. 16.67%.',
        'Result: q₃ = 100 × 0.3745³ = 5.254%; after three small extractions less than a third of the single-extraction residue remains.',
      ],
    },
    mistakes: {
      tr: [
        'V_org yerine toplam organik hacmi girmek; her basamakta kullanılan hacim girilmelidir.',
        'Sonucu ekstrakte edilen yüzde sanmak; araç sulu fazda kalan yüzdeyi verir (ekstrakte edilen = 100 − q_n).',
        'Her basamakta fazların tam ayrılmadığını ve bir miktar sulu fazın organik fazla birlikte alındığını göz ardı etmek.',
      ],
      en: [
        'Entering the total organic volume as V_org; enter the volume used in each step.',
        'Reading the result as the percentage extracted; the tool gives the percentage left in water (extracted = 100 − q_n).',
        'Ignoring incomplete phase separation, where some aqueous phase is carried over with the organic phase.',
      ],
    },
    related: ['percent-extracted', 'partition-coefficient', 'craig'],
  },

  'metal-chelate-extraction': {
    concept: {
      tr: 'Metal iyonları yüklü ve kuvvetle hidratlı olduklarından organik çözücülere geçmez. Ancak zayıf asit karakterli bir şelatlaştırıcıyla (HR; ör. 8-hidroksikinolin, ditizon, asetilaseton) yüksüz bir şelat (MRₙ) oluşturduklarında organik faza ekstrakte edilebilirler. Genel tepkime şöyledir: Mⁿ⁺(aq) + n HR(org) ⇌ MRₙ(org) + n H⁺(aq).\n\nTepkimede H⁺ açığa çıktığı için ekstraksiyon güçlü biçimde pH’a bağlıdır. Bu durum, farklı metallerin pH ayarlanarak birbirinden ayrılmasına olanak verir.',
      en: 'Metal ions are charged and strongly hydrated, so they do not enter organic solvents. They can be extracted, however, once they form an uncharged chelate MRₙ with a weakly acidic chelating agent HR (e.g. 8-hydroxyquinoline, dithizone, acetylacetone). The overall reaction is Mⁿ⁺(aq) + n HR(org) ⇌ MRₙ(org) + n H⁺(aq).\n\nBecause H⁺ is released, the extraction depends strongly on pH, which allows different metals to be separated by pH control.',
    },
    meaning: {
      tr: 'Dengenin sabiti K_ex = [MRₙ]_org [H⁺]ⁿ / ([Mⁿ⁺]_aq [HR]ⁿ_org). Metal sulu fazda yalnızca Mⁿ⁺, organik fazda yalnızca MRₙ olarak bulunuyorsa D = [MRₙ]_org / [Mⁿ⁺]_aq olur ve:\nD = K_ex · [HR]ⁿ_org / [H⁺]ⁿ  ⇒  log D = log K_ex + n · log[HR]_org + n · pH.\n\nK_ex; şelatın ve reaktifin dağılma katsayılarını, şelatın oluşum sabitini (βₙ) ve reaktifin Ka değerini içerir: K_ex = K_D(MRₙ) · βₙ · Kaⁿ / K_D(HR)ⁿ.\n\n• pH bir birim arttığında log D, n birim artar (iki değerlikli metalde D 100 kat büyür).\n• Yarı ekstraksiyon pH’ı (D = 1; eşit hacimlerde %50): pH½ = −(1/n) · log K_ex − log[HR]_org.\n• pH½ değerleri yeterince farklı olan metaller pH ayarıyla ayrılabilir.\n\nVarsayımlar: metal hidrolize uğramaz ve sulu fazda başka kompleksler oluşturmaz; şelatlaştırıcı aşırıdır ([HR]_org sabit); aktivite katsayıları 1’dir.',
      en: 'The equilibrium constant is K_ex = [MRₙ]_org [H⁺]ⁿ / ([Mⁿ⁺]_aq [HR]ⁿ_org). If the metal exists only as Mⁿ⁺ in water and only as MRₙ in the organic phase, D = [MRₙ]_org / [Mⁿ⁺]_aq and\nD = K_ex · [HR]ⁿ_org / [H⁺]ⁿ  ⇒  log D = log K_ex + n · log[HR]_org + n · pH.\n\nK_ex combines the partition coefficients of chelate and reagent, the formation constant of the chelate (βₙ) and the Ka of the reagent: K_ex = K_D(MRₙ) · βₙ · Kaⁿ / K_D(HR)ⁿ.\n\n• Each unit increase in pH raises log D by n (a 100-fold increase in D for a divalent metal).\n• Half-extraction pH (D = 1; 50% with equal volumes): pH½ = −(1/n) · log K_ex − log[HR]_org.\n• Metals whose pH½ values differ enough can be separated by pH control.\n\nAssumptions: the metal does not hydrolyse or form other complexes in water; the chelating agent is in excess ([HR]_org constant); activity coefficients are 1.',
    },
    usage: {
      tr: [
        'Eser metallerin AAS ya da spektrofotometrik tayin öncesinde deriştirilmesi ve matriksten ayrılması.',
        'Belirli bir D (ya da %E) için gereken pH’ı ya da reaktif derişimini bulmak.',
        'Yüksek pH’ta metal hidrolizi ya da hidroksit çökmesi D’yi düşürebilir; bu durumda ifade geçerli değildir.',
        'Maskeleme ajanları bazı metallerin ekstraksiyonunu engelleyerek seçiciliği artırabilir.',
      ],
      en: [
        'Preconcentrating trace metals and separating them from the matrix before AAS or spectrophotometric determination.',
        'Finding the pH or reagent concentration needed for a given D (or %E).',
        'At high pH, metal hydrolysis or hydroxide precipitation can lower D; the expression then no longer applies.',
        'Masking agents can suppress the extraction of some metals and so improve selectivity.',
      ],
    },
    solution: {
      tr: [
        'Verilen: K_ex = 1,0 × 10⁻², [HR]_org = 0,10 M, n = 2 (M²⁺), pH = 2,00.',
        'log D = log(1,0 × 10⁻²) + 2 · log(0,10) + 2 × 2,00 = −2 − 2 + 4 = 0.',
        'Sonuç: D = 1; bu koşullarda pH 2,00 yarı ekstraksiyon pH’ıdır (eşit hacimlerde %50 ekstraksiyon).',
      ],
      en: [
        'Given: K_ex = 1.0 × 10⁻², [HR]_org = 0.10 M, n = 2 (M²⁺), pH = 2.00.',
        'log D = log(1.0 × 10⁻²) + 2 · log(0.10) + 2 × 2.00 = −2 − 2 + 4 = 0.',
        'Result: D = 1; under these conditions pH 2.00 is the half-extraction pH (50% extracted with equal volumes).',
      ],
    },
    mistakes: {
      tr: [
        'n’yi metal iyonunun yükü yerine başka bir sayı (ör. koordinasyon sayısı) olarak almak.',
        'Sulu fazdaki ya da başlangıçtaki toplam reaktif derişimini [HR]_org yerine kullanmak.',
        'pH artırıldıkça D’nin sınırsız büyüyeceğini sanmak; metal hidrolizi ve reaktifin iyonlaşıp sulu faza geçmesi bir üst sınır koyar.',
      ],
      en: [
        'Taking n as something other than the charge of the metal ion (e.g. its coordination number).',
        'Using the aqueous or initial total reagent concentration instead of [HR]_org.',
        'Assuming D grows without limit as the pH increases; metal hydrolysis and ionisation of the reagent into water set an upper limit.',
      ],
    },
    related: ['percent-extracted', 'separation-factor', 'conditional-kf', 'distribution-ratio-acid'],
  },

  'separation-factor': {
    concept: {
      tr: 'İki çözüneni ekstraksiyonla ayırmak için birinin büyük ölçüde organik faza geçmesi, diğerinin ise sulu fazda kalması gerekir. Ayırmanın ne kadar kolay olduğunu, iki çözünenin dağılım oranlarının oranı olan ayırma faktörü (α) gösterir. Aynı kavram kromatografide seçicilik faktörü olarak karşımıza çıkar.',
      en: 'To separate two solutes by extraction, one must pass largely into the organic phase while the other stays in the aqueous phase. How easy the separation is is shown by the separation factor (α), the ratio of the two distribution ratios. The same idea appears in chromatography as the selectivity factor.',
    },
    meaning: {
      tr: 'α = D₁ / D₂ (genellikle D₁ > D₂ seçilir, böylece α ≥ 1).\n\nα tek başına yeterli değildir; dağılım oranlarının mutlak değerleri de uygun olmalıdır. Eşit hacimlerle tek basamakta 1. maddenin %99’unun ekstrakte edilmesi, 2. maddenin ise en çok %1’inin ekstrakte edilmesi isteniyorsa D₁ ≥ 99 ve D₂ ≤ 0,0101 olmalıdır; bu da α ≈ 10⁴ demektir.\n\nα; pH, şelatlaştırıcı, çözücü ya da maskeleme ajanı seçimiyle büyütülebilir. Örneğin iki metalin pH½ değerleri arasındaki fark büyüdükçe uygun bir pH’taki α da büyür.',
      en: 'α = D₁ / D₂ (usually D₁ > D₂ is chosen so that α ≥ 1).\n\nα alone is not enough; the absolute values of the distribution ratios must also be suitable. To extract 99% of solute 1 and at most 1% of solute 2 in one step with equal volumes requires D₁ ≥ 99 and D₂ ≤ 0.0101, i.e. α ≈ 10⁴.\n\nα can be increased through the choice of pH, chelating agent, solvent or masking agent. For example, the larger the difference between the pH½ values of two metals, the larger α at a suitable pH.',
    },
    usage: {
      tr: [
        'İki analitin (ya da analit ile girişim yapan bir maddenin) tek basamakta ayrılıp ayrılamayacağını değerlendirmek.',
        'Ekstraksiyon koşullarını (pH, reaktif, çözücü) seçicilik açısından karşılaştırmak.',
        'α küçükse çok basamaklı karşı akım dağılımı ya da kromatografi gerekir.',
      ],
      en: [
        'Judging whether two analytes (or an analyte and an interferent) can be separated in a single step.',
        'Comparing extraction conditions (pH, reagent, solvent) in terms of selectivity.',
        'If α is small, multistage countercurrent distribution or chromatography is needed.',
      ],
    },
    solution: {
      tr: [
        'Verilen: D₁ = 50, D₂ = 0,5.',
        'Eşit hacimlerde: %E₁ = 100 × 50 / 51 = %98,04; %E₂ = 100 × 0,5 / 1,5 = %33,33. Tek basamakta temiz bir ayırma sağlanamaz.',
        'Sonuç: α = 50 / 0,5 = 100.',
      ],
      en: [
        'Given: D₁ = 50, D₂ = 0.5.',
        'With equal volumes: %E₁ = 100 × 50 / 51 = 98.04%; %E₂ = 100 × 0.5 / 1.5 = 33.33%. A clean separation is not achieved in one step.',
        'Result: α = 50 / 0.5 = 100.',
      ],
    },
    mistakes: {
      tr: [
        'Yalnızca α’ya bakıp D değerlerini göz ardı etmek: D₁ = 0,1 ve D₂ = 0,001 için de α = 100’dür, ama 1. madde de ekstrakte olmaz.',
        'D yerine K_D değerlerini kullanmak; pH’a bağlı türleşme ayırmayı değiştirir.',
      ],
      en: [
        'Looking only at α and ignoring the D values: D₁ = 0.1 and D₂ = 0.001 also give α = 100, yet solute 1 is not extracted either.',
        'Using K_D values instead of D; pH-dependent speciation changes the separation.',
      ],
    },
    related: ['percent-extracted', 'metal-chelate-extraction', 'selectivity-factor', 'craig'],
  },

  'ion-exchange-dg': {
    concept: {
      tr: 'İyon değiştirici reçineler, polimer iskelete bağlı yüklü gruplar (ör. sülfonat ya da kuaterner amonyum) taşır ve çözeltideki karşıt iyonları tersinir olarak tutar. Bir iyonun reçineye ilgisi kesikli (batch) bir denemeyle ölçülebilir: bilinen kütlede kuru reçine, bilinen hacimde çözeltiyle dengeye gelinceye kadar çalkalanır ve çözeltide kalan miktar ölçülür. Bulunan kütle dağılım katsayısı (D_g), iyonun kolonda ne kadar güçlü tutulacağının ölçüsüdür.',
      en: 'Ion-exchange resins carry charged groups (e.g. sulfonate or quaternary ammonium) bound to a polymer backbone and reversibly hold counter-ions from solution. The affinity of an ion for the resin can be measured in a batch experiment: a known mass of dry resin is shaken with a known volume of solution until equilibrium, and the amount left in solution is measured. The resulting weight distribution coefficient (D_g) measures how strongly the ion will be retained on a column.',
    },
    meaning: {
      tr: 'D_g = (reçinenin gramı başına tutulan miktar) / (çözeltinin mL’si başına kalan miktar) = [(n₀ − n) / m_R] / [n / V].\n\nBirim: (µmol/g) / (µmol/mL) = mL/g. Miktar birimi sadeleşir; hacim mL, reçine kütlesi g olarak alınır.\n\n• D_g büyükse iyon reçinede güçlü tutulur ve kolondan çıkması için daha büyük eluent hacmi gerekir.\n• D_g, reçine yatağının yoğunluğuyla (yatağın mL’si başına kuru reçine gramı) çarpılarak birimsiz hacim dağılım katsayısına çevrilebilir.\n• D_g eluentin bileşimine (derişim, pH, kompleksleştirici) bağlıdır; iki iyonun D_g değerlerinin oranı kolondaki ayırma faktörüdür.\n\nVarsayımlar: dengeye ulaşılmıştır ve reçine kapasitesinin yalnızca küçük bir kısmı kullanılmaktadır (iz düzeyi).',
      en: 'D_g = (amount held per gram of resin) / (amount left per mL of solution) = [(n₀ − n) / m_R] / [n / V].\n\nUnit: (µmol/g) / (µmol/mL) = mL/g. The amount unit cancels; volume is taken in mL and resin mass in g.\n\n• A large D_g means the ion is strongly held and a larger volume of eluent is needed to elute it.\n• Multiplying D_g by the bed density (grams of dry resin per mL of bed) gives the dimensionless volume distribution coefficient.\n• D_g depends on the eluent composition (concentration, pH, complexing agents); the ratio of the D_g values of two ions is their separation factor on the column.\n\nAssumptions: equilibrium is reached and only a small fraction of the resin capacity is used (trace level).',
    },
    usage: {
      tr: [
        'Bir eluentin bir iyonu kolondan ne kadar kolay çıkaracağını öngörmek.',
        'İki iyonun ayrılabilirliğini D_g değerlerini oranlayarak değerlendirmek.',
        'Reçine kapasitesine yaklaşan yüklemelerde D_g derişime bağımlı hâle gelir; ölçüm iz düzeyinde yapılmalıdır.',
      ],
      en: [
        'Predicting how easily an eluent will remove an ion from a column.',
        'Judging whether two ions can be separated by comparing their D_g values.',
        'At loadings approaching the resin capacity D_g becomes concentration dependent; measure at trace level.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n₀ = 100 µmol, dengede çözeltide kalan n = 10 µmol, m_R = 1 g kuru reçine, V = 50 mL.',
        'Reçinede tutulan: (100 − 10) µmol / 1 g = 90 µmol/g; çözeltide kalan: 10 µmol / 50 mL = 0,2 µmol/mL.',
        'Sonuç: D_g = (90 µmol/g) / (0,2 µmol/mL) = 450 mL/g.',
      ],
      en: [
        'Given: n₀ = 100 µmol, amount left in solution at equilibrium n = 10 µmol, m_R = 1 g of dry resin, V = 50 mL.',
        'Held on resin: (100 − 10) µmol / 1 g = 90 µmol/g; left in solution: 10 µmol / 50 mL = 0.2 µmol/mL.',
        'Result: D_g = (90 µmol/g) / (0.2 µmol/mL) = 450 mL/g.',
      ],
    },
    mistakes: {
      tr: [
        'Payda reçinede tutulan miktar (n₀ − n) yerine başlangıç miktarını (n₀) kullanmak.',
        'Kuru reçine yerine şişmiş (yaş) reçine kütlesini kullanmak; tablo değerleri genellikle kuru reçineye göredir.',
        'Elle hesaplarken hacmi litre alıp sonucu mL/g sanmak (1000 kat fark).',
      ],
      en: [
        'Using the initial amount (n₀) in the numerator instead of the amount held on the resin (n₀ − n).',
        'Using the swollen (wet) resin mass instead of the dry mass; tabulated values usually refer to dry resin.',
        'In a hand calculation, taking the volume in litres and reporting the result as mL/g (a factor of 1000).',
      ],
    },
    related: ['ion-exchange-selectivity', 'separation-factor', 'retention-volume'],
  },

  'ion-exchange-selectivity': {
    concept: {
      tr: 'B iyonu (ör. H⁺ ya da Na⁺) ile yüklü bir iyon değiştirici reçine, çözeltideki A iyonuyla karşılaştığında bir iyon değişimi dengesi kurulur: A + B·R ⇌ A·R + B. Reçine bazı iyonları ötekilere tercih eder ve bu tercih seçicilik katsayısıyla ölçülür. Seçicilik, iyon değiştirme kromatografisinde elüsyon sırasını ve reçinenin rejenerasyon koşullarını belirler.',
      en: 'When an ion-exchange resin loaded with ion B (e.g. H⁺ or Na⁺) meets ion A in solution, an ion-exchange equilibrium is set up: A + B·R ⇌ A·R + B. The resin prefers some ions to others, and this preference is measured by the selectivity coefficient. Selectivity determines the elution order in ion-exchange chromatography and the conditions for regenerating the resin.',
    },
    meaning: {
      tr: 'K_B^A = ([A]_R · [B]) / ([A] · [B]_R). R alt indisi reçine fazını, alt indissiz derişimler çözeltiyi gösterir.\n\n• K > 1: reçine A’yı tercih eder; K < 1: B’yi tercih eder.\n• Eşit yüklü iyonlarda birimler sadeleşir. Yükler farklıysa ifadeye yükler üs olarak girer ve sayısal değer kullanılan birimlere bağlı olur; bu araç eşit yüklü iyonlar içindir.\n• K gerçek bir termodinamik sabit değildir; reçinenin çapraz bağ oranına, iyonik şiddete ve reçinedeki iyon oranına bağlıdır.\n\nGenel eğilimler (seyreltik çözeltide, kuvvetli asidik katyon değiştiricide): yükü büyük olan iyon daha güçlü tutulur; aynı yükte hidratlı yarıçapı küçük olan iyon tercih edilir. Örneğin Li⁺ < Na⁺ < K⁺ < Cs⁺ ve Mg²⁺ < Ca²⁺ < Sr²⁺ < Ba²⁺.\n\nDerişik bir B çözeltisi dengeyi sola iterek tutulan A’yı reçineden söker; reçinenin rejenerasyonu bu kütle etkisine dayanır.',
      en: 'K_B^A = ([A]_R · [B]) / ([A] · [B]_R). The subscript R denotes the resin phase; concentrations without it refer to the solution.\n\n• K > 1: the resin prefers A; K < 1: it prefers B.\n• For ions of equal charge the units cancel. With different charges the charges appear as exponents and the numerical value depends on the units used; this tool is for ions of equal charge.\n• K is not a true thermodynamic constant; it depends on the degree of cross-linking, the ionic strength and the ionic composition of the resin.\n\nGeneral trends (dilute solution, strong-acid cation exchanger): ions of higher charge are held more strongly; among ions of equal charge the one with the smaller hydrated radius is preferred. For example Li⁺ < Na⁺ < K⁺ < Cs⁺ and Mg²⁺ < Ca²⁺ < Sr²⁺ < Ba²⁺.\n\nA concentrated solution of B pushes the equilibrium to the left and strips A from the resin; regeneration of the resin relies on this mass-action effect.',
    },
    usage: {
      tr: [
        'Reçinenin hangi iyonu daha güçlü tutacağını ve elüsyon sırasını öngörmek.',
        'Rejenerasyon ve elüsyon için gereken eluent derişimini değerlendirmek.',
        'Su yumuşatma ve deiyonizasyon gibi uygulamaları açıklamak.',
      ],
      en: [
        'Predicting which ion the resin will hold more strongly and the elution order.',
        'Estimating the eluent concentration needed for elution and regeneration.',
        'Explaining applications such as water softening and deionisation.',
      ],
    },
    solution: {
      tr: [
        'Verilen: reçine fazında [A]_R = 2 M ve [B]_R = 1 M; çözeltide [A] = 0,05 M ve [B] = 0,1 M.',
        'K = (2 M × 0,1 M) / (0,05 M × 1 M) = 0,2 / 0,05.',
        'Sonuç: K_B^A = 4; reçine A’yı B’ye göre 4 kat tercih eder.',
      ],
      en: [
        'Given: in the resin phase [A]_R = 2 M and [B]_R = 1 M; in solution [A] = 0.05 M and [B] = 0.1 M.',
        'K = (2 M × 0.1 M) / (0.05 M × 1 M) = 0.2 / 0.05.',
        'Result: K_B^A = 4; the resin prefers A to B by a factor of 4.',
      ],
    },
    mistakes: {
      tr: [
        'Reçine ve çözelti derişimlerini ifadede yanlış yere koymak; payda reçinedeki A ile çözeltideki B bulunur.',
        'Bu basit ifadeyi farklı yüklü iyonlara uygulamak.',
        'K’yı her koşulda sabit sanmak.',
      ],
      en: [
        'Putting resin and solution concentrations in the wrong places; the numerator contains A in the resin and B in solution.',
        'Applying this simple expression to ions of different charge.',
        'Assuming K is constant under all conditions.',
      ],
    },
    related: ['ion-exchange-dg', 'separation-factor', 'selectivity-factor'],
  },

  craig: {
    concept: {
      tr: 'Craig karşı akım dağılımı, bir ekstraksiyonun çok sayıda tüpte art arda tekrarlandığı bir ayırma tekniğidir. Her tüpte eşit hacimde alt faz (sabit faz) bulunur. Numune ilk tüpe konur, iki faz dengeye getirilir, sonra üst faz (hareketli faz) bir sonraki tüpe aktarılır ve ilk tüpe taze üst faz eklenir. Bu işlem n kez tekrarlanır. D’si büyük olan madde üst fazla birlikte daha hızlı ilerler.\n\nKromatografinin tabaka kuramı bu düşünceye dayanır: her tüp bir “teorik tabaka” gibi davranır.',
      en: 'Craig countercurrent distribution is a separation technique in which an extraction is repeated many times along a series of tubes. Each tube holds the same volume of lower (stationary) phase. The sample is placed in the first tube, the phases are equilibrated, then the upper (mobile) phase is transferred to the next tube and fresh upper phase is added to the first. This is repeated n times. The solute with the larger D travels faster with the upper phase.\n\nThe plate theory of chromatography is based on this idea: each tube behaves like a “theoretical plate”.',
    },
    meaning: {
      tr: 'Bir tüpte maddenin üst fazdaki kesri p = D · V_üst / (D · V_üst + V_alt), alt fazdaki kesri q = 1 − p’dir. n transferden sonra r numaralı tüpteki (r = 0, 1, …, n) madde kesri binom dağılımıyla verilir:\nf(r) = n! / (r!(n − r)!) · pʳ · qⁿ⁻ʳ.\n\n• En yüksek derişim yaklaşık r_max = n · p numaralı tüptedir.\n• Bandın genişliği standart sapma σ = √(n · p · q) ile ölçülür.\n• n büyüdükçe dağılım Gauss eğrisine yaklaşır.\n\nİki maddenin tepeleri arasındaki uzaklık (n · p₁ − n · p₂) n ile, bant genişliği ise √n ile büyür. Bu yüzden ayırma gücü √n ile artar; kromatografide çözünürlüğün tabaka sayısının kareköküyle artması da aynı ilişkidir.',
      en: 'In one tube the fraction of solute in the upper phase is p = D · V_upper / (D · V_upper + V_lower) and in the lower phase q = 1 − p. After n transfers the fraction of solute in tube r (r = 0, 1, …, n) follows the binomial distribution:\nf(r) = n! / (r!(n − r)!) · pʳ · qⁿ⁻ʳ.\n\n• The maximum lies near tube r_max = n · p.\n• The band width is measured by the standard deviation σ = √(n · p · q).\n• As n grows the distribution approaches a Gaussian.\n\nThe distance between two peaks (n · p₁ − n · p₂) grows with n, but the band width only with √n. Separating power therefore increases with √n, the same relationship as the increase of chromatographic resolution with the square root of the plate number.',
    },
    usage: {
      tr: [
        'Dağılım oranları birbirine yakın maddelerin kaç transferle ayrılabileceğini görmek.',
        'Kromatografideki tabaka kuramını ve bant genişlemesini sezgisel olarak anlamak.',
        'Araç her maddenin en yüksek olduğu tüpü (n · p) ve bant genişliğini (√(n · p · q)) verir.',
        'Fazların her adımda dengeye geldiği ve hacimlerin sabit kaldığı varsayılır.',
      ],
      en: [
        'Seeing how many transfers are needed to separate solutes with similar distribution ratios.',
        'Building intuition for the plate theory of chromatography and band broadening.',
        'The tool gives the peak tube (n · p) and the band width (√(n · p · q)) of each solute.',
        'Equilibrium in every step and constant phase volumes are assumed.',
      ],
    },
    solution: {
      tr: [
        'Verilen (aracın varsayılan değerleri): n = 30 transfer, V_üst / V_alt = 1, D₁ = 1, D₂ = 3.',
        'p₁ = 1 × 1 / (1 × 1 + 1) = 0,50; p₂ = 3 × 1 / (3 × 1 + 1) = 0,75.',
        'Tepe tüpleri: n · p₁ = 30 × 0,50 = 15 (bu tüpte 1. maddenin 0,1445’i) ve n · p₂ = 30 × 0,75 = 22,5 (en büyük kesir 23. tüpte, 0,1662).',
        'Sonuç: σ₁ = √(30 × 0,50 × 0,50) = 2,739 ve σ₂ = √(30 × 0,75 × 0,25) = 2,372 tüp. Bantlar kısmen örtüşür: 18. ile 19. tüp arasından bölünürse 1. maddenin %10,0’u 2. maddenin tarafında, 2. maddenin %5,1’i 1. maddenin tarafında kalır; daha iyi ayırma için transfer sayısı artırılmalıdır.',
      ],
      en: [
        'Given (tool defaults): n = 30 transfers, V_upper / V_lower = 1, D₁ = 1, D₂ = 3.',
        'p₁ = 1 × 1 / (1 × 1 + 1) = 0.50; p₂ = 3 × 1 / (3 × 1 + 1) = 0.75.',
        'Peak tubes: n · p₁ = 30 × 0.50 = 15 (holding 0.1445 of solute 1) and n · p₂ = 30 × 0.75 = 22.5 (largest fraction in tube 23, 0.1662).',
        'Result: σ₁ = √(30 × 0.50 × 0.50) = 2.739 and σ₂ = √(30 × 0.75 × 0.25) = 2.372 tubes. The bands partly overlap: cutting between tubes 18 and 19 leaves 10.0% of solute 1 on the side of solute 2 and 5.1% of solute 2 on the side of solute 1; more transfers are needed for a cleaner separation.',
      ],
    },
    mistakes: {
      tr: [
        'p’yi D ile karıştırmak; p bir tüpteki üst faz kesridir ve hacim oranına da bağlıdır.',
        'Tüp numarasını 1’den başlatmak; ilk tüp r = 0’dır ve n transferden sonra n + 1 tüp dolu olur.',
        'Transfer sayısı artınca bantların daralacağını sanmak; bantlar mutlak olarak genişler (√n ile), yalnızca tepeler arası uzaklığa göre bağıl olarak daralır.',
      ],
      en: [
        'Confusing p with D; p is the fraction in the upper phase of one tube and also depends on the volume ratio.',
        'Numbering tubes from 1; the first tube is r = 0, and after n transfers n + 1 tubes are occupied.',
        'Expecting bands to become narrower with more transfers; they broaden in absolute terms (as √n) and only narrow relative to the peak separation.',
      ],
    },
    related: ['repeated-extraction', 'separation-factor', 'plate-number-base', 'resolution'],
  },
};

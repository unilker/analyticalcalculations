import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Electrochemistry module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const ELECTRO_DETAILS: Record<string, ToolDetail> = {
  'gibbs-nfe': {
    concept: {
      tr: 'Bir galvanik hücrenin dış devreye verdiği elektrik işi, hücrede yürüyen redoks tepkimesinin Gibbs enerjisi azalmasından gelir. Sabit sıcaklık ve basınçta, tersinir koşullarda elde edilebilecek en büyük elektrik işi −ΔG’ye eşittir. Bu yüzden ölçülen hücre potansiyeli, tepkimenin termodinamik itici gücünün doğrudan bir ölçüsüdür.\n\nE > 0 ise ΔG < 0’dır ve tepkime yazıldığı yönde kendiliğindendir; E < 0 ise ters yön kendiliğindendir; E = 0 ise sistem dengededir.',
      en: 'The electrical work a galvanic cell delivers to the external circuit comes from the decrease in Gibbs energy of the redox reaction inside it. At constant temperature and pressure, the maximum electrical work obtainable under reversible conditions equals −ΔG. A measured cell potential is therefore a direct measure of the thermodynamic driving force of the reaction.\n\nIf E > 0, ΔG < 0 and the reaction is spontaneous as written; if E < 0 the reverse direction is spontaneous; if E = 0 the system is at equilibrium.',
    },
    meaning: {
      tr: 'Bir mol elektron F = 96 485 C/mol yük taşır (Faraday sabiti). Tepkime başına n mol elektron, E potansiyel farkı boyunca taşındığında yapılan elektrik işi n·F·E’dir. Sistem iş yaptığında Gibbs enerjisi azaldığından ΔG = −n·F·E yazılır. Standart koşullarda ΔG° = −n·F·E°.\n\nBirim kontrolü: (C/mol) × V = J/mol, çünkü 1 C·V = 1 J.\n\n• n, tepkimenin yazıldığı şekliyle 1 mol tepkime başına aktarılan elektron molüdür.\n• E şiddet özelliğidir: tepkimeyi 2 ile çarpmak E’yi değiştirmez, ama n ve dolayısıyla ΔG iki katına çıkar.\n• ΔG yalnızca yönü ve dengeyi söyler; tepkimenin hızı hakkında bilgi vermez.',
      en: 'One mole of electrons carries F = 96 485 C/mol of charge (the Faraday constant). When n moles of electrons per mole of reaction move through a potential difference E, the electrical work is n·F·E. Because the Gibbs energy of the system falls when it does work, ΔG = −n·F·E. Under standard conditions ΔG° = −n·F·E°.\n\nUnit check: (C/mol) × V = J/mol, since 1 C·V = 1 J.\n\n• n is the number of moles of electrons transferred per mole of reaction as written.\n• E is intensive: multiplying the reaction by 2 does not change E, but n, and hence ΔG, doubles.\n• ΔG tells only the direction and position of equilibrium; it says nothing about the rate.',
    },
    usage: {
      tr: [
        'Ölçülen ya da tablodan hesaplanan hücre potansiyelinden tepkimenin kendiliğinden olup olmadığını değerlendirmek.',
        'Termodinamik verilerden (ΔG°) standart hücre potansiyelini hesaplamak: E° = −ΔG° / (n·F).',
        'ΔG° bulunduktan sonra ΔG° = −RT·ln K ile denge sabitine geçmek.',
        'E° ile ΔG°, E ile ΔG eşleştirilmelidir; standart olmayan koşullarda E önce Nernst eşitliğiyle bulunur.',
      ],
      en: [
        'Judging whether a reaction is spontaneous from a measured or tabulated cell potential.',
        'Calculating a standard cell potential from thermodynamic data: E° = −ΔG° / (n·F).',
        'Going on from ΔG° to the equilibrium constant with ΔG° = −RT·ln K.',
        'Pair E° with ΔG° and E with ΔG; under non-standard conditions find E first with the Nernst equation.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Daniell hücresi Zn | Zn²⁺ ‖ Cu²⁺ | Cu, E = 1,10 V, n = 2 (Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu).',
        'ΔG = −n·F·E = −2 × 96 485 C/mol × 1,10 V = −212 268 J/mol.',
        'Sonuç: ΔG = -212,3 kJ/mol; negatif olduğu için tepkime kendiliğindendir.',
      ],
      en: [
        'Given: Daniell cell Zn | Zn²⁺ ‖ Cu²⁺ | Cu, E = 1.10 V, n = 2 (Zn → Zn²⁺ + 2e⁻; Cu²⁺ + 2e⁻ → Cu).',
        'ΔG = −n·F·E = −2 × 96 485 C/mol × 1.10 V = −212 268 J/mol.',
        'Result: ΔG = -212.3 kJ/mol; it is negative, so the reaction is spontaneous.',
      ],
    },
    mistakes: {
      tr: [
        'Eksi işaretini unutmak: pozitif E, negatif ΔG demektir.',
        'n’yi yanlış almak: denkleştirilmiş toplam tepkimede aktarılan elektron sayısı kullanılmalıdır.',
        'Sonucu J/mol olarak hesaplayıp kJ/mol diye okumak (1000 kat hata).',
      ],
      en: [
        'Dropping the minus sign: a positive E means a negative ΔG.',
        'Using the wrong n: take the electrons transferred in the balanced overall reaction.',
        'Calculating in J/mol and reading the number as kJ/mol (a factor of 1000).',
      ],
    },
    related: ['e0-k', 'cell-potential', 'gibbs-k'],
  },

  'e0-k': {
    concept: {
      tr: 'Standart hücre potansiyeli ile denge sabiti arasındaki bağ, ΔG° = −n·F·E° ve ΔG° = −RT·ln K eşitliklerinin birleştirilmesinden çıkar. Böylece iki yarı tepkimenin tablodaki potansiyellerinden, doğrudan ölçülmesi neredeyse imkânsız büyüklükteki denge sabitleri kolayca hesaplanabilir.\n\nRedoks titrasyonlarında bu hesap, titrasyon tepkimesinin eşdeğerlik noktasında ne ölçüde tamamlandığını değerlendirmenin en pratik yoludur.',
      en: 'The link between the standard cell potential and the equilibrium constant follows from combining ΔG° = −n·F·E° with ΔG° = −RT·ln K. Equilibrium constants far too large to measure directly can thus be calculated from the tabulated potentials of two half-reactions.\n\nIn redox titrations this is the most practical way to judge how complete the titration reaction is at the equivalence point.',
    },
    meaning: {
      tr: '−n·F·E° = −RT·ln K eşitliğinden E° = (RT/nF)·ln K ve K = exp(nFE°/RT) bulunur. 25 °C’de 10 tabanlı logaritmaya geçilince: log K = n·ΔE° / 0,05916. n = 1 için ΔE°’deki her 59 mV, K’yı 10 kat büyütür.\n\n• ΔE° = E°(katot) − E°(anot) = E°(yükseltgen çift) − E°(indirgen çift).\n• n, denkleştirilmiş toplam tepkimede aktarılan elektron sayısıdır (iki yarı tepkimenin elektron sayılarının ortak katı).\n• Formal potansiyeller kullanılırsa bulunan sabit, o ortama özgü koşullu denge sabitidir.\n\nTamlık ölçütü: 1:1 bir tepkimede eşdeğerlik noktasında %99,9 dönüşüm için her iki çiftte ürün/girdi oranı yaklaşık 10³ olmalıdır; bu K ≥ 10⁶ demektir. n = 1 için ΔE° en az yaklaşık 0,36 V olmalıdır.',
      en: 'From −n·F·E° = −RT·ln K it follows that E° = (RT/nF)·ln K and K = exp(nFE°/RT). Switching to base-10 logarithms at 25 °C: log K = n·ΔE° / 0.05916. For n = 1, every 59 mV of ΔE° multiplies K by 10.\n\n• ΔE° = E°(cathode) − E°(anode) = E°(oxidant couple) − E°(reductant couple).\n• n is the number of electrons transferred in the balanced overall reaction (a common multiple of the electrons in the two half-reactions).\n• With formal potentials, the constant obtained is the conditional equilibrium constant for that medium.\n\nCompleteness criterion: for a 1:1 reaction to be 99.9% complete at the equivalence point, the product/reactant ratio of each couple must be about 10³, i.e. K ≥ 10⁶. For n = 1, ΔE° must be at least about 0.36 V.',
    },
    usage: {
      tr: [
        'Bir redoks titrasyonunun nicel olup olmadığını önceden değerlendirmek.',
        'Tablodaki potansiyellerden çözünürlük çarpımı ya da kompleks oluşum sabiti gibi sabitleri türetmek.',
        'Tersinden, bilinen bir K’dan standart potansiyel hesaplamak.',
        'Sıcaklık ayrı bir girdi olarak alınır; 0,05916 V yalnızca 25 °C için geçerlidir.',
      ],
      en: [
        'Judging beforehand whether a redox titration will be quantitative.',
        'Deriving constants such as solubility products or formation constants from tabulated potentials.',
        'Conversely, calculating a standard potential from a known K.',
        'Temperature is a separate input; 0.05916 V applies only at 25 °C.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Fe²⁺ + Ce⁴⁺ ⇌ Fe³⁺ + Ce³⁺ (1 M H₂SO₄), E°′(Ce⁴⁺/Ce³⁺) = 1,44 V, E°′(Fe³⁺/Fe²⁺) = 0,68 V, n = 1, T = 25 °C.',
        'ΔE° = 1,44 V − 0,68 V = 0,76 V.',
        'log K = n·ΔE° / 0,05916 = 1 × 0,76 / 0,05916 = 12,85.',
        'Sonuç: K = 10^12,85 = 7,025 × 10¹²; bu kadar büyük bir K ile titrasyon tepkimesi pratikçe tamdır.',
      ],
      en: [
        'Given: Fe²⁺ + Ce⁴⁺ ⇌ Fe³⁺ + Ce³⁺ (1 M H₂SO₄), E°′(Ce⁴⁺/Ce³⁺) = 1.44 V, E°′(Fe³⁺/Fe²⁺) = 0.68 V, n = 1, T = 25 °C.',
        'ΔE° = 1.44 V − 0.68 V = 0.76 V.',
        'log K = n·ΔE° / 0.05916 = 1 × 0.76 / 0.05916 = 12.85.',
        'Result: K = 10^12.85 = 7.025 × 10¹²; with K this large the titration reaction is practically complete.',
      ],
    },
    mistakes: {
      tr: [
        'log ile ln’yi karıştırmak: 0,05916 V 10 tabanlı logaritmayla, RT/F = 0,02569 V ise ln ile kullanılır.',
        'n olarak yarı tepkimelerden birinin elektron sayısını almak; toplam tepkimedeki sayı gereklidir.',
        'ΔE°’yi ters sırayla almak; bu, ters tepkimenin K’sını (1/K) verir.',
      ],
      en: [
        'Mixing up log and ln: 0.05916 V goes with base-10 logarithms, RT/F = 0.02569 V with ln.',
        'Taking n from one half-reaction only; the number for the overall reaction is needed.',
        'Subtracting in the wrong order, which gives the K of the reverse reaction (1/K).',
      ],
    },
    related: ['gibbs-nfe', 'curve-redox', 'redox-equivalence-potential', 'table-potentials'],
  },

  nernst: {
    concept: {
      tr: 'Standart potansiyel, tepkimeye katılan tüm türlerin aktivitesi 1 olduğunda geçerlidir. Gerçek çözeltilerde elektrot potansiyeli, yükseltgenmiş ve indirgenmiş türlerin oranına bağlıdır. Nernst eşitliği bu bağı nicel olarak verir.\n\nPotansiyometri, iyon seçici elektrotlar, redoks titrasyon eğrileri ve referans elektrotların sabit potansiyeli bu eşitliğe dayanır.',
      en: 'The standard potential applies when every species in the reaction has unit activity. In real solutions the electrode potential depends on the ratio of oxidised to reduced species, and the Nernst equation gives this dependence quantitatively.\n\nPotentiometry, ion-selective electrodes, redox titration curves and the constant potential of reference electrodes all rest on this equation.',
    },
    meaning: {
      tr: 'ΔG = ΔG° + RT·ln Q eşitliği −n·F ile bölünür ve ΔG = −nFE kullanılırsa E = E° − (RT/nF)·ln Q elde edilir. 25 °C’de RT/F = 0,02569 V ve 2,303·RT/F = 0,05916 V olduğundan E = E° − (0,05916/n)·log Q.\n\nYarı tepkime indirgenme yönünde yazılır: aOx + ne⁻ ⇌ bRed için Q = [Red]ᵇ / [Ox]ᵃ. Saf katıların, saf sıvıların ve çözücünün aktivitesi 1 alınır; gazlar kısmi basınçla (bar) girer.\n\n• n = 1 için Q’daki 10 kat artış E’yi 59,16 mV azaltır.\n• Kesin eşitlik aktivitelerle yazılır. Derişimlerle çalışırken formal potansiyel E°′ kullanmak (aktivite katsayılarını ve yan tepkimeleri içerir) daha gerçekçi sonuç verir.\n• Aynı eşitlik tüm hücreye de uygulanır; o zaman E°, standart hücre potansiyeli, Q ise hücre tepkimesinin tepkime oranıdır.',
      en: 'Dividing ΔG = ΔG° + RT·ln Q by −n·F and using ΔG = −nFE gives E = E° − (RT/nF)·ln Q. At 25 °C, RT/F = 0.02569 V and 2.303·RT/F = 0.05916 V, so E = E° − (0.05916/n)·log Q.\n\nThe half-reaction is written as a reduction: for aOx + ne⁻ ⇌ bRed, Q = [Red]ᵇ / [Ox]ᵃ. Pure solids, pure liquids and the solvent have unit activity; gases enter as partial pressures (bar).\n\n• For n = 1, a tenfold increase in Q lowers E by 59.16 mV.\n• The exact equation uses activities. When working with concentrations, the formal potential E°′ (which includes activity coefficients and side reactions) gives more realistic results.\n• The same equation applies to a whole cell; then E° is the standard cell potential and Q the reaction quotient of the cell reaction.',
    },
    usage: {
      tr: [
        'Belirli derişimlerde bir yarı hücrenin ya da hücrenin potansiyelini hesaplamak.',
        'Ölçülen potansiyelden [Red]/[Ox] oranını bulmak (redoks titrasyonlarında eğrinin her noktası).',
        'Sıcaklık ayrı bir girdidir; RT/nF katsayısı sıcaklıkla doğrusal değişir.',
        'Seyreltik olmayan çözeltilerde aktivite katsayıları ya da formal potansiyel hesaba katılmalıdır.',
      ],
      en: [
        'Calculating the potential of a half-cell or cell at given concentrations.',
        'Finding the [Red]/[Ox] ratio from a measured potential (every point of a redox titration curve).',
        'Temperature is a separate input; the RT/nF factor changes linearly with temperature.',
        'In non-dilute solutions, activity coefficients or the formal potential must be taken into account.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Fe³⁺ + e⁻ ⇌ Fe²⁺, E° = 0,771 V, n = 1, Q = [Fe²⁺]/[Fe³⁺] = 10, T = 25 °C.',
        '(0,05916 / n)·log Q = (0,05916 / 1) × log 10 = 0,05916 V.',
        'Sonuç: E = 0,771 V − 0,05916 V = 0,7118 V; indirgenmiş türün fazla olması potansiyeli E°’nin altına çeker.',
      ],
      en: [
        'Given: Fe³⁺ + e⁻ ⇌ Fe²⁺, E° = 0.771 V, n = 1, Q = [Fe²⁺]/[Fe³⁺] = 10, T = 25 °C.',
        '(0.05916 / n)·log Q = (0.05916 / 1) × log 10 = 0.05916 V.',
        'Result: E = 0.771 V − 0.05916 V = 0.7118 V; an excess of the reduced form pulls the potential below E°.',
      ],
    },
    mistakes: {
      tr: [
        'Q’yu ters yazmak ([Ox]/[Red]); indirgenme yazımında indirgenmiş tür kesrin payında, yükseltgenmiş tür paydasında yer alır.',
        'Stokiyometrik katsayıları üs olarak almayı unutmak.',
        '0,05916 V’yi 25 °C dışında kullanmak ya da ln ile birlikte kullanmak.',
      ],
      en: [
        'Inverting Q ([Ox]/[Red]); for the reduction as written, the reduced form is in the numerator.',
        'Forgetting to raise concentrations to their stoichiometric coefficients.',
        'Using 0.05916 V at temperatures other than 25 °C, or together with ln.',
      ],
    },
    related: ['nernst-ph', 'cell-potential', 'activity', 'table-potentials'],
  },

  'nernst-ph': {
    concept: {
      tr: 'MnO₄⁻, Cr₂O₇²⁻, BrO₃⁻ ve H₃AsO₄ gibi pek çok yükseltgenin indirgenmesine H⁺ iyonları katılır. Bu durumda [H⁺] Nernst eşitliğinin tepkime oranına girer ve potansiyel pH’a güçlü biçimde bağlı hale gelir.\n\nBu nedenle bir yükseltgenin gücü ortamın asitliğine göre değişir: asidik ortamda kuvvetli olan bir yükseltgen nötral ya da bazik ortamda belirgin biçimde zayıflayabilir, hatta tepkimenin yönü tersine dönebilir.',
      en: 'H⁺ ions take part in the reduction of many oxidants such as MnO₄⁻, Cr₂O₇²⁻, BrO₃⁻ and H₃AsO₄. [H⁺] then appears in the reaction quotient of the Nernst equation and the potential becomes strongly pH dependent.\n\nThe strength of such an oxidant therefore depends on the acidity of the medium: an oxidant that is strong in acid can be much weaker in neutral or basic solution, and the direction of a reaction can even reverse.',
    },
    meaning: {
      tr: 'Ox + mH⁺ + ne⁻ ⇌ Red için tam ifade: E = E° − (0,05916/n)·log([Red] / ([Ox]·[H⁺]ᵐ)). log(1/[H⁺]ᵐ) = m·pH olduğundan pH terimi ayrılabilir:\nE = E° − (0,05916/n)·log Q − 0,05916·(m/n)·pH, burada Q = [Red]/[Ox].\n\n• Potansiyel pH ile doğrusal azalır; eğim −59,16·(m/n) mV/pH’tır. H₃AsO₄/H₃AsO₃ (m = n = 2) için 59,16 mV/pH, MnO₄⁻/Mn²⁺ (m = 8, n = 5) için yaklaşık 94,7 mV/pH.\n• pH’ın sabit tutulduğu tamponlu bir ortamda pH terimi E°’ye katılabilir; böylece o pH’a özgü etkin (formal) bir potansiyel elde edilir.\n• Eşitlik 25 °C ve aktivite yerine derişim varsayımlarıyla yazılmıştır.',
      en: 'For Ox + mH⁺ + ne⁻ ⇌ Red the full expression is E = E° − (0.05916/n)·log([Red] / ([Ox]·[H⁺]ᵐ)). Since log(1/[H⁺]ᵐ) = m·pH, the pH term can be separated:\nE = E° − (0.05916/n)·log Q − 0.05916·(m/n)·pH, where Q = [Red]/[Ox].\n\n• The potential falls linearly with pH, with a slope of −59.16·(m/n) mV per pH unit: 59.16 mV/pH for H₃AsO₄/H₃AsO₃ (m = n = 2) and about 94.7 mV/pH for MnO₄⁻/Mn²⁺ (m = 8, n = 5).\n• In a buffered medium of fixed pH the pH term can be absorbed into E°, giving an effective (formal) potential for that pH.\n• The equation assumes 25 °C and concentrations in place of activities.',
    },
    usage: {
      tr: [
        'Bir yükseltgenin farklı pH’lardaki etkin gücünü karşılaştırmak.',
        'Redoks tepkimelerinin yönünün pH ile nasıl değiştiğini öngörmek (ör. arsenik–iyot sistemi).',
        'Belirli bir potansiyele ulaşmak için gereken pH’ı bulmak.',
        'Ox ya da Red türleri bu pH aralığında proton alıp veriyorsa (ör. arsenik asidi nötral ortamda büyük ölçüde H₂AsO₄⁻ ve HAsO₄²⁻ hâlindedir) basit m/n eğimi bozulur; ölçülmüş formal potansiyeller tercih edilmelidir.',
      ],
      en: [
        'Comparing the effective strength of an oxidant at different pH values.',
        'Predicting how the direction of a redox reaction changes with pH (e.g. the arsenic–iodine system).',
        'Finding the pH needed to reach a given potential.',
        'If Ox or Red gain or lose protons in the pH range of interest (e.g. arsenic acid is largely H₂AsO₄⁻ and HAsO₄²⁻ near neutral pH), the simple m/n slope breaks down; measured formal potentials are preferable.',
      ],
    },
    solution: {
      tr: [
        'Verilen: H₃AsO₄ + 2H⁺ + 2e⁻ ⇌ H₃AsO₃ + H₂O, E° = 0,559 V, n = 2, m = 2, Q = [H₃AsO₃]/[H₃AsO₄] = 1, pH = 8.',
        'log Q = log 1 = 0 olduğundan ikinci terim sıfırdır.',
        '0,05916 × (m/n) × pH = 0,05916 × (2/2) × 8 = 0,4733 V.',
        'Sonuç: E = 0,559 V − 0,4733 V = 0,08573 V. Bu değer E°(I₃⁻/I⁻) = 0,5355 V’nin çok altındadır; bu yüzden pH 8’de I₃⁻, arsenik(III)’ü yükseltger, kuvvetli asidik ortamda ise tepkime ters yöne kayar.',
      ],
      en: [
        'Given: H₃AsO₄ + 2H⁺ + 2e⁻ ⇌ H₃AsO₃ + H₂O, E° = 0.559 V, n = 2, m = 2, Q = [H₃AsO₃]/[H₃AsO₄] = 1, pH = 8.',
        'log Q = log 1 = 0, so the second term vanishes.',
        '0.05916 × (m/n) × pH = 0.05916 × (2/2) × 8 = 0.4733 V.',
        'Result: E = 0.559 V − 0.4733 V = 0.08573 V. This is far below E°(I₃⁻/I⁻) = 0.5355 V, so at pH 8 I₃⁻ oxidises arsenic(III), while in strongly acidic solution the reaction shifts in the opposite direction.',
      ],
    },
    mistakes: {
      tr: [
        'm ile n’yi karıştırmak: m H⁺ katsayısı, n elektron sayısıdır.',
        '[H⁺]’yi hem Q’ya hem de pH terimine koyarak iki kez saymak (bu araçta Q yalnızca [Red]/[Ox]’tir).',
        'İşareti yanlış yorumlamak: pH arttıkça E azalır, yükseltgen zayıflar.',
      ],
      en: [
        'Confusing m and n: m is the H⁺ coefficient, n the number of electrons.',
        'Counting [H⁺] twice, in Q and in the pH term (in this tool Q is only [Red]/[Ox]).',
        'Misreading the sign: as pH rises, E falls and the oxidant becomes weaker.',
      ],
    },
    related: ['nernst', 'ph-converter', 'curve-redox'],
  },

  'cell-potential': {
    concept: {
      tr: 'Elektrokimyasal hücre, bir tuz köprüsü ya da ortak elektrolitle bağlanmış iki yarı hücreden oluşur. Katotta indirgenme, anotta yükseltgenme olur. Tek bir elektrodun potansiyeli tek başına ölçülemez; bu yüzden tablolar her yarı tepkimeyi standart hidrojen elektroduna (SHE) karşı indirgenme potansiyeli olarak verir ve hücre potansiyeli bu iki değerin farkıdır.\n\nHücre şeması: Zn | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu. Tek çizgi faz sınırını, çift çizgi tuz köprüsünü gösterir. IUPAC kuralına göre şemada sağdaki elektrot katot kabul edilir.',
      en: 'An electrochemical cell consists of two half-cells connected by a salt bridge or a common electrolyte. Reduction takes place at the cathode, oxidation at the anode. The potential of a single electrode cannot be measured on its own, so tables give each half-reaction as a reduction potential against the standard hydrogen electrode (SHE), and the cell potential is the difference of two such values.\n\nCell notation: Zn | Zn²⁺(aq) ‖ Cu²⁺(aq) | Cu. A single line marks a phase boundary, a double line the salt bridge. By the IUPAC convention, the right-hand electrode in the diagram is taken as the cathode.',
    },
    meaning: {
      tr: 'E_hücre = E_sağ − E_sol = E_katot − E_anot. Her iki değer de indirgenme potansiyeli olarak, tablodaki işaretiyle girilir. Anotta yükseltgenme olsa da potansiyelin işareti önceden ters çevrilmez; çıkarma işlemi bunu zaten yapar.\n\n• E_hücre > 0: hücre yazıldığı gibi galvaniktir (kendiliğinden çalışır, akım üretir).\n• E_hücre < 0: tepkime ters yönde kendiliğindendir; yazıldığı yönde yürütmek için dışarıdan gerilim uygulamak gerekir (elektrolitik hücre).\n• Standart olmayan koşullarda her elektrot potansiyeli önce Nernst eşitliğiyle hesaplanır.\n• Gerçek ölçümlerde sıvı temas potansiyeli ve akım geçerken IR düşüşü ölçülen değeri değiştirir.',
      en: 'E_cell = E_right − E_left = E_cathode − E_anode. Both values are entered as reduction potentials with their tabulated signs. Even though oxidation occurs at the anode, its potential is not sign-reversed beforehand; the subtraction already does that.\n\n• E_cell > 0: the cell is galvanic as written (spontaneous, it produces current).\n• E_cell < 0: the reaction is spontaneous in the reverse direction; driving it as written requires an external voltage (electrolytic cell).\n• Under non-standard conditions, calculate each electrode potential with the Nernst equation first.\n• In real measurements, the liquid-junction potential and, when current flows, the IR drop change the measured value.',
    },
    usage: {
      tr: [
        'Tablodaki iki yarı tepkimeden bir hücrenin standart potansiyelini ve tepkimenin yönünü bulmak.',
        'Ölçülen hücre potansiyeli ve bilinen bir elektrot potansiyelinden diğer elektrodun potansiyelini bulmak.',
        'Potansiyometride gösterge elektrodu katot, referans elektrot anot gibi düşünülür: E_hücre = E_gösterge − E_ref.',
      ],
      en: [
        'Finding the standard potential of a cell and the direction of the reaction from two tabulated half-reactions.',
        'Finding one electrode potential from a measured cell potential and the other electrode potential.',
        'In potentiometry, the indicator electrode plays the cathode and the reference the anode: E_cell = E_ind − E_ref.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Daniell hücresi; katot Cu²⁺ + 2e⁻ ⇌ Cu, E° = 0,337 V; anot Zn²⁺ + 2e⁻ ⇌ Zn, E° = −0,763 V.',
        'E_hücre = E_katot − E_anot = 0,337 V − (−0,763 V).',
        'Sonuç: E_hücre = 1,1 V (1,100 V); pozitif olduğu için Zn çözünür, Cu birikir ve hücre kendiliğinden çalışır.',
      ],
      en: [
        'Given: Daniell cell; cathode Cu²⁺ + 2e⁻ ⇌ Cu, E° = 0.337 V; anode Zn²⁺ + 2e⁻ ⇌ Zn, E° = −0.763 V.',
        'E_cell = E_cathode − E_anode = 0.337 V − (−0.763 V).',
        'Result: E_cell = 1.1 V (1.100 V); it is positive, so Zn dissolves, Cu deposits and the cell runs spontaneously.',
      ],
    },
    mistakes: {
      tr: [
        'Anot potansiyelinin işaretini önceden çevirip yine de çıkarmak (işaret iki kez değişir).',
        'E°’yi yarı tepkimenin katsayısıyla çarpmak; potansiyel şiddet özelliğidir.',
        'Katot ve anodu karıştırmak: katot her zaman indirgenmenin olduğu elektrottur, galvanik ya da elektrolitik olması bunu değiştirmez.',
      ],
      en: [
        'Reversing the sign of the anode potential and then subtracting it anyway (a double sign change).',
        'Multiplying E° by the coefficient of the half-reaction; potential is an intensive property.',
        'Mixing up cathode and anode: the cathode is always where reduction occurs, whether the cell is galvanic or electrolytic.',
      ],
    },
    related: ['nernst', 'gibbs-nfe', 'table-potentials', 'reference-conversion'],
  },

  'reference-conversion': {
    concept: {
      tr: 'Bir elektrot potansiyeli her zaman bir referansa göre ölçülür. Tablolar standart hidrojen elektrodunu (SHE) sıfır kabul eder; ancak SHE (H₂ gazı, platinlenmiş Pt) laboratuvarda kullanışsızdır. Pratikte potansiyeli sabit ve bilinen ikinci tür elektrotlar kullanılır: doymuş kalomel elektrot (SCE; Hg | Hg₂Cl₂ | KCl, doymuş) ve gümüş–gümüş klorür (Ag/AgCl) elektrodu.\n\nBu elektrotlara karşı okunan değerleri SHE ölçeğine taşımak ya da tersini yapmak, voltametri ve potansiyometride sık gereken bir dönüşümdür.',
      en: 'An electrode potential is always measured against a reference. Tables take the standard hydrogen electrode (SHE) as zero, but the SHE (H₂ gas, platinised Pt) is impractical in the laboratory. In practice, electrodes of the second kind with a constant, known potential are used: the saturated calomel electrode (SCE; Hg | Hg₂Cl₂ | KCl, saturated) and the silver–silver chloride (Ag/AgCl) electrode.\n\nConverting readings taken against these electrodes to the SHE scale, or the reverse, is a routine step in voltammetry and potentiometry.',
    },
    meaning: {
      tr: 'Ölçülen potansiyel E = E(SHE’ye göre) − E_ref(SHE’ye göre) olduğundan E(ref’e göre) = E(SHE’ye göre) − E_ref. Bu, potansiyel ölçeğinin sıfır noktasını kaydırmaktan ibarettir: SCE, SHE’den 0,242 V daha pozitif olduğundan SCE’ye göre okunan değerler 0,242 V daha negatiftir.\n\n• Doymuş KCl’li SCE: 0,242 V; doymuş KCl’li Ag/AgCl: 0,197 V (25 °C, SHE’ye göre).\n• Referans potansiyeli iç çözeltinin KCl derişimine ve sıcaklığa bağlıdır; farklı bir dolgu çözeltisi için elektrodun kendi değeri kullanılmalıdır.\n• İki referans arasında doğrudan geçiş: E(SCE’ye göre) = E(Ag/AgCl’ye göre) − (0,242 − 0,197) V = E(Ag/AgCl’ye göre) − 0,045 V.',
      en: 'Since the measured potential is E = E(vs. SHE) − E_ref(vs. SHE), it follows that E(vs. ref) = E(vs. SHE) − E_ref. This merely shifts the zero of the potential scale: the SCE is 0.242 V more positive than the SHE, so values read against the SCE are 0.242 V more negative.\n\n• SCE with saturated KCl: 0.242 V; Ag/AgCl with saturated KCl: 0.197 V (25 °C, vs. SHE).\n• The reference potential depends on the KCl concentration of the filling solution and on temperature; for a different filling solution use that electrode’s own value.\n• Converting directly between the two references: E(vs. SCE) = E(vs. Ag/AgCl) − (0.242 − 0.197) V = E(vs. Ag/AgCl) − 0.045 V.',
    },
    usage: {
      tr: [
        'Tablodaki (SHE’ye göre) E° değerlerini laboratuvarda kullanılan referansa göre beklenen okumaya çevirmek.',
        'Farklı referanslarla kaydedilmiş voltamogram ya da titrasyon verilerini karşılaştırmak.',
        'Tersinden, SCE’ye göre ölçülen bir potansiyeli SHE ölçeğine taşımak: E(SHE) = E(SCE) + 0,242 V.',
      ],
      en: [
        'Converting tabulated E° values (vs. SHE) into the reading expected against the laboratory reference.',
        'Comparing voltammograms or titration data recorded with different references.',
        'Conversely, moving a potential measured vs. SCE onto the SHE scale: E(SHE) = E(SCE) + 0.242 V.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Cd²⁺ + 2e⁻ ⇌ Cd, E = −0,403 V (SHE’ye göre); referans SCE, E_ref = 0,242 V.',
        'E(SCE’ye göre) = E(SHE’ye göre) − E_ref = −0,403 V − 0,242 V.',
        'Sonuç: E = -0,645 V (SCE’ye göre); doymuş Ag/AgCl’ye göre ise −0,403 − 0,197 = −0,600 V olurdu.',
      ],
      en: [
        'Given: Cd²⁺ + 2e⁻ ⇌ Cd, E = −0.403 V (vs. SHE); reference SCE, E_ref = 0.242 V.',
        'E(vs. SCE) = E(vs. SHE) − E_ref = −0.403 V − 0.242 V.',
        'Result: E = -0.645 V (vs. SCE); against saturated Ag/AgCl it would be −0.403 − 0.197 = −0.600 V.',
      ],
    },
    mistakes: {
      tr: [
        'Yönü karıştırmak: SHE’den referansa geçerken çıkarılır, referanstan SHE’ye geçerken eklenir.',
        'Referansın türünü ve KCl derişimini belirtmeden potansiyel raporlamak.',
        'Doymuş KCl’li değerleri farklı derişimde KCl içeren bir elektrot için kullanmak.',
      ],
      en: [
        'Going the wrong way: subtract when moving from SHE to the reference, add when moving from the reference to SHE.',
        'Reporting a potential without stating the type of reference and its KCl concentration.',
        'Using the saturated-KCl values for an electrode filled with a different KCl concentration.',
      ],
    },
    related: ['cell-potential', 'second-kind-electrode', 'table-potentials'],
  },

  'second-kind-electrode': {
    concept: {
      tr: 'Birinci tür elektrot (ör. Ag⁺ çözeltisine daldırılmış gümüş tel) kendi katyonunun aktivitesine yanıt verir. Metal, kendi iyonunun az çözünen bir tuzuyla (AgCl, Hg₂Cl₂) kaplanırsa, çözeltideki katyon aktivitesi Ksp üzerinden anyon aktivitesine bağlanır. Böylece elektrot anyona yanıt veren ikinci tür bir elektrot olur.\n\nAg/AgCl ve kalomel referans elektrotları bu ilkeyle çalışır: iç çözeltideki Cl⁻ aktivitesi sabit tutulduğu için potansiyelleri de sabittir.',
      en: 'An electrode of the first kind (e.g. a silver wire dipped in an Ag⁺ solution) responds to the activity of its own cation. If the metal is coated with a sparingly soluble salt of its ion (AgCl, Hg₂Cl₂), the cation activity in solution is tied to the anion activity through Ksp, and the electrode becomes an electrode of the second kind that responds to the anion.\n\nThe Ag/AgCl and calomel reference electrodes work on this principle: the Cl⁻ activity of the filling solution is held constant, so their potential is constant too.',
    },
    meaning: {
      tr: 'Ag⁺ + e⁻ ⇌ Ag için E = E°(Ag⁺/Ag) − 0,05916·log(1/a_Ag⁺). AgX ile doymuş çözeltide a_Ag⁺ = Ksp / a_X⁻ olduğundan:\nE = E°(Ag⁺/Ag) + 0,05916·log Ksp − 0,05916·log a(X⁻).\n\nİlk iki terimin toplamı, AgX + e⁻ ⇌ Ag + X⁻ yarı tepkimesinin standart potansiyelidir: E°(AgX/Ag) = E°(Ag⁺/Ag) + 0,05916·log Ksp.\n\n• Anyon aktivitesi 10 kat artınca E 59,16 mV azalır; elektrot bir pX ölçeridir: E = sabit + 0,05916·pX.\n• Ksp küçüldükçe E°(AgX/Ag) daha negatif olur (uygulamadaki tablo: AgCl 0,222 V; AgBr 0,071 V; AgI −0,151 V).',
      en: 'For Ag⁺ + e⁻ ⇌ Ag, E = E°(Ag⁺/Ag) − 0.05916·log(1/a_Ag⁺). In a solution saturated with AgX, a_Ag⁺ = Ksp / a_X⁻, so:\nE = E°(Ag⁺/Ag) + 0.05916·log Ksp − 0.05916·log a(X⁻).\n\nThe first two terms together are the standard potential of the half-reaction AgX + e⁻ ⇌ Ag + X⁻: E°(AgX/Ag) = E°(Ag⁺/Ag) + 0.05916·log Ksp.\n\n• A tenfold increase in anion activity lowers E by 59.16 mV; the electrode is a pX sensor: E = constant + 0.05916·pX.\n• The smaller the Ksp, the more negative E°(AgX/Ag) (the app’s table: AgCl 0.222 V; AgBr 0.071 V; AgI −0.151 V).',
    },
    usage: {
      tr: [
        'Ag/AgCl referans elektrodunun potansiyelini ya da bir pCl, pBr, pI gösterge elektrodunun yanıtını hesaplamak.',
        'Ölçülen potansiyelden az çözünen tuzun Ksp değerini bulmak.',
        'Halojenürlerin gümüşle çöktürme titrasyonlarında gösterge elektrodun davranışını anlamak.',
        'Varsayımlar: 25 °C, çözelti AgX ile doygun; yüksek iyonik şiddette derişim yerine aktivite girilmelidir.',
      ],
      en: [
        'Calculating the potential of an Ag/AgCl reference electrode or the response of a pCl, pBr or pI indicator electrode.',
        'Finding the Ksp of a sparingly soluble salt from a measured potential.',
        'Understanding the indicator electrode in precipitation titrations of halides with silver.',
        'Assumptions: 25 °C and a solution saturated with AgX; at high ionic strength, enter activities rather than concentrations.',
      ],
    },
    solution: {
      tr: [
        'Verilen: E°(Ag⁺/Ag) = 0,799 V, Ksp = 1,0 × 10⁻¹⁰, a(X⁻) = 1 M.',
        '0,05916 × log(1,0 × 10⁻¹⁰) = 0,05916 × (−10) = −0,5916 V; a(X⁻) = 1 olduğundan son terim sıfırdır.',
        'Sonuç: E = 0,799 V − 0,5916 V = 0,2074 V. Gerçek Ksp(AgCl) ≈ 1,8 × 10⁻¹⁰ kullanılırsa 0,223 V bulunur; bu, tablodaki E°(AgCl/Ag) = 0,222 V ile uyumludur.',
      ],
      en: [
        'Given: E°(Ag⁺/Ag) = 0.799 V, Ksp = 1.0 × 10⁻¹⁰, a(X⁻) = 1 M.',
        '0.05916 × log(1.0 × 10⁻¹⁰) = 0.05916 × (−10) = −0.5916 V; since a(X⁻) = 1, the last term is zero.',
        'Result: E = 0.799 V − 0.5916 V = 0.2074 V. With the actual Ksp(AgCl) ≈ 1.8 × 10⁻¹⁰ one gets 0.223 V, in line with the tabulated E°(AgCl/Ag) = 0.222 V.',
      ],
    },
    mistakes: {
      tr: [
        'log Ksp teriminin negatif olduğunu gözden kaçırmak: Ksp < 1 olduğundan E, E°(Ag⁺/Ag)’nin altındadır.',
        'Anyon aktivitesi arttıkça potansiyelin arttığını sanmak; aslında azalır.',
        'Derişimi aktivite yerine kullanmak (derişik KCl’de fark büyüktür).',
      ],
      en: [
        'Overlooking that the log Ksp term is negative: since Ksp < 1, E lies below E°(Ag⁺/Ag).',
        'Thinking the potential rises with anion activity; it falls.',
        'Using concentration in place of activity (the difference is large in concentrated KCl).',
      ],
    },
    related: ['nernst', 'reference-conversion', 'table-ksp', 'curve-precipitation'],
  },

  'glass-electrode-ph': {
    concept: {
      tr: 'Cam elektrot, ince ve özel bileşimli bir cam zarın iki yüzü arasında oluşan potansiyel farkı yoluyla H⁺ aktivitesine yanıt verir. Zarın hidratlaşmış yüzey katmanlarında H⁺ ile camdaki tek değerlikli katyonlar arasında iyon değişimi olur. İç yüzey pH’ı sabit iç çözeltiye, dış yüzey numuneye değdiğinden, ölçülen potansiyel numunenin pH’ına bağlıdır. Elektrot genellikle bir iç Ag/AgCl elektrodu ve dış referansla birlikte, kombine elektrot olarak kullanılır.\n\nAsimetri potansiyeli, sıvı temas potansiyeli ve referans potansiyellerinin toplamı (k) önceden hesaplanamaz. Bu yüzden pH işlemsel olarak tanımlanır: önce pH’ı bilinen standart tamponla, sonra numuneyle ölçüm yapılır ve fark kullanılır.',
      en: 'The glass electrode responds to H⁺ activity through the potential difference across a thin membrane of special glass. In the hydrated surface layers of the membrane, H⁺ exchanges with the singly charged cations of the glass. The inner surface faces an internal solution of fixed pH and the outer surface faces the sample, so the measured potential depends on the sample pH. The electrode is usually built together with an internal Ag/AgCl electrode and an external reference as a combination electrode.\n\nThe sum of the asymmetry potential, the liquid-junction potential and the reference potentials (k) cannot be calculated in advance. pH is therefore defined operationally: measure first in a standard buffer of known pH, then in the sample, and use the difference.',
    },
    meaning: {
      tr: 'Hücre E = k − S·pH şeklinde bağlıdır; S = 2,303·RT/F (25 °C’de 59,16 mV/pH). Tampon için E_s = k − S·pH_s, numune için Eₓ = k − S·pHₓ yazılıp farkı alınınca k düşer:\npHₓ = pH_s + (E_s − Eₓ) / S.\n\n• Potansiyeldeki 1 mV hata yaklaşık 0,017 pH birimine karşılık gelir.\n• Gerçek elektrodun eğimi teorik değerden biraz düşük olabilir; pratikte en az iki tamponla kalibrasyon yapılır ve numunenin pH’ını aralarına alan tamponlar seçilir.\n• Alkali (sodyum) hatası: çok bazik ve Na⁺ derişimi yüksek çözeltilerde cam Na⁺’ya da yanıt verir; okunan pH gerçek değerden düşüktür.\n• Asit hatası: çok asidik çözeltilerde (yaklaşık pH 0,5’in altında) okunan pH gerçek değerden yüksektir.\n• Tampon ile numunenin iyonik şiddeti çok farklıysa sıvı temas potansiyeli değişir ve kalibrasyon bu farkı yakalayamaz.',
      en: 'The cell is wired as E = k − S·pH, where S = 2.303·RT/F (59.16 mV per pH unit at 25 °C). Writing E_s = k − S·pH_s for the buffer and Eₓ = k − S·pHₓ for the sample and subtracting eliminates k:\npHₓ = pH_s + (E_s − Eₓ) / S.\n\n• An error of 1 mV corresponds to about 0.017 pH unit.\n• A real electrode can have a slope slightly below the theoretical value; in practice it is calibrated with at least two buffers that bracket the sample pH.\n• Alkaline (sodium) error: in very basic solutions with high Na⁺, the glass also responds to Na⁺ and the reading is lower than the true pH.\n• Acid error: in very acidic solutions (below about pH 0.5) the reading is higher than the true pH.\n• If buffer and sample differ greatly in ionic strength, the liquid-junction potential changes and calibration cannot correct for it.',
    },
    usage: {
      tr: [
        'Tek tamponla kalibre edilmiş bir pH metrenin mV okumasından numune pH’ını hesaplamak.',
        'Tersinden, belirli bir pH için beklenen potansiyeli bulmak.',
        'Tampon ve numune aynı sıcaklıkta olmalıdır; araç eğimi girilen sıcaklıktan hesaplar.',
        'Ölçüm aralığı alkali ve asit hatalarının görülmediği bölgeyle sınırlıdır.',
      ],
      en: [
        'Calculating sample pH from the mV readings of a meter calibrated with one buffer.',
        'Conversely, finding the potential expected for a given pH.',
        'Buffer and sample must be at the same temperature; the tool computes the slope from the temperature entered.',
        'The usable range is limited to the region free of alkaline and acid errors.',
      ],
    },
    solution: {
      tr: [
        'Verilen: pH_s = 7,00, E_s = 50,0 mV, Eₓ = −68,3 mV, T = 25 °C.',
        'S = 2,303·RT/F = 59,16 mV/pH; E_s − Eₓ = 50,0 − (−68,3) = 118,3 mV.',
        'ΔpH = 118,3 mV / 59,16 mV = 2,000.',
        'Sonuç: pHₓ = 7,00 + 2,00 = 9,00 (hesap makinesi 9 gösterir).',
      ],
      en: [
        'Given: pH_s = 7.00, E_s = 50.0 mV, Eₓ = −68.3 mV, T = 25 °C.',
        'S = 2.303·RT/F = 59.16 mV/pH; E_s − Eₓ = 50.0 − (−68.3) = 118.3 mV.',
        'ΔpH = 118.3 mV / 59.16 mV = 2.000.',
        'Result: pHₓ = 7.00 + 2.00 = 9.00 (the calculator shows 9).',
      ],
    },
    mistakes: {
      tr: [
        'Farkı ters almak: bu bağlantıda pH arttıkça E azalır, bu yüzden Eₓ < E_s ise numune daha baziktir.',
        'Tampon ve numunenin sıcaklık farkını göz ardı etmek; hem eğim hem tampon pH’ı sıcaklıkla değişir.',
        'Kalibrasyon aralığının çok dışındaki ya da çok bazik/asidik numunelerde okunan değere güvenmek.',
      ],
      en: [
        'Taking the difference the wrong way round: in this wiring E falls as pH rises, so Eₓ < E_s means a more basic sample.',
        'Ignoring a temperature difference between buffer and sample; both the slope and the buffer pH change with temperature.',
        'Trusting readings far outside the calibration range or in very basic or acidic samples.',
      ],
    },
    related: ['nikolsky', 'potentiometry-error', 'ph-converter', 'reference-conversion'],
  },

  nikolsky: {
    concept: {
      tr: 'İyon seçici elektrotlar (İSE), bir zar boyunca oluşan potansiyel yoluyla belirli bir iyonun aktivitesine yanıt verir: cam zarlar (H⁺, Na⁺), kristal zarlar (ör. F⁻ için LaF₃) ve iyonofor içeren polimer zarlar (ör. K⁺, Ca²⁺) bu gruptadır. Hiçbir zar tam seçici değildir; benzer yük ve büyüklükteki iyonlar da potansiyele katkı yapar.\n\nNikolsky–Eisenman eşitliği bu katkıyı seçicilik katsayısıyla hesaba katar ve bir girişim iyonunun ne kadar hataya yol açacağını tahmin etmeyi sağlar.',
      en: 'Ion-selective electrodes (ISEs) respond to the activity of a particular ion through the potential across a membrane: glass membranes (H⁺, Na⁺), crystalline membranes (e.g. LaF₃ for F⁻) and ionophore-containing polymer membranes (e.g. K⁺, Ca²⁺). No membrane is perfectly selective; ions of similar charge and size also contribute to the potential.\n\nThe Nikolsky–Eisenman equation accounts for this contribution through a selectivity coefficient and lets you estimate how much error an interfering ion will cause.',
    },
    meaning: {
      tr: 'E = k + (2,303·RT / z_A·F)·log(a_A + K_A,B·a_B^(z_A/z_B)). Girişim yoksa (K_A,B·a_B = 0) eşitlik sade Nernst yanıtına iner: 25 °C’de dekat başına 59,16/z_A mV.\n\n• K_A,B, elektrodun B iyonuna A’ya göre ne kadar yanıt verdiğini gösterir. K = 0,01, B’nin A’ya göre 100 kat zayıf algılandığı anlamına gelir; küçük K iyi seçicilik demektir.\n• a_B^(z_A/z_B) üssü, farklı yüklü iyonların katkısını aynı ölçeğe getirir.\n• Anyon elektrotlarında z_A negatiftir; eğim de negatif olur.\n• k; referans elektrotları, iç çözeltiyi ve sıvı temas potansiyelini içerir ve kalibrasyonla bulunur.\n• K·a_B, a_A’ya göre ihmal edilebilecek kadar küçük değilse analit aktivitesi olduğundan büyük bulunur.',
      en: 'E = k + (2.303·RT / z_A·F)·log(a_A + K_A,B·a_B^(z_A/z_B)). Without interference (K_A,B·a_B = 0) it reduces to a plain Nernstian response: 59.16/z_A mV per decade at 25 °C.\n\n• K_A,B shows how strongly the electrode responds to B relative to A. K = 0.01 means B is sensed 100 times more weakly than A; a small K means good selectivity.\n• The exponent in a_B^(z_A/z_B) puts ions of different charge on the same scale.\n• For anion electrodes z_A is negative, and so is the slope.\n• k contains the reference electrodes, the internal solution and the liquid-junction potential, and is found by calibration.\n• If K·a_B is not negligible compared with a_A, the analyte activity is overestimated.',
    },
    usage: {
      tr: [
        'Bir girişim iyonunun belirli bir derişimde yaratacağı hatayı önceden tahmin etmek.',
        'Ölçülen potansiyelden, girişimi düzelterek analit aktivitesini hesaplamak.',
        'Elektrot ölçümü derişim değil aktivite verir; standart ve numunelerin iyonik şiddeti bir iyonik şiddet ayarlayıcıyla (ör. florür tayininde TISAB) eşitlenir.',
        'Seçicilik katsayısı ölçüm yöntemine ve derişime bağlıdır; literatür değerleri yaklaşık kabul edilmelidir.',
      ],
      en: [
        'Estimating beforehand the error an interfering ion will cause at a given level.',
        'Calculating the analyte activity from a measured potential with the interference corrected.',
        'The electrode measures activity, not concentration; standards and samples are brought to the same ionic strength with an ionic strength adjuster (e.g. TISAB for fluoride).',
        'Selectivity coefficients depend on how and at what levels they were measured; treat literature values as approximate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: k = 100 mV, z_A = z_B = 1, a_A = 1,0 × 10⁻³ M, K_A,B = 0,01, a_B = 0,010 M, T = 25 °C.',
        'a_A + K_A,B·a_B = 1,0 × 10⁻³ + 0,01 × 0,010 = 1,1 × 10⁻³; log(1,1 × 10⁻³) = −2,9586.',
        '(59,16 mV / 1) × (−2,9586) = −175,03 mV.',
        'Sonuç: E = 100 mV − 175,03 mV = -75,03 mV. Girişim olmasaydı −77,48 mV okunurdu; aradaki 2,45 mV, analit aktivitesinde %10’luk pozitif hataya karşılık gelir.',
      ],
      en: [
        'Given: k = 100 mV, z_A = z_B = 1, a_A = 1.0 × 10⁻³ M, K_A,B = 0.01, a_B = 0.010 M, T = 25 °C.',
        'a_A + K_A,B·a_B = 1.0 × 10⁻³ + 0.01 × 0.010 = 1.1 × 10⁻³; log(1.1 × 10⁻³) = −2.9586.',
        '(59.16 mV / 1) × (−2.9586) = −175.03 mV.',
        'Result: E = 100 mV − 175.03 mV = -75.03 mV. Without the interferent the reading would be −77.48 mV; the 2.45 mV difference corresponds to a 10% positive error in the analyte activity.',
      ],
    },
    mistakes: {
      tr: [
        'Seçicilik katsayısını ters yorumlamak: büyük K_A,B kötü seçicilik demektir.',
        'Anyon elektrotlarında z_A’yı pozitif girmek.',
        'Farklı yüklü iyonlarda a_B’nin üssünü (z_A/z_B) unutmak.',
      ],
      en: [
        'Reading the selectivity coefficient backwards: a large K_A,B means poor selectivity.',
        'Entering a positive z_A for an anion electrode.',
        'Forgetting the exponent (z_A/z_B) on a_B for ions of different charge.',
      ],
    },
    related: ['glass-electrode-ph', 'potentiometry-error', 'activity', 'selectivity-coefficient'],
  },

  'potentiometry-error': {
    concept: {
      tr: 'Doğrudan potansiyometride derişim, ölçülen potansiyelin logaritmik bir fonksiyonundan geri hesaplanır. Bu logaritmik ilişki nedeniyle potansiyeldeki küçük bir mutlak hata, derişimde sabit bir bağıl hataya dönüşür.\n\nKalibrasyon ile numune arasında sıvı temas potansiyelinin birkaç milivolt değişebilmesi, doğrudan potansiyometrinin doğruluğunu sınırlayan başlıca etkendir.',
      en: 'In direct potentiometry the concentration is back-calculated from a logarithmic function of the measured potential. Because of this logarithmic relation, a small absolute error in potential turns into a constant relative error in concentration.\n\nThe fact that the liquid-junction potential can shift by a few millivolts between calibration and sample is the main factor limiting the accuracy of direct potentiometry.',
    },
    meaning: {
      tr: 'Nernst eşitliği E = k + (RT/nF)·ln a şeklindedir. Potansiyel ΔE kadar hatalı okunursa bulunan aktivite a₂ = a₁·exp(nFΔE/RT) olur. Bağıl hata: (a₂ − a₁)/a₁ = exp(nFΔE/RT) − 1.\n\nKüçük ΔE için exp(x) − 1 ≈ x olduğundan 25 °C’de bağıl hata ≈ %3,9 × n × ΔE(mV).\n\n• Hata, derişimin büyüklüğünden bağımsızdır: 10⁻² M’de de 10⁻⁶ M’de de aynıdır.\n• İki değerlikli iyonda aynı 1 mV hata yaklaşık %8 hataya yol açar.\n• Doğrudan potansiyometrinin bağıl doğruluğu bu yüzden birkaç yüzde düzeyindedir; daha iyi doğruluk için yalnızca dönüm noktasının yerine bakan potansiyometrik titrasyon tercih edilir.',
      en: 'The Nernst equation reads E = k + (RT/nF)·ln a. If the potential is off by ΔE, the activity found is a₂ = a₁·exp(nFΔE/RT). The relative error is (a₂ − a₁)/a₁ = exp(nFΔE/RT) − 1.\n\nFor small ΔE, exp(x) − 1 ≈ x, so at 25 °C the relative error ≈ 3.9% × n × ΔE(mV).\n\n• The error does not depend on the concentration level: it is the same at 10⁻² M and at 10⁻⁶ M.\n• For a doubly charged ion the same 1 mV gives about 8%.\n• Direct potentiometry is therefore accurate only to a few percent; for better accuracy, potentiometric titration, which only locates the end point, is preferred.',
    },
    usage: {
      tr: [
        'Bir İSE ya da pH ölçümünün beklenen doğruluğunu tahmin etmek.',
        'Belirli bir bağıl hata hedefi için potansiyelin ne kadar kararlı olması gerektiğini bulmak.',
        'Tek ve çok değerlikli iyonlar için doğrudan potansiyometrinin uygunluğunu karşılaştırmak.',
      ],
      en: [
        'Estimating the expected accuracy of an ISE or pH measurement.',
        'Finding how stable the potential must be for a target relative error.',
        'Comparing how suitable direct potentiometry is for singly and multiply charged ions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n = 1, ΔE = 1 mV = 0,001 V, T = 25 °C (298,15 K).',
        'nFΔE/RT = (1 × 96 485 × 0,001) / (8,314 × 298,15) = 0,03892.',
        'exp(0,03892) − 1 = 0,03969.',
        'Sonuç: bağıl hata = %3,969 (yaklaşık %4).',
      ],
      en: [
        'Given: n = 1, ΔE = 1 mV = 0.001 V, T = 25 °C (298.15 K).',
        'nFΔE/RT = (1 × 96 485 × 0.001) / (8.314 × 298.15) = 0.03892.',
        'exp(0.03892) − 1 = 0.03969.',
        'Result: relative error = 3.969% (about 4%).',
      ],
    },
    mistakes: {
      tr: [
        'İyon yükünü hesaba katmamak; hata n ile yaklaşık doğru orantılı artar.',
        'Hatanın düşük derişimlerde daha büyük olduğunu sanmak; bağıl hata derişimden bağımsızdır.',
        'Büyük ΔE için doğrusal yaklaşımı kullanmak: 10 mV’de üstel ifade yaklaşık %48, doğrusal yaklaşım %39 verir.',
      ],
      en: [
        'Ignoring the ion charge; the error grows roughly in proportion to n.',
        'Assuming the error is larger at low concentrations; the relative error does not depend on concentration.',
        'Using the linear approximation for large ΔE: at 10 mV the exponential gives about 48%, the linear form 39%.',
      ],
    },
    related: ['nikolsky', 'glass-electrode-ph', 'derivative-endpoint', 'propagation'],
  },

  'faraday-moles': {
    concept: {
      tr: 'Faraday yasasına göre bir elektrot tepkimesinde dönüşen madde miktarı, geçen yük ile doğru orantılıdır. Kulometri bu ilkeye dayanır: yük doğru ölçülürse ve akımın tamamı istenen tepkimeye harcanırsa (%100 akım verimi), madde miktarı hiçbir kalibrasyon gerekmeden yalnızca temel sabitlerden bulunur.\n\nBu nedenle kulometri, standarda ihtiyaç duymayan mutlak bir yöntem olarak kabul edilir.',
      en: 'By Faraday’s law, the amount of substance converted in an electrode reaction is directly proportional to the charge passed. Coulometry is built on this: if the charge is measured accurately and all of the current goes into the desired reaction (100% current efficiency), the amount is obtained from fundamental constants alone, without calibration.\n\nCoulometry is therefore regarded as an absolute method that needs no standard.',
    },
    meaning: {
      tr: 'Bir mol elektronun yükü Faraday sabitidir: F = N_A·e = 96 485 C/mol. Bir tanecik başına n elektron aktarılıyorsa N mol madde için Q = n·N·F yük gerekir; buradan N = Q / (n·F).\n\n• Sabit akımda Q = i·t; değişken akımda Q = ∫i dt. Kontrollü potansiyel kulometrisinde akım zamanla üstel olarak azalır ve yük integralle bulunur.\n• Birim kontrolü: C ÷ (C/mol) = mol; araç sonucu mmol olarak gösterir.\n• Akım verimi %100 değilse (çözücünün elektrolizi, yan tepkimeler) madde miktarı olduğundan fazla hesaplanır.',
      en: 'The charge of one mole of electrons is the Faraday constant: F = N_A·e = 96 485 C/mol. If n electrons are transferred per particle, N moles require Q = n·N·F, hence N = Q / (n·F).\n\n• At constant current Q = i·t; with varying current Q = ∫i dt. In controlled-potential coulometry the current decays exponentially and the charge is found by integration.\n• Unit check: C ÷ (C/mol) = mol; the tool shows the result in mmol.\n• If current efficiency is below 100% (solvent electrolysis, side reactions), the amount is overestimated.',
    },
    usage: {
      tr: [
        'Kontrollü potansiyel kulometrisinde ölçülen yükten analit miktarını bulmak.',
        'Kulometrik titrasyonlarda elektrotta üretilen titrantın (ör. Br₂, I₂, OH⁻, Ag⁺) miktarını hesaplamak; kulometrik Karl Fischer su tayini de bu ilkeye dayanır.',
        'Tersinden, belirli bir madde miktarını dönüştürmek için gereken yükü bulmak: Q = N·n·F.',
      ],
      en: [
        'Finding the amount of analyte from the charge measured in controlled-potential coulometry.',
        'Calculating the amount of titrant generated at the electrode in coulometric titrations (e.g. Br₂, I₂, OH⁻, Ag⁺); coulometric Karl Fischer water determination works the same way.',
        'Conversely, finding the charge needed to convert a given amount: Q = N·n·F.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Q = 96,4853 C, n = 1.',
        'N = Q / (n·F) = 96,4853 C / (1 × 96 485 C/mol) = 1,000 × 10⁻³ mol.',
        'Sonuç: N = 1,000 mmol (1 mmol); F’nin binde biri kadar yük, tek elektronlu bir tepkimede 1 mmol madde dönüştürür.',
      ],
      en: [
        'Given: Q = 96.4853 C, n = 1.',
        'N = Q / (n·F) = 96.4853 C / (1 × 96 485 C/mol) = 1.000 × 10⁻³ mol.',
        'Result: N = 1.000 mmol (1 mmol); one thousandth of F converts 1 mmol in a one-electron reaction.',
      ],
    },
    mistakes: {
      tr: [
        'n’yi atlamak ya da yanlış almak (Cu²⁺ → Cu için n = 2).',
        'Q = i·t hesabında süreyi dakika olarak kullanmak; saniye gerekir.',
        'Akım veriminin %100 olduğunu sorgulamadan kabul etmek.',
      ],
      en: [
        'Omitting n or taking it wrongly (n = 2 for Cu²⁺ → Cu).',
        'Using minutes in Q = i·t; seconds are needed.',
        'Assuming 100% current efficiency without checking it.',
      ],
    },
    related: ['coulometry-mass', 'moles', 'titration-stoich'],
  },

  'coulometry-mass': {
    concept: {
      tr: 'Sabit akımla yapılan elektrolizde geçen yük, akım ile sürenin çarpımıdır. Faraday yasası bu yükü elektrotta indirgenen ya da yükseltgenen madde miktarına, molar kütle de bu miktarı kütleye bağlar.\n\nElektrogravimetride (ör. Cu’nun platin katot üzerinde biriktirilip tartılması) ve sabit akımlı kulometrik titrasyonlarda bu hesap kullanılır.',
      en: 'In electrolysis at constant current, the charge passed is current times time. Faraday’s law relates this charge to the amount reduced or oxidised at the electrode, and the molar mass converts that amount into mass.\n\nThis calculation is used in electrogravimetry (e.g. depositing Cu on a platinum cathode and weighing it) and in constant-current coulometric titrations.',
    },
    meaning: {
      tr: 'm = Q·M / (n·F) = i·t·M / (n·F). i amper ve t saniye olarak girilince Q coulomb, M g/mol olarak girilince m gram çıkar. Araç akımı mA, kütleyi mg cinsinden gösterir.\n\n• n, bir iyonun dönüşümü için gereken elektron sayısıdır (Cu²⁺ + 2e⁻ → Cu için 2).\n• Sabit akımda katot potansiyeli zamanla negatife kayar. Potansiyel başka bir türün indirgenme bölgesine ulaşırsa (ör. H₂ çıkışı) akım verimi düşer. Bu yüzden sabit akımlı elektrogravimetri seçici değildir; seçicilik için kontrollü potansiyel kullanılır.\n• Kulometrik titrasyonda akım ve süre ölçülür; dönüm noktası bir indikatörle ya da elektrokimyasal olarak saptanır.',
      en: 'm = Q·M / (n·F) = i·t·M / (n·F). With i in amperes and t in seconds, Q is in coulombs; with M in g/mol, m comes out in grams. The tool shows current in mA and mass in mg.\n\n• n is the number of electrons needed to convert one ion (2 for Cu²⁺ + 2e⁻ → Cu).\n• At constant current the cathode potential drifts negative with time. If it reaches the reduction region of another species (e.g. H₂ evolution), the current efficiency drops. Constant-current electrogravimetry is therefore not selective; controlled potential is used when selectivity is needed.\n• In a coulometric titration, current and time are measured and the end point is detected with an indicator or electrochemically.',
    },
    usage: {
      tr: [
        'Belirli bir akım ve sürede biriken metal kütlesini öngörmek.',
        'Tersinden, istenen kütleyi biriktirmek için gereken süreyi ya da akımı bulmak.',
        'Kulometrik titrasyonda üretilen titrant miktarından analit kütlesini hesaplamak.',
        'Varsayım: %100 akım verimi ve tek bir elektrot tepkimesi.',
      ],
      en: [
        'Predicting the mass of metal deposited at a given current and time.',
        'Conversely, finding the time or current needed to deposit a desired mass.',
        'Calculating the analyte mass from the titrant generated in a coulometric titration.',
        'Assumption: 100% current efficiency and a single electrode reaction.',
      ],
    },
    solution: {
      tr: [
        'Verilen: i = 100 mA = 0,100 A, t = 600 s (10 dk), M(Cu) = 63,546 g/mol, n = 2.',
        'Q = i·t = 0,100 A × 600 s = 60,0 C.',
        'N(Cu) = Q / (n·F) = 60,0 C / (2 × 96 485 C/mol) = 3,109 × 10⁻⁴ mol.',
        'Sonuç: m = 3,109 × 10⁻⁴ mol × 63,546 g/mol = 0,01976 g = 19,76 mg Cu.',
      ],
      en: [
        'Given: i = 100 mA = 0.100 A, t = 600 s (10 min), M(Cu) = 63.546 g/mol, n = 2.',
        'Q = i·t = 0.100 A × 600 s = 60.0 C.',
        'N(Cu) = Q / (n·F) = 60.0 C / (2 × 96 485 C/mol) = 3.109 × 10⁻⁴ mol.',
        'Result: m = 3.109 × 10⁻⁴ mol × 63.546 g/mol = 0.01976 g = 19.76 mg Cu.',
      ],
    },
    mistakes: {
      tr: [
        'Süreyi dakika, akımı mA olarak doğrudan formüle koymak (birimler A ve s olmalı).',
        'n’yi unutmak ya da 1 almak; iki değerlikli iyonlarda kütle iki kat büyük çıkar.',
        'Yan tepkimeleri (H₂ çıkışı) göz ardı edip hesaplanan kütlenin mutlaka biriktiğini varsaymak.',
      ],
      en: [
        'Putting time in minutes or current in mA straight into the formula (A and s are required).',
        'Forgetting n or taking it as 1; for divalent ions the mass comes out twice too large.',
        'Ignoring side reactions (H₂ evolution) and assuming the calculated mass must deposit.',
      ],
    },
    related: ['faraday-moles', 'grav-percent', 'molar-mass'],
  },

  ilkovic: {
    concept: {
      tr: 'Polarografide çalışma elektrodu damlayan cıva elektrodudur: ince bir kılcaldan çıkan cıva damlaları düzenli aralıklarla büyüyüp kopar ve her damla temiz, yenilenen bir yüzey sağlar. Potansiyel analitin indirgendiği bölgeye getirildiğinde akım, analitin elektrot yüzeyine difüzyonla ulaşma hızıyla sınırlanır ve bir plato oluşur.\n\nBu platodaki sınır akımından artık akım çıkarılınca kalan difüzyon akımı (i_d), analit derişimiyle doğru orantılıdır. Ilkovič eşitliği bu orantıyı elektrot ve madde özelliklerine bağlar.',
      en: 'In polarography the working electrode is the dropping mercury electrode: mercury drops issuing from a fine capillary grow and fall at regular intervals, each providing a clean, renewed surface. When the potential reaches the region where the analyte is reduced, the current is limited by the rate at which the analyte diffuses to the electrode surface, and a plateau forms.\n\nThe limiting current on this plateau minus the residual current is the diffusion current (i_d), which is directly proportional to the analyte concentration. The Ilkovič equation links this proportionality to properties of the electrode and the analyte.',
    },
    meaning: {
      tr: 'Eşitlik, büyüyen küresel bir damlaya difüzyon problemi çözülerek elde edilir: i_d = 708·n·D^½·m^⅔·t^⅙·C.\n\n• Birimler: i_d µA, D cm²/s, m (cıva akış hızı) mg/s, t (damla ömrü) s, C mmol/L.\n• 708 katsayısı damla ömrünün sonundaki en büyük akım içindir; damla ömrü boyunca ortalama akım için 607 kullanılır.\n• n, D, m ve t sabit tutulduğunda i_d = k·C olur. m^⅔·t^⅙ terimi kılcala özgü olduğundan nicel analizde aynı kılcalla kalibrasyon ya da standart ekleme yapılır.\n• Göç akımını bastırmak için yüksek derişimde destek elektrolit eklenir; çözünmüş O₂ indirgendiği için çözelti ölçümden önce N₂ ile süpürülür.',
      en: 'The equation follows from solving the diffusion problem for a growing spherical drop: i_d = 708·n·D^½·m^⅔·t^⅙·C.\n\n• Units: i_d in µA, D in cm²/s, m (mercury flow rate) in mg/s, t (drop time) in s, C in mmol/L.\n• The coefficient 708 is for the maximum current at the end of the drop life; for the current averaged over the drop life use 607.\n• With n, D, m and t held constant, i_d = k·C. Since the m^⅔·t^⅙ term is specific to the capillary, quantitative work uses calibration or standard addition with the same capillary.\n• A supporting electrolyte at high concentration suppresses the migration current; dissolved O₂ is reducible, so the solution is purged with N₂ before measurement.',
    },
    usage: {
      tr: [
        'Belirli derişimde beklenen difüzyon akımını hesaplamak.',
        'Ölçülen difüzyon akımından derişimi ya da bilinen derişimden difüzyon katsayısını tahmin etmek.',
        'Farklı kılcallarla elde edilen sonuçları karşılaştırmak (m^⅔·t^⅙ terimi üzerinden).',
        'Yalnızca difüzyon kontrollü akımlar için geçerlidir; kinetik ya da adsorpsiyon akımlarında uygulanmaz.',
      ],
      en: [
        'Calculating the diffusion current expected at a given concentration.',
        'Estimating concentration from a measured diffusion current, or the diffusion coefficient from a known concentration.',
        'Comparing results obtained with different capillaries (through the m^⅔·t^⅙ term).',
        'Valid only for diffusion-controlled currents; it does not apply to kinetic or adsorption currents.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n = 2, D = 7,2 × 10⁻⁶ cm²/s, m = 2,0 mg/s, t = 4 s, C = 1 mM.',
        'D^½ = 2,683 × 10⁻³; m^⅔ = 2,0^⅔ = 1,587; t^⅙ = 4^⅙ = 1,260.',
        'i_d = 708 × 2 × 2,683 × 10⁻³ × 1,587 × 1,260 × 1.',
        'Sonuç: i_d = 7,599 µA.',
      ],
      en: [
        'Given: n = 2, D = 7.2 × 10⁻⁶ cm²/s, m = 2.0 mg/s, t = 4 s, C = 1 mM.',
        'D^½ = 2.683 × 10⁻³; m^⅔ = 2.0^⅔ = 1.587; t^⅙ = 4^⅙ = 1.260.',
        'i_d = 708 × 2 × 2.683 × 10⁻³ × 1.587 × 1.260 × 1.',
        'Result: i_d = 7.599 µA.',
      ],
    },
    mistakes: {
      tr: [
        'Derişimi mol/L olarak girmek; 708 katsayısı mmol/L ile µA verir (1000 kat hata).',
        'En büyük akım (708) ile ortalama akım (607) katsayılarını karıştırmak.',
        'Artık akımı çıkarmadan sınır akımını difüzyon akımı olarak almak.',
      ],
      en: [
        'Entering the concentration in mol/L; the coefficient 708 gives µA with mmol/L (a factor of 1000).',
        'Mixing up the maximum-current (708) and average-current (607) coefficients.',
        'Taking the limiting current as the diffusion current without subtracting the residual current.',
      ],
    },
    related: ['heyrovsky-ilkovic', 'randles-sevcik', 'linear-regression', 'std-addition-single'],
  },

  'heyrovsky-ilkovic': {
    concept: {
      tr: 'Polarogram, akımın potansiyelle S biçiminde arttığı bir dalgadır: başta yalnızca küçük bir artık akım akar, potansiyel analitin indirgenme bölgesine geldiğinde akım hızla artar ve sonunda difüzyonla sınırlanan i_d platosuna ulaşır.\n\nAkımın tam yarısına (i = i_d/2) karşılık gelen potansiyel yarı dalga potansiyelidir (E½). E½ belirli bir destek elektrolitte maddeye özgüdür ve derişimden bağımsızdır; bu nedenle nitel tanımada kullanılır.',
      en: 'A polarogram is an S-shaped wave of current versus potential: at first only a small residual current flows; when the potential reaches the reduction region of the analyte the current rises steeply and finally levels off at the diffusion-limited plateau i_d.\n\nThe potential at which the current is exactly half the plateau (i = i_d/2) is the half-wave potential (E½). In a given supporting electrolyte, E½ is characteristic of the species and independent of its concentration, so it is used for identification.',
    },
    meaning: {
      tr: 'Tersinir bir indirgenmede elektrot yüzeyi her an Nernst dengesindedir. Yüzeydeki derişimler akımla ilişkilidir: [Ox]₀ ∝ (i_d − i) ve [Red]₀ ∝ i. Bunlar Nernst eşitliğine konunca:\nE = E½ − (0,05916/n)·log[i / (i_d − i)].\n\n• i = i_d/2 olduğunda log terimi sıfırdır ve E = E½ olur.\n• E½, formal potansiyele çok yakındır; aradaki küçük fark yükseltgenmiş ve indirgenmiş türlerin difüzyon katsayılarının farklı olmasından gelir.\n• E’ye karşı log[i/(i_d − i)] grafiği eğimi −0,05916/n V olan bir doğrudur. Bu grafik hem n’yi verir hem de tersinirliği sınar: eğim teorik değerden belirgin büyükse süreç tersinmezdir.\n• Potansiyel E½’den daha negatife gittikçe i, i_d’ye yaklaşır.',
      en: 'For a reversible reduction the electrode surface is at Nernstian equilibrium at every moment. The surface concentrations are linked to the current: [Ox]₀ ∝ (i_d − i) and [Red]₀ ∝ i. Substituting into the Nernst equation gives:\nE = E½ − (0.05916/n)·log[i / (i_d − i)].\n\n• At i = i_d/2 the log term is zero and E = E½.\n• E½ is very close to the formal potential; the small difference comes from the different diffusion coefficients of the oxidised and reduced forms.\n• A plot of E against log[i/(i_d − i)] is a straight line of slope −0.05916/n V. It gives n and tests reversibility: a slope clearly larger than the theoretical value indicates an irreversible process.\n• As the potential moves negative of E½, i approaches i_d.',
    },
    usage: {
      tr: [
        'Dalganın herhangi bir noktasındaki akımı ya da potansiyeli hesaplamak.',
        'Deneysel noktalardan E½ ve n’yi bulmak, tersinirliği sınamak.',
        'Yakın E½ değerli iki maddenin dalgalarının ayrılıp ayrılamayacağını değerlendirmek.',
        'Varsayımlar: 25 °C, tersinir indirgenme; E½ değerleri genellikle SCE’ye göre verilir.',
      ],
      en: [
        'Calculating the current or potential at any point on the wave.',
        'Finding E½ and n from experimental points and testing reversibility.',
        'Judging whether the waves of two species with close E½ values can be resolved.',
        'Assumptions: 25 °C, reversible reduction; E½ values are usually quoted vs. SCE.',
      ],
    },
    solution: {
      tr: [
        'Verilen: E = −0,620 V, E½ = −0,600 V, n = 2, i_d = 10,0 µA.',
        'Eşitlik i için çözülür: i = i_d / [1 + 10^(n(E − E½)/0,05916)].',
        'n(E − E½)/0,05916 = 2 × (−0,020) / 0,05916 = −0,6761; 10^(−0,6761) = 0,2108.',
        'Sonuç: i = 10,0 µA / 1,2108 = 8,259 µA; potansiyel E½’den 20 mV daha negatif olduğundan akım i_d’nin yarısından büyüktür (%82,6).',
      ],
      en: [
        'Given: E = −0.620 V, E½ = −0.600 V, n = 2, i_d = 10.0 µA.',
        'Solving for i: i = i_d / [1 + 10^(n(E − E½)/0.05916)].',
        'n(E − E½)/0.05916 = 2 × (−0.020) / 0.05916 = −0.6761; 10^(−0.6761) = 0.2108.',
        'Result: i = 10.0 µA / 1.2108 = 8.259 µA; the potential is 20 mV negative of E½, so the current exceeds half of i_d (82.6%).',
      ],
    },
    mistakes: {
      tr: [
        'İşaret yönünü karıştırmak: indirgenme dalgasında daha negatif potansiyel daha büyük akım demektir.',
        'Eşitliği tersinmez dalgalara uygulamak.',
        'E½’yi E° ile aynı kabul etmek ve referans elektrodu belirtmemek.',
      ],
      en: [
        'Getting the direction wrong: for a reduction wave a more negative potential means a larger current.',
        'Applying the equation to irreversible waves.',
        'Equating E½ with E° and not stating the reference electrode.',
      ],
    },
    related: ['ilkovic', 'nernst', 'randles-sevcik'],
  },

  'randles-sevcik': {
    concept: {
      tr: 'Döngüsel voltametride çalışma elektrodunun potansiyeli sabit hızla bir yönde taranır, sonra geri döndürülür ve akım potansiyele karşı kaydedilir. Tersinir bir çiftte ileri taramada indirgenme (ya da yükseltgenme) piki, geri taramada ise oluşan ürünün yeniden dönüşümüne ait karşıt pik görülür.\n\nPik, elektrot yüzeyindeki analitin tükenmesi ile difüzyon tabakasının kalınlaşması arasındaki yarışın sonucudur. Pik akımı Randles–Ševčík eşitliğiyle derişime bağlanır ve voltametrinin nicel temelini oluşturur.',
      en: 'In cyclic voltammetry the potential of the working electrode is swept at a constant rate in one direction and then reversed, while the current is recorded against potential. For a reversible couple, the forward sweep shows a reduction (or oxidation) peak and the reverse sweep the opposite peak for reconversion of the product.\n\nThe peak results from the competition between depletion of analyte at the electrode surface and growth of the diffusion layer. The Randles–Ševčík equation relates the peak current to concentration and is the quantitative basis of voltammetry.',
    },
    meaning: {
      tr: 'i_p = 2,69 × 10⁵ · n^(3/2) · A · D^½ · C · v^½ (25 °C). Sayısal katsayı 0,4463·F^(3/2)/(RT)^½ ifadesinden gelir.\n\n• Birimler: i_p A, A cm², D cm²/s, C mol/cm³, v V/s. 1 mM = 1 × 10⁻⁶ mol/cm³; araç bu dönüşümü kendisi yapar.\n• i_p ∝ √v: pik akımı tarama hızının kareköküyle doğrusal artıyorsa süreç difüzyon kontrollüdür. Elektrot yüzeyine adsorplanmış türlerde ise i_p doğrudan v ile orantılıdır.\n• Tersinir bir çiftte anodik ve katodik pik akımlarının oranı yaklaşık 1’dir ve pik potansiyelleri arasındaki fark 25 °C’de yaklaşık 57–59/n mV’tur (kesin değer ≈ 2,22·RT/nF).\n• Tersinmez ya da yarı tersinir sistemlerde pik akımı farklı bir eşitlikle verilir; bu katsayı yalnızca tersinir sistemler içindir.',
      en: 'i_p = 2.69 × 10⁵ · n^(3/2) · A · D^½ · C · v^½ (25 °C). The numerical coefficient comes from 0.4463·F^(3/2)/(RT)^½.\n\n• Units: i_p in A, A in cm², D in cm²/s, C in mol/cm³, v in V/s. 1 mM = 1 × 10⁻⁶ mol/cm³; the tool does this conversion itself.\n• i_p ∝ √v: if the peak current grows linearly with the square root of scan rate, the process is diffusion controlled. For species adsorbed on the electrode, i_p is proportional to v itself.\n• For a reversible couple the ratio of anodic to cathodic peak currents is about 1 and the peak separation is about 57–59/n mV at 25 °C (rigorously ≈ 2.22·RT/nF).\n• Irreversible or quasi-reversible systems follow a different peak-current expression; this coefficient applies to reversible systems only.',
    },
    usage: {
      tr: [
        'Döngüsel voltamogramdaki pik akımından derişimi ya da difüzyon katsayısını tahmin etmek.',
        'i_p – √v grafiğiyle sürecin difüzyon kontrollü olup olmadığını sınamak.',
        'Bilinen D ve C ile elektrodun etkin (elektroaktif) alanını bulmak.',
        'Pik akımı çift tabaka yüklenmesinden kaynaklanan kapasitif akım çıkarılarak okunmalıdır.',
      ],
      en: [
        'Estimating concentration or diffusion coefficient from the peak current of a cyclic voltammogram.',
        'Testing for diffusion control with a plot of i_p against √v.',
        'Finding the effective (electroactive) area of an electrode from known D and C.',
        'Read the peak current after subtracting the capacitive (double-layer charging) current.',
      ],
    },
    solution: {
      tr: [
        'Verilen: n = 1, A = 0,0707 cm² (3 mm çaplı disk), D = 7,2 × 10⁻⁶ cm²/s, C = 1 mM = 1,0 × 10⁻⁶ mol/cm³, v = 100 mV/s = 0,100 V/s.',
        'D^½ = 2,683 × 10⁻³ cm/s^½; v^½ = 0,3162 (V/s)^½.',
        'i_p = 2,69 × 10⁵ × 1 × 0,0707 × 2,683 × 10⁻³ × 1,0 × 10⁻⁶ × 0,3162 = 1,614 × 10⁻⁵ A.',
        'Sonuç: i_p = 16,14 µA.',
      ],
      en: [
        'Given: n = 1, A = 0.0707 cm² (3 mm diameter disk), D = 7.2 × 10⁻⁶ cm²/s, C = 1 mM = 1.0 × 10⁻⁶ mol/cm³, v = 100 mV/s = 0.100 V/s.',
        'D^½ = 2.683 × 10⁻³ cm/s^½; v^½ = 0.3162 (V/s)^½.',
        'i_p = 2.69 × 10⁵ × 1 × 0.0707 × 2.683 × 10⁻³ × 1.0 × 10⁻⁶ × 0.3162 = 1.614 × 10⁻⁵ A.',
        'Result: i_p = 16.14 µA.',
      ],
    },
    mistakes: {
      tr: [
        'Elle hesaplarken derişimi mol/cm³ yerine mol/L olarak koymak (1000 kat hata).',
        'Tarama hızını mV/s ile doğrudan formüle koymak; V/s gerekir.',
        'n yerine n^(3/2) kullanılması gerektiğini unutmak.',
      ],
      en: [
        'In hand calculations, using mol/L instead of mol/cm³ for concentration (a factor of 1000).',
        'Putting the scan rate into the formula in mV/s; V/s is required.',
        'Forgetting that n enters as n^(3/2).',
      ],
    },
    related: ['ilkovic', 'heyrovsky-ilkovic', 'reference-conversion'],
  },

  conductivity: {
    concept: {
      tr: 'Elektrolit çözeltileri akımı iyonların göçüyle iletir. Ölçülen iletkenlik G (direncin tersi; birimi siemens, S = Ω⁻¹) hem çözeltiye hem de hücrenin geometrisine bağlıdır. Hücreden bağımsız bir çözelti özelliği elde etmek için G, hücre sabitiyle çarpılarak öz iletkenliğe (κ) çevrilir.\n\nİletkenlik ölçümü su saflığının denetiminde, toplam iyon içeriğinin tahmininde, kondüktometrik titrasyonlarda ve iyon kromatografisinde dedektör olarak kullanılır.',
      en: 'Electrolyte solutions carry current by the migration of ions. The measured conductance G (the reciprocal of resistance; unit siemens, S = Ω⁻¹) depends both on the solution and on the geometry of the cell. To obtain a property of the solution alone, G is multiplied by the cell constant to give the conductivity κ.\n\nConductivity measurements are used to check water purity, to estimate total ionic content, in conductometric titrations and as the detector in ion chromatography.',
    },
    meaning: {
      tr: 'Kesit alanı A, uzunluğu l olan bir iletken için R = ρ·l/A ve G = 1/R = κ·A/l yazılır. Buradan κ = G·(l/A); l/A hücre sabitidir (cm⁻¹).\n\n• Hücre sabiti geometriden doğru hesaplanamaz; κ değeri bilinen bir KCl çözeltisi ölçülerek bulunur: l/A = κ(KCl) / G(ölçülen). 0,0100 M KCl’nin öz iletkenliği 25 °C’de 1,413 mS/cm’dir.\n• Ölçüm alternatif akımla yapılır; doğru akım elektrotlarda elektroliz ve polarizasyona yol açar.\n• İletkenlik sıcaklıkla belirgin biçimde artar (seyreltik sulu çözeltilerde °C başına yaklaşık %2); sonuçlar genellikle 25 °C’ye düzeltilerek verilir.',
      en: 'For a conductor of cross-section A and length l, R = ρ·l/A and G = 1/R = κ·A/l. Hence κ = G·(l/A); l/A is the cell constant (cm⁻¹).\n\n• The cell constant cannot be calculated accurately from the geometry; it is found by measuring a KCl solution of known κ: l/A = κ(KCl) / G(measured). The conductivity of 0.0100 M KCl at 25 °C is 1.413 mS/cm.\n• Measurements use alternating current; direct current causes electrolysis and polarisation at the electrodes.\n• Conductivity rises markedly with temperature (about 2% per °C in dilute aqueous solutions); results are usually corrected to 25 °C.',
    },
    usage: {
      tr: [
        'Ölçülen iletkenliği hücreden bağımsız öz iletkenliğe çevirmek.',
        'KCl standardıyla hücre sabitini belirlemek: l/A = κ / G.',
        'Hücre sabiti ölçülecek iletkenlik aralığına göre seçilir: saf su için küçük, derişik çözeltiler için büyük hücre sabiti uygundur.',
      ],
      en: [
        'Converting a measured conductance into the cell-independent conductivity.',
        'Determining the cell constant with a KCl standard: l/A = κ / G.',
        'Choose the cell constant for the range: a small constant for pure water, a large one for concentrated solutions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: G = 1,413 mS, l/A = 1,00 cm⁻¹.',
        'κ = G·(l/A) = 1,413 mS × 1,00 cm⁻¹.',
        'Sonuç: κ = 1,413 mS/cm (1413 µS/cm); bu, 25 °C’de 0,0100 M KCl’nin değeridir, yani hücre sabiti doğrulanmış olur.',
      ],
      en: [
        'Given: G = 1.413 mS, l/A = 1.00 cm⁻¹.',
        'κ = G·(l/A) = 1.413 mS × 1.00 cm⁻¹.',
        'Result: κ = 1.413 mS/cm (1413 µS/cm); this is the value for 0.0100 M KCl at 25 °C, so the cell constant is confirmed.',
      ],
    },
    mistakes: {
      tr: [
        'İletkenlik (G, S) ile öz iletkenliği (κ, S/cm) karıştırmak.',
        'S/m ile S/cm’yi karıştırmak: 1 S/m = 0,01 S/cm.',
        'Sıcaklığı kaydetmemek ya da düzeltmemek.',
      ],
      en: [
        'Confusing conductance (G, S) with conductivity (κ, S/cm).',
        'Mixing up S/m and S/cm: 1 S/m = 0.01 S/cm.',
        'Not recording or correcting for temperature.',
      ],
    },
    related: ['molar-conductivity', 'kohlrausch', 'ionic-strength'],
  },

  'molar-conductivity': {
    concept: {
      tr: 'Öz iletkenlik, çözeltideki iyon sayısıyla birlikte artar. Farklı derişimlerdeki elektrolitleri karşılaştırabilmek için κ derişime bölünür; elde edilen molar iletkenlik (Λ), bir mol elektrolitin iletkenliğe katkısını gösterir.\n\nİdeal davranışta Λ derişimden bağımsız olurdu. Gerçekte iyonlar arası etkileşimler ve zayıf elektrolitlerde eksik iyonlaşma nedeniyle derişim arttıkça Λ azalır.',
      en: 'Conductivity grows with the number of ions in solution. To compare electrolytes at different concentrations, κ is divided by concentration; the resulting molar conductivity (Λ) expresses the contribution of one mole of electrolyte.\n\nFor ideal behaviour Λ would be independent of concentration. In reality it falls as concentration rises, because of interionic interactions and, for weak electrolytes, incomplete ionisation.',
    },
    meaning: {
      tr: 'Tanım Λ = κ / c’dir; burada c mol/cm³ olmalıdır. Derişim mol/L verildiğinde 1 L = 1000 cm³ dönüşümünden 1000 çarpanı gelir: Λ = 1000·κ / C (κ S/cm, C mol/L → Λ S cm²/mol).\n\n• Λ’nın derişime bağlılığı elektrolitin türünü ele verir: kuvvetli elektrolitlerde √C ile yavaş ve doğrusal azalır (Kohlrausch), zayıf elektrolitlerde ise seyreltik bölgede çok hızlı değişir.\n• Zayıf elektrolitlerde iyonlaşma kesri yaklaşık α ≈ Λ / Λ° ile tahmin edilir.\n• SI birimiyle 1 S cm²/mol = 10⁻⁴ S m²/mol.',
      en: 'The definition is Λ = κ / c with c in mol/cm³. When concentration is given in mol/L, the conversion 1 L = 1000 cm³ introduces the factor 1000: Λ = 1000·κ / C (κ in S/cm, C in mol/L → Λ in S cm²/mol).\n\n• How Λ depends on concentration reveals the type of electrolyte: for strong electrolytes it falls slowly and linearly with √C (Kohlrausch); for weak electrolytes it changes very steeply in the dilute region.\n• For weak electrolytes the degree of ionisation is estimated as α ≈ Λ / Λ°.\n• In SI units, 1 S cm²/mol = 10⁻⁴ S m²/mol.',
    },
    usage: {
      tr: [
        'Farklı elektrolitlerin ve derişimlerin iletkenliklerini karşılaştırmak.',
        'Kohlrausch grafiği için veri hazırlamak ve Λ°’a ekstrapolasyon yapmak.',
        'Zayıf elektrolitlerde iyonlaşma kesrini ve buradan iyonlaşma sabitini tahmin etmek.',
      ],
      en: [
        'Comparing the conductivities of different electrolytes and concentrations.',
        'Preparing data for a Kohlrausch plot and extrapolating to Λ°.',
        'Estimating the degree of ionisation, and from it the dissociation constant, of weak electrolytes.',
      ],
    },
    solution: {
      tr: [
        'Verilen: κ = 1,413 mS/cm = 1,413 × 10⁻³ S/cm, C = 0,0100 M (KCl, 25 °C).',
        'Λ = 1000 cm³/L × 1,413 × 10⁻³ S/cm / 0,0100 mol/L.',
        'Sonuç: Λ = 141,3 S cm²/mol; 0,0100 M KCl için literatürde verilen değerdir.',
      ],
      en: [
        'Given: κ = 1.413 mS/cm = 1.413 × 10⁻³ S/cm, C = 0.0100 M (KCl, 25 °C).',
        'Λ = 1000 cm³/L × 1.413 × 10⁻³ S/cm / 0.0100 mol/L.',
        'Result: Λ = 141.3 S cm²/mol, the literature value for 0.0100 M KCl.',
      ],
    },
    mistakes: {
      tr: [
        '1000 çarpanını unutmak (sonuç 1000 kat küçük çıkar).',
        'κ’yı mS/cm olarak bırakıp S cm²/mol sonucu beklemek.',
        'Molar iletkenliği eski eşdeğer iletkenlikle karıştırmak; çok yüklü iyonlarda ikisi farklıdır.',
      ],
      en: [
        'Forgetting the factor 1000 (the result comes out 1000 times too small).',
        'Leaving κ in mS/cm and expecting a result in S cm²/mol.',
        'Confusing molar conductivity with the older equivalent conductivity; they differ for multiply charged ions.',
      ],
    },
    related: ['conductivity', 'kohlrausch', 'molarity'],
  },

  kohlrausch: {
    concept: {
      tr: 'Kohlrausch, kuvvetli elektrolitlerin seyreltik çözeltilerinde molar iletkenliğin derişimin kareköküyle doğrusal azaldığını deneysel olarak buldu. Bu ilişki, iyonların birbirinden çok uzak olduğu sonsuz seyreltmedeki sınır molar iletkenliği (Λ°) ekstrapolasyonla bulmayı sağlar.\n\nΛ°’da iyonlar birbirini etkilemediğinden, bu değer her iyonun bağımsız katkılarının toplamı olarak yazılabilir.',
      en: 'Kohlrausch found experimentally that, in dilute solutions of strong electrolytes, the molar conductivity falls linearly with the square root of concentration. This lets one extrapolate to the limiting molar conductivity (Λ°) at infinite dilution, where the ions are far apart.\n\nAt Λ° the ions do not influence one another, so the value can be written as a sum of independent contributions from each ion.',
    },
    meaning: {
      tr: 'Λ = Λ° − K·√C. Azalmanın nedeni iyon atmosferidir: hareket eden bir iyonun çevresindeki zıt yüklü iyon bulutu geride kalarak onu geri çeker (relaksasyon etkisi); ayrıca bu bulut zıt yönde hareket ederken çözücüyü de sürükler ve iyon akıntıya karşı ilerler (elektroforetik etki). Debye–Hückel–Onsager kuramı K için kuramsal bir değer verir.\n\n• Λ’ya karşı √C grafiği bir doğrudur: kesişim Λ°, eğim −K.\n• İyonların bağımsız göçü yasası: Λ° = ν₊·λ₊° + ν₋·λ₋°. KCl için λ°(K⁺) ≈ 73,5 ve λ°(Cl⁻) ≈ 76,3 S cm²/mol, toplam ≈ 149,8 S cm²/mol.\n• Zayıf elektrolitler bu doğrusal ilişkiye uymaz; Λ°’ları bağımsız göç yasasıyla bulunur: Λ°(CH₃COOH) = Λ°(HCl) + Λ°(CH₃COONa) − Λ°(NaCl).',
      en: 'Λ = Λ° − K·√C. The decrease is due to the ionic atmosphere: the cloud of oppositely charged ions around a moving ion lags behind and pulls it back (relaxation effect); in addition, the cloud moves the other way and drags solvent with it, so the ion travels against a counter-current (electrophoretic effect). Debye–Hückel–Onsager theory gives a theoretical value for K.\n\n• A plot of Λ against √C is a straight line: intercept Λ°, slope −K.\n• Law of independent migration of ions: Λ° = ν₊·λ₊° + ν₋·λ₋°. For KCl, λ°(K⁺) ≈ 73.5 and λ°(Cl⁻) ≈ 76.3 S cm²/mol, total ≈ 149.8 S cm²/mol.\n• Weak electrolytes do not follow this straight line; their Λ° is obtained from independent migration: Λ°(CH₃COOH) = Λ°(HCl) + Λ°(CH₃COONa) − Λ°(NaCl).',
    },
    usage: {
      tr: [
        'Kuvvetli bir elektrolitin belirli bir derişimdeki molar iletkenliğini tahmin etmek.',
        'Birkaç derişimdeki ölçümden Λ° ve K’yı doğrusal regresyonla bulmak.',
        'Yalnızca seyreltik kuvvetli elektrolit çözeltilerinde geçerlidir; derişik çözeltilerde doğrusallık bozulur.',
      ],
      en: [
        'Estimating the molar conductivity of a strong electrolyte at a given concentration.',
        'Finding Λ° and K by linear regression of measurements at several concentrations.',
        'Valid only for dilute solutions of strong electrolytes; linearity breaks down at higher concentrations.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Λ° = 149,86 S cm²/mol (KCl), K = 85,6, C = 0,0100 M.',
        '√C = √0,0100 = 0,100; K·√C = 85,6 × 0,100 = 8,56 S cm²/mol.',
        'Sonuç: Λ = 149,86 − 8,56 = 141,3 S cm²/mol; molar iletkenlik aracında κ’dan bulunan değerle aynıdır.',
      ],
      en: [
        'Given: Λ° = 149.86 S cm²/mol (KCl), K = 85.6, C = 0.0100 M.',
        '√C = √0.0100 = 0.100; K·√C = 85.6 × 0.100 = 8.56 S cm²/mol.',
        'Result: Λ = 149.86 − 8.56 = 141.3 S cm²/mol, the same value the molar conductivity tool gives from κ.',
      ],
    },
    mistakes: {
      tr: [
        '√C yerine C kullanmak.',
        'Yasayı asetik asit gibi zayıf elektrolitlere uygulayıp Λ°’ı ekstrapolasyonla bulmaya çalışmak.',
        'Derişik çözeltilerdeki ölçümleri ekstrapolasyona katmak.',
      ],
      en: [
        'Using C instead of √C.',
        'Applying the law to weak electrolytes such as acetic acid and trying to extrapolate to Λ°.',
        'Including measurements on concentrated solutions in the extrapolation.',
      ],
    },
    related: ['molar-conductivity', 'conductivity', 'debye-huckel', 'linear-regression'],
  },

  'table-potentials': {
    concept: {
      tr: 'Standart indirgenme potansiyeli tablosu, yarı tepkimeleri indirgenme yönünde yazar ve SHE’ye göre E° değerlerine göre sıralar. E° ne kadar pozitifse yükseltgenmiş tür o kadar kuvvetli bir yükseltgen; ne kadar negatifse indirgenmiş tür o kadar kuvvetli bir indirgendir. Tablo, bir redoks tepkimesinin yönünü tahmin etmek, hücre potansiyelini ve denge sabitini hesaplamak, titrant ve indikatör seçmek için kullanılır.\n\nÜçüncü sütun formal potansiyelleri (E°′) verir: belirli bir ortamda (ör. 1 M H₂SO₄) yükseltgenmiş ve indirgenmiş türlerin analitik derişimleri eşitken ölçülen potansiyel. Formal potansiyel aktivite katsayılarını, kompleksleşmeyi ve asit–baz dengelerini içerdiği için pratik hesaplarda E°’den daha gerçekçidir.',
      en: 'A table of standard reduction potentials writes half-reactions as reductions and orders them by E° against the SHE. The more positive E°, the stronger the oxidised form as an oxidant; the more negative, the stronger the reduced form as a reductant. The table is used to predict the direction of redox reactions, to calculate cell potentials and equilibrium constants, and to choose titrants and indicators.\n\nThe third column gives formal potentials (E°′): the potential measured in a specified medium (e.g. 1 M H₂SO₄) when the analytical concentrations of the oxidised and reduced forms are equal. Because it includes activity coefficients, complexation and acid–base equilibria, the formal potential is more realistic than E° for practical calculations.',
    },
    meaning: {
      tr: 'Tabloyu okuma kuralları:\n• E° şiddet özelliğidir: yarı tepkime 2 ile çarpılsa da değişmez.\n• Tablo her zaman indirgenme yönündedir. Yükseltgenme için tepkimeyi ters yazın, ama hücre potansiyelini E_katot − E_anot ile hesaplayın ve işareti ayrıca değiştirmeyin.\n• Standart koşullarda, daha pozitif E°’li çiftin yükseltgen türü, daha negatif E°’li çiftin indirgen türünü kendiliğinden yükseltger.\n• E° termodinamik eğilimi gösterir; tepkimenin hızı hakkında bilgi vermez.\n\nOrtamın etkisi büyük olabilir: Ce⁴⁺/Ce³⁺ için E°′ 1 M HClO₄’te 1,70 V, 1 M H₂SO₄’te 1,44 V’tur. Ag⁺/Ag için E° = 0,799 V iken 1 M HCl’de E°′ = 0,228 V’tur, çünkü Ag⁺ klorürle AgCl olarak çöker.',
      en: 'Rules for reading the table:\n• E° is intensive: it does not change when the half-reaction is multiplied by 2.\n• The table is always written as reductions. For an oxidation, reverse the reaction, but compute the cell potential as E_cathode − E_anode and do not change any sign separately.\n• Under standard conditions, the oxidised form of the couple with the more positive E° spontaneously oxidises the reduced form of the couple with the more negative E°.\n• E° shows the thermodynamic tendency; it says nothing about the rate.\n\nThe medium can matter a great deal: for Ce⁴⁺/Ce³⁺, E°′ is 1.70 V in 1 M HClO₄ and 1.44 V in 1 M H₂SO₄. For Ag⁺/Ag, E° = 0.799 V but E°′ = 0.228 V in 1 M HCl, because Ag⁺ precipitates as AgCl with chloride.',
    },
    usage: {
      tr: [
        'Bir redoks tepkimesinin kendiliğinden yürüyüp yürümeyeceğini öngörmek.',
        'Hücre potansiyeli, ΔG° ve denge sabiti hesapları için E° değerlerini almak.',
        'Redoks titrasyonu için yeterince güçlü bir titrant ve uygun bir indikatör seçmek.',
        'Belirli bir ortamda çalışılıyorsa o ortamın formal potansiyelini tercih etmek.',
      ],
      en: [
        'Predicting whether a redox reaction will proceed spontaneously.',
        'Taking E° values for cell potential, ΔG° and equilibrium constant calculations.',
        'Choosing a sufficiently strong titrant and a suitable indicator for a redox titration.',
        'Preferring the formal potential for the medium in which you actually work.',
      ],
    },
    solution: {
      tr: [
        'Soru: Asidik ortamda MnO₄⁻, Fe²⁺’yı yükseltger mi? Tablodan: MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O, E° = 1,51 V; Fe³⁺ + e⁻ ⇌ Fe²⁺, E° = 0,771 V.',
        'MnO₄⁻ indirgenir (katot), Fe²⁺ yükseltgenir (anot): E° = 1,51 − 0,771 = 0,739 V > 0, yani tepkime kendiliğindendir.',
        'Toplam tepkime: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O; n = 5. Fe yarı tepkimesi 5 ile çarpılır, ancak E° = 0,771 V olarak kalır.',
        'ΔG° = −5 × 96 485 × 0,739 = −356,5 kJ/mol; log K = 5 × 0,739 / 0,05916 = 62,46, K ≈ 2,9 × 10⁶². Tepkime pratikçe tamdır; permanganatla demir titrasyonunun temeli budur.',
      ],
      en: [
        'Question: does MnO₄⁻ oxidise Fe²⁺ in acid? From the table: MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O, E° = 1.51 V; Fe³⁺ + e⁻ ⇌ Fe²⁺, E° = 0.771 V.',
        'MnO₄⁻ is reduced (cathode), Fe²⁺ is oxidised (anode): E° = 1.51 − 0.771 = 0.739 V > 0, so the reaction is spontaneous.',
        'Overall reaction: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O; n = 5. The Fe half-reaction is multiplied by 5, but E° stays 0.771 V.',
        'ΔG° = −5 × 96 485 × 0.739 = −356.5 kJ/mol; log K = 5 × 0.739 / 0.05916 = 62.46, K ≈ 2.9 × 10⁶². The reaction is practically complete, which is the basis of the permanganate titration of iron.',
      ],
    },
    mistakes: {
      tr: [
        'Yarı tepkimeyi katsayıyla çarparken E°’yi de çarpmak.',
        'Yükseltgenme yarı tepkimesinin işaretini çevirip ayrıca E_katot − E_anot formülünü kullanmak.',
        'Pozitif E°’nin tepkimenin hızlı olacağı anlamına geldiğini sanmak ya da kompleksleşen bir ortamda E° yerine E°′ kullanmayı ihmal etmek.',
      ],
      en: [
        'Multiplying E° along with the coefficients of the half-reaction.',
        'Reversing the sign of the oxidation half-reaction and then also using E_cathode − E_anode.',
        'Taking a positive E° to mean a fast reaction, or failing to use E°′ instead of E° in a complexing medium.',
      ],
    },
    related: ['cell-potential', 'e0-k', 'nernst', 'curve-redox'],
  },
};

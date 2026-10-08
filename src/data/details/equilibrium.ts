import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Chemical Equilibrium module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const EQUILIBRIUM_DETAILS: Record<string, ToolDetail> = {
  'gibbs-k': {
    concept: {
      tr: 'Bir tepkimenin ne kadar ilerleyeceğini termodinamik belirler. Standart Gibbs enerjisi değişimi (ΔG°), tüm türler standart hâldeyken (çözünenler için 1 M, gazlar için 1 bar) tepkimenin ürünlere doğru ne kadar “istekli” olduğunu gösterir. Denge sabiti K ise aynı bilgiyi dengedeki bileşimle ifade eder.\n\nBu iki büyüklük birbirine logaritmik olarak bağlıdır: ΔG° negatifse K > 1’dir ve dengede ürünler baskındır; ΔG° pozitifse K < 1’dir ve tepkimeye girenler baskın kalır. Bu sayede termodinamik tablolardan denge sabiti, ölçülen bir K’dan da ΔG° hesaplanabilir.',
      en: 'Thermodynamics decides how far a reaction goes. The standard Gibbs energy change (ΔG°) measures how strongly a reaction is driven towards products when every species is in its standard state (1 M for solutes, 1 bar for gases). The equilibrium constant K expresses the same information as the composition at equilibrium.\n\nThe two are linked logarithmically: a negative ΔG° means K > 1 and products dominate at equilibrium; a positive ΔG° means K < 1 and reactants remain dominant. This lets you obtain K from thermodynamic tables, or ΔG° from a measured K.',
    },
    meaning: {
      tr: 'Herhangi bir bileşimde ΔG = ΔG° + R·T·ln Q’dur. Dengede tepkimenin itici kuvveti kalmaz (ΔG = 0) ve Q = K olur. Bu iki koşul yerine konunca ΔG° = −R·T·ln K elde edilir.\n\n• R = 8,314 J mol⁻¹ K⁻¹; T mutlaka kelvin cinsinden olmalıdır (25 °C = 298,15 K).\n• ln doğal logaritmadır. 10 tabanına geçerken ΔG° = −2,303·R·T·log K yazılır.\n• 25 °C’de K’daki her 10 katlık değişim ΔG°’de yaklaşık 5,71 kJ/mol’lük bir farka karşılık gelir.\n• Kesin tanımda K, aktivitelerle yazılan termodinamik sabittir ve birimsizdir.',
      en: 'At any composition ΔG = ΔG° + R·T·ln Q. At equilibrium the driving force vanishes (ΔG = 0) and Q = K. Substituting both conditions gives ΔG° = −R·T·ln K.\n\n• R = 8.314 J mol⁻¹ K⁻¹; T must be in kelvin (25 °C = 298.15 K).\n• ln is the natural logarithm. In base 10, ΔG° = −2.303·R·T·log K.\n• At 25 °C every tenfold change in K corresponds to about 5.71 kJ/mol in ΔG°.\n• Strictly, K is the thermodynamic constant written with activities and is dimensionless.',
    },
    usage: {
      tr: [
        'Tablolardaki ΔG° değerinden denge sabitini hesaplamak ya da tersini yapmak.',
        'Bir tepkimenin dengede ürünler mi yoksa girenler yönünde mi kalacağını öngörmek.',
        'Sıcaklık girdisi ΔG°’nin verildiği sıcaklık olmalıdır; ΔG° sıcaklıkla değiştiği için 25 °C değerini başka sıcaklıkta kullanmak yaklaşıktır.',
        'Elektrokimyasal hücrelerde ΔG° = −n·F·E° ilişkisiyle birlikte kullanılabilir.',
      ],
      en: [
        'Calculating an equilibrium constant from a tabulated ΔG°, or the reverse.',
        'Predicting whether products or reactants dominate at equilibrium.',
        'The temperature must be the one at which ΔG° applies; since ΔG° changes with temperature, using a 25 °C value elsewhere is only approximate.',
        'Combines with ΔG° = −n·F·E° for electrochemical cells.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetik asidin iyonlaşması için K = Ka = 1,75 × 10⁻⁵, T = 25 °C = 298,15 K.',
        'R·T = 8,314 J mol⁻¹ K⁻¹ × 298,15 K = 2479 J/mol; ln(1,75 × 10⁻⁵) = −10,953.',
        'ΔG° = −R·T·ln K = −(2479 J/mol) × (−10,953) = 27 153 J/mol.',
        'Sonuç: ΔG° = 27,15 kJ/mol (pozitif; K < 1 olduğu için iyonlaşma dengede çok sınırlıdır).',
      ],
      en: [
        'Given: for the ionisation of acetic acid K = Ka = 1.75 × 10⁻⁵, T = 25 °C = 298.15 K.',
        'R·T = 8.314 J mol⁻¹ K⁻¹ × 298.15 K = 2479 J/mol; ln(1.75 × 10⁻⁵) = −10.953.',
        'ΔG° = −R·T·ln K = −(2479 J/mol) × (−10.953) = 27 153 J/mol.',
        'Result: ΔG° = 27.15 kJ/mol (positive; K < 1, so ionisation is very limited at equilibrium).',
      ],
    },
    mistakes: {
      tr: [
        'Sıcaklığı °C olarak formüle koymak; hesap kelvinle yapılır.',
        'J ile kJ’ü karıştırmak: R J cinsindendir, ΔG° kJ/mol verilmişse 1000 ile çarpılmalıdır.',
        'ln yerine log kullanmak (2,303 çarpanını unutmak).',
      ],
      en: [
        'Putting the temperature in °C; the equation needs kelvin.',
        'Mixing J and kJ: R is in J, so a ΔG° given in kJ/mol must be multiplied by 1000.',
        'Using log instead of ln (forgetting the factor 2.303).',
      ],
    },
    related: ['gibbs-q', 'combine-k', 'e0-k'],
  },

  'gibbs-q': {
    concept: {
      tr: 'ΔG° yalnızca standart koşullardaki durumu anlatır. Gerçek bir çözeltide türlerin derişimleri genellikle 1 M değildir ve tepkimenin hangi yöne ilerleyeceği o anki bileşime bağlıdır. Tepkime oranı Q, denge sabitiyle aynı biçimde yazılır ama dengedeki değil o anki aktiviteler (yaklaşık olarak derişimler) kullanılır.\n\nQ ile K karşılaştırılarak tepkimenin yönü bulunur: Q < K ise ΔG < 0’dır ve tepkime ileri yönde, Q > K ise ΔG > 0’dır ve geri yönde ilerler. Q = K olduğunda sistem dengededir ve ΔG = 0’dır.',
      en: 'ΔG° describes only the standard-state situation. In a real solution the concentrations are rarely 1 M, and the direction of reaction depends on the actual composition. The reaction quotient Q is written exactly like the equilibrium constant, but with the current activities (approximately, concentrations) rather than the equilibrium ones.\n\nComparing Q with K gives the direction: if Q < K, ΔG < 0 and the reaction proceeds forward; if Q > K, ΔG > 0 and it runs backward. When Q = K the system is at equilibrium and ΔG = 0.',
    },
    meaning: {
      tr: 'ΔG = ΔG° + R·T·ln Q. İlk terim tepkimenin standart koşullardaki eğilimi, ikinci terim ise bileşimin standarttan sapmasının katkısıdır.\n\nΔG° = −R·T·ln K yerine konunca eşitlik ΔG = R·T·ln(Q/K) biçimine gelir. Bu yazım, yönün yalnızca Q/K oranına bağlı olduğunu açıkça gösterir.\n\n• ΔG ve ΔG° kJ/mol, R·T ise J/mol cinsindendir; birimleri eşitleyin.\n• Q birimsizdir. Saf katılar ve çözücü (su) Q’ya katılmaz (aktiviteleri 1’dir).',
      en: 'ΔG = ΔG° + R·T·ln Q. The first term is the tendency of the reaction under standard conditions; the second is the contribution of the composition’s departure from the standard state.\n\nSubstituting ΔG° = −R·T·ln K gives ΔG = R·T·ln(Q/K), which shows that the direction depends only on the ratio Q/K.\n\n• ΔG and ΔG° are in kJ/mol while R·T is in J/mol; make the units match.\n• Q is dimensionless. Pure solids and the solvent (water) are left out of Q (their activity is 1).',
    },
    usage: {
      tr: [
        'Belirli derişimlerdeki bir karışımda tepkimenin hangi yöne ilerleyeceğini bulmak.',
        'Bir çökeleğin oluşup oluşmayacağını değerlendirmek (iyon çarpımı Q ile Ksp karşılaştırılır).',
        'Biyokimyasal ve elektrokimyasal sistemlerde standart dışı koşullardaki itici kuvveti hesaplamak.',
        'ΔG, tepkimenin hızı hakkında bilgi vermez; yalnızca yönünü ve dengeye uzaklığı gösterir.',
      ],
      en: [
        'Finding the direction in which a mixture of given composition will react.',
        'Deciding whether a precipitate will form (compare the ion product Q with Ksp).',
        'Calculating the driving force under non-standard conditions in biochemical and electrochemical systems.',
        'ΔG says nothing about the rate; it only gives the direction and the distance from equilibrium.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetik asit iyonlaşması için ΔG° = 27,15 kJ/mol, T = 25 °C = 298,15 K, Q = 1,0 × 10⁻⁷ (Ka = 1,75 × 10⁻⁵’ten çok küçük).',
        'R·T·ln Q = 2,479 kJ/mol × ln(1,0 × 10⁻⁷) = 2,479 kJ/mol × (−16,118) = −39,96 kJ/mol.',
        'ΔG = 27,15 kJ/mol − 39,96 kJ/mol; Q < K olduğundan sonuç negatif çıkar ve iyonlaşma ileri yönde ilerler.',
        'Sonuç: ΔG = -12,8 kJ/mol.',
      ],
      en: [
        'Given: for acetic acid ionisation ΔG° = 27.15 kJ/mol, T = 25 °C = 298.15 K, Q = 1.0 × 10⁻⁷ (much smaller than Ka = 1.75 × 10⁻⁵).',
        'R·T·ln Q = 2.479 kJ/mol × ln(1.0 × 10⁻⁷) = 2.479 kJ/mol × (−16.118) = −39.96 kJ/mol.',
        'ΔG = 27.15 kJ/mol − 39.96 kJ/mol; because Q < K the result is negative and ionisation proceeds forward.',
        'Result: ΔG = -12.8 kJ/mol.',
      ],
    },
    mistakes: {
      tr: [
        'ΔG ile ΔG°’yi karıştırmak: pozitif ΔG°, tepkimenin hiç ilerlemeyeceği anlamına gelmez.',
        'Q’ya saf katıları ya da suyu dahil etmek.',
        'Q’yu tepkime eşitliğindeki katsayıları üs olarak almadan yazmak.',
      ],
      en: [
        'Confusing ΔG with ΔG°: a positive ΔG° does not mean the reaction cannot proceed at all.',
        'Including pure solids or water in Q.',
        'Writing Q without raising each term to its stoichiometric coefficient.',
      ],
    },
    related: ['gibbs-k', 'combine-k', 'nernst'],
  },

  'combine-k': {
    concept: {
      tr: 'Analitik kimyada ilgilendiğimiz tepkime çoğu zaman tablolarda doğrudan bulunmaz; ama tabloda yer alan basamak tepkimelerin toplamı olarak yazılabilir. Örneğin H₂S’nin iki protonunu da vermesi, birinci ve ikinci iyonlaşma basamaklarının toplamıdır.\n\nTepkimeler toplandığında denge sabitleri çarpılır; bir tepkime ters çevrildiğinde K’sı 1/K, bir katsayıyla çarpıldığında Kⁿ olur. Bu kurallar, Hess yasasının denge sabitlerine uygulanmış biçimidir.',
      en: 'The reaction we care about in analytical chemistry is often not tabulated directly, but it can be written as the sum of tabulated step reactions. For example, H₂S losing both protons is the sum of its first and second ionisation steps.\n\nWhen reactions are added their equilibrium constants multiply; reversing a reaction turns K into 1/K, and multiplying it by a coefficient n turns K into Kⁿ. These rules are Hess’s law applied to equilibrium constants.',
    },
    meaning: {
      tr: 'ΔG° değerleri toplanabilir bir büyüklüktür. ΔG° = −R·T·ln K olduğundan ΔG°’lerin toplanması, ln K’ların toplanması yani K’ların çarpılması demektir.\n\nAraç genel biçimi kullanır: K = K₁ⁿ¹ · K₂ⁿ², ya da logaritmik olarak log K = n₁·log K₁ + n₂·log K₂.\n\n• n = 1: tepkime olduğu gibi eklenir.\n• n = −1: tepkime ters çevrilir (K → 1/K).\n• n = 2: tepkime 2 ile çarpılır (K → K²); n = ½ ise karekök alınır.',
      en: 'ΔG° values are additive. Since ΔG° = −R·T·ln K, adding ΔG° values means adding ln K values, that is, multiplying the K values.\n\nThe tool uses the general form K = K₁ⁿ¹ · K₂ⁿ², or in logarithmic form log K = n₁·log K₁ + n₂·log K₂.\n\n• n = 1: the reaction is added as written.\n• n = −1: the reaction is reversed (K → 1/K).\n• n = 2: the reaction is doubled (K → K²); n = ½ takes the square root.',
    },
    usage: {
      tr: [
        'Poliprotik asitlerin toplam iyonlaşma sabitini bulmak (ör. Ka₁·Ka₂).',
        'Ka ve Kw’den bir bazın Kb’sini, ya da Ksp ve Kf’den kompleksleşmeli çözünme sabitini türetmek.',
        'Bir tepkimeyi ters çevirerek oluşum sabitinden ayrışma sabitine geçmek (n = −1).',
        'Birleştirilen tüm sabitler aynı sıcaklığa ait olmalıdır.',
      ],
      en: [
        'Overall ionisation constant of a polyprotic acid (e.g. Ka₁·Ka₂).',
        'Deriving Kb from Ka and Kw, or a dissolution-with-complexation constant from Ksp and Kf.',
        'Going from a formation constant to a dissociation constant by reversing the reaction (n = −1).',
        'All combined constants must refer to the same temperature.',
      ],
    },
    solution: {
      tr: [
        'Verilen: H₂S ⇌ H⁺ + HS⁻, Ka₁ = 9,1 × 10⁻⁸ (n₁ = 1); HS⁻ ⇌ H⁺ + S²⁻, Ka₂ = 1,2 × 10⁻¹⁵ (n₂ = 1).',
        'İki tepkime toplanınca HS⁻ sadeleşir: H₂S ⇌ 2H⁺ + S²⁻.',
        'K = Ka₁ · Ka₂ = (9,1 × 10⁻⁸) × (1,2 × 10⁻¹⁵); log K = −7,04 + (−14,92) = −21,96.',
        'Sonuç: K = 1,092 × 10⁻²².',
      ],
      en: [
        'Given: H₂S ⇌ H⁺ + HS⁻, Ka₁ = 9.1 × 10⁻⁸ (n₁ = 1); HS⁻ ⇌ H⁺ + S²⁻, Ka₂ = 1.2 × 10⁻¹⁵ (n₂ = 1).',
        'Adding the two reactions cancels HS⁻: H₂S ⇌ 2H⁺ + S²⁻.',
        'K = Ka₁ · Ka₂ = (9.1 × 10⁻⁸) × (1.2 × 10⁻¹⁵); log K = −7.04 + (−14.92) = −21.96.',
        'Result: K = 1.092 × 10⁻²².',
      ],
    },
    mistakes: {
      tr: [
        'Tepkimeler toplandığında K’ları toplamak (doğrusu çarpmaktır).',
        'Ters çevrilen tepkimede K yerine −K kullanmak (doğrusu 1/K’dir).',
        'Toplam tepkimeden [H⁺] = 2[S²⁻] sonucunu çıkarmak: toplam sabit, tepkimenin gerçekten bu stokiyometriyle yürüdüğünü göstermez.',
      ],
      en: [
        'Adding the K values when reactions are added (they must be multiplied).',
        'Using −K for a reversed reaction (it is 1/K).',
        'Concluding [H⁺] = 2[S²⁻] from the overall reaction: the combined constant does not mean the reaction actually proceeds with that stoichiometry.',
      ],
    },
    related: ['gibbs-k', 'pka-pkb', 'alpha-fractions'],
  },

  activity: {
    concept: {
      tr: 'İdeal bir çözeltide her iyon, çevresindeki iyonlardan bağımsız davranır. Gerçekte ise bir katyonun çevresinde anyonlar, bir anyonun çevresinde katyonlar biraz daha fazla bulunur. Bu “iyon atmosferi” iyonun yükünü kısmen perdeler ve iyon, derişiminin düşündürdüğünden daha az etkin davranır.\n\nAktivite (a), bir türün dengeye ve elektrot potansiyeline katkısını belirleyen “etkin derişim”dir. Derişimle aktivite katsayısı γ üzerinden ilişkilidir. Termodinamik denge sabitleri ve pH elektrotlarının yanıtı aslında aktivitelere göre tanımlanır.',
      en: 'In an ideal solution each ion behaves independently of its neighbours. In reality a cation is surrounded by slightly more anions than cations, and vice versa. This “ionic atmosphere” partly screens the ion’s charge, so the ion behaves as if it were less concentrated than it is.\n\nThe activity a is the “effective concentration” that determines a species’ contribution to an equilibrium or to an electrode potential. It is related to concentration through the activity coefficient γ. Thermodynamic equilibrium constants and the response of pH electrodes are in fact defined in terms of activities.',
    },
    meaning: {
      tr: 'a = γ · C. Kesin tanımda a = γ · C / C° (C° = 1 M) olduğundan aktivite birimsizdir; pratikte M ile aynı sayısal değerle yazılır.\n\n• Çok seyreltik çözeltilerde γ → 1 ve a ≈ C olur.\n• İyonik şiddet arttıkça γ küçülür ve a, C’den daha düşük kalır.\n• Yükü büyük iyonlarda (z = 2, 3) γ, aynı iyonik şiddette tek yüklü iyonlara göre çok daha küçüktür.\n• Yüksüz moleküller için düşük iyonik şiddette γ ≈ 1 alınır.\n\nγ değeri iyonik şiddetten Debye–Hückel ya da Davies eşitlikleriyle tahmin edilir.',
      en: 'a = γ · C. Strictly a = γ · C / C° (C° = 1 M), so activity is dimensionless; in practice it is written with the same number as the molarity.\n\n• In very dilute solutions γ → 1 and a ≈ C.\n• As ionic strength increases γ falls and a stays below C.\n• Highly charged ions (z = 2, 3) have much smaller γ than singly charged ions at the same ionic strength.\n• For neutral molecules γ ≈ 1 at low ionic strength.\n\nγ is estimated from the ionic strength with the Debye–Hückel or Davies equations.',
    },
    usage: {
      tr: [
        'Termodinamik denge sabitleriyle kesin hesap yapmak (Ka, Ksp aktivitelerle tanımlıdır).',
        'İyon seçici ve pH elektrotlarının ölçtüğü değeri yorumlamak; elektrot derişime değil aktiviteye yanıt verir.',
        'İyonik şiddet yaklaşık 10⁻³ M’nin altındaysa tek yüklü iyonlar için γ ≈ 1 almak çoğu zaman yeterlidir.',
        'Derişik çözeltilerde (μ > 0,5 M) tahmini γ değerleri güvenilir değildir.',
      ],
      en: [
        'Exact work with thermodynamic constants (Ka, Ksp are defined with activities).',
        'Interpreting ion-selective and pH electrode readings: electrodes respond to activity, not concentration.',
        'Below an ionic strength of roughly 10⁻³ M, γ ≈ 1 is usually adequate for singly charged ions.',
        'In concentrated solutions (μ > 0.5 M) estimated γ values are unreliable.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C = 0,010 M, γ = 0,76.',
        'a = γ · C = 0,76 × 0,010 M.',
        'Sonuç: a = 0,0076 M (7,6 × 10⁻³); iyon, derişiminin yalnızca %76’sı kadar etkindir.',
      ],
      en: [
        'Given: C = 0.010 M, γ = 0.76.',
        'a = γ · C = 0.76 × 0.010 M.',
        'Result: a = 0.0076 M (7.6 × 10⁻³); the ion is only 76 % as effective as its concentration suggests.',
      ],
    },
    mistakes: {
      tr: [
        'Aktivite katsayısının yalnızca iyonun kendi derişimine bağlı olduğunu sanmak; γ, çözeltideki tüm iyonların oluşturduğu iyonik şiddete bağlıdır.',
        'γ’yı 1’den büyük ya da negatif almak (seyreltik ve orta derişimli çözeltilerde 0 < γ ≤ 1).',
        'pH ölçümünü [H⁺] derişimi sanmak; ölçülen, H⁺ aktivitesidir.',
      ],
      en: [
        'Thinking γ depends only on the ion’s own concentration; it depends on the ionic strength created by all ions present.',
        'Taking γ greater than 1 or negative (in dilute and moderate solutions 0 < γ ≤ 1).',
        'Reading a measured pH as [H⁺]; the electrode measures the H⁺ activity.',
      ],
    },
    related: ['ionic-strength', 'debye-huckel', 'davies', 'thermodynamic-k'],
  },

  'debye-huckel': {
    concept: {
      tr: 'Debye–Hückel kuramı, aktivite katsayısını iyon atmosferi modeliyle hesaplar. Her iyon, zıt yüklü iyonların hafifçe ağır bastığı bir bulutla çevrilidir. Bu bulut iyonu kararlı kılar ve etkin derişimini düşürür. Etki iyonun yükünün karesiyle ve çözeltinin iyonik şiddetinin kareköküyle büyür.\n\nKuramın en basit biçimi olan sınır yasası, iyonları nokta yük kabul eder ve yalnızca çok seyreltik çözeltilerde geçerlidir. Genişletilmiş eşitlik, hidratlaşmış iyonun sonlu boyutunu (α) da hesaba katarak geçerlilik aralığını yaklaşık 0,1 M iyonik şiddete kadar genişletir.',
      en: 'Debye–Hückel theory calculates activity coefficients from the ionic-atmosphere model. Every ion is surrounded by a cloud in which ions of opposite charge slightly predominate. The cloud stabilises the ion and lowers its effective concentration. The effect grows with the square of the ion’s charge and with the square root of the ionic strength.\n\nThe simplest form, the limiting law, treats ions as point charges and holds only in very dilute solutions. The extended equation includes the finite size of the hydrated ion (α) and extends the range to an ionic strength of about 0.1 M.',
    },
    meaning: {
      tr: 'log γ = −0,51·z²·√μ / (1 + α·√μ / 305)\n\n• 0,51: 25 °C’deki su için sabit; sıcaklığa ve çözücünün dielektrik sabitine bağlıdır.\n• z: iyonun yükü. z² terimi nedeniyle iki yüklü bir iyonun log γ’sı, tek yüklüye göre 4 kat büyüktür.\n• μ: iyonik şiddet (M).\n• α: hidratlaşmış iyon boyutu (pm). Yükü yoğun küçük iyonlar daha kalın bir hidrat kabuğu taşır; örneğin H⁺ için 900 pm, Ca²⁺ için 600 pm, K⁺ ve Cl⁻ için 300 pm alınır.\n• 305 pm: 25 °C’de sudaki uzunluk ölçeği; payda iyon boyutunun etkisini ölçekler.\n\nα = 0 girildiğinde payda 1 olur ve sınır yasası elde edilir: log γ = −0,51·z²·√μ (yaklaşık μ < 0,01 M için).',
      en: 'log γ = −0.51·z²·√μ / (1 + α·√μ / 305)\n\n• 0.51: constant for water at 25 °C; it depends on temperature and on the dielectric constant of the solvent.\n• z: charge of the ion. Because of z², log γ of a doubly charged ion is 4 times that of a singly charged one.\n• μ: ionic strength (M).\n• α: hydrated ion size (pm). Small ions with a high charge density carry a thicker hydration shell; typical values are 900 pm for H⁺, 600 pm for Ca²⁺ and 300 pm for K⁺ and Cl⁻.\n• 305 pm: a length scale for water at 25 °C; the denominator scales the effect of ion size.\n\nWith α = 0 the denominator becomes 1 and the limiting law results: log γ = −0.51·z²·√μ (for roughly μ < 0.01 M).',
    },
    usage: {
      tr: [
        'Tek tek iyonların aktivite katsayısını, iyonik şiddet yaklaşık 0,1 M’ye kadar tahmin etmek.',
        'Ka, Ksp gibi termodinamik sabitleri belirli bir iyonik şiddetteki derişim sabitlerine çevirmek için γ sağlamak.',
        'α bilinmiyorsa Davies eşitliğini kullanın.',
        'μ > 0,1 M’de hata büyür; kuram iyon çifti oluşumunu ve özgül etkileşimleri hesaba katmaz.',
      ],
      en: [
        'Estimating activity coefficients of individual ions up to an ionic strength of about 0.1 M.',
        'Supplying γ values to convert thermodynamic constants (Ka, Ksp) into concentration constants at a given ionic strength.',
        'If α is unknown, use the Davies equation.',
        'Above μ = 0.1 M the error grows; the theory ignores ion pairing and specific interactions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Ca²⁺ için z = 2, α = 600 pm; iyonik şiddet μ = 0,10 M.',
        '√μ = 0,3162; pay = 0,51 × 2² × 0,3162 = 0,6451; payda = 1 + 600 × 0,3162 / 305 = 1,622.',
        'log γ = −0,6451 / 1,622 = −0,3977. (Karşılaştırma: sınır yasası log γ = −0,6451, yani γ = 0,226 verirdi.)',
        'Sonuç: γ(Ca²⁺) = 0,4002.',
      ],
      en: [
        'Given: for Ca²⁺ z = 2, α = 600 pm; ionic strength μ = 0.10 M.',
        '√μ = 0.3162; numerator = 0.51 × 2² × 0.3162 = 0.6451; denominator = 1 + 600 × 0.3162 / 305 = 1.622.',
        'log γ = −0.6451 / 1.622 = −0.3977. (For comparison, the limiting law gives log γ = −0.6451, i.e. γ = 0.226.)',
        'Result: γ(Ca²⁺) = 0.4002.',
      ],
    },
    mistakes: {
      tr: [
        'İyonik şiddet yerine yalnızca ilgilenilen iyonun derişimini μ olarak girmek.',
        'α’yı ångström (Å) cinsinden girmek; araç pm bekler (1 Å = 100 pm).',
        'Sınır yasasını 0,1 M gibi yüksek iyonik şiddetlerde kullanmak; iki yüklü iyonlarda γ’yı ciddi biçimde küçük bulur.',
      ],
      en: [
        'Entering the concentration of the ion of interest instead of the ionic strength.',
        'Entering α in ångström (Å); the tool expects pm (1 Å = 100 pm).',
        'Using the limiting law at high ionic strength such as 0.1 M; for doubly charged ions it badly underestimates γ.',
      ],
    },
    related: ['ionic-strength', 'davies', 'activity', 'thermodynamic-k'],
  },

  davies: {
    concept: {
      tr: 'Genişletilmiş Debye–Hückel eşitliği her iyon için bir hidratlaşmış boyut (α) değeri ister. Bu değer pek çok iyon, özellikle organik ve karmaşık iyonlar için bilinmez. Davies eşitliği iyon boyutu yerine tüm iyonlar için ortak, deneysel bir düzeltme kullanır.\n\nBöylece yalnızca iyonun yükü ve çözeltinin iyonik şiddeti bilinerek aktivite katsayısı tahmin edilebilir. Eşitlik yaklaşık 0,5 M iyonik şiddete kadar makul sonuç verir ve doğal sular ile tampon çözeltilerin hesaplarında yaygın olarak kullanılır.',
      en: 'The extended Debye–Hückel equation needs a hydrated size α for every ion, which is unknown for many ions, especially organic and complex ones. The Davies equation replaces the individual ion size with a common empirical correction for all ions.\n\nThe activity coefficient can then be estimated from just the charge of the ion and the ionic strength of the solution. It gives reasonable values up to an ionic strength of about 0.5 M and is widely used for natural waters and buffer calculations.',
    },
    meaning: {
      tr: 'log γ = −0,51·z²·[√μ / (1 + √μ) − 0,3·μ]\n\n• İlk terim, α·√μ/305 ≈ √μ alınmış (yani α ≈ 305 pm) bir Debye–Hückel ifadesidir.\n• −0,3·μ terimi deneysel bir düzeltmedir. Yüksek iyonik şiddette γ’nın azalmayı bırakıp yeniden artmasını kabaca yansıtır. Bazı kaynaklar 0,3 yerine 0,2 kullanır; bu araç 0,3 ile çalışır.\n• Yalnızca z ve μ gerektiği için aynı yüklü bütün iyonlara aynı γ değeri verir.\n• 0,51 sabiti 25 °C’deki su içindir.',
      en: 'log γ = −0.51·z²·[√μ / (1 + √μ) − 0.3·μ]\n\n• The first term is a Debye–Hückel expression with α·√μ/305 ≈ √μ (i.e. α ≈ 305 pm).\n• The −0.3·μ term is an empirical correction. It roughly reproduces the way γ stops falling and starts to rise again at high ionic strength. Some sources use 0.2 instead of 0.3; this tool uses 0.3.\n• Because it needs only z and μ, it gives the same γ for all ions of the same charge.\n• The constant 0.51 applies to water at 25 °C.',
    },
    usage: {
      tr: [
        'İyon boyutu bilinmediğinde aktivite katsayısını tahmin etmek.',
        'Yaklaşık 0,1–0,5 M iyonik şiddet aralığında Debye–Hückel’e göre daha gerçekçi değer elde etmek.',
        'Çok seyreltik çözeltilerde (μ < 0,01 M) sınır yasası ve genişletilmiş Debye–Hückel ile neredeyse aynı sonucu verir.',
        'μ > 0,5 M’de ve iyon çifti oluşturan sistemlerde güvenilir değildir.',
      ],
      en: [
        'Estimating activity coefficients when the ion size is not known.',
        'Getting more realistic values than Debye–Hückel at roughly 0.1–0.5 M ionic strength.',
        'In very dilute solutions (μ < 0.01 M) it agrees closely with the limiting law and extended Debye–Hückel.',
        'Unreliable above μ = 0.5 M and where ion pairs form.',
      ],
    },
    solution: {
      tr: [
        'Verilen: tek yüklü bir iyon, z = 1; iyonik şiddet μ = 0,010 M.',
        '√μ = 0,100; √μ / (1 + √μ) = 0,100 / 1,100 = 0,09091; 0,3·μ = 0,0030.',
        'log γ = −0,51 × 1² × (0,09091 − 0,0030) = −0,04483. (Sınır yasası γ = 0,889 verirdi.)',
        'Sonuç: γ = 0,9019.',
      ],
      en: [
        'Given: a singly charged ion, z = 1; ionic strength μ = 0.010 M.',
        '√μ = 0.100; √μ / (1 + √μ) = 0.100 / 1.100 = 0.09091; 0.3·μ = 0.0030.',
        'log γ = −0.51 × 1² × (0.09091 − 0.0030) = −0.04483. (The limiting law would give γ = 0.889.)',
        'Result: γ = 0.9019.',
      ],
    },
    mistakes: {
      tr: [
        'Yükün karesini almayı unutmak (z = 2 için çarpan 4’tür).',
        'μ yerine tuzun molaritesini girmek; örneğin 0,01 M MgSO₄’ün iyonik şiddeti 0,04 M’dir.',
        'Eşitliği 1 M ya da daha derişik çözeltilere uygulamak.',
      ],
      en: [
        'Forgetting to square the charge (the factor is 4 for z = 2).',
        'Entering the salt molarity instead of μ; for example 0.01 M MgSO₄ has an ionic strength of 0.04 M.',
        'Applying the equation to solutions of 1 M or more.',
      ],
    },
    related: ['ionic-strength', 'debye-huckel', 'activity'],
  },

  'thermodynamic-k': {
    concept: {
      tr: 'Tablolardaki denge sabitleri genellikle termodinamik sabitlerdir (K°). Aktivitelerle tanımlanırlar ve sonsuz seyreltik çözeltiye karşılık gelirler. Laboratuvarda ise çoğu zaman tuz içeren çözeltilerde çalışılır ve derişimlerle hesap yapmak isteriz. Derişimlerle yazılan sabit (Kc) iyonik şiddete bağlıdır.\n\nİnert bir tuz (ör. KNO₃) eklendikçe iyonların aktivite katsayıları düşer. Bu yüzden aynı aktivite çarpımını sağlamak için daha fazla iyon gerekir ve zayıf asitlerin iyonlaşması ile az çözünen tuzların çözünürlüğü artar. Bu olaya yabancı iyon (inert tuz) etkisi denir.',
      en: 'Tabulated equilibrium constants are usually thermodynamic constants (K°), defined with activities and corresponding to infinite dilution. In the laboratory, however, we often work in salt-containing solutions and want to calculate with concentrations. The constant written with concentrations (Kc) depends on ionic strength.\n\nAs an inert salt (e.g. KNO₃) is added, activity coefficients fall. More ions are then needed to reach the same activity product, so weak acids dissociate more and sparingly soluble salts become more soluble. This is called the diverse-ion (inert-salt) effect.',
    },
    meaning: {
      tr: 'HA ⇌ H⁺ + A⁻ için: K° = a(H⁺)·a(A⁻) / a(HA) = (γ₊[H⁺]·γ₋[A⁻]) / (γ_HA[HA]).\n\nYüksüz HA için γ_HA ≈ 1 alınırsa K° = Kc · γ₊ · γ₋ olur, buradan Kc = K° / (γ₊ · γ₋). AgCl ⇌ Ag⁺ + Cl⁻ için de katının aktivitesi 1 olduğundan aynı ifade geçerlidir.\n\n• Seyreltik ve orta iyonik şiddette (μ ≲ 0,5 M) γ < 1 olduğundan Kc > K°’dir.\n• İyonik şiddet arttıkça γ’lar küçülür ve Kc büyür.\n• pKc = pK° + log γ₊ + log γ₋; yani bu aralıkta pKc, pK°’den küçüktür.',
      en: 'For HA ⇌ H⁺ + A⁻: K° = a(H⁺)·a(A⁻) / a(HA) = (γ₊[H⁺]·γ₋[A⁻]) / (γ_HA[HA]).\n\nTaking γ_HA ≈ 1 for the neutral HA gives K° = Kc · γ₊ · γ₋, so Kc = K° / (γ₊ · γ₋). The same expression holds for AgCl ⇌ Ag⁺ + Cl⁻ because the activity of the solid is 1.\n\n• At low and moderate ionic strength (μ ≲ 0.5 M) γ < 1, so Kc > K°.\n• As ionic strength increases the γ values fall and Kc rises.\n• pKc = pK° + log γ₊ + log γ₋, so in this range pKc is smaller than pK°.',
    },
    usage: {
      tr: [
        'Belirli iyonik şiddetteki bir çözeltide derişimlerle doğru denge hesabı yapmak.',
        'Önce μ’yü, sonra γ₊ ve γ₋’yi (Debye–Hückel ya da Davies ile) bulun, ardından bu aracı kullanın.',
        'Yalnızca iki iyon veren (giren türü yüksüz ya da katı olan) tepkimeler içindir; MA₂ gibi tuzlarda γ’ların üsleri farklıdır.',
        'Yüksüz türün γ’sı yüksek iyonik şiddette 1’den sapabilir.',
      ],
      en: [
        'Doing accurate concentration-based equilibrium calculations at a known ionic strength.',
        'First find μ, then γ₊ and γ₋ (Debye–Hückel or Davies), then use this tool.',
        'Only for reactions that give two ions; for salts such as MA₂ the γ terms carry different exponents.',
        'The γ of a neutral species can deviate from 1 at high ionic strength.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetik asit için K° = 1,75 × 10⁻⁵; γ(H⁺) = γ(OAc⁻) = 0,76 (orta düzeyde bir iyonik şiddette tek yüklü iyonlar için tipik).',
        'γ₊ · γ₋ = 0,76 × 0,76 = 0,5776.',
        'Kc = K° / (γ₊ · γ₋) = 1,75 × 10⁻⁵ / 0,5776; pKc = 4,52 (pK° = 4,76).',
        'Sonuç: Kc = 3,03 × 10⁻⁵; bu ortamda asit, tablodaki Ka’nın düşündürdüğünden daha fazla iyonlaşır.',
      ],
      en: [
        'Given: for acetic acid K° = 1.75 × 10⁻⁵; γ(H⁺) = γ(OAc⁻) = 0.76 (typical of singly charged ions at moderate ionic strength).',
        'γ₊ · γ₋ = 0.76 × 0.76 = 0.5776.',
        'Kc = K° / (γ₊ · γ₋) = 1.75 × 10⁻⁵ / 0.5776; pKc = 4.52 (pK° = 4.76).',
        'Result: Kc = 3.03 × 10⁻⁵; in this medium the acid ionises more than the tabulated Ka suggests.',
      ],
    },
    mistakes: {
      tr: [
        'Kc ile K°’yi ters ilişkilendirmek (Kc = K° · γ₊γ₋ yazmak).',
        'İyonik şiddeti hesaplarken eklenen inert tuzu unutmak.',
        'Ortak iyon etkisi ile yabancı iyon etkisini karıştırmak: ortak iyon çözünürlüğü belirgin biçimde azaltır, inert tuz ise biraz artırır.',
      ],
      en: [
        'Inverting the relation (writing Kc = K° · γ₊γ₋).',
        'Leaving the added inert salt out of the ionic strength.',
        'Confusing the common-ion and diverse-ion effects: a common ion strongly decreases solubility, an inert salt slightly increases it.',
      ],
    },
    related: ['activity', 'ionic-strength', 'solubility-activity', 'weak-acid'],
  },

  'solubility-activity': {
    concept: {
      tr: 'Az çözünen bir tuzun çözünürlüğü, termodinamik çözünürlük çarpımı (Ksp) ile belirlenir. Ksp aktivitelerle tanımlıdır. Çözeltiye çökelekle ortak iyonu olmayan inert bir tuz (ör. KNO₃ ya da NaNO₃) eklendiğinde iyonik şiddet artar ve aktivite katsayıları düşer.\n\nAktivite çarpımı Ksp’ye eşit kalmak zorunda olduğundan, γ’lar küçüldükçe çözünmüş iyon derişimleri artar. Bu nedenle tuzun çözünürlüğü saf suya göre biraz yükselir. Etki, gravimetrik analizde yıkama sıvısının ve ortamın seçiminde dikkate alınır.',
      en: 'The solubility of a sparingly soluble salt is governed by its thermodynamic solubility product (Ksp), which is defined with activities. When an inert salt sharing no ion with the precipitate (e.g. KNO₃ or NaNO₃) is added, the ionic strength rises and the activity coefficients fall.\n\nBecause the activity product must still equal Ksp, smaller γ values mean higher dissolved ion concentrations, and the salt becomes somewhat more soluble than in pure water. This matters when choosing the medium and wash liquid in gravimetric analysis.',
    },
    meaning: {
      tr: 'MA(k) ⇌ M⁺ + A⁻ için: Ksp = a(M⁺)·a(A⁻) = γ₊[M⁺] · γ₋[A⁻].\n\nOrtak iyon yoksa [M⁺] = [A⁻] = s olur. Bu durumda Ksp = γ₊γ₋s², buradan s = √(Ksp / (γ₊·γ₋)).\n\n• γ₊ = γ₋ = 1 alınırsa bilinen s = √Ksp ifadesi elde edilir.\n• γ’lar, eklenen tuzun belirlediği iyonik şiddetten hesaplanır. Çözünen az miktardaki MA’nın iyonik şiddete katkısı genellikle ihmal edilebilir.\n• s mol/L cinsindendir; kütle çözünürlüğü için molar kütleyle çarpılır.',
      en: 'For MA(s) ⇌ M⁺ + A⁻: Ksp = a(M⁺)·a(A⁻) = γ₊[M⁺] · γ₋[A⁻].\n\nWith no common ion, [M⁺] = [A⁻] = s, so Ksp = γ₊γ₋s² and s = √(Ksp / (γ₊·γ₋)).\n\n• With γ₊ = γ₋ = 1 this reduces to the familiar s = √Ksp.\n• The γ values come from the ionic strength set by the added salt. The small amount of dissolved MA usually contributes negligibly to the ionic strength.\n• s is in mol/L; multiply by the molar mass for a mass solubility.',
    },
    usage: {
      tr: [
        'AgCl (z = 1) ya da BaSO₄ (z = 2; γ’lar iki yüklü iyonlar için alınmalı) gibi MA tipi tuzların inert elektrolit içindeki çözünürlüğünü hesaplamak.',
        'Gravimetride çökelek kaybını ve yıkama sıvısının etkisini değerlendirmek.',
        'Formül yalnızca 1:1 tuzlar ve ortak iyonun bulunmadığı durum içindir; ortak iyon varsa onun derişimi ayrıca hesaba katılmalıdır.',
        'Katyon ya da anyonun asit–baz veya kompleksleşme tepkimesi varsa çözünürlük ayrıca pH’a ve ligandlara bağlıdır.',
      ],
      en: [
        'Solubility of MA-type salts such as AgCl (z = 1) or BaSO₄ (z = 2; use γ for doubly charged ions) in an inert electrolyte.',
        'Assessing precipitate losses and the effect of the wash liquid in gravimetry.',
        'Valid only for 1:1 salts without a common ion; a common ion must be included separately.',
        'If the cation or anion takes part in acid–base or complexation reactions, solubility also depends on pH and ligands.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 1:1 tuz (ör. AgCl) için Ksp = 1,0 × 10⁻¹⁰; inert tuz ortamında γ₊ = γ₋ = 0,90 (tek yüklü iyonlar için yaklaşık μ = 0,01 M’ye karşılık gelir).',
        'γ₊·γ₋ = 0,90 × 0,90 = 0,81; Ksp / (γ₊γ₋) = 1,0 × 10⁻¹⁰ / 0,81 = 1,235 × 10⁻¹⁰.',
        's = √(1,235 × 10⁻¹⁰). Aktivite hesaba katılmasaydı s = √Ksp = 1,0 × 10⁻⁵ M bulunurdu; çözünürlük yaklaşık %11 artmıştır.',
        'Sonuç: s = 1,111 × 10⁻⁵ M.',
      ],
      en: [
        'Given: for a 1:1 salt (e.g. AgCl) Ksp = 1.0 × 10⁻¹⁰; in the inert-salt medium γ₊ = γ₋ = 0.90 (roughly μ = 0.01 M for singly charged ions).',
        'γ₊·γ₋ = 0.90 × 0.90 = 0.81; Ksp / (γ₊γ₋) = 1.0 × 10⁻¹⁰ / 0.81 = 1.235 × 10⁻¹⁰.',
        's = √(1.235 × 10⁻¹⁰). Without activity corrections s = √Ksp = 1.0 × 10⁻⁵ M; the solubility has risen by about 11 %.',
        'Result: s = 1.111 × 10⁻⁵ M.',
      ],
    },
    mistakes: {
      tr: [
        'Formülü MA₂ ya da M₂A tipi tuzlara uygulamak (bu tuzlarda Ksp = 4s³ · γ’lar biçimindedir).',
        'Ortak iyon içeren bir tuz eklendiğinde (ör. AgCl’ye NaCl) yalnızca aktivite düzeltmesi yapıp ortak iyon etkisini atlamak.',
        'γ’ları 1’den büyük girmek ya da iyonik şiddeti çökelekten hesaplamak.',
      ],
      en: [
        'Applying the formula to MA₂ or M₂A salts (for these Ksp = 4s³ times the γ terms).',
        'Adding a salt with a common ion (e.g. NaCl to AgCl) and making only the activity correction, ignoring the common-ion effect.',
        'Entering γ values above 1, or computing the ionic strength from the precipitate itself.',
      ],
    },
    related: ['molar-solubility', 'common-ion', 'thermodynamic-k', 'ionic-strength'],
  },

  'ionic-strength': {
    concept: {
      tr: 'İyonik şiddet (μ), çözeltideki tüm iyonların toplam elektriksel “kalabalığını” ölçer. İyonlar arasındaki etkileşimler yüke çok duyarlı olduğundan, μ hesaplanırken her iyonun derişimi yükünün karesiyle ağırlıklandırılır.\n\nAktivite katsayıları türün kendisine değil, büyük ölçüde μ’ye bağlıdır. Bu yüzden aktivite düzeltmesinin ilk adımı her zaman iyonik şiddeti hesaplamaktır. Bu araç μ’yü hesaplar ve her iyon için sınır yasası, genişletilmiş Debye–Hückel ve Davies eşitliklerinden γ değerlerini yan yana verir.',
      en: 'Ionic strength (μ) measures the total electrical “crowding” produced by all ions in a solution. Because interactions between ions are very sensitive to charge, each ion’s concentration is weighted by the square of its charge.\n\nActivity coefficients depend mainly on μ, not on the identity of the other ions, so the first step of any activity correction is to calculate the ionic strength. This tool computes μ and lists, side by side, the γ of each ion from the limiting law, the extended Debye–Hückel equation and the Davies equation.',
    },
    meaning: {
      tr: 'μ = ½ Σ cᵢ·zᵢ². Toplam, çözeltideki bütün iyonlar (katyonlar ve anyonlar) üzerinden alınır; ½ çarpanı her tuzun hem katyonunu hem anyonunu saydığımız için gelir.\n\n• 1:1 elektrolit (NaCl): μ = C.\n• 2:1 ya da 1:2 elektrolit (CaCl₂, Na₂SO₄): μ = 3C.\n• 2:2 elektrolit (MgSO₄): μ = 4C.\n• Yüksüz moleküller μ’ye katkı vermez. Zayıf elektrolitlerde yalnızca iyonlaşmış kısım sayılır.\n\nAraçta her satır bir iyondur: derişim (M), yük ve isteğe bağlı olarak hidratlaşmış boyut α (pm). α verilmezse genişletilmiş Debye–Hückel sütunu boş kalır.',
      en: 'μ = ½ Σ cᵢ·zᵢ². The sum runs over every ion in solution (cations and anions); the factor ½ appears because both the cation and the anion of each salt are counted.\n\n• 1:1 electrolyte (NaCl): μ = C.\n• 2:1 or 1:2 electrolyte (CaCl₂, Na₂SO₄): μ = 3C.\n• 2:2 electrolyte (MgSO₄): μ = 4C.\n• Neutral molecules do not contribute. For weak electrolytes only the ionised fraction counts.\n\nIn the tool each line is one ion: concentration (M), charge and optionally the hydrated size α (pm). Without α the extended Debye–Hückel column stays empty.',
    },
    usage: {
      tr: [
        'Aktivite düzeltmesi gereken her hesapta ilk adım olarak μ’yü bulmak.',
        'Karışık tuz çözeltilerinde ve tamponlarda tüm iyonları birlikte değerlendirmek.',
        'Eşitlik seçimi: sınır yasası μ < 0,01 M, genişletilmiş Debye–Hückel μ < 0,1 M, Davies μ ≲ 0,5 M için uygundur (25 °C).',
        'Tuzun molaritesini değil, ayrıştıktan sonraki her iyonun derişimini girin.',
      ],
      en: [
        'Finding μ as the first step of any calculation that needs activity corrections.',
        'Handling all ions together in mixed salt solutions and buffers.',
        'Choosing the equation: limiting law for μ < 0.01 M, extended Debye–Hückel for μ < 0.1 M, Davies for μ ≲ 0.5 M (25 °C).',
        'Enter the concentration of each ion after dissociation, not the molarity of the salt.',
      ],
    },
    solution: {
      tr: [
        'Verilen (aracın örnek verisi): 0,10 M CaCl₂ → Ca²⁺: 0,10 M, z = +2, α = 600 pm; Cl⁻: 0,20 M, z = −1, α = 300 pm.',
        'μ = ½ (0,10 × 2² + 0,20 × 1²) = ½ (0,40 + 0,20) = 0,30 M.',
        'Ca²⁺ için γ: sınır yasası 0,07632; genişletilmiş Debye–Hückel 0,2898; Davies 0,2895. Cl⁻ için γ: 0,5256; 0,6584; 0,7335.',
        'Sonuç: μ = 0,30 M. Bu iyonik şiddet sınır yasasının ve genişletilmiş Debye–Hückel’in geçerlilik aralığının dışındadır; burada en uygun tahmin Davies değerleridir (γ(Ca²⁺) ≈ 0,29, γ(Cl⁻) ≈ 0,73).',
      ],
      en: [
        'Given (the tool’s sample data): 0.10 M CaCl₂ → Ca²⁺: 0.10 M, z = +2, α = 600 pm; Cl⁻: 0.20 M, z = −1, α = 300 pm.',
        'μ = ½ (0.10 × 2² + 0.20 × 1²) = ½ (0.40 + 0.20) = 0.30 M.',
        'γ of Ca²⁺: limiting law 0.07632; extended Debye–Hückel 0.2898; Davies 0.2895. γ of Cl⁻: 0.5256; 0.6584; 0.7335.',
        'Result: μ = 0.30 M. This is outside the range of the limiting law and of extended Debye–Hückel; the Davies values are the best estimate here (γ(Ca²⁺) ≈ 0.29, γ(Cl⁻) ≈ 0.73).',
      ],
    },
    mistakes: {
      tr: [
        'Anyonun derişimini stokiyometriye göre çarpmamak: 0,10 M CaCl₂’de [Cl⁻] = 0,20 M’dir.',
        'Yükün karesini almayı ya da ½ çarpanını unutmak.',
        'Yüksek iyonik şiddette sınır yasasına güvenmek; örnekte Ca²⁺ için γ’yı yaklaşık 4 kat küçük bulur.',
      ],
      en: [
        'Not multiplying the anion concentration by its stoichiometry: in 0.10 M CaCl₂, [Cl⁻] = 0.20 M.',
        'Forgetting to square the charge or to apply the factor ½.',
        'Trusting the limiting law at high ionic strength; in the example it underestimates γ of Ca²⁺ by a factor of about 4.',
      ],
    },
    related: ['debye-huckel', 'davies', 'activity', 'massconc-molarity'],
  },
};

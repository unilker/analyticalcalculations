import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Kinetics & Radiochemistry module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests for formula tools). Custom tools use their own
 * sample data, computed with the functions in src/core/fitting.ts.
 */
export const KINETICS_DETAILS: Record<string, ToolDetail> = {
  'first-order': {
    concept: {
      tr: 'Kinetik analiz yöntemlerinde dengeye ulaşmış bir sistemin sinyali değil, tepkimenin hızı ölçülür. Hız analit derişimiyle orantılı olduğundan, tepkime tamamlanmadan ölçüm yapılabilir; yavaş tepkimeler, enzim katalizli tayinler ve otomatik analizörler bu yaklaşıma dayanır.\n\nBirinci derece tepkimede hız, tepkimeye giren maddenin derişiminin birinci kuvvetiyle orantılıdır: −d[A]/dt = k[A]. Gerçekte iki maddenin girdiği bir tepkime de, reaktif (R) analite göre çok fazla (genellikle en az 10 kat) eklenirse yalancı birinci derece davranır: [R] pratikte sabit kalır ve k′ = k[R] olur.',
      en: 'Kinetic methods of analysis measure the rate of a reaction rather than a signal at equilibrium. Because the rate is proportional to the analyte concentration, the measurement can be made before the reaction is complete; slow reactions, enzyme-catalysed assays and automated analysers rely on this approach.\n\nIn a first-order reaction the rate is proportional to the first power of the reactant concentration: −d[A]/dt = k[A]. A reaction that really involves two species also behaves as pseudo-first-order when the reagent (R) is added in large excess over the analyte (typically at least tenfold): [R] stays practically constant and k′ = k[R].',
    },
    meaning: {
      tr: '−d[A]/dt = k[A] diferansiyel denklemi değişkenlerine ayrılıp 0’dan t’ye integre edilince ln([A]/[A]₀) = −kt, yani [A] = [A]₀ · e^(−kt) bulunur.\n\nDoğrusal biçim: ln[A] = ln[A]₀ − kt. ln[A]’nın zamana karşı grafiği eğimi −k olan bir doğrudur; bu doğrusallık tepkimenin birinci derece olduğunun kanıtıdır.\n\n• k’nin birimi zaman⁻¹’dir (s⁻¹, dk⁻¹); derişim biriminden bağımsızdır.\n• k·t boyutsuzdur; k ve t aynı zaman birimiyle girilmelidir.\n• Sabit süre yöntemi: belirli bir t anında ölçülen derişimden ln([A]₀/[A]) = kt ilişkisiyle [A]₀ (analit) ya da k bulunur.',
      en: 'Separating the variables in −d[A]/dt = k[A] and integrating from 0 to t gives ln([A]/[A]₀) = −kt, i.e. [A] = [A]₀ · e^(−kt).\n\nLinear form: ln[A] = ln[A]₀ − kt. A plot of ln[A] against time is a straight line of slope −k; this linearity is the evidence that the reaction is first order.\n\n• k has units of time⁻¹ (s⁻¹, min⁻¹), independent of the concentration unit.\n• k·t is dimensionless; k and t must be entered in the same time unit.\n• Fixed-time method: from the concentration measured at a chosen time t, ln([A]₀/[A]) = kt gives [A]₀ (the analyte) or k.',
    },
    usage: {
      tr: [
        'Birinci ya da yalancı birinci derece tepkimede belirli bir anda kalan derişimi hesaplamak.',
        'İki noktadaki derişimden k’yi ya da istenen dönüşüm için gereken süreyi bulmak.',
        'Yalancı birinci derece koşul ancak reaktif büyük fazlalıktaysa geçerlidir; aksi hâlde ikinci derece eşitlik kullanılmalıdır.',
        'Sıcaklık k’yi belirgin biçimde değiştirdiğinden ölçümler termostatlı ortamda yapılmalıdır.',
      ],
      en: [
        'Calculating the concentration remaining at a given time in a first- or pseudo-first-order reaction.',
        'Finding k from concentrations at two times, or the time needed for a desired conversion.',
        'The pseudo-first-order condition holds only when the reagent is in large excess; otherwise use the second-order equation.',
        'Temperature changes k markedly, so measurements should be made under thermostatted conditions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: [A]₀ = 0,05 M, k = 0,004 s⁻¹, t = 300 s.',
        'k·t = 0,004 s⁻¹ × 300 s = 1,2 (boyutsuz).',
        'e^(−1,2) = 0,3012; yani 300 s sonunda başlangıç miktarının yaklaşık %30’u kalır.',
        'Sonuç: [A] = 0,05 M × 0,3012 = 0,01506 M.',
      ],
      en: [
        'Given: [A]₀ = 0.05 M, k = 0.004 s⁻¹, t = 300 s.',
        'k·t = 0.004 s⁻¹ × 300 s = 1.2 (dimensionless).',
        'e^(−1.2) = 0.3012, so about 30% of the starting amount remains after 300 s.',
        'Result: [A] = 0.05 M × 0.3012 = 0.01506 M.',
      ],
    },
    mistakes: {
      tr: [
        'ln yerine log kullanmak: log[A]–t grafiğinin eğimi −k değil −k/2,303’tür.',
        'k’yi dk⁻¹, t’yi saniye cinsinden girmek (60 kat hata).',
        'Reaktif fazlalığı yeterli değilken tepkimeyi yalancı birinci derece kabul etmek.',
      ],
      en: [
        'Using log instead of ln: the slope of a log[A]–t plot is −k/2.303, not −k.',
        'Entering k in min⁻¹ and t in seconds (a factor of 60).',
        'Treating the reaction as pseudo-first-order when the reagent excess is too small.',
      ],
    },
    related: ['half-life', 'second-order', 'kinetics-order', 'radioactive-decay'],
  },

  'half-life': {
    concept: {
      tr: 'Yarılanma süresi (t½), tepkimeye giren maddenin derişiminin (ya da radyoaktif bir çekirdeğin aktivitesinin) başlangıç değerinin yarısına inmesi için geçen süredir. Birinci derece süreçlerde t½ başlangıç derişiminden bağımsızdır; bu yüzden bir tepkimenin ya da radyoizotopun ne kadar “hızlı” olduğunu tek bir sayıyla anlatmanın en pratik yoludur.',
      en: 'The half-life (t½) is the time required for the concentration of a reactant (or the activity of a radionuclide) to fall to half of its initial value. For first-order processes t½ does not depend on the starting concentration, which makes it the most convenient single number for describing how “fast” a reaction or a radioisotope is.',
    },
    meaning: {
      tr: 'Birinci derece integral hız yasasında [A] = [A]₀/2 yazılırsa ln 2 = k · t½, yani t½ = ln 2 / k ≈ 0,693 / k bulunur. Radyoaktif bozunmada aynı ilişki bozunma sabiti λ ile yazılır: t½ = ln 2 / λ.\n\nn yarılanma süresi sonunda kalan kesir (½)ⁿ’dir:\n• 1 t½ → %50, 2 t½ → %25, 3 t½ → %12,5.\n• Yaklaşık 7 t½ sonra %1’in, 10 t½ sonra yaklaşık %0,1’in altına iner; tepkime pratikte tamamlanmış sayılır.\n\nBu bağımsızlık yalnızca birinci derece için geçerlidir. İkinci derece tepkimede t½ = 1/(k[A]₀) olup başlangıç derişimine bağlıdır.',
      en: 'Setting [A] = [A]₀/2 in the first-order integrated rate law gives ln 2 = k · t½, so t½ = ln 2 / k ≈ 0.693 / k. For radioactive decay the same relation is written with the decay constant λ: t½ = ln 2 / λ.\n\nThe fraction left after n half-lives is (½)ⁿ:\n• 1 t½ → 50%, 2 t½ → 25%, 3 t½ → 12.5%.\n• After about 7 t½ less than 1% remains, after 10 t½ about 0.1%; the reaction is then practically complete.\n\nThis independence holds only for first order. For a second-order reaction t½ = 1/(k[A]₀), which depends on the initial concentration.',
    },
    usage: {
      tr: [
        'Hız sabitinden yarılanma süresini ya da tersini hesaplamak.',
        'Bir kinetik yöntemde ölçüm süresini planlamak (ör. tepkimenin %99’u için yaklaşık 7 t½).',
        'Radyoizotoplar için bozunma sabiti λ ile t½ arasında dönüşüm yapmak.',
        'Yalnızca birinci (ya da yalancı birinci) derece süreçlerde geçerlidir.',
      ],
      en: [
        'Converting a rate constant to a half-life or vice versa.',
        'Planning the measurement time in a kinetic method (e.g. about 7 t½ for 99% reaction).',
        'Converting between the decay constant λ and t½ for radioisotopes.',
        'Valid only for first-order (or pseudo-first-order) processes.',
      ],
    },
    solution: {
      tr: [
        'Verilen: k = 0,004 s⁻¹.',
        't½ = ln 2 / k = 0,6931 / 0,004 s⁻¹ = 173,3 s.',
        'Saniyeden dakikaya: 173,3 s / 60 s/dk.',
        'Sonuç: t½ = 2,888 dk.',
      ],
      en: [
        'Given: k = 0.004 s⁻¹.',
        't½ = ln 2 / k = 0.6931 / 0.004 s⁻¹ = 173.3 s.',
        'Seconds to minutes: 173.3 s / 60 s/min.',
        'Result: t½ = 2.888 min.',
      ],
    },
    mistakes: {
      tr: [
        'Sonucun birimini k’nin zaman birimine göre okumamak: k s⁻¹ ise ln 2/k saniye verir.',
        't½ = ln 2/k ilişkisini ikinci derece tepkimelere uygulamak.',
        'ln 2 yerine log 2 (0,301) kullanmak.',
      ],
      en: [
        'Not reading the result in the time unit of k: if k is in s⁻¹, ln 2/k is in seconds.',
        'Applying t½ = ln 2/k to second-order reactions.',
        'Using log 2 (0.301) instead of ln 2.',
      ],
    },
    related: ['first-order', 'radioactive-decay', 'second-order'],
  },

  'second-order': {
    concept: {
      tr: 'İkinci derece tepkimede hız, tek bir maddenin derişiminin karesiyle (2A → ürün) ya da iki maddenin derişimlerinin çarpımıyla (A + B → ürün) orantılıdır. Kinetik analiz yöntemlerinde analit ile reaktifin tepkimesi çoğu zaman gerçekte ikinci derecedir; reaktif büyük fazlalıkta kullanılmadığında bu eşitlik gerekir.\n\nBu araç, tek bir türün kendisiyle tepkimeye girdiği (ya da A ile B’nin eşit başlangıç derişimlerinde bulunduğu) durumu ele alır.',
      en: 'In a second-order reaction the rate is proportional to the square of one concentration (2A → products) or to the product of two concentrations (A + B → products). In kinetic methods the reaction between analyte and reagent is often truly second order, and this equation is needed when the reagent is not in large excess.\n\nThis tool treats the case of a single species reacting with itself (or A and B present at equal initial concentrations).',
    },
    meaning: {
      tr: 'Hız yasası −d[A]/dt = k[A]² integre edilince 1/[A] − 1/[A]₀ = kt, yani 1/[A] = 1/[A]₀ + kt bulunur.\n\n• 1/[A]’nın zamana karşı grafiği eğimi k, kesişimi 1/[A]₀ olan bir doğrudur.\n• k’nin birimi derişim⁻¹ · zaman⁻¹’dir (M⁻¹ s⁻¹); derişimin hangi birimde girildiği sonucu etkiler.\n• t½ = 1/(k[A]₀): başlangıç derişimi azaldıkça yarılanma süresi uzar.\n\nA + B tepkimesinde [A]₀ ≠ [B]₀ ise integral biçim farklıdır ve bu eşitlik doğrudan uygulanamaz; [B]₀ ≫ [A]₀ ise tepkime yalancı birinci derece olur.',
      en: 'Integrating the rate law −d[A]/dt = k[A]² gives 1/[A] − 1/[A]₀ = kt, i.e. 1/[A] = 1/[A]₀ + kt.\n\n• A plot of 1/[A] against time is a straight line with slope k and intercept 1/[A]₀.\n• k has units of concentration⁻¹ · time⁻¹ (M⁻¹ s⁻¹), so the concentration unit used matters.\n• t½ = 1/(k[A]₀): the half-life gets longer as the initial concentration decreases.\n\nFor A + B with [A]₀ ≠ [B]₀ the integrated form is different and this equation does not apply directly; if [B]₀ ≫ [A]₀ the reaction becomes pseudo-first-order.',
    },
    usage: {
      tr: [
        '2A → ürün tipi ya da eşit başlangıç derişimli A + B tepkimelerinde kalan derişimi hesaplamak.',
        'Bir noktadaki derişimden k’yi ya da gereken süreyi bulmak.',
        'Tepkime derecesini bilmiyorsanız önce veriyi [A], ln[A] ve 1/[A] grafikleriyle sınayın.',
        'Bazı kaynaklar hızı −½ d[A]/dt olarak tanımlar; o zaman eşitlik 1/[A] = 1/[A]₀ + 2kt olur.',
      ],
      en: [
        'Concentration remaining in 2A → products, or in A + B with equal initial concentrations.',
        'Finding k or the required time from the concentration at one point.',
        'If the order is unknown, first test the data with [A], ln[A] and 1/[A] plots.',
        'Some texts define the rate as −½ d[A]/dt; the equation then becomes 1/[A] = 1/[A]₀ + 2kt.',
      ],
    },
    solution: {
      tr: [
        'Verilen: [A]₀ = 0,02 M, k = 0,5 M⁻¹ s⁻¹, t = 100 s.',
        '1/[A]₀ = 1/0,02 M = 50 M⁻¹; k·t = 0,5 M⁻¹ s⁻¹ × 100 s = 50 M⁻¹.',
        '1/[A] = 50 + 50 = 100 M⁻¹. (t½ = 1/(k[A]₀) = 100 s olduğundan bu an tam bir yarılanma süresine karşılık gelir.)',
        'Sonuç: [A] = 1/100 M⁻¹ = 0,01 M.',
      ],
      en: [
        'Given: [A]₀ = 0.02 M, k = 0.5 M⁻¹ s⁻¹, t = 100 s.',
        '1/[A]₀ = 1/0.02 M = 50 M⁻¹; k·t = 0.5 M⁻¹ s⁻¹ × 100 s = 50 M⁻¹.',
        '1/[A] = 50 + 50 = 100 M⁻¹. (Since t½ = 1/(k[A]₀) = 100 s, this time is exactly one half-life.)',
        'Result: [A] = 1/100 M⁻¹ = 0.01 M.',
      ],
    },
    mistakes: {
      tr: [
        'k’nin birimini s⁻¹ sanmak; ikinci derece k M⁻¹ s⁻¹ birimindedir ve derişim mM girilirse sayısal değeri değişir.',
        'Yarılanma süresini ln 2/k ile hesaplamak.',
        'Hız tanımındaki stokiyometrik katsayıyı (2 çarpanı) gözden kaçırıp kaynaktaki k’yi yanlış kullanmak.',
      ],
      en: [
        'Giving k units of s⁻¹; a second-order k is in M⁻¹ s⁻¹, and its numerical value changes if concentrations are in mM.',
        'Calculating the half-life as ln 2/k.',
        'Overlooking the stoichiometric factor (the 2) in the rate definition and misusing a literature k.',
      ],
    },
    related: ['first-order', 'kinetics-order', 'half-life'],
  },

  'michaelis-menten': {
    concept: {
      tr: 'Enzimler, analitik kimyada hem çok seçici reaktif hem de tayin edilecek analit olarak kullanılır (ör. glukoz oksidaz ile kan şekeri tayini). Enzim katalizli bir tepkimenin başlangıç hızı substrat derişimiyle önce doğrusal artar, yüksek derişimde ise enzimin tüm aktif merkezleri dolduğu için bir üst sınıra (V_max) yaklaşır. Michaelis–Menten eşitliği bu doyma davranışını tanımlar.',
      en: 'Enzymes are used in analytical chemistry both as highly selective reagents and as analytes (e.g. blood glucose determined with glucose oxidase). The initial rate of an enzyme-catalysed reaction first increases linearly with substrate concentration and then levels off at an upper limit (V_max) when all active sites of the enzyme are occupied. The Michaelis–Menten equation describes this saturation behaviour.',
    },
    meaning: {
      tr: 'Mekanizma: E + S ⇌ ES → E + P. Enzim–substrat kompleksi [ES] için kararlı durum yaklaşımı (d[ES]/dt ≈ 0) uygulanınca v = V_max[S]/(K_m + [S]) elde edilir. Burada K_m = (k₋₁ + k₂)/k₁ ve V_max = k₂[E]_toplam’dır.\n\n• [S] = K_m iken v = V_max/2; K_m bu yüzden derişim birimindedir.\n• [S] ≪ K_m: v ≈ (V_max/K_m)[S]; hız substrat derişimiyle doğru orantılıdır → substrat tayini.\n• [S] ≫ K_m: v ≈ V_max; hız [S]’den bağımsız, enzim derişimiyle orantılıdır → enzim aktivitesi tayini.\n\nEşitlik başlangıç hızları için geçerlidir; tepkime ilerledikçe substrat tükenir ve ürün inhibisyonu ortaya çıkabilir.',
      en: 'Mechanism: E + S ⇌ ES → E + P. Applying the steady-state approximation to the enzyme–substrate complex (d[ES]/dt ≈ 0) gives v = V_max[S]/(K_m + [S]), where K_m = (k₋₁ + k₂)/k₁ and V_max = k₂[E]_total.\n\n• When [S] = K_m, v = V_max/2; K_m therefore has concentration units.\n• [S] ≪ K_m: v ≈ (V_max/K_m)[S]; the rate is proportional to substrate concentration → substrate assays.\n• [S] ≫ K_m: v ≈ V_max; the rate is independent of [S] and proportional to enzyme concentration → enzyme activity assays.\n\nThe equation applies to initial rates; as the reaction proceeds the substrate is depleted and product inhibition may appear.',
    },
    usage: {
      tr: [
        'Bilinen K_m ve V_max ile belirli bir substrat derişimindeki başlangıç hızını hesaplamak.',
        'Substrat tayininde doğrusal bölgede ([S] ≲ 0,1 K_m gibi) çalışıldığını kontrol etmek.',
        'Enzim tayininde substratı K_m’nin çok üzerinde tutarak hızın V_max’a yakın olmasını sağlamak.',
        'K_m ve V_max değerleri pH, sıcaklık ve iyonik şiddete bağlıdır; aynı koşullarda ölçülmüş olmalıdır.',
      ],
      en: [
        'Initial rate at a given substrate concentration from known K_m and V_max.',
        'Checking that a substrate assay works in the linear region (e.g. [S] ≲ 0.1 K_m).',
        'For enzyme assays, keeping the substrate well above K_m so that the rate is close to V_max.',
        'K_m and V_max depend on pH, temperature and ionic strength; they must refer to the same conditions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: V_max = 10 µM/dk, [S] = 0,5 mM, K_m = 0,8 mM.',
        '[S] ve K_m aynı birimde olduğundan oran doğrudan alınır: [S]/(K_m + [S]) = 0,5/(0,8 + 0,5) = 0,3846.',
        'Yani hız V_max’ın yaklaşık %38’idir; [S] < K_m olduğundan enzim henüz doygun değildir.',
        'Sonuç: v = 10 µM/dk × 0,3846 = 3,846 µM/dk.',
      ],
      en: [
        'Given: V_max = 10 µM/min, [S] = 0.5 mM, K_m = 0.8 mM.',
        '[S] and K_m share a unit, so the ratio is taken directly: [S]/(K_m + [S]) = 0.5/(0.8 + 0.5) = 0.3846.',
        'The rate is thus about 38% of V_max; since [S] < K_m the enzyme is not yet saturated.',
        'Result: v = 10 µM/min × 0.3846 = 3.846 µM/min.',
      ],
    },
    mistakes: {
      tr: [
        '[S] ve K_m’yi farklı birimlerde (mM ile µM) girmek.',
        'Başlangıç hızı yerine tepkime ilerledikten sonra ölçülen ortalama hızı kullanmak.',
        'V_max’ı enzimin sabit bir özelliği sanmak; V_max enzim derişimiyle orantılıdır, K_m ise değildir.',
      ],
      en: [
        'Entering [S] and K_m in different units (mM vs µM).',
        'Using an average rate measured late in the reaction instead of the initial rate.',
        'Treating V_max as a fixed property of the enzyme; V_max is proportional to enzyme concentration, K_m is not.',
      ],
    },
    related: ['lineweaver-burk', 'first-order', 'arrhenius'],
  },

  arrhenius: {
    concept: {
      tr: 'Tepkime hızları sıcaklıkla hızla artar. Arrhenius eşitliği bu artışı, moleküllerin tepkimeye girebilmek için aşması gereken enerji engeli olan aktivasyon enerjisi (Eₐ) ile açıklar. Kinetik analiz yöntemlerinde sonuç doğrudan hız sabitine bağlı olduğundan, sıcaklık denetimi denge yöntemlerine göre çok daha kritiktir.',
      en: 'Reaction rates increase steeply with temperature. The Arrhenius equation explains this increase through the activation energy (Eₐ), the energy barrier molecules must overcome in order to react. Since the result of a kinetic method depends directly on the rate constant, temperature control is far more critical than in equilibrium methods.',
    },
    meaning: {
      tr: 'k = A · e^(−Eₐ/RT). e^(−Eₐ/RT) terimi, çarpışmaların enerji engelini aşabilen kesrini; A (frekans ya da üstel öncesi faktör) ise uygun yönelimli çarpışmaların sıklığını temsil eder. A, k ile aynı birimdedir.\n\nDoğrusal biçim: ln k = ln A − (Eₐ/R)(1/T). ln k’nın 1/T’ye karşı grafiği (Arrhenius grafiği) eğimi −Eₐ/R olan bir doğrudur; bu grafikten Eₐ ve A bulunur.\n\n• T mutlaka kelvin olmalıdır; R = 8,314 J mol⁻¹ K⁻¹ kullanılırken Eₐ J/mol cinsinden girilir.\n• Sıcaklık duyarlılığı: d(ln k)/dT = Eₐ/(RT²). Eₐ = 50 kJ/mol için oda sıcaklığında bu değer yaklaşık 0,07 K⁻¹’dir; yani 1 K’lik değişim k’yi yaklaşık %7 değiştirir.',
      en: 'k = A · e^(−Eₐ/RT). The term e^(−Eₐ/RT) is the fraction of collisions energetic enough to cross the barrier, and A (the frequency or pre-exponential factor) reflects how often suitably oriented collisions occur. A has the same units as k.\n\nLinear form: ln k = ln A − (Eₐ/R)(1/T). A plot of ln k against 1/T (Arrhenius plot) is a straight line of slope −Eₐ/R, from which Eₐ and A are obtained.\n\n• T must be in kelvin; with R = 8.314 J mol⁻¹ K⁻¹, Eₐ is entered in J/mol.\n• Temperature sensitivity: d(ln k)/dT = Eₐ/(RT²). For Eₐ = 50 kJ/mol at room temperature this is about 0.07 K⁻¹, so a 1 K change alters k by roughly 7%.',
    },
    usage: {
      tr: [
        'Bilinen A ve Eₐ ile herhangi bir sıcaklıktaki hız sabitini hesaplamak.',
        'Bir k değerinden ve A’dan Eₐ’yı ya da gerekli sıcaklığı bulmak.',
        'Eₐ ve A, sınırlı bir sıcaklık aralığında sabit kabul edilir; geniş aralıklarda ya da mekanizma değişirse grafik eğrilir.',
        'Enzim tepkimelerinde yüksek sıcaklıkta enzim denatüre olduğundan Arrhenius davranışı bozulur.',
      ],
      en: [
        'Rate constant at any temperature from known A and Eₐ.',
        'Finding Eₐ or the required temperature from a value of k and A.',
        'Eₐ and A are assumed constant over a limited temperature range; over wide ranges or if the mechanism changes the plot curves.',
        'In enzyme reactions Arrhenius behaviour breaks down at high temperature because the enzyme denatures.',
      ],
    },
    solution: {
      tr: [
        'Verilen: A = 1 × 10¹³ s⁻¹, Eₐ = 80 kJ/mol = 80 000 J/mol, T = 25 °C = 298,15 K.',
        'Eₐ/(RT) = 80 000 J/mol / (8,314 J mol⁻¹ K⁻¹ × 298,15 K) = 32,27.',
        'e^(−32,27) = 9,652 × 10⁻¹⁵.',
        'Sonuç: k = 1 × 10¹³ s⁻¹ × 9,652 × 10⁻¹⁵ = 0,09652 s⁻¹ (k, A ile aynı birimdedir).',
      ],
      en: [
        'Given: A = 1 × 10¹³ s⁻¹, Eₐ = 80 kJ/mol = 80 000 J/mol, T = 25 °C = 298.15 K.',
        'Eₐ/(RT) = 80 000 J/mol / (8.314 J mol⁻¹ K⁻¹ × 298.15 K) = 32.27.',
        'e^(−32.27) = 9.652 × 10⁻¹⁵.',
        'Result: k = 1 × 10¹³ s⁻¹ × 9.652 × 10⁻¹⁵ = 0.09652 s⁻¹ (k has the units of A).',
      ],
    },
    mistakes: {
      tr: [
        'Sıcaklığı °C olarak formüle koymak.',
        'Eₐ’yı kJ/mol, R’yi J mol⁻¹ K⁻¹ olarak kullanıp 1000 katlık hata yapmak.',
        'Arrhenius grafiğinde log k kullanıp eğimi −Eₐ/R saymak (log ile eğim −Eₐ/(2,303R)’dir).',
      ],
      en: [
        'Putting the temperature into the formula in °C.',
        'Using Eₐ in kJ/mol with R in J mol⁻¹ K⁻¹ (a factor of 1000).',
        'Plotting log k and taking the slope as −Eₐ/R (with log the slope is −Eₐ/(2.303R)).',
      ],
    },
    related: ['arrhenius-two-point', 'first-order', 'michaelis-menten'],
  },

  'arrhenius-two-point': {
    concept: {
      tr: 'Frekans faktörü A çoğu zaman bilinmez. Aynı tepkimenin hız sabiti iki farklı sıcaklıkta ölçülürse, Arrhenius eşitliğinin iki sıcaklık için yazılan biçimleri birbirinden çıkarılarak A yok edilir. Böylece yalnızca iki ölçümle aktivasyon enerjisi bulunabilir ya da bilinen Eₐ ile başka bir sıcaklıktaki hız öngörülebilir.',
      en: 'The pre-exponential factor A is often unknown. If the rate constant of the same reaction is measured at two temperatures, subtracting the Arrhenius equation written for each temperature eliminates A. The activation energy can then be found from just two measurements, or the rate at another temperature predicted from a known Eₐ.',
    },
    meaning: {
      tr: 'ln k₂ = ln A − Eₐ/(RT₂) ve ln k₁ = ln A − Eₐ/(RT₁) taraf tarafa çıkarılınca ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂) bulunur.\n\n• T₂ > T₁ ve Eₐ > 0 ise k₂/k₁ > 1’dir.\n• Oran boyutsuzdur; k’nin birimi ve tepkime derecesi önemli değildir (iki k aynı birimde olmalıdır).\n• Sık anılan “10 °C’de hız iki katına çıkar” kuralı, oda sıcaklığı civarında yaklaşık 50 kJ/mol aktivasyon enerjisine karşılık gelir; genel bir yasa değildir.\n\nİki noktalı hesap, çok noktalı bir Arrhenius grafiğine göre ölçüm hatalarına daha duyarlıdır.',
      en: 'Subtracting ln k₁ = ln A − Eₐ/(RT₁) from ln k₂ = ln A − Eₐ/(RT₂) gives ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂).\n\n• If T₂ > T₁ and Eₐ > 0, then k₂/k₁ > 1.\n• The ratio is dimensionless; the units of k and the reaction order do not matter (both k values must share a unit).\n• The familiar rule “the rate doubles for every 10 °C” corresponds to an activation energy of about 50 kJ/mol near room temperature; it is not a general law.\n\nA two-point calculation is more sensitive to measurement errors than a multi-point Arrhenius plot.',
    },
    usage: {
      tr: [
        'İki sıcaklıktaki hız sabitlerinden Eₐ’yı bulmak.',
        'Bilinen Eₐ ile sıcaklık değişiminin hıza etkisini öngörmek (ör. kinetik yöntemde termostat hatasının etkisi).',
        'İki sıcaklık arasındaki fark çok küçükse 1/T₁ − 1/T₂ farkı küçük olur ve Eₐ’daki belirsizlik büyür.',
        'Eₐ’nın iki sıcaklık arasında sabit olduğu varsayılır.',
      ],
      en: [
        'Finding Eₐ from rate constants at two temperatures.',
        'Predicting the effect of a temperature change on the rate from a known Eₐ (e.g. thermostat error in a kinetic method).',
        'If the two temperatures are very close, 1/T₁ − 1/T₂ is small and the uncertainty in Eₐ becomes large.',
        'Eₐ is assumed constant between the two temperatures.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Eₐ = 50 kJ/mol = 50 000 J/mol, T₁ = 25 °C = 298,15 K, T₂ = 35 °C = 308,15 K.',
        '1/T₁ − 1/T₂ = 1/298,15 − 1/308,15 = 1,088 × 10⁻⁴ K⁻¹; Eₐ/R = 50 000 / 8,314 = 6014 K.',
        'ln(k₂/k₁) = 6014 K × 1,088 × 10⁻⁴ K⁻¹ = 0,6545.',
        'Sonuç: k₂/k₁ = e^0,6545 = 1,924; yani 10 °C’lik artış hızı yaklaşık iki katına çıkarır.',
      ],
      en: [
        'Given: Eₐ = 50 kJ/mol = 50 000 J/mol, T₁ = 25 °C = 298.15 K, T₂ = 35 °C = 308.15 K.',
        '1/T₁ − 1/T₂ = 1/298.15 − 1/308.15 = 1.088 × 10⁻⁴ K⁻¹; Eₐ/R = 50 000 / 8.314 = 6014 K.',
        'ln(k₂/k₁) = 6014 K × 1.088 × 10⁻⁴ K⁻¹ = 0.6545.',
        'Result: k₂/k₁ = e^0.6545 = 1.924, so a 10 °C rise roughly doubles the rate.',
      ],
    },
    mistakes: {
      tr: [
        '1/T farkını °C değerleriyle hesaplamak (1/25 − 1/35 tamamen yanlış sonuç verir).',
        'T₁ ile T₂’yi karıştırıp oranı ters (k₁/k₂) okumak.',
        'Eₐ’yı kJ/mol, R’yi J mol⁻¹ K⁻¹ ile birlikte kullanmak.',
      ],
      en: [
        'Calculating the 1/T difference from °C values (1/25 − 1/35 gives a completely wrong answer).',
        'Swapping T₁ and T₂ and reading the ratio upside down (k₁/k₂).',
        'Combining Eₐ in kJ/mol with R in J mol⁻¹ K⁻¹.',
      ],
    },
    related: ['arrhenius', 'first-order', 'half-life'],
  },

  'radioactive-decay': {
    concept: {
      tr: 'Radyoaktif bozunma, kararsız bir çekirdeğin kendiliğinden α, β ya da γ ışıması yaparak başka bir çekirdeğe dönüşmesidir. Bozunma kendiliğinden ve rastgele bir süreç olduğundan, birim zamandaki bozunma sayısı yalnızca mevcut çekirdek sayısıyla orantılıdır: süreç birinci derecedir ve hız sabiti sıcaklık ya da kimyasal ortamdan pratikte etkilenmez.\n\nRadyokimyasal ölçümlerde numune ve standart çoğu zaman farklı zamanlarda sayılır; kısa ömürlü izotoplarda bu nedenle aktivitelerin ortak bir referans zamanına göre düzeltilmesi gerekir.',
      en: 'Radioactive decay is the spontaneous transformation of an unstable nucleus into another nucleus with emission of α, β or γ radiation. Because decay is spontaneous and random, the number of decays per unit time is proportional only to the number of nuclei present: the process is first order, and its rate constant is practically unaffected by temperature or chemical environment.\n\nIn radiochemical work sample and standard are often counted at different times, so with short-lived isotopes the activities must be corrected to a common reference time.',
    },
    meaning: {
      tr: 'Aktivite (A), birim zamandaki bozunma sayısıdır: A = λN. SI birimi becquerel’dir (1 Bq = 1 bozunma/s); eski birim curie, 1 Ci = 3,7 × 10¹⁰ Bq.\n\nN = N₀e^(−λt) olduğundan A = A₀e^(−λt). λ = ln 2/t½ yerine konunca e^(−λt) = (½)^(t/t½) olur; araçtaki A = A₀ · (½)^(t/t½) biçimi budur.\n\n• t/t½ oranı, geçen yarılanma süresi sayısıdır; t ve t½ aynı birimde olmalıdır.\n• Tersine çözüm (A₀ = A / (½)^(t/t½)) bozunma düzeltmesidir: ölçüm anındaki aktiviteden referans zamanındaki aktivite bulunur.',
      en: 'Activity (A) is the number of decays per unit time: A = λN. Its SI unit is the becquerel (1 Bq = 1 decay/s); the older unit is the curie, 1 Ci = 3.7 × 10¹⁰ Bq.\n\nSince N = N₀e^(−λt), A = A₀e^(−λt). Substituting λ = ln 2/t½ gives e^(−λt) = (½)^(t/t½), which is the form A = A₀ · (½)^(t/t½) used in the tool.\n\n• t/t½ is the number of half-lives elapsed; t and t½ must be in the same unit.\n• Solving backwards (A₀ = A / (½)^(t/t½)) is a decay correction: the activity at a reference time is obtained from the activity at the time of measurement.',
    },
    usage: {
      tr: [
        'Belirli bir süre sonra kalan aktiviteyi ya da çekirdek sayısını hesaplamak.',
        'Farklı zamanlarda sayılan numune ve standartları ortak bir referans zamanına düzeltmek.',
        'İki aktivite ölçümünden yarılanma süresini ya da bir örneğin yaşını bulmak.',
        'Tek bir radyonüklid için geçerlidir; ana çekirdekten ürün oluşumu (ana–ürün dengesi) varsa ayrı ele alınmalıdır.',
      ],
      en: [
        'Activity or number of nuclei remaining after a given time.',
        'Correcting samples and standards counted at different times to a common reference time.',
        'Finding a half-life or the age of a sample from two activity measurements.',
        'Valid for a single radionuclide; ingrowth from a parent (parent–daughter equilibrium) must be treated separately.',
      ],
    },
    solution: {
      tr: [
        'Verilen: A₀ = 100 kBq, t = 10 gün, t½ = 5,27 gün.',
        't/t½ = 10 gün / 5,27 gün = 1,898 yarılanma süresi.',
        '(½)^1,898 = 0,2684.',
        'Sonuç: A = 100 kBq × 0,2684 = 26,84 kBq.',
      ],
      en: [
        'Given: A₀ = 100 kBq, t = 10 d, t½ = 5.27 d.',
        't/t½ = 10 d / 5.27 d = 1.898 half-lives.',
        '(½)^1.898 = 0.2684.',
        'Result: A = 100 kBq × 0.2684 = 26.84 kBq.',
      ],
    },
    mistakes: {
      tr: [
        't ve t½’yi farklı birimlerde girmek (gün ile yıl).',
        'Dedektörün verdiği sayım hızını (cpm) aktivite sanmak; ikisi dedektör verimiyle ilişkilidir.',
        'Sayım süresi yarılanma süresine göre uzunsa sayım sırasında oluşan bozunmayı ihmal etmek.',
      ],
      en: [
        'Entering t and t½ in different units (days vs years).',
        'Taking the detector count rate (cpm) as the activity; the two are related through the detector efficiency.',
        'Ignoring decay during counting when the counting time is not short compared with the half-life.',
      ],
    },
    related: ['half-life', 'activity-atoms', 'counting-statistics', 'naa-activity'],
  },

  'activity-atoms': {
    concept: {
      tr: 'Uzun ömürlü radyoizotoplar genellikle tartılamayacak kadar küçük miktarlarda bulunur; buna karşın aktiviteleri kolayca ölçülür. Aktivite ile çekirdek sayısı arasındaki A = λN ilişkisi, ölçülen aktiviteden numunedeki atom sayısına ve madde miktarına geçmeyi sağlar. Bu, radyokimyasal yöntemlerin son derece düşük miktarları belirleyebilmesinin temelidir.',
      en: 'Long-lived radioisotopes are often present in quantities far too small to weigh, yet their activity is easy to measure. The relation A = λN between activity and number of nuclei allows the measured activity to be converted into the number of atoms and the amount of substance in the sample. This is why radiochemical methods can determine extremely small quantities.',
    },
    meaning: {
      tr: 'A = λN, λ = ln 2/t½ ve N = n · N_A birleştirilince A = (ln 2/t½) · n · N_A elde edilir.\n\n• A becquerel (s⁻¹) ise t½ saniyeye çevrilmelidir; 1 yıl = 365,25 × 86 400 s.\n• Aynı aktivite için t½ ne kadar uzunsa o kadar çok atom gerekir. Kısa ömürlü bir izotopun çok az miktarı bile yüksek aktivite gösterir.\n• Özgül aktivite (Bq/g) bu ilişkiden A/m olarak bulunur.\n\n“Uzun ömürlü” koşulu, ölçüm süresince aktivitenin pratikte değişmemesini ifade eder; aksi hâlde ölçüm anına göre bozunma düzeltmesi gerekir.',
      en: 'Combining A = λN, λ = ln 2/t½ and N = n · N_A gives A = (ln 2/t½) · n · N_A.\n\n• With A in becquerels (s⁻¹), t½ must be converted to seconds; 1 year = 365.25 × 86 400 s.\n• For the same activity, the longer t½ is, the more atoms are needed. A tiny amount of a short-lived isotope already shows a high activity.\n• The specific activity (Bq/g) follows from this relation as A/m.\n\n“Long-lived” means the activity does not change appreciably during the measurement; otherwise a decay correction to the time of measurement is needed.',
    },
    usage: {
      tr: [
        'Ölçülen aktiviteden radyoizotopun mol ya da atom sayısını bulmak.',
        'Bilinen bir miktarın beklenen aktivitesini ya da özgül aktivitesini hesaplamak.',
        'Bilinen miktar ve ölçülen aktiviteden çok uzun bir yarılanma süresini tahmin etmek.',
        'A, dedektörde sayılan değil gerçek bozunma hızıdır; sayım hızı önce dedektör verimiyle düzeltilmelidir.',
      ],
      en: [
        'Moles or number of atoms of a radioisotope from its measured activity.',
        'Expected activity or specific activity of a known amount.',
        'Estimating a very long half-life from a known amount and its measured activity.',
        'A is the true decay rate, not the count rate; correct the count rate for detector efficiency first.',
      ],
    },
    solution: {
      tr: [
        'Verilen: A = 470 723,7 Bq, t½ = 28,1 yıl = 28,1 × 365,25 × 86 400 s = 8,868 × 10⁸ s.',
        'λ = ln 2 / t½ = 0,6931 / 8,868 × 10⁸ s = 7,817 × 10⁻¹⁰ s⁻¹.',
        'N = A / λ = 470 723,7 s⁻¹ / 7,817 × 10⁻¹⁰ s⁻¹ = 6,022 × 10¹⁴ atom.',
        'Sonuç: n = N / N_A = 6,022 × 10¹⁴ / 6,022 × 10²³ mol⁻¹ = 1 × 10⁻³ µmol (1 nmol).',
      ],
      en: [
        'Given: A = 470 723.7 Bq, t½ = 28.1 y = 28.1 × 365.25 × 86 400 s = 8.868 × 10⁸ s.',
        'λ = ln 2 / t½ = 0.6931 / 8.868 × 10⁸ s = 7.817 × 10⁻¹⁰ s⁻¹.',
        'N = A / λ = 470 723.7 s⁻¹ / 7.817 × 10⁻¹⁰ s⁻¹ = 6.022 × 10¹⁴ atoms.',
        'Result: n = N / N_A = 6.022 × 10¹⁴ / 6.022 × 10²³ mol⁻¹ = 1 × 10⁻³ µmol (1 nmol).',
      ],
    },
    mistakes: {
      tr: [
        't½’yi yıl olarak bırakıp aktiviteyi Bq (s⁻¹) olarak kullanmak.',
        'Sayım hızını (cpm) doğrudan aktivite yerine koymak.',
        'λ ile t½’yi karıştırmak (λ = ln 2/t½, t½ = ln 2/λ).',
      ],
      en: [
        'Leaving t½ in years while using the activity in Bq (s⁻¹).',
        'Substituting the count rate (cpm) directly for the activity.',
        'Confusing λ with t½ (λ = ln 2/t½, t½ = ln 2/λ).',
      ],
    },
    related: ['radioactive-decay', 'half-life', 'moles', 'counting-statistics'],
  },

  'counting-statistics': {
    concept: {
      tr: 'Radyoaktif bozunma rastgele bir süreç olduğundan, aynı numune aynı sürede tekrar tekrar sayıldığında farklı sayımlar elde edilir. Bu dağılım Poisson dağılımına uyar ve en önemli sonucu şudur: toplam N sayımın standart sapması σ = √N’dir. Böylece tek bir ölçümden bile sonucun kesinliği tahmin edilebilir; kesinliği artırmanın yolu daha çok sayım toplamaktır.',
      en: 'Because radioactive decay is random, repeated counts of the same sample over the same time give different results. Their distribution follows Poisson statistics, whose key consequence is that the standard deviation of a total of N counts is σ = √N. The precision can therefore be estimated even from a single measurement, and the way to improve it is to collect more counts.',
    },
    meaning: {
      tr: 'σ_N = √N olduğundan bağıl standart sapma σ_N/N = 1/√N, yüzde olarak RSD = 100/√N’dir. Tersinden, istenen bağıl kesinlik için N = (100/RSD)² sayım toplanmalıdır.\n\n• Kesinliği iki kat artırmak için sayım dört kat artırılmalıdır.\n• Sayım hızı R = N/t ise σ_R = √N/t’dir; karekök sayım hızına değil, toplam sayıma uygulanır.\n• Fon (background) çıkarıldığında belirsizlikler kareler toplamıyla birleşir: σ_net = √(σ_toplam² + σ_fon²) = √(N_toplam + N_fon) (eşit sayım süreleri için).\n\nPoisson yaklaşımı yalnızca sayım istatistiğinden gelen belirsizliği verir; numune hazırlama ve geometri gibi diğer hata kaynaklarını içermez.',
      en: 'Since σ_N = √N, the relative standard deviation is σ_N/N = 1/√N, or RSD = 100/√N in percent. Conversely, a target relative precision requires N = (100/RSD)² counts.\n\n• Halving the RSD requires four times as many counts.\n• For a count rate R = N/t, σ_R = √N/t; the square root applies to the total counts, not to the rate.\n• When background is subtracted the uncertainties add in quadrature: σ_net = √(σ_gross² + σ_bkg²) = √(N_gross + N_bkg) (for equal counting times).\n\nThe Poisson estimate covers only the counting uncertainty; it does not include other sources such as sample preparation or geometry.',
    },
    usage: {
      tr: [
        'Bir sayımın bağıl standart sapmasını tahmin etmek.',
        'İstenen kesinlik için gereken toplam sayımı ve sayım hızından gereken süreyi planlamak.',
        'Aktivite düşük ve fon yüksekse net sayımın belirsizliği belirgin biçimde artar; fon da yeterince uzun sayılmalıdır.',
        'Yalnızca ham (düzeltilmemiş) sayımlara uygulanır.',
      ],
      en: [
        'Estimating the relative standard deviation of a count.',
        'Planning the total counts, and from the count rate the counting time, needed for a target precision.',
        'At low activity and high background the net-count uncertainty grows markedly; count the background long enough too.',
        'Applies only to raw (uncorrected) counts.',
      ],
    },
    solution: {
      tr: [
        'Verilen: istenen bağıl standart sapma RSD = %1.',
        'RSD = 100/√N → √N = 100/RSD = 100/1 = 100.',
        'Örneğin sayım hızı 500 sayım/dk olsaydı bu sayıma 20 dk’de ulaşılırdı.',
        'Sonuç: N = 100² = 10000 sayım.',
      ],
      en: [
        'Given: target relative standard deviation RSD = 1%.',
        'RSD = 100/√N → √N = 100/RSD = 100/1 = 100.',
        'For example, at a count rate of 500 counts/min this would take 20 min.',
        'Result: N = 100² = 10000 counts.',
      ],
    },
    mistakes: {
      tr: [
        'Karekökü sayım hızına (cpm) uygulamak: 100 cpm’lik bir hızın standart sapması 10 cpm değildir, sayım süresine bağlıdır.',
        'Fon çıkarılmış net sayımın karekökünü almak; fonun belirsizliği de eklenmelidir.',
        'Kesinliği iki katına çıkarmak için sayım süresini yalnızca iki katına çıkarmak.',
      ],
      en: [
        'Applying the square root to a count rate (cpm): the standard deviation of 100 cpm is not 10 cpm, it depends on the counting time.',
        'Taking the square root of the background-corrected net counts; the background uncertainty must be added.',
        'Doubling the counting time to halve the RSD (it must be quadrupled).',
      ],
    },
    related: ['radioactive-decay', 'propagation', 'descriptive', 'signal-to-noise'],
  },

  'isotope-dilution': {
    concept: {
      tr: 'İzotop seyreltme, analitin tamamının geri kazanılmasının zor olduğu karmaşık numunelerde kullanılan güçlü bir yöntemdir. Numuneye, analitin radyoaktif olarak işaretlenmiş bir biçiminden (izleyici) bilinen kütle ve aktivitede eklenir. İşaretli ve işaretsiz moleküller tamamen karıştıktan sonra analitin yalnızca bir kısmının saf olarak ayrılması yeterlidir; ayrılan kısmın özgül aktivitesindeki azalma, numunedeki analit miktarını verir.\n\nAynı ilke kararlı izotoplar ve kütle spektrometrisiyle de uygulanır (IDMS) ve yüksek doğruluklu referans yöntemlerin temelini oluşturur.',
      en: 'Isotope dilution is a powerful method for complex samples in which complete recovery of the analyte is difficult. A known mass and activity of a radioactively labelled form of the analyte (the tracer) is added to the sample. After labelled and unlabelled molecules have mixed completely, it is enough to isolate only part of the analyte in pure form; the decrease in specific activity of the isolated portion gives the amount of analyte in the sample.\n\nThe same principle is applied with stable isotopes and mass spectrometry (IDMS) and underlies high-accuracy reference methods.',
    },
    meaning: {
      tr: 'İzleyicinin özgül aktivitesi A_T/w_T’dir. Numuneyle karıştıktan sonra toplam aktivite değişmez, ancak w_x + w_T kütlesine yayılır; karışımın özgül aktivitesi A_T/(w_x + w_T) olur. Ayrılan saf kısım da aynı özgül aktiviteye sahiptir: A_A/w_A = A_T/(w_x + w_T).\n\nBu eşitlik w_x için çözülünce wₓ = (A_T/A_A) · w_A − w_T bulunur.\n\n• Geri kazanım verimi formülde yer almaz; ayrılan kısmın saf olması yeterlidir.\n• A_T ve A_A aynı koşullarda (aynı dedektör, geometri ve referans zamanı) ölçülmelidir; oran kullanıldığı için sayım hızları da (cpm) girilebilir.\n• İzleyici kütlesi ihmal edilebilecek kadar küçükse wₓ ≈ (A_T/A_A) · w_A.',
      en: 'The specific activity of the tracer is A_T/w_T. After mixing with the sample the total activity is unchanged but is spread over a mass w_x + w_T, so the specific activity of the mixture is A_T/(w_x + w_T). The isolated pure portion has the same specific activity: A_A/w_A = A_T/(w_x + w_T).\n\nSolving for w_x gives wₓ = (A_T/A_A) · w_A − w_T.\n\n• The recovery does not appear in the formula; the isolated portion only has to be pure.\n• A_T and A_A must be measured under the same conditions (same detector, geometry and reference time); because a ratio is used, count rates (cpm) may be entered.\n• If the tracer mass is negligible, wₓ ≈ (A_T/A_A) · w_A.',
    },
    usage: {
      tr: [
        'Biyolojik ve çevresel numunelerde, nicel ayırmanın mümkün olmadığı analitlerin tayini.',
        'İzleyici ile analitin tamamen karışması (izotopik denge) şarttır.',
        'İzleyici kimyasal olarak analitle aynı olmalı ve işaret, ayırma sırasında kopmamalıdır.',
        'Kısa ömürlü izleyicilerde A_T ve A_A aynı referans zamanına göre bozunma düzeltmesinden geçirilmelidir.',
      ],
      en: [
        'Determining analytes in biological and environmental samples where quantitative separation is not possible.',
        'Complete mixing of tracer and analyte (isotopic equilibration) is essential.',
        'The tracer must be chemically identical to the analyte, and the label must not be lost during the separation.',
        'With short-lived tracers, A_T and A_A must be decay-corrected to the same reference time.',
      ],
    },
    solution: {
      tr: [
        'Verilen: A_T = 549 sayım/dk (eklenen işaretli insülin), w_T = 1 mg; ayrılan saf insülin w_A = 18,3 mg, A_A = 148 sayım/dk.',
        'A_T/A_A = 549/148 = 3,709.',
        '(A_T/A_A) · w_A = 3,709 × 18,3 mg = 67,88 mg (analit + izleyici).',
        'Sonuç: wₓ = 67,88 mg − 1 mg = 66,88 mg insülin.',
      ],
      en: [
        'Given: A_T = 549 counts/min (labelled insulin added), w_T = 1 mg; isolated pure insulin w_A = 18.3 mg, A_A = 148 counts/min.',
        'A_T/A_A = 549/148 = 3.709.',
        '(A_T/A_A) · w_A = 3.709 × 18.3 mg = 67.88 mg (analyte + tracer).',
        'Result: wₓ = 67.88 mg − 1 mg = 66.88 mg of insulin.',
      ],
    },
    mistakes: {
      tr: [
        'Eklenen izleyicinin kütlesini (w_T) çıkarmayı unutmak.',
        'A_A yerine ayrılan kısmın özgül aktivitesini, A_T yerine toplam aktiviteyi karışık biçimde kullanmak; iki değer aynı türden (toplam aktivite ya da sayım hızı) olmalıdır.',
        'İzotopik denge kurulmadan ayırma yapmak.',
      ],
      en: [
        'Forgetting to subtract the mass of tracer added (w_T).',
        'Mixing a specific activity for A_A with a total activity for A_T; both must be of the same kind (total activity or count rate).',
        'Separating before isotopic equilibration is reached.',
      ],
    },
    related: ['counting-statistics', 'radioactive-decay', 'recovery', 'std-addition-single'],
  },

  'naa-comparator': {
    concept: {
      tr: 'Nötron aktivasyon analizinde (NAA) numune nötronlarla ışınlanır; kararlı çekirdekler nötron yakalayarak radyoaktif izotoplara dönüşür ve bunların yaydığı ışıma (çoğunlukla γ) ölçülür. Oluşan aktiviteyi mutlak olarak hesaplamak için nötron akısı, tesir kesiti ve dedektör verimi gibi belirsizliği yüksek büyüklükler gerekir.\n\nKarşılaştırma (komparatör) yönteminde bu büyüklüklerin hiçbirine gerek yoktur: analitin bilinen miktarını içeren bir standart, numuneyle birlikte ışınlanır ve aynı koşullarda sayılır. Böylece tüm ortak çarpanlar oranda sadeleşir.',
      en: 'In neutron activation analysis (NAA) the sample is irradiated with neutrons; stable nuclei capture neutrons and become radioactive isotopes whose emitted radiation (usually γ) is measured. Calculating the induced activity absolutely requires quantities with large uncertainties, such as the neutron flux, cross-section and detector efficiency.\n\nThe comparator method needs none of these: a standard containing a known amount of the analyte is irradiated together with the sample and counted under the same conditions, so all common factors cancel in the ratio.',
    },
    meaning: {
      tr: 'Aynı ışınlama süresi ve akıda oluşan aktivite, hedef elementin kütlesiyle doğru orantılıdır; aynı bekleme süresinden sonra aynı geometride sayılan aktiviteler için de bu orantı korunur:\n\nAₓ/A_s = wₓ/w_s  →  wₓ = w_s · Aₓ/A_s.\n\n• Akı, tesir kesiti, izotop bolluğu, doygunluk ve bozunma çarpanları ile dedektör verimi oranda sadeleşir.\n• Standardın ve numunenin sayımı farklı zamanlarda yapılırsa aktiviteler ortak bir zamana göre bozunma düzeltmesinden geçirilmelidir.\n• Sonuç kütle olarak çıkar; numune kütlesine bölünerek yüzde ya da ppm’e çevrilir.',
      en: 'For the same irradiation time and flux, the induced activity is proportional to the mass of the target element; the proportionality still holds for activities counted after the same delay and in the same geometry:\n\nAₓ/A_s = wₓ/w_s  →  wₓ = w_s · Aₓ/A_s.\n\n• Flux, cross-section, isotopic abundance, saturation and decay factors, and detector efficiency all cancel in the ratio.\n• If sample and standard are counted at different times, the activities must be decay-corrected to a common time.\n• The result is a mass; divide by the sample mass to obtain percent or ppm.',
    },
    usage: {
      tr: [
        'Çelik, kayaç, biyolojik doku gibi katılarda eser ve ana bileşen elementlerinin tahribatsız tayini.',
        'Numune ve standart aynı akıda ışınlanmalı, aynı bekleme süresi ve geometride sayılmalıdır.',
        'Standart, numuneye bileşim ve boyut olarak benzer olmalıdır; aksi hâlde nötron ve γ ışını soğurmasındaki farklar hataya yol açar.',
      ],
      en: [
        'Non-destructive determination of trace and major elements in solids such as steel, rock or biological tissue.',
        'Sample and standard must be irradiated in the same flux and counted after the same delay and in the same geometry.',
        'The standard should resemble the sample in composition and size; otherwise differences in neutron and γ-ray absorption cause errors.',
      ],
    },
    solution: {
      tr: [
        'Verilen: standart 0,950 g çelik, %0,463 Mn → w_s = 0,950 g × 0,00463 = 4,3985 mg Mn.',
        'Ölçülen aktiviteler: Aₓ = 2542, A_s = 1984 (aynı birimde sayım hızları); Aₓ/A_s = 1,281.',
        'wₓ = 4,3985 mg × 1,281 (numune 1,000 g ise bu %0,564 Mn demektir).',
        'Sonuç: wₓ = 5,636 mg Mn.',
      ],
      en: [
        'Given: standard 0.950 g of steel with 0.463% Mn → w_s = 0.950 g × 0.00463 = 4.3985 mg Mn.',
        'Measured activities: Aₓ = 2542, A_s = 1984 (count rates in the same unit); Aₓ/A_s = 1.281.',
        'wₓ = 4.3985 mg × 1.281 (for a 1.000 g sample this means 0.564% Mn).',
        'Result: wₓ = 5.636 mg Mn.',
      ],
    },
    mistakes: {
      tr: [
        'Standart kütlesini (0,950 g) analit kütlesi yerine kullanmak; w_s standarttaki analitin kütlesidir.',
        'Numune ve standardı farklı bekleme sürelerinden sonra sayıp bozunma düzeltmesi yapmamak.',
        'Oranı ters kurmak (A_s/Aₓ).',
      ],
      en: [
        'Using the mass of the standard (0.950 g) instead of the analyte mass in it; w_s is the analyte mass.',
        'Counting sample and standard after different delays without a decay correction.',
        'Inverting the ratio (A_s/Aₓ).',
      ],
    },
    related: ['naa-activity', 'radioactive-decay', 'counting-statistics', 'percent-ww'],
  },

  'naa-activity': {
    concept: {
      tr: 'Nötron ışınlaması sırasında hedef çekirdekler sabit bir hızla radyoaktif ürüne dönüşürken oluşan ürün de kendi yarılanma süresiyle bozunur. Bu iki süreç dengeye yaklaştıkça aktivite artmayı bırakır ve doygunluk aktivitesine ulaşır. Aktivasyon eşitliği, ışınlama koşullarından beklenen aktiviteyi hesaplayarak deneyin planlanmasını (ışınlama ve bekleme süresinin seçimi, ölçülebilirlik tahmini) sağlar.',
      en: 'During neutron irradiation the target nuclei are converted into the radioactive product at a constant rate, while the product itself decays with its own half-life. As these two processes approach balance the activity stops growing and reaches the saturation activity. The activation equation predicts the activity expected from the irradiation conditions and is used to plan an experiment (choice of irradiation and decay times, estimate of detectability).',
    },
    meaning: {
      tr: 'Hedef çekirdek sayısı N = m·θ·N_A/M’dir (θ: hedef izotopun doğal bolluğu). Ürünün oluşma hızı R = N·σ·φ’dir; σ tesir kesiti (1 barn = 10⁻²⁴ cm²), φ nötron akısıdır (cm⁻² s⁻¹).\n\ndN*/dt = R − λN* denklemi integre edilince ışınlama sonundaki aktivite:\nA₀ = N·σ·φ · (1 − e^(−λ·t_ı)).\n\n• (1 − e^(−λt_ı)) doygunluk çarpanıdır: 1 t½’de 0,5, 5 t½’de yaklaşık 0,97’dir; daha uzun ışınlama kazanç sağlamaz.\n• N·σ·φ doygunluk aktivitesidir (Bq).\n• Işınlama bittikten t_b süre sonra sayım yapılıyorsa bozunma çarpanı eklenir: A = A₀ · e^(−λt_b). Bu araç ışınlama sonundaki aktiviteyi verir.\n\nEşitlik ince numune (öz-perdeleme yok) ve düzgün akı varsayar.',
      en: 'The number of target nuclei is N = m·θ·N_A/M (θ: natural abundance of the target isotope). The product is formed at a rate R = N·σ·φ, where σ is the cross-section (1 barn = 10⁻²⁴ cm²) and φ the neutron flux (cm⁻² s⁻¹).\n\nIntegrating dN*/dt = R − λN* gives the activity at the end of irradiation:\nA₀ = N·σ·φ · (1 − e^(−λ·t_i)).\n\n• (1 − e^(−λt_i)) is the saturation factor: 0.5 after 1 t½ and about 0.97 after 5 t½; longer irradiation brings no gain.\n• N·σ·φ is the saturation activity (Bq).\n• If counting starts a time t_d after the end of irradiation, a decay factor is added: A = A₀ · e^(−λt_d). This tool gives the activity at the end of irradiation.\n\nThe equation assumes a thin sample (no self-shielding) and a uniform flux.',
    },
    usage: {
      tr: [
        'Bir NAA deneyinde ışınlama sonunda beklenen aktiviteyi tahmin etmek.',
        'Uygun ışınlama süresini seçmek: kısa ömürlü ürünlerde birkaç yarılanma süresi yeterlidir.',
        'Tersinden, ölçülen aktiviteden element kütlesini hesaplamak (mutlak yöntem); akı ve tesir kesitindeki belirsizlik nedeniyle karşılaştırma yöntemi genellikle daha doğrudur.',
        'Tesir kesiti nötron enerjisine bağlıdır; çizelge değerleri çoğunlukla termal nötronlar içindir.',
      ],
      en: [
        'Estimating the activity expected at the end of irradiation in an NAA experiment.',
        'Choosing the irradiation time: for short-lived products a few half-lives are enough.',
        'Conversely, calculating the element mass from a measured activity (absolute method); because of uncertainties in flux and cross-section the comparator method is usually more accurate.',
        'The cross-section depends on neutron energy; tabulated values usually refer to thermal neutrons.',
      ],
    },
    solution: {
      tr: [
        'Verilen: m = 1000 mg (1 g) Al, θ = 1, M = 26,98 g/mol, σ = 0,231 barn, φ = 1 × 10¹² cm⁻² s⁻¹, t_ı = 10 dk, t½(²⁸Al) = 2,24 dk.',
        'N = 1 g × 6,022 × 10²³ mol⁻¹ / 26,98 g/mol = 2,232 × 10²² atom; N·σ·φ = 2,232 × 10²² × 0,231 × 10⁻²⁴ cm² × 10¹² cm⁻² s⁻¹ = 5,156 × 10⁹ Bq (doygunluk aktivitesi).',
        'Doygunluk çarpanı: t_ı/t½ = 4,461 → 1 − (½)^4,461 = 0,9546.',
        'Sonuç: A₀ = 5,156 × 10⁹ Bq × 0,9546 = 4,922 × 10⁹ Bq = 4922 MBq.',
      ],
      en: [
        'Given: m = 1000 mg (1 g) Al, θ = 1, M = 26.98 g/mol, σ = 0.231 barn, φ = 1 × 10¹² cm⁻² s⁻¹, t_i = 10 min, t½(²⁸Al) = 2.24 min.',
        'N = 1 g × 6.022 × 10²³ mol⁻¹ / 26.98 g/mol = 2.232 × 10²² atoms; N·σ·φ = 2.232 × 10²² × 0.231 × 10⁻²⁴ cm² × 10¹² cm⁻² s⁻¹ = 5.156 × 10⁹ Bq (saturation activity).',
        'Saturation factor: t_i/t½ = 4.461 → 1 − (½)^4.461 = 0.9546.',
        'Result: A₀ = 5.156 × 10⁹ Bq × 0.9546 = 4.922 × 10⁹ Bq = 4922 MBq.',
      ],
    },
    mistakes: {
      tr: [
        'Tesir kesitini barn olarak girip 10⁻²⁴ cm² dönüşümünü unutmak (araç bunu kendisi yapar, elle hesapta dikkat edin).',
        'Çok izotoplu elementlerde izotop bolluğunu (θ) 1 almak.',
        'Işınlama sonu ile sayım arasındaki bozunmayı hesaba katmamak.',
      ],
      en: [
        'Forgetting the 10⁻²⁴ cm² conversion for a cross-section in barns (the tool does it, but watch it in hand calculations).',
        'Taking the isotopic abundance (θ) as 1 for elements with several isotopes.',
        'Ignoring decay between the end of irradiation and counting.',
      ],
    },
    related: ['naa-comparator', 'radioactive-decay', 'activity-atoms', 'half-life'],
  },

  'tga-mass-loss': {
    concept: {
      tr: 'Termogravimetri (TGA), numunenin kütlesinin kontrollü ısıtma sırasında sıcaklığa (ya da zamana) karşı sürekli kaydedilmesidir. Kristal suyunun uzaklaşması, bozunma ya da yanma gibi olaylar termogramda kütle kaybı basamakları olarak görülür. Her basamağın beklenen yüzde değeri stokiyometriden hesaplanır ve ölçülenle karşılaştırılarak hangi grubun kaybolduğu anlaşılır ya da numunenin bileşimi bulunur.',
      en: 'Thermogravimetry (TGA) records the mass of a sample continuously against temperature (or time) during controlled heating. Events such as loss of water of crystallisation, decomposition or combustion appear as mass-loss steps in the thermogram. The expected percentage for each step is calculated from stoichiometry and compared with the measured one to identify the group lost or to find the composition of the sample.',
    },
    meaning: {
      tr: '% kayıp = n · M(kaybolan) / M(bileşik) × 100. Bileşiğin bir molünden n mol grup ayrılır; kütle kaybının başlangıç kütlesine oranı, molar kütlelerin oranına eşittir.\n\nTGA eğrisi başlangıç kütlesinin yüzdesi olarak çizildiğinden, ardışık basamaklarda da payda başlangıçtaki bileşiğin molar kütlesidir. Örneğin CaC₂O₄·H₂O (146,11 g/mol) için:\n• H₂O kaybı → CaC₂O₄: %12,33\n• CO kaybı → CaCO₃: %19,17\n• CO₂ kaybı → CaO: %30,12 (kalan CaO: %38,38)\n\nBasamakların görüldüğü sıcaklıklar ısıtma hızı ve atmosfere bağlıdır, kütle değişimi ise stokiyometriyle belirlenir.',
      en: '% loss = n · M(lost) / M(compound) × 100. One mole of compound releases n moles of the group, so the mass lost as a fraction of the starting mass equals the ratio of molar masses.\n\nSince a TGA curve is plotted as a percentage of the initial mass, the denominator for successive steps is still the molar mass of the original compound. For CaC₂O₄·H₂O (146.11 g/mol), for example:\n• loss of H₂O → CaC₂O₄: 12.33%\n• loss of CO → CaCO₃: 19.17%\n• loss of CO₂ → CaO: 30.12% (CaO residue: 38.38%)\n\nThe temperatures at which steps appear depend on heating rate and atmosphere, whereas the mass changes are fixed by stoichiometry.',
    },
    usage: {
      tr: [
        'Bir TGA basamağının hangi gruba (H₂O, CO, CO₂…) ait olduğunu belirlemek.',
        'Hidratlarda kristal suyu sayısını bulmak: ölçülen kayıp, n’nin farklı değerleri için hesaplananlarla karşılaştırılır.',
        'Karışımlarda bir bileşenin oranını bulmak: ölçülen basamak / kuramsal basamak.',
        'Yalnızca kütle değişimi olan olaylar görülür; erime gibi kütlesiz geçişler için DTA/DSC gerekir.',
      ],
      en: [
        'Identifying which group (H₂O, CO, CO₂…) a TGA step corresponds to.',
        'Finding the number of waters of hydration by comparing the measured loss with values calculated for different n.',
        'Finding the fraction of a component in a mixture: measured step / theoretical step.',
        'Only events involving a mass change are seen; transitions such as melting need DTA/DSC.',
      ],
    },
    solution: {
      tr: [
        'Verilen: CaC₂O₄·H₂O → CaC₂O₄ + H₂O; n = 1, M(H₂O) = 18,015 g/mol, M(CaC₂O₄·H₂O) = 146,11 g/mol.',
        '% kayıp = 1 × 18,015 / 146,11 × 100.',
        'Sonuç: % kayıp = 12,33 (ilk basamak, kristal suyunun uzaklaşması).',
      ],
      en: [
        'Given: CaC₂O₄·H₂O → CaC₂O₄ + H₂O; n = 1, M(H₂O) = 18.015 g/mol, M(CaC₂O₄·H₂O) = 146.11 g/mol.',
        '% loss = 1 × 18.015 / 146.11 × 100.',
        'Result: % loss = 12.33 (first step, loss of the water of crystallisation).',
      ],
    },
    mistakes: {
      tr: [
        'İkinci ve sonraki basamaklarda paydaya ara ürünün molar kütlesini yazmak (CO basamağı CaC₂O₄’e göre %21,87, başlangıç kütlesine göre %19,17’dir).',
        'Birden çok su kaybeden hidratlarda n’yi 1 bırakmak.',
        'Basamak sıcaklıklarını sabit sanmak; ısıtma hızı ve atmosfer değişince kayarlar.',
      ],
      en: [
        'Using the molar mass of an intermediate as the denominator for later steps (the CO step is 21.87% relative to CaC₂O₄ but 19.17% of the initial mass).',
        'Leaving n = 1 for hydrates that lose several waters.',
        'Treating step temperatures as fixed; they shift with heating rate and atmosphere.',
      ],
    },
    related: ['mass-loss', 'grav-factor', 'molar-mass', 'grav-percent'],
  },

  'kinetics-order': {
    concept: {
      tr: 'Bir tepkimenin derecesi ve hız sabiti çoğu zaman deneysel olarak, derişimin zamanla nasıl değiştiğine bakılarak bulunur. Her tepkime derecesinin integral hız yasası, uygun bir değişken zamana karşı çizildiğinde doğru verir. Hangi grafik doğrusal ise tepkime o derecedendir; doğrunun eğimi de hız sabitini verir.\n\nBu araç aynı zaman–derişim verisine üç grafiği birden uydurur ve en yüksek R² değerine sahip olanı önerir.',
      en: 'The order and rate constant of a reaction are usually found experimentally by observing how the concentration changes with time. The integrated rate law of each order gives a straight line when the appropriate quantity is plotted against time. Whichever plot is linear reveals the order, and its slope gives the rate constant.\n\nThis tool fits all three plots to the same time–concentration data and proposes the one with the highest R².',
    },
    meaning: {
      tr: 'Üç doğrusal biçim:\n• 0. derece: [A] = [A]₀ − kt → [A]–t eğimi −k; k birimi derişim/zaman; t½ = [A]₀/(2k).\n• 1. derece: ln[A] = ln[A]₀ − kt → ln[A]–t eğimi −k; k birimi 1/zaman; t½ = ln 2/k.\n• 2. derece: 1/[A] = 1/[A]₀ + kt → 1/[A]–t eğimi +k; k birimi 1/(derişim·zaman); t½ = 1/(k[A]₀).\n\nAraç her grafik için en küçük kareler doğrusu, R², k, kesişimden [A]₀ ve t½ hesaplar. k’nin birimi, girdiğiniz zaman ve derişim birimlerinden gelir.\n\nVeri yalnızca tepkimenin başını (bir yarılanma süresinden az) kapsıyorsa üç grafik de neredeyse doğrusal görünür; dereceyi güvenilir ayırt etmek için tepkime en az 2–3 yarılanma süresi izlenmelidir.',
      en: 'The three linear forms:\n• Zero order: [A] = [A]₀ − kt → slope of [A]–t is −k; k in concentration/time; t½ = [A]₀/(2k).\n• First order: ln[A] = ln[A]₀ − kt → slope of ln[A]–t is −k; k in 1/time; t½ = ln 2/k.\n• Second order: 1/[A] = 1/[A]₀ + kt → slope of 1/[A]–t is +k; k in 1/(concentration·time); t½ = 1/(k[A]₀).\n\nFor each plot the tool computes the least-squares line, R², k, [A]₀ from the intercept, and t½. The units of k follow from the time and concentration units you enter.\n\nIf the data cover only the start of the reaction (less than one half-life), all three plots look almost linear; to distinguish the order reliably the reaction should be followed for at least 2–3 half-lives.',
    },
    usage: {
      tr: [
        'Zaman–derişim (ya da derişimle orantılı absorbans) verisinden tepkime derecesini ve k’yi bulmak.',
        'En az 3, tercihen 6 veya daha çok nokta girin; derişimler pozitif olmalıdır.',
        'R² değerleri birbirine yakınsa artıkların (residual) dağılımına bakın ya da tepkimeyi daha uzun izleyin.',
        'Absorbans kullanılıyorsa, sonsuz zamandaki absorbans sıfır değilse önce çıkarılmalıdır.',
      ],
      en: [
        'Order and k from time–concentration data (or absorbance proportional to concentration).',
        'Enter at least 3, preferably 6 or more points; concentrations must be positive.',
        'If the R² values are close, look at the residuals or follow the reaction for longer.',
        'When using absorbance, subtract any non-zero absorbance at infinite time first.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: t = 0–360 s (60 s aralıklarla), [A] = 0,0500 → 0,0118 M (yedi nokta).',
        'R² değerleri: [A]–t için 0,9593; ln[A]–t için 0,99999 (ekranda 1 olarak yuvarlanır); 1/[A]–t için 0,9589 → tepkime birinci derecedir.',
        'ln[A]–t doğrusunun eğimi −0,004004 s⁻¹; kesişimden [A]₀ = e^(−2,996) = 0,04998 M.',
        'Sonuç: k = 0,004004 s⁻¹ ve t½ = ln 2/k = 173,1 s (≈ 2,9 dk).',
      ],
      en: [
        'Sample data: t = 0–360 s (every 60 s), [A] = 0.0500 → 0.0118 M (seven points).',
        'R² values: 0.9593 for [A]–t; 0.99999 for ln[A]–t (rounded to 1 on screen); 0.9589 for 1/[A]–t → the reaction is first order.',
        'The slope of the ln[A]–t line is −0.004004 s⁻¹; from the intercept [A]₀ = e^(−2.996) = 0.04998 M.',
        'Result: k = 0.004004 s⁻¹ and t½ = ln 2/k = 173.1 s (≈ 2.9 min).',
      ],
    },
    mistakes: {
      tr: [
        'Yalnızca R²’ye bakarak karar vermek; az sayıda ya da kısa süreli veride R² farkları anlamsız olabilir.',
        'k’nin birimini dereceden bağımsız yazmak (0. derece M/s, 1. derece s⁻¹, 2. derece M⁻¹ s⁻¹).',
        'ln yerine log ile çizilen grafiğin eğimini doğrudan k saymak.',
      ],
      en: [
        'Deciding on R² alone; with few points or a short time span the R² differences may be meaningless.',
        'Writing the unit of k regardless of order (zero order M/s, first order s⁻¹, second order M⁻¹ s⁻¹).',
        'Taking the slope of a log (not ln) plot directly as k.',
      ],
    },
    related: ['first-order', 'second-order', 'half-life', 'linear-regression'],
  },

  'lineweaver-burk': {
    concept: {
      tr: 'Michaelis–Menten eşitliği doğrusal değildir; hesap makineleri ve bilgisayarlar yaygınlaşmadan önce K_m ve V_max değerlerini bulmak için eşitlik doğrusal bir biçime dönüştürülürdü. Lineweaver–Burk (çift ters) grafiği bu dönüşümlerin en bilinenidir: 1/v, 1/[S]’ye karşı çizilince doğru elde edilir. Grafik, inhibisyon türlerini görsel olarak ayırt etmekte hâlâ yaygın biçimde kullanılır.',
      en: 'The Michaelis–Menten equation is non-linear; before calculators and computers were common, K_m and V_max were obtained by transforming it into a linear form. The Lineweaver–Burk (double-reciprocal) plot is the best known of these: plotting 1/v against 1/[S] gives a straight line. The plot is still widely used to distinguish types of inhibition visually.',
    },
    meaning: {
      tr: 'v = V_max[S]/(K_m + [S]) eşitliğinin iki tarafının tersi alınınca 1/v = (K_m/V_max)·(1/[S]) + 1/V_max bulunur.\n\n• y-kesişimi = 1/V_max → V_max = 1/kesişim.\n• Eğim = K_m/V_max → K_m = eğim × V_max.\n• x-kesişimi = −1/K_m.\n• Yarışmalı inhibisyonda y-kesişimi değişmez, eğim artar; yarışmasız (non-competitive) inhibisyonda y-kesişimi artar.\n\nÖnemli sakınca (ağırlıklandırma): ters alma işlemi hataları eşit dağıtmaz. En düşük [S] değerlerinde v küçük, 1/v büyüktür ve v’deki küçük bir mutlak hata 1/v’de büyük bir hataya dönüşür. Ağırlıksız en küçük kareler bu en belirsiz noktalara en çok etkiyi verir. Daha güvenilir sonuç için Michaelis–Menten eşitliğine doğrudan doğrusal olmayan regresyon ya da hataları daha dengeli dağıtan Hanes–Woolf ([S]/v – [S]) grafiği tercih edilir.',
      en: 'Taking the reciprocal of both sides of v = V_max[S]/(K_m + [S]) gives 1/v = (K_m/V_max)·(1/[S]) + 1/V_max.\n\n• y-intercept = 1/V_max → V_max = 1/intercept.\n• Slope = K_m/V_max → K_m = slope × V_max.\n• x-intercept = −1/K_m.\n• With competitive inhibition the y-intercept is unchanged and the slope increases; with non-competitive inhibition the y-intercept increases.\n\nImportant drawback (weighting): taking reciprocals does not distribute errors evenly. At the lowest [S] the rate v is small and 1/v large, so a small absolute error in v becomes a large error in 1/v. An unweighted least-squares fit gives these least certain points the most influence. For more reliable values, fit the Michaelis–Menten equation directly by non-linear regression, or use the Hanes–Woolf plot ([S]/v vs [S]), which spreads the errors more evenly.',
    },
    usage: {
      tr: [
        'Başlangıç hızı–substrat derişimi verisinden K_m ve V_max’ı tahmin etmek.',
        'İnhibitörlü ve inhibitörsüz grafikleri karşılaştırarak inhibisyon türünü belirlemek.',
        'Substrat derişimlerini K_m’nin altında ve üstünde dengeli seçin; yalnızca düşük [S] noktaları sonucu güvenilmez yapar.',
        'Hızlar başlangıç hızları olmalı, tüm ölçümler aynı enzim derişimi, pH ve sıcaklıkta yapılmalıdır.',
      ],
      en: [
        'Estimating K_m and V_max from initial rate versus substrate concentration data.',
        'Identifying the type of inhibition by comparing plots with and without inhibitor.',
        'Choose substrate concentrations spread below and above K_m; only low-[S] points make the result unreliable.',
        'Rates must be initial rates, all measured at the same enzyme concentration, pH and temperature.',
      ],
    },
    solution: {
      tr: [
        'Örnek veri: [S] = 0,10; 0,20; 0,50; 1,00; 2,00; 5,00 mM ve v = 1,11; 2,00; 3,85; 5,56; 7,14; 8,62 µM/dk.',
        'Ters değerler: 1/[S] = 10 … 0,2 mM⁻¹, 1/v = 0,9009 … 0,1160 dk/µM; bu noktalara doğru uydurulur.',
        'Eğim = 0,08009 mM·dk/µM, kesişim = 0,09981 dk/µM, R² = 0,999999 (ekranda 1).',
        'Sonuç: V_max = 1/0,09981 = 10,02 µM/dk ve K_m = 0,08009 × 10,02 = 0,8025 mM (veri K_m = 0,8 mM, V_max = 10 µM/dk ile üretilmiştir; küçük fark hızların yuvarlanmasından gelir).',
      ],
      en: [
        'Sample data: [S] = 0.10, 0.20, 0.50, 1.00, 2.00, 5.00 mM and v = 1.11, 2.00, 3.85, 5.56, 7.14, 8.62 µM/min.',
        'Reciprocals: 1/[S] = 10 … 0.2 mM⁻¹, 1/v = 0.9009 … 0.1160 min/µM; a straight line is fitted to these points.',
        'Slope = 0.08009 mM·min/µM, intercept = 0.09981 min/µM, R² = 0.999999 (shown as 1).',
        'Result: V_max = 1/0.09981 = 10.02 µM/min and K_m = 0.08009 × 10.02 = 0.8025 mM (the data were generated with K_m = 0.8 mM, V_max = 10 µM/min; the small difference comes from rounding of the rates).',
      ],
    },
    mistakes: {
      tr: [
        'Gerçek ölçüm hatası içeren verilerde çift ters grafiği ağırlıksız uydurup düşük [S] noktalarının sonucu bozduğunu fark etmemek.',
        'K_m’yi eğimin kendisi sanmak; K_m = eğim × V_max’tır.',
        'Sonuçların birimlerini girilen [S] ve v birimlerinden ayrı düşünmek (K_m, [S] ile; V_max, v ile aynı birimdedir).',
      ],
      en: [
        'Fitting the double-reciprocal plot without weights to data with real measurement error, and not noticing that low-[S] points distort the result.',
        'Taking the slope itself as K_m; K_m = slope × V_max.',
        'Forgetting that the units follow the input: K_m has the units of [S], V_max those of v.',
      ],
    },
    related: ['michaelis-menten', 'linear-regression', 'kinetics-order'],
  },
};

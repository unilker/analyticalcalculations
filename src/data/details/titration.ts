import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Titration module (undergraduate level).
 * Formula tools: the last line of each worked solution states the result the calculator gives for
 * the tool's first example (checked by tests). Custom tools: the worked example uses the tool's
 * default inputs and the numbers it displays.
 */
export const TITRATION_DETAILS: Record<string, ToolDetail> = {
  'edta-alpha': {
    concept: {
      tr: 'EDTA (etilendiamintetraasetik asit), metal iyonlarının çoğuyla 1:1 oranında kararlı şelatlar oluşturan çok dişli bir liganddır. Ancak metale asıl bağlanan form, tamamen protonsuz Y⁴⁻ anyonudur. Kompleks yapmamış EDTA’nın geri kalanı, ortamın pH’ına göre H₄Y, H₃Y⁻, H₂Y²⁻ ve HY³⁻ biçimlerinde bulunur.\n\nα_Y⁴⁻, metale bağlanmamış toplam EDTA’nın hangi kesrinin Y⁴⁻ olduğunu gösterir. pH düştükçe protonlar metal iyonuyla Y⁴⁻ için yarışır ve α_Y⁴⁻ hızla küçülür. Kompleksometrik titrasyonların neden tamponlanmış ve çoğunlukla bazik ortamda yapıldığını bu kesir açıklar.',
      en: 'EDTA (ethylenediaminetetraacetic acid) is a multidentate ligand that forms stable 1:1 chelates with most metal ions. The form that actually binds the metal, however, is the fully deprotonated Y⁴⁻ anion. Depending on pH, the rest of the uncomplexed EDTA is present as H₄Y, H₃Y⁻, H₂Y²⁻ and HY³⁻.\n\nα_Y⁴⁻ is the fraction of the total uncomplexed EDTA present as Y⁴⁻. As the pH falls, protons compete with the metal ion for Y⁴⁻ and α_Y⁴⁻ drops steeply. This fraction explains why complexometric titrations are buffered and usually carried out in alkaline solution.',
    },
    meaning: {
      tr: 'α_Y⁴⁻ = [Y⁴⁻] / C_EDTA. Burada C_EDTA = [H₄Y] + [H₃Y⁻] + [H₂Y²⁻] + [HY³⁻] + [Y⁴⁻], metale bağlanmamış EDTA’nın toplam derişimidir. Her tür ardışık Ka ifadeleriyle [Y⁴⁻] cinsinden yazılıp pay ve payda [H⁺]⁴ ile çarpılınca formüldeki ifade elde edilir. Paydadaki her terim bir türe karşılık gelir: [H⁺]⁴ → H₄Y, Ka₁[H⁺]³ → H₃Y⁻, …, Ka₁Ka₂Ka₃Ka₄ → Y⁴⁻.\n\n• α yalnızca pH’a (ve Ka değerlerine) bağlıdır; EDTA derişiminden bağımsızdır.\n• pH, pKa₄’ün (≈ 10,26) çok üzerindeyse α → 1; pH = pKa₄ iken α ≈ 0,5.\n• pKa₃’ün (≈ 6,16) birkaç birim üzerinde yalnızca HY³⁻ ve Y⁴⁻ önemlidir ve α ≈ Ka₄ / ([H⁺] + Ka₄) olur.\n\nAraç, Christian’ın H₄Y için verdiği dört Ka değerini kullanır. Çok asidik ortamda (pH ≲ 3) oluşan H₅Y⁺ ve H₆Y²⁺ ihmal edildiği için orada α biraz büyük hesaplanır; tipik titrasyon pH’larında bu fark önemsizdir.',
      en: 'α_Y⁴⁻ = [Y⁴⁻] / C_EDTA, where C_EDTA = [H₄Y] + [H₃Y⁻] + [H₂Y²⁻] + [HY³⁻] + [Y⁴⁻] is the total concentration of EDTA not bound to metal. Writing each species in terms of [Y⁴⁻] through the successive Ka expressions and multiplying top and bottom by [H⁺]⁴ gives the expression in the formula. Each term of the denominator belongs to one species: [H⁺]⁴ → H₄Y, Ka₁[H⁺]³ → H₃Y⁻, …, Ka₁Ka₂Ka₃Ka₄ → Y⁴⁻.\n\n• α depends only on pH (and the Ka values); it does not depend on the EDTA concentration.\n• Well above pKa₄ (≈ 10.26) α → 1; at pH = pKa₄, α ≈ 0.5.\n• A few units above pKa₃ (≈ 6.16) only HY³⁻ and Y⁴⁻ matter, and α ≈ Ka₄ / ([H⁺] + Ka₄).\n\nThe tool uses the four Ka values Christian gives for H₄Y. H₅Y⁺ and H₆Y²⁺, which form in very acidic solution (pH ≲ 3), are neglected, so α is slightly overestimated there; at normal titration pH values the difference is negligible.',
    },
    usage: {
      tr: [
        'Koşullu oluşum sabitini (K″f = α_Y⁴⁻ · Kf) hesaplamanın ilk adımı.',
        'Bir metalin titre edilebileceği en düşük pH’ı bulmak: K″f ≳ 10⁸ olan pH aranır.',
        'pH ile seçicilik sağlamak: Kf’si çok büyük olan Fe³⁺ pH ≈ 2’de, Ca²⁺ ve Mg²⁺ ise ancak pH ≈ 10’da titre edilir.',
        'Ka değerleri 25 °C ve belirli bir iyonik şiddet içindir; hesaplanan α yaklaşık bir değerdir.',
      ],
      en: [
        'First step in calculating the conditional formation constant (K″f = α_Y⁴⁻ · Kf).',
        'Finding the lowest pH at which a metal can be titrated: look for the pH where K″f ≳ 10⁸.',
        'Achieving selectivity through pH: Fe³⁺, with its very large Kf, is titrated at pH ≈ 2, while Ca²⁺ and Mg²⁺ need pH ≈ 10.',
        'The Ka values refer to 25 °C and a particular ionic strength; the calculated α is an approximation.',
      ],
    },
    solution: {
      tr: [
        'Verilen: pH = 10,00 → [H⁺] = 1,0 × 10⁻¹⁰ M; Ka₁ = 1,0 × 10⁻², Ka₂ = 2,2 × 10⁻³, Ka₃ = 6,9 × 10⁻⁷, Ka₄ = 5,5 × 10⁻¹¹.',
        'Pay: Ka₁Ka₂Ka₃Ka₄ = 8,349 × 10⁻²². Paydanın büyük terimleri Ka₁Ka₂Ka₃[H⁺] = 1,518 × 10⁻²¹ ve Ka₁Ka₂Ka₃Ka₄ = 8,349 × 10⁻²²’dir; diğer üç terim 10⁻²⁴’ün altındadır.',
        'Payda ≈ 1,518 × 10⁻²¹ + 0,835 × 10⁻²¹ = 2,353 × 10⁻²¹. Bu, α ≈ Ka₄ / ([H⁺] + Ka₄) kısayoluyla aynı sonucu verir.',
        'Sonuç: α_Y⁴⁻ = 8,349 × 10⁻²² / 2,353 × 10⁻²¹ = 0,3548; serbest EDTA’nın yaklaşık %35’i Y⁴⁻ hâlindedir.',
      ],
      en: [
        'Given: pH = 10.00 → [H⁺] = 1.0 × 10⁻¹⁰ M; Ka₁ = 1.0 × 10⁻², Ka₂ = 2.2 × 10⁻³, Ka₃ = 6.9 × 10⁻⁷, Ka₄ = 5.5 × 10⁻¹¹.',
        'Numerator: Ka₁Ka₂Ka₃Ka₄ = 8.349 × 10⁻²². The large denominator terms are Ka₁Ka₂Ka₃[H⁺] = 1.518 × 10⁻²¹ and Ka₁Ka₂Ka₃Ka₄ = 8.349 × 10⁻²²; the other three are below 10⁻²⁴.',
        'Denominator ≈ 1.518 × 10⁻²¹ + 0.835 × 10⁻²¹ = 2.353 × 10⁻²¹, the same as the shortcut α ≈ Ka₄ / ([H⁺] + Ka₄).',
        'Result: α_Y⁴⁻ = 8.349 × 10⁻²² / 2.353 × 10⁻²¹ = 0.3548; about 35% of the free EDTA is present as Y⁴⁻.',
      ],
    },
    mistakes: {
      tr: [
        'α_Y⁴⁻’ü metal–EDTA kompleksinin kesri sanmak; α yalnızca metale bağlanmamış EDTA’nın türlere dağılımını anlatır.',
        'Paydadaki terimlerin üslerini karıştırmak: [H⁺]⁴ ile başlanır, her terimde bir Ka eklenir ve [H⁺]’nin üssü bir azalır.',
        'pH’ı tamponlamamak: M²⁺ + H₂Y²⁻ → MY²⁻ + 2H⁺ tepkimesi proton açığa çıkarır; tampon yoksa pH düşer ve α küçülür.',
      ],
      en: [
        'Taking α_Y⁴⁻ as the fraction of metal–EDTA complex; α only describes how the EDTA not bound to metal is distributed among its species.',
        'Mixing up the exponents in the denominator: start with [H⁺]⁴, add one Ka per term and lower the power of [H⁺] by one.',
        'Not buffering: M²⁺ + H₂Y²⁻ → MY²⁻ + 2H⁺ releases protons; without a buffer the pH falls and α shrinks.',
      ],
    },
    related: ['conditional-kf', 'curve-edta', 'table-edta-kf', 'alpha-fractions'],
  },

  'conditional-kf': {
    concept: {
      tr: 'Oluşum sabiti Kf = [MY] / ([M][Y⁴⁻]) yalnızca serbest metal iyonu ile tamamen protonsuz Y⁴⁻ arasındaki dengeyi tanımlar. Gerçek bir titrasyon çözeltisinde ise EDTA’nın bir kısmı protonlanmış, metalin bir kısmı da tampon ya da yardımcı ligandla (ör. NH₃) kompleks yapmış durumdadır.\n\nKoşullu (etkin) oluşum sabiti K″f, bu yan tepkimeleri sabitin içine katar ve belirli pH ve ortam koşullarında tepkimenin gerçekte ne kadar tamamlandığını gösterir. Bir EDTA titrasyonunun yapılabilir olup olmadığına K″f’ye bakılarak karar verilir. Örneğin Ca²⁺ için pH 7’de α_Y⁴⁻ ≈ 4,8 × 10⁻⁴ ve K″f ≈ 2,4 × 10⁷ olur; bu yüzden kalsiyum pH 10 civarında titre edilir.',
      en: 'The formation constant Kf = [MY] / ([M][Y⁴⁻]) describes only the equilibrium between the free metal ion and fully deprotonated Y⁴⁻. In a real titration solution, part of the EDTA is protonated and part of the metal may be bound to the buffer or to an auxiliary ligand (e.g. NH₃).\n\nThe conditional (effective) formation constant K″f builds these side reactions into the constant and shows how far the reaction really goes under the given pH and medium. Whether an EDTA titration is feasible is judged from K″f. For Ca²⁺ at pH 7, for instance, α_Y⁴⁻ ≈ 4.8 × 10⁻⁴ and K″f ≈ 2.4 × 10⁷, which is why calcium is titrated near pH 10.',
    },
    meaning: {
      tr: 'Kf ifadesinde [Y⁴⁻] = α_Y⁴⁻ · C_EDTA ve [M] = α_M · C_M yazılırsa (C_M: EDTA’ya bağlanmamış metalin toplam derişimi):\n\nKf = [MY] / (α_M C_M · α_Y⁴⁻ C_EDTA)  →  K″f = [MY] / (C_M · C_EDTA) = α_M · α_Y⁴⁻ · Kf\n\n• α_Y⁴⁻: pH’ın etkisi (α_Y⁴⁻ aracından).\n• α_M: yardımcı ligandın etkisi; ligand yoksa α_M = 1. Örneğin NH₃ varlığında α_M = 1 / (1 + β₁[NH₃] + β₂[NH₃]² + …).\n• Yalnızca pH etkisi hesaba katıldığında sabit K′f = α_Y⁴⁻ · Kf olarak da yazılır.\n\nHer iki α da 1’den büyük olamayacağı için K″f hiçbir zaman Kf’yi aşmaz. Pratik ölçüt: yaygın derişimlerde (≈ 0,01 M) keskin bir dönüm noktası için K″f ≳ 10⁸ (log K″f ≳ 8) olmalıdır.',
      en: 'Substituting [Y⁴⁻] = α_Y⁴⁻ · C_EDTA and [M] = α_M · C_M into Kf (C_M: total concentration of metal not bound to EDTA):\n\nKf = [MY] / (α_M C_M · α_Y⁴⁻ C_EDTA)  →  K″f = [MY] / (C_M · C_EDTA) = α_M · α_Y⁴⁻ · Kf\n\n• α_Y⁴⁻: the effect of pH (from the α_Y⁴⁻ tool).\n• α_M: the effect of an auxiliary ligand; α_M = 1 without one. With NH₃, for example, α_M = 1 / (1 + β₁[NH₃] + β₂[NH₃]² + …).\n• When only the pH effect is included, the constant is also written K′f = α_Y⁴⁻ · Kf.\n\nSince neither α can exceed 1, K″f never exceeds Kf. Practical criterion: at typical concentrations (≈ 0.01 M) a sharp end point needs K″f ≳ 10⁸ (log K″f ≳ 8).',
    },
    usage: {
      tr: [
        'Bir metalin belirli bir pH’ta EDTA ile kantitatif titre edilip edilemeyeceğine karar vermek.',
        'EDTA titrasyon eğrisinde eşdeğerlik noktasındaki pM’i hesaplamak; eğri aracı da bu sabiti kullanır.',
        'Yardımcı ligand (NH₃, tartarat, sitrat) metali hidroksit olarak çökmekten korur ama α_M’yi küçültür; ligand gereğinden derişik olmamalıdır.',
        'Kf ve α değerleri aynı sıcaklık ve iyonik şiddete ait olmalıdır; sonuç bir büyüklük mertebesi tahminidir.',
      ],
      en: [
        'Deciding whether a metal can be titrated quantitatively with EDTA at a given pH.',
        'Calculating pM at the equivalence point of an EDTA titration; the curve tool uses this constant too.',
        'An auxiliary ligand (NH₃, tartrate, citrate) keeps the metal from precipitating as hydroxide but lowers α_M; do not use more than needed.',
        'Kf and the α values should refer to the same temperature and ionic strength; the result is an order-of-magnitude estimate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Ca²⁺–EDTA, pH 10; Kf = 5,01 × 10¹⁰, α_Y⁴⁻ = 0,355 (pH 10), yardımcı ligand yok → α_M = 1.',
        'K″f = α_M · α_Y⁴⁻ · Kf = 1 × 0,355 × 5,01 × 10¹⁰.',
        'Sonuç: K″f = 1,779 × 10¹⁰ (log K″f = 10,25 > 8; Ca²⁺ pH 10’da kantitatif titre edilir).',
      ],
      en: [
        'Given: Ca²⁺–EDTA at pH 10; Kf = 5.01 × 10¹⁰, α_Y⁴⁻ = 0.355 (pH 10), no auxiliary ligand → α_M = 1.',
        'K″f = α_M · α_Y⁴⁻ · Kf = 1 × 0.355 × 5.01 × 10¹⁰.',
        'Result: K″f = 1.779 × 10¹⁰ (log K″f = 10.25 > 8; Ca²⁺ is titrated quantitatively at pH 10).',
      ],
    },
    mistakes: {
      tr: [
        'Tablodaki log Kf değerini Kf yerine çarpmak; önce Kf = 10^(log Kf) alınmalı ya da logaritmalar toplanmalıdır.',
        'Yardımcı ligand varken α_M’yi 1 almak; amonyak tamponundaki Zn²⁺ ya da Cu²⁺ için bu, K″f’yi abartır.',
        'K″f ölçütünü derişimden bağımsız sanmak: çok seyreltik çözeltilerde sıçrama küçülür ve daha büyük K″f gerekir.',
      ],
      en: [
        'Multiplying the tabulated log Kf instead of Kf; take Kf = 10^(log Kf) or add the logarithms.',
        'Setting α_M = 1 when an auxiliary ligand is present; for Zn²⁺ or Cu²⁺ in ammonia buffer this overstates K″f.',
        'Treating the K″f criterion as independent of concentration: in very dilute solutions the break is smaller and a larger K″f is needed.',
      ],
    },
    related: ['edta-alpha', 'curve-edta', 'table-edta-kf', 'water-hardness'],
  },

  'redox-equivalence-potential': {
    concept: {
      tr: 'Redoks titrasyonunda titrant eklendikçe çözeltinin potansiyeli değişir. Eşdeğerlik noktasından önce potansiyeli analit çifti (ör. Fe³⁺/Fe²⁺), sonra ise titrant çifti (ör. Ce⁴⁺/Ce³⁺) belirler. Tam eşdeğerlik noktasında iki çift de aynı potansiyelde dengededir ve bu potansiyel iki formal potansiyelin elektron sayılarıyla ağırlıklandırılmış ortalamasıdır.\n\nBu değer uygun redoks indikatörünü seçmek için kullanılır: indikatörün renk dönüşüm aralığı eşdeğerlik potansiyelini içermeli ya da en azından eğrinin dik kısmında kalmalıdır.',
      en: 'During a redox titration the potential of the solution changes as titrant is added. Before the equivalence point it is set by the analyte couple (e.g. Fe³⁺/Fe²⁺), after it by the titrant couple (e.g. Ce⁴⁺/Ce³⁺). At the equivalence point both couples are at equilibrium at the same potential, which is the average of the two formal potentials weighted by their electron numbers.\n\nThis value is used to choose a redox indicator: its colour transition range should contain the equivalence potential, or at least lie on the steep part of the curve.',
    },
    meaning: {
      tr: 'Eşdeğerlikte iki Nernst eşitliği aynı E için yazılır (25 °C):\n\nn₁E = n₁E₁° − 0,05916 log([Red₁]/[Ox₁])\nn₂E = n₂E₂° − 0,05916 log([Red₂]/[Ox₂])\n\nToplanınca (n₁ + n₂)E = n₁E₁° + n₂E₂° − 0,05916 log([Red₁][Red₂] / ([Ox₁][Ox₂])) bulunur. Eşdeğerlik noktasında stokiyometri gereği [Ox₁]/[Red₂] = [Red₁]/[Ox₂] olduğundan logaritmik terim sıfırlanır ve E_eş = (n₁E₁° + n₂E₂°)/(n₁ + n₂) kalır.\n\n• n₁ ve n₂, analit ve titrant yarı tepkimelerinin elektron sayılarıdır ve ağırlık işlevi görür.\n• n₁ = n₂ ise E_eş iki potansiyelin tam ortasıdır.\n• Sonuç derişimden bağımsızdır. Ancak yarı tepkimelere H⁺ katılıyorsa (MnO₄⁻, Cr₂O₇²⁻) bir pH terimi eklenir; Cr₂O₇²⁻ → 2Cr³⁺ gibi tür oranı 1:1 olmayan çiftlerde derişim terimi de kalır.',
      en: 'At equivalence the two Nernst equations are written for the same E (25 °C):\n\nn₁E = n₁E₁° − 0.05916 log([Red₁]/[Ox₁])\nn₂E = n₂E₂° − 0.05916 log([Red₂]/[Ox₂])\n\nAdding them gives (n₁ + n₂)E = n₁E₁° + n₂E₂° − 0.05916 log([Red₁][Red₂] / ([Ox₁][Ox₂])). At the equivalence point the stoichiometry makes [Ox₁]/[Red₂] = [Red₁]/[Ox₂], so the log term vanishes and E_eq = (n₁E₁° + n₂E₂°)/(n₁ + n₂).\n\n• n₁ and n₂ are the electron numbers of the analyte and titrant half-reactions and act as weights.\n• If n₁ = n₂, E_eq lies exactly midway between the two potentials.\n• The result does not depend on concentration. If H⁺ takes part in a half-reaction (MnO₄⁻, Cr₂O₇²⁻) a pH term appears; for couples whose species ratio is not 1:1, such as Cr₂O₇²⁻ → 2Cr³⁺, a concentration term remains as well.',
    },
    usage: {
      tr: [
        'Redoks titrasyonları için indikatör seçmek (ör. Fe²⁺–Ce⁴⁺ için ferroin).',
        'Formal potansiyeller kullanın: aynı çiftin potansiyeli ortama (H₂SO₄, HClO₄, HCl) göre değişir.',
        'Doğrudan yalnızca proton katılmayan ve tür oranı 1:1 olan yarı tepkimeler için geçerlidir.',
        'E₁° ile E₂° arasındaki fark büyüdükçe tepkime daha tam yürür ve eşdeğerlik çevresindeki sıçrama büyür.',
      ],
      en: [
        'Choosing indicators for redox titrations (e.g. ferroin for Fe²⁺–Ce⁴⁺).',
        'Use formal potentials: the potential of a couple depends on the medium (H₂SO₄, HClO₄, HCl).',
        'Directly valid only for half-reactions without protons and with a 1:1 species ratio.',
        'The larger the difference between E₁° and E₂°, the more complete the reaction and the larger the break at equivalence.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Fe²⁺’nin 1 M H₂SO₄ içinde Ce⁴⁺ ile titrasyonu; E₁°′(Fe³⁺/Fe²⁺) = 0,68 V, n₁ = 1; E₂°′(Ce⁴⁺/Ce³⁺) = 1,44 V, n₂ = 1.',
        'E_eş = (n₁E₁° + n₂E₂°)/(n₁ + n₂) = (1 × 0,68 V + 1 × 1,44 V)/(1 + 1) = 2,12 V / 2.',
        'Sonuç: E_eş = 1,06 V (SHE’ye karşı); dönüşüm aralığı yaklaşık 1,00–1,12 V olan ferroin uygundur.',
      ],
      en: [
        'Given: titration of Fe²⁺ with Ce⁴⁺ in 1 M H₂SO₄; E₁°′(Fe³⁺/Fe²⁺) = 0.68 V, n₁ = 1; E₂°′(Ce⁴⁺/Ce³⁺) = 1.44 V, n₂ = 1.',
        'E_eq = (n₁E₁° + n₂E₂°)/(n₁ + n₂) = (1 × 0.68 V + 1 × 1.44 V)/(1 + 1) = 2.12 V / 2.',
        'Result: E_eq = 1.06 V (vs. SHE); ferroin, with a transition range of about 1.00–1.12 V, is suitable.',
      ],
    },
    mistakes: {
      tr: [
        'Ağırlıkları unutmak: Fe²⁺ (n = 1) ile MnO₄⁻ (n = 5) için iki potansiyelin basit ortalamasını almak yanlıştır.',
        'Formal potansiyel yerine standart potansiyel kullanmak (1 M H₂SO₄’te Fe³⁺/Fe²⁺ için 0,771 V yerine 0,68 V).',
        'Referans elektrodu karıştırmak: SCE’ye karşı ölçülen potansiyeller SHE’ye göre verilenlerden yaklaşık 0,24 V düşüktür.',
      ],
      en: [
        'Forgetting the weights: a simple average is wrong for Fe²⁺ (n = 1) with MnO₄⁻ (n = 5).',
        'Using standard instead of formal potentials (0.68 V rather than 0.771 V for Fe³⁺/Fe²⁺ in 1 M H₂SO₄).',
        'Mixing reference electrodes: potentials measured against the SCE are about 0.24 V lower than those quoted against the SHE.',
      ],
    },
    related: ['curve-redox', 'table-indicators', 'table-potentials', 'nernst'],
  },

  'water-hardness': {
    concept: {
      tr: 'Su sertliği, sudaki çok değerlikli katyonların, pratikte Ca²⁺ ve Mg²⁺ iyonlarının toplam derişimidir. Sert su sabunla çökelek oluşturur ve ısıtıldığında kazan taşı (CaCO₃) bırakır. Toplam sertlik, numune pH 10’a tamponlanıp Eriokrom Siyahı T (EBT) indikatörü eşliğinde EDTA ile titre edilerek belirlenir; dönüm noktasında renk şarap kırmızısından maviye döner.\n\nCa²⁺ ve Mg²⁺ EDTA ile 1:1 tepkimeye girdiğinden harcanan EDTA, ikisinin toplam mol sayısını verir. Sonuç, bütün sertlik CaCO₃’ten geliyormuş gibi mg CaCO₃/L (ppm) olarak raporlanır.',
      en: 'Water hardness is the total concentration of polyvalent cations in water, in practice Ca²⁺ and Mg²⁺. Hard water precipitates soap and leaves scale (CaCO₃) when heated. Total hardness is determined by buffering the sample to pH 10 and titrating with EDTA using Eriochrome Black T (EBT); at the end point the colour changes from wine red to blue.\n\nBecause Ca²⁺ and Mg²⁺ both react 1:1 with EDTA, the EDTA consumed gives their combined amount. The result is reported as mg CaCO₃ per litre (ppm), as if all the hardness came from CaCO₃.',
    },
    meaning: {
      tr: 'n(Ca²⁺ + Mg²⁺) = C(EDTA) · V(EDTA). Bu mol sayısı CaCO₃’ün molar kütlesiyle (100,09 g/mol) çarpılıp numune hacmine bölünür:\n\nSertlik (mg/L) = C · V_EDTA · 100,09 / V_numune\n\nBirim kontrolü: M × mL = mmol; mmol × 100,09 mg/mmol = mg CaCO₃; numune hacmine (mL) bölüp 1000 ile çarpınca mg/L elde edilir. Uygulama hacim birimlerini kendisi dönüştürür.\n\n• 1 Fransız sertlik derecesi (°fH) = 10 mg CaCO₃/L.\n• 1 Alman sertlik derecesi (°dH) = 10 mg CaO/L ≈ 17,8 mg CaCO₃/L.\n• Yaygın bir sınıflandırma (USGS): 0–60 mg/L yumuşak, 61–120 orta sert, 121–180 sert, 180’in üzeri çok sert.',
      en: 'n(Ca²⁺ + Mg²⁺) = C(EDTA) · V(EDTA). This amount is multiplied by the molar mass of CaCO₃ (100.09 g/mol) and divided by the sample volume:\n\nHardness (mg/L) = C · V_EDTA · 100.09 / V_sample\n\nUnit check: M × mL = mmol; mmol × 100.09 mg/mmol = mg CaCO₃; dividing by the sample volume in mL and multiplying by 1000 gives mg/L. The app converts the volume units itself.\n\n• 1 French degree (°fH) = 10 mg CaCO₃/L.\n• 1 German degree (°dH) = 10 mg CaO/L ≈ 17.8 mg CaCO₃/L.\n• A common classification (USGS): 0–60 mg/L soft, 61–120 moderately hard, 121–180 hard, above 180 very hard.',
    },
    usage: {
      tr: [
        'İçme, kazan ve proses sularında toplam sertlik tayini.',
        'Yalnızca kalsiyum sertliği için pH 12–13’te çalışılır: Mg²⁺, Mg(OH)₂ olarak çöker ve Ca²⁺ uygun bir indikatörle (ör. mürekzit) titre edilir; magnezyum sertliği farktan bulunur.',
        'EBT dönümü Mg²⁺ varlığında keskindir; numunede magnezyum yoksa tampona az miktarda Mg–EDTA eklenir.',
        'EBT’yi bloke eden iyonlar maskelenmelidir (ör. Fe³⁺ ve Al³⁺ için trietanolamin).',
      ],
      en: [
        'Total hardness of drinking, boiler and process water.',
        'For calcium hardness alone, work at pH 12–13: Mg²⁺ precipitates as Mg(OH)₂ and Ca²⁺ is titrated with a suitable indicator (e.g. murexide); magnesium hardness follows by difference.',
        'The EBT end point is sharp only when Mg²⁺ is present; if the sample has no magnesium, a little Mg–EDTA is added to the buffer.',
        'Ions that block EBT must be masked (e.g. triethanolamine for Fe³⁺ and Al³⁺).',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(EDTA) = 0,0100 M, V(EDTA) = 12,50 mL, V(numune) = 50,00 mL.',
        'n(Ca²⁺ + Mg²⁺) = 0,0100 mol/L × 12,50 mL = 0,1250 mmol.',
        'm(CaCO₃) = 0,1250 mmol × 100,09 mg/mmol = 12,51 mg; bu kütle 50,00 mL = 0,05000 L numunededir.',
        'Sonuç: Sertlik = 12,51 mg / 0,05000 L = 250,2 mg CaCO₃/L (≈ 25 °fH; çok sert su).',
      ],
      en: [
        'Given: C(EDTA) = 0.0100 M, V(EDTA) = 12.50 mL, V(sample) = 50.00 mL.',
        'n(Ca²⁺ + Mg²⁺) = 0.0100 mol/L × 12.50 mL = 0.1250 mmol.',
        'm(CaCO₃) = 0.1250 mmol × 100.09 mg/mmol = 12.51 mg, contained in 50.00 mL = 0.05000 L of sample.',
        'Result: Hardness = 12.51 mg / 0.05000 L = 250.2 mg CaCO₃/L (≈ 25 °fH; very hard water).',
      ],
    },
    mistakes: {
      tr: [
        'CaCO₃ yerine Ca’nın molar kütlesiyle (40,08 g/mol) çarpıp sonucu yine de “CaCO₃ olarak” raporlamak.',
        'Numune hacmini mL olarak bırakıp mg/mL’yi mg/L sanmak (1000 kat hata).',
        'Tamponu unutmak: pH 10’un altında hem K″f küçülür hem de EBT’nin renk dönümü bozulur.',
      ],
      en: [
        'Multiplying by the molar mass of Ca (40.08 g/mol) and still reporting the result “as CaCO₃”.',
        'Leaving the sample volume in mL and calling mg/mL “mg/L” (a factor of 1000).',
        'Forgetting the buffer: below pH 10 both K″f and the EBT colour change deteriorate.',
      ],
    },
    related: ['conditional-kf', 'edta-alpha', 'curve-edta', 'ppm-ww'],
  },

  'mohr-chromate': {
    concept: {
      tr: 'Mohr yöntemi, klorürün (ve bromürün) nötral ortamda AgNO₃ ile doğrudan titrasyonudur ve indikatör olarak az miktarda K₂CrO₄ kullanılır. Beyaz AgCl çöktükçe çözeltideki Ag⁺ derişimi düşük kalır. Klorür tükenince Ag⁺ derişimi hızla artar ve kırmızı-kahverengi Ag₂CrO₄ çökmeye başlar; bu renk değişimi dönüm noktasıdır.\n\nİndikatörün doğru çalışması, kromat derişiminin Ag₂CrO₄ tam eşdeğerlik noktasında çökmeye başlayacak şekilde seçilmesine bağlıdır. Bu araç o “ideal” kromat derişimini hesaplar.',
      en: 'The Mohr method is the direct titration of chloride (and bromide) with AgNO₃ in neutral solution, with a little K₂CrO₄ as indicator. While white AgCl precipitates, the Ag⁺ concentration stays low. Once the chloride is used up, [Ag⁺] rises sharply and red-brown Ag₂CrO₄ starts to precipitate; this colour change is the end point.\n\nThe indicator works properly only if the chromate concentration is chosen so that Ag₂CrO₄ starts to form exactly at the equivalence point. This tool calculates that “ideal” chromate concentration.',
    },
    meaning: {
      tr: 'Eşdeğerlik noktasında çözelti yalnızca AgCl ile doygundur ve [Ag⁺] = [Cl⁻] = √Ksp(AgCl). Ag₂CrO₄’ün çökmeye başlaması için iyon çarpımı Ksp’ye ulaşmalıdır: [Ag⁺]² · [CrO₄²⁻] = Ksp(Ag₂CrO₄).\n\n[Ag⁺]² = Ksp(AgCl) yerine konunca:\n[CrO₄²⁻] = Ksp(Ag₂CrO₄) / Ksp(AgCl)\n\nKromat bundan derişikse kırmızı çökelek eşdeğerlikten önce, seyreltikse sonra oluşur. Bu kadar derişik kromatın sarı rengi kırmızının görülmesini zorlaştırdığından pratikte daha düşük derişim kullanılır. Bunun yol açtığı küçük pozitif hata, indikatör tanığıyla (klorürsüz CaCO₃ süspansiyonunda aynı titrasyon) düzeltilir.',
      en: 'At the equivalence point the solution is saturated with AgCl only, and [Ag⁺] = [Cl⁻] = √Ksp(AgCl). For Ag₂CrO₄ to start precipitating, its ion product must reach Ksp: [Ag⁺]² · [CrO₄²⁻] = Ksp(Ag₂CrO₄).\n\nSubstituting [Ag⁺]² = Ksp(AgCl):\n[CrO₄²⁻] = Ksp(Ag₂CrO₄) / Ksp(AgCl)\n\nWith more chromate the red precipitate appears before equivalence, with less it appears after. Because the yellow colour of so much chromate masks the red, a lower concentration is used in practice. The small positive error this causes is corrected with an indicator blank (the same titration in a chloride-free CaCO₃ suspension).',
    },
    usage: {
      tr: [
        'Sularda, gıdalarda (tuz içeriği) ve biyolojik numunelerde klorür tayini.',
        'pH yaklaşık 7–10 olmalıdır: asidik ortamda kromat HCrO₄⁻/Cr₂O₇²⁻’ye dönüşür ve dönüm gecikir; bazik ortamda gümüş oksit/hidroksit çöker.',
        'İyodür ve tiyosiyanat için uygun değildir; AgI ve AgSCN kromatı güçlü biçimde adsorplar ve dönüm noktası belirsizleşir.',
        'Asidik numunelerde klorür için Volhard yöntemi tercih edilir.',
      ],
      en: [
        'Chloride in water, foods (salt content) and biological samples.',
        'The pH should be about 7–10: in acid, chromate turns into HCrO₄⁻/Cr₂O₇²⁻ and the end point is late; in base, silver oxide/hydroxide precipitates.',
        'Not suitable for iodide or thiocyanate; AgI and AgSCN adsorb chromate strongly and blur the end point.',
        'For chloride in acidic samples the Volhard method is preferred.',
      ],
    },
    solution: {
      tr: [
        'Verilen: Ksp(Ag₂CrO₄) = 1,1 × 10⁻¹², Ksp(AgCl) = 1,0 × 10⁻¹⁰.',
        'Eşdeğerlikte [Ag⁺] = √(1,0 × 10⁻¹⁰) = 1,0 × 10⁻⁵ M, dolayısıyla [Ag⁺]² = 1,0 × 10⁻¹⁰.',
        '[CrO₄²⁻] = Ksp(Ag₂CrO₄) / [Ag⁺]² = 1,1 × 10⁻¹² / 1,0 × 10⁻¹⁰.',
        'Sonuç: [CrO₄²⁻] = 0,011 M.',
      ],
      en: [
        'Given: Ksp(Ag₂CrO₄) = 1.1 × 10⁻¹², Ksp(AgCl) = 1.0 × 10⁻¹⁰.',
        'At equivalence [Ag⁺] = √(1.0 × 10⁻¹⁰) = 1.0 × 10⁻⁵ M, so [Ag⁺]² = 1.0 × 10⁻¹⁰.',
        '[CrO₄²⁻] = Ksp(Ag₂CrO₄) / [Ag⁺]² = 1.1 × 10⁻¹² / 1.0 × 10⁻¹⁰.',
        'Result: [CrO₄²⁻] = 0.011 M.',
      ],
    },
    mistakes: {
      tr: [
        '[Ag⁺]’nin karesini almayı unutmak: Ag₂CrO₄’te iki gümüş vardır, Ksp = [Ag⁺]²[CrO₄²⁻].',
        'İndikatör tanığını çıkarmamak; görünür miktarda Ag₂CrO₄ için eşdeğerlikten sonra biraz fazla Ag⁺ gerekir.',
        'Asidik numuneyi nötralleştirmeden titre etmek.',
      ],
      en: [
        'Forgetting to square [Ag⁺]: Ag₂CrO₄ contains two silver ions, Ksp = [Ag⁺]²[CrO₄²⁻].',
        'Not subtracting the indicator blank; a visible amount of Ag₂CrO₄ needs a slight excess of Ag⁺ beyond equivalence.',
        'Titrating an acidic sample without neutralising it first.',
      ],
    },
    related: ['curve-precipitation', 'table-ksp', 'molar-solubility'],
  },

  'curve-acid-base': {
    concept: {
      tr: 'Titrasyon eğrisi, eklenen titrant hacmine karşı pH’ın grafiğidir. Zayıf bir asidin kuvvetli bazla titrasyonunda dört bölge vardır: başlangıç (yalnızca zayıf asit), tampon bölgesi (HA/A⁻ karışımı), eşdeğerlik noktası (yalnızca eşlenik baz A⁻) ve eşdeğerlik sonrası (fazla OH⁻). Eşdeğerlik noktası çevresindeki dik pH sıçraması, dönüm noktasının bir indikatörle ya da pH metreyle saptanmasını sağlar.\n\nEşdeğerlik noktası, stokiyometrik olarak eşdeğer miktarların tepkimeye girdiği kuramsal noktadır. Dönüm noktası ise deneyde gözlenen renk değişimi ya da sıçramadır; ikisi arasındaki fark titrasyon hatasıdır.',
      en: 'A titration curve is a plot of pH against the volume of titrant added. Titrating a weak acid with a strong base gives four regions: the start (weak acid only), the buffer region (HA/A⁻ mixture), the equivalence point (conjugate base A⁻ only) and beyond equivalence (excess OH⁻). The steep pH jump around the equivalence point is what lets an indicator or a pH meter locate the end point.\n\nThe equivalence point is the theoretical point at which stoichiometrically equivalent amounts have reacted. The end point is what is observed experimentally, a colour change or a jump; the difference between them is the titration error.',
    },
    meaning: {
      tr: 'Araç her hacim için yük denkliğini tam olarak çözer:\n\n[H⁺] − Kw/[H⁺] + C_Na − C_A · Σ i·αᵢ = 0\n\nBurada C_A = C_a·V_a/(V_a + V) ve C_Na = C_t·V/(V_a + V), seyrelmeyi hesaba katan analitik derişimlerdir. Σ i·αᵢ, asidin ortalama olarak verdiği proton sayısıdır (αᵢ: i proton vermiş türün kesri). Bölgelere göre ayrı yaklaşımlar gerekmez; aynı denklem eğrinin tamamında ve seyreltik ya da çok zayıf sistemlerde de geçerlidir.\n\nElle hesapta kullanılan klasik yaklaşımlar:\n• Başlangıç: [H⁺] ≈ √(Ka·C).\n• Tampon bölgesi: Henderson–Hasselbalch; yarı eşdeğerlikte pH = pKa.\n• Eşdeğerlik: A⁻ hidrolizi, [OH⁻] ≈ √(Kb·C), pH > 7.\n• Eşdeğerlik sonrası: pH’ı fazla NaOH belirler.\n\nPoliprotik asitlerde ardışık Ka değerleri yaklaşık 10⁴ kat ya da daha fazla farklıysa ayrı sıçramalar görülür.',
      en: 'For every volume the tool solves the charge balance exactly:\n\n[H⁺] − Kw/[H⁺] + C_Na − C_A · Σ i·αᵢ = 0\n\nHere C_A = C_a·V_a/(V_a + V) and C_Na = C_t·V/(V_a + V) are analytical concentrations that include dilution, and Σ i·αᵢ is the average number of protons the acid has given up (αᵢ: fraction of the species that has lost i protons). No region-by-region approximations are needed; the same equation holds over the whole curve, including dilute or very weak systems.\n\nThe classical approximations used by hand:\n• Start: [H⁺] ≈ √(Ka·C).\n• Buffer region: Henderson–Hasselbalch; at half-equivalence pH = pKa.\n• Equivalence: hydrolysis of A⁻, [OH⁻] ≈ √(Kb·C), pH > 7.\n• Beyond equivalence: pH set by the excess NaOH.\n\nPolyprotic acids show separate breaks when successive Ka values differ by a factor of roughly 10⁴ or more.',
    },
    usage: {
      tr: [
        'Bir asit–baz titrasyonunun yapılabilirliğini ve sıçramanın büyüklüğünü önceden görmek.',
        'İndikatör seçmek: araç, eşdeğerlikten %0,2 önce ve sonraki pH değerleri arasında kalan indikatörleri önerir.',
        'Ka ya da derişim çok küçükse (kabaca C·Ka < 10⁻⁸) sıçrama belirsizleşir; bu durumda potansiyometrik izleme ve türev yöntemi kullanılır.',
        'Aktivite etkileri ihmal edilir, 25 °C’de Kw = 1,0 × 10⁻¹⁴ alınır; en çok üç pKa girilebilir.',
      ],
      en: [
        'Previewing whether an acid–base titration is feasible and how large the break will be.',
        'Choosing an indicator: the tool suggests indicators whose range lies between the pH 0.2% before and 0.2% after equivalence.',
        'If Ka or the concentration is very small (roughly C·Ka < 10⁻⁸) the break becomes indistinct; use potentiometric detection and the derivative method.',
        'Activity effects are neglected and Kw = 1.0 × 10⁻¹⁴ (25 °C); up to three pKa values can be entered.',
      ],
    },
    solution: {
      tr: [
        'Varsayılan veriler: 50,00 mL 0,100 M asetik asit (pKa = 4,757), titrant 0,100 M NaOH. V_eş = 0,100 M × 50,00 mL / 0,100 M = 50,00 mL.',
        'Başlangıç: [H⁺] ≈ √(1,75 × 10⁻⁵ × 0,100) = 1,32 × 10⁻³ M → pH ≈ 2,88 (araç tam çözümle 2,881 verir). 25,00 mL’de (yarı eşdeğerlik) pH = pKa = 4,757.',
        'Eşdeğerlikte 5,000 mmol asetat 100,0 mL’dedir: C = 0,0500 M, Kb = Kw/Ka = 5,71 × 10⁻¹⁰, [OH⁻] = √(Kb·C) = 5,35 × 10⁻⁶ M → pOH = 5,272.',
        'Sonuç: eşdeğerlik noktasında pH = 8,728. pH, 49,90 mL’de 7,454’ten 50,10 mL’de 10,00’a sıçrar; bu aralığa timol mavisi (8,0–9,6) ve fenolftalein (8,3–10,0) uyar.',
      ],
      en: [
        'Default data: 50.00 mL of 0.100 M acetic acid (pKa = 4.757), titrant 0.100 M NaOH. V_eq = 0.100 M × 50.00 mL / 0.100 M = 50.00 mL.',
        'Start: [H⁺] ≈ √(1.75 × 10⁻⁵ × 0.100) = 1.32 × 10⁻³ M → pH ≈ 2.88 (the exact solution in the tool gives 2.881). At 25.00 mL (half-equivalence) pH = pKa = 4.757.',
        'At equivalence 5.000 mmol acetate is in 100.0 mL: C = 0.0500 M, Kb = Kw/Ka = 5.71 × 10⁻¹⁰, [OH⁻] = √(Kb·C) = 5.35 × 10⁻⁶ M → pOH = 5.272.',
        'Result: pH at the equivalence point = 8.728. The pH jumps from 7.454 at 49.90 mL to 10.00 at 50.10 mL; thymol blue (8.0–9.6) and phenolphthalein (8.3–10.0) fit inside this range.',
      ],
    },
    mistakes: {
      tr: [
        'Eşdeğerlik noktasında pH’ın her zaman 7 olduğunu sanmak; zayıf asit–kuvvetli baz titrasyonunda pH > 7, zayıf baz–kuvvetli asit titrasyonunda pH < 7’dir.',
        'Titrant eklendikçe toplam hacmin arttığını (seyrelmeyi) unutmak.',
        'Zayıf asit titrasyonunda asidik bölgede dönen bir indikatör (ör. metil kırmızısı) seçmek; renk tampon bölgesinde değişir ve dönüm noktası çok erken gelir.',
      ],
      en: [
        'Assuming the equivalence-point pH is always 7; it is above 7 for weak acid–strong base and below 7 for weak base–strong acid titrations.',
        'Forgetting that the total volume grows as titrant is added (dilution).',
        'Choosing an indicator that changes in the acidic region (e.g. methyl red) for a weak acid; it changes colour in the buffer region and the end point comes far too early.',
      ],
    },
    related: ['derivative-endpoint', 'table-indicators', 'henderson', 'titration-error'],
  },

  'curve-edta': {
    concept: {
      tr: 'Kompleksometrik titrasyonda metal iyonu çözeltisine EDTA eklenir ve serbest metal derişimi pM = −log[M] olarak izlenir. Eğri asit–baz eğrisine benzer: eşdeğerlikten önce pM’i tepkimeye girmemiş fazla metal, sonra ise fazla EDTA ile kompleks arasındaki denge belirler. Eşdeğerlikteki sıçrama, metal indikatörünün (ör. EBT, kalmagit) renk değiştirmesini sağlar.\n\nSıçramanın büyüklüğü koşullu oluşum sabitine (K″f) bağlıdır. pH düştükçe α_Y⁴⁻ küçülür, K″f azalır ve eşdeğerlik sonrası bölge aşağı iner; bu nedenle aynı metal düşük pH’ta titre edilemeyebilir.',
      en: 'In a complexometric titration EDTA is added to a metal-ion solution and the free metal concentration is followed as pM = −log[M]. The curve resembles an acid–base curve: before equivalence pM is set by the unreacted excess metal, afterwards by the equilibrium between the complex and the excess EDTA. The break at equivalence makes the metal indicator (e.g. EBT, calmagite) change colour.\n\nThe size of the break depends on the conditional formation constant (K″f). As the pH drops, α_Y⁴⁻ and K″f decrease and the post-equivalence region sinks, so the same metal may not be titratable at low pH.',
    },
    meaning: {
      tr: 'Araç her hacim için kütle denkliklerini ve K″f = [MY] / ([M′][Y′]) ifadesini (M′: EDTA’ya bağlanmamış toplam metal, Y′: metale bağlanmamış toplam EDTA) birlikte çözer; bu, ikinci dereceden bir denklemdir ve bölgesel yaklaşım gerektirmez. Elle hesapta:\n\n• Eşdeğerlikten önce: [M′] ≈ tepkimeye girmemiş metal (mmol) / toplam hacim (mL).\n• Eşdeğerlikte: [M′] = [Y′] ve [M′] = √([MY] / K″f).\n• Eşdeğerlikten sonra: [M′] = [MY] / (K″f · [Y′]); [Y′] fazla EDTA’dan gelir.\n\nYardımcı ligand varsa (α_M < 1) gösterilen pM serbest Mⁿ⁺ içindir: [Mⁿ⁺] = α_M · [M′]. log K″f < 8 olduğunda araç keskin bir dönüm noktası beklenmediği uyarısını verir.',
      en: 'For each volume the tool solves the mass balances together with K″f = [MY] / ([M′][Y′]) (M′: total metal not bound to EDTA, Y′: total EDTA not bound to metal); this is a quadratic and needs no region-by-region approximation. By hand:\n\n• Before equivalence: [M′] ≈ unreacted metal (mmol) / total volume (mL).\n• At equivalence: [M′] = [Y′] and [M′] = √([MY] / K″f).\n• After equivalence: [M′] = [MY] / (K″f · [Y′]); [Y′] comes from the excess EDTA.\n\nWith an auxiliary ligand (α_M < 1) the pM shown is for free Mⁿ⁺: [Mⁿ⁺] = α_M · [M′]. When log K″f < 8 the tool warns that no sharp end point is expected.',
    },
    usage: {
      tr: [
        'Belirli bir pH’ta keskin bir dönüm noktası beklenip beklenmeyeceğini görmek ve uygun pH’ı seçmek.',
        'Farklı metallerin aynı pH’taki davranışını karşılaştırmak (ör. Ca²⁺ ve Mg²⁺ pH 10’da, Fe³⁺ çok daha düşük pH’ta).',
        'Metal ile EDTA’nın 1:1 tepkimeye girdiği ve pH’ın tamponla sabit tutulduğu varsayılır.',
        'Metal indikatörünün kendi kompleksleşme dengesi ve renk değişimi hesaba katılmaz.',
      ],
      en: [
        'Checking whether a sharp end point can be expected at a given pH and choosing a suitable pH.',
        'Comparing how different metals behave at the same pH (e.g. Ca²⁺ and Mg²⁺ at pH 10, Fe³⁺ at much lower pH).',
        'Assumes a 1:1 metal–EDTA reaction and a pH held constant by a buffer.',
        'The metal indicator’s own complexation equilibrium and colour change are not modelled.',
      ],
    },
    solution: {
      tr: [
        'Varsayılan veriler: 100,0 mL 0,100 M Ca²⁺, 0,100 M EDTA, pH 10,00, α_M = 1. Tablodan Kf = 5,01 × 10¹⁰; α_Y⁴⁻ = 0,3548 → K″f = 1,778 × 10¹⁰ (log K″f = 10,25). V_eş = 100,0 mL.',
        'Başlangıçta pCa = 1,000. 50,00 mL’de [Ca²⁺] = (10,00 − 5,00) mmol / 150,0 mL = 0,0333 M → pCa = 1,477.',
        'Eşdeğerlikte [CaY²⁻] = 10,00 mmol / 200,0 mL = 0,0500 M; [Ca²⁺] = √(0,0500 / 1,778 × 10¹⁰) = 1,68 × 10⁻⁶ M.',
        'Sonuç: eşdeğerlikte pCa = 5,775. pCa, 99,00 mL’de 3,299’dan 101,0 mL’de 8,250’ye sıçrar.',
      ],
      en: [
        'Default data: 100.0 mL of 0.100 M Ca²⁺, 0.100 M EDTA, pH 10.00, α_M = 1. From the table Kf = 5.01 × 10¹⁰; α_Y⁴⁻ = 0.3548 → K″f = 1.778 × 10¹⁰ (log K″f = 10.25). V_eq = 100.0 mL.',
        'Initially pCa = 1.000. At 50.00 mL, [Ca²⁺] = (10.00 − 5.00) mmol / 150.0 mL = 0.0333 M → pCa = 1.477.',
        'At equivalence [CaY²⁻] = 10.00 mmol / 200.0 mL = 0.0500 M; [Ca²⁺] = √(0.0500 / 1.778 × 10¹⁰) = 1.68 × 10⁻⁶ M.',
        'Result: pCa at equivalence = 5.775. pCa jumps from 3.299 at 99.00 mL to 8.250 at 101.0 mL.',
      ],
    },
    mistakes: {
      tr: [
        'Kf’yi pH düzeltmesi (α_Y⁴⁻) yapmadan kullanmak; bu, eşdeğerlik sonrası pM’i abartır.',
        'Eşdeğerlikte [M] = 0 sanmak: kompleksin ayrışmasıyla [M′] = [Y′] = √([MY]/K″f) kalır.',
        'Stokiyometrinin metalin yüküne göre değiştiğini sanmak: EDTA, M²⁺, M³⁺ ve M⁴⁺ ile hep 1:1 kompleks oluşturur.',
      ],
      en: [
        'Using Kf without the pH correction (α_Y⁴⁻); this overstates pM after equivalence.',
        'Assuming [M] = 0 at equivalence: dissociation of the complex leaves [M′] = [Y′] = √([MY]/K″f).',
        'Thinking the stoichiometry depends on the metal’s charge: EDTA forms 1:1 complexes with M²⁺, M³⁺ and M⁴⁺ alike.',
      ],
    },
    related: ['conditional-kf', 'edta-alpha', 'table-edta-kf', 'water-hardness'],
  },

  'curve-precipitation': {
    concept: {
      tr: 'Çöktürme titrasyonlarının en önemli titrantı gümüş nitrattır (arjantometri): Ag⁺; Cl⁻, Br⁻, I⁻ ve SCN⁻ ile az çözünen tuzlar oluşturur. Titrasyon eğrisi pAg’ın (ya da pX’in) hacimle değişimini gösterir. Eşdeğerlikten önce pAg’ı çözeltide kalan halojenür, sonra fazla Ag⁺ belirler; arada Ksp’ye bağlı bir sıçrama oluşur.\n\nKsp ne kadar küçükse sıçrama o kadar büyüktür: aynı koşullarda I⁻ (AgI) en keskin, Cl⁻ (AgCl) en küçük sıçramayı verir. Dönüm noktası Mohr (kromat), Volhard (Fe³⁺ indikatörlü SCN⁻ geri titrasyonu) ya da Fajans (adsorpsiyon indikatörü) yöntemiyle saptanır.',
      en: 'The most important titrant for precipitation titrations is silver nitrate (argentometry): Ag⁺ forms sparingly soluble salts with Cl⁻, Br⁻, I⁻ and SCN⁻. The titration curve shows pAg (or pX) against volume. Before equivalence pAg is set by the halide left in solution, after it by the excess Ag⁺, with a Ksp-dependent break in between.\n\nThe smaller the Ksp, the larger the break: under the same conditions I⁻ (AgI) gives the sharpest and Cl⁻ (AgCl) the smallest break. The end point is detected by the Mohr (chromate), Volhard (back-titration with SCN⁻ and Fe³⁺ indicator) or Fajans (adsorption indicator) method.',
    },
    meaning: {
      tr: 'Araç, çökelek varken geçerli iki koşulu birlikte çözer: [Ag⁺][X⁻] = Ksp ve kütle denkliğinden [Ag⁺] − [X⁻] = (C_Ag·V − Cₓ·Vₓ)/(Vₓ + V). İkincisinde [X⁻] = Ksp/[Ag⁺] yazılınca [Ag⁺] için ikinci dereceden bir denklem elde edilir.\n\n• Eşdeğerlikten önce: [X⁻] ≈ kalan halojenür / toplam hacim; pAg = pKsp − pX.\n• Eşdeğerlikte: [Ag⁺] = [X⁻] = √Ksp, pAg = ½ pKsp.\n• Eşdeğerlikten sonra: [Ag⁺] ≈ fazla Ag⁺ / toplam hacim.\n\nGrafikte pAg ile pX = pKsp − pAg birlikte gösterilir ve iki eğri eşdeğerlikte kesişir. Araç ayrıca Mohr yöntemi için gereken kromat derişimini [CrO₄²⁻] = Ksp(Ag₂CrO₄) / [Ag⁺]²_eş olarak verir.',
      en: 'The tool solves the two conditions that hold while solid is present: [Ag⁺][X⁻] = Ksp and, from the mass balance, [Ag⁺] − [X⁻] = (C_Ag·V − Cₓ·Vₓ)/(Vₓ + V). Substituting [X⁻] = Ksp/[Ag⁺] in the second gives a quadratic in [Ag⁺].\n\n• Before equivalence: [X⁻] ≈ remaining halide / total volume; pAg = pKsp − pX.\n• At equivalence: [Ag⁺] = [X⁻] = √Ksp, pAg = ½ pKsp.\n• After equivalence: [Ag⁺] ≈ excess Ag⁺ / total volume.\n\nThe plot shows pAg together with pX = pKsp − pAg; the two curves cross at equivalence. The tool also gives the chromate concentration required for the Mohr method, [CrO₄²⁻] = Ksp(Ag₂CrO₄) / [Ag⁺]²_eq.',
    },
    usage: {
      tr: [
        'Halojenür ve tiyosiyanat tayinlerinde sıçramanın büyüklüğünü ve dönüm noktası koşullarını değerlendirmek.',
        'Mohr yöntemi için kromat derişimini seçmek.',
        '1:1 çökelek (AgX) ve aktivite katsayısı 1 varsayılır; çok seyreltik çözeltilerde ve ilk damlalarda çökelek hesaplandığı gibi oluşmayabilir.',
        'Karışık halojenürlerin ardışık çökmesi (ör. I⁻ ile Cl⁻ birlikte) bu araçta modellenmez.',
      ],
      en: [
        'Assessing the size of the break and the end-point conditions for halide and thiocyanate determinations.',
        'Choosing the chromate concentration for the Mohr method.',
        'Assumes a 1:1 precipitate (AgX) and unit activity coefficients; in very dilute solutions and for the first drops the precipitate may not form as calculated.',
        'Successive precipitation of mixed halides (e.g. I⁻ together with Cl⁻) is not modelled.',
      ],
    },
    solution: {
      tr: [
        'Varsayılan veriler: 50,00 mL 0,100 M Cl⁻, 0,100 M AgNO₃, Ksp(AgCl) = 1,0 × 10⁻¹⁰ (pKsp = 10,00). V_eş = 50,00 mL.',
        '25,00 mL’de: [Cl⁻] = (5,000 − 2,500) mmol / 75,00 mL = 0,0333 M → pCl = 1,477, pAg = 10,00 − 1,477 = 8,523.',
        '60,00 mL’de: [Ag⁺] = (6,000 − 5,000) mmol / 110,0 mL = 9,09 × 10⁻³ M → pAg = 2,041.',
        'Sonuç: eşdeğerlikte pAg = ½ × 10,00 = 5,000; pAg, %0,2 önce 6,005’ten %0,2 sonra 3,996’ya düşer. Mohr için gereken [CrO₄²⁻] = 1,1 × 10⁻¹² / (1,0 × 10⁻⁵)² = 0,011 M.',
      ],
      en: [
        'Default data: 50.00 mL of 0.100 M Cl⁻, 0.100 M AgNO₃, Ksp(AgCl) = 1.0 × 10⁻¹⁰ (pKsp = 10.00). V_eq = 50.00 mL.',
        'At 25.00 mL: [Cl⁻] = (5.000 − 2.500) mmol / 75.00 mL = 0.0333 M → pCl = 1.477, pAg = 10.00 − 1.477 = 8.523.',
        'At 60.00 mL: [Ag⁺] = (6.000 − 5.000) mmol / 110.0 mL = 9.09 × 10⁻³ M → pAg = 2.041.',
        'Result: pAg at equivalence = ½ × 10.00 = 5.000; pAg falls from 6.005 at 0.2% before to 3.996 at 0.2% after. Chromate needed for Mohr: [CrO₄²⁻] = 1.1 × 10⁻¹² / (1.0 × 10⁻⁵)² = 0.011 M.',
      ],
    },
    mistakes: {
      tr: [
        'Eğrinin yönünü karıştırmak: titrant eklendikçe [Ag⁺] artar, pAg ise azalır (pX artar).',
        'Seyrelmeyi ihmal edip kalan ya da fazla iyonu başlangıç hacmine bölmek.',
        'Ksp’si küçük olan tuzun her zaman daha az çözündüğünü sanmak; bu karşılaştırma yalnızca aynı stokiyometrideki tuzlar (AgCl, AgBr, AgI) için geçerlidir.',
      ],
      en: [
        'Getting the direction wrong: as titrant is added [Ag⁺] rises and pAg falls (pX rises).',
        'Ignoring dilution and dividing the remaining or excess ion by the initial volume.',
        'Assuming the salt with the smaller Ksp is always less soluble; the comparison only holds for salts of the same stoichiometry (AgCl, AgBr, AgI).',
      ],
    },
    related: ['mohr-chromate', 'table-ksp', 'molar-solubility', 'derivative-endpoint'],
  },

  'curve-redox': {
    concept: {
      tr: 'Redoks titrasyon eğrisi, titrant hacmine karşı çözeltinin potansiyelini (E) gösterir. Fe²⁺’nin Ce⁴⁺ ile titrasyonunda olduğu gibi indirgen bir analit yükseltgen bir titrantla tepkimeye girer. Eşdeğerlikten önce potansiyeli analit çifti (Fe³⁺/Fe²⁺), sonra titrant çifti (Ce⁴⁺/Ce³⁺) belirler; aradaki sıçrama potansiyometrik olarak ya da redoks indikatörüyle izlenir.\n\nNernst eşitliğinde derişimlerin oranı yer aldığından, 1:1 çiftlerde eğri seyrelmeden neredeyse bağımsızdır. Bu, asit–baz ve çöktürme eğrilerinden önemli bir farktır.',
      en: 'A redox titration curve shows the potential (E) of the solution against titrant volume. A reducing analyte reacts with an oxidising titrant, as in the titration of Fe²⁺ with Ce⁴⁺. Before equivalence the potential is set by the analyte couple (Fe³⁺/Fe²⁺), afterwards by the titrant couple (Ce⁴⁺/Ce³⁺); the break in between is followed potentiometrically or with a redox indicator.\n\nBecause the Nernst equation contains a ratio of concentrations, the curve for 1:1 couples is practically independent of dilution. This is an important difference from acid–base and precipitation curves.',
    },
    meaning: {
      tr: 'Araç her hacim için elektron denkliğini çözer: analitin verdiği elektronlar titrantın aldığına eşittir.\n\nn₁ · C₁V₁ · f_ox(E) = n₂ · C₂V · f_red(E)\n\nf_ox analitin yükseltgenmiş kesri, f_red ise titrantın indirgenmiş kesridir; ikisi de Nernst eşitliğinden E’nin fonksiyonu olarak yazılır. Elle hesapta:\n\n• Eşdeğerlikten önce: E = E₁° − (0,05916/n₁) log([Red₁]/[Ox₁]); yarı eşdeğerlikte E = E₁°.\n• Eşdeğerlikte: E = (n₁E₁° + n₂E₂°)/(n₁ + n₂).\n• Eşdeğerlikten sonra: E = E₂° − (0,05916/n₂) log([Red₂]/[Ox₂]); eşdeğerlik hacminin iki katında E = E₂°.\n\nn₁ ≠ n₂ olduğunda eğri eşdeğerlik çevresinde simetrik değildir ve E_eş, elektron sayısı büyük olan çiftin potansiyeline daha yakındır.',
      en: 'For each volume the tool solves the electron balance: electrons lost by the analyte equal those gained by the titrant.\n\nn₁ · C₁V₁ · f_ox(E) = n₂ · C₂V · f_red(E)\n\nf_ox is the oxidised fraction of the analyte and f_red the reduced fraction of the titrant; both follow from the Nernst equation as functions of E. By hand:\n\n• Before equivalence: E = E₁° − (0.05916/n₁) log([Red₁]/[Ox₁]); at half-equivalence E = E₁°.\n• At equivalence: E = (n₁E₁° + n₂E₂°)/(n₁ + n₂).\n• After equivalence: E = E₂° − (0.05916/n₂) log([Red₂]/[Ox₂]); at twice the equivalence volume E = E₂°.\n\nWhen n₁ ≠ n₂ the curve is not symmetric about equivalence, and E_eq lies closer to the potential of the couple with more electrons.',
    },
    usage: {
      tr: [
        'Sıçramanın büyüklüğünü görmek ve indikatör seçmek: araç, eşdeğerlikten %0,2 önce ve sonraki potansiyeller arasında kalan indikatörleri önerir.',
        'Hazır sistemler: Fe²⁺ + Ce⁴⁺, Fe²⁺ + MnO₄⁻, Sn²⁺ + Fe³⁺.',
        'Ox + ne⁻ ⇌ Red tipinde 1:1 çiftler varsayılır; H⁺’ya bağlı çiftlerde [H⁺] = 1 M kabul edilir.',
        'Formal potansiyeller (ör. 1 M H₂SO₄’te Ce⁴⁺/Ce³⁺ için 1,44 V) standart potansiyellerden daha gerçekçi sonuç verir.',
      ],
      en: [
        'Seeing the size of the break and choosing an indicator: the tool suggests indicators whose range lies between the potentials 0.2% before and after equivalence.',
        'Presets: Fe²⁺ + Ce⁴⁺, Fe²⁺ + MnO₄⁻, Sn²⁺ + Fe³⁺.',
        'Assumes 1:1 couples of the type Ox + ne⁻ ⇌ Red; for pH-dependent couples [H⁺] = 1 M is assumed.',
        'Formal potentials (e.g. 1.44 V for Ce⁴⁺/Ce³⁺ in 1 M H₂SO₄) give more realistic results than standard potentials.',
      ],
    },
    solution: {
      tr: [
        'Varsayılan veriler: 50,00 mL 0,100 M Fe²⁺ (E₁° = 0,771 V, n₁ = 1) ve 0,100 M Ce⁴⁺ (E₂° = 1,44 V, n₂ = 1). V_eş = 50,00 mL.',
        '10,00 mL’de [Fe³⁺]/[Fe²⁺] = 1,000/4,000 → E = 0,771 + 0,05916 × log(0,250) = 0,735 V. Yarı eşdeğerlikte (25,00 mL) E = E₁° = 0,771 V.',
        'Eşdeğerlikte E_eş = (1 × 0,771 + 1 × 1,44)/2 = 1,1055 V. %0,2 önce (49,90 mL) E = 0,931 V, %0,2 sonra (50,10 mL) E = 1,280 V.',
        'Sonuç: potansiyel eşdeğerlik çevresinde yaklaşık 0,35 V sıçrar; dönüşüm aralığı 1,00–1,12 V olan ferroin bu sıçramanın içinde kalır ve önerilen indikatördür.',
      ],
      en: [
        'Default data: 50.00 mL of 0.100 M Fe²⁺ (E₁° = 0.771 V, n₁ = 1) and 0.100 M Ce⁴⁺ (E₂° = 1.44 V, n₂ = 1). V_eq = 50.00 mL.',
        'At 10.00 mL, [Fe³⁺]/[Fe²⁺] = 1.000/4.000 → E = 0.771 + 0.05916 × log(0.250) = 0.735 V. At half-equivalence (25.00 mL) E = E₁° = 0.771 V.',
        'At equivalence E_eq = (1 × 0.771 + 1 × 1.44)/2 = 1.1055 V. At 0.2% before (49.90 mL) E = 0.931 V, at 0.2% after (50.10 mL) E = 1.280 V.',
        'Result: the potential jumps by about 0.35 V around equivalence; ferroin, with a transition range of 1.00–1.12 V, lies inside this jump and is the suggested indicator.',
      ],
    },
    mistakes: {
      tr: [
        'Eşdeğerlikten önce titrant çiftini kullanmak: eklenen Ce⁴⁺ neredeyse tamamen tükendiği için hesap analit çiftiyle yapılır.',
        'n₁ ≠ n₂ olan sistemlerde E_eş’i basit ortalama ile bulmak.',
        'V = 0’daki potansiyeli hesaplamaya çalışmak: hiç Fe³⁺ yoksa Nernst eşitliği tanımsızdır; araç eğriyi küçük bir hacimden başlatır.',
      ],
      en: [
        'Using the titrant couple before equivalence: the Ce⁴⁺ added is almost completely consumed, so the analyte couple must be used.',
        'Taking a simple average for E_eq when n₁ ≠ n₂.',
        'Trying to calculate the potential at V = 0: with no Fe³⁺ present the Nernst equation is undefined; the tool starts the curve at a small volume.',
      ],
    },
    related: ['redox-equivalence-potential', 'table-indicators', 'table-potentials', 'nernst'],
  },

  'derivative-endpoint': {
    concept: {
      tr: 'Potansiyometrik titrasyonda dönüm noktası, indikatör rengi yerine ölçülen pH ya da potansiyel verisinden bulunur. Titrasyon eğrisinin büküm noktası, yani eğimin en büyük olduğu yer, dönüm noktası olarak alınır. Eğri gözle değerlendirildiğinde, özellikle sıçrama küçük ya da eğri asimetrik olduğunda, bu nokta belirsiz kalır.\n\nTürev yöntemi bu sorunu sayısal olarak çözer: birinci türev (ΔpH/ΔV) büküm noktasında en büyük değerini alır, ikinci türev (Δ²pH/ΔV²) ise aynı noktada işaret değiştirerek sıfırdan geçer. Renkli ya da bulanık çözeltilerde ve uygun indikatör bulunmadığında özellikle yararlıdır.',
      en: 'In a potentiometric titration the end point is found from the measured pH or potential instead of an indicator colour. It is taken as the inflection point of the titration curve, where the slope is greatest. Judged by eye, this point is uncertain, especially when the break is small or the curve is asymmetric.\n\nThe derivative method solves this numerically: the first derivative (ΔpH/ΔV) has its maximum at the inflection point, and the second derivative (Δ²pH/ΔV²) changes sign and crosses zero at the same point. It is especially useful for coloured or turbid solutions and when no suitable indicator exists.',
    },
    meaning: {
      tr: 'Birinci türev, ardışık iki ölçüm arasındaki eğimdir ve iki hacmin ortalamasına atanır:\n\nΔpH/ΔV = (pH₂ − pH₁)/(V₂ − V₁), V̄ = (V₁ + V₂)/2\n\nİkinci türev, aynı işlemin birinci türev değerlerine uygulanmasıyla bulunur. Araç birinci türevin en büyük olduğu hacmi ve bu tepenin çevresinde ikinci türevin işaret değiştirdiği noktayı (doğrusal interpolasyonla) verir; ikincisi genellikle daha kesindir.\n\n• Sonuç, eşdeğerlik çevresindeki veri sıklığına bağlıdır: sıçrama bölgesinde 0,05–0,10 mL’lik eklemeler yapılmalıdır.\n• Birinci türev maksimumunun kesinliği, en fazla iki veri noktası arasındaki aralık kadardır.\n• Aynı yöntem potansiyel (mV) verisine de uygulanır.',
      en: 'The first derivative is the slope between two successive readings, assigned to the mean of the two volumes:\n\nΔpH/ΔV = (pH₂ − pH₁)/(V₂ − V₁), V̄ = (V₁ + V₂)/2\n\nThe second derivative is obtained by applying the same operation to the first-derivative values. The tool reports the volume of the largest first derivative and the point near that peak where the second derivative changes sign (by linear interpolation); the latter is usually more precise.\n\n• The result depends on how densely the data cover the equivalence region: add 0.05–0.10 mL increments in the break.\n• The first-derivative maximum can be no more precise than the spacing between two data points.\n• The same method applies to potential (mV) data.',
    },
    usage: {
      tr: [
        'pH metre ya da iyon seçici elektrotla izlenen asit–baz, çöktürme, kompleksometrik ve redoks titrasyonlarında dönüm noktasını bulmak.',
        'Renkli, bulanık ya da indikatörün kullanılamadığı numuneler.',
        'Birden fazla sıçrama varsa (ör. poliprotik asitler) her sıçramayı ayrı bir veri aralığıyla değerlendirin; araç en büyük tepeyi bulur.',
        'Türev almak gürültüyü büyütür; gürültülü verilerde Gran grafiği gibi doğrusallaştırma yöntemleri bir alternatiftir.',
      ],
      en: [
        'Locating the end point in acid–base, precipitation, complexometric and redox titrations followed with a pH meter or ion-selective electrode.',
        'Coloured or turbid samples, or where no indicator can be used.',
        'With several breaks (e.g. polyprotic acids) evaluate each break with its own data range; the tool finds the largest peak.',
        'Differentiation amplifies noise; for noisy data, linearisation methods such as a Gran plot are an alternative.',
      ],
    },
    solution: {
      tr: [
        'Varsayılan veriler: 20,00–28,00 mL arasında 13 hacim–pH çifti; pH 24,90 mL’de 6,14, 25,00 mL’de 8,72, 25,10 mL’de 11,30.',
        'Birinci türev: 24,90–25,00 mL arasında (8,72 − 6,14)/0,10 = 25,8 pH/mL (V̄ = 24,95 mL); 25,00–25,10 mL arasında (11,30 − 8,72)/0,10 = 25,8 pH/mL (V̄ = 25,05 mL). Komşu aralıklarda değer 3,0 pH/mL’ye düşer.',
        'İkinci türev: 24,90 mL’de (25,8 − 3,0)/0,10 = +228, 25,00 mL’de (25,8 − 25,8)/0,10 = 0, 25,10 mL’de −228 pH/mL².',
        'Sonuç: birinci türev maksimumu 24,95 mL’de (eşit iki tepeden ilki), ikinci türevin sıfır noktası 25,00 mL’de; dönüm noktası 25,00 mL olarak alınır.',
      ],
      en: [
        'Default data: 13 volume–pH pairs between 20.00 and 28.00 mL; pH 6.14 at 24.90 mL, 8.72 at 25.00 mL, 11.30 at 25.10 mL.',
        'First derivative: between 24.90 and 25.00 mL, (8.72 − 6.14)/0.10 = 25.8 pH/mL (V̄ = 24.95 mL); between 25.00 and 25.10 mL, (11.30 − 8.72)/0.10 = 25.8 pH/mL (V̄ = 25.05 mL). In the neighbouring intervals it drops to 3.0 pH/mL.',
        'Second derivative: +228 at 24.90 mL ((25.8 − 3.0)/0.10), 0 at 25.00 mL ((25.8 − 25.8)/0.10) and −228 pH/mL² at 25.10 mL.',
        'Result: first-derivative maximum at 24.95 mL (the first of two equal peaks), second-derivative zero at 25.00 mL; the end point is taken as 25.00 mL.',
      ],
    },
    mistakes: {
      tr: [
        'Türev değerini aralığın başındaki hacme atamak; doğrusu iki hacmin ortalamasıdır.',
        'Sıçrama bölgesinde büyük hacim adımları kullanmak; türev tepesi genişler ve dönüm noktası belirsizleşir.',
        'Dönüm noktasını eşdeğerlik noktasıyla özdeş saymak: asimetrik eğrilerde (ör. n₁ ≠ n₂ olan redoks sistemleri) aralarında küçük bir fark olabilir.',
      ],
      en: [
        'Assigning the derivative to the first volume of the interval; it belongs at the mean of the two volumes.',
        'Using large volume steps in the break; the derivative peak broadens and the end point becomes uncertain.',
        'Treating the end point as identical to the equivalence point: for asymmetric curves (e.g. redox systems with n₁ ≠ n₂) they can differ slightly.',
      ],
    },
    related: ['curve-acid-base', 'curve-redox', 'titration-stoich'],
  },

  'table-indicators': {
    concept: {
      tr: 'İndikatörler, dönüm noktasını gözle görülür bir renk değişimiyle belirten maddelerdir. Asit–baz indikatörleri, asit (HIn) ve baz (In⁻) formları farklı renkte olan zayıf organik asit ya da bazlardır. Redoks indikatörlerinin ise yükseltgenmiş ve indirgenmiş formlarının renkleri farklıdır.\n\nTablo, yaygın asit–baz indikatörlerinin pH geçiş aralıklarını ve redoks indikatörlerinin potansiyel aralıklarını renk değişimleriyle birlikte verir. Doğru indikatör, geçiş aralığı titrasyon eğrisinin dik sıçramasının içinde kalan indikatördür.',
      en: 'Indicators signal the end point through a visible colour change. Acid–base indicators are weak organic acids or bases whose acid (HIn) and base (In⁻) forms have different colours. Redox indicators have oxidised and reduced forms of different colours.\n\nThe table lists the pH transition ranges of common acid–base indicators and the potential ranges of redox indicators, with their colour changes. The right indicator is one whose transition range lies within the steep break of the titration curve.',
    },
    meaning: {
      tr: 'Asit–baz indikatörü için HIn ⇌ H⁺ + In⁻ dengesinden pH = pK_In + log([In⁻]/[HIn]) yazılır. Göz, bir form diğerinin yaklaşık 10 katı olduğunda yalnızca onun rengini algılar; bu yüzden renk geçişi kabaca pH = pK_In ± 1 aralığında gözlenir. Tablodaki aralıklar deneysel olduğundan her zaman tam 2 birim genişlikte değildir.\n\nRedoks indikatörü için E = E°_In − (0,05916/n) log([In_red]/[In_ox]) yazılır ve renk geçişi yaklaşık E°_In ± 0,05916/n V aralığındadır (25 °C, SHE’ye karşı). Uygulamadaki redoks aralıkları bu kuralla hesaplanmıştır.\n\nSeçim kuralı: geçiş aralığı, eşdeğerlikten biraz önce ve sonra (ör. %0,2) okunan pH ya da E değerlerinin arasında kalmalıdır.',
      en: 'For an acid–base indicator, the equilibrium HIn ⇌ H⁺ + In⁻ gives pH = pK_In + log([In⁻]/[HIn]). The eye sees only one colour when that form is about 10 times more abundant than the other, so the transition is observed roughly over pH = pK_In ± 1. The tabulated ranges are experimental and therefore not always exactly 2 units wide.\n\nFor a redox indicator, E = E°_In − (0.05916/n) log([In_red]/[In_ox]), and the colour change occurs over roughly E°_In ± 0.05916/n V (25 °C, vs. SHE). The redox ranges in the app are calculated with this rule.\n\nSelection rule: the transition range should lie between the pH or E values read slightly before and after equivalence (e.g. 0.2%).',
    },
    usage: {
      tr: [
        'Asit–baz titrasyonunda eşdeğerlik pH’ına uygun indikatör seçmek.',
        'Redoks titrasyonunda eşdeğerlik potansiyeline uygun indikatör seçmek (ör. Ce⁴⁺ titrasyonlarında ferroin).',
        'İndikatör az miktarda eklenmelidir; kendisi de zayıf asit ya da redoks aktif bir madde olduğundan titrant tüketir.',
        'Renk algısı kişiden kişiye değişir; kritik işlerde potansiyometrik dönüm noktası tercih edilir.',
      ],
      en: [
        'Choosing an indicator to match the equivalence pH of an acid–base titration.',
        'Choosing an indicator to match the equivalence potential of a redox titration (e.g. ferroin for Ce⁴⁺ titrations).',
        'Add only a little indicator; being itself a weak acid or a redox-active substance, it consumes titrant.',
        'Colour perception varies between people; for critical work a potentiometric end point is preferred.',
      ],
    },
    solution: {
      tr: [
        'Problem: 0,100 M asetik asit 0,100 M NaOH ile titre ediliyor; eşdeğerlikte pH = 8,73 (asit–baz titrasyon eğrisi aracı).',
        'Tablo: fenolftalein 8,3–10,0 (renksiz → kırmızı-mor), timol mavisi (bazik) 8,0–9,6 (sarı → mavi). İkisi de eşdeğerlik çevresindeki sıçramanın (49,90 mL’de pH 7,45; 50,10 mL’de 10,00) içindedir.',
        'Metil kırmızısı (4,2–6,3) uygun değildir: rengi tampon bölgesinde değişir ve dönüm noktası çok erken gelir.',
        'Sonuç: fenolftalein seçilir. Benzer biçimde 1 M H₂SO₄’te Fe²⁺–Ce⁴⁺ titrasyonunda E_eş = 1,06 V olduğundan, E° = 1,06 V ve n = 1 olan ferroin (1,00–1,12 V) uygundur.',
      ],
      en: [
        'Problem: 0.100 M acetic acid is titrated with 0.100 M NaOH; the pH at equivalence is 8.73 (acid–base titration curve tool).',
        'Table: phenolphthalein 8.3–10.0 (colourless → red-violet), thymol blue (base range) 8.0–9.6 (yellow → blue). Both lie inside the break around equivalence (pH 7.45 at 49.90 mL; 10.00 at 50.10 mL).',
        'Methyl red (4.2–6.3) is unsuitable: it changes colour in the buffer region and the end point comes far too early.',
        'Result: phenolphthalein is chosen. Likewise, for Fe²⁺–Ce⁴⁺ in 1 M H₂SO₄, E_eq = 1.06 V, so ferroin (E° = 1.06 V, n = 1; 1.00–1.12 V) is suitable.',
      ],
    },
    mistakes: {
      tr: [
        'Eşdeğerlik pH’ı 7 olmayan titrasyonlarda “nötral” bir indikatör (bromtimol mavisi) seçmek.',
        'Titrasyonun yönünü hesaba katmamak: renksizden renkliye geçiş (fenolftaleinin pembeleşmesi) renkliden renksize geçişten daha kolay görülür.',
        'Fazla indikatör eklemek; indikatör hatası artar ve renk geçişi bulanıklaşır.',
      ],
      en: [
        'Picking a “neutral” indicator (bromothymol blue) for titrations whose equivalence pH is not 7.',
        'Ignoring the direction of titration: a change from colourless to coloured (phenolphthalein turning pink) is easier to see than the reverse.',
        'Adding too much indicator; the indicator error grows and the colour change becomes less distinct.',
      ],
    },
    related: ['curve-acid-base', 'curve-redox', 'redox-equivalence-potential', 'titration-error'],
  },

  'table-edta-kf': {
    concept: {
      tr: 'EDTA, alkali metaller dışındaki metal iyonlarının çoğuyla 1:1 oranında kararlı şelatlar oluşturur. Oluşum sabiti Kf = [MYⁿ⁻⁴] / ([Mⁿ⁺][Y⁴⁻]) kompleksin kararlılığını gösterir ve metale göre çok geniş bir aralıkta değişir: tablodaki log Kf değerleri Ag⁺ için 7,3 iken Fe³⁺ için 25,1’dir.\n\nKf değerleri, bir metalin hangi pH’ta titre edilebileceğini ve karışımlarda pH ayarıyla seçicilik sağlanıp sağlanamayacağını belirler.',
      en: 'EDTA forms stable 1:1 chelates with most metal ions other than the alkali metals. The formation constant Kf = [MYⁿ⁻⁴] / ([Mⁿ⁺][Y⁴⁻]) measures the stability of the complex and varies enormously between metals: in the table log Kf is 7.3 for Ag⁺ but 25.1 for Fe³⁺.\n\nThe Kf values decide at which pH a metal can be titrated and whether metals in a mixture can be titrated selectively by adjusting the pH.',
    },
    meaning: {
      tr: 'Tablo Kf ve log Kf değerlerini birlikte verir. Kf, tamamen protonsuz Y⁴⁻’ye göre tanımlıdır; bu yüzden titrasyon hesabında doğrudan kullanılmaz, önce pH etkisi eklenir:\n\nK″f = α_M · α_Y⁴⁻ · Kf  (log K″f = log Kf + log α_Y⁴⁻ + log α_M)\n\n• Yüksek yüklü iyonlar (Fe³⁺, Bi³⁺, Th⁴⁺) çok büyük Kf değerlerine sahiptir ve asidik ortamda (pH ≈ 1–3) titre edilebilir.\n• Zn²⁺, Pb²⁺, Cu²⁺ gibi iyonlar orta asitlikte (yaklaşık pH 4–7) titre edilebilir.\n• Kf’si küçük olan Ca²⁺ ve Mg²⁺ ancak bazik ortamda (pH ≈ 10) titre edilir.\n\nKabaca, log K″f ≳ 8 koşulunun sağlandığı en düşük pH o metal için alt sınırdır.',
      en: 'The table gives Kf together with log Kf. Kf is defined with respect to fully deprotonated Y⁴⁻, so it is not used directly in titration calculations; the pH effect is added first:\n\nK″f = α_M · α_Y⁴⁻ · Kf  (log K″f = log Kf + log α_Y⁴⁻ + log α_M)\n\n• Highly charged ions (Fe³⁺, Bi³⁺, Th⁴⁺) have very large Kf values and can be titrated in acid (pH ≈ 1–3).\n• Ions such as Zn²⁺, Pb²⁺ and Cu²⁺ can be titrated in moderately acidic solution (about pH 4–7).\n• Ca²⁺ and Mg²⁺, with small Kf, can be titrated only in alkaline solution (pH ≈ 10).\n\nRoughly, the lowest pH at which log K″f ≳ 8 is the lower limit for that metal.',
    },
    usage: {
      tr: [
        'Koşullu oluşum sabiti ve EDTA titrasyon eğrisi hesapları için Kf bulmak.',
        'Bir karışımda pH ile seçici titrasyon planlamak (ör. Fe³⁺ pH ≈ 2’de, Ca²⁺ + Mg²⁺ pH 10’da).',
        'Değerler 25 °C ve belirli bir iyonik şiddet içindir (Christian, Ek C); kaynaklar arasında küçük farklar olabilir.',
      ],
      en: [
        'Looking up Kf for conditional-constant and EDTA titration-curve calculations.',
        'Planning selective titrations in a mixture by pH (e.g. Fe³⁺ at pH ≈ 2, Ca²⁺ + Mg²⁺ at pH 10).',
        'Values refer to 25 °C and a particular ionic strength (Christian, Appendix C); sources differ slightly.',
      ],
    },
    solution: {
      tr: [
        'Problem: Mg²⁺, EDTA ile pH 10’da ve pH 8’de titre edilebilir mi?',
        'Tablodan Kf(MgY²⁻) = 4,9 × 10⁸ (log Kf = 8,69). α_Y⁴⁻ değerleri: pH 10’da 0,355; pH 8’de 5,39 × 10⁻³.',
        'pH 10: K″f = 0,355 × 4,9 × 10⁸ = 1,74 × 10⁸ (log 8,24). pH 8: K″f = 5,39 × 10⁻³ × 4,9 × 10⁸ = 2,64 × 10⁶ (log 6,42).',
        'Sonuç: Mg²⁺ ancak pH 10 civarında titre edilebilir. Karşılaştırma: Fe³⁺ için Kf = 1,3 × 10²⁵ olduğundan pH 2’de bile K″f ≈ 4,9 × 10¹¹’dir; bu pH’ta Ca²⁺ ve Mg²⁺ titrasyona katılmaz.',
      ],
      en: [
        'Problem: can Mg²⁺ be titrated with EDTA at pH 10 and at pH 8?',
        'From the table Kf(MgY²⁻) = 4.9 × 10⁸ (log Kf = 8.69). α_Y⁴⁻: 0.355 at pH 10; 5.39 × 10⁻³ at pH 8.',
        'pH 10: K″f = 0.355 × 4.9 × 10⁸ = 1.74 × 10⁸ (log 8.24). pH 8: K″f = 5.39 × 10⁻³ × 4.9 × 10⁸ = 2.64 × 10⁶ (log 6.42).',
        'Result: Mg²⁺ can be titrated only near pH 10. For comparison, Fe³⁺ has Kf = 1.3 × 10²⁵, so even at pH 2 K″f ≈ 4.9 × 10¹¹; at this pH Ca²⁺ and Mg²⁺ do not take part.',
      ],
    },
    mistakes: {
      tr: [
        'log Kf ile Kf’yi karıştırmak; logaritmalar toplanır, Kf değerleri çarpılır.',
        'Kf’yi pH düzeltmesi yapmadan kullanıp her pH’ta titrasyonun mümkün olduğunu sanmak.',
        'Na⁺ ve K⁺ gibi alkali metallerin de EDTA ile titre edilebileceğini sanmak.',
      ],
      en: [
        'Mixing up log Kf and Kf; logarithms are added, Kf values multiplied.',
        'Using Kf without the pH correction and assuming the titration works at any pH.',
        'Assuming alkali metals such as Na⁺ and K⁺ can be titrated with EDTA.',
      ],
    },
    related: ['conditional-kf', 'edta-alpha', 'curve-edta'],
  },
};

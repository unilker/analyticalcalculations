import type { ToolDetail } from '../../core/types';

/**
 * Detailed explanations for the Acid–Base Equilibria module (undergraduate level).
 * The last line of each worked solution states the result the calculator gives for the
 * tool's first example (checked by tests).
 */
export const ACIDBASE_DETAILS: Record<string, ToolDetail> = {
  'strong-acid': {
    concept: {
      tr: 'HCl, HNO₃ ve HClO₄ gibi kuvvetli asitler suda tamamen iyonlaşır. Bu nedenle çoğu durumda [H⁺] doğrudan asidin analitik derişimine eşittir ve pH = −log C yeterlidir.\n\nAncak su da kendi kendine iyonlaşır (otoprotoliz: H₂O ⇌ H⁺ + OH⁻, Kw = 1,0 × 10⁻¹⁴, 25 °C). Asit çok seyreltik olduğunda, yaklaşık 10⁻⁶ M’nin altında, suyun verdiği H⁺ artık ihmal edilemez. Bu araç suyun katkısını da hesaba kattığı için her derişimde doğru sonuç verir.',
      en: 'Strong acids such as HCl, HNO₃ and HClO₄ ionise completely in water. In most cases [H⁺] is therefore simply the analytical concentration of the acid and pH = −log C is enough.\n\nWater, however, also ionises (autoprotolysis: H₂O ⇌ H⁺ + OH⁻, Kw = 1.0 × 10⁻¹⁴ at 25 °C). When the acid is very dilute, below roughly 10⁻⁶ M, the H⁺ supplied by water can no longer be neglected. This tool includes the water contribution and is therefore correct at any concentration.',
    },
    meaning: {
      tr: 'Yük denkliği: [H⁺] = [A⁻] + [OH⁻]. Asit tamamen iyonlaştığından [A⁻] = C, ayrıca [OH⁻] = Kw/[H⁺]. Bunlar yerine konunca:\n\n[H⁺]² − C·[H⁺] − Kw = 0  →  [H⁺] = C/2 + √(C² + 4Kw)/2\n\n• C² ≫ 4Kw ise (C ≳ 10⁻⁶ M) [H⁺] ≈ C olur.\n• C ≪ √Kw ise [H⁺] ≈ √Kw = 1,0 × 10⁻⁷ M olur; asit ne kadar seyreltilirse seyreltilsin pH 7’yi geçmez.\n• Örnek: 1,0 × 10⁻⁸ M HCl’nin pH’ı 8 değil, 6,98’dir.\n\nHesap 25 °C ve aktivite katsayısı 1 kabulüyle yapılır.',
      en: 'Charge balance: [H⁺] = [A⁻] + [OH⁻]. Because the acid is fully ionised [A⁻] = C, and [OH⁻] = Kw/[H⁺]. Substituting:\n\n[H⁺]² − C·[H⁺] − Kw = 0  →  [H⁺] = C/2 + √(C² + 4Kw)/2\n\n• If C² ≫ 4Kw (C ≳ 10⁻⁶ M), [H⁺] ≈ C.\n• If C ≪ √Kw, [H⁺] ≈ √Kw = 1.0 × 10⁻⁷ M; however far the acid is diluted, the pH never exceeds 7.\n• Example: 1.0 × 10⁻⁸ M HCl has pH 6.98, not 8.\n\nThe calculation assumes 25 °C and unit activity coefficients.',
    },
    usage: {
      tr: [
        'HCl, HNO₃, HClO₄ gibi tek protonlu kuvvetli asitlerin pH’ını hesaplamak.',
        'Çok seyreltik asit çözeltilerinde (10⁻⁶ M ve altı) suyun katkısını hesaba katmak.',
        'H₂SO₄’ün ikinci protonu kuvvetli değildir (Ka₂ ≈ 10⁻²); bu araçla tam doğru sonuç vermez.',
        'Yaklaşık 0,1 M’nin üstünde ölçülen pH, aktivite etkisi nedeniyle hesaplanandan sapar.',
      ],
      en: [
        'pH of monoprotic strong acids such as HCl, HNO₃ and HClO₄.',
        'Including the water contribution in very dilute acid solutions (10⁻⁶ M and below).',
        'The second proton of H₂SO₄ is not strong (Ka₂ ≈ 10⁻²), so this tool is not exact for it.',
        'Above roughly 0.1 M the measured pH departs from the calculated value because of activity effects.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(HCl) = 0,010 M, Kw = 1,0 × 10⁻¹⁴.',
        'C² = 1,0 × 10⁻⁴, 4Kw = 4,0 × 10⁻¹⁴’ten çok büyüktür; bu yüzden [H⁺] = C/2 + √(C² + 4Kw)/2 ≈ C = 0,010 M.',
        'pH = −log(0,010).',
        'Sonuç: pH = 2,00.',
      ],
      en: [
        'Given: C(HCl) = 0.010 M, Kw = 1.0 × 10⁻¹⁴.',
        'C² = 1.0 × 10⁻⁴ is far larger than 4Kw = 4.0 × 10⁻¹⁴, so [H⁺] = C/2 + √(C² + 4Kw)/2 ≈ C = 0.010 M.',
        'pH = −log(0.010).',
        'Result: pH = 2.00.',
      ],
    },
    mistakes: {
      tr: [
        'Çok seyreltik asitte pH = −log C kullanıp 7’den büyük pH bulmak.',
        'H₂SO₄ gibi diprotik asitlerde iki protonu da tamamen iyonlaşmış saymak.',
        'pH’ı yanlış ondalıkla raporlamak: 0,010 M (iki anlamlı rakam) → pH 2,00.',
      ],
      en: [
        'Using pH = −log C for a very dilute acid and getting a pH above 7.',
        'Counting both protons of a diprotic acid such as H₂SO₄ as fully ionised.',
        'Reporting the wrong number of decimals: 0.010 M (two significant figures) → pH 2.00.',
      ],
    },
    related: ['strong-base', 'weak-acid', 'ph-converter', 'p-function'],
  },

  'strong-base': {
    concept: {
      tr: 'NaOH ve KOH gibi kuvvetli bazlar suda tamamen ayrışır ve verdikleri OH⁻ derişimi bazın analitik derişimine eşittir. Ba(OH)₂ ve Ca(OH)₂ gibi bazlar formül başına iki OH⁻ verir.\n\npH, önce pOH hesaplanıp ardından suyun iyonlar çarpımı (pH + pOH = pKw = 14,00, 25 °C) kullanılarak bulunur. Kuvvetli asitte olduğu gibi, baz çok seyreltikse suyun kendi iyonlaşması önem kazanır ve araç bunu da hesaba katar.',
      en: 'Strong bases such as NaOH and KOH dissociate completely, so the OH⁻ concentration equals the analytical concentration of the base. Bases such as Ba(OH)₂ and Ca(OH)₂ release two OH⁻ per formula unit.\n\nThe pH is found by first calculating pOH and then using the ion product of water (pH + pOH = pKw = 14.00 at 25 °C). As with strong acids, water’s own ionisation matters when the base is very dilute, and the tool includes it.',
    },
    meaning: {
      tr: 'Yük denkliği: [Na⁺] + [H⁺] = [OH⁻]. [Na⁺] = C ve [H⁺] = Kw/[OH⁻] yazılırsa:\n\n[OH⁻] = C/2 + √(C² + 4Kw)/2,  pOH = −log[OH⁻],  pH = 14,00 − pOH\n\n• C ≳ 10⁻⁶ M ise [OH⁻] ≈ C.\n• Araçtaki C, OH⁻ derişimidir: 0,01 M Ba(OH)₂ için C = 0,02 M girilmelidir.\n• pH + pOH = 14,00 eşitliği yalnızca 25 °C’de geçerlidir; Kw sıcaklıkla belirgin biçimde değişir.',
      en: 'Charge balance: [Na⁺] + [H⁺] = [OH⁻]. With [Na⁺] = C and [H⁺] = Kw/[OH⁻]:\n\n[OH⁻] = C/2 + √(C² + 4Kw)/2,  pOH = −log[OH⁻],  pH = 14.00 − pOH\n\n• If C ≳ 10⁻⁶ M, [OH⁻] ≈ C.\n• C in the tool is the OH⁻ concentration: enter C = 0.02 M for 0.01 M Ba(OH)₂.\n• pH + pOH = 14.00 holds only at 25 °C; Kw changes markedly with temperature.',
    },
    usage: {
      tr: [
        'NaOH, KOH, Ba(OH)₂ çözeltilerinin pH’ını hesaplamak.',
        'Kuvvetli asit–kuvvetli baz titrasyonunda eşdeğerlik noktasından sonraki pH’ı bulmak (artan OH⁻ derişimiyle).',
        'NaOH çözeltileri havadan CO₂ çekerek karbonata dönüşür; gerçek OH⁻ derişimi zamanla azalabilir.',
      ],
      en: [
        'pH of NaOH, KOH and Ba(OH)₂ solutions.',
        'pH after the equivalence point of a strong acid–strong base titration (using the excess OH⁻).',
        'NaOH solutions absorb CO₂ from air and form carbonate, so the true OH⁻ concentration can fall with time.',
      ],
    },
    solution: {
      tr: [
        'Verilen: C(NaOH) = 0,050 M → [OH⁻] = 0,050 M (C² ≫ 4Kw).',
        'pOH = −log(0,050) = 1,301.',
        'pH = 14,00 − 1,301.',
        'Sonuç: pH = 12,70.',
      ],
      en: [
        'Given: C(NaOH) = 0.050 M → [OH⁻] = 0.050 M (C² ≫ 4Kw).',
        'pOH = −log(0.050) = 1.301.',
        'pH = 14.00 − 1.301.',
        'Result: pH = 12.70.',
      ],
    },
    mistakes: {
      tr: [
        'pOH’u bulup pH diye raporlamak.',
        'Ba(OH)₂ ve Ca(OH)₂ gibi bazlarda OH⁻ derişimini 2 ile çarpmayı unutmak.',
        '25 °C dışında da pH + pOH = 14 almak.',
      ],
      en: [
        'Calculating pOH and reporting it as pH.',
        'Forgetting to double the OH⁻ concentration for Ba(OH)₂ or Ca(OH)₂.',
        'Using pH + pOH = 14 at temperatures other than 25 °C.',
      ],
    },
    related: ['strong-acid', 'weak-base', 'ph-converter'],
  },

  'weak-acid': {
    concept: {
      tr: 'Asetik asit gibi zayıf asitler suda yalnızca kısmen iyonlaşır: HA ⇌ H⁺ + A⁻. İyonlaşmanın derecesi asitlik sabiti Ka ile belirlenir. Ka ne kadar küçükse (pKa ne kadar büyükse) asit o kadar zayıftır ve aynı derişimde pH o kadar yüksektir.\n\nDers kitaplarındaki [H⁺] = √(Ka·C) formülü iki yaklaşıma dayanır. Bu araç ise hiçbir yaklaşım yapmadan, yük ve kütle denkliğinden tam çözüm verir. Bu nedenle yaklaşık formülün ne zaman güvenilir olduğunu kontrol etmek için de kullanılabilir.',
      en: 'Weak acids such as acetic acid ionise only partly in water: HA ⇌ H⁺ + A⁻. The extent of ionisation is set by the acid dissociation constant Ka. The smaller Ka (the larger pKa), the weaker the acid and the higher the pH at a given concentration.\n\nThe textbook formula [H⁺] = √(Ka·C) rests on two approximations. This tool makes no approximations and solves the charge and mass balances exactly, so it can also be used to check when the approximate formula is reliable.',
    },
    meaning: {
      tr: 'Kütle denkliği C = [HA] + [A⁻] ve Ka ifadesinden [A⁻] = Ka·C / (Ka + [H⁺]) bulunur. Yük denkliği [H⁺] = [A⁻] + [OH⁻]’e yerleştirilince aracın çözdüğü eşitlik elde edilir:\n\n[H⁺] = Ka·C / (Ka + [H⁺]) + Kw / [H⁺]\n\nYaklaşımlar:\n• Suyun katkısı ihmal edilirse (asit çok seyreltik ya da çok zayıf değilse): [H⁺]² + Ka·[H⁺] − Ka·C = 0 (ikinci derece denklem).\n• Ayrıca [H⁺] ≪ C ise [H⁺] ≈ √(Ka·C) olur.\n• %5 kuralı: [H⁺]/C < 0,05 ise ikinci yaklaşım kabul edilir; bu yaklaşık olarak C/Ka > 400 koşuluna eşdeğerdir.',
      en: 'From the mass balance C = [HA] + [A⁻] and the Ka expression, [A⁻] = Ka·C / (Ka + [H⁺]). Substituting into the charge balance [H⁺] = [A⁻] + [OH⁻] gives the equation the tool solves:\n\n[H⁺] = Ka·C / (Ka + [H⁺]) + Kw / [H⁺]\n\nApproximations:\n• Neglecting water (acid not too dilute or too weak): [H⁺]² + Ka·[H⁺] − Ka·C = 0, a quadratic.\n• If also [H⁺] ≪ C: [H⁺] ≈ √(Ka·C).\n• 5 % rule: the second approximation is accepted if [H⁺]/C < 0.05, which is roughly equivalent to C/Ka > 400.',
    },
    usage: {
      tr: [
        'Asetik asit, benzoik asit gibi tek protonlu zayıf asitlerin pH’ını hesaplamak.',
        'NH₄⁺ gibi zayıf bazların eşlenik asitlerinin (ör. NH₄Cl çözeltisinin) pH’ını hesaplamak; NH₄⁺’ün pKa’sı girilir.',
        'Poliprotik asitlerde Ka₁ ≫ Ka₂ ise pH’ı yalnızca ilk basamaktan yaklaşık olarak bulmak.',
        'Bilinen pH’tan gereken asit derişimini geri hesaplamak (C bilinmeyen seçilerek).',
      ],
      en: [
        'pH of monoprotic weak acids such as acetic or benzoic acid.',
        'pH of the conjugate acid of a weak base, e.g. an NH₄Cl solution (enter the pKa of NH₄⁺).',
        'For polyprotic acids with Ka₁ ≫ Ka₂, an approximate pH from the first step only.',
        'Back-calculating the acid concentration that gives a known pH (choose C as the unknown).',
      ],
    },
    solution: {
      tr: [
        'Verilen: 0,100 M asetik asit, Ka = 1,75 × 10⁻⁵ (pKa = 4,757).',
        'Yaklaşık çözüm: [H⁺] ≈ √(Ka·C) = √(1,75 × 10⁻⁶) = 1,323 × 10⁻³ M; [H⁺]/C = %1,3 < %5, yaklaşım kabul edilebilir (pH = 2,878).',
        'Tam çözüm: suyun katkısı ihmal edilebilir; [H⁺]² + Ka[H⁺] − Ka·C = 0 → [H⁺] = 1,314 × 10⁻³ M.',
        'Sonuç: pH = 2,881.',
      ],
      en: [
        'Given: 0.100 M acetic acid, Ka = 1.75 × 10⁻⁵ (pKa = 4.757).',
        'Approximate: [H⁺] ≈ √(Ka·C) = √(1.75 × 10⁻⁶) = 1.323 × 10⁻³ M; [H⁺]/C = 1.3 % < 5 %, so the approximation is acceptable (pH = 2.878).',
        'Exact: the water term is negligible; [H⁺]² + Ka[H⁺] − Ka·C = 0 → [H⁺] = 1.314 × 10⁻³ M.',
        'Result: pH = 2.881.',
      ],
    },
    mistakes: {
      tr: [
        'Zayıf asidi kuvvetli asit gibi tamamen iyonlaşmış sayıp pH = −log C almak.',
        '%5 kuralını kontrol etmeden √(Ka·C) kullanmak; seyreltik ya da görece kuvvetli asitlerde hata büyür.',
        'Ka ile pKa’yı karıştırmak (araç pKa ister: pKa = −log Ka).',
      ],
      en: [
        'Treating the weak acid as fully ionised and using pH = −log C.',
        'Using √(Ka·C) without checking the 5 % rule; the error grows for dilute or relatively strong acids.',
        'Confusing Ka with pKa (the tool expects pKa = −log Ka).',
      ],
    },
    related: ['weak-base', 'henderson', 'alpha-fractions', 'table-ka'],
  },

  'weak-base': {
    concept: {
      tr: 'Amonyak ve aminler gibi zayıf bazlar sudan proton alarak kısmen OH⁻ oluşturur: B + H₂O ⇌ BH⁺ + OH⁻. Tepkimenin ne kadar ilerlediği baz sabiti Kb ile belirlenir.\n\nMatematik, zayıf asittekinin tam aynısıdır; yalnızca H⁺ yerine OH⁻, Ka yerine Kb yazılır. Önce [OH⁻] ve pOH bulunur, sonra pH = 14,00 − pOH ile pH’a geçilir. Araç bu hesabı yük denkliğinden tam olarak yapar.',
      en: 'Weak bases such as ammonia and amines take a proton from water and partly form OH⁻: B + H₂O ⇌ BH⁺ + OH⁻. How far the reaction goes is set by the base constant Kb.\n\nThe mathematics is exactly that of a weak acid with OH⁻ in place of H⁺ and Kb in place of Ka. [OH⁻] and pOH are found first, then pH = 14.00 − pOH. The tool solves the charge balance exactly.',
    },
    meaning: {
      tr: 'Kb = [BH⁺][OH⁻] / [B]. Kütle denkliği C = [B] + [BH⁺], yük denkliği [BH⁺] + [H⁺] = [OH⁻]:\n\n[OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]\n\n• Yaklaşık çözüm: [OH⁻] ≈ √(Kb·C); [OH⁻]/C < 0,05 ise geçerlidir.\n• Tablolarda çoğu zaman bazın değil, eşlenik asidinin pKa’sı verilir. Bu durumda pKb = 14,00 − pKa ile çevrilir.\n• Kb büyüdükçe baz kuvvetlenir ve pH yükselir.',
      en: 'Kb = [BH⁺][OH⁻] / [B]. With the mass balance C = [B] + [BH⁺] and the charge balance [BH⁺] + [H⁺] = [OH⁻]:\n\n[OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]\n\n• Approximate solution: [OH⁻] ≈ √(Kb·C), valid if [OH⁻]/C < 0.05.\n• Tables often list the pKa of the conjugate acid rather than the base; convert with pKb = 14.00 − pKa.\n• The larger Kb, the stronger the base and the higher the pH.',
    },
    usage: {
      tr: [
        'NH₃, metilamin, piridin gibi zayıf bazların pH’ını hesaplamak.',
        'Bilinen pH’tan gereken baz derişimini bulmak.',
        'Zayıf asit tuzları (asetat, siyanür) da zayıf bazdır; bunlar için pKa’dan hesap yapan salt-weak-acid aracı daha pratiktir.',
      ],
      en: [
        'pH of weak bases such as NH₃, methylamine and pyridine.',
        'Finding the base concentration that gives a known pH.',
        'Anions of weak acids (acetate, cyanide) are also weak bases; the salt-weak-acid tool, which works from pKa, is more convenient for them.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 0,100 M NH₃, Kb = 1,75 × 10⁻⁵ (pKb = 4,757).',
        'Kb·C = 1,75 × 10⁻⁶; ikinci derece denklemin çözümü [OH⁻] = 1,314 × 10⁻³ M (√(Kb·C) = 1,323 × 10⁻³ M ile çok yakın).',
        'pOH = −log(1,314 × 10⁻³) = 2,881; pH = 14,00 − 2,881.',
        'Sonuç: pH = 11,12.',
      ],
      en: [
        'Given: 0.100 M NH₃, Kb = 1.75 × 10⁻⁵ (pKb = 4.757).',
        'Kb·C = 1.75 × 10⁻⁶; solving the quadratic gives [OH⁻] = 1.314 × 10⁻³ M (very close to √(Kb·C) = 1.323 × 10⁻³ M).',
        'pOH = −log(1.314 × 10⁻³) = 2.881; pH = 14.00 − 2.881.',
        'Result: pH = 11.12.',
      ],
    },
    mistakes: {
      tr: [
        'pOH’u pH diye raporlamak.',
        'Tablodaki NH₄⁺ pKa’sını (9,24) doğrudan pKb yerine girmek.',
        'Bazın çözeltisinde [H⁺]’yı √(Kb·C) ile hesaplamak.',
      ],
      en: [
        'Reporting pOH as pH.',
        'Entering the tabulated pKa of NH₄⁺ (9.24) as pKb.',
        'Calculating [H⁺] instead of [OH⁻] from √(Kb·C) in a base solution.',
      ],
    },
    related: ['weak-acid', 'pka-pkb', 'salt-weak-acid', 'strong-base'],
  },

  'salt-weak-acid': {
    concept: {
      tr: 'Sodyum asetat (NaOAc) ya da NaCN gibi bir zayıf asit tuzu suda tamamen ayrışır. Na⁺ asit–baz açısından etkisizdir, ancak anyon zayıf asidin eşlenik bazıdır ve sudan proton alır: A⁻ + H₂O ⇌ HA + OH⁻. Eskiden “hidroliz” olarak adlandırılan bu tepkime yüzünden çözelti baziktir.\n\nEşlenik bazın Kb’si tablolarda pek verilmez; asidin Ka’sından Kb = Kw / Ka ile hesaplanır. Asit ne kadar zayıfsa eşlenik bazı o kadar kuvvetlidir. Bu yüzden 0,1 M NaCN çözeltisi, aynı derişimdeki NaOAc’den çok daha baziktir.',
      en: 'A salt of a weak acid, such as sodium acetate (NaOAc) or NaCN, dissociates completely. Na⁺ is inert in acid–base terms, but the anion is the conjugate base of a weak acid and takes a proton from water: A⁻ + H₂O ⇌ HA + OH⁻. This reaction, traditionally called “hydrolysis”, makes the solution basic.\n\nThe Kb of the conjugate base is rarely tabulated; it follows from the Ka of the acid as Kb = Kw / Ka. The weaker the acid, the stronger its conjugate base, which is why 0.1 M NaCN is much more basic than NaOAc at the same concentration.',
    },
    meaning: {
      tr: 'Kb = Kw / Ka. Ardından zayıf baz için olan tam eşitlik çözülür:\n\n[OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]\n\n• Kb genellikle çok küçük olduğundan [OH⁻] ≈ √(Kb·C) = √(Kw·C / Ka) yaklaşımı çoğu zaman yeterlidir.\n• Kb·C, Kw’ye yaklaştığında (çok seyreltik ya da çok zayıf baz) suyun katkısı önem kazanır; araç bunu da hesaba katar.\n• Araca girilen pKa, tuzu oluşturan zayıf asidin (HA) pKa’sıdır.',
      en: 'Kb = Kw / Ka. Then the exact weak-base equation is solved:\n\n[OH⁻] = Kb·C / (Kb + [OH⁻]) + Kw / [OH⁻]\n\n• Because Kb is usually very small, [OH⁻] ≈ √(Kb·C) = √(Kw·C / Ka) is often adequate.\n• When Kb·C approaches Kw (very dilute or very weak base), water’s contribution matters; the tool includes it.\n• The pKa entered is that of the weak acid HA from which the salt is derived.',
    },
    usage: {
      tr: [
        'NaOAc, NaCN, NaF, sodyum benzoat gibi tuzların çözeltilerinin pH’ını hesaplamak.',
        'Zayıf asit–kuvvetli baz titrasyonunda eşdeğerlik noktası pH’ını bulmak (C, eşdeğerlik noktasındaki seyrelmiş tuz derişimidir).',
        'Zayıf baz tuzları (NH₄Cl gibi) asidiktir; onlar için weak-acid aracını NH₄⁺’ün pKa’sıyla kullanın.',
        'Hem katyonu hem anyonu zayıf olan tuzlar (ör. NH₄OAc) bu araçla hesaplanamaz.',
      ],
      en: [
        'pH of solutions of NaOAc, NaCN, NaF, sodium benzoate and similar salts.',
        'Equivalence-point pH of a weak acid–strong base titration (C is the diluted salt concentration at equivalence).',
        'Salts of weak bases (such as NH₄Cl) are acidic; use the weak-acid tool with the pKa of NH₄⁺.',
        'Salts in which both ions are weak (e.g. NH₄OAc) cannot be handled with this tool.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 0,100 M NaOAc, asetik asit için Ka = 1,75 × 10⁻⁵ (pKa = 4,757).',
        'Kb = Kw / Ka = 1,0 × 10⁻¹⁴ / 1,75 × 10⁻⁵ = 5,71 × 10⁻¹⁰.',
        '[OH⁻] ≈ √(Kb·C) = √(5,71 × 10⁻¹¹) = 7,56 × 10⁻⁶ M; pOH = 5,12, pH = 14,00 − 5,12 ≈ 8,88.',
        'Sonuç: tam çözümle pH = 8,879.',
      ],
      en: [
        'Given: 0.100 M NaOAc, Ka of acetic acid = 1.75 × 10⁻⁵ (pKa = 4.757).',
        'Kb = Kw / Ka = 1.0 × 10⁻¹⁴ / 1.75 × 10⁻⁵ = 5.71 × 10⁻¹⁰.',
        '[OH⁻] ≈ √(Kb·C) = √(5.71 × 10⁻¹¹) = 7.56 × 10⁻⁶ M; pOH = 5.12, pH = 14.00 − 5.12 ≈ 8.88.',
        'Result: exact pH = 8.879.',
      ],
    },
    mistakes: {
      tr: [
        'Tuzu nötr sanıp pH = 7 almak.',
        'Ka’yı doğrudan baz sabiti gibi kullanmak (Kb = Kw/Ka’ya çevirmeden).',
        'Titrasyonun eşdeğerlik noktasında seyrelmeyi unutup başlangıç derişimini kullanmak.',
      ],
      en: [
        'Assuming the salt is neutral and taking pH = 7.',
        'Using Ka directly as a base constant (without converting to Kb = Kw/Ka).',
        'Forgetting the dilution at the equivalence point of a titration and using the initial concentration.',
      ],
    },
    related: ['pka-pkb', 'weak-base', 'curve-acid-base'],
  },

  'pka-pkb': {
    concept: {
      tr: 'Bir asit proton verdiğinde eşlenik bazı oluşur: HA / A⁻ ya da NH₄⁺ / NH₃ gibi. Bu ikiliye eşlenik asit–baz çifti denir. Bir çiftin asitlik ve bazlık sabitleri birbirinden bağımsız değildir: biri bilinirse diğeri suyun iyonlar çarpımından bulunur.\n\nKuvvetli bir asidin eşlenik bazı çok zayıf, zayıf bir asidin eşlenik bazı ise görece kuvvetlidir. Bu nedenle tablolarda genellikle yalnızca pKa değerleri verilir; bazlar da eşlenik asitlerinin pKa’sıyla listelenir.',
      en: 'When an acid loses a proton it forms its conjugate base: HA / A⁻ or NH₄⁺ / NH₃, for example. Such a pair is called a conjugate acid–base pair. The acid and base constants of a pair are not independent: if one is known, the other follows from the ion product of water.\n\nThe conjugate base of a strong acid is very weak, while that of a weak acid is relatively strong. For this reason tables usually list only pKa values, and bases are listed through the pKa of their conjugate acids.',
    },
    meaning: {
      tr: 'HA ⇌ H⁺ + A⁻ (Ka) ile A⁻ + H₂O ⇌ HA + OH⁻ (Kb) tepkimeleri toplanırsa H₂O ⇌ H⁺ + OH⁻ (Kw) elde edilir. Tepkimeler toplandığında sabitler çarpıldığından:\n\nKa · Kb = Kw  →  pKa + pKb = pKw = 14,00 (25 °C)\n\n• pKa küçükse (kuvvetli asit) eşlenik bazın pKb’si büyüktür (zayıf baz).\n• Eşitlik yalnızca aynı çiftin üyeleri için geçerlidir.\n• Poliprotik asitlerde çiftleri doğru eşleştirin: CO₃²⁻’ün pKb’si (14,00 − pKa₂), HCO₃⁻’ün baz olarak pKb’si ise (14,00 − pKa₁) ile bulunur.',
      en: 'Adding HA ⇌ H⁺ + A⁻ (Ka) and A⁻ + H₂O ⇌ HA + OH⁻ (Kb) gives H₂O ⇌ H⁺ + OH⁻ (Kw). Since constants multiply when reactions are added:\n\nKa · Kb = Kw  →  pKa + pKb = pKw = 14.00 (25 °C)\n\n• A small pKa (strong acid) means a large pKb for the conjugate base (weak base).\n• The relation holds only for the two members of the same pair.\n• For polyprotic acids, match the pairs correctly: pKb of CO₃²⁻ is 14.00 − pKa₂, while pKb of HCO₃⁻ acting as a base is 14.00 − pKa₁.',
    },
    usage: {
      tr: [
        'Tablodaki pKa’dan eşlenik bazın pKb’sini bulmak (ör. NH₄⁺ → NH₃).',
        'Zayıf asit tuzunun pH’ı ve zayıf baz titrasyonları için Kb elde etmek.',
        '25 °C dışında pKw farklıdır; toplam 14,00 alınamaz.',
      ],
      en: [
        'Finding pKb of a conjugate base from a tabulated pKa (e.g. NH₄⁺ → NH₃).',
        'Getting Kb for salts of weak acids and for titrations of weak bases.',
        'At temperatures other than 25 °C pKw differs, so the sum is not 14.00.',
      ],
    },
    solution: {
      tr: [
        'Verilen: NH₄⁺ için pKa = 9,24.',
        'pKb(NH₃) = 14,00 − pKa = 14,00 − 9,24.',
        'Sonuç: pKb = 4,76 (Kb = 1,7 × 10⁻⁵).',
      ],
      en: [
        'Given: pKa of NH₄⁺ = 9.24.',
        'pKb(NH₃) = 14.00 − pKa = 14.00 − 9.24.',
        'Result: pKb = 4.76 (Kb = 1.7 × 10⁻⁵).',
      ],
    },
    mistakes: {
      tr: [
        'Ka · Kb = Kw yerine Ka + Kb = Kw yazmak (toplam p-değerleri için geçerlidir, sabitler için değil).',
        'Poliprotik sistemlerde yanlış pKa’yı kullanmak (CO₃²⁻ için pKa₁ yerine pKa₂ gerekir).',
        'NH₃’ün pKb’si yerine NH₄⁺’ün pKa’sını baz hesabına girmek.',
      ],
      en: [
        'Writing Ka + Kb = Kw instead of Ka · Kb = Kw (the sum applies to the p-values, not the constants).',
        'Using the wrong pKa for a polyprotic system (CO₃²⁻ needs pKa₂, not pKa₁).',
        'Entering the pKa of NH₄⁺ in a base calculation that needs the pKb of NH₃.',
      ],
    },
    related: ['weak-base', 'salt-weak-acid', 'combine-k', 'table-ka'],
  },

  henderson: {
    concept: {
      tr: 'Tampon çözelti, bir zayıf asit ile eşlenik bazının (ya da zayıf baz ile eşlenik asidinin) kayda değer miktarlarda birlikte bulunduğu çözeltidir. Eklenen az miktardaki kuvvetli asit bazla, kuvvetli baz ise asitle tepkimeye girer. Böylece pH çok az değişir.\n\nHenderson–Hasselbalch eşitliği, tamponun pH’ını asidin pKa’sı ile baz/asit oranından verir. Oran 1 olduğunda pH = pKa’dır. Bu yüzden istenen pH için pKa’sı bu değere yakın bir asit seçilir.',
      en: 'A buffer contains appreciable amounts of a weak acid and its conjugate base (or a weak base and its conjugate acid). Small amounts of added strong acid react with the base, and added strong base reacts with the acid, so the pH changes very little.\n\nThe Henderson–Hasselbalch equation gives the buffer pH from the pKa of the acid and the base/acid ratio. When the ratio is 1, pH = pKa, so a buffer is built from an acid whose pKa is close to the desired pH.',
    },
    meaning: {
      tr: 'Ka = [H⁺][A⁻] / [HA] ifadesinin her iki yanının eksi logaritması alınırsa:\n\npH = pKa + log([A⁻] / [HA])\n\n• Denge derişimleri yerine analitik derişimler (karıştırılan miktarlar) kullanılır. Bu, asidin iyonlaşması ve bazın protonlanmasının ihmal edilebildiği, yani derişimlerin [H⁺] ve [OH⁻]’den çok büyük olduğu durumda geçerlidir.\n• İki tür aynı hacimde bulunduğu için derişim oranı yerine mol oranı da kullanılabilir. Bu yüzden seyreltme pH’ı yaklaşık olarak değiştirmez.\n• Oranın her 10 katlık değişimi pH’ı 1 birim değiştirir. Etkin tampon aralığı yaklaşık pKa ± 1’dir.',
      en: 'Taking the negative logarithm of both sides of Ka = [H⁺][A⁻] / [HA]:\n\npH = pKa + log([A⁻] / [HA])\n\n• Analytical concentrations (the amounts mixed) are used instead of equilibrium concentrations. This is valid when ionisation of the acid and protonation of the base are negligible, i.e. when the concentrations are much larger than [H⁺] and [OH⁻].\n• Because both species share the same volume, the mole ratio can replace the concentration ratio; dilution therefore hardly changes the pH.\n• Every tenfold change in the ratio shifts the pH by 1 unit. The useful buffer range is about pKa ± 1.',
    },
    usage: {
      tr: [
        'Hazırlanan bir tamponun pH’ını hesaplamak.',
        'İstenen pH için gereken baz/asit oranını ya da tuz miktarını bulmak (Cb ya da Ca bilinmeyen seçilerek).',
        'Oran 0,1–10 aralığının dışındaysa ya da derişimler yaklaşık 10⁻³ M’nin altındaysa eşitlik güvenilir değildir; tam hesap gerekir.',
        'Yüksek iyonik şiddette ölçülen pH, aktivite etkisi nedeniyle hesaplanandan biraz sapar.',
      ],
      en: [
        'Calculating the pH of a prepared buffer.',
        'Finding the base/acid ratio or the amount of salt needed for a target pH (choose Cb or Ca as the unknown).',
        'If the ratio is outside 0.1–10, or concentrations are below about 10⁻³ M, the equation is unreliable and a full calculation is needed.',
        'At high ionic strength the measured pH deviates somewhat from the calculated one because of activity effects.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetik asit/asetat tamponu, pKa = 4,757; [OAc⁻] = 0,15 M, [HOAc] = 0,10 M.',
        '[A⁻] / [HA] = 0,15 / 0,10 = 1,5; log 1,5 = 0,176.',
        'pH = 4,757 + 0,176. Oran 1’den büyük olduğu için pH, pKa’nın biraz üzerindedir.',
        'Sonuç: pH = 4,933.',
      ],
      en: [
        'Given: acetic acid/acetate buffer, pKa = 4.757; [OAc⁻] = 0.15 M, [HOAc] = 0.10 M.',
        '[A⁻] / [HA] = 0.15 / 0.10 = 1.5; log 1.5 = 0.176.',
        'pH = 4.757 + 0.176. Since the ratio exceeds 1, the pH is slightly above pKa.',
        'Result: pH = 4.933.',
      ],
    },
    mistakes: {
      tr: [
        'Oranı ters yazmak: log([HA]/[A⁻]) değil, log([A⁻]/[HA]).',
        'Amonyak tamponunda NH₃’ün pKb’sini kullanmak; NH₄⁺’ün pKa’sı (9,24) gerekir.',
        'Tampona kuvvetli asit/baz eklendiğinde stokiyometrik tepkimeyi yapmadan başlangıç miktarlarını kullanmak.',
      ],
      en: [
        'Inverting the ratio: it is log([A⁻]/[HA]), not log([HA]/[A⁻]).',
        'Using the pKb of NH₃ for an ammonia buffer; the pKa of NH₄⁺ (9.24) is needed.',
        'Using the original amounts after strong acid or base is added, without doing the stoichiometric reaction first.',
      ],
    },
    related: ['buffer-addition', 'buffer-capacity', 'weak-acid', 'alpha-fractions'],
  },

  'buffer-addition': {
    concept: {
      tr: 'Bir tampona kuvvetli baz eklendiğinde OH⁻, tampondaki zayıf asitle neredeyse tamamen tepkimeye girer: HA + OH⁻ → A⁻ + H₂O. Kuvvetli asit eklendiğinde ise H⁺ eşlenik bazla tepkimeye girer: A⁻ + H⁺ → HA. Bu tepkimeler pratikte tamamlandığı için hesap iki adımda yapılır.\n\nÖnce stokiyometri ile yeni mol sayıları bulunur, sonra Henderson–Hasselbalch eşitliği uygulanır. Sonuç, tamponun neden işe yaradığını açıkça gösterir: pH’ı sudaki gibi birkaç birim değil, yalnızca birkaç yüzde bir birim değişir.',
      en: 'When strong base is added to a buffer, OH⁻ reacts almost completely with the weak acid: HA + OH⁻ → A⁻ + H₂O. Added strong acid reacts with the conjugate base: A⁻ + H⁺ → HA. Because these reactions go essentially to completion, the calculation has two steps.\n\nFirst the new amounts are found from stoichiometry, then the Henderson–Hasselbalch equation is applied. The result shows clearly why buffers work: the pH changes by only a few hundredths of a unit instead of several units as in water.',
    },
    meaning: {
      tr: 'pH = pKa + log[(n_A⁻ + Δn) / (n_HA − Δn)]\n\n• Δn > 0: eklenen kuvvetli baz miktarı (A⁻ artar, HA azalır).\n• Δn < 0: eklenen kuvvetli asit miktarı (A⁻ azalır, HA artar).\n• Mol (ya da mmol) sayıları kullanılır. Asit ve baz aynı hacimde bulunduğundan toplam hacim oranda sadeleşir ve hacim değişimi pH’ı etkilemez.\n• Eşitlik, Δn tampon bileşenlerinden birini tüketmeyecek kadar küçükse geçerlidir. Δn ≥ n_HA ya da −Δn ≥ n_A⁻ olursa tampon “kırılmıştır” ve fazla kuvvetli asit/baz pH’ı belirler.',
      en: 'pH = pKa + log[(n_A⁻ + Δn) / (n_HA − Δn)]\n\n• Δn > 0: amount of strong base added (A⁻ rises, HA falls).\n• Δn < 0: amount of strong acid added (A⁻ falls, HA rises).\n• Amounts in mol (or mmol) are used. Because acid and base share the same volume, the total volume cancels in the ratio and the volume change does not affect the pH.\n• The equation holds while Δn is small enough not to use up either component. If Δn ≥ n_HA or −Δn ≥ n_A⁻ the buffer is exhausted and the excess strong acid or base sets the pH.',
    },
    usage: {
      tr: [
        'Tampona belirli miktarda NaOH ya da HCl eklendikten sonraki pH’ı hesaplamak.',
        'Belirli bir pH değişimine kadar ne kadar asit/baz eklenebileceğini bulmak (Δn bilinmeyen seçilerek).',
        'Zayıf asidin kuvvetli bazla titrasyonunda tampon bölgesindeki pH’ı hesaplamak.',
        'Bileşenlerin miktarları küçükse ya da oran 0,1–10 dışına çıkarsa sonuç yaklaşıktır.',
      ],
      en: [
        'pH of a buffer after a known amount of NaOH or HCl is added.',
        'Finding how much acid or base can be added before a given pH change (choose Δn as the unknown).',
        'pH in the buffer region of a weak acid–strong base titration.',
        'Approximate when the amounts are small or the ratio leaves the 0.1–10 range.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetat tamponu, pKa = 4,757; n(OAc⁻) = 10 mmol, n(HOAc) = 10 mmol (başlangıç pH’ı = pKa = 4,757). Eklenen NaOH: Δn = +1,0 mmol.',
        'Stokiyometri: n(OAc⁻) = 10 + 1,0 = 11 mmol, n(HOAc) = 10 − 1,0 = 9,0 mmol.',
        'pH = 4,757 + log(11 / 9,0) = 4,757 + 0,087. Karşılaştırma: aynı 1,0 mmol NaOH 100 mL saf suya eklenseydi pH 7,00’den 12,00’ye çıkardı.',
        'Sonuç: pH = 4,844 (yalnızca 0,087 birimlik artış).',
      ],
      en: [
        'Given: acetate buffer, pKa = 4.757; n(OAc⁻) = 10 mmol, n(HOAc) = 10 mmol (initial pH = pKa = 4.757). NaOH added: Δn = +1.0 mmol.',
        'Stoichiometry: n(OAc⁻) = 10 + 1.0 = 11 mmol, n(HOAc) = 10 − 1.0 = 9.0 mmol.',
        'pH = 4.757 + log(11 / 9.0) = 4.757 + 0.087. For comparison, the same 1.0 mmol NaOH in 100 mL of pure water would raise the pH from 7.00 to 12.00.',
        'Result: pH = 4.844 (a rise of only 0.087 units).',
      ],
    },
    mistakes: {
      tr: [
        'Kuvvetli asit eklerken Δn’yi pozitif girmek (asit için Δn negatiftir).',
        'Mol yerine farklı hacimlerdeki derişimleri karıştırarak oran kurmak.',
        'Tampon kapasitesini aşan eklemelerde de eşitliği kullanmak (log içindeki ifade sıfır ya da negatif olur).',
      ],
      en: [
        'Entering Δn as positive when strong acid is added (it is negative for acid).',
        'Building the ratio from concentrations referring to different volumes instead of from amounts.',
        'Applying the equation beyond the buffer capacity (the argument of the log becomes zero or negative).',
      ],
    },
    related: ['henderson', 'buffer-capacity', 'curve-acid-base'],
  },

  'buffer-capacity': {
    concept: {
      tr: 'Her tampon sınırsız miktarda asit ya da bazı karşılayamaz. Tampon kapasitesi (β), bir tamponun pH değişimine ne kadar direnç gösterdiğinin nicel ölçüsüdür. pH’ı bir birim değiştirmek için bir litre tampona eklenmesi gereken kuvvetli asit ya da baz miktarı olarak tanımlanır.\n\nKapasite iki şeye bağlıdır: tamponun toplam derişimi ve pH’ın pKa’ya yakınlığı. Derişik tamponlar daha dayanıklıdır. Belirli bir derişimde ise kapasite pH = pKa’da, yani asit ve baz miktarları eşitken en büyüktür.',
      en: 'No buffer can absorb unlimited acid or base. Buffer capacity (β) is a quantitative measure of a buffer’s resistance to pH change: the amount of strong acid or base that must be added to one litre of buffer to change its pH by one unit.\n\nCapacity depends on two things: the total concentration of the buffer and how close the pH is to the pKa. Concentrated buffers are more robust, and at a given concentration the capacity is largest at pH = pKa, where acid and base are present in equal amounts.',
    },
    meaning: {
      tr: 'Diferansiyel tanım: β = dCb / dpH = −dCa / dpH. Yük denkliğinin pH’a göre türevi alınırsa:\n\nβ = 2,303 (Kw/[H⁺] + [H⁺] + C·Ka·[H⁺] / (Ka + [H⁺])²)\n\n• İlk iki terim suyun (OH⁻ ve H⁺) katkısıdır. Yalnızca çok asidik ya da çok bazik çözeltilerde önemlidir; derişik kuvvetli asit ve bazların da pH’ı “tamponlamasının” nedeni budur.\n• Üçüncü terim zayıf asit–eşlenik baz çiftinin katkısıdır ve [H⁺] = Ka’da en büyük değeri olan C/4’e ulaşır. Buradan β_maks ≈ 2,303·C/4 = 0,576·C.\n• Birim: mol L⁻¹ pH⁻¹ (araçta M olarak gösterilir).',
      en: 'Differential definition: β = dCb / dpH = −dCa / dpH. Differentiating the charge balance with respect to pH gives:\n\nβ = 2.303 (Kw/[H⁺] + [H⁺] + C·Ka·[H⁺] / (Ka + [H⁺])²)\n\n• The first two terms are water’s contribution (OH⁻ and H⁺). They matter only in very acidic or very basic solutions, which is why concentrated strong acids and bases also “buffer” the pH.\n• The third term is the weak acid–conjugate base pair. It reaches its maximum C/4 at [H⁺] = Ka, so β_max ≈ 2.303·C/4 = 0.576·C.\n• Units: mol L⁻¹ per pH unit (shown as M in the tool).',
    },
    usage: {
      tr: [
        'Bir tamponun belirli bir pH’ta ne kadar dayanıklı olduğunu karşılaştırmak.',
        'Tampon seçimi: pKa’sı hedef pH’a ±1 birimden yakın olan asit seçilir.',
        'Gereken tampon derişimini bulmak (C bilinmeyen seçilerek).',
        'β diferansiyel bir büyüklüktür; büyük eklemelerde pH değişimini doğrudan β ile hesaplamak yaklaşıktır, buffer-addition aracı daha doğrudur.',
      ],
      en: [
        'Comparing how robust a buffer is at a given pH.',
        'Choosing a buffer: pick an acid whose pKa lies within ±1 of the target pH.',
        'Finding the buffer concentration required (choose C as the unknown).',
        'β is a differential quantity; using it for large additions is approximate, and the buffer-addition tool is more accurate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: asetat tamponu, C = 0,10 M (HOAc + OAc⁻), pH = pKa = 4,757 → [H⁺] = Ka = 1,75 × 10⁻⁵ M.',
        'Su terimleri: Kw/[H⁺] = 5,7 × 10⁻¹⁰ ve [H⁺] = 1,75 × 10⁻⁵; ikisi de ihmal edilebilir.',
        'Tampon terimi: [H⁺] = Ka olduğundan C·Ka·[H⁺] / (Ka + [H⁺])² = C/4 = 0,0250 M; β = 2,303 × 0,02502.',
        'Sonuç: β = 0,05762 M (mol L⁻¹ pH⁻¹); 1 L tampona yaklaşık 5,8 mmol kuvvetli baz eklemek pH’ı yaklaşık 0,1 birim değiştirir.',
      ],
      en: [
        'Given: acetate buffer, C = 0.10 M (HOAc + OAc⁻), pH = pKa = 4.757 → [H⁺] = Ka = 1.75 × 10⁻⁵ M.',
        'Water terms: Kw/[H⁺] = 5.7 × 10⁻¹⁰ and [H⁺] = 1.75 × 10⁻⁵; both negligible.',
        'Buffer term: since [H⁺] = Ka, C·Ka·[H⁺] / (Ka + [H⁺])² = C/4 = 0.0250 M; β = 2.303 × 0.02502.',
        'Result: β = 0.05762 M (mol L⁻¹ per pH unit); adding about 5.8 mmol of strong base to 1 L of buffer changes the pH by roughly 0.1 unit.',
      ],
    },
    mistakes: {
      tr: [
        'C’yi yalnızca asit ya da yalnızca baz derişimi olarak girmek; C, iki bileşenin toplamıdır.',
        'Tampon kapasitesini pH ile karıştırmak: aynı pH’taki iki tampondan derişik olanın kapasitesi daha büyüktür.',
        'β’yı tamponun “karşılayabileceği toplam asit/baz miktarı” sanmak; β, birim pH değişimi başına anlık bir eğimdir.',
      ],
      en: [
        'Entering only the acid or only the base concentration as C; C is the sum of both components.',
        'Confusing capacity with pH: of two buffers at the same pH, the more concentrated one has the higher capacity.',
        'Thinking β is the total amount of acid or base the buffer can absorb; it is an instantaneous slope per unit pH.',
      ],
    },
    related: ['henderson', 'buffer-addition', 'alpha-fractions'],
  },

  amphiprotic: {
    concept: {
      tr: 'HCO₃⁻, H₂PO₄⁻ ve HPO₄²⁻ gibi poliprotik asitlerin ara türleri hem proton verebilir hem de proton alabilir. Bu tür maddelere amfiprotik denir. Örneğin HCO₃⁻ asit olarak CO₃²⁻’e, baz olarak H₂CO₃’e dönüşebilir.\n\nNaHCO₃ çözeltisinin pH’ı bu iki karşıt eğilimin dengesiyle belirlenir. Ara tür hem asit hem baz olarak zayıf olduğundan, iki pKa’nın ortalamasına yakın ve geniş bir derişim aralığında derişimden neredeyse bağımsız bir pH ortaya çıkar.',
      en: 'Intermediate species of polyprotic acids such as HCO₃⁻, H₂PO₄⁻ and HPO₄²⁻ can both donate and accept a proton; such substances are called amphiprotic. HCO₃⁻, for example, becomes CO₃²⁻ as an acid and H₂CO₃ as a base.\n\nThe pH of a NaHCO₃ solution results from the balance of these two opposing tendencies. Because the intermediate is weak both as an acid and as a base, the pH lies near the average of the two pKa values and is almost independent of concentration over a wide range.',
    },
    meaning: {
      tr: 'Proton koşulu (proton kazanan türler = proton kaybeden türler): [H⁺] + [H₂A] = [A²⁻] + [OH⁻]. Ka₁ ve Ka₂ ifadeleri yerine konur ve [HA⁻] ≈ C kabul edilirse:\n\n[H⁺] = √[(Ka₁·Kw + Ka₁·Ka₂·C) / (Ka₁ + C)]\n\n• C ≫ Ka₁ ve Ka₂·C ≫ Kw ise eşitlik [H⁺] ≈ √(Ka₁·Ka₂) biçimine sadeleşir, yani pH ≈ (pKa₁ + pKa₂) / 2 olur.\n• Pay ve paydadaki tam terimler, seyreltik çözeltilerde ya da Ka₂ çok küçük olduğunda önem kazanır.\n• Hangi pKa çiftinin girileceği ara türe bağlıdır: NaH₂PO₄ için pKa₁ ve pKa₂, Na₂HPO₄ için pKa₂ ve pKa₃ kullanılır.',
      en: 'Proton condition (species that gained protons = species that lost them): [H⁺] + [H₂A] = [A²⁻] + [OH⁻]. Substituting the Ka₁ and Ka₂ expressions and assuming [HA⁻] ≈ C gives:\n\n[H⁺] = √[(Ka₁·Kw + Ka₁·Ka₂·C) / (Ka₁ + C)]\n\n• If C ≫ Ka₁ and Ka₂·C ≫ Kw, this simplifies to [H⁺] ≈ √(Ka₁·Ka₂), i.e. pH ≈ (pKa₁ + pKa₂) / 2.\n• The full terms matter in dilute solutions or when Ka₂ is very small.\n• Which pair of pKa values to enter depends on the intermediate: pKa₁ and pKa₂ for NaH₂PO₄, pKa₂ and pKa₃ for Na₂HPO₄.',
    },
    usage: {
      tr: [
        'NaHCO₃, NaH₂PO₄, Na₂HPO₄, potasyum hidrojen ftalat (KHP) gibi ara türlerin çözelti pH’ını hesaplamak.',
        'Poliprotik asit titrasyonlarında ara eşdeğerlik noktalarının pH’ını bulmak.',
        'Amino asitlerin izoelektrik noktasını yaklaşık olarak bulmak (iki ilgili pKa’nın ortalaması).',
        'Kabul [HA⁻] ≈ C’dir; çok seyreltik çözeltilerde ya da pKa’lar birbirine yakınsa sonuç yaklaşıktır.',
      ],
      en: [
        'pH of solutions of intermediates such as NaHCO₃, NaH₂PO₄, Na₂HPO₄ and potassium hydrogen phthalate (KHP).',
        'pH at the intermediate equivalence points of polyprotic acid titrations.',
        'Approximate isoelectric point of amino acids (average of the two relevant pKa values).',
        'The assumption is [HA⁻] ≈ C; in very dilute solutions or when the pKa values are close, the result is approximate.',
      ],
    },
    solution: {
      tr: [
        'Verilen: 0,100 M NaHCO₃; Ka₁ = 4,3 × 10⁻⁷ (pKa₁ = 6,367), Ka₂ = 4,8 × 10⁻¹¹ (pKa₂ = 10,32).',
        'Pay: Ka₁·Kw + Ka₁·Ka₂·C = 4,3 × 10⁻²¹ + 2,064 × 10⁻¹⁸ = 2,068 × 10⁻¹⁸; payda: Ka₁ + C ≈ 0,100.',
        '[H⁺] = √(2,068 × 10⁻¹⁷) = 4,55 × 10⁻⁹ M. Basit formül de neredeyse aynı sonucu verir: (6,367 + 10,32)/2 = 8,343.',
        'Sonuç: pH = 8,342.',
      ],
      en: [
        'Given: 0.100 M NaHCO₃; Ka₁ = 4.3 × 10⁻⁷ (pKa₁ = 6.367), Ka₂ = 4.8 × 10⁻¹¹ (pKa₂ = 10.32).',
        'Numerator: Ka₁·Kw + Ka₁·Ka₂·C = 4.3 × 10⁻²¹ + 2.064 × 10⁻¹⁸ = 2.068 × 10⁻¹⁸; denominator: Ka₁ + C ≈ 0.100.',
        '[H⁺] = √(2.068 × 10⁻¹⁷) = 4.55 × 10⁻⁹ M. The simple formula gives almost the same: (6.367 + 10.32)/2 = 8.343.',
        'Result: pH = 8.342.',
      ],
    },
    mistakes: {
      tr: [
        'Amfiprotik türü yalnızca zayıf asit (ya da yalnızca zayıf baz) gibi hesaplamak.',
        'Na₂HPO₄ için pKa₁ ve pKa₂’yi girmek; doğru çift pKa₂ ve pKa₃’tür.',
        'pH’ın derişimle belirgin biçimde değişmesini beklemek; geniş bir aralıkta neredeyse sabittir.',
      ],
      en: [
        'Treating the amphiprotic species as only a weak acid (or only a weak base).',
        'Entering pKa₁ and pKa₂ for Na₂HPO₄; the correct pair is pKa₂ and pKa₃.',
        'Expecting the pH to change markedly with concentration; over a wide range it is nearly constant.',
      ],
    },
    related: ['alpha-fractions', 'weak-acid', 'curve-acid-base', 'table-ka'],
  },

  'blood-ph': {
    concept: {
      tr: 'Kan pH’ı normalde 7,35–7,45 gibi dar bir aralıkta tutulur. Bunu sağlayan başlıca sistem bikarbonat tamponudur: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Bu tampon “açık” bir sistemdir: CO₂ akciğerlerle atılır, HCO₃⁻ ise böbreklerle düzenlenir. Bu yüzden pKa’sı 7,4’ten uzak olmasına rağmen çok etkilidir.\n\nKlinik laboratuvarlar kan gazı analizinde [HCO₃⁻] ve CO₂ kısmi basıncını (pCO₂) ölçer ya da hesaplar. pH bu ikisinden Henderson–Hasselbalch eşitliğinin kana uyarlanmış biçimiyle bulunur.',
      en: 'Blood pH is normally held within a narrow range of about 7.35–7.45. The main system responsible is the bicarbonate buffer: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. This buffer is an “open” system: CO₂ is removed by the lungs and HCO₃⁻ is regulated by the kidneys, which makes it very effective even though its pKa is far from 7.4.\n\nClinical laboratories measure or calculate [HCO₃⁻] and the partial pressure of CO₂ (pCO₂) in blood-gas analysis, and the pH follows from a form of the Henderson–Hasselbalch equation adapted to blood.',
    },
    meaning: {
      tr: 'pH = 6,10 + log([HCO₃⁻] / (0,0301 · pCO₂))\n\n• 6,10: 37 °C’de, CO₂’nin hidratlaşmasını da içeren görünür pKa (pK′). Çözünmüş CO₂’nin tamamı “asit” olarak sayılır.\n• 0,0301 mM/mmHg: CO₂’nin plazmadaki çözünürlük katsayısı. 0,0301 · pCO₂ çözünmüş CO₂ derişimini mM olarak verir.\n• [HCO₃⁻] mM, pCO₂ mmHg cinsindendir (1 kPa = 7,50 mmHg).\n\nKlinik yorum: pCO₂’nin artması (solunumsal asidoz) pH’ı düşürür; HCO₃⁻’ün azalması (metabolik asidoz) da pH’ı düşürür. Tersi durumlar alkaloza yol açar.',
      en: 'pH = 6.10 + log([HCO₃⁻] / (0.0301 · pCO₂))\n\n• 6.10: the apparent pKa (pK′) at 37 °C, which includes the hydration of CO₂; all dissolved CO₂ is counted as the “acid”.\n• 0.0301 mM/mmHg: the solubility coefficient of CO₂ in plasma; 0.0301 · pCO₂ gives the dissolved CO₂ in mM.\n• [HCO₃⁻] in mM, pCO₂ in mmHg (1 kPa = 7.50 mmHg).\n\nClinical reading: a rise in pCO₂ (respiratory acidosis) lowers the pH, and so does a fall in HCO₃⁻ (metabolic acidosis). The opposite changes cause alkalosis.',
    },
    usage: {
      tr: [
        'Kan gazı sonuçlarından pH’ı hesaplamak ya da ölçülen pH ile tutarlılığı kontrol etmek.',
        'Ölçülen pH ve pCO₂’den [HCO₃⁻]’ü hesaplamak (kan gazı cihazlarının yaptığı gibi).',
        'Asit–baz bozukluklarının solunumsal mı metabolik mi olduğunu yorumlamak.',
        'Sabitler 37 °C ve plazma için geçerlidir; başka çözeltilere uygulanmamalıdır.',
      ],
      en: [
        'Calculating pH from blood-gas results, or checking consistency with a measured pH.',
        'Calculating [HCO₃⁻] from measured pH and pCO₂ (as blood-gas analysers do).',
        'Interpreting whether an acid–base disorder is respiratory or metabolic.',
        'The constants apply to plasma at 37 °C; do not use them for other solutions.',
      ],
    },
    solution: {
      tr: [
        'Verilen: [HCO₃⁻] = 24 mM, pCO₂ = 40 mmHg (normal arter kanı değerleri).',
        'Çözünmüş CO₂ = 0,0301 mM/mmHg × 40 mmHg = 1,204 mM; oran = 24 / 1,204 = 19,9 (yaklaşık 20:1).',
        'pH = 6,10 + log(19,9) = 6,10 + 1,30.',
        'Sonuç: pH = 7,40 (normal aralıkta).',
      ],
      en: [
        'Given: [HCO₃⁻] = 24 mM, pCO₂ = 40 mmHg (normal arterial values).',
        'Dissolved CO₂ = 0.0301 mM/mmHg × 40 mmHg = 1.204 mM; ratio = 24 / 1.204 = 19.9 (about 20:1).',
        'pH = 6.10 + log(19.9) = 6.10 + 1.30.',
        'Result: pH = 7.40 (within the normal range).',
      ],
    },
    mistakes: {
      tr: [
        'pCO₂’yi kPa olarak bilip birimi mmHg’de bırakmak (değer 7,5 kat farklı olur).',
        'pCO₂’yi 0,0301 ile çarpmadan doğrudan paydaya koymak.',
        'Bikarbonatı M olarak düşünüp mM alanına 0,024 girmek.',
      ],
      en: [
        'Entering a pCO₂ known in kPa while the unit is left at mmHg (a factor of 7.5).',
        'Putting pCO₂ in the denominator without multiplying by 0.0301.',
        'Thinking of bicarbonate in M and entering 0.024 in the mM field.',
      ],
    },
    related: ['henderson', 'buffer-capacity', 'amphiprotic'],
  },

  'ph-converter': {
    concept: {
      tr: 'Sulu çözeltilerin asitliği dört eşdeğer büyüklükle ifade edilebilir: [H⁺], [OH⁻], pH ve pOH. Su her zaman H₂O ⇌ H⁺ + OH⁻ dengesindedir ve bu iki iyonun derişimleri çarpımı sabittir (Kw). Bu yüzden dört büyüklükten biri bilindiğinde diğer üçü de belirlenir.\n\np-ölçeği (pX = −log X), 10⁻¹ ile 10⁻¹⁴ M arasında değişen derişimleri 1–14 gibi kullanışlı sayılara dönüştürür. pH 1 birim düştüğünde [H⁺] 10 kat artar.',
      en: 'The acidity of an aqueous solution can be expressed by four equivalent quantities: [H⁺], [OH⁻], pH and pOH. Water is always in the equilibrium H₂O ⇌ H⁺ + OH⁻, and the product of the two ion concentrations is constant (Kw). Knowing any one of the four quantities therefore fixes the other three.\n\nThe p-scale (pX = −log X) turns concentrations ranging from 10⁻¹ to 10⁻¹⁴ M into convenient numbers such as 1–14. A drop of 1 pH unit means a tenfold increase in [H⁺].',
    },
    meaning: {
      tr: '• pH = −log[H⁺] ve [H⁺] = 10^(−pH)\n• pOH = −log[OH⁻] ve [OH⁻] = 10^(−pOH)\n• [H⁺]·[OH⁻] = Kw = 1,0 × 10⁻¹⁴ → pH + pOH = pKw = 14,00 (25 °C)\n\nNötr çözeltide [H⁺] = [OH⁻] olduğundan pH = pKw/2’dir. Bu değer yalnızca 25 °C’de 7,00’dir; sıcaklık arttıkça Kw büyür ve nötr pH 7’nin altına iner.\n\nAnlamlı rakam kuralı: pH’ın ondalık basamak sayısı, [H⁺]’nın anlamlı rakam sayısına eşittir. pH 7,40 (iki ondalık) → [H⁺] = 4,0 × 10⁻⁸ M (iki anlamlı rakam). Kesin tanımda pH, H⁺ aktivitesinin eksi logaritmasıdır.',
      en: '• pH = −log[H⁺] and [H⁺] = 10^(−pH)\n• pOH = −log[OH⁻] and [OH⁻] = 10^(−pOH)\n• [H⁺]·[OH⁻] = Kw = 1.0 × 10⁻¹⁴ → pH + pOH = pKw = 14.00 (25 °C)\n\nIn a neutral solution [H⁺] = [OH⁻], so pH = pKw/2. This equals 7.00 only at 25 °C; at higher temperatures Kw is larger and neutral pH falls below 7.\n\nSignificant figures: the number of decimals in pH equals the number of significant figures in [H⁺]. pH 7.40 (two decimals) → [H⁺] = 4.0 × 10⁻⁸ M (two figures). Strictly, pH is the negative logarithm of the H⁺ activity.',
    },
    usage: {
      tr: [
        'Ölçülen pH’tan [H⁺] ya da [OH⁻] derişimine geçmek (ör. denge hesapları için).',
        'Bazik çözeltilerde pOH ile pH arasında dönüşüm yapmak.',
        'Dönüşüm 25 °C ve pKw = 14,00 kabulüyle yapılır; başka sıcaklıklarda [OH⁻] ve pOH değerleri farklı olur.',
      ],
      en: [
        'Converting a measured pH into [H⁺] or [OH⁻] (e.g. for equilibrium calculations).',
        'Converting between pOH and pH for basic solutions.',
        'The conversion assumes 25 °C and pKw = 14.00; at other temperatures [OH⁻] and pOH differ.',
      ],
    },
    solution: {
      tr: [
        'Verilen (aracın varsayılan değeri): pH = 7,40.',
        'pOH = 14,00 − 7,40 = 6,60.',
        '[H⁺] = 10^(−7,40) = 3,981 × 10⁻⁸ M; [OH⁻] = Kw / [H⁺] = 1,0 × 10⁻¹⁴ / 3,981 × 10⁻⁸ = 2,512 × 10⁻⁷ M.',
        'Sonuç: pOH = 6,60, [H⁺] = 3,981 × 10⁻⁸ M, [OH⁻] = 2,512 × 10⁻⁷ M (iki anlamlı rakamla 4,0 × 10⁻⁸ M ve 2,5 × 10⁻⁷ M).',
      ],
      en: [
        'Given (the tool’s default value): pH = 7.40.',
        'pOH = 14.00 − 7.40 = 6.60.',
        '[H⁺] = 10^(−7.40) = 3.981 × 10⁻⁸ M; [OH⁻] = Kw / [H⁺] = 1.0 × 10⁻¹⁴ / 3.981 × 10⁻⁸ = 2.512 × 10⁻⁷ M.',
        'Result: pOH = 6.60, [H⁺] = 3.981 × 10⁻⁸ M, [OH⁻] = 2.512 × 10⁻⁷ M (to two significant figures 4.0 × 10⁻⁸ M and 2.5 × 10⁻⁷ M).',
      ],
    },
    mistakes: {
      tr: [
        '[H⁺] = 10^(−pH) yerine [H⁺] = −10^pH ya da 1/pH gibi hatalı ters dönüşümler yapmak.',
        'pH 7’yi her sıcaklıkta nötr kabul etmek.',
        'Sonucu pH’ın kesinliğinden daha fazla anlamlı rakamla raporlamak.',
      ],
      en: [
        'Inverting incorrectly, e.g. [H⁺] = −10^pH or 1/pH instead of 10^(−pH).',
        'Treating pH 7 as neutral at every temperature.',
        'Reporting more significant figures than the pH justifies.',
      ],
    },
    related: ['p-function', 'strong-acid', 'strong-base', 'glass-electrode-ph'],
  },

  'alpha-fractions': {
    concept: {
      tr: 'Poliprotik bir asit (ör. H₃PO₄) çözeltide tek bir türde bulunmaz; pH’a göre H₃PO₄, H₂PO₄⁻, HPO₄²⁻ ve PO₄³⁻ türlerinin karışımı hâlindedir. α kesri, bir türün derişiminin asidin toplam (analitik) derişimine oranıdır. Tüm α’ların toplamı 1’dir.\n\nα değerleri yalnızca pH’a ve pKa’lara bağlıdır, toplam derişimden bağımsızdır. Bu yüzden tür dağılımı diyagramı bir asit için bir kez çizilir ve her derişimde kullanılabilir. Bu kesirler tampon seçiminde, çözünürlüğün pH’a bağlılığında ve EDTA’nın koşullu oluşum sabitinde temel rol oynar.',
      en: 'A polyprotic acid such as H₃PO₄ does not exist as a single species in solution; depending on pH it is a mixture of H₃PO₄, H₂PO₄⁻, HPO₄²⁻ and PO₄³⁻. The fraction α of a species is its concentration divided by the total (analytical) concentration of the acid. All α values add up to 1.\n\nα values depend only on pH and the pKa values, not on the total concentration, so a distribution diagram is drawn once per acid and applies at any concentration. These fractions are central to buffer selection, pH-dependent solubility and the conditional formation constant of EDTA.',
    },
    meaning: {
      tr: 'n protonlu bir asit için payda D = [H⁺]ⁿ + Ka₁[H⁺]ⁿ⁻¹ + Ka₁Ka₂[H⁺]ⁿ⁻² + … + Ka₁Ka₂…Kaₙ. i proton kaybetmiş türün kesri, D’deki ilgili terimin D’ye oranıdır:\n\nαᵢ = Ka₁…Kaᵢ · [H⁺]ⁿ⁻ⁱ / D\n\n• pH = pKaᵢ’de, iki komşu türün kesirleri birbirine eşittir (pKa’lar birbirinden yeterince uzaksa her biri yaklaşık 0,5).\n• pKa’lar arasındaki bölgede ara tür baskındır; örneğin H₃PO₄ için pH ≈ 4,7’de H₂PO₄⁻ neredeyse tek türdür.\n• log C–pH diyagramı, her türün derişimini (αᵢ·C) logaritmik ölçekte gösterir ve küçük kesirleri de okumayı sağlar.',
      en: 'For an acid with n protons the denominator is D = [H⁺]ⁿ + Ka₁[H⁺]ⁿ⁻¹ + Ka₁Ka₂[H⁺]ⁿ⁻² + … + Ka₁Ka₂…Kaₙ. The fraction of the species that has lost i protons is its term in D divided by D:\n\nαᵢ = Ka₁…Kaᵢ · [H⁺]ⁿ⁻ⁱ / D\n\n• At pH = pKaᵢ the two neighbouring species have equal fractions (each about 0.5 if the pKa values are well separated).\n• Between two pKa values the intermediate species dominates; for H₃PO₄ at pH ≈ 4.7, H₂PO₄⁻ is almost the only species.\n• The log C–pH diagram plots each species’ concentration (αᵢ·C) on a log scale, so small fractions can also be read.',
    },
    usage: {
      tr: [
        'Belirli bir pH’ta hangi türün baskın olduğunu ve derişimini bulmak (tür dağılımı).',
        'Tampon pH’ı seçmek ve titrasyon eğrilerini yorumlamak.',
        'Çözünürlük, kompleksleşme ve EDTA titrasyonlarında gereken α değerlerini sağlamak.',
        'Hesap derişimlerle yapılır (aktivite katsayıları 1); en çok 4 pKa girilebilir.',
      ],
      en: [
        'Finding which species dominates at a given pH and its concentration (speciation).',
        'Choosing a buffer pH and interpreting titration curves.',
        'Supplying α values for solubility, complexation and EDTA titration calculations.',
        'Concentrations are used (unit activity coefficients); up to 4 pKa values can be entered.',
      ],
    },
    solution: {
      tr: [
        'Verilen (aracın varsayılan değerleri): H₃PO₄, pKa₁ = 2,15, pKa₂ = 7,20, pKa₃ = 12,35; pH = 7,00 → [H⁺] = 1,0 × 10⁻⁷ M.',
        'D’nin terimleri: [H⁺]³ = 1,0 × 10⁻²¹; Ka₁[H⁺]² = 7,08 × 10⁻¹⁷; Ka₁Ka₂[H⁺] = 4,47 × 10⁻¹⁷; Ka₁Ka₂Ka₃ = 2,0 × 10⁻²². Toplam D = 1,155 × 10⁻¹⁶.',
        'Her terim D’ye bölünür. Kontrol: α(HPO₄²⁻)/α(H₂PO₄⁻) = 10^(pH − pKa₂) = 10^(−0,20) = 0,631.',
        'Sonuç: α(H₃PO₄) = 8,661 × 10⁻⁶, α(H₂PO₄⁻) = 0,6131, α(HPO₄²⁻) = 0,3869, α(PO₄³⁻) = 1,728 × 10⁻⁶; pH 7,00’de baskın tür H₂PO₄⁻’tür.',
      ],
      en: [
        'Given (the tool’s default values): H₃PO₄, pKa₁ = 2.15, pKa₂ = 7.20, pKa₃ = 12.35; pH = 7.00 → [H⁺] = 1.0 × 10⁻⁷ M.',
        'Terms of D: [H⁺]³ = 1.0 × 10⁻²¹; Ka₁[H⁺]² = 7.08 × 10⁻¹⁷; Ka₁Ka₂[H⁺] = 4.47 × 10⁻¹⁷; Ka₁Ka₂Ka₃ = 2.0 × 10⁻²². Total D = 1.155 × 10⁻¹⁶.',
        'Divide each term by D. Check: α(HPO₄²⁻)/α(H₂PO₄⁻) = 10^(pH − pKa₂) = 10^(−0.20) = 0.631.',
        'Result: α(H₃PO₄) = 8.661 × 10⁻⁶, α(H₂PO₄⁻) = 0.6131, α(HPO₄²⁻) = 0.3869, α(PO₄³⁻) = 1.728 × 10⁻⁶; at pH 7.00 the dominant species is H₂PO₄⁻.',
      ],
    },
    mistakes: {
      tr: [
        'pKa yerine Ka değerini girmek.',
        'pKa’ları sırasız girmek; tür adları pKa₁ < pKa₂ < pKa₃ sırasına göre atanır.',
        'α’nın toplam derişime bağlı olduğunu sanmak; derişim yalnızca log C diyagramında αᵢ·C için gerekir.',
      ],
      en: [
        'Entering Ka values instead of pKa values.',
        'Entering the pKa values out of order; species labels assume pKa₁ < pKa₂ < pKa₃.',
        'Thinking α depends on the total concentration; C is needed only for αᵢ·C in the log C diagram.',
      ],
    },
    related: ['amphiprotic', 'henderson', 'edta-alpha', 'table-ka'],
  },
};

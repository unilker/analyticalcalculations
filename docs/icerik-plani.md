# Analitik Kimya Hesaplayıcı — İçerik Planı / Content Plan

> Bu belge, Google Drive klasöründeki ("Analitik Kimya Kitapları") altı kitabın
> taranmasıyla hazırlanmıştır. Her eşitliğin yanında kaynak kitap ve bölüm/denklem
> numarası verilmiştir; uygulamadaki her kartın "Kaynak" alanı buradan doldurulabilir.


## Uygulama durumu

| Sürüm | Modüller | Durum |
|---|---|---|
| v1 | Derişim, Hacimsel analiz, İstatistik, Kalibrasyon, Asit–baz, Gravimetri, Spektroskopi (temel), Araçlar | Tamamlandı |
| v2 | Denge ve aktivite, Titrasyon eğrileri, Elektrokimya, Ekstraksiyon, Kromatografi | Tamamlandı |
| v3 | Kalite güvencesi, Örnekleme, Atomik spektroskopi ve X-ışınları, Kütle spektrometrisi, Kinetik/radyokimya/termal, Spektroskopi (kalan eşitlikler) | Tamamlandı |
| — | Modül 18 (Kemometri) | Planlandığı gibi ayrı modül olarak eklenmedi; çok bileşenli en küçük kareler (CLS) Spektroskopi modülünde yer alıyor |

Toplam: 18 modül, 214 araç (169 eşitlik hesaplayıcısı, 45 veri/grafik/tablo aracı).

---

## 1. Kaynak kitaplar ve gerçek içerikleri

Klasördeki iki dosyanın **adı ile içeriği uyuşmuyor**. Aşağıdaki tablo dosyaların gerçekte
hangi kitabı içerdiğini gösterir.

| Kısa ad | Drive'daki dosya adı | Gerçek içerik | Sayfa |
|---|---|---|---|
| **[C]** | Analytical-Chemistry-by-Gary-D_-Christian-… | Christian, Dasgupta, Schug — *Analytical Chemistry*, 7. baskı (Wiley) | 850 |
| **[H]** | Full.pdf | Harvey — *Analytical Chemistry 2.1* (LibreTexts, CC BY-NC-SA 4.0) | 1099 |
| **[K]** | Basic_Concepts_of_Analytical_Chemistry_by_SM_Khopkar.pdf | Khopkar — *Basic Concepts of Analytical Chemistry*, 3. baskı | 633 |
| **[T]** | Basics-of-Analytical-Chemistry-and-Chemical-Equilibria-By-Brian-Tissue.pdf | Tissue — *Basics of Analytical Chemistry and Chemical Equilibria*, 2. baskı (Wiley) | 495 |
| **[D]** | Analytical-chemistry-a-modern-approach-…-Kellner-H.M.-Widmer.pdf | ⚠️ **Kellner–Widmer değil.** Danzer — *Analytical Chemistry: Theoretical and Metrological Fundamentals* (Springer, 2007) | 339 |
| **[P]** | Quality-assurance-in-analytical-chemistry-…-B.-W.-Wenclawiak.pdf | ⚠️ **Wenclawiak değil.** Prichard & Barwick — *Quality Assurance in Analytical Chemistry* (Wiley, AnTS serisi, 2007) | 318 |

Klasördeki "Acid-bases-in-analytical-chemistry-by-L.M.-Kolthoff.pdf" dosyası Kolthoff'un kitabı
değil, Harvey'nin *Analytical Chemistry 2.0* sürümüdür. [H] ile aynı içeriği taşıdığı için kaynak
listesinden çıkarılmıştır. Planlama için mevcut altı kitap yeterli görülmüştür.

### Kitapların uygulamaya katkısı

| Kitap | Güçlü olduğu alan | Uygulamadaki rolü |
|---|---|---|
| [C] Christian | Neredeyse tüm klasik ve enstrümantal hesaplar; ~540 numaralı denklem | **Ana omurga** |
| [H] Harvey | İstatistik, kalibrasyon, örnekleme, ladder diyagramları, ANOVA, deney tasarımı, radyokimya; çok sayıda çözümlü örnek | Omurga + çözümlü örnekler; açık lisanslı |
| [K] Khopkar | Ekstraksiyon, iyon değiştirme, polarografi, iletkenlik; IR, Raman, NMR, ESR, X-ışını, Mössbauer, refraktometri, polarimetri | Enstrümantal "ek" modüller |
| [T] Tissue | Sade anlatımlı denge, aktivite, α-fraksiyonları, Ilkovič, Randles–Ševčík | Başlangıç düzeyi açıklamalar |
| [D] Danzer | İleri istatistik, kalibrasyon (ağırlıklı, iki değişkende hata), performans ölçütleri, tarama testleri, kemometri | İleri / "uzman" modu |
| [P] Prichard–Barwick | Ölçüm belirsizliği, kontrol grafikleri, yeterlilik testi skorları, geri kazanım, Horwitz, örnekleme sabiti | Kalite güvencesi modülü |

---

## 2. Önerilen uygulama yapısı

### 2.1 Dört tip araç

Kitaplardaki eşitlikler hesaplama biçimine göre dört gruba ayrılıyor. Uygulama bu dört
tipi ayrı bileşenler olarak ele almalı:

| Tip | Açıklama | Örnek |
|---|---|---|
| **F — Formül çözücü** | Tek eşitlik; kullanıcı herhangi bir değişkeni bilinmeyen seçer | Beer–Lambert, Nernst, seyreltme |
| **V — Veri seti aracı** | Kullanıcı bir sayı listesi ya da (x, y) tablosu girer | Ortalama/s, t-testi, regresyon, Q-testi |
| **S — Simülatör / grafik** | Parametreye bağlı eğri çizer | Titrasyon eğrisi, α-diyagramı, van Deemter |
| **R — Referans tablo** | Aranabilir sabitler | Ka, Ksp, Kf, E°, kritik t/F/Q değerleri |

### 2.2 Her eşitlik kartının alanları (TR/EN)

- Ad (TR / EN)
- Formül (LaTeX ile gösterim)
- **Ne işe yarar:** 1–2 cümle (TR / EN)
- Değişkenler: sembol, ad, birim seçenekleri, varsayılan birim
- Hangi değişkenlerin çözülebildiği
- Varsayımlar ve geçerlilik sınırları (ör. "25 °C", "seyreltik çözelti")
- Çözümlü örnek
- İlgili eşitlikler
- Kaynak (ör. `[C] Denk. 16.13`)

Örnek veri kaydı:

```json
{
  "id": "beer-lambert",
  "module": "spektroskopi",
  "type": "F",
  "name": { "tr": "Beer–Lambert Yasası", "en": "Beer–Lambert Law" },
  "formula": "A = \\varepsilon b c",
  "purpose": {
    "tr": "Absorbans ölçümünden derişim hesaplar; spektrofotometrik nicel analizin temelidir.",
    "en": "Relates absorbance to concentration; basis of quantitative spectrophotometry."
  },
  "variables": [
    { "sym": "A", "name": { "tr": "Absorbans", "en": "Absorbance" }, "unit": "-" },
    { "sym": "ε", "name": { "tr": "Molar absorptivite", "en": "Molar absorptivity" }, "unit": "L mol⁻¹ cm⁻¹" },
    { "sym": "b", "name": { "tr": "Optik yol", "en": "Path length" }, "unit": "cm" },
    { "sym": "c", "name": { "tr": "Derişim", "en": "Concentration" }, "unit": "mol L⁻¹" }
  ],
  "solveFor": ["A", "ε", "b", "c"],
  "assumptions": { "tr": "Monokromatik ışık, seyreltik çözelti (< ~0,01 M)", "en": "..." },
  "related": ["transmittance-absorbance", "two-component-mixture"],
  "sources": ["[C] 16.13", "[H] 10.2", "[T] 4.11", "[K] 23.7"]
}
```

---

## 3. Modüller ve eşitlikler

Tip sütunu: F = formül çözücü, V = veri seti aracı, S = simülatör, R = referans tablo.

### Modül 0 — Araçlar ve Referans Tablolar / Tools & Reference Data

| Araç | Tip | Ne işe yarar | Kaynak |
|---|---|---|---|
| Molar kütle hesaplayıcı (kimyasal formül ayrıştırıcı) | F | Formülden g/mol hesaplar; diğer tüm modüllere girdi sağlar | [H] 16.18 |
| Birim dönüştürücü (kütle, hacim, derişim, enerji, basınç, sıcaklık) | F | Birim dönüşümleri | — |
| Havada tartım düzeltmesi: W_vac = W_air + W_air(d_air/d_obj − d_air/d_w) | F | Hassas tartımda hava kaldırma kuvveti düzeltmesi | [C] 2.1, [H] 16.9 |
| Ka / pKa tablosu | R | Asit–baz hesaplarına girdi | [H] 16.11, [C] Ek C |
| Ksp tablosu | R | Çözünürlük hesapları | [H] 16.10, [C] Tablo C.3 |
| Oluşum sabitleri (Kf, β), EDTA kompleksleri | R | Kompleksometri | [H] 16.12, [C] Tablo C.4 |
| Standart / formal indirgenme potansiyelleri | R | Redoks ve elektrokimya | [H] 16.13, [C] Tablo C.5 |
| Polarografik yarı dalga potansiyelleri | R | Voltametri | [H] 16.15 |
| Kritik değerler: t, F, Dixon Q, Grubbs | R | İstatistik testleri | [H] 16.4–16.7, [P] Ek |
| Primer standartlar | R | Ayarlama hesapları | [H] 16.8 |
| Fiziksel sabitler (R, F, h, c, k, N_A) | R | Tüm modüller | [P] Ek |

### Modül 1 — Derişim ve Çözelti Hazırlama / Concentration & Solutions

| Eşitlik (TR / EN) | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Mol / Moles | n = m / M | Kütleden mol sayısı | [C] 5.1–5.3 |
| Molarite / Molarity | M = n / V(L) | En yaygın derişim birimi | [C] 5.4–5.5, [H] 2.2 |
| Formalite / Formality | F = n_formül / V | Ayrışan maddelerde analitik derişim | [H] 2.2 |
| Molalite / Molality | m = n / kg çözücü | Sıcaklıktan bağımsız derişim | [H] 2.2 |
| Normalite, eşdeğer kütle / Normality | N = eq / V; eq wt = M / n | Eski yöntemler ve titrasyonlarla uyum | [C] 5.6–5.7, 5.16; [H] 16.1 |
| % (w/w), % (w/v), % (v/v) | % = (çözünen / numune) × 100 | Yüzde derişimler | [C] 5.8, 5.12 |
| ppt, ppm, ppb, ppt (w/w, w/v) | × 10³, 10⁶, 10⁹, 10¹² | Eser analiz derişimleri | [C] 5.9–5.15 |
| Mol kesri / Mole fraction | x = nᵢ / Σn | Karışımlar | [H] 2.2 |
| p-fonksiyonu / p-function | pX = −log[X] | pH, pAg, pM gibi ölçekler | [H] 2.2 |
| Seyreltme / Dilution | C₁V₁ = C₂V₂ | Stok çözeltiden hazırlama | [H] 2.5, [T] 2.3 |
| Yoğunluk ve %'den molarite | M = (% × d × 10) / M_A | Derişik asitlerin (HCl, H₂SO₄) molaritesi | [C] Böl. 5 |
| Çözelti hazırlama sihirbazı | g = M × V × M_A | "X M'lık Y mL çözelti için kaç g?" | [C] 5.19 |
| Titre / Titer | T = mg analit / mL titrant | Rutin analizde hızlı hesap | [C] 5.6 |

### Modül 2 — Stokiyometri ve Hacimsel Analiz Hesapları / Volumetric Calculations

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Titrasyon stokiyometrisi | mmol_A = M_T × V_T × (a/t) | Titrant hacminden analit miktarı | [C] 5.21–5.25, [T] 3.1 |
| Numunede % analit | %A = (mmol_A × M_A / mg numune) × 100 | Sonucu yüzde olarak verir | [C] 5.26 |
| Ayarlama / Standardization | M_T = mg_std / (M_std × V_T × oran) | Titrantın molaritesini bulur | [C] 5.27 |
| Geri titrasyon / Back titration | mmol_A = (mmol_eklenen − mmol_geri) × oran | Yavaş reaksiyonlar ve çözünmeyen numuneler | [C] Böl. 5 |
| Titrasyon hatası / Titration error | V_dönüm − V_eşdeğerlik | İndikatör hatasının büyüklüğü | [T] 3.2 |
| Kjeldahl azot ve protein | %N = (mmol_HCl − mmol_NaOH) × 14.007 / mg × 100; protein = %N × F | Gıdada protein tayini | [C] 8.13, [H] 9.2 |

### Modül 3 — Veri Değerlendirme ve İstatistik / Statistics

| Eşitlik | Tip | Formül / Açıklama | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| Ortalama, medyan, aralık | V | x̄ = Σxᵢ / n | Merkezî eğilim | [T] 1.2, [P] 6.1 |
| Standart sapma (örnek / popülasyon) | V | s = √[Σ(xᵢ − x̄)² / (n − 1)] | Kesinlik | [C] 3.1–3.3, [T] 1.3–1.4 |
| Varyans, RSD, %CV | V | RSD = s / x̄; %CV = 100 s / x̄ | Bağıl kesinlik | [T] 1.5–1.7, [P] 6.7–6.8 |
| Ortalamanın standart sapması | V | s_x̄ = s / √n | Ortalamanın güvenilirliği | [C] 3.4, [T] 1.8 |
| Mutlak ve bağıl hata | F | E = x̄ − μ; E_r = E / μ | Doğruluk | [H] 4.2 |
| Güven aralığı / Confidence interval | V | μ = x̄ ± t s / √n | Sonucun aralığı | [C] 3.9, 3.12; [T] 1.9–1.10; [P] 6.10 |
| Hata yayılımı / Propagation of uncertainty | F | Toplama/çıkarma: s_R = √Σs²; çarpma/bölme: s_R/R = √Σ(s/x)²; üs: s_R/R = k s_A/A; log: s_R = 0.4343 s_A/A; 10^A: s_R/R = 2.303 s_A | Hesaplanan sonucun belirsizliği | [C] 3.5–3.8, [H] 4.3, [P] 6.11–6.15 |
| Anlamlı rakamlar ve yuvarlama | F | Kurallar | Sonucu doğru basamakla raporlama | [C] 3.4–3.5 |
| t-testi: bilinen değerle | V | t = \|x̄ − μ\| √n / s | Yöntem doğruluğunun testi (SRM ile) | [C] 3.13, [H] 4.6 |
| t-testi: iki ortalama | V | t = \|x̄₁ − x̄₂\| / s_p × √[n₁n₂/(n₁+n₂)] | İki yöntemi/numuneyi karşılaştırma | [C] 3.11, 3.14 |
| Eşleştirilmiş t-testi / Paired t-test | V | t = d̄ √n / s_d | Aynı numunelerde iki yöntem | [C] 3.15–3.16, [H] 4.6 |
| F-testi | V | F = s₁² / s₂² | Kesinliklerin karşılaştırılması | [C] 3.10, [D] 4.37 |
| Dixon Q-testi | V | Q = \|x_q − x_n\| / w | Aykırı değer atma | [K] 2.9, [T] 1.13, [H] 4.6 |
| Grubbs testi | V | G = \|x_out − x̄\| / s | Aykırı değer (ISO önerisi) | [H] 4.6, [D] 4.36 |
| Chauvenet kriteri | V | — | Aykırı değer | [H] 4.6 |
| Aralığa dayalı istatistik | V | s_r = R × K_R; CL = x̄ ± R t_r | Küçük veri setleri | [C] 3.17–3.18 |
| Normal dağılım, z | F | z = (x − μ) / σ | Olasılık hesabı | [H] 4.4, [C] 4.2 |
| Güç analizi / örnek sayısı | F | n > 2[(z_α + z_β) s / δ]² | Kaç ölçüm gerektiği | [C] 3.36–3.41 |
| Tek yönlü ANOVA | V | F = MS_arası / MS_içi | Çok gruplu karşılaştırma | [H] 14.4, [D] 5.1, [C] 3 |

### Modül 4 — Kalibrasyon ve Yöntem Performansı / Calibration & Figures of Merit

| Eşitlik | Tip | Formül / Açıklama | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| Doğrusal en küçük kareler | V | m = (nΣxy − ΣxΣy) / (nΣx² − (Σx)²); b = ȳ − m x̄ | Kalibrasyon doğrusu | [C] 3.19–3.23, [T] 1.15–1.20, [H] 5.4 |
| Eğim, kesişim ve artıkların standart sapması | V | s_m, s_b, s_y | Doğrunun belirsizliği | [C] 3.24–3.26, [T] 1.21–1.22, [D] 6.19 |
| Korelasyon katsayısı, R² | V | r = Σ(x − x̄)(y − ȳ) / √[...] | Doğrusallık | [C] 3.27–3.28, [D] 6.3 |
| Bilinmeyenin derişimi ve belirsizliği | V | s_x = (s_y/m) √[1/k + 1/n + (ȳ_u − ȳ)² / (m² Σ(xᵢ − x̄)²)] | Sonuç ± belirsizlik | [H] 5.4, [T] 1.23 |
| Ağırlıklı doğrusal regresyon | V | wᵢ = 1/sᵢ² | Değişen varyanslı (heteroskedastik) veriler | [H] 5.4, [D] 6.34–6.37 |
| Tek nokta ve çok noktalı dış kalibrasyon | V | S = k C | Standart yöntem | [H] 5.3 |
| Standart ekleme (tek nokta, hacim düzeltmeli) | F | C_unk = A_s V_std C_std / [A_spk(V_s + V_std) − A_s V_s] | Matriks etkisi olan numuneler | [C] 17.4–17.8, [H] 5.3, [K] 28.2–28.5 |
| Standart ekleme (çok nokta, x-kesişimi) | V | C_A = −x_kesişim | Çok noktalı standart ekleme | [H] 5.3 |
| İç standart / Internal standard | F | S_A / S_IS = K (C_A / C_IS) | Enjeksiyon ve hacim hatalarını giderme | [H] 5.3, [C] 17.5 |
| Yanıt faktörü / Response factor | F | RF = (sinyal − kesişim) / C | Kromatografide hızlı nicelleme | [C] 4.1 |
| Gözlenebilme sınırı (LOD), tayin sınırı (LOQ) | F/V | LOD = 3.3 s/S; LOQ = 10 s/S; IUPAC: S_DL = S_mb + z σ_mb | Yöntemin alt sınırları | [C] 3.29–3.30, [H] 4.7, [D] 7.41–7.48, [P] 4.1 |
| Tanımlama sınırı / Limit of identification | F | S_LOI = S_mb + z σ (I. ve II. tip hata dengesi) | Gelişmiş LOD | [H] 4.7 |
| Sinyal/gürültü oranı | F | S/N = x̄ / s_N | Cihaz performansı | [D] 7.1–7.6 |
| Duyarlılık; seçicilik katsayısı | F | K_A,I = k_I / k_A | Girişim değerlendirmesi | [H] 3.4, [D] 7.12–7.24 |
| Sandell duyarlılığı | F | µg cm⁻² (A = 0.001 için) | Spektrofotometrik yöntemleri karşılaştırma | [K] 24, [C] 16 |

### Modül 5 — Kalite Güvencesi ve Ölçüm Belirsizliği / QA & Measurement Uncertainty

| Eşitlik | Tip | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| Geri kazanım / Recovery | F | %R = (C_spk − C_b) / C_eklenen × 100 | Doğruluk kontrolü | [P] 4.11–4.13 |
| Sapma / Bias | F | %B = (x − x₀) / x₀ × 100 | Sistematik hata | [P] 4.10, [D] 4.1 |
| Geri kazanım düzeltmesi | F | C_düz = C_göz / %R × 100 | Sonucu düzeltme | [P] 4.14 |
| Horwitz eşitliği | F | %CV_R = 2^(1 − 0.5 log C) | Beklenen laboratuvarlar arası kesinlik | [P] 4.4–4.8, [C] 4 |
| Birleşik standart belirsizlik | F | u(y) = √Σ(∂y/∂pᵢ)² u(pᵢ)² | GUM'a uygun belirsizlik bütçesi | [P] 6.11–6.15, [D] 4.25–4.31 |
| Genişletilmiş belirsizlik | F | U = k × u(y) (k = 2 için ~%95) | Raporlanan belirsizlik | [P] 6.3, [D] 4.29 |
| Kontrol grafiği (Shewhart) | V | UCL/LCL = x̄ ± 3s; uyarı = x̄ ± 2s | Rutin QC izleme | [P] 6.2, [H] 15.4, [D] 4.5 |
| Yeterlilik testi z-skoru | F | z = (x − X) / σ̂ | Laboratuvarlar arası karşılaştırma | [P] 7.3–7.5, [D] 8.9 |
| z′, zeta, E_n skorları | F | ζ = (x − X)/√(u_x² + u_X²); E_n = (x − X)/√(U_lab² + U_ref²) | Belirsizliği hesaba katan skorlar | [P] 7.5–7.7 |
| Q ve D% skorları; RSZ, SSZ | F | D% = 100(x − X)/X | PT sonuç özetleri | [P] 7.8–7.11 |
| Laboratuvarlar arası kesinlik | F | σ_L = √(σ_R² − σ_r²) | Tekrarlanabilirlik ve yeniden üretilebilirlik ayrımı | [P] 7.1–7.2 |
| Youden sağlamlık testi | V | A = (l+m+p+w)/4 − (v+x+y+z)/4 | Yöntem sağlamlığı (7 faktör, 8 deney) | [P] 4.15–4.17, [H] 14.2 |
| 2^k faktöriyel tasarım | V | Etki ve etkileşim hesapları | Optimizasyon | [H] 14.1, [D] 5.1 |
| Tarama testleri: duyarlılık, özgüllük, PPV | F | TPR = TP/(TP+FN) … | Nitel testlerin güvenilirliği | [D] 4.48–4.55 |

### Modül 6 — Örnekleme / Sampling

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Toplam varyans | s_o² = s_s² + s_a² | Örnekleme ve analiz hatasını ayırma | [C] 3.31, [H] 7.2 |
| Ingamells örnekleme sabiti | K_s = m × (%RSD)² | Gerekli minimum numune kütlesi | [P] 3.4–3.6, [C] 3.32, [H] 7.2 |
| Gerekli numune sayısı | n = t² s² / e² | Kaç numune alınmalı | [C] 3.33–3.35, [H] 7.2, [P] 3.7 |
| Yöntem doğrulamasında ölçüm sayısı | n = 13 (s / δ)² + 2 | Doğrulama planı | [P] 4.9 |
| Tabakalı örnekleme varyansı | — | Heterojen numune | [K] 3.6–3.7 |

### Modül 7 — Kimyasal Denge ve Aktivite / Equilibrium & Activity

| Eşitlik | Tip | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| Denge sabiti ifadesi; K'ların birleştirilmesi | F | K_toplam = K₁ × K₂; K_ters = 1/K | Çok basamaklı denge | [C] 6.1–6.16, [H] 6.3 |
| Gibbs enerjisi–K ilişkisi | F | ΔG° = −RT ln K; ΔG = ΔG° + RT ln Q | Tepkimenin kendiliğindenliği | [C] 6.7–6.10, [T] 9.1–9.2, [H] 6.2 |
| İyonik şiddet / Ionic strength | F | µ = ½ Σ Cᵢ zᵢ² | Aktivite hesaplarına girdi | [C] 6.18, [T] 5.2 |
| Aktivite / Activity | F | aᵢ = γᵢ [i] | Gerçek "etkin" derişim | [C] 6.17, [T] 5.3 |
| Debye–Hückel (sınır, genişletilmiş, Davies tipi) | F | log γ = −0.51 z² √µ / (1 + √µ) (− 0.3 µ ile) | Aktivite katsayısı | [C] 6.20–6.22, [T] 5.4–5.7, [H] 6.9 |
| Termodinamik ve koşullu K | F | K° = K × (γ_C γ_D / γ_A γ_B) | Yabancı iyon etkisi | [C] 6.24–6.25 |
| Sistematik yaklaşım: kütle ve yük denkliği | S | Sayısal çözücü | Karmaşık dengelerin tam çözümü | [C] 6.13, [H] 6.7 |
| Ladder diyagramı | S | Grafik | Baskın türü görme | [H] 6.6, [C] 7.10 |

### Modül 8 — Asit–Baz Dengeleri / Acid–Base Equilibria

| Eşitlik | Tip | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| pH, pOH, Kw | F | pH = −log[H⁺]; pKw = pH + pOH | Temel | [C] 7.13–7.19, [T] 5.1 |
| Kuvvetli asit/baz (seyreltikte Kw dahil) | F | [H⁺] = C/2 + √(C² + 4Kw)/2 | Çok seyreltik çözeltilerde doğru pH | [C] 7, [H] 6.7 |
| Zayıf asit/baz (yaklaşık ve tam) | F | [H⁺] = √(Ka C) veya ikinci derece denklem | Zayıf elektrolit pH'ı | [C] 7.20–7.22, [T] 5.6 |
| Ka × Kb = Kw | F | — | Eşlenik çiftler | [C] 7.27 |
| Tuz hidrolizi | F | [OH⁻] = √(Kw/Ka × C); [H⁺] = √(Kw/Kb × C) | Tuz çözeltisinin pH'ı | [C] 7.28–7.39 |
| Henderson–Hasselbalch | F | pH = pKa + log([A⁻]/[HA]) | Tampon pH'ı | [C] 7.40–7.47, 7.58–7.60; [T] 6.1 |
| Tampona asit/baz eklenmesi | F | pH = pKa + log[(n_A⁻ ∓ n_ekl)/(n_HA ± n_ekl)] | Tamponun pH değişimi | [C] 7.52–7.53 |
| Tampon kapasitesi / Buffer capacity | F/S | β = 2.303 (C α₀ α₁ + [H⁺] + [OH⁻]) | Tamponun dayanıklılığı | [C] 7.49–7.50, 8.28 |
| α-fraksiyonları (mono ve poliprotik, genel form) | S | α_i = (Ka₁…Ka_i [H⁺]^(n−i)) / Q_n | Türlerin pH'a göre dağılımı | [C] 7.65–7.84, [T] 6.2–6.13 |
| Amfoterik tür (ara tür) pH'ı | F | [H⁺] = √[(Ka₁Kw + Ka₁Ka₂C)/(Ka₁ + C)] ≈ √(Ka₁Ka₂) | NaHCO₃, NaH₂PO₄ gibi tuzlar | [C] 7.93–7.99, [T] 6.7 |
| Aktivite düzeltmeli pH | F | pH = pKa + log([A⁻]/[HA]) + log γ_A⁻ | Gerçekçi tampon pH'ı | [C] 7.102–7.105 |
| Kan tamponu (bikarbonat) | F | pH = 6.10 + log([HCO₃⁻]/(0.03 pCO₂)) | Klinik kimya | [C] 7.101 |
| log C–pH diyagramı | S | Grafik | Tür dağılımını görselleştirme | [C] 7.16 |

### Modül 9 — Titrasyon Eğrileri ve Titrimetri / Titration Curves

| Eşitlik | Tip | Formül / Açıklama | Ne işe yarar | Kaynak |
|---|---|---|---|---|
| Kuvvetli asit–kuvvetli baz eğrisi (yük denkliği, f) | S | [H⁺] − Kw/[H⁺] + C(1 − f)/(1 + f) = 0 | Tam titrasyon eğrisi | [C] 8.1–8.9 |
| Zayıf asit–kuvvetli baz eğrisi | S | α₁ ile yük denkliği | Eğri ve dönüm noktası | [C] 8.14–8.19, [T] 6.3, [K] 5.4 |
| Zayıf baz–kuvvetli asit; Na₂CO₃ titrasyonu | S | — | İki basamaklı eğriler | [C] 8.20–8.25 |
| Poliprotik asitler ve karışımlar (genel) | S | V_B = V_A{([OH⁻] − [H⁺]) + C_A(α₁ + 2α₂ + 3α₃)} / (C_B + [H⁺] − [OH⁻]) | Her türlü asit–baz eğrisi | [C] 8.26, 8.9–8.10 |
| İndikatör geçiş aralığı | F | pH = pK_In ± 1 | İndikatör seçimi | [C] 8.10–8.13, [K] 5.5 |
| 1. ve 2. türev, Gran grafiği | V | — | Dönüm noktasının veriden bulunması | [C] 8.11, [H] 9.2 |
| EDTA α_Y⁴⁻ ve koşullu oluşum sabiti | F | K_f′ = α_Y⁴⁻ K_f; K_f″ = α_M α_Y K_f | Belirli pH'ta kompleksleşmenin tamlığı | [C] 9.5–9.14, [H] 9.3, [K] 8.2 |
| Kümülatif oluşum sabitleri, α_M | F | βₙ = K₁K₂…Kₙ; α_M = 1 / Σ βᵢ [L]ⁱ | Yardımcı ligandın etkisi | [C] 9.17–9.21, [T] 7.1 |
| EDTA titrasyon eğrisi (pM) | S | V_L = V_M (C_M − [M])(1 + K_f[M]) / … | Kompleksometrik eğri | [C] 9.15, [K] 8.2 |
| Su sertliği | F | ppm CaCO₃ = M_EDTA × V_EDTA × 100.09 × 1000 / V_numune | Uygulama | [C] 9, [H] 9.3 |
| Çöktürme titrasyon eğrisi (pAg) ve karışık halojenürler | S | [C] 11.12–11.15 | Mohr, Volhard, Fajans | [C] 11.12–11.19, [H] 9.5, [K] 7 |
| Redoks denge sabiti | F | log K = n ΔE° / 0.05916 | Tepkimenin tamlığı | [C] 12.20, 14.1; [T] 9.7 |
| Eşdeğerlik noktası potansiyeli | F | E_eş = (n₁E₁° + n₂E₂°) / (n₁ + n₂) | Redoks indikatörü seçimi | [C] 14.2, [K] 6.1 |
| Redoks titrasyon eğrisi | S | Nernst ile | Eğri | [C] 14.3, [H] 9.4, [K] 6.1 |
| Redoks indikatör geçişi | F | E = E°_In ± 0.05916/n | İndikatör aralığı | [C] 14.4, [K] 6.4 |
| İyodometri/iyodimetri, permanganat, dikromat stokiyometrileri | F | mol oranları | Pratik titrasyonlar | [C] 14.5–14.15, [K] 6.3 |

### Modül 10 — Gravimetri ve Çözünürlük / Gravimetry & Solubility

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Gravimetrik faktör / Gravimetric factor | GF = (a × M_analit) / (b × M_çökelek) | Çökelek kütlesinden analit kütlesi | [C] 10.1, [H] 8.2, [K] 4 |
| % analit | %A = m_çökelek × GF / m_numune × 100 | Sonuç | [C] 10.2–10.5 |
| Ksp ve molar çözünürlük (MₓAᵧ) | s = (Ksp / xˣyʸ)^(1/(x+y)) | Çözünürlük | [C] 10.7–10.9, [T] 8.1–8.2 |
| Ortak iyon etkisi | Ksp = (s)(C + s) | Çökeleğin tamlığı | [C] 6.12, [T] 8.3 |
| Yabancı iyon (aktivite) etkisi | Ksp = [M]γ_M [A]γ_A | Tuz eklenince çözünürlük artışı | [C] 10.10, 10.6 |
| pH'ın çözünürlüğe etkisi | Ksp = [Ca²⁺] C_Ox α₂ | CaC₂O₄, metal hidroksitleri | [C] 11.1–11.5, [T] 8.4 |
| Kompleksleşmenin çözünürlüğe etkisi | Ksp′ = Ksp / α_M | AgBr–NH₃ gibi sistemler | [C] 11.7–11.11 |
| Bağıl aşırı doygunluk (von Weimarn) | RSS = (Q − S) / S | Kristal ve kolloit oluşumu | [H] 8.2 |
| Nem, kül ve uçurma gravimetrisi | % = Δm / m × 100 | Uygulama | [H] 8.3, [C] 2.10 |

### Modül 11 — Elektrokimya / Electrochemistry

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Gibbs enerjisi–potansiyel | ΔG = −nFE; ΔG° = −nFE° | Kendiliğindenlik | [C] 12.15, [T] 9.3–9.4 |
| Nernst eşitliği | E = E° − (0.05916/n) log Q | Potansiyel–derişim ilişkisi | [C] 12.22, [T] 9.5–9.11, [H] 11.1 |
| pH'a bağlı Nernst | E = E° − 0.05916 (m/n) pH − … | H⁺ içeren yarı tepkimeler | [C] 12.26–12.29 |
| Hücre potansiyeli | E_hücre = E_katot − E_anot | Pil potansiyeli | [C] 12.23, 13.7; [T] 9.12 |
| Referans elektrot dönüşümü | E_SCE = E_SHE − 0.242 V (Ag/AgCl için 0.197 V) | Elektrotlar arası çevirme | [C] 15.1 |
| İkinci tür elektrot (Ag/AgCl) | E = E°_Ag + 0.05916 log Ksp − 0.05916 log a_Cl⁻ | Elektrot potansiyeli; potansiyometrik Ksp | [C] 13.8–13.13 |
| Cam elektrot kalibrasyonu | pH_x = pH_s + (E_s − E_x) / (2.303RT/F) | pH ölçümünün temeli | [C] 13.37–13.42 |
| İyon seçici elektrot (Nikolsky–Eisenman) | E = k + (S/z) log(a_A + K_AB a_B^(z_A/z_B)) | Girişimli ISE ölçümleri | [C] 13.44–13.47, [H] 11.2, [T] 9.8 |
| Doğrudan potansiyometride bağıl hata | %hata ≈ 3900 n ΔE (25 °C) | Ölçüm hatası | [C] 13.10 |
| Potansiyometrik titrasyon (Ag⁺–Cl⁻) | V_T × antilog[(k − E)/S] = C_Cl V_Cl − C_Ag V_Ag | Gran tipi değerlendirme | [C] 14.20–14.24 |
| Faraday yasası / Coulometry | Q = n F N; Q = i t; m = Q M / (n F) | Kulometri ve elektrogravimetri | [H] 11.3, [K] 48, [T] 3.7 |
| Ilkovič eşitliği | i_d = 708 n D^½ m^⅔ t^⅙ C | Polarografik difüzyon akımı | [T] 9.13, [K] 46 |
| Heyrovský–Ilkovič dalga eşitliği | E = E½ − (0.05916/n) log[i / (i_d − i)] | Polarogram analizi | [K] 46, [H] 11.4 |
| Randles–Ševčík | i_p = 2.69×10⁵ n^(3/2) A D^½ C v^½ | Döngüsel voltametri pik akımı | [T] 9.14, [H] 11.4 |
| Mikroelektrot sınır akımı | i_l ∝ n F D C r | Ultramikroelektrotlar | [C] 15.7 |
| İletkenlik / Conductivity | κ = G (l/A); Λ = κ / C | Kondüktometri | [C] 21.13–21.19, [K] 47 |
| Kohlrausch yasası; iyon iletkenlikleri | Λ = Λ° − K√C; Λ° = ν₊λ₊° + ν₋λ₋° | Sonsuz seyreltik iletkenlik | [C] 21.18, [K] 47 |

### Modül 12 — Moleküler Spektroskopi / Molecular Spectroscopy

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Dalga boyu–frekans–dalga sayısı–enerji | c = λν; ν̃ = 1/λ; E = hν = hc/λ | Işık birimleri arası dönüşüm | [C] 16.1–16.3, [T] 4.1–4.7 |
| Kırılma indisi | n = c / v | Optik | [T] 4.2, [K] 33.1 |
| Geçirgenlik ve absorbans | T = P/P₀; %T = 100T; A = −log T | Temel ölçüm | [C] 16.5–16.12, [K] 23.3–23.6 |
| Beer–Lambert yasası | A = ε b c (veya a b c) | Spektrofotometrik nicel analiz | [C] 16.13, [T] 4.10–4.11, [K] 23.7 |
| İki bileşenli karışım | A_λ1 = ε_x1 b c_x + ε_y1 b c_y (λ2 için de) | Aynı anda iki analit tayini | [C] 16.14–16.17, [K] 24.1–24.4 |
| Fotometrik bağıl hata (Ringbom) | Δc/c = 0.4343 ΔT / (T log T) | En uygun absorbans aralığı | [K] 23.11–23.14 |
| Job (sürekli değişim) ve mol oranı yöntemleri | Grafik analizi | Kompleks stokiyometrisi | [H] 10.3, [K] 24 |
| Fotometrik titrasyon | Grafik analizi | Spektrofotometrik dönüm noktası | [H] 10.3 |
| Floresans şiddeti | F = k Φ P₀ (1 − 10^(−εbc)) ≈ 2.303 k Φ P₀ ε b c | Florimetrik nicel analiz | [C] 16.23–16.25, [T] 4.12–4.13, [K] 31.4 |
| Floresans sönümlemesi (Stern–Volmer tipi) | Φ₀/Φ = 1 + K[Q] | Sönümleyici etkisi | [K] 31.6 |
| Fosforesans | I = 2.303 φ P₀ ε b c | Fosforimetri | [K] 31.10–31.12 |
| Kırınım ağı eşitliği | nλ = d (sin i − sin θ) | Monokromatör | [C] 16.18–16.19 |
| Fiber optik sayısal açıklık | NA = √(n₁² − n₂²) | Fiber sensörler | [C] 16.20–16.22 |
| IR: Hooke yasası, indirgenmiş kütle | ν̃ = (1/2πc) √(k/µ); µ = m₁m₂/(m₁ + m₂) | Titreşim frekansı tahmini | [K] 25.1–25.4, [T] 11.1–11.3 |
| ATR kritik açısı | θ_c = sin⁻¹(n₂/n₁) | IR-ATR | [K] 25.6 |
| Raman kayması ve şiddeti | Δν = ν₀ − ν_s; I = K ν⁴ J C | Raman nicel analizi | [K] 26.1–26.6 |
| Nefelometri ve türbidimetri | S = log(P₀/P) = k b c | Bulanıklık ölçümü | [K] 32.1–32.5 |
| Refraktometri: molar refraksiyon | R_M = [(n² − 1)/(n² + 2)] (M/ρ) | Saflık ve tanımlama | [K] 33.2–33.9 |
| Polarimetri: özgül çevirme | [α] = α / (l c) | Optikçe aktif maddeler, şeker analizi | [K] 34.1–34.3, [C] 21.22 |
| NMR kimyasal kayma | δ = (ν − ν_TMS) / ν₀ × 10⁶ | Yapı tayini | [K] 35.9, [T] 11.5 |
| ESR rezonans koşulu | hν = g β H₀ | ESR | [K] 36.1–36.5 |

### Modül 13 — Atomik Spektroskopi ve X-Işınları / Atomic & X-ray Spectroscopy

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Boltzmann dağılımı | N_j/N₀ = (g_j/g₀) e^(−ΔE/kT) | Alevde/plazmada uyarılmış atom oranı | [C] 17.1–17.2, [K] 27.1–27.4, [H] 10.7 |
| Doppler genişlemesi | Δλ = (v/c) λ₀ | Çizgi genişliği | [K] 27.3 |
| Emisyon kalibrasyonu (geniş aralık) | I = k Cⁿ | AES/ICP | [C] 17.3 |
| AAS/AES'te standart ekleme ve iç standart | Modül 4'e bağlantı | Matriks etkisi | [C] 17.5–17.8, [K] 28.2–28.5 |
| Duane–Hunt sınırı | λ₀ (Å) = 12.398 / V (kV) | X-ışını tüpü | [K] 37.1–37.4 |
| X-ışını kütle absorpsiyonu | ln(P₀/P) = µ_M ρ x; µ_M = Σ wᵢ µᵢ | XRF matriks düzeltmesi | [K] 37.8–37.13 |
| Bragg yasası | nλ = 2d sin θ | XRD, kristal analizi | [K] 37.14–37.26 |
| Mössbauer: geri tepme enerjisi, Doppler hızı | E_R = E_γ² / 2mc² | Mössbauer spektroskopisi | [K] 38.1–38.25 |
| Fotoelektron (XPS/ESCA) bağlanma enerjisi | E_b = hν − E_k | Yüzey analizi | [K] 39.4–39.6 |

### Modül 14 — Kütle Spektrometrisi / Mass Spectrometry

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Çözünürlük | R = m / Δm | Kütle ayırma gücü | [C] 22.1, [T] 10.2 |
| Kütle doğruluğu (ppm) | (m_ölç − m_gerçek) / m_gerçek × 10⁶ | Yüksek çözünürlüklü MS | [C] 22.2 |
| Manyetik sektör | m/z = B² r² e / 2V | Sektör analizörü | [T] 10.3–10.5 |
| Uçuş zamanı (TOF) | t = L √(m / 2zeV) | TOF analizörü | [C] 22.3–22.5, [T] 10.6 |
| İyon siklotron frekansı | ν_c = zeB / 2πm | FT-ICR | [C] 22.6–22.7 |
| İzotop örüntüsü (M+1, M+2) | — | Formül tahmini, Cl/Br tanımlama | [T] 11.2, [K] 42 |
| İzotop seyreltme | — | Kesin nicel analiz (IDMS) | [H] 13.3, [K] 44 |

### Modül 15 — Ekstraksiyon ve İyon Değiştirme / Extraction & Ion Exchange

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Dağılım katsayısı | K_D = [S]_org / [S]_aq | Bölüşüm dengesi | [C] 18.1, [T] 2.1, [K] 9.1 |
| Dağılım oranı (pH'a bağlı, zayıf asit) | D = K_D [H⁺] / ([H⁺] + Ka) | pH ile ekstraksiyonu ayarlama | [C] 18.2–18.8, [H] 7.7 |
| % ekstrakte edilen | %E = 100D / (D + V_aq/V_org) | Tek basamak verimi | [C] 18.9–18.11, [K] 9.13 |
| n basamaklı ekstraksiyon | q_n = [V_aq / (D V_org + V_aq)]ⁿ | Kaç kez ekstraksiyon gerektiği | [C] 18.12–18.13, [T] 2.5–2.7, [K] 9.14–9.16 |
| Metal şelat ekstraksiyonu, pH½ | D = K* [HR]ⁿ_org / [H⁺]ⁿ | Metal ayırma | [K] 9.3–9.10, [C] 18.12 |
| Ayırma faktörü ve geri kazanım | α = D₁/D₂; S_I,A = R_I/R_A | Ayırma kalitesi | [K] 9.7, [H] 7.5 |
| Karşı akım (Craig) dağılımı | Binom dağılımı | Çok basamaklı ayırma | [H] 16.16, [C] 19.1 |
| İyon değiştirme seçicilik katsayısı | K_B^A = [A]_R[B] / ([A][B]_R) | Reçine afinitesi | [K] 12.1–12.18 |
| Dağılım katsayısı (ağırlık ve hacim) | K_D = (mmol/g reçine) / (mmol/mL); D_v = D_w ρ | Kolon hesapları | [K] 12.33–12.40 |
| İyon değiştirme kolonunda plaka sayısı | N = 2π (C_max V / m)² | Kolon verimi | [K] 12.41–12.47 |

### Modül 16 — Kromatografi ve Elektroforez / Chromatography & Electrophoresis

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Düzeltilmiş alıkonma süresi | t_R′ = t_R − t_M | Temel | [C] 19.10, [T] 12.2 |
| Alıkonma faktörü / Retention factor | k = (t_R − t_M) / t_M | Alıkonma gücü | [C] 19.12, [T] 12.5, [K] 16.7 |
| Seçicilik faktörü / Selectivity | α = k₂ / k₁ | İki pikin ayrılabilirliği | [C] 19.32, [T] 12.11, [K] 16.10 |
| Teorik plaka sayısı | N = 16 (t_R/w)²; N = 5.545 (t_R/w½)² | Kolon verimi | [C] 19.6–19.11, [K] 16.12–16.15, [T] 12.6 |
| Plaka yüksekliği | H = L / N; h = H / d_p | Kolon karşılaştırma | [C] 19.5, 19.20; [T] 12.7 |
| Rezolüsyon | R_s = 2(t_R2 − t_R1) / (w₁ + w₂) | Ayırma kalitesi | [C] 19.31, [T] 12.3, [K] 16.17 |
| Purnell (temel rezolüsyon) eşitliği | R_s = (√N/4) [(α − 1)/α] [k₂/(1 + k₂)] | Ayırma optimizasyonu | [C] 19.33, [T] 12.10, [K] 16.18, [H] 12.3 |
| Gereken plaka sayısı | N_req = 16 R_s² [α/(α − 1)]² [(1 + k)/k]² | Kolon boyu seçimi | [C] 19.34–19.35 |
| van Deemter, Golay, Huber, Knox | H = A + B/u + C u (ve türevleri) | Optimum akış hızı | [C] 19.13–19.28, [T] 12.9, [K] 11.9 |
| Lineer hız ve alıkonma hacmi | u = L / t_M; V_R = F t_R | Akış hesapları | [T] 12.4, 12.8 |
| GC: sıkıştırılabilirlik düzeltmesi, net alıkonma hacmi | j = 3/2 [(P_i/P_o)² − 1] / [(P_i/P_o)³ − 1]; V_N = j V_R′ | GC'de gerçek alıkonma | [K] 16.3–16.6 |
| Kovats alıkonma indeksi | I = 100 [n + (log t′_x − log t′_n) / (log t′_n+1 − log t′_n)] | GC'de pik tanımlama | [C] 20.1, [H] 12.4 |
| TLC Rf | R_f = analitin aldığı yol / çözücü cephesinin aldığı yol | İnce tabaka kromatografisi | [T] 12.1, [P] 4.6, [K] 15.7 |
| Poiseuille basınç düşüşü | ΔP = 8 F η L / (π r⁴) | Kapiler/HPLC basıncı | [C] 21.10 |
| Elektroforetik mobilite | µ_ep = q / (6π η r); µ_net = µ_ep + µ_eo | KE'de göç | [C] 21.11–21.12, 21.24; [K] 22.3–22.10 |
| KE göç süresi ve plaka sayısı | t_m = L² / (µ_net V); N = µ_net V / 2D | KE verimi | [C] 21.25–21.28, [K] 22.2 |
| KE rezolüsyonu | R_s = 0.177 Δµ √[V / (D (µ_ort + µ_eo))] | KE optimizasyonu | [C] 21.29–21.30, [K] 22.14 |
| KE enjeksiyon hacmi (hidrodinamik / elektrokinetik) | — | Numune miktarı | [K] 22.5–22.7 |

### Modül 17 — Kinetik Yöntemler, Radyokimya ve Termal Analiz / Kinetics, Radiochemistry, Thermal

| Eşitlik | Formül | Ne işe yarar | Kaynak |
|---|---|---|---|
| Birinci derece hız yasası, yarılanma süresi | ln[A] = ln[A]₀ − kt; t½ = 0.693 / k | Kinetik nicel analiz | [C] 23.1–23.4, [H] 13.2, [H] 16.17 |
| İkinci derece / yalancı birinci derece | kt = (1/([B]₀ − [A]₀)) ln(…) | Kinetik yöntemler | [C] 23.5–23.11 |
| Michaelis–Menten | v = V_max [S] / (K_m + [S]) | Enzimatik analiz | [C] 23.12–23.13, [H] 13.2 |
| Lineweaver–Burk | 1/v = (K_m/V_max)(1/[S]) + 1/V_max | K_m ve V_max tayini | [C] 23.14 |
| Arrhenius | k = A e^(−E_a/RT) | Sıcaklık etkisi | [C] 23 |
| Radyoaktif bozunma | A = λN; N = N₀ e^(−λt); t½ = ln2 / λ | Radyokimyasal analiz | [H] 13.3, [K] 44 |
| Sayım istatistiği | σ = √N | Radyoaktif sayım belirsizliği | [H] 13.3 |
| İzotop seyreltme analizi | — | Kesin tayin | [H] 13.3, [K] 44 |
| Nötron aktivasyon analizi | — | Eser element tayini | [H] 13.3, [K] 44 |
| Termogravimetri (TGA) kütle kaybı | % = Δm / m₀ × 100; stokiyometrik kayıp | Bileşim, nem, bozunma | [K] 43, [H] 8.3 |

### Modül 18 (İleri / opsiyonel) — Kemometri / Chemometrics

Kaynak [D] 6, 8 ve 9. Bu konular hesap makinesine değil, açıklama kartı ve küçük
araçlara uygundur:

- Çok değişkenli kalibrasyon (CLS/ILS), koşul sayısı [D 6.4, 6.80]
- PCA, küme analizi, diskriminant analizi [D 8.3]
- Analitik bilgi içeriği [D 9.1–9.21]
- Yapay sinir ağlarıyla kalibrasyon [D 6.5]

Bu modülün ilk sürümlere alınmaması önerilir.

---

## 4. Özet ve sürüm planı

| # | Modül | Yaklaşık hesaplayıcı sayısı | Öncelik |
|---|---|---|---|
| 0 | Araçlar ve tablolar | 11 | **v1** |
| 1 | Derişim ve çözeltiler | 13 | **v1** |
| 2 | Hacimsel hesaplar | 6 | **v1** |
| 3 | İstatistik | 19 | **v1** |
| 4 | Kalibrasyon | 15 | **v1** |
| 8 | Asit–baz | 13 | **v1** |
| 10 | Gravimetri ve çözünürlük | 9 | **v1** |
| 12 | Moleküler spektroskopi (Beer, floresans, temel dönüşümler) | 21 | **v1** (ilk 9 satır) / v2 |
| 7 | Denge ve aktivite | 8 | v2 |
| 9 | Titrasyon eğrileri | 16 | v2 |
| 11 | Elektrokimya | 17 | v2 |
| 15 | Ekstraksiyon ve iyon değiştirme | 10 | v2 |
| 16 | Kromatografi ve elektroforez | 18 | v2 |
| 5 | Kalite güvencesi ve belirsizlik | 14 | v3 |
| 6 | Örnekleme | 5 | v3 |
| 13 | Atomik spektroskopi ve X-ışını | 9 | v3 |
| 14 | Kütle spektrometrisi | 7 | v3 |
| 17 | Kinetik, radyokimya, termal analiz | 10 | v3 |
| 18 | Kemometri | — | Opsiyonel |
| | **Toplam** | **~220 hesaplayıcı + tablolar** | |

**v1 (~100 araç):** Lisans düzeyindeki "Analitik Kimya I" dersinin hesaplarının hemen hepsini
kapsar.
**v2:** "Analitik Kimya II / Enstrümantal Analiz" derslerini kapsar.
**v3:** Laboratuvar profesyonelleri için kalite güvencesi ve ileri teknikler.

---

## 5. Telif ve içerik notu

- Eşitliklerin kendisi telif koruması altında değildir. Ancak kitaplardaki açıklama
  metinleri, şekiller ve çözümlü örnekler telif kapsamındadır.
- Uygulamadaki "Ne işe yarar" metinleri ve örnekler **özgün olarak yazılmalıdır.**
  Kitaplar yalnızca kaynak olarak gösterilmelidir.
- Harvey'nin kitabı CC BY-NC-SA 4.0 lisanslıdır. Atıfla uyarlanabilir, ancak **ticari
  olmayan** kullanım şartı vardır. Uygulama ücretli olacaksa ya da reklam içerecekse bu
  metinler de özgün yazılmalıdır.

---

## 6. Sonraki adımlar

1. Modül listesinin ve v1 kapsamının onaylanması
2. Teknoloji seçimi (Flutter veya React Native/Expo)
3. Eşitlik veri şemasının (JSON) kesinleştirilmesi ve v1 eşitliklerinin TR/EN olarak
   girilmesi
4. Formül çözücü bileşeni (herhangi bir değişken için sayısal çözüm), veri seti aracı ve
   grafik bileşenlerinin geliştirilmesi
5. Her hesaplayıcının kitaplardaki çözümlü örneklerle test edilmesi (birim testleri)

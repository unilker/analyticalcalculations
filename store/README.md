# Mağaza materyalleri / Store materials

## Görseller

| Klasör | Boyut | Kullanım |
|---|---|---|
| `graphics/screenshots/play/{tr,en}/` | 1080 × 2160 | Google Play telefon ekran görüntüleri (en/boy oranı 2:1) ve kimyager.net uygulama sayfası |
| `graphics/screenshots/iphone/{tr,en}/` | 1290 × 2796 | App Store, iPhone 6,9 inç |
| `graphics/screenshots/ipad/{tr,en}/` | 2064 × 2752 | App Store, iPad 13 inç (tablet desteği açık olduğu için zorunlu); Google Play tablet |
| `graphics/feature-graphic-{tr,en}.png` | 1024 × 500 | Google Play tanıtım görseli |

Ekranlar: 01 ana sayfa · 02 formül hesaplayıcı (Beer–Lambert) · 03 EDTA titrasyon eğrisi · 04 "Daha fazla bilgi"
(seyreltme) · 05 iki ortalama t-testi · 06 molar kütle · 07 kontrol grafiği. Görüntüler uygulamanın web derlemesinden
Playwright ile alındı; içerik değişirse yeniden üretilmelidir.

## Gizlilik politikası adresi

- TR: https://kimyager.net/uygulamalar/analitik-kimya-hesaplayici/gizlilik/
- EN: https://kimyager.net/en/apps/analytical-chemistry-calculator/privacy/

Metin `../PRIVACY.md` ile aynıdır.

## Mağaza formları için yanıtlar

- **Kategori:** Eğitim (Education). **Fiyat:** Ücretsiz; reklam ve uygulama içi satın alma yok.
- **Google Play › Veri güvenliği:** Uygulama kullanıcı verisi toplamaz veya paylaşmaz. Güncelleme isteğindeki rastgele
  kurulum kimliği, uygulamanın çalışması için gereken ve kişiyle ilişkilendirilmeyen teknik veridir.
- **App Store › App Privacy:** Expo belgeleri, `expo-updates` kullanan uygulamalar için "Crash Data" (uygulama
  işlevselliği amaçlı, kimliğe bağlı değil, izleme yok) beyan edilmesini önerir.
- **Şifreleme:** `usesNonExemptEncryption: false` app.json'da tanımlı; ayrıca soru sorulmaz.
- **Yaş derecelendirmesi:** Uygunsuz içerik yok (Play: Herkes / App Store: 4+).

## Mağaza metinleri

### Türkçe

- **Ad (≤ 30):** Analitik Kimya Hesaplayıcı
- **Play kısa açıklama (≤ 80):** 214 analitik kimya hesaplayıcısı: derişim, titrasyon, istatistik, spektroskopi
- **App Store alt başlık (≤ 30):** Derişimden kromatografiye
- **App Store anahtar kelimeler (≤ 100):** kimya,analitik,titrasyon,molarite,pH,tampon,spektroskopi,kromatografi,istatistik,kalibrasyon,lab

**Açıklama:**

Analitik Kimya Hesaplayıcı, analitik kimya ders kitaplarındaki eşitlikleri konu bazlı, kullanımı kolay
hesaplayıcılara dönüştürür. Lisans öğrencileri, araştırma görevlileri ve laboratuvar çalışanları için hazırlandı.

• 18 modülde 214 araç: derişim ve çözeltiler, hacimsel analiz, gravimetri, asit–baz ve tamponlar, denge ve aktivite,
titrasyon eğrileri, elektrokimya, spektroskopi, atomik spektroskopi ve X-ışınları, kütle spektrometrisi, ekstraksiyon,
kromatografi ve elektroforez, istatistik, kalibrasyon, kalite güvencesi ve belirsizlik, örnekleme, kinetik ve radyokimya.
• Herhangi bir değişkeni bilinmeyen seçin; birimleri değiştirin; sonuç siz yazdıkça hesaplansın.
• Asit–baz, EDTA, çöktürme ve redoks titrasyon eğrileri; dönüm noktası ve indikatör önerisi.
• t, F, Q ve Grubbs testleri, ANOVA, doğrusal ve ağırlıklı regresyon, LOD/LOQ, standart ekleme, belirsizlik bütçesi,
kontrol grafiği.
• Her araç için "Daha fazla bilgi": kavram, eşitliğin anlamı, kullanım sınırları, adım adım çözümlü örnek ve sık
yapılan hatalar.
• Ka, Ksp, E°, EDTA oluşum sabitleri, atom kütleleri ve kritik değer tabloları; molar kütle hesaplayıcı.
• Her kartta kaynak kitap ve denklem numarası. Eşitlikler kitap örnekleriyle 1000'den fazla otomatik testle doğrulanır.
• Türkçe ve İngilizce; telefon, tablet ve katlanabilir ekranlar için uyarlanmış düzen.
• Ücretsiz, reklamsız, hesap gerektirmez; hesaplamalar çevrimdışı çalışır. Açık kaynak (Apache 2.0).

Geliştirici: Dr. İlker ÜN · kimyager.net

### English

- **Name (≤ 30):** Analytical Chem Calculator — "Analytical Chemistry Calculator" is 31 characters, one over the limit.
- **Play short description (≤ 80):** 214 analytical chemistry calculators: solutions, titrations, statistics, spectra
- **App Store subtitle (≤ 30):** Solutions to chromatography
- **App Store keywords (≤ 100):** chemistry,analytical,titration,molarity,pH,buffer,spectroscopy,chromatography,statistics,lab

**Description:**

Analytical Chemistry Calculator turns the equations of analytical chemistry textbooks into easy, topic-based
calculators. It is made for undergraduate students, teaching assistants and laboratory staff.

• 214 tools in 18 modules: concentration and solutions, volumetric analysis, gravimetry, acid–base and buffers,
equilibrium and activity, titration curves, electrochemistry, spectroscopy, atomic spectroscopy and X-rays, mass
spectrometry, extraction, chromatography and electrophoresis, statistics, calibration, quality assurance and
uncertainty, sampling, kinetics and radiochemistry.
• Pick any variable as the unknown, change units, and see the result as you type.
• Acid–base, EDTA, precipitation and redox titration curves with end-point detection and indicator suggestions.
• t, F, Q and Grubbs tests, ANOVA, linear and weighted regression, LOD/LOQ, standard addition, uncertainty budget,
control charts.
• "More details" for every tool: the concept, what the equation means, when to use it, a step-by-step worked example
and common mistakes.
• Tables of Ka, Ksp, E°, EDTA formation constants, atomic weights and critical values; a molar mass calculator.
• Every card cites the textbook and equation number. The equations are checked against textbook examples by more than
1000 automated tests.
• Turkish and English; layouts for phones, tablets and foldables.
• Free, no ads, no account; calculations work offline. Open source (Apache 2.0).

Developer: Dr. İlker ÜN · kimyager.net/en

# Analitik Kimya Hesaplayıcı / Analytical Chemistry Calculator

Analitik kimya kitaplarındaki eşitlikleri konu bazlı, Türkçe/İngilizce hesaplayıcılara dönüştüren
React Native (Expo) mobil uygulaması. Arayüz TÜBİTAK kurumsal renkleriyle (kırmızı #E30613,
lacivert #154377, sarı #F7B500) tasarlanmıştır.

![Ekran görüntüleri](docs/ekran-goruntuleri.png)

## v1 kapsamı (65 araç)

| Modül | İçerik |
|---|---|
| Derişim ve Çözeltiler | mol, molarite, molalite, normalite, %, ppm/ppb, seyreltme, çözelti hazırlama, %+yoğunluk → M, titre |
| Hacimsel Analiz | titrasyon stokiyometrisi, % analit, ayarlama, geri titrasyon, titrasyon hatası, Kjeldahl |
| İstatistik | tanımlayıcı istatistik ve güven aralığı, t-testleri (3 tür), F-testi, Q-testi, Grubbs, ANOVA, belirsizlik yayılımı, normal dağılım, güç analizi |
| Kalibrasyon | doğrusal/ağırlıklı regresyon ve bilinmeyen tayini, tek ve çok noktalı standart ekleme, iç standart, LOD/LOQ, S/N, seçicilik, Sandell |
| Asit–Baz | pH dönüştürücü, kuvvetli/zayıf asit-baz, hidroliz, Henderson–Hasselbalch, tampon kapasitesi, amfiprotik türler, kan pH'ı, α-fraksiyonu ve log C–pH diyagramları |
| Gravimetri ve Çözünürlük | gravimetrik faktör, Ksp ↔ çözünürlük, ortak iyon, pH etkisi, bağıl aşırı doygunluk, kütle kaybı |
| Spektroskopi | λ–ν–ν̃–E dönüşümleri, %T ↔ A, Beer–Lambert, iki bileşenli karışım, fotometrik hata, floresans doğrusallığı |
| Araçlar ve Tablolar | molar kütle hesaplayıcı, Ka/pKa, Ksp, atom kütleleri, fiziksel sabitler, kritik t/F/Q/G değerleri |

Formül tipindeki her araçta **herhangi bir değişken bilinmeyen seçilebilir**, birimler değiştirilebilir ve sonuç
yazdıkça hesaplanır. Her kartta kaynak kitap ve denklem numarası verilir (bkz. [docs/icerik-plani.md](docs/icerik-plani.md)).

## Çalıştırma

```bash
npm install
npx expo start        # QR kodu Expo Go ile okutun (Android/iOS)
npx expo start --web  # tarayıcıda
```

## Geliştirme

```bash
npm test              # Jest: kitap örnekleri, kritik değer tabloları, molar kütle
npm run typecheck     # TypeScript
npm run lint          # ESLint (eslint-config-expo)
```

### Klasör yapısı

```
src/
  app/            Expo Router ekranları (ana sayfa, modül, araç, ayarlar)
  components/     Ortak arayüz bileşenleri, formül hesaplayıcı, grafik, özel araçlar
  core/           Sayısal çözücü, birimler, istatistik, asit-baz, molar kütle, biçimlendirme
  data/formulas/  Modül başına eşitlik tanımları (TR/EN metin, değişkenler, kaynak, örnek)
  data/tables/    Ka, Ksp, atom kütleleri, fiziksel sabitler
  i18n/           Dil, anlamlı rakam ve favori ayarları
  theme/          TÜBİTAK renk paleti
```

### Yeni eşitlik eklemek

`src/data/formulas/` altındaki ilgili dosyaya bir `formula({...})` kaydı ekleyin. `equation` alanı
(sol taraf − sağ taraf) yeterlidir: çözücü herhangi bir bilinmeyeni sayısal olarak bulur. Hız ve
kesinlik için `solve` ile kapalı çözümler de verilebilir. `examples` alanına kitaptan bir örnek
eklediğinizde test paketi eşitliği otomatik olarak doğrular (kapalı çözüm, sayısal çözüm ve tüm
değişkenler için geri dönüş testi).

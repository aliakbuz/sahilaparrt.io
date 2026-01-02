export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Samsun Tatil Rehberi: Deniz, Tarih ve Doğa',
    slug: 'samsun-tatil-rehberi',
    excerpt: 'Samsun\'da tatil yapmayı planlıyorsanız, bu kapsamlı rehber size şehrin en güzel yerlerini, plajlarını, tarihi mekanlarını ve mutlaka görülmesi gereken yerleri anlatıyor.',
    content: `
# Samsun Tatil Rehberi: Deniz, Tarih ve Doğa

Samsun, Karadeniz'in incisi, hem deniz hem de doğa severler için mükemmel bir tatil destinasyonu. Bu rehberde Samsun'da yapılacaklar, görülecek yerler ve deneyimlenmesi gereken aktiviteler hakkında detaylı bilgiler bulacaksınız.

## Samsun'un En Güzel Plajları

Samsun, uzun kumsalları ve temiz denizi ile ünlüdür. En popüler plajlar:

### Atakum Sahili
Atakum, Samsun'un en popüler sahil bölgesidir. 7 km uzunluğundaki kumsalı, yürüyüş yolları ve kafeleri ile hem gündüz hem gece canlı bir atmosfere sahiptir.

### Fener Plajı
Şehir merkezine yakın, aileler için ideal bir plaj. Sakin suları ve temiz kumsalı ile öne çıkar.

### Çatalçam Plajı
Doğa içinde, şehir gürültüsünden uzak bir plaj arayanlar için mükemmel. Çam ağaçları ile çevrili bu plaj, huzurlu bir tatil deneyimi sunar.

## Tarihi Mekanlar

### Bandırma Vapuru Müzesi
Mustafa Kemal Atatürk'ün Samsun'a çıktığı Bandırma Vapuru'nun replikası, milli mücadele tarihini anlatan önemli bir müzedir.

### Amisos Tepesi
Antik dönemden kalma mezarlar ve şehir manzarası ile Amisos Tepesi, hem tarih hem de manzara severler için görülmesi gereken bir yer.

### Arkeoloji ve Etnografya Müzesi
Samsun'un zengin tarihini ve kültürünü yansıtan eserlerin sergilendiği müze, şehrin geçmişini anlamak için önemli bir durak.

## Doğa ve Aktivite

### Ladik Gölü
Şehir merkezine yaklaşık 1 saat mesafede, doğa içinde huzurlu bir göl. Yürüyüş, piknik ve fotoğraf çekimi için ideal.

### Tekkeköy Mağaraları
Tarih öncesi dönemden kalma mağaralar, doğa yürüyüşü severler için ilginç bir rota.

### Çarşamba Ovası
Yeşil doğası ve tarım alanları ile göz alıcı bir bölge. Doğa fotoğrafçılığı için mükemmel.

## Samsun Mutfağı

Samsun mutfağı, Karadeniz'in zengin lezzetlerini yansıtır:

- **Pide**: Samsun'un meşhur pidesi, özellikle kıymalı ve peynirli çeşitleri ile ünlü
- **Hamsi**: Taze hamsi, Karadeniz'in vazgeçilmez lezzeti
- **Lahana Sarması**: Geleneksel Karadeniz yemeği
- **Mısır Ekmeği**: Yöresel lezzet

## Konaklama İpuçları

Samsun'da konaklama seçenekleri oldukça çeşitlidir. Sahile yakın daireler, özellikle kısa süreli konaklamalar için idealdir. Denize yakın bir konaklama tercih ederseniz, hem plajlara hem de şehir merkezine kolay ulaşım sağlayabilirsiniz.

## En İyi Ziyaret Zamanı

Samsun'u ziyaret etmek için en iyi zaman **Haziran-Eylül** aylarıdır. Bu dönemde hava sıcaklıkları denize girmek için idealdir ve şehir canlı bir atmosfere sahiptir.

## Sonuç

Samsun, deniz, tarih ve doğa severler için mükemmel bir tatil destinasyonu. Uzun kumsalları, zengin tarihi ve lezzetli mutfağı ile unutulmaz bir tatil deneyimi sunar. Sahile yakın konaklama seçenekleri ile şehrin tüm güzelliklerini keşfedebilirsiniz.
    `,
    author: 'Sahil Daire',
    date: '2025-01-02',
    image: '/images/hero.jpg',
    category: 'Tatil Rehberi',
    tags: ['Samsun', 'Tatil', 'Plaj', 'Gezi', 'Karadeniz'],
    readTime: 8,
  },
  {
    id: '2',
    title: 'Sahil Daire Kiralama İpuçları: Doğru Seçim Nasıl Yapılır?',
    slug: 'sahil-daire-kiralama-ipuclari',
    excerpt: 'Sahil kenarında daire kiralamak isteyenler için kapsamlı bir rehber. Doğru daireyi seçmek, rezervasyon yapmak ve konforlu bir konaklama için bilmeniz gerekenler.',
    content: `
# Sahil Daire Kiralama İpuçları: Doğru Seçim Nasıl Yapılır?

Sahil kenarında bir daire kiralamak, tatil deneyiminizi unutulmaz kılar. Ancak doğru seçimi yapmak için dikkat etmeniz gereken birçok faktör var. Bu rehberde, ideal sahil dairesini bulmak için bilmeniz gereken her şeyi bulacaksınız.

## Konum: En Önemli Faktör

### Denize Mesafe
Sahil daire kiralarken en önemli faktör denize olan mesafedir. İdeal bir sahil dairesi:
- **0-50 metre**: Mükemmel - Denize yürüme mesafesi
- **50-200 metre**: İyi - Kısa bir yürüyüş mesafesi
- **200+ metre**: Kabul edilebilir - Ancak plaja ulaşım daha uzun

### Çevre Olanakları
Dairenin çevresinde şunlar olmalı:
- Market ve bakkallar
- Restoran ve kafeler
- Eczane
- Toplu taşıma durakları
- Plaj ve sahil tesisleri

## Daire Özellikleri

### Temel İhtiyaçlar
Kiraladığınız dairede mutlaka olması gerekenler:

1. **Wi-Fi**: Günümüzde vazgeçilmez
2. **Televizyon**: Dinlenme zamanları için
3. **Mutfak Donanımı**: Yemek yapabilmek için
4. **Temizlik Malzemeleri**: Temel hijyen için
5. **Çarşaf ve Havlu**: Konforlu konaklama için

### Bonus Özellikler
- Deniz manzaralı balkon
- Klima veya ısıtma sistemi
- Çamaşır makinesi
- Otopark
- Güvenlik

## Rezervasyon Süreci

### Önceden Rezervasyon
Özellikle yaz aylarında erken rezervasyon yapmak önemlidir:
- **3-6 ay önceden**: En iyi fiyatlar ve seçenekler
- **1-3 ay önceden**: Hala iyi seçenekler mevcut
- **Son dakika**: Sınırlı seçenek ve yüksek fiyatlar

### Rezervasyon Yaparken Sorulacak Sorular
1. Müsaitlik durumu nedir?
2. Fiyat ne kadar? (Gizli ücret var mı?)
3. Check-in ve check-out saatleri?
4. İptal politikası nedir?
5. Ödeme nasıl yapılacak?
6. Acil durumlarda nasıl ulaşılır?

## Fiyatlandırma

### Fiyatı Etkileyen Faktörler
- **Mevsim**: Yaz ayları daha pahalı
- **Konum**: Denize yakınlık fiyatı artırır
- **Özellikler**: Dairenin donanımı
- **Süre**: Uzun süreli kiralama indirimli olabilir

### Bütçe Planlaması
Daire kirasına ek olarak düşünmeniz gerekenler:
- Temizlik ücreti (varsa)
- Güvenlik depozitosu
- Ek hizmetler (varsa)
- Ulaşım masrafları

## Konaklama Süresi

### Günlük Kiralama
- Esneklik sağlar
- Kısa süreli konaklamalar için ideal
- Genellikle daha yüksek günlük fiyat

### Haftalık/Aylık Kiralama
- Daha ekonomik
- Uzun süreli konaklamalar için
- Genellikle indirimli fiyatlar

## Güvenlik ve Temizlik

### Güvenlik Kontrol Listesi
- Daire güvenli bir bölgede mi?
- Kapı ve pencereler sağlam mı?
- Acil çıkış yolu var mı?
- Güvenlik kamerası var mı?

### Temizlik Standartları
- Daire temiz mi?
- Yatak çarşafları değiştirilmiş mi?
- Banyo hijyenik mi?
- Mutfak kullanıma hazır mı?

## İletişim ve Destek

### Rezervasyon Öncesi
- WhatsApp veya telefon ile iletişim kurun
- Sorularınızı sorun
- Fotoğraflar isteyin (gerekirse)

### Konaklama Sırasında
- Acil durumlar için iletişim bilgileri
- Sorun çıkarsa hemen bildirin
- Öneriler için danışın

## Sonuç

Doğru sahil dairesini seçmek, tatil deneyiminizi belirler. Konum, özellikler, fiyat ve güvenlik faktörlerini dikkate alarak karar verin. Erken rezervasyon yapmak ve iletişimde kalmak, sorunsuz bir konaklama için önemlidir.

Sahil Daire olarak, denize 25 metre mesafede, modern ve konforlu dairemizle size en iyi konaklama deneyimini sunmayı hedefliyoruz.
    `,
    author: 'Sahil Daire',
    date: '2025-01-01',
    image: '/images/about.jpg',
    category: 'Rehber',
    tags: ['Kiralama', 'İpuçları', 'Rehber', 'Konaklama'],
    readTime: 6,
  },
  {
    id: '3',
    title: 'Samsun\'da Gezilecek Yerler: Görmeden Dönmeyin',
    slug: 'samsun-gezilecek-yerler',
    excerpt: 'Samsun\'da mutlaka görülmesi gereken yerler, müzeler, doğal güzellikler ve aktiviteler. Şehrin en önemli turistik noktalarını keşfedin.',
    content: `
# Samsun'da Gezilecek Yerler: Görmeden Dönmeyin

Samsun, zengin tarihi, doğal güzellikleri ve kültürel mirası ile Karadeniz'in önemli turistik şehirlerinden biridir. Bu rehberde, Samsun'da mutlaka görülmesi gereken yerleri keşfedeceksiniz.

## Tarihi Mekanlar

### Bandırma Vapuru ve Milli Mücadele Parkı
Mustafa Kemal Atatürk'ün 19 Mayıs 1919'da Samsun'a çıktığı Bandırma Vapuru'nun replikası, milli mücadelenin başlangıcını simgeler. Park içinde anıt ve müze bulunur.

**Ziyaret Bilgileri:**
- Açılış: Her gün 08:00-17:00
- Giriş: Ücretsiz
- Konum: İlkadım ilçesi

### Amisos Tepesi
Antik dönemden kalma mezarlar ve şehir manzarası ile Amisos Tepesi, hem tarih hem de manzara severler için görülmesi gereken bir yer. Tepeden Samsun'un panoramik manzarasını izleyebilirsiniz.

### Arkeoloji ve Etnografya Müzesi
Samsun'un zengin tarihini ve kültürünü yansıtan eserlerin sergilendiği müze, şehrin geçmişini anlamak için önemli bir durak.

## Doğal Güzellikler

### Atakum Sahili
7 km uzunluğundaki kumsalı, yürüyüş yolları ve kafeleri ile Atakum Sahili, hem gündüz hem gece canlı bir atmosfere sahiptir. Güneşin batışını izlemek için mükemmel bir yer.

### Ladik Gölü
Şehir merkezine yaklaşık 1 saat mesafede, doğa içinde huzurlu bir göl. Yürüyüş, piknik ve fotoğraf çekimi için ideal. Özellikle sonbahar aylarında renkli manzarası ile dikkat çeker.

### Tekkeköy Mağaraları
Tarih öncesi dönemden kalma mağaralar, doğa yürüyüşü severler için ilginç bir rota. Mağaralar içinde antik dönemden kalma izler görebilirsiniz.

### Çarşamba Ovası
Yeşil doğası ve tarım alanları ile göz alıcı bir bölge. Doğa fotoğrafçılığı için mükemmel. Özellikle ilkbahar ve yaz aylarında yeşil manzarası ile büyüler.

## Kültürel Mekanlar

### Samsun Kent Müzesi
Şehrin tarihini, kültürünü ve günlük yaşamını anlatan interaktif müze. Modern müzecilik anlayışı ile tasarlanmış, ziyaretçiler için eğitici ve eğlenceli bir deneyim sunar.

### Gazi Müzesi
Atatürk'ün Samsun'da kaldığı ev, müze olarak ziyarete açıktır. Milli mücadele dönemine ait eserler ve belgeler sergilenir.

### Onur Anıtı
Samsun'un simgesi olan Onur Anıtı, şehir merkezinde yer alır. Atatürk'ün Samsun'a çıkışını simgeleyen önemli bir anıttır.

## Aktivite ve Eğlence

### Sahil Yürüyüşü
Atakum sahilinde uzun yürüyüş yolları, bisiklet yolları ve dinlenme alanları bulunur. Sabah erken saatlerde veya akşam güneş batarken yürüyüş yapmak harika bir deneyimdir.

### Plaj Aktiviteleri
Samsun'un plajlarında:
- Denize girme
- Güneşlenme
- Plaj voleybolu
- Su sporları (bazı plajlarda)

### Balık Tutma
Karadeniz'in zengin balık çeşitliliği, balık tutma severler için mükemmel fırsatlar sunar. Sahil boyunca birçok balık tutma noktası bulunur.

## Alışveriş ve Yeme-İçme

### Samsun Pazarı
Yöresel ürünler, taze sebze-meyve ve balık için ideal. Geleneksel pazar deneyimi yaşamak isteyenler için mükemmel.

### Sahil Restoranları
Taze balık ve deniz ürünleri için sahil boyunca birçok restoran bulunur. Özellikle akşam yemekleri için romantik bir atmosfer sunar.

### Yöresel Lezzetler
- Samsun pidesi
- Taze hamsi
- Karadeniz mutfağı
- Mısır ekmeği

## Gezi Rotası Önerileri

### 1 Günlük Gezi
- Sabah: Bandırma Vapuru ve Milli Mücadele Parkı
- Öğle: Atakum Sahili ve yemek
- Öğleden sonra: Amisos Tepesi
- Akşam: Sahil yürüyüşü ve gün batımı

### 2 Günlük Gezi
- 1. Gün: Tarihi mekanlar ve müzeler
- 2. Gün: Doğal güzellikler ve plaj

### 3+ Günlük Gezi
- Şehir merkezi
- Çevre ilçeler (Ladik, Tekkeköy)
- Doğa yürüyüşleri
- Plaj aktiviteleri

## Ulaşım İpuçları

### Şehir İçi Ulaşım
- Otobüs: Şehir içi ulaşım için ekonomik
- Taksi: Daha hızlı ve konforlu
- Araç kiralama: Esneklik için ideal

### Sahile Yakın Konaklama
Sahile yakın bir daire kiralayarak, hem plajlara hem de şehir merkezine kolay ulaşım sağlayabilirsiniz.

## Sonuç

Samsun, tarih, doğa ve kültür severler için mükemmel bir destinasyon. Bandırma Vapuru'ndan Ladik Gölü'ne, Atakum Sahili'nden antik mağaralara kadar birçok görülmesi gereken yer var. Sahile yakın konaklama ile şehrin tüm güzelliklerini keşfedebilir, unutulmaz bir tatil deneyimi yaşayabilirsiniz.
    `,
    author: 'Sahil Daire',
    date: '2024-12-30',
    image: '/images/gallery-1.jpg',
    category: 'Gezi',
    tags: ['Samsun', 'Gezi', 'Turizm', 'Tarih', 'Doğa'],
    readTime: 10,
  },
];


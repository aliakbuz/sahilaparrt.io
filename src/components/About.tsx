import { Wifi, Tv, UtensilsCrossed, Sparkles, Bed, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Bed,
      title: '1+1 Daire',
      description: 'Geniş ve ferah yatak odası ile rahat bir konaklama'
    },
    {
      icon: Tv,
      title: 'Android TV',
      description: 'Netflix, YouTube ve daha fazlası'
    },
    {
      icon: Wifi,
      title: 'Ücretsiz Wi-Fi',
      description: 'Yüksek hızlı internet bağlantısı'
    },
    {
      icon: UtensilsCrossed,
      title: 'Full Donanımlı Mutfak',
      description: 'Tüm mutfak gereçleri ve beyaz eşyalar'
    },
    {
      icon: Sparkles,
      title: 'Temiz ve Hijyenik',
      description: 'Her konuktan sonra profesyonel temizlik'
    },
    {
      icon: Users,
      title: 'Kısa Süreli Konaklama',
      description: 'Günlük kiralama imkanı'
    }
  ];

  return (
    <section id="hakkinda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Daire Hakkında
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Konforlu ve modern dairemiz, tatil veya iş seyahatleriniz için
            ihtiyacınız olan tüm olanaklara sahiptir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Neden Bizi Tercih Etmelisiniz?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Denize yürüme mesafesinde, 25 metre uzaklıkta</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Modern ve güncel tasarıma sahip</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Her türlü ihtiyacınız için tam donanımlı</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Temizlik ve hijyen standartlarına uygun</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Esnek rezervasyon seçenekleri</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/about.jpg"
                alt="Daire iç mekan"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

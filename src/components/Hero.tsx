import { MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Sahile 25 Metre Mesafede</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Denize Sıfır<br />
              <span className="text-blue-600">Günlük Kiralık 1+1 Daire</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Modern ve konforlu dairemiz, denize sadece 25 metre mesafede konumlanmış olup,
              kısa süreli konaklamalarınız için ideal bir seçenektir. Temiz, hijyenik ve
              tüm ihtiyaçlarınızı karşılayacak donanıma sahiptir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/905396304955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp ile İletişime Geç</span>
              </a>

              <a
                href="tel:+905396304955"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Hemen Ara</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Hızlı Yanıt</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Uygun Fiyat</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="Modern deniz manzaralı daire"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-semibold">Modern ve Konforlu</p>
                <p className="text-white/90 text-sm">Deniz kenarında huzurlu bir konaklama</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Sahile</p>
              <p className="text-3xl font-bold">25m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Müsaitlik ve fiyat bilgisi için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                En hızlı yanıt için WhatsApp'tan yazın
              </p>
              <a
                href="https://wa.me/905396304955"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ile Mesaj Gönder</span>
              </a>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Genellikle 10 dakika içinde yanıt veririz</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 mb-6">
                Hemen arayarak bilgi alabilirsiniz
              </p>
              <a
                href="tel:+905396304955"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen Ara</span>
              </a>
              <p className="mt-4 text-gray-700 font-medium">
                +90 539 630 49 55
              </p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>Her gün 09:00 - 22:00 arası</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-blue-600 rounded-2xl p-8 text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Rezervasyon Yapmaya Hazır mısınız?</h3>
          <p className="text-blue-100 mb-6">
            Müsaitlik durumu ve güncel fiyat bilgisi için hemen iletişime geçin.
            Size özel tekliflerimiz hakkında bilgi alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905396304955"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+905396304955"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Telefon</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

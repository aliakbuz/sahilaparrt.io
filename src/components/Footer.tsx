import { Link } from 'react-router-dom';
import { Home, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl">Sahil Daire</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Denize 25 metre mesafede, modern ve konforlu günlük kiralık 1+1 daire.
              Unutulmaz bir tatil deneyimi için bize ulaşın.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">Anasayfa</Link>
              </li>
              <li>
                <Link to="/hakkinda" className="hover:text-white transition">Daire Hakkında</Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-white transition">Galeri</Link>
              </li>
              <li>
                <Link to="/konum" className="hover:text-white transition">Konum</Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition">İletişim</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Sahile 25 metre mesafede</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+905396304955" className="hover:text-white transition">
                  +90 539 630 49 55
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="https://wa.me/905396304955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp ile İletişim
                </a>
              </li>
            </ul>

            <div className="mt-6 flex space-x-3">
              <a
                href="https://wa.me/905396304955"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+905396304955"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sahil Daire. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

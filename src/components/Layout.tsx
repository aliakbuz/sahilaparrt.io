import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Home } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">Sahil Daire</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`transition ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Anasayfa
              </Link>
              <Link
                to="/hakkinda"
                className={`transition ${
                  isActive('/hakkinda') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Daire Hakkında
              </Link>
              <Link
                to="/galeri"
                className={`transition ${
                  isActive('/galeri') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Galeri
              </Link>
              <Link
                to="/konum"
                className={`transition ${
                  isActive('/konum') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Konum
              </Link>
              <Link
                to="/iletisim"
                className={`transition ${
                  isActive('/iletisim') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                İletişim
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+905396304955"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Ara</span>
              </a>
              <a
                href="https://wa.me/905396304955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 transition ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Anasayfa
              </Link>
              <Link
                to="/hakkinda"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 transition ${
                  isActive('/hakkinda') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Daire Hakkında
              </Link>
              <Link
                to="/galeri"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 transition ${
                  isActive('/galeri') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Galeri
              </Link>
              <Link
                to="/konum"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 transition ${
                  isActive('/konum') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Konum
              </Link>
              <Link
                to="/iletisim"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-2 transition ${
                  isActive('/iletisim') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                İletişim
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="tel:+905396304955"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ara</span>
                </a>
                <a
                  href="https://wa.me/905396304955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}


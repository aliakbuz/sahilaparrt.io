import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Home } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">Sahil Daire</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('anasayfa')} className="text-gray-700 hover:text-blue-600 transition">
                Anasayfa
              </button>
              <button onClick={() => scrollToSection('hakkinda')} className="text-gray-700 hover:text-blue-600 transition">
                Daire Hakkında
              </button>
              <button onClick={() => scrollToSection('galeri')} className="text-gray-700 hover:text-blue-600 transition">
                Galeri
              </button>
              <button onClick={() => scrollToSection('konum')} className="text-gray-700 hover:text-blue-600 transition">
                Konum
              </button>
              <button onClick={() => scrollToSection('iletisim')} className="text-gray-700 hover:text-blue-600 transition">
                İletişim
              </button>
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
              <button
                onClick={() => scrollToSection('anasayfa')}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Anasayfa
              </button>
              <button
                onClick={() => scrollToSection('hakkinda')}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Daire Hakkında
              </button>
              <button
                onClick={() => scrollToSection('galeri')}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('konum')}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Konum
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                İletişim
              </button>
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
        <Hero />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

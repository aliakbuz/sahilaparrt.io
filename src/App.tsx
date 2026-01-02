import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import StructuredData from './components/StructuredData';
import SEO from './components/SEO';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <StructuredData />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO />
                <Hero />
              </>
            }
          />
          <Route
            path="/hakkinda"
            element={
              <>
                <SEO
                  title="Daire Hakkında - Özellikler ve Olanaklar"
                  description="Modern ve konforlu 1+1 dairemizin özellikleri, olanakları ve neden bizi tercih etmelisiniz hakkında detaylı bilgiler."
                  url="https://samsunapart.com/hakkinda"
                />
                <About />
                <FAQ />
              </>
            }
          />
          <Route
            path="/galeri"
            element={
              <>
                <SEO
                  title="Foto Galeri - Daire Görselleri"
                  description="Dairemizin farklı bölümlerinden fotoğraflar. Salon, yatak odası, mutfak ve banyo görselleri."
                  url="https://samsunapart.com/galeri"
                />
                <Gallery />
              </>
            }
          />
          <Route
            path="/konum"
            element={
              <>
                <SEO
                  title="Konum - Sahile 25 Metre Mesafede"
                  description="Dairemizin konumu, harita ve çevredeki olanaklar. Sahile sadece 25 metre mesafede, merkezi konumda."
                  url="https://samsunapart.com/konum"
                />
                <Location />
              </>
            }
          />
          <Route
            path="/iletisim"
            element={
              <>
                <SEO
                  title="İletişim - Rezervasyon ve Bilgi"
                  description="Müsaitlik ve fiyat bilgisi için bizimle iletişime geçin. WhatsApp ve telefon ile hızlı yanıt."
                  url="https://samsunapart.com/iletisim"
                />
                <Contact />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <SEO
                  title="Blog - Samsun Tatil Rehberi ve İpuçları"
                  description="Samsun tatil rehberi, konaklama ipuçları, gezilecek yerler ve şehir hakkında güncel içerikler."
                  url="https://samsunapart.com/blog"
                />
                <Blog />
              </>
            }
          />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

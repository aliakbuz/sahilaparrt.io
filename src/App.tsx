import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hakkinda" element={<About />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/konum" element={<Location />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

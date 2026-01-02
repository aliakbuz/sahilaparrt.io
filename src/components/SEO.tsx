import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Sahile 25 Metre Günlük Kiralık 1+1 Daire | Deniz Manzaralı Konaklama',
  description = 'Sahile sadece 25 metre mesafede günlük kiralık 1+1 daire. Modern, temiz ve full donanımlı. Android TV, Netflix, ücretsiz Wi-Fi. Hemen rezervasyon yapın!',
  keywords = 'günlük kiralık daire, sahil daire, denize yakın konaklama, günlük kiralık ev, tatil evi, Samsun kiralık daire, sahil apart, deniz manzaralı daire',
  image = 'https://samsunapart.com/images/hero.jpg',
  url = 'https://samsunapart.com',
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes('Samsunapart') || title.includes('Sahil Daire') 
    ? title 
    : `${title} | Sahil Daire - Samsun`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sahil Daire" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sahil Daire - Samsun" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="TR-55" />
      <meta name="geo.placename" content="Samsun" />
      <meta name="geo.position" content="41.350795571304545;36.24371516755225" />
      <meta name="ICBM" content="41.350795571304545, 36.24371516755225" />
    </Helmet>
  );
}


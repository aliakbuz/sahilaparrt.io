export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://samsunapart.com/#organization',
    name: 'Sahil Daire',
    description: 'Sahile 25 metre mesafede günlük kiralık 1+1 daire. Modern, temiz ve full donanımlı konaklama.',
    url: 'https://samsunapart.com',
    telephone: '+905396304955',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Samsun',
      addressCountry: 'TR',
      streetAddress: 'Sahile 25 metre mesafede',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.350795571304545,
      longitude: 36.24371516755225,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '22:00',
    },
    image: 'https://samsunapart.com/images/hero.jpg',
    sameAs: [
      'https://wa.me/905396304955',
    ],
  };

  const accommodation = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'Sahil Daire - Günlük Kiralık 1+1 Daire',
    description: 'Denize 25 metre mesafede modern ve konforlu günlük kiralık daire.',
    image: 'https://samsunapart.com/images/hero.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Samsun',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.350795571304545,
      longitude: 36.24371516755225,
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wi-Fi',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Televizyon',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mutfak',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Denize Yakın',
        value: true,
      },
    ],
    numberOfRooms: {
      '@type': 'QuantitativeValue',
      value: 1,
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: '1+1',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sahil Daire',
    url: 'https://samsunapart.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://samsunapart.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(localBusiness)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(accommodation)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(website)}
      </script>
    </>
  );
}


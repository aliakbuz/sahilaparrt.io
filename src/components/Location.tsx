import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="konum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Konum
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sahile sadece 25 metre mesafede, merkezi konumda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sahile 25 Metre
                </h3>
                <p className="text-gray-600">
                  Dairemiz denize yürüme mesafesinde, sadece 25 metre uzaklıkta konumlanmıştır.
                  Plaja rahatça gidip gelebilirsiniz.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Merkezi Konum
                </h3>
                <p className="text-gray-600">
                  Marketlere, restoranlara ve diğer sosyal olanaklara yakın konumda.
                  İhtiyacınız olan her şey yürüme mesafesinde.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-gray-900 mb-3">Yakınınızda:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Sahil ve plaj - 25 metre</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Market ve bakkallar - Yürüme mesafesinde</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Restoranlar ve kafeler - Yakın çevre</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>Toplu taşıma - Kolay ulaşım</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=41.350795571304545,36.24371516755225&hl=tr&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Daire Konumu"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2">
              <p className="text-sm font-semibold text-gray-900">Dairemizin Konumu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

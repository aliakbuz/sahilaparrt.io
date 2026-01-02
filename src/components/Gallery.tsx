import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: '/images/gallery-1.jpg',
      title: 'Deniz Manzarası'
    },
    {
      url: '/images/gallery-2.jpg',
      title: 'Salon'
    },
    {
      url: '/images/gallery-3.jpg',
      title: 'Yatak Odası'
    },
    {
      url: '/images/gallery-4.jpg',
      title: 'Mutfak'
    },
    {
      url: '/images/gallery-5.jpg',
      title: 'Banyo'
    },
    {
      url: '/images/gallery-6.jpg',
      title: 'Genel Görünüm'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Foto Galeri
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dairemizin farklı bölümlerinden fotoğraflar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white font-semibold p-4">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">
              {images[selectedImage].title}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </section>
  );
}

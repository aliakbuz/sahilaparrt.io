import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Daire kaç kişilik?',
      answer: 'Dairemiz 1+1 olup, 2-3 kişiye kadar konforlu bir şekilde konaklayabilir. Yatak odası ve oturma alanı mevcuttur.',
    },
    {
      question: 'Günlük kiralama yapılıyor mu?',
      answer: 'Evet, günlük kiralama yapıyoruz. Minimum 1 gece konaklama şartı vardır. Daha uzun süreli konaklamalar için özel fiyatlandırma yapılabilir.',
    },
    {
      question: 'Dairede hangi olanaklar var?',
      answer: 'Dairemizde ücretsiz Wi-Fi, Android TV (Netflix dahil), tam donanımlı mutfak, banyo, yatak odası ve oturma alanı bulunmaktadır. Tüm temel ihtiyaçlarınız karşılanmaktadır.',
    },
    {
      question: 'Denize ne kadar uzaklıkta?',
      answer: 'Dairemiz sahile sadece 25 metre mesafede konumlanmıştır. Yürüyerek birkaç dakika içinde plaja ulaşabilirsiniz.',
    },
    {
      question: 'Temizlik nasıl yapılıyor?',
      answer: 'Her konuktan sonra daire profesyonel olarak temizlenir ve dezenfekte edilir. Temizlik ve hijyen standartlarına özen gösterilmektedir.',
    },
    {
      question: 'Rezervasyon nasıl yapılır?',
      answer: 'Rezervasyon için WhatsApp (+90 539 630 49 55) veya telefon ile bizimle iletişime geçebilirsiniz. Müsaitlik durumu ve fiyat bilgisi için hemen ulaşın.',
    },
    {
      question: 'Ödeme nasıl yapılır?',
      answer: 'Ödeme nakit veya banka transferi ile yapılabilir. Rezervasyon sırasında ödeme detayları paylaşılacaktır.',
    },
    {
      question: 'Erken check-in veya geç check-out mümkün mü?',
      answer: 'Müsaitlik durumuna göre erken check-in ve geç check-out imkanı sağlanabilir. Lütfen rezervasyon sırasında bu talebinizi belirtin.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600">
            Dairemiz hakkında merak ettiğiniz soruların cevapları
          </p>
        </div>

        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


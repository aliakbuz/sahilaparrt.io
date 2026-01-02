import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from './SEO';
import { marked } from 'marked';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const htmlContent = marked(post.content);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `https://samsunapart.com${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sahil Daire',
      logo: {
        '@type': 'ImageObject',
        url: 'https://samsunapart.com/images/hero.jpg',
      },
    },
    description: post.excerpt,
  };

  const shareUrl = `https://samsunapart.com/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={`https://samsunapart.com${post.image}`}
        url={shareUrl}
        type="article"
      />
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Blog'a Dön</span>
          </Link>

          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} dk okuma</span>
              </div>
              <span>•</span>
              <span>{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
          </header>

          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Yazar</p>
                <p className="font-semibold text-gray-900">{post.author}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Paylaş:</span>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  aria-label="Twitter'da paylaş"
                >
                  <Share2 className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  aria-label="Facebook'ta paylaş"
                >
                  <Share2 className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition"
                  aria-label="WhatsApp'ta paylaş"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}


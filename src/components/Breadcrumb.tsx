import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path: string) => {
    const names: { [key: string]: string } = {
      hakkinda: 'Daire Hakkında',
      galeri: 'Galeri',
      konum: 'Konum',
      iletisim: 'İletişim',
      blog: 'Blog',
    };
    return names[path] || path;
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-blue-600 transition">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = getBreadcrumbName(path);

            return (
              <li key={routeTo} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-blue-600 transition"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}


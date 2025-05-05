import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrazilFlag from './BrazilFlag';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre a LGPD', href: '/about' },
    { name: 'Materiais', href: '/resources' },
    { name: 'Notícias', href: '/news' },
    { name: 'Contato', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full bg-brand-green-700 text-white">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <BrazilFlag className="w-5 h-5" />
            <span>Governo do Estado de Mato Grosso do Sul</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#accessibility" className="hover:underline">Acessibilidade</a>
            <span>|</span>
            <a href="#sitemap" className="hover:underline">Mapa do Site</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://www.ms.gov.br/wp-content/uploads/2023/01/LOGO-GOV-MATO-GROSSO-SUL.png" 
                alt="Governo MS Logo"
                className="h-12 w-auto" 
              />
              <div className="hidden md:block border-l-2 border-brand-green-600 pl-3">
                <span className="text-xl font-semibold text-brand-green-700">LGPD</span>
                <p className="text-sm text-neutral-600">Lei Geral de Proteção de Dados</p>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-brand-green-600 ${
                  location.pathname === item.href
                    ? 'text-brand-green-700 font-semibold'
                    : 'text-neutral-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-700 hover:text-brand-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'bg-brand-green-50 text-brand-green-700'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
import { useState, useEffect } from 'react';
import { Glasses, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Testimonios', id: 'testimonios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-brand-wine/10 ${
        isScrolled 
          ? 'bg-brand-cream/95 shadow-lg py-3 backdrop-blur-md' 
          : 'bg-brand-cream py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="bg-brand-wine text-brand-cream p-2 rounded-lg group-hover:bg-brand-red transition-colors duration-300">
              <Glasses className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-brand-wine tracking-wide">Óptica S&V</h1>
              <p className="text-xs text-brand-text/70 font-sans font-medium">Salud y Estilo</p>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-brand-text hover:text-brand-red font-medium transition-colors duration-200 text-sm tracking-wide uppercase"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-brand-wine text-brand-cream px-6 py-2.5 rounded-full font-semibold hover:bg-brand-red transition-colors duration-200 shadow-md"
              onClick={() => window.open('https://wa.me/573001234567', '_blank')}
            >
              Agendar Cita
            </motion.button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-brand-wine hover:text-brand-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-t border-brand-wine/10 mt-3 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-brand-text hover:text-brand-red font-medium py-2 transition-colors border-b border-brand-wine/5"
                >
                  {item.label}
                </button>
              ))}
              <button
                className="bg-brand-wine text-brand-cream px-6 py-3 rounded-full font-semibold text-center mt-4 hover:bg-brand-red transition-colors"
                onClick={() => window.open('https://wa.me/573001234567', '_blank')}
              >
                Agendar Cita
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

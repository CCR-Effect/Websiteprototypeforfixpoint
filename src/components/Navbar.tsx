import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import logoFull from '../asset/logofullcolor.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tax Calculator', href: '/tax-calculator' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
    // Future: This will trigger language change throughout the app
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottomColor: 'rgba(9, 41, 66, 0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Móvil: Logo horizontal completo compacto */}
              <img 
                src={logoFull} 
                alt="FixPoint Accounting & Advisory" 
                className="h-7 w-auto object-contain md:hidden"
              />
              {/* Desktop: Logo horizontal completo normal */}
              <img 
                src={logoFull} 
                alt="FixPoint Accounting & Advisory" 
                className="h-12 w-auto object-contain hidden md:block"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter text-sm transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-[#F6921E]'
                    : 'text-[#092942] hover:text-[#F6921E]'
                }`}
              >
                {item.name}
                {isActive(item.href) ? (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-[#F6921E]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-[#F6921E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sliding Language Toggle */}
            <div 
              onClick={toggleLanguage}
              className="relative flex items-center bg-gray-100 rounded-full p-1 cursor-pointer w-32 h-10"
            >
              {/* Sliding background */}
              <motion.div
                className="absolute top-1 bottom-1 left-1 right-1 w-[calc(50%-0.25rem)] bg-[#F6921E] rounded-full shadow-md"
                animate={{
                  x: language === 'en' ? 0 : 'calc(100% + 0.25rem)'
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
              
              {/* Labels */}
              <div className="relative z-10 flex w-full">
                <div className="w-1/2 flex items-center justify-center">
                  <span 
                    className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                      language === 'en' ? 'text-white' : 'text-[#949599]'
                    }`}
                  >
                    EN
                  </span>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <span 
                    className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                      language === 'es' ? 'text-white' : 'text-[#949599]'
                    }`}
                  >
                    ES
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#092942]"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t bg-white overflow-hidden"
            style={{ borderTopColor: 'rgba(9, 41, 66, 0.1)' }}
          >
            <motion.div 
              className="px-4 pt-2 pb-6 space-y-1"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md font-inter text-base ${
                      isActive(item.href)
                        ? 'bg-[#F6921E]/10 text-[#F6921E]'
                        : 'text-[#092942] hover:bg-[#092942]/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="flex items-center justify-between px-3 py-2 mt-4 border-t pt-4"
                style={{ borderTopColor: 'rgba(9, 41, 66, 0.1)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Mobile Sliding Language Toggle */}
                <div 
                  onClick={toggleLanguage}
                  className="relative flex items-center bg-gray-100 rounded-full p-1 cursor-pointer w-28 h-9"
                >
                  {/* Sliding background */}
                  <motion.div
                    className="absolute top-1 bottom-1 left-1 right-1 w-[calc(50%-0.25rem)] bg-[#F6921E] rounded-full shadow-md"
                    animate={{
                      x: language === 'en' ? 0 : 'calc(100% + 0.25rem)'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                  
                  {/* Labels */}
                  <div className="relative z-10 flex w-full">
                    <div className="w-1/2 flex items-center justify-center">
                      <span 
                        className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                          language === 'en' ? 'text-white' : 'text-[#949599]'
                        }`}
                      >
                        EN
                      </span>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                      <span 
                        className={`font-inter text-xs font-semibold transition-colors duration-300 ${
                          language === 'es' ? 'text-white' : 'text-[#949599]'
                        }`}
                      >
                        ES
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
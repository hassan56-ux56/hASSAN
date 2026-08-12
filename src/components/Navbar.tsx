import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
        scrolled
          ? isDarkMode
            ? 'bg-[#0C1D15]/85 border-b border-[#FFB51B]/10 backdrop-blur-md py-3.5 shadow-lg'
            : 'bg-[#FFF9ED]/85 border-b border-[#294A37]/10 backdrop-blur-md py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center space-x-3 cursor-pointer"
          data-cursor="AIMA"
        >
          <div className="w-9 h-9 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] flex items-center justify-center font-serif font-bold text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform">
            AN
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight leading-none group-hover:text-[#F5B21A] transition-colors">
              AIMA NAWAZ
            </span>
            <span className="text-[10px] font-sans tracking-widest text-[#294A37]/70 dark:text-[#FFB51B]/80 uppercase">
              RESEARCH & DATA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans font-semibold tracking-widest transition-all duration-300 relative group py-1 opacity-80 hover:opacity-100 hover:text-[#F5B21A]"
              data-cursor="GO"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5B21A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Contact Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full border border-current/15 hover:bg-current/10 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title="Toggle Light/Dark Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#FFB51B]" /> : <Moon className="w-4 h-4 text-[#294A37]" />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] text-xs font-sans font-bold tracking-wider hover:bg-[#183728] dark:hover:bg-[#FFC64D] transition-all duration-300 shadow-sm cursor-pointer"
            data-cursor="CONNECT"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-current/15"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#FFB51B]" /> : <Moon className="w-4 h-4 text-[#294A37]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-current/15"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b transition-colors duration-300 overflow-hidden ${
              isDarkMode ? 'bg-[#07120D] border-[#FFB51B]/20' : 'bg-[#F5F0E5] border-[#294A37]/20'
            }`}
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans font-bold tracking-widest py-2 border-b border-current/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] font-sans font-bold text-xs tracking-widest"
              >
                LET'S CONNECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

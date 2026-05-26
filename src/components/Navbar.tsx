import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Phone, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Projects', href: '#gallery' },
    { label: 'FAQs', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Bar for trust elements */}
      <div id="id_topbar" className="bg-brand-navy text-white/80 py-2 px-6 text-xs font-sans border-b border-brand-blue/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📍 Belvedere, Harare, Zimbabwe</span>
            <span className="text-brand-aqua">|</span>
            <span>✉️ {BUSINESS_INFO.email}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/90">📞 Hotline: </span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-aqua font-semibold hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="id_main_header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100 py-3' 
            : 'bg-white/95 py-4'
        }`}
      >
        <div id="id_nav_container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2 group">
              <div className="relative p-2 bg-brand-navy rounded-lg text-brand-aqua group-hover:bg-brand-blue transition-colors duration-300">
                <Droplet className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight tracking-tight text-brand-navy">
                  DRILLSTAR
                </span>
                <span className="text-[10px] font-mono tracking-widest text-brand-aqua uppercase font-semibold">
                  Borehole Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="id_nav_desktop" className="hidden lg:flex items-center space-x-7">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-sans font-medium text-sm text-slate-700 hover:text-brand-aqua transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-aqua after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Header Call-to-Actions */}
            <div id="id_nav_ctas" className="hidden lg:flex items-center space-x-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-sans font-medium text-sm transition-colors duration-200"
              >
                <div className="p-1 px-2 border border-emerald-200 bg-emerald-50 rounded-full flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs">WhatsApp</span>
                </div>
              </a>
              <a
                href="#quote"
                onClick={(e) => handleLinkClick(e, '#quote')}
                className="bg-brand-navy hover:bg-brand-blue text-white px-5 py-2 rounded-lg font-sans font-semibold text-sm shadow-md transition-all duration-300 hover:shadow-brand-blue/20 hover:scale-[1.02] flex items-center space-x-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              id="id_mobile_burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="id_mobile_dropdown"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block font-sans font-medium text-base text-slate-800 hover:text-brand-aqua hover:bg-slate-50 px-3 py-2 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-3 border-t border-slate-100 flex flex-col space-y-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center space-x-2 justify-center py-2.5 rounded-lg font-sans font-semibold text-slate-800 bg-slate-50 border border-slate-200 text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-aqua" />
                    <span>Call: {BUSINESS_INFO.phone}</span>
                  </a>
                  <a
                    href="#quote"
                    onClick={(e) => handleLinkClick(e, '#quote')}
                    className="flex items-center space-x-2 justify-center py-2.5 rounded-lg font-sans font-semibold text-white bg-brand-navy hover:bg-brand-blue text-sm text-center shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-aqua" />
                    <span>Get Free Quotation</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

import React from 'react';
import { Droplet, Mail, MapPin, Phone, MessageSquare, ChevronRight, Compass } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Home Page', href: '#home' },
    { label: 'About Technical Team', href: '#about' },
    { label: 'Siting & Sounding', href: '#services' },
    { label: 'Our Operational Steps', href: '#process' },
    { label: 'Completed Portfolios', href: '#gallery' },
    { label: 'Frequently Asked Questions', href: '#faq' },
    { label: 'Interactive Quote Builder', href: '#quote' },
  ];

  return (
    <footer className="bg-brand-navy text-white text-left font-sans pt-16 pb-8 border-t border-brand-blue/30 relative overflow-hidden">
      
      {/* Structural visual detail */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Core Company Pitch */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-brand-blue rounded-lg text-brand-aqua">
                <Droplet className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display font-black text-lg tracking-tight text-white uppercase">
                DRILLSTAR
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Drillstar Borehole Solutions is a premier certified Zimbabwean drilling contractor. Based in Belvedere, Harare, we deliver high-accuracy geophysical surveys, basement rock water drilling, deep flushing, and robust solar puming systems nationwide.
            </p>
            
            {/* Regulatory badge display */}
            <div className="flex items-center space-x-2 bg-brand-blue/30 px-3 py-2 rounded-lg border border-brand-blue/30 max-w-fit">
              <span className="text-[9px] font-mono font-bold text-brand-aqua">✓ OFFICIAL COMPLIANT FIRM</span>
            </div>
          </div>

          {/* Column 2: Operational Services Menu */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-brand-aqua uppercase tracking-widest">Our Services</h4>
            <div className="grid gap-2 text-xs">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-aqua shrink-0" />
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Site Map Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-brand-aqua uppercase tracking-widest">Site Map</h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brand-aqua shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Location & Direct Contact points */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-brand-aqua uppercase tracking-widest font-sans">Corporate Office</h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-aqua shrink-0 mt-0.5" />
                <span className="leading-normal">
                  7496 East Coat Avenue,<br />
                  Belvedere, Harare, Zimbabwe
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-aqua shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-aqua shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Emergency Support Notice */}
            <div className="p-3 bg-brand-blue/30 rounded-xl border border-brand-blue/20 text-[10px] text-slate-300">
              🌿 <strong>Support Hotline Note:</strong> Zimbabwe-wide regional drilling mobilizations happen weekly. Call to reserve a site slot.
            </div>
          </div>

        </div>

        {/* Lower row: Technical copyrights & disclaimer details */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {currentYear} Drillstar Borehole Solutions. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-slate-400">ZINWA Siting Guidelines</a>
            <span>•</span>
            <a href="#quote" onClick={(e) => handleLinkClick(e, '#quote')} className="hover:text-slate-400">Request Inspection</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

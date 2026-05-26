import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplet, 
  Compass, 
  TrendingDown, 
  RefreshCw, 
  Sun, 
  Gauge, 
  ArrowRight, 
  Check, 
  Phone, 
  X, 
  Maximize2 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string, className = "w-6 h-6 text-brand-aqua") => {
    switch (iconName) {
      case 'Droplet': return <Droplet className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'TrendingDown': return <TrendingDown className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Gauge': return <Gauge className={className} />;
      default: return <Droplet className={className} />;
    }
  };

  const handleEnquiry = (serviceTitle: string) => {
    // Generate text for WhatsApp
    const text = encodeURIComponent(`Hi Drillstar Borehole Solutions, I am interested in your "${serviceTitle}" service and would like to request more information or a quick site visit.`);
    window.open(`https://wa.me/263781633813?text=${text}`, '_blank');
    setSelectedService(null);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedService(null);
    const element = document.querySelector('#quote');
    if (element) {
      // Find the select dropdown inside the quote form
      const selectEl = document.getElementById('id_quote_service_type') as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = serviceId;
        // Trigger generic change event to update react state
        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
      // Scroll smoothly down to the form
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F5F7FA] relative overflow-hidden">
      
      {/* Dynamic Background visual detail */}
      <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-brand-aqua/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
            Our Expertise
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            Premium Water & Survey Solutions across Zimbabwe
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base">
            Click on any service card below to view detailed technical specifications, project capabilities, and customizable water setups.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              layoutId={`service_card_parent_${service.id}`}
              onClick={() => setSelectedService(service)}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden bg-slate-150">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                  
                  {/* Category Accent Icon */}
                  <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-brand-navy shadow-sm">
                    {getIcon(service.icon, "w-5 h-5 text-brand-aqua")}
                  </div>

                  <span className="absolute bottom-4 right-4 bg-white/95 text-[10px] font-mono font-bold tracking-wider uppercase text-brand-navy px-2.5 py-1 rounded-md shadow-sm">
                    Click to Open
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-lg text-brand-navy group-hover:text-brand-aqua transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

              </div>

              {/* Action Trigger Card Footer */}
              <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between text-brand-navy group-hover:bg-white transition-colors duration-200">
                <span className="font-sans font-semibold text-xs text-slate-700 group-hover:text-brand-aqua transition-colors">
                  Technical Specs
                </span>
                <div className="flex items-center space-x-1 font-sans text-xs font-bold text-brand-navy group-hover:translate-x-1 duration-200">
                  <span>Explore specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-aqua" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay (Modal Dialog) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div 
                layoutId={`service_card_parent_${selectedService.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-2xl w-full z-10 max-h-[90vh] flex flex-col"
              >
                
                {/* Header Image Cover */}
                <div className="relative h-56 bg-brand-navy overflow-hidden shrink-0">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                  
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/35 backdrop-blur-md p-2 rounded-full text-white transition-all shadow-md cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="p-1.5 bg-brand-aqua rounded-lg text-white">
                        {getIcon(selectedService.icon, "w-4 h-4 text-white")}
                      </div>
                      <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-brand-aqua">
                        Drillstar Engineering Standard
                      </span>
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Content / Features area (Scrollable) */}
                <div className="p-6 space-y-6 overflow-y-auto font-sans">
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Overview</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedService.fullDesc}
                    </p>
                  </div>

                  {/* Bullet Spec Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Service Highlights</h4>
                    <div className="grid gap-2">
                      {selectedService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5">
                          <div className="p-0.5 bg-emerald-50 text-emerald-600 rounded-full mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs text-slate-700 leading-normal">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Local Reference */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start space-x-2.5 text-xs text-slate-500">
                    <span className="text-base text-brand-aqua shrink-0">💧</span>
                    <p className="leading-relaxed">
                      All Drillstar procedures conform strictly to municipal and environmental water standards. We use high-precision food-grade PVC casings and clean non-hazardous materials.
                    </p>
                  </div>

                </div>

                {/* Action Block Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-end shrink-0">
                  <button
                    onClick={() => handleSelectServiceForQuote(selectedService.id)}
                    className="px-5 py-3 bg-brand-navy hover:bg-brand-blue text-white rounded-xl font-semibold text-xs tracking-wide shadow-md transition-all font-sans text-center"
                  >
                    Configure In Quote Builder
                  </button>
                  <button
                    onClick={() => handleEnquiry(selectedService.title)}
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs tracking-wide shadow-md transition-all font-sans text-center flex items-center justify-center space-x-1.5"
                  >
                    <span>Instant WhatsApp Inquiry</span>
                    <Phone className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

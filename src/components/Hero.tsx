import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import { BUSINESS_INFO, STATS } from '../data';
import WaterRipple from './WaterRipple';

export default function Hero() {
  const handleScrollToQuote = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#quote');
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50 py-16 lg:py-24 overflow-hidden border-b border-gray-100">
      
      {/* Background visual water ripples */}
      <WaterRipple className="w-96 h-96 -top-20 -left-20 opacity-30" color="rgba(0, 173, 181, 0.2)" />
      <WaterRipple className="w-80 h-80 bottom-10 right-10 opacity-20" color="rgba(30, 62, 98, 0.15)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-brand-navy/5 border border-brand-navy/10 px-3 py-1.5 rounded-full"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-aqua animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">
                🇿🇼 100% Registered & Compliant Borehole Contractor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight tracking-tight"
            >
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua font-black">Borehole Drilling</span> & Water Solutions in Zimbabwe
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              From professional geological surveys and secure borehole drilling to solar water pumps and flow testing, Drillstar Borehole Solutions delivers dependable and clean water access for homes, farms, businesses, and institutions across Zimbabwe.
            </motion.p>

            {/* Key Trust Checkmarks */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-sans font-medium"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-aqua shrink-0" />
                <span>Heavy Rig Drilling (Soft Soil & Hard Rock)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-aqua shrink-0" />
                <span>Premium Quality Casing (Class 9 & 12)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-aqua shrink-0" />
                <span>High-Accuracy Geophysical Sounding</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-aqua shrink-0" />
                <span>Complete Solar pump & Jojo tank systems</span>
              </div>
            </motion.div>

            {/* Call to Actions (CTAs) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={handleScrollToQuote}
                className="bg-brand-navy hover:bg-brand-blue text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg shadow-brand-navy/10 transition-all duration-300 hover:shadow-brand-blue/35 hover:scale-[1.03] text-center flex items-center justify-center space-x-2 group"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-sans font-bold text-base shadow-lg shadow-emerald-600/10 transition-all duration-300 hover:shadow-emerald-600/30 hover:scale-[1.03] text-center flex items-center justify-center space-x-2"
              >
                {/* Custom SVG logo representing WhatsApp */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us Direct</span>
              </a>
            </motion.div>
          </div>

          {/* Premium Graphical Display Block */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-2 bg-white rounded-3xl shadow-xl border border-slate-100/60 overflow-hidden group max-w-md mx-auto"
            >
              {/* Image Frame with hover scaling */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                <img 
                  src="/src/assets/images/borehole_hero_1779792739231.png" 
                  alt="Drillstar Borehole Drilling Rig Zimbabwe" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlaid location badge */}
                <span className="absolute bottom-4 left-4 bg-brand-navy/85 backdrop-blur-md text-white px-3 py-1 text-xs font-mono font-bold rounded-lg tracking-wide shadow-sm flex items-center space-x-1 border border-white/10">
                  <span className="h-1.5 w-1.5 bg-brand-aqua rounded-full animate-ping"></span>
                  <span>Active Operation Rig #1</span>
                </span>
              </div>

              {/* Float Water Card Accent */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 glass-panel p-4 rounded-2xl shadow-lg border border-slate-200/50 flex flex-col items-center space-y-1 max-w-[130px] hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-brand-aqua">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-center font-display font-bold text-xs text-brand-navy">ZINWA Cert.</span>
                <span className="text-center font-sans text-[10px] text-slate-500">Fully Compliant</span>
              </div>

              {/* Float Safe Drilling Accent */}
              <div className="absolute -left-4 bottom-4 glass-panel px-4 py-3 rounded-2xl shadow-lg border border-slate-250 flex items-center space-x-2.5 hidden sm:flex">
                <Shield className="w-6 h-6 text-brand-aqua" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xs text-brand-navy leading-none">3-Year Warranty</span>
                  <span className="font-sans text-[10px] text-slate-500">Structural Guarantees</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Numerical Stats Panel with animated styling */}
        <div className="mt-16 sm:mt-24 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-y-0 divide-x-0 lg:divide-x divide-slate-100 text-center">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="flex flex-col justify-center px-4"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy flex justify-center items-baseline">
                <span>{stat.value}</span>
                <span className="text-brand-aqua font-bold text-xl ml-0.5">{stat.suffix}</span>
              </div>
              <p className="mt-1 text-xs sm:text-sm font-sans font-semibold text-slate-500 uppercase tracking-wider leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

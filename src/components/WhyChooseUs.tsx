import React from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Cpu, 
  Map, 
  ShieldCheck, 
  Hourglass, 
  Compass, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { FEATURES } from '../data';

export default function WhyChooseUs() {
  // Map icons to each of our 7 key values
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-brand-aqua" />; // Professional Drilling expertise
      case 1: return <Cpu className="w-5 h-5 text-brand-aqua" />; // Modern equipment 
      case 2: return <Map className="w-5 h-5 text-brand-aqua" />; // Geological assessments
      case 3: return <ShieldCheck className="w-5 h-5 text-brand-aqua" />; // Reliable installations
      case 4: return <Hourglass className="w-5 h-5 text-brand-aqua" />; // Long term solutions
      case 5: return <CheckCircle2 className="w-5 h-5 text-brand-aqua" />; // Fast response times
      case 6: return <Users className="w-5 h-5 text-brand-aqua" />; // Residential & commercial
      default: return <CheckCircle2 className="w-5 h-5 text-brand-aqua" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      
      {/* Dynamic background accents */}
      <div className="absolute right-0 top-10 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative Heading and Quick Video-like Mockup/Bento Grid Frame */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
              Our Core Strengths
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              Why Zimbabweans choose Drillstar Solutions
            </h2>
            <p className="font-sans text-slate-600 leading-relaxed text-sm sm:text-base">
              Water drilling is a significant investment. Going with an inexperienced contractor could lead to collapsed casings, muddy yields, dry holes, or pump failures, which multiply your costs. 
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-sm sm:text-base">
              We stand apart through our multi-phase hydro-geological survey, heavy-duty truck rigs designed for igneous formations, premium PVC casing materials, and guaranteed after-sales maintenance.
            </p>

            {/* Quick trust metrics panel */}
            <div className="p-5 bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl text-white relative overflow-hidden shadow-md">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-brand-aqua/10 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-xs font-mono text-brand-aqua font-bold tracking-widest uppercase">Certified Standard</span>
                <p className="font-sans text-sm text-white/90">
                  Fully licensed with heavy drilling certifications, conforming with structural ZINWA statutory benchmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Bento Column Grid showing the 7 values */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {FEATURES.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-5 rounded-2xl border border-slate-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col space-y-2 hover:border-brand-aqua/20 text-left ${
                  // Highlight the first card uniquely
                  index === 0 ? 'bg-slate-50/70 border-brand-aqua/20 shadow-sm' : 'bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-brand-navy/5 text-brand-aqua rounded-xl shrink-0">
                    {getFeatureIcon(index)}
                  </div>
                  <h3 className="font-display font-bold text-sm text-brand-navy">
                    {feat.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-slate-500 leading-relaxed pl-1">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

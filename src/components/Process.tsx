import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Map, 
  Wrench, 
  CheckCircle2, 
  Sun, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-white" />;
      case 'Map': return <Map className="w-5 h-5 text-white" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-white" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-white" />;
      case 'Sun': return <Sun className="w-5 h-5 text-white" />;
      default: return <Wrench className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Absolute layout shapes */}
      <div className="absolute left-1/2 top-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Information */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
            Our Blueprint
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            How we deliver secure Water Solutions in 5 Steps
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            From your very first initial consultation to flipping the power switch on clean flowing water, we follow a strict geological and technical roadmap.
          </p>
        </div>

        {/* Timeline Grid (Vertical on mobile, horizontal with connections on lg screens) */}
        <div className="relative mt-12">
          
          {/* Horizontal Connection Bar visible only on desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-brand-aqua via-brand-navy to-emerald-400 -z-10" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col items-center lg:items-start p-6 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all group level-card text-center lg:text-left"
              >
                {/* Timeline Connector Line visible only on portrait view to represent hierarchy */}
                <div className="lg:hidden absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-brand-aqua/50 -translate-x-1/2 last:hidden" />

                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between w-full mb-4">
                  
                  {/* Step Badge */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-aqua transition-colors duration-300 flex items-center justify-center shadow-lg shadow-brand-navy/15 group-hover:shadow-brand-aqua/20">
                      {getStepIcon(step.icon)}
                    </div>
                    {/* Floating Numeric Overlay */}
                    <span className="absolute -top-2.5 -right-2.5 bg-brand-aqua text-white text-[11px] font-mono font-extrabold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Day Tag indicator */}
                  <span className="bg-slate-100 text-[10px] font-mono font-bold uppercase text-slate-600 px-2.5 py-1 rounded-full border border-slate-200 lg:mt-3">
                    {step.timeframe}
                  </span>

                </div>

                {/* Content Details */}
                <div className="space-y-2 mt-2">
                  <h3 className="font-display font-bold text-sm text-brand-navy group-hover:text-brand-aqua transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

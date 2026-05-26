import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle, Shield } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Visual accents */}
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title info */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
            Client Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            Loved & trusted by Zimbabwean Families & Farmers
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Read positive experiences from high-yield water exploration, solar deployments, and deep flushing procedures. Over 380+ projects finalized successfully.
          </p>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-150 flex flex-col justify-between relative text-left"
            >
              
              {/* Giant decorative Quote Icon in background */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-100 pointer-events-none" />

              <div className="space-y-4">
                {/* 5 Star Rating Row */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-slate-200" />
                  ))}
                </div>

                {/* Main Quote Content Text */}
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Verified Badge profile details */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy/5 text-brand-navy font-display font-extrabold flex items-center justify-center border border-slate-100 shrink-0 text-sm">
                  {testimonial.name.charAt(0)}
                  {testimonial.name.split(' ').slice(-1)[0].charAt(0)}
                </div>
                <div className="min-w-0 font-sans">
                  <h4 className="font-display font-bold text-sm text-brand-navy truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate leading-tight">
                    {testimonial.role} {testimonial.organization ? `@ ${testimonial.organization}` : ''}
                  </p>
                  <p className="text-[10px] font-mono text-brand-aqua mt-0.5 font-bold tracking-wide uppercase">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Client satisfaction summary trust element */}
        <div className="mt-14 p-6 bg-white rounded-2xl border border-slate-150 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-display font-bold text-sm text-brand-navy">Highly Rated Portfolio</h4>
              <p className="font-sans text-xs text-slate-500">Averaging 4.9 out of 5 stars from surveyed clients nationally.</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-extrabold tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-full uppercase">
            ✓ 100% VERIFIED PROJECTS
          </span>
        </div>

      </div>
    </section>
  );
}

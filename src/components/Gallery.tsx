import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Compass, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { ProjectItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'drilling' | 'solar' | 'survey' | 'testing'>('all');

  const filters: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Borehole Drilling', value: 'drilling' },
    { label: 'Solar Systems', value: 'solar' },
    { label: 'Geological Surveys', value: 'survey' },
    { label: 'Water Testing', value: 'testing' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      
      <div className="absolute right-0 bottom-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text elements */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
            Proven Operations
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
            Our Completed Projects Portfolio
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Explore authentic images of our high-quality borehole systems, geological assessment setups, and robust solar arrays installed throughout Zimbabwe.
          </p>
        </div>

        {/* Categories / Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-xl font-sans font-semibold text-xs transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Dynamic Images Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col justify-between"
              >
                
                {/* Visual Cover containing smooth zoom triggers */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill Tag Overlay */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-brand-navy px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                    {item.category}
                  </span>

                  {/* Location badge bottom overlay info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1.5 min-w-0">
                      <MapPin className="w-4 h-4 text-brand-aqua shrink-0" />
                      <span className="font-sans text-xs font-semibold truncate">
                        {item.location}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-white/85">
                      {item.year}
                    </span>
                  </div>

                </div>

                {/* Lower meta text card */}
                <div className="p-5 text-left flex-grow flex flex-col justify-between">
                  <h3 className="font-display font-bold text-sm text-brand-navy leading-normal">
                    {item.title}
                  </h3>
                  
                  {/* Subtle verified badge */}
                  <div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center text-[10px] font-mono font-medium text-slate-400">
                    <span>ID: {item.id.toUpperCase()}</span>
                    <span className="text-emerald-500 font-semibold flex items-center space-x-0.5">
                      <span>●</span>
                      <span>Verified Yield</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Prompt reminder info block */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto">
            <p className="font-sans text-slate-500 text-sm">No recorded projects under this filter yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}

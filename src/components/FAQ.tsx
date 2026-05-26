import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // First one active initially
  const [selectedCat, setSelectedCat] = useState<'all' | 'geology' | 'solar' | 'licensing' | 'maintenance' | 'drilling'>('all');

  const categories = [
    { label: 'All FAQs', id: 'all' },
    { label: 'Geology & Siting', id: 'geology' },
    { label: 'Solar & Pumps', id: 'solar' },
    { label: 'ZINWA Licensing', id: 'licensing' },
    { label: 'Maintenance & Flushing', id: 'maintenance' },
    { label: 'Drilling Process', id: 'drilling' },
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => selectedCat === 'all' || faq.category === selectedCat
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative gradient sphere */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Question intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
            Common Inquiries
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight font-sans">
            Have Questions? We Have Answers
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base">
            Understand standard water drilling protocols, solar power efficiency specs, ZINWA municipal permits, and maintenance lifecycles in Zimbabwe.
          </p>
        </div>

        {/* Dynamic Category Selector Menu */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10 border-b border-slate-100 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id as any)}
              className={`px-4 py-2 rounded-xl font-sans font-semibold text-xs transition-all cursor-pointer ${
                selectedCat === cat.id
                  ? 'bg-brand-navy text-white text-[11px]'
                  : 'bg-slate-50 text-slate-500 hover:text-brand-navy hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List container */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  key={faq.id}
                  className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs text-left ${
                    isOpen ? 'bg-slate-50/75 border-brand-aqua/20 shadow-sm' : 'bg-white hover:border-slate-200'
                  }`}
                >
                  {/* Triggers Header block */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-hidden cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <div className={`p-1.5 rounded-lg shrink-0 ${isOpen ? 'bg-brand-navy text-brand-aqua' : 'bg-slate-100 text-slate-400'}`}>
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="font-display font-bold text-sm sm:text-base text-brand-navy leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className="shrink-0 text-slate-400">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-aqua" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expandable answers visual */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-slate-100/60 bg-white"
                      >
                        <div className="px-6 py-5 font-sans text-sm text-slate-600 leading-relaxed space-y-3">
                          <p>{faq.answer}</p>
                          <div className="flex items-center space-x-2 text-[11px] font-mono text-brand-aqua uppercase font-bold tracking-wider pt-2 border-t border-slate-50">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Verified Drillstar Tech Answer</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global info support text block */}
        <div className="mt-14 text-center text-xs font-sans text-slate-500">
          Have an architectural or geological question not listed above? <br />
          Feel free to call our engineers directly at{' '}
          <a href="tel:+263781633813" className="font-bold text-brand-aqua hover:underline">
            +263 78 163 3813
          </a>{' '}
          or draft a quote request coordinate.
        </div>

      </div>
    </section>
  );
}

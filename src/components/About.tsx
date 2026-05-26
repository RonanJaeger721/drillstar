import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Crosshair, HelpCircle, Flame, Check, HelpCircle as Help } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function About() {
  const highlights = [
    {
      title: 'Geological Reliability',
      desc: 'Our electronic 2D-resistivity profiling ensures we sit boreholes in fractures with water, avoiding dry holes.',
      icon: Crosshair
    },
    {
      title: 'End-to-End Delivery',
      desc: 'From initial siting and permit acquisition assistance to pumps, piping, steel towers, and stable solar setups.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* Absolute decorative geometric element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Block: Visual Grid illustrating multi-layered professional services */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/src/assets/images/geo_survey_1779792784545.png" 
                  alt="Geological sound survey Zimbabwe" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-brand-navy text-white p-6 rounded-2xl shadow-md min-h-[160px] flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-aqua">100%</h4>
                  <p className="font-sans text-xs text-white/80 mt-1">Harare hydro-geology compliance rate</p>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#00ADB5] uppercase font-bold">Drillstar Standards</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm min-h-[160px] flex flex-col justify-between">
                <span className="text-3xl">🏜️</span>
                <div>
                  <h4 className="font-display font-extrabold text-[#00ADB5] text-base">Basement Complex</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1">Expert drilling through hard granite formations</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="/src/assets/images/solar_pump_1779792762637.png" 
                  alt="Rig drilling machine Zimbabwe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Tiny accent badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl border border-gray-100 hidden sm:block">
              <span className="font-display font-black text-xs text-brand-navy tracking-wider">DRILLSTAR</span>
            </div>
          </div>

          {/* Right Block: Core Text Description and Values */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                Committed to delivering dependable Water Solutions
              </h2>
            </div>

            <p className="font-sans text-base text-slate-600 leading-relaxed">
              At **Drillstar Borehole Solutions**, we understand that water is life, farming growth, and commercial stability. Based in Belvedere, Harare, we serve residential properties, deep rural farms (including Goromonzi, Chinhoyi, Mazowe, etc.), schools, and factories across Zimbabwe. 
            </p>
            
            <p className="font-sans text-base text-slate-600 leading-relaxed">
              We focus heavily on technical precision—employing correct geophysical assessments, heavy high-pressure rock drills, premium non-collapsible PVC casing blocks, and robust solar designs. Our water systems are designed for long-term survival under challenging seasonal conditions.
            </p>

            {/* Quick highlights block list */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 bg-brand-navy/5 text-brand-aqua rounded-lg">
                      <highlight.icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-sm text-brand-navy">{highlight.title}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed pl-1">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification message / CTA helper */}
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/40 flex items-start space-x-3">
              <div className="p-1.5 bg-[#00ADB5]/15 text-[#00ADB5] rounded-lg text-xs font-bold shrink-0 mt-0.5">
                INFO
              </div>
              <p className="font-sans text-xs text-[#1E3E62] leading-relaxed">
                <strong>Need an inspection or looking to revive a low-yield hole?</strong> Our response teams can draft custom action plans, site reports, and licensing documents on request.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

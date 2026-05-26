/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="id_app_root" className="min-h-screen bg-slate-55 flex flex-col justify-between selection:bg-brand-aqua/30 selection:text-brand-navy">
      {/* Premium responsive topbar & sticky header */}
      <Navbar />

      {/* Main website page content sections */}
      <main id="id_page_content">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <QuoteForm />
      </main>

      {/* Corporate physical footer & metadata */}
      <Footer />

      {/* Sticky floaters for continuous conversion optimization */}
      <FloatingWhatsApp />
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Send, 
  CheckCircle, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  HelpCircle,
  Clock,
  Building,
  Sparkles,
  PhoneCall,
  Lock,
  X
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { QuoteFormData } from '../types';

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    serviceType: 'drilling',
    clientType: 'homeowner',
    message: '',
    urgency: 'soon',
    subscribeNews: true
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const servicesOption = SERVICES.map(v => ({ id: v.id, title: v.title }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const generateTicketId = () => {
    const randNum = Math.floor(10000 + Math.random() * 90000);
    return `DS-${randNum}`;
  };

  const handleFormSubmit = (e: React.FormEvent, submitTarget: 'whatsapp' | 'email') => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.location) {
      alert('Please fill out all required fields: Name, Phone/WhatsApp, and Location.');
      return;
    }

    setLoading(true);

    // Mock network registry
    setTimeout(() => {
      const generatedId = generateTicketId();
      setTicketId(generatedId);
      setLoading(false);
      setSuccess(true);

      // Package full formatted texts for WhatsApp submission block
      const chosenService = SERVICES.find(s => s.id === formData.serviceType)?.title || formData.serviceType;
      const clientTypeLabelMap = {
        homeowner: 'Residential Homeowner',
        farm: 'Agricultural Farm Manager / Specialist',
        school: 'School / Academic Institution',
        business: 'Commercial Business / Factory',
        other: 'Other'
      };
      const clientTypeLabel = clientTypeLabelMap[formData.clientType] || formData.clientType;
      const urgencyLabelMap = {
        flexible: 'Flexible Schedule',
        soon: 'Soon (Within 2 Weeks)',
        immediate: 'Immediate (Emergency Need)'
      };
      const urgencyLabel = urgencyLabelMap[formData.urgency] || formData.urgency;

      const whatsappText = `🌟 *DRILLSTAR QUOTE REQUEST [${generatedId}]* 🌟\n\n` +
        `👤 *Client Name:* ${formData.fullName}\n` +
        `📞 *WhatsApp/Phone:* ${formData.phone}\n` +
        `✉️ *Email Address:* ${formData.email || 'N/A'}\n` +
        `📍 *Project Location:* ${formData.location}\n` +
        `💧 *Service Required:* ${chosenService}\n` +
        `🏢 *Client Category:* ${clientTypeLabel}\n` +
        `⚡ *Project Urgency:* ${urgencyLabel}\n` +
        `📝 *Additional Notes:* ${formData.message || 'None'}\n\n` +
        `🇿🇼 _Submitted via Drillstar Web Portal_`;

      if (submitTarget === 'whatsapp') {
        window.open(`https://wa.me/263781633813?text=${encodeURIComponent(whatsappText)}`, '_blank');
      } else {
        // Fallback or secondary simulation link
        window.open(`mailto:${BUSINESS_INFO.email}?subject=Drillstar Quote Request [${generatedId}]&body=${encodeURIComponent(whatsappText)}`, '_blank');
      }
    }, 1200);
  };

  const closeSuccessAndReset = () => {
    setSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      serviceType: 'drilling',
      clientType: 'homeowner',
      message: '',
      urgency: 'soon',
      subscribeNews: true
    });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-slate-50 to-sky-50 relative overflow-hidden">
      
      {/* Decorative ambient visual effects */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Quotation guidelines & instant response guarantees */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-widest block">
              Instant Estimation
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
              Request a Professional Free Siting & Drilling Quotation
            </h2>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Ready to secure sustainable water independence for your property? Fill out this quick specification list. 
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-white rounded-xl shadow-xs text-brand-aqua shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-sm text-brand-navy">Fast 1-Hour Quote Turnaround</h4>
                  <p className="font-sans text-xs text-slate-500 leading-normal">Our engineers in Belvedere, Harare review filings hourly to draft optimized siting coordinates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-white rounded-xl shadow-xs text-brand-aqua shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-sm text-brand-navy">100% Confidential Assurances</h4>
                  <p className="font-sans text-xs text-slate-500 leading-normal">Your phone numbers, physical location coordinates, and project sizes are handled strictly confidentially.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-white rounded-xl shadow-xs text-emerald-600 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-sm text-emerald-700">Optional Siting Incentives Included</h4>
                  <p className="font-sans text-xs text-slate-500 leading-normal">Submit via form here to pre-qualify for optional geological discounts and pump service programs.</p>
                </div>
              </div>
            </div>

            {/* Quick Direct numbers block */}
            <div className="p-5 bg-white border border-slate-150 rounded-2xl flex items-center justify-between shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Emergency Quick Hotline</span>
                <p className="font-display font-extrabold text-base text-brand-navy leading-none">{BUSINESS_INFO.phone}</p>
              </div>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="p-3 bg-brand-navy hover:bg-brand-blue rounded-xl text-brand-aqua transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Block: Dynamic Multi-Step Form Layout */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-100 relative">
              <form onSubmit={(e) => handleFormSubmit(e, 'whatsapp')} className="space-y-5 text-left font-sans">
                
                {/* Visual badge top line */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                  <span className="text-xs font-semibold text-slate-400 flex items-center space-x-1.5 font-mono">
                    <FileText className="w-4 h-4 text-brand-aqua" />
                    <span>DRILLSTAR CONFIGURATOR V1.2</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    ● System Active
                  </span>
                </div>

                {/* Grid Inputs row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Full Name <span className="text-rose-500">*</span></span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Simba Shumba" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>Phone/WhatsApp <span className="text-rose-500">*</span></span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +263 78 163 3813" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Grid Inputs row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>Email Address</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@gmail.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>Project Location/District <span className="text-rose-500">*</span></span>
                    </label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Belvedere, Harare / Chinhoyi" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Selects Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>Service Required <span className="text-rose-500">*</span></span>
                    </label>
                    <select 
                      name="serviceType"
                      id="id_quote_service_type"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden bg-white text-slate-800"
                    >
                      {servicesOption.map(opt => (
                        <option key={opt.id} value={opt.id}>{opt.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center space-x-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>Client Category <span className="text-rose-500">*</span></span>
                    </label>
                    <select 
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden bg-white text-slate-800"
                    >
                      <option value="homeowner">Residential Homeowner</option>
                      <option value="farm">Agricultural Farm/Manager</option>
                      <option value="school">School / University</option>
                      <option value="business">Commercial Business/Factory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Urgency levels */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Project Urgency:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'flexible', label: 'Flexible' },
                      { value: 'soon', label: 'Within 2 Weeks' },
                      { value: 'immediate', label: 'Immediate!' }
                    ].map((opt) => (
                      <label 
                        key={opt.value}
                        className={`border rounded-xl p-3 text-center text-xs font-semibold cursor-pointer transition-all ${
                          formData.urgency === opt.value
                            ? 'bg-brand-navy text-white border-brand-navy'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-500'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="urgency"
                          value={opt.value}
                          checked={formData.urgency === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Text Message notes */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Additional Specifications / Special notes:</label>
                  <textarea 
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide depth preferences, specific water requirements, Jojo tank sizes, solar output requirements, or previous drilling survey reports..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-brand-aqua focus:outline-hidden resize-none"
                  />
                </div>

                {/* Subscription Checkbox */}
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="subscribeNews"
                    name="subscribeNews"
                    checked={formData.subscribeNews}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-brand-aqua focus:ring-brand-aqua h-4 w-4"
                  />
                  <label htmlFor="subscribeNews" className="text-xs text-slate-500 cursor-pointer">
                    Keep me updated on season-specific borehole pricing and water purification kits in Zimbabwe.
                  </label>
                </div>

                {/* Interactive Dual Submit buttons */}
                <div className="pt-3 grid sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-4 text-sm font-bold shadow-md transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit to WhatsApp</span>
                        <Send className="w-4 h-4 text-brand-aqua fill-current" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={(e) => handleFormSubmit(e, 'email')}
                    className="w-full bg-brand-navy hover:bg-brand-blue text-white rounded-xl py-4 text-sm font-bold shadow-md transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-2 shrink-0 cursor-pointer border border-brand-navy"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <span>Submit via Email</span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* SUCCESS MODAL TRIGGER DIALOGS */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSuccessAndReset}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 max-w-md w-full z-10 text-center font-sans space-y-5"
            >
              
              <button 
                onClick={closeSuccessAndReset}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400">TICKET DETECTED</span>
                <h3 className="font-display font-extrabold text-[#0D0D0d] text-lg sm:text-xl">
                  Quote Generated {ticketId}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-normal px-1">
                  Thank you, <strong>{formData.fullName}</strong>. Your borehole system specifications have been packed securely. 
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-left text-xs text-slate-600">
                <p>📍 <strong>Target Location:</strong> {formData.location}</p>
                <p>⚙️ <strong>Configured service:</strong> {SERVICES.find(s => s.id === formData.serviceType)?.title}</p>
                <p>📞 <strong>WhatsApp Contact:</strong> {formData.phone}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-slate-400">Our engineers in Belvedere, Harare will follow up within 1 business hour.</p>
                <button
                  onClick={closeSuccessAndReset}
                  className="w-full bg-brand-navy hover:bg-brand-blue text-white rounded-xl py-3 text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Dismiss & Return
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

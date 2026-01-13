
import React, { useState, useEffect } from 'react';

interface ContactSalesProps {
  prefillEmail?: string;
}

const ContactSales: React.FC<ContactSalesProps> = ({ prefillEmail = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: prefillEmail,
    company: '',
    spend: '50k-100k',
    goal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefillEmail) {
      setFormData(prev => ({ ...prev, email: prefillEmail }));
    }
  }, [prefillEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try emailing us directly at cole@mediant.group');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
                <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Partnership Inquiry</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                Initialize your <br/>
                <span className="text-blue-500 italic">yield audit.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Our squad specializes in high-efficiency budget scaling, delivering surgical ROI against your specific CPA requirements. We engineer every dollar for terminal scale.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Rapid Response</h4>
                    <p className="text-slate-500 text-sm font-medium">Expect a technical brief from our engineering squad in under 12 hours with a custom CPA roadmap.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Budget Optimization</h4>
                    <p className="text-slate-500 text-sm font-medium">We focus on making the most of your budget, reallocating every cent toward your highest-yield cohorts.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Form (Mirrored from Pricing) */}
            <div className="relative">
              <div className="glass-card p-10 md:p-14 rounded-[4rem] border-white/10 relative z-10">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">ROI & CPA Audit</h3>
                    <p className="text-slate-500 text-sm mb-10 font-medium italic">Define your CPA targets. We'll engineer the yield.</p>
                    
                    {error && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                        <p className="text-red-400 text-sm font-medium">{error}</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Company Domain</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="mediant.group"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Monthly Spend Target</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                      value={formData.spend}
                      onChange={e => setFormData({...formData, spend: e.target.value})}
                    >
                      <option value="under-50k">Under $50k</option>
                      <option value="50k-100k">$50k — $100k</option>
                      <option value="100k-500k">$100k — $500k</option>
                      <option value="500k-1m">$500k — $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Target CPA & Yield Goal</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-1 focus:ring-blue-500 outline-none h-32 resize-none transition-all"
                      placeholder="e.g. Scaling retention-focused acquisition while maintaining a $25 blended CPA."
                      value={formData.goal}
                      onChange={e => setFormData({...formData, goal: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Initialize Audit'}
                  </button>
                </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    {/* Success Animation Icon */}
                    <div className="mb-8 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30 animate-[scale-in_0.5s_ease-out]">
                        <svg className="w-12 h-12 text-white animate-[check-draw_0.6s_ease-out_0.3s_forwards]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Success Message */}
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                      Request Received!
                    </h3>
                    <p className="text-slate-400 text-lg mb-6 max-w-md mx-auto leading-relaxed">
                      Your ROI & CPA audit request has been submitted successfully.
                    </p>

                    {/* Info Box */}
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8 text-left">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-2">What happens next?</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Our growth engineering squad will review your request and reach out within <span className="text-white font-bold">2-3 business days</span> with a custom CPA roadmap tailored to your targets.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-slate-500 text-sm">
                      <p className="mb-2">Need immediate assistance?</p>
                      <a href="mailto:cole@mediant.group" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        cole@mediant.group
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Backdrop Glows */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
           <p className="text-white/30 text-xs font-bold uppercase tracking-[0.4em] mb-12">Trusted by scale-focused leaders</p>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
             {['ChatGPT', 'Kalshi', 'Capital One', 'Flo', 'Disney+'].map((p, i) => (
               <span key={i} className="text-2xl font-black italic text-white tracking-tighter">{p}</span>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSales;

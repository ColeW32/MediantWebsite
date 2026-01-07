
import React, { useState } from 'react';

const PricingCard = ({ title, description, benefits, isActive }: { title: string, description: string, benefits: string[], isActive?: boolean }) => (
  <div className={`glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden transition-all duration-500 ${isActive ? 'ring-2 ring-blue-500/50 scale-105 z-10' : 'hover:border-white/10'}`}>
    {isActive && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
        Recommended
      </div>
    )}
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
      {description}
    </p>
    <div className="space-y-4 mb-10">
      {benefits.map((b, i) => (
        <div key={i} className="flex items-center space-x-3">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">{b}</span>
        </div>
      ))}
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    spend: '50k-100k',
    goal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    alert('Yield audit request sent. Our engineers will contact you within 12 hours with a custom ROI roadmap.');
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-green-400 text-xs font-bold tracking-[0.2em] uppercase">Outcome-Only Economics</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
              Pricing that <br/>
              <span className="text-blue-500 text-white/50 italic">scales with you.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We've abolished retainers. At Mediant, we only win when you win. No hidden fees, no management percentages—just pure performance engineered to hit your CPA goals.
            </p>
          </div>
        </div>
      </section>

      {/* Model Breakdown */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-3 gap-8">
              <PricingCard 
                title="CPA Optimized"
                description="We agree on a deterministic target Cost Per Action. Your budget is deployed to maximize yield against this singular baseline."
                benefits={['Zero Retainer Fees', 'Infinite Creative Included', 'Real-time Signal Sync']}
                isActive={true}
              />
              <PricingCard 
                title="LTV Multiplier"
                description="Designed for recurring revenue. Pricing modeled around maximizing the terminal value of your acquisition budget."
                benefits={['Churn Reduction Goals', 'Cohort Analysis Dashboard', 'Full CRM Integration']}
              />
              <PricingCard 
                title="Enterprise Custom"
                description="Bespoke yield engineering for brands spending $1M+/mo with complex multi-touch attribution needs."
                benefits={['Dedicated Data Squad', 'On-prem Attribution Mesh', 'Custom ML Models']}
              />
           </div>
        </div>
      </section>

      {/* Why CPA? Comparison + Contact Section */}
      <section id="contact-section" className="py-32 relative">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">The <span className="text-white/40 italic">New Standard.</span></h2>
                  <p className="text-slate-400 text-lg mb-12 font-medium">Traditional agencies are incentivized by your spend. We are incentivized by your profit. We engineer every dollar for maximum efficiency against your pre-defined CPA targets.</p>
                  
                  <div className="space-y-8">
                     <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center flex-shrink-0">
                           <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">Traditional Agencies</h4>
                           <p className="text-slate-500 text-sm font-medium leading-relaxed">Incentivized to increase your spend regardless of ROI. Retainers pay for effort, not outcomes.</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center flex-shrink-0">
                           <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">Mediant Yield Engine</h4>
                           <p className="text-slate-500 text-sm font-medium leading-relaxed">Incentivized to maximize your budget efficiency. We only profit when your pre-defined CPA is achieved.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  {/* Contact Form */}
                  <div className="glass-card p-12 rounded-[4rem] border-white/10 relative z-10">
                     <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Yield Efficiency Audit</h3>
                     <p className="text-slate-500 text-sm mb-10 font-medium italic">Our engineers will map your budget to deterministic CPA targets for maximum ROI.</p>
                     
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
                              placeholder="e.g. Scaling monthly volume by 2x while maintaining a $45 blended CPA."
                              value={formData.goal}
                              onChange={e => setFormData({...formData, goal: e.target.value})}
                           ></textarea>
                        </div>

                        <button 
                           type="submit"
                           className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-2xl"
                        >
                           Initialize Audit
                        </button>
                     </form>
                  </div>
                  {/* Backdrop Glow */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white/[0.01]">
         <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-4xl font-black text-white tracking-tighter mb-16 text-center">Frequently <span className="text-white/40 italic">Asked.</span></h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               {[
                  { q: "What defines an 'Action'?", a: "We define your core conversion event—whether it's an app install, a subscription purchase, or a high-intent lead. Our Attribution Mesh verifies every event to ensure your budget is spent with 99.8% precision." },
                  { q: "How do you optimize my budget?", a: "Our AI-driven bidding scripts reallocate spend in real-time to the highest-yield placements that consistently hit your target CPA." },
                  { q: "Is there a setup fee?", a: "For enterprise partners, we charge a one-time infrastructure setup fee to deploy the Attribution Mesh and custom ML models. After that, it's 100% CPA-driven." },
                  { q: "How do you handle creative costs?", a: "Full creative production is included. We produce infinite variants to ensure your budget is always fueling fresh, high-performing assets." }
               ].map((faq, i) => (
                  <div key={i} className="space-y-4">
                     <h4 className="text-white font-bold text-lg tracking-tight">{faq.q}</h4>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Pricing;

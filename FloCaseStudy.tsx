
import React from 'react';

interface FloCaseStudyProps {
  onNavigate: (page: any) => void;
}

const FloCaseStudy: React.FC<FloCaseStudyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center space-x-2 text-pink-500 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-pink-400 text-[10px] font-black tracking-[0.2em] uppercase">Enterprise Case Study</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Vertical: Health & Fitness</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              How Flo Achieved <br/>
              <span className="text-pink-500 italic">-40% CAC</span> <br/>
              at Global Scale.
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl font-medium leading-relaxed">
              Transitioning from broad deterministic tracking to the Mediant Attribution Mesh® to unlock retention-focused growth.
            </p>
          </div>
        </div>

        {/* Backdrop Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 -z-10 overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-600/10 blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-pink-500 font-black text-xs uppercase tracking-widest mb-2">Blended CAC</p>
              <h4 className="text-white font-black text-4xl md:text-5xl tracking-tighter">-40%</h4>
            </div>
            <div>
              <p className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2">D30 Retention</p>
              <h4 className="text-white font-black text-4xl md:text-5xl tracking-tighter">+22%</h4>
            </div>
            <div>
              <p className="text-purple-500 font-black text-xs uppercase tracking-widest mb-2">Creative Velocity</p>
              <h4 className="text-white font-black text-4xl md:text-5xl tracking-tighter">12x</h4>
            </div>
            <div>
              <p className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2">Scale Window</p>
              <h4 className="text-white font-black text-4xl md:text-5xl tracking-tighter">21 Days</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 max-w-3xl">
              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Challenge: Post-IDFA Volatility</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    As the world's leading female health app, Flo faced a critical inflection point following Apple's ATT rollout. Legacy attribution models were reporting a 60% loss in deterministic signal, leading to a <span className="text-white">45% increase in blended CAC</span> across their primary social channels.
                  </p>
                  <p>
                    The core problem was "Proxy Optimization": their ad platforms were optimizing for early-funnel signals that didn't correlate with long-term premium subscribers.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Strategy: Deploying the Attribution Mesh®</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Mediant integrated the <span className="text-pink-500">Attribution Mesh®</span> to reconstruct Flo's signal integrity. By moving measurement from the device to a server-side probabilistic model, we achieved:
                  </p>
                  <ul className="space-y-6 mt-12">
                    <li className="flex items-start space-x-6">
                      <div className="w-6 h-6 rounded-full border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                         <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Signal Rehydration</h4>
                        <p className="text-sm">Connecting anonymous web events to authenticated app installs with 99.8% precision.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-6">
                      <div className="w-6 h-6 rounded-full border border-pink-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                         <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">LTV Bid Orchestration</h4>
                        <p className="text-sm">Feeding predicted LTV scores back to Meta and TikTok within 4 hours of install.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Callout */}
              <div className="mb-20 glass-card p-12 rounded-[3.5rem] border-pink-500/20 bg-pink-500/5 relative overflow-hidden group">
                 <div className="relative z-10">
                   <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12 text-center">ROI Acceleration Curve</h4>
                   <div className="h-64 flex items-end justify-between space-x-2 px-8">
                     {[35, 40, 30, 55, 65, 85, 80, 110, 105, 140, 130, 160].map((h, i) => (
                       <div key={i} className="flex-1 flex flex-col justify-end">
                         <div 
                           className={`w-full rounded-t-lg transition-all duration-700 ${i >= 6 ? 'bg-pink-500' : 'bg-white/10'}`} 
                           style={{ height: `${h}%` }}
                         ></div>
                       </div>
                     ))}
                   </div>
                   <div className="flex justify-between mt-6 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] px-8">
                     <span>Pre-Mediant (Proxy Data)</span>
                     <span>Post-Mediant (Yield Mesh)</span>
                   </div>
                 </div>
              </div>

              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Result: Sustainable Global Scale</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Within 21 days of deployment, Flo observed a <span className="text-white">40% reduction in blended CAC</span> while simultaneously increasing daily spend by 300%. The increased signal density allowed for more aggressive bidding in high-LTV regions that were previously deemed "unprofitable."
                  </p>
                  <blockquote className="border-l-4 border-pink-500 pl-8 py-4 my-12 italic text-white text-2xl font-light tracking-tight">
                    "Mediant didn't just find us cheaper users; they found us the right users at scale. The signal clarity is unparalleled."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Sidebar CTAs */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-40 space-y-8">
                <div className="glass-card p-10 rounded-[3rem] border-white/5 bg-white/[0.02]">
                  <h4 className="text-white text-2xl font-black mb-6 tracking-tight leading-none">Ready for Flo-level <span className="text-pink-500">results?</span></h4>
                  <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed">Get a technical yield audit and see how much ROI you're leaving on the table.</p>
                  <button 
                    onClick={() => onNavigate('contact-sales')}
                    className="w-full bg-white text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-pink-50 transition-all active:scale-95 shadow-xl"
                  >
                    Contact Sales
                  </button>
                </div>

                <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Related Engineering</p>
                   <ul className="space-y-4">
                      <li>
                        <button onClick={() => onNavigate('attribution')} className="text-white font-bold text-sm hover:text-pink-400 transition-colors flex items-center">
                          Attribution Mesh® Spec
                          <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => onNavigate('creative')} className="text-white font-bold text-sm hover:text-pink-400 transition-colors flex items-center">
                          Creative Velocity AI
                          <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </li>
                   </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Final Section CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Initialize your <br/> <span className="text-pink-500 italic">growth loop.</span></h2>
             <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Join the hundreds of brands achieved terminal scale through digital yield engineering.</p>
             <button 
                onClick={() => onNavigate('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-pink-50 transition-all shadow-2xl"
             >
                Start My Yield Audit
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloCaseStudy;

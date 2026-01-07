
import React, { useState } from 'react';

interface TikTokVsMetaProps {
  onNavigate: (page: any) => void;
}

const TikTokVsMeta: React.FC<TikTokVsMetaProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Analysis Lead Captured:', email);
    alert('The full "TikTok vs. Meta: Yield Audit 2026" PDF has been sent to your inbox.');
    setEmail('');
  };

  return (
    <div className="pt-32 pb-20">
      {/* Article Hero */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center space-x-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">Market Analysis</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Read Time: 10 Minutes</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              TikTok vs. Meta: <br/>
              <span className="text-blue-400 italic">The Yield Battle</span> <br/>
              for 2026.
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl font-medium leading-relaxed">
              A data-driven comparison of inventory quality, user intent, and algorithmic scaling across the world's two largest social ecosystems.
            </p>
          </div>
        </div>

        {/* Dual Gradient Backdrop */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 -z-10">
           <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600/15 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Table of Contents / Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-40 space-y-12">
                <div>
                   <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Article Path</h5>
                   <ul className="space-y-6 text-sm font-bold tracking-tight text-slate-500">
                     <li className="text-blue-400"><a href="#inventory">Inventory Quality Analysis</a></li>
                     <li className="hover:text-white transition-colors"><a href="#intent">Intent Clustering</a></li>
                     <li className="hover:text-white transition-colors"><a href="#algorithms">Algorithmic Variance</a></li>
                     <li className="hover:text-white transition-colors"><a href="#recommendations">The 2026 Verdict</a></li>
                   </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl border-white/5 bg-blue-500/5">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Lead Analyst</p>
                  <p className="text-white font-bold mb-4">Sarah Chen</p>
                  <p className="text-slate-500 text-xs leading-relaxed">Director of Ecosystem Strategy at Mediant. Former Quantitative Lead at ByteDance.</p>
                </div>
              </div>
            </aside>

            {/* Article Narrative */}
            <div className="lg:col-span-9 max-w-4xl">
              
              <div id="inventory" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">01. Inventory Quality Analysis</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    As we move further into 2026, the gap between Meta and TikTok's inventory has shifted from "age-based" to "intent-based." Meta’s Advantage+ infrastructure continues to dominate in bottom-funnel stability, while TikTok’s "Content-First" placement engine excels at creating demand where none existed.
                  </p>
                  <p>
                    Our cross-client data shows that <span className="text-white">Meta’s CPMs</span> have stabilized after the 2025 volatility, while <span className="text-pink-500">TikTok's ad load</span> has increased by 18%, leading to a slight dip in average engagement but a significant rise in total conversions for lifestyle verticals.
                  </p>
                </div>
              </div>

              {/* Data Visualization Comparison */}
              <div className="mb-24 grid md:grid-cols-2 gap-8">
                <div className="glass-card p-10 rounded-[3rem] border-blue-500/20 bg-blue-500/5">
                   <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Meta Performance Index</h4>
                   <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                           <span className="text-slate-500">Conversion Stability</span>
                           <span className="text-blue-400">High</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[92%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                           <span className="text-slate-500">Creative Fatigue</span>
                           <span className="text-orange-400">Moderate</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-500/40 w-[65%]"></div>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="glass-card p-10 rounded-[3rem] border-pink-500/20 bg-pink-500/5">
                   <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">TikTok Performance Index</h4>
                   <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                           <span className="text-slate-500">Demand Creation</span>
                           <span className="text-pink-500">Extreme</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-pink-500 w-[98%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                           <span className="text-slate-500">Attribution Latency</span>
                           <span className="text-yellow-400">72h+</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-yellow-500/40 w-[82%]"></div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              <div id="intent" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">02. Intent Clustering</h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Meta users exhibit "Browsing Intent," while TikTok users exhibit "Discovery Velocity." This distinction is critical for your bidding strategy. On Meta, we recommend a <span className="text-white">Deterministic Bid Cap</span> model to preserve margins. On TikTok, the highest yield is currently found in <span className="text-white">Synthetic Signal Clusters</span> that optimize for early-session engagement markers.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-8 py-4 my-10 italic text-white text-2xl font-light tracking-tight">
                    "Meta is the billboard you see on the way to the store. TikTok is the store coming to your living room."
                  </blockquote>
                </div>
              </div>

              <div id="algorithms" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">03. Algorithmic Variance</h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    The rollout of Meta’s <span className="text-white">V4 Bidding Engine</span> has significantly reduced the cost of broad-targeting experiments. Conversely, TikTok's <span className="text-white">Search Ads Toggle</span> has opened a new front in high-intent acquisition that rivals Google’s historical dominance in the Gen-Z segment.
                  </p>
                  <p>
                    For brands spending over $500k/mo, the optimal ratio has shifted toward a 60/40 Meta/TikTok split, with a heavy emphasis on TikTok-native creative deployed via Meta’s Reels placement.
                  </p>
                </div>
              </div>

              {/* Lead Capture Block */}
              <div className="mb-24 relative">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="glass-card p-12 md:p-16 rounded-[3.5rem] border-blue-500/30 bg-blue-500/5 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                       <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                          </svg>
                       </div>
                       <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Full Comparative Data</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                      Want the full <span className="text-blue-500">2026</span> <br className="hidden md:block" /> Yield Audit? <span className="text-white/40 italic">Subscribe below.</span>
                    </h3>
                    
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl font-medium leading-relaxed">
                      Our 120-page technical audit covers placement-level CTR variance, CPM heatmaps by audience cluster, and our proprietary platform-mix calculator.
                    </p>

                    <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Professional Email" 
                        className="flex-grow bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                      />
                      <button 
                        type="submit"
                        className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95 flex items-center justify-center group"
                      >
                        Get Audit
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Conclusion & CTA */}
              <div className="pt-24 border-t border-white/10">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-12 rounded-[3.5rem] bg-white/[0.02] border-white/5 flex flex-col justify-between">
                       <div>
                          <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Need a platform-mix audit?</h4>
                          <p className="text-slate-500 text-sm font-medium mb-12">Our engineering team can analyze your historical data to find the exact budget split for your specific vertical.</p>
                       </div>
                       <button 
                         onClick={() => onNavigate('contact-sales')}
                         className="flex items-center text-white font-bold uppercase tracking-widest text-xs group"
                       >
                          Speak to Strategy
                          <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" /></svg>
                       </button>
                    </div>

                    <div className="glass-card p-12 rounded-[3.5rem] bg-blue-500/5 border-blue-500/20 flex flex-col justify-between">
                       <div>
                          <h4 className="text-2xl font-black text-white mb-4 tracking-tight">Ready to scale?</h4>
                          <p className="text-slate-500 text-sm font-medium mb-12">Initialize your yield loop today and let Mediant manage your omnichannel acquisition with surgical ROI.</p>
                       </div>
                       <button 
                         onClick={() => onNavigate('contact-sales')}
                         className="bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-xl"
                       >
                          Contact Sales
                       </button>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TikTokVsMeta;

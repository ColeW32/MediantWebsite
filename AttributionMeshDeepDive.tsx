
import React from 'react';

interface AttributionMeshDeepDiveProps {
  onNavigate: (page: any) => void;
}

const AttributionMeshDeepDive: React.FC<AttributionMeshDeepDiveProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Engineering Hero */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Intelligence Hub</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-indigo-400 text-[10px] font-black tracking-[0.2em] uppercase">Engineering Deep Dive</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Tech Stack: Snowflake, GTM SS, Rust</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              The Signal <br/>
              <span className="text-indigo-500 italic">Recovery Protocol.</span>
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl font-medium leading-relaxed">
              How the Attribution Mesh® reconstructs the fragmented post-IDFA user journey using multi-layered probabilistic modeling and server-side deterministic vaulting.
            </p>
          </div>
        </div>

        {/* Technical Backdrop */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20 -z-10">
           <div className="absolute top-1/2 right-10 -translate-y-1/2 w-1/3 h-[80%] border-l border-indigo-500/20 hidden lg:block">
              <div className="grid grid-cols-6 gap-2 p-8 h-full">
                 {[...Array(60)].map((_, i) => (
                   <div key={i} className={`h-4 w-full rounded-sm ${Math.random() > 0.8 ? 'bg-indigo-500/40' : 'bg-white/5'}`}></div>
                 ))}
              </div>
           </div>
           <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 max-w-4xl">
              
              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Problem: Deterministic Obsolescence</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    For over a decade, digital media was fueled by deterministic identifiers—the IDFA on iOS and AAID on Android. These IDs allowed for a 1:1 connection between an ad click and a purchase. With the advent of Apple's App Tracking Transparency (ATT), this link was severed for 60%+ of users.
                  </p>
                  <p>
                    Relying purely on platform-provided signals (SKAN) introduces significant <span className="text-white">latency and noise</span>. Algorithms that once optimized in minutes now wait 24-72 hours for privacy-obfuscated data.
                  </p>
                </div>
              </div>

              {/* Technical Diagram Block */}
              <div className="mb-20 glass-card p-12 rounded-[3.5rem] border-white/10 relative overflow-hidden bg-white/[0.02]">
                 <div className="relative z-10">
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12">Attribution Mesh Architecture (Signal Flow)</h4>
                    
                    <div className="flex flex-col space-y-8">
                       <div className="flex items-center space-x-6">
                          <div className="w-40 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white uppercase tracking-widest">Client Interaction</div>
                          <div className="flex-grow h-[1px] bg-white/10 relative">
                             <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 animate-ping"></div>
                          </div>
                          <div className="w-48 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-[10px] font-black text-indigo-400 uppercase tracking-widest text-center px-4">Deterministic Vault (Server-Side)</div>
                       </div>

                       <div className="flex justify-end">
                          <div className="w-[1px] h-12 bg-indigo-500/20 mr-24"></div>
                       </div>

                       <div className="flex items-center space-x-6">
                          <div className="flex-grow"></div>
                          <div className="w-64 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-4">
                             <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">Synthetic Signal Engine</p>
                             <p className="text-xs font-bold text-slate-400">ML Correlation (99.8% match confidence)</p>
                          </div>
                          <div className="flex-grow h-[1px] bg-white/10"></div>
                          <div className="w-40 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-black text-white uppercase tracking-widest">Bidding Logic</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">Layer 01: The Deterministic Vault</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    The first layer of recovery is the <span className="text-white">Deterministic Vault</span>. Instead of sending raw user data from the device to an ad platform, Mediant intercepts the signal at the server-side.
                  </p>
                  <p>
                    By hashing PII (Personally Identifiable Information) using zero-knowledge proofs, we can match user records with existing platform identities without ever exposing raw device IDs. This restores the 1:1 link for authenticated users (logged-in state) with zero privacy leakage.
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">Layer 02: Synthetic Signal Clustering</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    For anonymous users, we deploy <span className="text-white">Synthetic Signal Clustering</span>. This probabilistic layer doesn't try to "guess" who a user is. Instead, it analyzes 120+ micro-signals (temporal data, context, click-depth, content resonance) to correlate sessions with high-LTV outcomes.
                  </p>
                  <blockquote className="border-l-4 border-indigo-500 pl-8 py-4 my-12 italic text-white text-2xl font-light tracking-tight">
                    "We stop tracking people and start measuring probability. The result is a more resilient model that doesn't break when a browser update blocks a cookie."
                  </blockquote>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Engineering Impact</h2>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                   <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Latency Reduction</p>
                      <h4 className="text-white text-2xl font-black mb-2 tracking-tight">Real-time Feedback</h4>
                      <p className="text-slate-500 text-sm">Reducing attribution lag from 72 hours to <span className="text-white">sub-5 minutes</span>, allowing for intraday bid adjustments.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-4">Signal Integrity</p>
                      <h4 className="text-white text-2xl font-black mb-2 tracking-tight">99.8% Precision</h4>
                      <p className="text-slate-500 text-sm">Bypassing the inaccuracies of 'Modeled Conversions' with a deterministic baseline.</p>
                   </div>
                </div>
              </div>

              {/* Conclusion & CTAs */}
              <div className="mt-32 pt-24 border-t border-white/10">
                <div className="flex flex-col md:flex-row gap-8">
                   <div className="flex-grow glass-card p-12 rounded-[3.5rem] bg-indigo-500/5 border-indigo-500/20">
                      <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Ready for a <span className="text-indigo-500">technical audit?</span></h3>
                      <p className="text-slate-400 text-lg mb-10 font-medium">Connect your data team with our engineers to verify your current signal integrity and map your recovery protocol.</p>
                      <button 
                        onClick={() => onNavigate('contact-sales')}
                        className="bg-white text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-500/5"
                      >
                         Initialize Technical Audit
                      </button>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                   <button 
                      onClick={() => onNavigate('attribution')}
                      className="glass-card p-10 rounded-[3rem] border-white/5 text-left group hover:bg-white/[0.03] transition-all"
                   >
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Explore Solution</p>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">Attribution Mesh® Spec</h4>
                      <p className="text-slate-500 text-xs">View full product capabilities and enterprise integration options.</p>
                   </button>
                   <button 
                      onClick={() => onNavigate('benchmarks')}
                      className="glass-card p-10 rounded-[3rem] border-white/5 text-left group hover:bg-white/[0.03] transition-all"
                   >
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">View Benchmarks</p>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">Compare Your Yield</h4>
                      <p className="text-slate-500 text-xs">See the ROI delta between standard tracking and recovered signal.</p>
                   </button>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 hidden lg:block">
               <div className="sticky top-40 space-y-8">
                  <div className="glass-card p-10 rounded-[3rem] border-indigo-500/20 bg-indigo-500/5">
                     <h4 className="text-white text-2xl font-black mb-4 tracking-tight leading-none">Engineering <br/> Consultation</h4>
                     <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed">Book a 30-minute architectural walkthrough with our CTO to discuss your Snowflake/GTM setup.</p>
                     <button 
                        onClick={() => onNavigate('contact-sales')}
                        className="w-full bg-white text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all"
                     >
                        Speak to Engineering
                     </button>
                  </div>
                  
                  <div className="glass-card p-8 rounded-[2.5rem] border-white/5">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Related Intelligence</p>
                     <ul className="space-y-4">
                        <li>
                           <button onClick={() => onNavigate('post-idfa')} className="text-white font-bold text-sm hover:text-indigo-400 transition-colors flex items-center group">
                              The Post-IDFA Whitepaper
                              <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                           </button>
                        </li>
                        <li>
                           <button onClick={() => onNavigate('yield-index-report')} className="text-white font-bold text-sm hover:text-indigo-400 transition-colors flex items-center group">
                              Q4 Yield Index
                              <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AttributionMeshDeepDive;

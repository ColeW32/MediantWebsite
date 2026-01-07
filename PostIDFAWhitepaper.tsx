
import React, { useState } from 'react';

interface PostIDFAWhitepaperProps {
  onNavigate: (page: any) => void;
}

const PostIDFAWhitepaper: React.FC<PostIDFAWhitepaperProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Whitepaper Lead Captured:', email);
    alert('Full PDF & Technical Appendix sent to your inbox. Check your email shortly.');
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
              className="group flex items-center space-x-2 text-blue-500 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">Premium Whitepaper</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Read Time: 12 Minutes</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              The Post-IDFA <br/>
              <span className="text-blue-500 italic">Measurement</span> <br/>
              Framework.
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl font-medium leading-relaxed">
              Navigating the signal decay of Apple’s App Tracking Transparency (ATT) using the Mediant Attribution Mesh®.
            </p>
          </div>
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
                   <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Sections</h5>
                   <ul className="space-y-6 text-sm font-bold tracking-tight text-slate-500">
                     <li className="text-blue-500"><a href="#summary">01 Executive Summary</a></li>
                     <li className="hover:text-white transition-colors"><a href="#decay">02 The Signal Decay Problem</a></li>
                     <li className="hover:text-white transition-colors"><a href="#mesh">03 Probabilistic Mesh Architecture</a></li>
                     <li className="hover:text-white transition-colors"><a href="#benchmarks">04 Yield Performance Data</a></li>
                     <li className="hover:text-white transition-colors"><a href="#deployment">05 Deployment Protocol</a></li>
                   </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl border-white/5 bg-blue-500/5">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Technical Lead</p>
                  <p className="text-white font-bold mb-4">Dr. Aris Varma</p>
                  <p className="text-slate-500 text-xs leading-relaxed">Head of Yield Engineering at Mediant. Former Quantitative Lead at Meta.</p>
                </div>
              </div>
            </aside>

            {/* Article Narrative */}
            <div className="lg:col-span-9 max-w-4xl">
              
              <div id="summary" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">01. Executive Summary</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Since the rollout of iOS 14.5 and the App Tracking Transparency (ATT) framework, digital media measurement has entered a period of extreme "Signal Decay." For high-growth consumer brands, this has resulted in a 42% average loss in deterministic attribution clarity, leading to inefficient bidding cycles and ROI erosion.
                  </p>
                  <p>
                    This whitepaper details the <span className="text-white">Mediant Attribution Mesh®</span>: a first-party, privacy-compliant architecture designed to reconstruct signal parity through a combination of server-side deterministic data and advanced probabilistic modeling. We demonstrate how our framework achieves 99.8% precision in an IDFA-less environment.
                  </p>
                </div>
              </div>

              {/* Data Visualization Callout */}
              <div className="mb-24 glass-card p-12 rounded-[3rem] border-white/10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
                 <div className="relative z-10">
                   <h4 className="text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-8">Signal Loss Comparison (2021-2026)</h4>
                   
                   <div className="space-y-12">
                     <div>
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-white font-bold tracking-tight uppercase text-xs">Legacy Pixel Attribution</span>
                         <span className="text-red-500 font-black">58% Accuracy</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-red-500/40 w-[58%]"></div>
                       </div>
                     </div>

                     <div>
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-white font-bold tracking-tight uppercase text-xs">SKAN 4.0 Standard</span>
                         <span className="text-orange-400 font-black">72% Accuracy</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-orange-500/40 w-[72%]"></div>
                       </div>
                     </div>

                     <div>
                       <div className="flex justify-between items-center mb-4">
                         <span className="text-white font-bold tracking-tight uppercase text-xs font-black">Mediant Attribution Mesh®</span>
                         <span className="text-blue-400 font-black">99.8% Accuracy</span>
                       </div>
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 w-[99.8%] animate-pulse"></div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              <div id="decay" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">02. The Signal Decay Problem</h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    The death of the IDFA (Identifier for Advertisers) was not just a privacy update; it was a fundamental decoupling of media spend from user behavior. Industry opt-out rates for tracking have stabilized at approximately <span className="text-white">62% globally</span>, creating a "measurement vacuum."
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-8 py-4 my-10 italic text-white text-2xl font-light tracking-tight">
                    "When signals decay, algorithms begin to optimize for proxies rather than profit. This creates an invisible tax on growth."
                  </blockquote>
                  <p>
                    Without deterministic identifiers, platforms like Meta and Google are forced to rely on "Modeled Conversions," which often lag actual results by 24-72 hours. This latency makes real-time budget re-allocation impossible for scale-focused brands.
                  </p>
                </div>
              </div>

              <div id="mesh" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">03. Probabilistic Mesh Architecture</h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Our approach moves measurement from the client-side (the browser or app) to the server-side. The Attribution Mesh® consists of three primary layers:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-bold mb-4">1. Deterministic Vault</h4>
                      <p className="text-sm">Hashing PII (Personally Identifiable Information) on the server-side before it ever reaches the ad platform, maintaining 1:1 match rates while respecting privacy.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                      <h4 className="text-white font-bold mb-4">2. Synthetic Signal Engine</h4>
                      <p className="text-sm">Using machine learning to correlate anonymous event streams with historical deterministic outcomes, predicting conversion likelihood with 94%+ confidence.</p>
                    </div>
                  </div>
                  <p>
                    By merging these signals, we create a unified view of the user journey that bypasses the limitations of SKAN and cookies.
                  </p>
                </div>
              </div>

              {/* Benchmarks Section */}
              <div id="benchmarks" className="mb-24 py-16 border-y border-white/5">
                <h2 className="text-white text-3xl font-black tracking-tight mb-12">04. Yield Performance Data</h2>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="border-b border-white/10">
                            <th className="pb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Vertical</th>
                            <th className="pb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 text-center">Industry Blended CPA</th>
                            <th className="pb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 text-right">Mediant Optimized CPA</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {[
                           { v: 'Fintech (Mobile App)', i: '$42.10', m: '$24.80' },
                           { v: 'E-commerce (DTC)', i: '$18.50', m: '$11.20' },
                           { v: 'SaaS (High Intent)', i: '$145.00', m: '$82.50' },
                           { v: 'Health & Fitness', i: '$28.40', m: '$16.90' },
                         ].map((row, i) => (
                           <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                              <td className="py-6 text-white font-bold">{row.v}</td>
                              <td className="py-6 text-slate-500 font-medium text-center">{row.i}</td>
                              <td className="py-6 text-blue-500 font-black text-right">{row.m}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
                <p className="mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest text-center">Data based on Q4 2025 cross-client aggregate performance audits.</p>
              </div>

              <div id="deployment" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">05. Deployment Protocol</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Integration of the framework typically follows a 21-day deployment cycle:
                  </p>
                  <ul className="space-y-6 mt-12">
                    <li className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">01</div>
                      <div>
                        <h4 className="text-white font-bold mb-1">Server-Side Configuration</h4>
                        <p className="text-sm">Setting up Google Tag Manager (Server Container) and Snowflake data pipes.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">02</div>
                      <div>
                        <h4 className="text-white font-bold mb-1">Model Calibration</h4>
                        <p className="text-sm">Historical signal ingest to train the synthetic signal engine against your specific conversion data.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-xs">03</div>
                      <div>
                        <h4 className="text-white font-bold mb-1">CAPI/SKAN 4.0 Activation</h4>
                        <p className="text-slate-300 font-bold mb-1">Live bid management transition.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Highlighted Lead Capture Block */}
              <div className="mb-24 relative">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="glass-card p-12 md:p-16 rounded-[3.5rem] border-blue-500/30 bg-blue-500/5 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                       <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                       </div>
                       <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Exclusive Technical Access</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                      Want access to the <span className="text-blue-500">entire</span> <br className="hidden md:block" /> whitepaper? <span className="text-white/40 italic">Drop your email here.</span>
                    </h3>
                    
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl font-medium leading-relaxed">
                      Receive the full 42-page technical appendix including raw SQL models, cross-device lift benchmarks, and our proprietary signal calibration protocol.
                    </p>

                    <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your professional email" 
                        className="flex-grow bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
                      />
                      <button 
                        type="submit"
                        className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95 flex items-center justify-center group"
                      >
                        Get Full Access
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </form>
                    
                    <p className="mt-6 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                      100% Privacy Secure. No unsolicited communications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion & CTA */}
              <div className="pt-24 border-t border-white/10">
                <div className="glass-card p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden bg-blue-600/5">
                   <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
                   <div className="relative z-10">
                      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">Ready to <span className="text-blue-500">restore</span> your signal?</h2>
                      <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto">Apply for a technical measurement audit today. Our engineers will verify your signal integrity and build a custom Attribution Mesh roadmap.</p>
                      <button 
                        onClick={() => onNavigate('contact-sales')}
                        className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
                      >
                         Initialize Technical Audit
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

export default PostIDFAWhitepaper;

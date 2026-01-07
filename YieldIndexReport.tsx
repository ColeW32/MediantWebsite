
import React, { useState } from 'react';

interface YieldIndexReportProps {
  onNavigate: (page: any) => void;
}

const YieldIndexReport: React.FC<YieldIndexReportProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Yield Index Lead Captured:', email);
    alert('The Q4 2025 Yield Index Full Report has been sent to your inbox.');
    setEmail('');
  };

  return (
    <div className="pt-32 pb-20">
      {/* Light Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center space-x-2 text-green-500 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-green-400 text-[10px] font-black tracking-[0.2em] uppercase">Market Benchmark</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Q4 2025</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              Q4 2025 <br/>
              <span className="text-green-500 italic">Yield Index</span> <br/>
              Report.
            </h1>
            
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Real-time volatility analysis and CPM benchmarks across the 12 primary digital acquisition channels.
            </p>
          </div>
        </div>
      </section>

      {/* Lightweight Content Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="space-y-12 text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                Q4 2025 saw a <span className="text-white">14.2% shift</span> in inventory pricing across major social networks. High-LTV brands are increasingly pivoting away from legacy broad-targeting in favor of deterministic signal clusters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-2">Meta CPM</p>
                    <p className="text-white text-3xl font-black">+12.4%</p>
                    <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-tighter">Year-over-Year</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">TikTok CTR</p>
                    <p className="text-white text-3xl font-black">-0.48%</p>
                    <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-tighter">Fatigue Variance</p>
                 </div>
                 <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2">Mediant ROAS</p>
                    <p className="text-white text-3xl font-black">4.12x</p>
                    <p className="text-slate-500 text-xs mt-2 uppercase font-bold tracking-tighter">Network Baseline</p>
                 </div>
              </div>

              <p className="pt-8 italic text-slate-500">
                This teaser represents approximately 2% of the total data available in the full engineering appendix.
              </p>
            </div>

            {/* Lead Capture Block */}
            <div className="mt-32 relative">
              <div className="absolute inset-0 bg-green-600/10 blur-[120px] rounded-full opacity-50"></div>
              <div className="glass-card p-12 md:p-16 rounded-[3.5rem] border-green-500/30 bg-green-500/5 relative overflow-hidden group text-left">
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                     <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                     </div>
                     <span className="text-green-400 text-xs font-black uppercase tracking-[0.3em]">Premium Data Access</span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                    Want access to the <span className="text-green-500">entire</span> <br className="hidden md:block" /> report? <span className="text-white/40 italic">Drop your email here.</span>
                  </h3>
                  
                  <p className="text-slate-400 text-lg mb-10 max-w-2xl font-medium leading-relaxed">
                    Download the 82-page technical appendix including cross-platform CPM heatmaps, attribution variance by vertical, and our 2026 Q1 volatility forecast.
                  </p>

                  <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your professional email" 
                      className="flex-grow bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
                    />
                    <button 
                      type="submit"
                      className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all shadow-xl active:scale-95 flex items-center justify-center group"
                    >
                      Get Full Report
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom CTAs */}
            <div className="mt-32 pt-24 border-t border-white/10">
               <div className="grid md:grid-cols-2 gap-8">
                  <button 
                    onClick={() => onNavigate('contact-sales')}
                    className="glass-card p-12 rounded-[3rem] text-left border-white/5 hover:border-green-500/30 transition-all group"
                  >
                     <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-green-400 transition-colors">Audit My Yield</h4>
                     <p className="text-slate-500 text-sm font-medium mb-8">Compare your Q4 performance against our network benchmarks with a professional audit.</p>
                     <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                        Contact Sales
                        <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" /></svg>
                     </span>
                  </button>

                  <button 
                    onClick={() => onNavigate('benchmarks')}
                    className="glass-card p-12 rounded-[3rem] text-left border-white/5 hover:border-white/20 transition-all group"
                  >
                     <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">See Live Index</h4>
                     <p className="text-slate-500 text-sm font-medium mb-8">View our real-time tracking of CPM and ROI across active digital media channels.</p>
                     <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                        View Benchmarks
                        <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" /></svg>
                     </span>
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default YieldIndexReport;

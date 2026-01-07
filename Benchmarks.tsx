
import React from 'react';

interface BenchmarksProps {
  onNavigate: (page: 'home' | 'mobile-ua' | 'resources' | 'performance' | 'attribution' | 'lifecycle' | 'creative' | 'brand' | 'pricing' | 'contact-sales' | 'benchmarks') => void;
}

const ComparisonRow = ({ metric, industry, mediant, unit }: { metric: string, industry: string, mediant: string, unit: string }) => (
  <div className="grid grid-cols-3 gap-4 py-8 border-b border-white/5 items-center group">
    <div className="col-span-1">
      <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">{metric}</h4>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{unit}</p>
    </div>
    <div className="text-center">
      <span className="text-slate-500 font-medium text-lg">{industry}</span>
    </div>
    <div className="text-right">
      <span className="text-blue-500 font-black text-2xl">{mediant}</span>
    </div>
  </div>
);

const Benchmarks: React.FC<BenchmarksProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Performance Standards 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
              The Digital <br/>
              <span className="text-blue-500 italic">Yield Index.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Our data indicates that legacy agencies are leaving up to 40% of ROI on the table. Compare your benchmarks against the Mediant standard.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 pb-8 border-b border-white/10 mb-8 opacity-40">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Efficiency Metric</div>
              <div className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white">Industry Avg.</div>
              <div className="text-right text-[10px] font-black uppercase tracking-[0.3em] text-white">Mediant Yield</div>
            </div>

            <ComparisonRow metric="Cost Per Install (CPI)" industry="$4.82" mediant="$2.14" unit="iOS Blended Avg" />
            <ComparisonRow metric="Day 30 ROAS" industry="0.82x" mediant="1.54x" unit="Retention Weighted" />
            <ComparisonRow metric="Creative Fatigue Rate" industry="14 Days" mediant="Infinite" unit="Signal-Triggered Re-gen" />
            <ComparisonRow metric="Attribution Variance" industry="35-40%" mediant="0.2%" unit="Deterministic Precision" />
            <ComparisonRow metric="Terminal LTV Forecast" industry="+12%" mediant="+38%" unit="Year-over-Year Delta" />
          </div>
        </div>
      </section>

      {/* Visual Charts Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Scale without <br/><span className="text-white/40 italic">ROI decay.</span></h2>
                <p className="text-slate-400 text-lg mb-12 font-medium">As budget increases, performance typically dips. Mediant's Efficiency Engine® reverses the curve through real-time placement arbitrage and AI creative production.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-white font-bold">Mediant Yield Model</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <span className="text-slate-500 font-bold">Standard Agency Baseline</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                 <div className="glass-card p-10 rounded-[3rem] border-blue-500/20 aspect-video relative flex flex-col justify-end overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5"></div>
                    {/* The Chart lines */}
                    <div className="relative h-48 w-full border-l border-b border-white/10">
                       {/* Industry Decay Curve */}
                       <svg className="absolute inset-0 w-full h-full overflow-visible">
                          <path d="M 0 10 C 100 20, 300 150, 500 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round" />
                          {/* Mediant Efficiency Curve */}
                          <path d="M 0 10 C 150 5, 300 20, 500 10" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
                       </svg>
                       <div className="absolute top-0 right-0 p-4">
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Efficiency Multiplier</span>
                       </div>
                    </div>
                    <div className="flex justify-between mt-4 text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                       <span>$50k Spend</span>
                       <span>$500k Spend</span>
                       <span>$5M+ Spend</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Options */}
      <section className="py-32 relative">
         <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Ready to <span className="text-blue-500">out-perform?</span></h2>
               <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Join the hundreds of scale-focused brands achieving top-tier yield benchmarks.</p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                 <button 
                  onClick={() => onNavigate('contact-sales')}
                  className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
                 >
                    Scale My App
                 </button>
                 <button 
                  onClick={() => onNavigate('contact-sales')}
                  className="w-full sm:w-auto glass-card text-white px-12 py-6 rounded-full font-bold text-xl border-white/10 hover:bg-white/5 transition-all active:scale-95"
                 >
                    Get Started
                 </button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Benchmarks;

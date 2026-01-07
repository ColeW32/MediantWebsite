
import React from 'react';

interface MobileUAProps {
  onNavigate: (page: 'home' | 'mobile-ua' | 'resources' | 'performance' | 'attribution' | 'lifecycle' | 'creative' | 'brand' | 'pricing' | 'contact-sales' | 'benchmarks') => void;
}

const MobileUA: React.FC<MobileUAProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">iOS & Android Scale</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
              Surgical <span className="text-blue-500">Mobile UA</span> <br/>
              for the post-IDFA era.
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed mb-12">
              We engineer mobile acquisition systems that ignore tracking noise and focus on one thing: terminal lifetime value.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => onNavigate('contact-sales')}
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                Scale My App
              </button>
              <button 
                onClick={() => onNavigate('benchmarks')}
                className="glass-card text-white px-8 py-4 rounded-full font-bold text-lg border-white/10 hover:bg-white/5 transition-all"
              >
                View Benchmarks
              </button>
            </div>
          </div>
        </div>

        {/* Abstract App Store UI Background Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full pointer-events-none opacity-20 hidden lg:block">
           <div className="w-full h-full border-l border-white/10 p-12">
              <div className="space-y-8">
                <div className="h-4 bg-white/20 rounded-full w-3/4"></div>
                <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                <div className="h-64 bg-blue-500/10 rounded-[2rem] border border-blue-500/20"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-white/5 rounded-2xl"></div>
                  <div className="h-32 bg-white/5 rounded-2xl"></div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Specific UA Metrics */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-4">Baseline Improvement</p>
              <h3 className="text-5xl font-black text-white mb-2">-34% CPI</h3>
              <p className="text-slate-500 text-sm font-medium">Average reduction in cost-per-install through automated creative velocity.</p>
            </div>
            <div>
              <p className="text-purple-500 font-bold text-xs uppercase tracking-widest mb-4">Precision Scaling</p>
              <h3 className="text-5xl font-black text-white mb-2">99.8%</h3>
              <p className="text-slate-500 text-sm font-medium">Attribution accuracy powered by Mediant Attribution Mesh® technology.</p>
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-4">Scale Velocity</p>
              <h3 className="text-5xl font-black text-white mb-2">12+</h3>
              <p className="text-slate-500 text-sm font-medium">Global channels managed simultaneously with real-time signal processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UA Pillars Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                 Built for <span className="italic text-white/40">app dominance.</span>
               </h2>
               <div className="space-y-12">
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0 flex items-center justify-center">
                       <span className="text-blue-400 font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Cross-Platform Orchestration</h4>
                      <p className="text-slate-400 font-medium">Seamlessly sync iOS SKAN signals with Android high-intent traffic to maintain a holistic ROAS view.</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0 flex items-center justify-center">
                       <span className="text-purple-400 font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Predictive LTV Modeling</h4>
                      <p className="text-slate-400 font-medium">Our models predict D365 value within hours of installation, allowing for aggressive early-bid scaling.</p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-shrink-0 flex items-center justify-center">
                       <span className="text-orange-400 font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Automated Creative Iteration</h4>
                      <p className="text-slate-400 font-medium">Rapidly test hundreds of hooks, styles, and formats to combat creative fatigue before it starts.</p>
                    </div>
                 </div>
               </div>
             </div>
             
             <div className="glass-card p-8 rounded-[3rem] border-white/5 relative">
                <div className="aspect-square bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                   {/* Abstract Data Visualization */}
                   <div className="absolute inset-0 bg-blue-500/5"></div>
                   <div className="w-4/5 h-4/5 border border-white/5 rounded-full flex items-center justify-center">
                      <div className="w-full h-[1px] bg-white/10 absolute rotate-45"></div>
                      <div className="w-full h-[1px] bg-white/10 absolute -rotate-45"></div>
                      <div className="w-3/4 h-3/4 border border-blue-500/20 rounded-full border-dashed animate-spin-slow"></div>
                      <div className="w-1/2 h-1/2 glass-card rounded-3xl flex flex-col items-center justify-center text-center p-6 border-blue-500/30">
                        <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Scale Index</p>
                        <p className="text-4xl font-black text-white">9.4</p>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-4">
                          <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                   </div>
                </div>
                {/* Floating Tags */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-6 py-2 rounded-full border-white/10">
                   <p className="text-white font-bold text-xs">Ready for Scale</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileUA;

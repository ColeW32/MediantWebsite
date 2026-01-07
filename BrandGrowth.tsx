
import React from 'react';

const PillarCard = ({ title, desc, tag, color }: { title: string, desc: string, tag: string, color: string }) => (
  <div className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-white/10 transition-all duration-500 relative overflow-hidden">
    <div className={`absolute -bottom-12 -left-12 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>
    <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400">
      {tag}
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-pink-400 transition-colors">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

interface BrandGrowthProps {
  onNavigate?: (page: any) => void;
}

const BrandGrowth: React.FC<BrandGrowthProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-pink-400 text-xs font-bold tracking-[0.2em] uppercase">Narrative Architecture</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-10">
              Brand as an <br/>
              <span className="text-pink-500">Engine.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We bridge the gap between cultural resonance and performance yield. Scale your narrative with a media architecture built for legacy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-pink-50 transition-all shadow-xl shadow-pink-500/5 active:scale-95"
              >
                Design My Growth
              </button>
            </div>
          </div>
        </div>

        {/* Sophisticated Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10">
          <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-pink-600/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Equity Pulse Bar */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">82%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Aided Recall Lift</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">3.8x</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Search Intensity</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">+24%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Efficiency Delta</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">Top 5</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Category Share</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-pink-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Pillars</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">High-Frequency <span className="text-white/40 italic">Equity.</span></h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">Performance drives transactions; brand drives demand. We synchronize both to lower your blended CAC over the long term.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard 
              tag="Narrative"
              title="Identity Mesh"
              desc="A unified visual and verbal system that adapts across 12+ channels while maintaining a crystalline brand promise."
              color="bg-pink-600"
            />
            <PillarCard 
              tag="Resonance"
              title="Cultural Pulse"
              desc="Deep-tissue listening and sentiment modeling that allows your brand to react to trends in real-time without losing its core."
              color="bg-purple-600"
            />
            <PillarCard 
              tag="Efficiency"
              title="The Equity Bridge"
              desc="Quantifying the impact of brand sentiment on conversion efficiency to prove ROI on every 'top-of-funnel' dollar spent."
              color="bg-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Visualization: Narrative Architecture */}
      <section className="py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="glass-card p-1 rounded-[4rem] border-white/10 group cursor-default overflow-hidden">
                    <div className="aspect-[4/5] bg-[#050505] rounded-[3.8rem] relative flex items-center justify-center p-12 overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-40"></div>
                       {/* Abstract "Brand Pulse" Graphic */}
                       <div className="w-full space-y-4">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4">
                               <div className="w-12 h-1 bg-white/5 rounded-full"></div>
                               <div className={`h-1 bg-pink-500 rounded-full transition-all duration-[2000ms] group-hover:w-full`} style={{ width: `${20 + i * 15}%`, transitionDelay: `${i * 100}ms` }}></div>
                            </div>
                          ))}
                       </div>
                       
                       <div className="absolute top-12 left-12">
                          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Equity Mapping</p>
                          <p className="text-2xl font-black text-white italic">0.992 Integrity</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-2xl border-white/10 shadow-2xl">
                    <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-1">Brand Velocity</p>
                    <p className="text-lg font-black text-white">+142%</p>
                 </div>
              </div>

              <div>
                <span className="text-pink-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Framework</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Brand is not a <br/><span className="text-white/40 italic">cost center.</span></h2>
                <p className="text-slate-400 text-lg mb-12 font-medium">We treat brand building as a quantitative engineering task. By increasing aided recall and organic search volume, we inherently lower the CPM required to convert.</p>
                
                <ul className="space-y-8">
                   <li className="flex items-start space-x-6">
                      <div className="w-6 h-6 rounded-full border border-pink-500/50 flex items-center justify-center mt-1">
                         <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <div>
                         <h5 className="text-white font-bold text-lg mb-1 tracking-tight">Search Intent Capture</h5>
                         <p className="text-slate-500 text-sm font-medium">Scaling organic demand through high-frequency narrative seeding across social platforms.</p>
                      </div>
                   </li>
                   <li className="flex items-start space-x-6">
                      <div className="w-6 h-6 rounded-full border border-pink-500/50 flex items-center justify-center mt-1">
                         <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <div>
                         <h5 className="text-white font-bold text-lg mb-1 tracking-tight">Sentiment Elasticity</h5>
                         <p className="text-slate-500 text-sm font-medium">Building a brand moat that protects your margins even as market volatility increases.</p>
                      </div>
                   </li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Scale the <span className="text-pink-500">Unquantifiable.</span></h2>
             <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Ready to build a legacy brand that scales performance? Apply for our narrative architecture audit.</p>
             <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-pink-50 transition-all shadow-2xl shadow-pink-500/10 active:scale-95"
             >
                Start My Brand Audit
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandGrowth;

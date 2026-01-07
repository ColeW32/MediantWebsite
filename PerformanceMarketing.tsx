
import React from 'react';

const DisciplineCard = ({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactNode, color: string }) => (
  <div className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-10 shadow-2xl`}>
      {icon}
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed">
      {desc}
    </p>
  </div>
);

interface PerformanceMarketingProps {
  onNavigate?: (page: any) => void;
}

const PerformanceMarketing: React.FC<PerformanceMarketingProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
                <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">High-Yield Acquisition</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                Surgical <br/>
                <span className="text-blue-500">Performance</span> <br/>
                Marketing.
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl max-w-xl font-medium leading-relaxed mb-12">
                We don't just buy ads; we engineer profitable growth loops using proprietary yield modeling and high-intent audience orchestration.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => onNavigate?.('contact-sales')}
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95"
                >
                  Audit My Spend
                </button>
                <button 
                  onClick={() => onNavigate?.('contact-sales')}
                  className="glass-card text-white px-10 py-5 rounded-full font-bold text-lg border-white/10 hover:bg-white/5 transition-all active:scale-95"
                >
                  Explore Method
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-[3rem] p-8 border-blue-500/20 bg-blue-500/5 relative overflow-hidden aspect-square flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
                
                {/* Simulated ROI Chart */}
                <div className="w-full h-48 flex items-end space-x-2 px-8 mb-12">
                  {[30, 45, 35, 60, 55, 80, 75, 100, 95, 120, 115, 150].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-blue-500/40 rounded-t-lg relative group transition-all duration-500 hover:bg-blue-500"
                      style={{ height: `${h / 1.5}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-white transition-opacity">
                        +{h}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                   <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Yield Delta</p>
                   <h3 className="text-5xl font-black text-white">+184.2%</h3>
                   <p className="text-slate-500 text-sm mt-4 font-medium italic">Verified Q3 Performance Benchmark</p>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-6 -right-6 glass-card px-6 py-4 rounded-2xl border-white/10 shadow-2xl">
                 <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Signal Integrity</span>
                 </div>
                 <p className="text-xl font-black text-white">99.8%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Disciplines */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Disciplines</span>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">Engineered for <span className="text-white/40 italic">total dominance.</span></h2>
             <p className="text-slate-400 text-lg font-medium">We operate at the intersection of quantitative modeling and creative velocity to capture the highest value users in any market.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DisciplineCard 
              title="Search Arbitrage"
              desc="High-intent capture across Google and Bing using proprietary LTV bidding scripts."
              color="bg-blue-600/20 text-blue-400"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
            />
            <DisciplineCard 
              title="Social Yield"
              desc="Transforming Meta, TikTok, and Snap into reliable profit centers through creative iteration."
              color="bg-purple-600/20 text-purple-400"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <DisciplineCard 
              title="Programmatic"
              desc="Accessing the world's highest quality display and video inventory with first-party signal parity."
              color="bg-orange-600/20 text-orange-400"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            />
            <DisciplineCard 
              title="Retention UA"
              desc="Targeting users with high propensity for long-term retention rather than just top-line volume."
              color="bg-green-600/20 text-green-400"
              icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* Yield Process */}
      <section className="py-32 border-t border-white/5 relative bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Workflow</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12">From audit to <span className="text-white/40 italic">exponential.</span></h2>
                
                <div className="space-y-10">
                   <div className="flex items-start space-x-6">
                      <div className="text-4xl font-black text-white/10 italic">01</div>
                      <div>
                         <h4 className="text-xl font-bold text-white mb-2">Discovery & Baseline</h4>
                         <p className="text-slate-400 font-medium">We audit your pixel health, attribution setup, and existing spend to find the true cost of growth.</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-6">
                      <div className="text-4xl font-black text-white/10 italic">02</div>
                      <div>
                         <h4 className="text-xl font-bold text-white mb-2">Yield Modeling</h4>
                         <p className="text-slate-400 font-medium">Our engineers build custom predictive models that define your ideal bidding architecture per channel.</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-6">
                      <div className="text-4xl font-black text-white/10 italic">03</div>
                      <div>
                         <h4 className="text-xl font-bold text-white mb-2">Omnichannel Launch</h4>
                         <p className="text-slate-400 font-medium">We deploy across all viable channels simultaneously, controlled by our real-time Efficiency Engine.</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="relative">
                <div className="glass-card rounded-[3rem] p-12 border-blue-500/20">
                   <h4 className="text-white text-2xl font-black mb-8 tracking-tight">Q4 Target Matrix</h4>
                   <div className="space-y-6">
                      {[
                        { name: 'Direct Response Social', val: 88, color: 'bg-blue-500' },
                        { name: 'Intent Search', val: 94, color: 'bg-purple-500' },
                        { name: 'In-App Display', val: 62, color: 'bg-orange-500' },
                        { name: 'Retargeting Mesh', val: 78, color: 'bg-green-500' },
                      ].map((item, i) => (
                        <div key={i}>
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{item.name}</span>
                              <span className="text-white font-black text-sm">{item.val}%</span>
                           </div>
                           <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                              <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }}></div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Ready to <span className="text-blue-500">out-perform</span> your market?</h2>
              <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Our performance squads only take on partners with established signal density. Apply for a preliminary yield audit today.</p>
              <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl shadow-white/10 active:scale-95"
              >
                 Apply for Growth Audit
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;

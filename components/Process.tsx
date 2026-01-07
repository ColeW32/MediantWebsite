
import React from 'react';

const Step = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="relative pl-12 pb-16 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10 group-last:h-8"></div>
    {/* Circle */}
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full border border-white/20 bg-[#030303] flex items-center justify-center z-10 group-hover:border-blue-500/50 transition-colors">
      <span className="text-[10px] font-black text-white/50 group-hover:text-blue-400 transition-colors">{number}</span>
    </div>
    
    <div>
      <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
        {desc}
      </p>
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-12">
              From audit to <br/>
              <span className="text-white/40 italic">exponential scale.</span>
            </h2>
            
            <div className="mt-12">
              <Step 
                number="01" 
                title="Yield Audit" 
                desc="We perform a deep-tissue analysis of your current acquisition channels, identifies leaks, and finds your true baseline ROI."
              />
              <Step 
                number="02" 
                title="Infrastructure Deployment" 
                desc="We implement the Mediant Attribution Mesh and creative pipelines to stabilize your data foundation."
              />
              <Step 
                number="03" 
                title="Aggressive Scaling" 
                desc="Using our Efficiency Engine, we aggressively ramp spend across 12+ channels while maintaining strict profit margins."
              />
            </div>
          </div>

          <div className="relative group">
             {/* Visual representation of process - Abstract */}
             <div className="glass-card p-2 rounded-[3rem] overflow-hidden border-white/10 group-hover:border-blue-500/30 transition-all duration-700">
                <div className="bg-slate-900 aspect-square rounded-[2.5rem] relative overflow-hidden flex items-center justify-center p-12">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                   {/* Abstract circular graphic */}
                   <div className="w-full h-full relative border border-white/5 rounded-full flex items-center justify-center p-8">
                      <div className="w-full h-full border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
                      <div className="absolute w-3/4 h-3/4 border border-blue-500/20 rounded-full flex items-center justify-center">
                         <div className="w-1/2 h-1/2 border border-blue-500/40 rounded-full flex items-center justify-center">
                            <div className="w-1/3 h-1/3 bg-blue-500 rounded-full blur-[40px] opacity-40 animate-pulse"></div>
                            <span className="text-6xl font-black text-white italic tracking-tighter z-10">M</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Floaties */}
             <div className="absolute -top-10 -right-10 glass-card px-6 py-4 rounded-2xl hidden md:block">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Efficiency</p>
                <p className="text-lg font-black text-white">99.8%</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

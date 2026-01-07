
import React from 'react';

const CapabilityCard = ({ title, desc, tag, color }: { title: string, desc: string, tag: string, color: string }) => (
  <div className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-white/10 transition-all duration-500">
    <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-8 inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 ${color}`}>
      {tag}
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

const CreativeVelocityVisual = () => (
  <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-600/10 blur-[120px] rounded-full"></div>
    
    {/* The Synthesis Core */}
    <div className="relative z-20 w-32 h-32 rounded-3xl bg-[#0a0a0a] border border-orange-500/30 flex items-center justify-center shadow-2xl shadow-orange-500/20 animate-[float_6s_ease-in-out_infinite]">
       <div className="absolute inset-0 bg-orange-500/10 blur-xl rounded-full animate-pulse"></div>
       <div className="relative z-10 w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-orange-500/20 animate-[ping_3s_infinite]"></div>
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
       </div>
       
       {/* Rotating Ring */}
       <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] animate-[spin_10s_linear_infinite]"></div>
       <div className="absolute -inset-8 border border-white/5 rounded-[3rem] animate-[spin_15s_linear_infinite_reverse]"></div>
    </div>

    {/* Floating "Variants" */}
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="absolute glass-card rounded-2xl border-white/10 p-2 overflow-hidden shadow-2xl"
        style={{
          width: i % 2 === 0 ? '120px' : '90px',
          height: i % 2 === 0 ? '160px' : '120px',
          left: `${15 + (i * 12)}%`,
          top: `${20 + (i * 10)}%`,
          transform: `rotateX(20deg) rotateY(-15deg) translateZ(${i * 20}px)`,
          animation: `drift-slow ${20 + i * 5}s infinite alternate ease-in-out`,
          animationDelay: `${i * -2}s`,
          opacity: 0.3 + (i * 0.1)
        }}
      >
        <div className="w-full h-full bg-white/[0.02] rounded-xl flex flex-col justify-end p-2 relative">
           <div className={`absolute top-2 right-2 w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
           <div className="space-y-1">
              <div className="h-1 w-1/2 bg-white/10 rounded-full"></div>
              <div className="h-1 w-1/3 bg-white/5 rounded-full"></div>
           </div>
        </div>
      </div>
    ))}

    {/* Moving Data Particles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
       {[...Array(15)].map((_, i) => (
         <div 
           key={i}
           className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
           style={{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animation: `particle-float ${10 + Math.random() * 10}s infinite linear`,
             animationDelay: `${Math.random() * -10}s`
           }}
         ></div>
       ))}
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      @keyframes particle-float {
        0% { transform: translate(0, 0); opacity: 0; }
        20% { opacity: 0.6; }
        80% { opacity: 0.6; }
        100% { transform: translate(200px, -200px); opacity: 0; }
      }
    `}</style>
  </div>
);

interface CreativeVelocityProps {
  onNavigate?: (page: any) => void;
}

const CreativeVelocity: React.FC<CreativeVelocityProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-8">
                <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">AI Creative Studio</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                Rapid Iteration. <br/>
                <span className="text-orange-500">Infinite Scale.</span>
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed mb-12">
                Banish creative fatigue forever. Our AI-driven studio generates hundreds of high-performing variants tailored to your brand's unique yield model.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => onNavigate?.('contact-sales')}
                  className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl shadow-white/5 active:scale-95"
                >
                  Generate Variants
                </button>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="hidden lg:block">
              <CreativeVelocityVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">450+</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Weekly Variants</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">-60%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Creative CAC</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">12min</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Asset Production</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">3.1x</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Engagement Lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">Creative at the <span className="text-white/40 italic">speed of light.</span></h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">We combine quantitative performance data with generative AI to build a feedback loop that iterates on winners in real-time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard 
              tag="Intelligence"
              title="Yield-Driven Briefs"
              desc="Our system analyzes your top-performing conversion signals to automatically draft the next generation of creative hypotheses."
              color="text-orange-400"
            />
            <CapabilityCard 
              tag="Generative"
              title="Multi-Format Synthesis"
              desc="Generate video, static, and carousel assets simultaneously, optimized for the specific constraints of 12+ major social platforms."
              color="text-pink-400"
            />
            <CapabilityCard 
              tag="Feedback"
              title="Fatigue Detection"
              desc="Real-time monitoring of frequency and conversion decay triggers automated variant swaps before ROI begins to dip."
              color="text-blue-400"
            />
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[150px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Creative Pulse</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Winning is <br/><span className="text-white/40 italic">not an accident.</span></h2>
                <p className="text-slate-400 text-lg mb-10 font-medium">Traditional agencies take weeks to pivot. Mediant takes minutes. We treat every ad asset as a data point in a broader performance map.</p>
                
                <div className="space-y-6">
                   {[
                     { l: 'Hook Variation Testing', v: 98 },
                     { l: 'Visual Aesthetic Evolution', v: 82 },
                     { l: 'CTA Resonance Optimization', v: 91 },
                   ].map((item, i) => (
                     <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-white text-sm font-bold uppercase tracking-widest">{item.l}</span>
                           <span className="text-orange-400 font-black text-sm">{item.v}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-orange-500 rounded-full" style={{ width: `${item.v}%` }}></div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="relative">
                 <div className="glass-card p-4 rounded-[3rem] border-white/10 aspect-video flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[#050505] rounded-[2.5rem] relative flex items-center justify-center group overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-40"></div>
                       
                       {/* Grid of AI Creative Variants */}
                       <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group/variant">
                               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover/variant:opacity-100 transition-opacity"></div>
                               <div className="absolute bottom-2 left-2 flex flex-col">
                                  <div className="w-8 h-1 bg-orange-500/50 rounded-full mb-1"></div>
                                  <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                               </div>
                               <div className="absolute top-2 right-2 flex items-center space-x-1">
                                  <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-green-500' : 'bg-white/20'}`}></div>
                                  <span className="text-[6px] font-black text-white/40 uppercase tracking-widest">V{i+1}</span>
                               </div>
                            </div>
                          ))}
                       </div>

                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="glass-card px-6 py-3 rounded-full border-orange-500/30 bg-orange-500/10 backdrop-blur-md flex items-center space-x-3 shadow-2xl">
                             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                             <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Synthesis Engine Active</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Infinite <span className="text-orange-500">Variants.</span></h2>
             <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Ready to break the creative bottleneck? Connect your performance data and start generating winning variants today.</p>
             <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl shadow-orange-500/10 active:scale-95"
             >
                Start Generating
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeVelocity;

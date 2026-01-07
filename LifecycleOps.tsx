
import React from 'react';

const StrategyCard = ({ title, desc, tag, color }: { title: string, desc: string, tag: string, color: string }) => (
  <div className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-white/10 transition-all duration-500">
    <div className="flex justify-between items-start mb-10">
      <div className={`px-4 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] ${color}`}>
        {tag}
      </div>
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

interface LifecycleOpsProps {
  onNavigate?: (page: any) => void;
}

const LifecycleOps: React.FC<LifecycleOpsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">Retention Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
              Engineer <br/>
              <span className="text-blue-500">Terminal Value.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed mb-12">
              Maximize LTV by predicting churn before it happens. We build automated re-engagement infrastructure that turns casual users into terminal-value cohorts.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95"
              >
                Audit Retention
              </button>
            </div>
          </div>
        </div>

        {/* Abstract Retention Curve Background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-20 hidden lg:block overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 550C50 550 150 100 550 50" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear" x1="50" y1="550" x2="550" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {[100, 200, 300, 400, 500].map((v) => (
              <line key={v} x1="50" y1={v} x2="550" y2={v} stroke="white" strokeOpacity="0.05" />
            ))}
          </svg>
        </div>
      </section>

      {/* Core Metrics */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">+42%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">D180 Retention Lift</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">-28%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Churn Probability</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">3.4x</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">ARPU Multiplier</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black text-4xl mb-1">92%</h4>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Sync Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">The <span className="text-white/40 italic">Loop</span> Infrastructure.</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">We move beyond simple email sequences to create intelligent, event-driven lifecycle ecosystems that adapt to every user action.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StrategyCard 
              tag="Predictive"
              title="Churn Intelligence"
              desc="Proprietary ML models that identify churn risk markers at the user level, triggering intervention before the exit event."
              color="text-red-400 bg-red-400/10"
            />
            <StrategyCard 
              tag="Automation & Orchestration"
              title="Lifecycle Mesh"
              desc="Unified messaging across Push, SMS, Email, and In-app notifications, synchronized to avoid fatigue and maximize intent."
              color="text-blue-400 bg-blue-400/10"
            />
            <StrategyCard 
              tag="Financial"
              title="Yield Recovery"
              desc="Aggressive payment failure recovery systems and dunning management tailored to high-value subscription cohorts."
              color="text-green-400 bg-green-400/10"
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive Visualization */}
      <section className="py-32 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="glass-card p-12 rounded-[3rem] border-purple-500/20 aspect-square flex flex-col justify-center">
                    <div className="space-y-12">
                       {[
                         { name: 'Onboarding Flow', val: 94, status: 'Optimized' },
                         { name: 'Re-activation Loops', val: 76, status: 'Improving' },
                         { name: 'Referral Velocity', val: 42, status: 'Targeted' },
                         { name: 'VIP Concierge', val: 88, status: 'Scaling' },
                       ].map((item, i) => (
                         <div key={i}>
                            <div className="flex justify-between items-center mb-4">
                               <span className="text-white font-bold">{item.name}</span>
                               <span className="text-purple-400 text-[10px] font-black uppercase tracking-widest">{item.status}</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.val}%` }}></div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 {/* Decorative Overlay */}
                 <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full"></div>
              </div>

              <div>
                <span className="text-purple-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Cohort Architecture</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Retention is <br/><span className="text-white/40 italic">the new acquisition.</span></h2>
                <p className="text-slate-400 text-lg mb-10 font-medium">In the modern privacy era, your most profitable dollar is the one you don't have to spend a second time. We treat every cohort as a unique asset to be managed and compounded.</p>
                
                <ul className="space-y-6">
                   {[
                     'Dynamic re-engagement based on user behavior',
                     'Automated LTV segmentation & personalized offer logic',
                     'Seamless integration with your CRM & data stack',
                     'Real-time churn probability dashboarding'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center space-x-4">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                           <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-300 font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">Plug the <span className="text-purple-500">leaks.</span></h2>
             <p className="text-slate-400 text-xl md:text-2xl mb-12 font-medium">Start your retention audit and discover the hidden terminal value in your existing user base.</p>
             <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-purple-50 transition-all shadow-2xl"
             >
                Begin Cohort Audit
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifecycleOps;

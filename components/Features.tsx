
import React from 'react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  accent, 
  targetPage, 
  onNavigate 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  accent: string,
  targetPage: string,
  onNavigate?: (page: any) => void 
}) => (
  <div 
    onClick={() => onNavigate?.(targetPage)}
    className="glass-card group p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border-white/5 cursor-pointer"
  >
    {/* Hover Accent Glow */}
    <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${accent}`}></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors border border-white/10">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium">
        {description}
      </p>
      
      <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        View More Information
        <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" />
        </svg>
      </div>
    </div>
  </div>
);

interface FeaturesProps {
  onNavigate?: (page: any) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
            Engineering the <span className="text-white/40 italic font-medium tracking-tight">yield curve.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            We don't just buy media. We architect high-performance acquisition ecosystems designed for terminal scale and resilient profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Yield Optimization"
            description="Algorithmic bid management and placement optimization that targets high-LTV users with surgical precision."
            accent="bg-blue-600"
            targetPage="performance"
            onNavigate={onNavigate}
            icon={<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
          <FeatureCard 
            title="Attribution Mesh®"
            description="First-party data modeling that cuts through the noise of post-IDFA tracking, providing 99.8% measurement accuracy."
            accent="bg-purple-600"
            targetPage="attribution"
            onNavigate={onNavigate}
            icon={<svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.482V5a2 2 0 012-2h14a2 2 0 012 2v10.482a2 2 0 01-1.17 1.815L15 20m-6 0l6-6m-6 6l1.244-2.489A2 2 0 0111.756 16.511L15 14" /></svg>}
          />
          <FeatureCard 
            title="Creative Velocity"
            description="Our AI-driven creative studio generates hundreds of winning variants weekly, keeping your brand fatigue-proof."
            accent="bg-orange-600"
            targetPage="creative"
            onNavigate={onNavigate}
            icon={<svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

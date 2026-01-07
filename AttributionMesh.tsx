
import React from 'react';

const MeshDetail = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="group border-l border-white/10 pl-8 relative">
    <div className="absolute -left-[1px] top-0 h-8 w-[1px] bg-blue-500"></div>
    <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300 origin-left">
      {icon}
    </div>
    <h4 className="text-xl font-black text-white mb-2 tracking-tight">{title}</h4>
    <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
      {desc}
    </p>
  </div>
);

interface AttributionMeshProps {
  onNavigate?: (page: any) => void;
}

const AttributionMesh: React.FC<AttributionMeshProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">The Measurement Standard</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
              Attribution <span className="text-blue-500">Mesh®</span> <br/>
              <span className="text-white/40 italic">Deterministic precision.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Bypass the noise of IDFA and privacy constraints. Our first-party signal modeling delivers 99.8% measurement integrity in real-time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-2xl shadow-white/5"
              >
                Request Integration
              </button>
            </div>
          </div>
        </div>

        {/* Abstract Mesh Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-10 pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 500H1000M500 0V1000" stroke="white" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
            <circle cx="500" cy="500" r="250" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
            <circle cx="500" cy="500" r="400" stroke="white" strokeWidth="0.5" />
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="500" y1="500" x2={500 + 400 * Math.cos(i * Math.PI / 6)} y2={500 + 400 * Math.sin(i * Math.PI / 6)} stroke="white" strokeWidth="0.5" opacity="0.5" />
            ))}
          </svg>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 relative border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Signal Parity</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Cut through the <br/><span className="text-white/40 italic">attribution fog.</span></h2>
              <p className="text-slate-400 text-lg mb-12 font-medium">Standard tracking relies on third-party cookies and fragmented ID systems. Attribution Mesh® utilizes a proprietary first-party mesh to connect disparate touchpoints deterministically.</p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <MeshDetail 
                  title="Probabilistic Bridge"
                  desc="Fills the gaps where deterministic signals are unavailable using cross-device modeling."
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                />
                <MeshDetail 
                  title="Signal Vault"
                  desc="GDPR/CCPA compliant encryption for all user touchpoints at the edge."
                  icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                />
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-[3rem] p-12 border-blue-500/20 aspect-[4/3] flex flex-col justify-center">
                 <div className="space-y-8">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                       <span>Traditional Tracking</span>
                       <span className="text-red-500">42% Dropoff</span>
                    </div>
                    <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-red-500/40 w-[58%] rounded-full"></div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                       <span>Attribution Mesh®</span>
                       <span className="text-blue-400">0.2% Variance</span>
                    </div>
                    <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[99.8%] rounded-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                 </div>
                 
                 <div className="mt-16 pt-12 border-t border-white/5">
                    <p className="text-white text-2xl font-black italic tracking-tighter mb-4">"The missing link in our ROI modeling."</p>
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10"></div>
                       <div>
                          <p className="text-white text-sm font-bold">VP Growth, Kalshi</p>
                          <p className="text-slate-500 text-[10px] uppercase font-black">Enterprise Partner</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Spec Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Built for <span className="text-blue-500">Infrastructure.</span></h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Native integrations with Snowflake, BigQuery, and Redshift to pipe high-integrity signals directly into your data warehouse.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: '99.8% Signal Clarity', d: 'Eliminate post-back latency and measurement gaps with edge-processed deterministic IDs.' },
              { t: 'Privacy-First Logic', d: 'Zero-knowledge proofs ensure compliance without sacrificing the resolution of your data.' },
              { t: 'Omnichannel Fabric', d: 'Unified view across CTV, Social, Web, and Mobile App with synchronized timestamping.' }
            ].map((spec, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-blue-500/20 transition-all duration-500">
                <h4 className="text-xl font-black text-white mb-4 tracking-tight">{spec.t}</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{spec.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="glass-card py-24 rounded-[4rem] border-blue-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
             <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">Ready for <span className="text-blue-500">perfect signal?</span></h2>
                <p className="text-slate-400 text-xl font-medium mb-12 leading-relaxed">Schedule a technical walkthrough of the Attribution Mesh architecture with our engineering squad.</p>
                <button 
                  onClick={() => onNavigate?.('contact-sales')}
                  className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl"
                >
                   Book Tech Audit
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttributionMesh;


import React from 'react';

const partners = [
  "ChatGPT", "Kalshi", "Capital One", "Flo", "Disney+", "Etsy", "Strava", 
  "Fetch", "Starbucks", "Instacart", "Robinhood", "Klarna", "TikTok", "Walmart"
];

interface HeroProps {
  onNavigate?: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 z-10">
            {/* Session Badge */}
            <div 
              onClick={() => onNavigate?.('contact-sales')}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Growth 2026</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-slate-300 text-xs font-medium group-hover:text-white transition-colors">Early-bird ROI auditing now open</span>
              <svg className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
              Media infrastructure <br/>
              <span className="text-white/50">to grow your</span> <br/>
              digital yield.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-normal">
              Join the hundreds of consumer brands using Mediant to optimize acquisition, scale mobile ecosystems, and build a more profitable digital footprint.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <div className="w-full sm:w-auto flex items-center bg-white rounded-full p-1 pl-4 shadow-xl border border-white/20">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none text-black text-sm font-medium focus:ring-0 w-48 placeholder-slate-400"
                />
                <button 
                  onClick={() => onNavigate?.('contact-sales')}
                  className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center group active:scale-95 transition-transform"
                >
                  Start now
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              {/* Primary Dashboard Card */}
              <div className="glass-card rounded-[2rem] p-8 w-full max-sm:max-w-xs max-w-sm ml-auto relative overflow-hidden ring-1 ring-white/10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[10px] font-bold text-white/30 tracking-widest">LIVE ROAS</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Total Yield</p>
                  <h3 className="text-4xl font-black text-white">$4,129,082.41</h3>
                </div>

                {/* Micro Chart Mockup */}
                <div className="h-32 flex items-end space-x-1 mb-6">
                  {[40, 70, 45, 90, 65, 85, 50, 95, 80, 110, 85, 120].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                      style={{ height: `${h}%`, opacity: 0.3 + (i * 0.05) }}
                    ></div>
                  ))}
                </div>

                <div className="stripe-divider mb-6"></div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">Retention Rate</span>
                    <span className="text-green-400 text-xs font-bold">+12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-xs">LTV Forecast</span>
                    <span className="text-blue-400 text-xs font-bold">$184.20</span>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Card - Yield Intelligence */}
              <div className="absolute -bottom-10 -left-10 glass-card rounded-2xl p-6 w-64 hidden md:block border-blue-500/30 shadow-2xl ring-1 ring-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Yield Intelligence</p>
                      <p className="text-sm font-black text-white">Efficiency Engine</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[9px] font-bold text-green-400/80 uppercase">Active</span>
                  </div>
                </div>
                
                <div className="space-y-1 mb-4">
                  <div className="text-2xl font-black text-white tracking-tight">4.82x</div>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Top 1% Global ROAS</div>
                </div>

                <div className="flex items-center space-x-1">
                   {[...Array(6)].map((_, i) => (
                     <div key={i} className={`h-1 flex-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-white/10'}`}></div>
                   ))}
                </div>
              </div>
            </div>

            {/* Background geometric blur for the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>

        </div>

        {/* Footer Marquee Logos / Partners */}
        <div className="mt-24 pt-12">
          <div className="marquee-wrapper">
            <div className="marquee-content gap-12 lg:gap-20 opacity-40 grayscale items-center py-4">
              {/* Double the list for seamless loop */}
              {[...partners, ...partners].map((name, index) => (
                <Partner key={index} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partner: React.FC<{name: string}> = ({ name }) => (
  <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-300 hover:text-white transition-colors cursor-default uppercase italic whitespace-nowrap">
    {name}
  </span>
);

export default Hero;

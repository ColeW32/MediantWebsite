
import React, { useState } from 'react';

interface CreativeVelocityBlogProps {
  onNavigate: (page: any) => void;
}

const CreativeVelocityBlog: React.FC<CreativeVelocityBlogProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creative Velocity Lead Captured:', email);
    alert('The full "Creative Velocity Blueprint" has been sent to your inbox.');
    setEmail('');
  };

  return (
    <div className="pt-32 pb-20">
      {/* Article Hero */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <button 
              onClick={() => onNavigate('resources')}
              className="group flex items-center space-x-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </button>

            <div className="inline-flex items-center space-x-3 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
              <span className="text-orange-400 text-[10px] font-black tracking-[0.2em] uppercase">Tactical Guide</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Read Time: 8 Minutes</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              Creative Velocity: <br/>
              <span className="text-orange-500 italic">Scaling Iteration</span> <br/>
              at Algorithmic Speed.
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl max-w-3xl font-medium leading-relaxed">
              Why traditional creative cycles are failing, and how to deploy generative AI to stay ahead of ad fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-40 space-y-12">
                <div>
                   <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-6">In this guide</h5>
                   <ul className="space-y-6 text-sm font-bold tracking-tight text-slate-500">
                     <li className="text-orange-500"><a href="#fatigue">The Death of 2-Week Sprints</a></li>
                     <li className="hover:text-white transition-colors"><a href="#ai-synthesis">Generative Synthesis</a></li>
                     <li className="hover:text-white transition-colors"><a href="#hooks">Hook Distribution Strategy</a></li>
                     <li className="hover:text-white transition-colors"><a href="#benchmarks">Performance Benchmarks</a></li>
                   </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl border-white/5 bg-orange-500/5">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-2">Lead Strategist</p>
                  <p className="text-white font-bold mb-4">Marcus Jene</p>
                  <p className="text-slate-500 text-xs leading-relaxed">Head of Creative Science at Mediant. Former Creative Lead at Google Creative Lab.</p>
                </div>
              </div>
            </aside>

            {/* Main Narrative */}
            <div className="lg:col-span-9 max-w-4xl">
              
              <div id="fatigue" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">The Death of the 2-Week Creative Sprint</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    In the current digital ecosystem, ad fatigue sets in faster than most agencies can review a storyboard. On platforms like TikTok and Meta, the "decay window"—the time it takes for a winning ad's performance to drop by <span className="text-white">50%</span>—has shrunk to just <span className="text-white">4.2 days</span> for high-spend accounts ($100k+/mo).
                  </p>
                  <p>
                    The traditional model of bi-weekly creative calls and multi-day production cycles is no longer a bottleneck; it is a liability. To maintain terminal yield, brands must shift from "Creative Production" to <span className="text-white">"Creative Velocity."</span>
                  </p>
                </div>
              </div>

              {/* Visualization Block */}
              <div className="mb-24 glass-card p-12 rounded-[3rem] border-orange-500/20 relative overflow-hidden bg-orange-500/5">
                 <div className="relative z-10">
                    <h4 className="text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-12">The Decay Reversal (ROI vs Volume)</h4>
                    <div className="h-64 flex items-end justify-between space-x-2">
                       {/* Abstract decay bars */}
                       {[80, 75, 50, 40, 30, 95, 90, 85, 80, 100].map((h, i) => (
                         <div key={i} className="flex-1 flex flex-col justify-end">
                            {i === 5 && (
                              <div className="text-[8px] font-black text-orange-400 uppercase tracking-widest text-center mb-2">Variant Swap</div>
                            )}
                            <div 
                              className={`w-full rounded-t-lg transition-all duration-700 ${i >= 5 ? 'bg-orange-500' : 'bg-white/10'}`} 
                              style={{ height: `${h}%` }}
                            ></div>
                         </div>
                       ))}
                    </div>
                    <div className="flex justify-between mt-6 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                       <span>Week 1 (Fatigue)</span>
                       <span>Week 2 (Mediant Velocity)</span>
                    </div>
                 </div>
              </div>

              <div id="ai-synthesis" className="mb-24">
                <h2 className="text-white text-3xl font-black tracking-tight mb-8">Generative Synthesis: 450+ Weekly Variants</h2>
                <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    Mediant’s AI Creative Studio doesn't just "make ads." We synthesize variants based on specific performance vectors. Our engine analyzes every second of your current winners to identify the <span className="text-white">exact frame-rate, color-grading, and hook-timing</span> that triggers your target CPA.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 my-12">
                     <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h5 className="text-white font-bold mb-3">Modular Hooking</h5>
                        <p className="text-sm">Generating 50+ unique first-3-second variations for every primary asset to maximize thumb-stop rates.</p>
                     </div>
                     <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h5 className="text-white font-bold mb-3">Algorithmic Resizing</h5>
                        <p className="text-sm">Automatic adaptation of narrative pacing and visual focal points across 9:16, 1:1, and 4:5 formats.</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Benchmarks Section */}
              <div id="benchmarks" className="mb-24 py-16 border-y border-white/5">
                <h2 className="text-white text-3xl font-black tracking-tight mb-12">The Impact of Velocity</h2>
                <div className="space-y-10">
                   {[
                     { label: 'Asset Production Speed', industry: '14 Days', mediant: '12 Minutes', delta: '110x faster' },
                     { label: 'Creative CAC Decay', industry: '2.4x/mo', mediant: 'Flat line', delta: 'Infinite Fatigue Resistance' },
                     { label: 'Weekly Variants Produced', industry: '4-8', mediant: '450+', delta: 'Scale Infinity' }
                   ].map((row, i) => (
                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between group p-4 rounded-2xl hover:bg-white/[0.02] transition-colors">
                        <div className="mb-2 md:mb-0">
                           <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{row.label}</p>
                           <p className="text-white font-bold text-xl">{row.mediant}</p>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{row.delta}</p>
                           <p className="text-slate-600 text-sm italic font-medium">vs {row.industry} avg</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Lead Capture */}
              <div className="mb-32 relative">
                <div className="absolute inset-0 bg-orange-600/10 blur-[120px] rounded-full opacity-50"></div>
                <div className="glass-card p-12 md:p-16 rounded-[3.5rem] border-orange-500/30 bg-orange-500/5 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                       <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                       </div>
                       <span className="text-orange-400 text-xs font-black uppercase tracking-[0.3em]">Premium Growth Blueprint</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                      Want access to the <span className="text-orange-500">entire</span> <br className="hidden md:block" /> guide? <span className="text-white/40 italic">Drop your email here.</span>
                    </h3>
                    
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl font-medium leading-relaxed">
                      Download the 58-page "Creative Velocity Playbook," featuring our prompt library for high-CPA social ads and 2026 hook-distribution frameworks.
                    </p>

                    <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your professional email" 
                        className="flex-grow bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
                      />
                      <button 
                        type="submit"
                        className="bg-white text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl active:scale-95 flex items-center justify-center group"
                      >
                        Get Access
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Final CTAs */}
              <div className="pt-24 border-t border-white/10">
                 <div className="grid md:grid-cols-2 gap-8">
                    <button 
                      onClick={() => onNavigate('contact-sales')}
                      className="glass-card p-12 rounded-[3rem] text-left border-white/5 hover:border-orange-500/30 transition-all group"
                    >
                       <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors">Start My Audit</h4>
                       <p className="text-slate-500 text-sm font-medium mb-8">Get a technical audit of your creative performance and fatigue markers.</p>
                       <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                          Contact Sales
                          <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" /></svg>
                       </span>
                    </button>

                    <button 
                      onClick={() => onNavigate('pricing')}
                      className="glass-card p-12 rounded-[3rem] text-left border-white/5 hover:border-white/20 transition-all group"
                    >
                       <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">View Yield Models</h4>
                       <p className="text-slate-500 text-sm font-medium mb-8">See how our CPA-only pricing handles infinite creative production.</p>
                       <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                          Pricing Structure
                          <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" /></svg>
                       </span>
                    </button>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeVelocityBlog;

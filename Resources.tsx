
import React from 'react';

// Define a named interface for ResourceCard props
interface ResourceCardProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  color: string;
  onClick?: () => void;
}

// Use React.FC to handle component props more robustly with standard React attributes like key
const ResourceCard: React.FC<ResourceCardProps> = ({ category, title, description, readTime, color, onClick }) => (
  <div 
    onClick={onClick}
    className="glass-card group p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border-white/5 flex flex-col h-full cursor-pointer"
  >
    <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 ${color.replace('bg-', 'text-')}`}>
          {category}
        </span>
      </div>
      
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm mb-8 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{readTime} read</span>
        <button className="text-white hover:text-blue-400 transition-colors flex items-center text-xs font-bold uppercase tracking-widest">
          Access Now
          <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M5 12h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

interface ResourcesProps {
  onNavigate?: (page: any) => void;
}

const Resources: React.FC<ResourcesProps> = ({ onNavigate }) => {
  const featuredResources = [
    {
      id: 'post-idfa',
      category: "Whitepaper",
      title: "The Post-IDFA Measurement Framework",
      description: "How the world's fastest growing brands are navigating the privacy-first era with probabilistic attribution mesh.",
      readTime: "12 min",
      color: "bg-blue-600"
    },
    {
      id: 'creative-velocity',
      category: "Guide",
      title: "Creative Velocity: Scaling Ad Iteration",
      description: "A blueprint for using generative AI to produce high-performing ad variations at 10x the speed of traditional agencies.",
      readTime: "8 min",
      color: "bg-purple-600"
    },
    {
      id: 'yield-index',
      category: "Benchmarks",
      title: "Q4 2025 Yield Index Report",
      description: "The definitive benchmark report for CPM, CPC, and LTV performance across 12 major digital acquisition channels.",
      readTime: "15 min",
      color: "bg-orange-600"
    }
  ];

  const archiveResources = [
    {
      id: 'freecash-guide',
      category: "Industry Guide",
      title: "Where Does Freecash Get Its Ads From?",
      description: "A complete guide for building competing rewards apps and understanding the offer network ecosystem.",
      readTime: "18 min",
      color: "bg-green-600"
    },
    {
      id: 'flo-case-study',
      category: "Case Study",
      title: "How Flo Achieved -40% CAC",
      description: "Scaling retention-focused acquisition in the health & fitness sector.",
      readTime: "6 min",
      color: "bg-pink-600"
    },
    {
      id: 'tiktok-vs-meta',
      category: "Analysis",
      title: "TikTok vs. Meta: The Yield Battle",
      description: "A data-driven comparison of inventory quality and user intent in 2026.",
      readTime: "10 min",
      color: "bg-blue-400"
    },
    {
      id: 'attribution-mesh-technical',
      category: "Engineering",
      title: "The Signal Recovery Protocol",
      description: "How Attribution Mesh® reconstructs user journeys with 99.8% precision without relying on device identifiers.",
      readTime: "25 min",
      color: "bg-indigo-600"
    }
  ];

  const handleResourceClick = (id?: string) => {
    if (id === 'post-idfa' && onNavigate) {
      onNavigate('post-idfa');
    } else if (id === 'creative-velocity' && onNavigate) {
      onNavigate('creative-velocity-blog');
    } else if (id === 'yield-index' && onNavigate) {
      onNavigate('yield-index-report');
    } else if (id === 'freecash-guide' && onNavigate) {
      onNavigate('freecash-guide');
    } else if (id === 'flo-case-study' && onNavigate) {
      onNavigate('flo-case-study');
    } else if (id === 'tiktok-vs-meta' && onNavigate) {
      onNavigate('tiktok-vs-meta');
    } else if (id === 'attribution-mesh-technical' && onNavigate) {
      onNavigate('attribution-deep-dive');
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">Intelligence Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
              Digital <span className="text-blue-500">Yield</span> <br/>
              Engineering Intelligence.
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Deep-tissue insights, performance benchmarks, and growth frameworks for the next generation of digital media leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Primary Assets</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Featured <span className="text-white/40 italic">Reports</span></h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((res, i) => (
              <ResourceCard 
                key={i} 
                {...res} 
                onClick={() => handleResourceClick(res.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-16">Archive & <span className="text-white/40 italic">Deep Dives</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {archiveResources.map((res, i) => (
              <ResourceCard 
                key={i} 
                {...res} 
                onClick={() => handleResourceClick(res.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Overlay */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="glass-card p-12 md:p-20 rounded-[3rem] border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
              <div className="max-w-2xl relative z-10">
                 <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">Never miss a <span className="text-blue-400 italic">yield cycle.</span></h2>
                 <p className="text-slate-400 text-lg mb-10 font-medium">Get our monthly analysis on the state of digital media, creative trends, and ROI benchmarks delivered to your inbox.</p>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-grow bg-[#050505] border border-white/10 rounded-full px-6 py-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500/50 outline-none"
                    />
                    <button className="bg-white text-black px-10 py-4 rounded-full font-bold transition-all hover:bg-blue-50 shadow-xl shadow-white/5">
                       Subscribe
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

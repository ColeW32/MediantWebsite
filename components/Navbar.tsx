
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'mobile-ua' | 'resources' | 'performance' | 'attribution' | 'lifecycle' | 'creative' | 'brand' | 'pricing' | 'contact-sales' | 'benchmarks') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    { id: 'mobile-ua', title: 'Mobile UA', desc: 'Scale iOS and Android apps profitably.' },
    { id: 'performance', title: 'Performance Marketing', desc: 'Surgical acquisition with high-LTV focus.' },
    { id: 'attribution', title: 'Attribution Mesh®', desc: 'First-party data modeling with 99.8% precision.' },
    { id: 'lifecycle', title: 'Lifecycle Ops', desc: 'Retention modeling to boost terminal value.' },
    { id: 'creative', title: 'Creative Velocity', desc: 'AI-driven rapid iteration for ad assets.' },
    { id: 'brand', title: 'Brand Growth', desc: 'Narrative-driven media architecture.' }
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      if (id === 'mobile-ua') onNavigate('mobile-ua');
      else if (id === 'performance') onNavigate('performance');
      else if (id === 'attribution') onNavigate('attribution');
      else if (id === 'lifecycle') onNavigate('lifecycle');
      else if (id === 'creative') onNavigate('creative');
      else if (id === 'brand') onNavigate('brand');
      setIsSolutionsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#030303]/90 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => onNavigate?.('home')}
          >
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Mediant</span>
          </div>

          <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold text-slate-300/80">
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 hover:text-white transition-colors py-2 ${isSolutionsOpen ? 'text-white' : ''}`}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <span>Solutions</span>
                <svg className={`w-3 h-3 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full -left-4 pt-4 transition-all duration-300 transform ${isSolutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                <div className="bg-[#050505]/95 backdrop-blur-3xl w-[520px] rounded-2xl p-6 grid grid-cols-2 gap-2 border border-white/10 shadow-2xl overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                   
                   {solutions.map((sol, i) => (
                     <a 
                       key={i} 
                       href="#" 
                       onClick={(e) => handleLinkClick(e, sol.id)}
                       className="p-4 rounded-xl hover:bg-white/5 group transition-all relative z-10 border border-transparent hover:border-white/5"
                     >
                       <h4 className="text-white text-sm font-bold mb-1 group-hover:text-blue-400 transition-colors">{sol.title}</h4>
                       <p className="text-slate-500 text-[11px] leading-snug font-medium group-hover:text-slate-400 transition-colors">{sol.desc}</p>
                     </a>
                   ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate?.('resources')}
              className="hover:text-white transition-colors"
            >
              Resources
            </button>
            <button 
              onClick={() => onNavigate?.('pricing')}
              className="hover:text-white transition-colors"
            >
              Pricing
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <button 
            onClick={() => onNavigate?.('contact-sales')}
            className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold transition-all border border-white/10 group"
          >
            Contact sales
            <svg className="inline-block ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

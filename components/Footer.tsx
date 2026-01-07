
import React from 'react';

interface FooterProps {
  onNavigate?: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <footer className="py-20 relative bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div 
              className="cursor-pointer inline-block mb-6"
              onClick={(e) => handleNav(e as any, 'home')}
            >
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic block">Mediant</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Architecting the next generation of digital media growth infrastructure. Built for scale, engineered for yield.
            </p>
            <div className="flex space-x-4 mt-8">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs font-bold text-white">X</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs font-bold text-white">In</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Solutions</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={(e) => handleNav(e as any, 'mobile-ua')} className="hover:text-white transition-colors text-left">Mobile UA</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'performance')} className="hover:text-white transition-colors text-left">Performance Marketing</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'attribution')} className="hover:text-white transition-colors text-left">Attribution Mesh®</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'lifecycle')} className="hover:text-white transition-colors text-left">Lifecycle Ops</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'creative')} className="hover:text-white transition-colors text-left">Creative Velocity</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'brand')} className="hover:text-white transition-colors text-left">Brand Growth</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Intelligence</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={(e) => handleNav(e as any, 'resources')} className="hover:text-white transition-colors text-left">Resources Hub</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'benchmarks')} className="hover:text-white transition-colors text-left">ROI Benchmarks</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'post-idfa')} className="hover:text-white transition-colors text-left">Post-IDFA Whitepaper</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'flo-case-study')} className="hover:text-white transition-colors text-left">Case Studies</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={(e) => handleNav(e as any, 'pricing')} className="hover:text-white transition-colors text-left">Pricing Models</button></li>
              <li><button onClick={(e) => handleNav(e as any, 'contact-sales')} className="hover:text-white transition-colors text-left">Contact Sales</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold text-slate-600 uppercase tracking-widest">
          <p>© 2026 Mediant Yield Engineering. All rights reserved.</p>
          <div className="flex space-x-8">
            <span className="cursor-default">Security</span>
            <span className="cursor-default">Cookies</span>
            <span className="cursor-default">Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

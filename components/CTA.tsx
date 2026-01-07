
import React from 'react';

interface CTAProps {
  onNavigate?: (page: any) => void;
  onOpenSolutions?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate, onOpenSolutions }) => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10 p-12 md:p-24 text-center">
          {/* Internal Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/30 blur-[100px] pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/30 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
              Unlock your brand's <br/>
              <span className="text-blue-500">terminal scale.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed">
              Deploy our media infrastructure to maximize your budget efficiency. We deliver surgical ROI against pre-defined CPA targets at terminal scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate?.('contact-sales')}
                className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-2xl shadow-white/10 active:scale-95 transition-transform"
              >
                Apply for Audit
              </button>
              <button 
                onClick={() => onOpenSolutions ? onOpenSolutions() : onNavigate?.('home')}
                className="w-full sm:w-auto glass-card text-white px-10 py-4 rounded-full font-bold text-lg border-white/10 hover:bg-white/5 transition-colors active:scale-95 transition-transform"
              >
                View Solutions
              </button>
            </div>
            
            <p className="mt-8 text-white/30 text-xs font-bold uppercase tracking-widest">
              Engineered for High-Growth Performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

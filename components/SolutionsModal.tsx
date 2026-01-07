
import React, { useEffect, useRef } from 'react';

interface SolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (page: any) => void;
}

const SolutionsModal: React.FC<SolutionsModalProps> = ({ isOpen, onClose, onSelect }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const solutions = [
    { id: 'mobile-ua', title: 'Mobile UA', desc: 'Scale apps profitably with signal recovery.', color: 'from-blue-500/20' },
    { id: 'performance', title: 'Performance', desc: 'Surgical acquisition for high-LTV cohorts.', color: 'from-purple-500/20' },
    { id: 'attribution', title: 'Attribution Mesh®', desc: '99.8% precision measurement modeling.', color: 'from-indigo-500/20' },
    { id: 'lifecycle', title: 'Lifecycle Ops', desc: 'Retention systems to boost terminal value.', color: 'from-green-500/20' },
    { id: 'creative', title: 'Creative Velocity', desc: 'AI-driven rapid iteration for ad assets.', color: 'from-orange-500/20' },
    { id: 'brand', title: 'Brand Growth', desc: 'Media architecture for long-term equity.', color: 'from-pink-500/20' }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl glass-card rounded-[2.5rem] border-white/10 p-6 md:p-10 overflow-hidden animate-in zoom-in-95 fade-in duration-500 max-h-[90vh] overflow-y-auto"
      >
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-600/30 blur-[100px] rounded-full"></div>
           <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-600/20 blur-[80px] rounded-full"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Architecture</span>
              <h2 className="text-3xl font-black text-white tracking-tighter leading-none">
                Growth <span className="text-white/40 italic">Solutions</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solutions.map((sol, i) => (
              <button 
                key={i}
                onClick={() => onSelect(sol.id)}
                className={`text-left glass-card p-5 rounded-2xl border-white/5 bg-gradient-to-br ${sol.color} to-transparent group hover:border-white/20 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <svg className="w-3 h-3 text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="text-base font-black text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">{sol.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                  {sol.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
             <button 
               onClick={() => onSelect('contact-sales')}
               className="bg-white text-black px-10 py-4 rounded-xl font-black text-[12px] uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-white/5"
             >
                Speak to Strategy
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsModal;

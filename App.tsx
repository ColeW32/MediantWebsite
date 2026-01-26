
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileUA from './MobileUA';
import Resources from './Resources';
import PerformanceMarketing from './PerformanceMarketing';
import AttributionMesh from './AttributionMesh';
import LifecycleOps from './LifecycleOps';
import CreativeVelocity from './CreativeVelocity';
import BrandGrowth from './BrandGrowth';
import Pricing from './Pricing';
import ContactSales from './ContactSales';
import Benchmarks from './Benchmarks';
import PostIDFAWhitepaper from './PostIDFAWhitepaper';
import CreativeVelocityBlog from './CreativeVelocityBlog';
import YieldIndexReport from './YieldIndexReport';
import FloCaseStudy from './FloCaseStudy';
import TikTokVsMeta from './TikTokVsMeta';
import AttributionMeshDeepDive from './AttributionMeshDeepDive';
import FreecashArticle from './FreecashArticle';
import SolutionsModal from './components/SolutionsModal';
import { PageType, getInitialPage, navigateToPage } from './routes';

const HomepageBackground: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate opacity based on scroll. Grid fades out completely by 600px scroll.
  const gridOpacity = Math.max(0, 1 - scrollY / 500);
  const ambientOpacity = Math.max(0, 1 - scrollY / 800);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-300">
      {/* Pure Black Base */}
      <div className="absolute inset-0 bg-[#030303]"></div>
      
      {/* 1. Base Geometric Square Grid Layer */}
      <div 
        className="absolute inset-0 origin-center animate-[grid-distort_25s_ease-in-out_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 85%)',
          opacity: gridOpacity * 0.15,
          transition: 'opacity 0.1s linear'
        }}
      ></div>

      {/* 2. Interactive Mouse Highlight Layer - Grid Lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.8) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.8) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '50px 50px',
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          opacity: gridOpacity * 0.5,
          transition: 'opacity 0.3s ease'
        }}
      ></div>

      {/* 3. Interactive Mouse Highlight Layer - Dots/Intersections */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(59, 130, 246, 1) 1.5px, transparent 0)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '-0.75px -0.75px',
          maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          opacity: gridOpacity * 0.9,
          transition: 'opacity 0.3s ease'
        }}
      ></div>

      {/* 4. Base Grid Intersections (Dots) */}
      <div 
        className="absolute inset-0 origin-center animate-[grid-distort_25s_ease-in-out_infinite]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,1) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '-0.5px -0.5px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 80%)',
          opacity: gridOpacity * 0.18,
          transition: 'opacity 0.1s linear'
        }}
      ></div>

      {/* 5. The Traveling Ripple Wave Layer */}
      <div 
        className="absolute top-0 left-0 w-[150vw] h-[150vw] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(124, 58, 237, 0.2) 30%, transparent 60%)',
          animation: 'ripple-sweep 10s infinite cubic-bezier(0.4, 0, 0.2, 1)',
          filter: 'blur(100px)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 90%)',
          opacity: ambientOpacity * 0.45
        }}
      ></div>

      {/* 6. Secondary Counter-Ripple */}
      <div 
        className="absolute top-0 left-0 w-[120vw] h-[120vw] rounded-full mix-blend-overlay pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 50%)',
          animation: 'ripple-sweep 10s infinite cubic-bezier(0.4, 0, 0.2, 1)',
          animationDelay: '0.1s',
          filter: 'blur(60px)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          opacity: ambientOpacity * 0.15
        }}
      ></div>

      {/* 7. Floating Slow-Drift Geometric Outlines */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: gridOpacity }}>
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] border border-white/5 rotate-12 rounded-lg animate-[drift-slow_30s_infinite_alternate_ease-in-out]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] border border-white/5 -rotate-12 rounded-lg animate-[drift-slow_28s_infinite_alternate-reverse_ease-in-out]"></div>
      </div>

      {/* 8. Static Ambient Modern Color Splashes */}
      <div 
        className="absolute top-[-15%] left-[-10%] w-[85vw] h-[85vw] rounded-full blur-[180px] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
          animation: 'drift-splash 28s infinite alternate ease-in-out',
          opacity: ambientOpacity * 0.25
        }}
      ></div>
      <div 
        className="absolute bottom-[-15%] right-[-5%] w-[75vw] h-[75vw] rounded-full blur-[180px] mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          animation: 'drift-splash 32s infinite alternate-reverse ease-in-out',
          opacity: ambientOpacity * 0.18
        }}
      ></div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage());
  const [isSolutionsModalOpen, setIsSolutionsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefillEmail, setPrefillEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Set initial history state on mount
  useEffect(() => {
    // Replace initial state to include page information
    const initialPage = getInitialPage();
    window.history.replaceState({ page: initialPage }, '', window.location.pathname);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state && state.page) {
        setCurrentPage(state.page);
        if (state.email) {
          setPrefillEmail(state.email);
        }
      } else {
        setCurrentPage(getInitialPage());
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageType, email?: string) => {
    const result = navigateToPage(page, email);
    setCurrentPage(result.page);
    setIsSolutionsModalOpen(false);
    if (email && page === 'contact-sales') {
      setPrefillEmail(email);
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 relative overflow-x-hidden text-slate-200 bg-[#030303]">
      
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar onNavigate={navigateTo} />
        <main className="flex-grow relative">
          {/* BACKGROUND LAYER - ONLY ON HOME */}
          {currentPage === 'home' && <HomepageBackground scrollY={scrollY} />}
          
          <div className="relative z-10">
            {currentPage === 'home' ? (
              <>
                <Hero onNavigate={navigateTo} />
                <Statistics />
                <Features onNavigate={navigateTo} />
                <Process />
                <CTA onNavigate={navigateTo} onOpenSolutions={() => setIsSolutionsModalOpen(true)} />
              </>
            ) : currentPage === 'mobile-ua' ? (
              <MobileUA onNavigate={navigateTo} />
            ) : currentPage === 'resources' ? (
              <Resources onNavigate={navigateTo} />
            ) : currentPage === 'performance' ? (
              <PerformanceMarketing onNavigate={navigateTo} />
            ) : currentPage === 'attribution' ? (
              <AttributionMesh onNavigate={navigateTo} />
            ) : currentPage === 'lifecycle' ? (
              <LifecycleOps onNavigate={navigateTo} />
            ) : currentPage === 'creative' ? (
              <CreativeVelocity onNavigate={navigateTo} />
            ) : currentPage === 'brand' ? (
              <BrandGrowth onNavigate={navigateTo} />
            ) : currentPage === 'pricing' ? (
              <Pricing />
            ) : currentPage === 'contact-sales' ? (
              <ContactSales prefillEmail={prefillEmail} />
            ) : currentPage === 'post-idfa' ? (
              <PostIDFAWhitepaper onNavigate={navigateTo} />
            ) : currentPage === 'creative-velocity-blog' ? (
              <CreativeVelocityBlog onNavigate={navigateTo} />
            ) : currentPage === 'yield-index-report' ? (
              <YieldIndexReport onNavigate={navigateTo} />
            ) : currentPage === 'flo-case-study' ? (
              <FloCaseStudy onNavigate={navigateTo} />
            ) : currentPage === 'tiktok-vs-meta' ? (
              <TikTokVsMeta onNavigate={navigateTo} />
            ) : currentPage === 'attribution-deep-dive' ? (
              <AttributionMeshDeepDive onNavigate={navigateTo} />
            ) : currentPage === 'freecash-guide' ? (
              <FreecashArticle onNavigate={navigateTo} />
            ) : (
              <Benchmarks onNavigate={navigateTo} />
            )}
          </div>
        </main>
        <Footer onNavigate={navigateTo} />
      </div>

      <SolutionsModal 
        isOpen={isSolutionsModalOpen} 
        onClose={() => setIsSolutionsModalOpen(false)} 
        onSelect={navigateTo}
      />
    </div>
  );
};

export default App;

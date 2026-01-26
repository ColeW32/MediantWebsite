// Route configuration for the entire site
export type PageType = 
  | 'home' 
  | 'mobile-ua' 
  | 'resources' 
  | 'performance' 
  | 'attribution' 
  | 'lifecycle' 
  | 'creative' 
  | 'brand' 
  | 'pricing' 
  | 'contact-sales' 
  | 'benchmarks' 
  | 'post-idfa' 
  | 'creative-velocity-blog' 
  | 'yield-index-report' 
  | 'flo-case-study' 
  | 'tiktok-vs-meta' 
  | 'attribution-deep-dive'
  | 'freecash-guide';

export const routes: Record<PageType, string> = {
  'home': '/',
  'mobile-ua': '/solutions/mobile-ua',
  'performance': '/solutions/performance-marketing',
  'attribution': '/solutions/attribution-mesh',
  'lifecycle': '/solutions/lifecycle-ops',
  'creative': '/solutions/creative-velocity',
  'brand': '/solutions/brand-growth',
  'resources': '/resources',
  'pricing': '/pricing',
  'contact-sales': '/contact',
  'benchmarks': '/benchmarks',
  'post-idfa': '/resources/post-idfa-framework',
  'creative-velocity-blog': '/resources/creative-velocity-guide',
  'yield-index-report': '/resources/yield-index-report',
  'flo-case-study': '/resources/flo-case-study',
  'tiktok-vs-meta': '/resources/tiktok-vs-meta-analysis',
  'attribution-deep-dive': '/resources/attribution-mesh-deep-dive',
  'freecash-guide': '/resources/freecash-ads-guide'
};

// Reverse mapping for URL to page type
export const pathToPage: Record<string, PageType> = Object.entries(routes).reduce(
  (acc, [page, path]) => {
    acc[path] = page as PageType;
    return acc;
  },
  {} as Record<string, PageType>
);

// Get page from current URL path
export const getPageFromPath = (path: string): PageType => {
  return pathToPage[path] || 'home';
};

// Get URL path from page type
export const getPathFromPage = (page: PageType): string => {
  return routes[page] || '/';
};

// Navigate to a page with proper history management
export const navigateToPage = (page: PageType, email?: string) => {
  const path = getPathFromPage(page);
  window.history.pushState({ page, email }, '', path);
  return { page, email };
};

// Get initial page from URL on load
export const getInitialPage = (): PageType => {
  return getPageFromPath(window.location.pathname);
};


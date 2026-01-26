// SEO Meta Data Configuration for all pages
import { PageType } from './routes';

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
}

export const pageMeta: Record<PageType, PageMeta> = {
  'home': {
    title: 'Mediant Group - Digital Yield Engineering & Performance Marketing',
    description: 'Optimize acquisition, scale mobile ecosystems, and build a more profitable digital footprint. Join hundreds of consumer brands using Mediant for high-efficiency budget scaling.',
    keywords: 'performance marketing, digital yield optimization, mobile user acquisition, ROI optimization, CPA engineering, media buying',
    ogType: 'website'
  },
  
  'pricing': {
    title: 'Pricing & Partnership Models | Mediant Group',
    description: 'Flexible partnership models for advertisers and publishers. Get competitive rates, premium payouts, and transparent pricing for performance marketing at scale.',
    keywords: 'performance marketing pricing, media buying rates, publisher payouts, advertiser partnerships, CPA pricing, offer network rates',
    ogType: 'website'
  },
  
  'contact-sales': {
    title: 'Contact Mediant Group - Start Your ROI & CPA Audit',
    description: 'Get a custom CPA roadmap from our growth engineering squad. Expect a technical brief within 12 hours with surgical ROI optimization strategies.',
    keywords: 'contact performance marketing agency, ROI audit, CPA optimization, growth engineering, media buying consultation',
    ogType: 'website'
  },
  
  'resources': {
    title: 'Resources Hub - Industry Insights & Performance Data | Mediant Group',
    description: 'Deep-tissue insights, performance benchmarks, and growth frameworks for digital media leaders. Access whitepapers, case studies, and yield reports.',
    keywords: 'digital marketing resources, performance marketing insights, industry benchmarks, marketing case studies, yield optimization guides',
    ogType: 'website'
  },
  
  'benchmarks': {
    title: 'Industry Benchmarks & Performance Data | Mediant Group',
    description: 'Access real-time performance benchmarks for CPM, CPC, CPA, and LTV across major digital acquisition channels. Data-driven insights for smarter media buying.',
    keywords: 'marketing benchmarks, CPM benchmarks, CPA benchmarks, industry performance data, digital marketing metrics',
    ogType: 'website'
  },
  
  // Solutions Pages
  'mobile-ua': {
    title: 'Mobile User Acquisition at Scale | Mediant Group',
    description: 'Scale mobile app installs and engagement with precision targeting. Achieve lower CPA and higher LTV through data-driven mobile UA optimization.',
    keywords: 'mobile user acquisition, app install campaigns, mobile UA optimization, app marketing, mobile growth',
    ogType: 'website'
  },
  
  'performance': {
    title: 'Performance Marketing Solutions | Mediant Group',
    description: 'High-efficiency performance marketing with surgical ROI. Pay only for results with our accountable, data-driven approach to digital acquisition.',
    keywords: 'performance marketing, performance advertising, CPA marketing, ROI optimization, results-based marketing',
    ogType: 'website'
  },
  
  'attribution': {
    title: 'Attribution Mesh® - Privacy-First Marketing Attribution | Mediant Group',
    description: 'Reconstruct user journeys with 99.8% precision without device identifiers. Navigate the privacy-first era with probabilistic attribution mesh technology.',
    keywords: 'marketing attribution, post-IDFA attribution, privacy-first tracking, probabilistic attribution, cookieless tracking',
    ogType: 'website'
  },
  
  'lifecycle': {
    title: 'Lifecycle Ops - User Lifecycle Optimization | Mediant Group',
    description: 'Optimize every stage of the user lifecycle from acquisition to retention. Maximize LTV and reduce churn with data-driven lifecycle marketing.',
    keywords: 'lifecycle marketing, user retention, LTV optimization, customer lifecycle, retention marketing',
    ogType: 'website'
  },
  
  'creative': {
    title: 'Creative Velocity - AI-Powered Ad Creative at Scale | Mediant Group',
    description: 'Produce high-performing ad variations at 10x the speed using generative AI. Scale creative iteration without sacrificing quality or efficiency.',
    keywords: 'creative optimization, ad creative, AI advertising, generative AI marketing, creative testing',
    ogType: 'website'
  },
  
  'brand': {
    title: 'Brand Growth Solutions | Mediant Group',
    description: 'Build brand awareness while maintaining performance accountability. Combine upper-funnel brand building with lower-funnel conversion optimization.',
    keywords: 'brand growth, brand marketing, brand awareness, performance branding, brand performance marketing',
    ogType: 'website'
  },
  
  // Resource Pages
  'post-idfa': {
    title: 'Post-IDFA Measurement Framework Whitepaper | Mediant Group',
    description: 'How top brands navigate the privacy-first era with probabilistic attribution mesh. Download our comprehensive framework for post-IDFA measurement.',
    keywords: 'post-IDFA marketing, iOS 14 attribution, privacy-first measurement, IDFA alternative, app tracking transparency',
    ogType: 'article'
  },
  
  'creative-velocity-blog': {
    title: 'Creative Velocity: Scaling Ad Iteration with AI | Mediant Group',
    description: 'Blueprint for using generative AI to produce high-performing ad variations at 10x speed. Learn how leading brands scale creative testing.',
    keywords: 'creative testing, AI ad creation, generative AI advertising, creative optimization guide, ad testing strategy',
    ogType: 'article'
  },
  
  'yield-index-report': {
    title: 'Q4 2025 Yield Index Report - Performance Benchmarks | Mediant Group',
    description: 'Definitive benchmark report for CPM, CPC, CPA, and LTV performance across 12 major digital acquisition channels. Q4 2025 industry data.',
    keywords: 'marketing benchmarks 2025, yield report, CPM benchmarks, digital advertising benchmarks, Q4 marketing data',
    ogType: 'article'
  },
  
  'flo-case-study': {
    title: 'Flo Case Study: How We Achieved -40% CAC | Mediant Group',
    description: 'See how Flo reduced customer acquisition costs by 40% through retention-focused acquisition strategies in the health & fitness sector.',
    keywords: 'marketing case study, CAC reduction, Flo case study, mobile app marketing, health app growth',
    ogType: 'article'
  },
  
  'tiktok-vs-meta': {
    title: 'TikTok vs Meta: The 2026 Yield Battle | Mediant Group',
    description: 'Data-driven comparison of TikTok and Meta advertising platforms. Inventory quality, user intent, and performance metrics for 2026.',
    keywords: 'TikTok ads vs Facebook ads, TikTok advertising, Meta ads comparison, social media advertising 2026',
    ogType: 'article'
  },
  
  'attribution-deep-dive': {
    title: 'Signal Recovery Protocol - Attribution Mesh Deep Dive | Mediant Group',
    description: 'Technical deep dive into how Attribution Mesh® reconstructs user journeys with 99.8% precision without relying on device identifiers.',
    keywords: 'attribution technology, signal recovery, probabilistic attribution technical, cookieless tracking technology',
    ogType: 'article'
  },
  
  'freecash-guide': {
    title: 'Where Does Freecash Get Its Ads From? Complete Guide | Mediant Group',
    description: 'Complete guide for building competing rewards apps. Learn how Freecash sources offers, monetizes traffic, and how you can enter this lucrative space.',
    keywords: 'rewards app monetization, Freecash ads, offer networks, offerwall monetization, GPT app guide, publisher monetization',
    ogType: 'article'
  }
};

// Helper function to update document meta tags
export const updatePageMeta = (pageType: PageType) => {
  const meta = pageMeta[pageType];
  const currentUrl = window.location.href;
  
  // Update title
  document.title = meta.title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', meta.description);
  
  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', meta.keywords);
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.href = currentUrl;
  
  // Update Open Graph tags
  updateOrCreateMetaTag('og:url', currentUrl);
  updateOrCreateMetaTag('og:title', meta.title);
  updateOrCreateMetaTag('og:description', meta.description);
  updateOrCreateMetaTag('og:type', meta.ogType || 'website');
  
  // Update Twitter Card tags
  updateOrCreateMetaTag('twitter:card', 'summary_large_image', 'name');
  updateOrCreateMetaTag('twitter:url', currentUrl, 'name');
  updateOrCreateMetaTag('twitter:title', meta.title, 'name');
  updateOrCreateMetaTag('twitter:description', meta.description, 'name');
};

// Helper function to update or create meta tags
const updateOrCreateMetaTag = (property: string, content: string, attributeName: string = 'property') => {
  let metaTag = document.querySelector(`meta[${attributeName}="${property}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attributeName, property);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', content);
};


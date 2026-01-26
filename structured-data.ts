// Structured Data (JSON-LD) Configuration for Rich Snippets
import { PageType } from './routes';

// Organization Schema - Used across all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mediant Group",
  "alternateName": "Mediant",
  "url": "https://mediant.group",
  "logo": "https://mediant.group/logo.png",
  "description": "Digital yield engineering and performance marketing solutions for consumer brands. Optimize acquisition, scale mobile ecosystems, and build profitable digital footprints.",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "cole@mediant.group",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/mediant-group",
    "https://twitter.com/mediantgroup"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

// WebSite Schema with Search Action
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mediant Group",
  "url": "https://mediant.group",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mediant.group/resources?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Service Schema for Solutions
const createServiceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Mediant Group",
    "url": "https://mediant.group"
  },
  "url": url,
  "serviceType": "Digital Marketing",
  "areaServed": "Worldwide"
});

// Article Schema for Resources
const createArticleSchema = (
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  articleType: string = "Article"
) => ({
  "@context": "https://schema.org",
  "@type": articleType,
  "headline": headline,
  "description": description,
  "url": url,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Organization",
    "name": "Mediant Group",
    "url": "https://mediant.group"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mediant Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mediant.group/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

// Breadcrumb Schema
const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Get structured data for each page type
export const getStructuredData = (pageType: PageType): object[] => {
  const baseUrl = "https://mediant.group";
  const schemas: object[] = [];

  // All pages get Organization schema
  schemas.push(organizationSchema);

  switch (pageType) {
    case 'home':
      schemas.push(websiteSchema);
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Mediant Group - Digital Yield Engineering",
        "url": baseUrl,
        "description": "Optimize acquisition, scale mobile ecosystems, and build a more profitable digital footprint."
      });
      break;

    case 'pricing':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Pricing", url: `${baseUrl}/pricing` }
      ]));
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "Performance Marketing Services",
        "description": "Flexible partnership models for advertisers and publishers with competitive rates and premium payouts.",
        "url": `${baseUrl}/pricing`,
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Custom",
          "priceCurrency": "USD"
        },
        "seller": {
          "@type": "Organization",
          "name": "Mediant Group"
        }
      });
      break;

    case 'contact-sales':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Contact", url: `${baseUrl}/contact` }
      ]));
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Mediant Group",
        "url": `${baseUrl}/contact`,
        "description": "Get a custom CPA roadmap from our growth engineering squad."
      });
      break;

    case 'resources':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` }
      ]));
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Resources Hub - Industry Insights",
        "url": `${baseUrl}/resources`,
        "description": "Deep-tissue insights, performance benchmarks, and growth frameworks for digital media leaders."
      });
      break;

    case 'benchmarks':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Benchmarks", url: `${baseUrl}/benchmarks` }
      ]));
      break;

    // Solution Pages
    case 'mobile-ua':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Mobile UA", url: `${baseUrl}/solutions/mobile-ua` }
      ]));
      schemas.push(createServiceSchema(
        "Mobile User Acquisition",
        "Scale mobile app installs and engagement with precision targeting. Achieve lower CPA and higher LTV through data-driven mobile UA optimization.",
        `${baseUrl}/solutions/mobile-ua`
      ));
      break;

    case 'performance':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Performance Marketing", url: `${baseUrl}/solutions/performance-marketing` }
      ]));
      schemas.push(createServiceSchema(
        "Performance Marketing Solutions",
        "High-efficiency performance marketing with surgical ROI. Pay only for results with our accountable, data-driven approach.",
        `${baseUrl}/solutions/performance-marketing`
      ));
      break;

    case 'attribution':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Attribution Mesh", url: `${baseUrl}/solutions/attribution-mesh` }
      ]));
      schemas.push(createServiceSchema(
        "Attribution Mesh - Privacy-First Attribution",
        "Reconstruct user journeys with 99.8% precision without device identifiers. Navigate the privacy-first era with probabilistic attribution.",
        `${baseUrl}/solutions/attribution-mesh`
      ));
      break;

    case 'lifecycle':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Lifecycle Ops", url: `${baseUrl}/solutions/lifecycle-ops` }
      ]));
      schemas.push(createServiceSchema(
        "Lifecycle Ops - User Lifecycle Optimization",
        "Optimize every stage of the user lifecycle from acquisition to retention. Maximize LTV and reduce churn.",
        `${baseUrl}/solutions/lifecycle-ops`
      ));
      break;

    case 'creative':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Creative Velocity", url: `${baseUrl}/solutions/creative-velocity` }
      ]));
      schemas.push(createServiceSchema(
        "Creative Velocity - AI-Powered Ad Creative",
        "Produce high-performing ad variations at 10x the speed using generative AI. Scale creative iteration without sacrificing quality.",
        `${baseUrl}/solutions/creative-velocity`
      ));
      break;

    case 'brand':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Solutions", url: `${baseUrl}/resources` },
        { name: "Brand Growth", url: `${baseUrl}/solutions/brand-growth` }
      ]));
      schemas.push(createServiceSchema(
        "Brand Growth Solutions",
        "Build brand awareness while maintaining performance accountability. Combine upper-funnel brand building with lower-funnel conversion.",
        `${baseUrl}/solutions/brand-growth`
      ));
      break;

    // Resource Articles
    case 'post-idfa':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Post-IDFA Framework", url: `${baseUrl}/resources/post-idfa-framework` }
      ]));
      schemas.push(createArticleSchema(
        "Post-IDFA Measurement Framework",
        "How top brands navigate the privacy-first era with probabilistic attribution mesh.",
        `${baseUrl}/resources/post-idfa-framework`,
        "2025-01-15",
        "2025-01-15",
        "TechArticle"
      ));
      break;

    case 'creative-velocity-blog':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Creative Velocity Guide", url: `${baseUrl}/resources/creative-velocity-guide` }
      ]));
      schemas.push(createArticleSchema(
        "Creative Velocity: Scaling Ad Iteration with AI",
        "Blueprint for using generative AI to produce high-performing ad variations at 10x speed.",
        `${baseUrl}/resources/creative-velocity-guide`,
        "2025-01-20",
        "2025-01-20",
        "HowTo"
      ));
      break;

    case 'yield-index-report':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Yield Index Report", url: `${baseUrl}/resources/yield-index-report` }
      ]));
      schemas.push(createArticleSchema(
        "Q4 2025 Yield Index Report",
        "Definitive benchmark report for CPM, CPC, CPA, and LTV performance across 12 major digital acquisition channels.",
        `${baseUrl}/resources/yield-index-report`,
        "2025-10-01",
        "2025-12-31",
        "Report"
      ));
      break;

    case 'flo-case-study':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Flo Case Study", url: `${baseUrl}/resources/flo-case-study` }
      ]));
      schemas.push(createArticleSchema(
        "Flo Case Study: How We Achieved -40% CAC",
        "See how Flo reduced customer acquisition costs by 40% through retention-focused acquisition strategies.",
        `${baseUrl}/resources/flo-case-study`,
        "2025-02-01",
        "2025-02-01",
        "Article"
      ));
      break;

    case 'tiktok-vs-meta':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "TikTok vs Meta", url: `${baseUrl}/resources/tiktok-vs-meta-analysis` }
      ]));
      schemas.push(createArticleSchema(
        "TikTok vs Meta: The 2026 Yield Battle",
        "Data-driven comparison of TikTok and Meta advertising platforms for 2026.",
        `${baseUrl}/resources/tiktok-vs-meta-analysis`,
        "2026-01-10",
        "2026-01-10",
        "AnalysisNewsArticle"
      ));
      break;

    case 'attribution-deep-dive':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Attribution Deep Dive", url: `${baseUrl}/resources/attribution-mesh-deep-dive` }
      ]));
      schemas.push(createArticleSchema(
        "Signal Recovery Protocol - Attribution Mesh Deep Dive",
        "Technical deep dive into how Attribution Mesh reconstructs user journeys with 99.8% precision.",
        `${baseUrl}/resources/attribution-mesh-deep-dive`,
        "2025-03-01",
        "2025-03-01",
        "TechArticle"
      ));
      break;

    case 'freecash-guide':
      schemas.push(createBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Resources", url: `${baseUrl}/resources` },
        { name: "Freecash Ads Guide", url: `${baseUrl}/resources/freecash-ads-guide` }
      ]));
      schemas.push(createArticleSchema(
        "Where Does Freecash Get Its Ads From? Complete Guide",
        "Complete guide for building competing rewards apps and understanding the offer network ecosystem.",
        `${baseUrl}/resources/freecash-ads-guide`,
        "2026-01-25",
        "2026-01-26",
        "HowTo"
      ));
      break;
  }

  return schemas;
};

// Update structured data in the page
export const updateStructuredData = (pageType: PageType) => {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  // Get schemas for current page
  const schemas = getStructuredData(pageType);

  // Add each schema as a separate script tag
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};


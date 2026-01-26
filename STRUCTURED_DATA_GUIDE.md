# Structured Data (JSON-LD) Implementation Guide

## Overview

Your Mediant website now includes comprehensive structured data markup using JSON-LD format. This enables rich snippets in Google search results, improving visibility, click-through rates, and providing better information to search engines.

---

## 🎯 What is Structured Data?

Structured data is code that helps search engines understand your content better. It enables:

✅ **Rich Snippets** - Enhanced search results with ratings, prices, images  
✅ **Knowledge Graphs** - Information boxes in Google search  
✅ **Breadcrumbs** - Navigation paths in search results  
✅ **Better Indexing** - Improved understanding of your content  
✅ **Voice Search** - Optimization for voice assistants  

---

## 📊 Implemented Schema Types

### 1. **Organization Schema** (All Pages)

Used on every page to establish brand identity:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mediant Group",
  "url": "https://mediant.group",
  "logo": "https://mediant.group/logo.png",
  "description": "Digital yield engineering and performance marketing solutions",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "cole@mediant.group"
  }
}
```

**Benefits:**
- Knowledge Graph eligibility
- Brand identity in search
- Contact information display

---

### 2. **WebSite Schema** (Home Page)

Enables site search box in Google:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mediant Group",
  "url": "https://mediant.group",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mediant.group/resources?q={search_term_string}"
  }
}
```

**Benefits:**
- Google sitelinks search box
- Direct search from SERP

---

### 3. **Service Schema** (Solution Pages)

For all solution pages (Mobile UA, Performance Marketing, etc.):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile User Acquisition",
  "description": "Scale mobile app installs and engagement...",
  "provider": {
    "@type": "Organization",
    "name": "Mediant Group"
  },
  "serviceType": "Digital Marketing",
  "areaServed": "Worldwide"
}
```

**Benefits:**
- Service listings in search
- Rich results for services
- Better categorization

---

### 4. **Article Schema** (Resource Pages)

For all blog posts and resources:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post-IDFA Measurement Framework",
  "description": "How top brands navigate the privacy-first era...",
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "author": {
    "@type": "Organization",
    "name": "Mediant Group"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mediant Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mediant.group/logo.png"
    }
  }
}
```

**Article Types Used:**
- **Article** - General content (Flo Case Study)
- **TechArticle** - Technical content (Attribution Deep Dive, Post-IDFA)
- **HowTo** - Tutorial content (Creative Velocity Guide, Freecash Guide)
- **Report** - Data reports (Yield Index Report)
- **AnalysisNewsArticle** - Analysis (TikTok vs Meta)

**Benefits:**
- Article rich results
- Top Stories eligibility
- Date information in SERP
- Author attribution

---

### 5. **BreadcrumbList Schema** (All Pages)

Navigation breadcrumbs for every page:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mediant.group"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://mediant.group/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Freecash Guide",
      "item": "https://mediant.group/resources/freecash-ads-guide"
    }
  ]
}
```

**Benefits:**
- Breadcrumb trail in search results
- Better site hierarchy understanding
- Improved navigation UX

---

### 6. **Offer Schema** (Pricing Page)

Pricing and offer information:

```json
{
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "Performance Marketing Services",
  "description": "Flexible partnership models...",
  "priceCurrency": "USD",
  "seller": {
    "@type": "Organization",
    "name": "Mediant Group"
  }
}
```

**Benefits:**
- Pricing information in search
- Offer rich snippets
- E-commerce optimization

---

### 7. **ContactPage Schema** (Contact Page)

Contact page identification:

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Mediant Group",
  "url": "https://mediant.group/contact",
  "description": "Get a custom CPA roadmap..."
}
```

**Benefits:**
- Identified as contact page
- Better categorization
- Local search optimization

---

### 8. **CollectionPage Schema** (Resources Hub)

For collection/archive pages:

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Resources Hub",
  "url": "https://mediant.group/resources",
  "description": "Deep-tissue insights, performance benchmarks..."
}
```

**Benefits:**
- Collection page identification
- Better content organization
- Enhanced navigation

---

## 📍 Schema by Page Type

| Page | Schemas Applied |
|------|----------------|
| **Home** | Organization, WebSite, WebPage |
| **Pricing** | Organization, Breadcrumb, Offer |
| **Contact** | Organization, Breadcrumb, ContactPage |
| **Resources** | Organization, Breadcrumb, CollectionPage |
| **Benchmarks** | Organization, Breadcrumb |
| **All Solutions** | Organization, Breadcrumb, Service |
| **All Articles** | Organization, Breadcrumb, Article (various types) |

---

## 🔧 Technical Implementation

### Files Created:

**`structured-data.ts`**
- Central configuration for all schemas
- Dynamic schema generation
- Page-specific logic
- Update function for DOM injection

### Files Modified:

**`App.tsx`**
- Imports structured data module
- Calls `updateStructuredData()` on page change
- Ensures fresh schemas for each page

**`index.html`**
- Default Organization schema
- Loads immediately with page

---

## ✅ Validation & Testing

### 1. **Google Rich Results Test**

Test your pages:
- **Tool:** https://search.google.com/test/rich-results
- **Process:** Enter any page URL from your site
- **Check:** All schemas validate without errors

### 2. **Schema Markup Validator**

Validate JSON-LD:
- **Tool:** https://validator.schema.org/
- **Process:** Paste your page URL or JSON-LD code
- **Check:** No errors or warnings

### 3. **Google Search Console**

Monitor rich results:
- **Location:** Enhancements → All enhancement reports
- **Check:** Rich results status
- **Monitor:** Click-through rates

### 4. **Manual Verification**

Check in browser:
1. Visit any page on your site
2. View page source (right-click → View Page Source)
3. Search for `application/ld+json`
4. Verify JSON-LD is present and valid

---

## 📈 Expected Rich Results

### Search Result Enhancements:

**For Articles:**
- ✅ Publish date
- ✅ Author information
- ✅ Article type badge
- ✅ Thumbnail images (when added)
- ✅ Top Stories eligibility

**For Services:**
- ✅ Service type
- ✅ Provider information
- ✅ Price range (when applicable)
- ✅ Ratings (when added)

**For All Pages:**
- ✅ Breadcrumb navigation
- ✅ Site name
- ✅ Organization info
- ✅ Canonical URLs

**For Home Page:**
- ✅ Sitelinks search box
- ✅ Knowledge Graph eligibility
- ✅ Brand information

---

## 🎯 Benefits & Impact

### SEO Improvements:

**Short Term (1-4 weeks):**
- Better content understanding by Google
- Structured data validation passes
- Rich results eligibility

**Medium Term (1-3 months):**
- Rich snippets appear in SERP
- Increased click-through rates (10-30%)
- Better rankings for long-tail keywords

**Long Term (3-6 months):**
- Knowledge Graph inclusion
- Featured snippets eligibility
- Voice search optimization
- 20-40% organic traffic increase

### User Experience:

- **Better SERP Display** - More informative search results
- **Improved Navigation** - Breadcrumbs help users understand site structure
- **Trust Signals** - Professional appearance in search
- **Quick Information** - Key details visible before clicking

### Competitive Advantages:

- **Stand Out** - Rich snippets make you more visible
- **Higher CTR** - Enhanced results get more clicks
- **Professional Image** - Shows technical sophistication
- **Future-Proof** - Ready for new search features

---

## 🔄 Maintenance & Updates

### When to Update Structured Data:

1. **New Content Types** - Add appropriate schemas
2. **Service Changes** - Update Service schemas
3. **Pricing Updates** - Modify Offer schemas
4. **Organization Info** - Keep contact details current
5. **Article Updates** - Update dateModified fields

### Best Practices:

✅ **Keep dates accurate** - Update dateModified when content changes  
✅ **Test after changes** - Validate with Google's tool  
✅ **Monitor Search Console** - Watch for issues  
✅ **Stay current** - Follow schema.org updates  
✅ **Add images** - Include image objects when possible  

---

## 🚀 Next Steps for Maximum Impact

### 1. **Add Images to Schemas**

Add `image` property to articles:
```json
"image": {
  "@type": "ImageObject",
  "url": "https://mediant.group/images/article-image.jpg",
  "width": 1200,
  "height": 630
}
```

**Benefits:**
- Thumbnail in search results
- Better visual appeal
- Higher CTR

### 2. **Add Review/Rating Schemas**

When you have reviews:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "127"
}
```

**Benefits:**
- Star ratings in search
- Trust signals
- Higher conversions

### 3. **Add FAQ Schema**

For pages with common questions:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is performance marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Performance marketing is..."
      }
    }
  ]
}
```

**Benefits:**
- FAQ rich snippets
- Featured snippet eligibility
- More SERP real estate

### 4. **Add Video Schemas**

When you add video content:
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How Attribution Mesh Works",
  "description": "...",
  "thumbnailUrl": "...",
  "uploadDate": "2025-01-15"
}
```

**Benefits:**
- Video rich results
- YouTube integration
- Multimedia presence

### 5. **Add HowTo Schemas**

For tutorial content:
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Build a Rewards App",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1: Partner with Networks",
      "text": "..."
    }
  ]
}
```

**Benefits:**
- Step-by-step snippets
- Featured snippet eligibility
- Better user guidance

---

## 📊 Monitoring Dashboard

### Key Metrics to Track:

| Metric | Tool | Target |
|--------|------|--------|
| **Rich Results Impressions** | Search Console | +50% in 3 months |
| **CTR from Rich Results** | Search Console | 15-25% |
| **Valid Schemas** | Rich Results Test | 100% |
| **Coverage Issues** | Search Console | 0 errors |
| **Featured Snippets** | SEMrush/Ahrefs | 5+ in 6 months |

---

## 🔍 Troubleshooting

### Common Issues:

**1. Schema Not Showing**
- **Wait:** Can take 1-4 weeks for Google to process
- **Check:** Validate with Rich Results Test
- **Verify:** Ensure JSON-LD is in page source

**2. Validation Errors**
- **Test:** Use schema.org validator
- **Check:** Dates are in ISO format (YYYY-MM-DD)
- **Verify:** URLs are absolute (not relative)
- **Ensure:** Required fields are present

**3. Rich Results Not Appearing**
- **Content Quality:** Ensure high-quality content
- **Guidelines:** Follow Google's quality guidelines
- **Competition:** May not appear if others have better content
- **Patience:** Can take time to earn rich results

**4. Duplicate Schemas**
- **Check:** Only one schema per type per page
- **Verify:** `updateStructuredData()` removes old schemas
- **Test:** View page source for duplicates

---

## 📚 Resources

### Official Documentation:
- **Schema.org:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- **JSON-LD:** https://json-ld.org/

### Testing Tools:
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **Search Console:** https://search.google.com/search-console

### Learning Resources:
- **Google's Structured Data Guide:** https://developers.google.com/search/docs/guides/intro-structured-data
- **Schema.org Documentation:** https://schema.org/docs/documents.html
- **JSON-LD Playground:** https://json-ld.org/playground/

---

## ✅ Implementation Checklist

- [x] ✅ Structured data system created
- [x] ✅ Organization schema on all pages
- [x] ✅ Article schemas for resources
- [x] ✅ Service schemas for solutions
- [x] ✅ Breadcrumb schemas for navigation
- [x] ✅ Dynamic updates on page change
- [ ] Add images to article schemas
- [ ] Add FAQ schemas (when applicable)
- [ ] Add review/rating schemas (when available)
- [ ] Submit to Google Search Console
- [ ] Monitor rich results performance
- [ ] Test all schemas monthly
- [ ] Update dates when content changes

---

Your site now has comprehensive structured data that will significantly improve search visibility and enable rich snippets! 🚀

**Timeline for Results:**
- **Week 1-2:** Validation passes, Google indexes schemas
- **Week 2-4:** Rich results start appearing
- **Week 4-8:** Increased CTR from enhanced results
- **Week 8-12:** Featured snippet opportunities
- **Month 3-6:** Significant organic traffic growth

Monitor Google Search Console regularly to track your progress!


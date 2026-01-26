# Mediant Website - SEO URL Structure

## Base Domain
**Production:** `https://mediant.group` or `https://www.mediant.group`

---

## Complete URL Map

### 🏠 Main Pages

| Page Name | URL Path | Description |
|-----------|----------|-------------|
| Home | `/` | Main landing page with hero, statistics, and features |
| Pricing | `/pricing` | Pricing tiers and partnership models |
| Contact | `/contact` | Contact form for advertisers and publishers |
| Resources | `/resources` | Hub for all resources, guides, and reports |
| Benchmarks | `/benchmarks` | Industry benchmarks and performance data |

---

### 🎯 Solutions Pages

| Solution | URL Path | Description |
|----------|----------|-------------|
| Mobile User Acquisition | `/solutions/mobile-ua` | Mobile UA optimization and scaling |
| Performance Marketing | `/solutions/performance-marketing` | Performance-based marketing solutions |
| Attribution Mesh | `/solutions/attribution-mesh` | Privacy-first attribution technology |
| Lifecycle Ops | `/solutions/lifecycle-ops` | User lifecycle optimization |
| Creative Velocity | `/solutions/creative-velocity` | Creative production and iteration at scale |
| Brand Growth | `/solutions/brand-growth` | Brand-focused growth strategies |

---

### 📚 Resource Library

| Resource | URL Path | Type | Description |
|----------|----------|------|-------------|
| Post-IDFA Framework | `/resources/post-idfa-framework` | Whitepaper | Privacy-first measurement framework |
| Creative Velocity Guide | `/resources/creative-velocity-guide` | Guide | AI-powered creative iteration blueprint |
| Yield Index Report | `/resources/yield-index-report` | Benchmarks | Q4 2025 performance benchmarks |
| Flo Case Study | `/resources/flo-case-study` | Case Study | How Flo achieved -40% CAC |
| TikTok vs Meta Analysis | `/resources/tiktok-vs-meta-analysis` | Analysis | Platform comparison for 2026 |
| Attribution Mesh Deep Dive | `/resources/attribution-mesh-deep-dive` | Engineering | Signal recovery protocol technical details |
| Freecash Ads Guide | `/resources/freecash-ads-guide` | Industry Guide | Complete guide to rewards app monetization |

---

## SEO Best Practices Implemented

### ✅ URL Structure
- **Clean URLs**: No query parameters, hash fragments, or session IDs
- **Descriptive paths**: URLs clearly indicate page content
- **Hierarchical**: Logical structure (e.g., `/solutions/` for solution pages)
- **Lowercase**: All URLs use lowercase for consistency
- **Hyphens**: Words separated by hyphens (not underscores)

### ✅ Technical SEO
- **Single Page Application (SPA) routing**: Using History API for client-side routing
- **Server-side redirects**: All routes serve index.html via Vercel rewrites
- **Browser back/forward**: Full support for browser navigation
- **Direct URL access**: Any URL can be accessed directly
- **Canonical URLs**: Each page has a unique, canonical URL

### ✅ Content Organization
- **Solution pages**: Grouped under `/solutions/`
- **Resources**: All educational content under `/resources/`
- **Logical naming**: URLs match page titles and content
- **Future-proof**: Structure allows for easy expansion

---

## Sitemap for SEO

For search engine submission, here's the complete sitemap:

```
https://mediant.group/
https://mediant.group/pricing
https://mediant.group/contact
https://mediant.group/resources
https://mediant.group/benchmarks
https://mediant.group/solutions/mobile-ua
https://mediant.group/solutions/performance-marketing
https://mediant.group/solutions/attribution-mesh
https://mediant.group/solutions/lifecycle-ops
https://mediant.group/solutions/creative-velocity
https://mediant.group/solutions/brand-growth
https://mediant.group/resources/post-idfa-framework
https://mediant.group/resources/creative-velocity-guide
https://mediant.group/resources/yield-index-report
https://mediant.group/resources/flo-case-study
https://mediant.group/resources/tiktok-vs-meta-analysis
https://mediant.group/resources/attribution-mesh-deep-dive
https://mediant.group/resources/freecash-ads-guide
```

---

## Internal Linking Strategy

### Primary Navigation
- Home, Solutions (dropdown), Resources, Pricing, Contact

### Solution Pages
- Cross-link related solutions
- Link to relevant case studies and resources
- CTA to contact form

### Resource Pages
- Link to related resources
- CTA to solutions pages
- Navigation back to resource hub

### Footer
- Links to all main sections
- Social proof logos
- Contact information

---

## URL Management

### Current Implementation
- **Routes config**: Centralized in `routes.ts`
- **Type-safe**: TypeScript ensures URL consistency
- **Navigation function**: `navigateToPage()` handles all routing
- **History API**: Proper browser history management
- **Popstate handling**: Back/forward button support

### Future Enhancements
1. Add 301 redirects for any old URLs (if migrating)
2. Implement structured data (Schema.org) for each page type
3. Add Open Graph tags for social sharing
4. Create XML sitemap generator
5. Add breadcrumb navigation for resources
6. Implement canonical tags in HTML head

---

## Example URLs in Production

### Solutions
- `https://mediant.group/solutions/mobile-ua`
- `https://mediant.group/solutions/performance-marketing`
- `https://mediant.group/solutions/attribution-mesh`

### Resources
- `https://mediant.group/resources/freecash-ads-guide`
- `https://mediant.group/resources/yield-index-report`
- `https://mediant.group/resources/flo-case-study`

### Core Pages
- `https://mediant.group/pricing`
- `https://mediant.group/contact`
- `https://mediant.group/benchmarks`

---

## Benefits for SEO

1. **Crawlability**: Clean URLs are easier for search engines to crawl
2. **User Experience**: Descriptive URLs help users understand page content
3. **Link Sharing**: Professional URLs are more likely to be shared
4. **Analytics**: Easier to track and analyze page performance
5. **Brand Trust**: Clean URLs increase perceived professionalism
6. **Keyword Optimization**: URLs contain relevant keywords naturally

---

## Next Steps

1. ✅ Implement URL routing (DONE)
2. ✅ Configure Vercel rewrites (DONE)
3. 🔲 Create XML sitemap file
4. 🔲 Submit sitemap to Google Search Console
5. 🔲 Add meta descriptions for each page
6. 🔲 Implement Open Graph tags
7. 🔲 Add structured data (JSON-LD)
8. 🔲 Set up Google Analytics with custom events
9. 🔲 Monitor Core Web Vitals
10. 🔲 Implement breadcrumb navigation

---

## Maintenance

- **Add new pages**: Update `routes.ts` with new page mappings
- **URL changes**: Implement 301 redirects for old URLs
- **Monitor**: Check for 404 errors regularly
- **Test**: Verify all links work after deployments
- **Update**: Keep this documentation current with site changes


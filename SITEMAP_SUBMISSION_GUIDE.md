# Sitemap Submission Guide for Mediant.group

## ✅ Current Status

Your `robots.txt` file already includes the sitemap location:
```
Sitemap: https://mediant.group/sitemap.xml
```

This is correctly formatted according to Google's guidelines and will be automatically discovered by search engine crawlers.

---

## 📍 Sitemap Location

- **URL:** `https://mediant.group/sitemap.xml`
- **Location:** `/public/sitemap.xml` in your project
- **Format:** XML (standard sitemap protocol)
- **Pages:** 18 URLs (all main pages, solutions, and resources)

---

## 🚀 How to Submit Your Sitemap

### Method 1: Google Search Console (Recommended)

This is the easiest and most reliable method for Google:

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Your Property**
   - Click "Add Property"
   - Enter: `https://mediant.group`
   - Follow verification steps (DNS, HTML tag, or Google Analytics)

3. **Submit Sitemap**
   - In the left sidebar, click "Sitemaps"
   - Enter: `sitemap.xml`
   - Click "Submit"

4. **Monitor Status**
   - Google will show processing status
   - Check for errors or warnings
   - Typically processes within 24-48 hours

---

### Method 2: HTTP Ping Request

For automated or immediate submission to search engines:

#### **Google**
```bash
curl "https://www.google.com/ping?sitemap=https://mediant.group/sitemap.xml"
```

URL-encoded version:
```bash
curl "https://www.google.com/ping?sitemap=https%3A%2F%2Fmediant.group%2Fsitemap.xml"
```

#### **Bing**
```bash
curl "https://www.bing.com/ping?sitemap=https://mediant.group/sitemap.xml"
```

URL-encoded version:
```bash
curl "https://www.bing.com/ping?sitemap=https%3A%2F%2Fwww.bing.com%2Fsitemap.xml"
```

#### **Expected Response**
- **Success:** HTTP 200 response code
- **If you get a different response:** Resubmit your request
- **Note:** HTTP 200 only means the sitemap was received, not that all URLs are valid

---

### Method 3: Bing Webmaster Tools

1. **Go to Bing Webmaster Tools**
   - Visit: https://www.bing.com/webmasters
   - Sign in or create account

2. **Add Your Site**
   - Enter: `https://mediant.group`
   - Verify ownership (DNS, HTML tag, or import from Google Search Console)

3. **Submit Sitemap**
   - Go to "Sitemaps" in left menu
   - Enter: `https://mediant.group/sitemap.xml`
   - Click "Submit"

---

## 🔄 Automated Sitemap Submission

You can set up automated submission using GitHub Actions or Vercel post-deployment hooks:

### GitHub Actions Example

Create `.github/workflows/submit-sitemap.yml`:

```yaml
name: Submit Sitemap to Search Engines

on:
  push:
    branches:
      - main
  schedule:
    # Run weekly on Mondays at 9 AM UTC
    - cron: '0 9 * * 1'

jobs:
  submit-sitemap:
    runs-on: ubuntu-latest
    steps:
      - name: Submit to Google
        run: |
          curl "https://www.google.com/ping?sitemap=https://mediant.group/sitemap.xml"
      
      - name: Submit to Bing
        run: |
          curl "https://www.bing.com/ping?sitemap=https://mediant.group/sitemap.xml"
      
      - name: Check Response
        run: echo "Sitemap submitted successfully!"
```

This will:
- Submit sitemap on every push to main
- Re-submit weekly on Mondays
- Ensure search engines always have latest version

---

## 🔍 Other Search Engines

### Yandex (Russia)
```bash
curl "https://webmaster.yandex.com/ping?sitemap=https://mediant.group/sitemap.xml"
```

### DuckDuckGo
DuckDuckGo uses Bing's index, so submitting to Bing covers DuckDuckGo.

### Baidu (China)
Requires manual submission through Baidu Webmaster Tools:
- Visit: https://ziyuan.baidu.com/linksubmit/index
- Manual submission required (Chinese interface)

---

## ✅ Verification Checklist

After submission, verify your sitemap is working:

### 1. Check Sitemap Accessibility
```bash
curl -I https://mediant.group/sitemap.xml
```
Should return: `HTTP/2 200`

### 2. Validate Sitemap Format
Use Google's sitemap validator:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Enter: `https://mediant.group/sitemap.xml`

### 3. Check robots.txt
```bash
curl https://mediant.group/robots.txt
```
Should show: `Sitemap: https://mediant.group/sitemap.xml`

### 4. Monitor in Search Console
- Check "Coverage" report for indexed pages
- Review "Sitemaps" section for processing status
- Look for any errors or warnings

---

## 📊 Expected Indexing Timeline

| Search Engine | Discovery Time | Full Indexing |
|---------------|----------------|---------------|
| Google | 1-2 days | 1-4 weeks |
| Bing | 2-3 days | 2-6 weeks |
| Yandex | 3-5 days | 2-8 weeks |

**Factors affecting speed:**
- Site authority/age
- Content quality
- Backlinks
- Technical SEO
- Crawl budget

---

## 🔧 Maintenance

### When to Update Sitemap

Update and resubmit your sitemap when you:
- Add new pages
- Remove pages
- Change URL structure
- Make significant content updates
- Launch new features

### Sitemap Best Practices

1. **Keep it current** - Update when site structure changes
2. **Validate regularly** - Check for broken URLs
3. **Monitor performance** - Use Search Console insights
4. **Check response codes** - Ensure all URLs return 200
5. **Update priorities** - Adjust based on page importance
6. **Set change frequencies** - Help crawlers prioritize

---

## 🎯 Current Sitemap Contents

Your sitemap includes:

**Main Pages (5):**
- Home (Priority: 1.0, Daily updates)
- Pricing (Priority: 0.9, Weekly updates)
- Contact (Priority: 0.9, Monthly updates)
- Resources (Priority: 0.9, Weekly updates)
- Benchmarks (Priority: 0.8, Monthly updates)

**Solution Pages (6):**
- Mobile UA
- Performance Marketing
- Attribution Mesh
- Lifecycle Ops
- Creative Velocity
- Brand Growth
(Priority: 0.8, Monthly updates)

**Resource Articles (7):**
- Post-IDFA Framework
- Creative Velocity Guide
- Yield Index Report
- Flo Case Study
- TikTok vs Meta Analysis
- Attribution Mesh Deep Dive
- Freecash Ads Guide
(Priority: 0.7, Monthly/Quarterly updates)

---

## 🚨 Troubleshooting

### Sitemap Not Found (404)
- Verify file is in `/public/sitemap.xml`
- Check Vercel deployment includes public folder
- Test URL directly: `https://mediant.group/sitemap.xml`

### Invalid Sitemap Format
- Validate XML syntax
- Ensure all URLs use absolute paths (https://)
- Check for special characters that need encoding

### URLs Not Being Indexed
- Verify URLs return 200 status codes
- Check for noindex meta tags
- Ensure content is substantial and valuable
- Build quality backlinks
- Submit URL inspection in Search Console

### Sitemap Submission Failed
- Verify sitemap URL is accessible
- Check for XML formatting errors
- Ensure HTTPS is properly configured
- Try resubmitting after 24 hours

---

## 📈 Monitoring Success

Track these metrics in Google Search Console:

1. **Total Impressions** - How often your pages appear in search
2. **Average Position** - Your ranking for key terms
3. **Click-Through Rate** - Percentage of impressions that get clicks
4. **Indexed Pages** - Number of pages in Google's index
5. **Coverage Issues** - Any errors preventing indexing

---

## 🎯 Quick Start Checklist

- [x] ✅ Sitemap created (`/public/sitemap.xml`)
- [x] ✅ Sitemap referenced in robots.txt
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify sitemap accessibility
- [ ] Set up automated submission (optional)
- [ ] Monitor indexing progress
- [ ] Check for coverage errors

---

## 📞 Support Resources

- **Google Search Console Help:** https://support.google.com/webmasters
- **Bing Webmaster Help:** https://www.bing.com/webmasters/help
- **Sitemap Protocol:** https://www.sitemaps.org/protocol.html
- **Google Sitemap Guidelines:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview

---

## 🔄 Next Steps

1. **Immediate:** Submit sitemap to Google Search Console and Bing Webmaster Tools
2. **This Week:** Set up automated submission workflow
3. **Ongoing:** Monitor indexing status and adjust priorities
4. **Monthly:** Review coverage reports and fix any issues

Your sitemap is ready to go! Just follow the submission steps above to start getting indexed by search engines. 🚀


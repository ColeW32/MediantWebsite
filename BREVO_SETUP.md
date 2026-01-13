# Brevo Email Integration Setup Guide

## Overview
Your contact form now sends emails to `cole@mediant.group` using Brevo (formerly Sendinblue) when users submit the "Initialize Audit" form.

## What Was Implemented

### 1. **Success Confirmation UI** ✅
When a user submits the form, they now see:
- An animated checkmark icon
- "Request Received!" confirmation message
- Information about next steps (2-3 business days response time)
- Contact email for immediate assistance

### 2. **Brevo Email Integration** ✅
- Created API endpoint at `/api/send-contact.js`
- Sends beautifully formatted HTML emails with all form data
- Includes name, email, company, spend target, and CPA goals
- Emails are sent to `cole@mediant.group`

---

## Required Setup Steps

### Step 1: Get Your Brevo API Key

1. **Create a Brevo Account** (if you don't have one)
   - Go to: https://www.brevo.com/
   - Sign up for a free account

2. **Get Your API Key**
   - Log in to your Brevo account
   - Navigate to: https://app.brevo.com/settings/keys/api
   - Click "Generate a new API key"
   - Copy the API key (it will look like: `xkeysib-xxxxxxxxxxxxxx`)
   - **Save it somewhere safe** - you won't be able to see it again!

3. **Verify Your Sender Domain** (Important!)
   - Go to: https://app.brevo.com/settings/email
   - Add and verify `mediant.group` as a sender domain
   - Follow Brevo's instructions to add DNS records
   - This allows emails to be sent from `noreply@mediant.group`
   
   **Alternative:** If you can't verify the domain immediately, update the sender email in `/api/send-contact.js` line 28 to use a verified email address.

### Step 2: Add Environment Variable to Vercel

1. **Log in to Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Select your Mediant website project

2. **Add the Environment Variable**
   - Go to: **Settings** → **Environment Variables**
   - Click "Add New"
   - Add the following:
     ```
     Name: BREVO_API_KEY
     Value: [paste your Brevo API key here]
     Environments: Production, Preview, Development (select all)
     ```
   - Click "Save"

3. **Redeploy Your Site**
   - Go to the "Deployments" tab
   - Click the three dots (•••) on your latest deployment
   - Click "Redeploy"
   - This ensures the new environment variable is applied

---

## Testing the Integration

### Local Testing (Optional)

1. Create a `.env` file in your project root:
   ```bash
   BREVO_API_KEY=your_brevo_api_key_here
   ```

2. Run your development server:
   ```bash
   npm run dev
   ```

3. Navigate to the contact form and submit a test request

### Production Testing

1. After deploying to Vercel with the environment variable:
2. Go to your live website
3. Navigate to the contact form
4. Fill out and submit the form
5. Check `cole@mediant.group` inbox for the email

---

## Email Format

The emails sent will include:
- **Subject**: "New ROI & CPA Audit Request from [Name]"
- **To**: cole@mediant.group
- **Reply-To**: The user's email (so you can reply directly)
- **Content**: Beautiful HTML-formatted email with all form details
  - Full Name
  - Email Address (clickable)
  - Company Domain
  - Monthly Spend Target
  - Target CPA & Yield Goal
  - Submission timestamp

---

## Troubleshooting

### Issue: Emails not sending

**Check:**
1. ✅ Brevo API key is correctly added to Vercel environment variables
2. ✅ Vercel project has been redeployed after adding the env variable
3. ✅ Sender domain is verified in Brevo (or update sender email)
4. ✅ Check Vercel function logs: Vercel Dashboard → Your Project → Functions tab

### Issue: "Failed to send email" error

**Solutions:**
- Check the browser console for error details
- Verify the API key is correct
- Check Brevo dashboard for API usage limits (free tier has limits)
- Verify sender domain authentication

### Issue: Emails going to spam

**Solutions:**
- Make sure your sender domain is properly verified in Brevo
- Add SPF and DKIM records as instructed by Brevo
- This usually resolves within 24 hours of proper DNS setup

---

## Free Tier Limits

Brevo's free tier includes:
- **300 emails per day**
- Unlimited contacts
- Email templates
- Basic automation

This should be more than enough for your contact form needs!

---

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Check Brevo dashboard for API errors
3. The form has a fallback error message directing users to email directly

---

## Files Modified/Created

✅ **Created:**
- `/api/send-contact.js` - Serverless API endpoint for email sending
- `/vercel.json` - Vercel configuration
- `/BREVO_SETUP.md` - This guide

✅ **Modified:**
- `ContactSales.tsx` - Added success UI, loading states, and API call
- `index.html` - Added animations for success confirmation
- `package.json` - Added @getbrevo/brevo dependency

---

## Next Steps

1. ✅ Get your Brevo API key
2. ✅ Verify your sender domain in Brevo
3. ✅ Add `BREVO_API_KEY` to Vercel environment variables
4. ✅ Redeploy your site on Vercel
5. ✅ Test the form with a real submission
6. ✅ Check cole@mediant.group for the test email

That's it! Your contact form is now fully functional with professional email notifications. 🚀


# Elk Ave Tavern — Deployment Guide

## Prerequisites
- Node.js 20+
- Vercel CLI (`npm i -g vercel@latest`)
- Supabase project set up (see SUPABASE_SETUP.md)

## Environment Variables Required

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
vercel login
vercel link
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel --prod
```

### Option 2: Vercel Dashboard
1. Import GitHub repo at vercel.com/new
2. Add env vars in Project Settings → Environment Variables
3. Deploy

## Custom Domain
1. Vercel Dashboard → Project → Domains
2. Add `elkavetavern.com` and `www.elkavetavern.com`
3. Update DNS at your registrar per Vercel's instructions

## Build Command
```
npm run build
```

## Local Development
```bash
npm install
cp .env.example .env.local  # fill in Supabase credentials
npm run dev
```
Open http://localhost:3000

## Post-Deploy Checklist
- [ ] Contact form submits and appears in Supabase
- [ ] All 6 pages load without errors
- [ ] Google Maps iframe loads on contact page
- [ ] Social links open in new tab
- [ ] Mobile layout at 375px looks correct
- [ ] Update phone number in Nav.tsx, Footer.tsx, layout.tsx, and all CTAs
- [ ] Verify Google Maps embed URL is correct for the actual address

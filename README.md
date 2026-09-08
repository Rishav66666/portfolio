# Rishav Raj — Data Analyst Portfolio

A premium, dark-themed, AI-powered personal portfolio built for a Data Analyst / Business Analyst job search. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Recharts.

## What's inside

- **Hero** with animated role switcher and a live data readout panel
- **Quick Snapshot** — a 15-second recruiter overview
- **About** — career journey scroll timeline
- **Experience** — internship timeline
- **Skills** — interactive skill clusters sized by real proficiency level (no fake percentages)
- **Projects** — filterable project explorer with full case-study modals (problem, objective, approach, insights, impact, charts)
- **Data Mindset** — the analytical workflow, from raw data to business insight
- **Education**, **Certifications**, **Achievements**
- **Ask Rishav AI** — a chatbot that answers only from the structured data in `data/profile.ts`, with a safe fallback for anything it doesn't know
- **Contact** — validated contact form + direct links

All content lives in **`data/profile.ts`** — update your info there and it propagates through the whole site (including the chatbot).

## Running locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## Project structure

```
app/
  layout.tsx        # metadata, fonts, SEO
  page.tsx           # composes all sections
  api/chat/route.ts  # server route for the AI assistant
components/           # one component per section
data/profile.ts       # single source of truth for all content
lib/chatbot.ts         # local rule-based Q&A engine
types/profile.ts       # shared TypeScript types
  types/profile.ts       # shared TypeScript types
```

## Before you deploy — replace these placeholders

1. **Resume file** — add your real resume as `public/resume.pdf`. The "Download Resume" buttons already link to `/resume.pdf`.
2. **Favicon / OG image** — swap `app/favicon.ico` and add a `public/og-image.png` if you want a custom social preview card.
3. **Site URL** — update `siteUrl` in `app/layout.tsx` once you have a real domain, so Open Graph/Twitter cards resolve correctly.
4. **Contact form backend** — the form in `components/ContactForm.tsx` validates input but doesn't send anywhere yet. Wire it to a service like Formspree, Resend, or a custom API route.

## Upgrading the AI assistant to a real LLM (optional)

Right now "Ask Rishav AI" runs entirely on local data (`lib/chatbot.ts`) — no API key needed, nothing can be fabricated because there's no model generating text.

To connect a real LLM later:

1. Add your key to a `.env.local` file (never commit this, never expose it to the browser):
   ```
   ANTHROPIC_API_KEY=sk-...
   ```
2. In `app/api/chat/route.ts`, call the provider's API from the server (not the client), passing the contents of `profile.ts` as grounding context and instructing the model to answer only from that data, with the same fallback message.
3. Keep `askPortfolioAssistant()` as an offline fallback in case the API call fails or no key is configured.

`.env.local` is already covered by `.gitignore` in the default Next.js setup.

## Deploying to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Rishav66666/<your-repo-name>.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to vercel.com/new
   - Import the GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Click **Deploy**

3. **Add environment variables** (only needed if you connected a real LLM)
   - In the Vercel project → Settings → Environment Variables
   - Add `ANTHROPIC_API_KEY` (or your provider's key) for Production, Preview, and Development as needed
   - Redeploy after adding variables

4. **Connect a custom domain**
   - Project → Settings → Domains → Add your domain
   - Follow Vercel's DNS instructions (usually an `A` or `CNAME` record with your registrar)
   - HTTPS is issued automatically

## Notes

- No content on this site was fabricated — every stat, project detail, and achievement is drawn from the profile data you provided. Where a numeric outcome wasn't available, the copy focuses on methodology and approach instead.
- Reduced-motion preferences are respected sitewide.
- The chatbot's fallback response is: "I don't have verified information about that in Rishav's portfolio yet."

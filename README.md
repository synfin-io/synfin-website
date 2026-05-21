# SynFin Website

Corporate website for **SynFin LLC** — enterprise cybersecurity services.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, why SynFin, CTA |
| `/services` | Full service catalogue (AppSec, VM, Red/Purple Teaming) |
| `/about` | Company story, values, certifications |
| `/contact` | Contact form + details |

## Getting Started

### Prerequisites

Install [Node.js 18+](https://nodejs.org/en/download).

### Run locally

```bash
cd synfin-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Deployment

Deploy to **Vercel** (recommended — zero config for Next.js):

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Set **Root Directory** to `synfin-website` if needed.
4. Add your custom domain `synfin.io` in Vercel → Settings → Domains.

Or deploy to **Cloudflare Pages** with Next.js adapter.

## Contact Form

The contact form currently simulates a submission.  
Connect it to a real endpoint:

- **Formspree**: replace the `fetch` comment in `app/contact/page.tsx` with a Formspree action URL.
- **Resend / SendGrid**: create `app/api/contact/route.ts` and POST to it.
- **Netlify Forms**: add `netlify` attribute to the `<form>` tag.

## Brand Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-teal` | `#00BFB3` | Primary brand colour |
| `brand-blue` | `#0A7EC4` | Gradient end |
| `brand-navy` | `#0F172A` | Dark backgrounds |

---

© 2026 SynFin LLC. All rights reserved.
"# synfin-website" 

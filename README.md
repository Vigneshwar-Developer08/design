# Forma Studio — Design Agency Landing Page

A modern design agency homepage built as part of a Next.js Developer Internship evaluation. The goal was to produce work that looks handcrafted by a senior frontend developer — not templated or AI-generated.

---

## Live Demo

> Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Tech Stack

| Category | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS Variables |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Fonts | Geist (local, via `geist` npm package) |
| Images | next/image with Unsplash |
| Deployment | Vercel |

---

## Sections

- **Navbar** — Sticky, transparent → blur on scroll, mobile hamburger menu
- **Hero** — Bold headline with subtle grid background, stat strip, two CTAs
- **Services** — 4 cards with icon, title, description, hover lift + accent underline
- **Portfolio** — 6-project responsive grid with hover overlay reveal
- **Contact** — Split layout, React Hook Form + Zod validation, success state
- **Footer** — Minimal: logo, copyright, social links

---

## Folder Structure

```
app/
├── components/
│   ├── layout/       # Navbar, Footer, MobileMenu
│   ├── sections/     # Hero, Services, Portfolio, Contact
│   ├── cards/        # ServiceCard, PortfolioCard
│   └── ui/           # FadeIn, SectionLabel
├── hooks/            # useScrolled
├── lib/              # utils.ts, data.ts, schemas.ts
├── types/            # index.ts
├── globals.css
├── layout.tsx
├── page.tsx
├── robots.ts
└── sitemap.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/forma-studio.git
cd forma-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Lint & Format

```bash
npm run lint
npm run format
```

---

## Design Decisions

**Typography** — Geist (by Vercel) is used throughout. It's clean, technically precise, and suits a design/dev agency without feeling generic.

**Color** — The palette is intentionally minimal: white background, slate text, a single indigo accent (`#4F46E5`). No secondary accent colors fighting for attention.

**Hero** — The grid backdrop is a CSS `background-image` pattern with a radial mask — no SVGs, no blob shapes. Gives depth without noise.

**Signature element** — The bottom-border accent slide animation on service cards. A single restrained micro-interaction that rewards hover without screaming.

**Animations** — All via Framer Motion with `whileInView` + `once: true`. Fade-up on scroll, hover lifts on cards. Nothing bounces or rotates.

**Performance** — Hero, Services, Portfolio, and Footer are Server Components. Only Navbar (scroll listener), MobileMenu (state), and Contact (form) are Client Components.

---

## Assumptions & Additional Features

- Contact form simulates a 900ms API call; in production, wire `onSubmit` to your preferred backend (Resend, Formspree, etc.)
- Portfolio images are Unsplash CDN URLs — swap with your own hosted assets
- `sitemap.ts` and `robots.ts` are configured for `https://forma-studio.vercel.app` — update the base URL before deploying
- SEO metadata includes OpenGraph and Twitter Card tags

---

## Deployment (Vercel)

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on push.

---

## License

MIT

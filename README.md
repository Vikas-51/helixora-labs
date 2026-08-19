# Helixora Labs Biotech Landing Page

Premium, animation-driven biotechnology landing page built with Next.js, TypeScript, Tailwind CSS, Lenis, Anime.js, GSAP, Framer Motion, and Three.js.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Scripts

```bash
npm run build
npm run typecheck
npm run lint
```

## Project Structure

- `app/` contains the SSR layout, SEO metadata, JSON-LD, and page composition.
- `components/sections/` contains each landing-page section as an isolated component.
- `components/visuals/` contains the interactive Three.js biotechnology mockup.
- `components/animation/` contains client motion primitives, Lenis smooth scrolling, GSAP parallax, and Anime.js micro-interactions.
- `animation/` contains reusable Framer Motion variants.
- `responsive/` contains shared responsive layout tokens used by sections.

## Design And Animation Approach

Helixora uses a warm clinical palette with pine, ion teal, plasma coral, and bone surfaces to avoid a generic blue biotech look. The page is structured around a premium research narrative: adaptive cell intelligence, wet-lab evidence loops, platform capabilities, measurable impact, and a direct program CTA.

Animations are intentionally smooth and restrained. Lenis powers smooth scrolling, GSAP drives scroll-linked parallax, Framer Motion handles section reveals, Anime.js animates the scientific signal chips, and Three.js renders the live biotech platform mockup with orbital molecular motion. The layout uses responsive tokens and stable dimensions so desktop, tablet, and mobile views keep strong hierarchy and avoid layout shift.

## Deployment

The app is ready for Vercel deployment:

```bash
npm run build
```

Then connect the repository to Vercel and deploy the default Next.js project settings.

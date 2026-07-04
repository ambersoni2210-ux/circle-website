# Circle Website — v2 (Design Revamp)

Premium merchandise and custom branded stores for campuses, companies, teams,
alumni groups and communities. Built with Next.js (App Router), React,
TypeScript and Tailwind CSS.

## What changed in v2

- New editorial design system: Fraunces serif display + Inter body.
- Correct CIRCLE logo (thin ring + centre dot) as a crisp SVG, used everywhere.
- New black-screen intro animation (logo draws in, then reveals the site).
- One central image config: `src/config/images.ts` (see IMAGE_REPLACEMENT_GUIDE.md).
- Polished SVG product + brand visuals (swappable for real photos anytime).
- Clearer commerce language: "Add to inquiry", price bands, MOQ, lead times.
- Per-audience depth on Colleges and Corporate (pain points, process, bundles).
- About page with vision, mission, values, founder note, testimonials,
  shipping, returns and buyer FAQs.
- Accessibility: skip link, visible focus, larger tap targets, better alt text,
  reduced-motion support.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Change images

Everything is in one file: `src/config/images.ts`.
Full instructions: **IMAGE_REPLACEMENT_GUIDE.md**

## Contact

connect@getcircle.in · New Delhi, India

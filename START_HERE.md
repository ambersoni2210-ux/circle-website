# CIRCLE - FINAL WEBSITE (v8)

Whole website, build-tested (all 34 pages compile). Real photos throughout.

## What's new in this version
- INTRO: multi-colour dots scatter on black, drift and connect with lines,
  converge into the ring, CIRCLE appears, dots fade to the clean logo, then
  tagline "Connecting the Community". Canvas animation, ~5.5s, every load.
  No dead black screen. Short 1.2s logo splash on logo click.
- NAVBAR: always visible (translucent, blurs on scroll). Logo mark + CIRCLE.
  Links: Home, Shop, Platform, About, Contact. Platform opens a dropdown with
  Colleges and Corporate. Active page shown by colour (cobalt), not a dot.
  Advanced product + page SEARCH. "Start a store" button. Bag ICON (not text).
- PAGE TRANSITION: subtle ~1.1s Circle logo wipe between pages (no black gap).
- HOMEPAGE: hero + scrolling strip + "Who we build for" (4 cards: Colleges,
  Corporate, Sports, Events) + "Product range" (6 category cards) + CTA.
  Featured products and the custom-store block were removed (they live on
  Shop and Platform).
- REAL PHOTOS from your zip placed in every slot (hero, 10 scroll images,
  4 audience blocks, 6 category blocks, 14 shop products, page heroes).
- FOOTER: logo, connect@getcircle.in only, Team Circle New Delhi, hours
  9 AM to 9 PM weekdays and weekends, Circle logo + "All rights reserved 2026".
  No GST, no WhatsApp.
- ABOUT: balanced, centered layouts (no more lopsided bullets).
- Colours: stronger cobalt + 5 audience accents, cleaner hierarchy.
- No em dashes or semicolons in reader-facing text.
- Mobile: responsive navbar, menu with Platform sub-links, fluid grids.

## GO LIVE (replace everything - surest way)
1. Unzip. On GitHub delete the `src` and `public` folders.
2. Add file -> Upload files -> drag in EVERYTHING at the top level here
   (src, public, and all loose files). Commit.

## Force a clean Vercel build
Vercel -> project -> Deployments -> newest -> ... -> Redeploy ->
UNTICK "Use existing Build Cache" -> Redeploy. Wait for "Ready".

## View
Open in an INCOGNITO window (avoids old cache) or hard-refresh Ctrl/Cmd+Shift+R.

## Swap images later
Everything routes through src/config/images.ts (see IMAGE_REPLACEMENT_GUIDE.md).

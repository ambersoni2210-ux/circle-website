# CIRCLE - FINAL WEBSITE (v7 - real photos + colour + soul)

Whole website, build-tested (all 34 pages compile).

## What's new
- REAL PHOTOGRAPHY from your uploaded images placed across the site:
  hero (cobalt hoodie), audience cards (graduation, welcome kits, sports
  huddle, campus, community), product categories, colleges, corporate, about.
- 5-colour audience system used as accents and soft tinted cards:
  Colleges = purple, Corporate = sky blue, Sports = green, Events = yellow,
  Alumni/gifting = coral. Black + white base, cobalt for actions.
- Restructured homepage: hero with product chips + stat badge, audience
  cards, colourful product-category cards, featured products, custom-store
  section, how it works, why circle, colourful final CTA.
- Intro: community-convergence dots forming the logo, tagline
  "Connecting the Community". Short 1.8s logo splash on logo click.
- Fonts: Space Grotesk (headings) + Inter (body).
- No em dashes or semicolons in reader-facing text.

## GO LIVE (replace everything - surest way)
1. Unzip this folder.
2. On GitHub: delete the `src` and `public` folders.
3. Add file -> Upload files -> drag in EVERYTHING at the top level here
   (src, public, and all loose files). Commit.

## Force a clean Vercel build
1. Vercel -> project -> Deployments -> newest -> ... -> Redeploy.
2. UNTICK "Use existing Build Cache" -> Redeploy. Wait for "Ready".

## View
Open in an INCOGNITO window (avoids old cache) or hard-refresh Ctrl/Cmd+Shift+R.

## Swap any image later
Everything routes through src/config/images.ts. See IMAGE_REPLACEMENT_GUIDE.md.

## Note
WhatsApp number and GST in the footer are placeholders. Swap for real values.

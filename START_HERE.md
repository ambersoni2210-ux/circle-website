# CIRCLE - FINAL WEBSITE (v9)

Whole website, build-tested (30 pages compile). Real photos throughout.

## What changed this version
- LOGO fixed everywhere (navbar, intro, footer): thin circle with a
  top-to-bottom gradient (dark at top, grey at bottom) and CIRCLE inside,
  matching your real logo.
- INTRO: dots in white / blue / grey only. A single line now TRAVELS around
  the ring dot to dot, drawing the circle, then the real logo and
  "Connecting the Community" hold for ~1.5s before the site loads.
  Plays on first load only.
- PAGE TRANSITIONS removed. No logo/black screen when switching pages, you
  move seamlessly. The intro logo only appears on the first website open.
- NAVBAR: clicking Platform expands two inline tabs (Colleges, Corporate)
  right in the bar (not a dropdown). They stay while you are in the Platform
  section and fade when you leave.
- PRODUCTS: only items with real photos are listed (gym shorts, notebook,
  sticker pack, umbrella removed). Each product shows ONE correct image.
  Color option removed, kept size, description, quantity, price.
- Sports block image on the homepage replaced with a stronger sports image.
- IMAGE PLACEMENT fixed on home, about, colleges, corporate: images now sit
  in fixed aspect-ratio frames so they stay sharp and aligned (no more
  oversized/pixelated/cropped images).
- Cleaner, more minimal colour hierarchy.

## GO LIVE (replace everything - surest way)
1. Unzip. On GitHub delete the `src` and `public` folders.
2. Add file -> Upload files -> drag in EVERYTHING at the top level here
   (src, public, all loose files). Commit.

## Force a clean Vercel build
Vercel -> project -> Deployments -> newest -> ... -> Redeploy ->
UNTICK "Use existing Build Cache" -> Redeploy. Wait for "Ready".

## View
Open in an INCOGNITO window (avoids old cache) or hard-refresh Ctrl/Cmd+Shift+R.

# CIRCLE - FINAL WEBSITE (v6)

Whole website. All latest changes baked in and build-tested (all 34 pages).

## What's new in this version
- Content updated across every page (homepage, products, custom stores,
  colleges, corporate, about, contact, order inquiry, footer, SEO titles).
- Intro animation retimed to 8 seconds: scattered dots (a community) converge
  and form the logo over the first ~5.5 to 6 seconds, then the dots fade out
  and the clean CIRCLE logo holds with the tagline "Connecting the Community"
  for the last ~2 seconds so it can be read. Plays on every load / reload.
- Short logo splash: max 1.8 seconds. Plays only when you click the logo while
  browsing (quick black screen with the logo, then lands home).
- Navbar shows the clean CIRCLE wordmark only.
- Fonts: Space Grotesk (headings) + Inter (body).
- Colour: black + white + cobalt blue, with soft light-blue backgrounds on a
  few sections (product range, why circle, store problem, voucher, etc.).
- No em dashes or semicolons in reader-facing text.

## GO LIVE (surest way - replace everything)
1. Unzip this folder.
2. On GitHub: delete the `src` and `public` folders.
3. Add file -> Upload files -> drag in EVERYTHING at the top level of this
   unzipped folder (src, public, and all loose files).
4. Commit.

## Force a clean Vercel build
1. Vercel -> your project -> Deployments.
2. Newest deployment -> ... (three dots) -> Redeploy.
3. UNTICK "Use existing Build Cache" if shown -> Redeploy.
4. Wait for "Ready".

## View it
Open your site in an INCOGNITO / PRIVATE window (avoids old cache), or
hard-refresh: Ctrl/Cmd + Shift + R.
- Reload = full 8-second intro. Click the logo while browsing = short 1.8s splash.

## Note
WhatsApp number and GST in the footer are placeholders. Swap for real values.

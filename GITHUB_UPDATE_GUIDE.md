# 🚀 GITHUB UPDATE GUIDE — Circle Website v2

This is your exact, step-by-step checklist to put the new website live on
GitHub. No coding knowledge needed, just follow it top to bottom.

There are two ways to do this. **Method A (easiest)** replaces everything at
once. **Method B** is the precise file-by-file list if you prefer control.

---

## ⚠️ Before you start (2 minutes)

1. The new project uses a corrected Next.js version. After you upload, anyone
   running it must run `npm install` once (details at the end).
2. Make a safety copy of your current repo first: on GitHub, go to your repo →
   **Settings** is not needed — simply download your current code as a backup:
   click the green **Code** button → **Download ZIP**. Keep that ZIP somewhere
   safe. If anything goes wrong, you still have the old site.

---

## ✅ METHOD A — Replace everything (recommended)

This is the cleanest path because many files changed.

1. Unzip the delivered file `circle-website-v2.zip` on your computer. You will
   get a folder called `circle-website`.
2. Open your repository on GitHub.com.
3. Delete the old source so nothing stale is left behind. For each of these,
   click the item, then the trash/⋯ menu → **Delete**:
   - the **`src`** folder
   - the **`public`** folder
   - `next.config.js`, `package.json`, `package-lock.json`,
     `tailwind.config.js`, `README.md`
   > Tip: GitHub's web UI deletes files one at a time. If that is tedious, use
   > Method C below (upload over the top), which overwrites automatically.
4. Click **Add file → Upload files**.
5. Drag in **everything** from inside the unzipped `circle-website` folder:
   the `src` folder, the `public` folder, and all the loose files
   (`package.json`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`,
   `postcss.config.js`, `next-env.d.ts`, `README.md`,
   `IMAGE_REPLACEMENT_GUIDE.md`, `GITHUB_UPDATE_GUIDE.md`).
6. Scroll down, type a message like `Upload Circle website v2 revamp`, and click
   **Commit changes**.
7. Done. If your site auto-deploys (e.g. Vercel), it will rebuild in ~1–2
   minutes. Refresh www.getcircle.in.

---

## ✅ METHOD C — Upload over the top (fastest, no deleting)

GitHub overwrites a file if you upload a new one with the same name and path.

1. Unzip `circle-website-v2.zip`.
2. On GitHub: **Add file → Upload files**.
3. Drag in the whole contents of the unzipped folder (as in Method A, step 5).
4. Commit. Files with the same name are replaced; new files are added.
5. **One manual delete afterward** (these files were removed in v2 and are no
   longer used). Delete them so they don't linger:
   - `src/components/LoadingIntro.tsx`
   - `src/data/imageCredits.ts`
   - Old images in `public/images/` (the `.webp` files) and
     `public/images/products/` (the `.webp` files) — optional, they are simply
     unused now.
   - `public/logo-dark.svg` and `public/logo-light.svg` — optional, unused now.

---

## 📋 METHOD B — Exact file-by-file list (for the precise route)

**➕ NEW files to add** (did not exist before):
```
src/config/images.ts                 ← the one image control file
src/components/CircleLogo.tsx         ← the correct logo
src/components/IntroAnimation.tsx     ← the black-screen intro
public/images/svg/                    ← all new product + scene visuals (28 files)
IMAGE_REPLACEMENT_GUIDE.md
GITHUB_UPDATE_GUIDE.md
```

**✏️ REPLACE these files** (upload the new version over the old):
```
src/app/layout.tsx
src/app/globals.css
src/app/page.tsx
src/app/about/page.tsx
src/app/colleges/page.tsx
src/app/corporate/page.tsx
src/app/platform/page.tsx
src/app/contact/page.tsx
src/app/cart/page.tsx
src/app/shop/[slug]/page.tsx
src/components/Navbar.tsx
src/components/Footer.tsx
src/components/ProductCard.tsx
src/components/ProductConfigurator.tsx
src/components/CartDrawer.tsx
src/components/CheckoutForm.tsx
src/components/AnimatedSection.tsx
src/data/products.ts
package.json
next.config.js
tailwind.config.js
README.md
```

**🗑️ DELETE these files** (no longer used):
```
src/components/LoadingIntro.tsx
src/data/imageCredits.ts
public/logo-dark.svg
public/logo-light.svg
public/images/*.webp              (5 old editorial images)
public/images/products/*.webp     (19 old product images)
```

**🔷 UNCHANGED (leave as-is):**
```
src/app/shop/page.tsx
src/app/checkout/page.tsx
src/app/app-solution/page.tsx
src/app/b2b/page.tsx
src/app/careers/page.tsx
src/context/CartContext.tsx
tsconfig.json
postcss.config.js
next-env.d.ts
```
> Note: `shop/page.tsx` and `checkout/page.tsx` did not need code changes — the
> components they use were updated instead. They are included in the zip so you
> can safely upload the whole folder either way.

---

## 🧪 After uploading — confirm it works

If you (or a developer) run it locally, or your host builds it:

```bash
npm install     # REQUIRED once — the Next.js version was corrected
npm run build   # should finish with a page list and NO red "Failed" text
npm run start   # then open http://localhost:3000
```

If you use Vercel/Netlify auto-deploy, it runs these for you. Just wait for the
green "deployed" status and refresh your site.

---

## 🖼️ Want real product photos later?

Everything is wired so you never touch code. Open `src/config/images.ts`, follow
`IMAGE_REPLACEMENT_GUIDE.md`, and swap any picture in one line. The site keeps
working the whole time.

---

## ❓ If something looks off

- **Fonts look plain / like Times New Roman:** the build could not reach Google
  Fonts during build. Rebuild with a normal internet connection; `next/font`
  downloads Inter + Fraunces automatically.
- **An image is missing:** check `src/config/images.ts` — the path must start
  with `/` and must not contain the word `public`.
- **Build fails on the host:** make sure `npm install` ran (the Next.js version
  changed from the old file, so a fresh install is required).

# 🖼️ IMAGE REPLACEMENT GUIDE (for non-coders)

This guide explains, in plain English, how to change any picture on the Circle
website. You do **not** need to know how to code. Almost everything happens in
**one file**.

---

## 1. Which file do I open?

Open this one file:

```
src/config/images.ts
```

Every product photo, hero image, category image and mockup on the whole site
reads its picture from this single file. Change it here → it changes everywhere.

You will also, rarely, touch one more file if you use **external links**
(step 6): `next.config.js`. That is the only exception.

---

## 2. The image keys (what each name controls)

Inside `src/config/images.ts` there are three groups. Here are the keys:

### Product images (group: `productImages`)
| Key | Product |
|-----|---------|
| `premiumHoodie` | Premium hoodie |
| `oversizedTshirt` | Oversized t-shirt |
| `varsityJacket` | Varsity jacket |
| `crewneckSweatshirt` | Crewneck sweatshirt |
| `gymTshirt` | Gym t-shirt |
| `sportsJersey` | Sports jersey |
| `gymShorts` | Gym shorts |
| `trackSuit` | Track suit |
| `steelBottle` | Steel bottle |
| `tumbler` | Tumbler |
| `ceramicMug` | Ceramic mug |
| `cap` | Cap |
| `backpack` | Backpack |
| `gymBag` | Gym bag |
| `utilityPouch` | Utility pouch |
| `notebookDiary` | Notebook / diary |
| `premiumPen` | Premium pen |
| `stickerPack` | Sticker pack |
| `umbrella` | Umbrella |

### Hero + brand images (group: `brandImages`)
| Key | Where it shows |
|-----|----------------|
| `heroBelonging` | The big image at the top of the homepage |
| `platformStorefront` | The store mockup on the homepage + Platform page |

### Category images (group: `categoryImages`)
| Key | Where it shows |
|-----|----------------|
| `colleges` | Colleges card (homepage) + top of Colleges page |
| `corporate` | Corporate card (homepage) + top of Corporate page |
| `sports` | Sports/teams card on the homepage |

---

## 3. Recommended image sizes

| Image type | Recommended size | Shape |
|------------|------------------|-------|
| Product images | 1000 × 1250 px | Portrait (4:5) |
| Hero image | 1800 × 1100 px | Wide |
| Storefront mockup | 1600 × 1000 px | Wide |
| Category images | 1200 × 900 px | Landscape (4:3) |

Keep each file under about 400 KB so pages stay fast.

---

## 4. Which file format should I use?

| Format | Use it for | Notes |
|--------|-----------|-------|
| **.webp** | Photos (best choice) | Smallest size, great quality. Preferred. |
| **.jpg** | Photos (also fine) | Slightly larger than webp. |
| **.png** | Logos / graphics with transparency | Larger files; avoid for photos. |
| **.svg** | The current brand visuals | Sharp at any size. What the site ships with today. |

**Rule of thumb:** real product photos → `.webp` or `.jpg`. Leave the built-in
brand illustrations as `.svg` unless you are replacing them with a photo.

---

## 5. Where do I put images I upload myself?

Put product photos here:

```
public/images/products/
```

Put hero / category / mockup images here:

```
public/images/
```

Then, in `src/config/images.ts`, point the key at your file. **Important:** the
path starts with a slash and does **not** include the word `public`.

Example — you saved `my-hoodie.webp` into `public/images/products/`:

```ts
premiumHoodie: {
  src: "/images/products/my-hoodie.webp",
  alt: "Black premium hoodie, front view, folded",
},
```

---

## 6. How do I use an external image link instead (e.g. Unsplash)?

You can paste a direct image URL as the `src`. It must be a direct link to the
image itself (ending in `.jpg`, `.png` or `.webp`), not a web page.

Two steps:

**Step A —** paste the URL in `src/config/images.ts`:

```ts
premiumHoodie: {
  src: "https://images.unsplash.com/photo-xxxxxxxx?w=1200&q=80",
  alt: "Black premium hoodie, front view",
},
```

**Step B —** tell the site that domain is allowed. Open `next.config.js` and
make sure the website's domain is listed under `remotePatterns` (Unsplash and
Pexels are already added for you):

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'images.pexels.com' },
    // add a new line here for any other image website you use, e.g.:
    // { protocol: 'https', hostname: 'cdn.mywebsite.com' },
  ],
},
```

> ✅ Free, safe sources with low copyright risk: **Unsplash** and **Pexels**
> (both free for commercial use). Download the image, or copy its direct image
> address. Avoid random Google Images results — many are copyrighted and the
> links break.

---

## 7. How do I test that the image changed correctly?

1. Save the file.
2. In a terminal, from the project folder, run:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000** in your browser.
4. Go to the page with the image (e.g. `/shop` or the homepage).
5. Confirm your new image shows and is not stretched or blurry.
6. If it does **not** show:
   - Check the path starts with `/` and has no `public` in it.
   - Check the file name matches exactly (capital letters matter).
   - If it is an external link, confirm you did **Step B** in section 6.
7. When happy, build to confirm nothing is broken:
   ```bash
   npm run build
   ```
   A successful build ends with a list of pages and no red "Failed" message.

---

## 8. Where is the alt text?

Every image has an `alt` line right next to its `src` in
`src/config/images.ts`. Alt text is the short description read aloud by screen
readers and shown if an image fails to load. Keep it short, accurate, and
specific, for example: `"Black steel water bottle with circular brand mark"`.
Edit it in the same place you edit the image path.

---

## Quick reference

- **One file for images:** `src/config/images.ts`
- **Upload photos to:** `public/images/products/` or `public/images/`
- **Path format:** `/images/products/name.webp` (slash first, no `public`)
- **External links:** paste URL + allow the domain in `next.config.js`
- **Test:** `npm run dev` → open localhost:3000 → then `npm run build`

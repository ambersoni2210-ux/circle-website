/* =====================================================================
   CIRCLE - CENTRAL IMAGE CONFIGURATION
   =====================================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE ANY IMAGE ON THE SITE.

   Every product image, hero image, category image and mockup on the whole
   website reads its picture from THIS file. Nothing is hard-coded anywhere
   else. If you change a path here, it changes everywhere on the site.

   ---------------------------------------------------------------------
   HOW TO SWAP AN IMAGE (non-coder friendly):
   ---------------------------------------------------------------------
   Option A - use a file you uploaded yourself:
     1. Put your image in:  public/images/products/   (or public/images/)
     2. Find the product key below (e.g. premiumHoodie)
     3. Change its "src" to your file, for example:
          src: "/images/products/my-hoodie-photo.jpg"
        (Always start the path with a slash. Do NOT write "public".)

   Option B - use an external image link (e.g. an Unsplash photo):
     1. Copy the direct image URL (it should end in .jpg / .png / .webp)
     2. Paste it as the "src", for example:
          src: "https://images.unsplash.com/photo-xxxx?w=1200&q=80"
     3. IMPORTANT: external domains must be allow-listed once in
        next.config.js (see IMAGE_REPLACEMENT_GUIDE.md, step 6).

   The "alt" text is the description read aloud by screen readers and shown
   if an image fails to load. Always keep it short and accurate.

   Recommended sizes are noted on each group. Full details, formats and a
   test checklist are in:  IMAGE_REPLACEMENT_GUIDE.md
   ===================================================================== */

export type ImageAsset = {
  src: string;
  alt: string;
};

/* ---------------------------------------------------------------------
   1. PRODUCT IMAGES
   Recommended: square-ish, 1000 x 1250 px, .webp or .jpg for photos.
   The keys here match the product "imageKey" in src/data/products.ts.
   To use a real photo, replace the ".svg" path with your photo path/URL.
   --------------------------------------------------------------------- */
export const productImages: Record<string, ImageAsset> = {
  // Replace this later with a real hoodie photo (front view, folded or flat-lay).
  premiumHoodie: { src: "/images/svg/premium-hoodie.svg", alt: "Circle premium heavyweight hoodie in black with a circular chest brand mark" },
  // Replace this later with a real oversized t-shirt photo.
  oversizedTshirt: { src: "/images/svg/oversized-tshirt.svg", alt: "Circle oversized t-shirt in black with a centered circular brand mark" },
  // Replace this later with a real varsity jacket photo.
  varsityJacket: { src: "/images/svg/varsity-jacket.svg", alt: "Circle varsity jacket in black with contrast cream sleeves" },
  // Replace this later with a real crewneck sweatshirt photo.
  crewneckSweatshirt: { src: "/images/svg/crewneck-sweatshirt.svg", alt: "Circle crewneck sweatshirt in black with a chest brand mark" },
  // Replace this later with a real gym t-shirt photo.
  gymTshirt: { src: "/images/svg/gym-tshirt.svg", alt: "Circle performance gym t-shirt in black" },
  // Replace this later with a real sports jersey photo.
  sportsJersey: { src: "/images/svg/sports-jersey.svg", alt: "Circle sports jersey in black with number 10 print" },
  // Replace this later with a real gym shorts photo.
  gymShorts: { src: "/images/svg/gym-shorts.svg", alt: "Circle gym shorts in black with a small brand mark" },
  // Replace this later with a real track suit photo.
  trackSuit: { src: "/images/svg/track-suit.svg", alt: "Circle track suit jacket and trousers in black with side stripes" },
  // Replace this later with a real steel bottle photo.
  steelBottle: { src: "/images/svg/steel-bottle.svg", alt: "Circle insulated steel water bottle in matte black" },
  // Replace this later with a real tumbler photo.
  tumbler: { src: "/images/svg/tumbler.svg", alt: "Circle travel tumbler in matte black with a sip lid" },
  // Replace this later with a real ceramic mug photo.
  ceramicMug: { src: "/images/svg/ceramic-mug.svg", alt: "Circle ceramic mug in black with a circular brand mark" },
  // Replace this later with a real cap photo.
  cap: { src: "/images/svg/cap.svg", alt: "Circle six-panel cap in black with an embroidered brand mark" },
  // Replace this later with a real backpack photo.
  backpack: { src: "/images/svg/backpack.svg", alt: "Circle everyday backpack in black" },
  // Replace this later with a real gym bag photo.
  gymBag: { src: "/images/svg/gym-bag.svg", alt: "Circle duffel gym bag in black" },
  // Replace this later with a real utility pouch photo.
  utilityPouch: { src: "/images/svg/utility-pouch.svg", alt: "Circle zip utility pouch in black" },
  // Replace this later with a real notebook photo.
  notebookDiary: { src: "/images/svg/notebook-diary.svg", alt: "Circle hardcover notebook in black with a circular deboss" },
  // Replace this later with a real pen photo.
  premiumPen: { src: "/images/svg/premium-pen.svg", alt: "Circle metal pen in black" },
  // Replace this later with a real sticker pack photo.
  stickerPack: { src: "/images/svg/sticker-pack.svg", alt: "Circle die-cut sticker pack in black and cream" },
  // Replace this later with a real umbrella photo.
  umbrella: { src: "/images/svg/umbrella.svg", alt: "Circle compact umbrella in black" },
};

/* ---------------------------------------------------------------------
   2. HERO + BRAND STORYTELLING IMAGES
   Large, wide images. Recommended: 1800 x 1100 px, .webp or .jpg.
   The homepage hero is the first big picture visitors see.
   --------------------------------------------------------------------- */
export const brandImages: Record<string, ImageAsset> = {
  // Replace this later with a real wide hero photo (product-forward, on-brand).
  heroBelonging: { src: "/images/svg/scene-hero.svg", alt: "Circle branded merchandise arranged with concentric circle motif" },
  // Replace this later with a real photo of a branded storefront / device mockup.
  platformStorefront: { src: "/images/svg/scene-storefront.svg", alt: "Preview of a custom Circle branded store on desktop and mobile" },
};

/* ---------------------------------------------------------------------
   3. AUDIENCE / CATEGORY IMAGES
   Used on the homepage "use cases" cards and audience landing pages.
   Recommended: 1200 x 900 px (4:3), .webp or .jpg.
   --------------------------------------------------------------------- */
export const categoryImages: Record<string, ImageAsset> = {
  // Replace this later with a real colleges / campus photo.
  colleges: { src: "/images/svg/scene-colleges.svg", alt: "Campus merchandise concept for colleges and student communities" },
  // Replace this later with a real corporate photo.
  corporate: { src: "/images/svg/scene-corporate.svg", alt: "Corporate welcome kit and employee merchandise concept" },
  // Replace this later with a real sports / teams photo.
  sports: { src: "/images/svg/scene-sports.svg", alt: "Team kit and sports merchandise concept" },
};

/* Small helper so components can ask for a product image by key safely.
   If a key is missing it falls back to the hoodie so the site never breaks. */
export function getProductImage(key: string): ImageAsset {
  return productImages[key] ?? productImages.premiumHoodie;
}

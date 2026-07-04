/* =====================================================================
   CIRCLE - CENTRAL IMAGE CONFIGURATION
   =====================================================================
   ONE FILE controls every image on the site. Change a path here and it
   changes everywhere. Real photos live in /public/images/photos and the
   brand SVG visuals live in /public/images/svg.

   To swap an image: change its "src" below.
     - Uploaded file: put it in public/images/photos/ then use
       src: "/images/photos/your-file.jpg"   (slash first, no "public")
     - External URL: paste it as src and add the domain to next.config.js
   Full guide: IMAGE_REPLACEMENT_GUIDE.md
   ===================================================================== */

export type ImageAsset = { src: string; alt: string };

/* ---------------------------------------------------------------------
   1. PRODUCT IMAGES  (used on shop cards + product pages)
   Real photos where we have them; clean SVG visuals otherwise.
   --------------------------------------------------------------------- */
export const productImages: Record<string, ImageAsset> = {
  premiumHoodie: { src: "/images/photos/apparel-hero.jpg", alt: "Cobalt blue premium hoodie styled on a colourful background" },
  oversizedTshirt: { src: "/images/photos/tee-flatlay.jpg", alt: "Folded plain t-shirts arranged as a flat lay" },
  varsityJacket: { src: "/images/photos/varsity-rack.jpg", alt: "Blue varsity jacket on a studio rack" },
  crewneckSweatshirt: { src: "/images/photos/sweatshirt-fold.jpg", alt: "Folded grey crewneck sweatshirt" },
  gymTshirt: { src: "/images/photos/hoodies-olive.jpg", alt: "Row of premium sweatshirts on hangers" },
  sportsJersey: { src: "/images/photos/team-huddle.jpg", alt: "Sports team in a huddle wearing matching jerseys" },
  gymShorts: { src: "/images/svg/gym-shorts.svg", alt: "Circle gym shorts in black with a small brand mark" },
  trackSuit: { src: "/images/photos/runners.jpg", alt: "Two runners training outdoors in team kit" },
  steelBottle: { src: "/images/photos/bottle-desk.jpg", alt: "Insulated steel water bottle on a work desk" },
  tumbler: { src: "/images/svg/tumbler.svg", alt: "Circle travel tumbler in matte black with a sip lid" },
  ceramicMug: { src: "/images/svg/ceramic-mug.svg", alt: "Circle ceramic mug in black with a circular brand mark" },
  cap: { src: "/images/photos/cap-blue.jpg", alt: "Cobalt blue cap resting on grass" },
  backpack: { src: "/images/svg/backpack.svg", alt: "Circle everyday backpack in black" },
  gymBag: { src: "/images/photos/duffel-bag.jpg", alt: "Blue duffel gym bag styled on an orange background" },
  utilityPouch: { src: "/images/svg/utility-pouch.svg", alt: "Circle zip utility pouch in black" },
  notebookDiary: { src: "/images/svg/notebook-diary.svg", alt: "Circle hardcover notebook in black with a circular deboss" },
  premiumPen: { src: "/images/svg/premium-pen.svg", alt: "Circle metal pen in black" },
  stickerPack: { src: "/images/svg/sticker-pack.svg", alt: "Circle die-cut sticker pack in black and cream" },
  umbrella: { src: "/images/svg/umbrella.svg", alt: "Circle compact umbrella in black" },
};

/* ---------------------------------------------------------------------
   2. HERO + BRAND IMAGES
   --------------------------------------------------------------------- */
export const brandImages: Record<string, ImageAsset> = {
  heroApparel: { src: "/images/photos/apparel-hero.jpg", alt: "Cobalt blue Circle hoodie styled on a bright colourful background" },
  heroBelonging: { src: "/images/photos/apparel-hero.jpg", alt: "Cobalt blue Circle hoodie on a bright colourful background" },
  platformStorefront: { src: "/images/photos/dashboard-cart.jpg", alt: "A merchandise dashboard and shopping cart on a laptop" },
  community: { src: "/images/photos/crowd-motion.jpg", alt: "A community of people moving together, shown with motion blur" },
};

/* ---------------------------------------------------------------------
   3. AUDIENCE / CATEGORY IMAGES
   --------------------------------------------------------------------- */
export const categoryImages: Record<string, ImageAsset> = {
  colleges: { src: "/images/photos/grad-toss.jpg", alt: "Graduating students tossing their caps into a blue sky" },
  corporate: { src: "/images/photos/welcome-kit.jpg", alt: "Branded corporate welcome kit boxes beside a screen" },
  sports: { src: "/images/photos/rugby-huddle.jpg", alt: "A sports team huddled together on the field at sunset" },
  events: { src: "/images/photos/crowd-motion.jpg", alt: "A crowd of people moving together at an event" },
  alumni: { src: "/images/photos/campus-walk.jpg", alt: "A tree-lined campus walkway in spring" },
};

/* ---------------------------------------------------------------------
   4. PRODUCT CATEGORY CARDS (products page + homepage range)
   --------------------------------------------------------------------- */
export const productCategoryImages: Record<string, ImageAsset> = {
  apparel: { src: "/images/photos/hoodies-color-rack.jpg", alt: "Colourful pastel hoodies on a rack" },
  sportswear: { src: "/images/photos/team-huddle.jpg", alt: "A sports team in matching jerseys" },
  drinkware: { src: "/images/photos/bottle-desk.jpg", alt: "A steel bottle on a work desk" },
  stationery: { src: "/images/photos/desk-laptop.jpg", alt: "A clean desk with a laptop and stationery" },
  bags: { src: "/images/photos/duffel-bag.jpg", alt: "A blue duffel bag on an orange background" },
  kits: { src: "/images/photos/welcome-kit.jpg", alt: "Branded welcome kit boxes" },
};

export function getProductImage(key: string): ImageAsset {
  return productImages[key] ?? productImages.premiumHoodie;
}

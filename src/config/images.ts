/* =====================================================================
   CIRCLE - CENTRAL IMAGE CONFIGURATION
   One file controls every image. Change a "src" here and it changes
   everywhere. Real photos live in /public/images/photos.
   To swap: put a file in public/images/photos/ and set src to
   "/images/photos/your-file.jpg" (slash first, no "public").
   Full guide: IMAGE_REPLACEMENT_GUIDE.md
   ===================================================================== */

export type ImageAsset = { src: string; alt: string };

/* 1. PRODUCT IMAGES (shop cards + product pages) */
export const productImages: Record<string, ImageAsset> = {
  premiumHoodie: { src: "/images/photos/p-hoodie.jpg", alt: "Premium navy hoodie on a soft studio background" },
  oversizedTshirt: { src: "/images/photos/p-tshirt.jpg", alt: "Oversized t-shirt with a chest print" },
  varsityJacket: { src: "/images/photos/p-varsity.jpg", alt: "Red and cream varsity jacket" },
  crewneckSweatshirt: { src: "/images/photos/p-sweatshirt.jpg", alt: "Black crewneck sweatshirt" },
  gymTshirt: { src: "/images/photos/p-gymtee.jpg", alt: "Red performance gym t-shirt" },
  sportsJersey: { src: "/images/photos/p-jersey.jpg", alt: "Teal and navy sports jersey" },
  gymShorts: { src: "/images/svg/gym-shorts.svg", alt: "Gym shorts in black with a small brand mark" },
  trackSuit: { src: "/images/photos/p-tracksuit.jpg", alt: "Blue two-tone tracksuit jacket and trousers" },
  steelBottle: { src: "/images/photos/p-bottle.jpg", alt: "Matte black insulated steel bottle" },
  tumbler: { src: "/images/photos/p-tumbler.jpg", alt: "Black travel tumbler with a straw lid" },
  ceramicMug: { src: "/images/photos/p-mug.jpg", alt: "Cream ceramic mug" },
  cap: { src: "/images/photos/p-cap.jpg", alt: "Blue six-panel cap" },
  backpack: { src: "/images/photos/p-backpack.jpg", alt: "Charcoal everyday backpack" },
  utilityPouch: { src: "/images/photos/p-pouch.jpg", alt: "Black zip utility pouch" },
  notebookDiary: { src: "/images/svg/notebook-diary.svg", alt: "Hardcover notebook in black with a circular deboss" },
  premiumPen: { src: "/images/photos/p-pen.jpg", alt: "Black metal pen with a chrome tip" },
  stickerPack: { src: "/images/svg/sticker-pack.svg", alt: "Die-cut sticker pack in black and cream" },
  umbrella: { src: "/images/svg/umbrella.svg", alt: "Compact umbrella in black" },
};

/* 2. HERO + BRAND */
export const brandImages: Record<string, ImageAsset> = {
  hero: { src: "/images/photos/hero.jpg", alt: "Light blue premium Circle hoodie" },
  platformStore: { src: "/images/photos/page-platform.jpg", alt: "A branded university merchandise store shown on screen" },
  storeBlock: { src: "/images/photos/store-block.jpg", alt: "A branded online merchandise store" },
  aboutPeople: { src: "/images/photos/page-about1.jpg", alt: "A team huddled together" },
  aboutTeam: { src: "/images/photos/page-about2.jpg", alt: "A sports team huddle on the field at sunset" },
};

/* 3. AUDIENCE CARDS (homepage "who we build for") */
export const audienceImages: Record<string, ImageAsset> = {
  colleges: { src: "/images/photos/aud-colleges.jpg", alt: "Students on a busy campus" },
  corporate: { src: "/images/photos/aud-corporate.jpg", alt: "A modern corporate team space" },
  sports: { src: "/images/photos/aud-sports.jpg", alt: "A sports team in matching kit" },
  events: { src: "/images/photos/aud-events.jpg", alt: "A crowd at a live event" },
};

/* 4. PRODUCT CATEGORY CARDS */
export const productCategoryImages: Record<string, ImageAsset> = {
  apparel: { src: "/images/photos/cat-apparel.jpg", alt: "Apparel on a rack" },
  sportswear: { src: "/images/photos/cat-sportswear.jpg", alt: "Sportswear t-shirt" },
  drinkware: { src: "/images/photos/cat-drinkware.jpg", alt: "A bottle styled on a warm background" },
  stationery: { src: "/images/photos/cat-stationery.jpg", alt: "Colourful stationery flat lay" },
  bags: { src: "/images/photos/cat-bags.jpg", alt: "A traveller with a backpack" },
  kits: { src: "/images/photos/cat-kits.jpg", alt: "Folded apparel and kit items" },
};

/* 5. PAGE HERO IMAGES */
export const pageImages: Record<string, ImageAsset> = {
  colleges: { src: "/images/photos/page-college.jpg", alt: "Graduating students tossing caps into the sky" },
  corporate: { src: "/images/photos/page-corporate.jpg", alt: "A corporate team in motion" },
  platform: { src: "/images/photos/page-platform.jpg", alt: "A branded university merchandise store on screen" },
};

/* Homepage scrolling strip */
export const scrollImages: ImageAsset[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/photos/scroll${i + 1}.jpg`,
  alt: "Circle merchandise",
}));

export function getProductImage(key: string): ImageAsset {
  return productImages[key] ?? productImages.premiumHoodie;
}

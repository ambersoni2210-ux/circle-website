import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';
import ScrollingGallery from '@/components/ScrollingGallery';
import { products } from '@/data/products';
import { brandImages, categoryImages, productCategoryImages } from '@/config/images';

const audiences = [
  ['Colleges', 'Campus merchandise students are proud to wear.', '/colleges', 'purple', categoryImages.colleges],
  ['Corporate', 'Merchandise your team will actually use.', '/corporate', 'sky', categoryImages.corporate],
  ['Sports', 'Teamwear that builds pride.', '/platform', 'green', categoryImages.sports],
  ['Events', 'Products people remember after the event.', '/platform', 'yellow', categoryImages.events],
  ['Alumni', 'Merchandise that keeps people connected.', '/about', 'coral', categoryImages.alumni],
];

const categories = [
  ['Apparel', 'Hoodies, tees, sweatshirts and jackets.', productCategoryImages.apparel],
  ['Sportswear', 'Jerseys, tracksuits and training wear.', productCategoryImages.sportswear],
  ['Drinkware', 'Bottles, tumblers and mugs.', productCategoryImages.drinkware],
  ['Stationery', 'Notebooks, diaries and pens.', productCategoryImages.stationery],
  ['Bags', 'Backpacks, duffels and pouches.', productCategoryImages.bags],
  ['Kits & Gifting', 'Welcome kits, hampers and bundles.', productCategoryImages.kits],
];

const steps = [
  ['Choose products', 'Pick the merchandise mix that fits your community and budget.'],
  ['Launch your store', 'We build a branded store your people can explore.'],
  ['Collect inquiries', 'Requests come in clean and organized, ready to fulfil.'],
];

const why = [
  ['Better products', 'Made to wear, use, carry, gift and keep.', 'sky'],
  ['Better presentation', 'A clean branded experience that feels official.', 'purple'],
  ['Better organization', 'Less confusion around sizes, choices and requests.', 'green'],
  ['Better belonging', 'Products shaped around identity, pride and memory.', 'coral'],
];

export default function HomePage() {
  const featured = products.slice(0, 8);
  const hero = brandImages.heroApparel;
  const platform = brandImages.platformStorefront;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32">
        <div className="container-c">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 rounded-full bg-circle-tint px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-circle-accent">
                Custom merchandise and branded stores
              </span>
              <h1 className="display-xl mt-6">Merchandise that carries belonging.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/62">
                Custom merchandise and branded stores for colleges, companies, teams, events and communities across India.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-accent">Start an inquiry</Link>
                <Link href="/shop" className="btn btn-outline">Explore products</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Hoodie', 'Jersey', 'Bottle', 'Store', 'Kit'].map((chip) => (
                  <span key={chip} className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/55">{chip}</span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="relative">
                <div className="circle-ring circle-ring--ink -left-8 -top-8 h-40 w-40 animate-soft-float opacity-70" />
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium">
                  <Image src={hero.src} alt={hero.alt} width={1200} height={1500} priority className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-3 rounded-2xl bg-circle-accent px-5 py-4 text-white shadow-soft sm:-right-5">
                  <p className="font-display text-2xl font-bold leading-none">200+</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/80">products and growing</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="mt-16 pb-4"><ScrollingGallery /></div>
      </section>

      {/* AUDIENCE CARDS (5-colour system) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="kicker text-black/45">Who we build for</p>
            <h2 className="display-md mt-4">Made for the groups people are proud to represent.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, text, href, color, image]: any, i) => (
              <AnimatedSection key={title} delay={i * 60} className={i === 0 ? 'lg:col-span-1' : ''}>
                <Link href={href} className="group block h-full overflow-hidden rounded-[2rem] border border-black/8 bg-white transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <span className={`absolute left-4 top-4 h-8 w-8 rounded-full bg-circle-${color}`} />
                  </div>
                  <div className={`p-6 bg-circle-${color}-soft`}>
                    <h3 className="font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">{text}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES (colourful cards) */}
      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-black/45">Product range</p>
              <h2 className="display-md mt-4">Products people actually want to use.</h2>
            </div>
            <Link href="/shop" className="btn btn-outline">View all products</Link>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, text, image]: any, i) => (
              <AnimatedSection key={title} delay={i * 55}>
                <Link href="/shop" className="group block overflow-hidden rounded-[2rem] bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-black/55">{text}</p>
                    </div>
                    <span className="text-circle-accent transition group-hover:translate-x-1">&rarr;</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Featured</p>
            <h2 className="display-md mt-4">A few pieces to start with.</h2>
          </AnimatedSection>
          <div className="snap-x-c -mx-5 mt-10 flex gap-4 overflow-x-auto px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {featured.map((product) => (
              <div key={product.id} className="w-[82vw] shrink-0 snap-start min-[520px]:w-[46vw] lg:w-auto">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM STORE */}
      <section className="on-dark overflow-hidden bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <AnimatedSection>
              <p className="kicker text-white/45">Custom store platform</p>
              <h2 className="display-md mt-4 text-white">Your community&rsquo;s own merchandise store.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                One place to explore products, choose options and submit requests. Circle builds and runs the store so your team does not manage the technology.
              </p>
              <Link href="/platform" className="btn btn-light mt-8">Build a custom store</Link>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-premium">
                <Image src={platform.src} alt={platform.alt} width={1200} height={900} className="w-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <p className="kicker text-white/45">How it works</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map(([title, text], i) => (
                <AnimatedSection key={title} delay={i * 60} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-display text-3xl font-bold text-circle-accent">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CIRCLE */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Why Circle</p>
            <h2 className="display-md mt-4">Because merchandise should feel planned, not random.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(([title, text, color]: any, i) => (
              <AnimatedSection key={title} delay={i * 55} className={`rounded-[1.75rem] border border-black/8 p-6 bg-circle-${color}-soft`}>
                <div className={`mb-6 h-10 w-10 rounded-full bg-circle-${color}`} />
                <h3 className="font-display text-xl font-semibold leading-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA (colourful) */}
      <section className="bg-circle-accent py-16 text-white sm:py-24">
        <div className="container-c text-center">
          <AnimatedSection>
            <h2 className="display-md mx-auto max-w-4xl text-white">Create merchandise your people will care about.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85">Tell us who you are creating for, what you need and when you need it.</p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn btn-light">Start an inquiry</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

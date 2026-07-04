import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollingGallery from '@/components/ScrollingGallery';
import { brandImages, audienceImages, productCategoryImages } from '@/config/images';

const audiences = [
  ['Colleges', 'Campus merchandise students are proud to wear.', '/colleges', 'purple', audienceImages.colleges],
  ['Corporate', 'Merchandise your team will actually use.', '/corporate', 'sky', audienceImages.corporate],
  ['Sports', 'Teamwear that builds pride.', '/platform', 'green', audienceImages.sports],
  ['Events', 'Products people remember after the event.', '/platform', 'yellow', audienceImages.events],
];

const categories = [
  ['Apparel', 'Hoodies, tees, sweatshirts and jackets.', productCategoryImages.apparel],
  ['Sportswear', 'Jerseys, tracksuits and training wear.', productCategoryImages.sportswear],
  ['Drinkware', 'Bottles, tumblers and mugs.', productCategoryImages.drinkware],
  ['Stationery', 'Notebooks, diaries and pens.', productCategoryImages.stationery],
  ['Bags', 'Backpacks, duffels and pouches.', productCategoryImages.bags],
  ['Kits & Gifting', 'Welcome kits, hampers and bundles.', productCategoryImages.kits],
];

export default function HomePage() {
  const hero = brandImages.hero;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-24 sm:pt-28">
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
                {['Hoodie', 'Jersey', 'Bottle', 'Store', 'Kit'].map((c) => (
                  <span key={c} className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/55">{c}</span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium">
                  <Image src={hero.src} alt={hero.alt} width={1200} height={1400} priority className="h-full w-full object-cover" />
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

      {/* WHO WE BUILD FOR (4 cards) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="kicker text-black/45">Who we build for</p>
            <h2 className="display-md mt-4">Made for the groups people are proud to represent.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, text, href, color, image]: any, i) => (
              <AnimatedSection key={title} delay={i * 60}>
                <Link href={href} className="group block h-full overflow-hidden rounded-[2rem] border border-black/8 bg-white transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <span className={`absolute left-4 top-4 h-7 w-7 rounded-full bg-circle-${color}`} />
                  </div>
                  <div className={`p-5 bg-circle-${color}-soft`}>
                    <h3 className="font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">{text}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE (6 category cards) */}
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

      {/* FINAL CTA */}
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

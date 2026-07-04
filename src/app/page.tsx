import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';
import ScrollingGallery from '@/components/ScrollingGallery';
import { products } from '@/data/products';
import { brandImages, categoryImages } from '@/config/images';

const orderSteps = [
  ['01', 'Select products', 'Add pieces to your inquiry and set colours, sizes and branding placement.'],
  ['02', 'Add your details', 'Tell us your organisation, quantities and where the branding should sit.'],
  ['03', 'Get quote and mockup', 'Circle replies with a firm price, a branding mockup and a delivery timeline.'],
];

const whyCircle = [
  ['Better products', 'Products people want to wear, use, carry, gift and keep.'],
  ['Better presentation', 'A clean branded experience that makes your merchandise feel more official.'],
  ['Better organization', 'Less confusion around choices, sizes, requests and coordination.'],
  ['Better connection', 'Products shaped around identity, pride, memory and belonging.'],
];

export default function HomePage() {
  const featured = products.slice(0, 8);
  const platform = brandImages.platformStorefront;

  return (
    <>
      {/* HERO */}
      <section className="on-dark relative overflow-hidden bg-circle-ink pt-32 text-white sm:pt-40">
        <div className="circle-ring left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 animate-ring-spin opacity-60" />
        <div className="container-c relative z-10">
          <AnimatedSection className="text-center">
            <p className="kicker mb-6 text-white/55">Custom merchandise and branded stores</p>
            <h1 className="display-xl mx-auto max-w-5xl text-white">Merchandise that carries belonging.</h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Circle creates premium custom merchandise and branded stores for colleges, companies, teams, events, alumni groups and communities across India. We help turn identity into products people are proud to wear, use, gift and keep.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent">Start an inquiry</Link>
              <Link href="/shop" className="btn btn-outline-light">Explore products</Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative z-10 mt-16 pb-16 sm:mt-20 sm:pb-20">
          <ScrollingGallery />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-circle-paper py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="kicker text-black/45">Made for the groups people are proud to represent</p>
            <h2 className="display-md mt-5">A hoodie can carry a batch. A bottle can carry a team. A store can carry a community.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Every group has a name, a story, a culture and a reason people feel connected to it. Circle helps turn that connection into merchandise that feels official, useful and worth keeping.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PRODUCT UNIVERSE (light-blue tint) */}
      <section className="bg-circle-tint py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-black/45">Product range</p>
              <h2 className="display-md mt-4">Products people actually want to use.</h2>
            </div>
            <Link href="/shop" className="btn btn-outline">View all products</Link>
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

      {/* PLATFORM */}
      <section className="on-dark overflow-hidden bg-circle-ink py-16 text-white sm:py-24 lg:py-28">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <p className="kicker text-white/45">Custom store platform</p>
              <h2 className="display-md mt-4 text-white">Your community&rsquo;s own merchandise store.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                Merchandise becomes difficult when orders, sizes, choices and questions are handled manually. Circle helps you create a branded store where your people can explore approved products and submit requests in one organized place.
              </p>
              <Link href="/platform" className="btn btn-light mt-8">Build a custom store</Link>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-premium">
                <Image src={platform.src} alt={platform.alt} width={1600} height={1000} className="rounded-[2rem]" />
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-16">
            <p className="kicker text-white/45">How ordering works</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {orderSteps.map(([number, title, text]) => (
                <AnimatedSection key={number} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-display text-3xl font-bold text-circle-accent">{number}</p>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-circle-paper py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">What we create</p>
            <h2 className="display-md mt-4 max-w-4xl">Custom merchandise for every kind of community.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['Colleges and universities', 'Batch hoodies, fest products, department drops, sports kits, club merchandise and alumni collections.', '/colleges', categoryImages.colleges],
              ['Companies and teams', 'Uniforms, welcome kits, employee merchandise, event products, reward gifts and company stores.', '/corporate', categoryImages.corporate],
              ['Sports teams', 'Jerseys, tracksuits, training wear, travel kits, fan products and sports merchandise.', '/platform', categoryImages.sports],
            ].map(([title, text, href, image]: any) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-[2.25rem] bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CIRCLE (light-blue tint) */}
      <section className="bg-circle-tint py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="max-w-3xl">
            <p className="kicker text-black/45">Why Circle</p>
            <h2 className="display-md mt-4">Because merchandise should feel planned, not random.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyCircle.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 60} className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-circle-accent font-display text-sm font-bold text-white">{index + 1}</div>
                <h3 className="font-display text-xl font-semibold leading-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c text-center">
          <AnimatedSection>
            <p className="kicker text-white/45">Start with your circle</p>
            <h2 className="display-md mx-auto mt-4 max-w-4xl text-white">Create merchandise your people will care about.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">Tell us who you are creating for, what you need and when you need it.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent">Start an inquiry</Link>
              <Link href="/shop" className="btn btn-outline-light">Browse products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

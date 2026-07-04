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

const proofSteps = [
  ['Sample first', 'We start with a real sample so you approve the fabric, print and fit before any bulk run.'],
  ['Branding approval', 'You sign off on colours, marks and placement with a clear mockup, no surprises.'],
  ['Store or drop launch', 'We build your branded store or prepare your bulk drop, ready for your people.'],
  ['Production', 'Your order goes into a monitored production run with quality checks at each stage.'],
  ['Delivery and support', 'We coordinate delivery across India and stay reachable through the whole order.'],
];

export default function HomePage() {
  const featured = products.slice(0, 8);
  const platform = brandImages.platformStorefront;

  return (
    <>
      {/* HERO — clean tagline + scrolling image loop */}
      <section className="on-dark relative overflow-hidden bg-circle-ink pt-32 text-white sm:pt-40">
        <div className="circle-ring left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 animate-ring-spin opacity-60" />
        <div className="container-c relative z-10">
          <AnimatedSection className="text-center">
            <p className="kicker mb-6 text-white/55">Premium merchandise · custom stores</p>
            <h1 className="display-xl mx-auto max-w-5xl text-white">Merchandise that carries belonging.</h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Premium merchandise and custom branded stores for campuses, companies, teams and communities across India.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent">Start a store</Link>
              <Link href="/shop" className="btn btn-outline-light">Explore products</Link>
            </div>
          </AnimatedSection>
        </div>
        {/* scrolling loop */}
        <div className="relative z-10 mt-16 pb-16 sm:mt-20 sm:pb-20">
          <ScrollingGallery />
        </div>
      </section>

      {/* MEANING — single strong statement (removed the repetitive 5-card block) */}
      <section className="bg-circle-paper py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="kicker text-black/45">What Circle means</p>
            <h2 className="display-md mt-5">A hoodie can carry a batch. A bottle can carry a team. A store can carry a community.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Circle turns merchandise into a premium, useful expression of identity for the groups people are proud to belong to.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PRODUCT UNIVERSE */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-black/45">Product universe</p>
              <h2 className="display-md mt-4">From hoodies to bottles to bags.</h2>
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
                Branded online stores where students, alumni, employees, teams or community members browse, choose options and place or request orders, without your team managing the technology.
              </p>
              <Link href="/platform" className="btn btn-light mt-8">See how it works</Link>
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
            <p className="kicker text-black/45">Who we build for</p>
            <h2 className="display-md mt-4 max-w-4xl">Built for every circle that needs an official store.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['Colleges & alumni', 'Campus stores, batch hoodies, club merch, fest drops and alumni collections.', '/colleges', categoryImages.colleges],
              ['Corporate teams', 'Uniforms, welcome kits, employee rewards, voucher stores and event merchandise.', '/corporate', categoryImages.corporate],
              ['Sports teams & events', 'Team kits, jerseys, gym wear, travel bags and fan merchandise.', '/platform', categoryImages.sports],
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

      {/* PROOF */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="container-c">
          <AnimatedSection className="max-w-3xl">
            <p className="kicker text-black/45">How Circle works</p>
            <h2 className="display-md mt-4">Premium from the first sample.</h2>
            <p className="mt-6 text-lg leading-8 text-black/60">
              Confidence should come before commitment. Every Circle order moves through the same five steps, so you always see the quality, the branding and the plan before anything is produced at scale.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {proofSteps.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 60} className="rounded-[1.75rem] border border-black/10 p-6">
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
            <h2 className="display-md mx-auto mt-4 max-w-4xl text-white">Build the store your circle will remember.</h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent">Talk to Circle</Link>
              <Link href="/shop" className="btn btn-outline-light">Browse products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

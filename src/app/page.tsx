import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { brandImages, categoryImages } from '@/config/images';

const circles = [
  ['Campus Circle', 'Batch hoodies, clubs, departments, fests and alumni merchandise.'],
  ['Company Circle', 'Uniforms, employee rewards, welcome kits and voucher stores.'],
  ['Team Circle', 'Sports kits, fan wear, travel sets and tournament merchandise.'],
  ['Alumni Circle', 'Merchandise that keeps shared memories close and visible.'],
  ['Community Circle', 'Products for creators, clubs, events and shared identities.'],
];

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
  const hero = brandImages.heroBelonging;
  const platform = brandImages.platformStorefront;

  return (
    <>
      {/* HERO */}
      <section className="on-dark relative min-h-svh overflow-hidden bg-circle-ink text-white">
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
        <div className="circle-ring left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 animate-ring-spin" />
        <div className="circle-ring -right-20 top-28 h-72 w-72 animate-soft-float" />
        <div className="container-c relative z-10 flex min-h-svh flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <p className="kicker mb-5 text-white/60">Premium merchandise · custom stores</p>
            <h1 className="display-xl max-w-5xl text-white">Merchandise that carries belonging.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Circle designs premium merchandise and custom branded stores for campuses, companies, teams and communities, so people can carry the groups they belong to.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent">Start a store</Link>
              <Link href="/shop" className="btn btn-outline-light">Explore products</Link>
            </div>
          </AnimatedSection>
          <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45">
            <span className="h-px w-10 bg-white/30" /> Scroll to explore
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-circle-cream py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <AnimatedSection>
              <p className="kicker text-black/45">What Circle means</p>
              <h2 className="display-md mt-4 max-w-3xl">A circle is the group you remember.</h2>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <p className="text-lg leading-9 text-black/65">
                A hoodie can carry a batch. A bottle can carry a team. A store can carry a community. Circle turns merchandise into a premium, useful expression of identity for colleges, companies, alumni, sports teams and every group proud to belong together.
              </p>
            </AnimatedSection>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {circles.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 70} className="rounded-[1.75rem] border border-black/10 bg-white p-6">
                <div className="mb-8 h-12 w-12 rounded-full border border-black/20 p-2">
                  <div className="h-full w-full rounded-full bg-black" />
                </div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT UNIVERSE */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
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
      <section className="on-dark overflow-hidden bg-circle-ink py-16 text-white sm:py-24 lg:py-32">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <p className="kicker text-white/45">Custom store platform</p>
              <h2 className="display-md mt-4 text-white">Your community&rsquo;s own merchandise store.</h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-white/65">
                Circle builds branded online stores where students, alumni, employees, teams or community members browse products, choose options and place or request orders, without your team managing the technology or the merchandise workflow.
              </p>
              <Link href="/platform" className="btn btn-light mt-8">See how it works</Link>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-premium">
                <Image src={platform.src} alt={platform.alt} width={1600} height={1000} className="rounded-[2rem]" />
              </div>
            </AnimatedSection>
          </div>

          {/* 3-step ordering explainer (audit fix) */}
          <div className="mt-16">
            <p className="kicker text-white/45">How ordering works</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {orderSteps.map(([number, title, text]) => (
                <AnimatedSection key={number} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-display text-4xl text-white/40">{number}</p>
                  <h3 className="mt-6 font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-circle-cream py-16 sm:py-24 lg:py-32">
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
                  <h3 className="font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF — replaces "Premium without fake proof" (audit fix) */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <AnimatedSection className="max-w-3xl">
            <p className="kicker text-black/45">How Circle works</p>
            <h2 className="display-md mt-4">Premium from the first sample.</h2>
            <p className="mt-6 text-lg leading-9 text-black/65">
              Confidence should come before commitment. Every Circle order moves through the same five steps, so you always see the quality, the branding and the plan before anything is produced at scale.
            </p>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {proofSteps.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 60} className="rounded-[1.75rem] border border-black/10 p-6">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-black font-display text-sm text-white">{index + 1}</div>
                <h3 className="font-display text-xl leading-tight">{title}</h3>
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

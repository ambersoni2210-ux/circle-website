import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import LoadingIntro from '@/components/LoadingIntro';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const circles = [
  ['Campus Circle', 'Batch hoodies, clubs, departments, fests and alumni merchandise.'],
  ['Company Circle', 'Uniforms, employee rewards, welcome kits and voucher stores.'],
  ['Team Circle', 'Sports kits, fan wear, travel sets and tournament merchandise.'],
  ['Alumni Circle', 'Merchandise that keeps old memories close and visible.'],
  ['Community Circle', 'Products for creators, clubs, events and shared identities.'],
];

const steps = [
  ['01', 'We design your branded store', 'A custom storefront that looks owned by your institution, company or team.'],
  ['02', 'You approve products and branding', 'Choose the product range, colors, marks, placements and store language.'],
  ['03', 'Your people shop or redeem vouchers', 'Students, alumni, employees or members select products, size and color.'],
  ['04', 'Circle handles the order flow', 'We support catalog updates, order coordination, production and fulfillment workflow.'],
];

const benefits = [
  'Official-looking branded storefronts',
  'Premium product range',
  'Voucher and bulk-order ready',
  'Managed catalog and fulfillment support',
  'Built for repeat community purchases',
  'Mobile-first shopping experience',
];

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <>
      <LoadingIntro />
      <section className="relative min-h-svh overflow-hidden bg-circle-black text-white">
        <Image src="/images/hero-belonging.webp" alt="Premium Circle merchandise visual with hoodie, bottle and bag" fill priority sizes="100vw" className="object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/45" />
        <div className="circle-ring left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 animate-ring-spin" />
        <div className="circle-ring -right-20 top-28 h-72 w-72 animate-soft-float" />
        <div className="container-c relative z-10 flex min-h-svh flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <p className="kicker mb-5 text-white/58">Circle merchandise stores</p>
            <h1 className="display-xl max-w-6xl text-white">Merchandise that carries belonging.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Circle builds premium merchandise and custom stores for campuses, companies, teams and communities — so people can carry the groups they belong to.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="magnetic-btn flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-xs font-bold uppercase tracking-[0.2em] text-black">
                Start a store
              </Link>
              <Link href="/shop" className="magnetic-btn flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Explore products
              </Link>
            </div>
          </AnimatedSection>
          <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/42">
            <span className="h-px w-10 bg-white/30" /> Scroll
          </div>
        </div>
      </section>

      <section className="bg-circle-cream py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <AnimatedSection>
              <p className="kicker text-black/42">What Circle means</p>
              <h2 className="display-md mt-4 max-w-3xl">A circle is the group you remember.</h2>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <p className="text-lg leading-9 text-black/62">
                A hoodie can carry a batch. A bottle can carry a team. A store can carry a community. Circle turns merchandise into a premium, useful expression of identity for colleges, companies, alumni, sports teams and every group proud to belong together.
              </p>
            </AnimatedSection>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {circles.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 70} className="rounded-[2rem] border border-black/10 bg-white p-6">
                <div className="mb-8 h-14 w-14 rounded-full border border-black/20 p-2">
                  <div className="h-full w-full rounded-full bg-black" />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <AnimatedSection className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-black/42">Product universe</p>
              <h2 className="display-md mt-4">From hoodies to bottles to bags.</h2>
            </div>
            <Link href="/shop" className="dark-magnetic magnetic-btn inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 px-6 text-xs font-bold uppercase tracking-[0.2em]">
              View all products
            </Link>
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

      <section className="overflow-hidden bg-circle-black py-16 text-white sm:py-24 lg:py-32">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
            <AnimatedSection>
              <p className="kicker text-white/42">Custom store platform</p>
              <h2 className="display-md mt-4 text-white">Your community’s own merchandise store.</h2>
              <p className="mt-6 max-w-xl text-lg leading-9 text-white/62">
                Circle creates branded online stores where students, alumni, employees, teams or community members can browse products, select options and request or place orders without the partner managing the technology or merchandise workflow.
              </p>
              <Link href="/platform" className="magnetic-btn mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-7 text-xs font-bold uppercase tracking-[0.2em] text-black">
                See how it works
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={140}>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-premium">
                <Image src="/images/platform-storefront.webp" alt="Custom Circle branded store interface mockup" width={1600} height={1000} className="rounded-[2rem]" />
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text], index) => (
              <AnimatedSection key={number} delay={index * 80} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-white/35">{number}</p>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-circle-cream py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/42">Use cases</p>
            <h2 className="display-md mt-4 max-w-4xl">Built for every circle that needs an official store.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['Colleges & alumni', 'Campus stores, batch hoodies, club merch, fest drops and alumni collections.', '/colleges', '/images/colleges-editorial.webp'],
              ['Corporate teams', 'Uniforms, welcome kits, employee rewards, voucher stores and event merchandise.', '/corporate', '/images/corporate-editorial.webp'],
              ['Sports teams & events', 'Team kits, jerseys, gym wear, travel bags and fan merchandise.', '/platform', '/images/sports-editorial.webp'],
            ].map(([title, text, href, image]) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-[2.5rem] bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={image} alt={`${title} Circle merchandise visual`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.055em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/56">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <AnimatedSection>
              <p className="kicker text-black/42">Why Circle</p>
              <h2 className="display-md mt-4">Premium without fake proof.</h2>
              <p className="mt-6 text-lg leading-9 text-black/62">No invented numbers. No fake partners. Just a clear merchandise system for brands and communities that want to feel official from day one.</p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit} delay={index * 60} className="rounded-[2rem] border border-black/10 p-6">
                  <div className="mb-8 h-10 w-10 rounded-full bg-black" />
                  <p className="font-display text-2xl font-semibold tracking-[-0.05em]">{benefit}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-circle-black py-16 text-white sm:py-24">
        <div className="container-c text-center">
          <AnimatedSection>
            <p className="kicker text-white/42">Start with your circle</p>
            <h2 className="display-md mx-auto mt-4 max-w-5xl text-white">Build the store your circle will remember.</h2>
            <Link href="/contact" className="magnetic-btn mx-auto mt-9 inline-flex h-32 w-32 items-center justify-center rounded-full bg-white p-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-black sm:h-40 sm:w-40">
              Talk to Circle
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

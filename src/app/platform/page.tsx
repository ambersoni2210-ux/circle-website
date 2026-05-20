import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Custom Store Platform',
  description: 'Circle builds custom branded merchandise stores for campuses, companies, teams and communities.',
};

const features = [
  ['Branded storefront', 'A premium store experience shaped around your community identity, colors and catalog.'],
  ['Product catalog', 'Apparel, drinkware, stationery, bags, sportswear and accessories curated for your people.'],
  ['Voucher flow', 'Support employee rewards, alumni credits, festival coupons and community redemption programs.'],
  ['Order workflow', 'Circle helps manage product selection, request flow, production coordination and fulfillment support.'],
];

const demoStores = ['North Campus Store', 'Company Rewards Store', 'Team Circle Kit Store'];

export default function PlatformPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/42">Circle platform</p>
            <h1 className="display-lg mt-4">Your community’s own merchandise store, built and managed by Circle.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/62">
              Circle gives institutions, companies and teams a branded store where their people can choose products, select size and color, redeem vouchers or request orders — without the partner managing the store technology or merchandise operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="magnetic-btn flex min-h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-[0.2em] text-white">Start a store</Link>
              <Link href="/shop" className="dark-magnetic magnetic-btn flex min-h-12 items-center justify-center rounded-full border border-black/10 px-7 text-xs font-bold uppercase tracking-[0.2em]">View products</Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
              <Image src="/images/platform-storefront.webp" alt="Circle custom merchandise store mockup" width={1600} height={1000} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-circle-black py-16 text-white sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-white/42">How it works</p>
            <h2 className="display-md mt-4 max-w-4xl text-white">From store setup to repeat community purchases.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 80} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-10 h-14 w-14 rounded-full border border-white/20 p-2"><div className="h-full w-full rounded-full bg-white" /></div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.05em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <AnimatedSection>
              <p className="kicker text-black/42">Store concepts</p>
              <h2 className="display-md mt-4">Fictional examples. Real use cases.</h2>
              <p className="mt-6 text-lg leading-9 text-black/62">The store can be shaped for a campus, a company reward program or a sports team without claiming any real institution as a client.</p>
            </AnimatedSection>
            <div className="grid gap-4">
              {demoStores.map((store, index) => (
                <AnimatedSection key={store} delay={index * 100} className="rounded-[2rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/38">Demo store</p>
                      <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.055em]">{store}</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {['Hoodies', 'Bottles', 'Bags'].map((item) => <span key={item} className="rounded-full border border-black/10 px-3 py-2 text-xs text-black/55">{item}</span>)}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

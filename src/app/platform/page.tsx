import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { brandImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'Custom Store Platform',
  description: 'Circle builds custom branded merchandise stores for campuses, companies, teams and communities.',
};

const features = [
  ['Branded storefront', 'A premium store shaped around your identity, colours and catalog.'],
  ['Product catalog', 'Apparel, drinkware, stationery, bags, sportswear and accessories, curated for your people.'],
  ['Voucher flow', 'Employee rewards, alumni credits, festival coupons and redemption programs.'],
  ['Order workflow', 'Circle manages selection, requests, production coordination and fulfilment.'],
];

const journeys = [
  ['Admin journey', ['Circle sets up your branded store', 'You approve products, colours and marks', 'Share one link with your community', 'Track orders from a simple dashboard']],
  ['Buyer journey', ['Open your store link', 'Pick product, size, colour and placement', 'Add to inquiry or redeem a voucher', 'Confirm and track the order']],
  ['Voucher journey', ['Company issues credits to staff', 'Employee opens the store', 'Chooses items within the credit', 'Redeems, no cash handled online']],
];

export default function PlatformPage() {
  const platform = brandImages.platformStorefront;
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Circle platform</p>
            <h1 className="display-lg mt-4">Your community&rsquo;s own store, built and managed by Circle.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/65">
              Institutions, companies and teams get a branded store where their people choose products, select size and colour, redeem vouchers or request orders, without managing the technology or the merchandise operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">Start a store</Link>
              <Link href="/shop" className="btn btn-outline">View products</Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-soft">
              <Image src={platform.src} alt={platform.alt} width={1600} height={1000} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-white/45">What the platform includes</p>
            <h2 className="display-md mt-4 max-w-4xl text-white">Everything the store needs, handled for you.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 70} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-8 h-12 w-12 rounded-full border border-white/25 p-2"><div className="h-full w-full rounded-full bg-white" /></div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete journeys (audit fix: replaces "fictional examples") */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">How a store actually runs</p>
            <h2 className="display-md mt-4">Three journeys, one simple flow.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {journeys.map(([title, steps]: any, i) => (
              <AnimatedSection key={title} delay={i * 80} className="rounded-[1.75rem] bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-display text-2xl">{title}</h3>
                <ol className="mt-5 space-y-3">
                  {steps.map((step: string, s: number) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-black/65">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white">{s + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10">
            <Link href="/contact" className="btn btn-primary">Set up your store</Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

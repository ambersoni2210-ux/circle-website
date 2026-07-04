import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Circle is a Delhi-based merchandise brand built around belonging, identity, memory and community.',
};

const values = [
  ['Belonging', 'Merchandise should carry the feeling of being part of something.'],
  ['Quality', 'Products should be useful, wearable and worth keeping.'],
  ['Simplicity', 'Custom stores should make the process easier for partners and their people.'],
  ['Trust', 'Real samples, clear pricing and honest timelines. No noise.'],
  ['Design', 'Every object and storefront should feel intentional.'],
  ['Community', 'The brand exists for the circles people are proud to belong to.'],
];

const testimonials = [
  ['Circle handled our batch hoodie drop end to end. The sample came first, the fit was right, and 240 pieces reached the campus on time.', 'Cultural Secretary, Delhi University college'],
  ['Our joining kits finally look like the company. Bottles, notebooks and tees, all on one branded store our HR team could manage.', 'People Ops Lead, Gurugram tech firm'],
  ['We ran a full tournament kit through Circle, jerseys with names and numbers. Clean process, no chasing.', 'Captain, Noida city football club'],
];

const faqs = [
  ['What is the minimum order?', 'Most products start at 25 to 50 units. Smaller pieces like pens and stickers start higher. Each product page shows its own minimum.'],
  ['How is pricing decided?', 'Price depends on product, quantity, fabric and branding method. Each product shows an indicative per-unit band, and we send a firm quote after reviewing your inquiry.'],
  ['How long does an order take?', 'Typical production and delivery runs 8 to 24 days depending on the product and quantity. Every product page lists an indicative lead time.'],
  ['Do you deliver across India?', 'Yes. Circle coordinates delivery across India from our Delhi base, including bulk drops to a single address or split delivery for stores.'],
  ['Can you build a branded store for us?', 'Yes. We create a custom storefront where your people browse, choose options and place or request orders. See the Platform page for the full flow.'],
  ['Is payment collected on the website?', 'No. The site prepares an inquiry. Payment terms are agreed after we share the quote, mockup and timeline.'],
];

export default function AboutPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      {/* Intro — keeps the signature line */}
      <section className="container-c py-12 sm:py-20">
        <AnimatedSection>
          <p className="kicker text-black/45">About Circle</p>
          <h1 className="display-lg mt-4 max-w-5xl">Some things are not just one. They are remembered.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-black/65">
            Circle is built around belonging. People carry memories through objects: the hoodie from a batch, the bottle from a team, the diary from a first job, the jersey from a tournament. Circle turns those objects into premium merchandise systems for the communities and organisations that make them matter.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission + Vision */}
      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c grid gap-5 lg:grid-cols-2">
          <AnimatedSection className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/45">Mission</p>
            <h2 className="mt-6 font-display text-3xl leading-[1.05] sm:text-5xl">To help communities carry their identity through merchandise people are proud to use.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120} className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/45">Vision</p>
            <h2 className="mt-6 font-display text-3xl leading-[1.05] sm:text-5xl">To become the most recognisable merchandise brand for campuses, companies and teams in India.</h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Values</p>
            <h2 className="display-md mt-4">What shapes the work.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 60} className="rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <div className="mb-8 h-11 w-11 rounded-full border border-black/15 p-2"><div className="h-full w-full rounded-full bg-black" /></div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <AnimatedSection>
            <div className="relative mx-auto h-52 w-52 rounded-full border border-black/12 sm:h-64 sm:w-64">
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <p className="kicker text-black/45">From the founder</p>
            <h2 className="display-sm mt-4">We started Circle after watching good communities settle for bad merch.</h2>
            <p className="mt-6 text-lg leading-9 text-black/65">
              College fests, company offsites, club tournaments, all full of energy, all let down by thin fabric, crooked prints and vendors who vanished after the advance. Circle exists to make that experience premium and predictable: a real sample, a clear price, a store your people actually enjoy using, and merchandise that lasts long after the event.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-black/55">Founding team, Circle · New Delhi</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Early partners</p>
            <h2 className="display-md mt-4">What partners say.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map(([quote, who], index) => (
              <AnimatedSection key={who} delay={index * 70} className="flex flex-col justify-between rounded-[1.75rem] bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <p className="font-display text-xl leading-snug">&ldquo;{quote}&rdquo;</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-black/50">{who}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping / Returns / FAQs — targets for footer links */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c grid gap-10 lg:grid-cols-2">
          <AnimatedSection id="shipping" className="scroll-mt-28 rounded-[1.75rem] border border-black/10 p-7">
            <p className="kicker text-black/45">Shipping &amp; delivery</p>
            <h3 className="display-sm mt-4">Across India, tracked.</h3>
            <p className="mt-4 text-sm leading-7 text-black/65">
              Orders are dispatched from Delhi with tracking shared on handover. Bulk orders can go to a single address or be split for store fulfilment. Indicative delivery windows are shown on each product and confirmed in your quote.
            </p>
          </AnimatedSection>
          <AnimatedSection id="returns" delay={100} className="scroll-mt-28 rounded-[1.75rem] border border-black/10 p-7">
            <p className="kicker text-black/45">Returns &amp; replacement</p>
            <h3 className="display-sm mt-4">Made right, or made again.</h3>
            <p className="mt-4 text-sm leading-7 text-black/65">
              Because merchandise is customised, we replace any item with a manufacturing or branding defect reported within 7 days of delivery. Sizing is confirmed against a shared size chart before production to keep returns rare.
            </p>
          </AnimatedSection>
        </div>
        <div className="container-c mt-6" id="faqs">
          <AnimatedSection className="scroll-mt-28">
            <p className="kicker text-black/45">Buyer FAQs</p>
            <h3 className="display-md mt-4">Questions, answered.</h3>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map(([q, a], index) => (
              <AnimatedSection key={q} delay={index * 50} className="rounded-[1.5rem] border border-black/10 bg-circle-cream p-6">
                <h4 className="font-display text-xl">{q}</h4>
                <p className="mt-3 text-sm leading-6 text-black/62">{a}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-c">
          <AnimatedSection className="on-dark rounded-[2.25rem] bg-black p-7 text-white sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-3xl leading-tight sm:text-5xl">Build something your circle will remember.</h2>
              <Link href="/contact" className="btn btn-light shrink-0">Talk to Circle</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

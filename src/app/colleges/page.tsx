import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { categoryImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'Colleges & Alumni',
  description: 'Campus stores, alumni merchandise, club merch, sports kits and batch hoodies by Circle.',
};

const painPoints = [
  ['Vendors who vanish', 'Last-minute drops, no samples, and a vendor who stops replying after the advance.'],
  ['Inconsistent quality', 'Thin fabric and crooked prints that do not match the pride of the batch.'],
  ['Messy coordination', 'Chasing sizes and money across hundreds of students on WhatsApp.'],
];

const process = [
  ['Share your brief', 'Tell us the occasion, quantity and design idea, a fest, a batch, a club or an alumni drop.'],
  ['Approve a sample', 'We produce a real sample so the committee signs off on fabric, print and fit.'],
  ['Launch a store', 'Students order their own size and colour from a branded campus store.'],
  ['Collect and deliver', 'We produce, quality-check and deliver to campus, split or in bulk.'],
];

const bundles = [
  ['College Fest Kit', 'Tees, caps and stickers for the whole organising team.', 'From ₹499 / person'],
  ['Batch Hoodie Drop', 'Heavyweight hoodies with batch year and names.', 'From ₹899 / hoodie'],
  ['Sports Team Kit', 'Jerseys with names and numbers, plus a gym bag.', 'From ₹999 / player'],
  ['Alumni Collection', 'Premium keepsakes for reunions and chapters.', 'Custom quote'],
];

export default function CollegesPage() {
  const img = categoryImages.colleges;
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Colleges &amp; universities</p>
            <h1 className="display-lg mt-4">Give every batch, club and team a place to carry campus identity.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/65">A campus store becomes the official home for batch merchandise, alumni drops, club products, fest kits and sports essentials, curated and managed through Circle.</p>
            <Link href="/contact" className="btn btn-primary mt-8">Build a campus store</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-soft">
              <Image src={img.src} alt={img.alt} width={1200} height={900} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Why campuses come to Circle</p>
            <h2 className="display-md mt-4">Campus merch usually breaks in the same places.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {painPoints.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 70} className="rounded-[1.75rem] border border-black/10 p-6">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">How it works</p>
            <h2 className="display-md mt-4">From brief to campus in four steps.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 60} className="rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <p className="font-display text-4xl text-black/25">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-6 font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-circle-ink on-dark py-16 text-white sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-white/45">Best-for bundles</p>
            <h2 className="display-md mt-4 text-white">Ready-made kits for campus moments.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map(([title, text, price], i) => (
              <AnimatedSection key={title} delay={i * 60} className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-white/75">{price}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10">
            <Link href="/contact" className="btn btn-light">Plan a campus drop</Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

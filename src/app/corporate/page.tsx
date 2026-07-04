import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { categoryImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'Corporate Stores & Uniforms',
  description: 'Circle builds company merchandise stores for employee rewards, uniforms, welcome kits, events and voucher programs.',
};

const painPoints = [
  ['Procurement drag', 'Multiple vendors, unclear GST invoicing and slow approvals for simple merch.'],
  ['Off-brand kits', 'Joining kits that look nothing like the company they represent.'],
  ['No self-serve', 'HR manually collecting sizes and orders over email and spreadsheets.'],
];

const process = [
  ['Scope the program', 'Welcome kits, rewards, uniforms or a gifting drop, we map products and quantities.'],
  ['Set up the store', 'A branded store with GST-compliant invoicing and optional employee vouchers.'],
  ['Employees redeem', 'Staff pick their size and colour and redeem credits themselves.'],
  ['Deliver and reorder', 'We deliver across India and keep the catalog live for repeat orders.'],
];

const bundles = [
  ['Employee Welcome Kit', 'Hoodie or tee, bottle, notebook and pen in branded packaging.', 'From ₹899 / kit'],
  ['Festive Gifting', 'Curated Diwali or year-end gifts with a voucher option.', 'Custom quote'],
  ['Team Uniform Program', 'Consistent apparel across departments and sites.', 'From ₹449 / piece'],
  ['Event & Offsite Kit', 'Caps, tees and utility pouches for company events.', 'From ₹649 / person'],
];

export default function CorporatePage() {
  const img = categoryImages.corporate;
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Corporate programs</p>
            <h1 className="display-lg mt-4">Turn employee merchandise into culture people actually use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/65">Circle helps companies create branded stores for uniforms, welcome kits, team merchandise, rewards, event drops and voucher-led employee experiences, with clear GST invoicing.</p>
            <Link href="/contact" className="btn btn-primary mt-8">Build a company store</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-soft">
              <Image src={img.src} alt={img.alt} width={1200} height={900} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Why companies come to Circle</p>
            <h2 className="display-md mt-4">Corporate merch usually stalls here.</h2>
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

      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <AnimatedSection>
              <p className="kicker text-white/45">Voucher model</p>
              <h2 className="display-md mt-4 text-white">Give credits. Let employees choose.</h2>
              <p className="mt-6 text-lg leading-9 text-white/65">Issue vouchers or credits, and employees visit your branded store, choose products, select size and colour, and redeem, no manual collection by HR.</p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map(([title, text], i) => (
                <AnimatedSection key={title} delay={i * 55} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="font-display text-3xl text-white/30">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-4 font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">Best-for bundles</p>
            <h2 className="display-md mt-4">Programs teams ask for most.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bundles.map(([title, text, price], i) => (
              <AnimatedSection key={title} delay={i * 60} className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-black/60">{price}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10">
            <Link href="/contact" className="btn btn-primary">Plan a company program</Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

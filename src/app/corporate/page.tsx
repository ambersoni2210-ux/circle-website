import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Corporate Stores & Uniforms',
  description: 'Circle builds company merchandise stores for employee rewards, uniforms, welcome kits, events and voucher programs.',
};

const useCases = ['Employee welcome kits', 'Uniform programs', 'Team merchandise', 'Company stores', 'Diwali and gifting vouchers', 'Employee-of-the-month rewards', 'Event kits', 'Sales team apparel'];

export default function CorporatePage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/42">Corporate programs</p>
            <h1 className="display-lg mt-4">Turn employee merchandise into culture people actually use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/62">Circle helps companies create branded stores for uniforms, welcome kits, team merchandise, rewards, event drops and voucher-led employee experiences.</p>
            <Link href="/contact" className="magnetic-btn mt-8 inline-flex min-h-12 items-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-[0.2em] text-white">Build a company store</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
              <Image src="/images/corporate-editorial.webp" alt="Company Circle merchandise concept" width={1200} height={900} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-circle-black py-16 text-white sm:py-24">
        <div className="container-c">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <AnimatedSection>
              <p className="kicker text-white/42">Voucher model</p>
              <h2 className="display-md mt-4 text-white">Give credits. Let employees choose.</h2>
              <p className="mt-6 text-lg leading-9 text-white/62">A company can issue vouchers or credits. Employees visit the company’s custom Circle-powered store, choose products, select size and color, and redeem their voucher through the order workflow.</p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((item, index) => (
                <AnimatedSection key={item} delay={index * 55} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.05em]">{item}</h3>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

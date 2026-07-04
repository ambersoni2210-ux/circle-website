import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import StoreSwitcher from '@/components/StoreSwitcher';
import { brandImages, pageImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'Custom Merchandise Stores for Communities',
  description: 'Launch a branded merchandise store for your college, company, team, alumni group, event or community.',
};

const steps = [
  ['Store planning', 'Tell us who the store is for. Circle shapes the store around your audience, purpose, products and launch plan.'],
  ['Product selection', 'Choose the right merchandise mix. Your store can include apparel, sportswear, drinkware, stationery, bags, accessories, uniforms, kits, gifts and limited edition products.'],
  ['Brand customization', 'Make the store feel official. Your logo, colours, product names, categories and artwork come together in one branded experience.'],
  ['Store experience', 'Give your people one place to explore. Members can view products, understand options, select sizes, choose variants and submit requests.'],
  ['Next step', 'Move from interest to execution. Circle helps guide pricing, mockups, production planning and fulfillment support.'],
];

const storeTypes = [
  { title: 'Campus store', text: 'For students, batches, clubs, departments, sports teams, fests and alumni.', href: '/colleges' },
  { title: 'Company store', text: 'For employees, HR programs, events, rewards and gifting.', href: '/corporate' },
  { title: 'Sports team store', text: 'For players, coaches, fans and team communities.', href: '' },
  { title: 'Alumni store', text: 'For reunions, keepsakes and long term connection.', href: '' },
  { title: 'Event store', text: 'For fests, conferences, creator events, volunteers and limited edition drops.', href: '' },
];

export default function PlatformPage() {
  const platform = brandImages.platformStore;
  return (
    <div className="bg-circle-paper pt-24 sm:pt-28">
      <StoreSwitcher active="platform" />
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Custom stores</p>
            <h1 className="display-lg mt-4">Launch a merchandise store for your community.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Circle creates branded online stores where students, employees, alumni, players and members can explore products, choose options and submit merchandise requests.
            </p>
            <Link href="/contact" className="btn btn-accent mt-8">Build my store</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] shadow-soft"><Image src={platform.src} alt={platform.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem (light-blue tint) */}
      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="kicker text-black/45">Why a store</p>
            <h2 className="display-md mt-4">Merchandise should not run through endless chats and spreadsheets.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Manual coordination leads to missed sizes, scattered requests, repeated questions and confusion. A Circle store brings everything into one clean branded experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">How it works</p>
            <h2 className="display-md mt-4">From audience to launch.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 60} className="rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <p className="font-display text-3xl font-bold text-circle-accent">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Store types */}
      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-white/45">Store types</p>
            <h2 className="display-md mt-4 text-white">One official place, shaped for your community.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {storeTypes.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 55} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                {item.href ? (
                  <Link href={item.href} className="focus-ring group block rounded-xl">
                    <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/72 transition group-hover:text-white">Explore now →</p>
                  </Link>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
                  </>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Voucher */}
      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Voucher model</p>
            <h2 className="display-md mt-4">Give credits. Let people choose.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <p className="text-lg leading-8 text-black/65">
              Circle can support voucher led merchandise experiences where people choose from an approved catalog. This works well for employee rewards, alumni gifting, welcome programs, events and community drops.
            </p>
          </AnimatedSection>
        </div>
      </section>


    </div>
  );
}

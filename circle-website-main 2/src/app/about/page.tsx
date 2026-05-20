import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Circle is a merchandise brand built around belonging, identity, memory and community.',
};

const values = [
  ['Belonging', 'Merchandise should carry the feeling of being part of something.'],
  ['Quality', 'Products should be useful, wearable and worth keeping.'],
  ['Simplicity', 'Custom stores should make the process easier for partners and their people.'],
  ['Trust', 'No fake claims, no fake proof, no unnecessary noise.'],
  ['Design', 'Every object and storefront should feel intentional.'],
  ['Community', 'The brand exists for the circles people are proud to belong to.'],
];

export default function AboutPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <AnimatedSection>
          <p className="kicker text-black/42">About Circle</p>
          <h1 className="display-lg mt-4 max-w-6xl">Some things are not just worn. They are remembered.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-black/62">
            Circle is built around belonging. People carry memories through objects: the hoodie from a batch, the bottle from a team, the diary from a company, the jersey from a tournament. Circle turns those objects into premium merchandise systems for communities and organizations.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-circle-black py-16 text-white sm:py-24">
        <div className="container-c grid gap-5 lg:grid-cols-2">
          <AnimatedSection className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/42">Mission</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1] tracking-[-0.06em] sm:text-6xl">To help communities carry their identity through merchandise people are proud to use.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120} className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/42">Vision</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1] tracking-[-0.06em] sm:text-6xl">To make Circle the most recognizable merchandise brand for communities, campuses, companies and teams.</h2>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/42">Values</p>
            <h2 className="display-md mt-4">What shapes the work.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text], index) => (
              <AnimatedSection key={title} delay={index * 70} className="rounded-[2rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <div className="mb-8 h-12 w-12 rounded-full border border-black/15 p-2"><div className="h-full w-full rounded-full bg-black" /></div>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.055em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{text}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 rounded-[2.5rem] bg-black p-7 text-white sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Build something your circle will remember.</h2>
              <Link href="/contact" className="magnetic-btn inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-xs font-bold uppercase tracking-[0.2em] text-black">Talk to Circle</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

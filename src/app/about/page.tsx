import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'About Circle',
  description: 'Circle creates premium merchandise and branded stores for colleges, companies, teams, alumni groups, events and communities across India.',
};

const values = [
  ['Belonging', 'Every product should help someone feel part of something.'],
  ['Usefulness', 'Products should be wearable, practical, giftable and worth keeping.'],
  ['Design', 'A clean store, thoughtful naming, strong visuals and better product choices make merchandise feel more official.'],
  ['Simplicity', 'Circle makes planning, selecting, organizing and requesting merchandise easier.'],
  ['Trust', 'Clear communication. No confusing process. No fake claims. No unnecessary noise.'],
];

const objects = [
  'A hoodie from college.',
  'A jersey from a tournament.',
  'A mug from a first job.',
  'A jacket from an alumni reunion.',
  'A notebook from an event that changed something.',
];

export default function AboutPage() {
  return (
    <div className="bg-circle-paper pt-24 sm:pt-28">
      {/* Hero */}
      <section className="container-c py-12 sm:py-20">
        <AnimatedSection>
          <p className="kicker text-black/45">About Circle</p>
          <h1 className="display-lg mt-4 max-w-5xl">Some things are not just worn. They are remembered.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-black/65">
            Circle was built for the products people keep because they mean something. Objects become meaningful when they are connected to people, places and moments.
          </p>
          <div className="mt-8 grid gap-2 text-lg text-black/70 sm:grid-cols-2">
            {objects.map((o) => (
              <p key={o} className="font-display text-xl">{o}</p>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* What we do */}
      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">We create merchandise for belonging</p>
            <h2 className="display-md mt-4">We build merchandise systems for communities.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <p className="text-lg leading-8 text-black/65">
              Circle helps colleges, companies, sports teams, alumni groups, events and communities turn identity into products people are proud to wear, use, gift and keep. We create custom products, branded stores, bulk merchandise, uniforms, kits, vouchers and gifting experiences. Our work sits at the intersection of product, identity, design and community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="on-dark bg-circle-ink py-16 text-white sm:py-24">
        <div className="container-c grid gap-5 lg:grid-cols-2">
          <AnimatedSection className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/45">Our mission</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">To make custom merchandise feel more personal, more organized and more worth keeping.</h2>
          </AnimatedSection>
          <AnimatedSection delay={120} className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
            <p className="kicker text-white/45">Our vision</p>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">To become a trusted merchandise partner for communities across India.</h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">What we believe</p>
            <h2 className="display-md mt-4">What shapes the work.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 55} className="rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-circle-accent font-display text-sm font-bold text-white">{i + 1}</div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
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
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Build something your circle will remember.</h2>
                <p className="mt-3 text-white/60">Tell us about your group, product idea or store requirement.</p>
              </div>
              <Link href="/contact" className="btn btn-accent shrink-0">Talk to Circle</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

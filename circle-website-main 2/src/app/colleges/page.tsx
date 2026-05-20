import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Colleges & Alumni',
  description: 'Campus stores, alumni merchandise, club merch, sports kits and batch hoodies by Circle.',
};

const useCases = ['Official campus merchandise', 'Alumni merchandise', 'Department and club merchandise', 'Fest and event drops', 'Sports team kits', 'Batch hoodies and farewell merchandise'];

export default function CollegesPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/42">Colleges & universities</p>
            <h1 className="display-lg mt-4">Give every student, alumni, club and team a place to carry their campus identity.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/62">A campus store can become the official place for batch merchandise, alumni drops, club products, fest kits and sports team essentials — curated and managed through Circle.</p>
            <Link href="/contact" className="magnetic-btn mt-8 inline-flex min-h-12 items-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-[0.2em] text-white">Build a campus store</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft">
              <Image src="/images/colleges-editorial.webp" alt="Campus Circle merchandise concept" width={1200} height={900} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/42">Campus use cases</p>
            <h2 className="display-md mt-4">Not one product. A full campus system.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <AnimatedSection key={item} delay={index * 70} className="rounded-[2rem] border border-black/10 p-6">
                <div className="mb-10 h-12 w-12 rounded-full bg-black" />
                <h3 className="font-display text-3xl font-semibold tracking-[-0.055em]">{item}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

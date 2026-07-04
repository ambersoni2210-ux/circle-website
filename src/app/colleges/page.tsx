import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { pageImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'College Merchandise, Batch Hoodies and Campus Stores',
  description: 'Create college merchandise, batch hoodies, fest products, alumni collections, sports kits and custom campus stores.',
};

const offerings = [
  ['Batch hoodies', 'Create a product your batch will remember. Comfortable, personal and made to be worn long after college days are over.'],
  ['Fest merchandise', 'Make your fest feel official. Limited edition products for cultural fests, tech fests, sports events, competitions and student festivals.'],
  ['Club and department merchandise', 'Give every group its own identity. Merchandise for departments, societies, councils, student clubs, cultural groups and technical teams.'],
  ['Sports team kits', 'Build team pride on and off the field. Jerseys, tracksuits, training wear, travel kits, bottles, bags, caps and fan merchandise.'],
  ['Alumni merchandise', 'Keep the campus connection alive. Premium products for reunions, gifting, fundraising, memory boxes and alumni engagement.'],
  ['Campus store', 'One official place for campus merchandise, where students, alumni, clubs, teams and departments explore approved products and submit requests.'],
];

export default function CollegesPage() {
  const img = pageImages.colleges;
  return (
    <div className="bg-circle-paper pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Colleges and universities</p>
            <h1 className="display-lg mt-4">Campus merchandise students are proud to wear.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Circle helps colleges, universities, clubs, departments, fests, sports teams and alumni groups create merchandise that feels official, premium and memorable.
            </p>
            <Link href="/contact" className="btn btn-accent mt-8">Create campus merchandise</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="overflow-hidden rounded-[2.25rem] bg-white p-3 shadow-soft">
              <Image src={img.src} alt={img.alt} width={1200} height={900} className="rounded-[2rem]" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="kicker text-black/45">Campus identity deserves better merchandise</p>
            <h2 className="display-md mt-4">The batch people remember. The fest they built. The team they played for.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              College merchandise is about the campus people stay connected to. Circle helps turn those moments into products people want to keep.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">What we create for campuses</p>
            <h2 className="display-md mt-4">Not one product. A full campus system.</h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(([title, text], i) => (
              <AnimatedSection key={title} delay={i * 55} className="rounded-[1.75rem] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="container-c">
          <AnimatedSection className="on-dark rounded-[2.25rem] bg-black p-7 text-white sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Make your campus identity wearable.</h2>
                <p className="mt-3 text-white/60">Tell us your college name, audience, product idea, quantity range and deadline.</p>
              </div>
              <Link href="/contact" className="btn btn-accent shrink-0">Start a campus inquiry</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

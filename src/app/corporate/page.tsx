import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { pageImages } from '@/config/images';

export const metadata: Metadata = {
  title: 'Corporate Merchandise, Uniforms, Welcome Kits and Company Stores',
  description: 'Create corporate uniforms, employee welcome kits, team merchandise, event kits, reward products, gifting collections and company stores.',
};

const offerings = [
  ['Corporate uniforms', 'Polos, shirts, T-shirts, jackets, caps and role specific apparel for teams, events, sales, operations and customer facing roles.'],
  ['Welcome kits', 'Thoughtful kits with apparel, drinkware, stationery, accessories, packaging and useful branded products for new joiners.'],
  ['Company store', 'A branded store where employees can explore approved products, choose sizes, redeem vouchers and submit requests.'],
  ['Rewards and recognition', 'Merchandise for milestones, monthly awards, team achievements, internal campaigns and appreciation programs.'],
  ['Event kits', 'Conference kits, launch products, annual day merchandise, leadership meet essentials, exhibition kits and internal event products.'],
  ['Festive gifting', 'Branded gifts for Diwali, New Year, team celebrations, partner appreciation and employee engagement.'],
];

export default function CorporatePage() {
  const img = pageImages.corporate;
  return (
    <div className="bg-circle-paper pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <p className="kicker text-black/45">Companies and teams</p>
            <h1 className="display-lg mt-4">Corporate merchandise your team will actually use.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Circle helps companies create uniforms, welcome kits, employee merchandise, reward products, event kits, gifting collections and branded company stores.
            </p>
            <Link href="/contact" className="btn btn-accent mt-8">Plan corporate merchandise</Link>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] shadow-soft">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-circle-tint py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <p className="kicker text-black/45">Company merchandise should feel like culture, not clutter</p>
            <h2 className="display-md mt-4">The right product makes onboarding warmer and culture more visible.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              It can make events more official, teams more connected and rewards more personal. Circle helps you create products that reflect the story your company is building.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-c">
          <AnimatedSection>
            <p className="kicker text-black/45">What we create for companies</p>
            <h2 className="display-md mt-4">Merchandise across the whole employee journey.</h2>
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

    </div>
  );
}

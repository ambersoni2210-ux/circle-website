import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Circle for custom stores, bulk merchandise, corporate uniforms, college merchandise and team kits.',
};

export default function ContactPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <AnimatedSection>
            <p className="kicker text-black/45">Contact Circle</p>
            <h1 className="display-lg mt-4">Tell us about your circle.</h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-black/62">Share what you want to build: a campus store, company store, sports kit, alumni drop, uniforms, vouchers or bulk merchandise.</p>
            <div className="mt-10 grid gap-4">
              <div className="rounded-[2rem] bg-white p-6">
                <p className="kicker text-black/45">Email</p>
                <a href="mailto:connect@getcircle.in" className="mt-3 block font-display text-3xl">connect@getcircle.in</a>
              </div>
              <div className="rounded-[2rem] bg-white p-6">
                <p className="kicker text-black/45">WhatsApp</p>
                <a href="https://wa.me/919000000000" className="mt-3 block font-display text-3xl">+91 90000 00000</a>
              </div>
              <div className="rounded-[2rem] bg-white p-6">
                <p className="kicker text-black/45">Studio</p>
                <p className="mt-3 font-display text-3xl">New Delhi, India</p>
              </div>
              <div className="rounded-[2rem] bg-white p-6">
                <p className="kicker text-black/45">Hours</p>
                <p className="mt-3 text-sm leading-7 text-black/62">Monday–Friday, 9:00 AM–9:00 PM IST<br />Saturday–Sunday, 9:00 AM–5:00 PM IST</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

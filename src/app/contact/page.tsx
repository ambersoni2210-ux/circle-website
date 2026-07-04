import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact Circle',
  description: 'Contact Circle for custom stores, bulk merchandise, corporate uniforms, college merchandise, sports team kits, event products and gifting inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <AnimatedSection>
            <p className="kicker text-black/45">Contact Circle</p>
            <h1 className="display-lg mt-4">Tell us what you want to create.</h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-black/62">Share your requirement for a custom store, college drop, corporate uniform, event kit, sports team merchandise, welcome gift, alumni collection or general inquiry.</p>
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
                <p className="mt-3 text-sm leading-7 text-black/62">9 AM to 9 PM on weekdays<br />10 AM to 8 PM on weekends</p>
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

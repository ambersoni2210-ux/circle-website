'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Careers</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Work With Circle
            </h1>
            <p className="text-lg text-black/50 font-light max-w-2xl leading-relaxed">
              We are not listing open roles on the website right now. When there is a real opening,
              we will share clear details instead of placeholder job posts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Design-Led',
                desc: 'Circle values clean design, thoughtful merchandise, and brand language that feels honest.',
              },
              {
                title: 'Community-Focused',
                desc: 'We care about products that help people carry identity and belonging with pride.',
              },
              {
                title: 'No Fake Openings',
                desc: 'This page will only show roles when they are actually available.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-gray-50 p-8">
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-black/50 font-light">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              No Current Openings
            </h2>
            <p className="text-white/40 font-light mb-10 max-w-2xl">
              We are keeping this section transparent. For genuine collaboration or future hiring conversations,
              write to connect@getcircle.in.
            </p>
            <a
              href="mailto:connect@getcircle.in?subject=Career%20Enquiry%20-%20Circle"
              className="inline-block px-7 sm:px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
            >
              Email Circle
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">
              Want to stay connected?
            </h2>
            <p className="text-black/40 font-light mb-8">
              Send a short note about your work and how you would like to contribute to Circle.
            </p>
            <Link
              href="/contact"
              className="inline-block px-7 sm:px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

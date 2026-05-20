'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">About Circle</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
                We build merchandise people feel proud to wear<span className="text-black/20">.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg text-black/50 font-light leading-relaxed max-w-2xl">
                Circle is a merchandise brand and store shaped around identity, belonging, and the simple pride of carrying something that feels like yours.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <AnimatedSection animation="scale-in">
        <section className="px-6 lg:px-10 mb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="aspect-[21/9] bg-black overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1400&h=600&fit=crop&q=80"
                alt="Premium apparel collection"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <AnimatedSection animation="slide-right">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Mission</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                  To make identity feel wearable, useful, and well-designed.
                </h2>
                <p className="text-black/50 font-light leading-relaxed">
                  We create merchandise that can work for everyday shoppers, creators, communities,
                  teams, events, and campuses. The goal is simple: products that feel personal enough
                  to keep wearing and clean enough to represent the Circle standard.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Vision</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                  To become a trusted merchandise brand for every circle people belong to.
                </h2>
                <p className="text-black/50 font-light leading-relaxed">
                  College merchandise is one use case, not the whole story. Circle is for anyone
                  building pride around a shared name, symbol, idea, or moment — and wanting products
                  that represent it with taste and honesty.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&h=525&fit=crop&q=80"
                    alt="Circle merchandise styling"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                  Why Circle?
                </h2>
                <div className="space-y-5 text-black/50 font-light leading-relaxed">
                  <p>
                    People do not wear merchandise only because a logo is printed on it. They wear it
                    when it makes them feel connected — to a group, a memory, a place, a project, or a belief.
                  </p>
                  <p>
                    Circle exists to make that feeling look better and last longer. We focus on simple silhouettes,
                    premium-feeling essentials, and a brand language that does not rely on exaggerated claims.
                  </p>
                  <p>
                    Colleges can use Circle to express campus pride, but the brand is broader than that.
                    A creator drop, a community meet-up, a team uniform, or a personal everyday essential can all belong here.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Values</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              What Drives Us
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Wearability First',
                desc: 'Every product should feel useful beyond one event or one photo. It should earn a place in the wardrobe.',
              },
              {
                title: 'Pride Without Noise',
                desc: 'We believe identity can be strong without being loud. Clean design can still carry meaning.',
              },
              {
                title: 'Honest Language',
                desc: 'We avoid fake numbers, invented proof, and claims that are not backed by reality.',
              },
              {
                title: 'Built for Belonging',
                desc: 'Circle is for people, teams, communities, and campuses that want to carry a shared identity well.',
              },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300">
                  <h3 className="text-lg font-medium mb-4">{value.title}</h3>
                  <p className="text-sm text-white/40 font-light leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Want to build your circle?
            </h2>
            <p className="text-black/40 font-light mb-10">
              Tell us what you want to create, or start with the Circle store and find pieces made for everyday pride.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
              >
                Shop Circle
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

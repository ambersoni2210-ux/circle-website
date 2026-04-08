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
                We believe every college deserves a strong identity<span className="text-black/20">.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg text-black/50 font-light leading-relaxed max-w-2xl">
                Circle was born from a simple idea: that college merchandise and community
                platforms should be as exceptional as the institutions they represent.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=600&fit=crop"
                alt="Students collaborating"
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
                  To empower colleges to build meaningful identity and lasting community.
                </h2>
                <p className="text-black/50 font-light leading-relaxed">
                  We do this through two pillars: premium merchandise that students are
                  proud to wear, and digital platforms that keep campus communities connected
                  beyond physical boundaries. Every hoodie, tee, and app feature we create
                  is designed to strengthen the circle between students, faculty, and alumni.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Vision</p>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                  To become the identity partner for every college in India.
                </h2>
                <p className="text-black/50 font-light leading-relaxed">
                  We envision a future where every Indian college has a merchandise program
                  that rivals the best in the world, and a digital platform that makes every
                  student, alumnus, and faculty member feel like they belong. We&apos;re building
                  the infrastructure for campus identity, one circle at a time.
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
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=525&fit=crop"
                    alt="Friends on campus"
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
                    It started during our own college days. We noticed something: students
                    at Indian colleges wanted to rep their institutions the way students at
                    Harvard, MIT, or Stanford do. But the options available were disappointing —
                    cheap fabric, generic designs, and zero thought behind the branding.
                  </p>
                  <p>
                    We asked ourselves: why can&apos;t Indian college merch be premium? Why
                    can&apos;t it be something students actually want to wear — to a cafe, a
                    concert, or a first date? Why can&apos;t it be a source of real pride?
                  </p>
                  <p>
                    The answer was Circle. We combined world-class design thinking with premium
                    manufacturing to create merchandise that becomes part of a student&apos;s
                    identity. And when we saw how powerfully physical merchandise could build
                    community, we extended that mission to digital platforms — custom college apps
                    that keep the circle connected.
                  </p>
                  <p>
                    Today, Circle works with 50+ colleges across India, serving over 100,000 students.
                    And we&apos;re just getting started.
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
                title: 'Quality First',
                desc: 'We never compromise on materials, design, or craftsmanship. Every product meets the highest standards.',
              },
              {
                title: 'Community Focused',
                desc: 'Everything we build is designed to strengthen connections and create a sense of belonging.',
              },
              {
                title: 'Design-Led',
                desc: 'We approach every project with a designer\'s eye. Aesthetics matter, especially to Gen-Z.',
              },
              {
                title: 'Sustainability',
                desc: 'From organic cotton to eco-friendly packaging, we\'re committed to responsible production.',
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

      {/* Join Us CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Want to join the circle?
            </h2>
            <p className="text-black/40 font-light mb-10">
              We&apos;re always looking for talented people who share our passion for design,
              community, and making college life better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/careers"
                className="px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
              >
                View Open Roles
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

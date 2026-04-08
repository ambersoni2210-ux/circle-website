'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.badge === 'Bestseller').slice(0, 4);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full border border-black" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full border border-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-black" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <AnimatedSection delay={0}>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">
                  Premium College Merchandise &amp; Digital Platforms
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight mb-8">
                  Build Your<br />
                  <span className="font-normal">College</span><br />
                  Identity<span className="text-black/20">.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-black/50 font-light max-w-md mb-10 leading-relaxed">
                  We help colleges create a strong circle through stylish, premium
                  merchandise and centralized digital community platforms.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/shop"
                    className="px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-all duration-300 text-center magnetic-btn"
                  >
                    Shop Merch
                  </Link>
                  <Link
                    href="/b2b"
                    className="px-10 py-4 border border-black text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 text-center"
                  >
                    Partner With Us
                  </Link>
                  <Link
                    href="/contact"
                    className="px-10 py-4 text-sm tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors text-center"
                  >
                    Book a Demo &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Hero Image Grid */}
            <AnimatedSection delay={200} animation="slide-left">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-50 overflow-hidden img-zoom">
                    <img
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=500&h=660&fit=crop"
                      alt="College lifestyle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-black flex items-center justify-center p-8">
                    <img src="/logo-dark.svg" alt="Circle" className="w-24 h-24 opacity-30" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square bg-gray-50 overflow-hidden img-zoom">
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop"
                      alt="Students together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] bg-gray-50 overflow-hidden img-zoom">
                    <img
                      src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=660&fit=crop"
                      alt="Premium hoodie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-100">
              {[
                { number: '50+', label: 'College Partners' },
                { number: '25K+', label: 'Products Delivered' },
                { number: '100K+', label: 'Students Connected' },
                { number: '4.9', label: 'Average Rating' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-light tracking-tight">{stat.number}</p>
                  <p className="text-xs tracking-widest uppercase text-black/40 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== MARQUEE ==================== */}
      <section className="py-8 border-y border-gray-100 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Premium Quality', 'Custom Branding', 'College Apps', 'Bulk Orders', 'Gen-Z Focused', 'Sustainable Materials', 'MIT-Style Merch', 'Community Platform'].map((text, j) => (
                <span key={j} className="text-sm tracking-[0.3em] uppercase text-black/20 whitespace-nowrap flex items-center gap-12">
                  {text}
                  <span className="w-1.5 h-1.5 bg-black/10 rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Featured</p>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                  Bestsellers
                </h2>
              </div>
              <Link
                href="/shop"
                className="text-sm tracking-wide text-black/50 hover:text-black transition-colors line-animate hidden md:block"
              >
                View All Products &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 100}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 text-center md:hidden">
              <Link
                href="/shop"
                className="text-sm tracking-wide text-black/50 hover:text-black transition-colors"
              >
                View All Products &rarr;
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Process</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20">
              How Circle Works
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                step: '01',
                title: 'Tell Us About Your College',
                desc: 'Share your institution\'s identity — logo, colors, motto, and culture. We study what makes your college unique.',
              },
              {
                step: '02',
                title: 'We Design & Produce',
                desc: 'Our team creates premium merchandise designs and builds your custom digital platform. Every piece reflects your college\'s DNA.',
              },
              {
                step: '03',
                title: 'Launch & Connect',
                desc: 'Roll out merchandise and your college app. Watch your campus community grow stronger through shared identity.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group">
                  <span className="text-6xl md:text-7xl font-extralight text-white/10 group-hover:text-white/20 transition-colors duration-500">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-light mt-6 mb-4">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPLIT SECTION — MERCH + APP ==================== */}
      <section className="grid lg:grid-cols-2">
        {/* Merch Side */}
        <div className="relative bg-gray-50 py-24 px-6 lg:px-16 flex items-center">
          <AnimatedSection animation="slide-right">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">For Colleges</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Premium Merchandise,<br />Custom Branded
              </h2>
              <p className="text-black/50 font-light leading-relaxed mb-8">
                From Harvard-inspired hoodies to minimal tees — we create merchandise
                that students actually want to wear. Bulk ordering with complete customization
                for your institution.
              </p>
              <Link
                href="/b2b"
                className="inline-block px-8 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* App Side */}
        <div className="relative bg-black text-white py-24 px-6 lg:px-16 flex items-center">
          <AnimatedSection animation="slide-left">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Digital Platform</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Your College App,<br />Your Community
              </h2>
              <p className="text-white/50 font-light leading-relaxed mb-8">
                A centralized platform connecting students, faculty, and alumni. Community
                feed, events, announcements, and an in-app merchandise store — all in one place.
              </p>
              <Link
                href="/app-solution"
                className="inline-block px-8 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
              >
                Explore Platform
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                What Colleges Say
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 100}>
                <div className="border border-gray-100 p-8 hover:border-gray-300 transition-colors duration-300 h-full flex flex-col">
                  <p className="text-sm text-black/60 font-light leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-black/40">
                        {t.role}, {t.college}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRAND STORY ==================== */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Students collaborating"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                  Circle = Community
                </h2>
                <p className="text-black/50 font-light leading-relaxed mb-6">
                  We started Circle with a simple observation: college merchandise in India
                  didn&apos;t reflect the pride students feel for their institutions. Generic
                  prints on cheap fabric weren&apos;t cutting it for a generation raised on
                  premium aesthetics.
                </p>
                <p className="text-black/50 font-light leading-relaxed mb-8">
                  So we set out to change that. We combine world-class design with premium
                  materials to create merchandise that becomes part of a student&apos;s identity.
                  And with our digital platform, we help colleges build communities that last
                  beyond graduation.
                </p>
                <Link
                  href="/about"
                  className="text-sm tracking-wide text-black hover:text-black/60 transition-colors line-animate"
                >
                  Read Our Full Story &rarr;
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES GRID ==================== */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Categories</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              Shop by Category
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop' },
              { name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop' },
              { name: 'Caps', image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=500&fit=crop' },
              { name: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop' },
            ].map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 100} animation="scale-in">
                <Link href="/shop" className="group relative block aspect-[3/4] bg-gray-50 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-lg font-light tracking-wide">{cat.name}</h3>
                    <span className="text-white/60 text-xs tracking-widest uppercase mt-1 block group-hover:text-white/80 transition-colors">
                      Shop Now &rarr;
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

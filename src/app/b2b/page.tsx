'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function B2BPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">For Colleges</p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                Premium Merch<br />for Your College
              </h1>
              <p className="text-white/40 font-light leading-relaxed max-w-lg mb-10">
                Transform your college&apos;s merchandise program. We offer bulk ordering,
                complete custom branding, and quality that rivals Harvard and MIT merch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors text-center"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-4 border border-white/20 text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors text-center"
                >
                  Book a Demo
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=600&fit=crop"
                  alt="College merchandise"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Services</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              Everything Your College Needs
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: 'Custom Branding',
                desc: 'We design merchandise that perfectly reflects your college\'s identity — logo, colors, typography, and culture. Every piece is a brand statement.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
                title: 'Bulk Orders',
                desc: 'Order from 100 to 10,000+ units. We handle production, quality control, and packaging with competitive bulk pricing for institutions.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
                title: 'Premium Quality',
                desc: 'Heavy-weight cotton, precision embroidery, and lasting prints. Our merchandise is designed to last years, not weeks.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: 'Pan-India Delivery',
                desc: 'We deliver to any campus across India. Reliable logistics with tracking and on-time delivery guaranteed for every order.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Competitive Pricing',
                desc: 'Institutional pricing that makes premium merchandise accessible. Volume discounts that increase with order size.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: 'Dedicated Manager',
                desc: 'Every college partner gets a dedicated account manager. Single point of contact for design, production, and delivery.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border border-gray-100 p-8 hover:border-gray-300 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-black/50 font-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Product Range</p>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                What We Produce
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'T-Shirts', range: '₹399 — ₹899', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop' },
              { name: 'Hoodies', range: '₹999 — ₹1,799', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop' },
              { name: 'Caps', range: '₹349 — ₹699', img: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=300&h=400&fit=crop' },
              { name: 'Bottles', range: '₹399 — ₹799', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=400&fit=crop' },
              { name: 'Bags', range: '₹599 — ₹1,999', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="scale-in">
                <div className="group relative aspect-[3/4] bg-black overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-sm font-medium">{item.name}</h3>
                    <p className="text-white/50 text-xs mt-1">{item.range} per unit</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Process</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your college identity, requirements, and budget. We understand your vision.' },
              { step: '02', title: 'Design', desc: 'Our team creates custom designs with your branding. You review and approve.' },
              { step: '03', title: 'Production', desc: 'Premium manufacturing with strict quality control. Every piece inspected.' },
              { step: '04', title: 'Delivery', desc: 'Packaged and delivered to your campus. Ready for distribution.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative">
                  <span className="text-5xl font-extralight text-black/10">{item.step}</span>
                  <h3 className="text-lg font-medium mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-black/50 font-light">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 w-12 h-[1px] bg-gray-200 translate-x-6" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Ready to upgrade your college merch?
            </h2>
            <p className="text-white/40 font-light mb-10 max-w-lg mx-auto">
              Join 50+ colleges across India who trust Circle for premium, custom-branded merchandise.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

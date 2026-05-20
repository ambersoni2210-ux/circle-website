'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function AppSolutionPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-black text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Store Platform</p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                Your Circle,<br />One Storefront
              </h1>
              <p className="text-white/40 font-light leading-relaxed max-w-lg mb-10">
                For communities, teams, creators, events, and campuses that need more than a one-time order,
                Circle can support a simple digital merchandise experience built around discovery, drops, and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-7 sm:px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors text-center"
                >
                  Book a Demo
                </Link>
                <a
                  href="#features"
                  className="px-7 sm:px-10 py-4 border border-white/20 text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors text-center"
                >
                  See Features
                </a>
              </div>
            </AnimatedSection>

            {/* Phone Mockup */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="flex justify-center">
                <div className="phone-mockup">
                  <div className="phone-screen p-4">
                    <div className="flex items-center justify-between mb-4">
                      <img src="/logo-light.svg" alt="Circle" className="w-6 h-6" />
                      <span className="text-[10px] font-medium tracking-wide">Circle Store</span>
                      <div className="w-6 h-6 bg-gray-100 rounded-full" />
                    </div>
                    {/* Feed mockup */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-black rounded-full" />
                          <span className="text-[9px] font-medium">New Drop</span>
                        </div>
                        <p className="text-[9px] text-gray-600 leading-relaxed">
                          Limited pieces now live. Explore tees, hoodies, caps, and everyday carry.
                        </p>
                        <div className="mt-2 bg-gray-200 rounded-lg h-20 flex items-center justify-center">
                          <span className="text-[8px] text-gray-400">Drop Banner</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full" />
                          <span className="text-[9px] font-medium">Circle Picks</span>
                        </div>
                        <p className="text-[9px] text-gray-600">Featured pieces for everyday pride ✨</p>
                        <div className="flex gap-1 mt-2">
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                        </div>
                      </div>
                      <div className="bg-black rounded-xl p-3">
                        <p className="text-[9px] text-white font-medium">📢 Update</p>
                        <p className="text-[8px] text-white/60 mt-1">Custom order enquiries are open through connect@getcircle.in.</p>
                      </div>
                    </div>
                    {/* Bottom nav */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-around bg-white border border-gray-100 rounded-2xl py-2">
                      {['Home', 'Drops', 'Shop', 'Profile'].map(tab => (
                        <span key={tab} className="text-[8px] text-gray-400">{tab}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12 sm:mb-16">
              Built Around<br />Merchandise Discovery
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {[
              {
                title: 'Drop Announcements',
                desc: 'A simple space to announce new collections, limited pieces, pre-orders, and restocks without making exaggerated claims.',
                icon: '📢',
              },
              {
                title: 'Merch Store',
                desc: 'Showcase products in a clean, organized storefront that keeps the focus on what people can actually buy or enquire about.',
                icon: '🛍️',
              },
              {
                title: 'Community Updates',
                desc: 'Share useful updates for a team, creator group, event audience, or campus community in one clear place.',
                icon: '💬',
              },
              {
                title: 'Events & Moments',
                desc: 'Support launches around meetups, fests, campaigns, reunions, and moments where merchandise becomes a shared marker.',
                icon: '📅',
              },
              {
                title: 'Custom Enquiries',
                desc: 'Guide interested customers or partners to the right contact path so conversations stay organized and traceable.',
                icon: '✉️',
              },
              {
                title: 'Brand Consistency',
                desc: 'Keep visuals, copy, product naming, and merchandise presentation aligned with the Circle brand standard.',
                icon: '◎',
              },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-6 sm:p-8 md:p-12 hover:bg-gray-50 transition-colors duration-300">
                  <span className="text-3xl mb-6 block">{feature.icon}</span>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-sm text-black/50 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Clear Product Presentation' },
              { label: 'Simple Drop Communication' },
              { label: 'Community-Friendly Flow' },
              { label: 'No Fake Social Proof' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-light tracking-tight">0{i + 1}</p>
                  <p className="text-xs tracking-widest uppercase text-black/40 mt-3">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Process</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12 sm:mb-16">
              From Idea to Storefront
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We understand the merchandise use case, audience, and kind of digital experience you want to create.',
              },
              {
                step: '02',
                title: 'Structure',
                desc: 'We align on the product flow, copy, visuals, and enquiry path before anything is positioned publicly.',
              },
              {
                step: '03',
                title: 'Launch',
                desc: 'The storefront supports your merchandise story with clear navigation, honest messaging, and room for future drops.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div>
                  <span className="text-6xl font-extralight text-black/10">{item.step}</span>
                  <h3 className="text-xl font-medium mt-4 mb-3">{item.title}</h3>
                  <p className="text-sm text-black/50 font-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-32 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Give your circle a digital home
            </h2>
            <p className="text-white/40 font-light mb-10 max-w-lg mx-auto">
              Email Circle to discuss whether a storefront or merchandise platform makes sense for your use case.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
            >
              Book a Demo
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

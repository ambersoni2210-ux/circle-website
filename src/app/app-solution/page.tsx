'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function AppSolutionPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">College App Platform</p>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
                Your College,<br />One App
              </h1>
              <p className="text-white/40 font-light leading-relaxed max-w-lg mb-10">
                A custom mobile and web platform that connects students, faculty, and alumni.
                Community feed, events, announcements, and an in-app merch store — everything
                your campus needs in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors text-center"
                >
                  Book a Demo
                </Link>
                <a
                  href="#features"
                  className="px-10 py-4 border border-white/20 text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-colors text-center"
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
                      <span className="text-[10px] font-medium tracking-wide">IIT Delhi</span>
                      <div className="w-6 h-6 bg-gray-100 rounded-full" />
                    </div>
                    {/* Feed mockup */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-black rounded-full" />
                          <span className="text-[9px] font-medium">Student Council</span>
                        </div>
                        <p className="text-[9px] text-gray-600 leading-relaxed">
                          Fest registrations are now open! Early bird tickets available at ₹299.
                        </p>
                        <div className="mt-2 bg-gray-200 rounded-lg h-20 flex items-center justify-center">
                          <span className="text-[8px] text-gray-400">Event Banner</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full" />
                          <span className="text-[9px] font-medium">Campus Store</span>
                        </div>
                        <p className="text-[9px] text-gray-600">New drop: Limited edition hoodies ✨</p>
                        <div className="flex gap-1 mt-2">
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                          <div className="w-12 h-14 bg-gray-200 rounded-md" />
                        </div>
                      </div>
                      <div className="bg-black rounded-xl p-3">
                        <p className="text-[9px] text-white font-medium">📢 Announcement</p>
                        <p className="text-[8px] text-white/60 mt-1">Library hours extended till 11 PM during exam week.</p>
                      </div>
                    </div>
                    {/* Bottom nav */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-around bg-white border border-gray-100 rounded-2xl py-2">
                      {['Home', 'Events', 'Shop', 'Profile'].map(tab => (
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
      <section id="features" className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              Everything Your<br />Campus Needs
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {[
              {
                title: 'Community Feed',
                desc: 'A social space where students share updates, ask questions, and connect. Moderated, safe, and engaging.',
                icon: '💬',
              },
              {
                title: 'Events & Calendar',
                desc: 'Smart event discovery with RSVP, reminders, and recommendations based on interests and past attendance.',
                icon: '📅',
              },
              {
                title: 'Announcements',
                desc: 'Official communications from administration, departments, and student organizations. Never miss an update.',
                icon: '📢',
              },
              {
                title: 'In-App Store',
                desc: 'Seamless merchandise purchasing without leaving the platform. Exclusive drops and pre-orders for students.',
                icon: '🛍️',
              },
              {
                title: 'Club Directory',
                desc: 'Easy discovery and joining of campus organizations, clubs, and interest groups. Build your campus circle.',
                icon: '🏛️',
              },
              {
                title: 'Alumni Network',
                desc: 'Connect current students with graduates for mentorship, networking, and career opportunities.',
                icon: '🤝',
              },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors duration-300">
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

      {/* Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '60%', label: 'Increase in Event Attendance' },
              { number: '40%', label: 'Higher Student Satisfaction' },
              { number: '3x', label: 'More Alumni Engagement' },
              { number: '85%', label: 'Daily Active Users' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-light tracking-tight">{stat.number}</p>
                  <p className="text-xs tracking-widest uppercase text-black/40 mt-3">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Process</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16">
              From Concept to Campus
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Discovery & Design',
                desc: 'We study your college, understand your needs, and design a platform that reflects your institution\'s identity and culture.',
              },
              {
                step: '02',
                title: 'Build & Test',
                desc: 'Our team develops your custom app with all chosen features. Beta testing with a select group of students ensures quality.',
              },
              {
                step: '03',
                title: 'Launch & Support',
                desc: 'Roll out to the entire campus with onboarding support. Ongoing maintenance, updates, and analytics to drive engagement.',
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
      <section className="py-24 md:py-32 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Give your campus a digital home
            </h2>
            <p className="text-white/40 font-light mb-10 max-w-lg mx-auto">
              See how Circle&apos;s app platform can transform student engagement at your institution.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
            >
              Book a Demo
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

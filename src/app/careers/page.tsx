'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { jobs } from '@/data/careers';

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const departments = [...new Set(jobs.map(j => j.department))];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Careers</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Join the Circle
            </h1>
            <p className="text-lg text-black/50 font-light max-w-2xl leading-relaxed">
              We&apos;re building the future of college identity in India. If you&apos;re passionate about
              design, technology, community, and making college life better — we want you on the team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Remote-Friendly',
                desc: 'Work from anywhere in India. We believe great work happens wherever you are.',
              },
              {
                title: 'Creative Freedom',
                desc: 'We hire talented people and give them the space to do their best work.',
              },
              {
                title: 'Growth Focused',
                desc: 'Learning budgets, mentorship, and opportunities to grow with a fast-moving company.',
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
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Open Positions</p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              Current Openings
            </h2>
            <p className="text-white/40 font-light mb-16">
              {jobs.length} open role{jobs.length !== 1 ? 's' : ''} across {departments.length} departments
            </p>
          </AnimatedSection>

          <div className="space-y-1">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 50}>
                <div
                  className="border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-xs text-white/40">{job.department}</span>
                        <span className="text-white/20">&middot;</span>
                        <span className="text-xs text-white/40">{job.location}</span>
                        <span className="text-white/20">&middot;</span>
                        <span className="text-xs text-white/40">{job.type}</span>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-white/40 transition-transform flex-shrink-0 ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedJob === job.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 border-t border-white/10 pt-6">
                      <p className="text-sm text-white/50 font-light mb-6">{job.description}</p>
                      <p className="text-xs tracking-[0.15em] uppercase text-white/30 mb-3">Requirements</p>
                      <ul className="space-y-2 mb-8">
                        {job.requirements.map((req, j) => (
                          <li key={j} className="text-sm text-white/40 font-light flex gap-2">
                            <span className="text-white/20 mt-1">—</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:careers@circlemerch.in?subject=Application: ${job.title}`}
                        className="inline-block px-8 py-3 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-gray-100 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">
              Don&apos;t see a role that fits?
            </h2>
            <p className="text-black/40 font-light mb-8">
              We&apos;re always open to meeting talented people. Send us your resume and let us know how you&apos;d like to contribute.
            </p>
            <a
              href="mailto:careers@circlemerch.in"
              className="inline-block px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
            >
              Send Your Resume
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Blog</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Insights &amp; Ideas
            </h1>
            <p className="text-black/40 font-light mt-4 max-w-lg">
              Thoughts on college identity, Gen-Z culture, merchandise design,
              and building campus communities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden img-zoom">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-black text-white">
                    {featured.category}
                  </span>
                  <span className="text-xs text-black/30">{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4 group-hover:text-black/70 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-black/50 font-light leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-black/30">
                  <span>{featured.author}</span>
                  <span>&middot;</span>
                  <span>{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/10] bg-gray-50 overflow-hidden mb-5 img-zoom">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-0.5 border border-gray-200">
                      {post.category}
                    </span>
                    <span className="text-xs text-black/30">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-black/70 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-black/40 font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-black/30 mt-3">
                    {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

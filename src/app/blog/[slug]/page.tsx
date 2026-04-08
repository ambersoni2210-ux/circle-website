'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-20">
        <section className="py-32 text-center">
          <h1 className="text-3xl font-light mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-sm underline underline-offset-4 text-black/60">
            Back to Blog
          </Link>
        </section>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="text-xs tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors mb-8 inline-block"
            >
              &larr; Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-black text-white">
                {post.category}
              </span>
              <span className="text-xs text-black/30">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-black/40">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <AnimatedSection animation="scale-in">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="aspect-[2/1] bg-gray-50 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-black/60 font-light leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-xs tracking-[0.2em] uppercase text-black/30 mb-4">Share this article</p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'Email'].map(platform => (
                <button
                  key={platform}
                  className="px-5 py-2 border border-gray-200 text-xs tracking-wide hover:border-black transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-light tracking-tight mb-12">More from the Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 100}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-4 img-zoom">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-black/30">{p.category}</span>
                  <h3 className="text-base font-medium mt-1 group-hover:text-black/70 transition-colors">
                    {p.title}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

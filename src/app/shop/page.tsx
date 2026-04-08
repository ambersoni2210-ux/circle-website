'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Shop</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Premium College<br />Merchandise
            </h1>
            <p className="text-white/40 font-light mt-6 max-w-lg">
              Designed for the modern campus. Every piece crafted with premium materials
              and contemporary aesthetics that Gen-Z actually wants to wear.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-gray-100">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-black/60 hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                  <span className="ml-2 text-[10px] opacity-50">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 text-xs tracking-wide bg-gray-50 border-0 focus:ring-1 focus:ring-black outline-none cursor-pointer"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Product Count */}
          <p className="text-xs text-black/40 tracking-wide mb-8">
            Showing {sorted.length} product{sorted.length !== 1 ? 's' : ''}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sorted.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 50}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-20">
              <p className="text-black/30 font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight mb-4">
              Need bulk orders for your college?
            </h2>
            <p className="text-black/40 font-light mb-8 max-w-lg mx-auto">
              We offer custom branding, bulk pricing, and dedicated support for institutions.
            </p>
            <a
              href="/b2b"
              className="inline-block px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
            >
              Partner With Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

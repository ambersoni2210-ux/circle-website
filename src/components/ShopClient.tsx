'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

export default function ShopClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeCategory === 'All' || product.category === activeCategory || product.audience.includes(activeCategory as any);
      const searchMatch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  return (
    <div>
      <div className="sticky top-[72px] z-20 -mx-5 border-y border-black/10 bg-circle-cream/88 px-5 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 xl:-mx-14 xl:px-14">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="snap-x-c flex gap-2 overflow-x-auto pb-1">
            {['All', ...categories].map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 shrink-0 scroll-ml-5 rounded-full border px-4 text-xs font-bold uppercase tracking-[0.18em] transition ${
                  activeCategory === category ? 'border-black bg-black text-white' : 'border-black/10 bg-white/55 text-black/62 hover:border-black/40 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="relative block lg:w-80">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Search products"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-h-12 w-full rounded-full border border-black/10 bg-white px-5 text-sm outline-none transition placeholder:text-black/35 focus:border-black"
            />
          </label>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-3xl tracking-[-0.05em]">No products found.</p>
          <p className="mt-3 text-black/55">Try another category or search term.</p>
        </div>
      )}
    </div>
  );
}

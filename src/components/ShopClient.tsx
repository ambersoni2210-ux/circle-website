'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Lowest to highest price' },
  { value: 'price-desc', label: 'Highest to lowest price' },
];

function startingPrice(priceBand: string, price: number) {
  if (price > 0) return price;
  const match = priceBand.match(/\d[\d,]*/);
  return match ? Number(match[0].replace(/,/g, '')) : 0;
}

export default function ShopClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const categoryMatch = activeCategory === 'All' || product.category === activeCategory || product.audience.includes(activeCategory as any);
      const searchMatch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });

    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => startingPrice(a.priceBand, a.price) - startingPrice(b.priceBand, b.price));
    }
    if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => startingPrice(b.priceBand, b.price) - startingPrice(a.priceBand, a.price));
    }
    return result;
  }, [activeCategory, query, sortBy]);

  return (
    <div>
      <div className="sticky top-[72px] z-20 -mx-5 border-y border-black/10 bg-circle-cream/88 px-5 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 xl:-mx-14 xl:px-14">
        <div className="grid gap-3 lg:grid-cols-[220px_260px_1fr] lg:items-center">
          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">Filter</span>
            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              className="min-h-12 w-full rounded-full border border-black/10 bg-white px-5 text-sm font-semibold outline-none transition focus:border-black"
            >
              {['All', ...categories].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="min-h-12 w-full rounded-full border border-black/10 bg-white px-5 text-sm font-semibold outline-none transition focus:border-black"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">Search</span>
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
          <p className="mt-3 text-black/55">Try another filter or search term.</p>
        </div>
      )}
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Low to high' },
  { value: 'price-desc', label: 'High to low' },
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
  const [filtersOpen, setFiltersOpen] = useState(false);

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
      <div className="sticky top-[72px] z-20 -mx-5 bg-circle-cream/82 px-5 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 xl:-mx-14 xl:px-14">
        <div className="rounded-[2rem] border border-black/8 bg-white/86 p-3 shadow-[0_18px_70px_rgba(10,10,10,0.08)] backdrop-blur-xl sm:p-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Search hoodies, bottles, kits"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-h-12 w-full rounded-full border border-black/8 bg-circle-tint/50 pl-12 pr-5 text-sm font-semibold text-black outline-none transition placeholder:text-black/35 focus:border-circle-accent focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,71,255,0.10)]"
              />
            </label>

            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/8 bg-black px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-circle-accent"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
              Filter
              <span className="rounded-full bg-white/16 px-2 py-0.5 text-[10px] tracking-normal">{activeCategory}</span>
            </button>

            <div className="rounded-full border border-black/8 bg-circle-paper-deep p-1">
              <div className="grid grid-cols-3 gap-1 sm:flex sm:w-auto">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSortBy(option.value)}
                    className={`focus-ring min-h-10 rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.08em] transition sm:px-4 ${sortBy === option.value ? 'bg-white text-circle-accent shadow-[0_6px_22px_rgba(10,10,10,0.08)]' : 'text-black/48 hover:text-black'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`grid overflow-hidden transition-all duration-300 ${filtersOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="min-h-0">
              <div className="mt-4 flex flex-wrap gap-2 border-t border-black/8 pt-4">
                {['All', ...categories].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${activeCategory === category ? 'bg-circle-accent text-white shadow-[0_10px_26px_rgba(37,71,255,0.24)]' : 'bg-circle-tint text-black/64 hover:bg-black hover:text-white'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1 text-xs font-semibold text-black/48">
          <span>{filtered.length} products</span>
          {(query || activeCategory !== 'All' || sortBy !== 'featured') && (
            <button
              type="button"
              onClick={() => { setQuery(''); setActiveCategory('All'); setSortBy('featured'); }}
              className="rounded-full px-3 py-1.5 text-circle-accent transition hover:bg-circle-tint"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-3xl tracking-[-0.03em]">No products found.</p>
          <p className="mt-3 text-black/55">Try another filter or search term.</p>
        </div>
      )}
    </div>
  );
}

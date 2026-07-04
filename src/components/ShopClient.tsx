'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories, products, type ProductCategory } from '@/data/products';

type SortOption = {
  value: 'featured' | 'price-asc' | 'price-desc';
  label: string;
};

const sortOptions: SortOption[] = [
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
  const [activeCategories, setActiveCategories] = useState<ProductCategory[]>([]);
  const [sortBy, setSortBy] = useState<SortOption['value']>('featured');
  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const selectedSort = sortOptions.find((option) => option.value === sortBy) ?? sortOptions[0];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const categoryMatch =
        activeCategories.length === 0 ||
        activeCategories.some((category) => product.category === category || product.audience.includes(category));
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
  }, [activeCategories, query, sortBy]);

  const filterLabel = activeCategories.length === 0 ? 'All' : `${activeCategories.length} selected`;

  const toggleCategory = (category: ProductCategory) => {
    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
    setFiltersOpen(false);
  };

  const clearFilters = () => {
    setActiveCategories([]);
    setFiltersOpen(false);
  };

  const chooseSort = (value: SortOption['value']) => {
    setSortBy(value);
    setSortOpen(false);
  };

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
              onClick={() => {
                setFiltersOpen((open) => !open);
                setSortOpen(false);
              }}
              aria-expanded={filtersOpen}
              className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/8 bg-black px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-circle-accent"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
              Filter
              <span className="rounded-full bg-white/16 px-2 py-0.5 text-[10px] tracking-normal">{filterLabel}</span>
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSortOpen((open) => !open);
                  setFiltersOpen(false);
                }}
                aria-expanded={sortOpen}
                className="focus-ring flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-circle-paper-deep px-5 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:-translate-y-0.5 hover:bg-white hover:text-circle-accent lg:w-auto"
              >
                {selectedSort.label}
                <svg className={`h-4 w-4 transition ${sortOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`absolute right-0 top-[calc(100%+0.5rem)] z-30 w-full min-w-[190px] overflow-hidden rounded-3xl border border-black/8 bg-white p-1.5 shadow-[0_18px_60px_rgba(10,10,10,0.16)] transition lg:w-48 ${sortOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}>
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => chooseSort(option.value)}
                    className={`focus-ring flex min-h-11 w-full items-center justify-between rounded-full px-4 text-left text-xs font-bold uppercase tracking-[0.1em] transition ${sortBy === option.value ? 'bg-circle-accent text-white shadow-[0_10px_26px_rgba(37,71,255,0.22)]' : 'text-black/58 hover:bg-circle-tint hover:text-circle-accent'}`}
                  >
                    {option.label}
                    {sortBy === option.value && (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`grid overflow-hidden transition-all duration-300 ${filtersOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="min-h-0">
              <div className="mt-4 flex flex-wrap gap-2 border-t border-black/8 pt-4">
                <button
                  type="button"
                  onClick={clearFilters}
                  className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${activeCategories.length === 0 ? 'bg-circle-accent text-white shadow-[0_10px_26px_rgba(37,71,255,0.24)]' : 'bg-circle-tint text-black/64 hover:bg-black hover:text-white'}`}
                >
                  All
                </button>

                {categories.map((category) => {
                  const isActive = activeCategories.includes(category);
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${isActive ? 'bg-circle-accent text-white shadow-[0_10px_26px_rgba(37,71,255,0.24)]' : 'bg-circle-tint text-black/64 hover:bg-black hover:text-white'}`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1 text-xs font-semibold text-black/48">
          <span>{filtered.length} products</span>
          {(query || activeCategories.length > 0 || sortBy !== 'featured') && (
            <button
              type="button"
              onClick={() => { setQuery(''); setActiveCategories([]); setSortBy('featured'); setFiltersOpen(false); setSortOpen(false); }}
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

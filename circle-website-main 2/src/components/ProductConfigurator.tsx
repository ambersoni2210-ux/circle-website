'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductConfigurator({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0] ?? 'Custom');
  const [size, setSize] = useState(product.sizes[0] ?? undefined);
  const [placement, setPlacement] = useState(product.placements[0] ?? 'Brand mark');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="space-y-8">
      <div>
        <p className="kicker text-black/42">{product.category}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-7xl">{product.name}</h1>
        <p className="mt-5 text-lg leading-8 text-black/62">{product.longDescription}</p>
        <p className="mt-5 inline-flex rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">{product.priceLabel}</p>
      </div>

      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">Color</legend>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((item) => (
            <button key={item} type="button" onClick={() => setColor(item)} className={`min-h-11 rounded-full border px-4 text-sm transition ${color === item ? 'border-black bg-black text-white' : 'border-black/10 bg-white text-black hover:border-black/35'}`}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      {product.sizes.length > 0 && (
        <fieldset>
          <legend className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">Size</legend>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((item) => (
              <button key={item} type="button" onClick={() => setSize(item)} className={`flex h-12 min-w-12 items-center justify-center rounded-full border px-4 text-sm transition ${size === item ? 'border-black bg-black text-white' : 'border-black/10 bg-white text-black hover:border-black/35'}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">Branding placement</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {product.placements.map((item) => (
            <button key={item} type="button" onClick={() => setPlacement(item)} className={`min-h-12 rounded-full border px-4 text-left text-sm transition ${placement === item ? 'border-black bg-black text-white' : 'border-black/10 bg-white text-black hover:border-black/35'}`}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">Quantity</p>
        <div className="inline-flex items-center overflow-hidden rounded-full border border-black/10 bg-white">
          <button type="button" className="h-12 w-12" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">−</button>
          <span className="min-w-12 text-center text-sm font-semibold">{quantity}</span>
          <button type="button" className="h-12 w-12" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => addItem(product, { color, size, placement, quantity })}
          className="magnetic-btn min-h-12 rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white"
        >
          Add to bag
        </button>
        <Link href="/contact" className="dark-magnetic magnetic-btn flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-black">
          Request bulk quote
        </Link>
      </div>
    </div>
  );
}

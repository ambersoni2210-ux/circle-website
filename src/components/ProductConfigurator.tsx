'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductConfigurator({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0] ?? undefined);
  const [placement, setPlacement] = useState(product.placements[0] ?? 'Brand mark');
  const [quantity, setQuantity] = useState(product.moq);
  const { addItem } = useCart();

  return (
    <div className="space-y-8">
      <div>
        <p className="kicker text-black/45">{product.category}</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.02] sm:text-6xl">{product.name}</h1>
        <p className="mt-5 text-lg leading-8 text-black/62">{product.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="rounded-full bg-black px-4 py-2 text-white">{product.priceBand} / unit</span>
          <span className="rounded-full border border-black/12 px-4 py-2 text-black/65">MOQ {product.moq}</span>
          <span className="rounded-full border border-black/12 px-4 py-2 text-black/65">Ships in {product.leadTime}</span>
        </div>
      </div>

      {product.sizes.length > 0 && (
        <fieldset>
          <legend className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/45">Size</legend>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((item) => (
              <button key={item} type="button" onClick={() => setSize(item)} aria-pressed={size === item} className={`flex h-12 min-w-12 items-center justify-center rounded-full border px-4 text-sm transition ${size === item ? 'border-black bg-black text-white' : 'border-black/12 bg-white text-black hover:border-black/40'}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/45">Branding placement</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {product.placements.map((item) => (
            <button key={item} type="button" onClick={() => setPlacement(item)} aria-pressed={placement === item} className={`min-h-12 rounded-full border px-4 text-left text-sm transition ${placement === item ? 'border-black bg-black text-white' : 'border-black/12 bg-white text-black hover:border-black/40'}`}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black/45">Quantity (min {product.moq})</p>
        <div className="inline-flex items-center overflow-hidden rounded-full border border-black/12 bg-white">
          <button type="button" className="h-12 w-12 text-lg" onClick={() => setQuantity((v) => Math.max(product.moq, v - 5))} aria-label="Decrease quantity">−</button>
          <span className="min-w-14 text-center text-sm font-semibold">{quantity}</span>
          <button type="button" className="h-12 w-12 text-lg" onClick={() => setQuantity((v) => v + 5)} aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => addItem(product, { size, placement, quantity })}
          className="focus-ring min-h-12 rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
        >
          Add to inquiry
        </button>
        <Link href="/contact" className="focus-ring flex min-h-12 items-center justify-center rounded-full border border-black/12 bg-white px-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:border-black">
          Request bulk quote
        </Link>
      </div>

      <p className="rounded-2xl border border-black/10 bg-white p-4 text-sm leading-6 text-black/58">
        No payment is taken online. Add items to your inquiry, then send it to us. Circle replies with a firm quote, a branding mockup and a delivery timeline, usually within two working days.
      </p>
    </div>
  );
}

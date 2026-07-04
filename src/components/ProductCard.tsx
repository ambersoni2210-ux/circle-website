'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product, productImageFor } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const img = productImageFor(product);
  const defaultSize = product.sizes[0];
  const defaultColor = product.colors[0];
  const defaultPlacement = product.placements[0];

  return (
    <article className="product-card group rounded-[1.75rem] bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(10,10,10,0.12)]">
      <Link href={`/shop/${product.slug}`} className="block focus-ring rounded-[1.25rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-circle-cream">
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.10em] text-black backdrop-blur">
            {product.priceBand}
          </div>
          <div className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black text-[10px] font-bold uppercase tracking-widest text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
            View
          </div>
        </div>
      </Link>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.10em] text-black/45">{product.category}</p>
          <p className="text-[11px] font-semibold text-black/45">MOQ {product.moq}</p>
        </div>
        <h3 className="mt-1 font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.015em] text-black">{product.name}</h3>
        <p className="mt-2 min-h-[42px] text-[0.92rem] leading-6 text-black/56">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex -space-x-1.5" aria-hidden="true">
            {product.colors.slice(0, 4).map((color, index) => (
              <span key={color} title={color} className="h-5 w-5 rounded-full border border-black/10 shadow-sm" style={{ background: ['#0A0A0A', '#F6F3EE', '#8f8d88', '#14213d'][index] ?? '#D8D0C4' }} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => addItem(product, { size: defaultSize, color: defaultColor, placement: defaultPlacement })}
            className="focus-ring min-h-11 rounded-full border border-black/10 px-4 text-xs font-bold uppercase tracking-[0.08em] transition hover:bg-black hover:text-white"
          >
            Add to inquiry
          </button>
        </div>
      </div>
    </article>
  );
}

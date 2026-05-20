'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const defaultSize = product.sizes[0];
  const defaultColor = product.colors[0];
  const defaultPlacement = product.placements[0];

  return (
    <article className="product-card group rounded-[2rem] bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/shop/${product.slug}`} className="block focus-ring rounded-[1.5rem]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-circle-cream">
          <Image src={product.image} alt={`${product.name} custom merchandise mockup`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
          <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black backdrop-blur">
            {product.priceLabel}
          </div>
          <div className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xs font-bold uppercase tracking-widest text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
            View
          </div>
        </div>
      </Link>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/42">{product.category}</p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.045em] text-black">{product.name}</h3>
          </div>
        </div>
        <p className="mt-2 min-h-[42px] text-sm leading-6 text-black/56">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex -space-x-1.5">
            {product.colors.slice(0, 4).map((color, index) => (
              <span key={color} title={color} className="h-5 w-5 rounded-full border border-black/10 shadow-sm" style={{ background: ['#050505', '#f6f3ee', '#8f8d88', '#14213d'][index] ?? '#d8d0c4' }} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => addItem(product, { size: defaultSize, color: defaultColor, placement: defaultPlacement })}
            className="focus-ring min-h-11 rounded-full border border-black/10 px-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

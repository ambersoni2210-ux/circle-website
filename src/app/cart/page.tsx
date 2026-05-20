'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalItems } = useCart();

  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-12 sm:py-20">
        <p className="kicker text-black/42">Circle bag</p>
        <h1 className="display-lg mt-4">Your selected products.</h1>

        {items.length === 0 ? (
          <div className="mt-12 rounded-[2.5rem] bg-white p-8 text-center shadow-soft">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full border border-black/15 p-5">
              <div className="h-full w-full rounded-full bg-black" />
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.06em]">Your bag is empty.</h2>
            <p className="mt-3 text-black/55">Start by exploring the product universe.</p>
            <Link href="/shop" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Explore shop</Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="grid gap-4 rounded-[2rem] bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.05)] sm:grid-cols-[120px_1fr]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-circle-cream">
                    <Image src={item.product.image} alt={item.product.name} fill sizes="120px" className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-display text-3xl font-semibold tracking-[-0.055em]">{item.product.name}</h2>
                        <p className="mt-2 text-sm text-black/50">{[item.color, item.size, item.placement].filter(Boolean).join(' · ')}</p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-black/38">{item.product.priceLabel}</p>
                      </div>
                      <button onClick={() => removeItem(item.key)} className="self-start text-xs font-bold uppercase tracking-[0.18em] text-black/35 hover:text-black">Remove</button>
                    </div>
                    <div className="inline-flex w-fit items-center overflow-hidden rounded-full border border-black/10">
                      <button className="h-10 w-10" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                      <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                      <button className="h-10 w-10" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="h-fit rounded-[2rem] bg-black p-6 text-white lg:sticky lg:top-28">
              <p className="kicker text-white/42">Request summary</p>
              <p className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em]">{totalItems} item{totalItems === 1 ? '' : 's'} selected</p>
              <p className="mt-4 text-sm leading-6 text-white/58">Custom pricing will be shared after product, quantity, branding and fulfillment details are reviewed.</p>
              <Link href="/checkout" className="magnetic-btn mt-8 flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-xs font-bold uppercase tracking-[0.2em] text-black">Request order</Link>
              <Link href="/shop" className="mt-3 flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Continue shopping</Link>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}

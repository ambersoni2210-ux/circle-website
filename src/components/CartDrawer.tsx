'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalItems, totalPrice, hasCustomPricing } = useCart();

  useEffect(() => {
    document.body.classList.toggle('cart-open', isCartOpen);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsCartOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('cart-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <>
      <div className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-svh w-full max-w-[480px] flex-col bg-circle-cream shadow-premium transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping bag"
        aria-hidden={!isCartOpen}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-7">
          <div>
            <p className="kicker text-black/42">Circle bag</p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.055em]">{totalItems} item{totalItems === 1 ? '' : 's'}</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl leading-none" aria-label="Close cart">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="relative mb-6 h-28 w-28 rounded-full border border-black/15">
                <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
              </div>
              <p className="font-display text-3xl tracking-[-0.05em]">Your bag is empty.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-black/55">Explore products and build a request for your circle.</p>
              <Link href="/shop" onClick={() => setIsCartOpen(false)} className="mt-7 rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Explore shop
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[90px_1fr] gap-4 rounded-[1.5rem] bg-white p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-circle-cream">
                    <Image src={item.product.image} alt={item.product.name} fill sizes="90px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="truncate font-display text-lg font-semibold tracking-[-0.04em]">{item.product.name}</p>
                        <p className="mt-1 text-xs text-black/48">{[item.color, item.size, item.placement].filter(Boolean).join(' · ') || 'Custom selection'}</p>
                      </div>
                      <button onClick={() => removeItem(item.key)} className="text-xs font-bold uppercase tracking-[0.18em] text-black/35 hover:text-black">Remove</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-full border border-black/10">
                        <button className="h-9 w-9" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                        <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                        <button className="h-9 w-9" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/42">{item.product.priceLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 bg-white px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-7">
            <div className="mb-4 flex justify-between text-sm text-black/58">
              <span>Pricing</span>
              <span>{hasCustomPricing ? 'Shared after request' : `₹${totalPrice.toLocaleString('en-IN')}`}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="magnetic-btn flex min-h-12 w-full items-center justify-center rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Request order
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

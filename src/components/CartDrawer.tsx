'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-[100dvh] w-full max-w-[min(100vw,28rem)] bg-white shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6 sm:py-5">
            <h2 className="text-lg font-light uppercase tracking-widest">Cart</h2>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              aria-label="Close cart"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <svg className="mb-4 h-16 w-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className="font-light text-gray-400">Your cart is empty</p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 min-h-11 text-sm text-black/70 underline underline-offset-4 hover:text-black"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 img-zoom">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-medium">{item.product.name}</h3>
                      {item.size && (
                        <p className="mt-0.5 text-xs text-gray-400">Size: {item.size}</p>
                      )}
                      <p className="mt-1 text-sm font-medium">
                        &#8377;{item.product.price.toLocaleString('en-IN')}
                      </p>
                      <div className="mt-2 flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs transition-colors hover:border-black active:bg-gray-50"
                          aria-label={`Decrease ${item.product.name} quantity`}
                        >
                          &minus;
                        </button>
                        <span className="w-5 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs transition-colors hover:border-black active:bg-gray-50"
                          aria-label={`Increase ${item.product.name} quantity`}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto min-h-9 text-xs text-gray-400 transition-colors hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="space-y-4 border-t border-gray-100 px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Subtotal</span>
                <span className="text-lg font-medium">
                  &#8377;{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-xs text-gray-400">Shipping calculated at checkout</p>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block min-h-11 w-full bg-black py-4 text-center text-sm uppercase tracking-widest text-white transition-colors hover:bg-gray-900 active:bg-gray-800"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="block min-h-11 w-full text-center text-sm text-black/60 transition-colors hover:text-black"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

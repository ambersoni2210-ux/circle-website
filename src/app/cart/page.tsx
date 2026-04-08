'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import AnimatedSection from '@/components/AnimatedSection';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-2">Your Cart</h1>
            <p className="text-black/40 font-light mb-12">
              {items.length} item{items.length !== 1 ? 's' : ''} in your bag
            </p>
          </AnimatedSection>

          {items.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20 border border-gray-100">
                <p className="text-black/30 font-light text-lg mb-6">Your cart is empty</p>
                <Link
                  href="/shop"
                  className="inline-block px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </AnimatedSection>
          ) : (
            <>
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-xs tracking-widest uppercase text-black/40">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {items.map(item => (
                  <div key={item.product.id} className="py-6 grid grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="col-span-12 md:col-span-6 flex gap-4">
                      <div className="w-20 h-24 bg-gray-50 overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        {item.size && <p className="text-xs text-black/40 mt-0.5">Size: {item.size}</p>}
                        {item.color && <p className="text-xs text-black/40">Color: {item.color}</p>}
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-xs text-black/30 hover:text-red-500 transition-colors mt-2 underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex items-center justify-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-200 flex items-center justify-center text-xs hover:border-black transition-colors"
                      >
                        &minus;
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-200 flex items-center justify-center text-xs hover:border-black transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-right text-sm">
                      &#8377;{item.product.price.toLocaleString('en-IN')}
                    </div>

                    {/* Total */}
                    <div className="col-span-4 md:col-span-2 text-right text-sm font-medium">
                      &#8377;{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="max-w-xs ml-auto space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Subtotal</span>
                    <span>&#8377;{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Shipping</span>
                    <span className="text-black/40">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="font-medium">&#8377;{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-black text-white text-center py-4 text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors mt-4"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

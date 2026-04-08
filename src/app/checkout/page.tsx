'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="py-32 text-center">
          <div className="max-w-lg mx-auto px-6">
            <AnimatedSection>
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Order Confirmed
              </h1>
              <p className="text-black/50 font-light mb-8">
                Thank you for your order! We&apos;ve sent a confirmation to your email.
                Your Circle merch is on its way.
              </p>
              <Link
                href="/shop"
                className="inline-block px-10 py-4 bg-black text-white text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-20">
        <section className="py-32 text-center">
          <div className="max-w-lg mx-auto px-6">
            <h1 className="text-3xl font-light mb-4">Your cart is empty</h1>
            <Link href="/shop" className="text-sm underline underline-offset-4 text-black/60 hover:text-black">
              Go to Shop
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-12">Checkout</h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-sm tracking-[0.2em] uppercase text-black/40 mb-6">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="col-span-2 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="col-span-2 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-sm tracking-[0.2em] uppercase text-black/40 mb-6">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      className="col-span-2 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                      value={form.state}
                      onChange={handleChange}
                      className="px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PIN Code"
                      required
                      value={form.pincode}
                      onChange={handleChange}
                      className="col-span-2 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors magnetic-btn"
                >
                  Place Order — &#8377;{totalPrice.toLocaleString('en-IN')}
                </button>

                <p className="text-xs text-black/30 text-center">
                  This is a demo checkout. No real payment will be processed.
                </p>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 sticky top-28">
                <h2 className="text-sm tracking-[0.2em] uppercase text-black/40 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-16 h-20 bg-white overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{item.product.name}</p>
                        <p className="text-xs text-black/40">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">
                        &#8377;{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Subtotal</span>
                    <span>&#8377;{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50">Shipping</span>
                    <span className="text-black/40">Free</span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-gray-200 mt-2">
                    <span>Total</span>
                    <span className="font-medium">&#8377;{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

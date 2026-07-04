'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { productImageFor } from '@/data/products';

const orderTypes = ['Personal order', 'Bulk order', 'Custom store inquiry', 'Voucher/reward program'];
const quantities = ['1 to 10', '11 to 50', '51 to 200', '201 to 500', '500+'];

export default function CheckoutForm() {
  const { items, clearCart, updateQuantity, removeItem } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', orderType: orderTypes[1], quantityRange: quantities[1], message: '' });

  const productSummary = items.map((item) => `${item.product.name} x ${item.quantity}${item.color ? `, ${item.color}` : ''}${item.size ? `, ${item.size}` : ''}${item.placement ? `, ${item.placement}` : ''}`).join('\n');

  const mailto = `mailto:connect@getcircle.in?subject=${encodeURIComponent(`Circle order request from ${form.organization || form.name || 'website'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nOrder type: ${form.orderType}\nQuantity range: ${form.quantityRange}\n\nProducts:\n${productSummary || 'No products selected'}\n\nMessage:\n${form.message}`,
  )}`;

  if (submitted) {
    return (
      <section className="container-c py-28 text-center">
        <div className="mx-auto max-w-xl rounded-[2.5rem] bg-white p-8 shadow-soft">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">✓</div>
          <h1 className="font-display text-5xl font-semibold tracking-[-0.065em]">Thanks, we will get back to you.</h1>
          <Link href="/shop" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-c py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:gap-12">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            clearCart();
            window.location.href = mailto;
          }}
          className="rounded-[2.5rem] bg-white p-5 shadow-soft sm:p-8"
        >
          <p className="kicker text-black/42">Order inquiry</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.065em] sm:text-6xl">Request your Circle order.</h1>
          <p className="mt-4 text-sm leading-7 text-black/58">No payment is collected here. Circle will review the request, customization, quantities and share the next steps.</p>

          <div className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Name</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Email</span>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Organization / community name</span>
              <input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Order type</span>
                <select value={form.orderType} onChange={(e) => setForm({ ...form, orderType: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-black">
                  {orderTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Quantity range</span>
                <select value={form.quantityRange} onChange={(e) => setForm({ ...form, quantityRange: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-black">
                  {quantities.map((quantity) => <option key={quantity}>{quantity}</option>)}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Message</span>
              <textarea rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-black" />
            </label>
            <button type="submit" className="magnetic-btn min-h-12 w-full rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Send request
            </button>
          </div>
        </form>

        <aside className="rounded-[2.5rem] bg-circle-black p-5 text-white sm:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="kicker text-white/42">Selected products</p>
          {items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-display text-3xl tracking-[-0.05em]">Your bag is empty.</p>
              <Link href="/shop" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black">Explore products</Link>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[76px_1fr] gap-4 rounded-[1.5rem] bg-white/8 p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white/10">
                    <Image src={productImageFor(item.product).src} alt={productImageFor(item.product).alt} fill sizes="76px" className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg font-semibold tracking-[-0.04em]">{item.product.name}</p>
                        <p className="mt-1 text-xs leading-5 text-white/48">{[item.color, item.size, item.placement].filter(Boolean).join(' · ')}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.key)} className="text-xs uppercase tracking-[0.18em] text-white/40">Remove</button>
                    </div>
                    <div className="mt-4 inline-flex items-center overflow-hidden rounded-full border border-white/10">
                      <button type="button" className="h-9 w-9" onClick={() => updateQuantity(item.key, item.quantity - 1)}>−</button>
                      <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                      <button type="button" className="h-9 w-9" onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <p className="rounded-2xl border border-white/10 p-4 text-sm leading-6 text-white/58">Custom pricing will be shared after Circle reviews products, branding method, quantity and fulfillment scope.</p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

const interests = ['Custom store', 'Bulk merchandise', 'Corporate uniforms', 'College merchandise', 'Sports/team kits', 'General inquiry'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', interest: interests[0], message: '' });

  const mailto = `mailto:connect@getcircle.in?subject=${encodeURIComponent(`Circle inquiry from ${form.organization || form.name || 'website'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`,
  )}`;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.location.href = mailto;
      }}
      className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-8"
    >
      {submitted ? (
        <div className="py-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">✓</div>
          <h3 className="font-display text-3xl font-semibold tracking-[-0.055em]">Thanks, we will get back to you.</h3>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Name</span>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Email</span>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Organization / community name</span>
            <input value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 px-4 outline-none focus:border-black" />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">I’m interested in</span>
            <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-black">
              {interests.map((interest) => <option key={interest}>{interest}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-black/45">Message</span>
            <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-black" />
          </label>
          <button className="magnetic-btn min-h-12 w-full rounded-full bg-black px-6 text-xs font-bold uppercase tracking-[0.2em] text-white" type="submit">
            Tell us about your circle
          </button>
        </div>
      )}
    </form>
  );
}

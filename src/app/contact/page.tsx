'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'demo'>('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = formType === 'demo' ? 'Circle demo request' : 'Circle enquiry';
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Brand / Community / College: ${form.organization || 'Not specified'}`,
      `Role: ${form.role || 'Not specified'}`,
      formType === 'demo' ? `Preferred date: ${form.date || 'Not specified'}` : '',
      formType === 'demo' ? `Preferred time: ${form.time || 'Not specified'}` : '',
      '',
      'Message:',
      form.message || 'Not specified',
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:connect@getcircle.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
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
                Email Ready
              </h1>
              <p className="text-black/50 font-light">
                Your email app should open with the details filled in. Please send it to connect@getcircle.in to complete your request.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-3">Contact</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Let&apos;s Talk
            </h1>
            <p className="text-black/40 font-light mt-4 max-w-lg">
              Reach out for Circle products, custom merchandise, storefront support, or partnership conversations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {/* Tabs */}
              <div className="flex gap-1 mb-10">
                <button
                  onClick={() => setFormType('contact')}
                  className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all ${
                    formType === 'contact'
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-black/50 hover:bg-gray-100'
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setFormType('demo')}
                  className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all ${
                    formType === 'demo'
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-black/50 hover:bg-gray-100'
                  }`}
                >
                  Book a Demo
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="col-span-2 sm:col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="col-span-2 sm:col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                  />
                  <input
                    type="text"
                    name="organization"
                    placeholder="Brand / Community / College"
                    value={form.organization}
                    onChange={handleChange}
                    className="col-span-2 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                  />
                </div>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent text-black/60"
                >
                  <option value="">Select enquiry type</option>
                  <option value="shopper">Shopper</option>
                  <option value="custom-order">Custom / Bulk Order</option>
                  <option value="community">Community or Creator</option>
                  <option value="college">College or Institution</option>
                  <option value="other">Other</option>
                </select>

                {formType === 'demo' && (
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                    />
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent text-black/60"
                    >
                      <option value="">Preferred Time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                )}

                <textarea
                  name="message"
                  placeholder={formType === 'demo' ? 'Tell us what you want Circle to help you build...' : 'Your message...'}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors magnetic-btn"
                >
                  {formType === 'demo' ? 'Prepare Demo Email' : 'Prepare Email'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-black text-white p-10 md:p-12 sticky top-28">
                <h3 className="text-lg font-light tracking-wide mb-8">Get in Touch</h3>

                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Email</p>
                    <a href="mailto:connect@getcircle.in" className="text-sm text-white/70 hover:text-white transition-colors">
                      connect@getcircle.in
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Location</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Delhi, India
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Hours</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Monday — Friday: 9:00 AM — 9:00 PM IST<br />
                      Saturday — Sunday: 9:00 AM — 5:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">No phone number listed</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    For all enquiries, please use the email above so the conversation stays clear and traceable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'demo'>('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
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
                {formType === 'demo' ? 'Demo Booked!' : 'Message Sent!'}
              </h1>
              <p className="text-black/50 font-light">
                {formType === 'demo'
                  ? "We've received your demo request. Our team will reach out within 24 hours to confirm your slot."
                  : "Thank you for reaching out! We'll get back to you within 24 hours."}
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
              Whether you want to partner with us, book a demo, or just say hello — we&apos;d love to hear from you.
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
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="col-span-2 sm:col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                  />
                  <input
                    type="text"
                    name="college"
                    placeholder="College / Institution"
                    value={form.college}
                    onChange={handleChange}
                    className="col-span-2 sm:col-span-1 px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent"
                  />
                </div>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent text-black/60"
                >
                  <option value="">Select your role</option>
                  <option value="admin">College Administrator</option>
                  <option value="student">Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="faculty">Faculty</option>
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
                  placeholder={formType === 'demo' ? 'Tell us about your college and what you\'re looking for...' : 'Your message...'}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border border-gray-200 text-sm focus:border-black outline-none transition-colors bg-transparent resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-sm tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors magnetic-btn"
                >
                  {formType === 'demo' ? 'Book Demo' : 'Send Message'}
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
                    <a href="mailto:hello@circlemerch.in" className="text-sm text-white/70 hover:text-white transition-colors">
                      hello@circlemerch.in
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Phone</p>
                    <a href="tel:+919876543210" className="text-sm text-white/70 hover:text-white transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Office</p>
                    <p className="text-sm text-white/70 leading-relaxed">
                      WeWork Galaxy, 43 Residency Road<br />
                      Bangalore, Karnataka 560025<br />
                      India
                    </p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Hours</p>
                    <p className="text-sm text-white/70">
                      Monday — Friday: 9AM — 7PM IST<br />
                      Saturday: 10AM — 4PM IST
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 border border-white/10 text-xs text-white/50 hover:bg-white/10 hover:text-white transition-all"
                      >
                        {social}
                      </a>
                    ))}
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

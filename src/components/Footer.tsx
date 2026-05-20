'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Ready to wear your<br />circle with pride?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 font-light">
            Shop premium Circle essentials or create custom merchandise for your team, community, event, or campus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Talk to Us
            </Link>
            <Link
              href="/shop"
              className="px-10 py-4 border border-white/20 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <img src="/logo-dark.svg" alt="Circle" className="h-9 w-9" />
              <span className="text-base font-light tracking-[0.3em] uppercase">Circle</span>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              A merchandise brand and store built around identity, belonging, and pride you can wear.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">Shop</h4>
            <ul className="space-y-3">
              {['T-Shirts', 'Hoodies', 'Caps', 'Bottles', 'Bags'].map(item => (
                <li key={item}>
                  <Link href="/shop" className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'Custom Orders', href: '/b2b' },
                { label: 'Bulk Merchandise', href: '/b2b' },
                { label: 'Store Platform', href: '/app-solution' },
                { label: 'Start a Conversation', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:connect@getcircle.in" className="text-sm text-white/40 hover:text-white transition-colors font-light">
                  connect@getcircle.in
                </a>
              </li>
              <li className="text-sm text-white/40 font-light leading-relaxed">
                Mon–Fri: 9:00 AM–9:00 PM IST<br />Sat–Sun: 9:00 AM–5:00 PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/30 font-light">
            &copy; {new Date().getFullYear()} Circle. All rights reserved.
          </p>
          <a href="mailto:connect@getcircle.in" className="text-xs text-white/30 hover:text-white/60 font-light transition-colors">
            connect@getcircle.in
          </a>
        </div>
      </div>
    </footer>
  );
}

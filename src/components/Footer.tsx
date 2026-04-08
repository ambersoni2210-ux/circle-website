'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Ready to build your<br />college identity?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 font-light">
            Join 50+ colleges across India who trust Circle for premium merchandise and digital platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Partner With Us
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
              Building college identity through premium merchandise and digital community platforms.
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
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
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
                { label: 'Bulk Orders', href: '/b2b' },
                { label: 'Custom Branding', href: '/b2b' },
                { label: 'College App', href: '/app-solution' },
                { label: 'Book a Demo', href: '/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-5">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Return Policy'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/30 font-light">
            &copy; {new Date().getFullYear()} Circle. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[
              { name: 'Instagram', path: 'M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.5a1 1 0 110 2 1 1 0 010-2z' },
              { name: 'Twitter', path: 'M22 5.8a8.49 8.49 0 01-2.36.64 4.13 4.13 0 001.81-2.27 8.21 8.21 0 01-2.61 1 4.1 4.1 0 00-7 3.74A11.64 11.64 0 013.39 4.62a4.16 4.16 0 001.27 5.49A4.09 4.09 0 012.8 9.5v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.43a11.62 11.62 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18-.01-.35-.02-.53A8.35 8.35 0 0022 5.8z' },
              { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            ].map(social => (
              <a
                key={social.name}
                href="#"
                className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label={social.name}
              >
                <svg className="w-4 h-4 fill-white/50" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

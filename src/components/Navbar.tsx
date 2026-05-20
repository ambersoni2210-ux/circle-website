'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/b2b', label: 'Custom Orders' },
    { href: '/app-solution', label: 'Platform' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const openCart = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]'
            : 'bg-white/80 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-0'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group -ml-2 flex min-h-11 items-center gap-2 rounded-full px-2 transition-transform duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              aria-label="Go to Circle homepage"
            >
              <img
                src="/logo-light.svg"
                alt=""
                aria-hidden="true"
                className="h-9 w-9 transition-transform duration-300 group-hover:rotate-90 group-focus-visible:rotate-90 group-active:rotate-90 sm:h-10 sm:w-10"
              />
              <span className="text-base font-light uppercase tracking-[0.24em] sm:text-lg sm:tracking-[0.3em]">
                Circle
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`line-animate min-h-11 rounded-full px-1 py-3 text-sm tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                    pathname === link.href ? 'text-black' : 'text-black/70 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={openCart}
                className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                aria-label="Open cart"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black lg:hidden"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <div className="flex h-4 w-5 flex-col justify-between">
                  <span
                    className={`block h-[1.5px] bg-black transition-all duration-300 ${
                      isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-black transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-black transition-all duration-300 ${
                      isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 h-[100dvh] overflow-y-auto bg-white/98 px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-24 backdrop-blur-md transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-sm flex-col justify-center gap-3">
          {[{ href: '/', label: 'Home' }, ...navLinks].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`rounded-2xl border px-6 py-4 text-2xl font-light tracking-wide transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${
                pathname === link.href
                  ? 'border-black bg-black text-white'
                  : 'border-gray-100 bg-gray-50 text-black hover:border-gray-200 active:bg-gray-100'
              } ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

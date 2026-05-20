'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/platform', label: 'Platform' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`relative h-9 w-9 rounded-full border-[2.5px] transition-transform duration-500 group-hover:rotate-180 group-active:scale-95 ${light ? 'border-white' : 'border-circle-black'}`}>
        <span className={`absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${light ? 'bg-white' : 'bg-circle-black'}`} />
      </span>
      <span className="font-display text-base font-bold tracking-[0.22em]">CIRCLE</span>
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();
  const onHome = pathname === '/';
  const useLight = onHome && !isScrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const openCart = () => {
    setMenuOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          useLight
            ? 'bg-transparent text-white'
            : 'border-b border-black/10 bg-circle-cream/88 text-circle-black shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl'
        }`}
      >
        <div className="container-c">
          <div className="flex h-[72px] items-center justify-between gap-4 pt-[env(safe-area-inset-top)] sm:h-20">
            <Link href="/" aria-label="Go to Circle homepage" className="group focus-ring -ml-2 rounded-full p-2 no-tap-highlight" onClick={() => setMenuOpen(false)}>
              <LogoMark light={useLight} />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`focus-ring relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      useLight ? 'text-white/72 hover:text-white' : 'text-black/58 hover:text-black'
                    }`}
                  >
                    {link.label}
                    {active && <span className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${useLight ? 'bg-white' : 'bg-black'}`} />}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Open cart"
                onClick={openCart}
                className={`focus-ring relative flex h-11 min-w-11 items-center justify-center rounded-full border text-xs font-bold transition ${
                  useLight ? 'border-white/25 bg-white/8 text-white hover:bg-white/16' : 'border-black/10 bg-white/45 text-black hover:bg-white'
                }`}
              >
                Bag
                {totalItems > 0 && (
                  <span className={`absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] ${useLight ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    {totalItems}
                  </span>
                )}
              </button>
              <Link
                href="/contact"
                className={`magnetic-btn focus-ring hidden min-h-11 items-center rounded-full px-5 text-xs font-bold uppercase tracking-[0.18em] transition sm:flex ${
                  useLight ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'
                }`}
              >
                Start a store
              </Link>
              <button
                type="button"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className={`focus-ring flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
                  useLight ? 'border-white/25 bg-white/8 text-white' : 'border-black/10 bg-white/60 text-black'
                }`}
              >
                <span className="relative h-4 w-5">
                  <span className={`absolute left-0 top-1 h-px w-5 transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''} ${useLight ? 'bg-white' : 'bg-black'}`} />
                  <span className={`absolute left-0 top-3 h-px w-5 transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''} ${useLight ? 'bg-white' : 'bg-black'}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-circle-black text-white transition duration-500 lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="container-c flex min-h-svh flex-col justify-between pb-8 pt-28">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-[2rem] border border-white/10 px-5 py-5 font-display text-4xl tracking-[-0.06em] text-white transition hover:bg-white hover:text-black active:scale-[0.99]"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-4 border-t border-white/10 pt-6">
            <button onClick={openCart} className="flex min-h-12 w-full items-center justify-between rounded-full bg-white px-5 text-sm font-bold uppercase tracking-[0.2em] text-black">
              Open bag <span>{totalItems}</span>
            </button>
            <Link href="/contact" className="flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 text-sm font-bold uppercase tracking-[0.2em]">
              Talk to Circle
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { CircleMark } from '@/components/CircleLogo';
import { products } from '@/data/products';

const platformChildren = [
  { href: '/colleges', label: 'Colleges' },
  { href: '/corporate', label: 'Corporate' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const searchRef = useRef<HTMLInputElement>(null);

  // Platform "section" = platform, colleges, or corporate. Tabs expand while here.
  const inPlatform = ['/platform', '/colleges', '/corporate'].some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);
  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  const q = query.trim().toLowerCase();
  const productMatches = q.length > 1
    ? products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 5)
    : [];
  const pageMatches = q.length > 1
    ? [['/shop', 'Shop'], ['/platform', 'Platform'], ['/colleges', 'Colleges'], ['/corporate', 'Corporate'], ['/about', 'About'], ['/contact', 'Contact']]
        .filter(([, l]) => l.toLowerCase().includes(q)).slice(0, 3)
    : [];
  const submitSearch = () => {
    if (productMatches[0]) router.push(`/shop/${productMatches[0].slug}`);
    else if (pageMatches[0]) router.push(pageMatches[0][0] as string);
    else router.push('/shop');
    setSearchOpen(false); setQuery('');
  };

  const linkCls = (active: boolean) =>
    `focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'text-circle-accent' : 'text-black/65 hover:text-black'}`;

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-black/8 bg-white/85 backdrop-blur-xl' : 'bg-white/65 backdrop-blur-md'}`}>
        <div className="container-c">
          <div className="flex h-[68px] items-center justify-between gap-3 sm:h-[76px]">
            <Link href="/" aria-label="Circle, go to homepage" className="focus-ring flex items-center gap-2.5 rounded-full p-1">
              <CircleMark tone="dark" size={30} />
              <span className="font-display text-lg font-bold tracking-[0.28em] text-circle-ink">CIRCLE</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-0.5 lg:flex">
              <Link href="/" className={linkCls(isActive('/'))}>Home</Link>
              <Link href="/shop" className={linkCls(isActive('/shop'))}>Shop</Link>
              <Link href="/platform" className={linkCls(isActive('/platform'))}>Platform</Link>
              {/* Expanding tabs: appear inline while in Platform section */}
              <div className={`flex items-center gap-0.5 overflow-hidden transition-all duration-300 ${inPlatform ? 'max-w-[260px] opacity-100' : 'max-w-0 opacity-0'}`}>
                {platformChildren.map((c) => (
                  <Link key={c.href} href={c.href} className={`${linkCls(isActive(c.href))} whitespace-nowrap`}>
                    <span className="mr-1 text-circle-accent/50">/</span>{c.label}
                  </Link>
                ))}
              </div>
              <Link href="/about" className={linkCls(isActive('/about'))}>About</Link>
              <Link href="/contact" className={linkCls(isActive('/contact'))}>Contact</Link>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button type="button" aria-label="Search" onClick={() => setSearchOpen((o) => !o)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition hover:bg-black/5">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <Link href="/contact" className="hidden min-h-10 items-center rounded-full bg-circle-accent px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 sm:inline-flex">Start a store</Link>
              <button type="button" aria-label={`Inquiry bag, ${totalItems} items`} onClick={() => setIsCartOpen(true)}
                className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition hover:bg-black/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                {totalItems > 0 && <span className="absolute -right-0.5 -top-0.5 flex items-center justify-center rounded-full bg-circle-accent px-1 text-[10px] font-bold text-white" style={{ height: '18px', minWidth: '18px' }}>{totalItems}</span>}
              </button>
              <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-black lg:hidden">
                <span className="relative h-4 w-5">
                  <span className={`absolute left-0 top-1 h-0.5 w-5 rounded bg-black transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
                  <span className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-black transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
                </span>
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="border-t border-black/8 py-4">
              <input ref={searchRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submitSearch()} placeholder="Search products and pages"
                className="focus-ring w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none" />
              {(productMatches.length > 0 || pageMatches.length > 0) && (
                <div className="mt-2 overflow-hidden rounded-2xl border border-black/8 bg-white p-2 shadow-soft">
                  {productMatches.map((p) => (
                    <Link key={p.id} href={`/shop/${p.slug}`} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-circle-tint"><span className="font-medium">{p.name}</span><span className="ml-2 text-xs text-black/45">{p.category}</span></Link>
                  ))}
                  {pageMatches.map(([href, label]) => (
                    <Link key={href as string} href={href as string} className="block rounded-xl px-4 py-2.5 text-sm text-black/70 hover:bg-circle-tint">Go to {label}</Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-white transition duration-300 lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="container-c flex min-h-svh flex-col justify-between pb-8 pt-24">
          <div className="space-y-1">
            <Link href="/" className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${isActive('/') ? 'text-circle-accent' : 'text-black'}`}>Home</Link>
            <Link href="/shop" className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${isActive('/shop') ? 'text-circle-accent' : 'text-black'}`}>Shop</Link>
            <Link href="/platform" className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${isActive('/platform') ? 'text-circle-accent' : 'text-black'}`}>Platform</Link>
            <div className="ml-4 space-y-1">
              {platformChildren.map((c) => (
                <Link key={c.href} href={c.href} className={`block rounded-xl px-4 py-2 text-lg ${isActive(c.href) ? 'text-circle-accent' : 'text-black/60'}`}>{c.label}</Link>
              ))}
            </div>
            <Link href="/about" className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${isActive('/about') ? 'text-circle-accent' : 'text-black'}`}>About</Link>
            <Link href="/contact" className={`block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold ${isActive('/contact') ? 'text-circle-accent' : 'text-black'}`}>Contact</Link>
          </div>
          <div className="space-y-3 border-t border-black/10 pt-6">
            <Link href="/contact" className="flex min-h-12 w-full items-center justify-center rounded-full bg-circle-accent text-sm font-bold uppercase tracking-[0.14em] text-white">Start a store</Link>
            <button onClick={() => { setMenuOpen(false); setIsCartOpen(true); }} className="flex min-h-12 w-full items-center justify-center rounded-full border border-black/15 text-sm font-bold uppercase tracking-[0.14em] text-black">Inquiry bag ({totalItems})</button>
          </div>
        </div>
      </div>
    </>
  );
}

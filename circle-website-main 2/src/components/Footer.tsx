import Link from 'next/link';

const groups = [
  {
    title: 'Explore',
    links: [
      { href: '/shop', label: 'Shop' },
      { href: '/platform', label: 'Custom stores' },
      { href: '/colleges', label: 'Colleges' },
      { href: '/corporate', label: 'Corporate' },
    ],
  },
  {
    title: 'Circle',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/checkout', label: 'Order inquiry' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-circle-black text-white">
      <div className="container-c py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3 rounded-full focus-ring">
              <span className="relative h-12 w-12 rounded-full border-2 border-white transition-transform duration-500 group-hover:rotate-180">
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </span>
              <span className="font-display text-xl font-bold tracking-[0.24em]">CIRCLE</span>
            </Link>
            <p className="mt-8 max-w-xl font-display text-3xl leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl">
              Merchandise that carries belonging.
            </p>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/58">
              Circle builds premium merchandise and custom branded stores for campuses, companies, teams, alumni groups and communities.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="kicker text-white/42">{group.title}</p>
              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/62 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 text-sm text-white/48 sm:grid-cols-3">
          <p>connect@getcircle.in</p>
          <p>Delhi, India</p>
          <p className="sm:text-right">Mon–Fri 9 AM–9 PM IST · Sat–Sun 9 AM–5 PM IST</p>
        </div>
      </div>
    </footer>
  );
}

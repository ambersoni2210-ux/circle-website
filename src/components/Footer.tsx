import Link from 'next/link';
import LogoReplayLink from '@/components/LogoReplayLink';

const groups = [
  {
    title: 'Explore',
    links: [
      { href: '/shop', label: 'Shop products' },
      { href: '/platform', label: 'Custom stores' },
      { href: '/colleges', label: 'For colleges' },
      { href: '/corporate', label: 'For companies' },
    ],
  },
  {
    title: 'Circle',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/contact', label: 'Contact' },
      { href: '/checkout', label: 'Request an order' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { href: '/about#shipping', label: 'Shipping & delivery' },
      { href: '/about#returns', label: 'Returns & replacement' },
      { href: '/about#faqs', label: 'Buyer FAQs' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="on-dark bg-circle-ink text-white">
      <div className="container-c py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.7fr_.7fr_.7fr]">
          <div>
            <LogoReplayLink tone="light" size={40} textClass="text-circle-paper" wordSize="text-lg" />
            <p className="mt-8 max-w-md font-display text-3xl leading-[1.1] text-white sm:text-4xl">
              Merchandise that carries belonging.
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Circle builds premium merchandise and custom branded stores for campuses, companies, teams, alumni groups and communities across India.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="kicker text-white/45">{group.title}</p>
              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/65 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="kicker text-white/40">Contact</p>
            <a href="mailto:connect@getcircle.in" className="mt-3 block transition hover:text-white">connect@getcircle.in</a>
            <a href="https://wa.me/919000000000" className="mt-1 block transition hover:text-white">WhatsApp: +91 90000 00000</a>
          </div>
          <div>
            <p className="kicker text-white/40">Studio</p>
            <p className="mt-3">Circle Merchandise Pvt. Ltd.</p>
            <p className="mt-1">New Delhi, India</p>
          </div>
          <div>
            <p className="kicker text-white/40">Hours</p>
            <p className="mt-3">Mon–Fri, 9 AM – 9 PM IST</p>
            <p className="mt-1">Sat–Sun, 9 AM – 5 PM IST</p>
          </div>
          <div>
            <p className="kicker text-white/40">GST</p>
            <p className="mt-3">07ABCDE1234F1Z5</p>
            <p className="mt-1">© {new Date().getFullYear()} Circle</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import LogoReplayLink from '@/components/LogoReplayLink';
import { CircleMark } from '@/components/CircleLogo';

const groups = [
  {
    title: 'Explore',
    links: [
      { href: '/shop', label: 'Shop products' },
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
    <footer className="on-dark bg-circle-ink text-white">
      <div className="container-c py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_.7fr_.7fr_.9fr]">
          <div>
            <LogoReplayLink tone="light" wordSize="text-xl" />
            <p className="mt-7 max-w-md font-display text-3xl font-semibold leading-[1.1] text-white sm:text-4xl">
              Merchandise that carries belonging.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Circle creates premium custom merchandise and branded stores for colleges, companies, sports teams, alumni groups, events and communities across India.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="kicker text-white/45">{group.title}</p>
              <div className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/65 transition hover:text-white">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-6">
            <div>
              <p className="kicker text-white/45">Contact</p>
              <a href="mailto:connect@getcircle.in" className="mt-4 block text-sm text-white/65 transition hover:text-white">connect@getcircle.in</a>
            </div>
            <div>
              <p className="kicker text-white/45">Studio</p>
              <p className="mt-4 text-sm text-white/65">Team Circle</p>
              <p className="text-sm text-white/65">New Delhi, India</p>
            </div>
            <div>
              <p className="kicker text-white/45">Hours</p>
              <p className="mt-4 text-sm text-white/65">Weekdays and weekends</p>
              <p className="text-sm text-white/65">9 AM to 9 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <CircleMark tone="light" size={26} />
            <span className="font-display text-sm font-bold tracking-[0.28em] text-white/80">CIRCLE</span>
          </div>
          <p className="text-xs text-white/45">Circle. All rights reserved 2026.</p>
        </div>
      </div>
    </footer>
  );
}

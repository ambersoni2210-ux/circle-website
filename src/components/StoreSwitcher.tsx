import Link from 'next/link';

type StoreSwitcherProps = {
  active: 'platform' | 'colleges' | 'corporate';
};

const storeLinks = [
  { key: 'platform', label: 'Custom Store', href: '/platform' },
  { key: 'colleges', label: 'Campus Store', href: '/colleges' },
  { key: 'corporate', label: 'Company Store', href: '/corporate' },
] as const;

export default function StoreSwitcher({ active }: StoreSwitcherProps) {
  return (
    <div className="lg:hidden sticky top-[4.75rem] z-30 border-y border-black/10 bg-circle-paper/92 px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md gap-2 overflow-x-auto rounded-full border border-black/10 bg-white p-1 shadow-[0_14px_35px_rgba(10,10,10,0.08)]">
        {storeLinks.map((item) => {
          const isActive = item.key === active;
          const className = `shrink-0 rounded-full px-4 py-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] transition ${
            isActive
              ? 'bg-circle-accent text-white shadow-[0_10px_26px_rgba(37,71,255,0.28)]'
              : 'text-black/58 hover:bg-circle-tint hover:text-circle-accent'
          }`;

          if (isActive) {
            return (
              <span key={item.key} className={className} aria-current="page">
                {item.label}
              </span>
            );
          }

          return (
            <Link key={item.key} href={item.href} className={className}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

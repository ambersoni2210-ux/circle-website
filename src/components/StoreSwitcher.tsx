import Link from 'next/link';

type StoreSwitcherProps = {
  active: 'platform' | 'colleges' | 'corporate';
};

type StoreLink = {
  key: StoreSwitcherProps['active'];
  label: string;
  href: string;
};

const storeLinks: StoreLink[] = [
  { key: 'platform', label: 'Custom Store', href: '/platform' },
  { key: 'colleges', label: 'Campus Store', href: '/colleges' },
  { key: 'corporate', label: 'Company Store', href: '/corporate' },
];

const orderByActive: Record<StoreSwitcherProps['active'], StoreSwitcherProps['active'][]> = {
  platform: ['platform', 'colleges', 'corporate'],
  colleges: ['colleges', 'corporate', 'platform'],
  corporate: ['corporate', 'platform', 'colleges'],
};

export default function StoreSwitcher({ active }: StoreSwitcherProps) {
  const orderedLinks = orderByActive[active]
    .map((key) => storeLinks.find((item) => item.key === key))
    .filter(Boolean) as StoreLink[];

  return (
    <div className="lg:hidden sticky top-[calc(4.25rem+env(safe-area-inset-top))] z-30 border-y border-black/10 bg-circle-paper/94 px-3 py-2.5 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-[390px] grid-cols-3 gap-1 rounded-full border border-black/10 bg-white p-1 shadow-[0_14px_35px_rgba(10,10,10,0.08)]">
        {orderedLinks.map((item) => {
          const isActive = item.key === active;
          const className = `flex min-h-10 items-center justify-center rounded-full px-1.5 text-center text-[0.62rem] font-extrabold uppercase leading-none tracking-[0.045em] transition min-[380px]:text-[0.66rem] ${
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

import Link from 'next/link';

/* =====================================================================
   CIRCLE LOGO
   The official Circle mark: a thin ring with a small solid center dot,
   next to the CIRCLE wordmark in wide letter-spacing.
   This is the ONE place the logo is defined. Navbar, Footer and the
   intro animation all use it, so the brand stays perfectly consistent.
   Pass `tone="light"` on dark backgrounds, `tone="dark"` on light ones.
   ===================================================================== */

type Tone = 'light' | 'dark';

export function CircleMark({ tone = 'dark', size = 34 }: { tone?: Tone; size?: number }) {
  const stroke = tone === 'light' ? '#F6F3EE' : '#0A0A0A';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="circle-mark shrink-0"
    >
      <circle cx="50" cy="50" r="46" stroke={stroke} strokeWidth="3.5" />
      <circle cx="50" cy="50" r="8" fill={stroke} />
    </svg>
  );
}

export function CircleLogo({ tone = 'dark', href = '/' }: { tone?: Tone; href?: string }) {
  const text = tone === 'light' ? 'text-circle-cream' : 'text-circle-ink';
  return (
    <Link
      href={href}
      aria-label="Circle — go to homepage"
      className="group focus-ring -ml-1 inline-flex items-center gap-3 rounded-full p-1 no-tap-highlight"
    >
      <span className="transition-transform duration-700 group-hover:rotate-180">
        <CircleMark tone={tone} size={34} />
      </span>
      <span className={`font-sans text-[0.95rem] font-medium tracking-[0.42em] ${text}`}>CIRCLE</span>
    </Link>
  );
}

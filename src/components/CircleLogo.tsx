import Link from 'next/link';

/* =====================================================================
   CIRCLE LOGO - matches the official mark exactly:
   a thin circle outline with a TOP-TO-BOTTOM gradient (dark/near-black at
   the top, fading to light grey at the bottom), with "CIRCLE" in thin,
   wide-spaced letters centred inside.
   ===================================================================== */

type Tone = 'light' | 'dark';

/* Full emblem: circle + CIRCLE inside. Used in intro + footer stamp. */
export function CircleEmblem({ tone = 'dark', size = 120 }: { tone?: Tone; size?: number }) {
  const isLight = tone === 'light';
  const gid = `emblem-grad-${tone}`;
  const top = isLight ? '#FFFFFF' : '#0A0A0A';
  const bottom = isLight ? 'rgba(255,255,255,0.25)' : '#B8B8B8';
  const textColor = isLight ? '#FAFAFA' : '#0A0A0A';
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="93" stroke={`url(#${gid})`} strokeWidth="1.5" />
      <text x="100" y="108" textAnchor="middle" fill={textColor}
        fontFamily="var(--font-inter), Inter, sans-serif" fontSize="30" fontWeight="300" letterSpacing="8">CIRCLE</text>
    </svg>
  );
}

/* Small circle-only mark for the navbar (word sits beside it). */
export function CircleMark({ tone = 'dark', size = 34 }: { tone?: Tone; size?: number }) {
  const isLight = tone === 'light';
  const gid = `mark-grad-${tone}`;
  const top = isLight ? '#FFFFFF' : '#0A0A0A';
  const bottom = isLight ? 'rgba(255,255,255,0.25)' : '#B8B8B8';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id={gid} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke={`url(#${gid})`} strokeWidth="2.4" />
    </svg>
  );
}

export function CircleLogo({ tone = 'dark', href = '/' }: { tone?: Tone; href?: string }) {
  const text = tone === 'light' ? 'text-circle-paper' : 'text-circle-ink';
  return (
    <Link href={href} aria-label="Circle, go to homepage" className="focus-ring inline-flex items-center gap-2.5 rounded-full p-1">
      <CircleMark tone={tone} size={30} />
      <span className={`text-[0.95rem] font-light tracking-[0.4em] ${text}`}>CIRCLE</span>
    </Link>
  );
}

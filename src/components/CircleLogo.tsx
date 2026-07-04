import Link from 'next/link';

/* =====================================================================
   CIRCLE LOGO - matches the official mark:
   a thin circle outline (subtle gradient) with "CIRCLE" in light,
   wide-spaced letters centred inside.
   - CircleEmblem: the full circle-with-word mark (intro + footer).
   - CircleLogo: header lockup (emblem + wordmark), stays readable small.
   Pass tone="light" on dark backgrounds, tone="dark" on light ones.
   ===================================================================== */

type Tone = 'light' | 'dark';

export function CircleEmblem({ tone = 'dark', size = 120 }: { tone?: Tone; size?: number }) {
  const solid = tone === 'light' ? '#FAFAFA' : '#0A0A0A';
  const gradId = `circle-stroke-${tone}`;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true" className="circle-emblem">
      <defs>
        <linearGradient id={gradId} x1="0.7" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={solid} />
          <stop offset="55%" stopColor={solid} stopOpacity={tone === 'light' ? '0.55' : '0.65'} />
          <stop offset="100%" stopColor={solid} stopOpacity={tone === 'light' ? '0.18' : '0.15'} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="92" stroke={`url(#${gradId})`} strokeWidth="1.6" />
      <text
        x="100" y="107"
        textAnchor="middle"
        fill={solid}
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="30"
        fontWeight="300"
        letterSpacing="7"
        style={{ paddingLeft: '7px' }}
      >CIRCLE</text>
    </svg>
  );
}

/* Small circle-only mark for the header (word sits beside it, stays legible). */
export function CircleMark({ tone = 'dark', size = 30 }: { tone?: Tone; size?: number }) {
  const solid = tone === 'light' ? '#FAFAFA' : '#0A0A0A';
  const gradId = `mark-stroke-${tone}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className="circle-mark shrink-0">
      <defs>
        <linearGradient id={gradId} x1="0.7" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor={solid} />
          <stop offset="60%" stopColor={solid} stopOpacity={tone === 'light' ? '0.5' : '0.6'} />
          <stop offset="100%" stopColor={solid} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke={`url(#${gradId})`} strokeWidth="2.2" />
    </svg>
  );
}

export function CircleLogo({ tone = 'dark', href = '/' }: { tone?: Tone; href?: string }) {
  const text = tone === 'light' ? 'text-circle-cream' : 'text-circle-ink';
  return (
    <Link href={href} aria-label="Circle, go to homepage" className="group focus-ring -ml-1 inline-flex items-center gap-3 rounded-full p-1 no-tap-highlight">
      <CircleMark tone={tone} size={30} />
      <span className={`text-[0.95rem] font-light tracking-[0.4em] ${text}`}>CIRCLE</span>
    </Link>
  );
}

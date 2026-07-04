import Link from 'next/link';

/* =====================================================================
   CIRCLE LOGO
   Official site mark: a thin circular outline with the word CIRCLE inside.
   No extra wordmark beside the logo. Use dark on light backgrounds and light
   on dark backgrounds.
   ===================================================================== */

type Tone = 'light' | 'dark';

export function CircleEmblem({ tone = 'dark', size = 58 }: { tone?: Tone; size?: number }) {
  const color = tone === 'light' ? '#FFFFFF' : '#0A0A0A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="3" />
      <text
        x="100"
        y="109"
        textAnchor="middle"
        fill={color}
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="30"
        fontWeight="500"
        letterSpacing="8"
      >
        CIRCLE
      </text>
    </svg>
  );
}

/* Kept for any legacy imports. Use CircleEmblem for the actual logo. */
export function CircleMark({ tone = 'dark', size = 34 }: { tone?: Tone; size?: number }) {
  const color = tone === 'light' ? '#FFFFFF' : '#0A0A0A';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="2.4" />
    </svg>
  );
}

export function CircleLogo({ tone = 'dark', href = '/' }: { tone?: Tone; href?: string }) {
  return (
    <Link href={href} aria-label="Circle, go to homepage" className="focus-ring inline-flex items-center rounded-full p-1">
      <CircleEmblem tone={tone} size={54} />
    </Link>
  );
}

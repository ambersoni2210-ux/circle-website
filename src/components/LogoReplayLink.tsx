'use client';

import Link from 'next/link';
import { CircleMark } from '@/components/CircleLogo';
import { playCircleIntro } from '@/components/IntroAnimation';

/* A logo link that also replays the intro animation when clicked. */
export default function LogoReplayLink({
  tone = 'dark',
  size = 40,
  textClass = '',
  wordSize = 'text-lg',
}: {
  tone?: 'light' | 'dark';
  size?: number;
  textClass?: string;
  wordSize?: string;
}) {
  return (
    <Link
      href="/"
      onClick={() => playCircleIntro()}
      aria-label="Circle — go to homepage"
      className="group focus-ring inline-flex items-center gap-3 rounded-full"
    >
      <CircleMark tone={tone} size={size} />
      <span className={`${wordSize} font-light tracking-[0.4em] ${textClass}`}>CIRCLE</span>
    </Link>
  );
}

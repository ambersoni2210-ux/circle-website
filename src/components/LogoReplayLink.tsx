'use client';

import Link from 'next/link';
import { playCircleIntro } from '@/components/IntroAnimation';

/* Footer logo: clean CIRCLE wordmark that replays the short splash on click. */
export default function LogoReplayLink({
  tone = 'dark',
  wordSize = 'text-2xl',
}: {
  tone?: 'light' | 'dark';
  wordSize?: string;
  size?: number;
  textClass?: string;
}) {
  const color = tone === 'light' ? 'text-circle-paper' : 'text-circle-ink';
  return (
    <Link
      href="/"
      onClick={() => playCircleIntro()}
      aria-label="Circle, go to homepage"
      className={`focus-ring inline-flex items-center rounded-full ${color}`}
    >
      <span className={`font-display font-bold tracking-[0.32em] ${wordSize}`}>CIRCLE</span>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { CircleEmblem } from '@/components/CircleLogo';

/* Logo link for footer and brand surfaces. No extra text next to the mark. */
export default function LogoReplayLink({
  tone = 'dark',
  size = 96,
}: {
  tone?: 'light' | 'dark';
  wordSize?: string;
  size?: number;
  textClass?: string;
}) {
  return (
    <Link href="/" aria-label="Circle, go to homepage" className="focus-ring inline-flex items-center rounded-full p-1">
      <CircleEmblem tone={tone} size={size} />
    </Link>
  );
}

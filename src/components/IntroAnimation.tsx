'use client';

import { useEffect, useState } from 'react';

const TOTAL_MS = 2600;

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving' | 'done'>('hidden');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem('circle-intro-played');
    if (alreadyPlayed || prefersReduced) { setPhase('done'); return; }

    setPhase('playing');
    document.body.classList.add('intro-lock');
    const leaveTimer = window.setTimeout(() => setPhase('leaving'), TOTAL_MS - 650);
    const doneTimer = window.setTimeout(() => {
      setPhase('done');
      document.body.classList.remove('intro-lock');
      sessionStorage.setItem('circle-intro-played', '1');
    }, TOTAL_MS);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove('intro-lock');
    };
  }, []);

  if (phase === 'hidden' || phase === 'done') return null;

  return (
    <div className={`intro-screen ${phase === 'leaving' ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      <div className="intro-inner">
        <svg viewBox="0 0 200 200" className="intro-svg" fill="none">
          <circle className="intro-ring" cx="100" cy="100" r="92" stroke="#F6F3EE" strokeWidth="1.4" />
          <text className="intro-word-svg" x="100" y="107" textAnchor="middle" fill="#F6F3EE"
            fontFamily="var(--font-inter), Inter, sans-serif" fontSize="26" fontWeight="300" letterSpacing="7">CIRCLE</text>
        </svg>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

/* =====================================================================
   INTRO ANIMATION (the black-screen logo reveal)
   On first load: a black screen shows, the Circle ring "draws" itself,
   the center dot and CIRCLE wordmark fade in, then the whole panel lifts
   away to reveal the site.
   - Shows once per browser session (won't replay on every page click).
   - Respects "reduce motion" accessibility settings.
   Duration is controlled by TOTAL_MS below.
   ===================================================================== */

const TOTAL_MS = 2600;

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving' | 'done'>('hidden');

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem('circle-intro-played');

    if (alreadyPlayed || prefersReduced) {
      setPhase('done');
      return;
    }

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
    <div
      className={`intro-screen ${phase === 'leaving' ? 'intro-leaving' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="intro-inner">
        <svg viewBox="0 0 100 100" className="intro-svg" fill="none">
          <circle className="intro-ring" cx="50" cy="50" r="46" stroke="#F6F3EE" strokeWidth="2" />
          <circle className="intro-dot" cx="50" cy="50" r="7" fill="#F6F3EE" />
        </svg>
        <span className="intro-word">CIRCLE</span>
      </div>
    </div>
  );
}

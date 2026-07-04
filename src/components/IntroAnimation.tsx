'use client';

import { useEffect, useState } from 'react';

const TOTAL_MS = 2600;

/* Other components can trigger the intro to replay by calling this. */
export function playCircleIntro() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('circle-intro-replay'));
  }
}

export default function IntroAnimation() {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving' | 'done'>('hidden');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let leaveTimer = 0;
    let doneTimer = 0;

    const run = () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      setPhase('playing');
      document.body.classList.add('intro-lock');
      leaveTimer = window.setTimeout(() => setPhase('leaving'), TOTAL_MS - 650);
      doneTimer = window.setTimeout(() => {
        setPhase('done');
        document.body.classList.remove('intro-lock');
      }, TOTAL_MS);
    };

    // First load: play once per session (unless reduced motion)
    const alreadyPlayed = sessionStorage.getItem('circle-intro-played');
    if (!alreadyPlayed && !prefersReduced) {
      run();
      sessionStorage.setItem('circle-intro-played', '1');
    } else {
      setPhase('done');
    }

    // Replay when the logo is clicked (even if reduced motion, keep it short-safe)
    const onReplay = () => { if (!prefersReduced) run(); };
    window.addEventListener('circle-intro-replay', onReplay);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove('intro-lock');
      window.removeEventListener('circle-intro-replay', onReplay);
    };
  }, []);

  if (phase === 'hidden' || phase === 'done') return null;

  return (
    <div className={`intro-screen ${phase === 'leaving' ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      <div className="intro-emblem" key={phase === 'playing' ? Date.now() : 'static'}>
        <svg viewBox="0 0 200 200" className="intro-svg" fill="none">
          <defs>
            <linearGradient id="intro-grad" x1="0.7" y1="0" x2="0.2" y2="1">
              <stop offset="0%" stopColor="#FAFAFA" />
              <stop offset="60%" stopColor="#FAFAFA" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="92" stroke="url(#intro-grad)" strokeWidth="1.4" />
          <text x="100" y="107" textAnchor="middle" fill="#FAFAFA"
            fontFamily="var(--font-inter), Inter, sans-serif" fontSize="26" fontWeight="300" letterSpacing="7">CIRCLE</text>
        </svg>
      </div>
    </div>
  );
}

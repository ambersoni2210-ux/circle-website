'use client';

import { useEffect, useRef, useState } from 'react';

/* =====================================================================
   TWO-TIER BRAND ANIMATION
   1) LONG INTRO (~8.5s): plays on every fresh load / reload.
      Story: scattered dots (a community) drift, then converge and flow
      into a ring (the Circle), then "CIRCLE" resolves in the centre.
   2) SHORT SPLASH (~2.4s): plays only when the logo is clicked while
      already browsing. Just a black screen with the CIRCLE logo, then
      lands home.
   ===================================================================== */

const LONG_MS = 8500;
const SHORT_MS = 2400;
const CREAM = '#FAFAFA';
const ACCENT = '#2547FF';

/* Trigger the SHORT splash (called by the logo). */
export function playCircleIntro() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('circle-logo-splash'));
  }
}

/* Generate scattered "community" dots that converge onto a ring. */
function useParticles(count: number) {
  const ref = useRef<{ x: number; y: number; tx: number; ty: number; r: number; d: number; accent: boolean }[]>();
  if (!ref.current) {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      // final position: on the ring (radius 92 around centre 100,100)
      const tx = 100 + Math.cos(angle) * 92;
      const ty = 100 + Math.sin(angle) * 92;
      // start position: scattered randomly across the field
      const x = 20 + Math.random() * 160;
      const y = 20 + Math.random() * 160;
      pts.push({
        x, y, tx, ty,
        r: 1.2 + Math.random() * 1.6,
        d: Math.random() * 0.8,      // stagger delay (s)
        accent: Math.random() < 0.14, // a few blue dots
      });
    }
    ref.current = pts;
  }
  return ref.current;
}

export default function IntroAnimation() {
  const [mode, setMode] = useState<'long' | 'short' | null>(null);
  const [leaving, setLeaving] = useState(false);
  const particles = useParticles(52);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let leaveTimer = 0;
    let doneTimer = 0;

    const start = (m: 'long' | 'short') => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      setLeaving(false);
      setMode(m);
      document.body.classList.add('intro-lock');
      const total = m === 'long' ? LONG_MS : SHORT_MS;
      leaveTimer = window.setTimeout(() => setLeaving(true), total - 600);
      doneTimer = window.setTimeout(() => {
        setMode(null);
        setLeaving(false);
        document.body.classList.remove('intro-lock');
      }, total);
    };

    // LONG intro on every load/reload (skip only for reduced motion)
    if (!prefersReduced) {
      start('long');
    }

    // SHORT splash on logo click
    const onSplash = () => { if (!prefersReduced) start('short'); };
    window.addEventListener('circle-logo-splash', onSplash);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove('intro-lock');
      window.removeEventListener('circle-logo-splash', onSplash);
    };
  }, []);

  if (!mode) return null;

  return (
    <div className={`intro-screen ${leaving ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      {mode === 'long' ? (
        <div className="intro-stage">
          <svg viewBox="0 0 200 200" className="intro-svg-lg" fill="none">
            <defs>
              <linearGradient id="intro-ring-grad" x1="0.7" y1="0" x2="0.2" y2="1">
                <stop offset="0%" stopColor={CREAM} />
                <stop offset="60%" stopColor={CREAM} stopOpacity="0.5" />
                <stop offset="100%" stopColor={CREAM} stopOpacity="0.18" />
              </linearGradient>
            </defs>
            {/* particles converging */}
            <g className="intro-particles">
              {particles.map((p, i) => (
                <circle
                  key={i}
                  className="intro-particle"
                  cx={p.x}
                  cy={p.y}
                  r={p.r}
                  fill={p.accent ? ACCENT : CREAM}
                  style={{
                    // CSS custom props consumed by the keyframes
                    ['--tx' as any]: `${p.tx - p.x}px`,
                    ['--ty' as any]: `${p.ty - p.y}px`,
                    animationDelay: `${p.d}s`,
                  }}
                />
              ))}
            </g>
            {/* ring draws in as particles settle */}
            <circle className="intro-ring-lg" cx="100" cy="100" r="92" stroke="url(#intro-ring-grad)" strokeWidth="1.4" />
            {/* wordmark resolves last */}
            <text className="intro-word-lg" x="100" y="107" textAnchor="middle" fill={CREAM}
              fontFamily="var(--font-inter), Inter, sans-serif" fontSize="24" fontWeight="300" letterSpacing="7">CIRCLE</text>
          </svg>
          <p className="intro-tagline">Merchandise that carries belonging</p>
        </div>
      ) : (
        <div className="intro-stage">
          <svg viewBox="0 0 200 200" className="intro-svg-sm" fill="none">
            <defs>
              <linearGradient id="splash-grad" x1="0.7" y1="0" x2="0.2" y2="1">
                <stop offset="0%" stopColor={CREAM} />
                <stop offset="60%" stopColor={CREAM} stopOpacity="0.5" />
                <stop offset="100%" stopColor={CREAM} stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <circle className="splash-ring" cx="100" cy="100" r="92" stroke="url(#splash-grad)" strokeWidth="1.4" />
            <text className="splash-word" x="100" y="107" textAnchor="middle" fill={CREAM}
              fontFamily="var(--font-inter), Inter, sans-serif" fontSize="24" fontWeight="300" letterSpacing="7">CIRCLE</text>
          </svg>
        </div>
      )}
    </div>
  );
}

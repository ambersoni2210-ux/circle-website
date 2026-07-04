'use client';

import { useEffect, useRef, useState } from 'react';

/* =====================================================================
   INTRO ANIMATION (plays every load, ~5.5s)
   Multi-colour dots scatter and drift on black, then converge; lines
   connect them into a ring; CIRCLE appears; dots fade leaving the clean
   logo; tagline "Connecting the Community"; then the site loads.
   Short 1.2s logo splash on logo click.
   ===================================================================== */

const COLORS = ['#2547FF', '#6D4AFF', '#2FA8FF', '#1FB57A', '#FFC93C', '#FF5A5A', '#FAFAFA'];

export function playCircleIntro() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('circle-splash'));
}

export default function IntroAnimation() {
  const [mode, setMode] = useState<'long' | 'short' | null>(null);
  const [leaving, setLeaving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let leaveT = 0, doneT = 0;

    const start = (m: 'long' | 'short') => {
      window.clearTimeout(leaveT); window.clearTimeout(doneT);
      setLeaving(false); setMode(m);
      document.body.classList.add('intro-lock');
      const total = m === 'long' ? 5500 : 1200;
      leaveT = window.setTimeout(() => setLeaving(true), total - 550);
      doneT = window.setTimeout(() => {
        setMode(null); setLeaving(false);
        document.body.classList.remove('intro-lock');
      }, total);
    };

    if (!reduced) start('long');
    else setMode(null);

    const onSplash = () => { if (!reduced) start('short'); };
    window.addEventListener('circle-splash', onSplash);
    return () => {
      window.clearTimeout(leaveT); window.clearTimeout(doneT);
      document.body.classList.remove('intro-lock');
      window.removeEventListener('circle-splash', onSplash);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Canvas particle animation for the long intro
  useEffect(() => {
    if (mode !== 'long') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.clientWidth, H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) * 0.17;
    const N = 46;
    const dots = Array.from({ length: N }, (_, i) => {
      const a = (i / N) * Math.PI * 2;
      return {
        sx: Math.random() * W, sy: Math.random() * H,
        tx: cx + Math.cos(a) * R, ty: cy + Math.sin(a) * R,
        color: COLORS[i % COLORS.length],
        r: 2 + Math.random() * 2,
      };
    });

    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = (now: number) => {
      const el = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      // phase progress
      const conv = Math.min(el / 2.8, 1);          // 0..1 convergence over 2.8s
      const p = ease(conv);
      const lineOpacity = Math.max(0, Math.min((el - 2.2) / 0.8, 1));
      const fade = Math.max(0, Math.min((el - 3.8) / 0.8, 1)); // dots fade after 3.8s

      const pos = dots.map((d) => ({
        x: d.sx + (d.tx - d.sx) * p,
        y: d.sy + (d.ty - d.sy) * p,
        color: d.color, r: d.r,
      }));

      // connecting lines between neighbours on the ring
      if (lineOpacity > 0 && fade < 1) {
        ctx.globalAlpha = lineOpacity * (1 - fade) * 0.5;
        ctx.strokeStyle = '#2547FF'; ctx.lineWidth = 0.6;
        for (let i = 0; i < N; i++) {
          const a = pos[i], b = pos[(i + 1) % N];
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // dots
      dots.forEach((d, i) => {
        const a = pos[i];
        ctx.globalAlpha = 1 - fade;
        ctx.fillStyle = a.color;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;

      if (el < 5.2) rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [mode]);

  if (!mode) return null;

  return (
    <div className={`intro-screen ${leaving ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      {mode === 'long' ? (
        <div className="intro-stage">
          <div className="intro-canvas-wrap">
            <canvas ref={canvasRef} className="intro-canvas" />
            <div className="intro-logo-overlay">
              <svg viewBox="0 0 200 200" className="intro-logo-svg" fill="none">
                <defs>
                  <linearGradient id="intro-g" x1="0.7" y1="0" x2="0.2" y2="1">
                    <stop offset="0%" stopColor="#FAFAFA" />
                    <stop offset="60%" stopColor="#FAFAFA" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0.18" />
                  </linearGradient>
                </defs>
                <circle className="intro-final-ring" cx="100" cy="100" r="92" stroke="url(#intro-g)" strokeWidth="1.4" />
                <text className="intro-final-word" x="100" y="107" textAnchor="middle" fill="#FAFAFA"
                  fontFamily="var(--font-inter), Inter, sans-serif" fontSize="24" fontWeight="300" letterSpacing="7">CIRCLE</text>
              </svg>
            </div>
          </div>
          <p className="intro-tagline">Connecting the Community</p>
        </div>
      ) : (
        <div className="intro-stage">
          <svg viewBox="0 0 200 200" className="intro-logo-svg splash" fill="none">
            <defs>
              <linearGradient id="splash-g" x1="0.7" y1="0" x2="0.2" y2="1">
                <stop offset="0%" stopColor="#FAFAFA" />
                <stop offset="60%" stopColor="#FAFAFA" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <circle className="splash-ring" cx="100" cy="100" r="92" stroke="url(#splash-g)" strokeWidth="1.4" />
            <text className="splash-word" x="100" y="107" textAnchor="middle" fill="#FAFAFA"
              fontFamily="var(--font-inter), Inter, sans-serif" fontSize="24" fontWeight="300" letterSpacing="7">CIRCLE</text>
          </svg>
        </div>
      )}
    </div>
  );
}

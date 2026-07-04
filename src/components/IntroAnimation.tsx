'use client';

import { useEffect, useRef, useState } from 'react';

/* =====================================================================
   INTRO ANIMATION (first load only, ~6s)
   Phase 1: dots (white / blue / grey) drift and settle onto a ring.
   Phase 2: a single line travels dot-to-dot around the ring, drawing the
            circle progressively until it returns to the start.
   Phase 3: dots fade; the official CIRCLE logo + "Connecting the Community"
            hold for ~1.5s+; then the site is revealed.
   No page-transition splash anywhere else.
   ===================================================================== */

const COLORS = ['#FFFFFF', '#2547FF', '#9AA3B2']; // white, blue, grey only

export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setShow(true);
    document.body.classList.add('intro-lock');
    const TOTAL = 6000;
    const leaveT = window.setTimeout(() => setLeaving(true), TOTAL - 550);
    const doneT = window.setTimeout(() => {
      setShow(false); setLeaving(false);
      document.body.classList.remove('intro-lock');
    }, TOTAL);
    return () => {
      window.clearTimeout(leaveT); window.clearTimeout(doneT);
      document.body.classList.remove('intro-lock');
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!show) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.clientWidth, H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) * 0.36;
    const N = 40;
    const dots = Array.from({ length: N }, (_, i) => {
      const a = (i / N) * Math.PI * 2 - Math.PI / 2; // start at top
      return {
        ang: a,
        sx: Math.random() * W, sy: Math.random() * H,
        tx: cx + Math.cos(a) * R, ty: cy + Math.sin(a) * R,
        color: COLORS[i % COLORS.length],
        r: 2 + Math.random() * 1.8,
      };
    });

    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = (now: number) => {
      const el = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      // Phase 1: converge 0..2s
      const conv = ease(Math.min(el / 2, 1));
      const pos = dots.map((d) => ({
        x: d.sx + (d.tx - d.sx) * conv,
        y: d.sy + (d.ty - d.sy) * conv,
      }));

      // Phase 2: line travels around the ring 2.2s..4s
      const lineP = Math.max(0, Math.min((el - 2.2) / 1.8, 1));
      const fade = Math.max(0, Math.min((el - 4.3) / 0.7, 1)); // dots+line fade after 4.3s

      // draw travelling arc (progressive circle) once dots are settled
      if (lineP > 0 && fade < 1) {
        ctx.globalAlpha = (1 - fade);
        ctx.strokeStyle = '#2547FF';
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        const start = -Math.PI / 2;
        ctx.beginPath();
        ctx.arc(cx, cy, R, start, start + Math.PI * 2 * lineP);
        ctx.stroke();
      }

      // dots
      dots.forEach((d, i) => {
        ctx.globalAlpha = (1 - fade) * (0.5 + 0.5 * conv);
        ctx.fillStyle = d.color;
        ctx.beginPath(); ctx.arc(pos[i].x, pos[i].y, d.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;

      if (el < 5.8) rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [show]);

  if (!show) return null;

  return (
    <div className={`intro-screen ${leaving ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      <div className="intro-stage">
        <div className="intro-canvas-wrap">
          <canvas ref={canvasRef} className="intro-canvas" />
          <div className="intro-logo-overlay">
            <svg viewBox="0 0 200 200" className="intro-logo-svg" fill="none">
              <defs>
                <linearGradient id="intro-logo-grad" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.28)" />
                </linearGradient>
              </defs>
              <circle className="intro-final-ring" cx="100" cy="100" r="93" stroke="url(#intro-logo-grad)" strokeWidth="1.5" />
              <text className="intro-final-word" x="100" y="108" textAnchor="middle" fill="#FAFAFA"
                fontFamily="var(--font-inter), Inter, sans-serif" fontSize="30" fontWeight="300" letterSpacing="8">CIRCLE</text>
            </svg>
          </div>
        </div>
        <p className="intro-tagline">Connecting the Community</p>
      </div>
    </div>
  );
}

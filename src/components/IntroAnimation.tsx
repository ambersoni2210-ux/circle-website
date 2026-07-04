'use client';

import { useEffect, useRef, useState } from 'react';

/* =====================================================================
   INTRO ANIMATION
   White lines connect scattered community dots. The completed line stays,
   dots fade out, and the CIRCLE word appears inside the ring while the
   tagline appears at the same time. Final logo + tagline holds for ~2s.
   ===================================================================== */

const DOT_COLORS = ['#FFFFFF', '#2547FF', '#DDE4F2'];

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

    const TOTAL = 5600;
    const leaveT = window.setTimeout(() => setLeaving(true), TOTAL - 520);
    const doneT = window.setTimeout(() => {
      setShow(false);
      setLeaving(false);
      document.body.classList.remove('intro-lock');
    }, TOTAL);

    return () => {
      window.clearTimeout(leaveT);
      window.clearTimeout(doneT);
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

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { W, H };
    };

    const { W, H } = resize();
    const cx = W / 2;
    const cy = H / 2;
    const R = (W >= 560 ? 240 : 200) * 0.46;
    const N = 48;

    const dots = Array.from({ length: N }, (_, i) => {
      const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
      const edge = i % 4;
      const sx = edge === 0 ? -40 : edge === 1 ? W + 40 : Math.random() * W;
      const sy = edge === 2 ? -40 : edge === 3 ? H + 40 : Math.random() * H;
      return {
        angle,
        sx,
        sy,
        tx: cx + Math.cos(angle) * R,
        ty: cy + Math.sin(angle) * R,
        color: DOT_COLORS[i % DOT_COLORS.length],
        r: 2.1 + Math.random() * 1.7,
      };
    });

    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp = (n: number) => Math.max(0, Math.min(n, 1));

    const draw = (now: number) => {
      const t = (now - startTime) / 1000;
      ctx.clearRect(0, 0, W, H);

      const converge = easeOut(clamp((t - 0.2) / 2.1));
      const lineProgress = clamp((t - 0.75) / 2.15);
      const dotFade = 1 - clamp((t - 3.0) / 0.42);

      const positions = dots.map((d) => ({
        x: d.sx + (d.tx - d.sx) * converge,
        y: d.sy + (d.ty - d.sy) * converge,
      }));

      // White line connects the settled dots. Once complete, it stays visible.
      if (lineProgress > 0) {
        const visibleCount = Math.max(2, Math.floor(lineProgress * N));
        ctx.globalAlpha = 0.92;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(positions[0].x, positions[0].y);
        for (let i = 1; i < visibleCount; i += 1) ctx.lineTo(positions[i].x, positions[i].y);
        if (lineProgress >= 1) ctx.closePath();
        ctx.stroke();
      }

      // Dots fade after the line is fully connected.
      dots.forEach((d, i) => {
        ctx.globalAlpha = (0.35 + 0.65 * converge) * dotFade;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(positions[i].x, positions[i].y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      if (t < 5.15) rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className={`intro-screen ${leaving ? 'intro-leaving' : ''}`} aria-hidden="true" role="presentation">
      <div className="intro-stage">
        <div className="intro-canvas-wrap">
          <canvas ref={canvasRef} className="intro-canvas" />
          <div className="intro-logo-overlay">
            <svg viewBox="0 0 200 200" className="intro-logo-svg" fill="none">
              <circle className="intro-final-ring" cx="100" cy="100" r="92" stroke="#FFFFFF" strokeWidth="3" />
              <text
                className="intro-final-word"
                x="100"
                y="109"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="var(--font-inter), Inter, sans-serif"
                fontSize="30"
                fontWeight="500"
                letterSpacing="8"
              >
                CIRCLE
              </text>
            </svg>
          </div>
        </div>
        <p className="intro-tagline">Connecting the Community</p>
      </div>
    </div>
  );
}

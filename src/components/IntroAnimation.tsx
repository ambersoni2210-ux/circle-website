'use client';

import { useEffect, useRef, useState } from 'react';

/* =====================================================================
   INTRO ANIMATION
   Dots first settle into a perfect circle. Only after the circle is formed,
   a white line draws around them, dots fade, then CIRCLE + tagline arrive.
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

    const TOTAL = 6400;
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

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { W, H };
    };

    let { W, H } = setSize();
    let cx = W / 2;
    let cy = H / 2;
    let R = (W >= 560 ? 240 : 200) * 0.46;
    const N = 56;

    const dots = Array.from({ length: N }, (_, i) => {
      const angle = (i / N) * Math.PI * 2 - Math.PI / 2;
      const edge = i % 4;
      const sx = edge === 0 ? -50 : edge === 1 ? W + 50 : Math.random() * W;
      const sy = edge === 2 ? -50 : edge === 3 ? H + 50 : Math.random() * H;
      return {
        angle,
        sx,
        sy,
        tx: cx + Math.cos(angle) * R,
        ty: cy + Math.sin(angle) * R,
        color: DOT_COLORS[i % DOT_COLORS.length],
        r: 2 + Math.random() * 1.6,
      };
    });

    const onResize = () => {
      ({ W, H } = setSize());
      cx = W / 2;
      cy = H / 2;
      R = (W >= 560 ? 240 : 200) * 0.46;
      dots.forEach((dot) => {
        dot.tx = cx + Math.cos(dot.angle) * R;
        dot.ty = cy + Math.sin(dot.angle) * R;
      });
    };
    window.addEventListener('resize', onResize);

    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const clamp = (n: number) => Math.max(0, Math.min(n, 1));

    const draw = (now: number) => {
      const t = (now - startTime) / 1000;
      ctx.clearRect(0, 0, W, H);

      const converge = easeOut(clamp((t - 0.12) / 2.05));
      const ringProgress = easeInOut(clamp((t - 2.35) / 1.05));
      const dotFade = 1 - clamp((t - 3.42) / 0.45);
      const glow = clamp((t - 2.25) / 1.4);

      // Soft glow arrives only once the community circle is almost formed.
      if (glow > 0) {
        const gradient = ctx.createRadialGradient(cx, cy, R * 0.45, cx, cy, R * 1.8);
        gradient.addColorStop(0, `rgba(37, 71, 255, ${0.13 * glow})`);
        gradient.addColorStop(0.62, `rgba(37, 71, 255, ${0.06 * glow})`);
        gradient.addColorStop(1, 'rgba(37, 71, 255, 0)');
        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.75, 0, Math.PI * 2);
        ctx.fill();
      }

      const positions = dots.map((d) => ({
        x: d.sx + (d.tx - d.sx) * converge,
        y: d.sy + (d.ty - d.sy) * converge,
      }));

      // The connection line starts only after the dots are already sitting in a circle.
      if (ringProgress > 0) {
        const start = -Math.PI / 2;
        const end = start + Math.PI * 2 * ringProgress;
        ctx.globalAlpha = 0.96;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2.25;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, cy, R, start, end);
        ctx.stroke();

        // A small travelling light makes the connection feel intentional, not like a polygon.
        if (ringProgress < 1) {
          const sx = cx + Math.cos(end) * R;
          const sy = cy + Math.sin(end) * R;
          ctx.globalAlpha = 0.98;
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 16;
          ctx.beginPath();
          ctx.arc(sx, sy, 3.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Dots fade only after the circle connection has completed.
      dots.forEach((d, i) => {
        ctx.globalAlpha = (0.28 + 0.72 * converge) * dotFade;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(positions[i].x, positions[i].y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      if (t < 5.9) rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', onResize);
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
                fontFamily="var(--font-space), Outfit, sans-serif"
                fontSize="30"
                fontWeight="600"
                letterSpacing="7.5"
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

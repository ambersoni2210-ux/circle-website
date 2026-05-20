'use client';

import { useEffect, useState } from 'react';

export default function LoadingIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-circle-black text-white" aria-hidden="true">
      <div className="relative flex h-48 w-48 animate-circle-reveal items-center justify-center rounded-full border border-white/80 sm:h-64 sm:w-64">
        <div className="absolute inset-6 rounded-full border border-white/20" />
        <div className="h-5 w-5 rounded-full bg-white" />
        <span className="absolute -bottom-14 text-xs font-semibold tracking-[0.42em]">CIRCLE</span>
      </div>
    </div>
  );
}

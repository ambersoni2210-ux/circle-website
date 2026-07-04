'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* A subtle ~1.1s Circle logo wipe on each route change (not on first load,
   the intro handles that). Kept short and non-blocking so it feels
   professional, not annoying. Respects reduced motion. */
export default function PageTransition() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 1100);
    return () => window.clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return (
    <div className="page-transition" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="#FAFAFA" strokeWidth="2" />
        <circle cx="50" cy="50" r="7" fill="#FAFAFA" />
      </svg>
    </div>
  );
}

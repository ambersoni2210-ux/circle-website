'use client';

import Image from 'next/image';
import { scrollImages } from '@/config/images';

/* Continuous horizontal image loop. Duplicated for seamless wrap. */
export default function ScrollingGallery() {
  const loop = [...scrollImages, ...scrollImages];
  return (
    <div className="scroll-gallery" aria-hidden="true">
      <div className="scroll-track">
        {loop.map((img, i) => (
          <div key={i} className="scroll-item">
            <Image src={img.src} alt="" width={280} height={350} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

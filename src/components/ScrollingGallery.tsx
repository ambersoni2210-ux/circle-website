'use client';

import Image from 'next/image';
import { productImages } from '@/config/images';

/* Continuous horizontal image loop (marquee). Duplicated once so the
   scroll wraps seamlessly. Pauses on hover. */
export default function ScrollingGallery() {
  const keys = [
    'premiumHoodie', 'steelBottle', 'varsityJacket', 'cap', 'sportsJersey',
    'ceramicMug', 'backpack', 'notebookDiary', 'oversizedTshirt', 'tumbler',
  ];
  const items = keys.map((k) => productImages[k]).filter(Boolean);
  const loop = [...items, ...items];

  return (
    <div className="scroll-gallery" aria-hidden="true">
      <div className="scroll-track">
        {loop.map((img, i) => (
          <div key={i} className="scroll-item">
            <Image src={img.src} alt="" width={340} height={425} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

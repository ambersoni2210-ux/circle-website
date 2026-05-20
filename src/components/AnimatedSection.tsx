'use client';

import { useInView } from '@/hooks/useInView';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView(0.1);

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'fade-in': {
      initial: 'opacity-0',
      visible: 'opacity-100',
    },
    'slide-left': {
      initial: 'opacity-0 translate-x-16',
      visible: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      initial: 'opacity-0 -translate-x-16',
      visible: 'opacity-100 translate-x-0',
    },
    'scale-in': {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const { initial, visible } = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? visible : initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

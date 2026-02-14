'use client';

import { ReactNode } from 'react';

interface PerspectiveWrapperProps {
  children: ReactNode;
  rotateY?: number;
  className?: string;
}

export default function PerspectiveWrapper({ children, rotateY = 0, className = '' }: PerspectiveWrapperProps) {
  return (
    <div
      className={className}
      style={{ transform: `perspective(1000px) rotateY(${rotateY}deg)` }}
    >
      {children}
    </div>
  );
}

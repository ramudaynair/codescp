'use client';

import { useEffect, useState } from 'react';

export default function DottedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(42, 154, 214, 0.1), transparent 70%)`,
        }}
      />
    </div>
  );
}

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'slate';
}

export default function Section({ children, className = '', background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    slate: 'bg-slate-50',
  };

  return (
    <section className={`py-20 md:py-28 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}

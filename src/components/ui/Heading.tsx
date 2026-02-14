'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const styles = {
    1: 'text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight',
    2: 'text-4xl md:text-5xl font-bold tracking-tight',
    3: 'text-3xl md:text-4xl font-bold tracking-tight',
    4: 'text-2xl md:text-3xl font-bold tracking-tight',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag className={`${styles[level]} text-[#0F172A] ${className}`}>
        {children}
      </Tag>
    </motion.div>
  );
}

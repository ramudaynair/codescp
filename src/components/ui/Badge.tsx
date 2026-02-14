'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[#F6F7FB] text-[#374151] border border-[#E5E7EB]',
    dark: 'bg-[#0F172A] text-white',
  };

  return (
    <motion.span 
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}

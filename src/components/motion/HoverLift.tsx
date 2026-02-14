'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverLiftProps {
  children: ReactNode;
  lift?: number;
  className?: string;
}

export default function HoverLift({ children, lift = 8, className = '' }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

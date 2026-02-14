'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'glassy';
  size?: 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center border relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl',
    secondary: 'bg-indigo-500/10 text-indigo-600 border-0 hover:bg-indigo-500/20',
    outline: 'bg-white border-2 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50',
    glassy: 'glass-button text-white font-medium',
  };

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ 
        scale: variant === 'primary' ? 1.05 : 1.02,
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
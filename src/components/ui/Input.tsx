'use client';

import { motion } from 'framer-motion';

interface InputProps {
  label?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-[#0F172A] mb-2">{label}</label>}
      <motion.input
        className={`w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent transition-all ${className}`}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        {...(props as any)}
      />
    </div>
  );
}

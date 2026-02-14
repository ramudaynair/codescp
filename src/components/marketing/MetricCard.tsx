'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function MetricCard({ value, label, className = '' }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className={`p-8 text-center ${className}`}>
        <motion.div 
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {value}
        </motion.div>
        <div className="text-sm text-slate-600 font-medium">{label}</div>
      </Card>
    </motion.div>
  );
}

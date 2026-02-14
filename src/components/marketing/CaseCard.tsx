'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface CaseCardProps {
  title: string;
  description: string;
  tags?: string[];
  className?: string;
}

export default function CaseCard({ title, description, tags, className = '' }: CaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className={`p-8 ${className}`}>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-4 tracking-tight">{title}</h3>
        <p className="text-base text-[#374151] mb-6 leading-relaxed">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Card from '@/components/ui/Card';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
        >
          <Card className="p-8 h-full">
            <motion.div 
              className="w-14 h-14 bg-[#2A9AD6] rounded-xl flex items-center justify-center text-white mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-base text-[#374151] leading-relaxed">{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

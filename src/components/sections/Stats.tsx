'use client';

import { motion } from 'framer-motion';
import MetricCard from '@/components/marketing/MetricCard';
import Container from '@/components/ui/Container';

export default function Stats() {
  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F6F7FB]">
      <Container>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <MetricCard value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CaseHighlight() {
  return (
    <section className="py-40 md:py-56 bg-[#F6F7FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#0F172A] tracking-tight leading-none">E-Commerce Success Story</h2>
          <p className="text-2xl text-[#374151] max-w-3xl mx-auto leading-relaxed">
            We transformed a traditional retail business into a thriving online store
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#0F172A] p-20 md:p-24 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-center"
              >
                <div className="text-8xl md:text-9xl font-extrabold mb-6 tracking-tighter">200%</div>
                <div className="text-2xl text-[#E5E7EB] font-medium">Traffic Increase</div>
              </motion.div>
            </div>

            <div className="p-20 md:p-24 flex flex-col justify-center bg-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xl text-[#374151] mb-12 leading-relaxed">
                  A seamless e-commerce platform that doubled their traffic and significantly increased conversions within the first quarter.
                </p>
                <Link href="/projects">
                  <Button size="lg">View More Projects</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

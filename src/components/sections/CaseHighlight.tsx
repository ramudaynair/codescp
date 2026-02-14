'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CaseHighlight() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-slate-900 tracking-tight">E-Commerce Success Story</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We transformed a traditional retail business into a thriving online store
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 p-16 md:p-24 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-center"
              >
                <div className="text-7xl md:text-8xl font-extrabold mb-4 tracking-tighter">200%</div>
                <div className="text-xl text-slate-200 font-medium">Traffic Increase</div>
              </motion.div>
            </div>

            <div className="p-16 md:p-24 flex flex-col justify-center bg-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg text-slate-700 mb-10 leading-relaxed">
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

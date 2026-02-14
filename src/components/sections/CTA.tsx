'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-40 md:py-56 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-none">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-2xl text-[#E5E7EB] mb-16 max-w-3xl mx-auto leading-relaxed">
            Let's create something amazing together. Your success is our commitment.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact">
              <Button className="bg-white text-[#0F172A] hover:bg-[#F6F7FB] border-white shadow-xl" size="lg">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

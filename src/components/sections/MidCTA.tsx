'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function MidCTA() {
  return (
    <section className="py-32 md:py-40 bg-[#F6F7FB]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-[#E5E7EB] rounded-3xl p-12 md:p-16 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0F172A] tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#374151] mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your digital presence and drive real results for your business.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact">
              <Button size="lg" className="text-base px-10 py-4">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

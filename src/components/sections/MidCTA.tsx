'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function MidCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-3xl p-12 md:p-16 text-center shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
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

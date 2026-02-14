'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F6F7FB] via-white to-[#F6F7FB]">
      <div className="text-center px-4">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-[#0F172A] mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-xl text-[#374151] mb-8 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/">
            <Button size="lg">Go Back Home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
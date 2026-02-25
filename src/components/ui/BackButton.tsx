'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#374151] dark:text-slate-300 hover:text-[#2A9AD6] dark:hover:text-sky-400 transition-colors"
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </motion.button>
  );
}

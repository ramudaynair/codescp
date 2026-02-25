'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const title1 = "Where Creativity";
  const title2 = "Meets Technology";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-8">
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 glass rounded-full shadow-lg">
            <div className="w-2 h-2 bg-sky-500 rounded-full" />
            <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">CODESCAPE</span>
          </div>
          <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-10 leading-[1.15] tracking-tighter pb-6">
            <div className="text-[#0F172A]">{title1}</div>
            <div className="text-sky-500">{title2}</div>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#374151] mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Your Success is our Mission
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-12 py-5">Get Started</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-hidden pt-16 pb-8">
      
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 glass rounded-full shadow-lg"
        >
          <motion.div
            className="w-2 h-2 bg-sky-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">CODESCAPE</span>
        </motion.div>

        <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-10 leading-[1.15] tracking-tighter pb-6">
          <div className="overflow-visible pb-2">
            {title1.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[#0F172A]"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <div className="overflow-visible pb-4">
            {title2.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i + title1.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-sky-500"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-[#374151] mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Your Success is our Mission
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/contact">
            <Button size="lg" className="text-lg px-12 py-5">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export default function Hero() {
  const title1 = "Where Creativity";
  const title2 = "Meets Technology";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F6F7FB] to-white pt-16">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(42, 154, 214, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 glass rounded-full shadow-lg"
        >
          <motion.div 
            className="w-2 h-2 bg-[#2A9AD6] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">CODESCAPE</span>
        </motion.div>
        
        <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-10 leading-[0.95] tracking-tighter">
          <div className="overflow-hidden">
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
          <div className="overflow-hidden">
            {title2.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i + title1.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[#2A9AD6]"
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
          We believe that a well established digital presence is the cornerstone of any successful online presence.
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

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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 3 + i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (!mounted) {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-8">
        <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 mb-10 px-4 py-2 glass dark:bg-slate-800 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform group"
          >
            <div className="w-2 h-2 bg-sky-500 rounded-full" />
            <span className="text-xs font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">CODESCAPE</span>
            <div className="ml-1 text-[#0F172A] dark:text-white">
              {theme === 'light' ? (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </div>
          </button>
          <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-10 leading-[1.15] tracking-tighter pb-6">
            <div className="text-[#0F172A] dark:text-slate-100">{title1}</div>
            <div className="text-sky-500">{title2}</div>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#374151] dark:text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
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
        <motion.button
          onClick={toggleTheme}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 glass dark:bg-slate-800 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform group"
        >
          <motion.div
            className="w-2 h-2 bg-sky-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-bold text-[#0F172A] dark:text-white uppercase tracking-wider">CODESCAPE</span>
          <div className="ml-1 text-[#0F172A] dark:text-white">
            {theme === 'light' ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </div>
        </motion.button>

        <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-10 leading-[1.15] tracking-tighter pb-6">
          <div className="overflow-visible pb-2">
            {title1.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-[#0F172A] dark:text-slate-100"
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
          transition={{ duration: 0.8, delay: 4.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-[#374151] dark:text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Your Success is our Mission
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/contact">
            <Button size="lg" className="text-lg px-12 py-5">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

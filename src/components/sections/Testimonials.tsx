'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'CODESCAPE transformed our legacy systems into a modern, scalable platform. Their expertise is unmatched.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
    },
    {
      quote: 'The team delivered beyond our expectations. Professional, innovative, and reliable.',
      author: 'Michael Rodriguez',
      role: 'VP Engineering, InnovateLabs',
    },
    {
      quote: 'Working with CODESCAPE was a game-changer for our business. Highly recommended.',
      author: 'Emily Watson',
      role: 'CEO, DataFlow',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-slate-900 dark:text-slate-100 tracking-tight leading-tight">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Trusted by teams around the world
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Card className="p-10 h-full flex flex-col justify-between">
                <p className="text-xl mb-8 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  &quot;{testimonials[current].quote}&quot;
                </p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1">{testimonials[current].author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[current].role}</p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-sky-500 w-8' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

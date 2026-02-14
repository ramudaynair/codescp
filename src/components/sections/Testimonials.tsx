'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

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

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-slate-900 tracking-tight leading-tight">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Trusted by teams around the world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 h-full">
              <p className="text-lg mb-8 text-slate-700 leading-relaxed font-medium">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-slate-900 text-base mb-1">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

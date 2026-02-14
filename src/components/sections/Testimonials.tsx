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
    <section className="py-40 md:py-56 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#0F172A] tracking-tight leading-none">What Our Clients Say</h2>
          <p className="text-2xl text-[#374151] leading-relaxed">
            Trusted by teams around the world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-12 h-full">
              <p className="text-xl mb-10 text-[#374151] leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-[#0F172A] text-lg mb-1">{testimonial.author}</p>
                <p className="text-base text-[#6B7280]">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does CODESCAPE offer?',
      answer: 'We offer comprehensive digital solutions including web design & development, e-commerce solutions, mobile app development, and digital marketing services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, while larger applications may take 3-6 months.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes, we offer comprehensive post-launch support and maintenance packages to ensure your digital presence continues to perform optimally.',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with regular client communication, iterative development, and thorough testing to ensure quality delivery.',
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely. We specialize in integrating with existing systems and can modernize legacy platforms while maintaining business continuity.',
    },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</span>
                <motion.svg
                  className="w-6 h-6 text-indigo-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-base text-slate-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

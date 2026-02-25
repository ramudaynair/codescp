'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPreview() {
  const team = [
    {
      name: 'Samuel Saji',
      role: 'CEO/Founder',
      image: '/1751171842039.jpg',
    },
    {
      name: 'Joel Saji',
      role: 'Frontend Developer',
      image: '/1771430023534.jpg',
    },
    {
      name: 'Jithin MP',
      role: 'Backend Developer',
      image: '/1771430028252.jpg',
    },
    {
      name: 'Eldho G Blayil',
      role: 'Social Media Manager',
      image: '/1751172353463.jpg',
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-slate-100 tracking-tight">Meet Our Team</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Expert engineers and innovators driving excellence
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-8 text-center h-full">
                <motion.div 
                  className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden bg-sky-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-slate-100 tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {member.role}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <Link href="/about" className="text-sky-500 hover:text-sky-600 font-semibold text-base inline-flex items-center gap-2 transition-colors group">
            Meet the Full Team
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

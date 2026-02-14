'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function TeamPreview() {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'Chief Technology Officer',
      expertise: 'Cloud Architecture & AI',
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Engineering',
      expertise: 'Full-Stack Development',
    },
    {
      name: 'James Chen',
      role: 'Lead DevOps Engineer',
      expertise: 'Infrastructure & Automation',
    },
    {
      name: 'Sarah Williams',
      role: 'Principal Software Architect',
      expertise: 'System Design & Scalability',
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-[#F6F7FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Meet Our Team</h2>
          <p className="text-xl text-[#374151] leading-relaxed">
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
                  className="w-24 h-24 bg-[#2A9AD6] rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A] tracking-tight">{member.name}</h3>
                <p className="text-sm font-semibold text-[#6B7280] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#374151]">
                  {member.expertise}
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
          <Link href="/about" className="text-[#2A9AD6] hover:text-[#2388C0] font-semibold text-base inline-flex items-center gap-2 transition-colors group">
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

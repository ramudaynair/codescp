'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Full Stack Engineer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Machine Learning Engineer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      location: 'Hybrid',
      type: 'Full-time',
    },
  ];

  return (
    <PageContainer>
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Join Our Team</h1>
        <p className="text-xl text-[#374151] leading-relaxed">
          Build the future with a team that values innovation, collaboration, and excellence.
        </p>
      </motion.div>

      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0F172A] tracking-tight">Our Culture</h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            { emoji: '🚀', title: 'Innovation First', desc: 'We encourage experimentation and embrace new technologies.' },
            { emoji: '🤝', title: 'Collaborative', desc: 'Great ideas come from diverse perspectives working together.' },
            { emoji: '🌱', title: 'Growth Focused', desc: 'Continuous learning and professional development are core values.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 text-center h-full">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0F172A] tracking-tight">{item.title}</h3>
                <p className="text-[#374151] leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0F172A] tracking-tight">Open Positions</h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0F172A] tracking-tight">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-[#6B7280]">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button variant="outline">Apply</Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </PageContainer>
  );
}

'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'E-commerce Solutions',
      description: 'Complete redesign and development of a modern e-commerce platform with enhanced user experience and conversion optimization.',
    },
    {
      title: 'Corporate Website Development',
      category: 'Web Development',
      description: 'Professional corporate website with responsive design, content management system, and SEO optimization.',
    },
    {
      title: 'Mobile App for Service Booking',
      category: 'App Development',
      description: 'Cross-platform mobile application for seamless service booking with real-time updates and payment integration.',
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategy including SEO, social media, and content marketing for brand growth.',
    },
    {
      title: 'Restaurant Website & Ordering System',
      category: 'Web Development',
      description: 'Custom website with integrated online ordering system and table reservation functionality.',
    },
    {
      title: 'Portfolio Website for Creative Agency',
      category: 'Web Designing',
      description: 'Visually stunning portfolio website showcasing creative work with smooth animations and intuitive navigation.',
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Our Projects</h1>
        <p className="text-xl text-[#374151] leading-relaxed">
          Transforming ideas into successful digital solutions across industries.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Card className="p-8 h-full cursor-pointer">
              <div className="text-sm font-semibold text-[#2A9AD6] mb-3">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A] tracking-tight">{project.title}</h3>
              <p className="text-[#374151] leading-relaxed">{project.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}

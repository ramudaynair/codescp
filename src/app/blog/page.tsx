'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';

export default function BlogPage() {
  const articles = [
    {
      title: 'The Future of Cloud-Native Architecture',
      date: 'March 15, 2024',
      excerpt: 'Exploring emerging patterns in microservices and serverless computing.',
      readTime: '8 min read',
    },
    {
      title: 'Building Scalable AI Systems',
      date: 'March 10, 2024',
      excerpt: 'Best practices for deploying machine learning models in production.',
      readTime: '12 min read',
    },
    {
      title: 'Security-First Development',
      date: 'March 5, 2024',
      excerpt: 'Integrating security practices throughout the software development lifecycle.',
      readTime: '10 min read',
    },
    {
      title: 'Modern Frontend Architecture',
      date: 'February 28, 2024',
      excerpt: 'Leveraging Next.js and React for performant web applications.',
      readTime: '7 min read',
    },
    {
      title: 'DevOps Culture Transformation',
      date: 'February 20, 2024',
      excerpt: 'How to build high-performing engineering teams through DevOps practices.',
      readTime: '9 min read',
    },
    {
      title: 'API Design Principles',
      date: 'February 15, 2024',
      excerpt: 'Creating robust, developer-friendly APIs that stand the test of time.',
      readTime: '11 min read',
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Blog</h1>
        <p className="text-xl text-[#374151] leading-relaxed">
          Insights and perspectives from our engineering team.
        </p>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto space-y-8"
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
        {articles.map((article, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Card className="p-8 cursor-pointer">
              <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-3">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#0F172A] tracking-tight">{article.title}</h2>
              <p className="text-lg text-[#374151] leading-relaxed">{article.excerpt}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}

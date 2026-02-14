'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Designing & Development',
      description: 'We craft captivating websites that combine stunning visual design with seamless functionality. Our web solutions are built to capture attention, engage visitors, and drive measurable results for your business. From responsive layouts to intuitive user experiences, we create digital presences that stand out.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Our seamless e-commerce solutions transform your online store into a powerful sales engine. We build secure, scalable platforms that deliver exceptional shopping experiences, streamline operations, and maximize conversions. From product catalogs to payment integration, we handle every detail.',
    },
    {
      title: 'App Development',
      description: 'We create cutting-edge mobile applications that transform your ideas into immersive digital experiences. Our app development expertise spans iOS and Android platforms, delivering intuitive interfaces and robust functionality that keeps users engaged and coming back.',
    },
    {
      title: 'Digital Marketing',
      description: 'Our strategic digital marketing solutions amplify your brand presence and connect you with your target audience. From SEO and content marketing to social media campaigns, we drive visibility, engagement, and growth across all digital channels.',
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Our Services</h1>
        <p className="text-xl text-[#374151] leading-relaxed">
          Comprehensive digital solutions that drive results and transform your online presence.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Card className="p-10 h-full">
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A] tracking-tight">{service.title}</h3>
              <p className="text-[#374151] leading-relaxed">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}

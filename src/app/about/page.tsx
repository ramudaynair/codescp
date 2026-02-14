'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-8 text-center text-[#0F172A] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          About CODESCAPE
        </motion.h1>
        
        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-8 md:p-12">
              <p className="text-xl text-[#374151] mb-6 leading-relaxed">
                CODESCAPE is an engineering-first technology partner. We specialize in crafting captivating websites, seamless e-commerce solutions, and cutting-edge app developments. Our passion extends beyond code; it&apos;s about transforming ideas into immersive digital experiences.
              </p>
              <p className="text-xl text-[#374151] leading-relaxed">
                Join us on a journey where innovation meets functionality. At CODESCAPE, we&apos;re not just a service provider; we&apos;re your digital partner, dedicated to transforming possibilities into realities.
              </p>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0F172A] tracking-tight">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="p-8 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A] tracking-tight">Our Mission</h3>
                  <p className="text-[#374151] leading-relaxed">
                    To deliver value through innovation, technological excellence and quality, ensuring every CODESCAPE solution is reliable, scalable, and impactful.
                  </p>
                </Card>
              </motion.div>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="p-8 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-[#0F172A] tracking-tight">Our Vision</h3>
                  <p className="text-[#374151] leading-relaxed">
                    To be a leading and trusted technology partner, recognized for innovation, quality, and an enduring passion for excellence.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0F172A] tracking-tight">Our Approach</h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
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
              {[
                { title: 'Innovation First', desc: 'Transforming ideas into immersive digital experiences through cutting-edge technology.' },
                { title: 'Client Success', desc: 'Your success is our commitment, driving every decision and solution we create.' },
                { title: 'Digital Partnership', desc: "We're your dedicated partner in transforming possibilities into realities." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-bold mb-3 text-[#0F172A] tracking-tight">{item.title}</h3>
                    <p className="text-[#374151] leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#0F172A] tracking-tight">Our Team</h2>
            <Card className="p-8">
              <p className="text-lg text-[#374151] text-center leading-relaxed">
                A passionate team of designers, developers, and digital strategists committed to your success.
              </p>
            </Card>
          </motion.section>
        </div>
      </div>
    </PageContainer>
  );
}

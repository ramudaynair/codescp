'use client';

import { motion } from 'framer-motion';
import PageContainer from '@/components/ui/PageContainer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <PageContainer>
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F172A] tracking-tight">Get In Touch</h1>
          <p className="text-xl text-[#374151] leading-relaxed">
            Let&apos;s discuss how we can help transform your digital presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#0F172A]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#0F172A]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2 text-[#0F172A]">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent outline-none transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-[#0F172A]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#0F172A]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:ring-2 focus:ring-[#2A9AD6] focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-12 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <h3 className="font-bold mb-2 text-[#0F172A]">Phone</h3>
            <p className="text-[#374151]">+91 8921258262</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <h3 className="font-bold mb-2 text-[#0F172A]">Email</h3>
            <p className="text-[#374151]">contact@thecodescape.in</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
            <h3 className="font-bold mb-2 text-[#0F172A]">Location</h3>
            <p className="text-[#374151]">Muvattupuzha, Ernakulam, Kerala</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#374151]">
            Follow us on Instagram:{' '}
            <a href="https://instagram.com/thecodescape" target="_blank" rel="noopener noreferrer" className="text-[#2A9AD6] hover:text-[#2388C0] font-semibold transition-colors">
              @thecodescape
            </a>
          </p>
        </motion.div>
      </div>
    </PageContainer>
  );
}

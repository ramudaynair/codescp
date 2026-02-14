'use client';

import { motion } from 'framer-motion';

export default function ClientLogos() {
  const clients = [
    'TechCorp',
    'InnovateLabs',
    'DataFlow',
    'CloudScale',
    'NextGen',
    'FutureStack',
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F6F7FB] border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center"
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
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <motion.div 
                className="text-2xl font-bold text-[#6B7280] transition-colors duration-300"
                whileHover={{ scale: 1.05, color: '#374151' }}
                transition={{ duration: 0.2 }}
              >
                {client}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
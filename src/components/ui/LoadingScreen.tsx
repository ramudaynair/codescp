'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex flex-col items-center justify-center"
        >
          {/* Dot Grid Loader */}
          <div className="loader mb-12"></div>

          {/* Text Below */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">CODESCAPE</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-slate-600 dark:text-slate-300 text-sm"
            >
              Where Creativity Meets Technology
            </motion.p>
          </motion.div>

          <style jsx>{`
            .loader {
              width: 4px;
              color: #0ea5e9;
              aspect-ratio: 1;
              border-radius: 50%;
              box-shadow: 
                19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
                19px 0     0 5px, 38px 0     0 5px, 57px 0     0 5px,
                19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px;
              transform: translateX(-38px);
              animation: l26 2s infinite linear;
            }
            @keyframes l26 {
              12.5% {box-shadow: 
                19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 5px,
                19px 0     0 5px, 38px 0     0 0px, 57px 0     0 5px,
                19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px}
              25%   {box-shadow: 
                19px -19px 0 5px, 38px -19px 0 0px, 57px -19px 0 5px,
                19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
                19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 0px}
              50%   {box-shadow: 
                19px -19px 0 5px, 38px -19px 0 5px, 57px -19px 0 0px,
                19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
                19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
              62.5% {box-shadow: 
                19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
                19px 0     0 5px, 38px 0     0 0px, 57px 0     0 0px,
                19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 5px}
              75%   {box-shadow: 
                19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
                19px 0     0 0px, 38px 0     0 5px, 57px 0     0 0px,
                19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
              87.5% {box-shadow: 
                19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
                19px 0     0 0px, 38px 0     0 5px, 57px 0     0 0px,
                19px 19px  0 5px, 38px 19px  0 0px, 57px 19px  0 0px}
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

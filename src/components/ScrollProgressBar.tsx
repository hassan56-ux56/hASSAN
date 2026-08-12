import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      setIsFooter(currentProgress >= 96);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      {!isFooter ? (
        /* Top Golden Progress Line */
        <div className="relative w-full h-1 bg-black/5 dark:bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#294A37] via-[#F5B21A] to-[#FFB51B] shadow-[0_0_12px_#FFB51B]"
            style={{ width: `${scrollProgress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          />
        </div>
      ) : (
        /* Transformed Glowing Dot at Footer Reach */
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#FFB51B]/40 bg-[#0C1D15]/80 text-[#FFB51B] backdrop-blur-md text-xs font-sans font-medium"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFB51B] animate-ping" />
          <span>PORTFOLIO REACHED • 100%</span>
        </motion.div>
      )}
    </div>
  );
};

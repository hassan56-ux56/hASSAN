import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import researcherImg from '../assets/images/aima_anime_researcher_1786546200334.jpg';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const floatingLabels = [
    { text: 'PUBLIC HEALTH', top: '12%', left: '-8%' },
    { text: 'DATA ANALYSIS', top: '28%', right: '-12%' },
    { text: 'CLIMATE HEALTH', bottom: '22%', left: '-10%' },
    { text: 'COMMUNITY', bottom: '10%', right: '-6%' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column: Editorial Typography & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Top Category Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#294A37]/20 dark:border-[#FFB51B]/30 bg-[#FFF9ED]/60 dark:bg-[#0C1D15]/60 backdrop-blur-md text-xs font-sans font-medium tracking-widest text-[#294A37] dark:text-[#FFB51B] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5B21A]" />
            <span>PUBLIC HEALTH • RESEARCH • DATA</span>
          </motion.div>

          {/* Dominant Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-serif font-bold tracking-tight leading-[0.95] text-[#050505] dark:text-[#F5F0E5]">
              AIMA <br />
              <span className="text-[#294A37] dark:text-[#FFB51B]">NAWAZ</span>
            </h1>
            <p className="text-sm sm:text-base font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F] pt-2">
              PUBLIC HEALTH RESEARCHER & DATA ANALYST
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl font-sans text-[#050505]/80 dark:text-[#F5F0E5]/80 max-w-2xl leading-relaxed font-light"
          >
            "{PORTFOLIO_DATA.personalInfo.tagline}"
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#research"
              className="px-8 py-4 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#183728] dark:hover:bg-[#FFC64D] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              data-cursor="WORK"
            >
              EXPLORE MY WORK
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border border-[#294A37] dark:border-[#FFB51B] text-[#294A37] dark:text-[#FFB51B] font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#294A37] hover:text-[#FFF9ED] dark:hover:bg-[#FFB51B] dark:hover:text-[#07120D] transition-all duration-300 cursor-pointer"
              data-cursor="HELLO"
            >
              <span>LET'S CONNECT</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Layered 2.5D Anime Researcher Artwork with Parallax */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-md aspect-[3/4]"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {/* Background Shape Frame */}
            <div className="absolute inset-4 rounded-3xl bg-[#294A37] dark:bg-[#0C1D15] transform -rotate-3 border border-[#F5B21A]/30 shadow-2xl" />
            
            {/* Secondary Golden Offset Accent */}
            <div className="absolute inset-0 rounded-3xl border-2 border-[#F5B21A] transform rotate-2 pointer-events-none" />

            {/* Anime Character Artwork Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-[#F5B21A]/40 shadow-xl bg-[#FFF9ED] dark:bg-[#0A2418]">
              <img
                src={researcherImg || "/images/aima_anime_researcher.jpg"}
                alt="Aima Nawaz - Public Health Researcher Anime Character"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              
              {/* Subtle Ambient Golden Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07120D]/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Character Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-[#0C1D15]/80 backdrop-blur-md border border-[#FFB51B]/30 text-[#FFF9ED]">
                <p className="text-xs font-serif font-bold text-[#FFB51B]">AIMA NAWAZ</p>
                <p className="text-[10px] font-sans text-[#FFF9ED]/80">Public Health & Data Researcher</p>
              </div>
            </div>

            {/* Floating Pill Labels with Cursor Parallax */}
            {floatingLabels.map((label, idx) => (
              <motion.div
                key={label.text}
                style={{
                  top: label.top,
                  left: label.left,
                  right: label.right,
                  bottom: label.bottom,
                  transform: `translate(${mousePos.x * (idx + 1) * 15}px, ${mousePos.y * (idx + 1) * 15}px)`,
                }}
                className="absolute z-20 px-3.5 py-1.5 rounded-full bg-[#FFF9ED]/90 dark:bg-[#0C1D15]/90 border border-[#294A37]/20 dark:border-[#FFB51B]/40 text-[11px] font-sans font-bold tracking-wider text-[#294A37] dark:text-[#FFB51B] shadow-lg backdrop-blur-md pointer-events-auto"
              >
                {label.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#050505]/60 dark:text-[#F5F0E5]/60 mb-2">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[#294A37]/40 dark:border-[#FFB51B]/40 flex justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-[#F5B21A]" />
        </motion.div>
      </div>
    </section>
  );
};

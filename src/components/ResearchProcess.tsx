import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ResearchProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
            05 • METHODOLOGY & RIGOR
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5]">
            RESEARCH <span className="text-[#294A37] dark:text-[#FFB51B]">PROCESS</span>
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#050505]/75 dark:text-[#F5F0E5]/75">
            A systematic 6-stage scientific workflow transforming public health problems into actionable community evidence.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PORTFOLIO_DATA.researchProcess.map((item, index) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between ${
                activeStep === index
                  ? 'bg-[#294A37] text-[#FFF9ED] border-[#F5B21A] shadow-xl scale-105'
                  : 'bg-[#FFF9ED]/80 dark:bg-[#0C1D15]/80 text-[#050505] dark:text-[#F5F0E5] border-[#294A37]/15 dark:border-[#FFB51B]/20 hover:border-[#F5B21A]'
              }`}
              data-cursor="STEP"
            >
              <span className={`text-xl font-serif font-bold ${activeStep === index ? 'text-[#FFB51B]' : 'text-[#294A37] dark:text-[#FFB51B]'}`}>
                {item.step}
              </span>
              <span className="text-xs font-sans font-bold tracking-wider uppercase mt-2">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Deep Dive Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#FFF9ED] dark:bg-[#0C1D15] border-2 border-[#F5B21A] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-3">
              <span className="text-3xl font-serif font-bold text-[#F2643F]">
                STAGE {PORTFOLIO_DATA.researchProcess[activeStep].step}
              </span>
              <span className="text-xs font-sans uppercase tracking-widest text-[#294A37] dark:text-[#FFB51B] bg-[#294A37]/10 dark:bg-[#FFB51B]/10 px-3 py-1 rounded-full font-bold">
                SCIENTIFIC WORKFLOW
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5]">
              {PORTFOLIO_DATA.researchProcess[activeStep].title}
            </h3>

            <p className="text-base font-sans font-light text-[#050505]/85 dark:text-[#F5F0E5]/85 leading-relaxed">
              {PORTFOLIO_DATA.researchProcess[activeStep].desc}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#07120D] text-[#FFB51B] border border-[#FFB51B]/30 flex flex-col items-center justify-center text-center shrink-0 w-full md:w-64 space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/70">PROGRESS</span>
            <span className="text-4xl font-serif font-bold">
              {Math.round(((activeStep + 1) / 6) * 100)}%
            </span>
            <span className="text-[10px] font-sans text-white/60">
              STAGE {activeStep + 1} OF 6 COMPLETED
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

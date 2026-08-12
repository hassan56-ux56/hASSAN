import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CurrentGoal: React.FC = () => {
  return (
    <section className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
            07 • FUTURE HORIZONS
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mt-2">
            WHAT'S NEXT? <br />
            <span className="text-[#294A37] dark:text-[#FFB51B]">TARGET ROLES & GOALS</span>
          </h2>
        </div>

        {/* 7 Interactive Goal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.goals.map((goal, idx) => (
            <motion.a
              key={goal.title}
              href="#contact"
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#FFF9ED]/80 dark:bg-[#0C1D15]/80 border border-[#294A37]/15 dark:border-[#FFB51B]/20 hover:border-[#F5B21A] transition-all duration-300 shadow-md flex flex-col justify-between group cursor-pointer"
              data-cursor="GOAL"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-serif font-bold text-[#F2643F]">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#294A37] dark:text-[#FFB51B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <h3 className="text-xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mb-2 group-hover:text-[#294A37] dark:group-hover:text-[#FFB51B] transition-colors">
                  {goal.title}
                </h3>

                <p className="text-xs font-sans text-[#050505]/75 dark:text-[#F5F0E5]/75 leading-relaxed font-light">
                  {goal.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#294A37]/10 dark:border-[#FFB51B]/15 text-[10px] font-sans font-bold uppercase tracking-widest text-[#294A37] dark:text-[#FFB51B]">
                OPEN TO OPPORTUNITIES
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call To Action Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#294A37] dark:bg-[#07120D] text-[#FFF9ED] border-2 border-[#FFB51B] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FFB51B]">
              LET'S CREATE MEANINGFUL IMPACT.
            </h3>
            <p className="text-xs sm:text-sm font-sans font-light text-white/80">
              Looking for a dedicated research-oriented public health analyst for your initiative?
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#FFB51B] text-[#07120D] font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#FFC64D] transition-colors shadow-lg shrink-0 cursor-pointer"
            data-cursor="CONNECT"
          >
            GET IN TOUCH
          </a>
        </div>

      </div>
    </section>
  );
};

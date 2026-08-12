import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
            03 • PRACTICAL FIELDWORK
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mt-2">
            EXPERIENCE & <br />
            <span className="text-[#294A37] dark:text-[#FFB51B]">FIELD SURVEILLANCE</span>
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#FFF9ED]/80 dark:bg-[#0C1D15]/80 border border-[#294A37]/20 dark:border-[#FFB51B]/20 hover:border-[#F5B21A] transition-all duration-300 shadow-lg flex flex-col justify-between"
              data-cursor="EXP"
            >
              <div>
                {/* Header Icon & Period */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D]">
                    {exp.type === 'internship' ? (
                      <Building2 className="w-6 h-6" />
                    ) : (
                      <Globe className="w-6 h-6" />
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-sans font-bold px-3 py-1 rounded-full bg-[#294A37]/10 dark:bg-[#FFB51B]/10 text-[#294A37] dark:text-[#FFB51B]">
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <div className="text-[10px] font-sans text-[#050505]/60 dark:text-[#F5F0E5]/60 mt-1">
                        {exp.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="text-2xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-sans font-bold text-[#F2643F] mb-6">
                  {exp.organization} — {exp.location}
                </p>

                {/* Key Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-[#050505]/80 dark:text-[#F5F0E5]/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#F5B21A] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievement Badge & Tags */}
              <div className="pt-6 border-t border-[#294A37]/15 dark:border-[#FFB51B]/20 space-y-4">
                <div className="p-3.5 rounded-xl bg-[#294A37]/10 dark:bg-[#FFB51B]/10 border border-[#294A37]/20 dark:border-[#FFB51B]/20 flex items-center space-x-3 text-xs font-sans">
                  <ShieldCheck className="w-5 h-5 text-[#F5B21A] shrink-0" />
                  <div>
                    <strong className="text-[#294A37] dark:text-[#FFB51B]">Key Impact:</strong> {exp.keyAchievement}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full bg-[#050505]/5 dark:bg-white/5 text-[#050505]/80 dark:text-[#F5F0E5]/80 border border-current/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

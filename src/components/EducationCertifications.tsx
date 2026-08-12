import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  const [certTab, setCertTab] = useState<'all' | 'public-health' | 'leadership'>('all');

  const filteredCerts = certTab === 'all'
    ? PORTFOLIO_DATA.certifications
    : PORTFOLIO_DATA.certifications.filter((c) => c.category === certTab);

  return (
    <section id="education" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Education Highlight Card */}
        <div className="mb-24">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
            06 • ACADEMIC FOUNDATION
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mt-2 mb-12">
            EDUCATION & <br />
            <span className="text-[#294A37] dark:text-[#FFB51B]">CURRICULUM</span>
          </h2>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF9ED] dark:bg-[#0C1D15] border-2 border-[#294A37]/20 dark:border-[#FFB51B]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#294A37] text-[#FFF9ED] dark:bg-[#FFB51B] dark:text-[#07120D] text-xs font-sans font-bold tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.education.status}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#294A37] dark:text-[#FFB51B]">
                {PORTFOLIO_DATA.education.degree}
              </h3>

              <p className="text-base font-sans font-bold text-[#050505] dark:text-[#F5F0E5]">
                {PORTFOLIO_DATA.education.institution} • ({PORTFOLIO_DATA.education.period})
              </p>

              <div className="pt-4 border-t border-[#294A37]/15 dark:border-[#FFB51B]/20">
                <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#F2643F] mb-3">
                  CORE ACADEMIC COURSEWORK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-[#294A37]/10 dark:bg-[#FFB51B]/10 text-[#294A37] dark:text-[#FFB51B]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-8 rounded-2xl bg-[#294A37] text-[#FFF9ED] dark:bg-[#07120D] dark:text-[#FFB51B] border border-[#FFB51B]/40 text-center space-y-3 shadow-2xl">
                <BookOpen className="w-12 h-12 text-[#FFB51B] mx-auto animate-bounce" />
                <h4 className="text-xl font-serif font-bold">RESEARCH-ORIENTED CURRICULUM</h4>
                <p className="text-xs font-sans text-white/80 font-light leading-relaxed">
                  Rigorous training in epidemiological methods, biostatistical analysis, environmental risk assessment, and public health governance.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications & Trainings */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
                SPECIALIZED CREDENTIALS
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mt-1">
                CERTIFICATIONS & TRAINING
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex space-x-2">
              {[
                { id: 'all', label: 'ALL' },
                { id: 'public-health', label: 'PUBLIC HEALTH' },
                { id: 'leadership', label: 'LEADERSHIP' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCertTab(tab.id as any)}
                  className={`text-xs font-sans font-bold tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                    certTab === tab.id
                      ? 'bg-[#294A37] text-[#FFF9ED] dark:bg-[#FFB51B] dark:text-[#07120D]'
                      : 'bg-current/5 hover:bg-current/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#FFF9ED]/80 dark:bg-[#0C1D15]/80 border border-[#294A37]/15 dark:border-[#FFB51B]/20 hover:border-[#F5B21A] transition-all duration-300 shadow-md flex items-start space-x-4"
              >
                <div className="p-3 rounded-xl bg-[#294A37]/10 dark:bg-[#FFB51B]/10 text-[#F5B21A] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-[#050505] dark:text-[#F5F0E5]">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] mt-0.5">
                    {cert.issuer}
                  </p>
                  {cert.details && (
                    <p className="text-xs font-sans text-[#050505]/70 dark:text-[#F5F0E5]/70 mt-2 font-light">
                      {cert.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, BarChart3, FileText, Wrench, Award, Target } from 'lucide-react';
import { ResearchProject } from '../data/portfolioData';

interface ResearchModalProps {
  project: ResearchProject | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07120D]/80 backdrop-blur-lg"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#FFF9ED] dark:bg-[#0C1D15] border-2 border-[#F5B21A] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-[#050505] dark:text-[#F5F0E5]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#294A37]/15 dark:border-[#FFB51B]/20 bg-[#294A37]/5 dark:bg-[#FFB51B]/5">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-serif font-bold text-[#FFB51B] bg-[#294A37] px-3 py-1 rounded-full">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#F2643F]">
                {project.category} • {project.location}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-current/20 hover:bg-[#FFB51B] hover:text-[#07120D] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scroll */}
          <div className="p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* Title */}
            <div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#294A37] dark:text-[#FFB51B] leading-tight">
                {project.title}
              </h3>
              <p className="text-sm font-sans font-light text-[#050505]/75 dark:text-[#F5F0E5]/75 mt-2">
                {project.summary}
              </p>
            </div>

            {/* Key Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.stats.map((st) => (
                <div
                  key={st.label}
                  className="p-5 rounded-2xl bg-[#294A37]/10 dark:bg-[#FFB51B]/10 border border-[#294A37]/20 dark:border-[#FFB51B]/30 flex flex-col items-center text-center"
                >
                  <span className="text-3xl font-serif font-bold text-[#294A37] dark:text-[#FFB51B]">
                    {st.value}
                  </span>
                  <span className="text-xs font-sans text-[#050505]/80 dark:text-[#F5F0E5]/80 mt-1 uppercase tracking-wider">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Conceptual Visualization Chart */}
            <div className="p-6 rounded-2xl bg-[#07120D] text-[#F5F0E5] border border-[#FFB51B]/30 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#FFB51B] tracking-widest uppercase">
                <BarChart3 className="w-4 h-4" />
                <span>RESEARCH DATA VISUALIZATION</span>
              </div>

              {project.visualType === 'barChart' && (
                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Overall Patient Satisfaction</span>
                      <span className="text-[#FFB51B]">89.1%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FFB51B] rounded-full" style={{ width: '89.1%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Antenatal Checkup Compliance (Outsourced)</span>
                      <span className="text-[#FFB51B]">84.5%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#294A37] rounded-full" style={{ width: '84.5%' }} />
                    </div>
                  </div>
                </div>
              )}

              {project.visualType === 'kapGauge' && (
                <div className="grid grid-cols-2 gap-4 text-center pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl font-serif font-bold text-[#F2643F]">76%</div>
                    <div className="text-[11px] font-sans text-white/80 mt-1">Reported Respiratory Symptoms</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl font-serif font-bold text-[#FFB51B]">18-Item</div>
                    <div className="text-[11px] font-sans text-white/80 mt-1">5-Point Likert KAP Survey</div>
                  </div>
                </div>
              )}

              {project.visualType === 'riskMatrix' && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#FFB51B]">Vendor Sanitation Compliance</div>
                    <div className="text-xs text-white/80">Post-Intervention Audit Increase</div>
                  </div>
                  <div className="text-3xl font-serif font-bold text-[#FFB51B]">+45%</div>
                </div>
              )}

              {(project.visualType === 'interviewMap' || project.visualType === 'networkGraph') && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs leading-relaxed italic text-[#F5F0E5]/90">
                  "Synthesizing qualitative interview perspectives and systematic literature frameworks to highlight critical care gaps."
                </div>
              )}
            </div>

            {/* Structured Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Objective */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#F2643F] uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>STUDY OBJECTIVE</span>
                </div>
                <p className="text-sm font-sans text-[#050505]/85 dark:text-[#F5F0E5]/85 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              {/* Study Design */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>METHODOLOGY & DESIGN</span>
                </div>
                <p className="text-sm font-sans text-[#050505]/85 dark:text-[#F5F0E5]/85 leading-relaxed">
                  {project.studyDesign}
                </p>
              </div>

              {/* Aima's Role */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>AIMA'S ROLE & CONTRIBUTION</span>
                </div>
                <p className="text-sm font-sans text-[#050505]/85 dark:text-[#F5F0E5]/85 leading-relaxed">
                  {project.role}
                </p>
              </div>

              {/* Tools Used */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                  <Wrench className="w-4 h-4" />
                  <span>RESEARCH TOOLKIT & SOFTWARE</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tools.map((tl) => (
                    <span
                      key={tl}
                      className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-[#294A37]/15 dark:bg-[#FFB51B]/15 text-[#294A37] dark:text-[#FFB51B]"
                    >
                      {tl}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Findings List */}
            <div className="space-y-3 pt-4 border-t border-[#294A37]/15 dark:border-[#FFB51B]/20">
              <h4 className="text-base font-serif font-bold text-[#294A37] dark:text-[#FFB51B]">
                KEY RESEARCH FINDINGS
              </h4>
              <ul className="space-y-2">
                {project.keyFindings.map((kf, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm font-sans">
                    <CheckCircle className="w-4 h-4 text-[#F5B21A] shrink-0 mt-0.5" />
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="p-6 border-t border-[#294A37]/15 dark:border-[#FFB51B]/20 bg-[#294A37]/5 dark:bg-[#FFB51B]/5 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#183728] dark:hover:bg-[#FFC64D] transition-colors cursor-pointer"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

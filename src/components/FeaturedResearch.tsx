import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, ResearchProject } from '../data/portfolioData';
import { ResearchModal } from './ResearchModal';

export const FeaturedResearch: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredProjects = filterType === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.type === filterType);

  return (
    <section id="research" className="relative py-28 bg-[#183728] dark:bg-[#07120D] text-[#FFF9ED] overflow-hidden z-10">
      {/* Massive Outlined Background Typography */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none opacity-5 font-serif font-black text-8xl sm:text-[14rem] leading-none tracking-tight text-white">
        <div>RESEARCH</div>
        <div className="text-right">EVIDENCE</div>
        <div>IMPACT</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#FFB51B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 • SCIENTIFIC INQUIRY</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#FFF9ED] leading-none">
              FEATURED <br />
              <span className="text-[#FFB51B]">RESEARCH</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-sans text-white/60 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#FFB51B]" /> FILTER:
            </span>
            {[
              { id: 'all', label: 'ALL STUDIES' },
              { id: 'mixed-methods', label: 'MIXED-METHODS' },
              { id: 'quantitative', label: 'QUANTITATIVE' },
              { id: 'intervention', label: 'INTERVENTION' },
              { id: 'qualitative', label: 'QUALITATIVE' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`text-[11px] font-sans font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  filterType === f.id
                    ? 'bg-[#FFB51B] text-[#07120D] shadow-md'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline & Project Cards */}
        <div className="relative border-l-2 border-[#FFB51B]/30 pl-6 sm:pl-10 space-y-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Golden Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#07120D] border-2 border-[#FFB51B] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-[#FFB51B]" />
              </div>

              {/* Project Card Container */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0C1D15]/90 border border-[#FFB51B]/20 hover:border-[#FFB51B] transition-all duration-500 shadow-xl backdrop-blur-md group-hover:shadow-[0_0_30px_rgba(255,181,27,0.15)]">
                
                {/* Number & Category */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-4xl font-serif font-bold text-[#FFB51B]">
                    {project.number}
                  </span>

                  <div className="flex items-center space-x-3 text-xs font-sans font-bold tracking-widest text-[#F2643F] uppercase">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span className="text-white/70">{project.location}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF9ED] mb-4 group-hover:text-[#FFB51B] transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm font-sans font-light text-white/80 leading-relaxed mb-6 max-w-3xl">
                  {project.summary}
                </p>

                {/* Key Statistics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {project.stats.map((st) => (
                    <div
                      key={st.label}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="text-2xl font-serif font-bold text-[#FFB51B]">
                        {st.value}
                      </div>
                      <div className="text-[11px] font-sans text-white/70 uppercase tracking-wider mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Role & Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs font-sans text-white/70">
                    <strong className="text-white">Role:</strong> {project.role.split('—')[0]}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#FFB51B] text-[#07120D] text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#FFC64D] transition-all duration-300 shadow-md cursor-pointer"
                    data-cursor="CASE STUDY"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Full Screen Modal */}
      <ResearchModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

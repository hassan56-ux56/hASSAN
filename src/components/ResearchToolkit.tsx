import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Wrench, MessageSquare, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ResearchToolkit: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (catName: string) => {
    if (catName.includes('RESEARCH')) return <Wrench className="w-5 h-5 text-[#F5B21A]" />;
    if (catName.includes('DATA')) return <Database className="w-5 h-5 text-[#F5B21A]" />;
    return <MessageSquare className="w-5 h-5 text-[#F5B21A]" />;
  };

  return (
    <section id="skills" className="relative py-28 bg-[#183728] dark:bg-[#07120D] text-[#FFF9ED] z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#FFB51B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 • TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#FFF9ED]">
            MY RESEARCH <br />
            <span className="text-[#FFB51B]">TOOLKIT</span>
          </h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div key={category.category} className="space-y-6">
              
              <div className="flex items-center space-x-3 border-b border-white/15 pb-4">
                {getCategoryIcon(category.category)}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFB51B] tracking-wider uppercase">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className={`p-6 rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                      selectedSkill === skill.name
                        ? 'bg-[#FFB51B] text-[#07120D] border-white shadow-2xl ring-2 ring-[#FFB51B]'
                        : 'bg-[#0C1D15]/80 text-[#FFF9ED] border-white/10 hover:border-[#FFB51B]/50'
                    }`}
                    data-cursor="SKILL"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-serif font-bold">{skill.name}</span>
                      <span
                        className={`text-[10px] font-sans font-bold px-2.5 py-1 rounded-full uppercase ${
                          selectedSkill === skill.name
                            ? 'bg-[#07120D] text-[#FFB51B]'
                            : 'bg-white/10 text-[#FFB51B]'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className={`text-xs font-sans leading-relaxed ${selectedSkill === skill.name ? 'text-[#07120D]/90' : 'text-white/70'}`}>
                      {skill.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-current/10 text-[10px] font-sans uppercase tracking-widest opacity-80">
                      <span>{skill.tag}</span>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

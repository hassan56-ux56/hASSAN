import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, BarChart2, Heart, Leaf, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { AreaOfInterestModal, AreaOfInterestItem } from './AreaOfInterestModal';
import portraitImg from '../assets/images/aima_anime_portrait_1786546218229.jpg';

export const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<AreaOfInterestItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'microscope':
        return <Microscope className="w-6 h-6 text-[#F5B21A]" />;
      case 'chart':
        return <BarChart2 className="w-6 h-6 text-[#F5B21A]" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-[#F5B21A]" />;
      case 'leaf':
        return <Leaf className="w-6 h-6 text-[#F5B21A]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#F5B21A]" />;
      default:
        return <Microscope className="w-6 h-6 text-[#F5B21A]" />;
    }
  };

  return (
    <section id="about" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Story Heading & Portrait Composite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Dominant Editorial Heading & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
              01 • ABOUT ME
            </span>

            <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] leading-[0.95]">
              HELLO, <br />
              <span className="text-[#294A37] dark:text-[#FFB51B]">I'M AIMA.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-sans font-light text-[#050505]/85 dark:text-[#F5F0E5]/85 leading-relaxed pt-2">
              <p>
                I am a Public Health graduate from the <strong className="font-semibold text-[#294A37] dark:text-[#FFB51B]">University of the Punjab</strong>, dedicated to bridging the gap between raw epidemiological data and real-world community health outcomes.
              </p>
              <p>
                My work spans <strong className="font-semibold">mixed-methods research, SPSS data analytics, climate-related health challenges, maternal & child health service evaluations, and front-line WHO polio eradication outreach</strong>. I believe that public health is most impactful when rigorous statistical models are directly informed by field observations.
              </p>
            </div>

            {/* Quick Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-sans font-medium text-[#294A37] dark:text-[#FFB51B]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5B21A]" />
                <span>Quantitative & Qualitative Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5B21A]" />
                <span>Field KAP Surveys & CAPI</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5B21A]" />
                <span>Primary Healthcare Evaluation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F5B21A]" />
                <span>Smog & Occupational Hazards</span>
              </div>
            </div>
          </div>

          {/* Right: Layered Portrait & Editorial Shape Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              {/* Green Offset Rectangle */}
              <div className="absolute inset-0 bg-[#294A37] dark:bg-[#0C1D15] rounded-3xl transform rotate-3 border border-[#F5B21A]/30 shadow-xl" />
              
              {/* Cream Circular Shape Accent */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#FFF9ED] dark:bg-[#123523] opacity-80 border border-[#F5B21A]/40 pointer-events-none" />

              {/* Close-Up Anime Researcher Image */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-[#F5B21A] shadow-2xl bg-[#FFF9ED] dark:bg-[#0A2418]">
                <img
                  src={portraitImg || "/images/aima_anime_portrait.jpg"}
                  alt="Aima Nawaz Close Up Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold Info Pills */}
              <div className="absolute -bottom-4 -left-4 z-20 px-4 py-2 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] text-xs font-sans font-bold tracking-wider shadow-lg">
                PUBLIC HEALTH SCHOLAR
              </div>
              <div className="absolute -top-4 -right-4 z-20 px-4 py-2 rounded-full bg-[#FFF9ED] dark:bg-[#0C1D15] border border-[#F5B21A] text-[#294A37] dark:text-[#FFB51B] text-xs font-sans font-bold tracking-wider shadow-lg">
                LAHORE, PAKISTAN
              </div>
            </div>
          </div>

        </div>

        {/* Areas of Interest Grid */}
        <div className="mt-20">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2643F]">
                CORE FOCUS
              </span>
              <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#050505] dark:text-[#F5F0E5] mt-1">
                AREAS OF INTEREST
              </h3>
            </div>
            <p className="text-xs font-sans font-medium text-[#294A37] dark:text-[#FFB51B]">
              • Click any domain to view key methodologies & research focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.areasOfInterest.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedArea(item)}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`p-8 rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                  activeCard === item.id
                    ? 'bg-[#294A37] text-[#FFF9ED] border-[#F5B21A] shadow-2xl'
                    : 'bg-[#FFF9ED]/70 dark:bg-[#0C1D15]/70 text-[#050505] dark:text-[#F5F0E5] border-[#294A37]/15 dark:border-[#FFB51B]/20'
                }`}
                data-cursor="INTEREST"
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-2xl font-serif font-bold ${activeCard === item.id ? 'text-[#FFB51B]' : 'text-[#294A37] dark:text-[#FFB51B]'}`}>
                    {item.id}
                  </span>
                  <div className="p-3 rounded-xl bg-[#07120D]/10 dark:bg-[#FFB51B]/10 flex items-center space-x-2">
                    {getIcon(item.icon)}
                  </div>
                </div>

                <h4 className="text-xl font-serif font-bold mb-3 tracking-tight flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:text-[#FFB51B] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h4>

                <p className={`text-xs font-sans leading-relaxed mb-6 font-light ${activeCard === item.id ? 'text-[#FFF9ED]/90' : 'text-[#050505]/75 dark:text-[#F5F0E5]/75'}`}>
                  {item.description}
                </p>

                {/* Highlights Tags & Click prompt */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-current/10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-sans font-semibold px-2.5 py-1 rounded-full ${
                          activeCard === item.id
                            ? 'bg-[#FFB51B] text-[#07120D]'
                            : 'bg-[#294A37]/10 dark:bg-[#FFB51B]/10 text-[#294A37] dark:text-[#FFB51B]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#F2643F] uppercase flex items-center gap-0.5">
                    EXPLORE →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Area of Interest Detail Modal */}
      <AreaOfInterestModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
      />
    </section>
  );
};


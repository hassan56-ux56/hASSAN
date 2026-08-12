import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const BeyondData: React.FC = () => {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setEasterEggActive(true);
  };

  return (
    <section className="relative py-32 bg-[#07120D] text-[#FFF9ED] overflow-hidden z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#123523]/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-20">
        
        {/* Quote Block */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <span className="text-xs font-sans font-bold tracking-[0.4em] uppercase text-[#FFB51B] flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> BEYOND THE DATA
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#FFF9ED] leading-tight font-light">
            “Public health is not only about numbers. It is about the person represented by every observation, every survey response, and every health indicator.”
          </h2>

          <p className="text-xs font-sans tracking-widest text-[#FFB51B] uppercase font-bold">
            — AIMA NAWAZ
          </p>
        </div>

        {/* Sequential Value Chain */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
          {[
            { word: 'DATA', desc: 'Rigorous Observation' },
            { word: 'EVIDENCE', desc: 'Statistical Proof' },
            { word: 'ACTION', desc: 'Targeted Program' },
            { word: 'IMPACT', desc: 'Resilient Community' },
          ].map((item, idx) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FFB51B]">
                {item.word}
              </span>
              <p className="text-[11px] font-sans text-white/70 uppercase tracking-wider">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hidden Easter Egg Interactive Area */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setEasterEggActive(false)}
          className="relative py-16 px-8 rounded-3xl border border-[#FFB51B]/20 bg-[#0C1D15]/60 backdrop-blur-md cursor-pointer select-none group"
          data-cursor="PEOPLE"
        >
          {/* Interactive Golden Line Canvas overlay */}
          {easterEggActive && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <line
                x1={mousePos.x}
                y1={mousePos.y}
                x2="10%"
                y2="50%"
                stroke="#FFB51B"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.6"
              />
              <line
                x1={mousePos.x}
                y1={mousePos.y}
                x2="50%"
                y2="50%"
                stroke="#FFB51B"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              <line
                x1={mousePos.x}
                y1={mousePos.y}
                x2="90%"
                y2="50%"
                stroke="#FFB51B"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.6"
              />
            </svg>
          )}

          <h3 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#FFF9ED] group-hover:text-[#FFB51B] transition-colors">
            EVIDENCE. PEOPLE. IMPACT.
          </h3>

          {/* Hidden Message Reveal */}
          <AnimatePresence>
            {easterEggActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#FFB51B] text-[#07120D] text-xs font-sans font-bold tracking-widest uppercase shadow-lg"
              >
                <Heart className="w-3.5 h-3.5 text-[#F2643F] fill-current" />
                <span>Good research begins with people.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] font-sans tracking-widest text-white/40 uppercase mt-4">
            (Hover across words to connect)
          </p>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { IntroSequence } from './components/IntroSequence';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedResearch } from './components/FeaturedResearch';
import { Experience } from './components/Experience';
import { ResearchToolkit } from './components/ResearchToolkit';
import { ResearchProcess } from './components/ResearchProcess';
import { EducationCertifications } from './components/EducationCertifications';
import { BeyondData } from './components/BeyondData';
import { CurrentGoal } from './components/CurrentGoal';
import { Contact } from './components/Contact';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    return sessionStorage.getItem('aima_intro_seen') === 'true';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('aima_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('aima_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aima_theme', 'light');
    }
  }, [isDarkMode]);

  const handleIntroComplete = () => {
    setIntroCompleted(true);
    sessionStorage.setItem('aima_intro_seen', 'true');
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 bg-grain ${
      isDarkMode ? 'bg-[#07120D] text-[#F5F0E5]' : 'bg-[#F5F0E5] text-[#050505]'
    }`}>
      {/* Intro Sequence (< 3s or skippable) */}
      {!introCompleted && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      {/* Global Context-Aware Custom Cursor */}
      <CustomCursor />

      {/* Smooth Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Living 3D Research Ecosystem Background Canvas */}
      <ThreeCanvasBackground isDarkMode={isDarkMode} />

      {/* Sticky Navigation Bar */}
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <FeaturedResearch />
        <Experience />
        <ResearchToolkit />
        <ResearchProcess />
        <EducationCertifications />
        <BeyondData />
        <CurrentGoal />
      </main>

      {/* Contact & Footer */}
      <Contact isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
    </div>
  );
}

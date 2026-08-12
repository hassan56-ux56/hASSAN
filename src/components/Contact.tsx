import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode, onToggleTheme }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 bg-[#07120D] text-[#FFF9ED] overflow-hidden z-10 border-t border-[#FFB51B]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          
          {/* Left: Contact Info & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#FFB51B]">
                08 • GET IN TOUCH
              </span>
              <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#FFF9ED] leading-none">
                LET'S <br />
                <span className="text-[#FFB51B]">CONNECT.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg font-sans font-light text-white/80 max-w-xl leading-relaxed">
              Have a research inquiry, a public health evaluation project, or looking for a dedicated research analyst? I would love to connect and discuss how we can collaborate for community impact.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              
              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#0C1D15] border border-[#FFB51B]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#FFB51B]/10 text-[#FFB51B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans text-white/60 uppercase tracking-widest">EMAIL ADDRESS</div>
                    <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="text-base font-serif font-bold text-[#FFF9ED] hover:text-[#FFB51B] transition-colors">
                      {PORTFOLIO_DATA.personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.email, 'email')}
                    className="p-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-sans"
                    title="Copy Email"
                  >
                    {copied === 'email' ? <Check className="w-4 h-4 text-[#FFB51B]" /> : <Copy className="w-4 h-4 text-white/80" />}
                  </button>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                    className="px-5 py-2.5 rounded-full bg-[#FFB51B] text-[#07120D] text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#FFC64D] transition-colors cursor-pointer"
                    data-cursor="EMAIL"
                  >
                    SEND EMAIL
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#0C1D15] border border-[#FFB51B]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#FFB51B]/10 text-[#FFB51B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans text-white/60 uppercase tracking-widest">PHONE / WHATSAPP</div>
                    <a href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`} className="text-base font-serif font-bold text-[#FFF9ED] hover:text-[#FFB51B] transition-colors">
                      {PORTFOLIO_DATA.personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personalInfo.phone, 'phone')}
                    className="p-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-sans"
                    title="Copy Phone"
                  >
                    {copied === 'phone' ? <Check className="w-4 h-4 text-[#FFB51B]" /> : <Copy className="w-4 h-4 text-white/80" />}
                  </button>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                    className="px-5 py-2.5 rounded-full border border-[#FFB51B] text-[#FFB51B] text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#FFB51B] hover:text-[#07120D] transition-colors cursor-pointer"
                    data-cursor="CALL"
                  >
                    CALL NOW
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#0C1D15]/60 border border-white/10 flex items-center space-x-4">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#FFB51B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs font-sans text-white/80">
                  <strong className="text-white">Base Location:</strong> {PORTFOLIO_DATA.personalInfo.location}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Glowing Sphere Visual & Quick Nav */}
          <div className="lg:col-span-5 flex flex-col justify-between items-center text-center p-8 rounded-3xl bg-[#0C1D15] border border-[#FFB51B]/30 relative overflow-hidden">
            
            <div className="relative z-10 my-auto space-y-6">
              {/* Rotating Golden Sphere Graphic */}
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#FFB51B] mx-auto flex items-center justify-center animate-spin-slow shadow-[0_0_40px_rgba(255,181,27,0.3)]">
                <div className="w-20 h-20 rounded-full bg-[#FFB51B]/20 border border-[#FFB51B] flex items-center justify-center">
                  <Send className="w-8 h-8 text-[#FFB51B]" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#FFB51B]">
                  AIMA NAWAZ
                </h3>
                <p className="text-xs font-sans text-white/70 tracking-widest uppercase mt-1">
                  Public Health • Research • Data
                </p>
              </div>

              <p className="text-xs font-sans italic text-white/80 max-w-xs mx-auto">
                “Turning evidence into impact for healthier communities.”
              </p>
            </div>

          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/60">
          <div>
            © {new Date().getFullYear()} Aima Nawaz. All rights reserved.
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap items-center space-x-6">
            <a href="#about" className="hover:text-[#FFB51B] transition-colors">ABOUT</a>
            <a href="#research" className="hover:text-[#FFB51B] transition-colors">RESEARCH</a>
            <a href="#experience" className="hover:text-[#FFB51B] transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-[#FFB51B] transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-[#FFB51B] transition-colors">CONTACT</a>
          </div>

          <div>
            Design & Engineering Excellence
          </div>
        </div>

      </div>
    </footer>
  );
};

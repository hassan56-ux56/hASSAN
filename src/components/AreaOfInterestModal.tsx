import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Microscope, BarChart2, Heart, Leaf, Users, CheckCircle2, ArrowRight, Lightbulb, Wrench, ShieldCheck } from 'lucide-react';

export interface AreaOfInterestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

interface AreaOfInterestModalProps {
  area: AreaOfInterestItem | null;
  onClose: () => void;
  onNavigateToResearch?: () => void;
}

const AREA_DETAILS: Record<string, {
  tagline: string;
  methodology: string[];
  tools: string[];
  keyQuestions: string[];
  outcomes: string[];
  caseStudyTitle: string;
}> = {
  "01": {
    tagline: "Bridging empirical field data with policy-level public health decision making.",
    methodology: [
      "Cross-Sectional & Longitudinal Mixed-Methods Design",
      "Qualitative Semi-Structured In-Depth Interviewing",
      "PRISMA Literature Search & Systematic Evidence Synthesis",
      "Sampling Framework Design & Ethical Field Protocols"
    ],
    tools: ["SPSS", "Bilingual Field Instruments", "EpiData", "Qualitative Coding"],
    keyQuestions: [
      "How do operational changes in primary health facilities affect patient trust?",
      "What socioeconomic and cultural barriers prevent early diagnosis of chronic conditions?"
    ],
    outcomes: [
      "Authored 2 primary thesis reports on maternal health delivery and knee osteoarthritis.",
      "Delivered evidence-based policy recommendation briefs to university and departmental panels."
    ],
    caseStudyTitle: "Outsourced Primary Healthcare Delivery & Patient Satisfaction Study"
  },
  "02": {
    tagline: "Extracting statistical clarity and epidemiological signals from complex raw datasets.",
    methodology: [
      "Descriptive & Inferential Statistical Modeling (ANOVA, Chi-Square, Regression)",
      "CAPI (Computer Assisted Personal Interviewing) Data Validation",
      "Data Cleaning, Outlier Detection & Variable Coding",
      "Epidemiological Indicator Standardization & Survey Weighting"
    ],
    tools: ["IBM SPSS Statistics", "MS Excel (Pivot Tables & VLOOKUP)", "Base R", "EpiData"],
    keyQuestions: [
      "Which occupational demographics correlate with high respiratory disease symptoms?",
      "How can data validation error rates be minimized during large provincial health surveys?"
    ],
    outcomes: [
      "Assisted in cleaning and validating MICS survey health datasets at the Bureau of Statistics.",
      "Analyzed Likert-scale KAP data for 150+ outdoor campus workers."
    ],
    caseStudyTitle: "Occupational Smog KAP Survey & Statistical Modeling"
  },
  "03": {
    tagline: "Optimizing maternal-child health services and evaluating decentralized care models.",
    methodology: [
      "Rural Health Unit (BHU) Operational Audits",
      "Patient Exit Satisfaction Surveys",
      "Antenatal Care Compliance Tracking",
      "Vaccine Logistics & Supply Chain Bottleneck Analysis"
    ],
    tools: ["Structured Exit Survey Guides", "Facility Checklists", "Comparative Baselines"],
    keyQuestions: [
      "Does public-private outsourcing increase staff attendance and medicine availability in rural clinics?",
      "What gaps remain in pediatric immunization supply chains?"
    ],
    outcomes: [
      "Documented an 89.1% patient satisfaction rate across evaluated outsourced rural health centers.",
      "Identified critical logistics recommendations for rural vaccine delivery."
    ],
    caseStudyTitle: "Evaluation of Outsourced BHUs in Rural Punjab"
  },
  "04": {
    tagline: "Mitigating toxic smog exposures, occupational risks, and food sanitation hazards.",
    methodology: [
      "Environmental & Occupational KAP Audits",
      "Pre- and Post-Intervention Compliance Assessments",
      "Risk Audit Matrix & Hazard Evaluation",
      "Community Air Quality & Respiratory Symptom Surveillance"
    ],
    tools: ["18-Item Likert Instruments", "Risk Matrices", "Visual Training Infographics"],
    keyQuestions: [
      "Why do vulnerable outdoor workers underutilize protective N95 masks despite high hazard awareness?",
      "How can food handlers in campus canteens be motivated to sustain hygiene protocols?"
    ],
    outcomes: [
      "Executed a 4-stage food safety intervention achieving a +45% increase in vendor hygiene compliance.",
      "Developed occupational health guidelines for university campus workers during peak smog months."
    ],
    caseStudyTitle: "Campus Food Hygiene Intervention & Smog Exposure KAP Study"
  },
  "05": {
    tagline: "Empowering frontline communities through trust, education, and disease surveillance.",
    methodology: [
      "Door-to-Door Immunization Tracking & Household Census",
      "Vaccine Hesitancy Conflict Resolution & Risk Communication",
      "WHO Lot Quality Assurance Sampling (LQAS) Protocols",
      "Community Triage & Preventive Health Awareness Workshops"
    ],
    tools: ["WHO Field Tracking Sheets", "LQAS Surveys", "Bilingual Advocacy Materials"],
    keyQuestions: [
      "How can health workers overcome cultural resistance to pediatric vaccination?",
      "What field logistics guarantee that zero-dose children in vulnerable pockets are reached?"
    ],
    outcomes: [
      "Served on the front lines of WHO Polio Eradication Campaigns across Punjab district sectors.",
      "Converted high-refusal households into active immunization participants."
    ],
    caseStudyTitle: "WHO Polio Eradication Campaign & LQAS Field Surveillance"
  }
};

export const AreaOfInterestModal: React.FC<AreaOfInterestModalProps> = ({
  area,
  onClose,
  onNavigateToResearch,
}) => {
  if (!area) return null;

  const details = AREA_DETAILS[area.id] || {
    tagline: area.description,
    methodology: area.highlights,
    tools: ["SPSS", "Excel", "Surveys"],
    keyQuestions: ["How can data improve community health outcomes?"],
    outcomes: ["Evidence-based public health reports."],
    caseStudyTitle: "Featured Public Health Research Project"
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'microscope':
        return <Microscope className="w-7 h-7 text-[#FFB51B]" />;
      case 'chart':
        return <BarChart2 className="w-7 h-7 text-[#FFB51B]" />;
      case 'heart':
        return <Heart className="w-7 h-7 text-[#FFB51B]" />;
      case 'leaf':
        return <Leaf className="w-7 h-7 text-[#FFB51B]" />;
      case 'users':
        return <Users className="w-7 h-7 text-[#FFB51B]" />;
      default:
        return <Microscope className="w-7 h-7 text-[#FFB51B]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07120D]/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl bg-[#FFF9ED] dark:bg-[#0C1D15] border-2 border-[#F5B21A] rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-[#050505] dark:text-[#F5F0E5]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#294A37]/15 dark:border-[#FFB51B]/20 bg-[#294A37]/5 dark:bg-[#FFB51B]/5">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-serif font-bold text-[#07120D] bg-[#FFB51B] px-3 py-1 rounded-full">
                AREA {area.id}
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#F2643F]">
                CORE PUBLIC HEALTH DOMAIN
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-current/20 hover:bg-[#FFB51B] hover:text-[#07120D] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Scroll */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Title & Icon Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#294A37] dark:text-[#FFB51B] leading-tight">
                  {area.title}
                </h3>
                <p className="text-sm font-serif italic text-[#050505]/80 dark:text-[#F5F0E5]/85">
                  "{details.tagline}"
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#07120D] border border-[#FFB51B]/30 flex-shrink-0">
                {getIcon(area.icon)}
              </div>
            </div>

            {/* Description Card */}
            <div className="p-5 rounded-2xl bg-[#294A37]/10 dark:bg-[#FFB51B]/10 border border-[#294A37]/20 dark:border-[#FFB51B]/20 text-xs sm:text-sm leading-relaxed font-sans font-light">
              {area.description}
            </div>

            {/* Core Methodology */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#F5B21A]" />
                <span>KEY METHODOLOGY & APPROACH</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {details.methodology.map((m, idx) => (
                  <div key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-[#07120D]/5 dark:bg-[#07120D]/50 border border-current/10 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B21A] flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Questions Explored */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#F5B21A]" />
                <span>CORE QUESTIONS ADDRESSED</span>
              </div>
              <div className="space-y-2">
                {details.keyQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F2643F]/10 border border-[#F2643F]/20 text-xs italic font-serif">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Field Outcomes */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-[#F5B21A]" />
                <span>PRACTICAL FIELD OUTCOMES & IMPACT</span>
              </div>
              <ul className="space-y-2 text-xs font-sans leading-relaxed">
                {details.outcomes.map((out, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#FFB51B] font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights Tags */}
            <div className="pt-2 border-t border-current/10">
              <span className="text-[11px] font-sans font-bold text-[#294A37] dark:text-[#FFB51B] uppercase tracking-widest block mb-2">
                SPECIALIZED TAGS:
              </span>
              <div className="flex flex-wrap gap-2">
                {area.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-sans font-semibold px-3 py-1 rounded-full bg-[#FFB51B] text-[#07120D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-[#294A37]/15 dark:border-[#FFB51B]/20 bg-[#294A37]/5 dark:bg-[#FFB51B]/5 flex items-center justify-between flex-wrap gap-4">
            <div className="text-xs font-sans text-current/70">
              Case Study: <strong className="text-[#294A37] dark:text-[#FFB51B]">{details.caseStudyTitle}</strong>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onNavigateToResearch) {
                  onNavigateToResearch();
                } else {
                  const el = document.getElementById('research');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#294A37] dark:bg-[#FFB51B] text-[#FFF9ED] dark:text-[#07120D] text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform cursor-pointer"
            >
              <span>VIEW RELATED RESEARCH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

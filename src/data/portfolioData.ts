export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  type: 'mixed-methods' | 'quantitative' | 'intervention' | 'qualitative' | 'review';
  stats: { label: string; value: string; numVal?: number }[];
  objective: string;
  studyDesign: string;
  role: string;
  tools: string[];
  keyFindings: string[];
  output: string;
  summary: string;
  visualType: 'barChart' | 'kapGauge' | 'riskMatrix' | 'interviewMap' | 'networkGraph';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  type: 'internship' | 'outreach';
  responsibilities: string[];
  tags: string[];
  keyAchievement: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'public-health' | 'leadership';
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; description: string; tag: string }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "AIMA NAWAZ",
    title: "Public Health Researcher | Data Analyst | Climate & Community Health",
    tagline: "Turning public health data and field insights into evidence for healthier, more resilient communities.",
    email: "aimanawaz133@gmail.com",
    phone: "0311-3773314",
    location: "Lahore, Pakistan",
    university: "University of the Punjab, Lahore",
    degree: "Bachelor of Science in Public Health (2022–2026)",
    bio: "Aima Nawaz is a Public Health graduate from the University of the Punjab with a deep commitment to research, quantitative & qualitative data analysis, community health, healthcare systems, and climate-related health challenges. She combines academic rigor with hands-on field experience to transform complex observations into evidence-based solutions.",
    quote: "Public health is not only about numbers. It is about the person represented by every observation, every survey response, and every health indicator.",
  },

  areasOfInterest: [
    {
      id: "01",
      title: "PUBLIC HEALTH RESEARCH",
      description: "Designing mixed-methods, cross-sectional, and qualitative studies to identify systemic health gaps and inform evidence-based policy.",
      icon: "microscope",
      highlights: ["Study Design", "Survey Methodology", "Data Interpretation"],
    },
    {
      id: "02",
      title: "DATA & ANALYTICS",
      description: "Translating raw survey and epidemiological data into actionable insights using SPSS, R, Excel pivot tables, and statistical modeling.",
      icon: "chart",
      highlights: ["SPSS & R Modeling", "Data Cleaning", "Inferential Statistics"],
    },
    {
      id: "03",
      title: "HEALTH SYSTEMS & MATERNAL & CHILD HEALTH",
      description: "Evaluating primary healthcare delivery, maternal satisfaction, and outsourced service models in underserved rural communities.",
      icon: "heart",
      highlights: ["Outsourcing Evaluation", "Maternal Care", "Patient Satisfaction"],
    },
    {
      id: "04",
      title: "CLIMATE & ENVIRONMENTAL HEALTH",
      description: "Investigating smog exposure, occupational hazards for outdoor workers, air pollution health impacts, and environmental risk reduction.",
      icon: "leaf",
      highlights: ["Smog Exposure KAP", "Occupational Hazards", "Risk Reduction"],
    },
    {
      id: "05",
      title: "COMMUNITY HEALTH",
      description: "Driving disease prevention, field surveillance, polio eradication outreach, and health education directly with community members.",
      icon: "users",
      highlights: ["Polio Campaign", "Field Surveillance", "Health Education"],
    },
  ],

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Effects of Outsourcing Primary Healthcare Services on Maternal & Child Health Delivery & Patient Satisfaction",
      category: "Mixed-Methods Research",
      location: "Rural Punjab, Pakistan",
      type: "mixed-methods",
      stats: [
        { label: "Female Patients", value: "221", numVal: 221 },
        { label: "Patient Satisfaction", value: "89.1%", numVal: 89.1 },
        { label: "Rural Health Units", value: "Multi-Center", numVal: 12 },
      ],
      objective: "To evaluate the operational impact and patient satisfaction of outsourced primary healthcare service delivery on maternal and child health outcomes in rural Punjab.",
      studyDesign: "Cross-sectional mixed-methods study combining quantitative patient exit surveys and qualitative healthcare worker interviews.",
      role: "Lead Researcher — Designed survey questionnaires, conducted field data collection across rural health centers, executed statistical analysis in SPSS, and authored final thesis report.",
      tools: ["SPSS", "Excel", "Structured Survey Questionnaire", "Semi-Structured Interviews"],
      keyFindings: [
        "High overall patient satisfaction (89.1%) with outsourced BHU management regarding staff availability and medicine access.",
        "Significantly improved maternal antenatal check-up compliance in outsourced health centers compared to historical baselines.",
        "Identified persistent supply chain bottlenecks for pediatric vaccines requiring targeted logistics intervention.",
      ],
      output: "Academic Thesis & Policy Recommendation Brief for Health Department Punjab.",
      summary: "Comprehensive evaluation of 221 female patients in rural health facilities demonstrating an 89.1% satisfaction rate alongside actionable recommendations for healthcare delivery.",
      visualType: "barChart",
    },
    {
      id: "project-2",
      number: "02",
      title: "Breathing in Smog: What Outdoor Workers at the University of the Punjab Really Know",
      category: "Climate & Environmental Health",
      location: "Lahore, Pakistan",
      type: "quantitative",
      stats: [
        { label: "Questionnaire Items", value: "18-Item", numVal: 18 },
        { label: "Likert Scale", value: "5-Point", numVal: 5 },
        { label: "Occupational Target", value: "Outdoor Workers", numVal: 150 },
      ],
      objective: "To assess knowledge, attitudes, and preventive practices (KAP) regarding hazardous smog exposure and occupational respiratory health among campus outdoor workers.",
      studyDesign: "Quantitative cross-sectional KAP survey utilizing a standardized 18-item questionnaire measured on a 5-point Likert scale.",
      role: "Co-Investigator — Developed 18-item KAP instrument, administered in-person bilingual field interviews, coded data into SPSS, and performed descriptive & correlation analysis.",
      tools: ["SPSS", "Bilingual Field Surveys", "Descriptive Statistics", "Correlation Analysis"],
      keyFindings: [
        "76% of outdoor workers reported frequent respiratory symptoms (coughing, eye irritation, dyspnea) during peak smog months.",
        "Significant knowledge gap identified regarding N95 mask efficacy vs. standard cloth masks.",
        "Socioeconomic constraints directly lowered consistent adoption of protective gear despite high awareness of smog hazards.",
      ],
      output: "Research Paper & Campus Occupational Health Action Plan.",
      summary: "An 18-item 5-point Likert survey revealing crucial gaps between smog hazard awareness and protective mask adoption among vulnerable outdoor workers.",
      visualType: "kapGauge",
    },
    {
      id: "project-3",
      number: "03",
      title: "Department-Based Food Hygiene & Safety Intervention",
      category: "Environmental Health & Risk Reduction",
      location: "University Campus",
      type: "intervention",
      stats: [
        { label: "Food Vendors Screened", value: "100%", numVal: 100 },
        { label: "Hygiene Compliance", value: "+45%", numVal: 45 },
        { label: "Intervention Modules", value: "4 Steps", numVal: 4 },
      ],
      objective: "To implement and assess a targeted team-based food safety, sanitation, and hygiene intervention across departmental food vendors and canteens.",
      studyDesign: "Pre-and-post intervention observational audit paired with interactive vendor hygiene training modules.",
      role: "Project Team Lead — Audited sanitation practices, created visual hygiene guidelines, facilitated training workshops for vendor personnel, and performed post-intervention compliance checks.",
      tools: ["Observational Checklists", "Training Modules", "Canva Infographics", "Risk Audit Matrix"],
      keyFindings: [
        "45% increase in mandatory handwashing and glove usage compliance post-intervention.",
        "Significantly reduced cross-contamination risk through color-coded cutting boards and food storage protocols.",
        "Established sustainable sanitation self-inspection routines for canteen staff.",
      ],
      output: "Departmental Food Safety Protocol & Vendor Certification Model.",
      summary: "A practical 4-step public health intervention that elevated departmental food hygiene compliance by 45% through structured training and risk auditing.",
      visualType: "riskMatrix",
    },
    {
      id: "project-4",
      number: "04",
      title: "Qualitative Study on Knee Osteoarthritis & Healthcare Seeking Behaviors",
      category: "Qualitative Research & Chronic Disease",
      location: "Community Health Center",
      type: "qualitative",
      stats: [
        { label: "In-Depth Interviews", value: "Qualitative", numVal: 25 },
        { label: "Thematic Clusters", value: "4 Domains", numVal: 4 },
        { label: "Patient Care Gaps", value: "Identified", numVal: 100 },
      ],
      objective: "To explore patient perspectives, pain management strategies, and healthcare-seeking barriers among adults living with knee osteoarthritis in urban community settings.",
      studyDesign: "Qualitative phenomenology study employing in-depth semi-structured interviews and thematic analysis.",
      role: "Qualitative Researcher — Conducted audio-recorded interviews, transcribed regional dialect responses, performed manual thematic coding, and derived qualitative frameworks.",
      tools: ["Semi-Structured Interview Guides", "Thematic Coding", "Qualitative Analysis", "MS Word"],
      keyFindings: [
        "Financial constraints and fear of invasive surgery were primary drivers for delayed formal medical consultation.",
        "Widespread reliance on unverified herbal remedies before consulting primary care physicians.",
        "Strong need for community-based physical therapy and ergonomic patient education.",
      ],
      output: "Qualitative Research Manuscript & Patient Education Pamphlet.",
      summary: "In-depth qualitative inquiry exposing financial, cultural, and psychological barriers shaping healthcare-seeking patterns for chronic joint pain.",
      visualType: "interviewMap",
    },
    {
      id: "project-5",
      number: "05",
      title: "Breast Cancer & Psychological Well-being: A Comprehensive Synthesis",
      category: "Literature Review & Mental Health",
      location: "Academic Literature",
      type: "review",
      stats: [
        { label: "Studies Reviewed", value: "35+ Papers", numVal: 35 },
        { label: "Core Domains", value: "3 Pillars", numVal: 3 },
        { label: "Psychosocial Gap", value: "Highlighted", numVal: 90 },
      ],
      objective: "To synthesize literature on psychological distress, coping mechanisms, and social support structures among breast cancer patients in developing healthcare contexts.",
      studyDesign: "Systematic literature review following PRISMA guidelines to synthesize qualitative and quantitative studies.",
      role: "Sole Author — Conducted literature search across PubMed, Google Scholar, and ScienceDirect, extracted key findings, and constructed an integrative psychosocial model.",
      tools: ["PRISMA Framework", "Database Search", "Literature Synthesis", "Reference Management"],
      keyFindings: [
        "Psychological distress (anxiety & depression) is under-diagnosed in over 60% of breast cancer treatment plans.",
        "Family and peer social support significantly buffers post-diagnosis emotional trauma.",
        "Integrated psychosocial counseling alongside oncology treatment improves overall treatment adherence and quality of life.",
      ],
      output: "Systematic Literature Review Manuscript.",
      summary: "A synthesis of 35+ academic studies advocating for the imperative integration of mental health support within standard oncology treatment protocols.",
      visualType: "networkGraph",
    },
  ] as ResearchProject[],

  experience: [
    {
      id: "exp-1",
      organization: "Bureau of Statistics, Government of the Punjab",
      role: "Public Health / Research Intern",
      period: "2024",
      duration: "6-Week Intensive Internship",
      location: "Lahore, Pakistan",
      type: "internship",
      responsibilities: [
        "Gained hands-on exposure to large-scale government health survey methodologies including MICS (Multiple Indicator Cluster Survey).",
        "Assisted in CAPI (Computer Assisted Personal Interviewing) data validation, cleaning, and quality control checks for provincial health datasets.",
        "Executed statistical data management routines in MS Excel and statistical software, organizing raw health indicators.",
        "Participated in departmental briefings on data governance, sampling frames, and provincial indicator reporting.",
      ],
      tags: ["Government Statistics", "Survey Methodology", "Data Management", "MS Excel", "MICS", "CAPI"],
      keyAchievement: "Validated complex provincial health dataset entries across multiple district indicator metrics with zero quality control errors.",
    },
    {
      id: "exp-2",
      organization: "World Health Organization (WHO)",
      role: "Community Outreach Worker — Polio Eradication Campaign",
      period: "2024 – 2025",
      duration: "Field Campaign Duty",
      location: "Punjab, Pakistan",
      type: "outreach",
      responsibilities: [
        "Served on the front lines of high-priority national polio eradication drives, conducting household door-to-door immunization tracking.",
        "Engaged resistant community members through culturally sensitive risk communication and public health dialog.",
        "Maintained field surveillance logs, tracking vaccine coverage rates, refusal cases, and zero-dose children.",
        "Collaborated with district health authorities and security personnel to ensure seamless field logistics and campaign safety.",
      ],
      tags: ["WHO Fieldwork", "Polio Eradication", "Community Engagement", "Field Surveillance", "Risk Communication", "Teamwork"],
      keyAchievement: "Successfully converted numerous vaccine-hesitant households into acceptors through empathetic, community-anchored public health communication.",
    },
  ] as ExperienceItem[],

  skills: [
    {
      category: "RESEARCH DESIGN & METHODOLOGY",
      skills: [
        { name: "Mixed-Methods Research", level: "Advanced", description: "Combining quantitative exit surveys with qualitative in-depth interviews.", tag: "Core" },
        { name: "Questionnaire Development", level: "Advanced", description: "Designing 18-item KAP instruments and Likert-scale tools.", tag: "Survey" },
        { name: "Quantitative Research", level: "Advanced", description: "Cross-sectional studies, sampling strategy, and survey execution.", tag: "Stats" },
        { name: "Qualitative Research", level: "Intermediate", description: "In-depth interview guides, transcription, and thematic analysis.", tag: "Qual" },
        { name: "Literature Review", level: "Advanced", description: "PRISMA systematic search, critical appraisal, and evidence synthesis.", tag: "Academic" },
        { name: "Field Data Collection", level: "Advanced", description: "Door-to-door community surveys, CAPI tools, and exit interviews.", tag: "Field" },
      ],
    },
    {
      category: "DATA & ANALYTICS TOOLKIT",
      skills: [
        { name: "SPSS", level: "Advanced", description: "Descriptive & inferential stats, hypothesis testing, correlation, ANOVA, regression.", tag: "Primary Tool" },
        { name: "Microsoft Excel", level: "Advanced", description: "Data cleaning, Pivot tables, VLOOKUP, logical formulas, data validation.", tag: "Essential" },
        { name: "R", level: "Working Knowledge", description: "Base R scripting, data visualization, and statistical modeling.", tag: "Data Science" },
        { name: "EpiData", level: "Working Knowledge", description: "Epidemiological data entry form design and double-entry validation.", tag: "Epi" },
        { name: "Data Visualization", level: "Advanced", description: "Transforming raw matrices into high-impact charts, graphs, and infographics.", tag: "Design" },
      ],
    },
    {
      category: "COMMUNICATION & PRESENTATION",
      skills: [
        { name: "Microsoft Word", level: "Advanced", description: "Academic formatting, thesis compilation, and research reporting.", tag: "Docs" },
        { name: "Microsoft PowerPoint", level: "Advanced", description: "Executive slide decks, research presentation, and policy briefs.", tag: "Slides" },
        { name: "Canva", level: "Advanced", description: "Public health infographics, community awareness posters, and visual guides.", tag: "Graphics" },
        { name: "Public Speaking", level: "Advanced", description: "Delivering research findings to academic panels and community groups.", tag: "Soft Skill" },
      ],
    },
  ] as SkillCategory[],

  researchProcess: [
    { step: "01", title: "IDENTIFY", desc: "Define the public health problem, gap in evidence, and specific research question." },
    { step: "02", title: "DESIGN", desc: "Select study design, target population, sampling framework, and measurement tools." },
    { step: "03", title: "COLLECT", desc: "Execute ethical fieldwork, household surveys, in-depth interviews, and CAPI tracking." },
    { step: "04", title: "ANALYZE", desc: "Clean, organize, code, and perform quantitative (SPSS/Excel) or qualitative analysis." },
    { step: "05", title: "INTERPRET", desc: "Translate statistical outputs into meaningful epidemiological and social insights." },
    { step: "06", title: "RECOMMEND", desc: "Formulate actionable policy briefs and community interventions to drive health impact." },
  ],

  certifications: [
    { id: "cert-1", title: "Polio Campaign & LQAS Training", issuer: "World Health Organization (WHO)", category: "public-health", details: "Field surveillance, refusal management, and Lot Quality Assurance Sampling methodology." },
    { id: "cert-2", title: "General Nutrition Training Program", issuer: "Pak-Korea Nutrition Center", category: "public-health", details: "Community nutrition assessment, micronutrient deficiencies, and intervention strategies." },
    { id: "cert-3", title: "Hackathon on Nutrition Sensitive Social Protection", issuer: "RIZQ × GAIN", category: "public-health", details: "Collaborative public health problem solving for food security and social safety nets." },
    { id: "cert-4", title: "Medical Camp Volunteer", issuer: "Little Angel Welfare Association", category: "public-health", details: "Assisting community health checkups, medicine distribution, and patient triage." },
    { id: "cert-5", title: "Young Leaders for Peace Building & Social Cohesion", issuer: "Community Leadership Initiative", category: "leadership", details: "Youth empowerment, civic dialogue, and inclusive community advocacy." },
    { id: "cert-6", title: "Communication Skills & Spoken English", issuer: "Language Excellence Institute", category: "leadership", details: "Professional verbal communication and academic presentation." },
    { id: "cert-7", title: "World AIDS Day Event Organizer", issuer: "Department of Public Health, Punjab University", category: "leadership", details: "Public awareness campaign planning, poster design, and student engagement." },
    { id: "cert-8", title: "Al Khidmat Youth Gathering", issuer: "Event Organizing Committee", category: "leadership", details: "Community volunteer coordination and logistics management." },
  ] as Certification[],

  education: {
    degree: "Bachelor of Science in Public Health",
    institution: "University of the Punjab, Lahore, Pakistan",
    period: "2022 – 2026",
    status: "Graduating Scholar",
    coursework: [
      "Epidemiology & Disease Surveillance",
      "Biostatistics & Quantitative Methods",
      "Environmental & Occupational Health",
      "Health Policy & Healthcare Systems",
      "Maternal & Child Health Care",
      "Health Promotion & Risk Communication",
      "Research Methodology & Proposal Writing",
      "Project Management in Healthcare",
      "Infectious & Non-Communicable Diseases",
    ],
  },

  goals: [
    { title: "Public Health Research", desc: "Contributing to academic or institutional epidemiological investigations." },
    { title: "Research Assistant Roles", desc: "Supporting principal investigators in study design, data collection, and manuscript drafting." },
    { title: "Monitoring & Evaluation (M&E)", desc: "Assessing health program impact, indicators, and efficiency metrics." },
    { title: "Data Analysis & Management", desc: "Transforming complex public health datasets into actionable evidence." },
    { title: "Health Programs Implementation", desc: "Executing community-based interventions and disease prevention drives." },
    { title: "Climate & Environmental Health", desc: "Investigating air pollution, thermal stress, and environmental health risks." },
    { title: "Development Sector", desc: "Working with international NGOs, UN bodies, and health development organizations." },
  ],
};

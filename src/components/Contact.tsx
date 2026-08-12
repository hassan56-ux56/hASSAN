import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, ThumbsUp, Sparkles, User, Building, AlertCircle, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  submitContactMessage, 
  getGuestbookEntries, 
  addGuestbookEntry, 
  likeGuestbookEntry, 
  GuestbookEntry 
} from '../lib/firebase';

interface ContactProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode, onToggleTheme }) => {
  const [copied, setCopied] = useState<string | null>(null);

  // Form State for Contact Message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Guestbook State
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const [guestbookData, setGuestbookData] = useState({
    name: '',
    affiliation: '',
    message: ''
  });
  const [isSubmittingGuestbook, setIsSubmittingGuestbook] = useState(false);
  const [guestbookSuccess, setGuestbookSuccess] = useState(false);
  const [isLoadingGuestbook, setIsLoadingGuestbook] = useState(true);

  // Load guestbook on mount
  useEffect(() => {
    loadGuestbook();
  }, []);

  const loadGuestbook = async () => {
    setIsLoadingGuestbook(true);
    try {
      const entries = await getGuestbookEntries();
      setGuestbookEntries(entries);
    } catch (err) {
      console.error('Failed to load guestbook:', err);
    } finally {
      setIsLoadingGuestbook(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGuestbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestbookData.name || !guestbookData.message) return;

    setIsSubmittingGuestbook(true);
    try {
      await addGuestbookEntry(guestbookData);
      setGuestbookSuccess(true);
      setGuestbookData({ name: '', affiliation: '', message: '' });
      await loadGuestbook();
      setTimeout(() => setGuestbookSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingGuestbook(false);
    }
  };

  const handleLike = async (entryId: string) => {
    try {
      await likeGuestbookEntry(entryId);
      setGuestbookEntries(prev =>
        prev.map(item => item.id === entryId ? { ...item, likes: item.likes + 1 } : item)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 bg-[#07120D] text-[#FFF9ED] overflow-hidden z-10 border-t border-[#FFB51B]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Title */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFB51B]/10 border border-[#FFB51B]/30 text-[#FFB51B] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FIREBASE CONNECTED • PERSISTENT STORAGE</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold text-[#FFF9ED] leading-none">
            LET'S <span className="text-[#FFB51B]">CONNECT.</span>
          </h2>
        </div>

        {/* Main Grid: Info + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left: Info & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base font-sans font-light text-white/80 leading-relaxed">
              Have a research inquiry, a public health evaluation project, or looking for a dedicated research analyst? Contact me directly or leave a message below.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#0C1D15] border border-[#FFB51B]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[#FFB51B]/10 text-[#FFB51B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-sans text-white/60 uppercase tracking-widest">EMAIL ADDRESS</div>
                    <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="text-sm sm:text-base font-serif font-bold text-[#FFF9ED] hover:text-[#FFB51B] transition-colors">
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
                    className="px-4 py-2 rounded-full bg-[#FFB51B] text-[#07120D] text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#FFC64D] transition-colors"
                  >
                    SEND
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
                    <a href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`} className="text-sm sm:text-base font-serif font-bold text-[#FFF9ED] hover:text-[#FFB51B] transition-colors">
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

          {/* Right: Direct Firestore Message Form */}
          <div className="lg:col-span-7 bg-[#0C1D15] p-6 sm:p-8 rounded-3xl border border-[#FFB51B]/30 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-[#FFB51B]">
                SEND A RESEARCH INQUIRY
              </h3>
              <span className="text-[10px] font-mono text-[#FFB51B]/80 px-2.5 py-1 rounded bg-[#FFB51B]/10 border border-[#FFB51B]/20">
                Firestore DB
              </span>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Sarah Ahmed"
                    className="w-full px-4 py-3 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@institution.org"
                    className="w-full px-4 py-3 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Organization / Dept
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="WHO / University / NGO"
                    className="w-full px-4 py-3 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Maternal Health Evaluation Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold uppercase tracking-wider text-white/70 mb-1">
                  Message / Proposal *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your research project or collaboration opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FFB51B] to-[#E6A000] text-[#07120D] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(255,181,27,0.4)] transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>SAVING TO FIRESTORE...</span>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY TO FIRESTORE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-xl bg-[#294A37] border border-[#FFB51B] text-xs text-[#FFB51B] flex items-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>Your message has been securely recorded in the Firebase database!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded-xl bg-red-900/40 border border-red-500 text-xs text-red-200 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Failed to save message. Please try again or email directly.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Live Firestore Guestbook & Endorsements Section */}
        <div className="pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#FFB51B]">
                PERSISTENT PUBLIC NETWORK
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FFF9ED] mt-1">
                RESEARCH GUESTBOOK & ENDORSEMENTS
              </h3>
            </div>
            <span className="text-xs font-mono text-white/60">
              Synced with Cloud Firestore Database
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Add Guestbook Form */}
            <div className="lg:col-span-5 bg-[#0C1D15]/80 p-6 rounded-2xl border border-white/15 space-y-4">
              <h4 className="text-base font-serif font-bold text-[#FFB51B] flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>LEAVE AN ENDORSEMENT OR NOTE</span>
              </h4>

              <form onSubmit={handleGuestbookSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    value={guestbookData.name}
                    onChange={e => setGuestbookData({ ...guestbookData, name: e.target.value })}
                    placeholder="Your Full Name *"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={guestbookData.affiliation}
                    onChange={e => setGuestbookData({ ...guestbookData, affiliation: e.target.value })}
                    placeholder="Affiliation / Title (e.g., Public Health Student)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={3}
                    value={guestbookData.message}
                    onChange={e => setGuestbookData({ ...guestbookData, message: e.target.value })}
                    placeholder="Write a message, peer endorsement, or feedback..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07120D] border border-white/15 text-white text-xs focus:border-[#FFB51B] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingGuestbook}
                  className="w-full py-2.5 rounded-xl bg-[#FFB51B] text-[#07120D] text-xs font-bold uppercase tracking-wider hover:bg-[#FFC64D] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingGuestbook ? 'POSTING TO FIRESTORE...' : 'POST ENDORSEMENT'}
                </button>

                {guestbookSuccess && (
                  <p className="text-xs text-[#FFB51B] text-center font-medium">
                    ✓ Posted to Firebase Guestbook!
                  </p>
                )}
              </form>
            </div>

            {/* Live Entries Grid */}
            <div className="lg:col-span-7 space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {isLoadingGuestbook ? (
                <p className="text-xs text-white/50 italic">Loading live entries from Firestore...</p>
              ) : guestbookEntries.length === 0 ? (
                <div className="p-8 text-center border border-dashed border-white/20 rounded-2xl">
                  <p className="text-xs text-white/60">No guestbook entries yet. Be the first to leave a message!</p>
                </div>
              ) : (
                guestbookEntries.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-[#0C1D15] border border-white/10 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <strong className="text-xs font-serif text-[#FFB51B]">{item.name}</strong>
                        <span className="text-[10px] font-sans text-white/50">• {item.affiliation}</span>
                      </div>
                      <p className="text-xs font-sans text-white/80 font-light italic">
                        "{item.message}"
                      </p>
                    </div>

                    <button
                      onClick={() => handleLike(item.id)}
                      className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#FFB51B]/20 text-[#FFB51B] text-[10px] font-bold border border-white/10 transition-colors cursor-pointer flex-shrink-0"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{item.likes}</span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/60">
          <div>
            © {new Date().getFullYear()} Aima Nawaz. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center space-x-6">
            <a href="#about" className="hover:text-[#FFB51B] transition-colors">ABOUT</a>
            <a href="#research" className="hover:text-[#FFB51B] transition-colors">RESEARCH</a>
            <a href="#experience" className="hover:text-[#FFB51B] transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-[#FFB51B] transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-[#FFB51B] transition-colors">CONTACT</a>
          </div>

          <div className="text-[10px] font-mono text-[#FFB51B]/80">
            Firebase Firestore Connected
          </div>
        </div>

      </div>
    </footer>
  );
};

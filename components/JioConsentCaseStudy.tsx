import React from 'react';
import { ArrowLeft, Sun, Moon, Shield, Zap, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import MoreProjects from './MoreProjects';

interface JioConsentCaseStudyProps {
  onBack: () => void;
}

const JioConsentCaseStudy: React.FC<JioConsentCaseStudyProps> = ({ onBack }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const [scrollProgress, setScrollProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 pb-20 transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group text-gray-900 dark:text-gray-200 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-2 rounded-full">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">SaaS / Open Source</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2025—2026</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioConsent: DPDP <br/>
          <span>act compliance</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Pioneering a unified consent manager targeting MeitY "Code for Consent" compliance across accessibility barriers and linguistic diversity.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Category</h4>
            <p className="font-medium">Data Privacy & Compliance</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">UX Manager / Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-indigo-600 dark:text-indigo-400">Top 2 National Finalist</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-24">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Data Privacy Overlay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          The introduction of the Digital Personal Data Protection (DPDP) Act mandated strict consent architectures across public and private sector services. However, a major barrier was conveying complex legal rights to millions of non-technical citizens in a digestible way.
        </p>
        <div className="p-6 bg-indigo-50 dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Shield size={18} className="text-indigo-600 dark:text-indigo-400" />
            MeitY Mandate
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            The platform required uncompromising compliance, extreme transparency, and frictionless cross-platform operability.
          </p>
        </div>
      </section>

      {/* Strategic Execution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          We embraced a localized, mobile-first design system that broke complex consent declarations down into simple, recognizable visual toggle constraints. By implementing an open-source standard, we ensured modularity for rapid federation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Progressive Disclosure</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Rather than bombarding users upfront with lengthy terms of service, users are presented with simplified core requests and intuitive expandable drawers.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Lightbulb size={24} className="text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-bold">Accessibility</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Localized iconography mapped closely to regional standards alongside aggressive translation support empowered marginalized populations.
            </p>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="jioconsent" />

    </div>
  );
};

export default JioConsentCaseStudy;

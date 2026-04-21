import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Shield, Zap, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import MoreProjects from './MoreProjects';

interface JioConsentCaseStudyProps {
  onBack: () => void;
}

const JioConsentCaseStudy: React.FC<JioConsentCaseStudyProps> = ({ onBack }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'auto'>(
    (localStorage.getItem('portfolio-theme') as 'light' | 'dark' | 'auto') || 'auto'
  );
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = () => {
      const shouldBeDark = theme === 'auto' ? mediaQuery.matches : theme === 'dark';
      root.classList.toggle('dark', shouldBeDark);
      setIsDarkMode(shouldBeDark);
    };

    applyTheme();
    localStorage.setItem('portfolio-theme', theme);
    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme]);

  // Sync with other tabs
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'portfolio-theme' && e.newValue) {
        setTheme(e.newValue as 'light' | 'dark' | 'auto');
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('auto');
    else setTheme('light');
  };

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showTitleInHeader, setShowTitleInHeader] = React.useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        setShowTitleInHeader(rect.bottom < 64);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-[#efe3d0] dark:bg-zinc-950 min-h-screen text-[#433422] dark:text-gray-100 font-sans selection:bg-[#433422] selection:text-[#efe3d0] dark:selection:bg-white dark:selection:text-gray-900 pb-20 pt-[74px] transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-[#efe3d0]/80 dark:bg-black/70 backdrop-blur-xl border-b border-[#433422]/5 dark:border-white/5 z-50 transition-all duration-500">
        <button onClick={onBack} className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-[#433422] dark:text-white">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${showTitleInHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="font-serif font-medium text-[18px] text-[#433422] dark:text-white whitespace-nowrap">JioConsent: DPDP Act</span>
        </div>

        <button 
          onClick={cycleTheme} 
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors ml-4 bg-[#433422]/5 dark:bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          title={`Current theme: ${theme}. Click to change.`}
        >
          {theme === 'light' && <Sun size={12} />}
          {theme === 'dark' && <Moon size={12} />}
          {theme === 'auto' && <Monitor size={12} />}
          <span>{theme}</span>
        </button>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-[#433422]/5 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Data Privacy Overlay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium font-sans">SaaS / Open source</span>

        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioConsent: DPDP <br/>
          <span>act compliance</span>
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Pioneering a unified consent manager targeting MeitY "Code for Consent" compliance across accessibility barriers and linguistic diversity.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">UX Design, Legal & Engineering</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-indigo-600 dark:text-indigo-400">Top 2 National Finalist</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          The introduction of the Digital Personal Data Protection (DPDP) Act mandated strict consent architectures across public and private sector services. However, a major barrier was conveying complex legal rights to millions of non-technical citizens in a digestible way.
        </p>
        <div className="p-6 bg-indigo-50 dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Shield size={18} className="text-indigo-600 dark:text-indigo-400" />
            MeitY Mandate
          </h4>
          <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
            The platform required uncompromising compliance, extreme transparency, and frictionless cross-platform operability.
          </p>
        </div>
      </section>

      {/* Strategic Execution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          We embraced a localized, mobile-first design system that broke complex consent declarations down into simple, recognizable visual toggle constraints. By implementing an open-source standard, we ensured modularity for rapid federation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Progressive Disclosure</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Rather than bombarding users upfront with lengthy terms of service, users are presented with simplified core requests and intuitive expandable drawers.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Lightbulb size={24} className="text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-bold">Accessibility</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
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

import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Target, Shield, Zap, Search, Video, Factory, Network } from 'lucide-react';
import dronnectHeroImg from '../dronnectHero.png';
import MoreProjects from './MoreProjects';

interface DronnectCaseStudyProps {
  onBack: () => void;
}

const DronnectCaseStudy: React.FC<DronnectCaseStudyProps> = ({ onBack }) => {
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
          <span className="font-serif font-medium text-[18px] text-[#433422] dark:text-white whitespace-nowrap">Dronnect: UAV Surveillance</span>
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
          <img src={dronnectHeroImg} alt="Drone hovering over power station" className="w-full h-auto object-cover aspect-[21/9]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium  font-sans">Funded PoC</span>

        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          Dronnect: Connected <br/>
          <span>UAV surveillance</span>
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Integrating drone operations directly with Honeywell's Max Pro and ProWatch platforms to replace physical wiring and manual inspections across vast properties.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">Honeywell Engineering & Design</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">Strategic Product Concept Designer</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-sky-600 dark:text-sky-400">Validated Market Expansion</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          In 2017, the global market for unmanned aerial vehicles (UAVs) was rapidly expanding. Honeywell possessed deep domain expertise spanning sensor grids and connected video surveillance, yet had no streamlined conceptual product linking UAV data directly back to its flagship security platforms.
        </p>
        <div className="p-6 bg-sky-50 dark:bg-zinc-900 border border-sky-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Network size={18} className="text-sky-600 dark:text-sky-400" />
            Siloed Systems
          </h4>
          <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
            Contractors were flying drones autonomously, but critical asset data generated strictly isolated reports disconnected from core business systems.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Value Proposition North Star</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          Dronnect was proposed as the essential bridge: natively injecting "go-anywhere" cameras directly into Max Pro Cloud. It transforms surveillance paradigms to aggressively bypass geographical installation bottlenecks affecting large plants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Zap size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Cable Freedom</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Save massively on extensive network cabling by shifting transmission workflows entirely over dense RF frequencies and localized WIFI.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Shield size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Risk Aversion</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Reduce injury potential to physical authorities via preventative surveillance offsets deploying sensor payloads rapidly mapping high-risk earthworks automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-sky-50 dark:bg-zinc-900/50 py-20 mb-20 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-10">Capabilities Mapped</h2>
          <div className="space-y-4">
            {[
              { i: 0, icon: <Video className="text-blue-500 shrink-0" size={22} />, title: 'Reactive Inspection', desc: 'Instantly trigger drones to deploy to specific multi-spectral zones responding immediately to tripped edge sensors (e.g. gas leakage).' },
              { i: 1, icon: <Shield className="text-red-500 shrink-0" size={22} />, title: 'Offensive Safety', desc: 'Deploy proactive netting alongside specialized dust/fire-knockout payload dispersal accessing tightly confined areas.' },
              { i: 2, icon: <Search className="text-orange-500 shrink-0" size={22} />, title: 'Detection Traversal', desc: 'Stealthily track and follow pre-designated assets acting on intelligent command center alerts natively within ProWatch.' },
            ].map((item) => (
            <div key={item.i} className="flex items-start gap-5 bg-[#433422]/5 dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-8">Industry Applications</h2>
        <div className="flex flex-wrap gap-3">
          {['Surveying & Mapping', 'Earthworks & Mining', 'QA / QC Construction', 'Light Payload Delivery', 'Search & Rescue', 'Safety Operations', 'NFC Data Collection', 'Remote Auditing'].map((label, i) => (
            <div key={i} className="px-5 py-3 bg-gray-50 dark:bg-zinc-900/60 rounded-full border border-gray-100 dark:border-zinc-800">
              <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Validation */}
      <section className="bg-gray-900 dark:bg-black text-white py-20 mb-20 relative overflow-hidden transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-3xl mx-auto relative z-10 text-center">
          <Factory className="mx-auto mb-8 text-sky-400 opacity-60" size={48} />
          <h2 className="text-4xl font-serif mb-8">Fast-Forward Validation</h2>
          <p className="text-gray-300 text-lg leading-[1.8] mb-6">
            Pitched initially as an experimental concept, the integration of autonomous drones directly handling critical infrastructure inspection was formally adopted globally. Honeywell expanded its services to scale across the US, surveying hundreds of miles of transmission networks while reducing operational downtime metrics permanently.
          </p>
          <div className="px-4 py-2 bg-gray-800 rounded-full text-xs font-sans tracking-widest text-sky-400 uppercase inline-block mt-4">
            Validated
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="dronnect" />

    </div>
  );
};

export default DronnectCaseStudy;

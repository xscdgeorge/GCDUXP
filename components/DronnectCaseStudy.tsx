import React from 'react';
import { ArrowLeft, Sun, Moon, Target, Shield, Zap, Search, Video, Factory, Network } from 'lucide-react';
import dronnectHeroImg from '../dronnectHero.png';
import MoreProjects from './MoreProjects';

interface DronnectCaseStudyProps {
  onBack: () => void;
}

const DronnectCaseStudy: React.FC<DronnectCaseStudyProps> = ({ onBack }) => {
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
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900 pb-20 transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors group text-gray-900 dark:text-gray-200 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-2 rounded-full">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-b-[32px] overflow-hidden shadow-2xl relative group bg-white dark:bg-black">
          <img src={dronnectHeroImg} alt="Drone hovering over power station" className="w-full h-auto object-cover aspect-[21/9]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider">Funded PoC</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2017</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          Dronnect: Connected <br/>
          <span>UAV surveillance</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Integrating drone operations directly with Honeywell's Max Pro and ProWatch platforms to replace physical wiring and manual inspections across vast properties.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">The Team</h4>
            <p className="font-medium">Honeywell Engineering & Design</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">Strategic Product Concept Designer</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-sky-600 dark:text-sky-400">Validated Market Expansion</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          In 2017, the global market for unmanned aerial vehicles (UAVs) was rapidly expanding. Honeywell possessed deep domain expertise spanning sensor grids and connected video surveillance, yet had no streamlined conceptual product linking UAV data directly back to its flagship security platforms.
        </p>
        <div className="p-6 bg-sky-50 dark:bg-zinc-900 border border-sky-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Network size={18} className="text-sky-600 dark:text-sky-400" />
            Siloed Systems
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Contractors were flying drones autonomously, but critical asset data generated strictly isolated reports disconnected from core business systems.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Value Proposition North Star</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          Dronnect was proposed as the essential bridge: natively injecting "go-anywhere" cameras directly into Max Pro Cloud. It transforms surveillance paradigms to aggressively bypass geographical installation bottlenecks affecting large plants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Zap size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Cable Freedom</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Save massively on extensive network cabling by shifting transmission workflows entirely over dense RF frequencies and localized WIFI.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Shield size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Risk Aversion</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
              { icon: <Video className="text-blue-500 shrink-0" size={22} />, title: 'Reactive Inspection', desc: 'Instantly trigger drones to deploy to specific multi-spectral zones responding immediately to tripped edge sensors (e.g. gas leakage).' },
              { icon: <Shield className="text-red-500 shrink-0" size={22} />, title: 'Offensive Safety', desc: 'Deploy proactive netting alongside specialized dust/fire-knockout payload dispersal accessing tightly confined areas.' },
              { icon: <Search className="text-orange-500 shrink-0" size={22} />, title: 'Detection Traversal', desc: 'Stealthily track and follow pre-designated assets acting on intelligent command center alerts natively within ProWatch.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
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
          <div className="px-4 py-2 bg-gray-800 rounded-full text-xs font-mono tracking-widest text-sky-400 uppercase inline-block mt-4">
            Validated
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="dronnect" />

    </div>
  );
};

export default DronnectCaseStudy;

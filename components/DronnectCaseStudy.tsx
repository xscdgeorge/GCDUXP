import React from 'react';
import { ArrowLeft, Sun, Moon, Target, Shield, Zap, Search, Layout, Video, Factory, Users, Network, TrendingUp } from 'lucide-react';
import dronnectHeroImg from '../dronnectHero.png';

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

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900 pb-20 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-500">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors group text-gray-900 dark:text-gray-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: Dronnect UAV</span>
          <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider">Funded PoC</span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2017</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Dronnect: Connected <br/>
              <span className="text-gray-400 italic">UAV Surveillance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Integrating drone operations directly with Honeywell's Max Pro and ProWatch platforms to replace physical wiring and manual inspections across vast properties.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-6 border-l border-gray-100 dark:border-zinc-800 pl-8 py-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Category</h4>
                <p className="font-medium">Video Surveillance & Sensor Comm</p>
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
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 flex justify-center">
        <div className="rounded-[40px] overflow-hidden shadow-2xl relative group bg-white dark:bg-black inline-block">
          <img 
            src={dronnectHeroImg}
            alt="Drone hovering over power station" 
            className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            In 2017, the global market for unmanned aerial vehicles (UAVs) was rapidly expanding. Honeywell possessed deep domain expertise spanning sensor grids and connected video surveillance, yet had no streamlined conceptual product linking UAV data directly back to its flagship security platforms.
          </p>
          <div className="p-6 bg-sky-50 dark:bg-zinc-900 border border-sky-100 dark:border-zinc-800 rounded-2xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Network size={18} className="text-sky-600 dark:text-sky-400" />
              Siloed Systems
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Contractors were flying drones autonomously, but critical asset data generated strictly isolated reports disconnected from core business systems.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-serif mb-6">Value Proposition Strategy</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Dronnect was proposed as the essential bridge: natively injecting "go-anywhere" cameras directly into Max Pro Cloud. It transforms surveillance paradigms to aggressively bypass geographical installation bottlenecks affecting large plants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">Cable Freedom</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Save massively on extensive network cabling by shifting transmission workflows entirely exclusively over dense RF frequencies and localized WIFI.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold">Risk Aversion</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Reduce injury potential to physical authorities via preventative surveillance offsets deploying sensor payloads rapidly mapping high-risk earthworks automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-sky-50 dark:bg-zinc-900/50 py-32 mb-32 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-900 dark:text-gray-100 shadow-sm">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-serif">Capabilities Mapped</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors">
              <Video className="text-blue-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Reactive Inspection</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Instantly trigger drones to deploy to specific multi-spectral zones responding immediately to tripped edge sensors (e.g. gas leakage).</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors">
              <Shield className="text-red-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Offensive Safety</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Deploy proactive netting alongside specialized dust/fire-knockout payload dispersal accessing tightly confined areas.</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-colors">
              <Search className="text-orange-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Detection Traversal</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stealthily track and follow pre-designated assets acting on intelligent command center alerts natively within ProWatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <h2 className="text-3xl font-serif mb-12 text-center">Industry Applications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Surveying & Mapping' },
            { label: 'Earthworks & Mining' },
            { label: 'QA / QC Construction' },
            { label: 'Light Payload Delivery' },
            { label: 'Search & Rescue' },
            { label: 'Safety Operations' },
            { label: 'NFC Data Collection' },
            { label: 'Remote Auditing' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-zinc-800">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{item.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Wrapping the Context - Fast Forward */}
      <section className="bg-gray-900 dark:bg-black text-white py-32 mb-32 relative overflow-hidden transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-4xl mx-auto relative z-10 text-center">
          <Factory className="mx-auto mb-8 text-sky-400 opacity-60" size={48} />
          <h2 className="text-4xl font-serif mb-8">Fast-Forward Validation</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Pitched initially as an experimental concept, the integration of autonomous drones directly handling critical infrastructure inspection was formally adopted globally. Honeywell expanded its services to scale across the US, surveying hundreds of miles of transmission networks while reducing operational downtime metrics permanently.
          </p>
          <div className="flex justify-center items-center gap-4 mt-8 pb-4">
             <div className="px-4 py-2 bg-gray-800 rounded-full text-xs font-mono tracking-widest text-sky-400 uppercase">
                Validated
             </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center">
        <button 
          onClick={onBack}
          className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
        >
          Return to Portfolio
        </button>
      </section>
    </div>
  );
};

export default DronnectCaseStudy;

import React from 'react';
import { ArrowLeft, Sun, Moon, Crosshair, FileText, LineChart } from 'lucide-react';

interface AthenaOneCaseStudyProps {
  onBack: () => void;
}

const AthenaOneCaseStudy: React.FC<AthenaOneCaseStudyProps> = ({ onBack }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-teal-100 dark:selection:bg-teal-900 pb-20 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-500">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors group text-gray-900 dark:text-gray-200">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: AthenaOne</span>
          <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-4xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-xs font-bold uppercase tracking-wider">Healthcare IT</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2023</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          AthenaOne: Combating <br/>
          <span>financial leaks</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Co-created an uncompromising quality-assurance UX vision to cleanly halt penalty leakage at the point of enrollment using a completely transparent self-service model.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Category</h4>
            <p className="font-medium">Medical Operations ERP</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">Product Design Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-teal-600 dark:text-teal-400">$1M Annual Savings</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-24">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" alt="AthenaOne Dashboard Concept" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          Healthcare onboarding processes suffered from rampant credentialing missteps. Small administrative inconsistencies early on would cascade destructively through the billing engine, eventually triggering catastrophic payer denials or severe penalties downstream.
        </p>
        <div className="p-6 bg-teal-50 dark:bg-zinc-900 border border-teal-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Crosshair size={18} className="text-teal-600 dark:text-teal-400" />
            Proactive Triaging
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            The goal was not just to highlight errors after submission, but rigidly prevent malformed datasets from entering the system at all.
          </p>
        </div>
      </section>

      {/* Strategic Execution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          Flipping the narrative required designing a preventative onboarding "Self-Service Sandbox". The paradigm shifted administrative workflows into intelligent step-by-step constraint layouts mapping closely to institutional requirements implicitly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <FileText size={24} className="text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-bold">Guided Quality Assurance</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              By contextualizing document requirements dynamically, the layout predicts credential overlaps and guides users toward robust submittals reducing bounce rates.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <LineChart size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Economic Rescue</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Deploying fail-safes exclusively at the point of ingestion yielded compound effects that translated directly to saving $1M+ USD annually simply out of avoided penalties alone.
            </p>
          </div>
        </div>
      </section>

      {/* Return */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center mt-20">
        <button onClick={onBack} className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl">
          Return to Portfolio
        </button>
      </section>
    </div>
  );
};

export default AthenaOneCaseStudy;

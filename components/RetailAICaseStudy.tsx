import React from 'react';
import { ArrowLeft, Sun, Moon, Cpu, TrendingUp, Layout } from 'lucide-react';
import retailMerchImg from '../mockupretailmerch.png';
import MoreProjects from './MoreProjects';

interface RetailAICaseStudyProps {
  onBack: () => void;
}

const RetailAICaseStudy: React.FC<RetailAICaseStudyProps> = ({ onBack }) => {
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
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-rose-100 dark:selection:bg-rose-900 pb-20 transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium hover:text-rose-600 dark:hover:text-rose-400 transition-colors group text-gray-900 dark:text-gray-200 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-2 rounded-full">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-b-[32px] overflow-hidden shadow-2xl relative group bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img src={retailMerchImg} alt="Retail Merchandiser UI" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold uppercase tracking-wider">AI Retail Tech</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2024</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          AI retail <br/>
          <span>merchandiser tool</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Empowering category managers via a zero-code WYSIWYG editor powered by active AI discovery engines optimizing localized conversions.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">The Team</h4>
            <p className="font-medium">AI Discovery & Platform Teams</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">Lead UX Strategist</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-rose-600 dark:text-rose-400">70% Conversion Lift</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          Category managers heavily lacked technical autonomy. Generating store variations, injecting localized campaigns, or running A/B tested category lists required exhaustive engineering loops that squashed marketing agility.
        </p>
        <div className="p-6 bg-rose-50 dark:bg-zinc-900 border border-rose-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Cpu size={18} className="text-rose-600 dark:text-rose-400" />
            Heavy Automation
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Users wanted to visually "paint" components into a layout, relying on ML intelligence to dynamically filter thousands of localized SKUs on the backend asynchronously.
          </p>
        </div>
      </section>

      {/* Strategic Execution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          By shifting from rigid operational tables to a drag-and-drop spatial canvas, managers could inherently predict outcomes before shipping. We introduced dynamic component nodes where machine-learning attributes autonomously map highest-converting products locally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Layout size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">WYSIWYG Modeling</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Rebuilding workflow mapping as a true drag-and-drop staging site completely eradicated developer blockages, slashing TTV by 90%.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <TrendingUp size={24} className="text-sky-600 dark:text-sky-400" />
            <h3 className="text-lg font-bold">Discovery Insights</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Integrated generative clustering allowed managers to see estimated conversion likelihoods per localized storefront module dynamically before publishing.
            </p>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="retail-ai" />

    </div>
  );
};

export default RetailAICaseStudy;

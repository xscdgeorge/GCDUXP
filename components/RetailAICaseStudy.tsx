import React from 'react';
import { ArrowLeft, Sun, Moon, ShoppingCart, TrendingUp, Cpu, Layout, Activity } from 'lucide-react';

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

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-rose-100 dark:selection:bg-rose-900 pb-20 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-500">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:text-rose-600 dark:hover:text-rose-400 transition-colors group text-gray-900 dark:text-gray-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: Retail Merchandiser</span>
          <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold uppercase tracking-wider">AI Retail Tech</span>
              <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              AI Retail <br/>
              <span className="text-gray-400 italic">Merchandiser Tool</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Empowering category managers via a zero-code WYSIWYG editor powered closely natively by active AI discovery engines optimizing localized conversions.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-6 border-l border-gray-100 dark:border-zinc-800 pl-8 py-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Category</h4>
                <p className="font-medium">No-Code AI Dashboard</p>
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
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 flex justify-center">
        <div className="rounded-[40px] overflow-hidden shadow-2xl relative group bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
            alt="Retail Merchandiser UI" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Category managers heavily lacked technical autonomy. Generating store variations, injecting localized campaigns, or running A/B tested category lists required exhaustive engineering loops that squashed marketing agility.
          </p>
          <div className="p-6 bg-rose-50 dark:bg-zinc-900 border border-rose-100 dark:border-zinc-800 rounded-2xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Cpu size={18} className="text-rose-600 dark:text-rose-400" />
              Heavy Automation
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Users wanted to visually "paint" components into a layout, relying on ML intelligence to dynamically filter thousands of localized SKUs on the backend asynchronously.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            By shifting from rigid operational tables to a drag-and-drop spatial canvas, managers could inherently predict outcomes before shipping. We introduced dynamic component nodes where machine-learning attributes autonomously map highest-converting products locally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold">WYSIWYG Modeling</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Rebuilding workflow mapping as a true drag-and-drop staging site completely eradicated developer blockages, slashing TTV by 90%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold">Discovery Insights</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Integrated generative clustering allowed managers to see estimated conversion likelihoods per localized storefront module dynamically before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center mt-32">
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

export default RetailAICaseStudy;

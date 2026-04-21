import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Cpu, TrendingUp, Layout } from 'lucide-react';
import retailMerchImg from '../mockupretailmerch.png';
import MoreProjects from './MoreProjects';
import Footer from './Footer';

interface RetailAICaseStudyProps {
  onBack: () => void;
}

const RetailAICaseStudy: React.FC<RetailAICaseStudyProps> = ({ onBack }) => {
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
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900 pb-20 pt-[74px]">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-white">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${showTitleInHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="font-serif font-medium text-[18px] text-white whitespace-nowrap">Retail AI Specialist</span>
        </div>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-[#433422]/5 dark:bg-black/50 border border-gray-100 dark:border-zinc-800 w-full aspect-[21/9]">
          <img src={retailMerchImg} alt="Retail Merchandiser UI" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium font-sans">AI retail tech</span>

        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          AI retail <br/>
          <span>merchandiser tool</span>
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Empowering category managers via a zero-code WYSIWYG editor powered by active AI discovery engines optimizing localized conversions.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">AI Discovery & Platform Teams</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">Lead UX Strategist</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-rose-600 dark:text-rose-400">70% Conversion Lift</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          Category managers heavily lacked technical autonomy. Generating store variations, injecting localized campaigns, or running A/B tested category lists required exhaustive engineering loops that squashed marketing agility.
        </p>
        <div className="p-6 bg-rose-50 dark:bg-zinc-900 border border-rose-100 dark:border-zinc-800 rounded-2xl">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Cpu size={18} className="text-rose-600 dark:text-rose-400" />
            Heavy Automation
          </h4>
          <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
            Users wanted to visually "paint" components into a layout, relying on ML intelligence to dynamically filter thousands of localized SKUs on the backend asynchronously.
          </p>
        </div>
      </section>

      {/* Strategic Execution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Strategic Execution</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          By shifting from rigid operational tables to a drag-and-drop spatial canvas, managers could inherently predict outcomes before shipping. We introduced dynamic component nodes where machine-learning attributes autonomously map highest-converting products locally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Layout size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">WYSIWYG Modeling</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Rebuilding workflow mapping as a true drag-and-drop staging site completely eradicated developer blockages, slashing TTV by 90%.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <TrendingUp size={24} className="text-sky-600 dark:text-sky-400" />
            <h3 className="text-lg font-bold">Discovery Insights</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Integrated generative clustering allowed managers to see estimated conversion likelihoods per localized storefront module dynamically before publishing.
            </p>
          </div>
        </div>
      </section>

      <MoreProjects currentProjectId="retail-ai" />
      <Footer />

    </div>
  );
};

export default RetailAICaseStudy;

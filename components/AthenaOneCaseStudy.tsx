import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Crosshair, FileText, LineChart, Target, Zap, Heart, Users, Search, Lightbulb, CheckCircle, Smartphone, Shield, Languages, FileStack, TrendingUp, IndianRupee, ArrowUpRight, BarChart3, Settings2, Laptop, MousePointer2, ClipboardCheck, AlertCircle, Rocket } from 'lucide-react';
import MoreProjects from './MoreProjects';
import athenaHeroImg from '../athena_hero_dashboard_1776939527175.png';
import athenaSolutionImg from '../athena_solution_configurator_1776939554784.png';

interface AthenaOneCaseStudyProps {
  onBack: () => void;
}

const AthenaOneCaseStudy: React.FC<AthenaOneCaseStudyProps> = ({ onBack }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showTitleInHeader, setShowTitleInHeader] = React.useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

        if (titleRef.current) {
          const rect = titleRef.current.getBoundingClientRect();
          setShowTitleInHeader(rect.bottom < 64);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900 pt-[74px]">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-white">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${showTitleInHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="font-serif font-medium text-[18px] text-white whitespace-nowrap">athenaOne: Overhauling CQM Management</span>
        </div>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[970px] mx-auto mb-16">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-[#433422]/5 dark:bg-black/50 border border-zinc-800 w-full aspect-[21/9] max-h-[414px]">
          <img src={athenaHeroImg} alt="athenaOne Clinical Quality Dashboard" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-24">
        <div className="flex gap-3 mb-8">
          <span className="px-3 py-1 bg-zinc-900 text-gray-400 rounded-full text-xs font-medium font-sans uppercase tracking-wider">athenahealth</span>
        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-white">
          Overhauling <br/>
          <span className="text-white text-shadow-sm">CQM Management.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-sans font-light">
          This case study highlights how George Davis overhauled the Clinical Quality Measure (CQM) management system to eliminate multimillion-dollar penalties and improve provider efficiency.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-zinc-500 mb-2">The Team</h4>
            <p className="font-medium text-white">1 PM, 1 UX, 6 Dev</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-zinc-500 mb-2">My Role</h4>
            <p className="font-medium text-white">Lead UX Designer</p>
          </div>
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-zinc-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-400">96% TCR • Penalty Elimination</p>
          </div>
        </div>
      </header>

      {/* Situation */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24">
        <h2 className="text-[42px] font-serif mb-8 text-white">Situation: The Cost of Complexity<span className="text-orange-500">.</span></h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans font-light">
          <p>
            Clinical Quality Measures (CQMs) are essential for value-based care; providers must track and submit these reports to insurers and the government to receive payment. However, athenahealth’s legacy system was so cumbersome that:
          </p>
          <ul className="space-y-6 mt-8">
            <li className="flex gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
              <span><strong className="text-white">Financial Risk:</strong> The company paid millions in penalties due to poor management experiences and late enrollments.</span>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
              <span><strong className="text-white">Operational Burden:</strong> "Workarounds" became the norm, with athenahealth operations teams manually enrolling clients via error-prone Excel docs.</span>
            </li>
            <li className="flex gap-4">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
              <span><strong className="text-white">Scalability:</strong> The entry of massive players like Walmart Health into the clinic space highlighted that the current manual processes could not scale.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Complication */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-32 border-t border-zinc-800 pt-20">
        <h2 className="text-[42px] font-serif mb-8 text-white">Complication: A Broken Workflow<span className="text-orange-500">.</span></h2>
        <p className="text-gray-400 mb-12 text-lg font-light">Through contextual inquiries and surveys, George identified friction at every stage of the journey:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5">
            <h4 className="font-bold mb-3 text-white text-xl font-serif">Enrollment</h4>
            <p className="text-gray-400 leading-relaxed text-sm font-sans">Small practices couldn't afford quality analysts, and the DIY enrollment process was non-existent.</p>
          </div>
          <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5">
            <h4 className="font-bold mb-3 text-white text-xl font-serif">Care Delivery</h4>
            <p className="text-gray-400 leading-relaxed text-sm font-sans">Providers were overwhelmed by unorganized, repetitive measures. They couldn't satisfy measures if a patient arrived even one day "too early."</p>
          </div>
          <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 md:col-span-2">
            <h4 className="font-bold mb-3 text-white text-xl font-serif">Submission</h4>
            <p className="text-gray-400 leading-relaxed text-sm font-sans">Errors in initial enrollment weren't discovered until the submission window, leading to a reactive, expensive "fire drill" to avoid penalties.</p>
          </div>
        </div>
      </section>

      {/* Resolution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-32 border-t border-zinc-800 pt-20">
        <h2 className="text-[42px] font-serif mb-8 text-white">Resolution: From Manual to Self-Service<span className="text-orange-500">.</span></h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12 font-sans font-light">
          George remapped the complex journey into a <strong className="text-white">Jobs to be Done (JTBD)</strong> framework and established four new design principles: <strong className="text-orange-400">Self-Service, Better Tools for Managers, Clinically Insightful, and Seamless Reports.</strong>
        </p>
        
        <div className="space-y-24">
          {/* Point 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black text-sm font-bold">1</span>
              Instant Enrollment
            </h3>
            <p className="text-gray-400 leading-relaxed font-sans text-lg">
              He replaced the 14-day manual turnaround with a <strong className="text-white">2-step DIY process</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                <div className="text-orange-500 mb-3"><Shield size={24} /></div>
                <h5 className="text-white font-bold mb-2">Automation</h5>
                <p className="text-gray-500 text-sm">Built-in guidance and error prevention baked into the UI.</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                <div className="text-orange-500 mb-3"><Zap size={24} /></div>
                <h5 className="text-white font-bold mb-2">Efficiency</h5>
                <p className="text-gray-500 text-sm">Features to "copy and paste" measures between providers of the same specialty.</p>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black text-sm font-bold">2</span>
              The Redesigned QM Tab
            </h3>
            <p className="text-gray-400 leading-relaxed font-sans text-lg">
              The patient-facing Quality Management (QM) tab was overhauled to reduce "notification overload":
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-orange-500 font-bold mb-2 text-xs uppercase">Smart Sorting</div>
                <p className="text-gray-500 text-xs leading-relaxed">Consolidated lists sorted by due date, highlighting overdue tasks.</p>
              </div>
              <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-orange-500 font-bold mb-2 text-xs uppercase">Lookback Logic</div>
                <p className="text-gray-500 text-xs leading-relaxed">Updated algorithms to find the latest clinical records automatically.</p>
              </div>
              <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-orange-500 font-bold mb-2 text-xs uppercase">Early Satisfaction</div>
                <p className="text-gray-500 text-xs leading-relaxed">Allowed providers to satisfy measures before the official due date.</p>
              </div>
            </div>
            <div className="mt-8 rounded-3xl overflow-hidden border border-white/10">
              <img src={athenaSolutionImg} alt="athenaOne Solution Mockup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Point 3 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black text-sm font-bold">3</span>
              Strategic Flexibility
            </h3>
            <p className="text-gray-400 leading-relaxed font-sans text-lg">
              When a major strategic client required a custom UI, George developed a <strong className="text-white">dedicated configurator</strong> outside the patient chart. This allowed for specialty-specific setups and a "Quality Tab Preview" so managers could verify the provider's view before deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 border-t border-zinc-800 pt-20">
        <h2 className="text-[42px] font-serif mb-12 text-center text-white">Results & Impact<span className="text-orange-500">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-zinc-900 rounded-[32px] border border-white/5 hover:border-orange-500/20 transition-all">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Penalty Elimination</h4>
            <p className="text-gray-400 text-sm leading-relaxed">No more million-dollar penalties stemming from bad or late enrollments.</p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[32px] border border-white/5 hover:border-orange-500/20 transition-all">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Cost Reduction</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Dramatically reduced the size of the internal operations team needed to support enrollments.</p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[32px] border border-white/5 hover:border-orange-500/20 transition-all">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Revenue Growth</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Improved performance scores led to higher reimbursements for both athenahealth and its partners.</p>
          </div>
          <div className="p-8 bg-zinc-900 rounded-[32px] border border-white/5 hover:border-orange-500/20 transition-all">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Market Validation</h4>
            <p className="text-gray-400 text-sm leading-relaxed">While competitors exited the space, athenahealth’s streamlined system provided a sustainable path forward.</p>
          </div>
        </div>
      </section>

      {/* Key Learning Quote */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-32">
        <div className="p-12 bg-orange-500 rounded-[40px] text-white">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 opacity-80">Key Learning</h4>
          <p className="text-2xl font-serif leading-relaxed italic">
            "In complex healthcare environments, focusing on 'Jobs to be Done' rather than static personas allows for greater efficiency when dealing with high-stakes, dynamic user roles."
          </p>
        </div>
      </section>

      <MoreProjects currentProjectId="athenaone" />
      
      {/* Inline Footer Content */}
      <div className="mt-[100px] pb-[20px] flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center">
          <span className="font-medium text-[14px] text-[#9ca3af]">
            &copy; {new Date().getFullYear()} George Chiramal Davis
          </span>
        </div>
      </div>
    </div>
  );
};

export default AthenaOneCaseStudy;

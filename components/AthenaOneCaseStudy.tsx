import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Crosshair, FileText, LineChart, Target, Zap, Heart, Users, Search, Lightbulb, CheckCircle, Smartphone, Shield, Languages, FileStack, TrendingUp, IndianRupee, ArrowUpRight, BarChart3, Settings2, Laptop, MousePointer2, ClipboardCheck } from 'lucide-react';
import MoreProjects from './MoreProjects';
import Footer from './Footer';

interface AthenaOneCaseStudyProps {
  onBack: () => void;
}

const AthenaOneCaseStudy: React.FC<AthenaOneCaseStudyProps> = ({ onBack }) => {
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
          <span className="font-serif font-medium text-[18px] text-white whitespace-nowrap">athenaOne: Streamlining Clinical Quality</span>
        </div>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-7xl mx-auto mb-16">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-[#433422]/5 dark:bg-black/50 border border-[#e5d9c5] dark:border-zinc-800 w-full aspect-[21/9]">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" alt="AthenaOne Clinical Quality Management" className="w-full h-full object-cover grayscale opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-24">
        <div className="flex gap-3 mb-8">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium  font-sans">athenahealth</span>
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium  font-sans">Healthcare IT</span>

        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-[#433422] dark:text-white">
          Streamlining <br/>
          <span className="text-orange-500 text-shadow-sm">Clinical Quality.</span>
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-2xl leading-relaxed mb-12 font-sans">
          Eliminating multi-million dollar MIPS penalties through a preventative, self-service vision for Clinical Quality Measure (CQM) management.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[#e5d9c5] dark:border-zinc-800 pt-8 font-sans">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium text-[#433422] dark:text-white">Lead UX Designer</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600 dark:text-orange-400">MIPS Penalty Eliminated</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Impact</h4>
            <p className="font-medium text-[#433422] dark:text-white">$1M+ Annual Savings</p>
          </div>
        </div>
      </header>

      {/* The Situation */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24">
        <h2 className="text-[42px] font-serif mb-6">The Situation<span className="text-orange-500">.</span></h2>
        <p className="text-lg text-[#5a4a3a] dark:text-gray-300 leading-[1.8] mb-10 font-sans">
          Athenahealth was paying millions in penalties and creating workarounds on behalf of practices due to poor experiences managing Clinical Quality Measures (CQM). The entry of **Walmart Health** into retail clinics added massive pressure to scale our scalability without increasing operations overhead.
        </p>
        <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900 border border-orange-500/20 dark:border-zinc-800 rounded-3xl">
          <h4 className="font-bold mb-3 flex items-center gap-2 text-[#433422] dark:text-white">
            <TrendingUp size={18} className="text-orange-500" />
            Commercial Priority
          </h4>
          <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed font-sans text-[16px]">
            Requests from 247 accounts represented over **$467M in at-risk revenue**, making this a top strategic imperative for the business.
          </p>
        </div>
      </section>

      {/* Empathize */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-6">Empathize<span className="text-orange-500">.</span></h2>
        <p className="text-lg text-[#5a4a3a] dark:text-gray-300 leading-[1.8] mb-10 font-sans">
          I conducted contextual inquiries, surveys, and customer feedback analysis in collaboration with research-ops to map complex clinician journeys into actionable insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Search size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Contextual Inquiries</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm font-sans">
              Spent time in clinical settings observing how quality analysts and providers interact with rigid reporting systems.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <MousePointer2 size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Feedback Analysis</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm font-sans">
              Analyzed support tickets and enrollment logs to pinpoint where Excel-based workarounds were failing.
            </p>
          </div>
        </div>
      </section>

      {/* Actionable Insights Sub-section */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-3xl font-serif mb-3">Actionable Insights<span className="text-orange-500">.</span></h2>
        <p className="text-[#6B5A45] dark:text-gray-400 mb-10 leading-relaxed">Rigorous research revealed 4 systemic friction points.</p>
        <div className="space-y-4">
          {[
            { icon: <ClipboardCheck className="text-orange-500 shrink-0" size={22} />, title: 'Setup & Enrolment complexity', desc: 'Operations team had to do enrollment on behalf of clients because DIY was impossible with error-prone Excel files.' },
            { icon: <Laptop className="text-red-500 shrink-0" size={22} />, title: 'Visibility Gap', desc: "Quality Manager tools were essentially 'provider tools' in disguise, failing to meet the oversight requirements for practice-wide scores." },
            { icon: <BarChart3 className="text-blue-500 shrink-0" size={22} />, title: 'Performance Stagnation', desc: 'Clinicians were stuck with outdated/repetitive measures because there was no way to easily satisfy "soon-to-be-due" goals early.' },
            { icon: <Zap className="text-emerald-500 shrink-0" size={22} />, title: 'Submission Lag', desc: 'Errors caught during the submission window triggered day-long back-and-forths, creating expensive reactive fixes over preventative ones.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 bg-[#433422]/5 dark:bg-gray-50/5 p-5 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="font-bold mb-1 text-[#433422] dark:text-white">{item.title}</h4>
                <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Define */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-6">Define<span className="text-orange-500">.</span></h2>
        <p className="text-lg text-[#5a4a3a] dark:text-gray-300 leading-[1.8] mb-10 font-sans">
          I remapped complex journeys into a **Jobs to be done (JTBD)** format, which trumped personas for this domain due to the huge number of dynamic, overlapping roles.
        </p>
        <div className="p-6 bg-orange-500/5 dark:bg-zinc-900 rounded-3xl border border-orange-500/10 dark:border-zinc-800 space-y-6">
          <h4 className="text-xl font-bold font-serif text-orange-600 dark:text-orange-400">The Core Friction</h4>
          <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed font-sans italic">
            "Resolving issues during the submission window takes about a day of back-and-forth per provider. As a workaround, some clinics hold off enrollment until the last minute, crushing their overall quality scores due to missed clinical opportunities."
          </p>
        </div>
      </section>

      {/* Ideation */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-6">Ideation<span className="text-orange-500">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 font-sans">
           <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#433422] dark:text-white">New Design Principles</h3>
              <ul className="space-y-3 text-[#6B5A45] dark:text-gray-400">
                <li className="flex gap-3"><CheckCircle size={16} className="text-orange-500 mt-1" /> Self Service Enrollment</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-orange-500 mt-1" /> Seamless Reporting Drill-downs</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-orange-500 mt-1" /> Drill-down clinical analysis</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-orange-500 mt-1" /> Targeted target Targets</li>
              </ul>
           </div>
           <div className="bg-[#433422] dark:bg-zinc-800 p-8 rounded-3xl text-[#efe3d0]">
              <Lightbulb size={24} className="text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-sans text-white">The Self-Service Sandbox</h3>
              <p className="opacity-80 text-sm leading-relaxed">
                The strategy shifted from manual checking to a **2-step DIY DIY flow** with instant guidance and error prevention baked into the UI ingestion point.
              </p>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-12">Solution<span className="text-orange-500">.</span></h2>
        
        <div className="space-y-24">
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-[#433422] dark:text-white font-serif">Consolidated QM Tab</h3>
             <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed font-sans">
               I grouped highly correlated but distinct measures into unified cards. Instead of 'Other Measures', we moved to a single list sorted by due date, empowering clinicians to satisfy measures before the due date if the patient came in early.
             </p>
          </div>
          
          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-[#433422] dark:text-white font-serif">Dedicated Performance Configurator</h3>
             <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed font-sans">
               To handle institutional variations (like our strategic clients who had built their own UI), I designed a dedicated configurator outside the patient chart. This allowed for specialty-based templates and predictive score analysis for Quality Managers.
             </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-6">Impact<span className="text-orange-500">.</span></h2>
        <p className="text-lg text-[#5a4a3a] dark:text-gray-300 leading-[1.8] mb-12 font-sans">
          The preventative vision didn't just save money; it transformed the core profitability model of the performance division.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <div className="space-y-4 p-8 bg-orange-500/5 rounded-3xl border border-orange-500/10">
            <div className="text-5xl font-serif text-orange-500">100%</div>
            <div className="font-bold text-[#433422] dark:text-white  text-sm">MIPS Penalty Eliminated</div>
            <p className="text-[#6B5A45] dark:text-gray-400 text-sm">Completely halted million-dollar annual leaks caused by improper provider enrollments.</p>
          </div>
          <div className="space-y-4 p-8 bg-orange-500/5 rounded-3xl border border-orange-500/10">
            <div className="text-5xl font-serif text-orange-500">$1M+</div>
            <div className="font-bold text-[#433422] dark:text-white  text-sm">Operational Savings</div>
            <p className="text-[#6B5A45] dark:text-gray-400 text-sm">Reduced dependencies on massive internal ops teams previously required for manual fixes.</p>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-24 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-[42px] font-serif mb-6">Learnings<span className="text-orange-500">.</span></h2>
        <div className="space-y-8 font-sans text-[#5a4a3a] dark:text-gray-300 text-lg leading-relaxed">
           <p><strong>Design for Diplomacy:</strong> US Healthcare is riddled with technical and policy compromises. UX must handle these with diplomacy between business and policy.</p>
           <p><strong>JTBD &gt; Personas:</strong> In domain-heavy SaaS, Personas can often get in the way of efficiency. JTBD allows us to build for the task, not the stereotype.</p>
           <p><strong>Notification Overload:</strong> We need to rethink alerts outside the product. I proposed starting an open standard for healthcare alerts, similar to the FAA.</p>
        </div>
      </section>

      <MoreProjects currentProjectId="athenaone" />
      <Footer />
    </div>
  );
};

export default AthenaOneCaseStudy;

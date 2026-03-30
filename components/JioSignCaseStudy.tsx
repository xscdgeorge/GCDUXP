import React from 'react';
import { 
  ArrowLeft, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  Lightbulb, 
  Sparkles, 
  TestTube2, 
  Layout, 
  Smartphone, 
  FileText, 
  Clock, 
  Languages,
  MousePointer2,
  Share2,
  Sun,
  Moon
} from 'lucide-react';
import jioSignHeroImg from '../womanEsigning.png';

interface JioSignCaseStudyProps {
  onBack: () => void;
}

const JioSignCaseStudy: React.FC<JioSignCaseStudyProps> = ({ onBack }) => {
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
          Back
        </button>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: JioSign</span>
          <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-4xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider">eSignature SaaS</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2024</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioSign: Rebuilding <br/>
          <span>trust & growth</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          A strategic overhaul of eSignature workflows, pivoting to a "Pay-as-you-go" model and mobile-first approach for the Indian market.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">3 PMs, 1 Sr UX, 15 Engineers</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Design Strategist</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600">1M Docs/Day | 78 SUS Score</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-24">
        <div className="rounded-[32px] overflow-hidden aspect-[21/9] shadow-2xl relative group bg-white dark:bg-black">
          <img src={jioSignHeroImg} alt="JioSign Interface" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          Despite being a free internal tool, 200+ internal organizations preferred competitor apps. Adoption was low, conversion was poor, and the previous UX team had left stakeholders skeptical.
        </p>
        <div className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800 mb-10">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Target size={18} className="text-orange-600 dark:text-orange-400" />
            Product-Led Growth
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            We needed to pivot from a forced internal utility to a "Product-Led" solution that users actually wanted to use.
          </p>
        </div>
      </section>

      {/* Managerial Strategy */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Managerial Strategy</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          My focus was on rebuilding trust and establishing a new design culture. I introduced Object-Oriented UX (OOUX) to align stakeholders and Subject Matter Experts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Trust & Communication</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Established open communication expectations and ran OOUX workshops to ensure every stakeholder felt heard and aligned on the core objects of the system.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Zap size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Strategic Pivot</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Proposed a "Pay-as-you-go" model instead of subscriptions and a "Mobile-First" approach to match the reality of the Indian market.
            </p>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="bg-gray-50 dark:bg-zinc-900/50 py-20 mb-20 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm">
              <Search size={24} />
            </div>
            <h2 className="text-3xl font-serif">Research Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Smartphone className="text-orange-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Desktop-Centric Legacy</h4>
              <p className="text-sm text-gray-500">The tool wasn't built for mobile, yet the majority of users only had access to smartphones.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Share2 className="text-blue-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">WhatsApp Workarounds</h4>
              <p className="text-sm text-gray-500">Users reshared links on WhatsApp because email/SMS invites were consistently ignored.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Clock className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Field Agent Pressure</h4>
              <p className="text-sm text-gray-500">Agents under severe time pressure were sharing personal devices with signatories to "speed up" the process.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <FileText className="text-purple-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">The Template Gap</h4>
              <p className="text-sm text-gray-500">No templates meant users had to re-upload and re-setup workflows for every single document.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Shield className="text-red-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Intimidating Jargon</h4>
              <p className="text-sm text-gray-500">Signatories felt rushed and signed documents without understanding the complex legal language.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <MousePointer2 className="text-indigo-500 mb-4" size={32} />
              <h4 className="font-bold mb-2">Subscription Barriers</h4>
              <p className="text-sm text-gray-500">Tracking subscriptions was a major barrier to adoption for small businesses and individuals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-12">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Mobile First', desc: 'Optimized for the smartphone-only majority in India.' },
            { title: 'Intuitive', desc: 'Think OTP & QR codes, not complicated passwords.' },
            { title: 'Fast', desc: 'Field agents need to visit several homes a day. Speed is the feature.' },
            { title: 'Accessible', desc: 'Translation and summarization for non-legal experts.' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Enhancements */}
      <section className="bg-orange-600 text-white py-20 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="px-6 md:px-10 max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Sparkles size={32} />
            <h2 className="text-4xl font-serif">AI-Powered Accessibility</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-orange-100 text-xl leading-relaxed">
                We leveraged GenAI to transform the intimidating legal process into a supportive, guided experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Smartphone className="mb-4 text-orange-200" />
                  <h4 className="font-bold mb-2">Mobile Conversion</h4>
                  <p className="text-xs text-orange-100">Automatically converts complex PDFs into mobile-friendly, readable documents.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Languages className="mb-4 text-orange-200" />
                  <h4 className="font-bold mb-2">Instant Translation</h4>
                  <p className="text-xs text-orange-100">Translates legal jargon into local languages on request for better understanding.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Layout className="mb-4 text-orange-200" />
                  <h4 className="font-bold mb-2">Auto-Templatization</h4>
                  <p className="text-xs text-orange-100">AI identifies document structures to suggest and create reusable templates.</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <FileText className="mb-4 text-orange-200" />
                  <h4 className="font-bold mb-2">Smart Summarization</h4>
                  <p className="text-xs text-orange-100">Highlights key clauses and categorizes risks for the signatory.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-[40px] p-8 border border-white/10 backdrop-blur-md">
              <div className="aspect-[4/5] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-8">
                      <Sparkles className="mx-auto mb-4 text-orange-500" size={48} />
                      <div className="text-sm font-mono text-orange-500 mb-2 uppercase tracking-widest">AI Assistant Active</div>
                      <div className="text-2xl font-serif italic text-white">"I've summarized the 3 key clauses you need to review before signing."</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-12 text-center">The Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 bg-gray-900 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">1M</div>
            <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Docs Signed / Day</div>
          </div>
          <div className="p-10 bg-orange-600 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">78</div>
            <div className="text-orange-200 uppercase tracking-widest text-xs font-bold">SUS Score (+26)</div>
          </div>
          <div className="p-10 bg-gray-900 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">96%</div>
            <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Task Completion Rate</div>
          </div>
          <div className="p-10 bg-emerald-600 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">&lt;1d</div>
            <div className="text-emerald-200 uppercase tracking-widest text-xs font-bold">Time to Value</div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8 italic text-gray-400">Manager's Reflection</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          "Rebuilding trust with the team was as important as the design itself. By introducing OOUX and advocating for a mobile-first, pay-as-you-go model, we transformed a struggling utility into a market-leading SaaS product."
        </p>
        <button 
          onClick={onBack}
          className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
        >
          View More Projects
        </button>
      </section>
    </div>
  );
};

export default JioSignCaseStudy;

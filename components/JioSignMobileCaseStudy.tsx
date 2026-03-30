import React from 'react';
import { ArrowLeft, Sun, Moon, Smartphone, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, Layout, FileText, Share2, Languages, TrendingUp } from 'lucide-react';
import jioSignMobileImg from '../upshoteSigning2people.png';

interface JioSignMobileCaseStudyProps {
  onBack: () => void;
}

const JioSignMobileCaseStudy: React.FC<JioSignMobileCaseStudyProps> = ({ onBack }) => {
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
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: JioSign Mobile-First</span>
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
          Winning back lost <br/>
          <span>customers</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          A mobile-first experience & simplified pricing that transformed JioSign from a rejected internal tool into a competitive eSignature product — achieving 96% TCR and earning user trust with AI-powered accessibility.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">The Team</h4>
            <p className="font-medium">3 PMs, 1 Sr UX, 15 Engineers</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600 dark:text-orange-400">96% TCR | 78 SUS | "Take my money"</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-24">
        <div className="rounded-[32px] overflow-hidden aspect-[21/9] shadow-2xl relative group bg-white dark:bg-black">
          <img 
            src={jioSignMobileImg}
            alt="JioSign Mobile-First Interface" 
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Situation */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Situation</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          I discovered the JioSign team while scouting for SaaS products to build into Jio's digital identity & governance ecosystem alongside JioID. The platform faced severe adoption issues both internally and externally.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8]">
          Hundreds of internal businesses chose to pay millions for third-party services instead of utilizing the free in-house product. The mobile experience was unusable, resulting in a <strong className="text-gray-900 dark:text-white">57% Task Completion Rate</strong> and <strong className="text-gray-900 dark:text-white">0 conversions</strong>, rendering the platform unviable for most businesses.
        </p>
      </section>

      {/* Strategic Move */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">My Strategic Move</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          I convinced leadership that the project needed embedded designers with ownership rather than an agency approach. I had the project transferred to my team and set out to lead the design vision for JioSign 2.0 — transforming it from a failing utility into a competitive, domain-focused freemium product.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          This required my senior designer and I to conduct deep analysis of the existing product, the e-signature domain, and customers, then ruthlessly prioritize key areas for the MVP.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">OOUX Workshops</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Facilitated Object-Oriented UX workshops to remove misconceptions and align cross-functional teams of Design, Product, Engineering, Business, internal customers, and SMEs.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Search size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Customer Journey Mapping</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Conducted interviews with senior leaders and strategic customers then guided the Sr. designer to refine qualitative & quantitative research into actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="bg-gray-50 dark:bg-zinc-900/50 py-20 mb-20 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-3">Actionable Insights</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">From rigorous research, we distilled 7 critical insights that shaped every design decision.</p>
          <div className="space-y-4">
            {[
              { icon: <Smartphone className="text-orange-500 shrink-0" size={22} />, title: 'Mobile is a Must-Have', desc: 'Majority of signatories open invites on mobile from email or WhatsApp. Without excellent mobile support, TCR will remain poor.' },
              { icon: <Shield className="text-red-500 shrink-0" size={22} />, title: 'Signatories Feel Intimidated', desc: 'In-person agents rush signatories to sign. Users often share personal devices with agents or start unused laptops only to face system update dialogs.' },
              { icon: <Languages className="text-blue-500 shrink-0" size={22} />, title: 'Translation & Summary', desc: 'Signatories sign docs without understanding jargon or language. Removing ambiguity provides peace of mind as a quality-of-life feature.' },
              { icon: <Users className="text-purple-500 shrink-0" size={22} />, title: 'Role-Based Access Needed', desc: 'Password sharing is used as a collaboration workaround — dangerously wrong on legal, security, and compliance fronts.' },
              { icon: <FileText className="text-emerald-500 shrink-0" size={22} />, title: 'Templates & Workflows', desc: 'Without templates, businesses re-upload the same docs and set up workflows each time. Industry-specific templates will accelerate adoption.' },
              { icon: <Share2 className="text-indigo-500 shrink-0" size={22} />, title: 'Upsell on Success', desc: 'Without an upsell flow on successful signing, we lose the best moment to convert a user. Touch-points should not be wasted.' },
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

      {/* MVP Problem Statements & Design Principles */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-8">MVP Problem Statements</h2>
        <div className="space-y-4 mb-16">
          <div className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <div className="flex items-start gap-4">
              <span className="text-orange-600 dark:text-orange-400 font-mono font-bold mt-0.5">01</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">How might we reduce friction to sign documents?</p>
            </div>
          </div>
          <div className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <div className="flex items-start gap-4">
              <span className="text-orange-600 dark:text-orange-400 font-mono font-bold mt-0.5">02</span>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">How might we improve the doc setup, send and track experience?</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif mb-8">Design Principles</h2>
        <div className="flex flex-wrap gap-3">
          {['Mobile 1st', 'Intuitive in India', 'Templates', 'Role-Based', 'Embeddable', 'Accessible', 'Fast'].map((p, i) => (
            <div key={i} className="px-5 py-3 bg-gray-50 dark:bg-zinc-900/60 rounded-full border border-gray-100 dark:border-zinc-800 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Actions */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-10">Key Design Actions</h2>
        <div className="space-y-6">
          <div className="p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-4">
            <Smartphone className="text-orange-500" size={28} />
            <h3 className="text-xl font-bold">Mobile-First Design Strategy</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-[1.8]">
              Established the central design principle to provide an adaptive mobile-first experience, recognizing that the majority of signatories access invites via email or WhatsApp on their phones.
            </p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-4">
            <Shield className="text-blue-500" size={28} />
            <h3 className="text-xl font-bold">Streamlined Auth with JioID</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-[1.8]">
              Replaced previous login methods by implementing OTP (One-Time Password) for both email and mobile number — intuitive and familiar in India.
            </p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-4">
            <Zap className="text-emerald-500" size={28} />
            <h3 className="text-xl font-bold">Improved Signatory Flow</h3>
            <ul className="text-gray-500 dark:text-gray-400 leading-[1.8] space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> Clear instructions and videos to guide users</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> One-by-one guided fields to reduce friction</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> Name correction for misspellings by doc owner</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> Strict signing order — next person only sees the link when previous finishes</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-4">
            <Layout className="text-purple-500" size={28} />
            <h3 className="text-xl font-bold">Document Owner Empowerment</h3>
            <ul className="text-gray-500 dark:text-gray-400 leading-[1.8] space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-1 shrink-0" /> Upload, rename, and configure from mobile</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-1 shrink-0" /> Simplified signing order rearrangement</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-1 shrink-0" /> WhatsApp support for invite sharing</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-1 shrink-0" /> Bulk actions: sign, remind, delete</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI Feature */}
      <section className="bg-orange-600 text-white py-20 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="px-6 md:px-10 max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Sparkles size={32} />
            <h2 className="text-4xl font-serif">AI automations</h2>
          </div>
          <p className="text-orange-100 text-xl leading-[1.8] mb-10">
            We ideated and scoped AI-enhanced features that earned the most powerful user validation we could hope for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Smartphone className="mb-4 text-orange-200" />
              <h4 className="font-bold mb-2">Mobile conversion</h4>
              <p className="text-orange-100 leading-relaxed">AI converts complex PDFs into mobile-friendly, readable documents automatically.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Languages className="mb-4 text-orange-200" />
              <h4 className="font-bold mb-2">Legal translation</h4>
              <p className="text-orange-100 leading-relaxed">Document owners can allow AI to legally translate docs into local languages on request.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <FileText className="mb-4 text-orange-200" />
              <h4 className="font-bold mb-2">Template suggestions</h4>
              <p className="text-orange-100 leading-relaxed">AI analyses uploaded documents to auto-suggest reusable templates, eliminating repetitive setup for recurring workflows.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <TrendingUp className="mb-4 text-orange-200" />
              <h4 className="font-bold mb-2">Usage insights</h4>
              <p className="text-orange-100 leading-relaxed">Intelligent dashboards surface signing patterns, bottleneck detection, and completion forecasts to help doc owners optimise their workflows.</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-md text-center">
            <MessageSquare className="mx-auto mb-4 text-orange-300" size={36} />
            <div className="text-3xl font-serif italic mb-2">"Take my money"</div>
            <div className="text-orange-200">— test participant after trying the AI translation feature</div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-10 text-center">Pilot Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-gray-900 text-white rounded-[24px] text-center">
            <div className="text-3xl font-bold mb-2">96%</div>
            <div className="text-gray-400 uppercase tracking-widest font-bold">TCR</div>
          </div>
          <div className="p-6 bg-orange-600 text-white rounded-[24px] text-center">
            <div className="text-3xl font-bold mb-2">+46%</div>
            <div className="text-orange-200 uppercase tracking-widest font-bold">Lift</div>
          </div>
          <div className="p-6 bg-gray-900 text-white rounded-[24px] text-center">
            <div className="text-2xl font-bold">78 SUS</div>
            <div className="text-lg font-bold">8.5 NPS</div>
            <div className="text-gray-400 uppercase tracking-widest font-bold mt-1">Owners</div>
          </div>
          <div className="p-6 bg-emerald-600 text-white rounded-[24px] text-center">
            <div className="text-2xl font-bold">74 SUS</div>
            <div className="text-lg font-bold">8 NPS</div>
            <div className="text-emerald-200 uppercase tracking-widest font-bold mt-1">Signatories</div>
          </div>
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8 leading-[1.8]">
          Signatories achieved 96% TCR and were able to sign and submit documents in under <strong className="text-gray-900 dark:text-white">30 seconds</strong> when using the option to apply signatures to all slots at once.
        </p>
      </section>

      {/* Return */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center">
        <button 
          onClick={onBack}
          className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
        >
          View More Projects
        </button>
      </section>
    </div>
  );
};

export default JioSignMobileCaseStudy;

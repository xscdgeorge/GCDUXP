import React from 'react';
import { ArrowLeft, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, TestTube2, Layout, Fingerprint, Key, BarChart3, Sun, Moon } from 'lucide-react';
import MoreProjects from './MoreProjects';

interface IdentityCaseStudyProps {
  onBack: () => void;
}

const IdentityCaseStudy: React.FC<IdentityCaseStudyProps> = ({ onBack }) => {
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
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 pb-20 transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group text-gray-900 dark:text-gray-200 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-2 rounded-full">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-b-[32px] overflow-hidden aspect-[21/9] shadow-2xl relative group bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-zinc-800">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Identity Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">Identity Ecosystem</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2022—2026</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioID: Unifying Reliance's <br/>
          <span>fragmented customer base</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          Managing a fragmented base of 1B+ users to build a cohesive identity ecosystem for better cross-marketing, monetization, and omni-channel experiences across the ecosystem.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Omnichannel Scope</h4>
            <p className="font-medium">iOS, Android, Feature Phones, TV, Web, JioBook</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">C-Suite Alignment</h4>
            <p className="font-medium">Direct collaboration with Chairman's Office</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-indigo-600 dark:text-indigo-400">500M+ Unified Customers</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          Managing a fragmented base of 1B+ users across multiple platforms. The goal was to build a cohesive identity ecosystem for better cross-marketing, monetization, and omni-channel experiences.
        </p>
        <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <Shield size={18} className="text-indigo-600 dark:text-indigo-400" />
            Unified SSO
          </h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Reduced friction in app-to-app referrals across the Reliance ecosystem, backed by KYC'd mobile data.
          </p>
        </div>
      </section>

      {/* Managerial Strategy */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Managerial North Star</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          As a manager, my contribution wasn't in the pixels, but in the alignment. I focused on creating a shared vision between the security architects and the product designers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Cross-functional synergy</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I established "Security-UX Syncs" to bridge the gap between technical constraints and user needs, ensuring security wasn't an afterthought.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Target size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Outcome-based roadmap</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Shifted the team from "feature-delivery" to "outcome-tracking," focusing on metrics like 'Time to First Login' and 'MFA Completion Rate'.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering the Team */}
      <section className="bg-indigo-600 dark:bg-indigo-900 text-white py-20 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="px-6 md:px-10 max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Sparkles size={32} />
            <h2 className="text-4xl font-serif">Empowering the team</h2>
          </div>
          <p className="text-indigo-100 text-xl leading-[1.8] mb-10">
            My primary contribution was enabling my team to do their best work. Here is how I supported the key pillars of this project through my people.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Layout className="mb-4 text-indigo-200" />
              <h4 className="font-bold mb-2">The design system</h4>
              <p className="text-indigo-100 leading-relaxed">I coached our Senior Designer, Marcus, to lead the creation of a 'Security Component Library'. I focused on helping him navigate stakeholder pushback on custom UI patterns.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Search className="mb-4 text-indigo-200" />
              <h4 className="font-bold mb-2">User-centric security</h4>
              <p className="text-indigo-100 leading-relaxed">I secured budget for external usability testing for our researcher, Elena. I advocated for her findings in C-suite meetings when security requirements threatened usability.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Zap className="mb-4 text-indigo-200" />
              <h4 className="font-bold mb-2">Technical feasibility</h4>
              <p className="text-indigo-100 leading-relaxed">I worked closely with the Lead Engineer, Chen, to ensure our design specs were technically viable within the OIDC/SAML constraints, preventing late-stage rework.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Customer Needs */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Deep dive: customer needs</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          Our research revealed that the primary challenge wasn't just technical; it was psychological. Users felt that security was an "interruption" to their actual work, leading to a culture of bypasses.
        </p>
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-gray-600 dark:text-gray-400 leading-[1.8]"><strong className="text-gray-900 dark:text-white">Auth Fatigue:</strong> Users were logging in up to 15 times a day across different legacy systems.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-gray-600 dark:text-gray-400 leading-[1.8]"><strong className="text-gray-900 dark:text-white">Shadow IT:</strong> 30% of employees admitted to using unauthorized tools to avoid the login process.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-gray-600 dark:text-gray-400 leading-[1.8]"><strong className="text-gray-900 dark:text-white">Accessibility Gaps:</strong> MFA methods were not inclusive of users with visual impairments or those in low-connectivity areas.</span></li>
        </ul>
        <div className="p-8 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl border border-indigo-100 dark:border-indigo-500/20">
          <blockquote className="text-xl font-serif text-indigo-900 dark:text-indigo-200 mb-4 leading-relaxed">
            "I spend more time proving who I am than actually doing my job. It feels like the system doesn't trust me."
          </blockquote>
          <cite className="text-sm font-bold text-indigo-700 dark:text-indigo-400 not-italic">— Senior Analyst, User Interview</cite>
        </div>
      </section>

      {/* The Solution: Invisible Security */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The solution: invisible security</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          We moved toward a model where security stays out of the user's way. If you're on a trusted network and device, authentication happens in the background.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Shield size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Contextual auth</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Risk-based model — if you're on a trusted network and device, the system stays out of your way.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Layout size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Unified portal</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">A single "Identity Hub" that aggregates all 15 legacy tools into a one-click dashboard, reducing navigation time by 80%.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Fingerprint size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">Biometrics</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Seamless FaceID and TouchID integration as the primary MFA method, removing the need for cumbersome SMS codes.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Key size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Enterprise SSO</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">One identity for everything. We unified 40+ internal and external applications under a single, secure sign-on experience.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <BarChart3 size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Security analytics</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Real-time visibility into authentication health and threat detection, empowering IT admins with actionable insights.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Inclusive MFA</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Introduced hardware keys and offline codes as fallback options, ensuring accessibility for all users regardless of their environment.</p>
          </div>
        </div>
      </section>

      {/* Intelligent Identity */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Intelligent identity</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          We integrated a GenAI-powered "Security Assistant" that helps users understand why they are being prompted for MFA and provides real-time tips on securing their accounts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Anomaly detection</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">AI monitors login patterns to proactively block suspicious attempts before they reach the user.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <MessageSquare size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Natural language recovery</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Forgot your password? Our AI chatbot guides you through a secure recovery process using conversational UI.</p>
          </div>
        </div>
      </section>

      {/* Validating the Vision */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Validating the vision</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          We tested 3 distinct navigation models with 25 power users across 5 global regions, then measured completion rates and emotional response to different biometric prompts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <TestTube2 size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">High-fidelity prototypes</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Tested 3 distinct navigation models with 25 power users across 5 global regions.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Target size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">A/B testing MFA flows</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Measured completion rates and emotional response to different biometric prompts.</p>
          </div>
        </div>
      </section>

      {/* Scaling the System */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Scaling the system</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          This project wasn't just a standalone app; it became the blueprint for our enterprise B2B SaaS patterns. We contributed over 20 new components back to the core Design System.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          I negotiated dedicated "System Time" for our designers, allowing them to spend 20% of their sprint cycles documenting and hardening these patterns for other teams to consume.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Data grids</span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Optimized for high-density security logs.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Status badges</span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Semantic colors for risk levels.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Auth modals</span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Standardized for all internal apps.</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Empty states</span>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Educational illustrations for new users.</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-10">The impact</h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-[1.8]">
          <p><strong className="text-gray-900 dark:text-white">500M+ Unified Customers</strong> — Consolidated fragmented user bases into a single cohesive identity ecosystem across the Reliance portfolio.</p>
          <p><strong className="text-gray-900 dark:text-white">1B+ User Base Managed</strong> — Scaled the platform to handle over a billion users across all channels and form factors.</p>
          <p><strong className="text-gray-900 dark:text-white">100% Ecosystem Synergy</strong> — Achieved full integration across all Jio platforms, enabling seamless cross-app experiences.</p>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Manager's reflection</h2>
        <p className="text-gray-600 dark:text-gray-400 text-xl leading-[1.8]">
          This project reinforced my belief that the best security is invisible. By focusing on the growth of my team members and providing them with the air cover they needed, we delivered a product that was both more secure and more human.
        </p>
      </section>

      <MoreProjects currentProjectId="idaas" />

    </div>
  );
};

export default IdentityCaseStudy;

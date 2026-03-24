import React from 'react';
import { ArrowLeft, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, TestTube2, Layout, Fingerprint, Key, BarChart3, Sun, Moon } from 'lucide-react';

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

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 pb-20 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-500">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group text-gray-900 dark:text-gray-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 hidden sm:block">Case Study: JioID</span>
          <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 md:pt-48 px-6 md:px-10 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">Identity Ecosystem</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wider">2022 - 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              JioID: India's Largest <br/>
              <span className="text-gray-400 italic">Identity Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Managing a fragmented base of 1B+ users to build a cohesive identity ecosystem for better cross-marketing and monetization across the Reliance ecosystem.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-6 border-l border-gray-100 pl-8 py-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Omnichannel Scope</h4>
                <p className="font-medium">iOS, Android, Feature Phones, TV, Web, JioBook</p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">C-Suite Alignment</h4>
                <p className="font-medium">Direct collaboration with Chairman's Office</p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Key Outcome</h4>
                <p className="font-medium text-indigo-600">500M+ Unified Customers</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="rounded-[40px] overflow-hidden aspect-[21/9] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Identity Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* The Challenge & Strategy */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-serif mb-6">The Challenge</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Managing a fragmented base of 1B+ users across multiple platforms. The goal was to build a cohesive identity ecosystem for better cross-marketing and monetization.
          </p>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Shield size={18} className="text-indigo-600" />
              Unified SSO
            </h4>
            <p className="text-sm text-gray-500">
              Reduced friction in app-to-app referrals across the Reliance ecosystem, backed by KYC’d mobile data.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-serif mb-6">Managerial Strategy</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            As a manager, my contribution wasn't in the pixels, but in the **alignment**. I focused on creating a shared vision between the security architects and the product designers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">Cross-Functional Synergy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I established "Security-UX Syncs" to bridge the gap between technical constraints and user needs, ensuring security wasn't an afterthought.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold">Outcome-Based Roadmap</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Shifted the team from "feature-delivery" to "outcome-tracking," focusing on metrics like 'Time to First Login' and 'MFA Completion Rate'.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contributions - The "How" */}
      <section className="bg-gray-900 text-white py-32 mb-32">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Empowering the Team</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              My primary contribution was enabling my team to do their best work. Here is how I supported the key pillars of this project through my people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Designer Support */}
            <div className="border-t border-gray-800 pt-8">
              <div className="text-indigo-400 mb-4 font-mono text-sm uppercase tracking-widest">Design Leadership</div>
              <h3 className="text-2xl font-bold mb-4">The Design System</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                I coached our Senior Designer, **Marcus**, to lead the creation of a 'Security Component Library'. I focused on helping him navigate stakeholder pushback on custom UI patterns.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                <MessageSquare size={14} /> "George helped me see the business value of consistency." — Marcus
              </div>
            </div>

            {/* Research Support */}
            <div className="border-t border-gray-800 pt-8">
              <div className="text-emerald-400 mb-4 font-mono text-sm uppercase tracking-widest">Research Advocacy</div>
              <h3 className="text-2xl font-bold mb-4">User-Centric Security</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                I secured budget for external usability testing for our researcher, **Elena**. I advocated for her findings in C-suite meetings when security requirements threatened usability.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                <CheckCircle2 size={14} /> "Having George's backing allowed us to pivot based on real data." — Elena
              </div>
            </div>

            {/* Engineering Support */}
            <div className="border-t border-gray-800 pt-8">
              <div className="text-orange-400 mb-4 font-mono text-sm uppercase tracking-widest">Engineering Partnership</div>
              <h3 className="text-2xl font-bold mb-4">Technical Feasibility</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                I worked closely with the Lead Engineer, **Chen**, to ensure our design specs were technically viable within the OIDC/SAML constraints, preventing late-stage rework.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400 italic">
                <Zap size={14} /> "George speaks 'engineer' enough to make collaboration seamless." — Chen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Research Findings: Customer Needs & Challenges */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <Search size={24} />
          </div>
          <h2 className="text-3xl font-serif">Deep Dive: Customer Needs</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">The "Why" Behind the Friction</h3>
            <p className="text-gray-600 leading-relaxed">
              Our research revealed that the primary challenge wasn't just technical; it was psychological. Users felt that security was an "interruption" to their actual work, leading to a culture of bypasses.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 text-red-500"><Shield size={16} /></div>
                <p className="text-sm text-gray-600"><strong>Auth Fatigue:</strong> Users were logging in up to 15 times a day across different legacy systems.</p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-red-500"><Shield size={16} /></div>
                <p className="text-sm text-gray-600"><strong>Shadow IT:</strong> 30% of employees admitted to using unauthorized tools to avoid the login process.</p>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-red-500"><Shield size={16} /></div>
                <p className="text-sm text-gray-600"><strong>Accessibility Gaps:</strong> MFA methods were not inclusive of users with visual impairments or those in low-connectivity areas.</p>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-10 rounded-[40px] flex flex-col justify-center">
            <blockquote className="text-2xl font-serif italic text-blue-900 mb-6">
              "I spend more time proving who I am than actually doing my job. It feels like the system doesn't trust me."
            </blockquote>
            <cite className="text-sm font-bold text-blue-700 not-italic">— Senior Analyst, User Interview</cite>
          </div>
        </div>
      </section>

      {/* 2. UX Design Solution & Key Differentiators */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
            <Lightbulb size={24} />
          </div>
          <h2 className="text-3xl font-serif">The Solution: Invisible Security</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contextual Auth */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-4 pt-8 flex flex-col items-center text-center">
                    <Shield className="text-emerald-400 mb-2" size={32} />
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">Trusted Network</div>
                    <div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden mb-4">
                      <div className="w-full h-full bg-emerald-500"></div>
                    </div>
                    <div className="text-[10px] text-white font-bold">Access Granted</div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Contextual Auth</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We moved away from static logins to a risk-based model. If you're on a trusted network and device, the system stays out of your way.
            </p>
          </div>

          {/* Unified Portal */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-2 pt-8 grid grid-cols-2 gap-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 px-2">
                    <div className="h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-[8px] text-white font-bold">Identity Hub</div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Unified Portal</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              A single "Identity Hub" that aggregates all 15 legacy tools into a one-click dashboard, reducing navigation time by 80%.
            </p>
          </div>

          {/* Biometrics */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-4 pt-16 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-indigo-500 flex items-center justify-center mb-4 animate-pulse">
                      <Fingerprint className="text-indigo-400" size={32} />
                    </div>
                    <div className="text-[8px] text-gray-400 uppercase tracking-widest">Scanning...</div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Biometrics</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Seamless FaceID and TouchID integration as the primary MFA method, removing the need for cumbersome SMS codes.
            </p>
          </div>

          {/* SSO */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-4 pt-12 flex flex-col items-center text-center">
                    <Key className="text-orange-400 mb-4" size={32} />
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-gray-800 rounded-full w-full"></div>
                      <div className="h-2 bg-gray-800 rounded-full w-3/4 mx-auto"></div>
                    </div>
                    <div className="mt-8 px-4 py-2 bg-orange-500 rounded-full text-[8px] text-white font-bold">SSO Enabled</div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Enterprise SSO</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              One identity for everything. We unified 40+ internal and external applications under a single, secure sign-on experience.
            </p>
          </div>

          {/* Analytics */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-4 pt-12 flex flex-col items-center">
                    <BarChart3 className="text-emerald-400 mb-4" size={32} />
                    <div className="w-full flex items-end justify-center gap-1 h-16">
                      <div className="w-2 h-8 bg-emerald-500/40 rounded-t-sm"></div>
                      <div className="w-2 h-12 bg-emerald-500/60 rounded-t-sm"></div>
                      <div className="w-2 h-16 bg-emerald-500 rounded-t-sm"></div>
                      <div className="w-2 h-10 bg-emerald-500/80 rounded-t-sm"></div>
                    </div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Security Analytics</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Real-time visibility into authentication health and threat detection, empowering IT admins with actionable insights.
            </p>
          </div>

          {/* Inclusive MFA */}
          <div className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group flex flex-col">
            <div className="mb-8 flex justify-center">
               <div className="w-32 h-64 bg-gray-900 rounded-[2rem] border-4 border-gray-800 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                  <div className="p-4 pt-12 flex flex-col items-center text-center">
                    <div className="flex gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"><Users size={12} className="text-gray-400" /></div>
                      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"><Shield size={12} className="text-gray-400" /></div>
                    </div>
                    <div className="text-[8px] text-gray-400 mb-4">Multiple Verification Options</div>
                    <div className="w-full h-8 border border-dashed border-gray-700 rounded-lg flex items-center justify-center text-[6px] text-gray-500">Hardware Key</div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold mb-4">Inclusive MFA</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Introduced hardware keys and offline codes as fallback options, ensuring accessibility for all users regardless of their environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AI Features for the Customer */}
      <section className="bg-indigo-900 text-white py-32 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full"></div>
        <div className="px-6 md:px-10 max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-indigo-300">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl font-serif">Intelligent Identity</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl font-serif mb-6 leading-tight">Predictive Protection</h3>
              <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                We integrated a GenAI-powered "Security Assistant" that helps users understand why they are being prompted for MFA and provides real-time tips on securing their accounts.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-indigo-400"><Zap size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Anomaly Detection</h4>
                    <p className="text-xs text-indigo-300">AI monitors login patterns to proactively block suspicious attempts before they reach the user.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-indigo-400"><MessageSquare size={20} /></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Natural Language Recovery</h4>
                    <p className="text-xs text-indigo-300">Forgot your password? Our AI chatbot guides you through a secure recovery process using conversational UI.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Security Interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Concept Test Methodology & Findings */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
            <TestTube2 size={24} />
          </div>
          <h2 className="text-3xl font-serif">Validating the Vision</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 bg-gray-50 p-10 rounded-[40px]">
            <h3 className="text-xl font-bold mb-6">Methodology</h3>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-2">PHASE 01</span>
                <h4 className="font-bold mb-2">High-Fidelity Prototypes</h4>
                <p className="text-sm text-gray-500">Tested 3 distinct navigation models with 25 power users across 5 global regions.</p>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div>
                <span className="text-xs font-mono text-gray-400 block mb-2">PHASE 02</span>
                <h4 className="font-bold mb-2">A/B Testing MFA Flows</h4>
                <p className="text-sm text-gray-500">Measured completion rates and emotional response to different biometric prompts.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-gray-400">Key Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-serif text-purple-600 mb-2">92%</div>
                <p className="text-sm text-gray-600 font-medium">Preferred the "Invisible" risk-based auth over traditional MFA.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-serif text-purple-600 mb-2">-40%</div>
                <p className="text-sm text-gray-600 font-medium">Reduction in perceived cognitive load during the login process.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-serif text-purple-600 mb-2">8.5/10</div>
                <p className="text-sm text-gray-600 font-medium">Average Trust Score for the new AI-guided recovery process.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-serif text-purple-600 mb-2">2x</div>
                <p className="text-sm text-gray-600 font-medium">Faster discovery of internal apps via the new Unified Portal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contribution of B2B SaaS Patterns to the Design System */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
            <Layout size={24} />
          </div>
          <h2 className="text-3xl font-serif">Scaling the System</h2>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-10 md:p-20 text-white overflow-hidden relative">
          <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
            <Layout size={400} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl font-serif mb-8">B2B SaaS Patterns</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                This project wasn't just a standalone app; it became the blueprint for our enterprise B2B SaaS patterns. We contributed over 20 new components back to the core Design System.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                  <span className="text-orange-400 block mb-1 font-bold">Data Grids</span>
                  Optimized for high-density security logs.
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                  <span className="text-orange-400 block mb-1 font-bold">Status Badges</span>
                  Semantic colors for risk levels.
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                  <span className="text-orange-400 block mb-1 font-bold">Auth Modals</span>
                  Standardized for all internal apps.
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                  <span className="text-orange-400 block mb-1 font-bold">Empty States</span>
                  Educational illustrations for new users.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">The "Managerial" Impact on the System</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  I negotiated dedicated "System Time" for our designers, allowing them to spend 20% of their sprint cycles documenting and hardening these patterns for other teams to consume.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold">G</div>
                  <div>
                    <div className="text-sm font-bold">George's Strategy</div>
                    <div className="text-xs text-gray-500">Governance & Adoption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32">
        <h2 className="text-3xl font-serif mb-12 text-center">The Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-indigo-600 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">500M+</div>
            <div className="text-indigo-200 uppercase tracking-widest text-xs font-bold">Unified Customers</div>
          </div>
          <div className="p-10 bg-gray-900 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">1B+</div>
            <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">User Base Managed</div>
          </div>
          <div className="p-10 bg-emerald-600 text-white rounded-[32px] text-center">
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-emerald-200 uppercase tracking-widest text-xs font-bold">Ecosystem Synergy</div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8 italic text-gray-400">Manager's Reflection</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          "This project reinforced my belief that the best security is invisible. By focusing on the growth of my team members and providing them with the air cover they needed, we delivered a product that was both more secure and more human."
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

export default IdentityCaseStudy;

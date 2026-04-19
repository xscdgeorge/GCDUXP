import React from 'react';
import { ArrowLeft, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, TestTube2, Layout, Fingerprint, Key, BarChart3, Sun, Moon, Monitor, ChevronLeft, ChevronRight, Play, Pause, Grid2X2, Route } from 'lucide-react';
import MoreProjects from './MoreProjects';
import Footer from './Footer';
import jioIdHeroImg from '../JioID/JioIDDesktopHome.png';
import signInCrossPlatformImg from '../JioID/SignIncrossPlatfrom.png';
import jioIdConnectedXPImg from '../JioID/jioID connectedXP.png';

interface IdentityCaseStudyProps {
  onBack: () => void;
}

interface WorkflowCarouselProps {
  label: string;
  steps: { image: string, title: string, description: string }[];
  layout: "text-left" | "text-right";
}

const WorkflowCarousel: React.FC<WorkflowCarouselProps> = ({ label, steps, layout }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isVisible, steps.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
    setIsPaused(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    setIsPaused(true);
  };

  const textColumn = (
    <div className={`lg:col-span-4 flex flex-col ${layout === "text-left" ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}>
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-widest uppercase font-bold">{label}</span>
        </div>
        
        <div 
          key={currentSlide}
          className="min-h-[220px] transition-all duration-500 animate-in fade-in slide-in-from-left-4"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#433422] dark:text-white">
            {steps[currentSlide].title}
          </h3>
          <p className="text-[#6B5A45] dark:text-gray-400 text-lg leading-relaxed">
            {steps[currentSlide].description}
          </p>
        </div>
      </div>

      <div className="mt-auto space-y-8 pt-12">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); setIsPaused(true); }}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-10 bg-indigo-600' : 'w-2 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );

  const imageColumn = (
    <div className={`lg:col-span-8 ${layout === "text-left" ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}>
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white dark:bg-white border border-[#e5d9c5] dark:border-zinc-800 aspect-[16/11] max-w-[800px] w-full mx-auto">
          <div 
            className="flex h-full transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-full h-full flex items-center justify-center bg-white dark:bg-white">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover mx-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch pt-8">
      {layout === "text-left" ? (
        <>
          {textColumn}
          {imageColumn}
        </>
      ) : (
        <>
          {imageColumn}
          {textColumn}
        </>
      )}
    </div>
  );
};

const IDENTITY_CAROUSEL_STEPS = [
  {
    image: signInCrossPlatformImg,
    title: "Unified Login",
    description: "Unified authentication across all platforms, through native SDKs and Web Redirects."
  },
  {
    image: jioIdHeroImg,
    title: "Unified Account Portal",
    description: "An 'identity hub' that can manage user data centrally and share essential data when required to provide seamless experiences. For example, speeding up checkout by providing saved addresses or payment data."
  },
  {
    image: jioIdConnectedXPImg,
    title: "Connected Experiences",
    description: "Connecting multiple business verticals under the JioID Account management."
  }
];

const IdentityCaseStudy: React.FC<IdentityCaseStudyProps> = ({ onBack }) => {
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
        setShowTitleInHeader(rect.bottom < 64); // 64 is header height
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
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-white"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${showTitleInHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="font-serif font-medium text-[18px] text-white whitespace-nowrap">JioID: Unified Customer Identity</span>
        </div>
      </nav>
      
      {/* Cover Image */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-[32px] overflow-hidden shadow-2xl relative group bg-[#433422]/5 dark:bg-black/50 border border-[#e5d9c5] dark:border-zinc-800 w-full aspect-[21/9]">
          <img 
            src={jioIdHeroImg} 
            alt="Identity Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium font-sans">Identity ecosystem</span>
        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-white">
          JioID: Unified <br/>
          <span className="text-gray-100 text-shadow-sm">Customer Identity</span>
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-3xl leading-relaxed mb-12">
          I translated and executed an ambiguous vision by breaking it down into multiple parts, and took ownership of the cornerstone JioID — a federated Identity, authentication, consent and account management service. I became an advisor to other parts like Loyalty & Rewards, Payment & Subscription, Super Profile, Cross-platform experiences, omnichannel marketing, etc.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-[#e5d9c5] dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">1 PMs, 5 UX, 1 UI, 30+ Dev</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600 dark:text-orange-400">Enabled Customer ID Unification across all platforms</p>
          </div>
        </div>
      </header>



      {/* The Challenge */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Situation</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          A consulting company had drawn an Applesque vision for Reliance before the DPDP act was announced. We had to figure out ways to get Reliance — a company with many CEOs and the lack of a shared vision — to share customer data and integrate into each others apps & platforms, to provide a seamless ecosystem like customer experience. Unlike Apple or Google, who started out by requiring an email id to create an account, or how all their apps use this account to identify you as an existing customer, Reliance faces many challenges both external and internal.
        </p>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          I lead a few critical initiatives to create a single identity per customer: Identity (JioID), Authentication (JioAuth) and Consent platforms. I am also an advisor to other teams — Jio Design System, Loyalty & Rewards and Customer Intelligence.
        </p>

      </section>

      {/* Design Thinking */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20 border-t border-[#e5d9c5] dark:border-zinc-800 pt-16">
        <h2 className="text-3xl font-serif mb-6">Design Thinking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Grid2X2 size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">OOUX Workshops</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm">
              I facilitated Object-Oriented UX workshops to remove misconceptions and align cross-functional teams of Design, Product, Engineering, Business, internal customers, and SMEs for JioID.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Route size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Customer Journey Mapping</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm">
              I co-facilitated workshops with key stakeholders to validate, align, and add nuance to the customer journey map as we transitioned to a unified identity platform.
            </p>
          </div>
          <div className="md:col-span-2 p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <TestTube2 size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">Concept Testing</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed text-sm">
              We ran early concept tests across multiple Reliance apps to ensure the unified login experience felt seamless and trustworthy for 1B+ users.
            </p>
          </div>
        </div>
      </section>

      {/* Managerial Strategy */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Research findings</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          Due to the scale & visibility of this initiative, I was deeply involved in personally interviewing customers and senior stakeholders, both internally and externally.
        </p>
        <div className="p-6 bg-red-50 dark:bg-red-500/10 rounded-2xl border border-red-100 dark:border-red-500/20 mb-10">
          <h4 className="text-sm font-mono uppercase tracking-widest text-red-600 dark:text-red-400 mb-3">ID & Auth Problem Statement</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            Customers needlessly authenticate themselves to our IDAM because each app maintains separate accounts for their customers. This is expensive and wasteful. The setup also prevents intelligence that could have provided seamless & personalised experiences across every touchpoint across Reliance, and kept engagement and expenditure higher.
          </p>
        </div>



        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Auth Fatigue:</strong> The more Reliance apps our customers used, the more they had to login, questioning their identity throughout the day. Participants also questioned the need for another social login, having previously forgotten which social login they had used on which app.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">OTP vs Password:</strong> Passwords are harder to remember than they are to create. Autofilling OTPs are not just preferred; they are expected.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">MFA & Mobile Number Transfers:</strong> People often don't see the need for MFA. However, if a mobile number is recycled to a new owner, they could gain access to the previous customer’s sensitive data. Currently, company policy dictates that responsibility ends at the OTP.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Loyalty Points:</strong> Customers feel that their loyalty to the Reliance brand isn’t recognized because their ROne points are fragmented across different verticals.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Not so personal:</strong> Mobile devices in India are often shared between family members. Users also carry multiple mobile numbers from various providers, and entering the wrong number can result in a successful login to the wrong account.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Internal resistance:</strong> Reliance businesses prefer to operate independently due to previous failed attempts. Most businesses also avoid cross-app journeys as they don't want users to leave their platform for another Reliance app.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-red-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Accessibility Gaps:</strong> MFA methods were not inclusive of users with visual impairments or those in low-connectivity areas.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Mobile No. Advantage:</strong> Unlike email-based accounts, mobile number accounts in India are largely linked to real people rather than bots, facilitating robust fraud detection and security.</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-orange-500 mt-1 shrink-0" /> <span className="text-[#6B5A45] dark:text-gray-400 leading-[1.8]"><strong className="text-[#433422] dark:text-white">Zero login auth:</strong> Historically, ZLA was a boon for Jio Telco customers on Reliance hardware, enabling a frictionless experience for all literacy levels. However, as we expand to serve all Indians across diverse platforms, implementing ZLA has become significantly more expensive.</span></li>
        </ul>
        <div className="p-8 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl border border-indigo-100 dark:border-indigo-500/20">
          <blockquote className="text-xl font-serif text-indigo-900 dark:text-indigo-200 mb-4 leading-relaxed">
            "I spend more time proving who I am than actually doing my job. It feels like the system doesn't trust me."
          </blockquote>
          <cite className="text-sm font-bold text-indigo-700 dark:text-indigo-400 not-italic">— Super user, survey response</cite>
        </div>
      </section>





      {/* North Star Design */}
      <section className="bg-[#efe3d0] dark:bg-zinc-950 pt-16 md:pt-20 pb-24 md:pb-32 mb-32 border-y border-[#e5d9c5] dark:border-zinc-800/50 transition-colors duration-500 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif mb-6 text-center mx-auto">Solution</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Seamless', 'Privacy-First', 'Unified', 'Inclusive', 'Omnichannel', 'Secure'].map((p, i) => (
                <div key={i} className="px-5 py-3 bg-gray-50 dark:bg-zinc-900/60 rounded-full border border-[#e5d9c5] dark:border-zinc-800 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-[100px]">
            <WorkflowCarousel 
              label="Unified Identity Experience" 
              steps={IDENTITY_CAROUSEL_STEPS} 
              layout="text-left" 
            />
          </div>
        </div>
      </section>

{/*
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The solution: invisible security</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          We moved toward a model where security stays out of the user's way. If you're on a trusted network and device, authentication happens in the background.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Shield size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Unified SSO</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Reduced friction in app-to-app referrals across the Reliance ecosystem, backed by KYC'd mobile data.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Cross-functional synergy</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              I established "Security-UX Syncs" to bridge the gap between technical constraints and user needs, ensuring security wasn't an afterthought.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Target size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Outcome-based roadmap</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Shifted the team from "feature-delivery" to "outcome-tracking," focusing on metrics like 'Time to First Login' and 'MFA Completion Rate'.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Shield size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Contextual auth</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Risk-based model — if you're on a trusted network and device, the system stays out of your way.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Layout size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Unified portal</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">A single "Identity Hub" that aggregates all 15 legacy tools into a one-click dashboard, reducing navigation time by 80%.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Fingerprint size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">Biometrics</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Seamless FaceID and TouchID integration as the primary MFA method, removing the need for cumbersome SMS codes.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Key size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Enterprise SSO</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">One identity for everything. We unified 40+ internal and external applications under a single, secure sign-on experience.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <BarChart3 size={24} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold">Security analytics</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Real-time visibility into authentication health and threat detection, empowering IT admins with actionable insights.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Inclusive MFA</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Introduced hardware keys and offline codes as fallback options, ensuring accessibility for all users regardless of their environment.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Intelligent identity</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          We integrated a GenAI-powered "Security Assistant" that helps users understand why they are being prompted for MFA and provides real-time tips on securing their accounts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Zap size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Anomaly detection</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">AI monitors login patterns to proactively block suspicious attempts before they reach the user.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <MessageSquare size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">Natural language recovery</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Forgot your password? Our AI chatbot guides you through a secure recovery process using conversational UI.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Validating the vision</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          We tested 3 distinct navigation models with 25 power users across 5 global regions, then measured completion rates and emotional response to different biometric prompts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <TestTube2 size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">High-fidelity prototypes</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Tested 3 distinct navigation models with 25 power users across 5 global regions.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Target size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">A/B testing MFA flows</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Measured completion rates and emotional response to different biometric prompts.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Scaling the system</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6">
          This project wasn't just a standalone app; it became the blueprint for our enterprise B2B SaaS patterns. We contributed over 20 new components back to the core Design System.
        </p>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          I negotiated dedicated "System Time" for our designers, allowing them to spend 20% of their sprint cycles documenting and hardening these patterns for other teams to consume.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Data grids</span>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Optimized for high-density security logs.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Status badges</span>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Semantic colors for risk levels.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Auth modals</span>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Standardized for all internal apps.</p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800">
            <span className="text-indigo-600 dark:text-indigo-400 block mb-1 font-bold">Empty states</span>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">Educational illustrations for new users.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-10">The impact</h2>
        <div className="space-y-6 text-[#6B5A45] dark:text-gray-400 leading-[1.8]">
          <p><strong className="text-[#433422] dark:text-white">500M+ Unified Customers</strong> — Consolidated fragmented user bases into a single cohesive identity ecosystem across the Reliance portfolio.</p>
          <p><strong className="text-[#433422] dark:text-white">1B+ User Base Managed</strong> — Scaled the platform to handle over a billion users across all channels and form factors.</p>
          <p><strong className="text-[#433422] dark:text-white">100% Ecosystem Synergy</strong> — Achieved full integration across all Jio platforms, enabling seamless cross-app experiences.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">Manager's reflection</h2>
        <p className="text-[#6B5A45] dark:text-gray-400 text-xl leading-[1.8]">
          This project reinforced my belief that the best security is invisible. By focusing on the growth of my team members and providing them with the air cover they needed, we delivered a product that was both more secure and more human.
        </p>
      </section>
      */}

      <MoreProjects currentProjectId="idaas" />
      <Footer />

    </div>
  );
};

export default IdentityCaseStudy;

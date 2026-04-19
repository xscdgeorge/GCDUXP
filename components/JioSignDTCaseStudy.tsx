import React from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Smartphone, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, Layout, FileText, Share2, Languages, TrendingUp, Grid2X2, Route, TestTube2, IndianRupee, ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, Linkedin } from 'lucide-react';
import jioSignMobileImg from '../womanEsigning.png';
import jioSignVideo from '../JioSignSendADocOnMobile.mov';
import MoreProjects from './MoreProjects';
import docOwnerUpload from '../JioSignDocOwnerUI/docOwnerfileupload.png';
import docOwnerParticipants from '../JioSignDocOwnerUI/docOwneraddParticipants.png';
import docOwnerOrder from '../JioSignDocOwnerUI/DocownerSigningOrder.png';
import docOwnerFields from '../JioSignDocOwnerUI/DocOwnerAddFields.png';
import docOwnerSummary from '../JioSignDocOwnerUI/DocOwnerSendSummary.png';
import docOwnerSent from '../JioSignDocOwnerUI/DocOwnerSentConfirmation.png';
import docOwnerConversion from '../JioSignDocOwnerUI/Document conversion.png';
import sigLogin from '../JioSignSignatory/SignatoryLogin.png';
import sigReview from '../JioSignSignatory/DocumentReview.png';
import sigSign from '../JioSignSignatory/Signingthe Doc.png';
import sigDocs from '../JioSignSignatory/SupportingDocsParticipants.png';
import sigSuccess from '../JioSignSignatory/SignedSuccessUpsell.png';

const CAROUSEL_STEPS = [
  { 
    image: docOwnerUpload, 
    title: "Document Upload", 
    description: "Users can now scan or upload from their mobile, rename the doc, and change the signing doc after upload." 
  },
  {
    image: docOwnerConversion,
    title: "AI Mobile Conversion",
    description: "Intelligent PDF-to-mobile friendly format conversion ensures readability and seamless signing on small screens. Document owners can also allow AI to legally translate docs into local languages on request."
  },
  { 
    image: docOwnerParticipants, 
    title: "Participant Management", 
    description: "Add signers, reviewers, and CC recipients with intelligent address book integration & notification management." 
  },
  { 
    image: docOwnerOrder, 
    title: "Sequential & Parallel Signing", 
    description: "Define complex signing workflows with flexible routing rules and priority levels. Now reorder participants with arrows." 
  },
  { 
    image: docOwnerFields, 
    title: "Intuitive Field Placement", 
    description: "For documents that have not been transformed by AI you can use drag-and-drop fields for signatures, dates, and dynamic text. Now with colour coded participants to reduce confusion and errors." 
  },
  { 
    image: docOwnerSummary, 
    title: "Quick summary and message", 
    description: "Final verification of all details & credits expected to be used. The optional message can provide further clarity to those who receive the document. Now also includes an option to send on WhatsApp." 
  },
  { 
    image: docOwnerSent, 
    title: "Return & Confirm", 
    description: "Document sent confirmations are presented on the documents list page as the next primary destination for most users, saving unnecessary navigation." 
  }
];

const SIGNATORY_STEPS = [
  { 
    image: sigLogin, 
    title: "Frictionless Authentication", 
    description: "JioID powered OTP-based login via email or mobile ensures signatories can access documents instantly without complex passwords." 
  },
  { 
    image: sigReview, 
    title: "Intuitive Document Review", 
    description: "Clear, guided navigation allows signatories to review the required fields across even large documents with ease before committing to sign." 
  },
  { 
    image: sigSign, 
    title: "Seamless Signing Experience", 
    description: "A fluid, mobile-optimized signing flow with one-tap signature application across multiple fields." 
  },
  { 
    image: sigDocs, 
    title: "Quick access to docs and participants", 
    description: "Easily access supporting documents and also view participants roles and status." 
  },
  { 
    image: sigSuccess, 
    title: "Confirmation & Conversion", 
    description: "Immediate success confirmation with a strategic upsell path to encourage new user onboarding." 
  }
];

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
      { threshold: 0.2 } // Start when 20% visible
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
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase font-bold">{label}</span>
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
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); setIsPaused(true); }}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-10 bg-orange-500' : 'w-2 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Controls */}
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
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white dark:bg-white border border-gray-100 dark:border-zinc-800 aspect-[16/11] max-w-[800px] w-full mx-auto">
          <div 
            className="flex h-full transition-transform duration-1000 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-full h-full flex items-center justify-center bg-white dark:bg-white">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-contain mx-auto" 
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

interface JioSignMobileCaseStudyProps {
  onBack: () => void;
}

const JioSignMobileCaseStudy: React.FC<JioSignMobileCaseStudyProps> = ({ onBack }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark' | 'auto'>(
    (localStorage.getItem('portfolio-theme') as 'light' | 'dark' | 'auto') || 'auto'
  );
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = () => {
      const shouldBeDark = theme === 'auto' ? mediaQuery.matches : theme === 'dark';
      root.classList.toggle('dark', shouldBeDark);
      setIsDarkMode(shouldBeDark);
    };

    applyTheme();
    localStorage.setItem('portfolio-theme', theme);
    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme]);

  // Sync with other tabs
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'portfolio-theme' && e.newValue) {
        setTheme(e.newValue as 'light' | 'dark' | 'auto');
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('auto');
    else setTheme('light');
  };

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
    <div className="bg-[#efe3d0] dark:bg-zinc-950 min-h-screen text-[#433422] dark:text-gray-100 font-sans selection:bg-[#433422] selection:text-[#efe3d0] dark:selection:bg-white dark:selection:text-gray-900 pb-20 pt-[74px] transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-[#efe3d0]/80 dark:bg-black/70 backdrop-blur-xl border-b border-[#433422]/5 dark:border-white/5 z-50 transition-all duration-500">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-[#433422] dark:text-white"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${showTitleInHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="font-serif font-medium text-[18px] text-[#433422] dark:text-white whitespace-nowrap">JioSign: Winning back lost customers</span>
        </div>

        <button 
          onClick={cycleTheme} 
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors ml-4 bg-[#433422]/5 dark:bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          title={`Current theme: ${theme}. Click to change.`}
        >
          {theme === 'light' && <Sun size={12} />}
          {theme === 'dark' && <Moon size={12} />}
          {theme === 'auto' && <Monitor size={12} />}
          <span>{theme}</span>
        </button>
      </nav>

      {/* Cover Image (Moved from below Situation) */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-[32px] overflow-hidden aspect-[21/9] shadow-2xl relative group bg-white dark:bg-black">
          <img 
            src={jioSignMobileImg}
            alt="JioSign Mobile-First Interface" 
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex gap-3 mb-6">
          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-xs font-medium  font-sans">eSign document workflows</span>
        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioSign: Winning back lost customers
        </h1>
        <p className="text-xl text-[#6B5A45] dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          This is the story of how I acquired the JioSign project, re-established trust in UX, and guided its strategic pivot, resulting in a 96% task completion rate in testing, and enabled an increase of 90K eSigns/day. Achieved primarily by introducing collaborative UX research, a mobile-first experience, simplified pricing, and useful AI features.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">The Team</h4>
            <p className="font-medium">3 PMs, 2 UX, 15 Engineers</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#6B5A45] dark:text-gray-400 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600 dark:text-orange-400">96% TCR | 78 SUS | 10X increase in eSign/day</p>
          </div>
        </div>
      </header>



      {/* Phase 1: Empathize */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-serif">Phase 1: Empathize</h2>
        </div>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-6 font-medium text-lg">
          I discovered the JioSign team while scouting for SaaS products to integrate into Jio’s digital identity and governance ecosystem. Despite being a free in-house solution, the platform faced severe adoption hurdles.
        </p>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          The internal business units were opting for expensive third-party services. An unusable mobile experience resulted in a 57% Task Completion Rate and zero conversions. My first task was to understand why users were abandoning the tool.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Smartphone size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">In-Situ Observations</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              We observed signatories in real-world environments—often on busy streets or in low-connectivity areas—relying solely on their mobile devices.
            </p>
          </div>
          <div className="p-6 bg-[#433422]/5 dark:bg-zinc-900/50 rounded-2xl border border-[#e5d9c5] dark:border-zinc-800 space-y-3">
            <Route size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Stakeholder Interviews</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              I interviewed business leads from 15+ units to understand the compliance and trust barriers that prevented them from using an internal tool.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3: Ideate */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Lightbulb size={24} />
          </div>
          <h2 className="text-3xl font-serif">Phase 3: Ideate</h2>
        </div>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          I facilitated a series of collaborative mapping sessions to break down silos between Product, Engineering, and Design. We moved from siloed requirements to shared mental models.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-indigo-50/30 dark:bg-zinc-900/50 rounded-2xl border border-indigo-100 dark:border-zinc-800 space-y-3">
            <Grid2X2 size={24} className="text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold">OOUX Workshops</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
               facilititated workshops to identify core objects (Signatories, Docs, Fields) and their relationships, preventing logic errors in later development.
            </p>
          </div>
          <div className="p-6 bg-indigo-50/30 dark:bg-zinc-900/50 rounded-2xl border border-indigo-100 dark:border-zinc-800 space-y-3">
            <Sparkles size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">Strategic Pivot</h3>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              We decided to rebrand and re-architect the eSign pattern to be a reusable component in the Jio Design System, ensuring scalability across all Reliance apps.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 2: Define */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
            <Target size={24} />
          </div>
          <h2 className="text-3xl font-serif">Phase 2: Define</h2>
        </div>
        <p className="text-[#6B5A45] dark:text-gray-400 leading-[1.8] mb-10">
          We synthesized our research into clear problem statements and actionable insights. The goal was to move from "it's unusable" to "here is specifically where we are failing the user."
        </p>

        <div className="space-y-4 mb-16">
          <div className="p-6 bg-orange-50/50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <h4 className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">The Signatory Gap</h4>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              Users frequently cannot sign documents because links open to desktop-only interfaces on mobile. Without laptop access, they are forced to share personal credentials or give devices to agents, creating high risk and friction.
            </p>
          </div>
          <div className="p-6 bg-orange-50/50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <h4 className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-4">The Owner Friction</h4>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              Workflow managers are bogged down by manual re-uploads and distribution limited to email. Lack of templates and real-time reminders makes the tool inefficient for high-volume legacy migrations.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6">Key Insights</h3>
        <div className="space-y-4">
          {[
            { icon: <Smartphone className="text-orange-500 shrink-0" size={20} />, title: 'Mobile is a Must-Have', desc: 'Signatories almost exclusively use mobile.' },
            { icon: <Shield className="text-red-500 shrink-0" size={20} />, title: 'High Anxiety', desc: 'Users feel rushed and intimidated by the legal process.' },
            { icon: <Languages className="text-blue-500 shrink-0" size={20} />, title: 'Literacy Barriers', desc: 'Legal jargon in English is a major barrier for the mass Indian market.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center bg-[#433422]/5 dark:bg-zinc-900 p-4 rounded-xl border border-gray-100 dark:border-zinc-800">
              {item.icon}
              <div>
                <span className="font-bold mr-2 text-sm">{item.title}:</span>
                <span className="text-sm text-[#6B5A45] dark:text-gray-400">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phase 4: Prototype */}
      <section className="bg-white dark:bg-zinc-950 pt-16 md:pt-20 pb-24 md:pb-32 mb-20 border-y border-[#e5d9c5] dark:border-zinc-800/50 transition-colors duration-500 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-serif">Phase 4: Prototype</h2>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-[42px] font-serif mb-12 text-center mx-auto">North Star Design<span className="text-orange-500">.</span></h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mobile 1st', 'Intuitive', 'Templates', 'Accessible', 'Multi-channel'].map((p, i) => (
                <div key={i} className="px-5 py-3 bg-gray-50 dark:bg-zinc-900/60 rounded-full border border-gray-100 dark:border-zinc-800 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-[100px]">
            <WorkflowCarousel 
              label="Document Owners Experience" 
              steps={CAROUSEL_STEPS} 
              layout="text-left" 
            />
            
            <div className="border-t border-gray-100 dark:border-zinc-900/50 pt-[100px]">
              <WorkflowCarousel 
                label="Signatory Experience" 
                steps={SIGNATORY_STEPS} 
                layout="text-right" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Phase 5: Test & Results */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <TestTube2 size={24} />
          </div>
          <h2 className="text-3xl font-serif">Phase 5: Test & Results</h2>
        </div>
        
        <div className="p-6 bg-emerald-50/20 dark:bg-zinc-900 rounded-2xl border border-emerald-100 dark:border-zinc-800 mb-10">
          <h3 className="text-lg font-bold mb-4">Validation Strategy</h3>
          <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
            We moved from early concept validation to rigorous usability testing. This wasn't just about finding bugs; it was about demonstrating the tangible ROI of UX to a previously skeptical technical team.
          </p>
        </div>

        <div className="space-y-6 text-[#6B5A45] dark:text-gray-400 leading-[1.8]">
          <p><strong className="text-[#433422] dark:text-white">96% TCR</strong> — Signatories achieved a 96% task completion rate and were able to sign and submit documents in under 30 seconds.</p>
          <p><strong className="text-[#433422] dark:text-white">78 SUS · 8.5 NPS</strong> — Document owners rated the experience as highly usable and professional.</p>
          <p><strong className="text-[#433422] dark:text-white">10X eSigns/Day</strong> — Platform adoption grew from stagnation to over 90K eSigns per day within the first few months of the pivot.</p>
        </div>
      </section>

      {/* What's next? */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-32 pt-20 border-t border-gray-100 dark:border-zinc-900/50">
        <h2 className="text-3xl font-serif mb-6 text-center">What's next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold">AI-Driven Workflows</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Expanding legal translation to 22+ local languages and introducing AI-assisted document summarizing for complex legal jargon.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Grid2X2 size={20} />
              </div>
              <h3 className="text-xl font-bold">Smart Templates</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Developing a library of pre-configured, sector-specific templates (HR, Legal, Banking) to reduce setup time by 90%.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <IndianRupee size={20} />
              </div>
              <h3 className="text-xl font-bold">Pay As You Go</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Introducing flexible, credit-based billing models to lower the barrier for startups and SMBs to digitize their legal agreements.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Layout size={20} />
              </div>
              <h3 className="text-xl font-bold">Embedded Experiences</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Building robust SDKs and APIs to allow businesses to embed JioSign directly into their legacy ERP and CRM applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Smartphone size={20} />
              </div>
              <h3 className="text-xl font-bold">POS Devices</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Bringing secure digital signatures to physical Point of Sale terminals for in-person retail and banking transactions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-xl font-bold">Omnichannel 2.0</h3>
            </div>
            <p className="text-[#6B5A45] dark:text-gray-400 leading-relaxed">
              Further streamlining distribution via deeper Jio ecosystem integrations, including offline-to-online QR code signing.
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-40">
        <div className="bg-orange-500 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-orange-500/20 group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-bold">Building India's eSign future?</h3>
              <p className="text-orange-50/80 text-lg max-w-sm">
                If you're interested in collaborating or making an impact in this space, I'd love to hear from you.
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/in/georgedavisux/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-orange-50 transition-all hover:scale-105 active:scale-95 shadow-lg shrink-0"
            >
              <Linkedin size={20} fill="currentColor" />
              Get in touch on LinkedIn
            </a>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-orange-600/30 rounded-full blur-3xl" />
        </div>
      </section>

      <MoreProjects currentProjectId="jiosign-mobile" />
    </div>
  );
};

export default JioSignMobileCaseStudy;

import React from 'react';
import { ArrowLeft, Sun, Moon, Smartphone, Users, Shield, Zap, Target, MessageSquare, CheckCircle2, Search, Lightbulb, Sparkles, Layout, FileText, Share2, Languages, TrendingUp, Grid2X2, Route, TestTube2, IndianRupee, ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, Linkedin } from 'lucide-react';
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
    description: "Standardized drag-and-drop fields for signatures, dates, and dynamic text. Now with colour coded participants to reduce confusion and errors." 
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
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {steps[currentSlide].title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
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
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900 pb-20 transition-colors duration-500">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-orange-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors group text-gray-900 dark:text-gray-200 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm p-2 rounded-full">
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>

      {/* Cover Image (Moved from below Situation) */}
      <section className="pt-0 px-6 md:px-10 max-w-[1062px] mx-auto mb-[80px]">
        <div className="rounded-b-[32px] overflow-hidden aspect-[21/9] shadow-2xl relative group bg-white dark:bg-black">
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
          <span className="px-3 py-1 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider">eSignature SaaS</span>
          <span className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 text-gray-500 dark:text-gray-400 rounded-full text-xs font-bold uppercase tracking-wider">2024—2026</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          JioSign: Winning back lost customers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12">
          This is the story of how I acquired the JioSign project, re-established trust in UX, and guided its strategic pivot, resulting in a 96% task completion rate in testing, and enabled an increase of 90K eSigns/day. Achieved primarily by introducing collaborative UX research, a mobile-first experience, simplified pricing, and useful AI features.
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-gray-100 dark:border-zinc-800 pt-8">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">The Team</h4>
            <p className="font-medium">3 PMs, 2 UX, 15 Engineers</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">My Role</h4>
            <p className="font-medium">UX Manager & Strategic Lead</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Key Outcome</h4>
            <p className="font-medium text-orange-600 dark:text-orange-400">96% TCR | 78 SUS | 10X increase in eSign/day</p>
          </div>
        </div>
      </header>



      {/* Situation */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">The Situation</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          I discovered the JioSign team while scouting for SaaS products to integrate into Jio’s digital identity and governance ecosystem alongside JioID. Despite being a free in-house solution, the platform faced severe adoption hurdles; hundreds of internal business units opted to pay millions for third-party services rather than use the internal tool.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8]">
          An unusable mobile experience resulted in a <strong className="text-gray-900 dark:text-white">57% Task Completion Rate</strong> and <strong className="text-gray-900 dark:text-white">zero conversions</strong>, rendering the platform unviable for most business cases. This was largely due to a fractured history with UX design; a previous partnership with another design team had collapsed, leaving a "functional" product that lacked user-centered design.
        </p>
      </section>

      {/* Strategic Move */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-serif mb-6">My Strategic Move</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          I took ownership of the product by convincing leadership that the project required embedded designers with a sense of stake, rather than the agency-style approach of the previous team. I argued that integrating the eSign pattern into the Jio Design System (JDS) was critical—a challenge my team and I had already successfully navigated when we established "Sign in with JioID" as the first SaaS pattern in the JDS.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-6">
          To reintroduce a structured design process and distribute ownership, I appointed my strongest collaborator, Akanksha Singh, to lead the project. Together, we fostered a resilient relationship with the cross-functional team through collaborative workshops and open communication channels.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          I established a clear scope for our research, including a deep analysis of the existing product, the e-signature domain, and our customer base. This led to a ruthless prioritization of MVP features, centered on a Product-Led Growth approach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Grid2X2 size={24} className="text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-bold">OOUX Workshops</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I facilitated Object-Oriented UX workshops to remove misconceptions and align cross-functional teams of Design, Product, Engineering, Business, internal customers, and SMEs.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <Route size={24} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold">Customer Journey Mapping</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I co-facilitated a workshop with key stakeholders to validate, align, and add nuance to the customer journey map we had created based on the primary and secondary research conducted.
            </p>
          </div>
          <div className="md:col-span-2 p-6 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-3">
            <TestTube2 size={24} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-bold">Early Testing</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              We ran early concept tests to not just get validation on new designs but also gain the team's confidence & trust in our UX design approach, which was lost with the previous team.
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
              { icon: (
                <div className="relative shrink-0 w-[22px] h-[22px] flex items-center justify-center">
                  <IndianRupee className="text-emerald-500" size={22} strokeWidth={2} />
                  <ArrowUpRight className="text-emerald-500 absolute -top-1 -right-1 bg-white dark:bg-zinc-900 rounded-full" size={12} strokeWidth={2.5} />
                </div>
              ), title: 'Upsell on Success', desc: 'Without an upsell flow on successful signing, we lose the best moment to convert a user. Touch-points should not be wasted.' },
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

      {/* Refined MVP Problem Statements & North Star Design Principles */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-serif mb-4">Refined MVP Problem Statements</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-[1.8] mb-10">
          I reframed the initial problem statements which were originally biased toward specific solutions to focus instead on the user context, the affected stakeholders, and the underlying business impact.
        </p>
        <div className="space-y-4 mb-16">
          <div className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <div className="flex items-start gap-4">

              <div className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed space-y-4">
                <p>
                  Signatories are frequently unable to sign documents because the links they receive via email or WhatsApp open to a desktop-only interface on mobile devices. In the Indian market, many users do not have access to laptops and are understandably reluctant to hand their personal devices to an in-person agent for assistance.
                </p>
                <p>
                  This friction results in more than just task failures; it creates significant delays for deliveries, legal procedures, and official sign-offs. These barriers render the platform unviable for most business use cases and have resulted in zero organic conversions.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-orange-50 dark:bg-zinc-900 rounded-2xl border border-orange-100 dark:border-zinc-800">
            <div className="flex items-start gap-4">

              <div className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed space-y-4">
                <p>
                  Document owners are restricted to uploading static PDFs or images, forcing them to place signature fields manually rather than utilizing dynamic digital templates. Distribution is equally limited; documents can only be sent via email, forcing users to manually copy and paste links for other communication channels.
                </p>
                <p>
                  Furthermore, collaboration is currently bypassed through unauthorized password sharing—a significant compliance and security risk. Without automated reminders or multi-channel integration, owners must manually follow up with signatories via email or message. This fragmented workflow is highly inefficient, particularly for power users managing more than 20 documents per day.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Document Owner Experience Carousel */}
      {/* Document Owner & Signatory Experiences */}
      <section className="bg-white dark:bg-zinc-950 pt-16 md:pt-20 pb-24 md:pb-32 mb-32 border-y border-gray-100 dark:border-zinc-800/50 transition-colors duration-500 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          {/* Section Header & Principles Chips */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif mb-6 text-center mx-auto">North Star Design</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mobile 1st', 'Intuitive in India', 'Templates', 'Role-Based', 'Embeddable', 'Accessible'].map((p, i) => (
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




      {/* Results */}
      <section className="px-6 md:px-10 max-w-3xl mx-auto mb-32">
        <h2 className="text-3xl font-serif mb-6 text-center mx-auto">Results so far</h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-[1.8]">
          <p><strong className="text-gray-900 dark:text-white">96% TCR</strong> — Signatories achieved a 96% task completion rate and were able to sign and submit documents in under <strong className="text-gray-900 dark:text-white">30 seconds</strong> when using the option to apply signatures to all slots at once.</p>
          <p><strong className="text-gray-900 dark:text-white">78 SUS · 8.5 NPS</strong> — Document owners rated the experience highly usable and were strong promoters of the platform.</p>
          <p><strong className="text-gray-900 dark:text-white">74 SUS · 8 NPS</strong> — Signatories found the signing flow intuitive and frictionless across devices.</p>
          <p><strong className="text-gray-900 dark:text-white">10 Internal Businesses</strong> — Gained 10 internal businesses to adopt JioSign on completion of signatory & document owner experiences. While others agreed, these 10 switched to a yearly contract that would be easier to terminate when switching to JioSign.</p>
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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

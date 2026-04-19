import React, { useRef } from 'react';
import { PROJECTS, PHILOSOPHIES, TESTIMONIALS } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import heroImageLight from '../georgeherowhitebg.png';
import { ArrowUpRight, ArrowDown, Heart, Zap, Users, Target, Layout, Sun, Moon, Monitor, Waypoints, Layers, Smartphone, Laptop, Watch, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import Footer from './Footer';

interface OptionAProps {
  onProjectClick: (id: string) => void;
}

const BridgeIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 16h20" />
    <path d="M7 6v14" />
    <path d="M17 6v14" />
    <path d="M2 16c5-5 5-10 5-10s3 5 5 5 5-5 5-5 0 5 5 10" />
  </svg>
);

const OptionA: React.FC<OptionAProps> = ({ onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const getIcon = (name: string) => {
    switch(name) {
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Waypoints': return <Waypoints className="w-5 h-5" />;
      case 'Bridge': return <BridgeIcon className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Smartphone': return (
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-5 h-5" />
          <Laptop className="w-5 h-5" />
          <Watch className="w-5 h-5" />
        </div>
      );
      default: return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900 pt-[74px]">
      {/* Header */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <span className="text-[24px] font-serif font-medium tracking-[0.01em] text-white drop-shadow-md">George<span className="text-orange-500">.</span></span>
        <div className="flex gap-8 items-center text-[16px] font-normal text-gray-200 drop-shadow-md">
          <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#recommendations" className="hover:text-white transition-colors">Recommendations</a>
          {/* <a href="#/resume" className="hover:text-white transition-colors">Resume</a> */}
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-10 bg-black">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={heroImage}
            alt="George"
            className="w-full h-full object-cover object-[80%_center] lg:object-center saturate-50 opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 lg:hidden pointer-events-none bg-gradient-to-t from-black via-black/60 to-black/20"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 max-w-7xl mx-auto text-white drop-shadow-lg -translate-y-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="mb-4">
                <span className="text-[42px] md:text-[42px] font-serif italic leading-none text-white block">
                  Design, leadership & strategy<span className="text-orange-500">.</span>
                </span>
              </div>
              <p className="text-[20px] font-light text-gray-200 max-w-[600px] leading-relaxed mt-8">
                UX Leader with 15 years of experience bridging the gap between customer needs, business goals and technical feasibility. Currently managing a multi-disciplinary team to deliver intuitive, accessible & connected products. My team and I use AI as an enabler, not a replacement for good judgement or accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="leadership" className="bg-[#efe3d0] dark:bg-zinc-900/50 pt-[100px] pb-24 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          
          <div className="font-sans text-[#5a4a3a] dark:text-gray-200 space-y-6 text-lg leading-relaxed mb-16 max-w-3xl">
            <h2 className="text-[42px] font-serif leading-tight text-[#433422] dark:text-white border-none bg-transparent">Leadership</h2>
            <p>
              In my 15 years of experience, I've learned that the best products come from healthy teams. My approach focuses on coaching, empowerment, and strategic scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {PHILOSOPHIES.map((item, i) => (
              <div key={i} className="border-t border-orange-500/30 pt-6 transition-colors duration-300">
                <div className="text-orange-500 mb-4">{getIcon(item.icon)}</div>
                <h4 className="text-[#433422] dark:text-white font-bold mb-3 text-[18px]">{item.title}</h4>
                <p className="text-sm text-[#6B5A45] dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Featured Work */}
      <section id="work" className="mt-[100px] px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-[42px] font-serif leading-tight">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="cursor-pointer group border-l border-[#e5d9c5] dark:border-zinc-800 pl-6 flex flex-col hover:border-[#433422] dark:hover:border-white transition-colors duration-300"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${project.id === 'jiosign-mobile' ? 'scale-125 group-hover:scale-[1.35]' : 'group-hover:scale-110'}`} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-xs font-mono text-[#6B5A45] dark:text-zinc-500 mb-3 block">{project.category}</span>
              <h3 className="text-[24px] font-sans font-medium mb-4 text-[#433422] dark:text-white">{project.title}</h3>
              <p className="text-[#6B5A45] dark:text-gray-400 mb-6 flex-grow">{project.description}</p>
              <div className="mt-auto flex items-center justify-between w-full">
                <span className="font-mono text-sm font-semibold text-[#433422] dark:text-white">{project.impact}</span>
                <div className="bg-[#433422] dark:bg-white text-[#efe3d0] dark:text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Recommendations */}
      <section id="recommendations" className="mt-[100px] bg-[#efe3d0] dark:bg-zinc-900/50 pt-[100px] pb-24 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-[42px] font-serif leading-tight text-[#433422] dark:text-white">Recommendations</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: -(scrollRef.current.offsetWidth * 0.8), behavior: 'smooth' });
                  }
                }}
                className="p-3 rounded-full border border-[#e5d9c5] dark:border-zinc-800 text-[#433422] dark:text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group"
              >
                <ChevronLeft size={20} className="group-active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: (scrollRef.current.offsetWidth * 0.8), behavior: 'smooth' });
                  }
                }}
                className="p-3 rounded-full border border-[#e5d9c5] dark:border-zinc-800 text-[#433422] dark:text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group"
              >
                <ChevronRight size={20} className="group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div 
              ref={scrollRef}
              className="overflow-x-auto pb-8 -mx-4 px-4 flex snap-x snap-mandatory scroll-smooth hide-scrollbar"
            >
              {TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="w-[85%] md:w-[40%] flex-shrink-0 px-4 snap-start">
                  <div className="bg-[#433422]/5 dark:bg-zinc-900/30 p-10 rounded-[32px] border border-[#e5d9c5]/50 dark:border-zinc-800/50 min-h-[400px] flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-10">
                      <img 
                        src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=120`} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover" 
                      />
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-[#433422] dark:text-white text-lg">{testimonial.author}</h4>
                          {testimonial.tag && (
                            <span className="bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                              {testimonial.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#6B5A45] dark:text-zinc-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-[#5a4a3a] dark:text-gray-300 text-[18px] leading-relaxed font-sans font-normal italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default OptionA;

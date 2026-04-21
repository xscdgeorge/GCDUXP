import React, { useRef } from 'react';
import { PROJECTS, TESTIMONIALS } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import heroImageLight from '../georgeherowhitebg.png';
import { ArrowUpRight, ArrowDown, Heart, Zap, Users, Target, Layout, Sun, Moon, Monitor, Waypoints, Layers, Smartphone, Laptop, Watch, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

interface OptionAProps {
  onProjectClick: (id: string) => void;
}


const OptionA: React.FC<OptionAProps> = ({ onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress specifically to trigger darkening as we approach/enter work section
      // Start darkening after 200px and progressively reach max at 1200px
      const start = 0;
      const end = 1000;
      const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900 pt-[74px]">
      {/* Header */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <span className="text-[24px] font-serif font-medium tracking-[0.01em] text-white drop-shadow-md">George<span className="text-orange-500">.</span></span>
        <div className="flex gap-8 items-center text-[16px] font-normal text-gray-200 drop-shadow-md">
          {/* <a href="#/resume" className="hover:text-white transition-colors">Resume</a> */}
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-10 bg-black">
        {/* Photo Background - Fixed on Scroll */}
        <div className="fixed inset-0 z-0 bg-black pointer-events-none">
          <img
            src={heroImage}
            alt="George"
            className="w-full h-full object-cover object-[80%_center] lg:object-center saturate-50 opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 lg:hidden pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div 
            className="absolute inset-0 pointer-events-none bg-black"
            style={{ opacity: scrollProgress * 0.5 }} 
          />
          <div 
            className="absolute inset-0 hidden lg:block pointer-events-none bg-black"
            style={{ opacity: 0.15 + (scrollProgress * 0.35) }} 
          />
        </div>

        <div className="relative z-10 w-full px-6 pt-32 pb-0 md:mt-0">
          <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
            <div className="flex flex-col lg:items-center">
              <div className="w-full max-w-[600px] text-white drop-shadow-lg flex flex-col">
                <div className="mb-4">
                  <span className="text-[42px] md:text-[64px] font-serif italic leading-tight text-white block">
                    Design, leadership<br /> & strategy<span className="text-orange-500">.</span>
                  </span>
                </div>
                <p className="text-[18px] md:text-[20px] font-light text-[#9ca3af] leading-relaxed mt-10">
                  George is a UX leader & manager with 15 years of experience. Uses design thinking and object oriented UX methodologies to bridge the gap between user needs, business goals, and maintain accountability across the cross-functional team.
                </p>
                <p className="text-[18px] md:text-[20px] font-light text-[#9ca3af] leading-relaxed mt-6">
                  Currently at Jio Platforms, building an omnichannel customer ecosystem, and AI powered SaaS apps. Ex Athenahealth, Honeywell, IBEE Solutions, and July Systems (Cisco Spaces).
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {['Healthcare', 'Omnichannel Ecosystems', 'AI & Automation', 'IoT & Connected Spaces', 'Enterprise', 'eSignature', 'CIAM', 'eCommerce', 'Sales & Marketing'].map((domain, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[16px] font-sans tracking-tight text-[#9ca3af]"
                    >
                      {domain}
                    </span>
                  ))}
                </div>

                <div className="mt-24" />

                {/* Projects List - Vertical */}
                <div id="work" className="flex flex-col gap-8">
                  {PROJECTS.map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => onProjectClick(project.id)}
                      className="group cursor-pointer relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="relative h-[200px] mb-8 overflow-hidden rounded-xl">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>
                      <div className="px-2">
                        <h3 className="text-[20px] font-medium text-white group-hover:text-orange-100 transition-colors mb-2 leading-tight">{project.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-[16px] text-gray-400 font-sans tracking-tight group-hover:text-gray-200 transition-colors">{project.impact}</span>
                          </div>
                          <span className="px-3 py-1 bg-[#433422]/5 dark:bg-zinc-900 text-[#6B5A45] dark:text-gray-400 rounded-full text-[12px] font-medium font-sans">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations List - Vertical */}
                <div id="recommendations" className="mt-24">
                  <div className="flex flex-col gap-8">
                    {TESTIMONIALS.map((testimonial, i) => (
                      <a 
                        key={i} 
                        href={testimonial.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 no-underline"
                      >
                        
                        <div className="flex items-center gap-4 mb-6">
                          <img 
                            src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=120`} 
                            alt={testimonial.author} 
                            className="w-12 h-12 rounded-full object-cover border border-white/10" 
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-white text-[20px] group-hover:text-orange-100 transition-colors">{testimonial.author}</h4>
                            </div>
                            <p className="text-[16px] text-gray-400 font-sans tracking-tight">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-200 text-[16px] leading-relaxed font-sans font-light italic group-hover:text-white transition-colors">
                          "{testimonial.text}"
                        </p>
                      </a>
                    ))}
                    {/* Inline Footer Content */}
                    <div className="mt-[200px] pb-[20px] flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500">
                    <div className="flex items-center">
                      <a href="#/styles" className="font-medium text-[14px] text-[#9ca3af] hover:text-[#9ca3af] transition-none cursor-default selection:bg-transparent">
                        &copy; {new Date().getFullYear()} George Chiramal Davis
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptionA;

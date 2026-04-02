import React from 'react';
import { PROJECTS, PHILOSOPHIES, TESTIMONIALS } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import heroImageLight from '../georgeherowhitebg.png';
import { ArrowUpRight, ArrowDown, Heart, Zap, Users, Target, Layout, Sun, Moon } from 'lucide-react';

interface OptionAProps {
  onProjectClick: (id: string) => void;
}

const OptionA: React.FC<OptionAProps> = ({ onProjectClick }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-gray-900 pb-20 transition-colors duration-500">
      {/* Header */}
      <nav className="fixed top-0 w-full py-[20px] px-[30px] flex justify-between items-center bg-white dark:bg-black z-40 transition-colors duration-500">
        <span className="text-[24px] font-serif font-medium tracking-[0.01em] text-gray-900 dark:text-white drop-shadow-none dark:drop-shadow-md transition-colors duration-500">George<span className="text-orange-500">.</span></span>
        <div className="flex gap-8 items-center text-sm font-normal text-gray-600 dark:text-gray-200 drop-shadow-none dark:drop-shadow-md transition-colors duration-500">
          <a href="#leadership" className="hover:text-black dark:hover:text-white transition-colors">Leadership</a>
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <button onClick={toggleDarkMode} className="hover:text-black dark:hover:text-white transition-colors ml-4">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0 bg-white dark:bg-black transition-colors duration-500">
          <img
            src={heroImageLight}
            alt="George Light"
            className="w-full h-full object-cover object-[80%_center] lg:object-center block dark:hidden mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <img
            src={heroImage}
            alt="George Dark"
            className="w-full h-full object-cover object-[80%_center] lg:object-center saturate-50 opacity-80 hidden dark:block"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 lg:hidden pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/60 dark:to-black/20 transition-colors duration-500"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 max-w-7xl mx-auto text-gray-900 dark:text-white drop-shadow-none dark:drop-shadow-lg transition-colors duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="mb-4">
                <span className="text-orange-500 font-sans text-[18px] tracking-[0.3em] uppercase mb-2 block">Hello, I'm</span>
                <span className="text-[64px] md:text-[80px] font-serif tracking-tighter leading-none text-gray-900 dark:text-white block">
                  George<span className="text-orange-500">.</span>
                </span>
              </div>
              <p className="text-[18px] font-light text-gray-700 dark:text-gray-200 max-w-[520px] leading-relaxed mt-8 transition-colors duration-500">
                I coach teams to build products people love. With over 15 years of multi-domain experience, I help organizations navigate the space between customer goals and technical feasibility. Having managed diverse teams of up to 8 designers, I focus on fostering a culture of ownership, evidence-based strategy, and cross-functional collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="leadership" className="bg-gray-50 dark:bg-zinc-900/50 py-24 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          
          <div className="font-sans text-gray-800 dark:text-gray-200 space-y-6 text-lg leading-relaxed mb-16 max-w-3xl">
            <h2 className="text-[42px] font-serif leading-tight text-black dark:text-white border-none bg-transparent">Leadership</h2>
            <p>
              In my 14+ years of experience, I've learned that the best products come from healthy teams. My approach focuses on coaching, empowerment, and strategic scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {PHILOSOPHIES.map((item, i) => (
              <div key={i} className="border-t border-orange-500/30 pt-6">
                <div className="text-orange-500 mb-4">{getIcon(item.icon)}</div>
                <h4 className="text-black dark:text-white font-bold mb-3 text-[18px]">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Featured Work */}
      <section id="work" className="mt-40 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-[42px] font-serif leading-tight">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="cursor-pointer group border-l border-gray-300 dark:border-zinc-800 pl-6 flex flex-col hover:border-black dark:hover:border-white transition-colors duration-300"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-mono text-gray-400 dark:text-zinc-500 mb-3 block">0{index + 1} / {project.category}</span>
              <h3 className="text-[24px] font-sans font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300 text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow">{project.description}</p>
              <div className="mt-auto flex items-center justify-between w-full">
                <span className="font-mono text-sm font-semibold text-black dark:text-white">{project.impact}</span>
                <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Recommendations */}
      <section className="mt-40 bg-gray-50 dark:bg-zinc-900/50 py-24 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[42px] font-serif leading-tight text-black dark:text-white">Recommendations</h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-16">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="border-b border-gray-300 dark:border-zinc-800 pb-10 flex flex-col break-inside-avoid mb-12">
                <p className="text-gray-600 dark:text-gray-300 text-[18px] mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=100`} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                      {testimonial.tag && (
                        <span className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-semibold">{testimonial.tag}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places Worked */}
      <section className="py-24 border-t border-gray-100 dark:border-zinc-900 transition-colors duration-500">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium text-gray-400 dark:text-zinc-600 tracking-widest uppercase mb-12">Places I've Worked</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 dark:opacity-40 grayscale hover:opacity-100 dark:hover:opacity-80 transition-opacity duration-300">
            {/* Jio */}
            <div className="text-[28px] md:text-[32px] font-bold font-sans tracking-tighter text-gray-900 dark:text-gray-200">Jio</div>
            
            {/* Athenahealth */}
            <div className="text-[24px] md:text-[28px] font-serif text-gray-900 dark:text-gray-200">
              <span className="italic">athena</span><span className="font-semibold">health</span>
            </div>
            
            {/* Honeywell */}
            <div className="text-[20px] md:text-[22px] font-sans font-black tracking-[0.2em] uppercase text-gray-900 dark:text-gray-200">
              HONEYWELL
            </div>
            
            {/* IBEE Solutions */}
            <div className="text-[20px] md:text-[24px] font-sans font-medium tracking-wide text-gray-900 dark:text-gray-200">
              IBEE <span className="font-light opacity-70">Solutions</span>
            </div>
            
            {/* July Systems */}
            <div className="text-[22px] md:text-[26px] font-sans font-bold tracking-tight text-gray-900 dark:text-gray-200">
              July<span className="font-light opacity-70">Systems</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} George. Designed with intention.
      </footer>
    </div>
  );
};

export default OptionA;

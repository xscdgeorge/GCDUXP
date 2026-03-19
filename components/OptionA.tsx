import React from 'react';
import { PROJECTS, PHILOSOPHIES, TESTIMONIALS } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import { ArrowUpRight, ArrowDown, Heart, Zap, Users, Target, Layout } from 'lucide-react';

interface OptionAProps {
  onProjectClick: (id: string) => void;
}

const OptionA: React.FC<OptionAProps> = ({ onProjectClick }) => {
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
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-gray-900 selection:text-white pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full py-[20px] px-[30px] flex justify-between items-center bg-black z-40">
        <span className="text-[24px] font-serif font-medium tracking-[0.01em] text-white drop-shadow-md">George<span className="text-orange-500">.</span></span>
        <div className="flex gap-8 text-sm font-medium text-gray-200 drop-shadow-md">
          <a href="#mentorship" className="hover:text-white transition-colors">Mentorship</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={heroImage}
            alt="George"
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 w-full px-6 md:px-10 max-w-7xl mx-auto text-white drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="text-[64px] font-serif leading-[1.1] mb-8">
                I coach teams <br />
                to build products <br />
                people love<span className="text-orange-500">.</span>
              </h1>
              <p className="text-[18px] font-normal text-gray-200 max-w-lg leading-relaxed">
                Hi, I'm George, a design leader with 15+ yrs of experience across various domains from Healthcare, eCommerce, eSignatures to UAV inspection, Marketing and sales. I've been bridging the gap between cross functional teams to achieve business & customer goals. I've managed a team of up to 8 designers with varied skill sets and seniority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="mentorship" className="bg-gray-50 py-24">
        <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          
          <div className="font-sans text-gray-800 space-y-6 text-lg leading-relaxed">
            <h2 className="text-[42px] font-serif leading-tight text-black border-none bg-transparent">Leadership</h2>
            <p>
              In my 14+ years of experience, I've learned that the best products come from healthy teams. My approach focuses on coaching, empowerment, and strategic scalability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {PHILOSOPHIES.map((item, i) => (
                <div key={i} className="border-t border-orange-500/30 pt-4">
                  <div className="text-orange-500 mb-3">{getIcon(item.icon)}</div>
                  <h4 className="text-black font-bold mb-2 text-base">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-start">
              <div style={{ padding: '16px', height: '650px', boxShadow: 'rgba(142, 151, 158, 0.15) 0px 4px 19px 0px', borderRadius: '16px', overflow: 'hidden', width: '100%', maxWidth: '650px' }}>
                <iframe 
                  src="https://adplist.org/widgets/reviews?src=george-chiramal-davis" 
                  title="All Reviews" 
                  width="100%" 
                  height="100%" 
                  loading="lazy" 
                  style={{ border: '0px' }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* Featured Work */}
      <section id="work" className="mt-40 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 border-b border-gray-200 pb-8">
          <h2 className="text-[42px] font-serif leading-tight">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="cursor-pointer group border-l border-gray-300 pl-6 flex flex-col hover:border-black transition-colors duration-300"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-mono text-gray-400 mb-3 block">0{index + 1} / {project.category}</span>
              <h3 className="text-[24px] font-sans font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              <p className="text-gray-500 mb-6 flex-grow">{project.description}</p>
              <div className="mt-auto flex items-center justify-between w-full">
                <span className="font-mono text-sm font-semibold">{project.impact}</span>
                <div className="bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Recommendations */}
      <section className="mt-40 bg-gray-50 py-24">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b border-gray-200 pb-8">
            <h2 className="text-[42px] font-serif leading-tight">LinkedIn Recommendations</h2>
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="border-l border-gray-300 pl-6 flex flex-col">
                <p className="text-gray-600 text-[16px] mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=100`} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
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

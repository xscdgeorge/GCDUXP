import React from 'react';
import { PROJECTS, PHILOSOPHIES, TESTIMONIALS } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import { ArrowUpRight, Heart, Zap, Users, Target, Layout } from 'lucide-react';

interface OptionTrustProps {
  onProjectClick: (id: string) => void;
}

const OptionTrust: React.FC<OptionTrustProps> = ({ onProjectClick }) => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Heart': return <Heart className="w-8 h-8" />;
      case 'Zap': return <Zap className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'Target': return <Target className="w-8 h-8" />;
      default: return <Layout className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-[#2A2D34] font-sans selection:bg-[#FF825C] selection:text-white pb-24">
      {/* Header */}
      <nav className="fixed top-0 w-full py-[20px] px-6 md:px-[40px] flex justify-between items-center bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <span className="text-[24px] font-bold tracking-tight text-[#2A2D34]">
          George<span className="text-[#FF825C]">.</span>
        </span>
        <div className="flex gap-8 text-[15px] font-semibold text-gray-600">
          <a href="#mentorship" className="hover:text-[#FF825C] transition-colors">Mentorship</a>
          <a href="#work" className="hover:text-[#FF825C] transition-colors">Work</a>
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF825C] transition-colors">LinkedIn</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="relative w-full h-[600px] md:h-[700px] rounded-[32px] overflow-hidden flex items-center shadow-lg bg-gray-900 shadow-[#FF825C]/10">
          {/* Photo Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="George"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 w-full px-8 md:px-16 text-white text-center">
            <h1 className="text-[56px] md:text-[80px] font-bold leading-[1.05] mb-8 tracking-tight drop-shadow-lg">
              I coach teams <br />
              to build products <br />
              people love<span className="text-[#FF825C]">.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] font-medium text-gray-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Hi, I'm George, a design leader with 15+ yrs of experience across various domains from Healthcare, eCommerce, eSignatures to UAV inspection, Marketing and sales. I've been bridging the gap between cross functional teams to achieve business & customer goals. I've managed a team of up to 8 designers with varied skill sets and seniority.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="mentorship" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-[42px] font-bold text-center text-[#2A2D34] mb-16 tracking-tight">How I lead teams</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-[28px] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-[#2A2D34]">In my 14+ years of experience...</h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                I've learned that the best products come from healthy teams. My approach focuses on coaching, empowerment, and strategic scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PHILOSOPHIES.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FFF2EF] text-[#FF825C] flex items-center justify-center mb-6">
                    {getIcon(item.icon)}
                  </div>
                  <h4 className="font-bold mb-3 text-[18px] text-[#2A2D34]">{item.title}</h4>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col items-center">
            <div className="mb-8 text-center px-4">
              <h3 className="text-[28px] font-bold text-[#2A2D34] mb-3 leading-tight">"Leadership is not about being in charge."</h3>
              <p className="font-medium text-[#FF825C] uppercase tracking-wide text-sm">It's about taking care of those in your charge.</p>
            </div>
            
            <div className="w-full h-[550px] overflow-hidden rounded-[20px] bg-gray-50">
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
      </section>

      {/* Featured Work */}
      <section id="work" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-[42px] font-bold text-center text-[#2A2D34] mb-16 tracking-tight">Experience & Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="bg-white p-6 rounded-[28px] shadow-sm border border-gray-100 cursor-pointer flex flex-col group hover:shadow-xl hover:border-transparent transition-all duration-400"
            >
              <div className="w-full h-56 mb-8 overflow-hidden rounded-[20px] bg-gray-100 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-[#FF825C]">{project.category}</span>
                </div>
              </div>
              
              <div className="px-2 flex-grow flex flex-col">
                <h3 className="text-[26px] font-bold text-[#2A2D34] mb-4 group-hover:text-[#FF825C] transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow text-[16px] leading-relaxed">{project.description}</p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <span className="text-[12px] uppercase tracking-wider text-gray-400 font-bold mb-1">Impact</span>
                    <span className="text-[15px] font-bold text-[#2A2D34]">{project.impact}</span>
                  </div>
                  <div className="w-12 h-12 bg-[#FFF2EF] text-[#FF825C] rounded-full flex items-center justify-center group-hover:bg-[#FF825C] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Recommendations */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <h2 className="text-[42px] font-bold text-center text-[#2A2D34] mb-16 tracking-tight flex items-center justify-center gap-4">
          Trusted by Leaders
          <svg className="w-10 h-10 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-[28px] shadow-sm border border-gray-100 flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-8">
                <svg className="w-10 h-10 text-[#FFE1D8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 text-[16px] mb-8 leading-relaxed flex-grow font-medium">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random&color=fff&size=100`} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-[#FFF2EF]" 
                />
                <div>
                  <h4 className="font-bold text-[#2A2D34] text-[16px] leading-tight mb-1">{testimonial.author}</h4>
                  <p className="text-[13px] text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-10 py-12 mt-12 text-center text-gray-400 font-medium text-[15px]">
        &copy; {new Date().getFullYear()} George. Designed with intention.
      </footer>
    </div>
  );
};

export default OptionTrust;

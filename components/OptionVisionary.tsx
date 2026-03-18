import React from 'react';
import { 
  ArrowUpRight,
  Layout, 
  Users, 
  TrendingUp,
  Linkedin,
  Mail,
  Menu,
  Heart,
  Zap,
  Target
} from 'lucide-react';
import { PROJECTS, PHILOSOPHIES, PROFILE_IMAGE } from '../constants';
import heroImage from '../george-profilepicture3.jpg';

interface OptionVisionaryProps {
  onProjectClick: (id: string) => void;
}

const OptionVisionary: React.FC<OptionVisionaryProps> = ({ onProjectClick }) => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Heart': return <Heart className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      default: return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-serif selection:bg-orange-500 selection:text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full flex justify-between items-center py-6 px-6 md:px-12 text-white bg-black z-50 font-sans">
        <div className="font-bold text-xl tracking-tight">George.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#leadership" className="hover:opacity-60 transition-opacity">Leadership</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="https://www.linkedin.com/in/georgeuxd/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
        </div>
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Photo Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src={heroImage} 
            alt="Editorial Portrait" 
            className="w-full h-full object-cover grayscale transition-opacity duration-700 scale-105" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center translate-y-[-100px]">
          <div>
            <span className="text-orange-500 font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Hello, I'm</span>
          <h1 className="text-6xl md:text-9xl font-medium tracking-tighter mb-8 leading-none text-white">
            George<span className="text-orange-500">.</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-orange-500 pl-6">
            Coaching teams to build products people love.
          </p>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-sans text-gray-300 border border-white/20">
                 Lead UX Design Manager @ Jio Platforms Ltd
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="leadership" className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
             <h2 className="text-4xl md:text-5xl italic mb-6">"Leadership is not about being in charge. It's about taking care of those in your charge."</h2>
             <p className="font-sans text-gray-600">Simon Sinek</p>
          </div>
          <div className="font-sans text-gray-800 space-y-6 text-lg leading-relaxed">
            <p>
              In my 14+ years of experience, I've learned that the best products come from healthy teams. My approach focuses on coaching, empowerment, and strategic scalability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {PHILOSOPHIES.map((item, i) => (
                <div key={i} className="border-t border-orange-500/30 pt-4">
                  <div className="text-orange-500 mb-2">{getIcon(item.icon)}</div>
                  <h4 className="text-black font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works Section - Horizontal Scroll Vibe */}
      <section id="work" className="py-24 px-6 md:px-12 bg-white">
        <h2 className="text-black text-4xl md:text-6xl mb-16">Selected Case Studies</h2>
        
        <div className="space-y-24">
          {PROJECTS.filter(p => p.id !== 'athenaone').map((work) => (
            <div 
              key={work.id} 
              onClick={() => onProjectClick(work.id)}
              className="group grid md:grid-cols-12 gap-12 items-center border-b border-zinc-800 pb-24 last:border-0 cursor-pointer"
            >
              <div className="md:col-span-8">
                <h3 className="text-4xl md:text-7xl mb-6 group-hover:text-orange-500 transition-colors leading-tight">{work.title}</h3>
                <p className="font-sans text-gray-600 text-xl mb-8 max-w-2xl leading-relaxed">
                  {work.description}
                </p>
                <div className="flex gap-6 font-sans text-sm text-gray-500 uppercase tracking-[0.2em]">
                  <span>{work.category}</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-black">{work.impact}</span>
                </div>
              </div>
              <div className="md:col-span-4 h-[350px] bg-zinc-900 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-3xl shadow-2xl">
                <img 
                    src={work.image} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    alt={work.title}
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-6 right-6 bg-orange-500 text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archives Section */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <h2 className="text-black text-4xl md:text-6xl mb-16">Archives Pre-managerial days</h2>
        
        <div className="space-y-24">
          {PROJECTS.filter(p => p.id === 'athenaone').map((work) => (
            <div 
              key={work.id} 
              onClick={() => onProjectClick(work.id)}
              className="group grid md:grid-cols-12 gap-12 items-center border-b border-zinc-800 pb-24 last:border-0 cursor-pointer"
            >
              <div className="md:col-span-8">
                <h3 className="text-4xl md:text-7xl mb-6 group-hover:text-orange-500 transition-colors leading-tight">{work.title}</h3>
                <p className="font-sans text-gray-600 text-xl mb-8 max-w-2xl leading-relaxed">
                  {work.description}
                </p>
                <div className="flex gap-6 font-sans text-sm text-gray-500 uppercase tracking-[0.2em]">
                  <span>Archive</span>
                  <span className="text-gray-300">/</span>
                  <span className="text-black">{work.impact}</span>
                </div>
              </div>
              <div className="md:col-span-4 h-[350px] bg-zinc-900 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-3xl shadow-2xl">
                <img 
                    src={work.image} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    alt={work.title}
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-6 right-6 bg-orange-500 text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 md:px-12 bg-gray-50 text-gray-600 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">© 2024 George. All Rights Reserved.</div>
          <div className="flex gap-6">
            <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OptionVisionary;

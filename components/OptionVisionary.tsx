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
            className="w-full h-full object-cover object-[80%_center] lg:object-center saturate-50 opacity-80 transition-opacity duration-700 scale-105" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 lg:hidden pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.24) 60%, rgba(0,0,0,0.24) 100%)' }}></div>
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center translate-y-[-100px]">
          <div>
            <span className="text-orange-500 font-sans text-[16px] tracking-[0.3em] uppercase mb-4 block">Hello, I'm</span>
          <h1 className="text-[94px] font-serif tracking-tighter mb-8 leading-none text-white">
            George<span className="text-orange-500">.</span>
          </h1>
          <div className="max-w-[650px] font-sans">
            <p className="text-white font-sans font-light text-[22px] mb-6 leading-relaxed tracking-wide">
              I coach design teams to build products people love and businesses value.
            </p>
            <p className="font-light text-gray-300 text-[18px] leading-relaxed">
              With over 15 years of multi-domain experience, I help organizations navigate the space between customer goals and technical feasibility. Having managed diverse teams of up to 8 designers, I focus on fostering a culture of ownership, evidence-based strategy, and cross-functional collaboration.
            </p>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default OptionVisionary;

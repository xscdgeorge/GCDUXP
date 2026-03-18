import React from 'react';
import { PROJECTS, PHILOSOPHIES } from '../constants';
import heroImage from '../george-profilepicture3.jpg';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface OptionAProps {
  onProjectClick: (id: string) => void;
}

const OptionA: React.FC<OptionAProps> = ({ onProjectClick }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-gray-900 selection:text-white pb-20">
      {/* Header */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center bg-black z-40">
        <span className="text-xl font-medium tracking-tight text-white drop-shadow-md">George.</span>
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
              <h1 className="text-[72px] font-serif leading-[1.1] mb-8">
                <span className="font-sans text-[32px] block mb-4 leading-tight">Hey, I'm George</span>
                I coach teams <br />
                <span className="text-gray-300 italic">to build products</span> <br />
                people love.
              </h1>
              <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                I’m George, a Lead UX Design Manager at Jio Platforms Ltd with 14+ years of experience scaling B2B & B2C enterprise teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section id="mentorship" className="mt-40 bg-gray-50 py-24">
        <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-6">The Coach's Playbook</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My management style is rooted in coaching. I believe my primary product is the team itself. When designers feel safe, challenged, and supported, the ROI takes care of itself.
            </p>
            <p className="text-gray-600 mb-8 italic leading-relaxed border-l-4 border-gray-300 pl-4 py-1 text-sm bg-white shadow-sm inline-block rounded-r-md">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p>
            <div className="mt-4 border-b border-black pb-1 inline-block">
              <button className="text-sm font-bold hover:text-gray-600 transition-colors">
                Read my management manifesto
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PHILOSOPHIES.map((phi, i) => (
              <div key={i} className="border-l border-gray-300 pl-6">
                <h4 className="font-bold mb-2">{phi.title}</h4>
                <p className="text-sm text-gray-600">{phi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - List View Style */}
      <section id="work" className="mt-40 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 border-b border-gray-200 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
        </div>

        <div className="flex flex-col">
          {PROJECTS.filter(p => p.id !== 'athenaone').map((project, index) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group border-b border-gray-100 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="md:w-1/2">
                <span className="text-xs font-mono text-gray-400 mb-2 block">0{index + 1} / {project.category}</span>
                <h3 className="text-4xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center gap-12 transition-opacity duration-500">
                <span className="font-mono text-sm">{project.impact}</span>
                <img src={project.image} alt={project.title} className="w-48 h-32 object-cover hidden md:block grayscale" referrerPolicy="no-referrer" />
                <div className="bg-black text-white p-3 rounded-full">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archives Section */}
      <section className="mt-40 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 border-b border-gray-200 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif">Archives Pre-managerial days</h2>
        </div>

        <div className="flex flex-col">
          {PROJECTS.filter(p => p.id === 'athenaone').map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="group border-b border-gray-100 py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50 transition-colors px-4 -mx-4 cursor-pointer"
            >
              <div className="md:w-1/2">
                <span className="text-xs font-mono text-gray-400 mb-2 block">Archive / {project.category}</span>
                <h3 className="text-4xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center gap-12 transition-opacity duration-500">
                <span className="font-mono text-sm">{project.impact}</span>
                <img src={project.image} alt={project.title} className="w-48 h-32 object-cover hidden md:block grayscale" referrerPolicy="no-referrer" />
                <div className="bg-black text-white p-3 rounded-full">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-10 py-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} George. Designed with intention.
      </footer>
    </div>
  );
};

export default OptionA;

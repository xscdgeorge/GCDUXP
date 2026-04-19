import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface MoreProjectsProps {
  currentProjectId: string;
}

const MoreProjects: React.FC<MoreProjectsProps> = ({ currentProjectId }) => {
  const otherProjects = PROJECTS.filter(p => p.id !== currentProjectId).slice(0, 3);

  const handleClick = (id: string) => {
    window.open(`${window.location.origin}${window.location.pathname}#/project/${id}`, '_blank');
  };

  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto mb-32 pt-20 border-t border-zinc-800">
      <h2 className="text-[42px] font-serif leading-tight text-white mb-16 text-center">More projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.id)}
            className="cursor-pointer group border-l border-zinc-800 pl-6 flex flex-col hover:border-white transition-colors duration-300"
          >
            <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${project.id === 'jiosign-mobile' ? 'scale-125 group-hover:scale-[1.35]' : 'group-hover:scale-110'}`}
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-mono text-zinc-500 mb-3 block">
              {project.category}
            </span>
            <h3 className="text-[24px] font-sans font-medium mb-4 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            <div className="mt-auto flex items-center justify-between w-full">
              <span className="font-mono text-sm font-semibold text-white">{project.impact}</span>
              <div className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;

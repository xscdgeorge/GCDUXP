import React from 'react';
import { PROJECTS } from '../constants';

interface MoreProjectsProps {
  currentProjectId: string;
}

const MoreProjects: React.FC<MoreProjectsProps> = ({ currentProjectId }) => {
  const otherProjects = PROJECTS.filter(p => p.id !== currentProjectId).slice(0, 2);

  const handleClick = (id: string) => {
    window.open(`${window.location.origin}${window.location.pathname}#/project/${id}`, '_blank');
  };

  return (
    <section className="px-6 md:px-10 max-w-3xl mx-auto mb-20 pt-20 border-t border-white">
      <h2 className="text-3xl font-serif mb-10">More projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.id)}
            className="cursor-pointer group border-l border-gray-300 dark:border-zinc-800 pl-6 flex flex-col hover:border-black dark:hover:border-white transition-colors duration-300"
          >
            <div className="w-full h-48 mb-6 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-mono text-gray-400 dark:text-zinc-500 mb-3 block">
              0{index + 1} / {project.category}
            </span>
            <h3 className="text-[24px] font-sans font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300 text-black dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 dark:text-zinc-500">{project.year}</span>
              <span className="text-orange-600 dark:text-orange-400 font-bold">{project.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;

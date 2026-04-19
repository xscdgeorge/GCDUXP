import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-10 max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#e5d9c5] dark:border-zinc-800 text-[#433422] dark:text-zinc-500 text-xs">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
        <span className="font-medium">&copy; {new Date().getFullYear()} George Chiramal Davis</span>
        <a href="#/styles" className="hover:text-orange-500 transition-colors font-mono uppercase tracking-widest text-[10px] bg-[#433422]/5 dark:bg-white/5 px-3 py-1 rounded-full border border-transparent hover:border-orange-500/20">Brand Manual</a>
      </div>
      <div className="flex items-center gap-6">
        <span className="font-light italic opacity-60">Designed with intention.</span>
      </div>
    </footer>
  );
};

export default Footer;

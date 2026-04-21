import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-10 max-w-7xl mx-auto h-[100px] flex flex-col md:flex-row justify-between items-center gap-6 text-[#433422] dark:text-zinc-500 text-xs">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start">
        <span className="font-medium text-[14px]">&copy; {new Date().getFullYear()} George Chiramal Davis</span>
        <a href="#/styles" className="hover:text-orange-500 transition-colors font-sans uppercase tracking-widest text-[10px] bg-[#433422]/5 dark:bg-white/5 px-3 py-1 rounded-full border border-transparent hover:border-orange-500/20">Brand Manual</a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Theme } from '../types';
import { Layout, Moon, Coffee, Sparkles, Heart } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, setTheme }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-gray-200 dark:border-zinc-700 shadow-xl">
      <button
        onClick={() => setTheme('minimal')}
        className={`p-3 rounded-full transition-all ${
          currentTheme === 'minimal' 
            ? 'bg-black text-white' 
            : 'bg-white text-gray-500 hover:bg-gray-100'
        }`}
        title="Option A: Minimalist Mentor"
      >
        <Layout size={20} />
      </button>
      <button
        onClick={() => setTheme('visionary')}
        className={`p-3 rounded-full transition-all ${
          currentTheme === 'visionary' 
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50' 
            : 'bg-black text-zinc-500 hover:text-zinc-300'
        }`}
        title="Option D: Visionary Dark"
      >
        <Sparkles size={20} />
      </button>
      <button
        onClick={() => setTheme('trust')}
        className={`p-3 rounded-full transition-all ${
          currentTheme === 'trust' 
            ? 'bg-[#FF825C] text-white shadow-lg shadow-[#FF825C]/50' 
            : 'bg-white text-gray-500 hover:bg-gray-100'
        }`}
        title="Option C: TrustPaisa Style"
      >
        <Heart size={20} />
      </button>
    </div>
  );
};

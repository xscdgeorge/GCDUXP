export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  year: string;
}

export interface Philosophy {
  title: string;
  description: string;
  icon: 'Heart' | 'Zap' | 'Users' | 'Target';
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  image?: string;
}

export type Theme = 'minimal' | 'visionary' | 'trust';

export type View = 'home' | 'case-study' | 'video-gen';

export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}



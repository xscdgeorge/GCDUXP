export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  year: string;
  externalLink?: string;
}

export interface Philosophy {
  title: string;
  description: string;
  icon: 'Heart' | 'Zap' | 'Users' | 'Target' | 'Layout' | 'Waypoints' | 'Bridge' | 'Layers' | 'Smartphone';
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  tag?: string;
  image?: string;
}

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



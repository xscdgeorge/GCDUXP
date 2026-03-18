/// <reference types="vite/client" />
import { Project, Philosophy, Testimonial } from './types';
import profileImage from './george-profilepicture2.jpg';

// Placeholder for the user's image. 
// In a real scenario, this would be the uploaded asset.
export const PROFILE_IMAGE = profileImage; 

export const PROJECTS: Project[] = [
  {
    id: 'jiosign',
    title: 'JioSign',
    category: 'eSignature SaaS',
    description: 'Strategic overhaul of eSignature workflows, moving to a "Pay-as-you-go" model and mobile-first approach.',
    impact: '1M Docs/Day | 96% TCR',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  },
  {
    id: 'athenaone',
    title: 'AthenaOne',
    category: 'Healthcare IT',
    description: 'Co-created a quality vision to stop penalties at the point of enrollment through a self-service model.',
    impact: '$1M Annual Savings',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    year: '2023'
  },
  {
    id: 'idaas',
    title: 'JioID',
    category: 'Identity Ecosystem',
    description: 'Guided UX for India\'s largest consumer social login, managing 1B+ users across a unified SSO ecosystem.',
    impact: '500M+ Unified Customers',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  },
  {
    id: 'jioconsent',
    title: 'JioConsent',
    category: 'SaaS / Open Source',
    description: 'Winning solution for MeitY "Code for Consent" challenge, focusing on DPDP Act compliance and accessibility.',
    impact: 'Top 2 National Finalist',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  },
  {
    id: 'retail-ai',
    title: 'Retail Merchandiser',
    category: 'AI Retail Tech',
    description: 'Designed a no-code WYSIWYG editor for category managers to customize listings and AI-powered discovery.',
    impact: '70% Conversion Lift',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    year: '2024'
  }
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    title: 'Coaching & Empowerment',
    description: 'I focus on unlocking potential rather than dictating solutions. I built a multi-domain team of 9 in just 6 months.',
    icon: 'Heart'
  },
  {
    title: 'Cross-Functional Bridge',
    description: 'Decision-maker and partner to C-suite leaders, aligning design, engineering, and product via E2E storytelling.',
    icon: 'Target'
  },
  {
    title: 'Agile UX Advocacy',
    description: 'Re-introduced Agile to focus on outcomes (user value) rather than just outputs (ticket completion).',
    icon: 'Zap'
  },
  {
    title: 'AI-Driven DesignOps',
    description: 'Experimenting with AI coding tools to allow the UX team to share front-end ownership and reduce handoff friction.',
    icon: 'Users'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "George didn't just manage my work; he managed my career. His coaching helped me transition from Senior to Principal Designer in under two years.",
    author: "Sarah Jenkins",
    role: "Principal Product Designer"
  },
  {
    text: "The rare leader who can speak fluency in both design nuances and business strategy. He bridges the gap perfectly.",
    author: "David Chen",
    role: "VP of Product"
  }
];

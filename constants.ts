/// <reference types="vite/client" />
import { Project, Philosophy, Testimonial } from './types';
import profileImage from './george-profilepicture2.jpg';
import davidImg from './David.jpeg';
import dhavalImg from './Dhaval.jpeg';
import jamieImg from './Jamie.jpeg';
import poojaImg from './Pooja.jpeg';
import rameshImg from './Ramesh.jpeg';
import kavitaImg from './kavita.jpeg';
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
  },
  {
    id: 'athenaone',
    title: 'AthenaOne',
    category: 'Healthcare IT',
    description: 'Co-created a quality vision to stop penalties at the point of enrollment through a self-service model.',
    impact: '$1M Annual Savings',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    year: '2023'
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
    text: "George is a rare breed designer that understands design and functionality are inseparable. He is the person you want for your most critical projects and you can count on for world-class deliverables. Every. Single. Time.",
    author: "Jamie Maldonado",
    role: "VP of UX Design, JPMorganChase",
    image: jamieImg
  },
  {
    text: "George is an exceptional design leader who consistently delivers high-quality user experiences while effectively managing stakeholder expectations. [Placeholder due to missing text]",
    author: "David Parsons",
    role: "Director of UX Design Group, Xerox",
    image: davidImg
  },
  {
    text: "I had the pleasure of working with George at Honeywell. Our mission was to bring modern user experience design into a very large global IT organization. George was a great contributor, bringing positive energy and meaningful design contributions to our project. I would recommend him without hesitation as a key member of any growing or established design group.",
    author: "Ramesh Pillay",
    role: "IT Director Innovation & Lab leader, Honeywell",
    image: rameshImg
  },
  {
    text: "George is an absolute professional with keen interest to detail. He plans execution in advance but at the same time adapts himself to the situation at hand. He led the customer VOC for developing digital portal for Honeywell business partners and he did a great job which was very helpful in making the project successful!",
    author: "Pooja Chopra",
    role: "Product Marketing Manager, Honeywell",
    image: poojaImg
  },
  {
    text: "George is always the design enthusiast & was a great addition to the team we had at July. He had various creative approaches to the task given & was always open to feedback. Its been great working with him.",
    author: "Kavita Chowkimane",
    role: "Sr. Director, Business Growth, Allen Digital",
    image: kavitaImg
  },
  {
    text: "It has been a pleasure working with George in the past! He is precise, understands the task at hand quickly, asks the right questions, manages and communicates timelines well. The output surely reflects thought and value for the client.",
    author: "Dhaval Mehta",
    role: "Director, Globestar Edutech",
    image: dhavalImg
  }
];

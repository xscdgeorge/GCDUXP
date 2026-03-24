/// <reference types="vite/client" />
import { Project, Philosophy, Testimonial } from './types';
import profileImage from './george-profilepicture2.jpg';
import davidImg from './David.jpeg';
import dhavalImg from './Dhaval.jpeg';
import jamieImg from './Jamie.jpeg';
import poojaImg from './Pooja.jpeg';
import rameshImg from './Ramesh.jpeg';
import kavitaImg from './kavita.jpeg';
import samikshaImg from './Samiksha.jpg';
import kristalImg from './Kristal.jpg';
import mariaImg from './Maria.jpg';
import akankshaImg from './Akanksha.jpg';
import shruthiImg from './Shruthi.jpg';
import rahulImg from './Rahul.jpg';
import dronnectHeroImg from './dronnectHero.png';
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
  },
  {
    id: 'dronnect',
    title: 'Dronnect UAV Inspection',
    category: 'Funded PoC',
    description: 'Connected UAV surveillance and response integrated with Honeywell Max Pro to securely replace physical wiring for sweeping asset inspections.',
    impact: 'Market Expansion',
    image: dronnectHeroImg,
    year: '2017'
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
    title: 'Storytelling for impact',
    description: 'Crafting compelling narratives that align product goals with user realities, ensuring stakeholders understand the true "why" behind every decision.',
    icon: 'Layout'
  },
  {
    title: 'Truly useful AI',
    description: 'Leveraging artificial intelligence to genuinely solve human problems and augment workflows, bypassing tech-for-tech\'s-sake gimmicks.',
    icon: 'Zap'
  },
  {
    title: 'Vision & Focus',
    description: 'Protecting the team\'s focus by translating chaotic roadmaps and business requirements into clear, executable UX strategies.',
    icon: 'Target'
  },
  {
    title: 'Design Community',
    description: 'Fostering an inclusive environment of continuous learning, sharing insights, and mentoring the next generation of product designers.',
    icon: 'Heart'
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
    text: "I had the pleasure of working with George at Honeywell. Our mission was to bring modern user experience design into a very large global IT organization. George was a great contributor, bringing positive energy and meaningful design contributions to our projects. I would recommend him without hesitation as a key member of any growing or established design group.",
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
  },
  {
    text: "I recommend George if you are looking for straightforward guidance and feedback on your portfolio and presentation. He gave me lots of detailed recommendations and helped to structure the story in a more logical and clear way. George has paid attention to the smallest details and spent much more time than previously planned to finish the portfolio review.",
    author: "Maria Borysova",
    role: "Product Designer, Amazon",
    tag: "Mentee",
    image: mariaImg
  },
  {
    text: "Highly recommend George to those looking for valuable feedback on portfolio and is ready for a laugh. He gave me honest and straightforward guidance on how to improve my narrative through my portfolio. Great session with George.",
    author: "Shruthi Sasidaran",
    role: "Sr. Product Designer, hipages group",
    tag: "Mentee",
    image: shruthiImg
  },
  {
    text: "I found it immensely helpful connecting with George for guidance in my career path as well as a project. His outlook towards the problems was unique and helped me gain a new perspective and frameworks to work on my project. Thank you and hoping to connect again soon!",
    author: "Samiksha Sachdeva",
    role: "UX Designer III, Walmart Global Tech",
    tag: "Mentee",
    image: samikshaImg
  },
  {
    text: "George mentored me for my first UX/UI design role. He spent about two hours helping me refine my portfolio slide deck when we only scheduled for 1 hour. The feedback helped me make it to the next phase of the interview process! He is also super patient and knowledgeable about the health-tech industry. I highly recommend him to designers looking to specialize in health-tech!",
    author: "Kristal Springer",
    role: "Sr. UI/UX, Inizio Evoke",
    tag: "Mentee",
    image: kristalImg
  },
  {
    text: "I want to take a moment to thank you. The way you guide even without being on the call and how it becomes a hit is so impressive!",
    author: "Akanksha Singh",
    role: "Sr. UX Designer, Jio Platforms",
    tag: "Mentee",
    image: akankshaImg
  },
  {
    text: "Sessions with George have been incredibly valuable. His feedback and unique perspective deepened my understanding of UX design. The resources he shared and his attention to detail greatly contributed to my skill development. Highly recommended!",
    author: "Rahul Shroff",
    role: "Product designer, Zeno health",
    tag: "Mentee",
    image: rahulImg
  }
];

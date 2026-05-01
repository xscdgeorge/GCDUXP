/// <reference types="vite/client" />
import { Project, Philosophy, Testimonial } from './types';
import profileImage from './george-profilepicture2.jpg';
import davidImg from './David.jpeg';
import jamieImg from './Jamie.jpeg';
import poojaImg from './Pooja.jpeg';
import rameshImg from './Ramesh.jpeg';
import kavitaImg from './kavita.jpeg';
import jioSignHeroImg from './womanEsigning.png';
import jioSignMobileImg from './upshoteSigning2people.png';
import retailMerchImg from './mockupretailmerch.png';
import jioIdHeroImg from './JioID/JioIDDesktopHome.png';
import athenaHeroImg from './athena_hero_dashboard_1776939527175.png';
// Placeholder for the user's image. 
// In a real scenario, this would be the uploaded asset.
export const PROFILE_IMAGE = profileImage; 

export const PROJECTS: Project[] = [
  {
    id: 'jiosign-mobile',
    title: 'JioSign: Winning back lost customers',
    category: 'eSign document workflows',
    description: 'Winning back lost customers by transforming an unusable mobile experience into a 96% TCR product with AI-powered accessibility.',
    impact: '46% TCR Improvement',
    image: jioSignHeroImg,
    year: ''
  },
  {
    id: 'idaas',
    title: "JioID: Unified Customer Identity",
    category: 'Identity ecosystem',
    description: 'Building a federated identity ecosystem for better cross-marketing, monetization, and omni-channel experiences across the Reliance ecosystem.',
    impact: 'Customer ID Unification',
    image: jioIdHeroImg,
    year: ''
  },
  {
    id: 'athenaone',
    title: 'Clinical Measure Mgmnt. Less is more $$.',
    category: 'Healthcare IT',
    description: 'Overhauling the Clinical Quality Measure (CQM) management system to eliminate multimillion-dollar penalties and improve provider efficiency.',
    impact: 'Multimillion-dollar Penalty Elimination',
    image: athenaHeroImg,
    year: ''
  },
  {
    id: 'retail-ai',
    title: 'Streamlined searchandising and improved conversion lift',
    category: 'AI retail tech',
    description: 'Designed a no-code WYSIWYG editor for category managers to customize listings and AI-powered discovery.',
    impact: '70% Conversion Lift',
    image: retailMerchImg,
    year: ''
  },
];

export const PHILOSOPHIES: Philosophy[] = [
  {
    title: 'User Centred Design',
    description: 'I ensure every product decision is rooted in qualitative research and validated through user centred design, keeping human needs at the core of technical innovation.',
    icon: 'Users'
  },
  {
    title: 'North Star Vision & Evangelisation',
    description: 'I translate vague direction into prioritised UX tasks to create a UX North Star. Then build towards that vision with focus.',
    icon: 'Target'
  },
  {
    title: 'Cross-functional Bridge',
    description: 'Decision-maker and partner to C-suite leaders, aligning design, engineering, and product by crafting compelling narratives that connect business goals with user realities.',
    icon: 'Bridge'
  },
  {
    title: 'Multi-Platform Design',
    description: 'Deep experience in designing for diverse product ecosystems across iOS, Android, and Web, leveraging platform-native features while maintaining a unified core product experience.',
    icon: 'Smartphone'
  },
  {
    title: 'Truly useful AI',
    description: 'Leveraging artificial intelligence to genuinely solve human problems and augment workflows, bypassing tech-for-tech\'s-sake gimmicks.',
    icon: 'Zap'
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
    image: jamieImg,
    link: "https://www.linkedin.com/in/jaimemaldonado/"
  },
  {
    text: "I had the pleasure of working with George at Honeywell. Our mission was to bring modern user experience design into a very large global IT organization. George was a great contributor, bringing positive energy and meaningful design contributions to our projects. I would recommend him without hesitation as a key member of any growing or established design group.",
    author: "David Parsons",
    role: "Director of UX Design Group, Xerox",
    image: davidImg,
    link: "https://www.linkedin.com/in/david-m-parsons-02b33011/"
  },
  {
    text: "I had the pleasure of working with George at Honeywell. Our mission was to bring modern user experience design into a very large global IT organization. George was a great contributor, bringing positive energy and meaningful design contributions to our project. I would recommend him without hesitation as a key member of any growing or established design group.",
    author: "Ramesh Pillay",
    role: "IT Director Innovation & Lab leader, Honeywell",
    image: rameshImg,
    link: "https://www.linkedin.com/in/rameshpillay/"
  },
  {
    text: "George is an absolute professional with keen interest to detail. He plans execution in advance but at the same time adapts himself to the situation at hand. He led the customer VOC for developing digital portal for Honeywell business partners and he did a great job which was very helpful in making the project successful!",
    author: "Pooja Chopra",
    role: "Product Marketing Manager, Honeywell",
    image: poojaImg,
    link: "https://www.linkedin.com/in/poojachopra99/"
  },
  {
    text: "George is always the design enthusiast & was a great addition to the team we had at July. He had various creative approaches to the task given & was always open to feedback. Its been great working with him.",
    author: "Kavita Chowkimane",
    role: "Sr. Director, Business Growth, Allen Digital",
    image: kavitaImg,
    link: "https://www.linkedin.com/in/kavitachowkimane/"
  }
];

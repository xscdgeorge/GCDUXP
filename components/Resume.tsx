import React from 'react';
import { ArrowLeft, Download, Mail, Linkedin, MapPin, Briefcase, GraduationCap, Award, Code, Sun, Moon, Monitor, Phone } from 'lucide-react';
import resumePdf from '../George Davis.pdf';

interface ResumeProps {
  onBack: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  const experiences = [
    {
      company: "Jio Platforms Limited",
      role: "Lead UX Design Manager / Deputy GM",
      period: "Mar 2022 — Present",
      description: "Head UX for JioID & Auth, JioSign, JioConsent, and Retail Merchandiser. Driving initiatives to improve customer experience across the Reliance ecosystem and building Centralised SaaS.",
      achievements: [
        "Delivered localized solutions unifying ID for 500M+ customers, scaling toward 1.2 Billion in India.",
        "Collaborated with engineering to ensure design alignment across Android, iOS, Web, Mobile Web, Jio Bharat (Basic Phone), JioBook, and Jio Set-top box.",
        "Led a team of 8 UXers, overseeing recruitment, performance, and compliance with national authorities.",
        "Improved JioSign NPS from 5 to 9 and drove a 70% improvement in Recommendation Conversions on JioMart."
      ]
    },
    {
      company: "Athenahealth",
      role: "Lead UX Designer",
      period: "Aug 2018 — Mar 2022",
      description: "Led UX research and design of New Quality Measures Management experiences, focusing on value-based Care Quality at the Point of Care.",
      achievements: [
        "Improved Care Quality experiences with international stakeholders.",
        "Increased lead quality by 25% on Athenahealth.com.",
        "Reduced lead follow-up time from 48 hours to 30 minutes."
      ]
    },
    {
      company: "Honeywell",
      role: "Sr. UX Designer",
      period: "Jun 2014 — Aug 2018",
      description: "Member of the Honeywell Design System Council and lead designer for eDLS (Design System) for Transport & IT Enterprise.",
      achievements: [
        "Redesigned Honeywell.com for key personas ensuring brand adherence.",
        "Designed ecosystem-based PoCs for Connected Drone Surveillance, Automation Bot builder (RPA/Chatbots), and Digital Workplace.",
        "Designed TCX, a modular, responsive B2B template system."
      ]
    },
    {
      company: "IBEE Solutions",
      role: "UX Designer",
      period: "Mar 2013 — Jun 2014",
      description: "Designed various iOS, Android, and Web Apps for diverse clients.",
      achievements: [
        "Delivered end-to-end design solutions for high-growth startups.",
        "Balanced rapid iteration with user-centered design principles."
      ]
    },
    {
      company: "July Systems",
      role: "Design Consultant",
      period: "Mar 2012 — Mar 2013",
      description: "Handled design for complex mobile application development frameworks.",
      achievements: [
        "Designed a WYSIWYG App IDE that accelerated 'Go to Market' time from months to weeks."
      ]
    },
    {
      company: "Freelance Designer",
      role: "Brand Identity Designer",
      period: "Jun 2011 — Mar 2012",
      description: "Focused on print and digital brand identity for small businesses.",
      achievements: [
        "Designed brand systems that helped local businesses establish their market presence."
      ]
    }
  ];

  const skillGroups = [
    { 
      category: "Leadership & strategy", 
      items: ["Storytelling", "Storyboarding", "Ideation workshops", "Team building", "Mentorship", "Agile UX"] 
    },
    { 
      category: "Research", 
      items: ["Heuristic evaluation", "Contextual enquiry", "Usability testing", "Journey mapping", "Persona mapping", "Jobs to be done"] 
    },
    { 
      category: "Technicalities", 
      items: ["Omni-channel UX", "Design systems", "AI-based tools", "Information architecture", "Accessible design", "Conversational UX", "Prototyping", "Cross-platform"] 
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans selection:bg-white selection:text-gray-900 pb-20 pt-[74px]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-16 px-8 flex justify-between items-center bg-black/70 backdrop-blur-xl border-b border-white/5 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-[16px] font-medium hover:text-orange-500 transition-colors group text-white">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <a 
            href={resumePdf} 
            download 
            className="flex items-center justify-center gap-2 px-5 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-orange-500 transition-colors text-sm font-medium"
          >
            <Download size={18} />
            CV
          </a>
        </div>
      </nav>

      <main className="pt-10 px-6 md:px-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif mb-4">George Chiramal Davis<span className="text-orange-500">.</span></h1>
              <p className="text-xl md:text-2xl text-[#6b5a45] dark:text-gray-400 font-light max-w-2xl leading-relaxed">
                George is a Lead UX Design Manager (DGM) with 15 years of experience building multi-domain design teams and user-centered design visions.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span>Navi Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <a href="tel:+919164534016" className="hover:text-black dark:hover:text-white transition-colors">9164534016</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:georgeuxd@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">georgeuxd@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-orange-500" />
                <a href="https://linkedin.com/in/georgeuxd" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">linkedin.com/in/georgeuxd</a>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Briefcase size={20} className="text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l border-gray-100 dark:border-zinc-900 last:border-0 pb-2">
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-[#433422] dark:text-white">{exp.role}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-orange-500 font-medium">{exp.company}</span>
                        <span className="text-base text-[#6B5A45] font-mono">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-[#6b5a45] dark:text-gray-400 mb-4 leading-relaxed italic text-base">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-base text-[#6b5a45] dark:text-gray-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-500/50 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Code size={20} className="text-orange-500" />
                </div>
                <h2 className="text-xl font-bold">Skills</h2>
              </div>
              <div className="space-y-8">
                {skillGroups.map((group, index) => (
                  <div key={index}>
                    <h4 className="text-base font-sans text-[#6b5a45] dark:text-gray-400 mb-4 font-normal italic">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, i) => (
                        <span key={i} className="px-4 py-1 bg-[#433422]/5 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-full text-base font-normal text-[#6b5a45] dark:text-gray-400 leading-tight">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <GraduationCap size={20} className="text-orange-500" />
                </div>
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm">BA Hons, Graphic design</h4>
                  <p className="text-base text-gray-500 dark:text-gray-400 mt-1 italic">University of Central Lancashire</p>
                  <p className="text-sm text-[#6B5A45] mt-1">2008 — 2011</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Award size={20} className="text-orange-500" />
                </div>
                <h2 className="text-xl font-bold">Awards & certs</h2>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Google project management", subtitle: "Foundations (2023)" },
                  { title: "Interaction Design Foundation", subtitle: "User research & HCI (2020)" },
                  { title: "Honeywell UX award 2016", subtitle: "For design system growth" },
                  { title: "Honeywell value award 2015", subtitle: "For contribution to growth" },
                  { title: "Honeywell partner award", subtitle: "For research excellence" },
                  { title: "National institute of design", subtitle: "RGB poster award (2008)" }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-[15px] tracking-tight text-[#433422] dark:text-white">{item.title}</h4>
                    <p className="text-base text-gray-500 dark:text-gray-400 mt-1 leading-normal italic">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100 dark:border-zinc-900 pt-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} George Chiramal Davis. Designed with intention.</p>
      </footer>
    </div>
  );
};

export default Resume;

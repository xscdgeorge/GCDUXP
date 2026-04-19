import React, { useState, useEffect } from 'react';
import OptionA from './components/OptionA';
import IdentityCaseStudy from './components/IdentityCaseStudy';
import RetailAICaseStudy from './components/RetailAICaseStudy';
import AthenaOneCaseStudy from './components/AthenaOneCaseStudy';
import JioSignMobileCaseStudy from './components/JioSignMobileCaseStudy';
import Resume from './components/Resume';
import Styles from './components/Styles';
import { PROJECTS } from './constants';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash);

  // Listen for hash changes (e.g. browser back button)
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const projectId = route.startsWith('#/project/') ? route.replace('#/project/', '') : null;

  // Update document title
  useEffect(() => {
    if (projectId) {
      const project = PROJECTS.find(p => p.id === projectId);
      if (project) {
        document.title = `${project.title} — George Davis Portfolio`;
      }
    } else if (route === '#/resume') {
      document.title = "Resume — George Davis Portfolio";
    } else if (route === '#/styles') {
      document.title = "Brand Manual — George Davis Portfolio";
    } else {
      document.title = "George Davis — Portfolio";
    }
  }, [route, projectId]);

  const handleProjectClick = (id: string) => {
    const project = PROJECTS.find(p => p.id === id);
    if (project?.externalLink) {
      window.open(project.externalLink, '_blank');
      return;
    }
    // Open directly in a new tab — no password required
    window.open(`${window.location.origin}${window.location.pathname}#/project/${id}`, '_blank');
  };

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  // If we're on a project route, render the case study
  if (projectId) {
    const caseStudyMap: Record<string, React.ReactNode> = {
      'idaas': <IdentityCaseStudy onBack={handleBack} />,
      'jiosign-mobile': <JioSignMobileCaseStudy onBack={handleBack} />,
      'retail-ai': <RetailAICaseStudy onBack={handleBack} />,
      'athenaone': <AthenaOneCaseStudy onBack={handleBack} />,
    };

    const caseStudy = caseStudyMap[projectId] || <IdentityCaseStudy onBack={handleBack} />;
    return <div className="relative min-h-screen">{caseStudy}</div>;
  }

  if (route === '#/resume') {
    return <Resume onBack={handleBack} />;
  }

  if (route === '#/styles') {
    return <Styles onBack={handleBack} />;
  }

  // Otherwise render the home page
  return (
    <div className="relative min-h-screen">
      <OptionA onProjectClick={handleProjectClick} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import OptionA from './components/OptionA';
import IdentityCaseStudy from './components/IdentityCaseStudy';
import JioSignCaseStudy from './components/JioSignCaseStudy';
import DronnectCaseStudy from './components/DronnectCaseStudy';
import JioConsentCaseStudy from './components/JioConsentCaseStudy';
import RetailAICaseStudy from './components/RetailAICaseStudy';
import AthenaOneCaseStudy from './components/AthenaOneCaseStudy';
import JioSignMobileCaseStudy from './components/JioSignMobileCaseStudy';

import { PasswordModal } from './components/PasswordModal';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [pendingProjectId, setPendingProjectId] = useState<string | null>(null);

  // Listen for hash changes (e.g. browser back button)
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const projectId = route.startsWith('#/project/') ? route.replace('#/project/', '') : null;

  const handleProjectClick = (id: string) => {
    setPendingProjectId(id);
    setIsPasswordModalOpen(true);
  };

  const handlePasswordSuccess = () => {
    setIsPasswordModalOpen(false);
    if (pendingProjectId) {
      // Open in a new tab
      window.open(`${window.location.origin}${window.location.pathname}#/project/${pendingProjectId}`, '_blank');
    }
  };

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  // If we're on a project route, render the case study
  if (projectId) {
    const caseStudyMap: Record<string, React.ReactNode> = {
      'idaas': <IdentityCaseStudy onBack={handleBack} />,
      'jiosign': <JioSignCaseStudy onBack={handleBack} />,
      'jiosign-mobile': <JioSignMobileCaseStudy onBack={handleBack} />,
      'dronnect': <DronnectCaseStudy onBack={handleBack} />,
      'jioconsent': <JioConsentCaseStudy onBack={handleBack} />,
      'retail-ai': <RetailAICaseStudy onBack={handleBack} />,
      'athenaone': <AthenaOneCaseStudy onBack={handleBack} />,
    };

    const caseStudy = caseStudyMap[projectId] || <IdentityCaseStudy onBack={handleBack} />;
    return <div className="relative min-h-screen">{caseStudy}</div>;
  }

  // Otherwise render the home page
  return (
    <div className="relative min-h-screen">
      <OptionA onProjectClick={handleProjectClick} />
      <PasswordModal 
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={handlePasswordSuccess}
      />
    </div>
  );
}

export default App;

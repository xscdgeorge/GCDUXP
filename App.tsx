import React, { useState } from 'react';
import OptionA from './components/OptionA';
import IdentityCaseStudy from './components/IdentityCaseStudy';
import JioSignCaseStudy from './components/JioSignCaseStudy';
import DronnectCaseStudy from './components/DronnectCaseStudy';
import JioConsentCaseStudy from './components/JioConsentCaseStudy';
import RetailAICaseStudy from './components/RetailAICaseStudy';
import AthenaOneCaseStudy from './components/AthenaOneCaseStudy';

import { PasswordModal } from './components/PasswordModal';
import { View } from './types';

function App() {
  const [view, setView] = useState<View>('home');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [pendingProjectId, setPendingProjectId] = useState<string | null>(null);
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    setPendingProjectId(id);
    setIsPasswordModalOpen(true);
  };

  const handlePasswordSuccess = () => {
    setIsPasswordModalOpen(false);
    if (pendingProjectId) {
      setActiveCaseStudyId(pendingProjectId);
      setView('case-study');
      window.scrollTo(0, 0);
    }
  };


  const renderCaseStudy = () => {
    if (activeCaseStudyId === 'idaas') {
      return <IdentityCaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'jiosign') {
      return <JioSignCaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'dronnect') {
      return <DronnectCaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'jioconsent') {
      return <JioConsentCaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'retail-ai') {
      return <RetailAICaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'athenaone') {
      return <AthenaOneCaseStudy onBack={() => setView('home')} />;
    }
    return <IdentityCaseStudy onBack={() => setView('home')} />;
  };

  return (
    <div className="relative min-h-screen">
      {view === 'home' ? (
        <OptionA onProjectClick={handleProjectClick} />
      ) : (
        renderCaseStudy()
      )}
      
      <PasswordModal 
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSuccess={handlePasswordSuccess}
      />
    </div>
  );
}

export default App;

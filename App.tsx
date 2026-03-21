import React, { useState } from 'react';
import OptionA from './components/OptionA';
import IdentityCaseStudy from './components/IdentityCaseStudy';
import JioSignCaseStudy from './components/JioSignCaseStudy';

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
    if (pendingProjectId === 'idaas' || pendingProjectId === 'jiosign') {
      setActiveCaseStudyId(pendingProjectId);
      setView('case-study');
      window.scrollTo(0, 0);
    } else {
      alert(`Access granted for ${pendingProjectId}. Detailed view coming soon.`);
    }
  };


  const renderCaseStudy = () => {
    if (activeCaseStudyId === 'idaas') {
      return <IdentityCaseStudy onBack={() => setView('home')} />;
    }
    if (activeCaseStudyId === 'jiosign') {
      return <JioSignCaseStudy onBack={() => setView('home')} />;
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

import React, { useState } from 'react';
import OptionA from './components/OptionA';
import OptionVisionary from './components/OptionVisionary';
import OptionTrust from './components/OptionTrust';
import IdentityCaseStudy from './components/IdentityCaseStudy';
import JioSignCaseStudy from './components/JioSignCaseStudy';
import { ThemeSelector } from './components/ThemeSelector';

import { PasswordModal } from './components/PasswordModal';
import { Theme, View } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('minimal');
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

  const renderTheme = () => {
    switch (theme) {
      case 'minimal':
        return <OptionA onProjectClick={handleProjectClick} />;
      case 'visionary':
        return <OptionVisionary onProjectClick={handleProjectClick} />;
      case 'trust':
        return <OptionTrust onProjectClick={handleProjectClick} />;
      default:
        return <OptionA onProjectClick={handleProjectClick} />;
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
        <>
          {renderTheme()}
          <ThemeSelector currentTheme={theme} setTheme={setTheme} />
        </>
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

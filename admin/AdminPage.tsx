import React, { useState } from 'react';
import { AdminProvider } from './AdminContext';
import { AdminLayout } from './AdminLayout';
import { ProjectsManager } from './ProjectsManager';
import { ArticlesManager } from './ArticlesManager';
import { EducationManager } from './EducationManager';
import { HomeManager } from './HomeManager';
import { ContactManager } from './ContactManager';
import { SettingsManager } from './SettingsManager';

type Tab = 'projects' | 'articles' | 'education' | 'home' | 'contact' | 'settings';

const AdminPageContent: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsManager />;
      case 'articles':
        return <ArticlesManager />;
      case 'education':
        return <EducationManager />;
      case 'home':
        return <HomeManager />;
      case 'contact':
        return <ContactManager />;
      case 'settings':
        return <SettingsManager />;
      default:
        return <ProjectsManager />;
    }
  };

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab} onBack={onBack}>
      {renderContent()}
    </AdminLayout>
  );
};

export const AdminPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <AdminProvider>
      <AdminPageContent onBack={onBack} />
    </AdminProvider>
  );
};

export default AdminPage;

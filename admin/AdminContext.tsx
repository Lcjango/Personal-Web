import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PROJECT_DATA } from '../src/data/projects';
import { ARTICLE_DATA } from '../src/data/articles';
import { EDUCATION_DATA } from '../src/data/education';
import { CONTACT_DATA } from '../src/data/contact';
import { HOME_DATA } from '../src/data/home';
import { NAV_ITEMS } from '../src/data/navigation';
import { Language } from '../types';

export interface EditableProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  image: string;
  videoUrl?: string;
  bilibiliId?: string;
  figmaUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags: string[];
  concept?: string;
  roleDetail?: string;
  awards?: string[];
  icon?: string;
}

export interface EditableArticle {
  id: string;
  title: string;
  category: string;
  link: string;
  coverImage?: string;
  date?: string;
}

export interface EditableExperience {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work';
}

export interface EditableHonor {
  scholarships: string[];
  titles: string[];
  competitions: { level: string; awards: string[] }[];
}

export interface EditableEducationContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: EditableExperience[];
  workExperiences: EditableExperience[];
  honors: EditableHonor;
}

export interface EditableContact {
  hello: string;
  intro: string;
  email: string;
  emailMeLabel: string;
  location: string;
  footerDesign: string;
  tooltipText: string;
  base?: string;
  socials?: {
    wechat?: string;
    xiaohongshu?: string;
    bilibili?: string;
    px500?: string;
  };
}

export interface EditableHomeItem {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  category: string;
  link: string;
  image: string;
  tags: string[];
}

interface AdminContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  projects: { zh: EditableProject[]; en: EditableProject[] };
  updateProject: (lang: Language, id: string, data: Partial<EditableProject>) => void;
  addProject: (lang: Language, project: EditableProject) => void;
  deleteProject: (lang: Language, id: string) => void;
  articles: { zh: EditableArticle[]; en: EditableArticle[] };
  updateArticle: (lang: Language, id: string, data: Partial<EditableArticle>) => void;
  addArticle: (lang: Language, article: EditableArticle) => void;
  deleteArticle: (lang: Language, id: string) => void;
  education: { zh: EditableEducationContent; en: EditableEducationContent };
  updateEducation: (lang: Language, data: Partial<EditableEducationContent>) => void;
  contact: { zh: EditableContact; en: EditableContact };
  updateContact: (lang: Language, data: Partial<EditableContact>) => void;
  homeItems: EditableHomeItem[];
  updateHomeItem: (id: string, data: Partial<EditableHomeItem>) => void;
  navItems: { zh: string[]; en: string[] };
  exportData: () => string;
  importData: (data: string) => boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');
  const [projects, setProjects] = useState<{ zh: EditableProject[]; en: EditableProject[] }>({
    zh: PROJECT_DATA.zh as EditableProject[],
    en: PROJECT_DATA.en as EditableProject[]
  });
  const [articles, setArticles] = useState<{ zh: EditableArticle[]; en: EditableArticle[] }>({
    zh: ARTICLE_DATA.zh,
    en: ARTICLE_DATA.en
  });
  const [education, setEducation] = useState<{ zh: EditableEducationContent; en: EditableEducationContent }>({
    zh: EDUCATION_DATA.zh,
    en: EDUCATION_DATA.en
  });
  const [contact, setContact] = useState<{ zh: EditableContact; en: EditableContact }>({
    zh: CONTACT_DATA.zh,
    en: CONTACT_DATA.en
  });
  const [homeItems, setHomeItems] = useState<EditableHomeItem[]>(HOME_DATA);
  const [navItems] = useState<{ zh: string[]; en: string[] }>({
    zh: NAV_ITEMS.zh,
    en: NAV_ITEMS.en
  });

  useEffect(() => {
    const saved = localStorage.getItem('adminData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.projects) setProjects(data.projects);
        if (data.articles) setArticles(data.articles);
        if (data.education) setEducation(data.education);
        if (data.contact) setContact(data.contact);
        if (data.homeItems) setHomeItems(data.homeItems);
      } catch (e) {
        console.error('Failed to load admin data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('adminData', JSON.stringify({
      projects,
      articles,
      education,
      contact,
      homeItems
    }));
  }, [projects, articles, education, contact, homeItems]);

  const updateProject = (lang: Language, id: string, data: Partial<EditableProject>) => {
    setProjects(prev => ({
      ...prev,
      [lang]: prev[lang].map(p => p.id === id ? { ...p, ...data } : p)
    }));
  };

  const addProject = (lang: Language, project: EditableProject) => {
    setProjects(prev => ({
      ...prev,
      [lang]: [...prev[lang], project]
    }));
  };

  const deleteProject = (lang: Language, id: string) => {
    setProjects(prev => ({
      ...prev,
      [lang]: prev[lang].filter(p => p.id !== id)
    }));
  };

  const updateArticle = (lang: Language, id: string, data: Partial<EditableArticle>) => {
    setArticles(prev => ({
      ...prev,
      [lang]: prev[lang].map(a => a.id === id ? { ...a, ...data } : a)
    }));
  };

  const addArticle = (lang: Language, article: EditableArticle) => {
    setArticles(prev => ({
      ...prev,
      [lang]: [...prev[lang], article]
    }));
  };

  const deleteArticle = (lang: Language, id: string) => {
    setArticles(prev => ({
      ...prev,
      [lang]: prev[lang].filter(a => a.id !== id)
    }));
  };

  const updateEducation = (lang: Language, data: Partial<EditableEducationContent>) => {
    setEducation(prev => ({
      ...prev,
      [lang]: { ...prev[lang], ...data }
    }));
  };

  const updateContact = (lang: Language, data: Partial<EditableContact>) => {
    setContact(prev => ({
      ...prev,
      [lang]: { ...prev[lang], ...data }
    }));
  };

  const updateHomeItem = (id: string, data: Partial<EditableHomeItem>) => {
    setHomeItems(prev => prev.map(item => item.id === id ? { ...item, ...data } : item));
  };

  const exportData = () => {
    return JSON.stringify({
      projects,
      articles,
      education,
      contact,
      homeItems,
      exportedAt: new Date().toISOString()
    }, null, 2);
  };

  const importData = (data: string) => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.projects) setProjects(parsed.projects);
      if (parsed.articles) setArticles(parsed.articles);
      if (parsed.education) setEducation(parsed.education);
      if (parsed.contact) setContact(parsed.contact);
      if (parsed.homeItems) setHomeItems(parsed.homeItems);
      return true;
    } catch (e) {
      console.error('Failed to import data:', e);
      return false;
    }
  };

  return (
    <AdminContext.Provider value={{
      language,
      setLanguage,
      projects,
      updateProject,
      addProject,
      deleteProject,
      articles,
      updateArticle,
      addArticle,
      deleteArticle,
      education,
      updateEducation,
      contact,
      updateContact,
      homeItems,
      updateHomeItem,
      navItems,
      exportData,
      importData
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

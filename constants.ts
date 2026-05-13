import { Category, Project, Experience, Skill, Language, HonorsData, Article, ArticleCategory } from './types';
import { Sparkles, Image, History, Send } from 'lucide-react';
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';

export const CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'New Media Operations': '新媒体运营',
    'Graphics & UI': '图文编辑',
    'Development': '应用开发',
    'Photography': '静态摄影',
    'Videography': '动态影像',
    'AI Model': 'AI模型'
  },
  en: {
    'All': 'All',
    'New Media Operations': 'New Media Operations',
    'Graphics & UI': 'Graphics & UI',
    'Development': 'Development',
    'Photography': 'Photography',
    'Videography': 'Videography',
    'AI Model': 'AI Model'
  }
};

export const ARTICLE_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    [ArticleCategory.DIT]: 'DiT | 数媒与课程',
    [ArticleCategory.LUNA]: 'LUNA | 影像相关',
    [ArticleCategory.TALK]: '瞎叨be叨 | 杂记',
    [ArticleCategory.AFTER8]: 'After8 | 聊艺术',
    [ArticleCategory.SERENITY]: '山海疗养院 | 游记'
  },
  en: {
    'All': 'All',
    [ArticleCategory.DIT]: 'DiT | DMT & Courses',
    [ArticleCategory.LUNA]: 'LUNA | Visual Arts',
    [ArticleCategory.TALK]: 'Random Thoughts',
    [ArticleCategory.AFTER8]: 'After8 | Art Talk',
    [ArticleCategory.SERENITY]: 'Serenity Vista | Travel'
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  zh: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.zh,
    // Inject bilingual title for fallback UI
    bilingualTitle: {
      zh: p.zh.title,
      en: p.en.title
    }
  })),
  en: PROJECT_DATA.map(p => ({
    id: p.id,
    ...p.common,
    ...p.en,
    // Inject bilingual title for fallback UI
    bilingualTitle: {
      zh: p.zh.title,
      en: p.en.title
    }
  }))
};

export const ARTICLES: Record<Language, Article[]> = {
  zh: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.zh
  })),
  en: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.en
  }))
};

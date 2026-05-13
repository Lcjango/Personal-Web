import { ArticleCategory, Language } from '../../types';

export interface ArticlesPageContent {
  title: string;
  description: string;
}

export const ARTICLES_PAGE_DATA: Record<Language, ArticlesPageContent> = {
  zh: {
    title: '文章',
    description: '个人思考、学习分享与生活记录。'
  },
  en: {
    title: 'Articles',
    description: 'Thoughts, learning journey, and life records.'
  }
};

export const ARTICLE_DATA = [
  {
    id: 'a1',
    common: {
      category: ArticleCategory.TALK,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop',
      date: '2025-03-15'
    },
    zh: {
      title: '从摄影到设计：我的视觉创作之路',
    },
    en: {
      title: 'From Photography to Design: My Visual Journey',
    }
  },
  {
    id: 'a2',
    common: {
      category: ArticleCategory.DIT,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
      date: '2025-02-20'
    },
    zh: {
      title: 'Vibe Coding：AI 辅助开发的工作流分享',
    },
    en: {
      title: 'Vibe Coding: My AI-Assisted Development Workflow',
    }
  },
  {
    id: 'a3',
    common: {
      category: ArticleCategory.LUNA,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop',
      date: '2025-01-10'
    },
    zh: {
      title: '胶片摄影入门：我的第一卷柯达',
    },
    en: {
      title: 'Film Photography 101: My First Roll of Kodak',
    }
  },
  {
    id: 'a4',
    common: {
      category: ArticleCategory.SERENITY,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop',
      date: '2024-12-05'
    },
    zh: {
      title: '山海疗养院：景德镇瑶里写生记',
    },
    en: {
      title: 'Serenity Vista: Sketching Trip to Yaoli, Jingdezhen',
    }
  },
  {
    id: 'a5',
    common: {
      category: ArticleCategory.AFTER8,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=450&fit=crop',
      date: '2024-11-18'
    },
    zh: {
      title: 'After8：聊聊新中式视觉设计',
    },
    en: {
      title: 'After8: On Neo-Chinese Visual Design',
    }
  },
  {
    id: 'a6',
    common: {
      category: ArticleCategory.TALK,
      link: 'https://mp.weixin.qq.com/s/MD5T-BsAgUi9yUo6ISY1CA',
      coverImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=450&fit=crop',
      date: '2024-10-22'
    },
    zh: {
      title: '独立开发者的工具箱 2024',
    },
    en: {
      title: 'Indie Developer Toolbox 2024',
    }
  }
];

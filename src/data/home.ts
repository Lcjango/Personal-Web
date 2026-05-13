import { Language, Category } from '../../types';

export interface HeroPart {
  text: string;
  category: Category | null;
}

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
  parts?: HeroPart[]; // For multi-part items like "运营+图文"
}

export interface HomeContent {
  heroItems: HeroItem[];
  intro: string;
  selectedWorks: string;
  years: string;
}

export const HOME_DATA: Record<Language, HomeContent> = {
  zh: {
    heroItems: [
      { 
        text: "运营图文", 
        annotation: "（作品积累较多）", 
        category: Category.NEW_MEDIA,
        parts: [
          { text: "运营", category: Category.NEW_MEDIA },
          { text: "图文", category: Category.DESIGN }
        ]
      },
      { text: "AI模型", annotation: "（学习中，来交流）", category: Category.AI_MODEL },
      { text: "应用开发", annotation: "（发现问题，解决问题）", category: Category.DEV },
      { text: "炒粉炒饭", annotation: "（还在学）", category: null }
    ],
    intro: "我渴的时候喝很多水。",
    selectedWorks: "精选作品",
    years: "[ 2021 — 2026 ]"
  },
  en: {
    heroItems: [
      { 
        text: "OperationsContent", 
        annotation: "(Extensive Portfolio)", 
        category: Category.NEW_MEDIA,
        parts: [
          { text: "Operations", category: Category.NEW_MEDIA },
          { text: "Content", category: Category.DESIGN }
        ]
      },
      { text: "AI Models", annotation: "(Learning & Sharing)", category: Category.AI_MODEL },
      { text: "Application Development", annotation: "(Problem Solving)", category: Category.DEV },
      { text: "Cooking", annotation: "(Still Learning)", category: null }
    ],
    intro: "I drink a lot of water when I'm thirsty.",
    selectedWorks: "Selected Works",
    years: "[ 2021 — 2026 ]"
  }
};

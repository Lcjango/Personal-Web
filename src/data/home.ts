import { Language, Category } from '../../types';

export interface HeroItem {
  text: string;
  annotation: string;
  category: Category | null;
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
      { text: "新媒体运营", annotation: "（作品积累较多）", category: Category.NEW_MEDIA },
      { text: "平面交互", annotation: "（有兴趣，有审美）", category: Category.DESIGN },
      { text: "工具开发", annotation: "（vibe builder）", category: Category.DEV },
      { text: "炒粉炒饭", annotation: "（还在学）", category: null }
    ],
    intro: "我渴的时候喝很多水。",
    selectedWorks: "精选作品",
    years: "[ 2021 — 2026 ]"
  },
  en: {
    heroItems: [
      { text: "New Media Operations", annotation: "(Extensive Portfolio)", category: Category.NEW_MEDIA },
      { text: "Graphic & UI", annotation: "(Passion & Aesthetic)", category: Category.DESIGN },
      { text: "Development", annotation: "(Vibe Builder)", category: Category.DEV },
      { text: "Cooking", annotation: "(Still Learning)", category: null }
    ],
    intro: "I drink a lot of water when I'm thirsty.",
    selectedWorks: "Selected Works",
    years: "[ 2021 — 2026 ]"
  }
};

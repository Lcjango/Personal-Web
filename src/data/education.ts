
import { Language, Experience, HonorsData } from '../../types';

export interface EducationPageContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "一名不懂设计的摄影师不是一个好的产品经理。在数媒专业背景下，持续探索影像、视觉设计与工具开发的交叉领域。",
    openToWork: "边学边做 + 开放合作",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [
      {
        id: '1',
        year: '2021 - 2025',
        title: '数字媒体技术 / 本科',
        institution: '华中师范大学',
        description: '学习数字媒体技术，涵盖影视制作、交互设计、前端开发等方向。在校期间积极参与各类设计竞赛与影像创作。',
        type: 'education'
      },
      {
        id: '2',
        year: '2025 - 至今',
        title: '自由创作者',
        institution: '深圳',
        description: '专注于摄影摄像、平面交互设计与工具开发，以 vibe coding 的方式持续构建个人项目。',
        type: 'work'
      }
    ],
    honors: {
      scholarships: ["校级奖学金", "优秀学生干部"],
      titles: ["优秀毕业生", "竞赛先进个人"],
      competitions: [
        {
          level: "国家级",
          awards: ["一等奖 | 中国大学生计算机设计大赛"]
        },
        {
          level: "省级",
          awards: ["一等奖 | 大广赛", "二等奖 | 全国大学生广告艺术大赛"]
        }
      ]
    }
  },
  en: {
    title: "Education",
    about: "A photographer who doesn't understand design is not a good product manager. With a background in digital media, continuously exploring the intersection of videography, visual design, and tool development.",
    openToWork: "Learning by Doing + Open for Collaboration",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",
    experiences: [
      {
        id: '1',
        year: '2021 - 2025',
        title: 'Digital Media Technology / Bachelor',
        institution: 'Central China Normal University',
        description: 'Studied digital media technology, covering film production, interaction design, and front-end development. Actively participated in design competitions and video creation.',
        type: 'education'
      },
      {
        id: '2',
        year: '2025 - Present',
        title: 'Freelance Creator',
        institution: 'Shenzhen',
        description: 'Focusing on photography, videography, graphic/UI design, and tool development. Continuously building personal projects through vibe coding.',
        type: 'work'
      }
    ],
    honors: {
      scholarships: ["University Scholarship", "Outstanding Student Leader"],
      titles: ["Outstanding Graduate", "Competition Advanced Individual"],
      competitions: [
        {
          level: "National",
          awards: ["1st Prize | Chinese College Student Computer Design Competition"]
        },
        {
          level: "Provincial",
          awards: ["1st Prize | Big Idea Competition", "2nd Prize | National College Student Advertising Art Competition"]
        }
      ]
    }
  }
};

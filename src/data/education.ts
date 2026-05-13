
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
  workExperiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "从旅游管理到中国语言文学，从传统行业到数字媒体，持续探索跨界融合的可能。以设计思维驱动内容创作，用技术工具赋能创意表达。",
    openToWork: "边学边做 + 开放合作",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [
      {
        id: '1',
        year: '2013.09 - 2017.06',
        title: '全日制本科、学士',
        institution: '福建农林大学',
        description: '旅游管理专业',
        type: 'education'
      },
      {
        id: '2',
        year: '2024.09 - 2025.09',
        title: '全日制研究生、硕士',
        institution: '香港都会大学',
        description: '中国语言文学专业',
        type: 'education'
      }
    ],
    workExperiences: [
      {
        id: '1',
        year: '2021 - 2025',
        title: '自由创作者',
        institution: '深圳',
        description: '专注于摄影摄像、平面交互设计与工具开发，以 vibe coding 的方式持续构建个人项目。',
        type: 'work'
      },
      {
        id: '2',
        year: '2021.04 - 2024.03',
        title: '宣传管理岗',
        institution: '深圳市公安局交通警察局',
        description: '统筹深圳车管所宣传团队管理与协调工作，负责新媒体平台内容统筹发布、重要文稿编辑、宣传活动策划。',
        type: 'work'
      },
      {
        id: '3',
        year: '2018.07 - 2021.03',
        title: '新媒体主编',
        institution: '深圳市公安局交通警察局',
        description: '全面负责深圳车管所微信公众号、抖音、微博、门户网站等外宣平台内容编辑、专题策划、粉丝互动与数据分析。',
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
    about: "From Tourism Management to Chinese Language and Literature, from traditional industries to digital media. Continuously exploring the possibilities of cross-disciplinary integration.",
    openToWork: "Learning by Doing + Open for Collaboration",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",
    experiences: [
      {
        id: '1',
        year: '2013.09 - 2017.06',
        title: "Bachelor's Degree",
        institution: 'Fujian Agriculture and Forestry University',
        description: 'Tourism Management',
        type: 'education'
      },
      {
        id: '2',
        year: '2024.09 - 2025.09',
        title: "Master's Degree",
        institution: 'Hong Kong Metropolitan University',
        description: 'Chinese Language and Literature',
        type: 'education'
      }
    ],
    workExperiences: [
      {
        id: '1',
        year: '2021 - 2025',
        title: 'Freelance Creator',
        institution: 'Shenzhen',
        description: 'Focusing on photography, videography, graphic/UI design, and tool development. Continuously building personal projects through vibe coding.',
        type: 'work'
      },
      {
        id: '2',
        year: '2021.04 - 2024.03',
        title: 'Publicity Management',
        institution: 'Shenzhen Traffic Police Bureau',
        description: 'Coordinated publicity team management, responsible for new media content planning, document editing, and event planning.',
        type: 'work'
      },
      {
        id: '3',
        year: '2018.07 - 2021.03',
        title: 'New Media Editor-in-Chief',
        institution: 'Shenzhen Traffic Police Bureau',
        description: 'Fully responsible for WeChat, Douyin, Weibo, and portal platform content editing, special planning, fan interaction and data analysis.',
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

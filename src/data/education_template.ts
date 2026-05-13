
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
    about: "【简介段落】在这里写一段关于你自己的简介，通常包含你的专业背景、兴趣方向、个人特点等。建议2-3句话。",
    openToWork: "【状态标语】写一句展示你当前状态或态度的话，如：边学边做 / 开放合作 / 寻找机会等",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",

    experiences: [
      {
        id: '1',
        year: '20XX - 20XX',
        title: '【学历/学位】',
        institution: '【学校名称】',
        description: '【描述】在这里写你的学习内容、专业方向、主要成就或参与的实践活动。',
        type: 'education'
      },
      {
        id: '2',
        year: '20XX - 20XX',
        title: '【学历/学位】',
        institution: '【学校名称】',
        description: '【描述】在这里写你的学习内容、专业方向、主要成就或参与的实践活动。',
        type: 'education'
      }
    ],

    workExperiences: [
      {
        id: '1',
        year: '20XX.XX - 20XX.XX',
        title: '【职位名称】',
        institution: '【公司/机构名称】',
        description: '【描述】在这里写你的工作内容、职责范围、主要成就、参与的项目等。',
        type: 'work'
      },
      {
        id: '2',
        year: '20XX.XX - 20XX.XX',
        title: '【职位名称】',
        institution: '【公司/机构名称】',
        description: '【描述】在这里写你的工作内容、职责范围、主要成就、参与的项目等。',
        type: 'work'
      },
      {
        id: '3',
        year: '20XX.XX - 20XX.XX',
        title: '【职位名称】',
        institution: '【公司/机构名称】',
        description: '【描述】在这里写你的工作内容、职责范围、主要成就、参与的项目等。',
        type: 'work'
      }
    ],

    honors: {
      scholarships: [
        "【奖学金名称1】",
        "【奖学金名称2】"
      ],
      titles: [
        "【荣誉称号1】",
        "【荣誉称号2】"
      ],
      competitions: [
        {
          level: "【级别，如：国家级/省级/校级】",
          awards: [
            "【奖项格式】等级 | 竞赛名称，如：一等奖 | 中国大学生计算机设计大赛"
          ]
        },
        {
          level: "【级别】",
          awards: [
            "【奖项格式】等级 | 竞赛名称",
            "【奖项格式】等级 | 竞赛名称"
          ]
        }
      ]
    }
  },
  en: {
    title: "Education",
    about: "[Your introduction here. Write about your background, interests, and what makes you unique. 2-3 sentences recommended.]",
    openToWork: "[Your current status or attitude statement, e.g.: Learning by Doing / Open for Collaboration / Seeking Opportunities]",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",

    experiences: [
      {
        id: '1',
        year: '20XX - 20XX',
        title: '[Degree/Major]',
        institution: '[University Name]',
        description: '[Describe your studies, major focus, achievements, or activities.]',
        type: 'education'
      },
      {
        id: '2',
        year: '20XX - 20XX',
        title: '[Degree/Major]',
        institution: '[University Name]',
        description: '[Describe your studies, major focus, achievements, or activities.]',
        type: 'education'
      }
    ],

    workExperiences: [
      {
        id: '1',
        year: '20XX.XX - 20XX.XX',
        title: '[Job Title]',
        institution: '[Company/Organization]',
        description: '[Describe your work content, responsibilities, achievements, projects participated.]',
        type: 'work'
      },
      {
        id: '2',
        year: '20XX.XX - 20XX.XX',
        title: '[Job Title]',
        institution: '[Company/Organization]',
        description: '[Describe your work content, responsibilities, achievements, projects participated.]',
        type: 'work'
      },
      {
        id: '3',
        year: '20XX.XX - 20XX.XX',
        title: '[Job Title]',
        institution: '[Company/Organization]',
        description: '[Describe your work content, responsibilities, achievements, projects participated.]',
        type: 'work'
      }
    ],

    honors: {
      scholarships: [
        "[Scholarship Name 1]",
        "[Scholarship Name 2]"
      ],
      titles: [
        "[Honorary Title 1]",
        "[Honorary Title 2]"
      ],
      competitions: [
        {
          level: "[Level, e.g.: National/Provincial/University]",
          awards: [
            "[Award Format] Rank | Competition Name, e.g.: 1st Prize | Chinese Computer Design Competition"
          ]
        },
        {
          level: "[Level]",
          awards: [
            "[Award Format] Rank | Competition Name",
            "[Award Format] Rank | Competition Name"
          ]
        }
      ]
    }
  }
};

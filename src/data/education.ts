import { Language, WorkExperience, Honor, Skill, EducationBackground } from '../../types';

export interface BackgroundPageContent {
  title: string;
  email: string;
  workExperienceTitle: string;
  workHighlightsTitle: string;
  personalHonorsTitle: string;
  educationTitle: string;
  skillsTitle: string;
  workExperiences: WorkExperience[];
  workHighlights: string[];
  personalHonors: Honor[];
  educationList: EducationBackground[];
  skills: Skill[];
}

export const BACKGROUND_DATA: Record<Language, BackgroundPageContent> = {
  zh: {
    title: "背景",
    email: "l_cjango@126.com",
    workExperienceTitle: "工作经历",
    workHighlightsTitle: "工作亮点",
    personalHonorsTitle: "个人荣誉",
    educationTitle: "教育背景",
    skillsTitle: "专业特长",
    workExperiences: [
      {
        id: '1',
        period: '2021年4月1日 - 2024年3月31日',
        title: '宣传管理岗',
        institution: '深圳市公安局交通警察局',
        description: '统筹深圳车管所宣传团队管理与协调工作，负责新媒体平台内容统筹发布、重要文稿编辑、宣传活动策划、日常会议筹办及专题人物采编，对接外部媒体采访、视频拍摄及宣传项目申报，推动数字化宣传工具搭建。'
      },
      {
        id: '2',
        period: '2018年7月23日 - 2021年3月31日',
        title: '新媒体主编',
        institution: '深圳市公安局交通警察局',
        description: '全面负责深圳车管所微信公众号、抖音、微博、门户网站等外宣平台内容编辑、专题策划、粉丝互动与数据分析工作，独立完成海报、宣传栏等各类宣传物料的制作印制，搭建平台内容运营基础体系。'
      }
    ],
    workHighlights: [
      '接手运营"深圳车管所"公众号，用户关注量净增超120万，连续入选深圳政法系统微信公众号影响力年度排行榜十佳榜单，多次位列前五。',
      '策划"文明交通进驾校"全网直播，在线收看人数超10万；策划"深圳车管便民导航"专栏累计阅读量超1000万人次。',
      '搭建车管抖音号，年粉丝净增超14万，总点赞量近100万。多条抖音100w+播放量视频，最高单条播放量超1200万。',
      '参与广东省公安厅交通管理局数据建模大赛，负责小组汇报PPT、演示视频制作，项目先后荣获省厅、市局数据建模二等奖。',
      '熟练掌握ComfyUI等AI工具实操，原创IP"小仙女"表情包获微信表情开放平台"年度优秀表情艺术家"。'
    ],
    personalHonors: [
      { title: '深圳市公安局交通警察局"交通宣传标兵"', year: '2018、2019年度' },
      { title: '深圳市公安局交通警察局"优秀聘员"', year: '2020、2021年度' },
      { title: '全国交通安全新媒体宣传实训班（广东站）"优秀短视频"', year: '2020年度' }
    ],
    educationList: [
      { id: '1', period: '2010.09 - 2013.06', degree: '高中', institution: '镇平县第一高级中学', major: '无' },
      { id: '2', period: '2013.09 - 2017.06', degree: '全日制本科、学士', institution: '福建农林大学', major: '旅游管理' },
      { id: '3', period: '2024.09 - 2025.09', degree: '全日制研究生、硕士', institution: '香港都会大学', major: '中国语言文学' }
    ],
    skills: [
      {
        id: '1',
        category: '新媒体运营与内容策划',
        items: [
          '精通平台运营，具备矩阵搭建、选题规划、策略制定全流程能力。',
          '拥有百万级粉丝账号操盘经验，擅长粉丝增长运营、数据复盘优化。',
          '独立完成短视频、专栏、活动全案策划，打造高传播的标杆内容。'
        ]
      },
      {
        id: '2',
        category: '图文编辑与媒体对接',
        items: [
          '文字功底扎实，可独立撰写年度总结、新闻通稿、媒体采访稿等各类公文与创意文稿。',
          '熟练运用秀米、PS、AI等工具，完成专题图文、海报等物料设计制作。',
          '长期对接深圳广电、晶报等主流媒体，具备媒体采访协调、供稿、外宣传播全流程协作能力。'
        ]
      },
      {
        id: '3',
        category: 'AI技术应用与数字化创作',
        items: [
          '掌握ComfyUI及同类节点化工作流，可完成生图修图、IP全案、VI全案等AI视觉创作，原创IP作品获官方认证。',
          '熟练运用多平台AI大模型完成选题脑暴、文案生成、外文编译、内容优化，适配海内外AI内容创作需求。',
          '掌握剪映、PR等视频工具，结合AI技术完成视频脚本、剪辑、字幕全流程制作，具备小程序搭建等数字化内容创作能力。'
        ]
      }
    ]
  },
  en: {
    title: "Background",
    email: "l_cjango@126.com",
    workExperienceTitle: "Work Experience",
    workHighlightsTitle: "Work Highlights",
    personalHonorsTitle: "Personal Honors",
    educationTitle: "Education",
    skillsTitle: "Professional Skills",
    workExperiences: [
      {
        id: '1',
        period: 'Apr 1, 2021 - Mar 31, 2024',
        title: 'Publicity Management',
        institution: 'Shenzhen Public Security Bureau Traffic Police Bureau',
        description: 'Coordinated publicity team management at Shenzhen Vehicle Management Office. Responsible for content planning, important document editing, event planning, meeting organization, and feature interviews. Liaised with external media for interviews, video production, and publicity project applications.'
      },
      {
        id: '2',
        period: 'Jul 23, 2018 - Mar 31, 2021',
        title: 'New Media Editor-in-Chief',
        institution: 'Shenzhen Public Security Bureau Traffic Police Bureau',
        description: 'Fully responsible for content editing, special planning, fan interaction and data analysis for WeChat, Douyin, Weibo, and portal platforms. Independently completed various publicity materials such as posters and billboards.'
      }
    ],
    workHighlights: [
      'Took over "Shenzhen Vehicle Management" WeChat official account, gaining over 1.2 million followers. Consistently ranked in top 10 of Shenzhen political-legal system WeChat influence annual rankings, multiple times in top 5.',
      'Planned "Civilized Traffic into Driving Schools" live stream with over 100,000 viewers; planned "Shenzhen Vehicle Management Navigation" column with over 10 million cumulative views.',
      'Built vehicle management Douyin account with 140,000+ net new followers and nearly 1 million total likes. Multiple videos with 1M+ views, highest single video exceeding 12 million views.',
      'Participated in Guangdong Provincial Public Security Traffic Management Bureau Data Modeling Competition, responsible for PPT and demo video production. Project won second prize at provincial and municipal levels.',
      'Proficient in ComfyUI and other AI tools. Original IP "Little Fairy" emoji set won "Annual Excellent Emoji Artist" from WeChat Emoji Open Platform.'
    ],
    personalHonors: [
      { title: '"Traffic Publicity Model" - Shenzhen Traffic Police Bureau', year: '2018, 2019' },
      { title: '"Outstanding Employee" - Shenzhen Traffic Police Bureau', year: '2020, 2021' },
      { title: '"Excellent Short Video" - National Traffic Safety New Media Training (Guangdong)', year: '2020' }
    ],
    educationList: [
      { id: '1', period: '2010.09 - 2013.06', degree: 'High School', institution: 'Zhenping County First Senior High School', major: 'N/A' },
      { id: '2', period: '2013.09 - 2017.06', degree: "Bachelor's Degree", institution: 'Fujian Agriculture and Forestry University', major: 'Tourism Management' },
      { id: '3', period: '2024.09 - 2025.09', degree: "Master's Degree", institution: 'Hong Kong Metropolitan University', major: 'Chinese Language and Literature' }
    ],
    skills: [
      {
        id: '1',
        category: 'New Media Operations & Content Planning',
        items: [
          'Expert in platform operations with full-process capabilities in matrix building, topic planning, and strategy development.',
          'Experienced in managing million-follower accounts, skilled in follower growth operations and data analysis.',
          'Independent completion of short videos, columns, and event planning to create high-impact benchmark content.'
        ]
      },
      {
        id: '2',
        category: 'Graphic Editing & Media Relations',
        items: [
          'Strong writing skills, able to independently write annual reports, press releases, interview drafts and various official documents.',
          'Proficient in Xiumi, PS, AI and other tools for special graphics, posters and material design.',
          'Long-term liaison with Shenzhen Media, Crystal Report and other mainstream media with full-process collaboration capabilities.'
        ]
      },
      {
        id: '3',
        category: 'AI Technology & Digital Creation',
        items: [
          'Mastered ComfyUI and similar node-based workflows for AI visual creation including image generation, IP projects, and VI projects. Original IP works certified by official platform.',
          'Skilled in using multi-platform AI models for topic brainstorming, copywriting, translation, and content optimization.',
          'Proficient in CapCut, PR and other video tools, combined with AI technology for complete video production workflow.'
        ]
      }
    ]
  }
};

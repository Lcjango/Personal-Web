import { Language } from '../../types';

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  px500: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: "BASE",
    locationValue: "广东，深圳",
    contactLabel: "取得联系",
    emailMeLabel: "邮箱",
    email: "lun3cy@example.com",
    hello: "你好 ;-)",
    intro: "欢迎探讨摄影、设计、开发，或者任何有趣的话题。",
    socials: {
      wechat: "LuN3cy的实验房",
      xiaohongshu: "LuN3cy",
      bilibili: "LuN3cy",
      px500: "LuN3cy"
    },
    tooltip: "还是想念武汉，但感觉之后可能也留在广深",
    githubLabel: "GitHub",
    footerDesign: "Designed & Built by LuN3cy、lcjango"
  },
  en: {
    baseLabel: "BASE",
    locationValue: "Shenzhen, Guangdong",
    contactLabel: "Get in Touch",
    emailMeLabel: "Email",
    email: "lun3cy@example.com",
    hello: "Hello ;-)",
    intro: "Open to discussions about photography, design, development, or anything interesting.",
    socials: {
      wechat: "LuN3cy Lab",
      xiaohongshu: "LuN3cy",
      bilibili: "LuN3cy",
      px500: "LuN3cy"
    },
    tooltip: "Still miss Wuhan, but likely to stay in Guangzhou-Shenzhen",
    githubLabel: "GitHub",
    footerDesign: "Designed & Built by LuN3cy、lcjango"
  }
};

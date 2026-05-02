import type { LocalizedText } from "@/lib/i18n";

export interface SpeakingResource {
  id: string;
  title: string;
  provider: string;
  sourceType: "Official" | "Lesson" | "Practice";
  level: string;
  description: LocalizedText;
  howToUse: LocalizedText;
  url: string;
  isFree: true;
  languageSupport: LocalizedText;
}

export const speakingResources: SpeakingResource[] = [
  {
    id: "british-council-speaking-practice",
    title: "British Council IELTS Speaking Practice",
    provider: "British Council",
    sourceType: "Official",
    level: "Part 1 / Part 2 / Part 3",
    description: {
      en: "Official free IELTS Speaking practice materials and test-style guidance.",
      zh: "British Council 官方免费雅思口语练习材料和考试形式指导。",
      yue: "British Council 官方免費雅思口語練習材料同考試形式指引。",
    },
    howToUse: {
      en: "Use it to understand the test format before practising with the topic bank.",
      zh: "先用它理解考试形式，再使用题库练习。",
      yue: "先用佢理解考試形式，再使用題庫練習。",
    },
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/speaking",
    isFree: true,
    languageSupport: {
      en: "English official practice",
      zh: "英文官方练习",
      yue: "英文官方練習",
    },
  },
  {
    id: "idp-speaking-preparation",
    title: "IDP IELTS Speaking Preparation",
    provider: "IDP IELTS",
    sourceType: "Official",
    level: "Part 1 / Part 2 / Part 3",
    description: {
      en: "Official IDP preparation guidance for speaking test format, expectations, and practice.",
      zh: "IDP 官方口语备考指导，覆盖考试形式、要求和练习方法。",
      yue: "IDP 官方口語備考指引，涵蓋考試形式、要求同練習方法。",
    },
    howToUse: {
      en: "Review the format, then practise one part at a time with a timer.",
      zh: "先复习考试形式，再配合计时逐部分练习。",
      yue: "先重溫考試形式，再配合計時逐部分練習。",
    },
    url: "https://ielts.idp.com/prepare/all-test-types/speaking",
    isFree: true,
    languageSupport: {
      en: "English guidance",
      zh: "英文指导",
      yue: "英文指引",
    },
  },
  {
    id: "ielts-official-preparation-speaking",
    title: "IELTS.org Official Preparation Resources",
    provider: "IELTS.org",
    sourceType: "Official",
    level: "All speaking levels",
    description: {
      en: "Official IELTS preparation hub with trusted links and free materials.",
      zh: "IELTS 官方备考资源中心，提供可信链接和免费材料。",
      yue: "IELTS 官方備考資源中心，提供可信連結同免費材料。",
    },
    howToUse: {
      en: "Use it as a reliable overview before choosing speaking drills.",
      zh: "作为可靠总览，再选择具体口语练习。",
      yue: "作為可靠總覽，再選擇具體口語練習。",
    },
    url: "https://ielts.org/take-a-test/preparation-resources",
    isFree: true,
    languageSupport: {
      en: "English preparation links",
      zh: "英文备考链接",
      yue: "英文備考連結",
    },
  },
  {
    id: "ielts-liz-speaking",
    title: "IELTS Liz Speaking Lessons and Tips",
    provider: "IELTS Liz",
    sourceType: "Lesson",
    level: "Part 1 / Part 2 / Part 3",
    description: {
      en: "Free speaking lessons, topic examples, and essential test tips.",
      zh: "免费口语课程、话题示例和核心考试技巧。",
      yue: "免費口語課程、話題例子同核心考試技巧。",
    },
    howToUse: {
      en: "Use one lesson to improve answer structure before repeating a topic.",
      zh: "用一节课程改进回答结构，然后重复练习同一话题。",
      yue: "用一節課程改善回答結構，然後重複練習同一話題。",
    },
    url: "https://ieltsliz.com/ielts-speaking-free-lessons-essential-tips/",
    isFree: true,
    languageSupport: {
      en: "English lessons and examples",
      zh: "英文课程和示例",
      yue: "英文課程同例子",
    },
  },
  {
    id: "keith-speaking-academy",
    title: "Keith Speaking Academy",
    provider: "Keith Speaking Academy",
    sourceType: "Practice",
    level: "Fluency and confidence",
    description: {
      en: "Free speaking lessons, topic ideas, and fluency practice for IELTS-style answers.",
      zh: "免费口语课程、话题观点和流利度练习，适合雅思回答训练。",
      yue: "免費口語課程、話題觀點同流利度練習，適合雅思回答訓練。",
    },
    howToUse: {
      en: "Practise phrases aloud, then use them in your own Part 2 or Part 3 answer.",
      zh: "先大声练习表达，再用到自己的 Part 2 或 Part 3 回答中。",
      yue: "先大聲練習表達，再用到自己嘅 Part 2 或 Part 3 回答入面。",
    },
    url: "https://keithspeakingacademy.com/",
    isFree: true,
    languageSupport: {
      en: "English lessons and videos",
      zh: "英文课程和视频",
      yue: "英文課程同影片",
    },
  },
];

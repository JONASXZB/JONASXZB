import type { LocalizedText } from "@/lib/i18n";

export interface WritingResource {
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

export const writingResources: WritingResource[] = [
  {
    id: "british-council-writing-practice",
    title: "British Council IELTS Writing Practice",
    provider: "British Council",
    sourceType: "Official",
    level: "Task 1 / Task 2",
    description: {
      en: "Official free IELTS Writing practice for test-style Task 1 and Task 2 questions.",
      zh: "British Council 官方免费雅思写作练习，覆盖考试形式 Task 1 与 Task 2。",
      yue: "British Council 官方免費雅思寫作練習，涵蓋考試形式 Task 1 同 Task 2。",
    },
    howToUse: {
      en: "Use it for timed writing practice after reviewing the checklist.",
      zh: "复习检查清单后，用它进行限时写作练习。",
      yue: "重溫檢查清單後，用佢進行限時寫作練習。",
    },
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing",
    isFree: true,
    languageSupport: {
      en: "English questions and official practice",
      zh: "英文题目和官方练习",
      yue: "英文題目同官方練習",
    },
  },
  {
    id: "idp-writing-preparation",
    title: "IDP IELTS Writing Preparation",
    provider: "IDP IELTS",
    sourceType: "Official",
    level: "Task 1 / Task 2",
    description: {
      en: "Official IDP writing preparation guidance for task format, expectations, and skills.",
      zh: "IDP 官方写作备考指导，涵盖题型、要求和写作技能。",
      yue: "IDP 官方寫作備考指引，涵蓋題型、要求同寫作技能。",
    },
    howToUse: {
      en: "Review the task expectations before choosing a prompt from the bank.",
      zh: "选择题库题目前，先复习任务要求。",
      yue: "選擇題庫題目前，先重溫任務要求。",
    },
    url: "https://ielts.idp.com/prepare/all-test-types/writing",
    isFree: true,
    languageSupport: {
      en: "English guidance",
      zh: "英文指导",
      yue: "英文指引",
    },
  },
  {
    id: "ielts-official-preparation-writing",
    title: "IELTS.org Official Preparation Resources",
    provider: "IELTS.org",
    sourceType: "Official",
    level: "All writing levels",
    description: {
      en: "Official IELTS preparation hub with free materials and module guidance.",
      zh: "IELTS 官方备考资源中心，提供免费材料和模块指导。",
      yue: "IELTS 官方備考資源中心，提供免費材料同模組指引。",
    },
    howToUse: {
      en: "Use it as a trusted overview before practising specific writing tasks.",
      zh: "作为可信总览，再进入具体写作任务练习。",
      yue: "作為可信總覽，再進入具體寫作任務練習。",
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
    id: "ielts-liz-task-1",
    title: "IELTS Liz Writing Task 1 Lessons",
    provider: "IELTS Liz",
    sourceType: "Lesson",
    level: "Task 1",
    description: {
      en: "Free lessons and tips for describing charts, maps, processes, and formal letters.",
      zh: "免费课程和技巧，适合练习图表、地图、流程和正式信件写作。",
      yue: "免費課程同技巧，適合練習圖表、地圖、流程同正式信件寫作。",
    },
    howToUse: {
      en: "Study one structure, then write a short answer using the prompt bank.",
      zh: "学习一个结构后，用题库写一篇短文。",
      yue: "學一個結構後，用題庫寫一篇短文。",
    },
    url: "https://ieltsliz.com/ielts-writing-task-1-lessons-and-tips/",
    isFree: true,
    languageSupport: {
      en: "English lessons and examples",
      zh: "英文课程和示例",
      yue: "英文課程同例子",
    },
  },
  {
    id: "ielts-liz-task-2",
    title: "IELTS Liz Writing Task 2 Lessons",
    provider: "IELTS Liz",
    sourceType: "Lesson",
    level: "Task 2",
    description: {
      en: "Free Task 2 lessons for essay structure, question types, ideas, and vocabulary.",
      zh: "免费 Task 2 课程，覆盖文章结构、题型、观点和词汇。",
      yue: "免費 Task 2 課程，涵蓋文章結構、題型、觀點同詞彙。",
    },
    howToUse: {
      en: "Match the lesson question type with a prompt, then plan before writing.",
      zh: "把课程题型与题库题目对应，先规划再写作。",
      yue: "將課程題型同題庫題目對應，先規劃再寫作。",
    },
    url: "https://ieltsliz.com/ielts-writing-task-2/",
    isFree: true,
    languageSupport: {
      en: "English lessons and model ideas",
      zh: "英文课程和参考观点",
      yue: "英文課程同參考觀點",
    },
  },
  {
    id: "ielts-buddy-writing",
    title: "IELTS Buddy Writing Resources",
    provider: "IELTS Buddy",
    sourceType: "Practice",
    level: "Task 1 / Task 2",
    description: {
      en: "Free writing lessons, examples, vocabulary support, and practice guidance.",
      zh: "免费写作课程、示例、词汇支持和练习指导。",
      yue: "免費寫作課程、例子、詞彙支援同練習指引。",
    },
    howToUse: {
      en: "Use it to review examples after drafting your own response.",
      zh: "先完成自己的草稿，再用它对照示例复盘。",
      yue: "先完成自己嘅草稿，再用佢對照例子重溫。",
    },
    url: "https://www.ieltsbuddy.com/ielts-writing.html",
    isFree: true,
    languageSupport: {
      en: "English lessons and examples",
      zh: "英文课程和示例",
      yue: "英文課程同例子",
    },
  },
];

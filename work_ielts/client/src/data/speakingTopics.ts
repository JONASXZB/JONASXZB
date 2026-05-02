import type { LocalizedText } from "@/lib/i18n";

export type SpeakingPart = "Part 1" | "Part 2" | "Part 3";

export interface SpeakingTopic {
  id: string;
  part: SpeakingPart;
  topic: string;
  level: string;
  prompt: string;
  bulletPoints: LocalizedText[];
  usefulPhrases: string[];
  sampleStructure: LocalizedText;
  followUpQuestions: string[];
  relatedReadingTopic: string;
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: "part1-work-study",
    part: "Part 1",
    topic: "Work or Study",
    level: "Beginner",
    prompt: "Do you work or are you a student?",
    bulletPoints: [
      {
        en: "Give a direct answer first.",
        zh: "先直接回答问题。",
        yue: "先直接回答問題。",
      },
      {
        en: "Add one detail about your daily routine.",
        zh: "补充一个关于日常安排的细节。",
        yue: "補充一個關於日常安排嘅細節。",
      },
      {
        en: "Explain what you enjoy or find challenging.",
        zh: "说明你喜欢什么，或觉得什么有挑战。",
        yue: "說明你鍾意咩，或者覺得咩有挑戰。",
      },
    ],
    usefulPhrases: ["At the moment...", "What I enjoy most is...", "It can be challenging because..."],
    sampleStructure: {
      en: "Answer directly, add a specific detail, then explain your feeling or reason.",
      zh: "直接回答，加入具体细节，然后解释感受或原因。",
      yue: "直接回答，加入具體細節，然後解釋感受或者原因。",
    },
    followUpQuestions: [
      "What subject or part of your work do you enjoy most?",
      "Do you prefer working alone or with other people?",
    ],
    relatedReadingTopic: "Weekly Global Reading: education and work",
  },
  {
    id: "part1-city",
    part: "Part 1",
    topic: "Your City",
    level: "Beginner",
    prompt: "What do you like about the city or town where you live?",
    bulletPoints: [
      {
        en: "Mention one feature of your city.",
        zh: "提到城市的一个特点。",
        yue: "提到城市嘅一個特點。",
      },
      {
        en: "Use an example from your daily life.",
        zh: "用一个日常生活中的例子。",
        yue: "用一個日常生活入面嘅例子。",
      },
      {
        en: "Add a short comparison if possible.",
        zh: "如果可以，加入简短比较。",
        yue: "如果可以，加入簡短比較。",
      },
    ],
    usefulPhrases: ["One thing I appreciate is...", "Compared with other places...", "It makes daily life easier because..."],
    sampleStructure: {
      en: "Describe the place, give a daily example, and connect it to quality of life.",
      zh: "描述地点，给出日常例子，并连接到生活质量。",
      yue: "描述地方，畀出日常例子，並連接到生活質素。",
    },
    followUpQuestions: [
      "Has your city changed much in recent years?",
      "Would you like to live there in the future?",
    ],
    relatedReadingTopic: "Weekly Global Reading: public spaces and cities",
  },
  {
    id: "part2-useful-website",
    part: "Part 2",
    topic: "A Useful Website",
    level: "Intermediate",
    prompt: "Describe a website that you often use for learning.",
    bulletPoints: [
      {
        en: "What the website is",
        zh: "这个网站是什么",
        yue: "呢個網站係咩",
      },
      {
        en: "How often you use it",
        zh: "你多久使用一次",
        yue: "你幾耐用一次",
      },
      {
        en: "What you learn from it",
        zh: "你从中学到什么",
        yue: "你由入面學到咩",
      },
      {
        en: "Why it is useful",
        zh: "为什么它有用",
        yue: "點解佢有用",
      },
    ],
    usefulPhrases: ["The website I’d like to talk about is...", "It is particularly useful for...", "A good example is..."],
    sampleStructure: {
      en: "Introduce the site, explain your routine, give one learning example, then evaluate its usefulness.",
      zh: "介绍网站，说明使用习惯，给出一个学习例子，然后评价它的价值。",
      yue: "介紹網站，說明使用習慣，畀出一個學習例子，然後評價佢嘅價值。",
    },
    followUpQuestions: [
      "Do people rely too much on online learning resources?",
      "How can websites make learning more effective?",
    ],
    relatedReadingTopic: "Reading resources: public research and news",
  },
  {
    id: "part2-environmental-problem",
    part: "Part 2",
    topic: "An Environmental Problem",
    level: "Intermediate",
    prompt: "Describe an environmental problem that affects people in your area.",
    bulletPoints: [
      {
        en: "What the problem is",
        zh: "这个问题是什么",
        yue: "呢個問題係咩",
      },
      {
        en: "Who is affected",
        zh: "谁受到影响",
        yue: "邊啲人受到影響",
      },
      {
        en: "What causes it",
        zh: "它的原因是什么",
        yue: "佢嘅原因係咩",
      },
      {
        en: "What could be done",
        zh: "可以采取什么措施",
        yue: "可以採取咩措施",
      },
    ],
    usefulPhrases: ["This issue has become more noticeable...", "One major cause is...", "A practical solution would be..."],
    sampleStructure: {
      en: "Define the problem, explain causes and effects, then suggest one realistic solution.",
      zh: "定义问题，解释原因和影响，然后提出一个现实解决办法。",
      yue: "定義問題，解釋原因同影響，然後提出一個現實解決辦法。",
    },
    followUpQuestions: [
      "Should individuals or governments take more responsibility for environmental problems?",
      "How can schools teach young people about climate issues?",
    ],
    relatedReadingTopic: "Weekly Global Reading: climate finance and water security",
  },
  {
    id: "part3-technology-education",
    part: "Part 3",
    topic: "Technology and Education",
    level: "Advanced",
    prompt: "How has technology changed the way people learn?",
    bulletPoints: [
      {
        en: "Compare traditional and digital learning.",
        zh: "比较传统学习和数字学习。",
        yue: "比較傳統學習同數碼學習。",
      },
      {
        en: "Discuss both access and overdependence.",
        zh: "讨论学习机会和过度依赖两个方面。",
        yue: "討論學習機會同過度依賴兩方面。",
      },
      {
        en: "Use one concrete example.",
        zh: "使用一个具体例子。",
        yue: "使用一個具體例子。",
      },
    ],
    usefulPhrases: ["On a broader level...", "This has made education more accessible...", "However, there is a risk that..."],
    sampleStructure: {
      en: "Give a broad trend, explain benefits, balance with a risk, and finish with a clear judgement.",
      zh: "先说总体趋势，再解释好处，平衡风险，最后给出判断。",
      yue: "先講整體趨勢，再解釋好處，平衡風險，最後畀出判斷。",
    },
    followUpQuestions: [
      "Will teachers become less important in the future?",
      "What skills do students need in a digital learning environment?",
    ],
    relatedReadingTopic: "Weekly Global Reading: AI in education",
  },
  {
    id: "part3-global-news",
    part: "Part 3",
    topic: "News and Global Awareness",
    level: "Advanced",
    prompt: "Why is it important for people to understand global news?",
    bulletPoints: [
      {
        en: "Explain how news affects decisions.",
        zh: "解释新闻如何影响决策。",
        yue: "解釋新聞點樣影響決策。",
      },
      {
        en: "Mention misinformation or source quality.",
        zh: "提到错误信息或来源质量。",
        yue: "提到錯誤資訊或者來源質素。",
      },
      {
        en: "Connect it to education or citizenship.",
        zh: "把它连接到教育或公民意识。",
        yue: "將佢連接到教育或者公民意識。",
      },
    ],
    usefulPhrases: ["Being informed allows people to...", "The quality of sources matters because...", "From an educational perspective..."],
    sampleStructure: {
      en: "State the importance, explain source quality, then link global awareness to better decisions.",
      zh: "说明重要性，解释来源质量，再把全球意识连接到更好的决策。",
      yue: "說明重要性，解釋來源質素，再將全球意識連接到更好嘅決策。",
    },
    followUpQuestions: [
      "Should schools teach students how to read news critically?",
      "Do social media platforms make people better informed?",
    ],
    relatedReadingTopic: "Weekly Global Reading and Reading resources",
  },
];

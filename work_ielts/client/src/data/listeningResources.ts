import type { LocalizedText } from "@/lib/i18n";

export interface ListeningResource {
  id: string;
  title: string;
  provider: string;
  sourceType: "Official" | "YouTube" | "Playlist";
  level: string;
  duration: string;
  description: LocalizedText;
  skills: string[];
  url: string;
  isFree: true;
  languageSupport: LocalizedText;
}

export const listeningResources: ListeningResource[] = [
  {
    id: "british-council-listening-tests",
    title: "British Council Free IELTS Listening Practice Tests",
    provider: "British Council",
    sourceType: "Official",
    level: "IELTS Listening",
    duration: "Timed practice",
    description: {
      en: "Official free IELTS Listening practice with test-style questions and answer checking.",
      zh: "British Council 官方免费雅思听力练习，包含考试形式题目和答案核对。",
      yue: "British Council 官方免費雅思聽力練習，包含考試形式題目同答案核對。",
    },
    skills: ["IELTS Listening", "Official", "Free"],
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening",
    isFree: true,
    languageSupport: {
      en: "English test audio and questions",
      zh: "英文考试音频和题目",
      yue: "英文考試音頻同題目",
    },
  },
  {
    id: "british-council-listening-part-1",
    title: "British Council IELTS Listening Practice Test Part 1",
    provider: "British Council",
    sourceType: "Official",
    level: "IELTS Listening",
    duration: "Part 1 practice",
    description: {
      en: "A focused official Part 1 listening task for everyday conversation and detail recognition.",
      zh: "官方 Part 1 听力任务，适合练习日常对话和细节识别。",
      yue: "官方 Part 1 聽力任務，適合練習日常對話同細節識別。",
    },
    skills: ["IELTS Listening", "Official", "Free"],
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening/section-1",
    isFree: true,
    languageSupport: {
      en: "English audio with test questions",
      zh: "英文音频与考试题目",
      yue: "英文音頻同考試題目",
    },
  },
  {
    id: "idp-listening-prep-videos",
    title: "IDP IELTS Listening Preparation Materials",
    provider: "IDP IELTS",
    sourceType: "Official",
    level: "IELTS Listening",
    duration: "Video lessons",
    description: {
      en: "Official IDP listening preparation videos for understanding task types and test expectations.",
      zh: "IDP 官方听力备考视频，帮助理解题型和考试要求。",
      yue: "IDP 官方聽力備考影片，幫助理解題型同考試要求。",
    },
    skills: ["IELTS Listening", "Official", "Free"],
    url: "https://ielts.idp.com/prepare/all-test-types/listening/video",
    isFree: true,
    languageSupport: {
      en: "English guidance and IELTS examples",
      zh: "英文讲解与雅思示例",
      yue: "英文講解同雅思例子",
    },
  },
  {
    id: "ielts-by-idp-youtube",
    title: "IELTS by IDP YouTube Channel",
    provider: "IDP IELTS",
    sourceType: "YouTube",
    level: "IELTS Listening",
    duration: "Channel",
    description: {
      en: "Official IDP IELTS videos for test preparation, listening advice, and broader IELTS study support.",
      zh: "IDP IELTS 官方 YouTube 内容，覆盖备考建议、听力技巧和雅思学习支持。",
      yue: "IDP IELTS 官方 YouTube 內容，涵蓋備考建議、聽力技巧同雅思學習支援。",
    },
    skills: ["IELTS Listening", "YouTube", "Free"],
    url: "https://www.youtube.com/c/ieltsbyidp",
    isFree: true,
    languageSupport: {
      en: "English videos with YouTube captions when available",
      zh: "英文视频，部分内容可使用 YouTube 字幕",
      yue: "英文影片，部分內容可使用 YouTube 字幕",
    },
  },
  {
    id: "bbc-learning-english-youtube",
    title: "BBC Learning English YouTube Channel",
    provider: "BBC Learning English",
    sourceType: "YouTube",
    level: "Daily Listening",
    duration: "Channel",
    description: {
      en: "Trusted English-learning videos for pronunciation, vocabulary, listening habits, and everyday comprehension.",
      zh: "可信的英语学习视频，适合训练发音、词汇、听力习惯和日常理解。",
      yue: "可信嘅英語學習影片，適合訓練發音、詞彙、聽力習慣同日常理解。",
    },
    skills: ["Daily Listening", "YouTube", "Free"],
    url: "https://www.youtube.com/user/bbclearningenglish",
    isFree: true,
    languageSupport: {
      en: "English learning videos with captions on many uploads",
      zh: "英语学习视频，许多内容带字幕",
      yue: "英語學習影片，好多內容有字幕",
    },
  },
  {
    id: "bbc-six-minute-english",
    title: "BBC Learning English - 6 Minute English Playlist",
    provider: "BBC Learning English",
    sourceType: "Playlist",
    level: "Daily Listening",
    duration: "6-minute episodes",
    description: {
      en: "Short topic-based listening episodes that build vocabulary, main-idea listening, and discussion ideas.",
      zh: "短篇主题听力节目，适合积累词汇、训练主旨理解并准备讨论观点。",
      yue: "短篇主題聽力節目，適合累積詞彙、訓練主旨理解同準備討論觀點。",
    },
    skills: ["Daily Listening", "Playlist", "Free"],
    url: "https://www.youtube.com/playlist?list=PLcetZ6gSk96-FECmH9l7Vlx5VDigvgZpt",
    isFree: true,
    languageSupport: {
      en: "English audio with learning-focused explanations",
      zh: "英文音频与学习型讲解",
      yue: "英文音頻同學習型講解",
    },
  },
];

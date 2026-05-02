export type Locale = "en" | "zh" | "yue";
export type LocalizedText = Record<Locale, string>;

export const languageLabels: LocalizedText = {
  en: "EN",
  zh: "中文",
  yue: "粵語",
};

export const navLabels: Record<Locale, {
  home: string;
  skills: string;
  reading: string;
  resources: string;
  getStarted: string;
}> = {
  en: {
    home: "Home",
    skills: "IELTS Skills",
    reading: "Weekly Global Reading",
    resources: "Resources",
    getStarted: "Get Started",
  },
  zh: {
    home: "首页",
    skills: "雅思技能",
    reading: "每周全球精读",
    resources: "资源",
    getStarted: "开始学习",
  },
  yue: {
    home: "首頁",
    skills: "雅思技能",
    reading: "每週全球精讀",
    resources: "資源",
    getStarted: "開始學習",
  },
};

export const homeLabels: Record<Locale, {
  back: string;
  explore: string;
  exploreSkills: string;
  ieltsSkills: string;
  listening: string;
  reading: string;
  writing: string;
  speaking: string;
  listeningDesc: string;
  readingDesc: string;
  writingDesc: string;
  speakingDesc: string;
  startPracticing: string;
  readingPathTitle: string;
  readingPathBody: string;
  readingPathPoints: string[];
  openReading: string;
  readingCta: string;
  readingTitle: string;
  readingSubtitle: string;
  viewReading: string;
  heroSubtitle: string;
  skillsSubtitle: string;
  resourcesTitle: string;
  resourcesSubtitle: string;
  thinkTanks: string;
  thinkTanksDesc: string;
  learning: string;
  academic: string;
  exploreResources: string;
  exploreGlobalResources: string;
  free: string;
  premium: string;
}> = {
  en: {
    back: "Back",
    explore: "Start Practicing",
    exploreSkills: "Explore Skills",
    ieltsSkills: "IELTS Skills",
    listening: "Listening",
    reading: "Reading",
    writing: "Writing",
    speaking: "Speaking",
    listeningDesc: "Master audio comprehension with expert strategies",
    readingDesc: "Read high-quality global articles, build vocabulary, and practise IELTS-style thinking",
    writingDesc: "Master Task 1 and Task 2 with samples, planning, and feedback",
    speakingDesc: "Build confidence with topic practice and sample answers",
    startPracticing: "Start Practicing",
    readingPathTitle: "IELTS Reading Practice Flow",
    readingPathBody:
      "Use Weekly Global Reading to turn public articles and research into vocabulary notes, discussion ideas, and writing arguments.",
    readingPathPoints: [
      "Read high-quality English articles",
      "Learn topic vocabulary in context",
      "Practise IELTS-style critical thinking",
      "Prepare speaking and writing ideas",
    ],
    openReading: "Open Weekly Global Reading",
    readingCta: "Weekly Global Reading",
    readingTitle: "Weekly Global Reading",
    readingSubtitle: "Structured global reading lessons for IELTS vocabulary, discussion, and writing practice.",
    viewReading: "View All",
    heroSubtitle:
      "High-quality IELTS practice, expert strategies, and weekly global reading to help you achieve your target band score.",
    skillsSubtitle: "Comprehensive practice and resources for all four IELTS modules.",
    resourcesTitle: "Resources",
    resourcesSubtitle: "IELTS vocabulary, grammar, think tanks, newspapers, and global media for deeper reading practice.",
    thinkTanks: "Think Tanks, Newspapers & Media",
    thinkTanksDesc: "High-quality English reading from global policy institutes, newspapers & media outlets.",
    learning: "IELTS Learning Websites",
    academic: "Global Think Tanks, Newspapers & Media",
    exploreResources: "Explore Resources",
    exploreGlobalResources: "Explore Global Resources",
    free: "Free",
    premium: "Premium",
  },
  zh: {
    back: "返回",
    explore: "开始练习",
    exploreSkills: "探索技能",
    ieltsSkills: "雅思技能",
    listening: "听力",
    reading: "阅读",
    writing: "写作",
    speaking: "口语",
    listeningDesc: "用专家策略提升音频理解能力",
    readingDesc: "阅读高质量全球文章，积累词汇，并训练雅思式思考",
    writingDesc: "通过范文、规划和反馈训练 Task 1 与 Task 2",
    speakingDesc: "通过话题练习和参考答案建立表达信心",
    startPracticing: "开始练习",
    readingPathTitle: "雅思阅读训练流程",
    readingPathBody: "用每周全球精读把公开文章和研究资料转化为词汇笔记、讨论观点和写作论据。",
    readingPathPoints: [
      "阅读高质量英文文章",
      "在语境中学习主题词汇",
      "训练雅思式批判思维",
      "积累口语和写作观点",
    ],
    openReading: "打开每周全球精读",
    readingCta: "每周全球精读",
    readingTitle: "每周全球精读",
    readingSubtitle: "面向雅思词汇、讨论和写作练习的结构化全球阅读课程。",
    viewReading: "查看全部",
    heroSubtitle: "高质量雅思练习、专家策略和每周全球阅读，帮助您达到目标分数。",
    skillsSubtitle: "覆盖雅思四个模块的综合练习和学习资源。",
    resourcesTitle: "学习资源",
    resourcesSubtitle: "雅思词汇、语法、智库、报纸和全球媒体，帮助您进行深入英文阅读。",
    thinkTanks: "智库、报纸与媒体",
    thinkTanksDesc: "来自全球政策研究机构、报纸和媒体的高质量英文阅读。",
    learning: "雅思学习网站",
    academic: "全球智库、报纸与媒体",
    exploreResources: "探索资源",
    exploreGlobalResources: "探索全球资源",
    free: "免费",
    premium: "付费",
  },
  yue: {
    back: "返回",
    explore: "開始練習",
    exploreSkills: "探索技能",
    ieltsSkills: "雅思技能",
    listening: "聽力",
    reading: "閱讀",
    writing: "寫作",
    speaking: "口語",
    listeningDesc: "用專家策略提升音頻理解能力",
    readingDesc: "閱讀高質量全球文章，累積詞彙，並訓練雅思式思考",
    writingDesc: "透過範文、規劃同回饋訓練 Task 1 同 Task 2",
    speakingDesc: "透過話題練習同參考答案建立表達信心",
    startPracticing: "開始練習",
    readingPathTitle: "雅思閱讀訓練流程",
    readingPathBody: "用每週全球精讀將公開文章同研究資料變成詞彙筆記、討論觀點同寫作論據。",
    readingPathPoints: [
      "閱讀高質量英文文章",
      "喺語境入面學主題詞彙",
      "訓練雅思式批判思維",
      "累積口語同寫作觀點",
    ],
    openReading: "打開每週全球精讀",
    readingCta: "每週全球精讀",
    readingTitle: "每週全球精讀",
    readingSubtitle: "面向雅思詞彙、討論同寫作練習嘅結構化全球閱讀課程。",
    viewReading: "查看全部",
    heroSubtitle: "高質量雅思練習、專家策略同每週全球閱讀，幫助您達到目標分數。",
    skillsSubtitle: "覆蓋雅思四個模組嘅綜合練習同學習資源。",
    resourcesTitle: "學習資源",
    resourcesSubtitle: "雅思詞彙、語法、智庫、報紙同全球媒體，幫助您深入英文閱讀。",
    thinkTanks: "智庫、報紙與媒體",
    thinkTanksDesc: "來自全球政策研究機構、報紙同媒體嘅高質量英文閱讀。",
    learning: "雅思學習網站",
    academic: "全球智庫、報紙與媒體",
    exploreResources: "探索資源",
    exploreGlobalResources: "探索全球資源",
    free: "免費",
    premium: "付費",
  },
};

export const weeklyReadingLabels: Record<Locale, {
  title: string;
  subtitle: string;
  learningFocus: string;
  learningFocusBody: string;
  archive: string;
  category: string;
  region: string;
  readingList: string;
  lessons: string;
  noLessons: string;
  summary: string;
  whyItMatters: string;
  usefulExpression: string;
  keyVocabulary: string;
  discussionQuestion: string;
  writingPrompt: string;
  readOriginalArticle: string;
  source: string;
  level: string;
  sourceType: string;
  free: string;
}> = {
  en: {
    title: "Weekly Global Reading",
    subtitle: "Short global reading lessons with vocabulary, discussion, and IELTS-style writing practice.",
    learningFocus: "Learning focus:",
    learningFocusBody:
      "Read original summaries of free public sources, then practise useful expressions, speaking ideas, and writing prompts. Source links go to specific articles or research pages.",
    archive: "Archive",
    category: "Category",
    region: "Region",
    readingList: "Reading List",
    lessons: "lessons",
    noLessons: "No reading lessons match your filters.",
    summary: "Summary",
    whyItMatters: "Why It Matters",
    usefulExpression: "Useful Expression",
    keyVocabulary: "Key Vocabulary",
    discussionQuestion: "Discussion Question",
    writingPrompt: "Writing Prompt",
    readOriginalArticle: "Read original article",
    source: "Source",
    level: "Level",
    sourceType: "Source Type",
    free: "Free",
  },
  zh: {
    title: "每周全球精读",
    subtitle: "精选全球议题，配套词汇、讨论问题和雅思写作练习。",
    learningFocus: "学习重点：",
    learningFocusBody:
      "阅读基于免费公开资料的原创短摘要，并练习实用表达、口语观点和写作任务。来源链接均指向具体文章或研究页面。",
    archive: "归档",
    category: "类别",
    region: "地区",
    readingList: "阅读列表",
    lessons: "篇课程",
    noLessons: "没有符合筛选条件的阅读课程。",
    summary: "摘要",
    whyItMatters: "为什么重要",
    usefulExpression: "实用表达",
    keyVocabulary: "核心词汇",
    discussionQuestion: "讨论问题",
    writingPrompt: "写作题目",
    readOriginalArticle: "阅读原文",
    source: "来源",
    level: "难度",
    sourceType: "来源类型",
    free: "免费",
  },
  yue: {
    title: "每週全球精讀",
    subtitle: "精選全球議題，配套詞彙、討論問題同雅思寫作練習。",
    learningFocus: "學習重點：",
    learningFocusBody:
      "閱讀基於免費公開資料嘅原創短摘要，並練習實用表達、口語觀點同寫作任務。來源連結都指向具體文章或者研究頁。",
    archive: "歸檔",
    category: "類別",
    region: "地區",
    readingList: "閱讀列表",
    lessons: "篇課程",
    noLessons: "冇符合篩選條件嘅閱讀課程。",
    summary: "摘要",
    whyItMatters: "點解重要",
    usefulExpression: "實用表達",
    keyVocabulary: "核心詞彙",
    discussionQuestion: "討論問題",
    writingPrompt: "寫作題目",
    readOriginalArticle: "閱讀原文",
    source: "來源",
    level: "難度",
    sourceType: "來源類型",
    free: "免費",
  },
};

export const optionLabels: Record<Locale, Record<string, string>> = {
  en: {},
  zh: {
    All: "全部",
    Global: "全球",
    Americas: "美洲",
    Environment: "环境",
    Technology: "科技",
    Economy: "经济",
    Health: "健康",
    Science: "科学",
    Society: "社会",
    Migration: "移民",
    Beginner: "初级",
    Intermediate: "中级",
    Advanced: "高级",
    News: "新闻",
    "Think Tank": "智库",
    Research: "研究",
    Data: "数据",
    "Public Institution": "公共机构",
  },
  yue: {
    All: "全部",
    Global: "全球",
    Americas: "美洲",
    Environment: "環境",
    Technology: "科技",
    Economy: "經濟",
    Health: "健康",
    Science: "科學",
    Society: "社會",
    Migration: "移民",
    Beginner: "初級",
    Intermediate: "中級",
    Advanced: "高級",
    News: "新聞",
    "Think Tank": "智庫",
    Research: "研究",
    Data: "數據",
    "Public Institution": "公共機構",
  },
};

export function labelFor(value: string, locale: Locale) {
  return optionLabels[locale][value] || value;
}

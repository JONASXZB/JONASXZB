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
  listeningResourcesTitle: string;
  listeningResourcesSubtitle: string;
  howToUseListening: string;
  listeningSteps: string[];
  provider: string;
  sourceType: string;
  level: string;
  duration: string;
  skills: string;
  languageSupport: string;
  openResource: string;
  official: string;
  youtube: string;
  playlist: string;
  ieltsListening: string;
  dailyListening: string;
  accentPracticeTitle: string;
  accentPracticeSubtitle: string;
  accentPracticeRoutine: string;
  accentRoutineSteps: string[];
  accent: string;
  british: string;
  american: string;
  australian: string;
  newZealand: string;
  globalEnglish: string;
  academicEnglish: string;
  podcast: string;
  readingResourcesTitle: string;
  readingResourcesSubtitle: string;
  howToUseReading: string;
  readingSteps: string[];
  topicFocus: string;
  howToUse: string;
  paywallNote: string;
  news: string;
  thinkTank: string;
  research: string;
  data: string;
  publicInstitution: string;
  officialIeltsPractice: string;
  newsCurrentAffairs: string;
  thinkTanksResearch: string;
  dataPublicInstitutions: string;
  ieltsReading: string;
  writingPracticeTitle: string;
  writingPracticeSubtitle: string;
  task1: string;
  task2: string;
  promptBank: string;
  writingPracticeArea: string;
  writingChecklist: string;
  freeWritingResources: string;
  taskType: string;
  prompt: string;
  questionType: string;
  usefulIdeas: string;
  usefulVocabulary: string;
  relatedReadingTopic: string;
  wordCount: string;
  timeGuide: string;
  saveDraft: string;
  clearDraft: string;
  draftSaved: string;
  writeHere: string;
  writingChecklistItems: string[];
  sourceLesson: string;
  practice: string;
  speakingPracticeTitle: string;
  speakingPracticeSubtitle: string;
  part1: string;
  part2: string;
  part3: string;
  cueCard: string;
  topicBank: string;
  discussionQuestions: string;
  timerGuide: string;
  speakingChecklist: string;
  usefulPhrases: string;
  followUpQuestions: string;
  sampleStructure: string;
  preparation: string;
  speakingPractice: string;
  freeSpeakingResources: string;
  practiceRoutine: string;
  speakingRoutineSteps: string[];
  speakingChecklistItems: string[];
  heroVisualAlt: string;
  listeningVisualAlt: string;
  readingVisualAlt: string;
  writingVisualAlt: string;
  speakingVisualAlt: string;
  globalReadingVisualAlt: string;
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
    listeningResourcesTitle: "Featured Free Listening Resources",
    listeningResourcesSubtitle:
      "Official IELTS listening practice and trusted YouTube listening materials for test skills and daily comprehension.",
    howToUseListening: "How to use these resources",
    listeningSteps: [
      "Listen once for main idea",
      "Listen again for details",
      "Write down keywords",
      "Check transcript or answers if available",
      "Review vocabulary",
    ],
    provider: "Provider",
    sourceType: "Source Type",
    level: "Level",
    duration: "Duration",
    skills: "Skills",
    languageSupport: "Language Support",
    openResource: "Open resource",
    official: "Official",
    youtube: "YouTube",
    playlist: "Playlist",
    ieltsListening: "IELTS Listening",
    dailyListening: "Daily Listening",
    accentPracticeTitle: "Accent Practice",
    accentPracticeSubtitle:
      "Train your ear for British, American, Australian, New Zealand, global, and academic English using free trusted sources.",
    accentPracticeRoutine: "Accent practice routine",
    accentRoutineSteps: [
      "Listen once for the main idea",
      "Listen again for details",
      "Shadow one short sentence",
      "Write down 5 keywords",
      "Review accent features",
    ],
    accent: "Accent",
    british: "British",
    american: "American",
    australian: "Australian",
    newZealand: "New Zealand",
    globalEnglish: "Global English",
    academicEnglish: "Academic English",
    podcast: "Podcast",
    readingResourcesTitle: "Featured Free Reading Resources",
    readingResourcesSubtitle:
      "Official IELTS reading practice, trusted news, think tanks, research, and public data for stronger academic reading.",
    howToUseReading: "How to use Reading resources",
    readingSteps: [
      "Skim the article first",
      "Identify the main argument",
      "Highlight academic vocabulary",
      "Summarize in 3 sentences",
      "Turn the topic into a speaking or writing idea",
    ],
    topicFocus: "Topic Focus",
    howToUse: "How to Use",
    paywallNote: "Access Note",
    news: "News",
    thinkTank: "Think Tank",
    research: "Research",
    data: "Data",
    publicInstitution: "Public Institution",
    officialIeltsPractice: "Official IELTS Practice",
    newsCurrentAffairs: "News & Current Affairs",
    thinkTanksResearch: "Think Tanks & Research",
    dataPublicInstitutions: "Data & Public Institutions",
    ieltsReading: "IELTS Reading",
    writingPracticeTitle: "IELTS Writing Practice Flow",
    writingPracticeSubtitle:
      "Build ideas from reading, practise Task 1 and Task 2, and self-check your response before you revise.",
    task1: "Task 1",
    task2: "Task 2",
    promptBank: "Writing Prompt Bank",
    writingPracticeArea: "Writing Practice Area",
    writingChecklist: "Writing Checklist",
    freeWritingResources: "Free Writing Resources",
    taskType: "Task Type",
    prompt: "Prompt",
    questionType: "Question Type",
    usefulIdeas: "Useful Ideas",
    usefulVocabulary: "Useful Vocabulary",
    relatedReadingTopic: "Related Reading Topic",
    wordCount: "Word Count",
    timeGuide: "Time Guide",
    saveDraft: "Save Draft",
    clearDraft: "Clear Draft",
    draftSaved: "Draft saved locally",
    writeHere: "Write your answer here...",
    writingChecklistItems: [
      "Task Response: answer every part of the question directly",
      "Coherence and Cohesion: use clear paragraphs and logical linking",
      "Lexical Resource: use precise topic vocabulary without overcomplicating",
      "Grammar Range and Accuracy: mix sentence structures and check errors",
      "Revision: check examples, explanations, and word count before saving",
    ],
    sourceLesson: "Lesson",
    practice: "Practice",
    speakingPracticeTitle: "IELTS Speaking Practice Flow",
    speakingPracticeSubtitle:
      "Practise Part 1, cue cards, and Part 3 discussion with topic ideas from high-quality reading.",
    part1: "Part 1",
    part2: "Part 2",
    part3: "Part 3",
    cueCard: "Cue Card",
    topicBank: "Topic Bank",
    discussionQuestions: "Discussion Questions",
    timerGuide: "Timer Guide",
    speakingChecklist: "Self-check Checklist",
    usefulPhrases: "Useful Phrases",
    followUpQuestions: "Follow-up Questions",
    sampleStructure: "Sample Structure",
    preparation: "Preparation",
    speakingPractice: "Speaking Practice",
    freeSpeakingResources: "Free Speaking Resources",
    practiceRoutine: "Practice Routine",
    speakingRoutineSteps: [
      "Choose one question",
      "Prepare for 30-60 seconds",
      "Speak out loud",
      "Check fluency, vocabulary, grammar, and examples",
      "Repeat once with a better structure",
    ],
    speakingChecklistItems: [
      "Fluency: keep speaking without long silent pauses",
      "Vocabulary: use topic words naturally",
      "Grammar: include simple and complex sentences",
      "Examples: support opinions with personal or global examples",
      "Structure: answer directly, explain, and extend",
    ],
    heroVisualAlt: "Minimal open book, compass, and global learning map illustration",
    listeningVisualAlt: "Minimal headphones and accent practice illustration",
    readingVisualAlt: "Minimal article reading and bookmark illustration",
    writingVisualAlt: "Minimal writing draft and checklist illustration",
    speakingVisualAlt: "Minimal speaking dialogue and timer illustration",
    globalReadingVisualAlt: "Minimal globe and reading cards illustration",
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
    listeningResourcesTitle: "精选免费听力资源",
    listeningResourcesSubtitle: "官方雅思听力练习与可信 YouTube 听力材料，兼顾考试技能和日常理解。",
    howToUseListening: "如何使用这些资源",
    listeningSteps: [
      "第一遍听主旨",
      "第二遍听细节",
      "写下关键词",
      "如有原文或答案，完成后再核对",
      "复习相关词汇",
    ],
    provider: "提供方",
    sourceType: "来源类型",
    level: "类型",
    duration: "时长",
    skills: "训练重点",
    languageSupport: "语言支持",
    openResource: "打开资源",
    official: "官方",
    youtube: "YouTube",
    playlist: "播放列表",
    ieltsListening: "雅思听力",
    dailyListening: "日常听力",
    accentPracticeTitle: "口音练习",
    accentPracticeSubtitle: "使用免费可信资源训练英式、美式、澳式、新西兰、全球英语和学术英语听力。",
    accentPracticeRoutine: "口音练习流程",
    accentRoutineSteps: [
      "第一遍听主旨",
      "第二遍听细节",
      "跟读一个短句",
      "写下 5 个关键词",
      "复盘口音特征",
    ],
    accent: "口音",
    british: "英式",
    american: "美式",
    australian: "澳式",
    newZealand: "新西兰",
    globalEnglish: "全球英语",
    academicEnglish: "学术英语",
    podcast: "播客",
    readingResourcesTitle: "精选免费阅读资源",
    readingResourcesSubtitle: "官方雅思阅读练习、可信新闻、智库研究和公共数据，帮助提升学术阅读能力。",
    howToUseReading: "如何使用阅读资源",
    readingSteps: [
      "先快速浏览文章",
      "找出主要论点",
      "标出学术词汇",
      "用三句话总结",
      "把主题转化为口语或写作观点",
    ],
    topicFocus: "主题重点",
    howToUse: "使用方法",
    paywallNote: "访问说明",
    news: "新闻",
    thinkTank: "智库",
    research: "研究",
    data: "数据",
    publicInstitution: "公共机构",
    officialIeltsPractice: "官方雅思练习",
    newsCurrentAffairs: "新闻与时事",
    thinkTanksResearch: "智库与研究",
    dataPublicInstitutions: "数据与公共机构",
    ieltsReading: "雅思阅读",
    writingPracticeTitle: "雅思写作练习流程",
    writingPracticeSubtitle: "从阅读中积累观点，练习 Task 1 与 Task 2，并在修改前进行自查。",
    task1: "Task 1",
    task2: "Task 2",
    promptBank: "写作题库",
    writingPracticeArea: "写作练习区",
    writingChecklist: "写作检查清单",
    freeWritingResources: "免费写作资源",
    taskType: "任务类型",
    prompt: "题目",
    questionType: "题型",
    usefulIdeas: "可用观点",
    usefulVocabulary: "可用词汇",
    relatedReadingTopic: "相关阅读主题",
    wordCount: "字数",
    timeGuide: "时间建议",
    saveDraft: "保存草稿",
    clearDraft: "清空草稿",
    draftSaved: "草稿已保存在本地",
    writeHere: "在这里写下你的答案……",
    writingChecklistItems: [
      "任务回应：直接回答题目的每个部分",
      "连贯与衔接：段落清晰，逻辑连接自然",
      "词汇资源：使用准确主题词汇，不要过度复杂化",
      "语法多样性与准确性：混合句式并检查错误",
      "修改：保存前检查例子、解释和字数",
    ],
    sourceLesson: "课程",
    practice: "练习",
    speakingPracticeTitle: "雅思口语练习流程",
    speakingPracticeSubtitle: "练习 Part 1、Cue Card 和 Part 3 讨论，并从高质量阅读中积累观点。",
    part1: "Part 1",
    part2: "Part 2",
    part3: "Part 3",
    cueCard: "Cue Card",
    topicBank: "话题库",
    discussionQuestions: "讨论问题",
    timerGuide: "计时建议",
    speakingChecklist: "自查清单",
    usefulPhrases: "实用表达",
    followUpQuestions: "追问问题",
    sampleStructure: "回答结构",
    preparation: "准备",
    speakingPractice: "口语练习",
    freeSpeakingResources: "免费口语资源",
    practiceRoutine: "练习流程",
    speakingRoutineSteps: [
      "选择一个问题",
      "准备 30-60 秒",
      "大声说出答案",
      "检查流利度、词汇、语法和例子",
      "用更好的结构再说一遍",
    ],
    speakingChecklistItems: [
      "流利度：尽量避免长时间停顿",
      "词汇：自然使用主题词汇",
      "语法：结合简单句和复杂句",
      "例子：用个人或全球议题例子支持观点",
      "结构：直接回答、解释并延展",
    ],
    heroVisualAlt: "打开的书、指南针和全球学习地图的极简插画",
    listeningVisualAlt: "耳机与口音练习的极简插画",
    readingVisualAlt: "文章阅读与书签的极简插画",
    writingVisualAlt: "写作草稿与检查清单的极简插画",
    speakingVisualAlt: "口语对话与计时器的极简插画",
    globalReadingVisualAlt: "全球阅读与文章卡片的极简插画",
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
    listeningResourcesTitle: "精選免費聽力資源",
    listeningResourcesSubtitle: "官方雅思聽力練習同可信 YouTube 聽力材料，兼顧考試技巧同日常理解。",
    howToUseListening: "點樣使用呢啲資源",
    listeningSteps: [
      "第一遍聽主旨",
      "第二遍聽細節",
      "寫低關鍵詞",
      "如有原文或答案，完成後再核對",
      "重溫相關詞彙",
    ],
    provider: "提供方",
    sourceType: "來源類型",
    level: "類型",
    duration: "時長",
    skills: "訓練重點",
    languageSupport: "語言支援",
    openResource: "打開資源",
    official: "官方",
    youtube: "YouTube",
    playlist: "播放列表",
    ieltsListening: "雅思聽力",
    dailyListening: "日常聽力",
    accentPracticeTitle: "口音練習",
    accentPracticeSubtitle: "使用免費可信資源訓練英式、美式、澳式、新西蘭、全球英語同學術英語聽力。",
    accentPracticeRoutine: "口音練習流程",
    accentRoutineSteps: [
      "第一遍聽主旨",
      "第二遍聽細節",
      "跟讀一個短句",
      "寫低 5 個關鍵詞",
      "重溫口音特徵",
    ],
    accent: "口音",
    british: "英式",
    american: "美式",
    australian: "澳式",
    newZealand: "新西蘭",
    globalEnglish: "全球英語",
    academicEnglish: "學術英語",
    podcast: "播客",
    readingResourcesTitle: "精選免費閱讀資源",
    readingResourcesSubtitle: "官方雅思閱讀練習、可信新聞、智庫研究同公共數據，幫助提升學術閱讀能力。",
    howToUseReading: "點樣使用閱讀資源",
    readingSteps: [
      "先快速瀏覽文章",
      "搵出主要論點",
      "標出學術詞彙",
      "用三句總結",
      "將主題轉化為口語或者寫作觀點",
    ],
    topicFocus: "主題重點",
    howToUse: "使用方法",
    paywallNote: "訪問說明",
    news: "新聞",
    thinkTank: "智庫",
    research: "研究",
    data: "數據",
    publicInstitution: "公共機構",
    officialIeltsPractice: "官方雅思練習",
    newsCurrentAffairs: "新聞與時事",
    thinkTanksResearch: "智庫與研究",
    dataPublicInstitutions: "數據與公共機構",
    ieltsReading: "雅思閱讀",
    writingPracticeTitle: "雅思寫作練習流程",
    writingPracticeSubtitle: "由閱讀入面累積觀點，練習 Task 1 同 Task 2，並喺修改前做自查。",
    task1: "Task 1",
    task2: "Task 2",
    promptBank: "寫作題庫",
    writingPracticeArea: "寫作練習區",
    writingChecklist: "寫作檢查清單",
    freeWritingResources: "免費寫作資源",
    taskType: "任務類型",
    prompt: "題目",
    questionType: "題型",
    usefulIdeas: "可用觀點",
    usefulVocabulary: "可用詞彙",
    relatedReadingTopic: "相關閱讀主題",
    wordCount: "字數",
    timeGuide: "時間建議",
    saveDraft: "儲存草稿",
    clearDraft: "清空草稿",
    draftSaved: "草稿已儲存喺本機",
    writeHere: "喺呢度寫低你嘅答案……",
    writingChecklistItems: [
      "任務回應：直接回答題目每個部分",
      "連貫與銜接：段落清晰，邏輯連接自然",
      "詞彙資源：使用準確主題詞彙，唔好過度複雜化",
      "語法多樣性與準確性：混合句式並檢查錯誤",
      "修改：儲存前檢查例子、解釋同字數",
    ],
    sourceLesson: "課程",
    practice: "練習",
    speakingPracticeTitle: "雅思口語練習流程",
    speakingPracticeSubtitle: "練習 Part 1、Cue Card 同 Part 3 討論，並由高質量閱讀入面累積觀點。",
    part1: "Part 1",
    part2: "Part 2",
    part3: "Part 3",
    cueCard: "Cue Card",
    topicBank: "話題庫",
    discussionQuestions: "討論問題",
    timerGuide: "計時建議",
    speakingChecklist: "自查清單",
    usefulPhrases: "實用表達",
    followUpQuestions: "追問問題",
    sampleStructure: "回答結構",
    preparation: "準備",
    speakingPractice: "口語練習",
    freeSpeakingResources: "免費口語資源",
    practiceRoutine: "練習流程",
    speakingRoutineSteps: [
      "選擇一條問題",
      "準備 30-60 秒",
      "大聲講出答案",
      "檢查流利度、詞彙、語法同例子",
      "用更好結構再講一次",
    ],
    speakingChecklistItems: [
      "流利度：盡量避免長時間停頓",
      "詞彙：自然使用主題詞彙",
      "語法：結合簡單句同複雜句",
      "例子：用個人或者全球議題例子支持觀點",
      "結構：直接回答、解釋並延展",
    ],
    heroVisualAlt: "打開嘅書、指南針同全球學習地圖嘅極簡插畫",
    listeningVisualAlt: "耳機同口音練習嘅極簡插畫",
    readingVisualAlt: "文章閱讀同書籤嘅極簡插畫",
    writingVisualAlt: "寫作草稿同檢查清單嘅極簡插畫",
    speakingVisualAlt: "口語對話同計時器嘅極簡插畫",
    globalReadingVisualAlt: "全球閱讀同文章卡片嘅極簡插畫",
  },
};

export const vocabularyNotebookLabels: Record<Locale, {
  title: string;
  subtitle: string;
  word: string;
  wordPlaceholder: string;
  meaning: string;
  meaningPlaceholder: string;
  example: string;
  examplePlaceholder: string;
  topic: string;
  topicPlaceholder: string;
  skill: string;
  ieltsUse: string;
  ieltsUsePlaceholder: string;
  saveEntry: string;
  deleteEntry: string;
  emptyState: string;
  allSkills: string;
  skillOptions: Record<"Reading" | "Listening" | "Writing" | "Speaking", string>;
}> = {
  en: {
    title: "Vocabulary Notebook",
    subtitle:
      "Save useful words and phrases from IELTS practice, then filter them by skill when you revise.",
    word: "Word or phrase",
    wordPlaceholder: "e.g. sustainable development",
    meaning: "Meaning",
    meaningPlaceholder: "Write the meaning in your own words",
    example: "Example sentence",
    examplePlaceholder: "Use the word in a natural sentence",
    topic: "Topic",
    topicPlaceholder: "e.g. climate, education, technology",
    skill: "Skill",
    ieltsUse: "IELTS use",
    ieltsUsePlaceholder: "How could you use this in IELTS?",
    saveEntry: "Save Entry",
    deleteEntry: "Delete entry",
    emptyState: "No vocabulary saved yet. Add your first useful word or phrase.",
    allSkills: "All Skills",
    skillOptions: {
      Reading: "Reading",
      Listening: "Listening",
      Writing: "Writing",
      Speaking: "Speaking",
    },
  },
  zh: {
    title: "词汇笔记本",
    subtitle: "保存雅思练习中的高频词和表达，复习时可按技能筛选。",
    word: "单词或短语",
    wordPlaceholder: "例如：sustainable development",
    meaning: "含义",
    meaningPlaceholder: "用自己的话写下意思",
    example: "例句",
    examplePlaceholder: "用这个词写一个自然的句子",
    topic: "主题",
    topicPlaceholder: "例如：气候、教育、科技",
    skill: "技能",
    ieltsUse: "雅思用途",
    ieltsUsePlaceholder: "这个表达可以怎样用于雅思？",
    saveEntry: "保存词条",
    deleteEntry: "删除词条",
    emptyState: "还没有保存词汇。先添加一个有用的单词或短语。",
    allSkills: "全部技能",
    skillOptions: {
      Reading: "阅读",
      Listening: "听力",
      Writing: "写作",
      Speaking: "口语",
    },
  },
  yue: {
    title: "詞彙筆記本",
    subtitle: "保存雅思練習入面有用嘅詞同表達，溫習時可以按技能篩選。",
    word: "單詞或短語",
    wordPlaceholder: "例如：sustainable development",
    meaning: "意思",
    meaningPlaceholder: "用自己嘅講法寫低意思",
    example: "例句",
    examplePlaceholder: "用呢個詞寫一句自然嘅句子",
    topic: "主題",
    topicPlaceholder: "例如：氣候、教育、科技",
    skill: "技能",
    ieltsUse: "雅思用途",
    ieltsUsePlaceholder: "呢個表達可以點樣用喺雅思？",
    saveEntry: "保存詞條",
    deleteEntry: "刪除詞條",
    emptyState: "暫時未保存詞彙。先添加一個有用嘅單詞或短語。",
    allSkills: "全部技能",
    skillOptions: {
      Reading: "閱讀",
      Listening: "聽力",
      Writing: "寫作",
      Speaking: "口語",
    },
  },
};

export const vocabularyBankLabels: Record<Locale, {
  title: string;
  subtitle: string;
  search: string;
  searchPlaceholder: string;
  topic: string;
  skill: string;
  allTopics: string;
  allSkills: string;
  learned: string;
  markLearned: string;
  unmarkLearned: string;
  resetLearned: string;
  ukPronunciation: string;
  usPronunciation: string;
  speechUnavailable: string;
  meaning: string;
  example: string;
  tags: string;
  level: string;
  partOfSpeech: string;
  noResults: string;
  wordCount: string;
  topicOptions: Record<
    "Education" | "Technology" | "Environment" | "Government & Politics" | "Economy & Work" | "Health & Fitness",
    string
  >;
  skillOptions: Record<"Reading" | "Listening" | "Writing" | "Speaking", string>;
}> = {
  en: {
    title: "Vocabulary Bank",
    subtitle:
      "Explore 30 starter IELTS words by topic, listen to UK or US pronunciation, and mark words as learned locally.",
    search: "Search",
    searchPlaceholder: "Search by word or phrase",
    topic: "Topic",
    skill: "Skill",
    allTopics: "All Topics",
    allSkills: "All Skills",
    learned: "Learned",
    markLearned: "Mark learned",
    unmarkLearned: "Remove learned",
    resetLearned: "Reset learned words",
    ukPronunciation: "UK",
    usPronunciation: "US",
    speechUnavailable: "Pronunciation is not available in this browser.",
    meaning: "Meaning",
    example: "Example",
    tags: "Tags",
    level: "Level",
    partOfSpeech: "Part of speech",
    noResults: "No vocabulary items match your filters.",
    wordCount: "words",
    topicOptions: {
      Education: "Education",
      Technology: "Technology",
      Environment: "Environment",
      "Government & Politics": "Government & Politics",
      "Economy & Work": "Economy & Work",
      "Health & Fitness": "Health & Fitness",
    },
    skillOptions: {
      Reading: "Reading",
      Listening: "Listening",
      Writing: "Writing",
      Speaking: "Speaking",
    },
  },
  zh: {
    title: "雅思词汇库",
    subtitle: "先从 30 个雅思核心词开始，按主题筛选，听英式/美式发音，并在本地标记已掌握。",
    search: "搜索",
    searchPlaceholder: "按单词或短语搜索",
    topic: "主题",
    skill: "技能",
    allTopics: "全部主题",
    allSkills: "全部技能",
    learned: "已掌握",
    markLearned: "标记为已掌握",
    unmarkLearned: "取消掌握标记",
    resetLearned: "重置已掌握词汇",
    ukPronunciation: "英式",
    usPronunciation: "美式",
    speechUnavailable: "当前浏览器不支持发音功能。",
    meaning: "含义",
    example: "例句",
    tags: "标签",
    level: "难度",
    partOfSpeech: "词性",
    noResults: "没有符合筛选条件的词汇。",
    wordCount: "个词",
    topicOptions: {
      Education: "教育",
      Technology: "科技",
      Environment: "环境",
      "Government & Politics": "政府与政治",
      "Economy & Work": "经济与工作",
      "Health & Fitness": "健康与健身",
    },
    skillOptions: {
      Reading: "阅读",
      Listening: "听力",
      Writing: "写作",
      Speaking: "口语",
    },
  },
  yue: {
    title: "雅思詞彙庫",
    subtitle: "先由 30 個雅思核心詞開始，按主題篩選，聽英式/美式發音，並喺本機標記已掌握。",
    search: "搜尋",
    searchPlaceholder: "按單詞或短語搜尋",
    topic: "主題",
    skill: "技能",
    allTopics: "全部主題",
    allSkills: "全部技能",
    learned: "已掌握",
    markLearned: "標記為已掌握",
    unmarkLearned: "取消掌握標記",
    resetLearned: "重設已掌握詞彙",
    ukPronunciation: "英式",
    usPronunciation: "美式",
    speechUnavailable: "目前瀏覽器唔支援發音功能。",
    meaning: "意思",
    example: "例句",
    tags: "標籤",
    level: "難度",
    partOfSpeech: "詞性",
    noResults: "冇符合篩選條件嘅詞彙。",
    wordCount: "個詞",
    topicOptions: {
      Education: "教育",
      Technology: "科技",
      Environment: "環境",
      "Government & Politics": "政府與政治",
      "Economy & Work": "經濟與工作",
      "Health & Fitness": "健康與健身",
    },
    skillOptions: {
      Reading: "閱讀",
      Listening: "聽力",
      Writing: "寫作",
      Speaking: "口語",
    },
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
  visualAlt: string;
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
    visualAlt: "Minimal globe and article cards for Weekly Global Reading",
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
    visualAlt: "每周全球精读的地球与文章卡片极简插画",
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
    visualAlt: "每週全球精讀嘅地球同文章卡片極簡插畫",
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

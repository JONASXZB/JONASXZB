import type { LocalizedText } from "@/lib/i18n";

export type ReadingResourceGroup =
  | "Official IELTS Practice"
  | "News & Current Affairs"
  | "Think Tanks & Research"
  | "Data & Public Institutions";

export interface ReadingResource {
  id: string;
  title: string;
  provider: string;
  group: ReadingResourceGroup;
  sourceType: "Official" | "News" | "Think Tank" | "Research" | "Data" | "Public Institution";
  level: string;
  topicFocus: string;
  description: LocalizedText;
  howToUse: LocalizedText;
  url: string;
  isFree: true;
  paywallNote: LocalizedText;
  languageSupport: LocalizedText;
}

export const readingResources: ReadingResource[] = [
  {
    id: "british-council-reading-practice",
    title: "British Council IELTS Reading Practice Tests",
    provider: "British Council",
    group: "Official IELTS Practice",
    sourceType: "Official",
    level: "IELTS Reading",
    topicFocus: "Timed test practice",
    description: {
      en: "Official free IELTS Reading practice tests with test-style passages and questions.",
      zh: "British Council 官方免费雅思阅读练习，包含考试形式文章和题目。",
      yue: "British Council 官方免費雅思閱讀練習，包含考試形式文章同題目。",
    },
    howToUse: {
      en: "Complete one passage under time pressure, then review every wrong answer type.",
      zh: "限时完成一篇文章，然后复盘每一种错题类型。",
      yue: "限時完成一篇文章，然後重溫每一種錯題類型。",
    },
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/reading",
    isFree: true,
    paywallNote: {
      en: "Free official practice page.",
      zh: "免费官方练习页面。",
      yue: "免費官方練習頁面。",
    },
    languageSupport: {
      en: "English passages and questions",
      zh: "英文文章和题目",
      yue: "英文文章同題目",
    },
  },
  {
    id: "idp-reading-preparation",
    title: "IDP IELTS Reading Preparation",
    provider: "IDP IELTS",
    group: "Official IELTS Practice",
    sourceType: "Official",
    level: "IELTS Reading",
    topicFocus: "Question types and strategies",
    description: {
      en: "Official IDP guidance for IELTS Reading task types, skills, and preparation.",
      zh: "IDP 官方雅思阅读备考指导，覆盖题型、技能和准备方法。",
      yue: "IDP 官方雅思閱讀備考指引，涵蓋題型、技能同準備方法。",
    },
    howToUse: {
      en: "Use this before practice tests to understand task expectations and strategy.",
      zh: "做练习题前先用它理解题型要求和解题策略。",
      yue: "做練習題前先用佢理解題型要求同解題策略。",
    },
    url: "https://ielts.idp.com/prepare/all-test-types/reading",
    isFree: true,
    paywallNote: {
      en: "Free official preparation page.",
      zh: "免费官方备考页面。",
      yue: "免費官方備考頁面。",
    },
    languageSupport: {
      en: "English guidance",
      zh: "英文指导",
      yue: "英文指引",
    },
  },
  {
    id: "ielts-official-preparation",
    title: "IELTS.org Official Preparation Resources",
    provider: "IELTS.org",
    group: "Official IELTS Practice",
    sourceType: "Official",
    level: "IELTS Reading",
    topicFocus: "Official preparation hub",
    description: {
      en: "Official IELTS preparation hub with free materials and links for all test modules.",
      zh: "IELTS 官方备考资源中心，提供免费材料和各模块学习链接。",
      yue: "IELTS 官方備考資源中心，提供免費材料同各模組學習連結。",
    },
    howToUse: {
      en: "Use it as a trusted starting point before choosing module-specific practice.",
      zh: "作为可信起点，再进入具体模块练习。",
      yue: "作為可信起點，再進入具體模組練習。",
    },
    url: "https://ielts.org/take-a-test/preparation-resources",
    isFree: true,
    paywallNote: {
      en: "Free official resource page.",
      zh: "免费官方资源页面。",
      yue: "免費官方資源頁面。",
    },
    languageSupport: {
      en: "English preparation links",
      zh: "英文备考链接",
      yue: "英文備考連結",
    },
  },
  {
    id: "bbc-news",
    title: "BBC News",
    provider: "BBC",
    group: "News & Current Affairs",
    sourceType: "News",
    level: "Intermediate-Advanced",
    topicFocus: "Global current affairs",
    description: {
      en: "Clear international news writing for building topic vocabulary and general reading speed.",
      zh: "清晰的国际新闻写作，适合积累主题词汇和提升阅读速度。",
      yue: "清晰嘅國際新聞寫作，適合累積主題詞彙同提升閱讀速度。",
    },
    howToUse: {
      en: "Read one short story and summarize the main event, cause, and consequence.",
      zh: "阅读一篇短新闻，总结事件、原因和结果。",
      yue: "閱讀一篇短新聞，總結事件、原因同結果。",
    },
    url: "https://www.bbc.com/news",
    isFree: true,
    paywallNote: {
      en: "Generally free to access.",
      zh: "通常可免费阅读。",
      yue: "通常可以免費閱讀。",
    },
    languageSupport: {
      en: "English news articles",
      zh: "英文新闻文章",
      yue: "英文新聞文章",
    },
  },
  {
    id: "reuters-world",
    title: "Reuters World",
    provider: "Reuters",
    group: "News & Current Affairs",
    sourceType: "News",
    level: "Intermediate-Advanced",
    topicFocus: "Concise world news",
    description: {
      en: "Concise global reporting that helps learners practise factual reading and neutral news language.",
      zh: "简洁的全球新闻报道，适合练习事实型阅读和中性新闻表达。",
      yue: "簡潔嘅全球新聞報道，適合練習事實型閱讀同中性新聞表達。",
    },
    howToUse: {
      en: "Identify the who, what, where, why, and likely impact in five bullet points.",
      zh: "用五个要点整理人物、事件、地点、原因和可能影响。",
      yue: "用五個要點整理人物、事件、地點、原因同可能影響。",
    },
    url: "https://www.reuters.com/world/",
    isFree: true,
    paywallNote: {
      en: "Free access may vary by region, but it is a trusted public news source.",
      zh: "不同地区访问情况可能不同，但它是可信的公开新闻来源。",
      yue: "唔同地區訪問情況可能唔同，但佢係可信嘅公開新聞來源。",
    },
    languageSupport: {
      en: "English news articles",
      zh: "英文新闻文章",
      yue: "英文新聞文章",
    },
  },
  {
    id: "ap-news",
    title: "AP News",
    provider: "Associated Press",
    group: "News & Current Affairs",
    sourceType: "News",
    level: "Intermediate",
    topicFocus: "Accessible world news",
    description: {
      en: "Accessible wire-service reporting for practising main ideas, details, and event summaries.",
      zh: "易读的通讯社报道，适合练习主旨、细节和事件概括。",
      yue: "易讀嘅通訊社報道，適合練習主旨、細節同事件概括。",
    },
    howToUse: {
      en: "Underline names, numbers, and locations, then explain why they matter.",
      zh: "标出人名、数字和地点，再说明它们为什么重要。",
      yue: "標出人名、數字同地點，再說明佢哋點解重要。",
    },
    url: "https://apnews.com/",
    isFree: true,
    paywallNote: {
      en: "Generally free to access.",
      zh: "通常可免费阅读。",
      yue: "通常可以免費閱讀。",
    },
    languageSupport: {
      en: "English news articles",
      zh: "英文新闻文章",
      yue: "英文新聞文章",
    },
  },
  {
    id: "npr-world",
    title: "NPR World",
    provider: "NPR",
    group: "News & Current Affairs",
    sourceType: "News",
    level: "Intermediate",
    topicFocus: "World stories and explainers",
    description: {
      en: "Readable world news and explainers that often include clear background context.",
      zh: "易读的国际新闻和解释型文章，经常提供清晰背景信息。",
      yue: "易讀嘅國際新聞同解釋型文章，經常提供清晰背景資料。",
    },
    howToUse: {
      en: "Separate background information from the new development in the article.",
      zh: "区分文章中的背景信息和最新进展。",
      yue: "區分文章入面嘅背景資料同最新進展。",
    },
    url: "https://www.npr.org/sections/world/",
    isFree: true,
    paywallNote: {
      en: "Free public media source.",
      zh: "免费的公共媒体来源。",
      yue: "免費嘅公共媒體來源。",
    },
    languageSupport: {
      en: "English articles, often with audio support",
      zh: "英文文章，常配有音频",
      yue: "英文文章，常配有音頻",
    },
  },
  {
    id: "the-conversation-global",
    title: "The Conversation Global",
    provider: "The Conversation",
    group: "News & Current Affairs",
    sourceType: "Research",
    level: "Advanced",
    topicFocus: "Academic explainers",
    description: {
      en: "Research-based public writing by academics, useful for IELTS academic vocabulary and argument structure.",
      zh: "由学者撰写的研究型公共文章，适合积累雅思学术词汇和论证结构。",
      yue: "由學者撰寫嘅研究型公共文章，適合累積雅思學術詞彙同論證結構。",
    },
    howToUse: {
      en: "Find the writer's main claim and list two pieces of supporting evidence.",
      zh: "找出作者的核心观点，并列出两个支持证据。",
      yue: "搵出作者嘅核心觀點，並列出兩個支持證據。",
    },
    url: "https://theconversation.com/global",
    isFree: true,
    paywallNote: {
      en: "Free to read.",
      zh: "可免费阅读。",
      yue: "可以免費閱讀。",
    },
    languageSupport: {
      en: "English research explainers",
      zh: "英文研究解读文章",
      yue: "英文研究解讀文章",
    },
  },
  {
    id: "pew-research",
    title: "Pew Research Center",
    provider: "Pew Research Center",
    group: "Think Tanks & Research",
    sourceType: "Research",
    level: "Advanced",
    topicFocus: "Survey data and society",
    description: {
      en: "Free research reports and short reads on society, technology, demographics, media, and global attitudes.",
      zh: "免费研究报告和短文，主题涵盖社会、科技、人口、媒体和全球态度。",
      yue: "免費研究報告同短文，主題涵蓋社會、科技、人口、媒體同全球態度。",
    },
    howToUse: {
      en: "Use charts and survey findings to practise Task 1 language and evidence-based opinions.",
      zh: "利用图表和调查结果练习 Task 1 表达和基于证据的观点。",
      yue: "利用圖表同調查結果練習 Task 1 表達同基於證據嘅觀點。",
    },
    url: "https://www.pewresearch.org/",
    isFree: true,
    paywallNote: {
      en: "Free public research source.",
      zh: "免费的公开研究来源。",
      yue: "免費嘅公開研究來源。",
    },
    languageSupport: {
      en: "English reports and data summaries",
      zh: "英文报告和数据摘要",
      yue: "英文報告同數據摘要",
    },
  },
  {
    id: "brookings-research",
    title: "Brookings Research & Commentary",
    provider: "Brookings",
    group: "Think Tanks & Research",
    sourceType: "Think Tank",
    level: "Advanced",
    topicFocus: "Policy and global affairs",
    description: {
      en: "Policy analysis and commentary on education, economics, governance, technology, and international affairs.",
      zh: "关于教育、经济、治理、科技和国际事务的政策分析与评论。",
      yue: "關於教育、經濟、治理、科技同國際事務嘅政策分析同評論。",
    },
    howToUse: {
      en: "Extract the problem, proposed solution, and likely limitation from one article.",
      zh: "从一篇文章中提取问题、解决方案和可能限制。",
      yue: "由一篇文章入面提取問題、解決方案同可能限制。",
    },
    url: "https://www.brookings.edu/research-commentary/",
    isFree: true,
    paywallNote: {
      en: "Free policy analysis source.",
      zh: "免费的政策分析来源。",
      yue: "免費嘅政策分析來源。",
    },
    languageSupport: {
      en: "English policy articles",
      zh: "英文政策文章",
      yue: "英文政策文章",
    },
  },
  {
    id: "cfr",
    title: "Council on Foreign Relations",
    provider: "Council on Foreign Relations",
    group: "Think Tanks & Research",
    sourceType: "Think Tank",
    level: "Advanced",
    topicFocus: "International relations",
    description: {
      en: "Backgrounders and analysis on global politics, security, trade, migration, climate, and diplomacy.",
      zh: "关于全球政治、安全、贸易、移民、气候和外交的背景文章与分析。",
      yue: "關於全球政治、安全、貿易、移民、氣候同外交嘅背景文章同分析。",
    },
    howToUse: {
      en: "Read a backgrounder and build a vocabulary list for one IELTS global issue topic.",
      zh: "阅读一篇背景文章，为一个雅思全球议题建立词汇表。",
      yue: "閱讀一篇背景文章，為一個雅思全球議題建立詞彙表。",
    },
    url: "https://www.cfr.org/",
    isFree: true,
    paywallNote: {
      en: "Many explainers and backgrounders are free.",
      zh: "许多解释型文章和背景资料可免费阅读。",
      yue: "好多解釋型文章同背景資料可以免費閱讀。",
    },
    languageSupport: {
      en: "English analysis and explainers",
      zh: "英文分析和解释文章",
      yue: "英文分析同解釋文章",
    },
  },
  {
    id: "carnegie-research",
    title: "Carnegie Endowment Research",
    provider: "Carnegie Endowment",
    group: "Think Tanks & Research",
    sourceType: "Think Tank",
    level: "Advanced",
    topicFocus: "Global policy research",
    description: {
      en: "Research on international politics, technology, democracy, security, and regional affairs.",
      zh: "关于国际政治、科技、民主、安全和地区事务的研究。",
      yue: "關於國際政治、科技、民主、安全同地區事務嘅研究。",
    },
    howToUse: {
      en: "Summarize the author's position in three sentences and note useful linking phrases.",
      zh: "用三句话总结作者立场，并记录有用的衔接表达。",
      yue: "用三句總結作者立場，並記錄有用嘅銜接表達。",
    },
    url: "https://carnegieendowment.org/research",
    isFree: true,
    paywallNote: {
      en: "Free public research source.",
      zh: "免费的公开研究来源。",
      yue: "免費嘅公開研究來源。",
    },
    languageSupport: {
      en: "English research and analysis",
      zh: "英文研究和分析",
      yue: "英文研究同分析",
    },
  },
  {
    id: "csis-analysis",
    title: "CSIS Analysis",
    provider: "CSIS",
    group: "Think Tanks & Research",
    sourceType: "Think Tank",
    level: "Advanced",
    topicFocus: "Security, technology, and global policy",
    description: {
      en: "Analysis on international security, technology policy, economics, energy, and geopolitics.",
      zh: "关于国际安全、科技政策、经济、能源和地缘政治的分析。",
      yue: "關於國際安全、科技政策、經濟、能源同地緣政治嘅分析。",
    },
    howToUse: {
      en: "Identify the policy issue and write one IELTS-style opinion sentence.",
      zh: "找出政策问题，并写一个雅思式观点句。",
      yue: "搵出政策問題，並寫一個雅思式觀點句。",
    },
    url: "https://www.csis.org/analysis",
    isFree: true,
    paywallNote: {
      en: "Free public analysis source.",
      zh: "免费的公开分析来源。",
      yue: "免費嘅公開分析來源。",
    },
    languageSupport: {
      en: "English analysis",
      zh: "英文分析",
      yue: "英文分析",
    },
  },
  {
    id: "rand-research",
    title: "RAND Research",
    provider: "RAND",
    group: "Think Tanks & Research",
    sourceType: "Research",
    level: "Advanced",
    topicFocus: "Public policy research",
    description: {
      en: "Research pages on education, health, security, technology, and public policy.",
      zh: "关于教育、健康、安全、科技和公共政策的研究页面。",
      yue: "關於教育、健康、安全、科技同公共政策嘅研究頁面。",
    },
    howToUse: {
      en: "Choose one research summary and turn it into a Task 2 example.",
      zh: "选择一个研究摘要，把它转化为 Task 2 例子。",
      yue: "選擇一個研究摘要，將佢轉化為 Task 2 例子。",
    },
    url: "https://www.rand.org/research.html",
    isFree: true,
    paywallNote: {
      en: "Research summaries are generally free; some full reports may vary.",
      zh: "研究摘要通常免费，部分完整报告可能不同。",
      yue: "研究摘要通常免費，部分完整報告可能唔同。",
    },
    languageSupport: {
      en: "English research summaries",
      zh: "英文研究摘要",
      yue: "英文研究摘要",
    },
  },
  {
    id: "chatham-house-research",
    title: "Chatham House Research",
    provider: "Chatham House",
    group: "Think Tanks & Research",
    sourceType: "Think Tank",
    level: "Advanced",
    topicFocus: "International affairs research",
    description: {
      en: "Research and expert analysis on global governance, climate, economics, security, and regional issues.",
      zh: "关于全球治理、气候、经济、安全和地区议题的研究与专家分析。",
      yue: "關於全球治理、氣候、經濟、安全同地區議題嘅研究同專家分析。",
    },
    howToUse: {
      en: "Use one article to collect formal verbs for academic writing.",
      zh: "用一篇文章收集适合学术写作的正式动词。",
      yue: "用一篇文章收集適合學術寫作嘅正式動詞。",
    },
    url: "https://www.chathamhouse.org/research",
    isFree: true,
    paywallNote: {
      en: "Many research pages are free; some material may require registration.",
      zh: "许多研究页面免费，部分内容可能需要注册。",
      yue: "好多研究頁面免費，部分內容可能需要註冊。",
    },
    languageSupport: {
      en: "English research and analysis",
      zh: "英文研究和分析",
      yue: "英文研究同分析",
    },
  },
  {
    id: "our-world-in-data",
    title: "Our World in Data",
    provider: "Our World in Data",
    group: "Data & Public Institutions",
    sourceType: "Data",
    level: "Intermediate-Advanced",
    topicFocus: "Charts, data, and global trends",
    description: {
      en: "Free data-driven articles and charts on health, energy, climate, population, education, and development.",
      zh: "免费的数据型文章和图表，涵盖健康、能源、气候、人口、教育和发展。",
      yue: "免費嘅數據型文章同圖表，涵蓋健康、能源、氣候、人口、教育同發展。",
    },
    howToUse: {
      en: "Pick one chart and describe the trend using Task 1 language.",
      zh: "选择一张图表，用 Task 1 语言描述趋势。",
      yue: "選擇一張圖表，用 Task 1 語言描述趨勢。",
    },
    url: "https://ourworldindata.org/",
    isFree: true,
    paywallNote: {
      en: "Free public data source.",
      zh: "免费的公开数据来源。",
      yue: "免費嘅公開數據來源。",
    },
    languageSupport: {
      en: "English data articles and charts",
      zh: "英文数据文章和图表",
      yue: "英文數據文章同圖表",
    },
  },
  {
    id: "world-bank-blogs",
    title: "World Bank Blogs",
    provider: "World Bank",
    group: "Data & Public Institutions",
    sourceType: "Public Institution",
    level: "Intermediate-Advanced",
    topicFocus: "Development and public policy",
    description: {
      en: "Free public institution writing on development, cities, jobs, climate, education, poverty, and technology.",
      zh: "公共机构免费文章，主题包括发展、城市、就业、气候、教育、贫困和科技。",
      yue: "公共機構免費文章，主題包括發展、城市、就業、氣候、教育、貧困同科技。",
    },
    howToUse: {
      en: "Find one development problem and write a cause-solution paragraph plan.",
      zh: "找出一个发展问题，并写出原因-解决方案段落提纲。",
      yue: "搵出一個發展問題，並寫出原因-解決方案段落提綱。",
    },
    url: "https://blogs.worldbank.org/",
    isFree: true,
    paywallNote: {
      en: "Free public institution blog.",
      zh: "免费的公共机构博客。",
      yue: "免費嘅公共機構博客。",
    },
    languageSupport: {
      en: "English blog articles",
      zh: "英文博客文章",
      yue: "英文博客文章",
    },
  },
  {
    id: "imf-blog",
    title: "IMF Blog",
    provider: "International Monetary Fund",
    group: "Data & Public Institutions",
    sourceType: "Public Institution",
    level: "Advanced",
    topicFocus: "Economics and global policy",
    description: {
      en: "Free articles on inflation, growth, jobs, debt, finance, trade, and global economic policy.",
      zh: "关于通胀、增长、就业、债务、金融、贸易和全球经济政策的免费文章。",
      yue: "關於通脹、增長、就業、債務、金融、貿易同全球經濟政策嘅免費文章。",
    },
    howToUse: {
      en: "Collect three economics terms and write one balanced opinion sentence.",
      zh: "收集三个经济学术语，并写一个平衡观点句。",
      yue: "收集三個經濟學術語，並寫一個平衡觀點句。",
    },
    url: "https://www.imf.org/en/Blogs",
    isFree: true,
    paywallNote: {
      en: "Free public institution blog.",
      zh: "免费的公共机构博客。",
      yue: "免費嘅公共機構博客。",
    },
    languageSupport: {
      en: "English economics articles",
      zh: "英文经济文章",
      yue: "英文經濟文章",
    },
  },
  {
    id: "oecd-stories",
    title: "OECD Insights",
    provider: "OECD",
    group: "Data & Public Institutions",
    sourceType: "Public Institution",
    level: "Intermediate-Advanced",
    topicFocus: "Policy explainers and stories",
    description: {
      en: "Public policy stories and explainers on education, work, climate, wellbeing, digital life, and society.",
      zh: "关于教育、工作、气候、福祉、数字生活和社会的公共政策故事与解释文章。",
      yue: "關於教育、工作、氣候、福祉、數碼生活同社會嘅公共政策故事同解釋文章。",
    },
    howToUse: {
      en: "Turn one story into a speaking Part 3 answer with examples.",
      zh: "把一篇文章转化为带例子的口语 Part 3 回答。",
      yue: "將一篇文章轉化為帶例子嘅口語 Part 3 回答。",
    },
    url: "https://www.oecd.org/stories/",
    isFree: true,
    paywallNote: {
      en: "Free public institution stories.",
      zh: "免费的公共机构文章。",
      yue: "免費嘅公共機構文章。",
    },
    languageSupport: {
      en: "English explainers and stories",
      zh: "英文解释文章和专题故事",
      yue: "英文解釋文章同專題故事",
    },
  },
];

export const readingResourceGroups: ReadingResourceGroup[] = [
  "Official IELTS Practice",
  "News & Current Affairs",
  "Think Tanks & Research",
  "Data & Public Institutions",
];

import type { LocalizedText } from "@/lib/i18n";

export type ReadingLevel = "Beginner" | "Intermediate" | "Advanced";
export type SourceType = "News" | "Think Tank" | "Research" | "Data" | "Public Institution";

export interface WeeklyReadingItem {
  id: string;
  title: string;
  titleNote: LocalizedText;
  source: string;
  sourceUrl: string;
  sourceType: SourceType;
  isFree: true;
  date: string;
  week: string;
  region: string;
  category: string;
  level: ReadingLevel;
  summary: LocalizedText;
  whyItMatters: LocalizedText;
  keyVocabulary: Array<{
    word: string;
    meaning: LocalizedText;
  }>;
  usefulExpression: LocalizedText;
  usefulExpressionExplanation: LocalizedText;
  discussionQuestion: LocalizedText;
  writingPrompt: LocalizedText;
}

export const weeklyReadings: WeeklyReadingItem[] = [
  {
    id: "2026-w19-ai-growth-fairness-brookings",
    title: "AI Growth Acceleration versus Distributional Fairness",
    titleNote: {
      en: "Reading focus: AI adoption, productivity, and who benefits from technological change.",
      zh: "标题说明：这篇适合练习 AI 采用、生产率以及技术收益分配相关表达。",
      yue: "標題說明：呢篇適合練習 AI 採用、生產率同技術收益分配相關表達。",
    },
    source: "Brookings",
    sourceUrl: "https://www.brookings.edu/articles/ai-growth-acceleration-versus-distributional-fairness/",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Global",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This Brookings analysis argues that stronger AI capability does not automatically create broad economic gains. Its key point is that productivity depends on diffusion, skills, organizational change, and whether benefits are shared across workers, firms, and regions.",
      zh: "这篇 Brookings 分析指出，更强的 AI 能力并不会自动带来广泛经济收益。核心观点是，生产率提升取决于扩散速度、技能、组织变革，以及收益能否在劳动者、企业和地区之间更公平地分配。",
      yue: "呢篇 Brookings 分析指出，更強嘅 AI 能力唔會自動帶嚟廣泛經濟收益。核心觀點係，生產率提升取決於擴散速度、技能、組織變革，同收益可唔可以喺勞動者、企業同地區之間更公平分配。",
    },
    whyItMatters: {
      en: "AI and work is a high-value IELTS topic because it connects technology, employment, inequality, education, and regulation.",
      zh: "AI 与工作是高价值雅思话题，因为它连接科技、就业、不平等、教育和监管。",
      yue: "AI 同工作係高價值雅思題目，因為佢連接科技、就業、不平等、教育同監管。",
    },
    keyVocabulary: [
      {
        word: "diffusion",
        meaning: {
          en: "the spread of a technology, idea, or practice across groups",
          zh: "技术、理念或做法在不同群体中的扩散",
          yue: "技術、理念或者做法喺唔同群體入面擴散",
        },
      },
      {
        word: "distributional fairness",
        meaning: {
          en: "whether benefits and costs are shared in a fair way",
          zh: "收益和成本是否以公平方式分配",
          yue: "收益同成本係咪以公平方式分配",
        },
      },
      {
        word: "productivity gains",
        meaning: {
          en: "improvements in output or efficiency",
          zh: "产出或效率方面的提升",
          yue: "產出或者效率方面嘅提升",
        },
      },
    ],
    usefulExpression: {
      en: "Technological progress does not guarantee shared prosperity.",
      zh: "技术进步并不保证共同繁荣。",
      yue: "技術進步並唔保證共同繁榮。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing why innovation may need education, policy, or regulation to benefit society widely.",
      zh: "当讨论为什么创新需要教育、政策或监管才能广泛惠及社会时，可以使用这个表达。",
      yue: "當討論點解創新需要教育、政策或者監管先可以廣泛惠及社會，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "Should governments focus more on speeding up AI adoption or making sure AI benefits are widely shared?",
      zh: "政府应该更重视加快 AI 采用，还是更重视确保 AI 收益被广泛分享？",
      yue: "政府應該更重視加快 AI 採用，定係更重視確保 AI 收益可以廣泛分享？",
    },
    writingPrompt: {
      en: "Some people believe artificial intelligence will make economies more productive. Others worry it will increase inequality. Discuss both views and give your opinion.",
      zh: "有人认为人工智能会提高经济生产率，也有人担心它会加剧不平等。讨论双方观点并给出你的看法。",
      yue: "有人認為人工智能會提高經濟生產率，亦有人擔心佢會加劇不平等。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w19-gambia-climate-jobs-worldbank",
    title: "Building Resilience, Powering Jobs and Growth for The Gambia’s Future",
    titleNote: {
      en: "Reading focus: climate resilience, jobs, agriculture, and infrastructure.",
      zh: "标题说明：这篇适合练习气候韧性、就业、农业和基础设施表达。",
      yue: "標題說明：呢篇適合練習氣候韌性、就業、農業同基礎設施表達。",
    },
    source: "World Bank",
    sourceUrl: "https://www.worldbank.org/en/news/press-release/2026/05/05/building-resilience-powering-jobs-and-growth-for-the-gambia-s-future",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Africa",
    category: "Environment",
    level: "Intermediate",
    summary: {
      en: "The World Bank’s update on The Gambia links climate resilience with jobs and long-term growth. It highlights how flooding, heat stress, coastal erosion, agriculture, finance, electricity, roads, and tourism all shape development choices.",
      zh: "世界银行关于冈比亚的更新把气候韧性与就业和长期增长联系起来。它强调洪水、热压力、海岸侵蚀、农业、金融、电力、道路和旅游都会影响发展选择。",
      yue: "世界銀行關於岡比亞嘅更新將氣候韌性同就業、長期增長連繫起嚟。佢強調洪水、熱壓力、海岸侵蝕、農業、金融、電力、道路同旅遊都會影響發展選擇。",
    },
    whyItMatters: {
      en: "This is useful for IELTS because it shows climate change as an economic and employment issue, not only an environmental one.",
      zh: "这个主题对雅思很有用，因为它展示气候变化不仅是环境问题，也是经济和就业问题。",
      yue: "呢個題目對雅思好有用，因為佢展示氣候變化唔只係環境問題，亦係經濟同就業問題。",
    },
    keyVocabulary: [
      {
        word: "climate resilience",
        meaning: {
          en: "the ability to prepare for and recover from climate risks",
          zh: "准备并从气候风险中恢复的能力",
          yue: "準備並由氣候風險中恢復嘅能力",
        },
      },
      {
        word: "livelihoods",
        meaning: {
          en: "the ways people earn a living",
          zh: "人们谋生的方式",
          yue: "人哋謀生嘅方式",
        },
      },
      {
        word: "blended finance",
        meaning: {
          en: "using public and private money together to support investment",
          zh: "结合公共和私人资金来支持投资",
          yue: "結合公共同私人資金嚟支持投資",
        },
      },
    ],
    usefulExpression: {
      en: "Climate policy can protect both people and productivity.",
      zh: "气候政策可以同时保护民众和生产率。",
      yue: "氣候政策可以同時保護民眾同生產率。",
    },
    usefulExpressionExplanation: {
      en: "Use this sentence to connect environmental action with jobs, incomes, and economic stability.",
      zh: "这个句子适合把环境行动与就业、收入和经济稳定联系起来。",
      yue: "呢句適合將環境行動同就業、收入同經濟穩定連繫起嚟。",
    },
    discussionQuestion: {
      en: "Should climate investment focus first on infrastructure, agriculture, or jobs?",
      zh: "气候投资应该首先关注基础设施、农业还是就业？",
      yue: "氣候投資應該首先關注基礎設施、農業定就業？",
    },
    writingPrompt: {
      en: "Climate change is increasingly affecting economic development. What can governments do to protect jobs and long-term growth?",
      zh: "气候变化正越来越多地影响经济发展。政府可以做些什么来保护就业和长期增长？",
      yue: "氣候變化正越嚟越多影響經濟發展。政府可以做啲咩去保護就業同長期增長？",
    },
  },
  {
    id: "2026-w19-information-war-csis",
    title: "How to Lose an Information War in 10 Days",
    titleNote: {
      en: "Reading focus: disinformation, public diplomacy, and digital media.",
      zh: "标题说明：这篇适合练习虚假信息、公共外交和数字媒体表达。",
      yue: "標題說明：呢篇適合練習虛假資訊、公共外交同數碼媒體表達。",
    },
    source: "CSIS",
    sourceUrl: "https://www.csis.org/analysis/how-lose-information-war-10-days",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Global",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This CSIS commentary explains how online narratives, memes, and coordinated accounts can shape public understanding during conflict. It argues that battlefield success may not translate into an information advantage.",
      zh: "这篇 CSIS 评论解释在线叙事、表情包和协同账号如何在冲突期间影响公众理解，并指出战场成功不一定能转化为信息优势。",
      yue: "呢篇 CSIS 評論解釋網上敘事、迷因同協同帳號點樣喺衝突期間影響公眾理解，並指出戰場成功唔一定可以轉化為資訊優勢。",
    },
    whyItMatters: {
      en: "It helps IELTS learners discuss media literacy, trust, war reporting, social platforms, and the speed of modern communication.",
      zh: "它可以帮助雅思学习者讨论媒体素养、信任、战争报道、社交平台和现代传播速度。",
      yue: "佢可以幫雅思學習者討論媒體素養、信任、戰爭報道、社交平台同現代傳播速度。",
    },
    keyVocabulary: [
      {
        word: "disinformation",
        meaning: {
          en: "false information spread deliberately to mislead people",
          zh: "故意传播、用来误导他人的虚假信息",
          yue: "故意傳播、用嚟誤導他人嘅虛假資訊",
        },
      },
      {
        word: "public diplomacy",
        meaning: {
          en: "communication aimed at influencing foreign publics",
          zh: "旨在影响外国公众的沟通方式",
          yue: "旨在影響外國公眾嘅溝通方式",
        },
      },
      {
        word: "narrative",
        meaning: {
          en: "a way of explaining events that shapes how people understand them",
          zh: "塑造人们理解事件方式的叙事",
          yue: "塑造人哋理解事件方式嘅敘事",
        },
      },
    ],
    usefulExpression: {
      en: "Facts alone may not be enough to shape public opinion.",
      zh: "仅有事实可能不足以塑造公众舆论。",
      yue: "單靠事實可能唔足以塑造公眾輿論。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing why communication style, timing, and trust also matter.",
      zh: "当讨论为什么沟通方式、时机和信任也很重要时，可以使用这个表达。",
      yue: "當討論點解溝通方式、時機同信任都重要，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "How can ordinary people avoid being misled by online information during a crisis?",
      zh: "普通人在危机期间如何避免被网络信息误导？",
      yue: "普通人喺危機期間點樣避免被網上資訊誤導？",
    },
    writingPrompt: {
      en: "Social media has made it harder for people to know what information to trust. To what extent do you agree or disagree?",
      zh: "社交媒体让人们更难判断哪些信息值得信任。你在多大程度上同意或不同意？",
      yue: "社交媒體令人更難判斷邊啲資訊值得信任。你喺幾大程度上同意或者唔同意？",
    },
  },
  {
    id: "2026-w19-taiwan-pressure-csis",
    title: "The Geometry of Coercion: Tracking the PRC’s Maritime and Air Pressure on Taiwan",
    titleNote: {
      en: "Reading focus: open-source data, security pressure, and regional stability.",
      zh: "标题说明：这篇适合练习开源数据、安全压力和地区稳定相关表达。",
      yue: "標題說明：呢篇適合練習開源數據、安全壓力同地區穩定相關表達。",
    },
    source: "CSIS",
    sourceUrl: "https://www.csis.org/analysis/geometry-coercion-tracking-prcs-maritime-and-air-pressure-taiwan",
    sourceType: "Research",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Asia",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This CSIS report uses open-source vessel and aircraft activity data to measure pressure around Taiwan. It introduces a framework for tracking proximity, frequency, and intensity over time.",
      zh: "这份 CSIS 报告使用开源船只和飞机活动数据来衡量台湾周边压力，并提出一个追踪距离、频率和强度变化的框架。",
      yue: "呢份 CSIS 報告使用開源船隻同飛機活動數據衡量台灣周邊壓力，並提出一個追蹤距離、頻率同強度變化嘅框架。",
    },
    whyItMatters: {
      en: "It is useful for IELTS discussions about data, security, international relations, and how evidence can support policy decisions.",
      zh: "它适合用于雅思中关于数据、安全、国际关系以及证据如何支持政策决策的讨论。",
      yue: "佢適合用於雅思入面關於數據、安全、國際關係，以及證據點樣支持政策決策嘅討論。",
    },
    keyVocabulary: [
      {
        word: "coercion",
        meaning: {
          en: "pressure used to force someone to act in a certain way",
          zh: "迫使某方按特定方式行动的压力",
          yue: "迫使某方按特定方式行動嘅壓力",
        },
      },
      {
        word: "open-source data",
        meaning: {
          en: "publicly available information that can be analyzed",
          zh: "可以被分析的公开信息",
          yue: "可以被分析嘅公開資訊",
        },
      },
      {
        word: "readiness",
        meaning: {
          en: "the state of being prepared for action",
          zh: "为行动做好准备的状态",
          yue: "為行動做好準備嘅狀態",
        },
      },
    ],
    usefulExpression: {
      en: "Data can make gradual pressure more visible.",
      zh: "数据可以让渐进式压力变得更可见。",
      yue: "數據可以令漸進式壓力變得更可見。",
    },
    usefulExpressionExplanation: {
      en: "Use this to describe how numbers and maps can reveal patterns that are hard to see day by day.",
      zh: "这个表达可用于说明数字和地图如何揭示日常难以看出的模式。",
      yue: "呢個表達可用於說明數字同地圖點樣揭示日常難以睇出嘅模式。",
    },
    discussionQuestion: {
      en: "Can public data help reduce misunderstanding in international security disputes?",
      zh: "公开数据能否帮助减少国际安全争端中的误解？",
      yue: "公開數據可唔可以幫助減少國際安全爭端入面嘅誤解？",
    },
    writingPrompt: {
      en: "Some people believe open data improves public understanding of global conflicts. Others think it can increase tension. Discuss both views and give your opinion.",
      zh: "有人认为开放数据能提升公众对全球冲突的理解，也有人认为它可能加剧紧张局势。讨论双方观点并给出你的看法。",
      yue: "有人認為開放數據可以提升公眾對全球衝突嘅理解，亦有人認為佢可能加劇緊張局勢。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w19-economic-statistics-brookings",
    title: "What Does Successful Innovation in Headline Economic Statistics Look Like?",
    titleNote: {
      en: "Reading focus: economic data, trust, privacy, and public decision-making.",
      zh: "标题说明：这篇适合练习经济数据、信任、隐私和公共决策表达。",
      yue: "標題說明：呢篇適合練習經濟數據、信任、私隱同公共決策表達。",
    },
    source: "Brookings",
    sourceUrl: "https://www.brookings.edu/articles/what-does-successful-innovation-in-headline-economic-statistics-look-like/",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Americas",
    category: "Economy",
    level: "Advanced",
    summary: {
      en: "This Brookings article examines how official economic statistics can modernize without losing accuracy, privacy, accessibility, and public trust. It is especially useful for learning how data systems support policy decisions.",
      zh: "这篇 Brookings 文章探讨官方经济统计如何在现代化的同时保持准确性、隐私、可获得性和公众信任。它特别适合学习数据系统如何支持政策决策。",
      yue: "呢篇 Brookings 文章探討官方經濟統計點樣喺現代化同時保持準確性、私隱、可獲得性同公眾信任。佢特別適合學習數據系統點樣支持政策決策。",
    },
    whyItMatters: {
      en: "IELTS essays often ask about technology, public policy, and trust. Economic statistics show why data quality matters for decisions that affect daily life.",
      zh: "雅思作文经常涉及科技、公共政策和信任。经济统计展示了数据质量为何会影响日常生活相关决策。",
      yue: "雅思作文經常涉及科技、公共政策同信任。經濟統計展示咗數據質素點解會影響日常生活相關決策。",
    },
    keyVocabulary: [
      {
        word: "headline statistics",
        meaning: {
          en: "major economic numbers that are widely reported, such as GDP or inflation",
          zh: "被广泛报道的重要经济数据，如 GDP 或通胀",
          yue: "被廣泛報道嘅重要經濟數據，例如 GDP 或通脹",
        },
      },
      {
        word: "data governance",
        meaning: {
          en: "rules for managing, protecting, and using data",
          zh: "管理、保护和使用数据的规则",
          yue: "管理、保護同使用數據嘅規則",
        },
      },
      {
        word: "usability",
        meaning: {
          en: "how easy something is to use effectively",
          zh: "某物被有效使用的便利程度",
          yue: "某物被有效使用嘅便利程度",
        },
      },
    ],
    usefulExpression: {
      en: "Innovation should improve quality, not just reduce costs.",
      zh: "创新应提升质量，而不仅仅是降低成本。",
      yue: "創新應該提升質素，而唔只係降低成本。",
    },
    usefulExpressionExplanation: {
      en: "Use this when arguing that reform should be judged by long-term usefulness, not only short-term savings.",
      zh: "当论证改革应以长期实用性而非短期节省来评估时，可以使用这个表达。",
      yue: "當論證改革應以長期實用性而唔係短期節省嚟評估，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "Why is public trust important when governments publish economic data?",
      zh: "政府发布经济数据时，为什么公众信任很重要？",
      yue: "政府發布經濟數據時，點解公眾信任好重要？",
    },
    writingPrompt: {
      en: "Governments are using more digital data to make decisions. What are the benefits and risks of this trend?",
      zh: "政府正使用更多数字数据来做决策。这一趋势有哪些好处和风险？",
      yue: "政府正使用更多數碼數據嚟做決策。呢個趨勢有咩好處同風險？",
    },
  },
  {
    id: "2026-w19-executive-orders-society-brookings",
    title: "How Executive Orders Are Reshaping Black America",
    titleNote: {
      en: "Reading focus: civil rights, voting access, public policy, and social equality.",
      zh: "标题说明：这篇适合练习公民权利、投票机会、公共政策和社会平等表达。",
      yue: "標題說明：呢篇適合練習公民權利、投票機會、公共政策同社會平等表達。",
    },
    source: "Brookings",
    sourceUrl: "https://www.brookings.edu/articles/how-executive-orders-are-reshaping-black-america/",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-05",
    week: "2026 Week 19",
    region: "Americas",
    category: "Society",
    level: "Advanced",
    summary: {
      en: "This Brookings discussion looks at how executive actions, voting rights, immigration enforcement, DEI policy, and federal workforce changes may affect Black communities in the United States.",
      zh: "这篇 Brookings 讨论关注行政命令、投票权、移民执法、DEI 政策和联邦劳动力变化如何影响美国黑人社区。",
      yue: "呢篇 Brookings 討論關注行政命令、投票權、移民執法、DEI 政策同聯邦勞動力變化點樣影響美國黑人社區。",
    },
    whyItMatters: {
      en: "It provides language for IELTS topics about democracy, equal opportunity, representation, and the role of civic participation.",
      zh: "它为雅思中关于民主、机会平等、代表性和公民参与作用的话题提供表达素材。",
      yue: "佢為雅思入面關於民主、機會平等、代表性同公民參與作用嘅題目提供表達素材。",
    },
    keyVocabulary: [
      {
        word: "voting rights",
        meaning: {
          en: "the legal right to vote in elections",
          zh: "在选举中投票的法律权利",
          yue: "喺選舉中投票嘅法律權利",
        },
      },
      {
        word: "representation",
        meaning: {
          en: "the presence of people or groups in decision-making bodies",
          zh: "人群或群体在决策机构中的代表性",
          yue: "人群或者群體喺決策機構入面嘅代表性",
        },
      },
      {
        word: "civic participation",
        meaning: {
          en: "taking part in public life, community action, or politics",
          zh: "参与公共生活、社区行动或政治事务",
          yue: "參與公共生活、社區行動或者政治事務",
        },
      },
    ],
    usefulExpression: {
      en: "Policy changes can have unequal effects across communities.",
      zh: "政策变化可能对不同社区产生不平等影响。",
      yue: "政策變化可能對唔同社區產生不平等影響。",
    },
    usefulExpressionExplanation: {
      en: "Use this to discuss why the same rule may affect groups differently because of history, income, geography, or access.",
      zh: "这个表达适合说明为什么同一规则会因历史、收入、地理位置或资源获取差异而对群体产生不同影响。",
      yue: "呢個表達適合說明點解同一規則會因歷史、收入、地理位置或者資源獲取差異而對群體產生唔同影響。",
    },
    discussionQuestion: {
      en: "What can local communities do when national policy changes affect their rights or opportunities?",
      zh: "当国家政策变化影响权利或机会时，地方社区可以做些什么？",
      yue: "當國家政策變化影響權利或者機會時，地方社區可以做啲咩？",
    },
    writingPrompt: {
      en: "Some people think civic participation is the best way to protect equal rights. Others believe stronger national laws are more important. Discuss both views and give your opinion.",
      zh: "有人认为公民参与是保护平等权利的最佳方式，也有人认为更强有力的国家法律更重要。讨论双方观点并给出你的看法。",
      yue: "有人認為公民參與係保護平等權利嘅最佳方式，亦有人認為更強有力嘅國家法律更重要。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w18-climate-finance-cfr",
    title: "Understanding the Global Push for Climate Finance",
    titleNote: {
      en: "Reading focus: global responsibility and climate policy funding.",
      zh: "标题说明：这篇适合练习全球责任与气候政策资金相关表达。",
      yue: "標題說明：呢篇適合練習全球責任同氣候政策資金相關表達。",
    },
    source: "Council on Foreign Relations",
    sourceUrl: "https://www.cfr.org/backgrounders/understanding-global-push-climate-finance",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-02",
    week: "2026 Week 18",
    region: "Global",
    category: "Environment",
    level: "Advanced",
    summary: {
      en: "Climate finance helps countries pay for clean energy, adaptation, and resilience. The source explains why current funding is still below what vulnerable countries need.",
      zh: "气候融资帮助各国支付清洁能源、适应措施和韧性建设的成本。该资料说明为什么当前资金仍低于脆弱国家的实际需求。",
      yue: "氣候融資幫助各國支付清潔能源、適應措施同韌性建設嘅成本。呢篇資料解釋點解現有資金仍然低過脆弱國家嘅需要。",
    },
    whyItMatters: {
      en: "This topic is useful for IELTS questions about responsibility, international cooperation, public finance, and environmental risk.",
      zh: "这个主题适合练习雅思中关于责任、国际合作、公共财政和环境风险的问题。",
      yue: "呢個題目適合練習雅思入面關於責任、國際合作、公共財政同環境風險嘅問題。",
    },
    keyVocabulary: [
      {
        word: "resilience",
        meaning: {
          en: "the ability to recover from shocks or difficult conditions",
          zh: "从冲击或困难环境中恢复的能力",
          yue: "由衝擊或者困難情況中恢復嘅能力",
        },
      },
      {
        word: "mitigation",
        meaning: {
          en: "actions that reduce the causes or severity of a problem",
          zh: "减少问题成因或严重程度的行动",
          yue: "減少問題成因或者嚴重程度嘅行動",
        },
      },
      {
        word: "adaptation",
        meaning: {
          en: "changes made to deal with new conditions",
          zh: "为应对新环境而做出的调整",
          yue: "為咗應對新環境而作出嘅調整",
        },
      },
    ],
    usefulExpression: {
      en: "The funding gap remains a major obstacle.",
      zh: "资金缺口仍然是一个主要障碍。",
      yue: "資金缺口仍然係一個主要障礙。",
    },
    usefulExpressionExplanation: {
      en: "Use this phrase when a problem cannot be solved because available money is not enough.",
      zh: "当某个问题因为资金不足而难以解决时，可以使用这个表达。",
      yue: "當一個問題因為資金唔夠而難以解決，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "Should richer countries contribute more to climate adaptation in poorer countries?",
      zh: "较富裕国家是否应该为较贫困国家的气候适应投入更多资金？",
      yue: "較富裕國家係咪應該為較貧困國家嘅氣候適應投入更多資金？",
    },
    writingPrompt: {
      en: "Some people believe climate finance should be a global responsibility. Others think each country should fund its own climate policies. Discuss both views and give your opinion.",
      zh: "有人认为气候融资应是全球共同责任，也有人认为各国应自行承担气候政策成本。讨论双方观点并给出你的看法。",
      yue: "有人認為氣候融資應該係全球共同責任，亦有人認為各國應該自己承擔氣候政策成本。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w18-ai-schools-brookings",
    title: "AI's Future for Students Is in Our Hands",
    titleNote: {
      en: "Reading focus: how schools can shape responsible AI learning.",
      zh: "标题说明：这篇关注学校如何引导负责任的 AI 学习。",
      yue: "標題說明：呢篇關注學校點樣引導負責任嘅 AI 學習。",
    },
    source: "Brookings",
    sourceUrl: "https://www.brookings.edu/articles/ais-future-for-students-is-in-our-hands/",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-01",
    week: "2026 Week 18",
    region: "Global",
    category: "Technology",
    level: "Intermediate",
    summary: {
      en: "The article looks at how artificial intelligence may affect student learning, agency, and wellbeing. It argues that schools need thoughtful rules rather than simple enthusiasm or fear.",
      zh: "文章探讨人工智能如何影响学生学习、自主性和身心发展，并指出学校需要审慎规则，而不是单纯兴奋或恐惧。",
      yue: "文章探討人工智能點樣影響學生學習、自主性同身心發展，並指出學校需要審慎規則，而唔係單純興奮或者恐懼。",
    },
    whyItMatters: {
      en: "AI in education is a high-value IELTS topic because it connects technology, fairness, learning quality, and future employment.",
      zh: "教育中的人工智能是高频雅思话题，因为它连接科技、公平、学习质量和未来就业。",
      yue: "教育入面嘅人工智能係高頻雅思題目，因為佢連接科技、公平、學習質素同未來就業。",
    },
    keyVocabulary: [
      {
        word: "student agency",
        meaning: {
          en: "students' ability to make choices and take responsibility for learning",
          zh: "学生作出选择并对学习负责的能力",
          yue: "學生作出選擇並對學習負責嘅能力",
        },
      },
      {
        word: "wellbeing",
        meaning: {
          en: "physical, mental, and emotional health",
          zh: "身体、心理和情绪健康",
          yue: "身體、心理同情緒健康",
        },
      },
      {
        word: "thoughtful rules",
        meaning: {
          en: "carefully designed guidelines",
          zh: "经过仔细设计的规则",
          yue: "經過仔細設計嘅規則",
        },
      },
    ],
    usefulExpression: {
      en: "The benefits depend on responsible use.",
      zh: "这些好处取决于负责任的使用方式。",
      yue: "呢啲好處取決於負責任嘅使用方式。",
    },
    usefulExpressionExplanation: {
      en: "This expression helps balance advantages with conditions or limits.",
      zh: "这个表达适合用来说明优势成立的条件或限制。",
      yue: "呢個表達適合用嚟說明優勢成立嘅條件或者限制。",
    },
    discussionQuestion: {
      en: "Can AI improve learning without making students too dependent on it?",
      zh: "人工智能能否改善学习，而不让学生过度依赖它？",
      yue: "人工智能可唔可以改善學習，而唔令學生過度依賴佢？",
    },
    writingPrompt: {
      en: "Artificial intelligence is becoming common in education. Do the advantages of AI learning tools outweigh the disadvantages?",
      zh: "人工智能在教育中越来越常见。AI 学习工具的优点是否大于缺点？",
      yue: "人工智能喺教育入面越嚟越常見。AI 學習工具嘅優點係咪大過缺點？",
    },
  },
  {
    id: "2026-w18-renewables-owid",
    title: "Renewable Energy",
    titleNote: {
      en: "Reading focus: using data to describe energy trends and transitions.",
      zh: "标题说明：这篇适合练习用数据描述能源趋势与转型。",
      yue: "標題說明：呢篇適合練習用數據描述能源趨勢同轉型。",
    },
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/renewable-energy",
    sourceType: "Data",
    isFree: true,
    date: "2026-04-30",
    week: "2026 Week 18",
    region: "Global",
    category: "Environment",
    level: "Intermediate",
    summary: {
      en: "This data page explains how renewable energy is growing and how solar, wind, hydropower, and other sources contribute to electricity and total energy use.",
      zh: "这个数据页面解释可再生能源如何增长，以及太阳能、风能、水电等能源如何影响电力和整体能源使用。",
      yue: "呢個數據頁解釋可再生能源點樣增長，以及太陽能、風能、水電等能源點樣影響電力同整體能源使用。",
    },
    whyItMatters: {
      en: "IELTS learners can practise describing charts, trends, proportions, and environmental policy trade-offs.",
      zh: "雅思学习者可以练习描述图表、趋势、比例和环境政策取舍。",
      yue: "雅思學習者可以練習描述圖表、趨勢、比例同環境政策取捨。",
    },
    keyVocabulary: [
      {
        word: "energy mix",
        meaning: {
          en: "the combination of energy sources a country or system uses",
          zh: "一个国家或系统使用的能源组合",
          yue: "一個國家或者系統使用嘅能源組合",
        },
      },
      {
        word: "decarbonize",
        meaning: {
          en: "to reduce carbon emissions from an activity or system",
          zh: "减少某项活动或系统的碳排放",
          yue: "減少某項活動或者系統嘅碳排放",
        },
      },
      {
        word: "electricity mix",
        meaning: {
          en: "the sources used to generate electricity",
          zh: "用于发电的能源来源组合",
          yue: "用嚟發電嘅能源來源組合",
        },
      },
    ],
    usefulExpression: {
      en: "The data suggests a gradual but uneven transition.",
      zh: "数据表明转型正在逐步推进，但并不均衡。",
      yue: "數據顯示轉型正逐步推進，但並唔均衡。",
    },
    usefulExpressionExplanation: {
      en: "Use this sentence when progress exists but differs across countries, groups, or sectors.",
      zh: "当进展存在但在国家、群体或行业之间不一致时，可以使用这个句子。",
      yue: "當有進展但喺國家、群體或者行業之間唔一致，可以用呢句。",
    },
    discussionQuestion: {
      en: "Which renewable energy source is most suitable for your city or region?",
      zh: "哪种可再生能源最适合你所在的城市或地区？",
      yue: "邊種可再生能源最適合你所在嘅城市或者地區？",
    },
    writingPrompt: {
      en: "Many governments are investing in renewable energy. What are the benefits and challenges of this trend?",
      zh: "许多政府正在投资可再生能源。这一趋势有哪些好处和挑战？",
      yue: "好多政府正投資可再生能源。呢個趨勢有咩好處同挑戰？",
    },
  },
  {
    id: "2026-w18-inflation-imf",
    title: "Global Inflationary Episode Offers Lessons for Monetary Policy",
    titleNote: {
      en: "Reading focus: inflation causes, central bank policy, and living costs.",
      zh: "标题说明：这篇适合练习通胀原因、央行政策和生活成本。",
      yue: "標題說明：呢篇適合練習通脹原因、央行政策同生活成本。",
    },
    source: "IMF Blog",
    sourceUrl: "https://www.imf.org/en/blogs/articles/2024/10/16/global-inflationary-episode-offers-lessons-for-monetary-policy",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-04-29",
    week: "2026 Week 18",
    region: "Global",
    category: "Economy",
    level: "Advanced",
    summary: {
      en: "The IMF explains how supply bottlenecks, strong demand, and commodity shocks contributed to recent inflation. It also discusses what central banks can learn from the episode.",
      zh: "IMF 解释供应瓶颈、强劲需求和大宗商品冲击如何推动近期通胀，并讨论央行可以从中吸取什么经验。",
      yue: "IMF 解釋供應瓶頸、強勁需求同大宗商品衝擊點樣推動近期通脹，並討論央行可以吸取咩經驗。",
    },
    whyItMatters: {
      en: "This source supports IELTS writing about living costs, government policy, central banks, and economic stability.",
      zh: "该资料适合用于雅思写作中关于生活成本、政府政策、央行和经济稳定的话题。",
      yue: "呢份資料適合用於雅思寫作入面關於生活成本、政府政策、央行同經濟穩定嘅題目。",
    },
    keyVocabulary: [
      {
        word: "bottleneck",
        meaning: {
          en: "a point where progress slows because capacity is limited",
          zh: "因能力有限而导致进程变慢的环节",
          yue: "因能力有限而令進程變慢嘅環節",
        },
      },
      {
        word: "commodity shock",
        meaning: {
          en: "a sudden change in prices for basic goods such as oil, food, or metals",
          zh: "石油、食品或金属等基础商品价格的突然变化",
          yue: "石油、食品或者金屬等基礎商品價格嘅突然變化",
        },
      },
      {
        word: "monetary policy",
        meaning: {
          en: "central bank actions that influence interest rates and money supply",
          zh: "央行影响利率和货币供应的政策行动",
          yue: "央行影響利率同貨幣供應嘅政策行動",
        },
      },
    ],
    usefulExpression: {
      en: "Price pressures can spread from one sector to the wider economy.",
      zh: "价格压力可能从一个行业扩散到整个经济。",
      yue: "價格壓力可能由一個行業擴散到成個經濟。",
    },
    usefulExpressionExplanation: {
      en: "This is helpful for explaining how a small economic problem becomes broader.",
      zh: "这个表达适合解释一个小范围经济问题如何扩大。",
      yue: "呢個表達適合解釋一個細範圍經濟問題點樣擴大。",
    },
    discussionQuestion: {
      en: "Should central banks focus more on controlling inflation or protecting jobs?",
      zh: "央行应更重视控制通胀，还是保护就业？",
      yue: "央行應該更重視控制通脹，定係保護就業？",
    },
    writingPrompt: {
      en: "The cost of living has increased in many countries. What are the causes, and what measures can governments take?",
      zh: "许多国家的生活成本上升。原因是什么？政府可以采取哪些措施？",
      yue: "好多國家嘅生活成本上升。原因係咩？政府可以採取咩措施？",
    },
  },
  {
    id: "2026-w17-public-spaces-world-bank",
    title: "The Hidden Wealth of Cities",
    titleNote: {
      en: "Reading focus: public space, city planning, and quality of life.",
      zh: "标题说明：这篇适合练习公共空间、城市规划和生活质量。",
      yue: "標題說明：呢篇適合練習公共空間、城市規劃同生活質素。",
    },
    source: "World Bank Open Knowledge Repository",
    sourceUrl: "https://openknowledge.worldbank.org/entities/publication/3d291575-ce4d-5acc-98c5-7304f8a4536a",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-04-25",
    week: "2026 Week 17",
    region: "Global",
    category: "Society",
    level: "Intermediate",
    summary: {
      en: "This public report examines how parks, squares, streets, and other shared spaces can improve city life, economic activity, and social inclusion.",
      zh: "这份公开报告研究公园、广场、街道等公共空间如何改善城市生活、经济活动和社会包容。",
      yue: "呢份公開報告研究公園、廣場、街道等公共空間點樣改善城市生活、經濟活動同社會包容。",
    },
    whyItMatters: {
      en: "It supports IELTS topics about urban planning, public health, transport, inequality, and quality of life.",
      zh: "它适合用于城市规划、公共健康、交通、不平等和生活质量等雅思话题。",
      yue: "佢適合用於城市規劃、公共健康、交通、不平等同生活質素等雅思題目。",
    },
    keyVocabulary: [
      {
        word: "public space",
        meaning: {
          en: "an area that people can use collectively, such as a park or square",
          zh: "人们可以共同使用的区域，如公园或广场",
          yue: "人哋可以共同使用嘅地方，例如公園或者廣場",
        },
      },
      {
        word: "social inclusion",
        meaning: {
          en: "making sure different groups can participate in society",
          zh: "确保不同群体都能参与社会生活",
          yue: "確保唔同群體都可以參與社會生活",
        },
      },
      {
        word: "urban design",
        meaning: {
          en: "the planning and shaping of city spaces",
          zh: "城市空间的规划与设计",
          yue: "城市空間嘅規劃同設計",
        },
      },
    ],
    usefulExpression: {
      en: "Public spaces are not only amenities but also social infrastructure.",
      zh: "公共空间不仅是便利设施，也是社会基础设施。",
      yue: "公共空間唔單止係便利設施，亦係社會基礎設施。",
    },
    usefulExpressionExplanation: {
      en: "Use this to show that something has deeper social value beyond comfort or appearance.",
      zh: "这个表达可用于说明某事物除了舒适或外观之外，还有更深层的社会价值。",
      yue: "呢個表達可以用嚟說明某樣嘢除咗舒適或者外觀之外，仲有更深層社會價值。",
    },
    discussionQuestion: {
      en: "What kinds of public spaces does your city need most?",
      zh: "你所在的城市最需要哪类公共空间？",
      yue: "你所在嘅城市最需要邊類公共空間？",
    },
    writingPrompt: {
      en: "Some people think governments should spend more money on parks and public spaces. To what extent do you agree or disagree?",
      zh: "有人认为政府应在公园和公共空间上投入更多资金。你在多大程度上同意或不同意？",
      yue: "有人認為政府應該喺公園同公共空間投入更多資金。你喺幾大程度上同意或者唔同意？",
    },
  },
  {
    id: "2026-w17-youth-work-pew",
    title: "Young Workers Express Lower Levels of Job Satisfaction Than Older Ones",
    titleNote: {
      en: "Reading focus: work satisfaction, generations, and career expectations.",
      zh: "标题说明：这篇适合练习工作满意度、代际差异和职业期待。",
      yue: "標題說明：呢篇適合練習工作滿意度、代際差異同職業期待。",
    },
    source: "Pew Research Center",
    sourceUrl: "https://www.pewresearch.org/short-reads/2023/05/25/young-workers-express-lower-levels-of-job-satisfaction-than-older-ones-but-most-are-content-with-their-job/",
    sourceType: "Research",
    isFree: true,
    date: "2026-04-24",
    week: "2026 Week 17",
    region: "Americas",
    category: "Society",
    level: "Intermediate",
    summary: {
      en: "Pew reports that younger workers are less likely than older workers to express high job satisfaction, although most still describe themselves as at least somewhat satisfied.",
      zh: "Pew 的研究显示，年轻员工比年长员工更少表达高度工作满意度，尽管多数人仍表示自己至少比较满意。",
      yue: "Pew 嘅研究顯示，年輕員工比年長員工較少表達高度工作滿意度，雖然多數人仍然話自己至少比較滿意。",
    },
    whyItMatters: {
      en: "This is useful for IELTS discussions about motivation, career identity, working conditions, and generational differences.",
      zh: "该主题适合讨论动机、职业认同、工作条件和代际差异。",
      yue: "呢個題目適合討論動機、職業認同、工作條件同代際差異。",
    },
    keyVocabulary: [
      {
        word: "job satisfaction",
        meaning: {
          en: "how happy a person feels about their work",
          zh: "一个人对自己工作的满意程度",
          yue: "一個人對自己工作嘅滿意程度",
        },
      },
      {
        word: "career identity",
        meaning: {
          en: "how strongly a job shapes a person's sense of self",
          zh: "职业对个人自我认同的影响程度",
          yue: "職業對個人自我認同嘅影響程度",
        },
      },
      {
        word: "generation gap",
        meaning: {
          en: "differences in attitudes between age groups",
          zh: "不同年龄群体之间的态度差异",
          yue: "唔同年齡群體之間嘅態度差異",
        },
      },
    ],
    usefulExpression: {
      en: "Workplace expectations have changed across generations.",
      zh: "不同世代的职场期待已经发生变化。",
      yue: "唔同世代嘅職場期待已經發生變化。",
    },
    usefulExpressionExplanation: {
      en: "Use this for employment topics that compare younger and older workers.",
      zh: "当就业话题涉及年轻员工与年长员工比较时，可以使用这个表达。",
      yue: "當就業題目涉及年輕員工同年長員工比較時，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "What matters most in a job: salary, flexibility, purpose, or promotion?",
      zh: "一份工作中最重要的是薪资、灵活性、意义还是晋升？",
      yue: "一份工作入面最重要係薪金、靈活性、意義定晉升？",
    },
    writingPrompt: {
      en: "Many young people want jobs that offer flexibility and personal meaning. Is this a positive or negative trend?",
      zh: "许多年轻人希望工作具备灵活性和个人意义。这是积极趋势还是消极趋势？",
      yue: "好多年輕人希望工作具備靈活性同個人意義。呢個係積極趨勢定消極趨勢？",
    },
  },
  {
    id: "2026-w17-climate-remittances-carnegie",
    title: "How the Global Migration Crackdown Affects Climate Finance",
    titleNote: {
      en: "Reading focus: migration, remittances, and climate resilience.",
      zh: "标题说明：这篇适合练习移民、汇款和气候韧性之间的联系。",
      yue: "標題說明：呢篇適合練習移民、匯款同氣候韌性之間嘅連繫。",
    },
    source: "Carnegie Endowment",
    sourceUrl: "https://carnegieendowment.org/research/2025/03/how-the-global-migration-crackdown-affects-climate-finance",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-04-23",
    week: "2026 Week 17",
    region: "Global",
    category: "Migration",
    level: "Advanced",
    summary: {
      en: "This analysis links migration policy, remittances, and climate finance. It argues that money sent by migrants can matter for climate resilience, especially where formal climate funding is limited.",
      zh: "该分析将移民政策、汇款和气候融资联系起来，指出在正式气候资金有限的地方，移民汇款可能有助于气候韧性。",
      yue: "呢篇分析將移民政策、匯款同氣候融資連繫起嚟，指出正式氣候資金有限嘅地方，移民匯款可能有助氣候韌性。",
    },
    whyItMatters: {
      en: "The topic helps learners connect migration, development, family income, and climate adaptation in one argument.",
      zh: "这个主题帮助学习者把移民、发展、家庭收入和气候适应联系到同一个论点中。",
      yue: "呢個題目幫助學習者將移民、發展、家庭收入同氣候適應連繫到同一個論點。",
    },
    keyVocabulary: [
      {
        word: "remittance",
        meaning: {
          en: "money sent by migrants to family or communities in another country",
          zh: "移民寄给另一个国家的家庭或社区的钱",
          yue: "移民寄畀另一個國家嘅家庭或者社區嘅錢",
        },
      },
      {
        word: "diaspora",
        meaning: {
          en: "people from one country or culture living in different parts of the world",
          zh: "散居在世界各地的某国或某文化群体",
          yue: "散居喺世界各地嘅某國或者某文化群體",
        },
      },
      {
        word: "policy coherence",
        meaning: {
          en: "making different policies work together rather than conflict",
          zh: "让不同政策相互配合而不是相互冲突",
          yue: "令唔同政策互相配合，而唔係互相衝突",
        },
      },
    ],
    usefulExpression: {
      en: "Policies in one area can create unintended effects in another.",
      zh: "一个领域的政策可能在另一个领域产生意外影响。",
      yue: "一個領域嘅政策可能喺另一個領域產生意外影響。",
    },
    usefulExpressionExplanation: {
      en: "Use this to discuss complex links between immigration, finance, environment, or development.",
      zh: "这个表达适合讨论移民、金融、环境或发展之间的复杂联系。",
      yue: "呢個表達適合討論移民、金融、環境或者發展之間嘅複雜連繫。",
    },
    discussionQuestion: {
      en: "Can migrant communities play a role in climate adaptation?",
      zh: "移民群体能否在气候适应中发挥作用？",
      yue: "移民群體可唔可以喺氣候適應入面發揮作用？",
    },
    writingPrompt: {
      en: "Migration brings both benefits and challenges to countries. Discuss both views and give your opinion.",
      zh: "移民给国家带来好处，也带来挑战。讨论双方观点并给出你的看法。",
      yue: "移民畀國家帶嚟好處，亦帶嚟挑戰。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w17-water-climate-csis",
    title: "Water and Global Climate Action at COP28",
    titleNote: {
      en: "Reading focus: water security, adaptation, and climate action.",
      zh: "标题说明：这篇适合练习水安全、适应措施和气候行动。",
      yue: "標題說明：呢篇適合練習水安全、適應措施同氣候行動。",
    },
    source: "CSIS",
    sourceUrl: "https://www.csis.org/analysis/water-and-global-climate-action-cop28",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-04-22",
    week: "2026 Week 17",
    region: "Global",
    category: "Environment",
    level: "Advanced",
    summary: {
      en: "CSIS explains why water management is central to climate adaptation. The analysis connects flooding, scarcity, public finance, and the needs of developing countries.",
      zh: "CSIS 解释为什么水资源管理是气候适应的核心，并将洪水、水资源短缺、公共财政和发展中国家的需求联系起来。",
      yue: "CSIS 解釋點解水資源管理係氣候適應嘅核心，並將洪水、水資源短缺、公共財政同發展中國家需要連繫起嚟。",
    },
    whyItMatters: {
      en: "Water is a practical IELTS topic for discussing cities, agriculture, public health, international aid, and climate risk.",
      zh: "水资源是实用的雅思话题，可用于讨论城市、农业、公共健康、国际援助和气候风险。",
      yue: "水資源係實用嘅雅思題目，可以用嚟討論城市、農業、公共健康、國際援助同氣候風險。",
    },
    keyVocabulary: [
      {
        word: "water scarcity",
        meaning: {
          en: "a situation where there is not enough usable water",
          zh: "可用水不足的情况",
          yue: "可用水不足嘅情況",
        },
      },
      {
        word: "flood resilience",
        meaning: {
          en: "the ability to prepare for and recover from flooding",
          zh: "为洪水做准备并从洪灾中恢复的能力",
          yue: "為洪水做準備並由洪災中恢復嘅能力",
        },
      },
      {
        word: "adaptation cost",
        meaning: {
          en: "money needed to adjust to climate impacts",
          zh: "应对气候影响所需的调整成本",
          yue: "應對氣候影響所需嘅調整成本",
        },
      },
    ],
    usefulExpression: {
      en: "Water security is closely linked to climate resilience.",
      zh: "水安全与气候韧性密切相关。",
      yue: "水安全同氣候韌性密切相關。",
    },
    usefulExpressionExplanation: {
      en: "Use this to connect an everyday resource with a wider environmental issue.",
      zh: "这个表达可用于把日常资源与更大的环境问题联系起来。",
      yue: "呢個表達可以用嚟將日常資源同更大嘅環境問題連繫起嚟。",
    },
    discussionQuestion: {
      en: "Which is more urgent for your region: preventing floods or saving water?",
      zh: "对你所在地区来说，防洪和节水哪个更紧迫？",
      yue: "對你所在地區嚟講，防洪同節水邊個更迫切？",
    },
    writingPrompt: {
      en: "Water shortages are becoming more common in many parts of the world. What are the causes, and what solutions are available?",
      zh: "世界许多地区水资源短缺越来越常见。原因是什么？有哪些解决办法？",
      yue: "世界好多地區水資源短缺越嚟越常見。原因係咩？有咩解決辦法？",
    },
  },
];

export const weeklyReadingWeeks = Array.from(new Set(weeklyReadings.map((item) => item.week)));

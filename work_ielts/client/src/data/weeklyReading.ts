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
    id: "2026-w34-food-inflation-reuters",
    title: "Food Inflation Returns to the Global Market Agenda",
    titleNote: {
      en: "Reading focus: food inflation, energy costs, supply chains, and household budgets.",
      zh: "标题说明：这篇适合练习食品通胀、能源成本、供应链和家庭预算。",
      yue: "標題說明：呢篇適合練習食品通脹、能源成本、供應鏈同家庭預算。",
    },
    source: "Reuters",
    sourceUrl: "https://currently.att.yahoo.com/att/five-heat-063710657.html",
    sourceType: "News",
    isFree: true,
    date: "2026-08-17",
    week: "2026 Week 34",
    region: "Global",
    category: "Economy",
    level: "Intermediate",
    summary: {
      en: "This Reuters market preview explains why investors are watching food inflation again. It links weather risks, energy costs, fertilizer shortages, and disruptions to grain shipments with the prices paid by households and businesses.",
      zh: "这篇 Reuters 市场前瞻解释投资者为何再次关注食品通胀。文章把天气风险、能源成本、化肥短缺和粮食运输中断与家庭和企业支付的价格联系起来。",
      yue: "呢篇 Reuters 市場前瞻解釋投資者點解再次關注食品通脹。文章將天氣風險、能源成本、化肥短缺同糧食運輸中斷，連繫到家庭同企業要支付嘅價格。",
    },
    whyItMatters: {
      en: "Food prices are useful for IELTS because they connect climate, trade, inequality, public policy, and everyday living costs.",
      zh: "食品价格是很实用的雅思主题，因为它连接气候、贸易、不平等、公共政策和日常生活成本。",
      yue: "食品價格係好實用嘅雅思題目，因為佢連接氣候、貿易、不平等、公共政策同日常生活成本。",
    },
    keyVocabulary: [
      {
        word: "food inflation",
        meaning: {
          en: "a sustained rise in the prices of food products",
          zh: "食品价格持续上涨",
          yue: "食品價格持續上升",
        },
      },
      {
        word: "supply disruption",
        meaning: {
          en: "an event that interrupts the normal movement of goods",
          zh: "打断商品正常流动的事件",
          yue: "打斷商品正常流動嘅事件",
        },
      },
      {
        word: "household budget",
        meaning: {
          en: "a plan for how a household earns and spends money",
          zh: "家庭收入与支出的预算安排",
          yue: "家庭收入同支出嘅預算安排",
        },
      },
    ],
    usefulExpression: {
      en: "Higher food prices place the greatest pressure on households with limited incomes.",
      zh: "食品价格上涨会给收入有限的家庭带来最大压力。",
      yue: "食品價格上升會對收入有限嘅家庭造成最大壓力。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing inflation, poverty, inequality, or government support in IELTS Writing Task 2.",
      zh: "讨论通胀、贫困、不平等或政府援助时，可以在雅思大作文中使用这个表达。",
      yue: "討論通脹、貧困、不平等或者政府援助時，可以喺雅思大作文用呢個表達。",
    },
    discussionQuestion: {
      en: "Should governments control essential food prices during periods of high inflation?",
      zh: "在高通胀时期，政府是否应该控制基本食品价格？",
      yue: "喺高通脹時期，政府係咪應該控制基本食品價格？",
    },
    writingPrompt: {
      en: "Rising food prices affect some groups more than others. What causes this problem, and what should governments do about it?",
      zh: "食品价格上涨对某些群体的影响更大。这个问题由什么造成？政府应该如何应对？",
      yue: "食品價格上升對某啲群體影響更大。呢個問題由咩造成？政府應該點樣應對？",
    },
  },
  {
    id: "2026-w34-bioplastics-ap",
    title: "Plastic Made from Sugar Offers an Alternative to Persistent Waste",
    titleNote: {
      en: "Background reading selected for the Week 34 pack: microplastics, bioplastics, composting, and consumer choices.",
      zh: "作为 Week 34 阅读包的背景材料收录：微塑料、生物塑料、堆肥和消费选择。",
      yue: "作為 Week 34 閱讀包嘅背景材料收錄：微塑膠、生物塑膠、堆肥同消費選擇。",
    },
    source: "AP News",
    sourceUrl: "https://apnews.com/article/biobased-biodegradable-plastics-climate-compost-838fb5b4619e5020e3c01157a312a5d8",
    sourceType: "News",
    isFree: true,
    date: "2026-08-10",
    week: "2026 Week 34",
    region: "Americas",
    category: "Environment",
    level: "Intermediate",
    summary: {
      en: "Selected as background reading for the Week 34 pack, this AP report examines plant-based polymers used to make compostable forks and packaging. It presents bioplastics as one possible response to persistent microplastic pollution while also noting cost, infrastructure, and disposal challenges.",
      zh: "这篇 AP 报道作为 Week 34 阅读包的背景材料，介绍用植物基聚合物制造可堆肥餐具和包装。文章把生物塑料视为应对持久微塑料污染的一种可能方案，同时也指出成本、基础设施和处置方面的挑战。",
      yue: "呢篇 AP 報道作為 Week 34 閱讀包嘅背景材料，介紹用植物基聚合物製造可堆肥餐具同包裝。文章將生物塑膠視為應對持久微塑膠污染嘅一種可能方案，同時亦指出成本、基礎設施同處置方面嘅挑戰。",
    },
    whyItMatters: {
      en: "The topic helps learners compare technological solutions with changes in consumption and waste-management systems.",
      zh: "这个主题帮助学习者比较技术解决方案与消费方式、废物管理系统的改变。",
      yue: "呢個題目幫學習者比較技術解決方案，同消費方式、廢物管理系統嘅改變。",
    },
    keyVocabulary: [
      {
        word: "bioplastic",
        meaning: {
          en: "plastic made partly or fully from renewable biological materials",
          zh: "部分或完全由可再生生物材料制成的塑料",
          yue: "部分或者完全由可再生生物材料製成嘅塑膠",
        },
      },
      {
        word: "compostable",
        meaning: {
          en: "able to break down into natural material under composting conditions",
          zh: "能在堆肥条件下分解为自然物质的",
          yue: "能夠喺堆肥條件下分解成自然物質嘅",
        },
      },
      {
        word: "persistent waste",
        meaning: {
          en: "waste that remains in the environment for a long time",
          zh: "长期留存在环境中的废物",
          yue: "長期留存喺環境入面嘅廢物",
        },
      },
    ],
    usefulExpression: {
      en: "A new material is only effective when the system for collecting and processing it also works.",
      zh: "只有收集和处理体系也能有效运作，新材料才真正有用。",
      yue: "只有收集同處理系統都有效運作，新材料先至真正有用。",
    },
    usefulExpressionExplanation: {
      en: "Use this to show that environmental innovation often depends on infrastructure and public behavior.",
      zh: "这个表达可用于说明环保创新往往依赖基础设施和公众行为。",
      yue: "呢個表達可以用嚟說明環保創新往往依賴基礎設施同公眾行為。",
    },
    discussionQuestion: {
      en: "Are bioplastics a meaningful solution, or do they encourage continued use of disposable products?",
      zh: "生物塑料是有意义的解决方案，还是会鼓励人们继续使用一次性产品？",
      yue: "生物塑膠係有意義嘅解決方案，定係會鼓勵人繼續使用即棄產品？",
    },
    writingPrompt: {
      en: "Some people believe new materials can solve plastic pollution, while others think reducing consumption is more important. Discuss both views and give your opinion.",
      zh: "有人认为新材料可以解决塑料污染，也有人认为减少消费更重要。讨论双方观点并给出你的看法。",
      yue: "有人認為新材料可以解決塑膠污染，亦有人認為減少消費更重要。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w34-youth-ai-governance-un",
    title: "Young People Call for a Role in Shaping AI Standards",
    titleNote: {
      en: "Background reading selected for the Week 34 pack: youth participation, AI governance, education, and digital inclusion.",
      zh: "作为 Week 34 阅读包的背景材料收录：青年参与、AI 治理、教育和数字包容。",
      yue: "作為 Week 34 閱讀包嘅背景材料收錄：青年參與、AI 治理、教育同數碼共融。",
    },
    source: "United Nations",
    sourceUrl: "https://www.un.org/pt/node/246853",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-08-13",
    week: "2026 Week 34",
    region: "Global",
    category: "Technology",
    level: "Intermediate",
    summary: {
      en: "Selected as background reading for the Week 34 pack, this UN story reports on a youth-led declaration about AI policy and governance. It emphasizes that young people should participate early in decisions about technologies that will shape education, employment, rights, and sustainable development.",
      zh: "这篇联合国报道作为 Week 34 阅读包的背景材料，介绍一份由青年主导的 AI 政策与治理宣言。文章强调，年轻人应该尽早参与有关技术的决策，因为这些技术将影响教育、就业、权利和可持续发展。",
      yue: "呢篇聯合國報道作為 Week 34 閱讀包嘅背景材料，介紹一份由青年主導嘅 AI 政策同治理宣言。文章強調，年輕人應該及早參與有關科技嘅決策，因為呢啲科技會影響教育、就業、權利同可持續發展。",
    },
    whyItMatters: {
      en: "Youth participation is a strong IELTS topic because it connects citizenship, education, technology, and representation in public decisions.",
      zh: "青年参与是很好的雅思主题，因为它连接公民责任、教育、科技和公共决策中的代表性。",
      yue: "青年參與係好好嘅雅思題目，因為佢連接公民責任、教育、科技同公共決策入面嘅代表性。",
    },
    keyVocabulary: [
      {
        word: "governance",
        meaning: {
          en: "the systems and rules used to guide decisions and behavior",
          zh: "用于指导决策和行为的制度与规则",
          yue: "用嚟指導決策同行為嘅制度同規則",
        },
      },
      {
        word: "meaningful participation",
        meaning: {
          en: "involvement that has a real influence on decisions",
          zh: "能够真正影响决策的参与",
          yue: "能夠真正影響決策嘅參與",
        },
      },
      {
        word: "digital inclusion",
        meaning: {
          en: "ensuring that all people can access and benefit from digital technology",
          zh: "确保所有人都能接触并受益于数字技术",
          yue: "確保所有人都能接觸同受益於數碼科技",
        },
      },
    ],
    usefulExpression: {
      en: "People affected by a policy should have a voice in how that policy is designed.",
      zh: "受到政策影响的人应该在政策设计过程中拥有发言权。",
      yue: "受到政策影響嘅人應該喺政策設計過程入面有發言權。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing youth councils, community consultation, school policy, or technology regulation.",
      zh: "讨论青年委员会、社区咨询、学校政策或科技监管时，可以使用这个表达。",
      yue: "討論青年委員會、社區諮詢、學校政策或者科技監管時，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "How can governments involve young people in technology policy without making participation symbolic?",
      zh: "政府应如何让年轻人参与科技政策，同时避免这种参与流于形式？",
      yue: "政府應該點樣畀年輕人參與科技政策，同時避免呢種參與流於形式？",
    },
    writingPrompt: {
      en: "Young people should have a greater role in decisions about education and technology. To what extent do you agree or disagree?",
      zh: "年轻人应该在教育和科技决策中发挥更大作用。你在多大程度上同意或不同意？",
      yue: "年輕人應該喺教育同科技決策入面發揮更大作用。你喺幾大程度上同意或者唔同意？",
    },
  },
  {
    id: "2026-w34-ai-development-worldbank",
    title: "AI Could Support Development, but Foundations Still Matter",
    titleNote: {
      en: "Background reading selected for the Week 34 pack: AI access, infrastructure, skills, public services, and inequality.",
      zh: "作为 Week 34 阅读包的背景材料收录：AI 可及性、基础设施、技能、公共服务和不平等。",
      yue: "作為 Week 34 閱讀包嘅背景材料收錄：AI 可及性、基礎設施、技能、公共服務同不平等。",
    },
    source: "World Bank",
    sourceUrl: "https://www.worldbank.org/en/news/press-release/2026/08/04/ai-offers-lifeline-to-developing-economies-in-an-era-of-weak-growth",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-08-04",
    week: "2026 Week 34",
    region: "Global",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "Selected as background reading for the Week 34 pack, this World Bank release argues that developing economies can benefit from practical, lower-cost AI tools. It also stresses that electricity, connectivity, skills, institutions, local data, evaluation, and public trust are necessary foundations.",
      zh: "这篇世界银行材料作为 Week 34 阅读包的背景阅读，认为发展中经济体可以从实用、低成本的 AI 工具中受益。文章同时强调，电力、网络连接、技能、制度、本地数据、效果评估和公众信任是必要基础。",
      yue: "呢篇世界銀行材料作為 Week 34 閱讀包嘅背景閱讀，認為發展中經濟體可以由實用、低成本嘅 AI 工具受益。文章同時強調，電力、網絡連接、技能、制度、本地數據、效果評估同公眾信任係必要基礎。",
    },
    whyItMatters: {
      en: "The article supports balanced IELTS arguments about whether technology reduces inequality or widens existing gaps.",
      zh: "这篇文章有助于围绕科技是减少不平等还是扩大既有差距，形成平衡的雅思论证。",
      yue: "呢篇文章有助圍繞科技係減少不平等，定係擴大既有差距，形成平衡嘅雅思論證。",
    },
    keyVocabulary: [
      {
        word: "digital infrastructure",
        meaning: {
          en: "the networks, power, computing, and systems needed for digital services",
          zh: "数字服务所需的网络、电力、计算能力和系统",
          yue: "數碼服務所需嘅網絡、電力、運算能力同系統",
        },
      },
      {
        word: "institutional capacity",
        meaning: {
          en: "the ability of organizations and governments to implement policies effectively",
          zh: "组织和政府有效实施政策的能力",
          yue: "組織同政府有效實施政策嘅能力",
        },
      },
      {
        word: "productivity boost",
        meaning: {
          en: "an increase in the amount of useful output produced",
          zh: "有效产出数量的提升",
          yue: "有效產出數量嘅提升",
        },
      },
    ],
    usefulExpression: {
      en: "Technology delivers broad benefits only when people have the infrastructure and skills to use it.",
      zh: "只有当人们具备使用技术所需的基础设施和技能时，技术才能带来广泛收益。",
      yue: "只有當人具備使用科技所需嘅基礎設施同技能時，科技先可以帶嚟廣泛收益。",
    },
    usefulExpressionExplanation: {
      en: "Use this as a topic sentence in essays about the digital divide, education, or public investment.",
      zh: "讨论数字鸿沟、教育或公共投资时，这句话可以作为主题句。",
      yue: "討論數碼鴻溝、教育或者公共投資時，呢句可以作為主題句。",
    },
    discussionQuestion: {
      en: "Should developing countries invest first in basic digital infrastructure or advanced AI systems?",
      zh: "发展中国家应该优先投资基础数字设施，还是先进 AI 系统？",
      yue: "發展中國家應該優先投資基礎數碼設施，定係先進 AI 系統？",
    },
    writingPrompt: {
      en: "Some people believe artificial intelligence will reduce global inequality. Others think it will widen the gap between countries. Discuss both views and give your opinion.",
      zh: "有人认为人工智能会减少全球不平等，也有人认为它会扩大国家之间的差距。讨论双方观点并给出你的看法。",
      yue: "有人認為人工智能會減少全球不平等，亦有人認為佢會擴大國家之間嘅差距。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w34-household-income-oecd",
    title: "Household Income Growth Slows Across the OECD",
    titleNote: {
      en: "Background reading selected for the Week 34 pack: household income, GDP, inflation, and living standards.",
      zh: "作为 Week 34 阅读包的背景材料收录：家庭收入、GDP、通胀和生活水平。",
      yue: "作為 Week 34 閱讀包嘅背景材料收錄：家庭收入、GDP、通脹同生活水平。",
    },
    source: "OECD",
    sourceUrl: "https://www.oecd.org/en/data/insights/statistical-releases/2026/08/growth-and-economic-well-being-first-quarter-2026-oecd.html",
    sourceType: "Data",
    isFree: true,
    date: "2026-08-06",
    week: "2026 Week 34",
    region: "Global",
    category: "Economy",
    level: "Intermediate",
    summary: {
      en: "Selected as background reading for the Week 34 pack, this OECD statistical release reports that real household income per person grew more slowly in the first quarter of 2026 while real GDP per person increased slightly faster. The country results show why economic growth and household well-being do not always move together.",
      zh: "这篇 OECD 统计发布作为 Week 34 阅读包的背景材料，指出 2026 年第一季度人均实际家庭收入增长放缓，而人均实际 GDP 增长略有加快。不同国家的结果说明，经济增长和家庭福祉并不总是同步变化。",
      yue: "呢篇 OECD 統計發布作為 Week 34 閱讀包嘅背景材料，指出 2026 年第一季人均實際家庭收入增長放慢，而人均實際 GDP 增長略為加快。唔同國家嘅結果說明，經濟增長同家庭福祉唔一定同步變化。",
    },
    whyItMatters: {
      en: "This is useful IELTS data because it helps learners distinguish national output from the money households can spend or save.",
      zh: "这组数据对雅思很有用，因为它帮助学习者区分国家总产出与家庭可用于消费或储蓄的收入。",
      yue: "呢組數據對雅思好有用，因為佢幫學習者區分國家總產出，同家庭可以用嚟消費或者儲蓄嘅收入。",
    },
    keyVocabulary: [
      {
        word: "real household income",
        meaning: {
          en: "household income adjusted for changes in prices",
          zh: "根据物价变化调整后的家庭收入",
          yue: "按物價變化調整後嘅家庭收入",
        },
      },
      {
        word: "per capita",
        meaning: {
          en: "calculated as an average for each person",
          zh: "按每人平均计算",
          yue: "按每人平均計算",
        },
      },
      {
        word: "living standards",
        meaning: {
          en: "the material conditions and economic well-being experienced by people",
          zh: "人们所处的物质条件和经济福祉",
          yue: "人所處嘅物質條件同經濟福祉",
        },
      },
    ],
    usefulExpression: {
      en: "GDP growth does not automatically translate into higher living standards for every household.",
      zh: "GDP 增长并不会自动转化为每个家庭生活水平的提高。",
      yue: "GDP 增長唔會自動轉化成每個家庭生活水平嘅提高。",
    },
    usefulExpressionExplanation: {
      en: "Use this when comparing national economic indicators with inequality or household experience.",
      zh: "比较国家经济指标与不平等或家庭实际感受时，可以使用这个表达。",
      yue: "比較國家經濟指標同不平等或者家庭實際感受時，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "Which measure better reflects progress: GDP growth or household income growth?",
      zh: "哪项指标更能反映进步：GDP 增长还是家庭收入增长？",
      yue: "邊項指標更能反映進步：GDP 增長定係家庭收入增長？",
    },
    writingPrompt: {
      en: "Economic growth is often used to measure a country's success, but some people believe quality of life is more important. Discuss both views and give your opinion.",
      zh: "经济增长常被用来衡量一个国家的成功，但有人认为生活质量更重要。讨论双方观点并给出你的看法。",
      yue: "經濟增長經常被用嚟衡量一個國家嘅成功，但有人認為生活質素更重要。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w21-ai-accountability-brookings",
    title: "Anthropomorphic AI Terms Create Gaps in Accountability",
    titleNote: {
      en: "Reading focus: AI language, accountability, regulation, and responsible technology use.",
      zh: "标题说明：这篇适合练习 AI 语言、责任归属、监管和负责任科技使用。",
      yue: "標題說明：呢篇適合練習 AI 語言、責任歸屬、監管同負責任科技使用。",
    },
    source: "Brookings",
    sourceUrl: "https://www.brookings.edu/articles/anthropomorphic-ai-terms-create-gaps-in-accountability/",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-20",
    week: "2026 Week 21",
    region: "Global",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This Brookings commentary explains why describing AI systems with human-like words can make responsibility less clear. It argues that more precise operational language can help users, companies, and policymakers discuss AI risks without treating the system as an independent moral actor.",
      zh: "这篇 Brookings 评论解释，使用拟人化词汇描述 AI 系统可能会让责任归属变得模糊。文章认为，更精确的操作性语言有助于用户、企业和政策制定者讨论 AI 风险，而不是把系统当成独立的道德主体。",
      yue: "呢篇 Brookings 評論解釋，用擬人化詞語描述 AI 系統可能會令責任歸屬變得模糊。文章認為，更精準嘅操作性語言有助用戶、企業同政策制定者討論 AI 風險，而唔係將系統當成獨立嘅道德主體。",
    },
    whyItMatters: {
      en: "AI accountability is useful for IELTS because it connects technology, ethics, public trust, business responsibility, and government regulation.",
      zh: "AI 责任归属对雅思很有用，因为它连接科技、伦理、公众信任、企业责任和政府监管。",
      yue: "AI 責任歸屬對雅思好有用，因為佢連接科技、倫理、公眾信任、企業責任同政府監管。",
    },
    keyVocabulary: [
      {
        word: "anthropomorphic",
        meaning: {
          en: "describing a non-human thing as if it had human qualities",
          zh: "把非人类事物描述成具有人类特征的",
          yue: "將非人類事物描述成有人類特徵嘅",
        },
      },
      {
        word: "accountability",
        meaning: {
          en: "responsibility for decisions, actions, and outcomes",
          zh: "对决定、行动和结果承担责任",
          yue: "對決定、行動同結果承擔責任",
        },
      },
      {
        word: "over-trust",
        meaning: {
          en: "placing too much confidence in a system or person",
          zh: "对系统或个人给予过高信任",
          yue: "對系統或者個人畀過高信任",
        },
      },
    ],
    usefulExpression: {
      en: "The language we use to describe technology can shape how responsibility is understood.",
      zh: "我们描述技术时使用的语言，会影响人们如何理解责任。",
      yue: "我哋描述科技時用嘅語言，會影響人哋點樣理解責任。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing AI safety, social media platforms, autonomous systems, or corporate responsibility.",
      zh: "讨论 AI 安全、社交媒体平台、自动化系统或企业责任时，可以使用这个表达。",
      yue: "討論 AI 安全、社交媒體平台、自動化系統或者企業責任時，可以用呢個表達。",
    },
    discussionQuestion: {
      en: "Should companies be required to avoid human-like language when marketing AI products?",
      zh: "企业在推广 AI 产品时，是否应该被要求避免使用拟人化语言？",
      yue: "企業推廣 AI 產品時，係咪應該被要求避免用擬人化語言？",
    },
    writingPrompt: {
      en: "Some people believe artificial intelligence should be described in human-like terms to make it easier to use. Others argue this creates confusion about responsibility. Discuss both views and give your opinion.",
      zh: "有人认为应该用拟人化语言描述人工智能，让它更容易使用。也有人认为这会造成责任归属混乱。讨论双方观点并给出你的看法。",
      yue: "有人認為應該用擬人化語言描述人工智能，令佢更易用。亦有人認為咁會造成責任歸屬混亂。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w21-un-climate-resolution-ap",
    title: "UN Votes to Support Strong Action on Climate Change",
    titleNote: {
      en: "Reading focus: international law, climate justice, diplomacy, and global cooperation.",
      zh: "标题说明：这篇适合练习国际法、气候正义、外交和全球合作。",
      yue: "標題說明：呢篇適合練習國際法、氣候正義、外交同全球合作。",
    },
    source: "AP News",
    sourceUrl: "https://apnews.com/article/90b89dc776e0bece17f2ab4064b7f71e",
    sourceType: "News",
    isFree: true,
    date: "2026-05-20",
    week: "2026 Week 21",
    region: "Global",
    category: "Environment",
    level: "Intermediate",
    summary: {
      en: "AP reports that the UN General Assembly approved a nonbinding resolution supporting stronger climate action after an advisory opinion from the International Court of Justice. The story is useful for reading about diplomacy, legal responsibility, and disagreement between countries over climate obligations.",
      zh: "AP 报道称，联合国大会在国际法院咨询意见之后通过了一项支持更强气候行动的非约束性决议。这篇适合阅读外交、法律责任以及各国对气候义务分歧的内容。",
      yue: "AP 報道指，聯合國大會喺國際法院諮詢意見之後通過咗一項支持更強氣候行動嘅非約束性決議。呢篇適合閱讀外交、法律責任同各國對氣候義務分歧嘅內容。",
    },
    whyItMatters: {
      en: "Climate policy often appears in IELTS Writing Task 2 because it asks whether global problems require national, local, or international solutions.",
      zh: "气候政策常出现在雅思大作文中，因为它涉及全球问题应由国家、地方还是国际层面解决。",
      yue: "氣候政策經常出現喺雅思大作文，因為佢涉及全球問題應該由國家、地方定國際層面解決。",
    },
    keyVocabulary: [
      {
        word: "nonbinding resolution",
        meaning: {
          en: "a formal decision that expresses a position but is not legally enforceable",
          zh: "表达立场但没有法律强制力的正式决议",
          yue: "表達立場但冇法律強制力嘅正式決議",
        },
      },
      {
        word: "climate justice",
        meaning: {
          en: "the idea that climate impacts and responsibilities should be handled fairly",
          zh: "气候影响和责任应被公平处理的理念",
          yue: "氣候影響同責任應該被公平處理嘅理念",
        },
      },
      {
        word: "multilateral cooperation",
        meaning: {
          en: "countries working together through international institutions",
          zh: "国家通过国际机构共同合作",
          yue: "國家透過國際機構共同合作",
        },
      },
    ],
    usefulExpression: {
      en: "Global environmental problems require more than voluntary promises.",
      zh: "全球环境问题需要的不只是自愿承诺。",
      yue: "全球環境問題需要嘅唔只係自願承諾。",
    },
    usefulExpressionExplanation: {
      en: "Use this to argue that climate action may need laws, finance, monitoring, and international pressure.",
      zh: "这个表达可用于论证气候行动可能需要法律、资金、监督和国际压力。",
      yue: "呢個表達可以用嚟論證氣候行動可能需要法律、資金、監督同國際壓力。",
    },
    discussionQuestion: {
      en: "Should rich countries have greater legal responsibility for climate damage?",
      zh: "富裕国家是否应该对气候损害承担更大的法律责任？",
      yue: "富裕國家係咪應該對氣候損害承擔更大法律責任？",
    },
    writingPrompt: {
      en: "Some people think climate change can only be solved through international agreements. Others believe local action is more effective. Discuss both views and give your opinion.",
      zh: "有人认为气候变化只能通过国际协议解决，也有人认为地方行动更有效。讨论双方观点并给出你的看法。",
      yue: "有人認為氣候變化只能透過國際協議解決，亦有人認為地方行動更有效。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w21-carbon-pricing-worldbank",
    title: "State and Trends of Carbon Pricing 2026",
    titleNote: {
      en: "Reading focus: carbon pricing, public revenue, emissions policy, and green finance.",
      zh: "标题说明：这篇适合练习碳定价、公共财政、排放政策和绿色金融。",
      yue: "標題說明：呢篇適合練習碳定價、公共財政、排放政策同綠色金融。",
    },
    source: "World Bank",
    sourceUrl: "https://www.worldbank.org/en/news/press-release/2026/05/19/direct-carbon-pricing-covers-nearly-one-third-of-global-emissions",
    sourceType: "Public Institution",
    isFree: true,
    date: "2026-05-19",
    week: "2026 Week 21",
    region: "Global",
    category: "Environment",
    level: "Intermediate",
    summary: {
      en: "The World Bank reports that direct carbon pricing now covers just under one-third of global greenhouse gas emissions if current instruments and those under development are counted. The article connects climate policy with public budgets, innovation, carbon markets, and development finance.",
      zh: "世界银行报告称，如果把已实施和正在开发的工具计算在内，直接碳定价覆盖的全球温室气体排放接近三分之一。文章把气候政策与公共预算、创新、碳市场和发展融资联系起来。",
      yue: "世界銀行報告指，如果將已實施同開發中嘅工具計算在內，直接碳定價覆蓋嘅全球溫室氣體排放接近三分之一。文章將氣候政策同公共預算、創新、碳市場同發展融資連繫起嚟。",
    },
    whyItMatters: {
      en: "This topic helps IELTS learners move beyond simple environmental vocabulary and discuss practical policy tools.",
      zh: "这个主题能帮助雅思学习者超越简单环保词汇，讨论更实际的政策工具。",
      yue: "呢個題目可以幫雅思學習者超越簡單環保詞彙，討論更實際嘅政策工具。",
    },
    keyVocabulary: [
      {
        word: "carbon pricing",
        meaning: {
          en: "a policy that makes emitting greenhouse gases carry a financial cost",
          zh: "让温室气体排放承担经济成本的政策",
          yue: "令溫室氣體排放承擔經濟成本嘅政策",
        },
      },
      {
        word: "emissions coverage",
        meaning: {
          en: "the share of emissions included under a policy or system",
          zh: "被某项政策或系统覆盖的排放比例",
          yue: "被某項政策或者系統覆蓋嘅排放比例",
        },
      },
      {
        word: "development finance",
        meaning: {
          en: "funding used to support economic and social development",
          zh: "用于支持经济和社会发展的资金",
          yue: "用嚟支持經濟同社會發展嘅資金",
        },
      },
    ],
    usefulExpression: {
      en: "A well-designed carbon price can encourage cleaner choices without banning every polluting activity.",
      zh: "设计良好的碳价格可以鼓励更清洁的选择，而不必禁止所有污染活动。",
      yue: "設計良好嘅碳價格可以鼓勵更清潔嘅選擇，而唔需要禁止所有污染活動。",
    },
    usefulExpressionExplanation: {
      en: "Use this when discussing market-based environmental policies in IELTS Writing Task 2.",
      zh: "讨论市场化环保政策时，这个表达很适合用于雅思大作文。",
      yue: "討論市場化環保政策時，呢個表達好適合用喺雅思大作文。",
    },
    discussionQuestion: {
      en: "Is carbon pricing fair if it raises costs for ordinary consumers?",
      zh: "如果碳定价提高普通消费者的成本，它还公平吗？",
      yue: "如果碳定價提高普通消費者嘅成本，佢仲公平嗎？",
    },
    writingPrompt: {
      en: "Some people believe governments should tax pollution to reduce emissions. Others think this may hurt consumers and businesses. Discuss both views and give your opinion.",
      zh: "有人认为政府应该对污染征税以减少排放，也有人认为这可能伤害消费者和企业。讨论双方观点并给出你的看法。",
      yue: "有人認為政府應該對污染徵稅以減少排放，亦有人認為呢個可能傷害消費者同企業。討論雙方觀點並畀出你嘅睇法。",
    },
  },
  {
    id: "2026-w21-ai-cybersecurity-cfr",
    title: "Scaling Intelligence: The Security Foundations Beneath America’s AI Ambitions Are Cracking",
    titleNote: {
      en: "Reading focus: AI diffusion, cybersecurity, risk management, and institutional assumptions.",
      zh: "标题说明：这篇适合练习 AI 扩散、网络安全、风险管理和制度假设。",
      yue: "標題說明：呢篇適合練習 AI 擴散、網絡安全、風險管理同制度假設。",
    },
    source: "Council on Foreign Relations",
    sourceUrl: "https://www.cfr.org/articles/scaling-intelligence-the-security-foundations-beneath-americas-ai-ambitions-are-cracking",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-18",
    week: "2026 Week 21",
    region: "Global",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This CFR article argues that AI is not only creating new tools but also challenging old cybersecurity assumptions. It focuses on whether institutions still understand who is acting, what systems can do, and which security checks remain meaningful as AI becomes more widely deployed.",
      zh: "这篇 CFR 文章认为，AI 不只是创造新工具，也在挑战旧有的网络安全假设。文章关注在 AI 更广泛部署时，机构是否仍清楚谁在行动、系统能做什么，以及哪些安全检查仍然有效。",
      yue: "呢篇 CFR 文章認為，AI 唔只係創造新工具，亦挑戰舊有嘅網絡安全假設。文章關注喺 AI 更廣泛部署時，機構係咪仍然清楚邊個喺行動、系統可以做咩，同邊啲安全檢查仍然有效。",
    },
    whyItMatters: {
      en: "Cybersecurity is a strong IELTS topic because it links technology with trust, privacy, national security, and business risk.",
      zh: "网络安全是很强的雅思话题，因为它连接科技、信任、隐私、国家安全和商业风险。",
      yue: "網絡安全係好強嘅雅思題目，因為佢連接科技、信任、私隱、國家安全同商業風險。",
    },
    keyVocabulary: [
      {
        word: "diffusion",
        meaning: {
          en: "the spread of a technology or practice across many places",
          zh: "技术或做法在多处扩散",
          yue: "技術或者做法喺多處擴散",
        },
      },
      {
        word: "threat model",
        meaning: {
          en: "an explanation of what risks a system is designed to defend against",
          zh: "说明系统设计用来防范哪些风险的模型",
          yue: "說明系統設計用嚟防範邊啲風險嘅模型",
        },
      },
      {
        word: "risk committee",
        meaning: {
          en: "a group responsible for reviewing major organizational risks",
          zh: "负责审查重大组织风险的小组",
          yue: "負責審查重大組織風險嘅小組",
        },
      },
    ],
    usefulExpression: {
      en: "Security systems must evolve when the assumptions behind them become outdated.",
      zh: "当安全系统背后的假设过时时，安全体系也必须演进。",
      yue: "當安全系統背後嘅假設過時，安全體系亦必須演進。",
    },
    usefulExpressionExplanation: {
      en: "Use this to discuss why old rules may not work well for new technologies.",
      zh: "这个表达适合讨论为什么旧规则可能不适用于新技术。",
      yue: "呢個表達適合討論點解舊規則可能唔適用於新科技。",
    },
    discussionQuestion: {
      en: "Should companies slow down AI deployment until they better understand cybersecurity risks?",
      zh: "企业是否应该在更好理解网络安全风险之前放慢 AI 部署？",
      yue: "企業係咪應該喺更好理解網絡安全風險之前放慢 AI 部署？",
    },
    writingPrompt: {
      en: "New technologies can improve productivity but also create new risks. How should governments and companies balance innovation and security?",
      zh: "新技术可以提高生产率，但也会带来新风险。政府和企业应如何平衡创新与安全？",
      yue: "新科技可以提高生產率，但亦會帶嚟新風險。政府同企業應該點樣平衡創新同安全？",
    },
  },
  {
    id: "2026-w21-south-korea-population-owid",
    title: "South Korea’s Population Is Set to Shrink: What Would It Take to Stop the Decline?",
    titleNote: {
      en: "Reading focus: population decline, fertility, aging, migration, and demographic modeling.",
      zh: "标题说明：这篇适合练习人口下降、生育率、老龄化、移民和人口模型。",
      yue: "標題說明：呢篇適合練習人口下降、生育率、老齡化、移民同人口模型。",
    },
    source: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/south-koreas-population-is-set-to-shrink-what-would-it-take-to-stop-the-decline",
    sourceType: "Data",
    isFree: true,
    date: "2026-05-18",
    week: "2026 Week 21",
    region: "Asia",
    category: "Society",
    level: "Intermediate",
    summary: {
      en: "Our World in Data uses South Korea as a case study for population decline. The article explains how fertility, life expectancy, and net migration shape future population size and age structure, making it useful for data-based reading practice.",
      zh: "Our World in Data 以韩国为案例分析人口下降。文章解释生育率、预期寿命和净移民如何影响未来人口规模和年龄结构，非常适合做数据型阅读练习。",
      yue: "Our World in Data 以韓國作為案例分析人口下降。文章解釋生育率、預期壽命同淨移民點樣影響未來人口規模同年齡結構，好適合做數據型閱讀練習。",
    },
    whyItMatters: {
      en: "Aging societies are common IELTS topics because they connect family life, work, pensions, healthcare, migration, and government policy.",
      zh: "老龄化社会是常见雅思话题，因为它连接家庭生活、工作、养老金、医疗、移民和政府政策。",
      yue: "老齡化社會係常見雅思題目，因為佢連接家庭生活、工作、退休金、醫療、移民同政府政策。",
    },
    keyVocabulary: [
      {
        word: "fertility rate",
        meaning: {
          en: "the average number of children born to each woman",
          zh: "每名女性平均生育的孩子数量",
          yue: "每名女性平均生育嘅孩子數量",
        },
      },
      {
        word: "age structure",
        meaning: {
          en: "the way a population is divided by age groups",
          zh: "人口按年龄群体划分的结构",
          yue: "人口按年齡群體劃分嘅結構",
        },
      },
      {
        word: "net migration",
        meaning: {
          en: "the difference between people entering and leaving a country",
          zh: "进入和离开一个国家的人数差额",
          yue: "進入同離開一個國家嘅人數差額",
        },
      },
    ],
    usefulExpression: {
      en: "Population change is shaped by births, deaths, and migration.",
      zh: "人口变化由出生、死亡和移民共同塑造。",
      yue: "人口變化由出生、死亡同移民共同塑造。",
    },
    usefulExpressionExplanation: {
      en: "Use this as a clear topic sentence when explaining demographic trends.",
      zh: "解释人口趋势时，这句话可以作为清晰的主题句。",
      yue: "解釋人口趨勢時，呢句可以作為清晰嘅主題句。",
    },
    discussionQuestion: {
      en: "Should governments try to raise birth rates, welcome more migrants, or adapt to smaller populations?",
      zh: "政府应该努力提高生育率、接纳更多移民，还是适应人口减少？",
      yue: "政府應該努力提高生育率、接納更多移民，定係適應人口減少？",
    },
    writingPrompt: {
      en: "In many countries, the population is aging and birth rates are falling. What problems can this cause, and what solutions are possible?",
      zh: "许多国家人口正在老龄化，出生率也在下降。这会造成什么问题？有哪些解决办法？",
      yue: "好多國家人口正在老齡化，出生率亦下降。呢個會造成咩問題？有咩解決辦法？",
    },
  },
  {
    id: "2026-w21-ai-data-centers-tariffs-csis",
    title: "The Impact of Tariffs on the AI Data Center Buildout",
    titleNote: {
      en: "Reading focus: AI infrastructure, semiconductors, tariffs, supply chains, and industrial policy.",
      zh: "标题说明：这篇适合练习 AI 基础设施、半导体、关税、供应链和产业政策。",
      yue: "標題說明：呢篇適合練習 AI 基礎設施、半導體、關稅、供應鏈同產業政策。",
    },
    source: "CSIS",
    sourceUrl: "https://www.csis.org/analysis/impact-tariffs-ai-data-center-buildout-balancing-supply-chain-security-and-ai",
    sourceType: "Think Tank",
    isFree: true,
    date: "2026-05-14",
    week: "2026 Week 21",
    region: "Americas",
    category: "Technology",
    level: "Advanced",
    summary: {
      en: "This CSIS brief examines how tariffs on semiconductors and metals could raise the cost of building AI data centers. It is a strong background reading selected for the Week 21 pack because it connects AI growth with supply chains, energy, industrial policy, and economic competitiveness.",
      zh: "这篇 CSIS 简报分析半导体和金属关税可能如何提高 AI 数据中心建设成本。它作为 Week 21 阅读包的背景阅读材料收录，适合把 AI 增长与供应链、能源、产业政策和经济竞争力联系起来阅读。",
      yue: "呢篇 CSIS 簡報分析半導體同金屬關稅可能點樣提高 AI 數據中心建設成本。佢作為 Week 21 閱讀包嘅背景閱讀材料收錄，適合將 AI 增長同供應鏈、能源、產業政策同經濟競爭力連繫起嚟閱讀。",
    },
    whyItMatters: {
      en: "This article helps IELTS learners see that AI is not only software; it also depends on physical infrastructure, energy, chips, and trade rules.",
      zh: "这篇文章帮助雅思学习者看到，AI 不只是软件，它还依赖实体基础设施、能源、芯片和贸易规则。",
      yue: "呢篇文章幫雅思學習者睇到，AI 唔只係軟件，佢仲依賴實體基礎設施、能源、晶片同貿易規則。",
    },
    keyVocabulary: [
      {
        word: "infrastructure buildout",
        meaning: {
          en: "the large-scale construction or expansion of essential systems",
          zh: "关键系统的大规模建设或扩张",
          yue: "關鍵系統嘅大規模建設或者擴張",
        },
      },
      {
        word: "tariff",
        meaning: {
          en: "a tax on imported goods",
          zh: "对进口商品征收的税",
          yue: "對進口商品徵收嘅稅",
        },
      },
      {
        word: "supply chain security",
        meaning: {
          en: "the protection of the flow of goods, parts, and materials",
          zh: "对商品、零部件和材料流动的保护",
          yue: "對商品、零部件同材料流動嘅保護",
        },
      },
    ],
    usefulExpression: {
      en: "Digital innovation often depends on physical infrastructure.",
      zh: "数字创新往往依赖实体基础设施。",
      yue: "數碼創新往往依賴實體基礎設施。",
    },
    usefulExpressionExplanation: {
      en: "Use this to make technology essays more concrete by linking software to energy, hardware, and supply chains.",
      zh: "这个表达能把软件与能源、硬件和供应链联系起来，让科技类作文更具体。",
      yue: "呢個表達可以將軟件同能源、硬件同供應鏈連繫起嚟，令科技類作文更具體。",
    },
    discussionQuestion: {
      en: "Should countries prioritize cheaper AI infrastructure or more secure domestic supply chains?",
      zh: "国家应该优先考虑更便宜的 AI 基础设施，还是更安全的本土供应链？",
      yue: "國家應該優先考慮更平嘅 AI 基礎設施，定係更安全嘅本土供應鏈？",
    },
    writingPrompt: {
      en: "Some people believe governments should protect domestic technology industries with tariffs. Others argue that tariffs raise costs and slow innovation. Discuss both views and give your opinion.",
      zh: "有人认为政府应该用关税保护本国科技产业，也有人认为关税会提高成本并减缓创新。讨论双方观点并给出你的看法。",
      yue: "有人認為政府應該用關稅保護本國科技產業，亦有人認為關稅會提高成本並拖慢創新。討論雙方觀點並畀出你嘅睇法。",
    },
  },
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

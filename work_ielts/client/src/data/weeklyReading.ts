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

export type VocabularySkill = "Reading" | "Listening" | "Writing" | "Speaking";

export type VocabularyTopic =
  | "Education"
  | "Technology"
  | "Environment"
  | "Government & Politics"
  | "Economy & Work"
  | "Health & Fitness"
  | "Society & Culture"
  | "Media & Communication"
  | "Cities & Transport"
  | "Global Issues"
  | "Science & Research"
  | "Art, Photography & Creativity";

export type VocabularyLevel = "Intermediate" | "Upper Intermediate" | "Advanced";

export type IeltsVocabularyItem = {
  id: string;
  word: string;
  partOfSpeech: string;
  meaningZh: string;
  meaningYue: string;
  topic: VocabularyTopic;
  level: VocabularyLevel;
  skills: VocabularySkill[];
  example: string;
  exampleZh: string;
  exampleYue: string;
  tags: string[];
};

type VocabularySeed = [
  word: string,
  partOfSpeech: string,
  meaningZh: string,
  meaningYue: string,
  level: VocabularyLevel,
  skills: VocabularySkill[],
  tags?: string[],
];

const R: VocabularySkill[] = ["Reading"];
const RW: VocabularySkill[] = ["Reading", "Writing"];
const RS: VocabularySkill[] = ["Reading", "Speaking"];
const RWS: VocabularySkill[] = ["Reading", "Writing", "Speaking"];
const RLW: VocabularySkill[] = ["Reading", "Listening", "Writing"];
const ALL: VocabularySkill[] = ["Reading", "Listening", "Writing", "Speaking"];

export const vocabularyTopics: VocabularyTopic[] = [
  "Education",
  "Technology",
  "Environment",
  "Government & Politics",
  "Economy & Work",
  "Health & Fitness",
  "Society & Culture",
  "Media & Communication",
  "Cities & Transport",
  "Global Issues",
  "Science & Research",
  "Art, Photography & Creativity",
];

export const vocabularyLevels: VocabularyLevel[] = ["Intermediate", "Upper Intermediate", "Advanced"];

const topicContexts: Record<VocabularyTopic, { en: string; zh: string; yue: string; tag: string }> = {
  Education: {
    en: "schools, universities, and lifelong learning",
    zh: "学校、大学和终身学习",
    yue: "學校、大學同終身學習",
    tag: "Education",
  },
  Technology: {
    en: "digital change, online safety, and future work",
    zh: "数字变革、网络安全和未来工作",
    yue: "數碼變革、網絡安全同未來工作",
    tag: "Technology",
  },
  Environment: {
    en: "climate action, conservation, and sustainable living",
    zh: "气候行动、环境保护和可持续生活",
    yue: "氣候行動、環境保護同可持續生活",
    tag: "Environment",
  },
  "Government & Politics": {
    en: "public policy, rights, and political decision-making",
    zh: "公共政策、权利和政治决策",
    yue: "公共政策、權利同政治決策",
    tag: "Policy",
  },
  "Economy & Work": {
    en: "employment, living standards, and economic change",
    zh: "就业、生活水平和经济变化",
    yue: "就業、生活水平同經濟變化",
    tag: "Economy",
  },
  "Health & Fitness": {
    en: "public health, lifestyle, and wellbeing",
    zh: "公共健康、生活方式和身心健康",
    yue: "公共健康、生活方式同身心健康",
    tag: "Health",
  },
  "Society & Culture": {
    en: "community life, identity, and cultural change",
    zh: "社区生活、身份认同和文化变化",
    yue: "社區生活、身份認同同文化變化",
    tag: "Society",
  },
  "Media & Communication": {
    en: "news, public opinion, and digital communication",
    zh: "新闻、公众舆论和数字传播",
    yue: "新聞、公眾輿論同數碼傳播",
    tag: "Media",
  },
  "Cities & Transport": {
    en: "urban planning, mobility, and quality of life",
    zh: "城市规划、出行和生活质量",
    yue: "城市規劃、出行同生活質素",
    tag: "Cities",
  },
  "Global Issues": {
    en: "international cooperation, development, and shared risks",
    zh: "国际合作、发展和共同风险",
    yue: "國際合作、發展同共同風險",
    tag: "Global",
  },
  "Science & Research": {
    en: "evidence, experiments, and scientific progress",
    zh: "证据、实验和科学进步",
    yue: "證據、實驗同科學進步",
    tag: "Academic",
  },
  "Art, Photography & Creativity": {
    en: "creative work, visual culture, and artistic expression",
    zh: "创意工作、视觉文化和艺术表达",
    yue: "創意工作、視覺文化同藝術表達",
    tag: "Creativity",
  },
};

const vocabularySeeds: Record<VocabularyTopic, VocabularySeed[]> = {
  Education: [
    ["pedagogy", "noun", "教学法；教育方法", "教學法；教育方法", "Advanced", RWS, ["Academic"]],
    ["curriculum", "noun", "课程体系；课程内容", "課程體系；課程內容", "Intermediate", RLW],
    ["literacy", "noun", "读写能力；素养", "讀寫能力；素養", "Intermediate", RWS],
    ["attainment", "noun", "成绩；学业成就", "成績；學業成就", "Upper Intermediate", RW],
    ["assessment", "noun", "评估；考核", "評估；考核", "Intermediate", RLW],
    ["tuition", "noun", "教学；学费；辅导", "教學；學費；補習", "Intermediate", RW],
    ["scholarship", "noun", "奖学金；学术研究", "獎學金；學術研究", "Intermediate", RW],
    ["vocational training", "noun phrase", "职业培训", "職業培訓", "Upper Intermediate", RWS],
    ["lifelong learning", "noun phrase", "终身学习", "終身學習", "Upper Intermediate", RWS],
    ["critical thinking", "noun phrase", "批判性思维", "批判性思維", "Upper Intermediate", RWS],
    ["rote learning", "noun phrase", "死记硬背式学习", "死記硬背式學習", "Upper Intermediate", RWS],
    ["educational equity", "noun phrase", "教育公平", "教育公平", "Advanced", RW, ["Policy"]],
    ["academic performance", "noun phrase", "学业表现", "學業表現", "Intermediate", RW],
    ["school funding", "noun phrase", "学校经费", "學校經費", "Intermediate", RWS, ["Policy"]],
    ["class size", "noun phrase", "班级规模", "班級規模", "Intermediate", RWS],
    ["teacher retention", "noun phrase", "教师留任率", "教師留任率", "Advanced", RW],
    ["inclusive education", "noun phrase", "融合教育；包容性教育", "融合教育；包容性教育", "Advanced", RWS],
    ["remote learning", "noun phrase", "远程学习", "遠程學習", "Intermediate", ALL],
    ["student engagement", "noun phrase", "学生参与度", "學生參與度", "Upper Intermediate", RWS],
    ["disciplinary policy", "noun phrase", "纪律政策", "紀律政策", "Advanced", RW, ["Policy"]],
    ["higher education", "noun phrase", "高等教育", "高等教育", "Intermediate", RWS],
    ["learning outcomes", "noun phrase", "学习成果", "學習成果", "Upper Intermediate", RW],
    ["standardized testing", "noun phrase", "标准化考试", "標準化考試", "Upper Intermediate", RWS],
    ["private tutoring", "noun phrase", "私人补习", "私人補習", "Intermediate", RWS],
    ["knowledge economy", "noun phrase", "知识经济", "知識經濟", "Advanced", RW, ["Economy"]],
  ],
  Technology: [
    ["innovation", "noun", "创新；新方法", "創新；新方法", "Intermediate", RWS, ["Technology"]],
    ["automation", "noun", "自动化", "自動化", "Upper Intermediate", ALL],
    ["digital literacy", "noun phrase", "数字素养", "數碼素養", "Upper Intermediate", RWS],
    ["cybersecurity", "noun", "网络安全", "網絡安全", "Upper Intermediate", RLW],
    ["algorithm", "noun", "算法", "演算法；算法", "Advanced", RWS],
    ["artificial intelligence", "noun phrase", "人工智能", "人工智能", "Upper Intermediate", RWS],
    ["data privacy", "noun phrase", "数据隐私", "數據私隱", "Upper Intermediate", RWS, ["Policy"]],
    ["online platform", "noun phrase", "在线平台", "網上平台", "Intermediate", ALL],
    ["digital divide", "noun phrase", "数字鸿沟", "數碼鴻溝", "Advanced", RWS, ["Society"]],
    ["telecommunication", "noun", "电信；远程通信", "電訊；遠程通訊", "Upper Intermediate", RLW],
    ["surveillance", "noun", "监控；监督", "監控；監察", "Advanced", RW, ["Policy"]],
    ["misinformation", "noun", "错误信息", "錯誤資訊", "Upper Intermediate", RWS, ["Media"]],
    ["e-commerce", "noun", "电子商务", "電子商務", "Intermediate", RWS, ["Economy"]],
    ["virtual reality", "noun phrase", "虚拟现实", "虛擬現實", "Upper Intermediate", RWS],
    ["machine learning", "noun phrase", "机器学习", "機器學習", "Advanced", RW],
    ["cloud computing", "noun phrase", "云计算", "雲端運算", "Upper Intermediate", RW],
    ["user interface", "noun phrase", "用户界面", "用戶介面", "Upper Intermediate", RW],
    ["screen time", "noun phrase", "屏幕使用时间", "螢幕使用時間", "Intermediate", RWS, ["Health"]],
    ["tech dependency", "noun phrase", "技术依赖", "科技依賴", "Upper Intermediate", RWS],
    ["digital infrastructure", "noun phrase", "数字基础设施", "數碼基礎設施", "Advanced", RW, ["Policy"]],
    ["biometric data", "noun phrase", "生物识别数据", "生物識別數據", "Advanced", RW],
    ["remote work", "noun phrase", "远程工作", "遙距工作", "Intermediate", ALL, ["Economy"]],
    ["smart devices", "noun phrase", "智能设备", "智能設備", "Intermediate", RLW],
    ["online fraud", "noun phrase", "网络诈骗", "網絡詐騙", "Upper Intermediate", RWS],
    ["information overload", "noun phrase", "信息过载", "資訊過載", "Upper Intermediate", RWS],
  ],
  Environment: [
    ["biodiversity", "noun", "生物多样性", "生物多樣性", "Upper Intermediate", RWS, ["Environment"]],
    ["conservation", "noun", "保护；节约", "保育；保護；節約", "Intermediate", RLW],
    ["emissions", "plural noun", "排放物；排放量", "排放物；排放量", "Intermediate", ALL],
    ["sustainability", "noun", "可持续性", "可持續性", "Upper Intermediate", RWS],
    ["ecosystem", "noun", "生态系统", "生態系統", "Intermediate", RLW],
    ["renewable energy", "noun phrase", "可再生能源", "可再生能源", "Intermediate", RWS],
    ["carbon footprint", "noun phrase", "碳足迹", "碳足跡", "Upper Intermediate", RWS],
    ["climate resilience", "noun phrase", "气候韧性；气候适应力", "氣候韌性；氣候適應力", "Advanced", RW],
    ["deforestation", "noun", "森林砍伐", "森林砍伐", "Upper Intermediate", RWS],
    ["habitat loss", "noun phrase", "栖息地丧失", "棲息地喪失", "Upper Intermediate", RW],
    ["waste management", "noun phrase", "废弃物管理", "廢物管理", "Upper Intermediate", RWS],
    ["air quality", "noun phrase", "空气质量", "空氣質素", "Intermediate", ALL],
    ["water scarcity", "noun phrase", "水资源短缺", "水資源短缺", "Upper Intermediate", RWS],
    ["fossil fuels", "plural noun", "化石燃料", "化石燃料", "Intermediate", RWS],
    ["green technology", "noun phrase", "绿色技术", "綠色科技", "Upper Intermediate", RW],
    ["environmental regulation", "noun phrase", "环境监管；环保法规", "環境監管；環保法規", "Advanced", RW, ["Policy"]],
    ["circular economy", "noun phrase", "循环经济", "循環經濟", "Advanced", RW, ["Economy"]],
    ["plastic pollution", "noun phrase", "塑料污染", "塑膠污染", "Intermediate", RWS],
    ["natural resources", "plural noun", "自然资源", "自然資源", "Intermediate", ALL],
    ["urban sprawl", "noun phrase", "城市蔓延", "城市蔓延", "Advanced", RW],
    ["extreme weather", "noun phrase", "极端天气", "極端天氣", "Intermediate", ALL],
    ["energy efficiency", "noun phrase", "能源效率", "能源效率", "Upper Intermediate", RW],
    ["ecological balance", "noun phrase", "生态平衡", "生態平衡", "Upper Intermediate", RW],
    ["reforestation", "noun", "重新造林", "重新造林", "Upper Intermediate", RW],
    ["environmental awareness", "noun phrase", "环保意识", "環保意識", "Intermediate", RWS],
  ],
  "Government & Politics": [
    ["governance", "noun", "治理；管理方式", "治理；管理方式", "Advanced", RW, ["Policy"]],
    ["policy", "noun", "政策", "政策", "Intermediate", ALL, ["Policy"]],
    ["regulation", "noun", "监管；法规", "監管；法規", "Upper Intermediate", RWS, ["Policy"]],
    ["accountability", "noun", "问责；责任追究", "問責；責任追究", "Advanced", RWS],
    ["diplomacy", "noun", "外交；外交手段", "外交；外交手段", "Upper Intermediate", RS],
    ["legislation", "noun", "立法；法律", "立法；法律", "Upper Intermediate", RW],
    ["public sector", "noun phrase", "公共部门", "公共部門", "Intermediate", RWS],
    ["civic participation", "noun phrase", "公民参与", "公民參與", "Advanced", RWS],
    ["referendum", "noun", "全民公投", "全民公投", "Advanced", RW],
    ["electoral system", "noun phrase", "选举制度", "選舉制度", "Advanced", RW],
    ["civil liberties", "plural noun", "公民自由", "公民自由", "Advanced", RW],
    ["national security", "noun phrase", "国家安全", "國家安全", "Upper Intermediate", RWS],
    ["welfare provision", "noun phrase", "福利供给", "福利供給", "Advanced", RW],
    ["taxation", "noun", "税收；征税", "稅收；徵稅", "Upper Intermediate", RWS],
    ["public expenditure", "noun phrase", "公共支出", "公共開支", "Advanced", RW],
    ["bureaucracy", "noun", "官僚体系；繁文缛节", "官僚體系；繁文縟節", "Advanced", RW],
    ["transparency", "noun", "透明度", "透明度", "Upper Intermediate", RWS],
    ["corruption", "noun", "腐败", "腐敗", "Upper Intermediate", RWS],
    ["immigration policy", "noun phrase", "移民政策", "移民政策", "Upper Intermediate", RWS],
    ["human rights", "plural noun", "人权", "人權", "Intermediate", RWS],
    ["international relations", "noun phrase", "国际关系", "國際關係", "Upper Intermediate", RS],
    ["public consultation", "noun phrase", "公众咨询", "公眾諮詢", "Advanced", RW],
    ["political stability", "noun phrase", "政治稳定", "政治穩定", "Upper Intermediate", RW],
    ["law enforcement", "noun phrase", "执法", "執法", "Upper Intermediate", RWS],
    ["social contract", "noun phrase", "社会契约", "社會契約", "Advanced", RW],
  ],
  "Economy & Work": [
    ["productivity", "noun", "生产率；效率", "生產率；效率", "Intermediate", RLW, ["Economy"]],
    ["workforce", "noun", "劳动力；员工队伍", "勞動力；員工隊伍", "Intermediate", ALL],
    ["inequality", "noun", "不平等；差距", "不平等；差距", "Upper Intermediate", RWS],
    ["inflation", "noun", "通货膨胀", "通貨膨脹", "Intermediate", RLW],
    ["entrepreneurship", "noun", "创业精神；创业活动", "創業精神；創業活動", "Advanced", RWS],
    ["labour market", "noun phrase", "劳动力市场", "勞動力市場", "Upper Intermediate", RW],
    ["income distribution", "noun phrase", "收入分配", "收入分配", "Advanced", RW],
    ["job security", "noun phrase", "工作保障", "工作保障", "Intermediate", RWS],
    ["minimum wage", "noun phrase", "最低工资", "最低工資", "Intermediate", RWS],
    ["work-life balance", "noun phrase", "工作与生活平衡", "工作與生活平衡", "Intermediate", RWS],
    ["outsourcing", "noun", "外包", "外判", "Upper Intermediate", RWS],
    ["career progression", "noun phrase", "职业发展", "事業發展", "Upper Intermediate", RWS],
    ["consumer demand", "noun phrase", "消费者需求", "消費者需求", "Intermediate", RW],
    ["economic growth", "noun phrase", "经济增长", "經濟增長", "Intermediate", RWS],
    ["recession", "noun", "经济衰退", "經濟衰退", "Upper Intermediate", RW],
    ["financial stability", "noun phrase", "金融稳定", "金融穩定", "Upper Intermediate", RW],
    ["informal economy", "noun phrase", "非正规经济", "非正規經濟", "Advanced", RW],
    ["social mobility", "noun phrase", "社会流动性", "社會流動性", "Advanced", RWS],
    ["public investment", "noun phrase", "公共投资", "公共投資", "Upper Intermediate", RW],
    ["skills gap", "noun phrase", "技能差距", "技能差距", "Upper Intermediate", RWS],
    ["remote employment", "noun phrase", "远程就业", "遙距就業", "Upper Intermediate", RWS],
    ["workplace flexibility", "noun phrase", "工作场所灵活性", "工作場所靈活性", "Upper Intermediate", RWS],
    ["employee retention", "noun phrase", "员工留任", "員工留任", "Upper Intermediate", RW],
    ["living standards", "plural noun", "生活水平", "生活水平", "Intermediate", RWS],
    ["purchasing power", "noun phrase", "购买力", "購買力", "Upper Intermediate", RW],
  ],
  "Health & Fitness": [
    ["sedentary lifestyle", "noun phrase", "久坐的生活方式", "久坐嘅生活方式", "Upper Intermediate", RWS, ["Health"]],
    ["nutrition", "noun", "营养", "營養", "Intermediate", RLW],
    ["wellbeing", "noun", "身心健康；幸福感", "身心健康；幸福感", "Intermediate", RWS],
    ["resilience", "noun", "韧性；恢复力", "韌性；恢復力", "Upper Intermediate", RWS],
    ["prevalence", "noun", "流行程度；普遍性", "流行程度；普遍性", "Advanced", RLW],
    ["preventive healthcare", "noun phrase", "预防性医疗", "預防性醫療", "Advanced", RW],
    ["mental health", "noun phrase", "心理健康", "心理健康", "Intermediate", RWS],
    ["public health", "noun phrase", "公共卫生；公共健康", "公共衛生；公共健康", "Intermediate", RWS],
    ["obesity", "noun", "肥胖", "肥胖", "Intermediate", RWS],
    ["life expectancy", "noun phrase", "预期寿命", "預期壽命", "Upper Intermediate", RW],
    ["healthcare access", "noun phrase", "医疗可及性", "醫療可及性", "Advanced", RW],
    ["balanced diet", "noun phrase", "均衡饮食", "均衡飲食", "Intermediate", ALL],
    ["physical activity", "noun phrase", "体育活动；身体活动", "體育活動；身體活動", "Intermediate", RWS],
    ["chronic disease", "noun phrase", "慢性疾病", "慢性疾病", "Upper Intermediate", RW],
    ["medical innovation", "noun phrase", "医疗创新", "醫療創新", "Upper Intermediate", RW],
    ["vaccination", "noun", "疫苗接种", "疫苗接種", "Intermediate", RLW],
    ["stress management", "noun phrase", "压力管理", "壓力管理", "Intermediate", RWS],
    ["sleep deprivation", "noun phrase", "睡眠不足", "睡眠不足", "Upper Intermediate", RWS],
    ["health inequality", "noun phrase", "健康不平等", "健康不平等", "Advanced", RW],
    ["patient care", "noun phrase", "患者护理", "病人護理", "Intermediate", RW],
    ["community fitness", "noun phrase", "社区健身", "社區健身", "Intermediate", RWS],
    ["disease prevention", "noun phrase", "疾病预防", "疾病預防", "Upper Intermediate", RW],
    ["urban health", "noun phrase", "城市健康", "城市健康", "Upper Intermediate", RW],
    ["ageing population", "noun phrase", "人口老龄化", "人口老齡化", "Upper Intermediate", RWS],
    ["healthcare funding", "noun phrase", "医疗经费", "醫療經費", "Upper Intermediate", RW],
  ],
  "Society & Culture": [
    ["social cohesion", "noun phrase", "社会凝聚力", "社會凝聚力", "Advanced", RWS, ["Society"]],
    ["cultural diversity", "noun phrase", "文化多样性", "文化多樣性", "Intermediate", RWS],
    ["tradition", "noun", "传统", "傳統", "Intermediate", RWS],
    ["identity", "noun", "身份认同", "身份認同", "Intermediate", RWS],
    ["social norms", "plural noun", "社会规范", "社會規範", "Upper Intermediate", RW],
    ["community engagement", "noun phrase", "社区参与", "社區參與", "Upper Intermediate", RWS],
    ["generational gap", "noun phrase", "代沟", "代溝", "Intermediate", RWS],
    ["multiculturalism", "noun", "多元文化主义", "多元文化主義", "Advanced", RW],
    ["social isolation", "noun phrase", "社会孤立", "社會孤立", "Upper Intermediate", RWS],
    ["volunteerism", "noun", "志愿服务精神", "義工服務精神", "Upper Intermediate", RWS],
    ["civic responsibility", "noun phrase", "公民责任", "公民責任", "Advanced", RW],
    ["family structure", "noun phrase", "家庭结构", "家庭結構", "Intermediate", RWS],
    ["gender equality", "noun phrase", "性别平等", "性別平等", "Intermediate", RWS],
    ["public behaviour", "noun phrase", "公共行为", "公共行為", "Intermediate", RWS],
    ["cultural heritage", "noun phrase", "文化遗产", "文化遺產", "Intermediate", RW],
    ["social integration", "noun phrase", "社会融合", "社會融合", "Advanced", RW],
    ["minority groups", "plural noun", "少数群体", "少數群體", "Upper Intermediate", RW],
    ["individualism", "noun", "个人主义", "個人主義", "Upper Intermediate", RWS],
    ["consumer culture", "noun phrase", "消费文化", "消費文化", "Upper Intermediate", RWS],
    ["social values", "plural noun", "社会价值观", "社會價值觀", "Intermediate", RWS],
    ["demographic change", "noun phrase", "人口结构变化", "人口結構變化", "Advanced", RW],
    ["age discrimination", "noun phrase", "年龄歧视", "年齡歧視", "Upper Intermediate", RW],
    ["community spirit", "noun phrase", "社区精神", "社區精神", "Intermediate", RWS],
    ["ethical standards", "plural noun", "道德标准", "道德標準", "Upper Intermediate", RW],
    ["social inclusion", "noun phrase", "社会包容", "社會包容", "Advanced", RW],
  ],
  "Media & Communication": [
    ["journalism", "noun", "新闻业；新闻报道", "新聞業；新聞報道", "Intermediate", RWS, ["Media"]],
    ["censorship", "noun", "审查制度", "審查制度", "Upper Intermediate", RWS, ["Policy"]],
    ["press freedom", "noun phrase", "新闻自由", "新聞自由", "Upper Intermediate", RWS],
    ["media literacy", "noun phrase", "媒体素养", "媒體素養", "Upper Intermediate", RWS],
    ["audience engagement", "noun phrase", "受众参与", "受眾參與", "Advanced", RW],
    ["public opinion", "noun phrase", "公众舆论", "公眾輿論", "Intermediate", RWS],
    ["social media", "noun phrase", "社交媒体", "社交媒體", "Intermediate", ALL],
    ["advertising", "noun", "广告；广告业", "廣告；廣告業", "Intermediate", RWS],
    ["digital content", "noun phrase", "数字内容", "數碼內容", "Intermediate", RW],
    ["news coverage", "noun phrase", "新闻报道范围", "新聞報道範圍", "Upper Intermediate", RW],
    ["editorial bias", "noun phrase", "编辑偏见", "編輯偏見", "Advanced", RW],
    ["fact-checking", "noun", "事实核查", "事實查核", "Upper Intermediate", RW],
    ["broadcasting", "noun", "广播电视传播", "廣播電視傳播", "Intermediate", RLW],
    ["information access", "noun phrase", "信息获取", "資訊獲取", "Upper Intermediate", RW],
    ["online discourse", "noun phrase", "网络讨论；线上话语", "網絡討論；網上話語", "Advanced", RW],
    ["communication skills", "noun phrase", "沟通能力", "溝通能力", "Intermediate", RWS],
    ["public relations", "noun phrase", "公共关系", "公共關係", "Upper Intermediate", RW],
    ["viral content", "noun phrase", "病毒式传播内容", "病毒式傳播內容", "Intermediate", RWS],
    ["media regulation", "noun phrase", "媒体监管", "媒體監管", "Advanced", RW, ["Policy"]],
    ["citizen journalism", "noun phrase", "公民新闻", "公民新聞", "Advanced", RW],
    ["subscription model", "noun phrase", "订阅模式", "訂閱模式", "Upper Intermediate", RW],
    ["content moderation", "noun phrase", "内容审核", "內容審核", "Advanced", RW],
    ["attention span", "noun phrase", "注意力持续时间", "專注力持續時間", "Upper Intermediate", RWS],
    ["visual storytelling", "noun phrase", "视觉叙事", "視覺敘事", "Upper Intermediate", RWS],
    ["disinformation", "noun", "虚假信息；蓄意误导信息", "虛假資訊；蓄意誤導資訊", "Advanced", RW],
  ],
  "Cities & Transport": [
    ["urbanisation", "noun", "城市化", "城市化", "Upper Intermediate", RWS, ["Cities"]],
    ["infrastructure", "noun", "基础设施", "基礎設施", "Intermediate", RWS],
    ["congestion", "noun", "拥堵", "擠塞；擁堵", "Intermediate", RWS],
    ["commuting", "noun", "通勤", "通勤", "Intermediate", RWS],
    ["pedestrianisation", "noun", "步行化；行人专用化", "行人專用化", "Advanced", RW],
    ["public transit", "noun phrase", "公共交通", "公共交通", "Intermediate", ALL],
    ["housing affordability", "noun phrase", "住房可负担性", "住房可負擔性", "Advanced", RW],
    ["urban planning", "noun phrase", "城市规划", "城市規劃", "Upper Intermediate", RWS],
    ["suburbanisation", "noun", "郊区化", "郊區化", "Advanced", RW],
    ["cycling lanes", "plural noun", "自行车道", "單車徑", "Intermediate", RWS],
    ["road safety", "noun phrase", "道路安全", "道路安全", "Intermediate", RWS],
    ["traffic management", "noun phrase", "交通管理", "交通管理", "Upper Intermediate", RW],
    ["smart city", "noun phrase", "智慧城市", "智慧城市", "Upper Intermediate", RWS],
    ["green space", "noun phrase", "绿地", "綠化空間", "Intermediate", RWS],
    ["population density", "noun phrase", "人口密度", "人口密度", "Upper Intermediate", RW],
    ["mixed-use development", "noun phrase", "混合用途开发", "混合用途發展", "Advanced", RW],
    ["high-speed rail", "noun phrase", "高速铁路", "高速鐵路", "Intermediate", RLW],
    ["walkability", "noun", "步行友好程度", "步行友善程度", "Advanced", RW],
    ["accessibility", "noun", "可达性；无障碍性", "可達性；無障礙性", "Upper Intermediate", RW],
    ["car dependency", "noun phrase", "汽车依赖", "汽車依賴", "Upper Intermediate", RWS],
    ["noise pollution", "noun phrase", "噪音污染", "噪音污染", "Intermediate", RWS],
    ["urban renewal", "noun phrase", "城市更新", "城市更新", "Upper Intermediate", RW],
    ["zoning", "noun", "分区规划", "分區規劃", "Advanced", RW],
    ["transport network", "noun phrase", "交通网络", "交通網絡", "Intermediate", RW],
    ["last-mile connectivity", "noun phrase", "最后一公里连接", "最後一公里連接", "Advanced", RW],
  ],
  "Global Issues": [
    ["globalization", "noun", "全球化", "全球化", "Intermediate", RWS, ["Global"]],
    ["migration", "noun", "迁移；移民流动", "遷移；移民流動", "Intermediate", RWS],
    ["poverty alleviation", "noun phrase", "减贫；扶贫", "減貧；扶貧", "Advanced", RW],
    ["humanitarian aid", "noun phrase", "人道主义援助", "人道主義援助", "Upper Intermediate", RW],
    ["conflict resolution", "noun phrase", "冲突解决", "衝突解決", "Advanced", RWS],
    ["food security", "noun phrase", "粮食安全", "糧食安全", "Upper Intermediate", RW],
    ["energy crisis", "noun phrase", "能源危机", "能源危機", "Upper Intermediate", RW],
    ["wealth disparity", "noun phrase", "财富差距", "財富差距", "Advanced", RW],
    ["international cooperation", "noun phrase", "国际合作", "國際合作", "Intermediate", RWS],
    ["refugee crisis", "noun phrase", "难民危机", "難民危機", "Upper Intermediate", RW],
    ["global governance", "noun phrase", "全球治理", "全球治理", "Advanced", RW],
    ["peacekeeping", "noun", "维和", "維和", "Upper Intermediate", RW],
    ["trade agreement", "noun phrase", "贸易协定", "貿易協定", "Upper Intermediate", RW],
    ["economic sanctions", "plural noun", "经济制裁", "經濟制裁", "Advanced", RW],
    ["cultural exchange", "noun phrase", "文化交流", "文化交流", "Intermediate", RWS],
    ["supply chain", "noun phrase", "供应链", "供應鏈", "Upper Intermediate", RW],
    ["global health", "noun phrase", "全球健康", "全球健康", "Upper Intermediate", RW],
    ["climate migration", "noun phrase", "气候移民", "氣候移民", "Advanced", RW],
    ["development aid", "noun phrase", "发展援助", "發展援助", "Upper Intermediate", RW],
    ["water security", "noun phrase", "水安全", "水安全", "Upper Intermediate", RW],
    ["human trafficking", "noun phrase", "人口贩卖", "人口販賣", "Advanced", RW],
    ["geopolitical tension", "noun phrase", "地缘政治紧张", "地緣政治緊張", "Advanced", RW],
    ["debt relief", "noun phrase", "债务减免", "債務減免", "Advanced", RW],
    ["global citizenship", "noun phrase", "全球公民意识", "全球公民意識", "Upper Intermediate", RWS],
    ["disaster response", "noun phrase", "灾害应对", "災害應對", "Upper Intermediate", RW],
  ],
  "Science & Research": [
    ["hypothesis", "noun", "假设", "假設", "Upper Intermediate", RW, ["Academic"]],
    ["evidence", "noun", "证据", "證據", "Intermediate", RWS],
    ["methodology", "noun", "方法论；研究方法", "方法論；研究方法", "Advanced", RW],
    ["peer review", "noun phrase", "同行评审", "同行評審", "Advanced", RW],
    ["data analysis", "noun phrase", "数据分析", "數據分析", "Upper Intermediate", RW],
    ["clinical trial", "noun phrase", "临床试验", "臨床試驗", "Advanced", RW],
    ["research funding", "noun phrase", "研究经费", "研究經費", "Upper Intermediate", RW],
    ["scientific literacy", "noun phrase", "科学素养", "科學素養", "Advanced", RWS],
    ["experiment", "noun", "实验", "實驗", "Intermediate", RLW],
    ["technological breakthrough", "noun phrase", "技术突破", "技術突破", "Upper Intermediate", RW],
    ["reliability", "noun", "可靠性", "可靠性", "Upper Intermediate", RW],
    ["validity", "noun", "有效性", "有效性", "Advanced", RW],
    ["sample size", "noun phrase", "样本量", "樣本量", "Upper Intermediate", RW],
    ["ethical approval", "noun phrase", "伦理审批", "倫理審批", "Advanced", RW],
    ["replication", "noun", "重复验证；复制研究", "重複驗證；複製研究", "Advanced", RW],
    ["laboratory", "noun", "实验室", "實驗室", "Intermediate", RLW],
    ["fieldwork", "noun", "实地调查；田野调查", "實地調查；田野調查", "Upper Intermediate", RW],
    ["quantitative data", "noun phrase", "定量数据", "定量數據", "Advanced", RW],
    ["qualitative data", "noun phrase", "定性数据", "定性數據", "Advanced", RW],
    ["interdisciplinary research", "noun phrase", "跨学科研究", "跨學科研究", "Advanced", RW],
    ["publication", "noun", "出版物；发表", "出版物；發表", "Intermediate", RW],
    ["research bias", "noun phrase", "研究偏差", "研究偏差", "Advanced", RW],
    ["statistical significance", "noun phrase", "统计显著性", "統計顯著性", "Advanced", RW],
    ["observation", "noun", "观察", "觀察", "Intermediate", RLW],
    ["scientific consensus", "noun phrase", "科学共识", "科學共識", "Advanced", RW],
  ],
  "Art, Photography & Creativity": [
    ["creativity", "noun", "创造力", "創造力", "Intermediate", RWS, ["Creativity"]],
    ["aesthetics", "noun", "美学；审美", "美學；審美", "Advanced", RW],
    ["visual literacy", "noun phrase", "视觉素养", "視覺素養", "Advanced", RW],
    ["composition", "noun", "构图；组成", "構圖；組成", "Intermediate", RWS],
    ["perspective", "noun", "视角；观点", "視角；觀點", "Intermediate", RWS],
    ["exhibition", "noun", "展览", "展覽", "Intermediate", RLW],
    ["cultural expression", "noun phrase", "文化表达", "文化表達", "Upper Intermediate", RWS],
    ["artistic identity", "noun phrase", "艺术身份认同", "藝術身份認同", "Advanced", RW],
    ["public art", "noun phrase", "公共艺术", "公共藝術", "Intermediate", RWS],
    ["creative industry", "noun phrase", "创意产业", "創意產業", "Upper Intermediate", RW],
    ["design thinking", "noun phrase", "设计思维", "設計思維", "Advanced", RW],
    ["originality", "noun", "原创性", "原創性", "Upper Intermediate", RWS],
    ["craftsmanship", "noun", "工艺；手艺", "工藝；手藝", "Upper Intermediate", RW],
    ["digital photography", "noun phrase", "数字摄影", "數碼攝影", "Intermediate", RWS],
    ["visual narrative", "noun phrase", "视觉叙事", "視覺敘事", "Upper Intermediate", RW],
    ["audience interpretation", "noun phrase", "观众解读", "觀眾解讀", "Advanced", RW],
    ["artistic freedom", "noun phrase", "艺术自由", "藝術自由", "Upper Intermediate", RWS],
    ["cultural funding", "noun phrase", "文化经费", "文化經費", "Advanced", RW],
    ["portfolio", "noun", "作品集", "作品集", "Intermediate", RWS],
    ["documentary photography", "noun phrase", "纪实摄影", "紀實攝影", "Upper Intermediate", RW],
    ["visual evidence", "noun phrase", "视觉证据", "視覺證據", "Upper Intermediate", RW],
    ["creative process", "noun phrase", "创作过程", "創作過程", "Intermediate", RWS],
    ["art education", "noun phrase", "艺术教育", "藝術教育", "Intermediate", RWS],
    ["heritage preservation", "noun phrase", "遗产保护", "遺產保育", "Advanced", RW],
    ["cultural tourism", "noun phrase", "文化旅游", "文化旅遊", "Upper Intermediate", RWS],
  ],
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const exampleFor = (word: string, topic: VocabularyTopic, index: number) => {
  const context = topicContexts[topic];
  const templates = [
    {
      en: `The concept of ${word} is useful when analysing debates about ${context.en}.`,
      zh: `“${word}”这个概念很适合用来分析关于${context.zh}的讨论。`,
      yue: `「${word}」呢個概念好適合用嚟分析關於${context.yue}嘅討論。`,
    },
    {
      en: `IELTS candidates can use ${word} to explain causes, effects, or possible solutions in ${context.en}.`,
      zh: `雅思考生可以用“${word}”来解释${context.zh}中的原因、影响或解决方案。`,
      yue: `雅思考生可以用「${word}」嚟解釋${context.yue}入面嘅原因、影響或者解決方法。`,
    },
    {
      en: `A strong essay often links ${word} with practical examples from ${context.en}.`,
      zh: `一篇有说服力的文章通常会把“${word}”和${context.zh}中的实际例子联系起来。`,
      yue: `一篇有說服力嘅文章通常會將「${word}」同${context.yue}入面嘅實際例子連繫起嚟。`,
    },
  ];

  return templates[index % templates.length];
};

export const ieltsVocabulary: IeltsVocabularyItem[] = vocabularyTopics.flatMap((topic) => {
  const context = topicContexts[topic];

  return vocabularySeeds[topic].map(([word, partOfSpeech, meaningZh, meaningYue, level, skills, tags = []], index) => {
    const example = exampleFor(word, topic, index);

    return {
      id: `${slugify(topic)}-${slugify(word)}`,
      word,
      partOfSpeech,
      meaningZh,
      meaningYue,
      topic,
      level,
      skills,
      example: example.en,
      exampleZh: example.zh,
      exampleYue: example.yue,
      tags: Array.from(new Set(["Task 2", "Speaking Part 3", context.tag, ...tags])),
    };
  });
});

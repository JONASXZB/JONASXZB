import type { LocalizedText } from "@/lib/i18n";

export type WritingTaskType = "Task 1" | "Task 2";

export interface WritingPrompt {
  id: string;
  taskType: WritingTaskType;
  questionType: string;
  topic: string;
  level: string;
  prompt: string;
  usefulIdeas: LocalizedText[];
  usefulVocabulary: string[];
  relatedReadingTopic: string;
}

export const writingPrompts: WritingPrompt[] = [
  {
    id: "task2-ai-education",
    taskType: "Task 2",
    questionType: "Advantages / Disadvantages",
    topic: "Technology and Education",
    level: "Intermediate",
    prompt:
      "Artificial intelligence is becoming common in education. Do the advantages of AI learning tools outweigh the disadvantages?",
    usefulIdeas: [
      {
        en: "AI can give students instant feedback and help them practise independently.",
        zh: "AI 可以给学生即时反馈，并帮助他们独立练习。",
        yue: "AI 可以畀學生即時回饋，並幫助佢哋獨立練習。",
      },
      {
        en: "Schools still need clear rules to prevent overdependence and plagiarism.",
        zh: "学校仍需要清晰规则，避免过度依赖和抄袭。",
        yue: "學校仍然需要清晰規則，避免過度依賴同抄襲。",
      },
    ],
    usefulVocabulary: ["instant feedback", "independent learning", "plagiarism", "responsible use"],
    relatedReadingTopic: "Weekly Global Reading: AI and education",
  },
  {
    id: "task2-climate-finance",
    taskType: "Task 2",
    questionType: "Discuss Both Views",
    topic: "Environment and Global Responsibility",
    level: "Advanced",
    prompt:
      "Some people believe climate finance should be a global responsibility. Others think each country should fund its own climate policies. Discuss both views and give your opinion.",
    usefulIdeas: [
      {
        en: "Climate problems cross borders, so international cooperation can be justified.",
        zh: "气候问题跨越国界，因此国际合作具有合理性。",
        yue: "氣候問題跨越國界，所以國際合作有其合理性。",
      },
      {
        en: "Domestic accountability matters because governments must spend public money carefully.",
        zh: "国内问责也很重要，因为政府必须谨慎使用公共资金。",
        yue: "本地問責亦好重要，因為政府必須謹慎使用公共資金。",
      },
    ],
    usefulVocabulary: ["climate finance", "accountability", "adaptation", "shared responsibility"],
    relatedReadingTopic: "Weekly Global Reading: climate finance",
  },
  {
    id: "task2-public-spaces",
    taskType: "Task 2",
    questionType: "Opinion",
    topic: "Cities and Quality of Life",
    level: "Intermediate",
    prompt:
      "Some people think governments should spend more money on parks and public spaces. To what extent do you agree or disagree?",
    usefulIdeas: [
      {
        en: "Public spaces can improve health, social connection, and local business activity.",
        zh: "公共空间可以改善健康、社会联系和本地商业活力。",
        yue: "公共空間可以改善健康、社會連繫同本地商業活力。",
      },
      {
        en: "Spending must be balanced with housing, transport, and basic services.",
        zh: "相关支出也需要与住房、交通和基础服务保持平衡。",
        yue: "相關支出亦需要同住房、交通同基本服務保持平衡。",
      },
    ],
    usefulVocabulary: ["public space", "social infrastructure", "urban design", "quality of life"],
    relatedReadingTopic: "Weekly Global Reading: public spaces",
  },
  {
    id: "task1-renewable-energy",
    taskType: "Task 1",
    questionType: "Line Chart",
    topic: "Energy and Data",
    level: "Intermediate",
    prompt:
      "The line chart shows the share of electricity generated from renewable sources in three countries between 2000 and 2025. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    usefulIdeas: [
      {
        en: "Start with the overall trend before describing individual countries.",
        zh: "先写总体趋势，再描述各个国家的变化。",
        yue: "先寫整體趨勢，再描述各個國家嘅變化。",
      },
      {
        en: "Compare the highest, lowest, and fastest-changing figures.",
        zh: "比较最高、最低和变化最快的数据。",
        yue: "比較最高、最低同變化最快嘅數據。",
      },
    ],
    usefulVocabulary: ["rose steadily", "fluctuated", "accounted for", "renewable sources"],
    relatedReadingTopic: "Reading resources: Our World in Data",
  },
  {
    id: "task1-study-time",
    taskType: "Task 1",
    questionType: "Bar Chart",
    topic: "Education",
    level: "Beginner",
    prompt:
      "The bar chart compares the average number of hours per week that students in four age groups spend on online learning. Summarize the main features and make comparisons where relevant.",
    usefulIdeas: [
      {
        en: "Group similar age ranges together instead of describing every bar separately.",
        zh: "把相似年龄段放在一起比较，不要逐个柱子机械描述。",
        yue: "將相似年齡段放埋一齊比較，唔好逐個柱機械描述。",
      },
      {
        en: "Use approximate language if exact numbers are not important.",
        zh: "如果精确数字不重要，可以使用约数表达。",
        yue: "如果精確數字唔重要，可以使用約數表達。",
      },
    ],
    usefulVocabulary: ["average", "approximately", "compared with", "age group"],
    relatedReadingTopic: "Weekly Global Reading: education technology",
  },
];

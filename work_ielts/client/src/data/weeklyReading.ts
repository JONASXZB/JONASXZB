export type ReadingLevel = "Beginner" | "Intermediate" | "Advanced";

export interface WeeklyReadingItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  date: string;
  week: string;
  region: string;
  category: string;
  level: ReadingLevel;
  summary: string;
  whyItMatters: string;
  keyVocabulary: Array<{
    word: string;
    meaning: string;
  }>;
  usefulExpression: string;
  discussionQuestion: string;
  writingPrompt: string;
}

export const weeklyReadings: WeeklyReadingItem[] = [
  {
    id: "2026-w18-climate-finance",
    title: "Climate Finance Returns to the Global Agenda",
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news",
    date: "2026-05-02",
    week: "2026 Week 18",
    region: "Global",
    category: "Environment",
    level: "Intermediate",
    summary:
      "Governments and international organizations are discussing how richer economies can support lower-income countries facing climate-related costs. The debate focuses on funding, accountability, and practical adaptation projects.",
    whyItMatters:
      "IELTS candidates can use this topic to discuss responsibility, global cooperation, public funding, and the long-term effects of environmental policy.",
    keyVocabulary: [
      { word: "adaptation", meaning: "changes made to deal with new conditions" },
      { word: "accountability", meaning: "responsibility for decisions and results" },
      { word: "funding gap", meaning: "the difference between needed money and available money" },
    ],
    usefulExpression: "A key challenge is balancing immediate costs with long-term benefits.",
    discussionQuestion: "Should wealthier countries pay more for climate adaptation in poorer countries?",
    writingPrompt:
      "Some people believe climate funding should be a global responsibility, while others think each country should pay for its own adaptation. Discuss both views and give your opinion.",
  },
  {
    id: "2026-w18-ai-education",
    title: "Schools Reconsider How Students Should Use AI Tools",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/",
    date: "2026-05-01",
    week: "2026 Week 18",
    region: "Global",
    category: "Technology",
    level: "Intermediate",
    summary:
      "Education leaders are creating clearer rules for artificial intelligence in classrooms. Some schools encourage AI for planning and feedback, while others worry about plagiarism and weaker independent thinking.",
    whyItMatters:
      "This is a strong IELTS topic because it connects technology, education quality, fairness, and the future of work.",
    keyVocabulary: [
      { word: "plagiarism", meaning: "using another person's work or ideas as your own" },
      { word: "independent thinking", meaning: "forming ideas without relying too much on others" },
      { word: "guideline", meaning: "an official suggestion about how to do something" },
    ],
    usefulExpression: "The benefits are clear, but they depend on responsible use.",
    discussionQuestion: "Can AI tools improve learning without making students too dependent on them?",
    writingPrompt:
      "Artificial intelligence is becoming common in education. Do the advantages of AI learning tools outweigh the disadvantages?",
  },
  {
    id: "2026-w18-food-prices",
    title: "Food Prices Put Pressure on Urban Families",
    source: "Financial Times",
    sourceUrl: "https://www.ft.com/",
    date: "2026-04-30",
    week: "2026 Week 18",
    region: "Europe",
    category: "Economy",
    level: "Advanced",
    summary:
      "Many households are changing their spending habits as food prices remain high in major cities. Economists point to transport costs, supply chains, weather events, and consumer demand as possible factors.",
    whyItMatters:
      "The topic helps learners practise cause-and-effect language for inflation, living standards, and government support.",
    keyVocabulary: [
      { word: "household budget", meaning: "the money a family plans to spend" },
      { word: "supply chain", meaning: "the system that moves products from producers to buyers" },
      { word: "living standards", meaning: "the level of comfort and wealth people have" },
    ],
    usefulExpression: "Rising prices can place a disproportionate burden on low-income families.",
    discussionQuestion: "What should governments do when basic living costs rise quickly?",
    writingPrompt:
      "The cost of basic goods is increasing in many countries. What are the causes of this problem, and what solutions can governments offer?",
  },
  {
    id: "2026-w18-public-health",
    title: "Cities Promote Walking as a Public Health Strategy",
    source: "AP News",
    sourceUrl: "https://apnews.com/",
    date: "2026-04-29",
    week: "2026 Week 18",
    region: "Americas",
    category: "Health",
    level: "Beginner",
    summary:
      "Several cities are improving pavements, crossings, and green spaces to encourage residents to walk more. Officials say walkable neighborhoods can support health, local business, and cleaner air.",
    whyItMatters:
      "This article gives IELTS learners practical vocabulary for health, transport, city planning, and lifestyle change.",
    keyVocabulary: [
      { word: "walkable", meaning: "easy and safe to walk around" },
      { word: "resident", meaning: "a person who lives in a place" },
      { word: "green space", meaning: "an area with grass, trees, or plants" },
    ],
    usefulExpression: "Small changes to public spaces can influence everyday behaviour.",
    discussionQuestion: "What makes a city comfortable for walking?",
    writingPrompt:
      "Some cities are investing more money in walking and cycling paths than in roads for cars. Is this a positive or negative development?",
  },
  {
    id: "2026-w17-ocean-research",
    title: "Scientists Expand Ocean Monitoring Projects",
    source: "Nature",
    sourceUrl: "https://www.nature.com/",
    date: "2026-04-25",
    week: "2026 Week 17",
    region: "Global",
    category: "Science",
    level: "Advanced",
    summary:
      "Researchers are using sensors, satellites, and autonomous vehicles to collect more information about ocean temperature, biodiversity, and pollution. The data may improve climate models and conservation plans.",
    whyItMatters:
      "IELTS candidates can practise describing research methods, environmental evidence, and the relationship between science and policy.",
    keyVocabulary: [
      { word: "autonomous", meaning: "able to operate without direct human control" },
      { word: "biodiversity", meaning: "the variety of living things in an area" },
      { word: "conservation", meaning: "protection of nature and wildlife" },
    ],
    usefulExpression: "Reliable data is essential for evidence-based decision-making.",
    discussionQuestion: "Should governments spend more on monitoring natural environments?",
    writingPrompt:
      "Scientific research is expensive but important for environmental protection. To what extent do you agree or disagree?",
  },
  {
    id: "2026-w17-youth-work",
    title: "Young Workers Seek Flexibility and Clear Career Paths",
    source: "The Guardian",
    sourceUrl: "https://www.theguardian.com/international",
    date: "2026-04-24",
    week: "2026 Week 17",
    region: "Global",
    category: "Society",
    level: "Intermediate",
    summary:
      "Employers are adjusting workplace policies as younger employees ask for flexible schedules, skills training, and more transparent promotion routes. Managers are trying to balance productivity with changing expectations.",
    whyItMatters:
      "The issue is useful for IELTS speaking and writing questions about employment, work-life balance, motivation, and generational change.",
    keyVocabulary: [
      { word: "flexible schedule", meaning: "working hours that can change when needed" },
      { word: "promotion route", meaning: "the path to a higher position at work" },
      { word: "work-life balance", meaning: "a healthy division between work and personal life" },
    ],
    usefulExpression: "Workplace expectations have shifted significantly in recent years.",
    discussionQuestion: "What matters more in a job: flexibility, salary, or career development?",
    writingPrompt:
      "Many young people prefer jobs with flexible working conditions. Do you think this trend has more benefits or drawbacks?",
  },
];

export const weeklyReadingWeeks = Array.from(new Set(weeklyReadings.map((item) => item.week)));

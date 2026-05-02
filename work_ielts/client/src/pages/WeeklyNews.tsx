import { useMemo, useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/TopNav";
import { weeklyReadings, weeklyReadingWeeks, type Locale, type WeeklyReadingItem } from "@/data/weeklyReading";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Globe,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  PenLine,
  Quote,
  Tag,
} from "lucide-react";

const pageText: Record<Locale, {
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
  whyItMatters: string;
  usefulExpression: string;
  keyVocabulary: string;
  discussionQuestion: string;
  writingPrompt: string;
  readOriginalArticle: string;
  level: string;
  sourceType: string;
  free: string;
  all: string;
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
    whyItMatters: "Why It Matters",
    usefulExpression: "Useful Expression",
    keyVocabulary: "Key Vocabulary",
    discussionQuestion: "Discussion Question",
    writingPrompt: "Writing Prompt",
    readOriginalArticle: "Read original article",
    level: "Level",
    sourceType: "Source Type",
    free: "Free",
    all: "All",
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
    whyItMatters: "为什么重要",
    usefulExpression: "实用表达",
    keyVocabulary: "核心词汇",
    discussionQuestion: "讨论问题",
    writingPrompt: "写作题目",
    readOriginalArticle: "阅读原文",
    level: "难度",
    sourceType: "来源类型",
    free: "免费",
    all: "全部",
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
    whyItMatters: "點解重要",
    usefulExpression: "實用表達",
    keyVocabulary: "核心詞彙",
    discussionQuestion: "討論問題",
    writingPrompt: "寫作題目",
    readOriginalArticle: "閱讀原文",
    level: "難度",
    sourceType: "來源類型",
    free: "免費",
    all: "全部",
  },
};

const optionLabels: Record<Locale, Record<string, string>> = {
  en: {},
  zh: {
    All: "全部",
    Global: "全球",
    Americas: "美洲",
    Environment: "环境",
    Technology: "科技",
    Economy: "经济",
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

const categoryColors: Record<string, { bg: string; text: string }> = {
  Environment: { bg: "bg-emerald-50", text: "text-emerald-700" },
  Technology: { bg: "bg-blue-50", text: "text-blue-700" },
  Economy: { bg: "bg-violet-50", text: "text-violet-700" },
  Health: { bg: "bg-rose-50", text: "text-rose-700" },
  Science: { bg: "bg-cyan-50", text: "text-cyan-700" },
  Society: { bg: "bg-amber-50", text: "text-amber-700" },
};

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-sky-50 text-sky-700",
  Advanced: "bg-indigo-50 text-indigo-700",
};

export default function WeeklyNews() {
  const [language, setLanguage] = useState<Locale>("en");
  const [selectedWeek, setSelectedWeek] = useState(weeklyReadingWeeks[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedArticleId, setSelectedArticleId] = useState(weeklyReadings[0]?.id);
  const t = pageText[language];

  const weekItems = weeklyReadings.filter((item) => item.week === selectedWeek);
  const categories = ["All", ...Array.from(new Set(weekItems.map((item) => item.category)))];
  const regions = ["All", ...Array.from(new Set(weekItems.map((item) => item.region)))];

  const filteredArticles = weekItems.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const regionMatch = selectedRegion === "All" || item.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  const selectedArticle = useMemo(() => {
    return (
      filteredArticles.find((item) => item.id === selectedArticleId) ||
      filteredArticles[0] ||
      weekItems[0] ||
      weeklyReadings[0]
    );
  }, [filteredArticles, selectedArticleId, weekItems]);

  const handleWeekChange = (week: string) => {
    const nextWeekItems = weeklyReadings.filter((item) => item.week === week);
    setSelectedWeek(week);
    setSelectedCategory("All");
    setSelectedRegion("All");
    setSelectedArticleId(nextWeekItems[0]?.id);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <TopNav language={language} onLanguageChange={setLanguage} />

      <main className="container py-12 sm:py-16">
        <section className="mb-10 grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-5xl font-semibold leading-tight text-slate-950 md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {t.subtitle}
            </p>
          </div>

          <Card className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="font-semibold text-slate-950">{t.learningFocus}</strong>{" "}
              {t.learningFocusBody}
            </p>
          </Card>
        </section>

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-5 xl:grid-cols-[1.1fr_1fr_1fr]">
            <FilterGroup
              title={t.archive}
              icon={<Calendar className="h-4 w-4" />}
              options={weeklyReadingWeeks}
              selected={selectedWeek}
              onSelect={handleWeekChange}
              language={language}
            />
            <FilterGroup
              title={t.category}
              icon={<Tag className="h-4 w-4" />}
              options={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              language={language}
            />
            <FilterGroup
              title={t.region}
              icon={<Globe className="h-4 w-4" />}
              options={regions}
              selected={selectedRegion}
              onSelect={setSelectedRegion}
              language={language}
            />
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-slate-950">{t.readingList}</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                {filteredArticles.length} {t.lessons}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {filteredArticles.map((item) => (
                <ArticleCard
                  key={item.id}
                  item={item}
                  active={item.id === selectedArticle.id}
                  onSelect={() => setSelectedArticleId(item.id)}
                  language={language}
                />
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white py-14 text-center text-slate-500">
                {t.noLessons}
              </div>
            )}
          </div>

          {selectedArticle && <ReadingLesson article={selectedArticle} language={language} />}
        </section>
      </main>
    </div>
  );
}

function ArticleCard({
  item,
  active,
  onSelect,
  language,
}: {
  item: WeeklyReadingItem;
  active: boolean;
  onSelect: () => void;
  language: Locale;
}) {
  const catColor = categoryColors[item.category] || { bg: "bg-slate-100", text: "text-slate-700" };
  const t = pageText[language];

  return (
    <button onClick={onSelect} className="group text-left">
      <Card
        className={`h-full rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${
          active ? "border-blue-300 ring-2 ring-blue-100" : "border-slate-200"
        }`}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${catColor.bg} ${catColor.text}`}>
              {labelFor(item.category, language)}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {labelFor(item.region, language)}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
        </div>

        <h3 className="text-xl font-semibold leading-8 text-slate-950 transition group-hover:text-blue-700">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.summary[language]}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 text-sm text-slate-500">
          <span>{item.source}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[item.level]}`}>
            {t.level}: {labelFor(item.level, language)}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
            {t.sourceType}: {labelFor(item.sourceType, language)}
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{t.free}</span>
        </div>
      </Card>
    </button>
  );
}

function ReadingLesson({ article, language }: { article: WeeklyReadingItem; language: Locale }) {
  const catColor = categoryColors[article.category] || { bg: "bg-slate-100", text: "text-slate-700" };
  const t = pageText[language];

  return (
    <Card className="sticky top-28 rounded-3xl border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div className="mb-6 flex flex-wrap gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${catColor.bg} ${catColor.text}`}>
          {labelFor(article.category, language)}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {labelFor(article.region, language)}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[article.level]}`}>
          {t.level}: {labelFor(article.level, language)}
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {t.sourceType}: {labelFor(article.sourceType, language)}
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {t.free}
        </span>
      </div>

      <div className="border-b border-slate-100 pb-6">
        <p className="mb-3 text-sm font-semibold text-blue-700">{article.week} · {article.date}</p>
        <h2 className="text-3xl font-semibold leading-tight text-slate-950">{article.title}</h2>
        <p className="mt-5 text-base leading-8 text-slate-600">{article.summary[language]}</p>
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          {t.readOriginalArticle}: {article.source}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 py-6 md:grid-cols-2">
        <LearningBlock icon={<Lightbulb className="h-5 w-5" />} title={t.whyItMatters}>
          <p>{article.whyItMatters[language]}</p>
        </LearningBlock>
        <LearningBlock icon={<Quote className="h-5 w-5" />} title={t.usefulExpression}>
          <p className="font-medium text-slate-950">{article.usefulExpression[language]}</p>
          <p className="mt-2">{article.usefulExpressionExplanation[language]}</p>
        </LearningBlock>
      </div>

      <div className="border-t border-slate-100 pt-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-950">
          <GraduationCap className="h-5 w-5 text-blue-700" />
          {t.keyVocabulary}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {article.keyVocabulary.map((item) => (
            <div key={item.word} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
              <p className="text-sm font-semibold text-slate-950">{item.word}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.meaning[language]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <LearningBlock icon={<MessageSquare className="h-5 w-5" />} title={t.discussionQuestion}>
          <p>{article.discussionQuestion[language]}</p>
        </LearningBlock>
        <LearningBlock icon={<PenLine className="h-5 w-5" />} title={t.writingPrompt}>
          <p>{article.writingPrompt[language]}</p>
        </LearningBlock>
      </div>
    </Card>
  );
}

function LearningBlock({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
        <span className="text-blue-700">{icon}</span>
        {title}
      </div>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function FilterGroup({
  title,
  icon,
  options,
  selected,
  onSelect,
  language,
}: {
  title: string;
  icon: ReactNode;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  language: Locale;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
        {icon}
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              selected === option
                ? "bg-slate-950 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
            }`}
          >
            {labelFor(option, language)}
          </button>
        ))}
      </div>
    </div>
  );
}

function labelFor(value: string, language: Locale) {
  return optionLabels[language][value] || value;
}

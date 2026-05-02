import { useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/TopNav";
import { ArrowRight, Calendar, Globe, Newspaper, Tag } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  content?: string;
  source: string;
  sourceUrl: string;
  category: string;
  region: string;
  englishLevel: "Beginner" | "Intermediate" | "Advanced";
  imageUrl?: string;
  publishedAt: string;
  weekNumber: number;
  year: number;
}

const mockWeeklyNews: NewsItem[] = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    description: "World leaders agree on unprecedented measures to combat climate change, with binding commitments from major economies.",
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news",
    category: "Environment",
    region: "Global",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 2,
    title: "Tech Giants Announce New AI Collaboration Framework",
    description: "Leading technology companies establish joint initiative to develop ethical AI standards and safety protocols.",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/",
    category: "Technology",
    region: "Global",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 3,
    title: "European Central Bank Adjusts Interest Rates in Response to Economic Growth",
    description: "ECB implements policy changes following stronger-than-expected economic indicators across the eurozone.",
    source: "Financial Times",
    sourceUrl: "https://www.ft.com/",
    category: "Economics",
    region: "Europe",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 4,
    title: "Breakthrough in Medical Research Offers New Hope for Rare Diseases",
    description: "Scientists announce successful clinical trials for innovative treatment targeting previously incurable genetic disorders.",
    source: "Nature",
    sourceUrl: "https://www.nature.com/",
    category: "Science",
    region: "Global",
    englishLevel: "Advanced",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 5,
    title: "Asian Markets Show Strong Recovery Following Trade Agreement",
    description: "Regional stock markets surge as major trade partners announce comprehensive economic cooperation framework.",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com/",
    category: "Business",
    region: "Asia",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  },
  {
    id: 6,
    title: "International Space Agency Launches Ambitious Mars Exploration Mission",
    description: "Historic joint mission by multiple nations aims to establish first permanent research station on the Red Planet.",
    source: "AP News",
    sourceUrl: "https://apnews.com/",
    category: "Science",
    region: "Global",
    englishLevel: "Intermediate",
    publishedAt: new Date().toISOString(),
    weekNumber: 18,
    year: 2026
  }
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Environment": { bg: "bg-emerald-50", text: "text-emerald-700" },
  "Technology": { bg: "bg-blue-50", text: "text-blue-700" },
  "Economics": { bg: "bg-violet-50", text: "text-violet-700" },
  "Science": { bg: "bg-cyan-50", text: "text-cyan-700" },
  "Business": { bg: "bg-amber-50", text: "text-amber-700" },
  "Politics": { bg: "bg-rose-50", text: "text-rose-700" }
};

const regionColors: Record<string, string> = {
  "Global": "bg-slate-100 text-slate-700",
  "Asia": "bg-orange-50 text-orange-700",
  "Europe": "bg-blue-50 text-blue-700",
  "Americas": "bg-emerald-50 text-emerald-700",
  "Africa": "bg-yellow-50 text-yellow-700"
};

const levelColors: Record<string, string> = {
  "Beginner": "bg-emerald-50 text-emerald-700",
  "Intermediate": "bg-sky-50 text-sky-700",
  "Advanced": "bg-indigo-50 text-indigo-700"
};

export default function WeeklyNews() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [language, setLanguage] = useState<"en" | "zh" | "yue">("en");

  const categories = ["All", ...Array.from(new Set(mockWeeklyNews.map(n => n.category)))];
  const regions = ["All", ...Array.from(new Set(mockWeeklyNews.map(n => n.region)))];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredNews = mockWeeklyNews.filter(item => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const regionMatch = selectedRegion === "All" || item.region === selectedRegion;
    const levelMatch = selectedLevel === "All" || item.englishLevel === selectedLevel;
    return categoryMatch && regionMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <TopNav language={language} onLanguageChange={setLanguage} />

      <main className="container py-12 sm:py-16">
        <section className="mb-10 grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <Newspaper className="h-6 w-6" />
            </div>
            <h1 className="text-5xl font-semibold leading-tight text-slate-950 md:text-6xl">
              Weekly Global News
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              每周精选国际重点新闻 | Curated global news stories with English learning focus.
            </p>
          </div>

          <Card className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-7 text-slate-600">
              <strong className="font-semibold text-slate-950">Learning focus:</strong>{" "}
              Read concise international stories from sources such as BBC, Reuters, Financial Times, Nature, and AP News. Use filters to choose the topic, region, and English level that fits your current IELTS practice.
            </p>
          </Card>
        </section>

        <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-5 lg:grid-cols-3">
            <FilterGroup
              title="Topic"
              icon={<Tag className="h-4 w-4" />}
              options={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <FilterGroup
              title="Region"
              icon={<Globe className="h-4 w-4" />}
              options={regions}
              selected={selectedRegion}
              onSelect={setSelectedRegion}
            />
            <FilterGroup
              title="Level"
              icon={<Calendar className="h-4 w-4" />}
              options={levels}
              selected={selectedLevel}
              onSelect={setSelectedLevel}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredNews.map(item => {
            const catColor = categoryColors[item.category] || { bg: "bg-slate-100", text: "text-slate-700" };
            return (
              <a key={item.id} href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${catColor.bg} ${catColor.text}`}>
                        {item.category}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${regionColors[item.region] || "bg-slate-100 text-slate-700"}`}>
                        {item.region}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                  </div>

                  <h2 className="text-xl font-semibold leading-8 text-slate-950 transition group-hover:text-blue-700">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      {item.source}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Week {item.weekNumber}
                    </span>
                  </div>

                  <span className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${levelColors[item.englishLevel]}`}>
                    {item.englishLevel}
                  </span>
                </Card>
              </a>
            );
          })}
        </section>

        {filteredNews.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white py-14 text-center text-slate-500">
            No news items match your filters.
          </div>
        )}
      </main>
    </div>
  );
}

function FilterGroup({
  title,
  icon,
  options,
  selected,
  onSelect,
}: {
  title: string;
  icon: ReactNode;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
        {icon}
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              selected === option
                ? "bg-slate-950 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

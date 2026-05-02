import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TopNav } from "@/components/TopNav";
import { SpeakingPractice } from "@/components/SpeakingPractice";
import { WritingPractice } from "@/components/WritingPractice";
import { listeningAccentResources } from "@/data/listeningAccentResources";
import { listeningResources } from "@/data/listeningResources";
import { readingResourceGroups, readingResources } from "@/data/readingResources";
import { speakingResources } from "@/data/speakingResources";
import { writingResources } from "@/data/writingResources";
import { weeklyReadings } from "@/data/weeklyReading";
import { homeLabels, type Locale } from "@/lib/i18n";
import { ArrowRight, BookOpen, Headphones, MessageSquare, FileText, Zap, Globe, TrendingUp, Newspaper } from "lucide-react";
import { useLocation } from "wouter";

const resourcesData = {
  listening: {
    title: "Listening",
    icon: Headphones,
    description: "Master audio comprehension with expert strategies",
    color: "from-blue-500 to-cyan-500",
    categories: {
      "Official Resources": [
        {
          title: "Official IELTS Prep",
          desc: "Official guidelines & practice materials from IELTS",
          url: "https://ielts.org/take-a-test/preparation-resources",
          tag: "Official",
          type: "learning"
        },
        {
          title: "British Council Listening",
          desc: "Official timed practice tests from British Council",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Practice Platforms": [
        {
          title: "IELTS Online Tests",
          desc: "Free full-length mock exams with answer keys",
          url: "https://ieltsonlinetests.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "Mini-IELTS",
          desc: "Extensive free practice bank with latest tests",
          url: "https://mini-ielts.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Podcast",
          desc: "Audio practice and speaking topics",
          url: "https://www.ieltspodcast.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "Expert Resources": [
        {
          title: "IELTS Liz Listening",
          desc: "Top curated resources & expert tips",
          url: "https://ieltsliz.com/ielts-listening-tips/",
          tag: "Expert",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "IELTS Ready (British Council)",
          desc: "AI-scored feedback & premium tools",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-ready",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "Magoosh IELTS",
          desc: "Video lessons & comprehensive practice",
          url: "https://magoosh.com/ielts/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  reading: {
    title: "Reading",
    icon: BookOpen,
    description: "Develop skimming, scanning & comprehension skills",
    color: "from-emerald-500 to-teal-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Reading",
          desc: "Official timed practice tests",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/reading",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Practice Platforms": [
        {
          title: "Mini-IELTS Reading",
          desc: "Extensive free practice bank with categorized passages",
          url: "https://mini-ielts.com/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Material Reading",
          desc: "Tips, books, lessons & actual past papers",
          url: "https://ieltsmaterial.com/ielts-reading-tips-books-lessons-practice-tests-and-actual-tests/",
          tag: "Free",
          type: "learning"
        }
      ],
      "Expert Resources": [
        {
          title: "IELTS Liz Reading",
          desc: "Strategies, tips & comprehensive exercises",
          url: "https://ieltsliz.com/useful-websites-and-resources-for-ielts/",
          tag: "Expert",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "Cambridge English Books",
          desc: "Official IELTS preparation materials",
          url: "https://www.cambridge.org/gb/cambridgeenglish/catalog/cambridge-english-exams-ielts/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  writing: {
    title: "Writing",
    icon: FileText,
    description: "Master Task 1 & 2 with AI feedback & expert guidance",
    color: "from-purple-500 to-pink-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Writing",
          desc: "Official writing practice tests & guidelines",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/writing",
          tag: "Official",
          type: "learning"
        }
      ],
      "Free Resources": [
        {
          title: "IELTS Liz Writing",
          desc: "Task 1 & 2 tips, model answers & video lessons",
          url: "https://ieltsliz.com/ielts-writing-task-1-lessons-and-tips/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Material Writing",
          desc: "Comprehensive lessons, strategies & model essays",
          url: "https://ieltsmaterial.com/useful-ielts-writing-lessons-websites/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Buddy",
          desc: "Free essay checker, model essays & interactive courses",
          url: "https://www.ieltsbuddy.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "AI Feedback Tools": [
        {
          title: "LexiBot AI Checker",
          desc: "Free AI-powered essay scoring & error detection",
          url: "https://www.lexibot.me/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "Cathoven AI Checker",
          desc: "AI-powered IELTS preparation with instant feedback",
          url: "https://www.cathoven.com/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "TestGlider",
          desc: "Free IELTS practice tests with AI grading",
          url: "https://www.testglider.com/ielts/en",
          tag: "AI Tool",
          type: "learning"
        }
      ],
      "Premium Resources": [
        {
          title: "EduBenchmark Correction",
          desc: "Professional teacher feedback & band score estimates",
          url: "https://edubenchmark.com/ielts-writing-correction",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  },
  speaking: {
    title: "Speaking",
    icon: MessageSquare,
    description: "Build confidence with AI simulators & topic banks",
    color: "from-orange-500 to-red-500",
    categories: {
      "Official Resources": [
        {
          title: "British Council Speaking",
          desc: "Official speaking practice tests & guidelines",
          url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/speaking",
          tag: "Official",
          type: "learning"
        }
      ],
      "Topic Banks & Strategies": [
        {
          title: "Keith Speaking Academy",
          desc: "2025 common topics with key vocabulary & sample answers",
          url: "https://keithspeakingacademy.com/common-ielts-speaking-topics-2025/",
          tag: "Topics",
          type: "learning"
        },
        {
          title: "IELTS Material Topics",
          desc: "Recent Part 2 & 3 topics with model answers & analysis",
          url: "https://ieltsmaterial.com/50-ielts-speaking-part-2-3-topics-2020-with-model-answers/",
          tag: "Topics",
          type: "learning"
        },
        {
          title: "IELTS Buddy Speaking",
          desc: "Speaking lessons, sample answers & practice tips",
          url: "https://www.ieltsbuddy.com/",
          tag: "Free",
          type: "learning"
        }
      ],
      "AI Speaking Simulators": [
        {
          title: "Intellecta AI Simulator",
          desc: "Free AI practice with instant feedback on fluency & accuracy",
          url: "https://intellecta.app/tools/ielts-speaking-practice-test",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "Speechful AI",
          desc: "AI examiner with accurate band score estimates",
          url: "https://speechful.ai/",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "SmallTalk2 AI Speaking",
          desc: "Free AI simulator with instant grading",
          url: "https://smalltalk2.me/ielts",
          tag: "AI Tool",
          type: "learning"
        },
        {
          title: "IELTS Speaking Simulator",
          desc: "Real-time AI conversation with detailed feedback",
          url: "https://ielts.hubeiqiao.com/",
          tag: "AI Tool",
          type: "learning"
        }
      ]
    }
  },
  vocabulary: {
    title: "Vocabulary & Grammar",
    icon: TrendingUp,
    description: "Build comprehensive vocabulary and master grammar structures",
    color: "from-indigo-500 to-purple-500",
    categories: {
      "Free Learning Resources": [
        {
          title: "IELTS Liz Vocabulary",
          desc: "Word lists, exercises & pronunciation guides",
          url: "https://ieltsliz.com/vocabulary/",
          tag: "Free",
          type: "learning"
        },
        {
          title: "BBC Learning English",
          desc: "Comprehensive English lessons, grammar & vocabulary",
          url: "https://www.bbc.co.uk/learningenglish",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Grammar Practice",
          desc: "120+ free grammar exercises",
          url: "https://ieltsonlinetests.com/ielts-grammar",
          tag: "Free",
          type: "learning"
        },
        {
          title: "IELTS Buddy Grammar",
          desc: "Grammar lessons focused on writing & speaking",
          url: "https://www.ieltsbuddy.com/ielts-grammar.html",
          tag: "Free",
          type: "learning"
        }
      ],
      "Premium Vocabulary Apps": [
        {
          title: "IELTS Vocab Builder",
          desc: "Band 6-9 targeted vocabulary drills",
          url: "https://apps.apple.com/us/app/ielts-vocab-builder-band-6-9/id6754558834",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "Voca Pro - IELTS Vocabulary",
          desc: "Vocabulary by topic with progress tracking",
          url: "https://play.google.com/store/apps/details?id=com.labianlabs.ieltsvocab",
          tag: "Premium",
          type: "learning"
        },
        {
          title: "WordUp Vocabulary App",
          desc: "Smart vocabulary learning for IELTS & TOEFL",
          url: "https://www.wordupapp.co/",
          tag: "Premium",
          type: "learning"
        }
      ]
    }
  }
};

const thinkTankResources = {
  "🏛️ Global Think Tanks - Policy & International Affairs": [
    {
      title: "Council on Foreign Relations (CFR)",
      desc: "International relations, foreign policy & global affairs analysis",
      url: "https://www.cfr.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Brookings Institution",
      desc: "Public policy, economics, governance & social issues research",
      url: "https://www.brookings.edu/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Carnegie Endowment for International Peace",
      desc: "International peace, diplomacy & strategic analysis",
      url: "https://carnegieendowment.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Atlantic Council",
      desc: "US foreign policy, NATO & transatlantic relations",
      url: "https://www.atlanticcouncil.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "American Enterprise Institute (AEI)",
      desc: "Economics, defense & foreign policy analysis",
      url: "https://www.aei.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Heritage Foundation",
      desc: "Conservative policy analysis, economics & defense",
      url: "https://www.heritage.org/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "RAND Corporation",
      desc: "Research, development & policy analysis",
      url: "https://www.rand.org/",
      level: "Advanced/Academic",
      free: true,
      country: "United States",
      type: "thinktank"
    },
    {
      title: "Chatham House - Royal Institute of International Affairs",
      desc: "International affairs, geopolitics & policy research",
      url: "https://www.chathamhouse.org/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      type: "thinktank"
    },
    {
      title: "Bruegel",
      desc: "European economics, policy & integration research",
      url: "https://www.bruegel.org/",
      level: "Advanced",
      free: true,
      country: "Belgium",
      type: "thinktank"
    },
    {
      title: "French Institute of International Relations (IFRI)",
      desc: "International relations & French foreign policy",
      url: "https://www.ifri.org/",
      level: "Advanced",
      free: true,
      country: "France",
      type: "thinktank"
    },
    {
      title: "Lowy Institute",
      desc: "Asia-Pacific policy & international relations research",
      url: "https://www.lowyinstitute.org/",
      level: "Advanced",
      free: true,
      country: "Australia",
      type: "thinktank"
    },
    {
      title: "Observer Research Foundation (ORF)",
      desc: "Security, strategy, economy & development analysis",
      url: "https://www.orfonline.org/",
      level: "Advanced",
      free: true,
      country: "India",
      type: "thinktank"
    }
  ],
  "📰 Premium Newspapers - Global Leaders": [
    {
      title: "The New York Times",
      desc: "US and international news, analysis & opinion",
      url: "https://www.nytimes.com/",
      level: "Advanced",
      free: false,
      freeLimit: "3-4 articles/month",
      country: "United States",
      founded: "1851",
      type: "newspaper"
    },
    {
      title: "The Washington Post",
      desc: "US politics, international news & investigation",
      url: "https://www.washingtonpost.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      founded: "1877",
      type: "newspaper"
    },
    {
      title: "The Guardian",
      desc: "International news, politics, culture & investigation",
      url: "https://www.theguardian.com/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      founded: "1821",
      type: "newspaper"
    },
    {
      title: "Financial Times",
      desc: "Business, economics, markets & politics analysis",
      url: "https://www.ft.com/",
      level: "Advanced",
      free: false,
      freeLimit: "3-4 articles/month",
      country: "United Kingdom",
      founded: "1888",
      type: "newspaper"
    },
    {
      title: "The Times",
      desc: "UK and international news, analysis & opinion",
      url: "https://www.thetimes.com/",
      level: "Advanced",
      free: false,
      country: "United Kingdom",
      founded: "1785",
      type: "newspaper"
    },
    {
      title: "The Telegraph",
      desc: "UK and international news, politics & culture",
      url: "https://www.telegraph.co.uk/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United Kingdom",
      founded: "1855",
      type: "newspaper"
    },
    {
      title: "The Independent",
      desc: "Independent journalism, news & analysis",
      url: "https://www.independent.co.uk/",
      level: "Advanced",
      free: true,
      country: "United Kingdom",
      founded: "1986",
      type: "newspaper"
    },
    {
      title: "The Economist",
      desc: "Economics, politics, business & culture analysis",
      url: "https://www.economist.com/",
      level: "Advanced",
      free: false,
      freeLimit: "5 articles/week",
      country: "United Kingdom",
      founded: "1843",
      type: "newspaper"
    }
  ],
  "📡 International News Agencies - Breaking News": [
    {
      title: "BBC News",
      desc: "International news, analysis & investigation",
      url: "https://www.bbc.com/news",
      level: "Intermediate-Advanced",
      free: true,
      country: "United Kingdom",
      type: "newsagency"
    },
    {
      title: "Reuters",
      desc: "Global news, business & markets coverage",
      url: "https://www.reuters.com/",
      level: "Advanced",
      free: true,
      country: "International",
      type: "newsagency"
    },
    {
      title: "Associated Press (AP)",
      desc: "US and international news coverage",
      url: "https://apnews.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "newsagency"
    },
    {
      title: "Agence France-Presse (AFP)",
      desc: "International news coverage",
      url: "https://www.afp.com/",
      level: "Advanced",
      free: true,
      country: "France",
      type: "newsagency"
    }
  ],
  "📊 Business & Economics Publications": [
    {
      title: "The Wall Street Journal",
      desc: "Business, markets, economics & politics",
      url: "https://www.wsj.com/",
      level: "Advanced",
      free: false,
      country: "United States",
      type: "business"
    },
    {
      title: "Bloomberg",
      desc: "Markets, business, economics & politics",
      url: "https://www.bloomberg.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      type: "business"
    }
  ],
  "🔬 Science & Technology Publications": [
    {
      title: "Wired",
      desc: "Technology, business, culture & science",
      url: "https://www.wired.com/",
      level: "Advanced",
      free: false,
      freeLimit: "Limited",
      country: "United States",
      type: "tech"
    },
    {
      title: "TechCrunch",
      desc: "Technology, startups & innovation news",
      url: "https://techcrunch.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "tech"
    },
    {
      title: "Nature",
      desc: "Science, research & discovery journal",
      url: "https://www.nature.com/",
      level: "Advanced/Academic",
      free: false,
      freeLimit: "Limited",
      country: "United Kingdom",
      type: "science"
    },
    {
      title: "Science Daily",
      desc: "Science news & research coverage",
      url: "https://www.sciencedaily.com/",
      level: "Advanced",
      free: true,
      country: "United States",
      type: "science"
    }
  ],
  "🌐 Learning-Focused News & Ideas": [
    {
      title: "BBC Learning English - News",
      desc: "News stories with vocabulary explanations & audio",
      url: "https://www.bbc.co.uk/learningenglish/news_english",
      level: "Intermediate-Advanced",
      free: true,
      type: "learning"
    },
    {
      title: "BBC 6 Minute English",
      desc: "Topical discussions with vocabulary & transcripts",
      url: "https://www.bbc.com/learningenglish/",
      level: "Intermediate",
      free: true,
      type: "learning"
    },
    {
      title: "TED Talks",
      desc: "Ideas, technology, design, science & culture presentations",
      url: "https://www.ted.com/",
      level: "Intermediate-Advanced",
      free: true,
      type: "educational"
    },
    {
      title: "Breaking News English",
      desc: "News-based lessons with multiple difficulty levels",
      url: "https://breakingnewsenglish.com/",
      level: "All levels",
      free: true,
      type: "educational"
    }
  ]
};

type ResourceKey = keyof typeof resourcesData;

const primarySkillKeys = ["listening", "reading", "writing", "speaking"] as const;
const supportResourceKeys = ["vocabulary"] as const;

const skillStyles: Record<(typeof primarySkillKeys)[number], { ring: string; text: string; bg: string }> = {
  listening: { ring: "bg-blue-50", text: "text-blue-700", bg: "bg-blue-600" },
  reading: { ring: "bg-emerald-50", text: "text-emerald-700", bg: "bg-emerald-600" },
  writing: { ring: "bg-orange-50", text: "text-orange-700", bg: "bg-orange-600" },
  speaking: { ring: "bg-violet-50", text: "text-violet-700", bg: "bg-violet-600" },
};

const weeklyReadingPreview = weeklyReadings.slice(0, 4);

export default function Home() {
  const [, setLocation] = useLocation();

  const [activeModule, setActiveModule] = useState<ResourceKey | null>(null);
  const [showThinkTanks, setShowThinkTanks] = useState(false);
  const [language, setLanguage] = useState<Locale>("en");
  const t = homeLabels[language];
  const skillCopy: Partial<Record<ResourceKey, { title: string; description: string }>> = {
    listening: { title: t.listening, description: t.listeningDesc },
    reading: { title: t.reading, description: t.readingDesc },
    writing: { title: t.writing, description: t.writingDesc },
    speaking: { title: t.speaking, description: t.speakingDesc },
  };

  const moduleTitle = (key: ResourceKey) => skillCopy[key]?.title || resourcesData[key].title;
  const moduleDescription = (key: ResourceKey) => skillCopy[key]?.description || resourcesData[key].description;
  const resourceTag = (tag: string) => {
    if (tag === "Free") return t.free;
    if (tag === "Premium") return t.premium;
    return tag;
  };
  const listeningLabel = (label: string) => {
    if (label === "Official") return t.official;
    if (label === "YouTube") return t.youtube;
    if (label === "Playlist") return t.playlist;
    if (label === "Free") return t.free;
    if (label === "IELTS Listening") return t.ieltsListening;
    if (label === "Daily Listening") return t.dailyListening;
    if (label === "British") return t.british;
    if (label === "American") return t.american;
    if (label === "Australian") return t.australian;
    if (label === "New Zealand") return t.newZealand;
    if (label === "Global English") return t.globalEnglish;
    if (label === "Academic English") return t.academicEnglish;
    if (label === "Podcast") return t.podcast;
    return label;
  };
  const readingLabel = (label: string) => {
    if (label === "Official") return t.official;
    if (label === "News") return t.news;
    if (label === "Think Tank") return t.thinkTank;
    if (label === "Research") return t.research;
    if (label === "Data") return t.data;
    if (label === "Public Institution") return t.publicInstitution;
    if (label === "Free") return t.free;
    if (label === "IELTS Reading") return t.ieltsReading;
    if (label === "Official IELTS Practice") return t.officialIeltsPractice;
    if (label === "News & Current Affairs") return t.newsCurrentAffairs;
    if (label === "Think Tanks & Research") return t.thinkTanksResearch;
    if (label === "Data & Public Institutions") return t.dataPublicInstitutions;
    return label;
  };
  const writingLabel = (label: string) => {
    if (label === "Official") return t.official;
    if (label === "Lesson") return t.sourceLesson;
    if (label === "Practice") return t.practice;
    if (label === "Free") return t.free;
    if (label === "Task 1") return t.task1;
    if (label === "Task 2") return t.task2;
    if (label === "Task 1 / Task 2") return `${t.task1} / ${t.task2}`;
    return label;
  };
  const speakingLabel = (label: string) => {
    if (label === "Official") return t.official;
    if (label === "Lesson") return t.sourceLesson;
    if (label === "Practice") return t.practice;
    if (label === "Free") return t.free;
    if (label === "Part 1") return t.part1;
    if (label === "Part 2") return t.part2;
    if (label === "Part 3") return t.part3;
    if (label === "Part 1 / Part 2 / Part 3") return `${t.part1} / ${t.part2} / ${t.part3}`;
    return label;
  };

  if (showThinkTanks) {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-950">
        <TopNav language={language} onLanguageChange={setLanguage} />
        <main className="container py-10 sm:py-14">
          <div className="mb-10 flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Globe className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-semibold text-slate-950 md:text-5xl">
                {t.thinkTanks}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.thinkTanksDesc}</p>
            </div>
            <Button variant="outline" onClick={() => setShowThinkTanks(false)} className="rounded-full">
              {t.back}
            </Button>
          </div>

          <div className="space-y-12">
            {Object.entries(thinkTankResources).map(([category, resources]) => (
              <section key={category}>
                <h2 className="mb-5 text-xl font-semibold text-slate-950">{category}</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {resources.map((resource, idx) => (
                    <a key={idx} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <h3 className="text-base font-semibold leading-6 text-slate-950 group-hover:text-blue-700">
                            {resource.title}
                          </h3>
                          <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                        </div>
                        <p className="mb-5 text-sm leading-6 text-slate-600">{resource.desc}</p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{resource.level}</span>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                            {resource.free ? t.free : (resource as any).freeLimit || t.premium}
                          </span>
                          {(resource as any).country && (
                            <span className="rounded-full bg-white px-3 py-1 text-slate-500 ring-1 ring-slate-200">
                              {(resource as any).country}
                            </span>
                          )}
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (activeModule) {
    const module = resourcesData[activeModule];
    const IconComponent = module.icon;

    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-950">
        <TopNav language={language} onLanguageChange={setLanguage} />
        <main className="container py-10 sm:py-14">
          <div className="mb-10 flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <IconComponent className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-semibold text-slate-950 md:text-5xl">{moduleTitle(activeModule)}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{moduleDescription(activeModule)}</p>
            </div>
            <Button variant="outline" onClick={() => setActiveModule(null)} className="rounded-full">
              {t.back}
            </Button>
          </div>

          <div className="space-y-12">
            {activeModule === "listening" && (
              <section>
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{t.listeningResourcesTitle}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                      {t.listeningResourcesSubtitle}
                    </p>
                  </div>
                </div>

                <Card className="mb-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-950">{t.howToUseListening}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-5">
                    {t.listeningSteps.map((step, index) => (
                      <div key={step} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                        <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {listeningResources.map((resource) => (
                    <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                              {listeningLabel(resource.sourceType)}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                              {t.free}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                        </div>
                        <h3 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">
                          {resource.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description[language]}</p>

                        <div className="mt-5 grid gap-2 text-sm text-slate-500">
                          <span><strong className="font-semibold text-slate-700">{t.provider}:</strong> {resource.provider}</span>
                          <span><strong className="font-semibold text-slate-700">{t.level}:</strong> {listeningLabel(resource.level)}</span>
                          <span><strong className="font-semibold text-slate-700">{t.duration}:</strong> {resource.duration}</span>
                          <span><strong className="font-semibold text-slate-700">{t.languageSupport}:</strong> {resource.languageSupport[language]}</span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {resource.skills.map((skill) => (
                            <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                              {listeningLabel(skill)}
                            </span>
                          ))}
                        </div>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                          {t.openResource} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </Card>
                    </a>
                  ))}
                </div>

                <section className="mt-10">
                  <div className="mb-5">
                    <h3 className="text-2xl font-semibold text-slate-950">{t.accentPracticeTitle}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                      {t.accentPracticeSubtitle}
                    </p>
                  </div>

                  <Card className="mb-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-base font-semibold text-slate-950">{t.accentPracticeRoutine}</h4>
                    <div className="mt-4 grid gap-3 md:grid-cols-5">
                      {t.accentRoutineSteps.map((step, index) => (
                        <div key={step} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                          <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                          {step}
                        </div>
                      ))}
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {listeningAccentResources.map((resource) => (
                      <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                        <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {listeningLabel(resource.accent)}
                              </span>
                              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                {listeningLabel(resource.sourceType)}
                              </span>
                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                {t.free}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                          </div>

                          <h4 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">
                            {resource.title}
                          </h4>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description[language]}</p>

                          <div className="mt-5 grid gap-2 text-sm text-slate-500">
                            <span><strong className="font-semibold text-slate-700">{t.provider}:</strong> {resource.provider}</span>
                            <span><strong className="font-semibold text-slate-700">{t.accent}:</strong> {listeningLabel(resource.accent)}</span>
                            <span><strong className="font-semibold text-slate-700">{t.level}:</strong> {listeningLabel(resource.level)}</span>
                            <span><strong className="font-semibold text-slate-700">{t.howToUse}:</strong> {resource.howToUse[language]}</span>
                            <span><strong className="font-semibold text-slate-700">{t.languageSupport}:</strong> {resource.languageSupport[language]}</span>
                          </div>

                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                            {t.openResource} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </span>
                        </Card>
                      </a>
                    ))}
                  </div>
                </section>
              </section>
            )}

            {activeModule === "reading" && (
              <section>
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{t.readingResourcesTitle}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                      {t.readingResourcesSubtitle}
                    </p>
                  </div>
                </div>

                <Card className="mb-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-950">{t.howToUseReading}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-5">
                    {t.readingSteps.map((step, index) => (
                      <div key={step} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                        <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="space-y-8">
                  {readingResourceGroups.map((group) => {
                    const resources = readingResources.filter((resource) => resource.group === group);
                    return (
                      <section key={group}>
                        <h3 className="mb-4 text-lg font-semibold text-slate-950">{readingLabel(group)}</h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                          {resources.map((resource) => (
                            <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                              <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                                <div className="mb-5 flex items-start justify-between gap-4">
                                  <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                      {readingLabel(resource.sourceType)}
                                    </span>
                                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                      {t.free}
                                    </span>
                                  </div>
                                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                                </div>

                                <h4 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">
                                  {resource.title}
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description[language]}</p>

                                <div className="mt-5 grid gap-2 text-sm text-slate-500">
                                  <span><strong className="font-semibold text-slate-700">{t.provider}:</strong> {resource.provider}</span>
                                  <span><strong className="font-semibold text-slate-700">{t.level}:</strong> {readingLabel(resource.level)}</span>
                                  <span><strong className="font-semibold text-slate-700">{t.topicFocus}:</strong> {resource.topicFocus}</span>
                                  <span><strong className="font-semibold text-slate-700">{t.howToUse}:</strong> {resource.howToUse[language]}</span>
                                  <span><strong className="font-semibold text-slate-700">{t.paywallNote}:</strong> {resource.paywallNote[language]}</span>
                                  <span><strong className="font-semibold text-slate-700">{t.languageSupport}:</strong> {resource.languageSupport[language]}</span>
                                </div>

                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                                  {t.openResource} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </span>
                              </Card>
                            </a>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              </section>
            )}

            {activeModule === "writing" && (
              <section>
                <div className="mb-5">
                  <h2 className="text-2xl font-semibold text-slate-950">{t.writingPracticeTitle}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                    {t.writingPracticeSubtitle}
                  </p>
                </div>

                <div className="mb-5 grid gap-4 md:grid-cols-2">
                  <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{t.task1}</span>
                    <h3 className="mt-4 text-xl font-semibold text-slate-950">Report, compare, summarize</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {language === "en"
                        ? "Practise describing charts, maps, processes, and formal letters with clear overview sentences."
                        : language === "zh"
                          ? "练习描述图表、地图、流程和正式信件，重点写清总体概述。"
                          : "練習描述圖表、地圖、流程同正式信件，重點寫清整體概述。"}
                    </p>
                  </Card>
                  <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">{t.task2}</span>
                    <h3 className="mt-4 text-xl font-semibold text-slate-950">Ideas, arguments, examples</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {language === "en"
                        ? "Turn Reading and Weekly Global Reading topics into balanced essays with clear positions."
                        : language === "zh"
                          ? "把阅读和每周全球精读主题转化为有立场、有平衡论证的文章。"
                          : "將閱讀同每週全球精讀主題轉化為有立場、有平衡論證嘅文章。"}
                    </p>
                  </Card>
                </div>

                <WritingPractice language={language} />

                <Card className="mt-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">{t.writingChecklist}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-5">
                    {t.writingChecklistItems.map((item, index) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                        <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>

                <section className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">{t.freeWritingResources}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {writingResources.map((resource) => (
                      <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                        <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {writingLabel(resource.sourceType)}
                              </span>
                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                {t.free}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                          </div>
                          <h4 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">
                            {resource.title}
                          </h4>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description[language]}</p>
                          <div className="mt-5 grid gap-2 text-sm text-slate-500">
                            <span><strong className="font-semibold text-slate-700">{t.provider}:</strong> {resource.provider}</span>
                            <span><strong className="font-semibold text-slate-700">{t.level}:</strong> {writingLabel(resource.level)}</span>
                            <span><strong className="font-semibold text-slate-700">{t.howToUse}:</strong> {resource.howToUse[language]}</span>
                            <span><strong className="font-semibold text-slate-700">{t.languageSupport}:</strong> {resource.languageSupport[language]}</span>
                          </div>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                            {t.openResource} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </span>
                        </Card>
                      </a>
                    ))}
                  </div>
                </section>
              </section>
            )}

            {activeModule === "speaking" && (
              <section>
                <div className="mb-5">
                  <h2 className="text-2xl font-semibold text-slate-950">{t.speakingPracticeTitle}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                    {t.speakingPracticeSubtitle}
                  </p>
                </div>

                <div className="mb-5 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      label: t.part1,
                      title: "Short personal answers",
                      body:
                        language === "en"
                          ? "Build direct answers with one detail and one reason."
                          : language === "zh"
                            ? "练习直接回答，并加入一个细节和一个原因。"
                            : "練習直接回答，並加入一個細節同一個原因。",
                    },
                    {
                      label: t.part2,
                      title: "Cue card storytelling",
                      body:
                        language === "en"
                          ? "Prepare notes, speak for 1-2 minutes, and keep a clear structure."
                          : language === "zh"
                            ? "准备笔记，讲 1-2 分钟，并保持清晰结构。"
                            : "準備筆記，講 1-2 分鐘，並保持清晰結構。",
                    },
                    {
                      label: t.part3,
                      title: "Abstract discussion",
                      body:
                        language === "en"
                          ? "Use reading topics to explain causes, effects, opinions, and examples."
                          : language === "zh"
                            ? "用阅读主题解释原因、影响、观点和例子。"
                            : "用閱讀主題解釋原因、影響、觀點同例子。",
                    },
                  ].map((card) => (
                    <Card key={card.label} className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{card.label}</span>
                      <h3 className="mt-4 text-xl font-semibold text-slate-950">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
                    </Card>
                  ))}
                </div>

                <Card className="mb-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">{t.practiceRoutine}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-5">
                    {t.speakingRoutineSteps.map((step, index) => (
                      <div key={step} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                        <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </Card>

                <SpeakingPractice language={language} />

                <Card className="mt-5 rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">{t.speakingChecklist}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-5">
                    {t.speakingChecklistItems.map((item, index) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-6 text-slate-600">
                        <span className="mb-2 block text-xs font-bold text-blue-700">0{index + 1}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>

                <section className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold text-slate-950">{t.freeSpeakingResources}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {speakingResources.map((resource) => (
                      <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                        <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                          <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {speakingLabel(resource.sourceType)}
                              </span>
                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                {t.free}
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                          </div>
                          <h4 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">
                            {resource.title}
                          </h4>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description[language]}</p>
                          <div className="mt-5 grid gap-2 text-sm text-slate-500">
                            <span><strong className="font-semibold text-slate-700">{t.provider}:</strong> {resource.provider}</span>
                            <span><strong className="font-semibold text-slate-700">{t.level}:</strong> {speakingLabel(resource.level)}</span>
                            <span><strong className="font-semibold text-slate-700">{t.howToUse}:</strong> {resource.howToUse[language]}</span>
                            <span><strong className="font-semibold text-slate-700">{t.languageSupport}:</strong> {resource.languageSupport[language]}</span>
                          </div>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                            {t.openResource} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </span>
                        </Card>
                      </a>
                    ))}
                  </div>
                </section>
              </section>
            )}

            {Object.entries(module.categories).map(([category, resources]) => (
              <section key={category}>
                <h2 className="mb-5 text-xl font-semibold text-slate-950">{category}</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {resources.map((resource, idx) => (
                    <a key={idx} href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <h3 className="text-base font-semibold leading-6 text-slate-950 group-hover:text-blue-700">
                            {resource.title}
                          </h3>
                          <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                        </div>
                        <p className="mb-5 text-sm leading-6 text-slate-600">{resource.desc}</p>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {resourceTag(resource.tag)}
                        </span>
                      </Card>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <TopNav language={language} onLanguageChange={setLanguage} />

      <main>
        <section className="container grid min-h-[560px] items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
              Your Path to IELTS Success
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{t.heroSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => document.getElementById("ielts-skills")?.scrollIntoView({ behavior: "smooth" })}
                className="h-12 rounded-xl bg-slate-950 px-7 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 hover:bg-slate-800"
              >
                {t.exploreSkills} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setLocation("/weekly-news")}
                className="h-12 rounded-xl border-slate-300 bg-white px-7 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-50"
              >
                <Newspaper className="mr-2 h-4 w-4" />
                {t.readingCta}
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[420px] lg:block" aria-hidden="true">
            <div className="absolute left-8 top-10 grid grid-cols-8 gap-3 opacity-45">
              {Array.from({ length: 64 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-slate-400" />
              ))}
            </div>
            <div className="absolute right-0 top-4 h-80 w-80 rounded-full border border-blue-900/50" />
            <div className="absolute right-16 top-16 h-64 w-64 rounded-full bg-white shadow-inner ring-1 ring-slate-100" />
            <div className="absolute bottom-12 right-2 h-44 w-72 rounded-t-full bg-blue-950 shadow-2xl" />
            <div className="absolute bottom-7 right-20 h-9 w-[420px] rounded-full bg-white shadow-xl ring-1 ring-slate-200" />
            <div className="absolute bottom-24 left-48 h-16 w-16 rounded-full bg-slate-100 shadow-xl ring-1 ring-slate-200" />
            <div className="absolute right-0 bottom-12 flex gap-2">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={index} className="h-44 w-1 rounded-full bg-slate-200" />
              ))}
            </div>
          </div>
        </section>

        <section id="ielts-skills" className="border-y border-slate-200 bg-white py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{t.ieltsSkills}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{t.skillsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {primarySkillKeys.map((key) => {
                const module = resourcesData[key];
                const IconComponent = module.icon;
                const style = skillStyles[key];
                return (
                  <button key={key} onClick={() => setActiveModule(key)} className="group text-left">
                    <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${style.ring} ${style.text}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950">{moduleTitle(key)}</h3>
                      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{moduleDescription(key)}</p>
                      <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${style.text}`}>
                        {t.startPracticing} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </Card>
                  </button>
                );
              })}
            </div>

            <Card className="mt-8 rounded-3xl border-slate-200 bg-[#f8fafc] p-6 shadow-sm md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">{t.readingPathTitle}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{t.readingPathBody}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {t.readingPathPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700">
                      {point}
                    </div>
                  ))}
                  <Button onClick={() => setLocation("/weekly-news")} className="h-auto rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white hover:bg-slate-800 sm:col-span-2">
                    {t.openReading} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="weekly-news-preview" className="bg-[#f8fafc] py-16 sm:py-20">
          <div className="container">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">
                  {t.readingTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                  {t.readingSubtitle}
                </p>
              </div>
              <Button variant="outline" onClick={() => setLocation("/weekly-news")} className="rounded-full bg-white">
                {t.viewReading} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {weeklyReadingPreview.map((item) => (
                <a key={item.title} href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full rounded-2xl border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">{item.category}</span>
                      <Newspaper className="h-4 w-4 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-slate-950 group-hover:text-blue-700">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary[language]}</p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="border-t border-slate-200 bg-white py-16 sm:py-20">
          <div className="container">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{t.resourcesTitle}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{t.resourcesSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {supportResourceKeys.map((key) => {
                const module = resourcesData[key];
                const IconComponent = module.icon;
                return (
                  <button key={key} onClick={() => setActiveModule(key)} className="group text-left">
                    <Card className="h-full rounded-2xl border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                      <IconComponent className="mb-5 h-7 w-7 text-blue-700" />
                      <h3 className="text-xl font-semibold text-slate-950">{moduleTitle(key)}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{moduleDescription(key)}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                        {t.exploreResources} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </Card>
                  </button>
                );
              })}
              <button onClick={() => setShowThinkTanks(true)} className="group text-left">
                <Card className="h-full rounded-2xl border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                  <Globe className="mb-5 h-7 w-7 text-blue-700" />
                  <h3 className="text-xl font-semibold text-slate-950">{t.academic}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{t.thinkTanksDesc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    {t.exploreGlobalResources} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Card>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container flex flex-col gap-3 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IELTS Navigator Pro. Curated IELTS study resources.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://ielts.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              Official IELTS
            </a>
            <a href="https://www.britishcouncil.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              British Council
            </a>
            <a href="https://idp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              IDP
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

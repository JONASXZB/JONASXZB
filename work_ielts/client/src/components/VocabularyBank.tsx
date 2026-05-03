import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, Search, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ieltsVocabulary,
  type IeltsVocabularyItem,
  type VocabularySkill,
  type VocabularyTopic,
} from "@/data/ieltsVocabulary";
import { vocabularyBankLabels, type Locale } from "@/lib/i18n";

const learnedStorageKey = "ielts-vocabulary-bank-learned";
const topics: VocabularyTopic[] = [
  "Education",
  "Technology",
  "Environment",
  "Government & Politics",
  "Economy & Work",
  "Health & Fitness",
];
const skills: VocabularySkill[] = ["Reading", "Listening", "Writing", "Speaking"];

export function VocabularyBank({ language }: { language: Locale }) {
  const labels = vocabularyBankLabels[language];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<"All" | VocabularyTopic>("All");
  const [selectedSkill, setSelectedSkill] = useState<"All" | VocabularySkill>("All");
  const [learnedIds, setLearnedIds] = useState<string[]>([]);
  const [speechMessage, setSpeechMessage] = useState("");

  useEffect(() => {
    const savedIds = window.localStorage.getItem(learnedStorageKey);
    if (!savedIds) return;

    try {
      setLearnedIds(JSON.parse(savedIds) as string[]);
    } catch {
      setLearnedIds([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(learnedStorageKey, JSON.stringify(learnedIds));
  }, [learnedIds]);

  const filteredVocabulary = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return ieltsVocabulary.filter((item) => {
      const matchesSearch = !normalizedSearch || item.word.toLowerCase().includes(normalizedSearch);
      const matchesTopic = selectedTopic === "All" || item.topic === selectedTopic;
      const matchesSkill = selectedSkill === "All" || item.skills.includes(selectedSkill);

      return matchesSearch && matchesTopic && matchesSkill;
    });
  }, [searchTerm, selectedSkill, selectedTopic]);

  const learnedSet = useMemo(() => new Set(learnedIds), [learnedIds]);

  const topicLabel = (topic: "All" | VocabularyTopic) => {
    if (topic === "All") return labels.allTopics;
    return labels.topicOptions[topic];
  };

  const skillLabel = (skill: "All" | VocabularySkill) => {
    if (skill === "All") return labels.allSkills;
    return labels.skillOptions[skill];
  };

  const meaningFor = (item: IeltsVocabularyItem) => {
    if (language === "yue") return item.meaningYue;
    return item.meaningZh;
  };

  const exampleFor = (item: IeltsVocabularyItem) => {
    if (language === "zh") return item.exampleZh;
    if (language === "yue") return item.exampleYue;
    return item.example;
  };

  const speak = (word: string, lang: "en-GB" | "en-US") => {
    if (!("speechSynthesis" in window)) {
      setSpeechMessage(labels.speechUnavailable);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = lang;
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
    setSpeechMessage("");
  };

  const toggleLearned = (id: string) => {
    setLearnedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <section id="vocabulary-bank" className="border-t border-slate-200 bg-[#f8fafc] py-16 sm:py-20">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
              <BookIcon />
            </div>
            <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{labels.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{labels.subtitle}</p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setLearnedIds([])}
            className="h-11 rounded-full bg-white text-sm font-semibold"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {labels.resetLearned}
          </Button>
        </div>

        <Card className="mb-6 rounded-3xl border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              {labels.search}
              <span className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={labels.searchPlaceholder}
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </span>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              {labels.topic}
              <select
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value as "All" | VocabularyTopic)}
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {(["All", ...topics] as const).map((topic) => (
                  <option key={topic} value={topic}>
                    {topicLabel(topic)}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              {labels.skill}
              <select
                value={selectedSkill}
                onChange={(event) => setSelectedSkill(event.target.value as "All" | VocabularySkill)}
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              >
                {(["All", ...skills] as const).map((skill) => (
                  <option key={skill} value={skill}>
                    {skillLabel(skill)}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
            <span>
              {filteredVocabulary.length} {labels.wordCount}
            </span>
            {speechMessage && <span className="font-medium text-red-600">{speechMessage}</span>}
          </div>
        </Card>

        {filteredVocabulary.length === 0 ? (
          <Card className="rounded-3xl border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <p className="text-sm leading-7 text-slate-500">{labels.noResults}</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {filteredVocabulary.map((item) => {
              const isLearned = learnedSet.has(item.id);

              return (
                <Card key={item.id} className="rounded-3xl border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-semibold text-slate-950">{item.word}</h3>
                        {isLearned && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {labels.learned}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {labels.partOfSpeech}: {item.partOfSpeech} · {labels.level}: {item.level}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => speak(item.word, "en-GB")}
                        className="inline-flex h-10 items-center rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Volume2 className="mr-1.5 h-4 w-4" />
                        {labels.ukPronunciation}
                      </button>
                      <button
                        type="button"
                        onClick={() => speak(item.word, "en-US")}
                        className="inline-flex h-10 items-center rounded-full border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Volume2 className="mr-1.5 h-4 w-4" />
                        {labels.usPronunciation}
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <InfoBlock label={labels.meaning}>{meaningFor(item)}</InfoBlock>
                    <InfoBlock label={labels.example}>{exampleFor(item)}</InfoBlock>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {topicLabel(item.topic)}
                    </span>
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {skillLabel(skill)}
                      </span>
                    ))}
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant={isLearned ? "outline" : "default"}
                    onClick={() => toggleLearned(item.id)}
                    className={`mt-5 h-11 rounded-2xl text-sm font-semibold ${
                      isLearned ? "bg-white" : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isLearned ? labels.unmarkLearned : labels.markLearned}
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function InfoBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{label}</span>
      <p className="text-sm leading-6 text-slate-700">{children}</p>
    </div>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none">
      <path d="M5 5.5c2.4-1.1 4.7-1.1 7 0v13c-2.3-1.1-4.6-1.1-7 0v-13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 5.5c-2.4-1.1-4.7-1.1-7 0v13c2.3-1.1 4.6-1.1 7 0v-13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 5.5v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

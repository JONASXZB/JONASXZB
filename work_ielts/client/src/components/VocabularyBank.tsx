import { useEffect, useMemo, useState, type ReactNode } from "react";
import { CheckCircle2, RotateCcw, Search, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ieltsVocabulary,
  vocabularyLevels,
  vocabularyTopics,
  type IeltsVocabularyItem,
  type VocabularyLevel,
  type VocabularySkill,
  type VocabularyTopic,
} from "@/data/ieltsVocabulary";
import { vocabularyBankLabels, type Locale } from "@/lib/i18n";

const learnedStorageKey = "ielts-vocabulary-bank-learned";
const skills: VocabularySkill[] = ["Reading", "Listening", "Writing", "Speaking"];

type LearnedFilter = "All" | "Learned" | "Unlearned";

export function VocabularyBank({ language, showHeader = true }: { language: Locale; showHeader?: boolean }) {
  const labels = vocabularyBankLabels[language];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<"All" | VocabularyTopic>("All");
  const [selectedSkill, setSelectedSkill] = useState<"All" | VocabularySkill>("All");
  const [selectedLevel, setSelectedLevel] = useState<"All" | VocabularyLevel>("All");
  const [learnedFilter, setLearnedFilter] = useState<LearnedFilter>("All");
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

  const learnedSet = useMemo(() => new Set(learnedIds), [learnedIds]);

  const filteredVocabulary = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return ieltsVocabulary.filter((item) => {
      const isLearned = learnedSet.has(item.id);
      const matchesSearch = !normalizedSearch || item.word.toLowerCase().includes(normalizedSearch);
      const matchesTopic = selectedTopic === "All" || item.topic === selectedTopic;
      const matchesSkill = selectedSkill === "All" || item.skills.includes(selectedSkill);
      const matchesLevel = selectedLevel === "All" || item.level === selectedLevel;
      const matchesLearned =
        learnedFilter === "All" || (learnedFilter === "Learned" ? isLearned : !isLearned);

      return matchesSearch && matchesTopic && matchesSkill && matchesLevel && matchesLearned;
    });
  }, [learnedFilter, learnedSet, searchTerm, selectedLevel, selectedSkill, selectedTopic]);

  const topicLabel = (topic: "All" | VocabularyTopic) => {
    if (topic === "All") return labels.allTopics;
    return labels.topicOptions[topic];
  };

  const skillLabel = (skill: "All" | VocabularySkill) => {
    if (skill === "All") return labels.allSkills;
    return labels.skillOptions[skill];
  };

  const levelLabel = (level: "All" | VocabularyLevel) => {
    if (level === "All") return labels.allLevels;
    return labels.levelOptions[level];
  };

  const learnedFilterLabel = (filter: LearnedFilter) => {
    if (filter === "Learned") return labels.learned;
    if (filter === "Unlearned") return labels.unlearned;
    return labels.all;
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
    <section id="vocabulary-bank" className={`${showHeader ? "border-t border-slate-200 py-14 sm:py-16" : "py-0"} bg-[#f8fafc]`}>
      <div className="container">
        {showHeader && (
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                <BookIcon />
              </div>
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{labels.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{labels.subtitle}</p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => setLearnedIds([])}
              className="h-10 rounded-full bg-white px-4 text-xs font-semibold"
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />
              {labels.resetLearned}
            </Button>
          </div>
        )}

        <Card className="mb-5 rounded-2xl border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1.25fr_0.9fr_0.75fr_0.75fr_0.75fr]">
            <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
              {labels.search}
              <span className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={labels.searchPlaceholder}
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </span>
            </label>
            <SelectField label={labels.topic} value={selectedTopic} onChange={(value) => setSelectedTopic(value as "All" | VocabularyTopic)}>
              {(["All", ...vocabularyTopics] as const).map((topic) => (
                <option key={topic} value={topic}>
                  {topicLabel(topic)}
                </option>
              ))}
            </SelectField>
            <SelectField label={labels.skill} value={selectedSkill} onChange={(value) => setSelectedSkill(value as "All" | VocabularySkill)}>
              {(["All", ...skills] as const).map((skill) => (
                <option key={skill} value={skill}>
                  {skillLabel(skill)}
                </option>
              ))}
            </SelectField>
            <SelectField label={labels.levelFilter} value={selectedLevel} onChange={(value) => setSelectedLevel(value as "All" | VocabularyLevel)}>
              {(["All", ...vocabularyLevels] as const).map((level) => (
                <option key={level} value={level}>
                  {levelLabel(level)}
                </option>
              ))}
            </SelectField>
            <SelectField label={labels.learnedFilter} value={learnedFilter} onChange={(value) => setLearnedFilter(value as LearnedFilter)}>
              {(["All", "Unlearned", "Learned"] as const).map((filter) => (
                <option key={filter} value={filter}>
                  {learnedFilterLabel(filter)}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <Stat label={labels.totalWords} value={ieltsVocabulary.length} />
            <Stat label={labels.learned} value={learnedIds.length} />
            <Stat label={labels.visible} value={filteredVocabulary.length} />
            {speechMessage && <span className="font-medium text-red-600">{speechMessage}</span>}
            {!showHeader && (
              <button
                type="button"
                onClick={() => setLearnedIds([])}
                className="ml-auto inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                {labels.resetLearned}
              </button>
            )}
          </div>
        </Card>

        {filteredVocabulary.length === 0 ? (
          <Card className="rounded-2xl border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <p className="text-sm leading-7 text-slate-500">{labels.noResults}</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {filteredVocabulary.map((item) => {
              const isLearned = learnedSet.has(item.id);

              return (
                <Card
                  key={item.id}
                  className={`rounded-2xl border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md ${
                    isLearned ? "opacity-70" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold leading-6 text-slate-950">{item.word}</h3>
                        {isLearned && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                            <CheckCircle2 className="h-3 w-3" />
                            {labels.learned}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.partOfSpeech} · {levelLabel(item.level)} · {topicLabel(item.topic)}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <PronunciationButton label={labels.ukPronunciation} onClick={() => speak(item.word, "en-GB")} />
                      <PronunciationButton label={labels.usPronunciation} onClick={() => speak(item.word, "en-US")} />
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {labels.meaning}
                    </span>
                    <p className="mt-1 text-sm leading-5 text-slate-800">{meaningFor(item)}</p>
                  </div>

                  <div className="mt-2 rounded-xl border border-slate-100 bg-white px-3 py-2">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {labels.example}
                    </span>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{exampleFor(item)}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                        {skillLabel(skill)}
                      </span>
                    ))}
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    type="button"
                    variant={isLearned ? "outline" : "default"}
                    onClick={() => toggleLearned(item.id)}
                    className={`mt-3 h-9 rounded-xl px-3 text-xs font-semibold ${
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

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold text-slate-600">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-normal text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
      >
        {children}
      </select>
    </label>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
      {label}: <strong className="text-slate-950">{value}</strong>
    </span>
  );
}

function PronunciationButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-8 items-center rounded-full border border-slate-200 px-2 text-[11px] font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
    >
      <Volume2 className="mr-1 h-3.5 w-3.5" />
      {label}
    </button>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none">
      <path d="M5 5.5c2.4-1.1 4.7-1.1 7 0v13c-2.3-1.1-4.6-1.1-7 0v-13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M19 5.5c-2.4-1.1-4.7-1.1-7 0v13c2.3-1.1 4.6-1.1 7 0v-13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 5.5v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

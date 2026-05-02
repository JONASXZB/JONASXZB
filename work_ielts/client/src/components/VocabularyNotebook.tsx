import { useEffect, useMemo, useState, type FormEvent } from "react";
import { BookMarked, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { vocabularyNotebookLabels, type Locale } from "@/lib/i18n";

type Skill = "Reading" | "Listening" | "Writing" | "Speaking";

type VocabularyEntry = {
  id: string;
  word: string;
  meaning: string;
  example: string;
  topic: string;
  skill: Skill;
  ieltsUse: string;
  createdAt: string;
};

const storageKey = "ielts-vocabulary-notebook";
const skills: Skill[] = ["Reading", "Listening", "Writing", "Speaking"];

const emptyForm = {
  word: "",
  meaning: "",
  example: "",
  topic: "",
  skill: "Reading" as Skill,
  ieltsUse: "",
};

export function VocabularyNotebook({ language }: { language: Locale }) {
  const labels = vocabularyNotebookLabels[language];
  const [entries, setEntries] = useState<VocabularyEntry[]>([]);
  const [filter, setFilter] = useState<"All" | Skill>("All");
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const savedEntries = window.localStorage.getItem(storageKey);
    if (!savedEntries) return;

    try {
      setEntries(JSON.parse(savedEntries) as VocabularyEntry[]);
    } catch {
      setEntries([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries]);

  const filteredEntries = useMemo(() => {
    if (filter === "All") return entries;
    return entries.filter((entry) => entry.skill === filter);
  }, [entries, filter]);

  const skillLabel = (skill: "All" | Skill) => {
    if (skill === "All") return labels.allSkills;
    return labels.skillOptions[skill];
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.word.trim() || !form.meaning.trim()) return;

    const entry: VocabularyEntry = {
      id: `${Date.now()}-${form.word.trim()}`,
      word: form.word.trim(),
      meaning: form.meaning.trim(),
      example: form.example.trim(),
      topic: form.topic.trim(),
      skill: form.skill,
      ieltsUse: form.ieltsUse.trim(),
      createdAt: new Date().toISOString(),
    };

    setEntries((current) => [entry, ...current]);
    setForm(emptyForm);
  };

  const updateForm = (field: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="vocabulary-notebook" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <BookMarked className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{labels.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">{labels.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...skills] as const).map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => setFilter(skill)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  filter === skill
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
                }`}
              >
                {skillLabel(skill)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <Card className="rounded-3xl border-slate-200 bg-[#f8fafc] p-5 shadow-sm md:p-6">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {labels.word}
                  <input
                    value={form.word}
                    onChange={(event) => updateForm("word", event.target.value)}
                    placeholder={labels.wordPlaceholder}
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {labels.meaning}
                  <input
                    value={form.meaning}
                    onChange={(event) => updateForm("meaning", event.target.value)}
                    placeholder={labels.meaningPlaceholder}
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                {labels.example}
                <textarea
                  value={form.example}
                  onChange={(event) => updateForm("example", event.target.value)}
                  placeholder={labels.examplePlaceholder}
                  rows={3}
                  className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {labels.topic}
                  <input
                    value={form.topic}
                    onChange={(event) => updateForm("topic", event.target.value)}
                    placeholder={labels.topicPlaceholder}
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  {labels.skill}
                  <select
                    value={form.skill}
                    onChange={(event) => updateForm("skill", event.target.value)}
                    className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  >
                    {skills.map((skill) => (
                      <option key={skill} value={skill}>
                        {skillLabel(skill)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                {labels.ieltsUse}
                <input
                  value={form.ieltsUse}
                  onChange={(event) => updateForm("ieltsUse", event.target.value)}
                  placeholder={labels.ieltsUsePlaceholder}
                  className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <Button type="submit" className="h-12 rounded-2xl bg-slate-950 px-6 text-sm font-semibold text-white hover:bg-slate-800">
                {labels.saveEntry}
              </Button>
            </form>
          </Card>

          <div className="grid gap-4">
            {filteredEntries.length === 0 ? (
              <Card className="rounded-3xl border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
                <p className="text-sm leading-7 text-slate-500">{labels.emptyState}</p>
              </Card>
            ) : (
              filteredEntries.map((entry) => (
                <Card key={entry.id} className="rounded-3xl border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-slate-950">{entry.word}</h3>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {skillLabel(entry.skill)}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{entry.meaning}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEntries((current) => current.filter((item) => item.id !== entry.id))}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      aria-label={labels.deleteEntry}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm leading-6 md:grid-cols-2">
                    {entry.example && (
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                          {labels.example}
                        </span>
                        <p className="text-slate-700">{entry.example}</p>
                      </div>
                    )}
                    {entry.ieltsUse && (
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                          {labels.ieltsUse}
                        </span>
                        <p className="text-slate-700">{entry.ieltsUse}</p>
                      </div>
                    )}
                    {entry.topic && (
                      <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                          {labels.topic}
                        </span>
                        <p className="text-slate-700">{entry.topic}</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

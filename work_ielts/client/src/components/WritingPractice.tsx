import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { writingPrompts, type WritingTaskType } from "@/data/writingPrompts";
import { homeLabels, type Locale } from "@/lib/i18n";
import { CheckCircle2, Clock, Save, Trash2 } from "lucide-react";

const STORAGE_KEY = "ielts-writing-draft";

type SavedDraft = {
  taskType: WritingTaskType;
  promptId: string;
  text: string;
};

export function WritingPractice({ language }: { language: Locale }) {
  const t = homeLabels[language];
  const [taskType, setTaskType] = useState<WritingTaskType>("Task 2");
  const [selectedPromptId, setSelectedPromptId] = useState(writingPrompts.find((item) => item.taskType === "Task 2")?.id || writingPrompts[0].id);
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);

  const promptsForTask = useMemo(
    () => writingPrompts.filter((item) => item.taskType === taskType),
    [taskType]
  );
  const selectedPrompt = promptsForTask.find((item) => item.id === selectedPromptId) || promptsForTask[0];
  const wordCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;
  const timeGuide = taskType === "Task 1" ? "20 minutes / 150+ words" : "40 minutes / 250+ words";

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const savedDraft = JSON.parse(raw) as SavedDraft;
      setTaskType(savedDraft.taskType);
      setSelectedPromptId(savedDraft.promptId);
      setDraft(savedDraft.text);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (!promptsForTask.some((item) => item.id === selectedPromptId)) {
      setSelectedPromptId(promptsForTask[0]?.id || writingPrompts[0].id);
    }
  }, [promptsForTask, selectedPromptId]);

  const saveDraft = () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ taskType, promptId: selectedPrompt.id, text: draft } satisfies SavedDraft)
    );
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  const clearDraft = () => {
    setDraft("");
    window.localStorage.removeItem(STORAGE_KEY);
    setSaved(false);
  };

  return (
    <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
      <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{t.promptBank}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{t.writingPracticeSubtitle}</p>
          </div>
          <div className="flex rounded-full border border-slate-200 bg-[#f8fafc] p-1">
            {(["Task 1", "Task 2"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setTaskType(type)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  taskType === type ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {type === "Task 1" ? t.task1 : t.task2}
              </button>
            ))}
          </div>
        </div>

        <label className="mb-2 block text-sm font-semibold text-slate-950">{t.prompt}</label>
        <select
          value={selectedPrompt.id}
          onChange={(event) => setSelectedPromptId(event.target.value)}
          className="mb-5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
        >
          {promptsForTask.map((item) => (
            <option key={item.id} value={item.id}>
              {item.topic} - {item.questionType}
            </option>
          ))}
        </select>

        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{selectedPrompt.taskType}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{selectedPrompt.questionType}</span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{selectedPrompt.level}</span>
          </div>
          <p className="text-base font-semibold leading-7 text-slate-950">{selectedPrompt.prompt}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-950">{t.usefulIdeas}</p>
              <ul className="space-y-2 text-sm leading-6 text-slate-600">
                {selectedPrompt.usefulIdeas.map((idea) => (
                  <li key={idea.en}>- {idea[language]}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-950">{t.usefulVocabulary}</p>
              <div className="flex flex-wrap gap-2">
                {selectedPrompt.usefulVocabulary.map((word) => (
                  <span key={word} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {word}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                <strong className="font-semibold text-slate-950">{t.relatedReadingTopic}:</strong>{" "}
                {selectedPrompt.relatedReadingTopic}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{t.writingPracticeArea}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 text-blue-700" />
              {t.timeGuide}: {timeGuide}
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {t.wordCount}: {wordCount}
          </span>
        </div>

        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={t.writeHere}
          className="min-h-[340px] w-full resize-y rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-7 text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
        />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button onClick={saveDraft} className="rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-800">
            <Save className="mr-2 h-4 w-4" />
            {t.saveDraft}
          </Button>
          <Button variant="outline" onClick={clearDraft} className="rounded-full bg-white">
            <Trash2 className="mr-2 h-4 w-4" />
            {t.clearDraft}
          </Button>
          {saved && (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              {t.draftSaved}
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}

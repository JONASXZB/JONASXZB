import { useMemo, useState } from "react";
import { ArrowRight, Clock, Link as LinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { practiceDifficulties, practiceTests, type PracticeDifficulty, type PracticeSkill, type PracticeSourceType } from "@/data/practiceTests";
import { practiceTestsLabels, type Locale } from "@/lib/i18n";

type PracticeTestsSectionProps = {
  skill: PracticeSkill;
  language: Locale;
};

export function PracticeTestsSection({ skill, language }: PracticeTestsSectionProps) {
  const labels = practiceTestsLabels[language];
  const [difficulty, setDifficulty] = useState<PracticeDifficulty>("easy");

  const items = useMemo(
    () => practiceTests.filter((item) => item.skill === skill && item.difficulty === difficulty),
    [difficulty, skill],
  );

  const difficultyLabel = (value: PracticeDifficulty) => {
    if (value === "easy") return labels.easy;
    if (value === "medium") return labels.medium;
    return labels.hard;
  };

  const sourceTypeLabel = (value: PracticeSourceType) => {
    if (value === "Official") return labels.official;
    if (value === "Official Computer Practice") return labels.officialComputerPractice;
    if (value === "Third-party Mock") return labels.thirdPartyMock;
    if (value === "Internal Practice") return labels.internalPractice;
    return labels.learningResource;
  };

  return (
    <section className="mt-10">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{labels.mockPractice}</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">{labels.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{labels.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {practiceDifficulties.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setDifficulty(value)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                difficulty === value
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
              }`}
            >
              {difficultyLabel(value)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="h-full rounded-2xl border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {sourceTypeLabel(item.sourceType)}
                </span>
                {item.isFree && (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {labels.free}
                  </span>
                )}
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                <Clock className="h-3.5 w-3.5" />
                {labels.timedPractice}
              </span>
            </div>

            <h4 className="text-lg font-semibold leading-7 text-slate-950">{item.title}</h4>
            <p className="mt-2 text-sm font-medium text-slate-500">{item.provider}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description[language]}</p>

            <div className="mt-4 grid gap-2 text-sm text-slate-500">
              <span>
                <strong className="font-semibold text-slate-700">{labels.estimatedTime}:</strong> {item.estimatedTime}
              </span>
              <span>
                <strong className="font-semibold text-slate-700">{labels.level}:</strong> {item.level}
              </span>
            </div>

            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{labels.taskTypes}</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.taskTypes.map((taskType) => (
                  <span key={taskType} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {taskType}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#f8fafc] p-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{labels.howToUse}</span>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.howToUse[language]}</p>
            </div>

            {item.notes && (
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{labels.notes}</span>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.notes[language]}</p>
              </div>
            )}

            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
              >
                {labels.openPractice} <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  <LinkIcon className="h-4 w-4" />
                  {labels.internalPractice}
                </span>
                <span className="text-sm font-medium text-slate-500">{labels.noExternalLink}</span>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

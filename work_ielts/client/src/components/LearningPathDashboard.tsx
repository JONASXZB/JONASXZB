import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ListChecks, RotateCcw, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { homeLabels, type Locale } from "@/lib/i18n";

const DAILY_PLAN_STORAGE_KEY = "ielts-navigator-daily-plan";

type LearningPathLabels = (typeof homeLabels)["en"]["learningPath"];

export function LearningPathDashboard({ language }: { language: Locale }) {
  const labels: LearningPathLabels = homeLabels[language].learningPath;
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") {
      return {};
    }

    try {
      return JSON.parse(window.localStorage.getItem(DAILY_PLAN_STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem(DAILY_PLAN_STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const completedCount = useMemo(() => {
    return labels.dailyPlan.filter((item) => checkedItems[item.id]).length;
  }, [checkedItems, labels.dailyPlan]);

  const toggleItem = (id: string) => {
    setCheckedItems((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const resetPlan = () => {
    setCheckedItems({});
  };

  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-14">
      <div className="container">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              {labels.title}
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">{labels.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{labels.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
            <ListChecks className="h-4 w-4 text-blue-700" />
            {completedCount}/{labels.dailyPlan.length}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_0.95fr]">
          {labels.paths.map((path, index) => (
            <Card
              key={path.title}
              className="rounded-2xl border-slate-200 bg-[#f8fafc] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700 ring-1 ring-slate-200">
                  {index + 1}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {labels.targetLevel}: {path.level}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{path.title}</h3>
              <ul className="mt-4 space-y-3">
                {path.steps.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              {path.ctaHref && path.ctaLabel && (
                <a
                  href={path.ctaHref}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  {path.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              )}
            </Card>
          ))}

          <Card className="rounded-2xl border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold leading-6">{labels.todayPlanTitle}</h3>
            </div>
            <div className="space-y-3">
              {labels.dailyPlan.map((item) => {
                const checked = Boolean(checkedItems[item.id]);

                return (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleItem(item.id)}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={checked ? "text-slate-400 line-through" : ""}>{item.label}</span>
                  </label>
                );
              })}
            </div>
            <button
              type="button"
              onClick={resetPlan}
              className="mt-5 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              {labels.resetTodayPlan}
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}

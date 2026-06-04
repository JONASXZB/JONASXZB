import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { homeLabels, type Locale } from "@/lib/i18n";

export function WritingPolishDemo({ language }: { language: Locale }) {
  const t = homeLabels[language].writingPolish;
  const [text, setText] = useState("");
  const [hasFeedback, setHasFeedback] = useState(false);

  const showDemoFeedback = () => {
    setHasFeedback(true);
  };

  return (
    <Card className="rounded-3xl border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-xl font-semibold text-slate-950">{t.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{t.subtitle}</p>
          <p className="mt-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-800">
            {t.demoModeNotice}
          </p>
          <div className="mt-3 grid gap-2 text-xs font-semibold text-slate-500">
            <span>{t.notOfficialScore}</span>
            <span>{t.futureModelNote}</span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-950" htmlFor="writing-polish-demo">
            {t.enterSentences}
          </label>
          <textarea
            id="writing-polish-demo"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.enterSentences}
            className="min-h-[112px] w-full resize-y rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-sm leading-7 text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
          />

          <div className="mt-3 flex justify-end">
            <Button onClick={showDemoFeedback} className="rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-800">
              {t.tryDemoFeedback}
            </Button>
          </div>

          {hasFeedback && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <FeedbackItem label={t.correctedVersion} value={t.demoResponse} />
                <FeedbackItem label={t.grammarNote} value={t.demoResponse} />
                <FeedbackItem label={t.clarityNote} value={t.demoResponse} />
                <FeedbackItem label={t.academicPhrasing} value={t.demoResponse} />
              </div>
              <div className="mt-3 rounded-xl bg-white p-3 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
                <span className="font-semibold text-slate-950">{t.ieltsReminder}: </span>
                {t.notOfficialScore}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function FeedbackItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
      <p className="text-xs font-bold uppercase text-blue-700">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
    </div>
  );
}

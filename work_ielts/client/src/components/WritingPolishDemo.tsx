import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { homeLabels, type Locale } from "@/lib/i18n";

type WritingAssistantCopy = (typeof homeLabels)[Locale]["writingAssistant"]["feedback"];

type WritingFeedback = {
  correctedVersion: string;
  grammarNote: string;
  clarityNote: string;
  academicPhrasing: string;
  ieltsReminder: string;
};

export function WritingPolishDemo({ language }: { language: Locale }) {
  const t = homeLabels[language].writingAssistant;
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);

  const showDemoFeedback = () => {
    setFeedback(analyzeWritingInput(text, t.feedback));
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
              {t.checkMyWriting}
            </Button>
          </div>

          {feedback && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
              <p className="mb-3 text-sm font-semibold text-slate-950">{t.localDemoFeedback}</p>
              <div className="grid gap-3 md:grid-cols-2">
                <FeedbackItem label={t.correctedVersion} value={feedback.correctedVersion} />
                <FeedbackItem label={t.grammarNote} value={feedback.grammarNote} />
                <FeedbackItem label={t.clarityNote} value={feedback.clarityNote} />
                <FeedbackItem label={t.academicPhrasing} value={feedback.academicPhrasing} />
              </div>
              <div className="mt-3 rounded-xl bg-white p-3 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
                <span className="font-semibold text-slate-950">{t.ieltsReminder}: </span>
                {feedback.ieltsReminder}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function analyzeWritingInput(input: string, copy: WritingAssistantCopy): WritingFeedback {
  const normalized = input.trim().replace(/\s+/g, " ");

  if (!normalized) {
    return {
      correctedVersion: copy.emptyCorrected,
      grammarNote: copy.emptyGrammar,
      clarityNote: copy.emptyClarity,
      academicPhrasing: copy.genericAcademic,
      ieltsReminder: copy.localScoreReminder,
    };
  }

  const startsWithSo = /^so\b/i.test(normalized);
  const isVeryShort = normalized.split(/\s+/).length < 8;
  const hasCasualWord = /\b(wanna|gonna|gotta|idk|u)\b/i.test(normalized);
  const hasCant = /\bcan't\b/i.test(normalized);
  const hasDont = /\bdont\b/i.test(normalized);
  const hasDailyLife = /\b(dinner|breakfast|lunch|today|yesterday|daily|school|work|home)\b/i.test(normalized);
  const matchedDinnerRule = /^(so\s+)?i\s+(just\s+)?eat\s+dinner\s+today[.!?]?$/i.test(normalized);

  let correctedVersion = normalized
    .replace(/\bwanna\b/gi, "want to")
    .replace(/\bgonna\b/gi, "going to")
    .replace(/\bgotta\b/gi, "have to")
    .replace(/\bdont\b/gi, "do not")
    .replace(/\bidk\b/gi, "I do not know")
    .replace(/\bu\b/gi, "you")
    .replace(/(^|[\s"'(])i(?=([\s.,!?;:)]|$))/g, "$1I");

  if (/^so\s+i\s+just\s+eat\s+dinner\s+today[.!?]?$/i.test(normalized)) {
    correctedVersion = "I just had dinner today.";
  } else if (/^i\s+just\s+eat\s+dinner\s+today[.!?]?$/i.test(normalized)) {
    correctedVersion = "I just had dinner today.";
  } else if (/^i\s+eat\s+dinner\s+today[.!?]?$/i.test(normalized)) {
    correctedVersion = "I had dinner today.";
  } else if (/^so\s+i\b/i.test(correctedVersion)) {
    correctedVersion = correctedVersion.replace(/^so\s+i\b/i, "I");
  }

  correctedVersion = capitalizeFirstLetter(correctedVersion);
  if (!/[.!?]$/.test(correctedVersion)) {
    correctedVersion = `${correctedVersion}.`;
  }

  let grammarNote = copy.genericGrammar;
  if (matchedDinnerRule) {
    grammarNote = copy.hadDinnerGrammar;
  } else if (hasCasualWord) {
    grammarNote = copy.formalGrammar;
  } else if (hasDont) {
    grammarNote = copy.doNotGrammar;
  }

  let clarityNote = copy.genericClarity;
  if (startsWithSo) {
    clarityNote = copy.removeSoClarity;
  } else if (isVeryShort) {
    clarityNote = copy.shortClarity;
  }

  let academicPhrasing = copy.genericAcademic;
  if (matchedDinnerRule || hasDailyLife) {
    academicPhrasing = copy.dailyLifeAcademic;
  } else if (hasCant) {
    academicPhrasing = copy.cannotAcademic;
  } else if (hasCasualWord) {
    academicPhrasing = copy.formalAcademic;
  }

  return {
    correctedVersion,
    grammarNote,
    clarityNote,
    academicPhrasing,
    ieltsReminder: copy.localScoreReminder,
  };
}

function capitalizeFirstLetter(value: string) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function FeedbackItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
      <p className="text-xs font-bold uppercase text-blue-700">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{value}</p>
    </div>
  );
}

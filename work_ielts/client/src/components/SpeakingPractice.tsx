import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { speakingTopics, type SpeakingPart } from "@/data/speakingTopics";
import { homeLabels, type Locale } from "@/lib/i18n";
import { Clock, MessageSquare, Repeat2 } from "lucide-react";

export function SpeakingPractice({ language }: { language: Locale }) {
  const t = homeLabels[language];
  const [part, setPart] = useState<SpeakingPart>("Part 2");
  const [selectedTopicId, setSelectedTopicId] = useState(
    speakingTopics.find((item) => item.part === "Part 2")?.id || speakingTopics[0].id
  );

  const topicsForPart = useMemo(
    () => speakingTopics.filter((item) => item.part === part),
    [part]
  );
  const selectedTopic = topicsForPart.find((item) => item.id === selectedTopicId) || topicsForPart[0];

  const selectPart = (nextPart: SpeakingPart) => {
    const nextTopic = speakingTopics.find((item) => item.part === nextPart);
    setPart(nextPart);
    setSelectedTopicId(nextTopic?.id || speakingTopics[0].id);
  };

  const timerText =
    part === "Part 1"
      ? "Answer in 20-30 seconds"
      : part === "Part 2"
        ? "Prepare 1 minute, speak 1-2 minutes"
        : "Answer in 45-60 seconds";

  return (
    <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
      <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{t.topicBank}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{t.speakingPracticeSubtitle}</p>
          </div>
          <div className="flex rounded-full border border-slate-200 bg-[#f8fafc] p-1">
            {(["Part 1", "Part 2", "Part 3"] as const).map((item) => (
              <button
                key={item}
                onClick={() => selectPart(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  part === item ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item === "Part 1" ? t.part1 : item === "Part 2" ? t.part2 : t.part3}
              </button>
            ))}
          </div>
        </div>

        <label className="mb-2 block text-sm font-semibold text-slate-950">{t.topicBank}</label>
        <select
          value={selectedTopic.id}
          onChange={(event) => setSelectedTopicId(event.target.value)}
          className="mb-5 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
        >
          {topicsForPart.map((item) => (
            <option key={item.id} value={item.id}>
              {item.topic} - {item.level}
            </option>
          ))}
        </select>

        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
          <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
              {selectedTopic.part === "Part 1" ? t.part1 : selectedTopic.part === "Part 2" ? t.part2 : t.part3}
            </span>
            {selectedTopic.part === "Part 2" && (
              <span className="rounded-full bg-violet-50 px-3 py-1 text-violet-700">{t.cueCard}</span>
            )}
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{selectedTopic.level}</span>
          </div>
          <p className="text-lg font-semibold leading-8 text-slate-950">{selectedTopic.prompt}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-950">{t.preparation}</p>
              <ul className="space-y-2 text-sm leading-6 text-slate-600">
                {selectedTopic.bulletPoints.map((point) => (
                  <li key={point.en}>- {point[language]}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-950">{t.usefulPhrases}</p>
              <div className="flex flex-wrap gap-2">
                {selectedTopic.usefulPhrases.map((phrase) => (
                  <span key={phrase} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {phrase}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                <strong className="font-semibold text-slate-950">{t.relatedReadingTopic}:</strong>{" "}
                {selectedTopic.relatedReadingTopic}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">{t.speakingPractice}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 text-blue-700" />
              {t.timerGuide}: {timerText}
            </p>
          </div>
          <Repeat2 className="h-5 w-5 text-blue-700" />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-950">
              <MessageSquare className="h-4 w-4 text-blue-700" />
              {t.sampleStructure}
            </div>
            <p className="text-sm leading-7 text-slate-600">{selectedTopic.sampleStructure[language]}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
            <p className="mb-3 text-sm font-semibold text-slate-950">{t.followUpQuestions}</p>
            <ul className="space-y-2 text-sm leading-6 text-slate-600">
              {selectedTopic.followUpQuestions.map((question) => (
                <li key={question}>- {question}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

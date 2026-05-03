import { useState } from "react";
import { BookMarked } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { VocabularyBank } from "@/components/VocabularyBank";
import { vocabularyBankLabels, type Locale } from "@/lib/i18n";

export default function Vocabulary() {
  const [language, setLanguage] = useState<Locale>("en");
  const labels = vocabularyBankLabels[language];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <TopNav language={language} onLanguageChange={setLanguage} />

      <main>
        <section className="container py-10 sm:py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex max-w-3xl flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-950">
                <BookMarked className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  {labels.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                  {labels.subtitle}
                </p>
                <p className="mt-2 text-sm font-semibold text-blue-700">{labels.pageHelper}</p>
              </div>
            </div>
          </div>
        </section>

        <VocabularyBank language={language} showHeader={false} />
      </main>
    </div>
  );
}

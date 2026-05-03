import { Button } from "@/components/ui/button";
import { languageLabels, navLabels, type Locale } from "@/lib/i18n";
import { ChevronDown, Globe2 } from "lucide-react";
import { useLocation } from "wouter";

type TopNavProps = {
  language?: Locale;
  onLanguageChange?: (language: Locale) => void;
};

export function TopNav({ language = "en", onLanguageChange }: TopNavProps) {
  const [location, setLocation] = useLocation();
  const labels = navLabels[language];

  const goToHomeSection = (sectionId?: string) => {
    setLocation("/");
    if (!sectionId) return;
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, location === "/" ? 0 : 80);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex min-h-20 flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-0">
          <button
            onClick={() => goToHomeSection()}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <img src="/logo.svg" alt="" className="h-8 w-8" />
            </span>
            <span className="flex items-center gap-2">
              <span className="text-base font-bold tracking-[0.08em] text-slate-950 sm:text-lg">
                IELTS Navigator
              </span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-blue-700">
                Pro
              </span>
            </span>
          </button>

          <nav className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium text-slate-600 lg:justify-center">
            <button
              onClick={() => goToHomeSection()}
              className="rounded-full px-4 py-2 text-blue-700 transition hover:bg-blue-50"
            >
              {labels.home}
            </button>
            <button
              onClick={() => goToHomeSection("ielts-skills")}
              className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {labels.skills} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setLocation("/weekly-news")}
              className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {labels.reading}
            </button>
            <button
              onClick={() => setLocation("/vocabulary")}
              className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {labels.vocabulary}
            </button>
            <button
              onClick={() => goToHomeSection("resources")}
              className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {labels.resources} <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm">
              <Globe2 className="h-4 w-4" />
              <select
                value={language}
                onChange={(event) => onLanguageChange?.(event.target.value as Locale)}
                className="bg-transparent text-sm font-semibold outline-none"
                aria-label="Language"
              >
                {Object.entries(languageLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <Button
              onClick={() => goToHomeSection("ielts-skills")}
              className="rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              {labels.getStarted}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

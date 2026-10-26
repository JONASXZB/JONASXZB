import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const NotFound = lazy(() => import("@/pages/NotFound"));
const Vocabulary = lazy(() => import("@/pages/Vocabulary"));
const WeeklyNews = lazy(() => import("@/pages/WeeklyNews"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  // WeeklyNews is public and accessible to all users
  return (
    <Suspense
      fallback={
        <p role="status" className="container py-12 text-slate-600">
          Loading…
        </p>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path={"/weekly-news"} component={WeeklyNews} />
        <Route path={"/vocabulary"} component={Vocabulary} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

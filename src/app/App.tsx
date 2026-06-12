import { useEffect } from "react";
import { HeroSection } from "./components/hero-section";
import { RoadmapTimeline } from "./components/roadmap-timeline";
import { ResourcesSection } from "./components/resources-section";
import { ProgressTracker } from "./components/progress-tracker";
import { StudyTipsSection } from "./components/study-tips-section";
import { MotivationSection } from "./components/motivation-section";
import { CTASection } from "./components/cta-section";
import { LanguageProvider } from "./components/language-context";
import { LanguageToggle } from "./components/language-toggle";

function useFavicon() {
  useEffect(() => {
    document.title = "CIS-DF Certification Roadmap | ServiceNow";

    document.querySelectorAll("link[rel*='icon']").forEach((el) => el.remove());

    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";

    const sources = [
      "https://www.servicenow.com/favicon.ico",
      "https://nowlearning.servicenow.com/favicon.ico",
    ];
    let current = 0;

    const tryNext = () => {
      current++;
      if (current < sources.length) {
        link.href = sources[current];
      } else {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="#0a0a0f"/>
            <circle cx="32" cy="32" r="29" fill="none" stroke="#00b4d8" stroke-width="1.5" opacity="0.4"/>
            <rect x="14" y="14" width="36" height="36" rx="10" ry="10" fill="#001e3c"/>
            <path d="M22 42 L22 26 L32 38 L42 26 L42 42" fill="none" stroke="#00b4d8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="32" cy="20" r="3.5" fill="#00b4d8"/>
          </svg>
        `.trim();
        link.type = "image/svg+xml";
        link.href = "data:image/svg+xml;base64," + btoa(svg);
      }
    };

    link.onerror = tryNext;
    link.href = sources[0];

    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, []);
}

export default function App() {
  useFavicon();

  return (
    <LanguageProvider>
      <div className="dark min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        <LanguageToggle />

        {/* Static background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00b4d8] opacity-10 blur-[120px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#001e3c] opacity-20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00b4d8] opacity-5 blur-[100px] rounded-full" />
        </div>

        {/* Static grid pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(#00b4d8 1px, transparent 1px),
                linear-gradient(90deg, #00b4d8 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10">
          <HeroSection />
          <RoadmapTimeline />
          <ResourcesSection />
          <ProgressTracker />
          <StudyTipsSection />
          <MotivationSection />
          <CTASection />
        </div>
      </div>
    </LanguageProvider>
  );
}
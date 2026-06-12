import { useRef, useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { useLanguage } from "./language-context";

const STORAGE_KEY = "cis-df-roadmap-progress";

// 5 official CIS-DF exam domains with weights
const domains = [
  { key: "domain1", percent: 15 },
  { key: "domain2", percent: 19 },
  { key: "domain3", percent: 35 },
  { key: "domain4", percent: 20 },
  { key: "domain5", percent: 11 },
];

function loadFromStorage(): Set<number> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return new Set();
    const parsed: number[] = JSON.parse(saved);
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveToStorage(items: Set<number>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(items)));
  } catch {}
}

// Domain accent colors
const domainColors = ["#00b4d8", "#38bdf8", "#818cf8", "#a78bfa", "#34d399"];

export function ProgressTracker() {
  const ref = useRef(null);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(() => loadFromStorage());
  const { t } = useLanguage();

  useEffect(() => {
    saveToStorage(checkedItems);
  }, [checkedItems]);

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Weighted progress — sum the % of checked domains
  const totalWeight = domains.reduce(
    (sum, d, i) => sum + (checkedItems.has(i) ? d.percent : 0),
    0
  );
  const simpleProgress = (checkedItems.size / domains.length) * 100;

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">
            {t("progressSectionTitle")}{" "}
            <span className="text-[#00b4d8]">{t("progressSectionHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-400">{t("progressSectionSubtitle")}</p>
        </div>

        {/* Overall progress bar */}
        <div className="mb-10">
          <div className="backdrop-blur-lg bg-white/5 border border-[#00b4d8]/30 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">{t("overallProgress")}</span>
              <span className="text-2xl text-[#00b4d8]">{Math.round(simpleProgress)}%</span>
            </div>
            <div className="relative w-full h-4 bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${simpleProgress}%`,
                  background: "linear-gradient(90deg, #00b4d8, #0077b6)",
                  boxShadow: "0 0 20px rgba(0, 180, 216, 0.5)",
                }}
              />
            </div>

            {/* Exam weight indicator */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-500">{t("examWeightCovered")}</span>
              <span className="text-sm text-[#00b4d8] font-semibold">{totalWeight}% {t("ofExam")}</span>
            </div>
          </div>
        </div>

        {/* Domain cards */}
        <div className="flex flex-col gap-4">
          {domains.map(({ key, percent }, index) => {
            const isChecked = checkedItems.has(index);
            const color = domainColors[index];

            return (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className="w-full text-start backdrop-blur-lg border rounded-2xl p-5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  backgroundColor: isChecked ? `${color}12` : "rgba(255,255,255,0.04)",
                  borderColor: isChecked ? color : "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Check icon */}
                  <div className="shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-6 h-6" style={{ color }} />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-500" />
                    )}
                  </div>

                  {/* Domain info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className="font-medium transition-colors truncate"
                        style={{ color: isChecked ? color : "#fff" }}
                      >
                        {t(key)}
                      </span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full shrink-0 font-semibold"
                        style={{
                          backgroundColor: `${color}20`,
                          color: color,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        {percent}%
                      </span>
                    </div>

                    {/* Mini weight bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: isChecked ? "100%" : "0%",
                          backgroundColor: color,
                          boxShadow: isChecked ? `0 0 8px ${color}80` : "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Reset button */}
        {checkedItems.size > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setCheckedItems(new Set())}
              className="text-sm text-gray-500 hover:text-red-400 transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-red-400/30"
            >
              Reset Progress
            </button>
          </div>
        )}

        {/* Completion message */}
        {checkedItems.size === domains.length && (
          <div className="mt-12 text-center">
            <div
              className="backdrop-blur-lg border rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(0,180,216,0.15), rgba(0,119,182,0.15))",
                borderColor: "#00b4d8",
              }}
            >
              <h3 className="text-2xl text-[#00b4d8] mb-2">{t("allDomainsCovered")}</h3>
              <p className="text-gray-300">{t("readyForExam")}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
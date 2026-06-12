import { FileQuestion, FileText, BookOpen, Award } from "lucide-react";
import { useLanguage } from "./language-context";

const statsData = [
  {
    icon: BookOpen,
    value: "217",
    labelKey: "statPracticeQuestions",
    color: "#00b4d8",
  },
  {
    icon: FileText,
    value: "400+",
    labelKey: "statExamSimulations",
    color: "#a855f7",
  },
  {
    icon: FileQuestion,
    value: "100+",
    labelKey: "statQuestionsFlashCards",
    color: "#f59e0b",
  },
  {
    icon: Award,
    value: "1",
    labelKey: "statGoal",
    color: "#00b4d8",
    isGoal: true,
  },
];

export function MotivationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Static grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#00b4d8 1px, transparent 1px),
            linear-gradient(90deg, #00b4d8 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {t("motivationTitle")}{" "}
            <span className="text-[#00b4d8]">{t("motivationTitleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">{t("motivationSubtitle")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div key={index}>
                <div
                  className="relative rounded-2xl p-7 flex flex-col items-start overflow-hidden transition-transform hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg, #051830 0%, #020d1a 100%)",
                    border: `1px solid ${stat.color}25`,
                    minHeight: "220px",
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: `${stat.color}18`,
                      border: `1.5px solid ${stat.color}40`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>

                  {/* Big number */}
                  <div
                    className="text-6xl md:text-7xl font-bold tabular-nums mb-3 leading-none"
                    style={{
                      color: stat.color,
                      textShadow: `0 0 20px ${stat.color}40`,
                    }}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-sm text-gray-400 leading-snug">{t(stat.labelKey)}</p>

                  {/* Bottom line accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${stat.color}50, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
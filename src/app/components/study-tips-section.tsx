import { useRef } from "react";
import { AlertTriangle, Database, BookMarked } from "lucide-react";
import { useLanguage } from "./language-context";

const tips = [
  {
    icon: AlertTriangle,
    titleKey: "tip1Title",
    descKey: "tip1Desc",
    color: "#facc15",
  },
  {
    icon: Database,
    titleKey: "tip2Title",
    descKey: "tip2Desc",
    color: "#00b4d8",
  },
  {
    icon: BookMarked,
    titleKey: "tip3Title",
    descKey: "tip3Desc",
    color: "#a855f7",
  },
];

export function StudyTipsSection() {
  const ref = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">
            {t("studyTipsSectionTitle")}{" "}
            <span className="text-[#00b4d8]">{t("studyTipsSectionHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-400">{t("studyTipsSectionSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div key={index}>
                <div
                  className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{
                      backgroundColor: `${tip.color}20`,
                      border: `2px solid ${tip.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: tip.color }} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl mb-3">{t(tip.titleKey)}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(tip.descKey)}</p>
                  </div>

                  {/* Static corner accent */}
                  <div
                    className="absolute top-0 end-0 w-20 h-20 rounded-bl-full opacity-10"
                    style={{ backgroundColor: tip.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip card */}
        <div className="mt-12">
          <div
            className="backdrop-blur-lg border rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0, 180, 216, 0.1), rgba(0, 119, 182, 0.1))",
              borderColor: "rgba(0, 180, 216, 0.3)",
            }}
          >
            <h3 className="text-2xl mb-3">{t("proTip")}</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">{t("proTipText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
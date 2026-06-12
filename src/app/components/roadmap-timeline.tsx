import { useRef } from "react";
import { Circle } from "lucide-react";
import { useLanguage } from "./language-context";

const milestones = [
  {
    step: 1,
    titleKey: "milestone1Title",
    descKey: "milestone1Desc",
    status: "official",
    icon: "🎓",
  },
  {
    step: 2,
    titleKey: "milestone2Title",
    descKey: "milestone2Desc",
    status: "trusted",
    icon: "✅",
  },
  {
    step: 3,
    titleKey: "milestone3Title",
    descKey: "milestone3Desc",
    status: "trusted",
    icon: "✅",
  },
  {
    step: 4,
    titleKey: "milestone4Title",
    descKey: "milestone4Desc",
    status: "trusted",
    icon: "✅",
  },
  {
    step: 5,
    titleKey: "milestone5Title",
    descKey: "milestone5Desc",
    status: "paid",
    icon: "💳",
  },
  {
    step: 6,
    titleKey: "milestone6Title",
    descKey: "milestone6Desc",
    status: "trusted",
    icon: "📄",
  },
];

function TimelineMilestone({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const { t } = useLanguage();

  const getGlowColor = () => {
    if (milestone.status === "official") return "rgba(34, 197, 94, 0.35)";
    if (milestone.status === "paid") return "rgba(168, 85, 247, 0.3)";
    return "rgba(0, 180, 216, 0.3)";
  };

  const getBorderColor = () => {
    if (milestone.status === "official") return "#22c55e";
    if (milestone.status === "paid") return "#a855f7";
    return "#00b4d8";
  };

  const isOfficial = milestone.status === "official";

  return (
    <div className="relative flex items-center gap-8 mb-12">
      {/* Timeline line connector */}
      <div className="absolute left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-[#00b4d8] to-transparent -z-10" />

      {/* Content card */}
      <div
        className={`flex-1 ${
          index % 2 === 0 ? "text-end pe-12" : "ms-auto ps-12 text-start"
        }`}
      >
        <div
          className="relative backdrop-blur-lg bg-white/5 border rounded-2xl p-6 transition-transform hover:scale-105"
          style={{
            borderColor: getBorderColor(),
            boxShadow: `0 0 30px ${getGlowColor()}`,
            ...(isOfficial && {
              background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(0,0,0,0.2))",
            }),
          }}
        >
          {/* Official banner */}
          {isOfficial && (
            <div
              className="absolute top-0 left-0 right-0 rounded-t-2xl px-4 py-1 text-center text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "linear-gradient(90deg, rgba(34,197,94,0.3), rgba(34,197,94,0.1))",
                color: "#22c55e",
                borderBottom: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              {t("officialBadge")}
            </div>
          )}

          <div className={`flex items-start justify-between gap-4 ${isOfficial ? "mt-5" : ""}`}>
            <div className={index % 2 === 0 ? "text-end" : "text-start"}>
              <div className="flex items-center gap-2 mb-2">
                {index % 2 === 0 ? (
                  <>
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      {t("stepLabel")} {milestone.step}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      {t("stepLabel")} {milestone.step}
                    </span>
                    <span className="text-2xl">{milestone.icon}</span>
                  </>
                )}
              </div>
              <h3
                className="text-xl mb-2"
                style={isOfficial ? { color: "#22c55e" } : undefined}
              >
                {t(milestone.titleKey)}
              </h3>
              <p className="text-gray-400 text-sm">{t(milestone.descKey)}</p>
            </div>
          </div>

          {/* Status dot */}
          <div
            className={`absolute ${
              index % 2 === 0 ? "-end-3" : "-start-3"
            } top-1/2 -translate-y-1/2`}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: getBorderColor(),
                boxShadow: `0 0 10px ${getGlowColor()}`,
              }}
            >
              <Circle className="w-3 h-3 text-white fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RoadmapTimeline() {
  const ref = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">
            {t("roadmapSectionTitle")}{" "}
            <span className="text-[#00b4d8]">{t("roadmapSectionHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-400">{t("roadmapSectionSubtitle")}</p>
        </div>

        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineMilestone key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
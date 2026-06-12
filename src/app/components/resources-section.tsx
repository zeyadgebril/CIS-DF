import { useRef } from "react";
import {
  ExternalLink,
  BookOpen,
  FileQuestion,
  FileText,
  PlayCircle,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "./language-context";

const resourcesData = [
  {
    nameKey: "snuResource",
    typeKey: "officialCourse",
    trust: "official",
    descKey: "snuDesc",
    link: "https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=0e97835c47ea2e10c00af235126d431b&s=1&ssa=3",
    icon: GraduationCap,
  },
  {
    nameKey: "quizletResource",
    typeKey: "flashCards",
    trust: "trusted",
    descKey: "quizletDesc",
    link: "https://quizlet.com/1145496372/cis-df-knowledge-checks-and-exams-flash-cards/",
    icon: BookOpen,
  },
  {
    nameKey: "examdiscussResource",
    typeKey: "practiceQuestions",
    trust: "trusted",
    descKey: "examdiscussDesc",
    link: "https://www.examdiscuss.com/ServiceNow/exam/CIS-DF/questions/",
    icon: FileQuestion,
  },
  {
    nameKey: "scribdResource",
    typeKey: "documentPack",
    trust: "trusted",
    descKey: "scribdDesc",
    link: "https://www.scribd.com/document/1010613785/Cis-Df-Final-0-1-217-Questions",
    icon: FileText,
  },
  {
    nameKey: "udemyResource",
    typeKey: "paidCourse",
    trust: "paid",
    descKey: "udemyDesc",
    link: "https://www.udemy.com/course/pass-servicenow-cis-data-foundations-cmdbcsdm/?couponCode=KEEPLEARNING",
    icon: PlayCircle,
  },
  {
    nameKey: "cheatSheetResource",
    typeKey: "cheatSheet",
    trust: "trusted",
    descKey: "cheatSheetDesc",
    link: "https://skillcertpro.com/wp-content/uploads/2025/10/ServiceNow-CIS-DF-Data-Foundations-Master-Cheat-Sheet.pdf",
    icon: ClipboardList,
  },
];

function ResourceCard({
  resource,
  index,
}: {
  resource: (typeof resourcesData)[0];
  index: number;
}) {
  const { t } = useLanguage();

  const getGlowColor = () => {
    if (resource.trust === "official") return "rgba(34, 197, 94, 0.3)";
    if (resource.trust === "paid") return "rgba(168, 85, 247, 0.25)";
    return "rgba(0, 180, 216, 0.25)";
  };

  const getBorderColor = () => {
    if (resource.trust === "official") return "#22c55e";
    if (resource.trust === "paid") return "#a855f7";
    return "#00b4d8";
  };

  const getTrustBadge = () => {
    if (resource.trust === "official")
      return { text: t("officialBadge"), color: "#22c55e" };
    if (resource.trust === "paid")
      return { text: t("paidBadge"), color: "#a855f7" };
    return { text: t("trustedBadge"), color: "#00b4d8" };
  };

  const badge = getTrustBadge();
  const Icon = resource.icon;

  return (
    <div className="group relative">
      <div
        className="relative backdrop-blur-lg border rounded-2xl p-6 h-full transition-transform hover:-translate-y-2"
        style={{
          borderColor: getBorderColor(),
          boxShadow: `0 0 20px ${getGlowColor()}`,
          background: `linear-gradient(135deg, rgba(0, 30, 60, 0.25), rgba(0, 180, 216, 0.05))`,
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20"
          style={{ backgroundColor: getBorderColor() }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          style={{
            backgroundColor: `${getBorderColor()}20`,
            border: `2px solid ${getBorderColor()}`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: getBorderColor() }} />
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-xl mb-1">{t(resource.nameKey)}</h3>
          <p className="text-sm text-gray-500 mb-2">{t(resource.typeKey)}</p>
          <p className="text-sm text-gray-400">{t(resource.descKey)}</p>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${badge.color}20`,
              color: badge.color,
              border: `1px solid ${badge.color}40`,
            }}
          >
            {badge.text}
          </span>
        </div>

        {/* Link button */}
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: `${getBorderColor()}15`,
            border: `1px solid ${getBorderColor()}40`,
          }}
        >
          <span className="text-sm">{t("visitResource")}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function ResourcesSection() {
  const ref = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 relative" ref={ref}>
      {/* Static dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00b4d8 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">
            {t("resourcesTitle")}{" "}
            <span className="text-[#00b4d8]">{t("resourcesTitleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-400">{t("resourcesSubtitle")}</p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-lg"
            style={{
              background: "linear-gradient(135deg, rgba(0,40,0,0.2), rgba(34,197,94,0.1))",
              borderColor: "rgba(34,197,94,0.3)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" style={{ boxShadow: "0 0 6px #22c55e" }} />
            <span className="text-sm text-gray-300">{t("officialBadge")}</span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-lg"
            style={{
              background: "linear-gradient(135deg, rgba(0, 30, 60, 0.2), rgba(0, 180, 216, 0.1))",
              borderColor: "rgba(0, 180, 216, 0.3)",
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#00b4d8]" style={{ boxShadow: "0 0 6px #00b4d8" }} />
            <span className="text-sm text-gray-300">{t("trustedBadge")}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-lg">
            <div className="w-3 h-3 rounded-full bg-purple-500" style={{ boxShadow: "0 0 6px #a855f7" }} />
            <span className="text-sm text-gray-300">{t("paidBadge")}</span>
          </div>
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((resource, index) => (
            <ResourceCard key={index} resource={resource} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
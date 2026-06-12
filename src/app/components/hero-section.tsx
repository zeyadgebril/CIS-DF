import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "./language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#00b4d8]" />
            <span className="text-sm uppercase tracking-wider text-[#00b4d8]">
              {t("heroSubtitle")}
            </span>
            <Sparkles className="w-6 h-6 text-[#00b4d8]" />
          </div>

          <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
            <span
              className="inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #00b4d8 0%, #001e3c 50%, #00b4d8 100%)",
              }}
            >
              {t("heroTitle")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {t("heroDescription")}
          </p>

          <a
            href="https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=0e97835c47ea2e10c00af235126d431b&s=1&ssa=3"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 rounded-full inline-block transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #001e3c, #00b4d8)",
              border: "2px solid #00b4d8",
            }}
          >
            <span className="relative z-10 text-white">{t("heroButton")}</span>
          </a>
        </div>

        {/* Static progress arc */}
        <div className="relative w-80 h-80 mx-auto mb-16 mt-12">
          <div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "rgba(0, 30, 60, 0.3)" }}
          />
          <div
            className="absolute inset-4 rounded-full border-2"
            style={{ borderColor: "rgba(0, 180, 216, 0.2)" }}
          />

          <svg className="w-full h-full relative z-10" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgba(0, 30, 60, 0.3)"
              strokeWidth="12"
              strokeDasharray="5 5"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#dfProgressGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="502"
              strokeDashoffset="125"
              style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
            />
            <defs>
              <linearGradient id="dfProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="50%" stopColor="#001e3c" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
            </defs>
            <text
              x="100"
              y="95"
              textAnchor="middle"
              className="fill-white text-4xl"
              style={{ fontWeight: 600 }}
            >
              75%
            </text>
            <text x="100" y="115" textAnchor="middle" className="fill-gray-400 text-sm">
              {t("progressLabel")}
            </text>
          </svg>

          <div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 80px rgba(0, 180, 216, 0.35)" }}
          />
        </div>

        {/* Static scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="w-6 h-6 text-[#00b4d8]" />
        </div>
      </div>
    </section>
  );
}
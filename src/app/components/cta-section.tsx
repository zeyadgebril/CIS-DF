import { useRef } from "react";
import { Rocket, ArrowRight, Sparkle } from "lucide-react";
import { useLanguage } from "./language-context";

export function CTASection() {
  const ref = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="py-32 px-4 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative">
          {/* Static background glow */}
          <div
            className="absolute inset-0 blur-3xl rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 180, 216, 0.3) 0%, rgba(0, 30, 60, 0.2) 50%, transparent 100%)",
            }}
          />

          {/* Main CTA card */}
          <div
            className="relative backdrop-blur-lg border-2 rounded-3xl p-12 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 30, 60, 0.3), rgba(0, 180, 216, 0.1))",
              borderColor: "#00b4d880",
            }}
          >
            {/* Static corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#00b4d8]/20 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#001e3c]/30 rounded-tl-full" />

            {/* Static sparkles */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
              >
                <Sparkle className="w-4 h-4 text-[#00b4d8]" />
              </div>
            ))}

            {/* Icon */}
            <div className="relative inline-block mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                style={{
                  background: "linear-gradient(135deg, #00b4d8, #001e3c)",
                  boxShadow: "0 0 30px rgba(0, 180, 216, 0.4)",
                }}
              >
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="relative text-4xl md:text-5xl mb-4 text-white">
              {t("ctaTitle")}
            </h2>

            {/* Description */}
            <p className="relative text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              {t("ctaDescription")}
            </p>

            {/* CTA Button */}
            <a
              href="https://learning.servicenow.com/lxp/en/pages/now-learning-get-certified?id=amap_detail&achievement_id=0e97835c47ea2e10c00af235126d431b&s=1&ssa=3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white text-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #001e3c, #00b4d8)",
                border: "2px solid #00b4d8",
                boxShadow: "0 0 30px rgba(0, 180, 216, 0.3)",
              }}
            >
              <span>{t("ctaButton")}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2026 ServiceNow CIS-DF Roadmap - Zeyad Gebril</p>
        </div>
      </div>
    </section>
  );
}
import { Languages } from "lucide-react";
import { useLanguage } from "./language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 backdrop-blur-lg border border-[#00b4d8]/30 rounded-full p-3 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
      style={{
        background: "linear-gradient(135deg, rgba(0, 30, 60, 0.4), rgba(0, 180, 216, 0.1))",
      }}
    >
      <Languages className="w-5 h-5 text-[#00b4d8]" />
      <span className="text-sm text-white">
        {language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
}
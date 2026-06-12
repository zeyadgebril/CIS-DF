import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    heroTitle: "CIS-DF Certification",
    heroSubtitle: "Your Path to Mastery",
    heroDescription:
      "A comprehensive roadmap to achieve your ServiceNow Certified Implementation Specialist – Data Foundations certification with curated resources and strategic learning.",
    heroButton: "Start Learning",
    progressLabel: "Completion",

    // Roadmap Timeline
    roadmapSectionTitle: "The",
    roadmapSectionHighlight: "Journey",
    roadmapSectionSubtitle: "Follow this proven path to certification success",
    stepLabel: "Step",

    // Milestone titles & descriptions
    milestone1Title: "Official CIS-DF Program — ServiceNow University",
    milestone1Desc:
      "Start with the official ServiceNow University achievement page — the single source of truth for the exam",
    milestone2Title: "Quizlet Flash Cards — CIS-DF Knowledge Checks",
    milestone2Desc:
      "Build your foundation with comprehensive CIS-DF flash cards covering all exam topics",
    milestone3Title: "ExamDiscuss Practice Questions",
    milestone3Desc:
      "Drill real exam-style questions from the ExamDiscuss community database",
    milestone4Title: "217 Questions — Scribd Document",
    milestone4Desc:
      "Work through this 217-question collection to consolidate your knowledge",
    milestone5Title: "Paid Udemy Course — Highly Recommended",
    milestone5Desc:
      "This course goes deep on implementation, covers everything you need for the real exam, and is truly one of the best investments you can make to pass — use coupon: KEEPLEARNING",
    milestone6Title: "CIS-DF Master Cheat Sheet",
    milestone6Desc:
      "SkillCertPro cheat sheet — rapid review of all key concepts in the 48 hours before your exam",

    // Resources Section
    resourcesTitle: "Study",
    resourcesTitleHighlight: "Resources",
    resourcesSubtitle: "Curated materials to accelerate your CIS-DF preparation",
    officialBadge: "Official",
    trustedBadge: "Trusted",
    paidBadge: "Paid — Recommended",
    visitResource: "Visit Resource",

    // Progress Tracker
    progressSectionTitle: "Track Your",
    progressSectionHighlight: "Progress",
    progressSectionSubtitle: "Master the 5 official CIS-DF exam domains",
    overallProgress: "Domains Completed",
    examWeightCovered: "Exam weight covered",
    ofExam: "of exam",
    allDomainsCovered: "🎉 All Domains Covered!",
    readyForExam: "You're ready for the certification exam",

    // Domain names — matching official blueprint
    domain1: "Domain 1 — Configuration",
    domain2: "Domain 2 — Ingest",
    domain3: "Domain 3 — Govern",
    domain4: "Domain 4 — Insight",
    domain5: "Domain 5 — CSDM Fundamentals",

    // Study Tips
    studyTipsSectionTitle: "Study",
    studyTipsSectionHighlight: "Tips",
    studyTipsSectionSubtitle: "Key reminders for effective CIS-DF preparation",
    proTip: "💡 Pro Tip",
    proTipText:
      "Domain 3 (Govern) carries 35% of the exam — almost a third of your score. Make sure you deeply understand CMDB health scores, Data Manager, deduplication, and governance best practices. If you are short on time, prioritize Govern above everything else.",

    // Tip titles & descriptions
    tip1Title: "Govern is 35% of the Exam",
    tip1Desc:
      "CMDB health, Data Manager, deduplication, and governance carry the most weight — plan accordingly",
    tip2Title: "Focus on CMDB & CSDM",
    tip2Desc:
      "These two pillars underpin every domain — a strong conceptual grasp here multiplies your score everywhere",
    tip3Title: "Use the Cheat Sheet Last",
    tip3Desc:
      "Review the SkillCertPro cheat sheet in your final 48 hours as a rapid consolidation pass",

    // Motivation Section
    motivationTitle: "By The",
    motivationTitleHighlight: "Numbers",
    motivationSubtitle: "A comprehensive CIS-DF preparation toolkit",
    statPracticeQuestions: "Practice Questions",
    statExamSimulations: "Udemy CIS-DF Exam prep",
    statQuestionsFlashCards: "Flash Card Topics",
    statGoal: "Goal — CIS-DF Certified",

    // CTA Section
    ctaTitle: "Ready to Begin Your Journey?",
    ctaDescription:
      "Start with the official ServiceNow University page and work through the roadmap step by step",
    ctaButton: "Get Started Now",

    // Resource Types
    officialCourse: "Official Course",
    flashCards: "Flash Cards",
    practiceQuestions: "Practice Questions",
    documentPack: "Document Pack",
    paidCourse: "Paid Course",
    cheatSheet: "Cheat Sheet",

    // Resource Names & Descriptions
    snuResource: "ServiceNow University — CIS-DF",
    snuDesc: "Official CIS-DF achievement page — start here to understand the full exam scope",
    quizletResource: "Quizlet — CIS-DF Flash Cards",
    quizletDesc: "Comprehensive knowledge checks and exam flash cards for CIS-DF",
    examdiscussResource: "ExamDiscuss Practice Questions",
    examdiscussDesc: "Community-sourced CIS-DF exam-style questions",
    scribdResource: "Scribd — 217 Questions",
    scribdDesc: "Large question bank covering all CIS-DF topics",
    udemyResource: "Udemy CIS-DF Course",
    udemyDesc:
      "Structured paid course covering CMDB, CSDM & all domains — coupon: KEEPLEARNING",
    cheatSheetResource: "SkillCertPro Cheat Sheet",
    cheatSheetDesc: "CIS-DF Data Foundations master cheat sheet — PDF quick reference",
  },

  ar: {
    // Hero Section — Egyptian Arabic
    heroTitle: "شهادة CIS-DF",
    heroSubtitle: "رود ماب",
    heroDescription:
      "ملخص ومساعد لك لتحسين مهاراتك قبل دخولك لامتحان CIS-DF من ServiceNow — Data Foundations",
    heroButton: "ابدأ دلوقتي",
    progressLabel: "الإنجاز",

    // Roadmap Timeline
    roadmapSectionTitle: "مسيرة",
    roadmapSectionHighlight: "الرحلة",
    roadmapSectionSubtitle: "خطوات عملية توصلك للشهادة بكفاءة",
    stepLabel: "خطوة",

    // Milestone titles & descriptions — Egyptian Arabic
    milestone1Title: "البرنامج الرسمي لـ CIS-DF — جامعة ServiceNow",
    milestone1Desc:
      "ابدأ من الصفحة الرسمية على جامعة ServiceNow — دي المرجع الوحيد الموثوق لفهم نطاق الامتحان",
    milestone2Title: "بطاقات Quizlet التعليمية — CIS-DF",
    milestone2Desc:
      "ابني أساسك بالبطاقات التعليمية الشاملة اللي بتغطي كل موضوعات الامتحان",
    milestone3Title: "أسئلة تدريبية على ExamDiscuss",
    milestone3Desc:
      "اتدرب على أسئلة بنفس أسلوب الامتحان الحقيقي من قاعدة بيانات ExamDiscuss",
    milestone4Title: "217 سؤال — ملف Scribd",
    milestone4Desc:
      "اشتغل على مجموعة الـ 217 سؤال دي عشان ترسخ معلوماتك",
    milestone5Title: "كورس Udemy المدفوع — موصى به بشدة",
    milestone5Desc:
      "الكورس ده بيغوص في التطبيق العملي ويغطي كل حاجة محتاجها للامتحان الحقيقي — من أفضل الاستثمارات اللي ممكن تعملها عشان تعدي — كود الخصم: KEEPLEARNING",
    milestone6Title: "ملخص CIS-DF الشامل",
    milestone6Desc:
      "ملخص SkillCertPro — مراجعة سريعة لكل المفاهيم الأساسية في الـ 48 ساعة قبل الامتحان",

    // Resources Section
    resourcesTitle: "مصادر",
    resourcesTitleHighlight: "الدراسة",
    resourcesSubtitle: "أماكن توفر عليك وقت وتساعدك في تحضير CIS-DF",
    officialBadge: "رسمي",
    trustedBadge: "موثوق",
    paidBadge: "مدفوع — موصى به",
    visitResource: "افتح المصدر",

    // Progress Tracker
    progressSectionTitle: "تابع",
    progressSectionHighlight: "تقدمك",
    progressSectionSubtitle: "أتقن المجالات الـ 5 الرسمية لامتحان CIS-DF",
    overallProgress: "المجالات المكتملة",
    examWeightCovered: "وزن الامتحان المغطى",
    ofExam: "من الامتحان",
    allDomainsCovered: "🎉 خلصت كل المجالات!",
    readyForExam: "أنت جاهز تخوض امتحان الشهادة دلوقتي",

    // Domain names — matching official blueprint
    domain1: "المجال الأول — الإعداد والتكوين (15%)",
    domain2: "المجال الثاني — الإدخال والاستيعاب (19%)",
    domain3: "المجال الثالث — الحوكمة والإدارة (35%)",
    domain4: "المجال الرابع — الرؤية والتحليل (20%)",
    domain5: "المجال الخامس — أساسيات CSDM (11%)",

    // Study Tips
    studyTipsSectionTitle: "نصائح",
    studyTipsSectionHighlight: "الدراسة",
    studyTipsSectionSubtitle: "حاجات مهمة متنساش تعملها وانت بتذاكر CIS-DF",
    proTip: "💡 نصيحة الاحتراف",
    proTipText:
      "المجال التالت (الحوكمة) بيجيب 35% من الامتحان — يعني تقريباً تلت درجتك منه. تأكد إنك فاهم CMDB Health Scores وData Manager والـ Deduplication وأفضل ممارسات الحوكمة. لو وقتك ضيق، ابدأ بالحوكمة قبل أي حاجة تانية.",

    // Tip titles & descriptions — Egyptian Arabic
    tip1Title: "الحوكمة 35% من الامتحان",
    tip1Desc:
      "صحة CMDB وData Manager والـ Deduplication والحوكمة — ليهم أعلى وزن، خططلهم كويس",
    tip2Title: "ركز على CMDB وCSDM",
    tip2Desc:
      "الركيزتان دول هما أساس كل مجال — فهمهم كويس بيزود درجتك في كل حاجة تانية",
    tip3Title: "استخدم الملخص في الآخر",
    tip3Desc:
      "راجع ملخص SkillCertPro في آخر 48 ساعة قبل الامتحان كمراجعة سريعة",

    // Motivation Section — Egyptian Arabic
    motivationTitle: "الأرقام",
    motivationTitleHighlight: "بتتكلم",
    motivationSubtitle: "أدوات تحضير متكاملة عشان توصل لشهادة CIS-DF",
    statPracticeQuestions: "سؤال تدريبي",
    statExamSimulations: "تحضير لامتحان CIS-DF على Udemy",
    statQuestionsFlashCards: "موضوع في البطاقات التعليمية",
    statGoal: "الهدف — شهادة CIS-DF",

    // CTA Section
    ctaTitle: "مستعد تبدأ رحلتك؟",
    ctaDescription:
      "ابدأ بالصفحة الرسمية على جامعة ServiceNow واشتغل على خريطة الطريق خطوة خطوة",
    ctaButton: "ابدأ دلوقتي",

    // Resource Types
    officialCourse: "دورة رسمية",
    flashCards: "بطاقات تعليمية",
    practiceQuestions: "أسئلة تدريبية",
    documentPack: "ملف أسئلة",
    paidCourse: "كورس مدفوع",
    cheatSheet: "ملخص شامل",

    // Resource Names & Descriptions
    snuResource: "جامعة ServiceNow — CIS-DF",
    snuDesc: "الصفحة الرسمية لـ CIS-DF — ابدأ منها عشان تفهم نطاق الامتحان الكامل",
    quizletResource: "Quizlet — بطاقات CIS-DF",
    quizletDesc: "بطاقات تعليمية شاملة لفحص المعرفة وتحضير امتحان CIS-DF",
    examdiscussResource: "أسئلة ExamDiscuss التدريبية",
    examdiscussDesc: "أسئلة CIS-DF بأسلوب الامتحان الحقيقي من مجتمع المطورين",
    scribdResource: "Scribd — 217 سؤال",
    scribdDesc: "بنك أسئلة كبير بيغطي كل موضوعات CIS-DF",
    udemyResource: "كورس Udemy لـ CIS-DF",
    udemyDesc:
      "كورس مدفوع منظم بيغطي CMDB وCSDM وكل المجالات — كود الخصم: KEEPLEARNING",
    cheatSheetResource: "ملخص SkillCertPro الشامل",
    cheatSheetDesc: "ملخص PDF لأسس بيانات CIS-DF — مرجع سريع قبل الامتحان",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function loadLanguage(): Language {
  try {
    const saved = localStorage.getItem("cis-df-roadmap-language");
    if (saved === "ar" || saved === "en") return saved;
  } catch {}
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => loadLanguage());

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "ar" : "en";
      try {
        localStorage.setItem("cis-df-roadmap-language", next);
      } catch {}
      return next;
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
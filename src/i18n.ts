import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const supportedLanguages = ["en", "epo"];

const resources = {
  en: {
    translation: {
      emojiFlag: "🇬🇧",
      LayoutDesc: {
        home: "Experienced in web development, skilled in React, Node.js, TypeScript, and related technologies for building high-quality applications.",
        about: "Proficient in React, Node.js, TypeScript, HTML, CSS & JS. Dedicated to continuous learning & exploring new technologies.",
        projects: "Projects are built using modern technologies like React, Next.js, and Node.js. Let's build something amazing together.",
        snippets: "Discover a diverse collection of code snippets from various projects, available for browsing, learning or applying to your work."
      },
      privateRepo_label: "Private Repository",
      home_label: "Home",
      about_label: "About",
      lang_label: "Language",
      signIn_label: "Sign in",
      hireMe_label: "Hire me",
      contactMe_label: "Contact me",
      hero_span0: "Hello! I'm a",
      hero_subtitle0: "Developer",
      hero_desc0:
        "Experienced in web development, skilled in React, Node.js, TypeScript, and related technologies for building high-quality applications.",
      letsChat_label: "👋 Let's Chat",
      learnMore_label: "📫 Learn More",
      or_label: "or",
      projects_label: "Projects",
      view_label: "View",
      viewSrc_label: "View Source",
      snip_label: "Snippets",
      viewSnip_label: "View Snippet",
      lost_label: "Lost?",
    },
  },
  epo: {
    translation: {
      emojiFlag: "🇬🇧",
      home_label: "Hejmo",
      about_label: "Pri",
      lang_label: "Lingvo",
      signIn_label: "Ensaluti",
      hireMe_label: "Dungi min",
      contactMe_label: "Kontaktu",
      hero_span0: "Saluton! Mi estas",
      hero_subtitle0: "Programisto",
      hero_desc0:
        "Spertulo en retprogramado, lerta pri React, Node.js, TypeScript kaj rilataj teknologioj por konstrui altkvalitajn aplikaĵojn.",
      letsChat_label: "👋 Ni babili",
      learnMore_label: "📫 Learn More",
      or_label: "aŭ",
      projects_label: "Projektoj",
      view_label: "Vidi",
      viewSrc_label: "Vidi fonton",
      snip_label: "Snipetoj",
      viewSnip_label: "Vidi Snipeto",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(LocalStorageBackend) 
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    supportedLngs: supportedLanguages, 
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources,
  });

export default i18n;

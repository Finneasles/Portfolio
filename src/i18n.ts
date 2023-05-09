import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      emojiFlag: "🇬🇧",
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
      letsChat_label: "Let's chat",
      or_label: "or",
      projects_label: "Projects",
      viewProj_label: "View",
      viewSrc_label: "View Source",
      snip_label: "Snippets",
      viewSnip_label: "View Snippet",
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
      letsChat_label: "Ni babili",
      or_label: "aŭ",
      projects_label: "Projektoj",
      viewProj_label: "Vidi",
      viewSrc_label: "Vidi fonton",
      snip_label: "Snipetoj",
      viewSnip_label: "Vidi Snipeto",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

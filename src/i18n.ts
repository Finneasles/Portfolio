import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home_label: "Home",
      about_label: "About",
      projects_label: "Projects",
      pubs_label: "Publications",
      signIn_label: "Sign in",
      hireMe_label: "Hire me",
      contactMe_label: "Contact me",
      hero_span0: "Hello! I'm a",
      hero_subtitle0: "Developer",
      hero_desc0:
        "Experienced in web development, skilled in React, Node.js, TypeScript, and related technologies for building high-quality applications.",
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

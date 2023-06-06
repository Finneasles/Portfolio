import React from "react";
import i18n from "@/i18n";

import { useTranslation } from "react-i18next";

function Component({ supportedLanguages }) {
  const { i18n } = useTranslation();

  function handleChangeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select value={i18n.language} onChange={handleChangeLanguage}>
      {supportedLanguages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}

export default Component;

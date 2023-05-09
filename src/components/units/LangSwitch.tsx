import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const Component = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (code: string) => i18n.changeLanguage(code);

  return (
    <div className="relative">
      <Button
        href="/hire"
        onClick={(e) => {
          e.preventDefault();
        }}
        className="h-[44px] bg-opacity-10 px-2"
        ariaLabel={"Contact me"}
      >
        {t("emojiFlag")}
      </Button>

      <div
        className="absolute right-0 z-10 mt-2  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          {i18n.languages.map((lang) => {
            return (
              <a
                href="#"
                key={lang}
                onClick={(e) => {
                  e.preventDefault();
                  handleChangeLanguage(lang);
                }}
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {lang}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Component;

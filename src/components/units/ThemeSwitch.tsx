import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdWbSunny } from 'react-icons/md';
import { RiMoonClearFill } from 'react-icons/ri';

export const Component = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <label
        htmlFor="themeSwitch"
        className="relative inline-flex cursor-pointer items-center text-[0px]"
      >
        {" "}
        Theme Toggle
        <input
          type="checkbox"
          id="themeSwitch"
          value=""
          className="peer sr-only"
          checked={theme === "dark"}
        />
        <div
          onClick={() => {
            theme !== "light" ? setTheme("light") : setTheme("dark");
          }}
          className="peer h-5 w-6 rounded-2xl bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-2 after:rounded-lg after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#408FED] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
        ></div>
      </label> */}

      <label
        htmlFor="Toggle1"
        className="inline-flex cursor-pointer items-center space-x-4 dark:text-gray-100"
      >
        <span className={theme == "dark" ? "opacity-30" : "opacity-100"}><MdWbSunny /></span>
        <span className="relative">
          <input
            id="Toggle1"
            checked={theme !== "dark" ? false : true}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="checkbox"
            className="peer hidden"
          />
          <div className="h-4 w-8 rounded-full shadow-inner bg-[#408FED]/10 dark:bg-[#408FED] peer-checked:dark:bg-[408FED]"></div>
          <div className="absolute inset-y-0 left-0 m-1 h-2 w-2 rounded-full shadow peer-checked:left-auto peer-checked:right-0 bg-gray-400 dark:bg-gray-800"></div>
        </span>
        <span className={theme !== "dark" ? "opacity-30" : "opacity-100"}><RiMoonClearFill /></span>
      </label>
    </>
  );
};

export default Component;

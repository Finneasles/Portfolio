import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      <label
        htmlFor="themeSwitch"
        className="relative inline-flex cursor-pointer items-center text-[0px]"
      >
        {" "}
        Theme Toggle
        <input
          type="checkbox"
          id="themeSwitch"
          value=""
          className="sr-only peer"
        />
        <div
          onClick={() => {
            theme !== "light" ? setTheme("light") : setTheme("dark");
          }}
          className="peer h-6 w-11 rounded-lg bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-lg after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
        ></div>
      </label>
    </>
  );
};

export default Component;

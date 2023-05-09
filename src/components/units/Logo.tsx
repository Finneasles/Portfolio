import { useScrollProgress } from "@/hooks";
import { forwardRef, useRef } from "react";
import Link from "next/link";

const Component = ({ transparentNav }) => {
  const { scrollY } = useScrollProgress();

  return (
    <Link href="/">
      <a className="flex items-center text-center font-Poppins">
        <div className="lg:flex lg:gap-8">
          <div className="flex space-x-2 ">
            <span
              className={`flex text-2xl tracking-wide ${
                scrollY > 100 || !transparentNav
                  ? "text-[#408FED] dark:text-white"
                  : " text-white dark:text-white"
              } text-opacity-92 items-center justify-center rounded-sm text-3xl font-black uppercase`}
            >
              f1n
            </span>
            <span
              className={`flex text-lg ${
                scrollY > 100 || !transparentNav
                  ? "bg-[#408FED] text-white dark:bg-white dark:text-[#408FED]"
                  : " bg-[#fff] text-[#408FED] dark:bg-white"
              } bg-opacity-92 text-opacity-92 items-center justify-center rounded px-1.5 text-2xl font-black uppercase`}
            >
              .dev
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Component;

import {
  MobileMenu as Burger,
  CTA as Buttons,
  Nav as Menu,
} from "@/components";

import React, { useState } from "react";
import Link from "next/link";
import { NextRouter } from "next/router";

type Props = {
  menuData: object;
  variant?: string;
  router: NextRouter;
  scrollY: number;
  transparentNav?: boolean;
};

const variants = {
  primary: "absolute border-transparent border-b-0 text-white",
  fixed:
    "fixed bg-white dark:bg-[#00162D] bg-opacity-64 backdrop-blur-xl dark:border-white/10 border-white/10 bg-opacity-80",
};

export const Navbar = ({
  scrollY,
  router,
  menuData,
  transparentNav,
  variant = "primary",
}: Props) => {
  const [visible, setMobileMenu] = useState(false);
  return (
    <nav
      aria-label="Site Navigation"
      className={`${variants[variant]} z-[98] h-[96px] w-full border-b px-6 lg:px-32`}
    >
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-between text-sm">
        <Link href="/">
          <div className="flex items-center text-center font-Poppins">
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
                  } bg-opacity-92 text-opacity-92 items-center justify-center rounded px-1 text-2xl font-black uppercase`}
                >
                  .dev
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex w-full items-center justify-end space-x-2">
          <Menu
            scrollY={scrollY}
            transparentNav={transparentNav}
            data={menuData}
            router={router}
          />
          <Buttons />
          <Burger data={menuData} state={{ visible, setMobileMenu }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
};

const variants = {
  primary: "absolute h-[128px] border-transparent border-b-0 text-white",
  fixed:
    "fixed h-[96px] bg-white dark:bg-[#00162D] bg-opacity-64 backdrop-blur-xl dark:border-white/10 " +
    "dark:bg-gray-900 border-white/10  bg-opacity-80",
};

export const Navbar = ({ router, menuData, variant = "primary" }: Props) => {
  const [visible, setMobileMenu] = useState(false);

  return (
    <nav
      aria-label="Site Navigation"
      className={`transition-all ${variants[variant]} z-10  w-full border-b px-6 lg:px-32`}
    >
      <div className="flex items-center justify-between w-full h-full mx-auto text-sm">
        <Link href="/">
          <div className="flex items-center text-center">
            <div className="lg:flex lg:gap-8">
              <div>
                <span className="block h-10 w-[2.5rem] rounded-sm bg-gray-400 dark:bg-gray-700 md:w-[10rem] lg:w-[10rem]"></span>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-end w-full space-x-5">
          <Menu data={menuData} router={router} />
          <Buttons />
          <Burger data={menuData} state={{ visible, setMobileMenu }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

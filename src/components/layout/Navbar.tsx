import {
  MobileMenu as Burger,
  CTA as Buttons,
  Nav as Menu,
} from "@/components";

import React, { useState } from "react";
import Link from "next/link";

type Props = {
  menuData: object;
  variant?: string;
};
const variants = {
  primary:
    "fixed h-[128px] border-transparent border-b-0 text-white",
  fixed:
    "fixed h-[96px] bg-gray-100 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900 border-white/10  bg-opacity-80",
};
export const Navbar = ({ menuData, variant = "primary" }: Props) => {
  const [visible, setMobileMenu] = useState(false);

  return (
    <nav
      aria-label="Site Navigation"
      className={`transition-all ${variants[variant]} z-10  w-full border-b px-6 lg:px-32`}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between text-sm">
        <Link href="/">
          <h1 className="flex items-center text-center">
            <div className="lg:flex lg:gap-8">
              <div>
                <span className="block h-10 w-[2.5rem] rounded-sm bg-gray-400 dark:bg-gray-700 md:w-[10rem] lg:w-[10rem]"></span>
              </div>
            </div>
          </h1>
        </Link>
        <div className="w-full">
          <div className="flex items-center justify-end space-x-5">
            <Menu data={menuData} />
            <Buttons />
            <Burger data={menuData} state={{ visible, setMobileMenu }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

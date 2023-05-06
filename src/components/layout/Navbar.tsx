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
};

const variants = {
  primary: "absolute h-[128px] border-transparent border-b-0 text-white",
  fixed:
    "fixed h-[96px] bg-white dark:bg-[#00162D] bg-opacity-64 backdrop-blur-xl dark:border-white/10 " +
    "dark:bg-gray-900 border-white/10  bg-opacity-80",
};

export const Navbar = ({ scrollY, router, menuData, variant = "primary" }: Props) => {
  const [visible, setMobileMenu] = useState(false);
  return (
    <nav
      aria-label="Site Navigation"
      className={`${variants[variant]} z-[98] w-full border-b px-6 lg:px-32`}
    >
      <div className="flex max-w-4xl items-center justify-between w-full h-full mx-auto text-sm">
        <Link href="/">
          <div className="flex items-center text-center">
            <div className="lg:flex lg:gap-8">
              <div className="flex space-x-2 ">
              <span className="flex items-center text-3xl justify-center font-black text-white uppercase rounded-sm text-opacity-70">f1n</span>
              <span className={`flex ${scrollY > 100 ? "text-[#00162D]" : "text-[#57A0F7]"} items-center text-2xl justify-center px-1 uppercase bg-white bg-opacity-70 rounded font-black`}>.dev</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-end w-full space-x-2">
          <Menu data={menuData} router={router} />
          <Buttons />
          <Burger data={menuData} state={{ visible, setMobileMenu }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import {
  MobileMenu as Burger,
  CTA as Buttons,
  LogoComponent,
  Nav as Menu,
} from "@/components";
import { NextRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

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
      <div
        className={`mx-auto flex h-full w-full max-w-4xl items-center justify-between text-sm`}
      >
        <LogoComponent transparentNav={transparentNav} />
        <div className="flex w-full items-center justify-end space-x-2">
          <Menu
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

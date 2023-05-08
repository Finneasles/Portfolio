import { UrlObject } from "url";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollProgress } from "@/hooks";

export const Component = ({ data,router,transparentNav }) => {
  const [active, setActive] = useState("");
  const { t } = useTranslation();
  const currentPathname = router?.pathname;
  const { scrollY } = useScrollProgress();
  return (
    <div className="flex grow md:justify-center lg:justify-end mr-0 lg:mr-4 items-center">
      <nav className="items-center hidden px-2 space-x-6 uppercase drop-shadow-md md:flex ">
        {data.map((e: { id: string, name: string; href: string | UrlObject }) => {
          return (
            <Link key={e.name} href={e.href}>
              <a
                className={`${scrollY > 100 || !transparentNav ? "text-[#0D4380]" : "text-white"} dark:text-white font-semibold hover:opacity-100 ${
                  e.href === currentPathname
                    ? "opacity-100"
                    : undefined === currentPathname && e.href === "/"
                    ? "opacity-100"
                    : "opacity-70"
                }`}
              >
                {t(`${e.id}_label`)}
                
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Component;

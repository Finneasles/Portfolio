import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollProgress } from "@/hooks";
import { UrlObject } from "url";
import Link from "next/link";

export const Component = ({ data, router, transparentNav }) => {
  const [active, setActive] = useState("");
  const { t } = useTranslation();

  const currentPathname = router?.pathname;
  const { scrollY } = useScrollProgress();
  return (
    <div className="mr-0 flex grow items-center md:justify-center lg:mr-4 lg:justify-end">
      <nav className="hidden items-center space-x-6 px-2 uppercase drop-shadow-md md:flex ">
        {data.map(
          (e: { id: string; name: string; href: string | UrlObject }) => {
            return (
              <Link key={e.name} href={e.href}>
                <a
                  className={`${
                    scrollY > 100 || !transparentNav
                      ? "text-[#0D4380]"
                      : "text-white"
                  } font-semibold hover:opacity-100 dark:text-white ${
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
          }
        )}
      </nav>
    </div>
  );
};

export default Component;

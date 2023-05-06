import { UrlObject } from "url";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Component = ({ data, router }) => {
  const [active, setActive] = useState("");
  const { t } = useTranslation();

  const currentPathname = router?.pathname;
  useEffect(() => {
    console.log("sss", currentPathname);
    return () => {};
  }, [currentPathname]);

  return (
    <div className="flex grow md:justify-center lg:justify-end mr-0 lg:mr-4">
      <nav className="items-center hidden px-2 space-x-6 uppercase drop-shadow-md md:flex ">
        {data.map((e: { id: string, name: string; href: string | UrlObject }) => {
          return (
            <Link key={e.name} href={e.href}>
              <a
                className={`dark:text-white text-black hover:opacity-100 ${
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

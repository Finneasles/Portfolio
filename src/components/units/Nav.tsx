import { UrlObject } from "url";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Component = ({ data, router }) => {
  const [active, setActive] = useState("");
  const currentPathname = router?.pathname;
  useEffect(() => {
    console.log("sss", currentPathname);
    return () => {};
  }, [currentPathname]);

  return (
    <div className="flex grow md:justify-center lg:justify-end">
      <nav className="items-center hidden px-2 space-x-6 uppercase md:flex">
        {data.map((e: { name: string; href: string | UrlObject }) => {
          return (
            <Link key={e.name} href={e.href}>
              <a
                className={`text-white hover:text-opacity-100 ${
                  e.href === currentPathname
                    ? "text-opacity-100"
                    : undefined === currentPathname && e.href === "/"
                    ? "text-opacity-100"
                    : "text-opacity-70"
                }`}
              >
                {e.name}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Component;

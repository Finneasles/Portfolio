import { UrlObject } from "url";
import Link from "next/link";
import React from "react";

export const Component = ({ data }) => {
  return (
    <div className="flex grow md:justify-center lg:justify-end">
      <nav className="items-center hidden px-2 uppercase space-x-10 md:flex">
        {data.map((e: { name: string; href: string | UrlObject }) => {
          return (
            <Link key={e.name} href={e.href}>
              {e.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Component;

import {
  getDefaultStaticTitle as defaultTitle,
  getStaticTitleEnd as TitleEnd,
} from "@/utils";
import { CookieConsent, Footer, Navbar } from "@/components";
import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter } from "next/router";
import { useScrollProgress } from "@/hooks";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
  navbar?: boolean;
  cookieConsent?: boolean;
  router: NextRouter;
};

const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Publications",
    href: "/publications",
  },
];

export const Layout = ({
  children,
  title = defaultTitle(),
  router,
  cookieConsent = true,
  footer = true,
  navbar = true,
}: Props) => {
  const { scrollY, progress } = useScrollProgress();

  return (
    <div>
      <Head>
        <title>{title + TitleEnd()}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,
        width=device-width"
        />
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={process.env.NEXT_PUBLIC_DESC}
        />
        <meta
          property="og:image"
          content="./images/thumb-unset.jpg"
        />
      </Head>
      {navbar ? (
        <>
          <div className="fixed top-0 z-[99] h-1 w-full">
            <div className="h-1 w-full bg-transparent ">
              <div
                className={
                  "h-1 bg-[#408FED] transition-all duration-100 ease-out"
                }
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <header>
            <Navbar
              menuData={navData}
              scrollY={scrollY}
              variant={scrollY > 100 ? "fixed" : "primary"}
              router={router}
            />
          </header>
        </>
      ) : null}
      <div>{children}</div>

      {footer ? <Footer /> : null}
      {cookieConsent ? <CookieConsent /> : null}
    </div>
  );
};

export default Layout;

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
  pageDesc?: string;
  cookieConsent?: boolean;
  router: NextRouter;
  transparentNav?: boolean;
};

const navData = [
  {
    id: "home",
    name: "Home",
    href: "/",
  },
  {
    id: "about",
    name: "About",
    href: "/about",
  },
  {  id: "projects",
    name: "Projects",
    href: "/projects",
  },
  {   
    id: "pubs",
    name: "Publications",
    href: "/publications",
  },
];

export const Layout = ({
  children,
  title = defaultTitle(),
  router,
  pageDesc = null,
  cookieConsent = true,
  footer = true,
  navbar = true,
  transparentNav = false
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
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={title + TitleEnd()} />
        <meta
          property="og:description"
          content={pageDesc}
        />
        <meta property="og:image" content="/images/thumb-unset.jpg" />
      </Head>
      {navbar ? (
        <>
          <div className="scroll-prog">
            <div>
              <div
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <header>
            <Navbar
              menuData={navData}
              scrollY={scrollY}
              transparentNav={transparentNav}
              variant={scrollY > 100 || !transparentNav ? "fixed" : "primary"}
              router={router}
            />
          </header>
        </>
      ) : null}
      <div className="sub-body">
        <div className="content">{children}</div>
        {footer ? <Footer /> : null}
      </div>
      {cookieConsent ? <CookieConsent /> : null}
    </div>
  );
};

export default Layout;

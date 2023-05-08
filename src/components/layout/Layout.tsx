import {
  getDefaultStaticTitle as defaultTitle,
  getStaticTitleEnd as TitleEnd,
} from "@/utils";
import { CookieConsent, Footer, Navbar } from "@/components";
import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter } from "next/router";
import { useScrollProgress } from "@/hooks";
import { useTranslation } from "react-i18next";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
  thumbSrc?: string;
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
  { id: "projects", name: "Projects", href: "/projects" },
  {
    id: "pubs",
    name: "Publications",
    href: "/publications",
  },
];

export const Layout = ({
  children,
  title = defaultTitle(),
  thumbSrc,
  router,
  pageDesc = null,
  cookieConsent = true,
  footer = true,
  navbar = true,
  transparentNav = false,
}: Props) => {
  const { scrollY, progress } = useScrollProgress();
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{title + TitleEnd()}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" type="image/png" href={`${process.env.NEXT_PUBLIC_SITE_URL}/images/favicon.png`}/>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#408FED"/>
        <meta name="description" content={pageDesc || t("hero_desc0")} />
        <meta property="og:title" content={title + TitleEnd()} />
        <meta property="og:description" content={pageDesc || t("hero_desc0")} />
        <meta
          property="og:image"
          content={
            thumbSrc ||
            `${process.env.NEXT_PUBLIC_SITE_URL}/images/thumb-unset.jpg`
          }
        />
        <link rel="apple-touch-icon" href="/images/icons/152x.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/180x.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/icons/167x.png" />
      </Head>
      {navbar ? (
        <>
          <div className="scroll-prog">
            <div>
              <div style={{ width: `${progress}%` }}></div>
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
        {footer ? <Footer transparentNav={false} /> : null}
      </div>
      {cookieConsent ? <CookieConsent /> : null}
    </div>
  );
};

export default Layout;

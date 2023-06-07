import {
  getDefaultStaticTitle as defaultTitle,
  getStaticTitleEnd as TitleEnd,
} from "@/utils";
import React, { ReactNode, useEffect, useState } from "react";
import { CookieConsent, Footer, Navbar } from "@/components";
import { useTranslation } from "react-i18next";
import { useScrollProgress } from "@/hooks";
import { NextRouter } from "next/router";
import Head from "next/head";

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
  type?: string;
};

const navData = [
  {
    id: "home",
    href: "/",
  },
  {
    id: "about",
    href: "/about",
  },
  { id: "projects", name: "Projects", href: "/projects" },
  {
    id: "snip",
    href: "/snippets",
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
  type,
  transparentNav = false,
}: Props) => {
  const { scrollY, progress } = useScrollProgress();
  const { t } = useTranslation();
  const [desc, setDesc] = useState(pageDesc || t("site_desc"));
  const canonicalUrl =
    process.env.NEXT_PUBLIC_SITE_URL +
    (router?.query?.static
      ? router.query.static
      : router?.pathname?.substring(1));
  const pageTitle = title
    ? title + " — " + process.env.NEXT_PUBLIC_APP_TITLE
    : process.env.NEXT_PUBLIC_APP_TITLE +
      " — " +
      process.env.NEXT_PUBLIC_STATIC_TITLE;
  const pageType = type || "website";
  const pageAuthor = process.env.NEXT_PUBLIC_APP_TITLE;
  const pageThumb =
    thumbSrc || `${process.env.NEXT_PUBLIC_SITE_URL}images/thumb-min.png`;
 
  return (
    <div>
      <Head>
        <title>{title + TitleEnd()}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />  <link rel="icon" type="image/png" href={"/images/icons/fav.ico"} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#408FED" />
        <meta name="description" content={desc} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="author" content={pageAuthor} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_APP_TITLE}
        />
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={pageThumb} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@wiremap" />
        <meta property="twitter:title" content={pageTitle}></meta>

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/icons/152.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/icons/167.png"
        />
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

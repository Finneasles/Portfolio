import {
  getDefaultStaticTitle as defaultTitle,
  getStaticTitleEnd as TitleEnd,
} from "@/utils";
import { CookieConsent, Footer, Navbar } from "@/components";
import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
  navbar?: boolean;
  cookieConsent?: boolean
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

export const Layout = ({ children, title = defaultTitle(), cookieConsent = true, footer = true , navbar = true}: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setProgress((window.scrollY / window.innerHeight ) * 100)
      console.log(progress);
    };

    handleScroll();
    console.log(window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      </Head>
      {navbar ? (<> 
        <div className="fixed top-0 z-20 h-1 w-full">
        <div className="h-1 w-full bg-transparent dark:bg-gray-700">
          <div className="h-1 bg-blue-600" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <header>
        <Navbar
          menuData={navData}
          variant={scrollY > 100 ? "fixed" : "primary"}
        />
      </header>
      </>) : null}
      <div>{children}</div>

      {footer ? <Footer /> : null}
      {cookieConsent ? <CookieConsent /> : null}
    </div>
  );
};

export default Layout;

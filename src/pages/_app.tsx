import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { useGA } from "@/hooks";
import "@/styles/globals.css";
import i18n from "@/i18n";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  useGA({});
//   const { locale } = useRouter();

// useEffect(() => {
//   const supportedLanguages = ["en", "epo"];
//   const currentLanguage = supportedLanguages.includes(i18n.language) ? i18n.language : "en";
//   const prefix = `/${currentLanguage}`;
//   const currentPath = window.location.pathname;

//   if (!supportedLanguages.some((lang) => currentPath.startsWith(`/${lang}`))) {
//     const newPath = `${prefix !== "/en" ? prefix : ""}${currentPath}`;
//     window.history.replaceState(null, null, newPath);
//   }
// }, []);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}

export default MyApp;

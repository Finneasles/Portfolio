import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import "@/styles/globals.css";
import i18n from "@/i18n";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
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

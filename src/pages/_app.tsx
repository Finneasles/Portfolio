import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import i18n from "@/i18n";

function MyApp({ Component, pageProps }: AppProps<{}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default MyApp;

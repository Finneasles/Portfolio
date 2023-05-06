import { useScrollProgress } from "@/hooks";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";

const BodyComponent = ({ children }: { children: any }) => {
  const { scrollY } = useScrollProgress();

  useEffect(() => {
    function setStatusBarColor() {
      const meta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (!meta) return;
      const color = scrollY > 100 ? '#00162D' : '#5FA7FC';
      meta.setAttribute('content', color);
    }

    setStatusBarColor();
  }, [scrollY]);

  return (
    <body
    >
      {children}
    </body>
  );
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <BodyComponent>
          <NextScript />
          <Main />
        </BodyComponent>
      </Html>
    );
  }
}

export default MyDocument;
function useEffects(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}

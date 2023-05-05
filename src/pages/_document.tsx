import { useScrollProgress } from "@/hooks";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const BodyComponent = ({ children }: { children: any }) => {
  const { scrollY } = useScrollProgress();
  return (
    <body
      className={`${
        scrollY > 100 ? "dark:bg-[#101727]" : "dark:bg-[#408FED]"
      } bg-white bg-gradient-to-b text-black  dark:from-[#00162D] dark:to-[#000] dark:text-white`}
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

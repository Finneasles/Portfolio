import { useScrollProgress } from "@/hooks";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
        </Script>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

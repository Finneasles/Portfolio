import React, { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import { HiInformationCircle } from "react-icons/hi";
import { Button } from "@/components";
import { useEntryEffect } from "@/hooks";

export function Component() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const { showText, textPosition } = useEntryEffect({
    delay: 500,
    initialPosition: 6000,
    finalPosition: 0,
  });

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
    console.log("accepring cookies");
  };
  const closePopup = () => {
    setConsent(true);
    console.log("Closed cookie consent");
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("Denied cookie consent");
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      style={{
        transform: `translateX(${textPosition}%)`,
      }}
      className="cookie-consent"
    >
      <p className="mb-4">
        This website uses essential cookies to enhance user experience. No
        identifying information is collected. Please read{" "}
        <a
          className="font-bold underline"
          href="/privacy-policy"
          target="_blank"
        >
          Privacy Policy.
        </a>{" "}
        for more details.
      </p>
      <div className="flex space-x-2">
        <Button
          variant="secondary"
          className="px-6 text-start"
          onClick={() => {
            closePopup();
          }}
        >
          Close
        </Button>
        <Button
          className="px-6"
          onClick={() => {
            acceptCookie();
          }}
        >
          Agree
        </Button>
      </div>
    </div>
  );
}

export default Component;

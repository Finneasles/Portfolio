import React, { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import { HiInformationCircle } from "react-icons/hi";
import { Button } from "@/components";

export function Component() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

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
    <div className="fixed bottom-0 z-[99] flex w-full justify-start p-6">
      <div className="fade show rounded-md bg-white bg-opacity-95 text-xs dark:bg-black sm:w-full md:w-[650px]">
        <div className="flex flex-col rounded p-4">
          <p className="mb-4">
            This website uses essential cookies to enhance user experience. No
            identifying information is collected. Please read{" "}
            <a className="font-bold underline" href="/privacy-policy" target="_blank">
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
      </div>
    </div>
  );
}

export default Component;

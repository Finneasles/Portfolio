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
    <div className="fixed bottom-0 z-[99] flex w-full justify-end p-6">
      <div className="fade show rounded-md bg-white bg-opacity-95 text-xs dark:bg-black sm:w-full md:w-[650px]">
        <div className="flex items-center justify-between p-4 rounded">
          <p>
            This website uses essential cookies to enhance user experience. No
            identifying information is collected. Please read{" "}
            <a className="font-bold underline" href="#" target="_blank">
              Cookies Policy.
            </a>{" "}
            for more details.
          </p>
          <Button
            onClick={() => {
              closePopup();
            }}
          >
            Agree
          </Button>{" "}
        </div>
      </div>
    </div>
    // <div
    //   className={`fixed bottom-0 w-full rounded-sm bg-blue-700 p-4 text-sm text-white ${
    //     consent ? "hidden" : ""
    //   }`}
    // >
    //   <HiInformationCircle size={20} />
    //   <p className="text-slate-200">
    //     Cookies are used to collect information about your choices and
    //     preferences, and collect information about your use of the sites to
    //     improve functionality & enhance experience.
    //   </p>
    //   <div className="flex justify-between mt-4 align-middle">
    //     <button
    //       className="text-bold"
    //       onClick={() => {
    //         closePopup();
    //       }}
    //     >
    //       Close
    //     </button>

    //     <button
    //       className="shadow-md"
    //       onClick={() => {
    //         acceptCookie();
    //       }}
    //     >
    //       Accept All
    //     </button>
    //   </div>
    // </div>
  );
}

export default Component;

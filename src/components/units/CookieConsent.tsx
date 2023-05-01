import React, { useEffect, useState } from "react";
import { setCookie, hasCookie } from "cookies-next";
import { HiInformationCircle } from "react-icons/hi";

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
    <div
      className={`fixed bottom-0 w-full rounded-sm bg-blue-700 p-4 text-sm text-white ${
        consent ? "hidden" : ""
      }`}
    >
      <HiInformationCircle size={20} />
      <p className="text-slate-200">
        Cookies are used to collect information about your choices and
        preferences, and collect information about your use of the sites to
        improve functionality & enhance experience.
      </p>
      <div className="flex justify-between mt-4 align-middle">
        <button
          className="text-bold"
          onClick={() => {
            closePopup();
          }}
        >
          Close
        </button>

        <button
          className="shadow-md"
          onClick={() => {
            acceptCookie();
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}

export default Component;

import { useEffect } from "react";
import ReactGA from "react-ga";

interface IUseGoogleAnalyticsOptions {
  debug?: boolean;
  gaTrackingId?: string;
  alwaysSendToGa?: boolean;
}

function useGoogleAnalytics({
  debug = false,
  gaTrackingId,
  alwaysSendToGa = false,
}: IUseGoogleAnalyticsOptions) {
  const GA_MEASUREMENT_ID = gaTrackingId || process.env.GA_MEASUREMENT_ID;

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID, { debug });
  }, [GA_MEASUREMENT_ID, debug]);

  useEffect(() => {
    const logPageView = () => {
      if (alwaysSendToGa) {
        ReactGA.pageview(window.location.pathname + window.location.search);
      } else {
        const isLocal = window.location.href.includes("localhost");
        if (!isLocal) {
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
      }
    };
    logPageView();

    window.addEventListener("popstate", logPageView);
    return () => {
      window.removeEventListener("popstate", logPageView);
    };
  }, [alwaysSendToGa]);
}

export default useGoogleAnalytics;

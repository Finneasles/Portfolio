import { useState, useEffect } from "react";

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

const useIsPwaInstalled = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isRunningStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isSavedToHomeScreen =
      (window.navigator as NavigatorWithStandalone).standalone !== undefined &&
      (window.navigator as NavigatorWithStandalone).standalone;
    setIsInstalled(isRunningStandalone || isSavedToHomeScreen);
  }, []);

  return isInstalled;
};

export default useIsPwaInstalled;

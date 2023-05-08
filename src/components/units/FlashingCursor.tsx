import { useEffect, useState } from "react";

const Component = ({ interval }: { interval: number }) => {
  const [isFlashing, setIsFlashing] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, interval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      style={{
        background: isFlashing
          ? "rgba(255,255,255,0.32)"
          : "rgba(255,255,255,0.96)",
      }}
      className={`absolute bg-white ${
        isFlashing ? "bg-opacity-32" : "bg-opacity-84"
      } top-1/2 h-[64%] w-2 -translate-y-1/2 rounded-md`}
    ></span>
  );
};

export default Component;
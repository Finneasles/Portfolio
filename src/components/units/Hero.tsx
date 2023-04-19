import React from "react";
import { BackgroundLayer } from "@/components";

export const HeroContainer = ({ children }) => {
  return (
    <div style={{background: "linear-gradient(90deg, #539DF5 0%, #65ABFF 100.02%)"}}className="relative flex h-[80vh] min-h-[150px] content-center items-center justify-center">
      {/* <BackgroundLayer /> */}
      <div className="relative w-full ">
        <div className="flex flex-wrap items-center">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;

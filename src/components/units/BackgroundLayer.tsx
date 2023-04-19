import React from "react";

export const BackgroundLayer = () => {
  return (
    <div
      className="absolute top-0 h-full w-full bg-cover bg-center"
      style={{
        backgroundImage:
          " url('https://static.vecteezy.com/system/resources/previews/002/070/994/original/abstract-blue-grid-perspective-design-background-with-lighting-high-technology-lines-landscape-connect-of-future-vector.jpg')",
      }}
    >
      <span
        id="blackOverlay"
        className="absolute h-full w-full bg-black opacity-50 dark:opacity-75"
      ></span>
    </div>
  );
};
export default BackgroundLayer;

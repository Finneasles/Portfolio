import Image from "next/image";
import React from "react";

export const Component = ({ alt, caption, src }) => {
  return (
    <figure>
      <div className="relative aspect-video h-60 w-full md:h-80 lg:h-96">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <figcaption className="py-2 text-xs uppercase text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Component;

import React from "react";
import Image from "next/image";

export const Component = ({ alt, caption,src }) => {
  return (
    <figure>
      <div className="relative w-full h-60 md:h-80 lg:h-96 aspect-video">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <figcaption className="py-2 text-xs uppercase text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Component;

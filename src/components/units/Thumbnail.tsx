import React from "react";
import Image from "next/image";

export const Component = ({ alt, caption }) => {
  return (
    <figure>
      <div className="relative w-full h-60 md:h-80 lg:h-96">
        <Image
          src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
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

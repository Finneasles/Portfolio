import React from "react";
import Image from "next/image";

export const Thumbnail = ({ alt, caption }) => {
  return (
    <figure>
      <div className="relative h-60 w-full md:h-80 lg:h-96">
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

export default Thumbnail;

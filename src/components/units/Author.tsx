import React from "react";
import Image from "next/image";

export const Author = ({ data }) => {
  return (
    <address className="mb-8 flex w-full items-center space-x-4 text-sm text-gray-900 dark:text-white">
      <div className="relative h-[64px] w-[64px]">
        <Image
          className="mr-4 h-16 w-16 rounded-full"
          src={data.image}
          alt="Jese Leos"
          layout="fill"
        />
      </div>
      <div>
        <a
          href="#"
          rel="author"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {data.name}
        </a>
        <p className="text-base font-light text-gray-500 dark:text-gray-400">
          {data.description}
        </p>
        <p className="text-base font-light text-gray-500 dark:text-gray-400">
          <time dateTime="2022-02-08" title="February 8th, 2022">
            Feb. 8, 2022
          </time>
        </p>
      </div>
    </address>
  );
};

export default Author;

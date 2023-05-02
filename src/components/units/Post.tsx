import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export const Component = ({ data }) => {
  const Tag = ({ children }) => {
    return (
      <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
        {children}
      </span>
    );
  };
  return (
    <article
      style={{
        background:
          "linear-gradient(90deg, rgba(173, 211, 255, 0.08) 0%, rgba(83, 157, 245, 0.08) 100.02%)",
      }}
      className="p-4 rounded-sm shadow-md"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(84, 158, 246, 0.1536) 0%, rgba(84, 158, 246, 0.4608) 100%)",
        }}
        className="w-full aspect-video"
      ></div>
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <div className="flex">
          {data.frontMatter.categories.map((tag: string) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </div>{" "}
        <span className="text-sm">14 days ago</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={"publications/" + data.slug}>
          <a>{data.frontMatter.title}</a>
        </Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {data.frontMatter.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-col-reverse w-full lg:flex-row lg:space-y-0 lg:space-x-2">
            <Button href={"publications/" + data.slug}>Read Article</Button>
            <div className="flex mb-5 space-x-2">
              <div className="relative h-7 w-7">
                <Image
                  className="rounded-full h-7 w-7"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                  layout="fill"
                />
              </div>
              <span className="font-medium dark:text-white">
                {data.frontMatter.author.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Component;

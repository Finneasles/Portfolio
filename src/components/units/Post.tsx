import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export const Post = ({ data }) => {
  const Tag = ({ children }) => {
    return (
      <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
        {children}
      </span>
    );
  };
  return (
    <article className="rounded-sm border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-5 flex items-center justify-between text-gray-500">
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
          <div className="flex w-full flex-col-reverse lg:flex-row lg:space-y-0 lg:space-x-2">
            <Button>Read More</Button>
            <div className="mb-5 flex space-x-2">
              <div className="relative h-7 w-7">
                <Image
                  className="h-7 w-7 rounded-full"
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

export default Post;

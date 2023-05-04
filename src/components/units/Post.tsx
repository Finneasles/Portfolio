import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "@/components";

export const Component = ({ data }) => {
  return (
    <article
      style={{
        background:
          "linear-gradient(180deg, rgba(173, 211, 255, 0.08) 0%, rgba(83, 157, 245, 0.08) 100%)",
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

      <div className="flex items-center justify-between mb-5 space-y-8">
        <div className="flex space-x-2">
          {data.frontMatter.categories.map((tag: string) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </div>
        <span className="text-sm">14 days ago</span>
      </div>
      <div className="flex-1 space-y-2">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link href={"publications/" + data.slug}>
            <a>{data.frontMatter.title}</a>
          </Link>
        </h2>
        <p className="mb-5 text-gray-500 dark:text-gray-400">
          {data.frontMatter.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button href={"publications/" + data.slug} className="px-6">
            Read Article
          </Button>
          <div className="flex items-center space-x-2">
            <div className="relative rounded-full h-7 w-7">
              <Image
                className="rounded-full"
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
    </article>
  );
};

export default Component;

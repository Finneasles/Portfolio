import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "@/components";
import { useReadTime } from "@/hooks";

export const Component = ({ data }) => {
  const readTime1 = useReadTime({ text: data.markdownBody });
  return (
    <article
      style={{
        background:
          "linear-gradient(180deg, rgba(173, 211, 255, 0.08) 0%, rgba(83, 157, 245, 0.08) 100%)",
      }}
      className="rounded-sm p-4 shadow-md"
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(84, 158, 246, 0.1536) 0%, rgba(84, 158, 246, 0.4608) 100%)",
        }}
        className="aspect-video w-full rounded-sm"
      ></div>

      <div className="flex items-center justify-between py-2">
        <div className="flex space-x-2">
          {data.frontMatter.categories.map((tag: string) => {
            return (
              <Tag key={tag} href={`/category/${tag.toLowerCase()}`}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <span className="text-sm">14 days ago</span>
      </div>
      <div className="mb-8 flex-1 space-y-1">
        <h2 className="font-Poppins text-2xl font-bold uppercase tracking-tight">
          <Link href={"publications/" + data.slug}>
            <a>{data.frontMatter.title}</a>
          </Link>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          {data.frontMatter.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {data.frontMatter.project ? (
            <Button href={"publications/" + data.slug} className="px-6">
              View
            </Button>
          ) : (
            <Button href={"publications/" + data.slug} className="px-6">
              Read Article
            </Button>
          )}

          <div className="flex items-center space-x-2">
            <div className="relative h-7 w-7 rounded-full">
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

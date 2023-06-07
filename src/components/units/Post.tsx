import { useTranslation } from "react-i18next";
import { Button, Tag } from "@/components";
import React, { useState } from "react";
import { useReadTime } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const isSnippet = (data) => {
  return !data.frontMatter.project && !data.frontMatter.page ? true : false;
};
export const Component = ({ data }) => {
  const readTime1 = useReadTime({ text: data.markdownBody });
  const [thumbnail] = useState(data.frontMatter.figure);
  const [thumbnailCaption] = useState(data.frontMatter.figcaption);
  const [repoName] = useState(data.frontMatter.repoName);
  const { t } = useTranslation();
  return (
    <article
      style={{
        background:
          "linear-gradient(180deg, rgba(173, 211, 255, 0.08) 0%, rgba(83, 157, 245, 0.08) 100%)",
      }}
      className="mb-4 rounded-sm p-4 pb-6 shadow-md"
    >
      {!isSnippet(data) && !data.frontMatter.setThumb ? (
        <div className="relative mb-4 aspect-video w-full rounded-sm bg-gradient-to-b from-transparent to-blue-500">
          <Image
            src={thumbnail}
            alt={thumbnailCaption}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : null}

      <div className="flex items-center justify-between">
        <div className="mb-4 flex space-x-2">
          {data.frontMatter.categories.map((tag: string) => {
            return (
              <Tag key={tag} href={`/category/${tag.toLowerCase()}`}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <span className="text-sm">{data.frontMatter.date}</span>
      </div>
      <div className="mb-4 flex-1 space-y-1">
        <h2 className="font-Poppins text-2xl font-bold uppercase tracking-tight">
          <Link href={`${isSnippet(data) ? "/s/" : "/"}${data.slug}`}>
            <a>{data.frontMatter.title}</a>
          </Link>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          {data.frontMatter.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {!data.frontMatter.project ? (
            <Button href={"/s/" + data.slug} className="px-6">
              {t("viewSnip_label")}
            </Button>
          ) : (
            <div className="space-x-1">
              <Button
                href={
                  !data.frontMatter.view_url
                    ? "/" + data.slug
                    : data.frontMatter.view_url
                }
                className="px-6"
              >
                {t("view_label")}
              </Button>
              <Button
                href={"/p/" + data.slug + "/src"}
                className="bg-opacity-[32%] px-6"
              >
                {t("viewSrc_label")}
              </Button>
            </div>
          )}

          {data.frontMatter.project !== true ? (
            <div className="flex items-center space-x-2">
              <div className="relative h-7 w-7 rounded-full">
                <Image
                  className="rounded-full"
                  src={
                    data.frontMatter.repoName
                      ? data.frontMatter.repoName.toLowerCase() === "practice"
                        ? `/images/repos/practice.png`
                        : `/images/repos/${data.slug}.png`
                      : `/images/repos/private.png`
                  }
                  alt="Repository Icon"
                  layout="fill"
                />
              </div>
              <span className="font-medium dark:text-white">
                {data.frontMatter.project !== true
                  ? data.frontMatter.repoName || t("privateRepo_label")
                  : null}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default Component;

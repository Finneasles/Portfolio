import { useTranslation } from "react-i18next";
import { Button, Post } from "@/components";
import React from "react";

export const Section = ({
  allPosts,
  src,
}: {
  allPosts: any[];
  src?: string;
}) => {
  const { t } = useTranslation();

  const sortedData = allPosts
    .filter(
      (post) =>
        post.frontMatter.snippet !== true &&
        post.frontMatter.project !== true &&
        post.frontMatter.page !== true
    )
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date).getTime();
      const dateB = new Date(b.frontMatter.date).getTime();
      return dateB - dateA;
    });

  function sortAndSliceData() {
    const slicedData = src === "home" ? sortedData.slice(0, 4) : sortedData;
    return slicedData;
  }
  const More =()=>{
    return (      <div className="flex w-full justify-center py-4">
    {sortedData.length > 4 && (
      <Button
        href="/snippets/?scroll=4"
        className="h-12 w-full px-4 tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
        type="submit"
      >
        View More {`(${sortedData.length - 4})`}
      </Button>
    )}
  </div>)
  }

  return (
    <section>
      <h2 className={"section-title"}>{t("snip_label")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:flex-row lg:gap-4">
        {sortAndSliceData().map((e: any) => {
          return <Post key={e.slug} data={e} />;
        })}
      </div>
      {src !== "home" ? null : <More />}
    </section>
  );
};

export default Section;

import { useTranslation } from "react-i18next";
import { Post } from "@/components";
import React from "react";

export const Section = ({
  allPosts,
  src,
}: {
  allPosts: any[];
  src?: string;
}) => {
  const { t } = useTranslation();

  function sortAndSliceData() {
    const sortedData = allPosts
      .filter(
        (post) =>
          post.frontMatter.project !== true && post.frontMatter.page !== true
      )
      .sort((a, b) => {
        const dateA = new Date(a.frontMatter.date).getTime();
        const dateB = new Date(b.frontMatter.date).getTime();
        return dateB - dateA;
      });

    const slicedData = src === "home" ? sortedData.slice(0, 4) : sortedData;
    return slicedData;
  }

  return (
    <section>
      <h2 className={"section-title"}>{t("snip_label")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:flex-row lg:gap-4">
        {sortAndSliceData().map((e: any) => {
          return <Post key={e.slug} data={e} />;
        })}
      </div>
    </section>
  );
};

export default Section;

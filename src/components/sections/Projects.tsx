import React from "react";
import { Post } from "@/components";
import { useTranslation } from "react-i18next";

export const Section = ({ allPosts }) => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <h2 className={"section-title"}>{t("projects_label")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:flex-row lg:gap-4">
        {allPosts
          .filter((post) => post.frontMatter.project === true)
          .map((e: any) => {
            return <Post key={e.slug} data={e} />;
          })}
      </div>
    </section>
  );
};

export default Section;

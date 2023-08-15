import { useTranslation } from "react-i18next";
import { Button, Post } from "@/components";
import React from "react";

export const Section = (props) => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className={"section-title"}>{t("snip_label")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:flex-row lg:gap-4">
        {props.categories.map((e: any) => {
          return <Post key={e.slug} data={e} />;
        })}
      </div>
    </section>
  );
};

export default Section;

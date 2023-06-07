import {
  PublicationsSection as Publications,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Page = ({ posts, router }) => {
  const { t } = useTranslation();
  const pageDesc = t("LayoutDesc.snippets");
  return (
    <Layout
      title={t("snip_label")}
      type={"article"}
      router={router}
      transparentNav={true}
      pageDesc={pageDesc}
    >
      <Hero src={"pub"} pageDesc={pageDesc} />
      <div className="body-container">
        <div className="main-section">
          <Publications allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

import {
  PublicationsSection as Publications,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Page = ({ posts, router }) => {
  const { t } = useTranslation();
  return (
    <Layout title={t("snip_label")} router={router} transparentNav={true}>
      <Hero src={"pub"} />
      <div className="body-container">
        <div className="main-section">
          <Publications allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

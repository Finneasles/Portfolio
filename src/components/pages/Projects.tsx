import {
  ProjectsSection as Projects,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Page = ({ posts, router }) => {
  const { t } = useTranslation();
  return (
    <Layout title={t("projects_label")} router={router} transparentNav={true}>
      <Hero src="proj" />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

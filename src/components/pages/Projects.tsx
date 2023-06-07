import {
  ProjectsSection as Projects,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";

export const Page = ({ posts, router }) => {
  const { t } = useTranslation();
  const pageDesc = t("LayoutDesc.projects");
  return (
    <Layout
      title={t("projects_label")}
      type={"article"}
      router={router}
      transparentNav={true}
      pageDesc={pageDesc}
    >
      <Hero src="proj" pageDesc={pageDesc} />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

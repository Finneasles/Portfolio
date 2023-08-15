import {
  ProjectsSection as Projects,
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useTranslation } from "react-i18next";

export const Page = (props) => {
  const pageDesc = props.t("LayoutDesc.projects");
  return (
    <Layout
      title={props.t("projects_label")}
      router={props.router}
      transparentNav={true}
      pageDesc={pageDesc}
    >
      <Hero src="proj" pageDesc={pageDesc} />
      <div className="body-container">
        <div className="main-section">
          {/* <Projects allPosts={props/.posts} /> */}

        </div>
      </div>
    </Layout>
  );
};

export default Page;

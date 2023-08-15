import {
  PublicationsSection as Publications,
  ProjectsSection as Projects,
  HeroSection as Hero,
  Layout,
} from "@/components";

const Page = (props) => {
  return (
    <Layout
      title={props.t("home_label")}
      {...props}
      transparentNav={true}
    >
      <Hero />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={props.posts} src={"home"} />
          {/* <Publications allPosts={posts} src={"home"} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Page;

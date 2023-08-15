import {
  PublicationsSection as Publications,
  CategoriesSection as Categories,
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
           <Categories allPosts={props.posts} src={"home"} /> 
          {/* <Publications allPosts={posts} src={"home"} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Page;

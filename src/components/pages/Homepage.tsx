import {
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
  ProjectsSection as Projects,
} from "@/components";
import { useState } from "react";

const pageTitle = "Home";

const Page = ({ posts, router }) => {
  const [title] = useState(pageTitle);
  return (
    <Layout title={title} router={router} transparentNav={true}>
      <Hero />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={posts} />
          <Publications allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

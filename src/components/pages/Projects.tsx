import {
  HeroSection as Hero,
  Layout,
  ProjectsSection as Projects,
} from "@/components";
import { useState } from "react";

export const Page = ({ posts, pageTitle, router }) => {
  const [title] = useState(pageTitle);
  return (
    <Layout title={title} router={router} transparentNav={true}>
      <Hero />
      <div className="body-container">
        <div className="main-section">
          <Projects allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

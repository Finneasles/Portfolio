import {
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
  ProjectsSection as Projects,
} from "@/components";
import { useEffect, useState } from "react";

const pageTitle = "Home";

const Page = ({ posts, router }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title} router={router}>
      <Hero />
      <div className="body-container">
        <div className="mx-auto max-w-4xl space-y-24 px-0 mb-24">
          <Projects allPosts={posts} />
          <Publications allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};


export default Page;

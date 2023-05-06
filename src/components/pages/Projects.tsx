import {
  HeroSection as Hero,
  Layout,
  ProjectsSection as Projects,
} from "@/components";
import { useState } from "react";

export const Page = ({ posts, pageTitle,router }) => {
  const [title] = useState(pageTitle);
  return (
    <Layout title={title} router={router}>
      <Hero />
      <div className="px-6 py-16 lg:px-32">
        <Projects allPosts={posts} />
      </div>
    </Layout>
  );
};

export default Page;

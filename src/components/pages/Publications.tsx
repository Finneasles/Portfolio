import {
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
} from "@/components";
import { useState } from "react";

export const Page = ({ posts, pageTitle, router }) => {
  const [title] = useState(pageTitle);
  return (
    <Layout title={title} router={router}>
      <Hero />
      <div className="px-6 py-16 lg:px-32">
        <Publications allPosts={posts} />
      </div>
    </Layout>
  );
};

export default Page;

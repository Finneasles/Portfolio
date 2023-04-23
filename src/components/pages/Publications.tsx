import {
  CardSection as Cards,
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
} from "@/components";
import { useState } from "react";

export const PublicationsPage = ({ posts, pageTitle }) => {
  const [title] = useState(pageTitle);
  return (
    <Layout title={title}>
      <Hero />
      <div className="px-6 py-16 lg:px-32">
          <Publications allPosts={posts} />
      </div>
    </Layout>
  );
};

export default PublicationsPage;

import {
  CardSection as Cards,
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
} from "@/components";
import { useState } from "react";

const pageTitle = "Publications";
export const PublicationsPage = ({ posts }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title}>
      <Hero />
      <div className="px-6 py-16 lg:px-32">
          {/* <Cards /> */}
          <Publications allPosts={posts} />
      </div>
    </Layout>
  );
};

export default PublicationsPage;

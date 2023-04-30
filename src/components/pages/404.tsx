import {
  CardSection as Cards,
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
} from "@/components";
import { useState } from "react";

const pageTitle = "Page not found";
export const Four0Four = ({ posts }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title} navbar={false} footer={false} cookieConsent={false}>
      <Hero>
        <h1>404</h1>
      </Hero>
      {/* <div className="px-6 py-16 lg:px-32">
        <Cards /> 
        <Posts allPosts={posts} />
      </div> */}
    </Layout>
  );
};

export default Four0Four;

import {
  HeroSection as Hero,
  Layout,
} from "@/components";
import { useState } from "react";

const pageTitle = "Page not found";
export const Page = ({ posts }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title} navbar={false} footer={false} cookieConsent={false}>
      <Hero>
        <h1>404</h1>
      </Hero>
    </Layout>
  );
};

export default Page;

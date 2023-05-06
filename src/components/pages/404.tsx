import { HeroSection as Hero, Layout } from "@/components";
import { useState } from "react";

const pageTitle = "Page not found";
export const Page = ({ posts, router }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout
      title={title}
      navbar={false}
      footer={false}
      cookieConsent={false}
      router={router}
    >
      <Hero />
    </Layout>
  );
};

export default Page;

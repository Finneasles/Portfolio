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
      <Hero>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-white dark:text-white md:text-5xl xl:text-6xl">
          Curabitur in ligula ante. Integer.
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          Nam faucibus lorem dolor, ut fermentum augue tincidunt feugiat.
          Phasellus convallis lorem urna, eget dignissim ante bibendum eu.
        </p>
      </Hero>
      <div className="px-6 py-16 lg:px-32">
        <Projects allPosts={posts} />
      </div>
    </Layout>
  );
};

export default Page;

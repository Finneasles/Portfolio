import {
  CardSection as Cards,
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
  ProjectsSection as Projects,
  Button,
} from "@/components";
import { useState } from "react";

const pageTitle = "Home";
export const Homepage = ({ posts }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title}>
      <Hero>
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white dark:text-white md:text-5xl xl:text-6xl">
          Curabitur in ligula ante. Integer.
        </h1>
        <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
          Nam faucibus lorem dolor, ut fermentum augue tincidunt feugiat.
          Phasellus convallis lorem urna, eget dignissim ante bibendum eu.
        </p>
        <div className="space-x-2">
          <Button href="/about" size={"sm"} variant={"heroPrimary"}>
            👋 Let&apos;s Chat
          </Button>
          <Button href="/about" size={"sm"} variant={"secondary"}>
            Leave a message
          </Button>
        </div>
      </Hero>
      <div className="px-6 py-16 lg:px-32">
        <Projects allPosts={posts} />
      </div>
      <div className="px-6 py-16 lg:px-32">
        <Publications allPosts={posts} />
      </div>
    </Layout>
  );
};

export default Homepage;

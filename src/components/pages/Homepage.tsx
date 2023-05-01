import {
  HeroSection as Hero,
  Layout,
  PublicationsSection as Publications,
  ProjectsSection as Projects,
  Button,
} from "@/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const pageTitle = "Home";
export const Page = ({ posts }) => {
  const [title] = useState(pageTitle);
  const { t } = useTranslation();
  return (
    <Layout title={title}>
      <Hero>
        <h1
          style={{ color: "rgba(255, 255, 255, 0.48)" }}
          className="max-w-2xl mb-4 text-2xl font-bold leading-none tracking-tight normal-case sourceFamily md:text-4xl"
        >
          {t("hero_subtitle0")}
        </h1>
        <h2 className="flex flex-col max-w-2xl mb-4 text-6xl leading-none tracking-tight text-white md:text-8xl">
          <span className={"p-8"} style={{ background: "#FFC700" }}>
            JavaScript
          </span>
          <span className="large-text">Developer</span>
        </h2>
        <div className="relative">
          <div
            style={{ background: "rgba(64, 143, 237, 0.7)" }}
            className="max-w-2xl p-4 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
          >
            <p>
              Nam faucibus lorem dolor, ut fermentum augue tincidunt feugiat.
              Phasellus convallis lorem urna, eget dignissim ante bibendum eu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <Button href="/about" size={"sm"} variant={"heroPrimary"}>
              👋 Let&apos;s Chat
            </Button>
            <span className="py-2 mx-2 my-2 text-xs font-bold sm:my-0">or</span>
            <Button href="/about" size={"sm"} variant={"secondary"}>
              Leave a message
            </Button>
          </div>
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

export default Page;

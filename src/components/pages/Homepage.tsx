import {
  HeroSection,
  Layout,
  PublicationsSection,
  ProjectsSection,
  Button,
} from "@/components";
import useTypingEffect from "@/hooks/typeEffect";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

const pageTitle = "Home";

const Page = ({ posts, router }) => {
  const [title] = useState(pageTitle);
  const { t } = useTranslation();

  const displayText = useTypingEffect(
    ["JavaScript", "ReactJs", "NodeJs"],
    1000,
    100
  );

  const socials = [
    { id: "linkedin", href: "https://www.linkedin.com/in/fin-a-aa4475267/" },
    { id: "github", href: "https://github.com/finneasles/" },
    { id: "npmjs", href: "https://www.npmjs.com/~finneas28" },
  ];

  return (
    <Layout title={title} router={router}>
      <HeroSection>
        <div className="flex-1 space-y-8">
          <span
            style={{ color: "rgba(255, 255, 255, 0.48)" }}
            className="max-w-2xl mb-4 text-xl font-normal leading-none tracking-tight normal-case md:text-4xl"
          >
            {t("hero_subtitle0")}
          </span>
          <h1 className="max-w-2xl mb-8 text-4xl font-bold leading-none tracking-tight text-white uppercase font-Poppins md:text-6xl">
            <span className="relative inline-block p-4 mb-4 bg-yellow-400 rounded-md min-w-[100px] h-[96px]">
              <span>{displayText}</span>
              <span className="absolute top-1/2 h-[84px] w-2 -translate-y-1/2 bg-white"></span>
            </span>
            <br />
            <span className="inline-block mt-4">Developer</span>
          </h1>
        </div>
        <div
          style={{ background: "rgba(64, 143, 237, 0.7)" }}
          className="max-w-2xl p-4 mb-6 font-light text-white rounded-md md:text-lg"
        >
          <p>{process.env.NEXT_PUBLIC_DESC}</p>
        </div>
        <div className="flex flex-col drop-shadow-md">
          <div>
            <Button
              className="px-6 "
              href="/about"
              size="sm"
              onClick={(e) => {
                window.location.href = "mailto:contact@f1n.com?body=Let's Chat";
                e.preventDefault();
            }}
              variant="heroPrimary"
            >
              👋 Let&apos;s Chat
            </Button>
          </div>
          <div className="content-center py-2">
            <span className="my-2 h-[32px] text-xs font-bold uppercase text-white md:mx-2 md:my-0">
              or
            </span>
          </div>{" "}
          <div className="space-x-2">
            {socials.map((link) => (
              <Button
                key={link.id}
                className="px-3"
                href={link.href}
                target="_blank"
                ariaLabel="Contact me"
                icon={
                  link.id === "linkedin" ? (
                    <FaLinkedin />
                  ) : link.id === "github" ? (
                    <FaGithub />
                  ) : link.id === "npmjs" ? (
                    <ImNpm />
                  ) : null
                }
              />
            ))}
          </div>
        </div>
      </HeroSection>
      <div className="px-6 py-16 lg:px-32">
        <ProjectsSection allPosts={posts} />
      </div>
      <div className="px-6 py-16 lg:px-32">
        <PublicationsSection allPosts={posts} />
      </div>
    </Layout>
  );
};

export default Page;

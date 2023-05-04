import {
  HeroSection,
  Layout,
  PublicationsSection,
  ProjectsSection,
  Button,
} from "@/components";
import { useTypingEffect } from "@/hooks";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

const pageTitle = "Home";

const Page = ({ posts, router }) => {
  const [title] = useState(pageTitle);
  const { t } = useTranslation();

  const displayText = useTypingEffect({
    text: ["JavaScript", "TypeScript", "ReactJs", "NodeJs"],
  });

  const socials = [
    { id: "linkedin", href: "https://www.linkedin.com/in/fin-a-aa4475267/" },
    { id: "github", href: "https://github.com/finneasles/" },
    { id: "npmjs", href: "https://www.npmjs.com/~finneas28" },
  ];

  const TypographyComponent = () => {
    return (
      <div>
        <div className="flex-1 space-y-2">
          <span
            style={{ color: "rgba(255, 255, 255, 0.48)" }}
            className=" text-xl font-normal leading-none tracking-tight normal-case md:text-2xl"
          >
            {t("hero_subtitle0")}
          </span>
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-white uppercase font-Poppins drop-shadow-md md:text-6xl">
            <span className="absolute items-center flex-1 flex-shrink-0 px-4 py-2 mb-4 bg-yellow-400 rounded-md">
              <span className="mr-6 overflow-hidden">{displayText}</span>
              <FlashingCursor interval={700} />
            </span>
            <br />
            <span className="inline-block mt-6">Developer</span>
          </h1>
        </div>
        <div
          style={{ background: "rgba(64, 143, 237, 0.7)" }}
          className="max-w-2xl p-4 mt-2 mb-4 font-light text-white rounded-md md:text-lg"
        >
          <p>{process.env.NEXT_PUBLIC_DESC}</p>
        </div>
      </div>
    );
  };
  const CTAComponent = () => {
    return (
      <div className="flex flex-col drop-shadow-md">
        <div>
          <Button
            className="px-6 "
            href="/about"
            size="sm"
            onClick={(e) => {
              const subject = encodeURIComponent("Let's Have a Chat");
              const body = encodeURIComponent(
                `Hi there,%0D%0A%0D%0AI came across your website and I'd love to discuss ideas with you and have a chat.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`
              );
              window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
    );
  };

  return (
    <Layout title={title} router={router}>
      <HeroSection>
        <TypographyComponent />
        <CTAComponent />
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

const FlashingCursor = ({ interval }: { interval: number }) => {
  const [isFlashing, setIsFlashing] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlashing((prevIsFlashing) => !prevIsFlashing);
    }, interval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      style={{
        background: isFlashing
          ? "rgba(255,255,255,0.32)"
          : "rgba(255,255,255,0.96)",
      }}
      className={`absolute bg-white ${
        isFlashing ? "bg-opacity-32" : "bg-opacity-84"
      } top-1/2 h-[64%] w-2 -translate-y-1/2 rounded-md`}
    ></span>
  );
};

export default Page;

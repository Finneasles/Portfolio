import React, { useEffect, useState } from "react";
import { Button } from "@/components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { useEntryEffect, useTypingEffect } from "@/hooks";

export const sizes = [{ lg: 64, md: 48, sm: 32 }];

interface SizeValues {
  lg: number;
  md: number;
  sm: number;
}

function getSizeValue(sizeKey: keyof SizeValues): number | undefined {
  const [size] = sizes;
  return size[sizeKey];
}

export const Section = ({ size }: { size?: string; className?: string }) => {
  const { t } = useTranslation();

  const { position: dec1 } = useEntryEffect({
    delay: 10,
    initialPosition: 1000,
    finalPosition: 0,
  });

  const { position: dec2 } = useEntryEffect({
    delay: 100,
    initialPosition: 200,
    finalPosition: 0,
  });

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
      <>
        <div className="w-full flex-1 space-y-2">
          <span
            style={{ color: "rgba(255, 255, 255, 0.48)" }}
            className=" text-xl font-normal normal-case leading-none tracking-tight md:text-2xl"
          >
            {t("hero_span0")}
          </span>
          <h1 className="mb-8 font-Poppins text-4xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-6xl">
            <span className="absolute mb-4 flex-1 flex-shrink-0 items-center rounded-md bg-yellow-400 px-4 py-2">
              <span className="mr-6 overflow-hidden">{displayText}</span>
              <FlashingCursor interval={700} />
            </span>
            <br />
            <span className="mt-6 inline-block">Developer</span>
          </h1>
        </div>
       <div className="flex">
       <div
          style={{ background: "rgba(64, 143, 237, 0.7)" }}
          className="w-full md:w-1/2 mt-2 mb-4 rounded-md px-4 py-[8px] font-light text-white md:text-lg"
        >
          <p>{t("hero_desc0")}</p>
        </div>

       </div>
      </>
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
    <section className="hero-section">
      {/* <BackgroundLayer /> */}
      <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-between transition-all">
        <div className="relative z-[2] w-full flex-1 flex-wrap items-center">
          <TypographyComponent />
          <CTAComponent />
        </div>
        <div className="absolute top-0 bottom-0 hidden w-full justify-end lg:flex">
          <div className="h-full w-[50%] content-center items-center justify-center">
            <div
              style={{
                transform: `translateX(${dec1}%)`,
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
              className="transition flex h-[384px] w-[384px] content-center items-center justify-center rounded-[900px]"
            >
              <p
                style={{
                  transform: `translateX(-${dec2}%) translateY(${dec2}%)`,
                }}
                className="text-[24rem] transition-transform"
              >
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export default Section;

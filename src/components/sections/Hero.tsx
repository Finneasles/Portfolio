import React from "react";
import { Button, HeroContainer } from "@/components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="flex p-6 pb-8 text-left sm:p-8 lg:px-32">
        <div className="relative w-full place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white dark:text-white md:text-5xl xl:text-6xl">
            Curabitur in ligula ante. Integer.
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Nam faucibus lorem dolor, ut fermentum augue tincidunt feugiat.
            Phasellus convallis lorem urna, eget dignissim ante bibendum eu.
          </p>
          <div className="space-x-2">
            <Button href="/about"  size={"sm"} variant={"heroPrimary"}>👋  Let&apos;s Chat</Button>
            <Button href="/about" size={"sm"} variant={"secondary"}>
              Leave a message
            </Button>
          </div>
        </div>
        <div className="relative hidden h-[500px] w-full lg:flex">
          {/* <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            layout="fill"
          /> */}
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;

import {
  HeroTypographyComponent,
  HeroDecorComponent,
  HeroCTAComponent,
  Button,
} from "@/components";
import useCursorLocation from "@/hooks/cursorXY";
import React, { useEffect, useState } from "react";

export const sizes = [{ lg: 64, md: 48, sm: 32 }];

interface SizeValues {
  lg: number;
  md: number;
  sm: number;
  full: string;
}

function getSizeValue(sizeKey: keyof SizeValues): number | undefined {
  const [size] = sizes;
  return size[sizeKey];
}

export const Section = ({
  src,
  size,
  pageDesc,
}: {
  size?: string;
  className?: string;
  src?: string;
  pageDesc?: string;
}) => {
  const { cursorLocation, targetRef } = useCursorLocation();

  return (
    <section
      className={`${
        size === "full" ? "h-[100vh]" : size ? size : null
      } hero-section`}
      ref={targetRef}
    >
      <div className="relative mx-auto flex h-full w-full max-w-4xl items-center justify-between transition-all">
        <div className="relative z-[2] w-full flex-1 flex-wrap items-center">
          <HeroTypographyComponent pageDesc={pageDesc} src={src} />
          <HeroCTAComponent src={src} />
        </div>
        
        <div className="absolute top-0 bottom-0 hidden w-full justify-end lg:flex">
          <div className="h-full w-[50%] content-center items-center justify-center">
            <HeroDecorComponent {...{cursorLocation}} src={src} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

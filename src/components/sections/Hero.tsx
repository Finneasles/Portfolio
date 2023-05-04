import React, { Children } from "react";
import { Button } from "@/components";
import Image from "next/image";

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

export const Section = ({
  children,
  size,
}: {
  children: any;
  size?: string;
  className?: string;
}) => {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #539DF5 0%, #65ABFF 100%)",
      }}
      className="relative flex h-[80vh] min-h-[150px] content-center items-center justify-center"
    >
      {/* <BackgroundLayer /> */}
      <div className="relative w-full ">
        <div className="relative flex w-full flex-wrap items-center">
          <div className="w-full ">
            <div className="flex p-6 py-24 pb-8 text-left sm:p-8 lg:px-32">
              <div className="z-10 w-full place-self-center">
                <div className="w-full">{children}</div>
              </div>
              <div className="relative hidden h-[500px] w-full items-center justify-end md:flex lg:flex">
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                  className="h-[416px] w-[416px] rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

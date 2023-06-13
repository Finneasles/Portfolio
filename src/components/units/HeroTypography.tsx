import { useTranslation } from "react-i18next";
import { FlashingCursor } from "@/components";
import { useTypingEffect } from "@/hooks";

const Component = ({ src, pageDesc }: { src: string; pageDesc: string }) => {
  const { t } = useTranslation();
  const displayText = useTypingEffect({
    text: ["JavaScript", "TypeScript", "ReactJs", "NodeJs"],
  });

  return (
    <>
      <div className="w-full flex-1 space-y-2">
        <span
          style={{ color: "rgba(255, 255, 255, 0.48)" }}
          className=" text-xl font-normal normal-case leading-none tracking-tight md:text-2xl"
        >
          {src == "404" ? t("notFound_label") : t("hero_span0")}
        </span>
        <h1 className="mb-8 font-Poppins text-4xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-6xl">
          {src == "404" ? (
            t("lost_label")
          ) : (
            <>
              <span className="absolute mb-4 flex-1 flex-shrink-0 items-center rounded-md bg-yellow-400 px-4 py-2">
                <span className="mr-6 overflow-hidden">{displayText}</span>
                <FlashingCursor interval={700} />
              </span>
              <br />
            </>
          )}
          {src !== "404" && <span className="mt-6 inline-block">Developer</span>}
        </h1>
      </div>
      <div className="flex">
        <div
          style={{ background: "rgba(64, 143, 237, 0.7)" }}
          className="mt-2 mb-4 w-full rounded-md px-4 py-[8px] font-light text-white md:w-1/2 md:text-lg"
        >
          <p className="leading-snug">{pageDesc || t("hero_desc0")}</p>
        </div>
      </div>
    </>
  );
};

export default Component;

import React from "react";
import { Button } from "@/components";
import { BsArrowRight } from "react-icons/bs";
type Props = {
  cta?: string;
  description?: string;
  href?: string;
  title?: string;
};

export const Card = ({ cta, description, href, title }: Props) => {
  return (
    <div className="w-full text-center md:w-4/12">
      <div
        className="relative mb-4 flex w-full min-w-0 flex-col break-words
        rounded-sm border border-gray-200 bg-white p-6 shadow-md
        dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex-auto px-4 py-4">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
            <i className="fas fa-fingerprint"></i>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Card"}
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque urna ex, eu cursus lectus."}
          </p>
          <Button
            href={href}
            icon={<BsArrowRight className="ml-2 -mr-1 h-4 w-4" />}
            variant={"secondary"}
          >
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

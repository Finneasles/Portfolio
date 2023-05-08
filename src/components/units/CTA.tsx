import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const Component = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-[42px] justify-between space-x-1 drop-shadow">
      <Button
        className={"bg-white px-4 text-[0056BD] text-opacity-70"}
        href="/about"
        ariaLabel={t("signIn_label")}
        icon={<FaUser />}
        variant={"secondary"}
      />
      <Button
        href="/hire"
        onClick={(e) => {
          e.preventDefault();
          const subject = encodeURIComponent("Interested In Hiring You");
          const body = encodeURIComponent(
            `Hi there,%0D%0A%0D%0AI came across your website and I'd love to discuss potential projects with you and see if we can work together.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`
          );
          window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        }}
        className="px-6"
        ariaLabel={"Contact me"}
      >
        {t("hireMe_label")}
      </Button>
    </div>
  );
};

export default Component;

import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components";

export const Component = () => {
  return (
    <div className="flex justify-between space-x-1 drop-shadow-sm">
      <Button
        className={"bg-white px-4 text-[0056BD] text-opacity-70"}
        href="/about"
        ariaLabel={"Sign In"}
        icon={<FaUser />}
        variant={"secondary"}
      />
      <Button
        onClick={(e) => {
          const subject = encodeURIComponent("Interested In Hiring You");
          const body = encodeURIComponent(
            `Hi there,%0D%0A%0D%0AI came across your website and I'd love to discuss potential projects with you and see if we can work together.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`
          );
          window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
          e.preventDefault();
        }}
        className="px-6"
        ariaLabel={"Contact me"}
      >
        Hire Me
      </Button>
    </div>
  );
};

export default Component;

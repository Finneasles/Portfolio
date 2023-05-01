import React from "react";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@/components";

export const Component = () => {
  return (
    <div className="flex justify-between space-x-1">
      <Button
        className={"bg-white text-[0056BD] text-opacity-70"}
        href="/about"
        ariaLabel={"Sign In"}
        icon={<AiFillMail />}
        variant={"secondary"}
      />
      <Button href="/about" ariaLabel={"Contact me"}>
        Hire Me
      </Button>
    </div>
  );
};

export default Component;

import React from "react";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@/components";

export const CTA = () => {
  return (
    <div className="flex justify-between space-x-1">
      <Button href="/about" ariaLabel={"Sign In"} icon={<AiFillMail />} variant={"secondary"} />
      <Button href="/about" ariaLabel={"Contact me"}>Hire Me</Button>
    </div>
  );
};

export default CTA;

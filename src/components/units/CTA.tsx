import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components";

export const Component = () => {
  return (
    <div className="flex justify-between space-x-1 drop-shadow-sm">
      <Button
        className={"bg-white text-[0056BD] text-opacity-70 px-4"}
        href="/about"
        ariaLabel={"Sign In"}
        icon={<FaUser />}
        variant={"secondary"}
      />
      <Button className="px-6" href="/about" ariaLabel={"Contact me"}>
        Hire Me
      </Button>
    </div>
  );
};

export default Component;

import { AiFillMail } from "react-icons/ai";
import React from "react";

export const Cards = ({ children }) => {
  return (
    <div
      className="mx-auto flex flex-col md:flex-row
    md:space-x-2 lg:flex-row lg:space-x-4"
    >
      {children}
    </div>
  );
};

export default Cards;

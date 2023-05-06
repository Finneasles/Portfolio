import React from "react";
import { classesJoin as cls } from "@/utils";

type Props = {
  children?: string;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: any) => void;
  size?: string;
  type?: string;
  ariaLabel?: string;
  variant?: string;
  target?: string;
};
const variants = {
  primary:
    "uppercase text-white bg-[#408FED] font-bold hover:bg-blue-800 focus:ring-blue-300" +
    "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  heroPrimary:
    "font-bold uppercase text-[#0D4380] bg-white hover:bg-blue-800 focus:ring-blue-300" +
    "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  heroSecondary:
    "uppercase text-white ring-0",
  secondary:
    "uppercase text-blue-600 hover:bg-opacity-32 hover:text-white focus:ring-blue-300 text-[#0056BD]" +
    "dark:text-white bg-opacity-70 hover:dark:bg-opacity-20 dark:focus:ring-blue-800",
  white:
    "uppercase text-blue-700 bg-white hover:text-white hover:bg-opacity-60 focus:ring-yellow-300",
  transparent:
    "uppercase text-white bg-white bg-opacity-0 hover:text-white hover:bg-opacity-5 focus:ring-yellow-300",
  warning:
    "bg-red-700 hover:bg-red-800 focus:ring-blue-300" +
    "dark:bg-red-600dark:hover:bg-red-700 dark:focus:ring-blue-800",
};

const sizes = {
  sm: "py-2",
  md: "py-4",
  lg: "py-[4rem] px-12",
};

export const Button = ({
  children,
  className,
  href,
  icon,
  onClick,
  size,
  type,
  ariaLabel,
  target,
  variant = "primary",
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={href ? href : null}
      type={type}
      aria-label={ariaLabel}
      target={target}
      className={cls(
        size ? sizes[size] : null,
        className,
        `inline-flex font-Poppins select-none items-center rounded py-3 text-sm ${variants[variant]} cursor-pointer focus:outline-none`,
      )}
    >
      {children || (icon ? null : "Dolor Sit")}
      {icon ? icon : ""}
    </a>
  );
};

export default Button;

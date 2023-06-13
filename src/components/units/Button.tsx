import React from "react";

type Props = {
  children?: any;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: any) => void;
  size?: string;
  type?: string;
  ariaLabel?: string;
  variant?: string;
  target?: string;
  disabled?: boolean
};
const variants = {
  primary:
    "uppercase text-white bg-[#408FED] font-bold hover:bg-[#3081E1] focus:ring-blue-300 dark:focus:ring-blue-800",
  heroPrimary:
    "font-bold uppercase text-[#0D4380] bg-white hover:bg-opacity-70 focus:ring-blue-300 dark:focus:ring-blue-800",
  heroSecondary: "uppercase text-white ring-0",
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

export const Button = (props : Props) => {
  return (
    <a
      onClick={props.onClick}
      href={props.href ? props.href : null}
      type={props.type}
      aria-label={props.ariaLabel}
      target={props.target}
      className={`${props.className} ${
        props.size ? sizes[props.size] : null
      } inline-flex select-none items-center rounded py-3 font-Poppins text-sm ${
        variants[props.variant || "primary"]
      } cursor-pointer focus:outline-none`}
    >
      {props.children || (props.icon ? null : "Dolor Sit")}
      {props.icon ? props.icon : ""}
    </a>
  );
};

export default Button;

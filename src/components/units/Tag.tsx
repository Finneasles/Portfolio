import React from "react";
import { classesJoin as cls } from "@/utils";

type Props = {
  children?: string;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: string;
  type?: string;
  ariaLabel?: string;
  variant?: string;
};


export const Tag = ({
  children,
  className,
  href,
  icon,
  onClick,
  size,
  type,
  ariaLabel,
  variant = "primary",
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={href ? href : null}
      type={type}
      aria-label={ariaLabel}
      style={{background:" rgba(64, 143, 237, 0.16)"}}
      className={cls(
        className,
        `inline-flex select-none uppercase items-center rounded-sm px-4 py-2 text-sm font-medium cursor-pointer focus:outline-none`,
      )}
    >
      {children || (icon ? null : "Dolor Sit")}
      {icon ? icon : ""}
    </a>
  );
};

export default Tag;

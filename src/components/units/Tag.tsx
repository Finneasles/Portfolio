import { classesJoin as cls } from "@/utils";
import React from "react";

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

export const Tag = (props : Props) => {
  return (
    <a
      onClick={props.onClick}
      href={props.href ? props.href : null}
      type={props.type}
      aria-label={props.ariaLabel}
      style={{ background: " rgba(64, 143, 237, 0.16)" }}
      className={cls(
        props.className,
        `inline-flex cursor-pointer select-none items-center rounded-sm px-4 py-2 text-sm font-medium uppercase focus:outline-none`
      )}
    >
      {props.children || (props.icon ? null : "Dolor Sit")}
      {props.icon ? props.icon : ""}
    </a>
  );
};

export default Tag;

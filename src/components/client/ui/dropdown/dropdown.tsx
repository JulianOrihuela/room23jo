"use client";
import clsx from "clsx";
import { HTMLAttributes, ReactNode, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

interface DropdownProps extends HTMLAttributes<HTMLElement> {
  placeholder?: ReactNode;
  items?: DropdownItem[];
}

type DropdownItem = HTMLAttributes<HTMLElement>;

export function Dropdown({ placeholder, items }: DropdownProps) {
  const [dropdownHover, setDropdownHover] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={clsx("relative z-50 bg-white", {
        "overflow-hidden": !expanded,
        "overflow-visible": expanded,
      })}
      onMouseEnter={() => {
        setDropdownHover(true);
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setDropdownHover(false);
        setTimeout(() => setExpanded(false), 150);
      }}
    >
      <div className="cursor-pointer px-[17px] py-[7px] rounded-4xl border-[2px] border-dark flex items-center">
        {placeholder}
        <IoChevronDown className="ml-[10px] [&>path]:w-[18px]" />
      </div>
      <div
        className={clsx(
          "absolute left-0 right-0 rounded-b-[16px] overflow-hidden transition-all bg-white",
          {
            "opacity-100": expanded && dropdownHover,
            "opacity-0": !dropdownHover,
          }
        )}
      >
        {items?.map(({ children, ...itemProps }, index) => (
          <div key={index} {...itemProps}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

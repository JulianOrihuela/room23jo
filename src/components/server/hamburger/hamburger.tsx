"use client";
import "./hamburger.css";
import clsx from "clsx";

export function Hamburger({ isOpen, onClick }) {
  return (
    <div
      className={clsx(
        { open: isOpen },
        "[&>span]:bg-black w-6 h-[18px] [&>span]:h-[3px] "
      )}
      onClick={onClick}
      id="nav-icon3"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

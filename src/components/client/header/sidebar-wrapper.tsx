"use client";
import clsx from "clsx";
import { useHeaderContext } from "../contexts";

export function SidebarWrapper({ children }) {
  const { isOpenSidebar } = useHeaderContext();

  return (
    <div
      className={clsx("fixed w-screen top-[80px] bottom-0 bg-white h-full z-[999] transition-all", {
        "left-full": !isOpenSidebar,
        "left-0": isOpenSidebar,
      })}
    >
      {children}
    </div>
  );
}

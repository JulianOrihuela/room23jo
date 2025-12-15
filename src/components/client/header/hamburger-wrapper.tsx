"use client";

import { Hamburger } from "../../server";
import { useHeaderContext } from "../contexts";

export function HamburgerWrapper() {
  const { isOpenSidebar, setIsOpenSidebar } = useHeaderContext();

  return (
    <Hamburger
      isOpen={isOpenSidebar}
      onClick={() => setIsOpenSidebar((prev) => !prev)}
    />
  );
}

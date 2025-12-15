"use client";

import { HTMLAttributes } from "react";
import { useHeaderContext } from "../contexts";

type HeaderWraperProps = HTMLAttributes<HTMLElement>;

export function HeaderWrapper({ children, ...props }: HeaderWraperProps) {
  const { headerRef } = useHeaderContext();

  return (
    <header {...props} ref={headerRef}>
      {children}
    </header>
  );
}

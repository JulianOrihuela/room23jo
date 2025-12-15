"use client";

import { useEffect, useState } from "react";
import { useHeaderContext } from "../contexts";
import { useWindowSize } from "@/src/hooks";

export function HomeContentWrapper({ children }) {
  const { headerRef } = useHeaderContext();
  const { height: windowHeight } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return isClient ? (
    <div
      style={{
        height: windowHeight - (headerRef.current?.offsetHeight || 0),
      }}
    >
      {children}
    </div>
  ) : (
    <></>
  );
}

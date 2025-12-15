"use client";

import {
  createContext,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";

interface HeaderContextProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
  headerRef: RefObject<HTMLElement | null>;
}

const HeaderContext = createContext<HeaderContextProps>({
  isOpenSidebar: false,
  setIsOpenSidebar: () => {},
  headerRef: {} as RefObject<HTMLElement | null>,
});

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
}

export function HeaderProvider({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <HeaderContext.Provider
      value={{
        isOpenSidebar,
        setIsOpenSidebar,
        headerRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

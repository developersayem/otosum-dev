"use client";

// components/ActiveLinkContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

interface ActiveLinkContextProps {
  activeLink: string | null;
  setActive: (link: string) => void;
}

const ActiveLinkContext = createContext<ActiveLinkContextProps | undefined>(
  undefined
);

export const useActiveLink = () => {
  const context = useContext(ActiveLinkContext);
  if (!context) {
    throw new Error("useActiveLink must be used within an ActiveLinkProvider");
  }
  return context;
};

interface ActiveLinkProviderProps {
  children: ReactNode;
}

export const ActiveLinkProvider: React.FC<ActiveLinkProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const setActive = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const value: ActiveLinkContextProps = {
    activeLink,
    setActive,
  };

  return (
    <ActiveLinkContext.Provider value={value}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

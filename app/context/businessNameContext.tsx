// context/GlobalStateContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface IBusinessName {
  businessName: string | null;
  setBusinessName: Dispatch<SetStateAction<string | null>>;
}

const GlobalStateContext = createContext<IBusinessName | undefined>(undefined);

const BusinessNameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [businessName, setBusinessName] = useState<string | null>(null);

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("businessName");
      setBusinessName(name);
    }
  }, []);

  const value: IBusinessName = {
    businessName,
    setBusinessName,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useBusinessNameContext = (): IBusinessName => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { BusinessNameContextProvider, useBusinessNameContext };

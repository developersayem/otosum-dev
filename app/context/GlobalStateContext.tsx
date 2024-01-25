// context/GlobalStateContext.tsx
"use client";

import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface GlobalState {
    isSidebarExpanded: boolean;
    toggleSidebar: () => void;
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const value: GlobalState = {
        isSidebarExpanded: isExpanded,
        toggleSidebar,
        setIsExpanded,
    };

    return (
        <GlobalStateContext.Provider value={value}>
            {children}
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = (): GlobalState => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export { GlobalStateProvider, useGlobalState };
// context/GlobalStateContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ItemObject {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

interface PosGlobalState {
  posCategoryData: string;
  setPosCategoryData: Dispatch<SetStateAction<string>>;

  selectedItemsArry: ItemObject[];
  addItem: (item: Omit<ItemObject, "id">) => void;
  increaseQuantity: (id: string, quantity?: number) => void;
  // increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string, quantity?: number) => void;
  // decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearSelectedItems: () => void;
}

const PosGlobalStateContext = createContext<PosGlobalState | undefined>(
  undefined
);

const PosGlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posCategoryData, setPosCategoryData] = useState<string>("");
  const [selectedItemsArry, setSelectedItemsArry] = useState<ItemObject[]>([]);
  const [idCounter, setIdCounter] = useState<number>(0);

  const addItem = (item: Omit<ItemObject, "id">) => {
    const existingItem = selectedItemsArry.find((i) => i.name === item.name);
    if (existingItem) {
      increaseQuantity(existingItem.id);
    } else {
      const id = String(idCounter + 1);
      setIdCounter((prevCounter) => prevCounter + 1);

      const newItem: ItemObject = { ...item, id, quantity: 1 };
      setSelectedItemsArry((prevItems) => [...prevItems, newItem]);
    }
  };
  const increaseQuantity = (id: string, quantity?: number) => {
    setSelectedItemsArry((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: quantity ? quantity : item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string, quantity?: number) => {
    setSelectedItemsArry((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: quantity ? quantity : item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setSelectedItemsArry((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const clearSelectedItems = () => {
    setSelectedItemsArry([]);
  };

  const value: PosGlobalState = {
    posCategoryData,
    setPosCategoryData,
    selectedItemsArry,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearSelectedItems,
  };

  return (
    <PosGlobalStateContext.Provider value={value}>
      {children}
    </PosGlobalStateContext.Provider>
  );
};

const usePosGlobalState = (): PosGlobalState => {
  const context = useContext(PosGlobalStateContext);
  if (!context) {
    throw new Error(
      "usePosGlobalState must be used within a PosGlobalStateProvider"
    );
  }
  return context;
};

export { PosGlobalStateProvider, usePosGlobalState };

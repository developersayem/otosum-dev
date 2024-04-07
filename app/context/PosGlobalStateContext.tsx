"use client";

import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IImage {
  fileImage: string;
  fileName: string;
}

interface IProductItem {
  businessName: string;
  img: IImage;
  productId: number;
  productName: string;
  category: string;
  subCategory?: string;
  brand: string;
  cost: number;
  quantity: number;
  discountType: string;
  discount: number;
  taxType: string;
  tax: number;
  price: number;
  promotionalStatus: string;
  promotionalPrice?: number;
  promotionalStartDate?: Date;
  promotionalEndDate?: Date;
  description: string;
}

interface PosGlobalState {
  posCategoryData: string;
  setPosCategoryData: Dispatch<SetStateAction<string>>;
  setSelectedItemsArray: Dispatch<SetStateAction<IProductItem[]>>;
  selectedItemsArray: IProductItem[];
  addItem: (item: IProductItem) => void;
  increaseQuantity: (id: number, quantity?: number) => void; // Corrected type
  decreaseQuantity: (id: number, quantity?: number) => void; // Corrected type
  removeItem: (id: number) => void; // Corrected type
  clearSelectedItems: () => void;
}

const PosGlobalStateContext = createContext<PosGlobalState | undefined>(
  undefined
);

const PosGlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posCategoryData, setPosCategoryData] =
    useState<string>("all categories");
  const [selectedItemsArray, setSelectedItemsArray] = useState<IProductItem[]>(
    []
  );

  const addItem = (item: IProductItem) => {
    const existingItemIndex = selectedItemsArray.findIndex(
      (i) => i.productId === item.productId
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, increase its quantity
      increaseQuantity(item.productId);
    } else {
      // If the item does not exist, add it to the selected items array
      setSelectedItemsArray((prevItems) => [...prevItems, item]);
      console.log(selectedItemsArray);
    }
  };

  const increaseQuantity = (id: number, quantity: number = 1) => {
    // Corrected type
    setSelectedItemsArray((prevItems) =>
      prevItems.map((item) =>
        item.productId === id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number, quantity: number = 1) => {
    // Corrected type
    setSelectedItemsArray((prevItems) =>
      prevItems.map((item) =>
        item.productId === id
          ? {
              ...item,
              quantity: Math.max(item.quantity - quantity, 0),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    // Corrected type
    setSelectedItemsArray((prevItems) =>
      prevItems.filter((item) => item.productId !== id)
    );
  };

  const clearSelectedItems = () => {
    setSelectedItemsArray([]);
  };

  const value: PosGlobalState = {
    posCategoryData,
    setPosCategoryData,
    selectedItemsArray,
    setSelectedItemsArray,
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

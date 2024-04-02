import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ICategories {
  id: number;
  value: string;
}

interface IShopContext {
  productCategories: ICategories[] | undefined;
  setProductCategories: Dispatch<SetStateAction<ICategories[] | undefined>>;
}

const ProductCategoriesContext = createContext<IShopContext | undefined>(
  undefined
);

const ProductCategoriesContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [productCategories, setProductCategories] = useState<
    ICategories[] | undefined
  >(undefined);

  const value: IShopContext = {
    productCategories,
    setProductCategories,
  };

  return (
    <ProductCategoriesContext.Provider value={value}>
      {children}
    </ProductCategoriesContext.Provider>
  );
};

const useProductCategories = (): IShopContext => {
  const context = useContext(ProductCategoriesContext);
  if (!context) {
    throw new Error(
      "useProductCategories must be used within a ProductCategoriesContextProvider"
    );
  }
  return context;
};

export { ProductCategoriesContextProvider, useProductCategories };

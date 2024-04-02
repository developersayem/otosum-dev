import type { NextComponentType, NextPageContext } from "next";
import CategoryButtonCom from "./CategoryButtonCom";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import { useEffect, useState } from "react";
import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
interface ICategory {
  id: number;
  value: string;
}
interface Props {}

const CatagoriesItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { businessName } = useBusinessNameContext();
  const { posCategoryData, setPosCategoryData } = usePosGlobalState();
  const [productsCategories, setProductsCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/shop/products/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ businessName }),
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }

        const data = await res.json();
        setProductsCategories(data);
        // setExpensesCategories(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName, setPosCategoryData, setProductsCategories]);

  return (
    <div className=" bg-white rounded-lg text-black grid grid-cols-3 gap-3 ">
      <button
        onClick={() => setPosCategoryData("all categories")}
        className={`border-2 border-[#e9e9e9] bg-transparent text-[#504c4d] hover:bg-gradient-to-r from-[#438FFD] to-[#00FC44] font-bold rounded-md hover:text-white text-nowrap  px-5 py-2 ${
          posCategoryData === "all categories"
            ? "bg-gradient-to-r from-[#438FFD] to-[#00FC44] text-white"
            : ""
        } `}
      >
        <span className="capitalize">all categories</span>
      </button>
      {productsCategories.map((category) => (
        <CategoryButtonCom key={category.id} value={category.value} />
      ))}
    </div>
  );
};

export default CatagoriesItemsCom;

"use client";

import type { NextComponentType, NextPageContext } from "next";
import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
import { useEffect, useState } from "react";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import SkeletonCom from "@/app/components/shared/SkeletonCom";
import FoodCardCom from "./FoodCardCom";
interface IImage {
  fileImage: string;
  fileName: string;
}
interface IProduct {
  businessName: string;
  img: IImage;
  productId: number;
  productName: string;
  category: string;
  subCategory?: string;
  brand: string;
  cost: number;
  quantity: number;
  alertQuantity: number;
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
interface Props {}

const FoodItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { businessName } = useBusinessNameContext();
  const { posCategoryData, setPosCategoryData } = usePosGlobalState();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!businessName) {
          return;
        }
        const res = await fetch("/api/shop/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            businessName,
            productCategory: posCategoryData,
          }),
        });

        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [businessName, posCategoryData]);
  return (
    <>
      <div className=" bg-white rounded-lg text-black grid grid-cols-3 gap-5 gap-y-3">
        {products.map((product) => (
          <FoodCardCom key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
};

export default FoodItemsCom;

" use client";
import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { useState } from "react"; // Fixed import statement
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
interface Props {
  product: IProduct;
}
const FoodCardCom: NextComponentType<NextPageContext, {}, Props> = ({
  product,
}) => {
  const { addItem } = usePosGlobalState();

  const {
    businessName,
    img: { fileImage, fileName },
    productId,
    productName,
    category,
    subCategory,
    brand,
    cost,
    quantity,
    alertQuantity,
    discountType,
    discount,
    taxType,
    tax,
    price,
    promotionalStatus,
    promotionalPrice,
    promotionalStartDate,
    promotionalEndDate,
    description,
  } = product;

  const item: IProductItem = {
    businessName: businessName,
    img: { fileName: fileName, fileImage: fileImage },
    productId: productId,
    productName: productName,
    category: category,
    subCategory: subCategory,
    brand: brand,
    cost: cost,
    quantity: 1,
    discountType: discountType,
    discount: discount,
    taxType: taxType,
    tax: tax,
    price: price,
    promotionalStatus: promotionalStatus,
    promotionalPrice: promotionalPrice,
    promotionalStartDate: promotionalStartDate,
    promotionalEndDate: promotionalEndDate,
    description: description,
  };

  return (
    <button onClick={() => addItem(item)}>
      <div className=" w-full h-15 ">
        <Image
          src={fileImage || "/placeholder-image.jpg"}
          alt="Shoes"
          layout="responsive"
          width={180}
          height={218}
          className=" w-full h-full object-fill aspect-square rounded-lg shadow-lg	"
        />
      </div>
      <h1 className="text-lg font-bold p-2 text-start capitalize">
        {productName}
      </h1>
    </button>
  );
};

export default FoodCardCom;

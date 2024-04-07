// TableRow.tsx
import { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";

interface ISale {
  _id: string;
  saleId: number;
  businessName: string;
  paymentMethod: string;
  name: string;
  email: string;
  role: string;
  salesTime: string;
  salesDate: string;
  products: IProduct[];
}

interface IProduct {
  businessName: string;
  img: IImage;
  productId: number;
  productName: string;
  category: string;
  subCategory: string;
  brand: string;
  cost: number;
  quantity: number;
  discountType: string;
  discount: number;
  taxType: string;
  tax: number;
  price: number;
  promotionalStatus: string | null;
  promotionalPrice: number;
  promotionalStartDate: string;
  promotionalEndDate: string;
  description: string;
}

interface IImage {
  fileImage: string;
  fileName: string;
}

interface Props {
  sale: ISale;
}

const TableRow: NextComponentType<NextPageContext, {}, Props> = ({ sale }) => {
  const { salesDate, name, products, paymentMethod } = sale;

  const [total, setTotal] = useState<number>(0);
  const [totalTax, setTotalTax] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);

  useEffect(() => {
    let productTotalAmount = 0;
    let totalTaxAmount = 0;
    let totalDiscountAmount = 0;

    products.forEach((product) => {
      const {
        quantity,
        price,
        discount,
        discountType,
        tax,
        taxType,
        promotionalPrice,
        promotionalStatus,
      } = product;

      // Determine the price to use for calculation
      const itemPrice =
        promotionalStatus === "open" && promotionalPrice
          ? promotionalPrice
          : price;

      // Calculate total cost for the product
      let productTotal = itemPrice * quantity;

      // Apply discount
      if (discountType === "percentage") {
        totalDiscountAmount += (itemPrice * quantity * discount) / 100;
      } else {
        totalDiscountAmount += discount * quantity;
      }

      // Apply tax
      if (taxType === "percentage") {
        totalTaxAmount += (productTotal * tax) / 100;
      } else {
        totalTaxAmount += tax * quantity;
      }

      // Add product total to the total amount
      productTotalAmount += productTotal;
    });

    setTotal(productTotalAmount);
    setTotalDiscount(totalDiscountAmount);
    setTotalTax(totalTaxAmount);
  }, [products]);

  return (
    <tr className="border border-[#F2F2F2] text-start capitalize">
      <td>{salesDate}</td>
      <td className="">
        <div className="flex items-center gap-2 justify-start text-start">
          <h1>{products.map((product) => product.productName).join(", ")}</h1>
        </div>
      </td>
      <td>{name}</td>
      <td>{products.map((product) => product.quantity).join(", ")}</td>
      <td>${totalDiscount.toFixed(2)}</td>
      <td>${totalTax.toFixed(2)}</td>
      <td>${(total + totalTax - totalDiscount).toFixed(2)}</td>
      <td>{paymentMethod}</td>
    </tr>
  );
};

export default TableRow;

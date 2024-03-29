"use client";

import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";

interface Props {}

const ItemsCalculationCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { selectedItemsArry } = usePosGlobalState();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [totalSalesTax, setTotalSalesTax] = useState<number>(0);

  useEffect(() => {
    // Calculate subtotal considering discount for each item
    const subtotalAmount = selectedItemsArry.reduce(
      (acc, item) =>
        acc + item.price * item.quantity * (1 - item.discount / 100),
      0
    );
    setSubtotal(subtotalAmount);

    // Calculate total sales tax (assuming 10% tax rate)
    const salesTax = subtotalAmount * 0.1;
    setTotalSalesTax(salesTax);
  }, [selectedItemsArry]);

  // Calculate total
  const total = subtotal + totalSalesTax;

  return (
    <div className="text-[#797676] font-bold bg-[#f8f8f8] p-5 rounded-b-lg">
      <div className="text-lg flex justify-between items-center">
        <span>Subtotal</span>{" "}
        <span className="text-black">{subtotal.toFixed(2)}</span>
      </div>
      <div className="text-lg flex justify-between items-center">
        <span>Total Sales Tax</span>{" "}
        <span className="text-black">${totalSalesTax.toFixed(2)}</span>
      </div>
      <div className="border border-dashed border-[#959595 ]"></div>
      <div className="text-xl font-extrabold text-black flex justify-between items-center">
        <span>Total</span>{" "}
        <span className="text-black">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemsCalculationCom;

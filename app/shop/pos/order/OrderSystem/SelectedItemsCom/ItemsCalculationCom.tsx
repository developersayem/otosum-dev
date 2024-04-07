import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";
import { useEffect, useState } from "react";

interface Props {}

interface SelectedItem {
  businessName: string;
  promotionalStatus: string;
  promotionalPrice?: number;
  price: number;
  quantity: number;
  discountType: string;
  discount: number;
  taxType: string;
  tax: number;
  total: number; // New property for total
}

const ItemsCalculationCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { selectedItemsArray } = usePosGlobalState();
  const [subtotal, setSubtotal] = useState<number>(0);
  const [totalSalesTax, setTotalSalesTax] = useState<number>(0);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);

  useEffect(() => {
    let subtotalAmount = 0;
    let discountAmount = 0;
    let totalTax = 0;

    const updatedSelectedItemsArray: SelectedItem[] = selectedItemsArray.map(
      (item) => {
        let itemTotal = 0;
        let itemDiscount = 0;
        let itemTax = 0;

        // Calculate item total based on promotional status
        const itemPrice =
          item.promotionalStatus === "open" && item.promotionalPrice
            ? Number(item.promotionalPrice)
            : Number(item.price);
        itemTotal = Number(itemPrice) * Number(item.quantity);

        // Calculate discount based on discount type
        if (item.discountType === "percentage") {
          itemDiscount =
            (Number(itemPrice) *
              Number(item.quantity) *
              Number(item.discount)) /
            100;
        } else {
          itemDiscount = Number(item.discount * Number(item.quantity));
        }

        // Calculate tax based on tax type
        if (item.taxType === "percentage") {
          itemTax = itemTotal * (item.tax / 100);
        } else {
          itemTax = item.tax;
        }

        // Update subtotal, total discount, and total tax
        subtotalAmount += itemTotal;
        discountAmount += itemDiscount;
        totalTax += itemTax;

        // Calculate the total for the item
        const itemTotalWithTaxAndDiscount = itemTotal - itemDiscount + itemTax;

        // Return the updated item with the total
        return {
          ...item,
          total: itemTotalWithTaxAndDiscount,
        };
      }
    );

    setSubtotal(subtotalAmount);
    setTotalSalesTax(totalTax);
    setTotalDiscount(discountAmount);

    // Update the global state with the updated selected items array
    // You might need to implement a function in your global state context to update the selected items array
    // setUpdatedSelectedItemsArray(updatedSelectedItemsArray);
  }, [selectedItemsArray]);

  // Calculate total including tax
  const total = subtotal + totalSalesTax - totalDiscount;

  return (
    <div className="text-[#797676] font-bold bg-[#f8f8f8] p-5 rounded-b-lg">
      <div className="text-lg flex justify-between items-center">
        <span>Subtotal</span>
        <span className="text-black">${subtotal.toFixed(2)}</span>
      </div>
      <div className="text-lg flex justify-between items-center">
        <span>Total Discount</span>
        <span className="text-black">-${totalDiscount.toFixed(2)}</span>
      </div>

      <div className="text-lg flex justify-between items-center">
        <span>Total Sales Tax</span>
        <span className="text-black">${totalSalesTax.toFixed(2)}</span>
      </div>
      <div className="border border-dashed border-[#959595]"></div>
      <div className="text-xl font-extrabold text-black flex justify-between items-center">
        <span>Total</span>
        <span className="text-black">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ItemsCalculationCom;

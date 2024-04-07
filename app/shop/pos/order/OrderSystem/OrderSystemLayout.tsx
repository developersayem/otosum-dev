"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useBusinessNameContext } from "@/app/context/businessNameContext";
import { usePosGlobalState } from "../../../../context/PosGlobalStateContext";
import SelectedItemsCom from "./SelectedItemsCom/SelectedItemsCom";
import { Banknote, CreditCard, ReceiptText } from "lucide-react";
import { NextComponentType, NextPageContext } from "next";

interface Props {}

const OrderSystemLayout: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { businessName } = useBusinessNameContext();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const { selectedItemsArray, clearSelectedItems } = usePosGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ name: "", role: "",email:"" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCheckout = async (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when starting fetch

    try {
      const response = await fetch("/api/shop/sales/add-sale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: businessName,
          products: selectedItemsArray,
          paymentMethod: paymentMethod,
          name: user.name,
          email: user.email,
          role: user.role,
        }),
      });

      if (response.ok) {
        toast.success("Product added successfully");
      } else {
        toast.error("An error occurred while adding product");
      }
    } catch (error) {
      console.error("An error occurred while adding product:", error);
    } finally {
      setIsLoading(false); // Set loading state to false when fetch completes
    }
  };

  return (
    <div className="bg-white rounded-lg text-black p-5">
      <Toaster />
      <SelectedItemsCom />
      <div>
        <div className={`grid grid-cols-3 gap-1 p-5 text-lg font-bold `}>
          <button
            onClick={() => setPaymentMethod("cash")}
            className={`text-green-500 flex border p-5 justify-center items-center gap-1 rounded-lg ${
              paymentMethod === "cash" ? "bg-green-500 text-white" : ""
            }`}
          >
            <Banknote />
            Cash
          </button>
          <button
            onClick={() => setPaymentMethod("card")}
            className={`text-green-500 flex border p-5 justify-center items-center gap-1 rounded-lg ${
              paymentMethod === "card" ? "bg-green-500 text-white" : ""
            }`}
          >
            <CreditCard />
            Card
          </button>
          <button
            onClick={() => setPaymentMethod("cheque")}
            className={`text-green-500 flex border p-5 justify-center items-center gap-1 rounded-lg ${
              paymentMethod === "cheque" ? "bg-green-500 text-white" : ""
            }`}
          >
            <ReceiptText />
            Cheque
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={clearSelectedItems}
            className="btn bg-transparent rounded-lg py-0 px-8 border-2 hover:scale-105 border-[#BBBABA] form-submit text-black text-base hover:bg-transparent"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleCheckout}
            className={`btn border-0 rounded-lg text-base hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD] ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSystemLayout;

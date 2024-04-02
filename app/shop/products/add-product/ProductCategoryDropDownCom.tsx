"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";
import { useBusinessNameContext } from "@/app/context/businessNameContext";

interface ICategory {
  id: number;
  value: string;
}

interface Props {
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProductCategoryDropDownCom: NextComponentType<
  NextPageContext,
  {},
  Props
> = ({ selectedItem, setSelectedItem }) => {
  const { businessName } = useBusinessNameContext();

  const [open, setOpen] = useState(false);
  const [productCategories, setProductCategories] = useState<ICategory[]>([]);

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
      setProductCategories(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleDropdownToggle = (e: any) => {
    e.stopPropagation();
    fetchData();
    setOpen(!open);
  };

  const handleItemClick = (value: string) => {
    setSelectedItem(value);
    setOpen(false);
  };

  return (
    <div className="flex-none relative">
      <button
        type="button" // Add type="button" to prevent form submission
        onClick={handleDropdownToggle}
        className="flex flex-row justify-between w-full px-2 py-3 text-gray-700 bg-white border-2 border-[#BBBABA] rounded-md  focus:outline-none focus:border-black"
      >
        <span className="select-none transition-all duration-300 delay-75 capitalize">
          {selectedItem}
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      <ul
        id=""
        className={`w-48 py-2 mt-2 bg-white rounded-lg shadow-xl ${
          open ? "block absolute z-50" : "hidden"
        }`}
      >
        {productCategories?.map(({ id, value }) => (
          <li
            key={id}
            className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-[#438FFD] to-[#00FC44] hover:text-white capitalize"
            onClick={() => handleItemClick(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryDropDownCom;

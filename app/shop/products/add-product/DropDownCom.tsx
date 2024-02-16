"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

interface Props {
  defaultValue: string;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  items?: {
    id: number;
    value: string;
  }[];
}

const DropDownCom: NextComponentType<NextPageContext, {}, Props> = ({
  defaultValue,
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const [open, setOpen] = useState(false);
  setSelectedItem(defaultValue);

  const handleDropdownToggle = () => {
    setOpen(!open);
  };

  const handleItemClick = (value: string) => {
    setSelectedItem(value);
    setOpen(false);
  };

  return (
    <div className="flex-none relative py-2">
      <button
        onClick={handleDropdownToggle}
        className="flex flex-row justify-between w-[300px] px-2 py-3 text-gray-700 bg-white border-2 border-[#BBBABA] rounded-md  focus:outline-none focus:border-black"
      >
        <span className="select-none transition-all duration-300 delay-75">
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
        {items?.map(({ id, value }) => (
          <li
            key={id}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => handleItemClick(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownCom;

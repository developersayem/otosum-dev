"use client";
import { usePosGlobalState } from "../../../context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";

interface Props {
  label: string;
  value: string;
}

const CatagoryButtonCom: NextComponentType<NextPageContext, {}, Props> = ({
  label,
  value,
}) => {
  const { posCategoryData, setPosCategoryData } = usePosGlobalState();

  return (
    <button
      onClick={() => setPosCategoryData(value)}
      className={`px-6 mx-1 py-4 border-2 border-[#e9e9e9] bg-transparent text-[#504c4d] hover:bg-gradient-to-r from-[#438FFD] to-[#00FC44] font-bold rounded-md hover:text-white text-nowrap ${
        posCategoryData === value &&
        "bg-gradient-to-r from-[#438FFD] to-[#00FC44] text-white border-white scale-105"
      }`}
    >
      {label}
    </button>
  );
};

export default CatagoryButtonCom;

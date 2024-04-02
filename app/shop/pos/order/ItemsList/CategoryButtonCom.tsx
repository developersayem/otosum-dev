"use client";
import { usePosGlobalState } from "../../../../context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";

interface Props {
  value: string;
}

const CategoryButtonCom: NextComponentType<NextPageContext, {}, Props> = ({
  value,
}) => {
  const { posCategoryData, setPosCategoryData } = usePosGlobalState();
  return (
    <button
      onClick={() => setPosCategoryData(value)}
      className={`border-2 border-[#e9e9e9] bg-transparent text-[#504c4d] hover:bg-gradient-to-r from-[#438FFD] to-[#00FC44] font-bold rounded-md hover:text-white text-nowrap  px-5 py-2 ${
        posCategoryData === value
          ? "bg-gradient-to-r from-[#438FFD] to-[#00FC44] text-white"
          : ""
      } `}
    >
      <span className="capitalize">{value}</span>
    </button>
  );
};

export default CategoryButtonCom;

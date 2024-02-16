import type { NextComponentType, NextPageContext } from "next";
import { usePosGlobalState } from "../../../context/PosGlobalStateContext";
import SelectedItemsCom from "./SelectedItemsCom/SelectedItemsCom";
import { ChevronDown } from "lucide-react";

interface Props {}

const OrderSystem: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const { posCategoryData, clearSelectedItems } = usePosGlobalState();

  return (
    <div className="bg-white rounded-lg text-black p-5">
      <div>{posCategoryData}</div>
      <SelectedItemsCom />
      <div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <h1 className="text-base font-bold">Select table to serve</h1>
          <div className="flex-none relative py-2">
            <button className="flex flex-row justify-between w-full  px-2 py-3 text-gray-700 bg-white border-2 border-[#BBBABA] rounded-md  focus:outline-none focus:border-black">
              <span className="select-none transition-all duration-300 delay-75">
                Table-1
              </span>
              <ChevronDown />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={clearSelectedItems}
            className="btn border-0 rounded-lg text-base hover:scale-105 text-white bg-gradient-to-r from-[#00FC44] to-[#438FFD]"
          >
            Clear
          </button>
          <button className="btn bg-transparent rounded-lg py-0 px-8 border-2 hover:scale-105 border-[#BBBABA] form-submit text-black text-base hover:bg-transparent">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSystem;

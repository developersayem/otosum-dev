import type { NextComponentType, NextPageContext } from "next";
import ItemsCalculationCom from "./ItemsCalculationCom";
import ItemsListCom from "./ItemsListCom";

interface Props {}

const SelectedItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className="flex flex-col justify-between border-2 border-[#e9e9e9] rounded-xl min-h-[70vh]">
      <ItemsListCom />
      <ItemsCalculationCom />
    </div>
  );
};

export default SelectedItemsCom;

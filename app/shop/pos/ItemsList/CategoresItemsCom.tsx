import type { NextComponentType, NextPageContext } from "next";
import CategoryButtonCom from "./CategoryButtonCom";

interface Props {}

const CatagoresItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className=" bg-white rounded-lg text-black grid grid-cols-4 gap-1 gap-y-3">
      <CategoryButtonCom label="Snacks" value="snacks" />
      <CategoryButtonCom label="Fruits" value="Fruits" />
      <CategoryButtonCom label="Dessert" value="Dessert" />
      <CategoryButtonCom label="Beverage" value="Beverage" />
      <CategoryButtonCom label="Soft Drink" value="Soft Drink" />
      <CategoryButtonCom label="Meat" value="Meat" />
      <CategoryButtonCom label="Stew" value="Stew" />
      <CategoryButtonCom label="Water" value="Water" />
    </div>
  );
};

export default CatagoresItemsCom;

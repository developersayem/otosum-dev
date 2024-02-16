" use client";
import { usePosGlobalState } from "@/app/context/PosGlobalStateContext";
import type { NextComponentType, NextPageContext } from "next";
import Image from "next/image";
import { useState } from "react"; // Fixed import statement

interface Props {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const FoodCardCom: NextComponentType<NextPageContext, {}, Props> = ({
  id,
  name,
  img,
  price,
  quantity,
}) => {
  const { addItem } = usePosGlobalState(); // Fixed import and hook usage
  // const [posItemData, setPosItemData] = useState<ItemObject[]>([]); // Destructured useState properly

  return (
    <button onClick={() => addItem({ name, price, quantity })} className="">
      <Image height={218} width={180} src={img ? img : ""} alt="Shoes" />
      <h1 className="text-lg font-bold p-2 text-start">{name}</h1>
    </button>
  );
};

export default FoodCardCom;
